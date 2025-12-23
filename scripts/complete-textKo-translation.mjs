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
 * 존댓말로 변환
 */
function makeFormal(ko) {
  let result = ko.trim();
  
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
  result = result.replace(/어$/g, '어요');
  result = result.replace(/아$/g, '아요');
  result = result.replace(/해봐$/g, '해보세요');
  result = result.replace(/해줘$/g, '해주세요');
  result = result.replace(/알아$/g, '알아요');
  result = result.replace(/모르겠어$/g, '모르겠어요');
  result = result.replace(/괜찮아$/g, '괜찮아요');
  result = result.replace(/맞아$/g, '맞아요');
  result = result.replace(/안 돼$/g, '안 돼요');
  result = result.replace(/돼$/g, '돼요');
  
  // "나" -> "저"
  result = result.replace(/^나\s+/g, '저 ');
  result = result.replace(/^나는\s+/g, '저는 ');
  result = result.replace(/^나를\s+/g, '저를 ');
  result = result.replace(/^나의\s+/g, '제 ');
  result = result.replace(/^내가\s+/g, '제가 ');
  result = result.replace(/^내\s+/g, '제 ');
  
  // "너" -> "당신" (상사에게는 부적절, 맥락에 따라 생략)
  // Daniel의 경우 "너"를 생략하거나 "선생님" 등으로 대체하는 게 나을 수 있음
  // 하지만 일단은 그대로 두고 나중에 조정
  
  return result.trim();
}

/**
 * 반말로 변환 (이미 반말이면 그대로)
 */
