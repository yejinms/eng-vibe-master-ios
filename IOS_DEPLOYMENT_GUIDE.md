# iOS 앱스토어 배포 최종 가이드

## ✅ 완료된 작업

### Phase 1-3: 기본 설정
- ✅ CDN 의존성 제거 및 번들링
- ✅ API 키 보안 (백엔드 서버)
- ✅ Capacitor 통합
- ✅ Safe Area 처리
- ✅ localStorage → Capacitor Preferences

### Phase 4: 네트워크 및 설정
- ✅ 네트워크 오류 처리 개선
- ✅ API 타임아웃 처리
- ✅ iOS Info.plist 설정

---

## 📱 iOS 앱 빌드 및 배포

### 1단계: Xcode에서 프로젝트 열기

```bash
npm run cap:ios
```

또는

```bash
npx cap open ios
```

### 2단계: 프로젝트 설정

#### Bundle Identifier 설정
1. Xcode에서 프로젝트 선택 (왼쪽 네비게이터)
2. "Signing & Capabilities" 탭 선택
3. Bundle Identifier 확인: `com.engvibemaster.app`
4. Team 선택 (Apple Developer 계정)

#### 앱 정보 설정
1. "General" 탭에서:
   - Display Name: `Eng Vibe Master`
   - Version: `1.0.0` (또는 원하는 버전)
   - Build: `1` (증가시키면서 배포)

#### 최소 iOS 버전
- Deployment Target: iOS 13.0 이상 권장

### 3단계: 아이콘 설정

#### 방법 1: Xcode Asset Catalog 사용
1. Xcode에서 `Assets.xcassets` → `AppIcon` 선택
2. 1024x1024 PNG 이미지 준비
3. Xcode가 자동으로 다양한 크기 생성

