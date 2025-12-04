# Railway 서버 설정 체크리스트

## ✅ 완료된 작업

1. ✅ Railway 프로젝트 생성
2. ✅ 서버 URL: `https://eng-vibe-master-ios-production.up.railway.app`
3. ✅ `.env.production` 파일에 서버 URL 설정
4. ✅ 프로덕션 빌드 완료

## 🔍 Railway 서버 확인 사항

### 1. 서버가 실행 중인지 확인

Railway 대시보드에서:
- [ ] 서버가 "Active" 상태인지 확인
- [ ] 로그에서 에러가 없는지 확인
- [ ] 포트가 올바르게 설정되었는지 확인 (기본값: 3001)

### 2. 환경 변수 확인

Railway 대시보드 > Variables 탭에서:
- [ ] `GEMINI_API_KEY` 설정되어 있는지 확인
- [ ] `PORT` 설정 (선택사항, 기본값: 3001)

### 3. 서버 헬스체크

터미널에서:
```bash
curl https://eng-vibe-master-ios-production.up.railway.app/health
```

예상 응답:
```json
{"status":"ok","message":"VibeCheck API Server"}
```

만약 502 에러가 나온다면:
- Railway에서 서버가 아직 배포 중일 수 있습니다 (몇 분 기다리기)
- 서버 로그를 확인하여 에러가 있는지 확인
- `GEMINI_API_KEY`가 올바르게 설정되었는지 확인

### 4. 서버 로그 확인

Railway 대시보드 > Deployments > 최신 배포 > Logs에서:
- [ ] 서버가 정상적으로 시작되었는지 확인
- [ ] "VibeCheck API Server running on port" 메시지 확인
- [ ] 에러 메시지가 없는지 확인

## 🚀 다음 단계

### 서버가 정상 작동하는 경우:

1. **iOS 앱 빌드 및 동기화**:
   ```bash
   cd "/Users/niko/Documents/Eng Vibe Master v6"
   export LANG=en_US.UTF-8
   npx cap sync ios
   ```

2. **Xcode에서 빌드**:
   ```bash
   npx cap open ios
   ```
   - Archive 생성
   - App Store Connect에 업로드
   - TestFlight 또는 App Store에 배포

### 서버가 작동하지 않는 경우:

1. **Railway 로그 확인**:
   - Railway 대시보드에서 로그 확인
   - 에러 메시지 확인

2. **일반적인 문제**:
   - `GEMINI_API_KEY`가 설정되지 않음 → Variables에 추가
   - 서버가 시작되지 않음 → 로그에서 에러 확인
   - 포트 설정 문제 → `PORT` 환경 변수 확인

3. **서버 재배포**:
   - Railway 대시보드에서 "Redeploy" 클릭
   - 또는 Git에 푸시하여 자동 배포

## 📝 참고사항

- Railway는 무료 플랜에서도 사용 가능하지만, 일정 시간 비활성화 후 자동으로 sleep 모드로 전환될 수 있습니다
- 첫 요청 시 서버가 깨어나는데 몇 초 걸릴 수 있습니다
- 프로덕션 환경에서는 HTTPS가 자동으로 설정됩니다

