# iOS 앱스토어 배포 계획

## 📋 현재 상황 분석

### 현재 프로젝트 구조
- **프레임워크**: React 19.2.0 + Vite 6.2.0
- **스타일링**: Tailwind CSS (CDN)
- **주요 기능**: 
  - AI 기반 커스텀 캐릭터 생성 (Gemini API)
  - 영어 학습 대화형 게임
  - localStorage 기반 데이터 저장
- **의존성 문제점**:
  - CDN에서 React 등 로드 (importmap 사용)
  - API 키가 클라이언트 코드에 노출될 위험
  - 웹 전용 최적화

---

## 🎯 iOS 배포 전략

### 선택한 방법: **Capacitor**
- ✅ 기존 React 코드 재사용 가능 (거의 수정 없음)
- ✅ 웹과 iOS/Android 동시 지원
- ✅ 네이티브 기능 쉽게 통합
- ✅ 업데이트 시 앱스토어 재심사 불필요 (일부 기능)

### 대안 비교
- ❌ React Native: 전체 재작성 필요
- ❌ Expo: 더 복잡한 설정, 제약사항 많음
- ✅ Capacitor: 최소한의 변경으로 네이티브 앱화 가능

---

## 📝 단계별 작업 계획

### Phase 1: 프로젝트 설정 및 의존성 정리

#### 1.1 CDN 의존성 제거
**문제점**: `index.html`에서 CDN으로 React 등 로드
```html
<script type="importmap">
{
  "imports": {
    "react/": "https://aistudiocdn.com/react@^19.2.0/",
    ...
  }
}
</script>
```

**해결방안**:
- 모든 의존성을 npm 패키지로 설치
- Vite 번들링으로 통합
- 오프라인 지원 가능

**작업 항목**:
- [ ] package.json에 모든 의존성 확인
- [ ] index.html에서 importmap 제거
- [ ] npm install로 의존성 설치 확인

#### 1.2 Tailwind CSS 설정 개선
**문제점**: CDN으로 Tailwind 로드
```html
<script src="https://cdn.tailwindcss.com"></script>
```

**해결방안**:
- Tailwind CLI 또는 PostCSS 플러그인 사용
- 빌드 시 CSS 번들링

**작업 항목**:
- [ ] @tailwindcss/postcss 플러그인 설치
- [ ] tailwind.config.js 생성
- [ ] CSS 파일 생성 및 import

---

### Phase 2: API 키 보안 문제 해결 ⚠️ 중요

#### 2.1 현재 문제
```typescript
// utils/generator.ts
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
```
- 클라이언트 코드에 API 키가 노출됨
- iOS 앱에서도 같은 문제 발생
- 악용 위험: API 비용 폭증

#### 2.2 해결 방안 (3가지 옵션)

**옵션 1: 백엔드 프록시 서버 (권장)**
- Node.js/Express 서버 구축
- API 키는 서버에서만 관리
- 클라이언트는 서버 API만 호출

**장점**:
- ✅ 보안성 최고
- ✅ API 사용량 제어 가능
- ✅ 로깅 및 모니터링 가능

**작업**:
- [ ] Express 서버 구축
- [ ] `/api/generate-character` 엔드포인트 생성
- [ ] 클라이언트 코드에서 서버 API 호출로 변경

**옵션 2: Capacitor 환경변수 플러그인**
- @capacitor/preferences 사용
- 빌드 시 API 키 주입

**단점**:
- ⚠️ 여전히 클라이언트 노출
- ⚠️ 보안 권장사항 위배

**옵션 3: 서버리스 함수 (Firebase Functions 등)**
- 간단한 서버리스 함수 생성
- 비용 효율적

---

### Phase 3: Capacitor 통합

#### 3.1 Capacitor 설치
```bash
npm install @capacitor/core @capacitor/cli
npm install @capacitor/ios
npx cap init
npx cap add ios
```

#### 3.2 필수 Capacitor 플러그인
- [ ] @capacitor/app - 앱 생명주기 관리
- [ ] @capacitor/preferences - 데이터 저장 (localStorage 대체)
- [ ] @capacitor/keyboard - 키보드 관리
- [ ] @capacitor/status-bar - 상태바 제어
- [ ] @capacitor/splash-screen - 스플래시 스크린

#### 3.3 빌드 설정
- Vite 빌드 출력을 `dist` 폴더로
- Capacitor가 `dist`를 iOS 앱에 로드

---

### Phase 4: iOS 네이티브 설정

#### 4.1 Info.plist 설정
- 앱 이름, 번들 ID
- 권한 요청 (인터넷, 저장소 등)
- 지원 iOS 버전 (최소 iOS 13+)

