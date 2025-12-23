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
 * 불완전한 문장 완성 및 반말/존댓말 조정
 */
function fixIncompleteSentence(textKo, characterId) {
  if (!textKo) return textKo;
  let result = textKo.trim();
  const isFormal = getFormalityLevel(characterId) === 'formal';
  
  // 불완전한 문장 완성
  if (result === "눈만 봐도 통하는") {
    result = isFormal ? "눈만 봐도 통하는 거예요" : "눈만 봐도 통하는 거야";
  } else if (result === "열심히 할 준비가") {
    result = isFormal ? "열심히 할 준비가 됐어요" : "열심히 할 준비가 됐어";
  } else if (result === "뒤집어 놓을") {
    result = isFormal ? "뒤집어 놓을 거예요" : "뒤집어 놓을 거야";
  } else if (result === "물러서지 않을") {
    result = isFormal ? "물러서지 않을 거예요" : "물러서지 않을 거야";
  } else if (result === "그럴 리가") {
    result = isFormal ? "그럴 리가 없어요" : "그럴 리가 없어";
  } else if (result === "작업 거시는") {
    result = isFormal ? "작업 거시기예요?" : "작업 거시기야?";
  } else if (result === "끝난 사이") {
    result = isFormal ? "끝난 사이예요" : "끝난 사이야";
  } else if (result === "비 온 뒤에 땅이 굳는") {
    result = isFormal ? "비 온 뒤에 땅이 굳는 거예요" : "비 온 뒤에 땅이 굳는 거야";
  } else if (result === "비 온 뒤에 땅이 굳는다") {
    result = isFormal ? "비 온 뒤에 땅이 굳는 거예요" : "비 온 뒤에 땅이 굳는 거야";
  }
  
  return result;
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
  
  let updated = 0;
  
  for (const option of allOptions) {
    if (!option.text || !option.textKo) continue;
    
    const characterId = option.characterId;
    const newTextKo = fixIncompleteSentence(option.textKo, characterId);
    
    if (newTextKo !== option.textKo) {
      const oldLine = lines[option.textKoLineIndex];
      const indentMatch = oldLine.match(/^(\s*)textKo:/);
      const indent = indentMatch ? indentMatch[1] : '';
      const hasComma = /,\s*$/.test(oldLine);
      lines[option.textKoLineIndex] = `${indent}textKo: "${escapeTsString(newTextKo)}"${hasComma ? ',' : ''}`;
      updated++;
      
      console.log(`Line ${option.textKoLineIndex + 1}: "${option.textKo}" -> "${newTextKo}"`);
    }
  }
  
  fs.writeFileSync(CONSTANTS_PATH, lines.join('\n'), 'utf8');
  console.log(`Done. Updated ${updated} textKo lines.`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
