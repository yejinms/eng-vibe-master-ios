# Railway 서버 연결 문제 해결 가이드

## 🚨 현재 문제

502 에러와 "connection refused" 에러가 발생하는 이유:
- 서버가 Railway에서 시작되지 않았습니다
- 또는 `GEMINI_API_KEY` 환경 변수가 설정되지 않았습니다

## ✅ 해결 방법

### Step 1: Railway 대시보드에서 환경 변수 확인

1. **Railway 대시보드 접속**: https://railway.app
2. **프로젝트 선택**: `eng-vibe-master-ios-production`
3. **Variables 탭 클릭**
4. **필수 환경 변수 확인**:
   - [ ] `GEMINI_API_KEY` - **반드시 설정되어 있어야 함**
   - [ ] `PORT` - Railway가 자동으로 설정 (수동 설정 불필요)

### Step 2: GEMINI_API_KEY 설정

Railway 대시보드에서:
1. Variables 탭 클릭
2. "New Variable" 클릭
3. Name: `GEMINI_API_KEY`
4. Value: 실제 Gemini API 키 입력
5. "Add" 클릭

**⚠️ 중요**: API 키가 없으면 서버가 시작되지 않습니다!

### Step 3: 서비스 설정 확인

Railway 대시보드에서:
1. **Settings 탭** 클릭
2. **Root Directory** 확인:
   - `server` 폴더만 배포하는 경우: `server`로 설정
   - 전체 프로젝트 배포하는 경우: `.` (루트)로 설정
3. **Start Command** 확인:
   - `npm start` 또는 `node index.js`

### Step 4: 서버 재배포

1. Railway 대시보드에서 **Deployments** 탭 클릭
2. 최신 배포 옆의 **"..." 메뉴** 클릭
3. **"Redeploy"** 선택

또는:
- Git에 푸시하여 자동 재배포
- 또는 Settings에서 "Manual Deploy" 클릭

### Step 5: 로그 확인

Railway 대시보드에서:
1. **Deployments** 탭 클릭
2. 최신 배포 클릭
3. **Logs** 탭에서 확인

**정상적인 로그 예시**:
```
🚀 VibeCheck API Server running on port [PORT]
📝 Health check: http://localhost:[PORT]/health
```

**에러 로그 예시**:
```
ERROR: GEMINI_API_KEY is not set in environment variables
```
→ 환경 변수를 설정하세요

### Step 6: 서버 헬스체크

서버가 정상적으로 시작된 후:

```bash
curl https://eng-vibe-master-ios-production.up.railway.app/health
```

예상 응답:
```json
{"status":"ok","message":"VibeCheck API Server"}
```

## 📋 체크리스트

- [ ] Railway 대시보드 접속
- [ ] Variables 탭에서 `GEMINI_API_KEY` 확인
- [ ] `GEMINI_API_KEY`가 없으면 추가
- [ ] Settings에서 Root Directory 확인 (`server` 또는 `.`)
- [ ] 서버 재배포
- [ ] 로그에서 서버 시작 메시지 확인
- [ ] `/health` 엔드포인트 테스트

## 🔍 문제 진단

### 에러: "GEMINI_API_KEY is not set"
→ Railway Variables에 `GEMINI_API_KEY` 추가

### 에러: "connection refused"
→ 서버가 시작되지 않음
→ 로그 확인하여 원인 파악
→ 환경 변수 확인

### 에러: 502 Bad Gateway
→ 서버가 실행 중이지만 응답하지 않음
→ 로그 확인
→ 포트 설정 확인 (Railway가 자동으로 설정)

### 서버가 시작되지만 응답하지 않음
→ CORS 설정 확인 (이미 설정됨)
→ `/health` 엔드포인트 확인

## 🚀 Railway 배포 설정 (참고)

Railway는 자동으로 다음을 감지합니다:
- Node.js 프로젝트
- `package.json`의 `start` 스크립트
- `PORT` 환경 변수 (자동 제공)

추가 설정이 필요한 경우:
- `railway.json` 파일 생성 (이미 생성됨)
- 또는 Railway 대시보드에서 수동 설정

## 💡 빠른 해결

가장 흔한 문제는 **`GEMINI_API_KEY`가 설정되지 않은 것**입니다:

1. Railway 대시보드 > Variables
2. `GEMINI_API_KEY` 추가
3. 서버 재배포
4. 로그 확인

---

**서버가 정상 작동하면 앱에서도 정상 작동합니다!**

