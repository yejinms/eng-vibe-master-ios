# 프로덕션 배포 가이드

## 🚨 문제 상황

앱스토어에서 다운로드한 앱에서 "스토리 생성 실패" 또는 "서버에 연결할 수 없습니다" 에러가 발생하는 경우, **프로덕션 서버가 배포되지 않았거나 설정되지 않았기 때문**입니다.

앱스토어 버전은 프로덕션 환경이므로 로컬 개발 서버(`http://192.168.0.5:3001`)에 접근할 수 없습니다.

## ✅ 해결 방법

### 방법 1: 프로덕션 서버 배포 (권장)

프로덕션 서버를 인터넷에 배포해야 합니다. 다음 플랫폼 중 하나를 선택하세요:

#### 옵션 A: Railway (가장 간단, 추천)

1. **Railway 계정 생성**: https://railway.app
2. **프로젝트 생성**:
   - "New Project" 클릭
   - "Deploy from GitHub repo" 선택
   - `server` 폴더만 선택하거나 전체 프로젝트 선택
3. **환경 변수 설정**:
   - Railway 대시보드에서 "Variables" 탭
   - `GEMINI_API_KEY` 추가 (실제 API 키 입력)
   - `PORT` 추가 (선택사항, 기본값: 3001)
4. **배포 완료 후 URL 확인**:
   - Railway가 자동으로 URL 생성 (예: `https://your-app.railway.app`)
   - 이 URL을 프로덕션 서버 URL로 사용

#### 옵션 B: Heroku

1. **Heroku CLI 설치 및 로그인**
2. **프로젝트 생성**:
   ```bash
   cd server
   heroku create your-app-name
   ```
3. **환경 변수 설정**:
   ```bash
   heroku config:set GEMINI_API_KEY=your-api-key
   ```
4. **배포**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git push heroku main
   ```
5. **URL 확인**: `https://your-app-name.herokuapp.com`

#### 옵션 C: Vercel (서버리스 함수)

1. **Vercel 계정 생성**: https://vercel.com
2. **프로젝트 import**
3. **환경 변수 설정** (대시보드에서)
4. **배포 완료 후 URL 확인**

#### 옵션 D: AWS / Google Cloud / Azure

더 복잡하지만 더 많은 제어가 필요할 때 사용합니다.

### 방법 2: 프로덕션 빌드에 서버 URL 설정

서버를 배포한 후, 프로덕션 빌드에 서버 URL을 설정해야 합니다.

#### Step 1: `.env.production` 파일 생성

프로젝트 루트에 `.env.production` 파일 생성:

```bash
cd "/Users/niko/Documents/Eng Vibe Master v6"
touch .env.production
```

#### Step 2: 프로덕션 서버 URL 설정

`.env.production` 파일 내용:

```
VITE_API_BASE_URL=https://your-production-server-url.com
# 또는
VITE_PRODUCTION_API_URL=https://your-production-server-url.com
```

예시:
```
VITE_API_BASE_URL=https://vibemaster-api.railway.app
```

#### Step 3: 프로덕션 빌드

```bash
npm run build
```

#### Step 4: iOS 앱 빌드 및 배포

```bash
npx cap sync ios
```

Xcode에서:
1. Archive 생성
2. App Store Connect에 업로드
3. TestFlight 또는 App Store에 배포

## 📋 체크리스트

### 서버 배포
- [ ] 서버 배포 플랫폼 선택 (Railway, Heroku 등)
- [ ] 서버 배포 완료
- [ ] 서버 URL 확인 (예: `https://your-app.railway.app`)
- [ ] 서버 헬스체크 확인 (`/health` 엔드포인트)

### 클라이언트 설정
- [ ] `.env.production` 파일 생성
- [ ] 프로덕션 서버 URL 설정
- [ ] 프로덕션 빌드 실행
- [ ] iOS 앱 빌드 및 동기화
- [ ] TestFlight에서 테스트
- [ ] App Store에 배포

## 🔍 서버 배포 확인

배포된 서버가 정상 작동하는지 확인:

```bash
curl https://your-production-server-url.com/health
```

예상 응답:
```json
{"status":"ok","message":"VibeCheck API Server"}
```

## ⚠️ 중요 사항

1. **HTTPS 사용**: 프로덕션에서는 반드시 HTTPS를 사용해야 합니다.
2. **CORS 설정**: 서버에서 모든 도메인에서의 요청을 허용하도록 CORS 설정 확인
3. **환경 변수 보안**: `.env.production` 파일은 Git에 커밋하지 마세요 (`.gitignore`에 포함)
4. **API 키 보안**: Gemini API 키는 서버에서만 관리하고 클라이언트에 노출하지 마세요

## 🐛 문제 해결

### 에러: "프로덕션 서버가 설정되지 않았습니다"
→ `.env.production` 파일에 `VITE_API_BASE_URL` 또는 `VITE_PRODUCTION_API_URL` 설정

### 에러: "서버에 연결할 수 없습니다"
→ 서버가 정상적으로 배포되고 실행 중인지 확인
→ 서버 URL이 올바른지 확인
→ 인터넷 연결 확인

### 에러: CORS 에러
→ 서버의 `cors()` 설정 확인
→ 모든 도메인에서 요청 허용하도록 설정

## 📝 서버 배포 예시 (Railway)

```bash
# 1. Railway CLI 설치 (선택사항)
npm i -g @railway/cli

# 2. 로그인
railway login

# 3. 프로젝트 초기화
cd server
railway init

# 4. 환경 변수 설정
railway variables set GEMINI_API_KEY=your-api-key

# 5. 배포
railway up
```

배포 완료 후 Railway 대시보드에서 생성된 URL을 확인하세요.

---

**프로덕션 서버를 배포한 후 위의 단계를 따라 앱을 다시 빌드하고 배포하세요!**


