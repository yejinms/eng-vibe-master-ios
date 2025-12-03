# 앱 아이콘 관리 가이드

## 📱 아이콘 위치

Xcode에서 설정한 앱 아이콘은 다음 위치에 저장됩니다:

```
ios/App/App/Assets.xcassets/AppIcon.appiconset/
```

이 폴더에 있는 아이콘 파일들:
- `1024.png` - App Store용 (1024x1024)
- 다양한 크기의 아이콘들 (29x29 ~ 180x180)

## ✅ 현재 상태

**아이콘은 이미 올바른 위치에 있습니다!**

Capacitor는 웹 빌드 결과물(`dist/` 폴더)만 iOS 프로젝트로 복사하며, 
네이티브 리소스(아이콘, Assets 등)는 건드리지 않습니다.

## 🔄 동기화 방식

### Capacitor 동기화 방향

```
웹 프로젝트 (dist/)  →  iOS 프로젝트 (ios/App/App/public/)
```

**아이콘은 동기화되지 않습니다** - 네이티브 리소스이므로 iOS 프로젝트에 직접 존재합니다.

## 📋 아이콘 관리

### 1. 아이콘 파일은 그대로 유지
- Xcode에서 설정한 아이콘은 그대로 두면 됩니다
- `npx cap sync ios` 실행 시 아이콘은 변경되지 않습니다

### 2. 아이콘 변경 시
1. Xcode에서 직접 변경: `Assets.xcassets` → `AppIcon`
2. 또는 아이콘 파일을 직접 교체:
   ```bash
   # 1024x1024 아이콘만 교체
   cp your-icon.png ios/App/App/Assets.xcassets/AppIcon.appiconset/1024.png
   ```

### 3. Git 관리
아이콘 파일을 Git에 커밋하려면 (권장):

```bash
git add ios/App/App/Assets.xcassets/AppIcon.appiconset/
git commit -m "Add app icons"
```

## 🔍 확인 방법

아이콘이 올바르게 설정되었는지 확인:

```bash
# 아이콘 파일 확인
ls -lh ios/App/App/Assets.xcassets/AppIcon.appiconset/*.png

# Contents.json 확인
cat ios/App/App/Assets.xcassets/AppIcon.appiconset/Contents.json
```

## ⚠️ 중요사항

### Capacitor Sync가 아이콘을 덮어쓰나요?
**아니요!** `npx cap sync ios`는 다음만 복사합니다:
- `dist/` → `ios/App/App/public/` (웹 에셋)
- `capacitor.config.ts` → `ios/App/App/capacitor.config.json` (설정)

**다음은 변경하지 않습니다:**
- ✅ 아이콘 파일 (`Assets.xcassets/AppIcon.appiconset/`)
- ✅ 스플래시 스크린 (`Assets.xcassets/Splash.imageset/`)
- ✅ Info.plist 설정
- ✅ 네이티브 코드

### 아이콘을 변경했을 때
1. 아이콘 파일 교체
2. Xcode에서 확인 (자동으로 인식됨)
3. 빌드 및 테스트

**추가 동기화 불필요!** 아이콘은 iOS 네이티브 리소스이므로 Xcode에서 직접 관리합니다.

## 📦 백업 (선택사항)

원본 아이콘을 프로젝트 루트에 백업하고 싶다면:

```bash
# 백업 폴더 생성
mkdir -p assets/icons/ios

# 원본 아이콘 복사
cp ios/App/App/Assets.xcassets/AppIcon.appiconset/1024.png assets/icons/ios/app-icon-1024.png
```

하지만 이건 선택사항이며, 필수는 아닙니다. 
아이콘은 이미 iOS 프로젝트에 저장되어 있으므로 그대로 사용하면 됩니다.

---

**결론**: 아이콘은 이미 올바른 위치에 있습니다. 추가 동기화나 작업이 필요 없습니다! 🎉

