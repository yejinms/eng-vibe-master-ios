import { GoogleGenAI, Type } from "@google/genai";
import { CharacterProfile, DialogueRound, Difficulty, LevelData } from '../types';

export type RelationType = 'boss' | 'ex' | 'neighbor' | 'stranger';
export type ThemeType = 'romance' | 'conflict' | 'secret' | 'business';

const NAMES = ['Alex', 'Jamie', 'Chris', 'Taylor', 'Jordan', 'Casey', 'Morgan', 'Sam', 'Riley', 'Avery', 'Robin', 'Quinn'];
const AVATARS = ['Felix', 'Aneka', 'Zoe', 'Bear', 'Christian', 'Brian', 'Micah', 'Jack', 'Trouble', 'Boo'];

const COLOR_THEMES = [
  { bg: 'bg-purple-100', tag: 'bg-purple-200 text-purple-700' },
  { bg: 'bg-green-100', tag: 'bg-green-200 text-green-700' },
  { bg: 'bg-teal-100', tag: 'bg-teal-200 text-teal-700' },
  { bg: 'bg-indigo-100', tag: 'bg-indigo-200 text-indigo-700' },
  { bg: 'bg-rose-100', tag: 'bg-rose-200 text-rose-700' },
  { bg: 'bg-amber-100', tag: 'bg-amber-200 text-amber-800' }
];

export const generateCharacterWithAI = async (
  relation: RelationType,
  theme: ThemeType,
  difficulty: Difficulty
): Promise<CharacterProfile> => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  const model = "gemini-2.5-flash";

  // Pre-select assets to ensure consistency between Prompt and Result
  const seed = Math.floor(Math.random() * 10000);
  const charName = NAMES[Math.floor(Math.random() * NAMES.length)];
  const avatar = AVATARS[Math.floor(Math.random() * AVATARS.length)];
  const randomTheme = COLOR_THEMES[Math.floor(Math.random() * COLOR_THEMES.length)];

  const prompt = `
    Create a 3-chapter story arc for an English learning game.
    
    Settings:
    - Partner Name: ${charName}
    - User's Partner Role: ${relation}
    - Situation/Vibe: ${theme}
    - Difficulty Level: ${difficulty.toUpperCase()}
    
    Structure:
    - Chapter 1: Introduction/Beginning.
    - Chapter 2: Conflict/Deepening.
    - Chapter 3: Resolution/Climax.
    
    Each chapter must have exactly 5 dialogue rounds.
    
    IMPORTANT RULES: 
    1. The partner's name is **${charName}**. Refer to them as ${charName} in descriptions, but in dialogue they speak as "Me".
    2. Use **{user}** as the placeholder for the player's name. Do NOT use {username} or [user].
    3. **All 3 options must have roughly similar lengths.** Do not make the correct answer significantly longer.
    4. **CRITICAL:** 'context' and 'contextEn' MUST be **direct dialogue** spoken by the partner (e.g., "Hello, how are you?"), NOT a description of the scene.
    5. **CRITICAL:** 'options.text' MUST be in **English**. The user is learning English, so they need English choices to respond.
    6. 'intent' MUST be in **Korean** and describe what the user *should* intend to say (e.g., "반갑다고 인사하려면?").
    7. 'explain' MUST be in **Korean**.
    8. For 'Beginner': Use simple vocabulary and common idioms.
    9. For 'Intermediate': Use situational phrases and phrasal verbs.
    10. For 'Advanced': Use complex idioms, slang, or professional nuance.

    Output JSON structure:
    {
      "storyDescription": "string (Short description of the character and story in Korean)",
      "chapters": [
        {
          "title": "string (Korean title)",
          "description": "string (Korean description)",
          "rounds": [
            {
               "context": "string (Korean translation of the dialogue)",
               "contextEn": "string (Original English dialogue)",
               "intent": "string (Korean instruction)",
               "options": [
                  { "text": "string (English sentence)", "correct": boolean, "explain": "string (Korean explanation)" }
               ]
            }
          ]
        }
      ]
    }
  `;

  const responseSchema = {
    type: Type.OBJECT,
    properties: {
      storyDescription: { type: Type.STRING },
      chapters: {
        type: Type.ARRAY,
        items: {
          type: Type.OBJECT,
          properties: {
            title: { type: Type.STRING },
            description: { type: Type.STRING },
            rounds: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  context: { type: Type.STRING },
                  contextEn: { type: Type.STRING },
                  intent: { type: Type.STRING },
                  options: {
                    type: Type.ARRAY,
                    items: {
                      type: Type.OBJECT,
                      properties: {
                        text: { type: Type.STRING },
                        correct: { type: Type.BOOLEAN },
                        explain: { type: Type.STRING }
                      },
                      required: ["text", "correct", "explain"]
                    }
                  }
                },
                required: ["context", "contextEn", "intent", "options"]
              }
            }
          },
          required: ["title", "description", "rounds"]
        }
      }
    },
    required: ["storyDescription", "chapters"]
  };

  try {
    const result = await ai.models.generateContent({
      model,
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: responseSchema,
      }
    });

    const data = JSON.parse(result.text);
    
    const levels = data.chapters.map((chapter: any, chIdx: number) => ({
        id: chIdx + 1,
        title: chapter.title,
        description: chapter.description,
        rounds: chapter.rounds.map((r: any, rIdx: number) => ({
            id: `ai-${seed}-${chIdx}-${rIdx}`,
            ...r
        }))
    }));

    // Assign generated levels ONLY to the requested difficulty
    const levelsRecord: Record<Difficulty, LevelData[]> = {
        beginner: [],
        intermediate: [],
        advanced: []
    };
    levelsRecord[difficulty] = levels;

    return {
      id: `custom-${Date.now()}`,
      name: charName, // Use the pre-selected name
      role: relation.charAt(0).toUpperCase() + relation.slice(1),
      desc: data.storyDescription || "Custom Story",
      avatarSeed: `${avatar}-${seed}`,
      colorTheme: randomTheme.bg,
      tagColor: randomTheme.tag,
      isCustom: true,
      levels: levelsRecord
    };
  } catch (error) {
    console.error("AI Gen Error", error);
    throw new Error("Failed");
  }
};

