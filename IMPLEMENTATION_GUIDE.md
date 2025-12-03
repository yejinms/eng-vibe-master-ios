# iOS 배포 구현 가이드

이 문서는 실제 구현 단계를 상세히 안내합니다.

## 🚀 빠른 시작

### 전제 조건
1. **macOS 필요**: iOS 빌드 및 Xcode 실행
2. **Xcode 설치** (App Store에서)
3. **Apple Developer 계정** ($99/년)
4. **Node.js 18+** 설치 확인

---

## Phase 1: 프로젝트 구조 정리

### 1.1 CDN 의존성 확인

현재 `index.html`에서 CDN으로 로드하는 항목:
- React (이미 package.json에 있음)
- Tailwind CSS (CDN)
- importmap (CDN)

### 작업 순서

#### Step 1: Tailwind CSS 설치 및 설정

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

#### Step 2: CSS 파일 생성
`src/index.css` 생성:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

#### Step 3: index.html 수정
- Tailwind CDN 제거
- importmap 제거
- CSS 파일 import 추가

---

## Phase 2: API 키 보안 - 백엔드 구축

### 옵션 A: Express 서버 (권장)

#### Step 1: 서버 프로젝트 생성

프로젝트 루트에 `server/` 폴더 생성:

```bash
mkdir server
cd server
npm init -y
npm install express cors dotenv @google/genai
```

#### Step 2: 서버 코드 작성

`server/index.js`:
```javascript
const express = require('express');
const cors = require('cors');
const { GoogleGenAI } = require('@google/genai');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

app.post('/api/generate-character', async (req, res) => {
  try {
    const { relation, theme, difficulty } = req.body;
    // 기존 generator.ts 로직을 서버로 이동
    // ...
    res.json({ character: generatedCharacter });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(3001, () => {
  console.log('Server running on port 3001');
});
```

#### Step 3: 클라이언트 수정

`utils/generator.ts`에서:
```typescript
// 기존: 직접 AI 호출
// 변경: 서버 API 호출

export const generateCharacterWithAI = async (
  relation: RelationType,
  theme: ThemeType,
  difficulty: Difficulty
): Promise<CharacterProfile> => {
  const response = await fetch('http://localhost:3001/api/generate-character', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ relation, theme, difficulty })
  });
  
  if (!response.ok) throw new Error('Failed to generate');
  const data = await response.json();
  return data.character;
};
```

#### Step 4: 환경변수 설정

`server/.env`:
```
GEMINI_API_KEY=your-api-key-here
```

**프로덕션**: 환경변수 또는 키 관리 서비스 사용

---

### 옵션 B: Firebase Functions (간단)

더 간단한 대안으로 Firebase Functions 사용 가능.

---

## Phase 3: Capacitor 통합

### Step 1: Capacitor 설치

```bash
npm install @capacitor/core @capacitor/cli
npm install @capacitor/ios
npm install @capacitor/app @capacitor/preferences @capacitor/keyboard @capacitor/splash-screen @capacitor/status-bar
```

### Step 2: Capacitor 초기화

```bash
npx cap init "Eng Vibe Master" "com.yourcompany.engvibemaster"
```

프롬프트에 응답:
- App name: Eng Vibe Master
- Package ID: com.yourcompany.engvibemaster
- Web dir: dist

### Step 3: iOS 플랫폼 추가

```bash
npm run build  # 먼저 빌드 필요
npx cap add ios
```

### Step 4: Vite 빌드 설정 확인

`vite.config.ts`에 base 경로 추가:
```typescript
export default defineConfig({
  base: './',  // 상대 경로로 설정
  // ... 기존 설정
});
```

---

## Phase 4: 코드 수정

### 4.1 localStorage → Capacitor Preferences

#### 파일 생성: `utils/storage.ts`

```typescript
import { Preferences } from '@capacitor/preferences';

export const storage = {
  async get(key: string): Promise<any> {
    const { value } = await Preferences.get({ key });
    return value ? JSON.parse(value) : null;
  },
  
  async set(key: string, value: any): Promise<void> {
    await Preferences.set({ 
      key, 
      value: JSON.stringify(value) 
    });
  },
  
  async remove(key: string): Promise<void> {
    await Preferences.remove({ key });
  }
};
```

#### App.tsx 수정

```typescript
// 기존
const saved = localStorage.getItem('vibeMasterV6');
localStorage.setItem('vibeMasterV6', JSON.stringify(gameState));

// 변경
import { storage } from './utils/storage';

const saved = await storage.get('vibeMasterV6');
await storage.set('vibeMasterV6', gameState);
```