function makeCasual(ko) {
  let result = ko.trim();
  
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
  
  return result.trim();
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
 * 한국어를 자연스럽게 다듬기
 */
function naturalizeKorean(ko, isFormal) {
  let result = ko.trim();
  
  // 격식체 잔재 제거
  result = result.replace(/당신은\s+/g, '');
  result = result.replace(/그것은\s+/g, '그건 ');
  result = result.replace(/합니다$/g, '해요');
  result = result.replace(/입니다$/g, '예요');
  result = result.replace(/있습니다$/g, '있어요');
  result = result.replace(/없습니다$/g, '없어요');
  
  // 반말/존댓말 조정
  if (isFormal) {
    result = makeFormal(result);
  } else {
    result = makeCasual(result);
  }
  
  return result.trim();
}

/**
 * 오답 선택지를 자연스러운 한국어로 변환 (헷갈리는 오류 표현 포함)
 */
function createPlausibleWrongAnswer(en, isFormal) {
  // 일부 오답은 의도적으로 어색하게 만들어야 함 (학습자의 실수처럼)
  // 하지만 너무 이상하면 안 되고, 자연스러운 한국어로 변환
  
  // 예: "I will buy you." -> "내가 너 살게" (의도적으로 어색하게)
  // 하지만 일반적으로는 자연스러운 한국어로
  
  return null; // 번역 필요
}

/**
 * constants.ts 파싱
 */
function parseConstants(lines) {
  const result = {
    characters: []
  };
  
  let currentChar = null;
  let currentLevel = null;
  let currentChapter = null;
  let currentRound = null;
  let currentIntent = null;
  let inOptions = false;
  let currentOption = null;
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    
    // 캐릭터 시작
    const charMatch = line.match(/^(\w+):\s*\{/);
    if (charMatch) {
      currentChar = {
        id: charMatch[1],
        rounds: []
      };
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
      if (currentRound) {
        currentRound.intent = currentIntent || '';
        currentRound.options = [];
      }
      continue;
    }
    
    // options 끝
    if (inOptions && line.match(/^\s*\]\s*,?\s*$/)) {
      inOptions = false;
      if (currentRound && currentRound.options.length > 0) {
        if (currentChar) {
          currentChar.rounds.push(currentRound);
        }
      }
      currentRound = null;
      currentIntent = null;
      continue;
    }
    
    if (!inOptions) continue;
    
    // text 찾기
    const textMatch = line.match(/^\s*text:\s*("(?:[^"\\]|\\.)*")\s*,?\s*$/);
    if (textMatch) {
      currentOption = {};
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
    if (correctMatch && currentOption) {
      currentOption.correct = correctMatch[1] === 'true';
      if (currentOption.text && currentOption.textKo && typeof currentOption.textKoLineIndex === 'number') {
        if (!currentRound) {
          currentRound = { intent: currentIntent || '', options: [] };
        }
        currentRound.options.push({
          text: currentOption.text,
          textKo: currentOption.textKo,
          correct: currentOption.correct,
          textKoLineIndex: currentOption.textKoLineIndex,
          characterId: currentChar?.id
        });
      }
      currentOption = null;
      continue;
    }
  }
  
  // 마지막 캐릭터 저장
  if (currentChar && currentChar.rounds.length > 0) {
    result.characters.push(currentChar);
  }
  
  return result;
}

function escapeTsString(s) {
  return s.replace(/\\/g, '\\\\').replace(/"/g, '\\"');
}

async function main() {
  const src = fs.readFileSync(CONSTANTS_PATH, 'utf8');
  const lines = src.split('\n');
  
  const parsed = parseConstants(lines);
  console.log(`Found ${parsed.characters.length} characters`);
  
  let totalOptions = 0;
  let needsTranslation = 0;
  
  // text와 textKo가 동일한 경우 찾기
  for (const char of parsed.characters) {
    for (const round of char.rounds) {
      for (const option of round.options) {
        totalOptions++;
        // textKo가 영어로 시작하거나 text와 동일한 경우
        if (option.textKo && /^[A-Z]/.test(option.textKo) && option.textKo === option.text) {
          needsTranslation++;
          console.log(`Need translation: ${char.id} - "${option.text}" -> "${option.textKo}"`);
        }
      }
    }
  }
  
  console.log(`Total options: ${totalOptions}, Need translation: ${needsTranslation}`);
  
  if (needsTranslation === 0) {
    console.log('All textKo fields appear to be in Korean. Checking for improvements...');
  }
  
  // 전체 옵션 재검토 및 개선
  const cache = new Map();
  let updated = 0;
  
  for (const char of parsed.characters) {
    const formality = getFormalityLevel(char.id);
    const isFormal = formality === 'formal';
    
    for (const round of char.rounds) {
      for (const option of round.options) {
        let newTextKo = option.textKo;
        let shouldUpdate = false;
        
        // 1. textKo가 영어인 경우 번역
        if (option.textKo && /^[A-Za-z]/.test(option.textKo.trim()) && option.textKo === option.text) {
          if (!cache.has(option.text)) {
            const translated = await translateEnToKo(option.text);
            if (translated) {
              cache.set(option.text, translated);
            }
          }
          if (cache.has(option.text)) {
            newTextKo = cache.get(option.text);
            shouldUpdate = true;
          }
        }
        
        // 2. 정답인 경우 intent에서 추출
        if (option.correct && round.intent) {
          const intentPhrase = extractFirstQuotedPhrase(round.intent);
          if (intentPhrase) {
            newTextKo = intentPhrase;
            shouldUpdate = true;
          }
        }
        
        // 3. 반말/존댓말 조정
        if (newTextKo && newTextKo !== option.textKo) {
          newTextKo = naturalizeKorean(newTextKo, isFormal);
        } else if (newTextKo) {
          const adjusted = isFormal ? makeFormal(newTextKo) : makeCasual(newTextKo);
          if (adjusted !== newTextKo) {
            newTextKo = adjusted;
            shouldUpdate = true;
          }
        }
        
        // 4. 업데이트
        if (shouldUpdate && newTextKo && newTextKo !== option.textKo) {
          const oldLine = lines[option.textKoLineIndex];
          const indentMatch = oldLine.match(/^(\s*)textKo:/);
          const indent = indentMatch ? indentMatch[1] : '';
          const hasComma = /,\s*$/.test(oldLine);
          lines[option.textKoLineIndex] = `${indent}textKo: "${escapeTsString(newTextKo)}"${hasComma ? ',' : ''}`;
          updated++;
          
          if (updated % 50 === 0) {
            console.log(`Updated ${updated}...`);
          }
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
