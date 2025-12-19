import fs from 'node:fs';
import { fileURLToPath } from 'node:url';

const CONSTANTS_PATH = fileURLToPath(new URL('../constants.ts', import.meta.url));

/**
 * 한국어 텍스트를 더 자연스럽고 로컬하게 다듬는 함수
 */
function localizeKorean(text) {
  let result = text.trim();
  
  // 1. 격식체 → 구어체 변환
  // "당신" → "너/널" 또는 제거 (맥락에 따라)
  result = result.replace(/^당신은\s+/g, '');
  result = result.replace(/\s+당신은\s+/g, ' ');
  result = result.replace(/당신을\s+보세요/g, '널 보세요');
  result = result.replace(/당신의\s+몸이야/g, '네 몸이야');
  result = result.replace(/당신의\s+천은\s+좋습니다/g, '천은 좋아');
  result = result.replace(/당신에게\s+달려있어/g, '네게 달려있어');
  result = result.replace(/당신의\s+꿈은\s+엄청납니다/g, '꿈은 엄청나');
  result = result.replace(/당신과\s+나는\s+하나야/g, '너와 나는 하나야');
  result = result.replace(/큰\s+도움은\s+당신야/g, '큰 도움은 너야');
  result = result.replace(/나\s+당신의\s+도움을\s+좋아해/g, '도움 좋아해');
  result = result.replace(/나\s+당신을\s+기다립니다/g, '널 기다려');
  result = result.replace(/나\s+당신을\s+위한\s+시간을\s+갖고\s+있어/g, '널 위한 시간 있어');
  result = result.replace(/나\s+당신만을\s+본다/g, '너만 봐');
  result = result.replace(/내\s+행운은\s+당신야/g, '내 행운은 너야');
  result = result.replace(/나\s+모두\s+당신\s+안에\s+있어/g, '모두 네 안에 있어');
  result = result.replace(/그들은\s+당신을\s+좋아해/g, '널 좋아해');
  result = result.replace(/당신\s+말이\s+맞아요/g, '말이 맞아');
  result = result.replace(/당신은\s+최고의\s+사람야/g, '넌 최고야');
  result = result.replace(/당신은\s+이상해\s+보인다/g, '이상해 보인다');
  result = result.replace(/당신은\s+좋은\s+행동을합니다/g, '좋은 행동을 한다');
  result = result.replace(/당신은\s+매력적야/g, '매력적이야');
  result = result.replace(/당신은\s+예쁘다/g, '예뻐');
  result = result.replace(/당신은\s+슈퍼맨야/g, '슈퍼맨이야');
  result = result.replace(/당신은\s+패션\s+모델야/g, '패션 모델이야');
  result = result.replace(/당신은\s+후회할\s+것야/g, '후회할 거야');
  result = result.replace(/당신은\s+벽에\s+부딪혔습니다/g, '벽에 부딪혔어');
  result = result.replace(/당신은\s+지루합니다/g, '지루해');
  result = result.replace(/당신은\s+잘\s+할\s+수\s+있습니다/g, '잘 할 수 있어');
  result = result.replace(/당신도\s+그렇게\s+합니다/g, '너도 그렇게 해');
  result = result.replace(/당신은\s+나를\s+잡아/g, '나를 잡아');
  
  // "그것은" → "그건"
  result = result.replace(/^그것은\s+/g, '그건 ');
  result = result.replace(/\s+그것은\s+/g, ' 그건 ');
  result = result.replace(/그것은\s+당신의\s+몸야/g, '그건 네 몸이야');
  result = result.replace(/그것은\s+나의\s+적이다/g, '그건 내 적이야');
  result = result.replace(/그것은\s+비쌌다/g, '그건 비쌌어');
  result = result.replace(/그것에\s+대해\s+깊이\s+생각해보세요/g, '그건 깊이 생각해봐');
  
  // "그녀는" → "그녀가" 또는 제거
  result = result.replace(/그녀는\s+놀랄\s+것야/g, '놀랄 거야');
  result = result.replace(/그녀는\s+겁이\s+난다/g, '겁이 나');
  
  // 2. 격식체 어미 → 구어체
  result = result.replace(/합니다$/g, '해');
  result = result.replace(/합니다\./g, '해.');
  result = result.replace(/합니다\s+/g, '해 ');
  result = result.replace(/입니다$/g, '야');
  result = result.replace(/입니다\./g, '야.');
  result = result.replace(/입니다\s+/g, '야 ');
  result = result.replace(/있습니다$/g, '있어');
  result = result.replace(/있습니다\./g, '있어.');
  result = result.replace(/있습니다\s+/g, '있어 ');
  result = result.replace(/없습니다$/g, '없어');
  result = result.replace(/없습니다\./g, '없어.');
  result = result.replace(/없습니다\s+/g, '없어 ');
  
  // "~하고 있습니다" → "~하고 있어"
  result = result.replace(/하고\s+있습니다/g, '하고 있어');
  result = result.replace(/하고\s+있습니다\./g, '하고 있어.');
  
  // "~하고 있어요" → "~하고 있어"
  result = result.replace(/하고\s+있어요/g, '하고 있어');
  
  // "~하고 있습니다" → "~하고 있어?" (의문문 맥락)
  result = result.replace(/호텔은\s+자고\s+있습니다/g, '호텔이 자고 있어?');
  
  // 3. 문법 오류 수정
  // "~야" → "~야" (조사 오류 수정)
  result = result.replace(/몸야$/g, '몸이야');
  result = result.replace(/사람야$/g, '사람이야');
  result = result.replace(/것야$/g, '거야');
  result = result.replace(/꿈야$/g, '꿈이야');
  result = result.replace(/영혼야$/g, '영혼이야');
  
  // "보야" → "보여"
  result = result.replace(/보야$/g, '보여');
  result = result.replace(/보야\./g, '보여.');
  result = result.replace(/어둡게\s+보야/g, '어둡게 보여');
  
  // "~야" → "~지" (서술형)
  result = result.replace(/모래야$/g, '모래지');
  result = result.replace(/하루야$/g, '하루지');
  result = result.replace(/아니오야$/g, '아니야');
  result = result.replace(/중지는\s+아니오야/g, '중지는 아니야');
  
  // "도둑질야" → "도둑질이야"
  result = result.replace(/도둑질야$/g, '도둑질이야');
  
  // 4. 띄어쓰기 수정
  result = result.replace(/당신을보세요/g, '당신을 보세요');
  result = result.replace(/을보세요/g, '을 보세요');
  result = result.replace(/를보세요/g, '를 보세요');
  result = result.replace(/을보야/g, '을 보여');
  result = result.replace(/를보야/g, '를 보여');
  result = result.replace(/을합니다/g, '을 한다');
  result = result.replace(/를합니다/g, '를 한다');
  result = result.replace(/을보고/g, '을 보고');
  result = result.replace(/를보고/g, '를 보고');
  result = result.replace(/내리고있다/g, '내리고 있다');
  result = result.replace(/내리고있어/g, '내리고 있어');
  
  // 5. 자연스러운 표현으로 수정
  // "나 ~를 싫어한다" → "~ 싫어해"
  result = result.replace(/^나\s+간식을\s+싫어한다$/g, '간식 싫어해');
  result = result.replace(/^나\s+물을\s+싫어한다$/g, '물 싫어해');
  result = result.replace(/^나\s+친구를\s+좋아한다$/g, '친구 좋아해');
  result = result.replace(/^나\s+모든\s+것을\s+먹는다$/g, '다 먹어');
  result = result.replace(/^나\s+입이\s+크다$/g, '입이 커');
  result = result.replace(/^나\s+몸이\s+아프다$/g, '몸이 아파');
  result = result.replace(/^나\s+경험이\s+있다$/g, '경험 있어');
  result = result.replace(/^나\s+경험이\s+있습니다$/g, '경험 있어');
  result = result.replace(/^나\s+그\s+느낌을\s+알고\s+있습니다$/g, '그 느낌 알아');
  result = result.replace(/^나\s+사업을\s+잘\s+못한다$/g, '사업은 못해');
  result = result.replace(/^나\s+깊이\s+생각한다$/g, '깊이 생각해');
  result = result.replace(/^나\s+볼\s+것이다$/g, '볼게');
  result = result.replace(/^나\s+녹아\s+내리고있다$/g, '녹아 내리고 있어');
  result = result.replace(/^나\s+매우\s+늦었습니다$/g, '너무 늦었어');
  result = result.replace(/^나\s+매우\s+외로워$/g, '너무 외로워');
  result = result.replace(/^나\s+아주\s+잘\s+기다립니다$/g, '기다리는 건 잘해');
  result = result.replace(/^나\s+당신의\s+뒷모습을\s+봅니다$/g, '뒷모습 볼게');
  result = result.replace(/^나\s+당신을\s+도와줍니다$/g, '도와줄게');
  result = result.replace(/^나\s+일정을\s+비웠다$/g, '일정 비웠어');
  result = result.replace(/^나\s+파티를\s+기다린다$/g, '파티 기다려');
  result = result.replace(/^나\s+맥주를\s+쏜다$/g, '맥주 쏠게');
  
  // "설탕이 떨어지고 있습니다" → "설탕이 떨어지고 있어"
  result = result.replace(/설탕이\s+떨어지고\s+있습니다$/g, '설탕이 떨어지고 있어');
  
  // "돈을 삭감하세요" → "돈을 자르면 안 돼!"
  result = result.replace(/돈을\s+삭감하세요$/g, '돈을 자르면 안 돼!');
  
  // "네덜란드 급여는 좋습니다" → "더치페이는 좋아"
  result = result.replace(/네덜란드\s+급여는\s+좋습니다$/g, '더치페이는 좋아');
  
  // "나를 만져줘" → "만지지 마" (의미 반대)
  result = result.replace(/나를\s+만져줘$/g, '만지지 마');
  
  // "내 전화에 전화해" → "내 전화번호로 전화해"
  result = result.replace(/내\s+전화에\s+전화해$/g, '내 전화번호로 전화해');
  
  // "끝낼게요" → "끝낼게"
  result = result.replace(/끝낼게요$/g, '끝낼게');
  
  // "내 근육이 울어요" → "근육이 울어"
  result = result.replace(/내\s+근육이\s+울어요$/g, '근육이 울어');
  
  // "집에 직접 가세요" → "집에 직접 가"
  result = result.replace(/집에\s+직접\s+가세요$/g, '집에 직접 가');
  
  // "집으로 보내드립니다" → "집으로 보내줄게"
  result = result.replace(/집으로\s+보내드립니다$/g, '집으로 보내줄게');
  
  // "안전이 좋습니다" → "안전이 좋아"
  result = result.replace(/안전이\s+좋습니다$/g, '안전이 좋아');
  
  // "돈 종이는 좋은데요" → "돈 종이는 좋은데"
  result = result.replace(/돈\s+종이는\s+좋은데요$/g, '돈 종이는 좋은데');
  
  // "초콜릿을 하세요" → "초콜릿을 해"
  result = result.replace(/초콜릿을\s+하세요$/g, '초콜릿을 해');
  
  // "밖으로 나가세요" → "밖으로 나가"
  result = result.replace(/밖으로\s+나가세요$/g, '밖으로 나가');
  
  // "빛나게 하세요" → "빛나게 해"
  result = result.replace(/빛나게\s+하세요$/g, '빛나게 해');
  
  // "친구들은 좋다" → "친구들은 좋아"
  result = result.replace(/친구들은\s+좋다$/g, '친구들은 좋아');
  
  // "완전 녹초가 되었다" → "완전 녹초가 됐어"
  result = result.replace(/완전\s+녹초가\s+되었다$/g, '완전 녹초가 됐어');
  
  // "내 몸이 망가졌다" → "몸이 망가졌어"
  result = result.replace(/내\s+몸이\s+망가졌다$/g, '몸이 망가졌어');
  
  // "가격이 너무 높았습니다" → "가격이 너무 높았어"
  result = result.replace(/가격이\s+너무\s+높았습니다$/g, '가격이 너무 높았어');
  
  // "그는 통제를 좋아합니다" → "통제를 좋아해"
  result = result.replace(/그는\s+통제를\s+좋아합니다$/g, '통제를 좋아해');
  
  // "그는 상사야" → "상사야"
  result = result.replace(/그는\s+상사야$/g, '상사야');
  
  // "레드와인을 마시자" → "레드 와인 마시자"
  result = result.replace(/레드와인을\s+마시자$/g, '레드 와인 마시자');
  
  // "성급하게 판단하지 마세요" → "성급하게 판단하지 마"
  result = result.replace(/성급하게\s+판단하지\s+마세요$/g, '성급하게 판단하지 마');
  
  // "기다려 보세요" → "기다려봐"
  result = result.replace(/기다려\s+보세요$/g, '기다려봐');
  
  // "화나는 일을 하지 마세요" → "화나는 일 하지 마"
  result = result.replace(/화나는\s+일을\s+하지\s+마세요$/g, '화나는 일 하지 마');
  
  // "정상적으로 행동하십시오" → "정상적으로 행동해"
  result = result.replace(/정상적으로\s+행동하십시오$/g, '정상적으로 행동해');
  
  // "평소대로 하세요" → "평소대로 해"
  result = result.replace(/평소대로\s+하세요$/g, '평소대로 해');
  
  // "소리가 차단되지 않았습니다" → "소리가 차단 안 됐어"
  result = result.replace(/소리가\s+차단되지\s+않았습니다$/g, '소리가 차단 안 됐어');
  
  // "시끄러웠어요" → "시끄러웠어"
  result = result.replace(/시끄러웠어요$/g, '시끄러웠어');
  
  // "공짜 돈은 없습니다" → "공짜 돈은 없어"
  result = result.replace(/공짜\s+돈은\s+없습니다$/g, '공짜 돈은 없어');
  
  // "모든 것에는 가격이 있습니다" → "모든 건 가격이 있어"
  result = result.replace(/모든\s+것에는\s+가격이\s+있습니다$/g, '모든 건 가격이 있어');
  
  // "뛰지 마세요" → "뛰지 마"
  result = result.replace(/뛰지\s+마세요$/g, '뛰지 마');
  
  // "시간은 우리의 것야" → "시간은 우리 거야"
  result = result.replace(/시간은\s+우리의\s+것야$/g, '시간은 우리 거야');
  
  // "나 당신의 뒷모습을 봅니다" → "뒷모습 볼게"
  result = result.replace(/나\s+당신의\s+뒷모습을\s+봅니다$/g, '뒷모습 볼게');
  
  // "나 당신을 도와줍니다" → "도와줄게"
  result = result.replace(/나\s+당신을\s+도와줍니다$/g, '도와줄게');
  
  // "뷔페를 먹고 싶어요" → "뷔페 먹고 싶어"
  result = result.replace(/뷔페를\s+먹고\s+싶어요$/g, '뷔페 먹고 싶어');
  
  // "삶이 지루하다고 느껴집니다" → "삶이 지루해"
  result = result.replace(/삶이\s+지루하다고\s+느껴집니다$/g, '삶이 지루해');
  
  // "나 정사각형 상자 안에 있다" → "정사각형 상자 안에 있어"
  result = result.replace(/나\s+정사각형\s+상자\s+안에\s+있다$/g, '정사각형 상자 안에 있어');
  
  // "그것에 대해 깊이 생각해보세요" → "깊이 생각해봐"
  result = result.replace(/그것에\s+대해\s+깊이\s+생각해보세요$/g, '깊이 생각해봐');
  
  // "생각을 조심하세요" → "생각 조심해"
  result = result.replace(/생각을\s+조심하세요$/g, '생각 조심해');
  
  // "위험을 감수해야 합니다" → "위험을 감수해야 해"
  result = result.replace(/위험을\s+감수해야\s+합니다$/g, '위험을 감수해야 해');
  
  // "위험은 보상을 나타냅니다" → "위험은 보상을 나타내"
  result = result.replace(/위험은\s+보상을\s+나타냅니다$/g, '위험은 보상을 나타내');
  
  // "우리는 눈을 마주하고 있습니다" → "눈을 마주치고 있어"
  result = result.replace(/우리는\s+눈을\s+마주하고\s+있습니다$/g, '눈을 마주치고 있어');
  
  // "우리는 마음과 마음을 연결합니다" → "마음을 연결해"
  result = result.replace(/우리는\s+마음과\s+마음을\s+연결합니다$/g, '마음을 연결해');
  
  // "우리는 하나의 육체 영혼야" → "하나의 육체 영혼이야"
  result = result.replace(/우리는\s+하나의\s+육체\s+영혼야$/g, '하나의 육체 영혼이야');
  
  // "우리는 잘 섞인다" → "잘 섞여"
  result = result.replace(/우리는\s+잘\s+섞인다$/g, '잘 섞여');
  
  // "진짜가 없습니다" → "진짜가 없어"
  result = result.replace(/진짜가\s+없습니다$/g, '진짜가 없어');
  
  // "불가능한 꿈야" → "불가능한 꿈이야"
  result = result.replace(/불가능한\s+꿈야$/g, '불가능한 꿈이야');
  
  // "그들은 단지 테이블 위에서 이야기를 나눈다" → "테이블 위에서만 이야기해"
  result = result.replace(/그들은\s+단지\s+테이블\s+위에서\s+이야기를\s+나눈다$/g, '테이블 위에서만 이야기해');
  
  // "그들은 성에 산다" → "성에 살아"
  result = result.replace(/그들은\s+성에\s+산다$/g, '성에 살아');
  
  // "로비가 있었어요" → "로비가 있었어"
  result = result.replace(/로비가\s+있었어요$/g, '로비가 있었어');
  
  // "돈이 움직였습니다" → "돈이 움직였어"
  result = result.replace(/돈이\s+움직였습니다$/g, '돈이 움직였어');
  
  // "우리는 변화를 만듭니다" → "변화를 만들어"
  result = result.replace(/우리는\s+변화를\s+만듭니다$/g, '변화를 만들어');
  
  // "변화는 필수야" → "변화는 필수야" (이건 괜찮음)
  
  // "행동이 중요합니다" → "행동이 중요해"
  result = result.replace(/행동이\s+중요합니다$/g, '행동이 중요해');
  
  // "말하지 말고 그냥 하세요" → "말하지 말고 그냥 해"
  result = result.replace(/말하지\s+말고\s+그냥\s+하세요$/g, '말하지 말고 그냥 해');
  
  // "잘 들었습니다" → "잘 들었어"
  result = result.replace(/잘\s+들었습니다$/g, '잘 들었어');
  
  // "내 귀는 열려있습니다" → "귀 열려있어"
  result = result.replace(/내\s+귀는\s+열려있습니다$/g, '귀 열려있어');
  
  // "소규모 시장 공격" → "소규모 시장 공략"
  result = result.replace(/소규모\s+시장\s+공격$/g, '소규모 시장 공략');
  
  // "우리는 돈을 모은다" → "돈을 모아"
  result = result.replace(/우리는\s+돈을\s+모은다$/g, '돈을 모아');
  
  // "군중은 돈을 준다" → "군중이 돈을 줘"
  result = result.replace(/군중은\s+돈을\s+준다$/g, '군중이 돈을 줘');
  
  // "나 사업을 잘 못한다" → "사업은 못해"
  result = result.replace(/나\s+사업을\s+잘\s+못한다$/g, '사업은 못해');
  
  // "나 깊이 생각한다" → "깊이 생각해"
  result = result.replace(/나\s+깊이\s+생각한다$/g, '깊이 생각해');
  
  // "나 볼 것이다" → "볼게"
  result = result.replace(/나\s+볼\s+것이다$/g, '볼게');
  
  // "어렵다" → "어려워"
  result = result.replace(/^어렵다$/g, '어려워');
  
  // "모르겠습니다" → "모르겠어"
  result = result.replace(/모르겠습니다$/g, '모르겠어');
  
  // "색상이 강합니다" → "색상이 강해"
  result = result.replace(/색상이\s+강합니다$/g, '색상이 강해');
  
  // 추가 수정 사항
  // "좋은 행동을해" → "좋은 행동을 해" (띄어쓰기)
  result = result.replace(/좋은\s+행동을해$/g, '좋은 행동을 해');
  
  // "최고의 사람이야" → "넌 최고야"
  result = result.replace(/최고의\s+사람이야$/g, '넌 최고야');
  
  // "나 경험이 있어" → "경험 있어"
  result = result.replace(/^나\s+경험이\s+있어$/g, '경험 있어');
  
  // "나 그 느낌을 알고 있어" → "그 느낌 알아"
  result = result.replace(/^나\s+그\s+느낌을\s+알고\s+있어$/g, '그 느낌 알아');
  
  // "동의합니다 영화" → "동의해, 영화"
  result = result.replace(/동의합니다\s+영화$/g, '동의해, 영화');
  
  // "그건 당신의 몸이야" → "그건 네 몸이야"
  result = result.replace(/그건\s+당신의\s+몸이야$/g, '그건 네 몸이야');
  
  // "호텔은 자고 있어" → "호텔이 자고 있어?" (의문문)
  result = result.replace(/^호텔은\s+자고\s+있어$/g, '호텔이 자고 있어?');
  
  // 6. 중복 공백 제거
  result = result.replace(/\s+/g, ' ');
  
  return result.trim();
}

