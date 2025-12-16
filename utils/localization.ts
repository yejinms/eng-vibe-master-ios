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
 * @param levelData - The level data to localize
 * @param lang - UI language (for title, description, context, intent, explanations)
 * @param learningLanguage - Learning language (for option text: 'en' or 'ko')
 */
export function getLocalizedLevelData(levelData: LevelData, lang?: string, learningLanguage: 'en' | 'ko' = 'en'): LevelData {
  const currentLang = lang || i18n.language || 'ko';
  return {
    ...levelData,
    title: getLocalizedText(levelData.title, levelData.titleEn, levelData.titleEs, currentLang),
    description: getLocalizedText(levelData.description, levelData.descriptionEn, levelData.descriptionEs, currentLang),
    rounds: levelData.rounds.map(round => getLocalizedRound(round, currentLang, learningLanguage))
  };
}

/**
 * Get localized dialogue round
 * @param round - The dialogue round to localize
 * @param lang - UI language (for context, intent, explanations)
 * @param learningLanguage - Learning language (for option text: 'en' or 'ko')
 */
export function getLocalizedRound(round: DialogueRound, lang?: string, learningLanguage: 'en' | 'ko' = 'en'): DialogueRound {
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
    options: round.options.map(opt => getLocalizedOption(opt, currentLang, learningLanguage))
  };
}

/**
 * Get localized option
 * @param option - The option to localize
 * @param lang - UI language (for explanations)
 * @param learningLanguage - Learning language (for option text: 'en' or 'ko')
 */
export function getLocalizedOption(option: Option, lang?: string, learningLanguage: 'en' | 'ko' = 'en'): Option {
  const currentLang = lang || i18n.language || 'ko';
  
  // For option text, use learningLanguage
  let optionText = option.text; // Default to English
  if (learningLanguage === 'ko' && option.textKo) {
    optionText = option.textKo;
  }
  
  return {
    ...option,
    text: optionText,
    explain: getLocalizedText(option.explain, option.explainEn, option.explainEs, currentLang)
  };
}

