import { Capacitor } from '@capacitor/core';

// API Configuration
// 네이티브 플랫폼에서는 localhost를 사용할 수 없으므로 실제 서버 URL 필요
function getApiBaseUrl(): string {
  // 환경 변수가 설정되어 있으면 우선 사용 (최우선)
  if (import.meta.env.VITE_API_BASE_URL) {
    return import.meta.env.VITE_API_BASE_URL;
  }
  
  // 네이티브 플랫폼인 경우
  if (Capacitor.isNativePlatform()) {
    // 프로덕션 환경 감지: 개발 모드가 아니고 환경 변수가 없는 경우
    const isProduction = !import.meta.env.DEV && !import.meta.env.VITE_API_BASE_URL;
    
    if (isProduction) {
      // 프로덕션 환경: 프로덕션 서버 URL 필요
      // ⚠️ 프로덕션 서버를 배포한 후 이 URL을 설정하세요
      const productionUrl = import.meta.env.VITE_PRODUCTION_API_URL;
      if (productionUrl) {
        return productionUrl;
      }
      // 프로덕션 서버 URL이 설정되지 않은 경우 에러
      console.error('[API Config Error] 프로덕션 서버 URL이 설정되지 않았습니다. VITE_PRODUCTION_API_URL 환경 변수를 설정하세요.');
      throw new Error('프로덕션 서버가 설정되지 않았습니다. 앱 개발자에게 문의하세요.');
    }
    
    // 개발 환경: 로컬 네트워크의 서버 IP 주소 사용
    const devServerIp = import.meta.env.VITE_DEV_SERVER_IP || '192.168.0.5';
    return `http://${devServerIp}:3001`;
  }
  
  // 웹 환경에서는 localhost 사용
  return 'http://localhost:3001';
}

const API_BASE_URL = getApiBaseUrl();
const REQUEST_TIMEOUT = 60000; // 60 seconds for AI generation

// Timeout wrapper for fetch requests
function fetchWithTimeout(url: string, options: RequestInit, timeout: number): Promise<Response> {
  return Promise.race([
    fetch(url, options),
    new Promise<Response>((_, reject) =>
      setTimeout(() => reject(new Error('Request timeout')), timeout)
    )
  ]);
}

export async function apiRequest<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T> {
  const url = `${API_BASE_URL}${endpoint}`;
  
  // 디버깅을 위한 로그 (개발 환경에서만)
  if (import.meta.env.DEV) {
    console.log('[API Request]', url, options);
  }
  
  try {
    const response = await fetchWithTimeout(url, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
    }, REQUEST_TIMEOUT);

    if (!response.ok) {
      const error = await response.json().catch(() => ({ 
        error: response.status === 404 
          ? '서버에 연결할 수 없습니다. 서버가 실행 중인지 확인해주세요.' 
          : '네트워크 오류가 발생했습니다.'
      }));
      const errorMessage = error.error || `HTTP error! status: ${response.status}`;
      console.error('[API Error]', response.status, errorMessage, url);
      throw new Error(errorMessage);
    }

    return response.json();
  } catch (error) {
    // Handle network errors
    if (error instanceof TypeError && error.message === 'Failed to fetch') {
      const isProduction = !import.meta.env.DEV && Capacitor.isNativePlatform();
      let errorMsg: string;
      
      if (isProduction) {
        errorMsg = '서버에 연결할 수 없습니다.\n\n인터넷 연결을 확인하고 잠시 후 다시 시도해주세요.\n\n문제가 계속되면 앱을 다시 시작하거나 앱 개발자에게 문의하세요.';
      } else {
        errorMsg = Capacitor.isNativePlatform() 
          ? `서버에 연결할 수 없습니다. (URL: ${url})\n인터넷 연결과 서버 상태를 확인해주세요.\n\n개발 환경에서는 서버 IP 주소가 필요합니다.`
          : '서버에 연결할 수 없습니다. 인터넷 연결과 서버 상태를 확인해주세요.';
      }
      console.error('[API Network Error]', errorMsg, url);
      throw new Error(errorMsg);
    }
    if (error instanceof Error && error.message === 'Request timeout') {
      console.error('[API Timeout]', url);
      throw new Error('요청 시간이 초과되었습니다. 다시 시도해주세요.');
    }
    console.error('[API Unknown Error]', error, url);
    throw error;
  }
}

