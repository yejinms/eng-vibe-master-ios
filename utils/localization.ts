import { LevelData, DialogueRound, Option } from '../types';
import i18n from '../src/i18n';

/**
 * Get localized text based on current language
 */
export function getLocalizedText(ko: string, en?: string, es?: string): string {
  const lang = i18n.language || 'ko';
  
  if (lang === 'en' && en) return en;
  if (lang === 'es' && es) return es;
  return ko; // Default to Korean
}

/**
 * Get localized level data
 */
export function getLocalizedLevelData(levelData: LevelData): LevelData {
  return {
    ...levelData,
    title: getLocalizedText(levelData.title, levelData.titleEn, levelData.titleEs),
    description: getLocalizedText(levelData.description, levelData.descriptionEn, levelData.descriptionEs),
    rounds: levelData.rounds.map(round => getLocalizedRound(round))
  };
}

/**
 * Get localized dialogue round
 */
export function getLocalizedRound(round: DialogueRound): DialogueRound {
  const lang = i18n.language || 'ko';
  
  // For context, use contextEn for English, contextEs for Spanish, context for Korean
  let context = round.context;
  if (lang === 'en' && round.contextEn) {
    context = round.contextEn;
  } else if (lang === 'es' && round.contextEs) {
    context = round.contextEs;
  }
  
  return {
    ...round,
    context,
    intent: getLocalizedText(round.intent, round.intentEn, round.intentEs),
    options: round.options.map(opt => getLocalizedOption(opt))
  };
}

/**
 * Get localized option
 */
export function getLocalizedOption(option: Option): Option {
  return {
    ...option,
    explain: getLocalizedText(option.explain, option.explainEn, option.explainEs)
  };
}

