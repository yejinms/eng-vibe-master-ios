import fs from 'node:fs';
import { fileURLToPath } from 'node:url';

const CONSTANTS_PATH = fileURLToPath(new URL('../constants.ts', import.meta.url));

function extractFirstQuotedPhrase(intent) {
  // intent strings usually contain a target Korean phrase wrapped in single quotes.
  const m = intent.match(/'([^']+)'/);
  if (!m) return null;
  let phrase = m[1].trim();
  // Remove parenthetical explanations: e.g. "당 떨어졌어(배고파)" -> "당 떨어졌어"
  phrase = phrase.replace(/\([^)]*\)/g, '').trim();
  return phrase || null;
}

function escapeTsString(s) {
  return s.replace(/\\/g, '\\\\').replace(/"/g, '\\"');
}

function casualizeKorean(s) {
  let out = (s ?? '').trim();
  // remove trailing punctuation
  out = out.replace(/[\s\u00A0]+$/g, '');
  out = out.replace(/[.?!]+$/g, '');

  // common polite -> casual conversions
  out = out
    .replace(/^나는\s+/g, '나 ')
    .replace(/^나는/g, '나')
    .replace(/^저는\s+/g, '난 ')
    .replace(/^저는/g, '난')
    .replace(/^제가\s+/g, '내가 ')
    .replace(/^제가/g, '내가')
    .replace(/\s+입니다$/g, '야')
    .replace(/입니다$/g, '야')
    .replace(/이에요$/g, '이야')
    .replace(/예요$/g, '야')
    .replace(/해요$/g, '해')
    .replace(/돼요$/g, '돼')
    .replace(/있어요$/g, '있어')
    .replace(/없어요$/g, '없어')
    .replace(/좋아요$/g, '좋아')
    .replace(/싫어요$/g, '싫어')
    .replace(/필요해요$/g, '필요해')
    .replace(/할게요$/g, '할게')
    .replace(/갈게요$/g, '갈게')
    .replace(/줄게요$/g, '줄게')
    .replace(/주세요$/g, '줘')
    .replace(/거예요$/g, '거야');

  return out.trim();
}

function applyLiteralOverrides(en, ko) {
  const e = en.trim();

  // Preserve "wrongness" for certain learner-mistake options that MT tends to "fix".
  if (/^I\s+will\s+buy\s+you\.?$/i.test(e) || /\bbuy\s+you\b/i.test(e)) {
    return '내가 너 살게';
  }

  // Make some common "dictionary form" endings feel more spoken.
  if (ko.endsWith('외롭다')) return ko.replace(/외롭다$/, '외로워');
  if (ko.endsWith('바쁘다')) return ko.replace(/바쁘다$/, '바빠');
  if (ko.endsWith('괜찮다')) return ko.replace(/괜찮다$/, '괜찮아');
  if (ko.endsWith('필요하다')) return ko.replace(/필요하다$/, '필요해');
  if (ko.endsWith('가능하다')) return ko.replace(/가능하다$/, '가능해');

  // If the English explicitly signals \"just/okay\", add a weakening adverb.
  if (/\bok\b/i.test(e) && !/(그냥|적당히|그럭저럭)/.test(ko)) {
    return `그냥 ${ko}`.trim();
  }

  return ko;
}

async function translateEnToKo(text) {
  const q = encodeURIComponent(text);
  const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=ko&dt=t&q=${q}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Translate HTTP ${res.status}`);
  const json = await res.json();
  const translated = (json?.[0] ?? []).map((x) => x?.[0] ?? '').join('');
  return translated;
}

function parseConstantsForOptions(lines) {
  let currentIntent = null;
  let inOptions = false;
  let currentRound = null;

  /** @type {{ intent: string, options: { text: string, correct: boolean, textKoLineIndex: number }[] }[]} */
  const rounds = [];

  /** @type {{ text?: string, correct?: boolean, textKoLineIndex?: number }} */
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
      continue;
    }

    const correctMatch = line.match(/^\s*correct:\s*(true|false)\s*,?\s*$/);
    if (correctMatch && opt) {
      opt.correct = correctMatch[1] === 'true';
      // finalize option when we have necessary fields
      if (opt.text && typeof opt.correct === 'boolean' && typeof opt.textKoLineIndex === 'number') {
        currentRound?.options.push({
          text: opt.text,
          correct: opt.correct,
          textKoLineIndex: opt.textKoLineIndex
        });
        opt = null;
      }
      continue;
    }
  }

  return rounds;
}

async function main() {
  const src = fs.readFileSync(CONSTANTS_PATH, 'utf8');
  const lines = src.split('\n');

  const rounds = parseConstantsForOptions(lines);
  const totalOptions = rounds.reduce((acc, r) => acc + r.options.length, 0);
  console.log(`Found rounds: ${rounds.length}, options: ${totalOptions}`);

  const cache = new Map();

  async function getKoForIncorrect(en) {
    if (cache.has(en)) return cache.get(en);
    const koRaw = await translateEnToKo(en);
    const ko = applyLiteralOverrides(en, casualizeKorean(koRaw));
    cache.set(en, ko);
    return ko;
  }

  async function getKoForCorrect(intent, en) {
    const phrase = extractFirstQuotedPhrase(intent);
    if (phrase) return phrase;
    return await getKoForIncorrect(en);
  }

  // Process sequentially to be kind to the endpoint
  let updated = 0;
  for (const round of rounds) {
    for (const option of round.options) {
      let ko;
      if (option.correct) {
        ko = await getKoForCorrect(round.intent, option.text);
      } else {
        ko = await getKoForIncorrect(option.text);
      }

      const oldLine = lines[option.textKoLineIndex];
      const indentMatch = oldLine.match(/^(\s*)textKo:/);
      const indent = indentMatch ? indentMatch[1] : '';
      const hasComma = /,\s*$/.test(oldLine);
      lines[option.textKoLineIndex] = `${indent}textKo: "${escapeTsString(ko)}"${hasComma ? ',' : ''}`;
      updated++;

      if (updated % 50 === 0) {
        console.log(`Updated ${updated}/${totalOptions}...`);
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
