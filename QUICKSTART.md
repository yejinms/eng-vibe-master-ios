# 빠른 시작 가이드

## 문제 해결: 404 에러

`POST http://localhost:3001/api/generate-character 404 (Not Found)` 에러가 발생하면:

1. **서버가 실행되지 않았습니다**
2. **서버의 .env 파일이 없거나 API 키가 설정되지 않았습니다**

---

## 서버 설정 및 실행

### 1단계: 서버 .env 파일 생성

```bash
cd server
```

`.env` 파일을 생성하고 Gemini API 키를 설정합니다:

```bash
# macOS/Linux
echo "GEMINI_API_KEY=여기에_실제_API_키_입력" > .env

# 또는 에디터로 직접 생성
nano .env
# 또는
code .env
```

`.env` 파일 내용:
```
GEMINI_API_KEY=your-actual-api-key-here
PORT=3001
```

### 2단계: 서버 실행

새 터미널 창을 열고:

```bash
cd "/Users/niko/Documents/Eng Vibe Master v6/server"
npm start
```

정상적으로 실행되면 다음과 같은 메시지가 나타납니다:
```
🚀 VibeCheck API Server running on port 3001
📝 Health check: http://localhost:3001/health
```

### 3단계: 클라이언트 실행

**다른 터미널 창**을 열고:

```bash
cd "/Users/niko/Documents/Eng Vibe Master v6"
npm run dev
```

### 4단계: 테스트

브라우저에서:
- 클라이언트: http://localhost:3000
- 서버 헬스체크: http://localhost:3001/health

서버 헬스체크에서 `{"status":"ok","message":"VibeCheck API Server"}` 응답이 나오면 정상입니다.

---

## 두 개의 터미널 필요

앱을 실행하려면 **두 개의 터미널**이 필요합니다:

### 터미널 1: 서버
```bash
cd "/Users/niko/Documents/Eng Vibe Master v6/server"
npm start
```

### 터미널 2: 클라이언트
```bash
cd "/Users/niko/Documents/Eng Vibe Master v6"
npm run dev
```

---

## 문제 해결

### 에러: "GEMINI_API_KEY is not set"
→ 서버 폴더에 `.env` 파일을 생성하고 API 키를 설정하세요.

### 에러: "Cannot find module"
→ 서버 폴더에서 `npm install`을 실행하세요.

### 에러: "Port 3001 already in use"
→ 다른 프로그램이 3001 포트를 사용 중입니다. 포트를 변경하거나 해당 프로그램을 종료하세요.

### 404 에러
→ 서버가 실행 중인지 확인하세요. http://localhost:3001/health 에 접속해서 확인할 수 있습니다.

---

## Gemini API 키 얻는 방법

1. [Google AI Studio](https://aistudio.google.com/) 접속
2. "Get API Key" 클릭
3. API 키 생성
4. `.env` 파일에 복사

---

## 한 번에 실행하기 (선택사항)

루트 디렉토리에서:

```bash
# 서버 시작 (백그라운드)
cd server && npm start &

# 클라이언트 시작
cd .. && npm run dev
```

또는 package.json에 스크립트를 추가할 수도 있습니다.

