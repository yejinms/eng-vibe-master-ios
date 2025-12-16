# iOS 실제 기기에서 API 연결 문제 해결 가이드

## 🔍 문제 원인

실제 iOS 기기에서는 `localhost`가 기기 자체를 가리키므로, 개발 서버(`localhost:3001`)에 접근할 수 없습니다.

## ✅ 해결 방법

### 방법 1: 환경 변수로 서버 IP 설정 (권장)

1. **서버를 실행하는 컴퓨터의 로컬 IP 주소 확인**

   Mac/Linux:
   ```bash
   ifconfig | grep "inet " | grep -v 127.0.0.1
   ```
   
   Windows:
   ```bash
   ipconfig
   ```
   
   예시 결과: `192.168.1.100` (이 IP를 사용)

2. **프로젝트 루트에 `.env.local` 파일 생성**

   ```bash
   # 프로젝트 루트 디렉토리에서
   touch .env.local
   ```

3. **`.env.local` 파일에 서버 IP 설정**

   ```
   VITE_API_BASE_URL=http://192.168.1.100:3001
   # 또는 개발 서버 IP만 설정하려면:
   VITE_DEV_SERVER_IP=192.168.1.100
   ```
   
   ⚠️ **중요**: `192.168.1.100`을 실제 서버 컴퓨터의 IP 주소로 변경하세요!

4. **앱 다시 빌드 및 동기화**

   ```bash
   npm run build
   npx cap sync ios
   ```

5. **Xcode에서 다시 빌드 및 실행**

### 방법 2: 코드에서 직접 IP 주소 설정

`utils/api.ts` 파일의 17번째 줄을 수정:

```typescript
const devServerIp = import.meta.env.VITE_DEV_SERVER_IP || '192.168.1.100';
```

`'192.168.1.100'`을 실제 서버 IP 주소로 변경하세요.

## 🔧 추가 확인 사항

### 1. 서버가 로컬 네트워크에서 접근 가능한지 확인

서버를 실행하는 컴퓨터에서:

```bash
# 서버가 0.0.0.0 또는 실제 IP로 바인딩되어 있는지 확인
# server/index.js에서 확인
```

서버가 `localhost`에만 바인딩되어 있다면, 모든 네트워크 인터페이스에서 접근 가능하도록 변경:

```javascript
app.listen(3001, '0.0.0.0', () => {
  console.log('🚀 VibeCheck API Server running on port 3001');
});
```

### 2. 방화벽 확인

서버 컴퓨터의 방화벽이 포트 3001을 차단하지 않는지 확인:

**Mac:**
```bash
# 방화벽 설정 확인
sudo /usr/libexec/ApplicationFirewall/socketfilterfw --getglobalstate
```

**방화벽이 활성화되어 있다면:**
- 시스템 설정 > 네트워크 > 방화벽 > 옵션
- Node.js 또는 터미널에 대한 인바운드 연결 허용

### 3. 같은 Wi-Fi 네트워크에 연결

- 서버를 실행하는 컴퓨터와 iOS 기기가 **같은 Wi-Fi 네트워크**에 연결되어 있어야 합니다.

### 4. 서버 실행 확인

서버가 실행 중인지 확인:

```bash
# 서버 컴퓨터에서
cd server
npm start
```

다른 기기에서 테스트:

```bash
# 같은 네트워크의 다른 컴퓨터나 기기에서
curl http://192.168.1.100:3001/health
```

정상 응답:
```json
{"status":"ok","message":"VibeCheck API Server"}
```

## 🚀 프로덕션 배포 시

프로덕션에서는 실제 서버 도메인을 사용:

```env
# .env.production
VITE_API_BASE_URL=https://api.yourdomain.com
```

## 📝 변경 사항 요약

1. ✅ `utils/api.ts`: 네이티브 플랫폼 감지 및 실제 서버 URL 사용
2. ✅ `Info.plist`: HTTP 연결 허용 및 네트워크 권한 추가
3. ✅ `App.tsx`: 더 자세한 에러 메시지 표시

## 🐛 디버깅 팁

1. **Xcode 콘솔 확인**: 앱 실행 중 Xcode 콘솔에서 `[API Request]` 로그 확인
2. **에러 메시지 확인**: 앱에서 표시되는 에러 메시지에 URL이 포함되어 있음
3. **서버 로그 확인**: 서버가 요청을 받고 있는지 확인

## ⚠️ 주의사항

- 개발 환경에서만 HTTP 사용 (프로덕션에서는 HTTPS 권장)
- 서버 IP 주소는 네트워크 변경 시 업데이트 필요
- `.env.local` 파일은 `.gitignore`에 포함되어 있어 Git에 커밋되지 않음


