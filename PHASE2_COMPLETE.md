# Phase 2 완료 보고서

## ✅ 완료된 작업

### 1. 백엔드 서버 구축
- ✅ Express 서버 프로젝트 생성 (`server/` 폴더)
- ✅ Gemini API 프록시 엔드포인트 구현
  - `/api/generate-character` - 새 캐릭터 생성
  - `/api/generate-next-level` - 다음 레벨 스토리 생성
- ✅ API 키를 서버에서만 관리 (보안 향상)

### 2. 클라이언트 코드 수정
- ✅ `utils/generator.ts` - 서버 API 호출로 변경
- ✅ `utils/api.ts` - API 요청 유틸리티 생성
- ✅ API 키를 클라이언트 코드에서 완전히 제거
- ✅ 환경변수 기반 API URL 설정

### 3. 설정 파일 업데이트
- ✅ `vite.config.ts` - API 키 관련 설정 제거, base 경로 추가
- ✅ `.env.example` - 환경변수 예시 파일 생성
- ✅ `server/.env.example` - 서버 환경변수 예시 파일 생성

## 📦 생성/수정된 파일

### 새로 생성된 파일
1. `server/index.js` - Express 서버 메인 파일
2. `server/package.json` - 서버 패키지 설정
3. `server/.gitignore` - 서버 gitignore
4. `server/.env.example` - 서버 환경변수 예시
5. `utils/api.ts` - API 요청 유틸리티
6. `.env.example` - 클라이언트 환경변수 예시

### 수정된 파일
1. `utils/generator.ts` - 서버 API 호출로 완전히 재작성
2. `vite.config.ts` - API 키 설정 제거, base 경로 추가

## 🔒 보안 개선

### Before (문제점)
```typescript
// 클라이언트에서 직접 API 키 사용
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
```
- ⚠️ API 키가 클라이언트 번들에 포함
- ⚠️ 브라우저 개발자 도구에서 노출 가능
- ⚠️ 악용 시 API 비용 폭증 위험

### After (해결)
```typescript
// 클라이언트는 서버 API만 호출
const response = await apiRequest('/api/generate-character', {
  method: 'POST',
  body: JSON.stringify({ relation, theme, difficulty }),
});
```
- ✅ API 키는 서버에서만 관리
- ✅ 클라이언트 코드에 API 키 없음
- ✅ 서버에서 API 사용량 제어 가능

## 🚀 실행 방법

### 1. 서버 실행

```bash
cd server
npm install
# .env 파일 생성 후 GEMINI_API_KEY 설정
echo "GEMINI_API_KEY=your-api-key-here" > .env
npm start
```

서버는 `http://localhost:3001`에서 실행됩니다.

### 2. 클라이언트 실행

```bash
# 루트 디렉토리에서
npm run dev
```

클라이언트는 `http://localhost:3000`에서 실행됩니다.

## 📝 환경변수 설정

### 서버 (server/.env)
```
GEMINI_API_KEY=your-gemini-api-key-here
PORT=3001  # 선택사항
```

### 클라이언트 (.env 또는 .env.local)
```
VITE_API_BASE_URL=http://localhost:3001
```

프로덕션에서는 실제 서버 URL로 변경:
```
VITE_API_BASE_URL=https://api.yourdomain.com
```

## ⚠️ 중요 사항

### 개발 환경
- 서버와 클라이언트를 **별도로 실행**해야 합니다
- 서버가 먼저 실행되어 있어야 클라이언트가 정상 작동합니다

### 프로덕션 배포
- 서버를 별도로 배포해야 합니다 (Heroku, Vercel, AWS 등)
- 클라이언트에서 서버 URL을 환경변수로 설정
- iOS 앱에서는 서버 URL이 인터넷에 접근 가능해야 합니다

## 🔄 API 엔드포인트

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

**Response:**
```json
{
  "character": {
    "id": "custom-1234567890",
    "name": "Alex",
    "role": "Boss",
    "desc": "...",
    "levels": { ... }
  }
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

**Response:**
```json
{
  "levels": [ ... ]
}
```

## 📊 다음 단계

Phase 3: Capacitor 통합
- Capacitor 설치 및 설정
- iOS 플랫폼 추가
- 네이티브 기능 통합

---

**Phase 2 완료!** 🎉

이제 API 키가 안전하게 서버에서 관리됩니다.
서버와 클라이언트를 실행하여 정상 작동을 확인해보세요!

