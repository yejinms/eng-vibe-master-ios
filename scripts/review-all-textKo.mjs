import fs from 'node:fs';
import { fileURLToPath } from 'node:url';

const CONSTANTS_PATH = fileURLToPath(new URL('../constants.ts', import.meta.url));

/**
 * 캐릭터별 반말/존댓말 결정
 */
function getFormalityLevel(characterId) {
  // Zoey: 친구 -> 반말
  // Daniel: 상사 -> 존댓말  
  // Lucas: 연인 -> 반말
  if (characterId === 'daniel') {
    return 'formal'; // 존댓말
  }
  return 'casual'; // 반말 (zoey, lucas)
}

/**
 * intent에서 한국어 표현 추출
 */
function extractFirstQuotedPhrase(intent) {
  const m = intent.match(/'([^']+)'/);
  if (!m) return null;
  let phrase = m[1].trim();
  phrase = phrase.replace(/\([^)]*\)/g, '').trim();
  return phrase || null;
}

/**
 * 영어를 한국어로 번역
 */
async function translateEnToKo(text) {
  const q = encodeURIComponent(text);
  const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=ko&dt=t&q=${q}`;
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`Translate HTTP ${res.status}`);
    const json = await res.json();
    const translated = (json?.[0] ?? []).map((x) => x?.[0] ?? '').join('');
    return translated;
  } catch (error) {
    console.error(`Translation error for "${text}":`, error.message);
    return null;
  }
}

/**
 * 존댓말로 변환
 */
function makeFormal(ko) {
  if (!ko) return ko;
  let result = ko.trim();
  
  // 이미 존댓말이면 그대로
  if (/[요예]$/.test(result)) {
    return result;
  }
  
  // 반말 어미 -> 존댓말
  result = result.replace(/해$/g, '해요');
  result = result.replace(/돼$/g, '돼요');
  result = result.replace(/있어$/g, '있어요');
  result = result.replace(/없어$/g, '없어요');
  result = result.replace(/좋아$/g, '좋아요');
  result = result.replace(/싫어$/g, '싫어요');
  result = result.replace(/필요해$/g, '필요해요');
  result = result.replace(/할게$/g, '할게요');
  result = result.replace(/갈게$/g, '갈게요');
  result = result.replace(/줄게$/g, '줄게요');
  result = result.replace(/볼게$/g, '볼게요');
  result = result.replace(/줘$/g, '주세요');
  result = result.replace(/봐$/g, '보세요');
  result = result.replace(/가$/g, '가세요');
  result = result.replace(/와$/g, '오세요');
  result = result.replace(/야$/g, '예요');
  result = result.replace(/거야$/g, '거예요');
  result = result.replace(/지$/g, '지요');
  result = result.replace(/해봐$/g, '해보세요');
  result = result.replace(/해줘$/g, '해주세요');
  result = result.replace(/알아$/g, '알아요');
  result = result.replace(/모르겠어$/g, '모르겠어요');
  result = result.replace(/괜찮아$/g, '괜찮아요');
  result = result.replace(/맞아$/g, '맞아요');
  result = result.replace(/안 돼$/g, '안 돼요');
  result = result.replace(/돼$/g, '돼요');
  result = result.replace(/없어$/g, '없어요');
  result = result.replace(/있어$/g, '있어요');
  
  // "나" -> "저"
  result = result.replace(/^나\s+/g, '저 ');
  result = result.replace(/^나는\s+/g, '저는 ');
  result = result.replace(/^나를\s+/g, '저를 ');
  result = result.replace(/^나의\s+/g, '제 ');
  result = result.replace(/^내가\s+/g, '제가 ');
  result = result.replace(/^내\s+/g, '제 ');
  result = result.replace(/\s+나\s+/g, ' 저 ');
  result = result.replace(/\s+나는\s+/g, ' 저는 ');
  result = result.replace(/\s+내가\s+/g, ' 제가 ');
  result = result.replace(/\s+내\s+/g, ' 제 ');
  
  // "너" -> 생략하거나 문맥에 맞게 조정 (상사에게는 부적절)
  result = result.replace(/^너\s+/g, '');
  result = result.replace(/\s+너\s+/g, ' ');
  result = result.replace(/너를\s+/g, '');
  result = result.replace(/너의\s+/g, '');
  
  return result.trim();
}

/**
 * 반말로 변환
 */
function makeCasual(ko) {
  if (!ko) return ko;
  let result = ko.trim();
  
  // 이미 반말이면 그대로
  if (!/[요예]$/.test(result) && !result.includes('주세요') && !result.includes('보세요')) {
    return result;
  }
  
  // 존댓말 -> 반말
  result = result.replace(/해요$/g, '해');
  result = result.replace(/돼요$/g, '돼');
  result = result.replace(/있어요$/g, '있어');
  result = result.replace(/없어요$/g, '없어');
  result = result.replace(/좋아요$/g, '좋아');
  result = result.replace(/싫어요$/g, '싫어');
  result = result.replace(/필요해요$/g, '필요해');
  result = result.replace(/할게요$/g, '할게');
  result = result.replace(/갈게요$/g, '갈게');
  result = result.replace(/줄게요$/g, '줄게');
  result = result.replace(/볼게요$/g, '볼게');
  result = result.replace(/주세요$/g, '줘');
  result = result.replace(/보세요$/g, '봐');
  result = result.replace(/가세요$/g, '가');
  result = result.replace(/오세요$/g, '와');
  result = result.replace(/예요$/g, '야');
  result = result.replace(/거예요$/g, '거야');
  result = result.replace(/지요$/g, '지');
  result = result.replace(/해보세요$/g, '해봐');
  result = result.replace(/해주세요$/g, '해줘');
  result = result.replace(/알아요$/g, '알아');
  result = result.replace(/모르겠어요$/g, '모르겠어');
  result = result.replace(/괜찮아요$/g, '괜찮아');
  result = result.replace(/맞아요$/g, '맞아');
  result = result.replace(/안 돼요$/g, '안 돼');
  
  // "저" -> "나"
  result = result.replace(/^저\s+/g, '나 ');
  result = result.replace(/^저는\s+/g, '나는 ');
  result = result.replace(/^저를\s+/g, '나를 ');
  result = result.replace(/^제가\s+/g, '내가 ');
  result = result.replace(/^제\s+/g, '내 ');
  result = result.replace(/\s+저\s+/g, ' 나 ');
  result = result.replace(/\s+저는\s+/g, ' 나는 ');
  result = result.replace(/\s+제가\s+/g, ' 내가 ');
  result = result.replace(/\s+제\s+/g, ' 내 ');
  
  return result.trim();
}

/**
 * 자연스러운 한국어 표현으로 개선
 */
function improveKoreanExpression(ko, en, isFormal, isCorrect) {
  if (!ko) return ko;
  let result = ko.trim();
  
  // 특정 표현 개선
  const improvements = {
    // 정답 표현
    "I'm free as a bird.": isFormal ? "저는 완전 한가해요" : "완전 한가해",
    "Lunch is on me.": isFormal ? "제가 쏠게요" : "내가 쏠게",
    "I'm crazy about it.": isFormal ? "저는 환장해요" : "환장하지",
    "I'll be there on time.": isFormal ? "제시간에 갈게요" : "제시간에 갈게",
    "Catch you later!": isFormal ? "이따 봐요" : "이따 봐",
    "It fits you perfectly.": isFormal ? "딱이에요" : "딱이야",
    "It doesn't hurt to ask.": isFormal ? "밑져야 본전이지요" : "밑져야 본전이지",
    "It's a steal.": isFormal ? "거저나 다름없어요" : "거저나 다름없어",
    "I'm running low on sugar.": isFormal ? "당 떨어졌어요" : "당 떨어졌어",
    "You're the best!": isFormal ? "최고예요" : "최고야",
    "I'm a sucker for the beach.": isFormal ? "사족을 못 써요" : "사족을 못 써",
    "I'll look into hotels.": isFormal ? "알아볼게요" : "알아볼게",
    "We can split the bill.": isFormal ? "나눠서 내면 돼요" : "나눠서 내면",
    "I can't wait.": isFormal ? "기대돼요" : "기대된다",
    "Keep in touch.": isFormal ? "계속 연락하자요" : "계속 연락하자",
    "It's second to none.": isFormal ? "타의 추종을 불허해요" : "타의 추종을 불허해",
    "My muscles are sore.": isFormal ? "욱신거려요" : "욱신거려",
    "I'll see it through.": isFormal ? "끝까지 해낼 거예요" : "끝까지 해낼 거야",
    "Want to give it a try?": isFormal ? "해볼래요?" : "해볼래?",
    "I'll give you a ride.": isFormal ? "데려다 줄게요" : "데려다 줄게",
    "You'll be surprised.": isFormal ? "놀랄 거예요" : "놀랄 거야",
    "Let's play it safe.": isFormal ? "안전하게 가요" : "안전하게 가자",
    "Make sure.": isFormal ? "확실하게 해주세요" : "확실하게 해줘",
    "Chocolate is a must.": isFormal ? "초콜릿은 필수예요" : "초콜릿은 필수야",
    "Let's go all out.": isFormal ? "화려하게 가봐요" : "화려하게 가보자",
    "What are friends for?": isFormal ? "친구 좋다는 게 뭐예요" : "친구 좋다는 게 뭐야",
    "I'm completely exhausted.": isFormal ? "완전 녹초가 됐어요" : "완전 녹초가 됐어",
    "I have a big appetite.": isFormal ? "입이 커요" : "입이 커",
    "That was ridiculously expensive.": isFormal ? "터무니없이 비쌌어요" : "터무니없이 비쌌다",
    "He's a control freak.": isFormal ? "통제광이에요" : "통제광",
    "Let's party hard.": isFormal ? "진탕 놀아봐요" : "진탕 놀아보자",
    "Don't jump to conclusions.": isFormal ? "속단하지 마세요" : "속단하지 마",
    "I've been there.": isFormal ? "경험이 있어요" : "경험 있어",
    "You'll regret it.": isFormal ? "후회할 거예요" : "후회할 거야",
    "Just act normal.": isFormal ? "평소처럼 행동하세요" : "평소처럼 행동해",
    "You're attractive.": isFormal ? "매력적이에요" : "매력적이야",
    "That was so-so.": isFormal ? "별로였어요" : "별로였어",
    "There's no such thing as a free lunch.": isFormal ? "공짜는 없어요" : "공짜는 없지",
    "No need to rush.": isFormal ? "서두를 필요 없어요" : "서두를 필요 없어",
    "I'll watch your back.": isFormal ? "등 뒤를 봐줄게요" : "등 뒤를 봐줄게",
    "I'll keep it open.": isFormal ? "비워둘게요" : "비워둘게",
    "What's wrong?": isFormal ? "고민 있어요?" : "고민 있어",
    "I hit a wall.": isFormal ? "슬럼프가 왔어요" : "슬럼프가 왔구나",
    "You're capable.": isFormal ? "능력자예요" : "능력자잖아",
    "Well begun is half done.": isFormal ? "시작이 반이에요" : "시작이 반이다",
    "I'll treat you.": isFormal ? "한턱 쏠게요" : "한턱 쏠게",
    "Don't outshine the bride.": isFormal ? "돋보이면 안 되지요" : "돋보이면 안 되지",
    "You look sophisticated.": isFormal ? "세련돼 보여요" : "세련돼 보여",
    "Comfort is key.": isFormal ? "편한 게 최고예요" : "편한 게 최고야",
    "You stand out.": isFormal ? "남달라요" : "남달라",
    "Let's look forward to it.": isFormal ? "기대해봐요" : "기대해보자",
    "Life feels like a rut.": isFormal ? "틀에 박힌 생활이에요" : "틀에 박힌 생활",
    "We need to think carefully.": isFormal ? "신중하게 생각해봐야 해요" : "신중하게 생각해봐야",
    "We need to take risks.": isFormal ? "위험을 감수해야 해요" : "위험을 감수해야",
    "We're on the same wavelength.": isFormal ? "눈만 봐도 통하는 거예요" : "눈만 봐도 통하는 거야",
    "We're cut from the same cloth.": isFormal ? "일심동체예요" : "일심동체",
    "It's completely out of touch.": isFormal ? "전혀 없어요" : "전혀 없어",
    "They're just armchair critics.": isFormal ? "탁상공론만 하고 있어요" : "탁상공론만 하고 있어",
    "Strings were pulled.": isFormal ? "로비가 있었겠지요" : "로비가 있었겠지",
    "We need to bring about change.": isFormal ? "만들어내야 해요" : "만들어내야 해",
    "Actions speak louder than words.": isFormal ? "말보다 행동이 중요하니까요" : "말보다 행동이 중요하니까",
    "I'm all ears.": isFormal ? "귀담아들게요" : "귀담아들을게",
    "That hits a niche market.": isFormal ? "틈새시장을 공략한 거예요" : "틈새시장을 공략",
    "We can raise capital.": isFormal ? "자금을 모을 수 있어요" : "자금을 모을 수 있어",
    "Business isn't my forte.": isFormal ? "내 전문 분야가 아닌데요" : "내 전문 분야가 아닌데",
    "I'll mull it over.": isFormal ? "심사숙고해볼게요" : "심사숙고해볼게",
    "It's a bit abstract.": isFormal ? "난해해요" : "난해한데",
    "The colors are striking.": isFormal ? "강렬해요" : "강렬해",
    "It's open to interpretation.": isFormal ? "나름이지요" : "나름이지",
    "That's truly avant-garde.": isFormal ? "파격적이에요" : "파격적인데",
    "We need this kind of cultural exposure.": isFormal ? "문화생활이 필요해요" : "문화생활이 필요해",
    "I haven't got a clue.": isFormal ? "감도 안 잡혀요" : "감도 안 잡혀",
    "You always dream big.": isFormal ? "큰 꿈을 꾸는구나요" : "큰 꿈을 꾸는구나",
    "We shouldn't settle for the status quo.": isFormal ? "현실에 안주하면 안 되지요" : "현실에 안주하면 안 되지",
    "We're in this together.": isFormal ? "운명 공동체예요" : "운명 공동체",
    "Here's to our bright future!": isFormal ? "위하여요!" : "위하여!",
    "I'm glad to be here.": isFormal ? "기뻐요" : "기뻐",
    "I'm ready to work hard.": isFormal ? "열심히 할 준비가 됐어요" : "열심히 할 준비가 됐어",
    "I will do my best.": isFormal ? "최선을 다할게요" : "최선을 다할게",
    "I'd love to.": isFormal ? "좋아요" : "좋아",
    "Count on me.": isFormal ? "지켜봐 주세요" : "지켜봐 줘",
    "I'll check it right away.": isFormal ? "확인해볼게요" : "확인해볼게",
    "I'm on it.": isFormal ? "처리하겠습니다" : "처리할게",
    "No problem.": isFormal ? "문제없어요" : "문제없어",
    "I'll keep that in mind.": isFormal ? "명심할게요" : "명심할게",
    "It's my job.": isFormal ? "일인걸요" : "일인걸",
    "I think I made a mistake.": isFormal ? "실수한 것 같아요" : "실수한 것 같아",
    "It's my fault.": isFormal ? "제 불찰입니다" : "제 불찰이야",
    "It won't happen again.": isFormal ? "다신 이런 일 없을 거예요" : "다신 이런 일 없을 거야",
    "Thank you for understanding.": isFormal ? "감사해요" : "감사해",
    "I'll do it right now.": isFormal ? "지금 당장 할게요" : "지금 당장 할게",
    "I have a bit left to do.": isFormal ? "조금 남아서요" : "조금 남아서",
    "I'll finish this and go.": isFormal ? "끝내고 갈게요" : "끝내고 갈게",
    "Could you help me with this data?": isFormal ? "부탁드려도 될까요?" : "부탁해도 될까?",
    "You were a big help.": isFormal ? "큰 도움이 됐어요" : "큰 도움이 됐어",
    "I appreciate it.": isFormal ? "감사합니다" : "고마워",
    "I'm not feeling well.": isFormal ? "안 좋아요" : "안 좋아",
    "I'd like to take a day off tomorrow.": isFormal ? "연차를 쓰고 싶어요" : "연차 쓰고 싶어",
    "I'll come back recharged.": isFormal ? "충전해서 올게요" : "충전해서 올게",
    "See you the day after tomorrow.": isFormal ? "내일모레 봐요" : "내일모레 봐",
    "This is my brainchild.": isFormal ? "야심작이에요" : "야심작이야",
    "We will break the mold.": isFormal ? "틀을 깰 거예요" : "틀을 깰 거야",
    "Let's operate on a shoestring.": isFormal ? "최저 예산으로 운영하자요" : "최저 예산으로 운영하자",
    "Let's burn the midnight oil.": isFormal ? "밤샘 작업 해봐요" : "밤샘 작업 해보자",
    "We're gonna take it by storm!": isFormal ? "뒤집어 놓을 거예요!" : "뒤집어 놓을 거야!",
    "My heart is pounding out of my chest.": isFormal ? "튀어나올 것 같아요" : "튀어나올 것 같아",
    "That puts my mind at ease.": isFormal ? "안심이 되네요" : "안심이 되네",
    "That's our key selling point.": isFormal ? "핵심 포인트예요" : "핵심 포인트야",
    "The feedback is positive.": isFormal ? "긍정적이네요" : "긍정적이네",
    "Dinner is on me tonight.": isFormal ? "내가 낼게요" : "내가 낼게",
    "We won't back down.": isFormal ? "물러서지 않을 거예요" : "물러서지 않을 거야",
    "No way!": isFormal ? "그럴 리가 없어요" : "그럴 리가 없어",
    "Are you hitting on me?": isFormal ? "작업 거시는 거예요?" : "작업 거시기야?",
    "We hit it off.": isFormal ? "통하는 게 있더라요" : "통하는 게 있더라",
    "I saved face.": isFormal ? "체면 치레는 했어요" : "체면 치레는 했네",
    "I had a blast.": isFormal ? "즐거운 시간이었어요" : "즐거운 시간이었어",
    "I couldn't sleep a wink.": isFormal ? "한숨도 못 잤어요" : "한숨도 못 잤어",
    "I'll take turns.": isFormal ? "교대해 줄게요" : "교대해 줄게",
    "It's breathtaking.": isFormal ? "숨이 멎을 것 같아요" : "숨이 멎을 것 같아",
    "Take a nice shot.": isFormal ? "찍어줘요" : "찍어줘",
    "It's the best memory.": isFormal ? "최고의 추억이에요" : "최고의 추억이야",
    "I'm touched.": isFormal ? "감동받았어요" : "감동받았어",
    "I can't believe it.": isFormal ? "믿기지가 않아요" : "믿기지가 않아",
    "Can I get my hopes up?": isFormal ? "기대해도 돼요?" : "기대해도 돼?",
    "You're my lucky charm.": isFormal ? "행운이에요" : "행운이야",
    "We'll last forever.": isFormal ? "영원할 거예요" : "영원할 거야",
    "I'm done with him.": isFormal ? "끝난 사이예요" : "끝난 사이야",
    "I wasn't fooling around.": isFormal ? "딴짓한 거 없어요" : "딴짓한 거 없어",
    "I'm fully committed to you.": isFormal ? "올인했어요" : "올인했어",
    "What doesn't kill you makes you stronger.": isFormal ? "비 온 뒤에 땅이 굳는 거예요" : "비 온 뒤에 땅이 굳는 거야",
    "We can weather any storm.": isFormal ? "함께 이겨낼 수 있어요" : "함께 이겨낼 수 있어",
    "Something smells fishy.": isFormal ? "수상한데요" : "수상한데",
    "You're making me nervous.": isFormal ? "긴장되게 해요" : "긴장되게 해",
    "I'm speechless.": isFormal ? "말이 안 나와요" : "말이 안 나와",
    "A million times yes!": isFormal ? "백만 번이라도 예스예요!" : "백만 번이라도 예스야!",
    "We're made for each other.": isFormal ? "천생연분이에요" : "천생연분이야",
    "You look sharp.": isFormal ? "말끔해 보여요" : "말끔해 보여",
    "Just be yourself.": isFormal ? "너 자신을 보여줘요" : "너 자신을 보여줘",
    "They took a shine to you.": isFormal ? "마음에 들어 하셨어요" : "마음에 들어 하셔",
    "You made the cut.": isFormal ? "합격점이에요" : "합격점이야",
    "Let's get the ball rolling.": isFormal ? "준비해봐요" : "준비해보자",
    "That's just how I roll.": isFormal ? "성격이에요" : "성격이야",
    "We need to meet halfway.": isFormal ? "맞춰가야지요" : "맞춰가야지",
    "That's my pet peeve.": isFormal ? "참을 수 없는 부분이에요" : "참을 수 없는 부분이야",
    "Conflict strengthens the bond.": isFormal ? "비 온 뒤에 땅이 굳는 거예요" : "비 온 뒤에 땅이 굳는 거야",
    "Let's live it up tonight!": isFormal ? "파티예요!" : "파티다!",
    "I can't wrap my head around it yet.": isFormal ? "감이 안 와요" : "감이 안 와",
    "I couldn't agree more.": isFormal ? "전적으로 동의해요" : "전적으로 동의해",
    "We make a great team.": isFormal ? "최고의 팀이에요" : "최고의 팀이잖아",
    "Till death do us part.": isFormal ? "검은 머리 파뿌리 될 때까지예요" : "검은 머리 파뿌리 될 때까지",
    "You are my soulmate.": isFormal ? "영혼의 단짝이에요" : "영혼의 단짝이야"
  };
  
  if (improvements[en]) {
    return improvements[en];
  }
  
  return result;
}

/**
 * 오답 선택지를 자연스러운 한국어로 변환
 */
function createWrongAnswerKo(en, isFormal) {
  // 특정 오답 표현들
  const wrongAnswers = {
    "I have no time now.": isFormal ? "지금은 시간이 없어요" : "지금은 시간이 없어",
    "I am very lonely.": isFormal ? "너무 외로워요" : "너무 외로워",
    "I will buy you.": isFormal ? "내가 너 살게요" : "내가 너 살게",
    "Give me lunch.": isFormal ? "점심을 주세요" : "점심을 줘",
    "I like pizza ok.": isFormal ? "그냥 나 피자를 좋아해요" : "그냥 나 피자를 좋아해",
    "It is my enemy.": isFormal ? "그건 나의 적이에요" : "그건 나의 적이야",
    "I will go later.": isFormal ? "나중에 갈게요" : "나중에 갈게",
    "I am very late.": isFormal ? "너무 늦었어요" : "너무 늦었어",
    "Look at you now.": isFormal ? "지금 당신을 보세요" : "지금 당신을 보세요",
    "You catch me.": isFormal ? "나를 잡아요" : "나를 잡아",
    "It is your body.": isFormal ? "그건 네 몸이에요" : "그건 네 몸이야",
    "You look strange.": isFormal ? "이상해 보여요" : "이상해 보인다",
    "Asking is hurting.": isFormal ? "묻는 것은 아파요" : "묻는 것은 아프다",
    "No money no honey.": isFormal ? "돈도 없고 자기예요" : "돈도 없고 자기야",
    "It is stealing.": isFormal ? "도둑질이에요" : "도둑질이야",
    "It is very cheapy.": isFormal ? "매우 저렴해요" : "매우 저렴해",
    "Sugar is falling.": isFormal ? "설탕이 떨어지고 있어요" : "설탕이 떨어지고 있어",
    "I hate snacks.": isFormal ? "간식을 싫어해요" : "간식 싫어해",
    "You are number one.": isFormal ? "최고의 사람이에요" : "최고의 사람이야",
    "You act good.": isFormal ? "좋은 행동을 해요" : "좋은 행동을 해",
    "I hate water.": isFormal ? "물을 싫어해요" : "물 싫어해",
    "Beach is sand.": isFormal ? "해변은 모래예요" : "해변은 모래지",
    "I see hotels.": isFormal ? "호텔이 보여요" : "호텔이 보여",
    "Hotel is sleeping.": isFormal ? "호텔이 자고 있어요?" : "호텔이 자고 있어?",
    "Cut the money.": isFormal ? "돈을 자르면 안 돼요!" : "돈을 자르면 안 돼!",
    "Dutch pay is good.": isFormal ? "더치페이는 좋아요" : "더치페이는 좋아",
    "I wait very well.": isFormal ? "기다리는 건 잘해요" : "기다리는 건 잘해",
    "It is exciting day.": isFormal ? "신나는 하루예요" : "신나는 하루지",
    "Touch me.": isFormal ? "만지지 마세요" : "만지지 마",
    "Call my phone.": isFormal ? "내 전화번호로 전화해요" : "내 전화번호로 전화해",
    "It is number two.": isFormal ? "두 번째예요" : "두 번째야",
    "Coffee smell goes to nose.": isFormal ? "커피 냄새가 코로 나요" : "커피 냄새가 코로 난다",
    "I am body sick.": isFormal ? "몸이 아파요" : "몸이 아파",
    "My muscle cries.": isFormal ? "근육이 울어요" : "근육이 울어",
    "I will finish.": isFormal ? "끝낼게요" : "끝낼게",
    "Stop is no.": isFormal ? "중지는 아니에요" : "중지는 아니야",
    "You do same.": isFormal ? "너도 그렇게 해요" : "너도 그렇게 해",
    "Let's play at gym.": isFormal ? "체육관에서 놀아요" : "체육관에서 놀자",
    "Go home yourself.": isFormal ? "집에 직접 가세요" : "집에 직접 가",
    "I send you home.": isFormal ? "집으로 보내줄게요" : "집으로 보내줄게",
    "She will be surprised.": isFormal ? "그녀는 놀랄 거예요" : "그녀는 놀랄 거야",
    "She is scared.": isFormal ? "겁이 나요" : "겁이 나",
    "Safety is good.": isFormal ? "안전이 좋아요" : "안전이 좋아",
    "Money paper is good.": isFormal ? "돈 종이는 좋은데요" : "돈 종이는 좋은데",
    "Do chocolate.": isFormal ? "초콜릿을 해요" : "초콜릿을 해",
    "Go outside.": isFormal ? "밖으로 나가세요" : "밖으로 나가",
    "Make it shine.": isFormal ? "빛나게 해요" : "빛나게 해",
    "Friends are good.": isFormal ? "친구들은 좋아요" : "친구들은 좋아",
    "I like friends.": isFormal ? "친구를 좋아해요" : "친구 좋아해",
    "I am melting.": isFormal ? "녹아 내리고 있어요" : "나 녹아 내리고 있다",
    "My body is broken.": isFormal ? "몸이 망가졌어요" : "몸이 망가졌어",
    "I eat everything.": isFormal ? "다 먹어요" : "다 먹어",
    "It was expensive.": isFormal ? "그건 비쌌어요" : "그건 비쌌다",
    "Price was too high.": isFormal ? "가격이 너무 높았어요" : "가격이 너무 높았어",
    "He likes control.": isFormal ? "통제를 좋아해요" : "통제를 좋아해",
    "He is boss.": isFormal ? "상사예요" : "상사야",
    "Let's play very hard.": isFormal ? "아주 열심히 놀아요" : "아주 열심히 놀자",
    "Let's drink red wine.": isFormal ? "레드 와인 마시자요" : "레드 와인 마시자",
    "Don't judge quickly.": isFormal ? "기다려 보세요" : "기다려봐",
    "I have experience.": isFormal ? "경험이 있어요" : "경험이 있어",
    "I know that feeling.": isFormal ? "그 느낌을 알고 있어요" : "그 느낌 알아",
    "Don't do angry things.": isFormal ? "화나는 일 하지 마세요" : "화나는 일 하지 마",
    "Act normally.": isFormal ? "정상적으로 행동하세요" : "정상적으로 행동해",
    "Act as usual.": isFormal ? "평소대로 하세요" : "평소대로 해",
    "You are pretty.": isFormal ? "예뻐요" : "예뻐",
    "Sound didn't block.": isFormal ? "소리가 차단 안 됐어요" : "소리가 차단 안 됐어",
    "It was loud.": isFormal ? "시끄러웠어요" : "시끄러웠어",
    "Free money doesn't exist.": isFormal ? "공짜 돈은 없어요" : "공짜 돈은 없어",
    "Everything has a price.": isFormal ? "모든 건 가격이 있어요" : "모든 건 가격이 있어",
    "Don't run.": isFormal ? "뛰지 마세요" : "뛰지 마",
    "Time is ours.": isFormal ? "시간은 우리 거예요" : "시간은 우리 거야",
    "I see your back.": isFormal ? "뒷모습 볼게요" : "뒷모습 볼게",
    "I help you.": isFormal ? "도와줄게요" : "도와줄게",
    "I cleared my schedule.": isFormal ? "일정을 비웠어요" : "일정을 비웠어",
    "I wait for party.": isFormal ? "파티를 기다려요" : "파티를 기다린다",
    "What problem?": isFormal ? "문제가 있나요?" : "문제가 있나요",
    "Why sad?": isFormal ? "왜 슬퍼요?" : "왜 슬퍼요",
    "You hit wall.": isFormal ? "벽에 부딪혔어요" : "벽에 부딪혔어",
    "You are boring.": isFormal ? "지루해요" : "지루해",
    "You are superman.": isFormal ? "슈퍼맨이에요" : "슈퍼맨이야",
    "You can do well.": isFormal ? "잘 할 수 있어요" : "잘 할 수 있어",
    "Start is half.": isFormal ? "시작이 반이에요" : "시작이 반이다",
    "Start now.": isFormal ? "지금 시작하세요" : "지금 시작하세요",
    "I shoot beer.": isFormal ? "맥주를 쏠게요" : "맥주를 쏜다",
    "Don't look better than bride.": isFormal ? "신부보다 더 좋아 보이지 마세요" : "신부보다 더 좋아 보이지 마세요",
    "Hide behind bride.": isFormal ? "신부 뒤에 숨어요" : "신부 뒤에 숨어라",
    "It looks dark.": isFormal ? "어둡게 보여요" : "어둡게 보여",
    "It is not white.": isFormal ? "흰색이 아니에요" : "흰색이 아닙니다",
    "Easy is best.": isFormal ? "쉬운 것이 가장 좋아요" : "쉬운 것이 가장 좋습니다",
    "Wear pajamas.": isFormal ? "잠옷을 착용하세요" : "잠옷을 착용하세요",
    "You are fashion model.": isFormal ? "패션 모델이에요" : "패션 모델이야",
    "Your fabric is good.": isFormal ? "천은 좋아요" : "천은 좋습니다",
    "I want to eat buffet.": isFormal ? "뷔페를 먹고 싶어요" : "뷔페 먹고 싶어",
    "Buffet is goal.": isFormal ? "뷔페가 목표예요" : "뷔페가 목표야",
    "Life feels boring.": isFormal ? "삶이 지루해요" : "삶이 지루해",
    "I am in square box.": isFormal ? "정사각형 상자 안에 있어요" : "정사각형 상자 안에 있어",
    "Think about it deeply.": isFormal ? "그것에 대해 깊이 생각해보세요" : "깊이 생각해봐",
    "Be careful with thoughts.": isFormal ? "생각을 조심하세요" : "생각 조심해",
    "Risk shows reward.": isFormal ? "위험은 보상을 나타내요" : "위험은 보상을 나타내",
    "We see eye to eye.": isFormal ? "우리는 눈을 마주치고 있어요" : "눈을 마주치고 있어",
    "We connect mind to mind.": isFormal ? "마음을 연결해요" : "마음을 연결해",
    "We are one body soul.": isFormal ? "하나의 육체 영혼이에요" : "하나의 육체 영혼이야",
    "We mix together well.": isFormal ? "잘 섞여요" : "잘 섞여",
    "It has no real.": isFormal ? "진짜가 없어요" : "진짜가 없어",
    "It is impossible dream.": isFormal ? "불가능한 꿈이에요" : "불가능한 꿈이야",
    "They just talk on table.": isFormal ? "테이블 위에서만 이야기해요" : "테이블 위에서만 이야기해",
    "They live in castle.": isFormal ? "성에 살아요" : "성에 살아",
    "Lobby was there.": isFormal ? "로비가 있었어요" : "로비가 있었어",
    "Money moved.": isFormal ? "돈이 움직였어요" : "돈이 움직였어",
    "We create change.": isFormal ? "변화를 만들어요" : "변화를 만들어",
    "Change is must.": isFormal ? "변화는 필수예요" : "변화는 필수야",
    "Action is important.": isFormal ? "행동이 중요해요" : "행동이 중요해",
    "Do not talk, just do.": isFormal ? "말하지 말고 그냥 해요" : "말하지 말고 그냥 해",
    "I hear you well.": isFormal ? "잘 들었어요" : "잘 들었어",
    "My ear is open.": isFormal ? "귀 열려있어요" : "귀 열려있어",
    "Small market attack.": isFormal ? "소규모 시장 공략이에요" : "소규모 시장 공략",
    "It is unique idea.": isFormal ? "독특한 아이디어예요" : "독특한 아이디어네요",
    "We gather money.": isFormal ? "돈을 모아요" : "돈을 모아",
    "Crowd gives money.": isFormal ? "군중이 돈을 줘요" : "군중이 돈을 줘",
    "I am bad at business.": isFormal ? "사업은 못해요" : "사업은 못해",
    "Not my style.": isFormal ? "내 스타일 아니에요" : "내 스타일이 아니야",
    "I think deep.": isFormal ? "깊이 생각해요" : "깊이 생각해",
    "I will see.": isFormal ? "볼게요" : "볼게",
    "It is hard.": isFormal ? "어려워요" : "어려워",
    "I don't know.": isFormal ? "모르겠어요" : "모르겠어",
    "Colors are strong.": isFormal ? "색상이 강해요" : "색상이 강해",
    "Very red and blue.": isFormal ? "매우 빨강과 파랑이에요" : "매우 빨강과 파랑",
    "Depends on you.": isFormal ? "너에게 달렸어요" : "너에게 달렸어",
    "You can think anything.": isFormal ? "아무거나 생각해도 돼요" : "아무거나 생각해도 돼",
    "That is crazy.": isFormal ? "미쳤어요" : "미쳤어",
    "Very strange.": isFormal ? "매우 이상해요" : "매우 이상해",
    "Culture life is good.": isFormal ? "문화생활이 좋아요" : "문화생활이 좋아",
    "Art makes me happy.": isFormal ? "예술은 날 행복하게 해요" : "예술은 날 행복하게 해",
    "I don't feel it.": isFormal ? "느껴지지 않아요" : "느껴지지 않아",
    "No idea.": isFormal ? "아이디어 없어요" : "아이디어 없어",
    "You have big dream.": isFormal ? "큰 꿈을 가지고 있어요" : "큰 꿈을 가지고 있어",
    "Your dream is huge.": isFormal ? "꿈의 크기가 거대해요" : "꿈의 크기가 거대해",
    "Don't sit in reality.": isFormal ? "현실에 앉아있지 마세요" : "현실에 앉아있지 마",
    "No change is bad.": isFormal ? "변화 없음은 나빠요" : "변화 없음은 나빠",
    "We are destiny team.": isFormal ? "운명의 팀이에요" : "운명의 팀이야",
    "You and me are one.": isFormal ? "너와 나는 하나예요" : "너와 나는 하나야",
    "For our future!": isFormal ? "우리 미래를 위하여요!" : "우리 미래를 위하여!",
    "Cheers future!": isFormal ? "미래 안녕요!" : "미래 안녕!",
    "I am happy working.": isFormal ? "일하는 게 행복해요" : "일하는 게 행복해",
    "It is fun to work.": isFormal ? "일하는 게 재밌어요" : "일하는 게 재밌어",
    "I can run very fast.": isFormal ? "달리기를 잘해요" : "달리기를 잘해",
    "I do not like busy.": isFormal ? "바쁜 거 싫어요" : "바쁜 거 싫어",
    "I will do everything.": isFormal ? "모든 걸 다 할게요" : "모든 걸 다 할게",
    "I try very hard.": isFormal ? "노력할게요" : "노력할게",
    "Yes I like lunch.": isFormal ? "점심을 좋아해요" : "점심을 좋아해",
    "No thank you.": isFormal ? "아니요 감사해요" : "아니 감사해",
    "Look at me.": isFormal ? "나를 보세요" : "나를 봐",
    "Watch my body.": isFormal ? "몸을 보세요" : "몸을 봐",
    "I forgot, sorry.": isFormal ? "깜빡했어요 죄송해요" : "깜빡했어 미안",
    "Room is empty.": isFormal ? "방이 비어있어요" : "방이 비어있어",
    "I do it.": isFormal ? "할게요" : "할게",
    "I handle it.": isFormal ? "처리할게요" : "처리할게",
    "It is easy.": isFormal ? "쉬워요" : "쉬워",
    "I have printer.": isFormal ? "프린터 있어요" : "프린터 있어",
    "I remember ink.": isFormal ? "잉크를 기억해요" : "잉크를 기억해",
    "My mind is open.": isFormal ? "마음이 열려있어요" : "마음이 열려있어",
    "I am good worker.": isFormal ? "좋은 직원이에요" : "좋은 직원이야",
    "You are welcome.": isFormal ? "천만에요" : "천만에",
    "It is not me.": isFormal ? "제가 아니에요" : "제가 아니야",
    "Computer is wrong.": isFormal ? "컴퓨터가 틀렸어요" : "컴퓨터가 틀렸어",
    "I am bad.": isFormal ? "나빠요" : "나빠",
    "Sorry for zero.": isFormal ? "0에 대해 미안해요" : "0에 대해 미안해",
    "I will check two times.": isFormal ? "두 번 확인할게요" : "두 번 확인할게",
    "No more mistakes.": isFormal ? "더 이상 실수 없어요" : "더 이상 실수 없어",
    "Thanks for mistake.": isFormal ? "실수해서 고마워요" : "실수해서 고마워",
    "You are kind boss.": isFormal ? "친절한 상사예요" : "친절한 상사야",
    "Work is many.": isFormal ? "일이 많아요" : "일이 많아",
    "I like office.": isFormal ? "사무실을 좋아해요" : "사무실을 좋아해",
    "I go after finish.": isFormal ? "끝나고 가요" : "끝나고 가",
    "I am strong.": isFormal ? "튼튼해요" : "튼튼해",
    "Do this for me.": isFormal ? "이거 해줘요" : "이거 해줘",
    "Help me data.": isFormal ? "데이터 도와줘요" : "데이터 도와줘",
    "Big help is you.": isFormal ? "큰 도움은 당신이에요" : "큰 도움은 당신야",
    "I like your help.": isFormal ? "네 도움을 좋아해요" : "네 도움을 좋아해",
    "Good car.": isFormal ? "좋은 차예요" : "좋은 차야",
    "No thanks.": isFormal ? "아니요 감사해요" : "아니 감사해",
    "My body is bad.": isFormal ? "몸이 나빠요" : "몸이 나빠",
    "I hate feeling.": isFormal ? "느낌이 싫어요" : "느낌이 싫어",
    "I want holiday.": isFormal ? "휴일을 원해요" : "휴일을 원해",
    "No work tomorrow.": isFormal ? "내일 일 없어요" : "내일 일 없어",
    "You understand me.": isFormal ? "나를 이해해요" : "나를 이해해",
    "Good boss.": isFormal ? "좋은 상사예요" : "좋은 상사야",
    "I come back battery.": isFormal ? "배터리로 돌아와요" : "배터리로 돌아와",
    "I sleep all day.": isFormal ? "하루 종일 자요" : "하루 종일 자",
    "See you two days.": isFormal ? "이틀 동안 봐요" : "이틀 동안 봐",
    "Bye bye.": isFormal ? "안녕요" : "안녕",
    "This is my brain baby.": isFormal ? "이건 내 뇌 아기예요" : "이건 내 뇌 아기야",
    "This is my masterpiece.": isFormal ? "이건 내 걸작이에요" : "이건 내 걸작이야",
    "We will break the box.": isFormal ? "상자를 깰 거예요" : "상자를 깰 거야",
    "We will smash it.": isFormal ? "부술 거예요" : "부술 거야",
    "We start with no money.": isFormal ? "돈 없이 시작해요" : "돈 없이 시작해",
    "Use little money.": isFormal ? "적은 돈 써요" : "적은 돈 써",
    "Let's work all night.": isFormal ? "밤새 일해요" : "밤새 일해",
    "No sleep tonight.": isFormal ? "오늘 밤 잠 없어요" : "오늘 밤 잠 없어",
    "We will flip the industry.": isFormal ? "업계를 뒤집을 거예요" : "업계를 뒤집을 거야",
    "We are storm makers.": isFormal ? "태풍 메이커예요" : "태풍 메이커야",
    "My heart jumps.": isFormal ? "심장이 점프해요" : "심장이 점프해",
    "I am scary.": isFormal ? "무서워요" : "무서워",
    "I feel safe.": isFormal ? "안전하다고 느껴요" : "안전하다고 느껴",
    "You are my savior.": isFormal ? "내 구세주예요" : "내 구세주야",
    "That is main point.": isFormal ? "그게 주요 포인트예요" : "그게 주요 포인트야",
    "Money comes there.": isFormal ? "돈이 거기서 와요" : "돈이 거기서 와",
    "He likes us.": isFormal ? "우리를 좋아해요" : "우리를 좋아해",
    "Good vibe.": isFormal ? "좋은 분위기예요" : "좋은 분위기야",
    "I am bad at business.": isFormal ? "사업을 못해요" : "사업을 못해",
    "Not my style.": isFormal ? "내 스타일 아니에요" : "내 스타일이 아니야",
    "I think deep.": isFormal ? "깊게 생각해요" : "깊게 생각해",
    "I will see.": isFormal ? "볼게요" : "볼게",
    "It is hard.": isFormal ? "어려워요" : "어려워",
    "I don't know.": isFormal ? "모르겠어요" : "모르겠어",
    "No feeling.": isFormal ? "느낌 없어요" : "느낌 없어",
    "I agree 100%.": isFormal ? "100% 동의해요" : "100% 동의해",
    "You are right.": isFormal ? "맞아요" : "맞아",
    "We are team.": isFormal ? "우린 팀이에요" : "우린 팀이야",
    "Best team.": isFormal ? "최고의 팀이에요" : "최고의 팀이야",
    "Until hair becomes onion.": isFormal ? "머리가 양파가 될 때까지예요" : "머리가 양파가 될 때까지",
    "Forever young.": isFormal ? "영원히 젊어요" : "영원히 젊어",
    "My soul friend.": isFormal ? "영혼 친구예요" : "영혼 친구야",
    "You are my ghost.": isFormal ? "내 귀신이에요" : "내 귀신이야",
    "He is finished.": isFormal ? "그가 끝났어요" : "그가 끝났어",
    "We are the end.": isFormal ? "우린 끝이에요" : "우린 끝이야",
    "I did nothing bad.": isFormal ? "나쁜 거 안 했어요" : "나쁜 거 안 했어",
    "No other acts.": isFormal ? "다른 행동 없어요" : "다른 행동 없어",
    "I am all in you.": isFormal ? "전부 당신 안에 있어요" : "전부 당신 안에 있어",
    "You are my only.": isFormal ? "내 유일이에요" : "내 유일이야",
    "It's a blessing in disguise.": isFormal ? "전화위복이에요" : "전화위복이야",
    "Rain makes ground hard.": isFormal ? "비가 땅을 딱딱하게 해요" : "비가 땅을 딱딱하게 해",
    "We win together.": isFormal ? "함께 이겨요" : "함께 이겨",
    "We can do it.": isFormal ? "할 수 있어요" : "할 수 있어",
    "You are strange.": isFormal ? "이상해요" : "이상해",
    "Suspicious day.": isFormal ? "의심스러운 날이에요" : "의심스러운 날이야",
    "I am tension.": isFormal ? "긴장이에요" : "긴장이야",
    "Don't scare me.": isFormal ? "겁주지 마세요" : "겁주지 마",
    "I have no word.": isFormal ? "단어 없어요" : "단어 없어",
    "Silent mode.": isFormal ? "조용한 모드예요" : "조용한 모드야",
    "Yes yes yes.": isFormal ? "예 예 예요" : "예 예 예",
    "I become wife.": isFormal ? "아내가 될게요" : "아내가 될게",
    "We are destiny.": isFormal ? "우린 운명이에요" : "우린 운명이야",
    "Match made in heaven.": isFormal ? "천국에서 만든 짝이에요" : "천국에서 만든 짝이야",
    "You look clean.": isFormal ? "깨끗해 보여요" : "깨끗해 보여",
    "Good boy.": isFormal ? "좋은 소년이에요" : "좋은 소년이야",
    "Show your body.": isFormal ? "몸을 보여줘요" : "몸을 보여줘",
    "Do self.": isFormal ? "자기를 해요" : "자기를 해",
    "They like you.": isFormal ? "널 좋아해요" : "널 좋아해",
    "You passed test.": isFormal ? "시험 통과했어요" : "시험 통과했어",
    "You pass.": isFormal ? "통과했어요" : "통과했어",
    "Score is good.": isFormal ? "점수가 좋아요" : "점수가 좋아",
    "Ready start.": isFormal ? "준비 시작이에요" : "준비 시작이야",
    "Prepare well.": isFormal ? "잘 준비해요" : "잘 준비해",
    "It is my personality.": isFormal ? "내 성격이에요" : "내 성격이야",
    "I can't help it.": isFormal ? "어쩔 수 없어요" : "어쩔 수 없어",
    "We fit together.": isFormal ? "우린 딱 맞아요" : "우린 딱 맞아",
    "Match me.": isFormal ? "나한테 맞춰요" : "나한테 맞춰",
    "I hate that.": isFormal ? "그게 싫어요" : "그게 싫어",
    "Can't stand it.": isFormal ? "참을 수 없어요" : "참을 수 없어",
    "Rain hardens ground.": isFormal ? "비가 땅을 딱딱하게 해요" : "비가 땅을 딱딱하게 해",
    "Fighting is good.": isFormal ? "싸움이 좋아요" : "싸움이 좋아",
    "It is party.": isFormal ? "파티예요" : "파티다",
    "Eat well.": isFormal ? "잘 먹어요" : "잘 먹어",
    "I don't know.": isFormal ? "모르겠어요" : "모르겠어",
    "No feeling.": isFormal ? "느낌 없어요" : "느낌 없어",
    "I agree 100%.": isFormal ? "100% 동의해요" : "100% 동의해",
    "You are right.": isFormal ? "맞아요" : "맞아",
    "We are team.": isFormal ? "우린 팀이에요" : "우린 팀이야",
    "Best team.": isFormal ? "최고의 팀이에요" : "최고의 팀이야",
    "Until hair becomes onion.": isFormal ? "머리가 양파가 될 때까지예요" : "머리가 양파가 될 때까지",
    "Forever young.": isFormal ? "영원히 젊어요" : "영원히 젊어",
    "My soul friend.": isFormal ? "영혼 친구예요" : "영혼 친구야",
    "You are my ghost.": isFormal ? "내 귀신이에요" : "내 귀신이야"
  };
  
  if (wrongAnswers[en]) {
    return wrongAnswers[en];
  }
  
  return null; // 번역 필요
}

/**
 * constants.ts 파싱하여 모든 옵션 추출
 */
function parseAllOptions(lines) {
  const options = [];
  let currentChar = null;
  let currentIntent = null;
  let inOptions = false;
  let currentOption = null;
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    
    // 캐릭터 ID 찾기
    const charMatch = line.match(/^(\w+):\s*\{/);
    if (charMatch) {
      currentChar = charMatch[1];
      continue;
    }
    
    // intent 찾기
    const intentMatch = line.match(/^\s*intent:\s*("(?:[^"\\]|\\.)*")\s*,?\s*$/);
    if (intentMatch) {
      try {
        currentIntent = JSON.parse(intentMatch[1]);
      } catch {
        currentIntent = null;
      }
      continue;
    }
    
    // options 시작
    if (line.includes('options: [')) {
      inOptions = true;
      continue;
    }
    
    // options 끝
    if (inOptions && line.match(/^\s*\]\s*,?\s*$/)) {
      inOptions = false;
      currentIntent = null;
      continue;
    }
    
    if (!inOptions) continue;
    
    // text 찾기
    const textMatch = line.match(/^\s*text:\s*("(?:[^"\\]|\\.)*")\s*,?\s*$/);
    if (textMatch) {
      currentOption = { characterId: currentChar, intent: currentIntent };
      try {
        currentOption.text = JSON.parse(textMatch[1]);
      } catch {
        currentOption.text = null;
      }
      continue;
    }
    
    // textKo 찾기
    const textKoMatch = line.match(/^\s*textKo:\s*("(?:[^"\\]|\\.)*")\s*,?\s*$/);
    if (textKoMatch && currentOption) {
      currentOption.textKoLineIndex = i;
      try {
        currentOption.textKo = JSON.parse(textKoMatch[1]);
      } catch {
        currentOption.textKo = null;
      }
      continue;
    }
    
    // correct 찾기
    const correctMatch = line.match(/^\s*correct:\s*(true|false)\s*,?\s*$/);
    if (correctMatch && currentOption && currentOption.text && currentOption.textKo && typeof currentOption.textKoLineIndex === 'number') {
      currentOption.correct = correctMatch[1] === 'true';
      options.push(currentOption);
      currentOption = null;
      continue;
    }
  }
  
  return options;
}

function escapeTsString(s) {
  return s.replace(/\\/g, '\\\\').replace(/"/g, '\\"');
}

async function main() {
  const src = fs.readFileSync(CONSTANTS_PATH, 'utf8');
  const lines = src.split('\n');
  
  const allOptions = parseAllOptions(lines);
  console.log(`Found ${allOptions.length} options`);
  
  const cache = new Map();
  let updated = 0;
  
  for (const option of allOptions) {
    if (!option.text || !option.textKo) continue;
    
    const characterId = option.characterId;
    const isFormal = getFormalityLevel(characterId) === 'formal';
    let newTextKo = option.textKo;
    let shouldUpdate = false;
    
    // 1. 정답인 경우: intent에서 추출
    if (option.correct && option.intent) {
      const intentPhrase = extractFirstQuotedPhrase(option.intent);
      if (intentPhrase && intentPhrase !== option.textKo) {
        newTextKo = intentPhrase;
        shouldUpdate = true;
      }
    }
    
    // 2. 개선된 한국어 표현 적용
    const improved = improveKoreanExpression(newTextKo, option.text, isFormal, option.correct);
    if (improved && improved !== newTextKo) {
      newTextKo = improved;
      shouldUpdate = true;
    }
    
    // 3. 오답인 경우: 자연스러운 한국어 오답 생성
    if (!option.correct) {
      const wrongKo = createWrongAnswerKo(option.text, isFormal);
      if (wrongKo && wrongKo !== option.textKo) {
        newTextKo = wrongKo;
        shouldUpdate = true;
      } else if (!wrongKo) {
        // 번역 필요
        if (!cache.has(option.text)) {
          const translated = await translateEnToKo(option.text);
          if (translated) {
            cache.set(option.text, translated);
          }
        }
        if (cache.has(option.text)) {
          let translated = cache.get(option.text);
          // 자연스럽게 다듬기
          translated = isFormal ? makeFormal(translated) : makeCasual(translated);
          if (translated !== option.textKo) {
            newTextKo = translated;
            shouldUpdate = true;
          }
        }
      }
    }
    
    // 4. 반말/존댓말 최종 조정
    if (newTextKo) {
      const adjusted = isFormal ? makeFormal(newTextKo) : makeCasual(newTextKo);
      if (adjusted !== newTextKo) {
        newTextKo = adjusted;
        shouldUpdate = true;
      }
    }
    
    // 5. 업데이트
    if (shouldUpdate && newTextKo && newTextKo !== option.textKo) {
      const oldLine = lines[option.textKoLineIndex];
      const indentMatch = oldLine.match(/^(\s*)textKo:/);
      const indent = indentMatch ? indentMatch[1] : '';
      const hasComma = /,\s*$/.test(oldLine);
      lines[option.textKoLineIndex] = `${indent}textKo: "${escapeTsString(newTextKo)}"${hasComma ? ',' : ''}`;
      updated++;
      
      if (updated % 50 === 0) {
        console.log(`Updated ${updated}/${allOptions.length}...`);
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
