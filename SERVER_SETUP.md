# 서버 설정 및 실행 가이드

## 🚨 현재 문제

`404 (Not Found)` 에러가 발생하는 이유:
- 서버가 실행되지 않았습니다
- 또는 서버의 `.env` 파일이 없습니다

---

## ✅ 해결 방법

### Step 1: 서버 .env 파일 생성

터미널에서 실행:

```bash
cd "/Users/niko/Documents/Eng Vibe Master v6/server"
```

`.env` 파일을 생성합니다. **실제 Gemini API 키를 입력해야 합니다:**

```bash
# 방법 1: 직접 생성
nano .env
# 또는
code .env
```

`.env` 파일 내용:
```
GEMINI_API_KEY=your-actual-gemini-api-key-here
PORT=3001
```

### Step 2: 서버 실행

**새 터미널 창**을 열고:

```bash
cd "/Users/niko/Documents/Eng Vibe Master v6/server"
npm start
```

성공하면 다음과 같은 메시지가 나타납니다:
```
🚀 VibeCheck API Server running on port 3001
📝 Health check: http://localhost:3001/health
```

### Step 3: 서버가 실행 중인지 확인

브라우저에서 다음 URL을 열어보세요:
- http://localhost:3001/health

다음과 같은 응답이 보이면 정상입니다:
```json
{"status":"ok","message":"VibeCheck API Server"}
```

### Step 4: 클라이언트 실행

**또 다른 터미널 창**에서:

```bash
cd "/Users/niko/Documents/Eng Vibe Master v6"
npm run dev
```

---

## 📋 체크리스트

- [ ] 서버 폴더에 `.env` 파일 생성
- [ ] `.env` 파일에 `GEMINI_API_KEY` 설정 (실제 API 키 입력)
- [ ] 서버 실행 (`npm start`)
- [ ] 서버가 정상 실행되는지 확인 (http://localhost:3001/health)
- [ ] 클라이언트 실행 (`npm run dev`)

---

## 🔑 Gemini API 키 얻는 방법

1. [Google AI Studio](https://aistudio.google.com/) 접속
2. "Get API Key" 클릭
3. 프로젝트 선택 또는 새 프로젝트 생성
4. API 키 생성
5. 생성된 키를 `.env` 파일에 복사

---

## ⚠️ 중요

**서버와 클라이언트는 별도의 터미널에서 실행해야 합니다!**

- 터미널 1: 서버 (`npm start` in server/)
- 터미널 2: 클라이언트 (`npm run dev` in root/)

---

## 🐛 문제 해결

### "GEMINI_API_KEY is not set" 에러
→ 서버 폴더에 `.env` 파일이 없거나 API 키가 설정되지 않았습니다.

### "Port 3001 already in use"
→ 이미 다른 프로그램이 3001 포트를 사용 중입니다.
→ `.env` 파일에서 `PORT=3002` 등으로 변경하거나
→ 다른 프로그램을 종료하세요.

### 404 에러가 계속 발생
→ 서버가 실행 중인지 확인하세요
→ 브라우저에서 http://localhost:3001/health 접속해보세요