#### 방법 2: 온라인 도구 사용
- [AppIcon.co](https://www.appicon.co) - 무료 아이콘 생성기
- [IconKitchen](https://icon.kitchen) - Google Material Design 아이콘 생성

**아이콘 요구사항:**
- 1024x1024 PNG
- 투명도 없음 (Alpha 채널 제거)
- 둥근 모서리 자동 적용됨

### 4단계: 스플래시 스크린

Capacitor가 자동으로 생성하지만, 커스터마이징 가능:
- `ios/App/App/Assets.xcassets/LaunchImage.imageset` 폴더에 이미지 추가

### 5단계: 테스트

#### 시뮬레이터 테스트
1. 상단에서 시뮬레이터 선택 (예: iPhone 15 Pro)
2. Run 버튼 클릭 (⌘R)
3. 앱 정상 작동 확인

#### 실제 기기 테스트
1. USB로 iPhone 연결
2. Xcode에서 기기 선택
3. iPhone에서 "Trust This Computer" 확인
4. Run 버튼 클릭
5. 기기에서 "Developer Mode" 활성화 (필요 시)

---

## 🚀 App Store 배포

### 전제 조건

1. **Apple Developer 계정** ($99/년)
   - [Apple Developer Program](https://developer.apple.com/programs/) 가입

2. **App Store Connect 설정**
   - [App Store Connect](https://appstoreconnect.apple.com) 접속
   - "My Apps" → "+" → "New App"
   - 정보 입력:
     - 이름: Eng Vibe Master
     - 기본 언어: 한국어
     - Bundle ID: `com.engvibemaster.app`
     - SKU: `eng-vibe-master-v1`

### 1단계: Archive 생성

1. Xcode에서:
   - Product → Destination → "Any iOS Device"
   - Product → Archive
2. Archive 완료 후 "Distribute App" 클릭
3. "App Store Connect" 선택
4. "Upload" 선택
5. 코드 서명 설정 확인
6. 업로드 완료 대기

### 2단계: App Store Connect 설정

#### 앱 정보
- **이름**: Eng Vibe Master
- **부제목**: (선택사항)
- **카테고리**: 교육 (Primary)
- **연령 등급**: 4+

#### 설명 작성

**한국어 설명 예시:**
```
Eng Vibe Master는 스토리 기반의 영어 학습 게임입니다.

🎯 주요 기능:
• 실제 상황에서 사용하는 자연스러운 영어 표현 학습
• AI 기반 맞춤형 스토리 생성
• 초급부터 고급까지 단계별 학습
• 다양한 캐릭터와 상황을 통한 실전 연습

📚 학습 방법:
각 챕터마다 대화 상황이 주어지고, 
상황에 맞는 올바른 영어 표현을 선택합니다.
틀리면 친절한 설명과 함께 올바른 표현을 배울 수 있습니다.
```

#### 키워드
```
영어학습,영어회화,영어공부,영어게임,영어교육,English Learning,English Conversation
```

#### 지원 URL
- 개인정보 처리방침 URL
- 지원 페이지 URL

### 3단계: 스크린샷 준비

필요한 크기:
- **iPhone 6.7"** (iPhone 14 Pro Max): 1290 x 2796
- **iPhone 6.5"** (iPhone 11 Pro Max): 1242 x 2688
- **iPhone 5.5"**: 1242 x 2208

**최소 3개, 최대 10개**

스크린샷 생성 방법:
1. 시뮬레이터에서 앱 실행
2. 시뮬레이터 → File → New Screen Recording
3. 또는 실제 기기에서 스크린샷 촬영

### 4단계: 개인정보 처리방침

필수 항목:
- 수집하는 데이터
- 데이터 사용 목적
- 데이터 보관 기간
- 사용자 권리

**예시 페이지 생성 필요:**
- GitHub Pages
- 웹사이트
- 또는 간단한 HTML 페이지

### 5단계: TestFlight 배포

1. Archive 업로드 후 TestFlight에서 확인
2. "Internal Testing" 또는 "External Testing" 설정
3. 테스터 추가
4. 빌드 테스트

### 6단계: 앱 심사 제출

1. App Store Connect에서 모든 정보 확인
2. "Submit for Review" 클릭
3. 심사 질문 답변
4. 제출 완료

**심사 기간**: 보통 1-3일

---

## 🔧 배포 체크리스트

### 개발 완료
- [x] CDN 의존성 제거
- [x] API 키 보안 해결
- [x] Capacitor 통합
- [x] Safe Area 처리
- [x] 데이터 저장소 개선
- [x] 네트워크 오류 처리

### 배포 전 확인
- [ ] 앱 아이콘 준비 (1024x1024)
- [ ] 스크린샷 3-10개 준비
- [ ] 앱 설명 작성 (한글/영문)
- [ ] 키워드 설정
- [ ] 개인정보 처리방침 작성
- [ ] 지원 URL 설정
- [ ] Apple Developer 계정 활성화
- [ ] Bundle ID 등록
- [ ] Code Signing 설정

### 테스트
- [ ] 시뮬레이터에서 테스트
- [ ] 실제 기기에서 테스트
- [ ] 다양한 화면 크기 테스트
- [ ] 네트워크 오류 상황 테스트
- [ ] 데이터 저장/로드 테스트

### App Store Connect
- [ ] 앱 생성
- [ ] 앱 정보 입력
- [ ] 스크린샷 업로드
- [ ] 개인정보 처리방침 URL 추가
- [ ] Archive 업로드
- [ ] TestFlight 테스트
- [ ] 심사 제출

---

## 📝 중요한 설정 파일

### capacitor.config.ts
```typescript
{
  appId: 'com.engvibemaster.app',
  appName: 'Eng Vibe Master',
  webDir: 'dist'
}
```

### Info.plist 주요 설정
- `CFBundleDisplayName`: Eng Vibe Master
- `NSAppTransportSecurity`: 인터넷 연결 허용
- `UIStatusBarStyle`: 상태바 스타일

---

## 🎯 다음 단계

1. **아이콘 및 스크린샷 준비**
   - 앱 아이콘 디자인
   - 주요 화면 스크린샷 촬영

2. **App Store Connect 설정**
   - 앱 정보 입력
   - 설명 및 키워드 작성

3. **개인정보 처리방침 작성**
   - 웹 페이지 또는 문서 생성

4. **최종 테스트**
   - TestFlight 배포
   - 테스터 피드백 수집

5. **심사 제출**
   - 모든 정보 확인
   - Submit for Review

---

## 🐛 문제 해결

### 서버 연결 문제
- 개발: `http://localhost:3001`
- 프로덕션: 실제 서버 URL 필요
- Info.plist에 도메인 허용 설정

### 빌드 에러
- Xcode Clean Build Folder (⌘ShiftK)
- `pod install` 재실행
- `npm run cap:sync:ios` 재실행

### 서명 에러
- Apple Developer 계정 확인
- Team 설정 확인
- Bundle Identifier 중복 확인

---

## 📚 참고 자료

- [Apple Developer Documentation](https://developer.apple.com/documentation/)
- [App Store Review Guidelines](https://developer.apple.com/app-store/review/guidelines/)
- [Capacitor iOS Guide](https://capacitorjs.com/docs/ios)

---

**배포 준비 완료!** 🎉

이제 아이콘과 스크린샷만 준비하면 App Store에 배포할 수 있습니다!