export const generateNextLevelStory = async (
  character: CharacterProfile,
  targetDifficulty: Difficulty
): Promise<LevelData[]> => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  const model = "gemini-2.5-flash";
  const seed = Math.floor(Math.random() * 10000);

  const prompt = `
    Continue the story of ${character.name} for an English learning game.
    
    Context:
    - Character Name: ${character.name}
    - Role: ${character.role}
    - Story Description: ${character.desc}
    - Target Difficulty Level: ${targetDifficulty.toUpperCase()}
    
    Task:
    Create a 3-chapter continuation of the story suitable for the ${targetDifficulty} level.
    The story should naturally progress from previous events, deepening the relationship or introducing new scenarios fitting the difficulty.
    
    Structure:
    - Chapter 1: Beginning of new phase.
    - Chapter 2: Development.
    - Chapter 3: Conclusion of this phase.
    
    Each chapter must have exactly 5 dialogue rounds.
    
    IMPORTANT RULES: 
    1. The partner's name is **${character.name}**. Refer to them as ${character.name} in descriptions, but in dialogue they speak as "Me".
    2. Use **{user}** as the placeholder for the player's name.
    3. **All 3 options must have roughly similar lengths.**
    4. **CRITICAL:** 'context' and 'contextEn' MUST be **direct dialogue**.
    5. **CRITICAL:** 'options.text' MUST be in **English**.
    6. 'intent' MUST be in **Korean** and describe what the user *should* intend to say.
    7. 'explain' MUST be in **Korean**.
    8. For 'Beginner': Use simple vocabulary and common idioms.
    9. For 'Intermediate': Use situational phrases and phrasal verbs.
    10. For 'Advanced': Use complex idioms, slang, or professional nuance.

    Output JSON structure:
    {
      "chapters": [
        {
          "title": "string (Korean title)",
          "description": "string (Korean description)",
          "rounds": [
            {
               "context": "string (Korean translation of the dialogue)",
               "contextEn": "string (Original English dialogue)",
               "intent": "string (Korean instruction)",
               "options": [
                  { "text": "string (English sentence)", "correct": boolean, "explain": "string (Korean explanation)" }
               ]
            }
          ]
        }
      ]
    }
  `;

  const responseSchema = {
    type: Type.OBJECT,
    properties: {
      chapters: {
        type: Type.ARRAY,
        items: {
          type: Type.OBJECT,
          properties: {
            title: { type: Type.STRING },
            description: { type: Type.STRING },
            rounds: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  context: { type: Type.STRING },
                  contextEn: { type: Type.STRING },
                  intent: { type: Type.STRING },
                  options: {
                    type: Type.ARRAY,
                    items: {
                      type: Type.OBJECT,
                      properties: {
                        text: { type: Type.STRING },
                        correct: { type: Type.BOOLEAN },
                        explain: { type: Type.STRING }
                      },
                      required: ["text", "correct", "explain"]
                    }
                  }
                },
                required: ["context", "contextEn", "intent", "options"]
              }
            }
          },
          required: ["title", "description", "rounds"]
        }
      }
    },
    required: ["chapters"]
  };

  try {
    const result = await ai.models.generateContent({
      model,
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: responseSchema,
      }
    });

    const data = JSON.parse(result.text);
    
    const levels = data.chapters.map((chapter: any, chIdx: number) => ({
        id: chIdx + 1,
        title: chapter.title,
        description: chapter.description,
        rounds: chapter.rounds.map((r: any, rIdx: number) => ({
            id: `ai-next-${seed}-${chIdx}-${rIdx}`,
            ...r
        }))
    }));

    return levels;

  } catch (error) {
    console.error("AI Gen Error", error);
    throw new Error("Failed to generate next level");
  }
};