function parseConstantsForOptions(lines) {
  let currentIntent = null;
  let inOptions = false;
  let currentRound = null;

  /** @type {{ intent: string, options: { text: string, correct: boolean, textKoLineIndex: number, textKo: string }[] }[]} */
  const rounds = [];

  /** @type {{ text?: string, correct?: boolean, textKoLineIndex?: number, textKo?: string }} */
  let opt = null;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    const intentMatch = line.match(/^\s*intent:\s*("(?:[^"\\]|\\.)*")\s*,?\s*$/);
    if (intentMatch) {
      try {
        currentIntent = JSON.parse(intentMatch[1]);
      } catch {
        currentIntent = null;
      }
    }

    if (line.includes('options: [')) {
      inOptions = true;
      currentRound = { intent: currentIntent ?? '', options: [] };
      opt = null;
      continue;
    }

    if (!inOptions) continue;

    // Detect end of options array
    if (line.match(/^\s*\]\s*,?\s*$/)) {
      if (currentRound && currentRound.options.length > 0) {
        rounds.push(currentRound);
      }
      inOptions = false;
      currentRound = null;
      opt = null;
      continue;
    }

    const textMatch = line.match(/^\s*text:\s*("(?:[^"\\]|\\.)*")\s*,?\s*$/);
    if (textMatch) {
      opt = {};
      try {
        opt.text = JSON.parse(textMatch[1]);
      } catch {
        opt.text = undefined;
      }
      continue;
    }

    const textKoMatch = line.match(/^\s*textKo:\s*("(?:[^"\\]|\\.)*")\s*,?\s*$/);
    if (textKoMatch && opt) {
      opt.textKoLineIndex = i;
      try {
        opt.textKo = JSON.parse(textKoMatch[1]);
      } catch {
        opt.textKo = undefined;
      }
      continue;
    }

    const correctMatch = line.match(/^\s*correct:\s*(true|false)\s*,?\s*$/);
    if (correctMatch && opt) {
      opt.correct = correctMatch[1] === 'true';
      // finalize option when we have necessary fields
      if (opt.text && typeof opt.correct === 'boolean' && typeof opt.textKoLineIndex === 'number' && opt.textKo) {
        currentRound?.options.push({
          text: opt.text,
          correct: opt.correct,
          textKoLineIndex: opt.textKoLineIndex,
          textKo: opt.textKo
        });
        opt = null;
      }
      continue;
    }
  }

  return rounds;
}

