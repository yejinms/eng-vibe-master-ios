import { CharacterProfile, Difficulty, LevelData } from '../types';
import { apiRequest } from './api';

export type RelationType = 'boss' | 'ex' | 'neighbor' | 'stranger';
export type ThemeType = 'romance' | 'conflict' | 'secret' | 'business';

/**
 * Generate a new character with AI via server API
 * API key is secured on the server side
 */
export const generateCharacterWithAI = async (
  relation: RelationType,
  theme: ThemeType,
  difficulty: Difficulty
): Promise<CharacterProfile> => {
  try {
    const response = await apiRequest<{ character: CharacterProfile }>(
      '/api/generate-character',
      {
        method: 'POST',
        body: JSON.stringify({ relation, theme, difficulty }),
      }
    );
    
    return response.character;
  } catch (error) {
    console.error('Failed to generate character:', error);
    throw new Error(error instanceof Error ? error.message : 'Failed to generate character');
  }
};

/**
 * Generate next level story for a character via server API
 * API key is secured on the server side
 */
export const generateNextLevelStory = async (
  character: CharacterProfile,
  targetDifficulty: Difficulty
): Promise<LevelData[]> => {
  try {
    const response = await apiRequest<{ levels: LevelData[] }>(
      '/api/generate-next-level',
      {
        method: 'POST',
        body: JSON.stringify({ character, targetDifficulty }),
      }
    );
    
    return response.levels;
  } catch (error) {
    console.error('Failed to generate next level:', error);
    throw new Error(error instanceof Error ? error.message : 'Failed to generate next level story');
  }
};