#### 4.2 아이콘 및 스플래시 스크린
- [ ] 앱 아이콘 생성 (1024x1024, 다양한 크기)
- [ ] 스플래시 스크린 이미지
- [ ] Asset Catalog 설정

#### 4.3 빌드 설정
- Xcode 프로젝트 설정
- Code Signing 설정
- 앱스토어 커넥트 연동

---

### Phase 5: 코드 수정 사항

#### 5.1 localStorage → Capacitor Preferences
```typescript
// 현재
localStorage.setItem('vibeMasterV6', JSON.stringify(gameState));

// 변경 후
import { Preferences } from '@capacitor/preferences';
await Preferences.set({ key: 'vibeMasterV6', value: JSON.stringify(gameState) });
```

#### 5.2 네트워크 상태 확인
- 오프라인 상태 처리
- API 호출 실패 시 사용자 안내

#### 5.3 Safe Area 처리
- iPhone 노치 대응
- 하단 홈 인디케이터 대응

---

### Phase 6: 테스트 및 최적화

#### 6.1 디바이스 테스트
- [ ] 실제 iOS 기기에서 테스트
- [ ] 다양한 화면 크기 대응
- [ ] 성능 테스트

#### 6.2 최적화
- [ ] 이미지 최적화
- [ ] 코드 스플리팅
- [ ] 로딩 성능 개선

#### 6.3 App Store 준비
- [ ] 앱 설명 작성
- [ ] 스크린샷 준비 (다양한 디바이스)
- [ ] 개인정보 처리방침 작성
- [ ] 연령 등급 설정

---

## 🚨 주요 이슈 및 해결책

### 1. API 키 보안 ⚠️
**문제**: Gemini API 키가 클라이언트에 노출
**해결**: 백엔드 프록시 서버 구축 (Phase 2.2 옵션 1)

### 2. CDN 의존성
**문제**: 오프라인 작동 불가, 네트워크 의존
**해결**: 모든 의존성 npm 설치 (Phase 1.1)

### 3. Tailwind CDN
**문제**: 빌드 시 Tailwind 포함 필요
**해결**: Tailwind PostCSS 플러그인 사용 (Phase 1.2)

### 4. localStorage 제한
**문제**: iOS Safari에서 용량 제한, 데이터 손실 위험
**해결**: Capacitor Preferences 사용 (Phase 5.1)

---

## 📦 필요한 추가 패키지

```json
{
  "dependencies": {
    "@capacitor/app": "^6.0.0",
    "@capacitor/core": "^6.0.0",
    "@capacitor/ios": "^6.0.0",
    "@capacitor/keyboard": "^6.0.0",
    "@capacitor/preferences": "^6.0.0",
    "@capacitor/splash-screen": "^6.0.0",
    "@capacitor/status-bar": "^6.0.0"
  },
  "devDependencies": {
    "@capacitor/cli": "^6.0.0",
    "@tailwindcss/postcss": "^4.0.0",
    "tailwindcss": "^4.0.0"
  }
}
```

---

## ⏱️ 예상 작업 시간

- **Phase 1**: 2-3시간 (의존성 정리)
- **Phase 2**: 4-6시간 (API 보안 - 백엔드 구축)
- **Phase 3**: 2-3시간 (Capacitor 설정)
- **Phase 4**: 3-4시간 (iOS 설정)
- **Phase 5**: 3-4시간 (코드 수정)
- **Phase 6**: 4-6시간 (테스트 및 최적화)

**총 예상 시간**: 18-26시간 (2-3일)

---

## 🎯 최종 체크리스트

### 배포 전 필수 확인
- [ ] API 키 보안 문제 해결
- [ ] 모든 의존성 번들링 완료
- [ ] iOS 기기에서 정상 작동 확인
- [ ] 앱 아이콘 및 스플래시 스크린 준비
- [ ] App Store Connect 계정 준비
- [ ] 앱 설명 및 스크린샷 준비
- [ ] 개인정보 처리방침 작성
- [ ] 테스트 플라이트 테스트 완료

---

## 📚 참고 자료

- [Capacitor 공식 문서](https://capacitorjs.com/docs)
- [iOS 배포 가이드](https://capacitorjs.com/docs/ios)
- [App Store Connect 가이드](https://developer.apple.com/app-store-connect/)
- [Tailwind CSS 빌드 설정](https://tailwindcss.com/docs/installation)

---

## 다음 단계

이 계획서를 바탕으로 단계별로 구현을 시작하겠습니다.
먼저 Phase 1부터 시작할까요?