function escapeTsString(s) {
  return s.replace(/\\/g, '\\\\').replace(/"/g, '\\"');
}

async function main() {
  const src = fs.readFileSync(CONSTANTS_PATH, 'utf8');
  const lines = src.split('\n');

  const rounds = parseConstantsForOptions(lines);
  const totalOptions = rounds.reduce((acc, r) => acc + r.options.length, 0);
  console.log(`Found rounds: ${rounds.length}, options: ${totalOptions}`);

  let updated = 0;
  for (const round of rounds) {
    for (const option of round.options) {
      const original = option.textKo;
      const localized = localizeKorean(original);
      
      if (original !== localized) {
        const oldLine = lines[option.textKoLineIndex];
        const indentMatch = oldLine.match(/^(\s*)textKo:/);
        const indent = indentMatch ? indentMatch[1] : '';
        const hasComma = /,\s*$/.test(oldLine);
        lines[option.textKoLineIndex] = `${indent}textKo: "${escapeTsString(localized)}"${hasComma ? ',' : ''}`;
        updated++;
        
        if (updated % 50 === 0) {
          console.log(`Updated ${updated}/${totalOptions}...`);
        }
      }
    }
  }

  fs.writeFileSync(CONSTANTS_PATH, lines.join('\n'), 'utf8');
  console.log(`Done. Updated ${updated} textKo lines.`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
