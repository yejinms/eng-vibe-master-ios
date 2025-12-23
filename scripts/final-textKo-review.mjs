import fs from 'node:fs';
import { fileURLToPath } from 'node:url';

const CONSTANTS_PATH = fileURLToPath(new URL('../constants.ts', import.meta.url));

/**
 * 캐릭터별 반말/존댓말 결정
 */
function getFormalityLevel(characterId) {
  if (characterId === 'daniel') return 'formal'; // 상사 -> 존댓말
  return 'casual'; // 친구/연인 -> 반말
}

/**
 * intent에서 한국어 표현 추출
 */
function extractFirstQuotedPhrase(intent) {
  if (!intent) return null;
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
  if (/[요예]$/.test(result) || result.includes('주세요') || result.includes('보세요') || result.includes('하세요')) {
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
  result = result.replace(/어$/g, '어요');
  result = result.replace(/아$/g, '아요');
  
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
  
  // "너" -> 생략 (상사에게는 부적절)
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
  if (!/[요예]$/.test(result) && !result.includes('주세요') && !result.includes('보세요') && !result.includes('하세요')) {
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
  result = result.replace(/어요$/g, '어');
  result = result.replace(/아요$/g, '아');
  
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
 * constants.ts 파싱
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
  let skipped = 0;
  
  for (const option of allOptions) {
    if (!option.text || !option.textKo) {
      skipped++;
      continue;
    }
    
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
    
    // 2. 반말/존댓말 조정
    if (newTextKo) {
      const adjusted = isFormal ? makeFormal(newTextKo) : makeCasual(newTextKo);
      if (adjusted !== newTextKo) {
        newTextKo = adjusted;
        shouldUpdate = true;
      }
    }
    
    // 3. 업데이트
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
  console.log(`Done. Updated ${updated} textKo lines. Skipped ${skipped}.`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
