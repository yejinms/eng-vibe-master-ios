# iOS 네이티브 Localization 가이드

이 가이드는 Xcode에서 앱의 네이티브 부분(앱 이름, 권한 요청 메시지 등)을 다국어로 설정하는 방법을 설명합니다.

## 중요 사항

- **React UI 텍스트**: `src/locales/` 폴더의 JSON 파일에서 관리됩니다. (VS Code에서 작업)
- **네이티브 iOS 텍스트**: Xcode에서만 관리할 수 있습니다. (이 가이드에서 설명)

## Xcode에서 Localization 설정하기

### 1. 프로젝트 열기

```bash
npm run cap:ios
```

또는 Xcode에서 직접 `ios/App/VibeCheck.xcodeproj` 파일을 엽니다.

### 2. 프로젝트에 언어 추가

1. Xcode에서 프로젝트 네비게이터에서 최상위 프로젝트를 선택합니다.
2. **PROJECT** 섹션에서 프로젝트 이름을 클릭합니다.
3. **Info** 탭으로 이동합니다.
4. **Localizations** 섹션을 확인합니다.
   - 현재 **"Base - 2 Files localized"**와 **"English - 0 File localized"**가 보일 것입니다.
   - **Base**: 기본 언어 (보통 개발 언어, 한국어일 수 있음)
   - **English**: 이미 추가되어 있지만 아직 파일이 localized 되지 않음
5. **+** 버튼을 클릭하여 **Spanish (es)** 언어를 추가합니다.
6. 언어를 추가할 때 나타나는 다이얼로그에서:
   - 기존 파일들을 다국어화할지 묻습니다. 필요한 파일만 선택하거나 **"Finish"**를 클릭합니다.

### 3. 앱 이름 (Bundle Display Name) 다국어화

1. 프로젝트 네비게이터에서 `Info.plist` 파일을 엽니다.
2. `CFBundleDisplayName` 키를 찾거나 추가합니다.
3. 오른쪽의 **Localize...** 버튼을 클릭합니다.
4. 다국어화할 언어를 선택합니다 (Base, English, Spanish).
5. 각 언어별로 다른 이름을 입력합니다:
   - **Base**: VibeCheck (또는 원하는 한국어 이름)
   - **English**: VibeCheck
   - **Spanish**: VibeCheck

### 4. Info.plist 문자열 다국어화

권한 요청 메시지나 기타 Info.plist 문자열을 다국어화하려면:

1. `Info.plist`에서 다국어화할 키를 찾습니다.
2. 각 키 옆의 **Localize...** 버튼을 클릭합니다.
3. 다국어화할 언어를 선택합니다 (Base, English, Spanish).
4. 각 언어별 파일이 생성됩니다:
   - `InfoPlist.strings (Base)` (기본 언어, 한국어일 수 있음)
   - `InfoPlist.strings (English)`
   - `InfoPlist.strings (Spanish)`

5. 각 파일에 다음과 같이 추가합니다:

**InfoPlist.strings (Base)** 또는 **InfoPlist.strings (Korean)**
```
"NSCameraUsageDescription" = "사진을 촬영하기 위해 카메라 접근이 필요합니다.";
"NSPhotoLibraryUsageDescription" = "사진을 선택하기 위해 사진 라이브러리 접근이 필요합니다.";
```

**InfoPlist.strings (English)**
```
"NSCameraUsageDescription" = "Camera access is required to take photos.";
"NSPhotoLibraryUsageDescription" = "Photo library access is required to select photos.";
```

**InfoPlist.strings (Spanish)**
```
"NSCameraUsageDescription" = "Se requiere acceso a la cámara para tomar fotos.";
"NSPhotoLibraryUsageDescription" = "Se requiere acceso a la biblioteca de fotos para seleccionar fotos.";
```

### 5. LaunchScreen.storyboard 다국어화 (선택사항)

1. `Base.lproj/LaunchScreen.storyboard`를 선택합니다.
2. File Inspector에서 **Localize...** 버튼을 클릭합니다.
3. 각 언어별로 다른 스토리보드를 만들 수 있습니다.

## 자동 언어 감지

앱은 사용자의 기기 언어 설정에 따라 자동으로 언어를 선택합니다:

1. **React UI**: `i18next-browser-languagedetector`가 자동으로 감지합니다.
2. **네이티브 iOS**: 시스템 언어 설정을 따릅니다.

## 언어 변경 방법 (앱 내에서)

사용자는 앱 내에서 언어를 변경할 수 있습니다:

1. 홈 화면에서 **Settings** 버튼을 클릭합니다.
2. **Language** 섹션에서 원하는 언어를 선택합니다.
3. 변경사항이 즉시 적용됩니다.

## 테스트 방법

1. **시뮬레이터에서 테스트**:
   - 시뮬레이터 설정 > 일반 > 언어 및 지역에서 언어를 변경합니다.
   - 앱을 재시작하면 새로운 언어가 적용됩니다.

2. **실제 기기에서 테스트**:
   - 기기 설정 > 일반 > 언어 및 지역에서 언어를 변경합니다.
   - 앱을 재시작합니다.

## 주의사항

- React UI의 번역은 `src/locales/` 폴더에서 관리됩니다.
- 네이티브 iOS 문자열은 Xcode에서만 수정할 수 있습니다.
- 번역 파일을 수정한 후에는 `npm run build && npm run cap:sync`를 실행해야 합니다.

## 추가 리소스

- [Apple Localization 가이드](https://developer.apple.com/localization/)
- [i18next 문서](https://www.i18next.com/)
- [react-i18next 문서](https://react.i18next.com/)

