

export type CharacterId = 'zoey' | 'daniel' | 'lucas' | string;

export type Difficulty = 'beginner' | 'intermediate' | 'advanced';

export interface Option {
  text: string;
  correct: boolean;
  explain: string; // The "vibe" explanation
}

export interface DialogueRound {
  id: string;
  context: string; // The character's message (Korean) - can contain {user}
  contextEn: string; // The character's message (English) - can contain {user}
  intent: string; // The "inner thought" prompt for the user
  options: Option[];
}

export interface LevelData {
  id: number;
  title: string;
  description: string; // Short summary of the situation
  rounds: DialogueRound[]; // Array of 5 rounds
}

export interface CharacterProfile {
  id: CharacterId;
  name: string;
  role: string;
  desc: string;
  avatarSeed: string; // for DiceBear
  colorTheme: string;
  tagColor: string;
  levels: Record<Difficulty, LevelData[]>; // Adaptive content by difficulty
  isCustom?: boolean; // Flag to identify user-created characters
}

export interface Message {
  id: string;
  sender: 'me' | 'other' | 'system';
  text: string;
  textEn?: string; // Optional English text
}

export interface ReviewItem {
  id: string;
  context: string;
  wrongAnswer: string;
  correctOption: Option;
}

export type ViewState = 'ONBOARDING' | 'HOME' | 'GAME' | 'LEVEL_UP' | 'COMPLETED' | 'GAME_OVER' | 'QUIZ' | 'PRACTICE';

export interface UserProfile {
  name: string;
  level: Difficulty;
}

export interface GameState {
  userProfile: UserProfile | null;
  progress: Record<CharacterId, Record<Difficulty, number>>; // charId -> difficulty -> levelIndex
  customCharacters: CharacterProfile[]; // User created characters
}