const express = require('express');
const cors = require('cors');
const { GoogleGenAI, Type } = require('@google/genai');
const os = require('os');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Initialize Gemini AI
const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
if (!GEMINI_API_KEY) {
  console.error('ERROR: GEMINI_API_KEY is not set in environment variables');
  process.exit(1);
}

const ai = new GoogleGenAI({ apiKey: GEMINI_API_KEY });
const model = "gemini-2.5-flash";

// Constants (shared with client)
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

// Helper function to generate character
async function generateCharacterWithAI(relation, theme, difficulty, uiLanguage = 'ko', learningLanguage = 'en') {
  const seed = Math.floor(Math.random() * 10000);
  const charName = NAMES[Math.floor(Math.random() * NAMES.length)];
  const avatar = AVATARS[Math.floor(Math.random() * AVATARS.length)];
  const randomTheme = COLOR_THEMES[Math.floor(Math.random() * COLOR_THEMES.length)];

  const uiLangName = uiLanguage === 'es' ? 'Spanish' : (uiLanguage === 'en' ? 'English' : 'Korean');
  const targetLangName = learningLanguage === 'ko' ? 'Korean' : 'English';

  const prompt = `
    Create a 3-chapter story arc for a ${targetLangName} learning game.
    The user speaks ${uiLangName}.
    
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
    5. **CRITICAL:** 'options.text' MUST be in **English**.
    6. **CRITICAL:** 'options.textKo' MUST be in **Korean**.
    7. 'intent' MUST be in **${uiLangName}** and describe what the user *should* intend to say.
    8. 'explain' MUST be in **${uiLangName}**.
    9. 'title' and 'description' MUST be in **${uiLangName}**.
    10. 'context' MUST be the translation of the dialogue in **${uiLangName}**.
    11. For 'Beginner': Use simple vocabulary and common idioms.
    12. For 'Intermediate': Use situational phrases and phrasal verbs.
    13. For 'Advanced': Use complex idioms, slang, or professional nuance.

    IMPORTANT: You must provide storyDescription in three languages:
    - storyDescription: Korean version
    - storyDescriptionEn: English version  
    - storyDescriptionEs: Spanish version
    
    Output JSON structure:
    {
      "storyDescription": "string (Short description of the character and story in Korean)",
      "storyDescriptionEn": "string (Short description of the character and story in English)",
      "storyDescriptionEs": "string (Short description of the character and story in Spanish)",
      "chapters": [
        {
          "title": "string (Title in ${uiLangName})",
          "description": "string (Description in ${uiLangName})",
          "rounds": [
            {
               "context": "string (Partner's dialogue translated to ${uiLangName})",
               "contextEn": "string (Partner's dialogue in English)",
               "intent": "string (Instruction in ${uiLangName})",
               "options": [
                  { 
                    "text": "string (English option)", 
                    "textKo": "string (Korean option)",
                    "correct": boolean, 
                    "explain": "string (Explanation in ${uiLangName})" 
                  }
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
      storyDescriptionEn: { type: Type.STRING },
      storyDescriptionEs: { type: Type.STRING },
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
                        textKo: { type: Type.STRING },
                        correct: { type: Type.BOOLEAN },
                        explain: { type: Type.STRING }
                      },
                      required: ["text", "textKo", "correct", "explain"]
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
    required: ["storyDescription", "storyDescriptionEn", "storyDescriptionEs", "chapters"]
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

    // Check if result has text property
    if (!result || !result.text) {
      console.error("AI Generation Error: Invalid response structure", result);
      throw new Error("AI 응답 형식이 올바르지 않습니다. 응답을 확인할 수 없습니다.");
    }

    let data;
    try {
      data = JSON.parse(result.text);
    } catch (parseError) {
      console.error("JSON Parse Error:", parseError);
      console.error("Response text:", result.text);
      throw new Error(`AI 응답 파싱 실패: ${parseError.message}`);
    }

    // Validate response structure
    if (!data.chapters || !Array.isArray(data.chapters)) {
      console.error("Invalid response structure:", data);
      throw new Error("AI 응답에 chapters가 없거나 배열이 아닙니다.");
    }

    // Validate each chapter has rounds
    for (let i = 0; i < data.chapters.length; i++) {
      const chapter = data.chapters[i];
      if (!chapter.rounds || !Array.isArray(chapter.rounds)) {
        console.error(`Chapter ${i} missing rounds:`, chapter);
        throw new Error(`Chapter ${i + 1}에 rounds가 없거나 배열이 아닙니다.`);
      }
      if (chapter.rounds.length !== 5) {
        console.error(`Chapter ${i} has ${chapter.rounds.length} rounds, expected 5`);
        throw new Error(`Chapter ${i + 1}에 rounds가 5개가 아닙니다 (현재: ${chapter.rounds.length}개).`);
      }
    }
    
    const levels = data.chapters.map((chapter, chIdx) => ({
      id: chIdx + 1,
      title: chapter.title,
      description: chapter.description,
      rounds: chapter.rounds.map((r, rIdx) => ({
        id: `ai-${seed}-${chIdx}-${rIdx}`,
        ...r
      }))
    }));

    // Assign generated levels ONLY to the requested difficulty
    const levelsRecord = {
      beginner: [],
      intermediate: [],
      advanced: []
    };
    levelsRecord[difficulty] = levels;

    return {
      id: `custom-${Date.now()}`,
      name: charName,
      role: relation.charAt(0).toUpperCase() + relation.slice(1),
      avatarSeed: `${avatar}-${seed}`,
      colorTheme: randomTheme.bg,
      tagColor: randomTheme.tag,
      isCustom: true,
      levels: levelsRecord
    };
  } catch (error) {
    console.error("AI Generation Error:", error);
    // Include more detailed error information
    const errorMessage = error.message || "Failed to generate character";
    const errorDetails = error.stack || error.toString();
    console.error("Error details:", errorDetails);
    throw new Error(`캐릭터 생성 실패: ${errorMessage}`);
  }
}

// Helper function to generate next level story
async function generateNextLevelStory(character, targetDifficulty, uiLanguage = 'ko', learningLanguage = 'en') {
  const seed = Math.floor(Math.random() * 10000);

  const uiLangName = uiLanguage === 'es' ? 'Spanish' : (uiLanguage === 'en' ? 'English' : 'Korean');
  const targetLangName = learningLanguage === 'ko' ? 'Korean' : 'English';

  const prompt = `
    Continue the story of ${character.name} for a ${targetLangName} learning game.
    The user speaks ${uiLangName}.
    
    Context:
    - Character Name: ${character.name}
    - Role: ${character.role}
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
    6. **CRITICAL:** 'options.textKo' MUST be in **Korean**.
    7. 'intent' MUST be in **${uiLangName}** and describe what the user *should* intend to say.
    8. 'explain' MUST be in **${uiLangName}**.
    9. 'title' and 'description' MUST be in **${uiLangName}**.
    10. 'context' MUST be the translation of the dialogue in **${uiLangName}**.
    11. For 'Beginner': Use simple vocabulary and common idioms.
    12. For 'Intermediate': Use situational phrases and phrasal verbs.
    13. For 'Advanced': Use complex idioms, slang, or professional nuance.

    Output JSON structure:
    {
      "chapters": [
        {
          "title": "string (Title in ${uiLangName})",
          "description": "string (Description in ${uiLangName})",
          "rounds": [
            {
               "context": "string (Partner's dialogue translated to ${uiLangName})",
               "contextEn": "string (Partner's dialogue in English)",
               "intent": "string (Instruction in ${uiLangName})",
               "options": [
                  { 
                    "text": "string (English option)", 
                    "textKo": "string (Korean option)",
                    "correct": boolean, 
                    "explain": "string (Explanation in ${uiLangName})" 
                  }
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
                        textKo: { type: Type.STRING },
                        correct: { type: Type.BOOLEAN },
                        explain: { type: Type.STRING }
                      },
                      required: ["text", "textKo", "correct", "explain"]
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

    // Check if result has text property
    if (!result || !result.text) {
      console.error("AI Generation Error: Invalid response structure", result);
      throw new Error("AI 응답 형식이 올바르지 않습니다. 응답을 확인할 수 없습니다.");
    }

    let data;
    try {
      data = JSON.parse(result.text);
    } catch (parseError) {
      console.error("JSON Parse Error:", parseError);
      console.error("Response text:", result.text);
      throw new Error(`AI 응답 파싱 실패: ${parseError.message}`);
    }

    // Validate response structure
    if (!data.chapters || !Array.isArray(data.chapters)) {
      console.error("Invalid response structure:", data);
      throw new Error("AI 응답에 chapters가 없거나 배열이 아닙니다.");
    }

    // Validate each chapter has rounds
    for (let i = 0; i < data.chapters.length; i++) {
      const chapter = data.chapters[i];
      if (!chapter.rounds || !Array.isArray(chapter.rounds)) {
        console.error(`Chapter ${i} missing rounds:`, chapter);
        throw new Error(`Chapter ${i + 1}에 rounds가 없거나 배열이 아닙니다.`);
      }
      if (chapter.rounds.length !== 5) {
        console.error(`Chapter ${i} has ${chapter.rounds.length} rounds, expected 5`);
        throw new Error(`Chapter ${i + 1}에 rounds가 5개가 아닙니다 (현재: ${chapter.rounds.length}개).`);
      }
    }
    
    const levels = data.chapters.map((chapter, chIdx) => ({
      id: chIdx + 1,
      title: chapter.title,
      description: chapter.description,
      rounds: chapter.rounds.map((r, rIdx) => ({
        id: `ai-next-${seed}-${chIdx}-${rIdx}`,
        ...r
      }))
    }));

    return levels;
  } catch (error) {
    console.error("AI Generation Error:", error);
    // Include more detailed error information
    const errorMessage = error.message || "Failed to generate next level story";
    const errorDetails = error.stack || error.toString();
    console.error("Error details:", errorDetails);
    throw new Error(`다음 레벨 생성 실패: ${errorMessage}`);
  }
}

// API Routes

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok', message: 'VibeCheck API Server' });
});

// Generate new character
app.post('/api/generate-character', async (req, res) => {
  try {
    const { relation, theme, difficulty, uiLanguage, learningLanguage } = req.body;

    // Validation
    if (!relation || !theme || !difficulty) {
      return res.status(400).json({ 
        error: 'Missing required fields: relation, theme, difficulty' 
      });
    }

    const validDifficulties = ['beginner', 'intermediate', 'advanced'];
    if (!validDifficulties.includes(difficulty)) {
      return res.status(400).json({ 
        error: 'Invalid difficulty. Must be: beginner, intermediate, or advanced' 
      });
    }

    console.log(`[API] Generating character: ${relation} / ${theme} / ${difficulty} (UI: ${uiLanguage}, Learning: ${learningLanguage})`);
    const character = await generateCharacterWithAI(relation, theme, difficulty, uiLanguage, learningLanguage);
    
    res.json({ character });
  } catch (error) {
    console.error('[API] Error generating character:', error);
    console.error('[API] Error stack:', error.stack);
    const errorMessage = error.message || 'Failed to generate character';
    res.status(500).json({ 
      error: errorMessage,
      details: process.env.NODE_ENV === 'development' ? error.stack : undefined
    });
  }
});

// Generate next level story
app.post('/api/generate-next-level', async (req, res) => {
  try {
    const { character, targetDifficulty, uiLanguage, learningLanguage } = req.body;

    // Validation
    if (!character || !targetDifficulty) {
      return res.status(400).json({ 
        error: 'Missing required fields: character, targetDifficulty' 
      });
    }

    const validDifficulties = ['beginner', 'intermediate', 'advanced'];
    if (!validDifficulties.includes(targetDifficulty)) {
      return res.status(400).json({ 
        error: 'Invalid difficulty. Must be: beginner, intermediate, or advanced' 
      });
    }

    console.log(`[API] Generating next level for ${character.name}: ${targetDifficulty} (UI: ${uiLanguage}, Learning: ${learningLanguage})`);
    const levels = await generateNextLevelStory(character, targetDifficulty, uiLanguage, learningLanguage);
    
    res.json({ levels });
  } catch (error) {
    console.error('[API] Error generating next level:', error);
    console.error('[API] Error stack:', error.stack);
    const errorMessage = error.message || 'Failed to generate next level story';
    res.status(500).json({ 
      error: errorMessage,
      details: process.env.NODE_ENV === 'development' ? error.stack : undefined
    });
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Unhandled error:', err);
  res.status(500).json({ error: 'Internal server error' });
});

// Helper function to get local IP address
function getLocalIP() {
  const interfaces = os.networkInterfaces();
  for (const name of Object.keys(interfaces)) {
    for (const iface of interfaces[name]) {
      // Skip internal (loopback) and non-IPv4 addresses
      if (iface.family === 'IPv4' && !iface.internal) {
        return iface.address;
      }
    }
  }
  return 'localhost';
}

// Start server
// Listen on all network interfaces (0.0.0.0) to allow access from other devices
app.listen(PORT, '0.0.0.0', () => {
  const localIP = getLocalIP();
  console.log(`🚀 VibeCheck API Server running on port ${PORT}`);
  console.log(`📝 Health check: http://localhost:${PORT}/health`);
  console.log(`🌐 Network access: http://${localIP}:${PORT}/health`);
  console.log(`\n💡 iOS 앱에서 사용할 서버 URL: http://${localIP}:${PORT}`);
});
