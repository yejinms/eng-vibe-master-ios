# Railway 서버 연결 문제 - 중요 체크리스트

## 🚨 현재 상태

여전히 "connection refused" 에러가 발생합니다. 다음을 **반드시 확인**하세요:

## ✅ 필수 확인 사항 (순서대로)

### 1. Railway Root Directory 설정 ⚠️ 가장 중요!

Railway 대시보드에서:
1. 프로젝트 선택
2. **Settings** 탭 클릭
3. **Root Directory** 확인:
   - ✅ 올바른 설정: `server`
   - ❌ 잘못된 설정: `.` (루트) 또는 비어있음

**Root Directory가 `server`로 설정되어 있지 않으면 서버가 시작되지 않습니다!**

### 2. GEMINI_API_KEY 환경 변수 확인

Railway 대시보드에서:
1. **Variables** 탭 클릭
2. `GEMINI_API_KEY`가 있는지 확인
3. 없으면 추가:
   - Name: `GEMINI_API_KEY`
   - Value: 실제 Gemini API 키

**API 키가 없으면 서버가 즉시 종료됩니다!**

### 3. 서버 로그 확인

Railway 대시보드에서:
1. **Deployments** 탭 클릭
2. 최신 배포 클릭
3. **Logs** 탭 확인

**정상적인 로그**:
```
🚀 VibeCheck API Server running on port [PORT]
📝 Health check: http://localhost:[PORT]/health
```

**에러 로그 예시**:
```
ERROR: GEMINI_API_KEY is not set in environment variables
```
→ Variables에 `GEMINI_API_KEY` 추가 필요

```
Cannot find module 'express'
```
→ Root Directory가 잘못 설정됨 → `server`로 변경

### 4. 서버 재배포

설정을 변경한 후:
1. **Deployments** 탭
2. 최신 배포 옆 "..." 메뉴
3. **"Redeploy"** 클릭

또는 Git에 푸시하여 자동 재배포

## 🔧 Railway 설정 요약

### Settings 탭:
- **Root Directory**: `server` ⚠️ 필수
- **Start Command**: `npm start` (기본값, 변경 불필요)

### Variables 탭:
- **GEMINI_API_KEY**: 실제 API 키 ⚠️ 필수
- **PORT**: Railway가 자동 설정 (수동 설정 불필요)

## 📝 단계별 해결 방법

### Step 1: Root Directory 확인 및 수정

1. Railway 대시보드 > Settings
2. Root Directory가 `server`인지 확인
3. 아니면 `server`로 변경
4. 저장

### Step 2: GEMINI_API_KEY 확인

1. Railway 대시보드 > Variables
2. `GEMINI_API_KEY` 확인
3. 없으면 추가:
   ```
   Name: GEMINI_API_KEY
   Value: [실제 API 키]
   ```

### Step 3: 재배포

1. Deployments > 최신 배포 > "..." > Redeploy
2. 로그 확인
3. 서버 시작 메시지 확인

### Step 4: 헬스체크

```bash
curl https://eng-vibe-master-ios-production.up.railway.app/health
```

예상 응답:
```json
{"status":"ok","message":"VibeCheck API Server"}
```

## 🐛 문제 진단

### 에러: "connection refused"
**가능한 원인**:
1. Root Directory가 `server`가 아님 → Settings에서 변경
2. `GEMINI_API_KEY`가 없음 → Variables에 추가
3. 서버가 시작되지 않음 → 로그 확인

### 에러: "Cannot find module"
**원인**: Root Directory가 잘못 설정됨
**해결**: Settings에서 Root Directory를 `server`로 변경

### 에러: "GEMINI_API_KEY is not set"
**원인**: 환경 변수가 설정되지 않음
**해결**: Variables에 `GEMINI_API_KEY` 추가

## 💡 빠른 체크리스트

Railway 대시보드에서 확인:
- [ ] Settings > Root Directory = `server`
- [ ] Variables > `GEMINI_API_KEY` 존재
- [ ] Deployments > 최신 배포 > Logs에 서버 시작 메시지
- [ ] `/health` 엔드포인트 응답 확인

---

**가장 흔한 문제는 Root Directory가 `server`로 설정되지 않은 것입니다!**

