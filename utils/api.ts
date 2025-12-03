// API Configuration
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3001';
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
      throw new Error(error.error || `HTTP error! status: ${response.status}`);
    }

    return response.json();
  } catch (error) {
    // Handle network errors
    if (error instanceof TypeError && error.message === 'Failed to fetch') {
      throw new Error('서버에 연결할 수 없습니다. 인터넷 연결과 서버 상태를 확인해주세요.');
    }
    if (error instanceof Error && error.message === 'Request timeout') {
      throw new Error('요청 시간이 초과되었습니다. 다시 시도해주세요.');
    }
    throw error;
  }
}

