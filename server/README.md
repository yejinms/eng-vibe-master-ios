# VibeCheck API Server

이 서버는 Gemini API를 안전하게 프록시하는 백엔드 서버입니다.

## 설정

1. 환경변수 파일 생성:
```bash
cp .env.example .env
```

2. `.env` 파일에 Gemini API 키 설정:
```
GEMINI_API_KEY=your-api-key-here
PORT=3001
```

3. 의존성 설치 (이미 되어있다면 생략):
```bash
npm install
```

## 실행

```bash
npm start
```

서버가 `http://localhost:3001`에서 실행됩니다.

## API 엔드포인트

### GET /health
서버 상태 확인

### POST /api/generate-character
새 캐릭터 생성

**Request:**
```json
{
  "relation": "boss",
  "theme": "romance",
  "difficulty": "beginner"
}
```

### POST /api/generate-next-level
다음 레벨 스토리 생성

**Request:**
```json
{
  "character": { ... },
  "targetDifficulty": "intermediate"
}
```

## 개발

서버 코드는 `index.js`에 있습니다.
API 키는 환경변수로 관리되며, 클라이언트에 노출되지 않습니다.

