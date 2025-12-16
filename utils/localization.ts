import { LevelData, DialogueRound, Option } from '../types';
import i18n from '../src/i18n';

/**
 * Get localized text based on current language
 */
export function getLocalizedText(ko: string, en?: string, es?: string, lang?: string): string {
  const currentLang = lang || i18n.language || 'ko';
  
  if (currentLang === 'en' && en) return en;
  if (currentLang === 'es' && es) return es;
  return ko; // Default to Korean
}

/**
 * Get localized level data
 */
export function getLocalizedLevelData(levelData: LevelData, lang?: string): LevelData {
  const currentLang = lang || i18n.language || 'ko';
  return {
    ...levelData,
    title: getLocalizedText(levelData.title, levelData.titleEn, levelData.titleEs, currentLang),
    description: getLocalizedText(levelData.description, levelData.descriptionEn, levelData.descriptionEs, currentLang),
    rounds: levelData.rounds.map(round => getLocalizedRound(round, currentLang))
  };
}

/**
 * Get localized dialogue round
 */
export function getLocalizedRound(round: DialogueRound, lang?: string): DialogueRound {
  const currentLang = lang || i18n.language || 'ko';
  
  // For context, use contextEn for English, contextEs for Spanish, context for Korean
  let context = round.context;
  if (currentLang === 'en' && round.contextEn) {
    context = round.contextEn;
  } else if (currentLang === 'es' && round.contextEs) {
    context = round.contextEs;
  }
  
  return {
    ...round,
    context,
    intent: getLocalizedText(round.intent, round.intentEn, round.intentEs, currentLang),
    options: round.options.map(opt => getLocalizedOption(opt, currentLang))
  };
}

/**
 * Get localized option
 */
export function getLocalizedOption(option: Option, lang?: string): Option {
  const currentLang = lang || i18n.language || 'ko';
  return {
    ...option,
    explain: getLocalizedText(option.explain, option.explainEn, option.explainEs, currentLang)
  };
}