⚠️ **주의**: async/await 필요, 컴포넌트도 수정 필요

---

### 4.2 Safe Area 처리

`index.css`에 추가:
```css
:root {
  --safe-area-inset-top: env(safe-area-inset-top);
  --safe-area-inset-bottom: env(safe-area-inset-bottom);
}

body {
  padding-top: var(--safe-area-inset-top);
  padding-bottom: var(--safe-area-inset-bottom);
}
```

---

## Phase 5: iOS 네이티브 설정

### Step 1: Xcode에서 프로젝트 열기

```bash
npx cap open ios
```

### Step 2: 아이콘 설정

1. Xcode에서 `AppIcon` 선택
2. 1024x1024 PNG 이미지 준비
3. 다양한 크기 생성 (Xcode가 자동 생성)

또는 온라인 도구 사용:
- [AppIcon.co](https://www.appicon.co)
- [IconKitchen](https://icon.kitchen)

### Step 3: Info.plist 설정

필요한 권한 추가:
- 인터넷 연결
- 저장소 접근

### Step 4: Bundle Identifier 설정

1. Xcode에서 프로젝트 선택
2. "Signing & Capabilities" 탭
3. Bundle Identifier 설정 (고유해야 함)
4. Team 선택 (Apple Developer 계정)

---

## Phase 6: 빌드 및 테스트

### Step 1: 웹 빌드

```bash
npm run build
```

### Step 2: Capacitor 동기화

```bash
npx cap sync ios
```

### Step 3: Xcode에서 실행

```bash
npx cap open ios
```

Xcode에서:
1. 시뮬레이터 선택
2. Run 버튼 클릭

### Step 4: 실제 기기 테스트

1. USB로 iPhone 연결
2. Xcode에서 기기 선택
3. Trust 기기 (iPhone에서)
4. Run

---

## Phase 7: App Store 배포

### Step 1: App Store Connect 설정

1. [App Store Connect](https://appstoreconnect.apple.com) 접속
2. "My Apps" → "+" → "New App"
3. 정보 입력:
   - 이름: Eng Vibe Master
   - 기본 언어: 한국어
   - Bundle ID: 설정한 ID
   - SKU: 고유 코드

### Step 2: 앱 정보 준비

필요한 항목:
- 앱 설명 (한글/영문)
- 키워드
- 카테고리: 교육
- 연령 등급
- 개인정보 처리방침 URL
- 지원 URL
- 마케팅 URL (선택)

### Step 3: 스크린샷

필요한 크기:
- iPhone 6.7" (iPhone 14 Pro Max): 1290 x 2796
- iPhone 6.5" (iPhone 11 Pro Max): 1242 x 2688
- iPhone 5.5": 1242 x 2208

최소 3개, 최대 10개

### Step 4: Archive 생성

Xcode에서:
1. Product → Destination → "Any iOS Device"
2. Product → Archive
3. Archive 완료 후 "Distribute App" 클릭
4. App Store Connect 선택
5. 업로드

### Step 5: 심사 제출

1. App Store Connect에서 "TestFlight"로 테스트
2. 문제 없으면 "Submit for Review"
3. 심사 대기 (보통 1-3일)

---

## 🐛 트러블슈팅

### 문제 1: 빌드 에러
**해결**: `npm run build` 먼저 실행 후 `npx cap sync`

### 문제 2: 아이콘 안 보임
**해결**: Xcode에서 Asset Catalog에서 아이콘 다시 설정

### 문제 3: API 호출 실패
**해결**: 
- Info.plist에 App Transport Security 설정
- 백엔드 URL이 올바른지 확인

### 문제 4: localStorage 작동 안 함
**해결**: Capacitor Preferences로 완전히 교체

---

## 📝 체크리스트

### 개발 완료
- [ ] Phase 1: 의존성 정리 완료
- [ ] Phase 2: API 보안 해결
- [ ] Phase 3: Capacitor 설치 및 설정
- [ ] Phase 4: 코드 수정 (localStorage 등)
- [ ] Phase 5: iOS 네이티브 설정
- [ ] Phase 6: 테스트 완료

### 배포 준비
- [ ] 앱 아이콘 준비
- [ ] 스크린샷 3-10개 준비
- [ ] 앱 설명 작성
- [ ] 개인정보 처리방침 작성
- [ ] Apple Developer 계정 활성화
- [ ] Bundle ID 등록
- [ ] Archive 생성 및 업로드
- [ ] TestFlight 테스트
- [ ] 심사 제출

---

다음 단계: Phase 1부터 시작할까요?

