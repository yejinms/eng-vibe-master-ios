import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import HomeView from './views/HomeView';
import GameView from './views/GameView';
import LevelUpView from './views/LevelUpView';
import GameOverView from './views/GameOverView';
import OnboardingView from './views/OnboardingView';
import QuizView from './views/QuizView';
import PracticeView from './views/PracticeView';
import { CharacterId, GameState, ViewState, ReviewItem, CharacterProfile, UserProfile, Difficulty, DialogueRound, LastMessage } from './types';
import { CHARACTERS } from './constants';
import { RelationType, ThemeType, generateCharacterWithAI, generateNextLevelStory } from './utils/generator';
import { storage } from './utils/storage';
import { getLocalizedLevelData, getLocalizedRound } from './utils/localization';

const App: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [view, setView] = useState<ViewState>('ONBOARDING');
  const [activeCharId, setActiveCharId] = useState<CharacterId | null>(null);
  const [reviewItems, setReviewItems] = useState<ReviewItem[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);
  const [collectedRounds, setCollectedRounds] = useState<{ charName: string; round: DialogueRound }[]>([]);
  
  // Default game state
  const defaultGameState: GameState = { 
    userProfile: null,
    progress: { zoey: {beginner:0, intermediate:0, advanced:0}, daniel: {beginner:0, intermediate:0, advanced:0}, lucas: {beginner:0, intermediate:0, advanced:0} }, 
    customCharacters: [] 
  };

  // Persisted Progress State - initialize with localStorage for immediate render, then migrate to Capacitor
  const [gameState, setGameState] = useState<GameState>(() => {
    // Try to load from localStorage first (for immediate render and backwards compatibility)
    if (typeof window !== 'undefined') {
      try {
        const saved = localStorage.getItem('vibeMasterV6');
        if (saved) {
          const parsed = JSON.parse(saved);
          // Backward compatibility: add default learningLanguage if missing
          if (parsed.userProfile && !parsed.userProfile.learningLanguage) {
            parsed.userProfile.learningLanguage = 'en';
          }
          return parsed;
        }
      } catch (e) {
        console.error('Error loading from localStorage:', e);
      }
    }
    return defaultGameState;
  });

  // Load from Capacitor Preferences on mount and migrate from localStorage
  useEffect(() => {
    const loadGameState = async () => {
      try {
        const saved = await storage.get('vibeMasterV6');
        if (saved) {
          // Backward compatibility: add default learningLanguage if missing
          if (saved.userProfile && !saved.userProfile.learningLanguage) {
            saved.userProfile.learningLanguage = 'en';
            await storage.set('vibeMasterV6', saved);
          }
          setGameState(saved);
          // Migrate from localStorage to Capacitor if localStorage has data
          if (typeof window !== 'undefined') {
            try {
              const localSaved = localStorage.getItem('vibeMasterV6');
              if (localSaved) {
                // Already migrated or same data
                localStorage.removeItem('vibeMasterV6'); // Clean up old storage
              }
            } catch (e) {
              // Ignore
            }
          }
        } else {
          // Try to migrate from localStorage
          if (typeof window !== 'undefined') {
            try {
              const localSaved = localStorage.getItem('vibeMasterV6');
              if (localSaved) {
                const migrated = JSON.parse(localSaved);
                // Backward compatibility: add default learningLanguage if missing
                if (migrated.userProfile && !migrated.userProfile.learningLanguage) {
                  migrated.userProfile.learningLanguage = 'en';
                }
                setGameState(migrated);
                await storage.set('vibeMasterV6', migrated);
                localStorage.removeItem('vibeMasterV6'); // Clean up after migration
              }
            } catch (e) {
              console.error('Error migrating from localStorage:', e);
            }
          }
        }
      } catch (error) {
        console.error('Error loading game state:', error);
      }
    };

    loadGameState();
  }, []);

  // Save to Capacitor Preferences whenever gameState changes
  useEffect(() => {
    const saveGameState = async () => {
      try {
        await storage.set('vibeMasterV6', gameState);
      } catch (error) {
        console.error('Error saving game state:', error);
      }
    };

    saveGameState();
  }, [gameState]);

  // Check Onboarding
  useEffect(() => {
    if (!gameState.userProfile) {
        setView('ONBOARDING');
    } else if (view === 'ONBOARDING' && gameState.userProfile) {
        setView('HOME');
    }
  }, [gameState.userProfile]);

  // Initialize default last messages for default characters if not exists
  useEffect(() => {
    if (!gameState.userProfile) return;
    
    const userLevel = gameState.userProfile.level;
    const needsInit = !gameState.lastMessages || Object.keys(gameState.lastMessages).length === 0;
    
    if (needsInit) {
      const initialLastMessages: Record<string, LastMessage> = {};
      
      // Initialize for default characters (zoey, daniel, lucas)
      Object.keys(CHARACTERS).forEach(charId => {
        const char = CHARACTERS[charId];
        const levels = char.levels[userLevel] || [];
        if (levels.length > 0) {
          const firstLevel = levels[0];
          const firstRound = firstLevel.rounds[0];
          if (firstRound) {
            initialLastMessages[charId] = {
              text: firstRound.context,
              textEn: firstRound.contextEn,
              textEs: firstRound.contextEs,
              timestamp: Date.now()
            };
          }
        }
      });
      
      if (Object.keys(initialLastMessages).length > 0) {
        setGameState(prev => ({
          ...prev,
          lastMessages: {
            ...prev.lastMessages,
            ...initialLastMessages
          }
        }));
      }
    }
  }, [gameState.userProfile, gameState.lastMessages]);

  const handleOnboardingComplete = (profile: UserProfile) => {
      setGameState(prev => ({ ...prev, userProfile: profile }));
  };

  // Merge Default + Custom Characters
  const allCharacters: Record<string, CharacterProfile> = { ...CHARACTERS };
  gameState.customCharacters.forEach(char => {
    allCharacters[char.id] = char;
  });

  const handleStartGame = (charId: CharacterId) => {
    setActiveCharId(charId);
    setReviewItems([]);
    
    if (!gameState.userProfile) return;
    const userLevel = gameState.userProfile.level;

    // Init progress if needed
    if (!gameState.progress[charId]) {
        setGameState(prev => ({
            ...prev,
            progress: { ...prev.progress, [charId]: { beginner:0, intermediate:0, advanced:0 } }
        }));
    }
    
    const currentProgress = gameState.progress[charId]?.[userLevel] || 0;
    const char = allCharacters[charId];
    const levels = char.levels[userLevel] || [];

    // Check if max level reached for this difficulty
    if (currentProgress >= levels.length) {
       // If Advanced is completed, offer reset. Otherwise offer Level Up Quiz.
       if (userLevel === 'advanced') {
           if (confirm(t('app.storyCompleted'))) {
               setGameState(prev => ({
                   ...prev,
                   progress: { ...prev.progress, [charId]: { ...prev.progress[charId], [userLevel]: 0 } }
               }));
               setView('GAME');
           }
       } else {
           if (confirm(t('app.storyAlreadyCompleted'))) {
               setView('QUIZ');
           }
       }
       return;
    }
    setView('GAME');
  };

  const handleLevelComplete = () => {
    if (!activeCharId || !gameState.userProfile) return;
    
    const userLevel = gameState.userProfile.level;
    const currentProgress = gameState.progress[activeCharId]?.[userLevel] || 0;
    const char = allCharacters[activeCharId];
    const levels = char.levels[userLevel] || [];

    const nextLevel = currentProgress + 1;

    setGameState(prev => ({
      ...prev,
      progress: { 
          ...prev.progress, 
          [activeCharId]: {
              ...prev.progress[activeCharId],
              [userLevel]: nextLevel
          } 
      }
    }));

    // If finished all levels in this difficulty
    if (nextLevel >= levels.length) {
       // Trigger Quiz for Beginner/Intermediate to level up
       if (userLevel === 'beginner' || userLevel === 'intermediate') {
         setView('QUIZ');
       } else {
         // Advanced completed
         setView('COMPLETED');
       }
    } else {
      setView('LEVEL_UP');
    }
  };

  const handleQuizPass = async () => {
      if (!gameState.userProfile) return;
      
      const currentLevel = gameState.userProfile.level;
      let nextLevel: Difficulty = currentLevel;
      
      if (currentLevel === 'beginner') nextLevel = 'intermediate';
      else if (currentLevel === 'intermediate') nextLevel = 'advanced';

      // Check if it's the max level (Advanced)
      if (currentLevel === 'advanced') {
          alert(t('app.allMasteryCompleted'));
          setView('HOME');
          setActiveCharId(null);
          return;
      }

      // If active character is custom, generate next level content
      if (activeCharId && allCharacters[activeCharId]?.isCustom) {
          setIsGenerating(true); 
          try {
              const char = allCharacters[activeCharId];
              // Generate new levels for next difficulty
              const newLevels = await generateNextLevelStory(char, nextLevel, i18n.language, gameState.userProfile.learningLanguage);
              
              setGameState(prev => {
                  // Update the specific custom character with new levels
                  const updatedCustomChars = prev.customCharacters.map(c => {
                      if (c.id === char.id) {
                          return {
                              ...c,
                              levels: {
                                  ...c.levels,
                                  [nextLevel]: newLevels
                              }
                          };
                      }
                      return c;
                  });
                  
                  return {
                      ...prev,
                      userProfile: { ...prev.userProfile!, level: nextLevel },
                      customCharacters: updatedCustomChars,
                      // Initialize progress for the new difficulty
                      progress: {
                          ...prev.progress,
                          [char.id]: {
                              ...prev.progress[char.id],
                              [nextLevel]: 0
                          }
                      }
                  };
              });
              
              alert(t('app.levelUpWithStory', { level: nextLevel.toUpperCase(), name: char.name }));
          } catch (e) {
              console.error(e);
              alert(t('app.storyGenerationFailed'));
              setGameState(prev => ({
                  ...prev,
                  userProfile: { ...prev.userProfile!, level: nextLevel }
              }));
          } finally {
              setIsGenerating(false);
              setView('HOME');
              setActiveCharId(null);
          }
      } else {
          // Default behavior for standard characters
          setGameState(prev => ({
              ...prev,
              userProfile: { ...prev.userProfile!, level: nextLevel }
          }));
          
          alert(t('app.levelUpCongrats', { level: nextLevel.toUpperCase() }));
          setView('HOME');
          setActiveCharId(null);
      }
  };

  const handleQuizFail = () => {
      // Just go home, user can try again later
      setView('HOME');
  };

  const handleGameOver = (mistakes: ReviewItem[]) => {
    setReviewItems(mistakes);
    setView('GAME_OVER');
  };

  const handleNextLevel = () => {
    setView('GAME');
  };

  const handleGoHome = () => {
    setView('HOME');
    setActiveCharId(null);
    setReviewItems([]);
  };

  const handleRetryLevel = () => {
    setReviewItems([]);
    setView('GAME');
  };

  const resetAllData = async () => {
    if(confirm(t('app.dataResetConfirm'))) {
        await storage.remove('vibeMasterV6');
        // Also remove from localStorage if exists (for cleanup)
        if (typeof window !== 'undefined') {
          try {
            localStorage.removeItem('vibeMasterV6');
          } catch (e) {
            // Ignore
          }
        }
        location.reload();
    }
  };

  const handleRetakeTest = () => {
    if(confirm(t('app.retakeTestConfirm'))) {
        setGameState(prev => ({
            ...prev,
            userProfile: null,
            progress: { zoey: {beginner:0, intermediate:0, advanced:0}, daniel: {beginner:0, intermediate:0, advanced:0}, lucas: {beginner:0, intermediate:0, advanced:0} }
        }));
        setView('ONBOARDING');
    }
  };
  
  const handleUpdateLevel = (newLevel: Difficulty) => {
     if(gameState.userProfile) {
         setGameState(prev => ({ ...prev, userProfile: { ...prev.userProfile!, level: newLevel } }));
     }
  };

  const handleUpdateLearningLanguage = (newLanguage: 'en' | 'ko') => {
     if(gameState.userProfile) {
         // 현재 학습 언어와 다를 때만 확인 팝업 표시
         if (gameState.userProfile.learningLanguage !== newLanguage) {
             if (confirm(t('home.learningLanguageChangeConfirm'))) {
                 // 모든 진행 상황 초기화 및 온보딩으로 이동
                 setGameState(prev => ({
                     ...prev,
                     userProfile: null,
                     progress: { zoey: {beginner:0, intermediate:0, advanced:0}, daniel: {beginner:0, intermediate:0, advanced:0}, lucas: {beginner:0, intermediate:0, advanced:0} },
                     customCharacters: []
                 }));
                 setView('ONBOARDING');
             }
         } else {
             // 같은 언어로 변경 시에는 그냥 업데이트만
             setGameState(prev => ({ ...prev, userProfile: { ...prev.userProfile!, learningLanguage: newLanguage } }));
         }
     }
  };

  const handleCreateCharacter = async (relation: RelationType, theme: ThemeType) => {
    if (!gameState.userProfile) return;
    setIsGenerating(true);
    try {
        const newChar = await generateCharacterWithAI(relation, theme, gameState.userProfile.level, i18n.language, gameState.userProfile.learningLanguage);
        setGameState(prev => ({
            ...prev,
            customCharacters: [...prev.customCharacters, newChar],
            progress: { 
                ...prev.progress, 
                [newChar.id]: { beginner:0, intermediate:0, advanced:0 } // Init all
            }
        }));
    } catch (e) {
        const errorMessage = e instanceof Error ? e.message : '알 수 없는 오류가 발생했습니다.';
        console.error("Failed to generate character", e);
        console.error("Error details:", {
            message: errorMessage,
            stack: e instanceof Error ? e.stack : undefined
        });
        alert(t('app.storyGenerationError', { error: errorMessage }));
    } finally {
        setIsGenerating(false);
    }
  };

  const handlePractice = () => {
      const rounds: { charName: string; round: DialogueRound }[] = [];
      const difficulties: Difficulty[] = ['beginner', 'intermediate', 'advanced'];

      Object.values(allCharacters).forEach(char => {
          difficulties.forEach(diff => {
              const lvlIdx = gameState.progress[char.id]?.[diff] || 0;
              const rawLevels = char.levels[diff] || [];
              
              // Add rounds from completed levels (indices 0 to lvlIdx - 1)
              // If lvlIdx is 0, nothing is added
              for(let i = 0; i < lvlIdx; i++) {
                  if (rawLevels[i]) {
                      const level = getLocalizedLevelData(rawLevels[i]);
                      level.rounds.forEach(r => {
                          rounds.push({ charName: char.name, round: r });
                      });
                  }
              }
          });
      });

      setCollectedRounds(rounds);
      setView('PRACTICE');
  };

  const handleSaveLastMessage = (charId: CharacterId, message: LastMessage) => {
    setGameState(prev => ({
      ...prev,
      lastMessages: {
        ...prev.lastMessages,
        [charId]: message
      }
    }));
  };

  return (
    <div className="w-full h-full max-w-md mx-auto bg-white relative overflow-hidden flex flex-col" style={{ boxShadow: '0 0 0 1px rgba(0,0,0,0.1)' }}>
      {/* Global Loading Overlay */}
      {isGenerating && (
        <div className="absolute inset-0 bg-black/50 z-[100] flex items-center justify-center backdrop-blur-sm animate-fade-in">
          <div className="bg-white p-6 rounded-2xl shadow-2xl flex flex-col items-center gap-4">
            <div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
            <p className="font-bold text-slate-700">{t('app.storyGenerating')}</p>
          </div>
        </div>
      )}

      {view === 'ONBOARDING' && (
        <OnboardingView onComplete={handleOnboardingComplete} />
      )}

      {view === 'HOME' && gameState.userProfile && (
        <HomeView 
          progress={gameState.progress} 
          characters={Object.values(allCharacters)}
          userProfile={gameState.userProfile}
          onSelectCharacter={handleStartGame}
          onReset={resetAllData}
          onCreateCharacter={handleCreateCharacter}
          isGenerating={isGenerating}
          onRetakeTest={handleRetakeTest}
          onUpdateLevel={handleUpdateLevel}
          onUpdateLearningLanguage={handleUpdateLearningLanguage}
          onPractice={handlePractice}
          lastMessages={gameState.lastMessages || {}}
        />
      )}

      {view === 'GAME' && activeCharId && allCharacters[activeCharId] && gameState.userProfile && (
        <GameView 
          character={allCharacters[activeCharId]} 
          userProfile={gameState.userProfile}
          levelIndex={gameState.progress[activeCharId]?.[gameState.userProfile.level] || 0}
          onLevelComplete={handleLevelComplete}
          onGameOver={handleGameOver}
          onBack={handleGoHome}
          onSaveLastMessage={handleSaveLastMessage}
        />
      )}

      {view === 'QUIZ' && activeCharId && allCharacters[activeCharId] && gameState.userProfile && (
        <QuizView
          character={allCharacters[activeCharId]}
          difficulty={gameState.userProfile.level}
          learningLanguage={gameState.userProfile.learningLanguage}
          onPass={handleQuizPass}
          onFail={handleQuizFail}
        />
      )}

      {view === 'LEVEL_UP' && activeCharId && allCharacters[activeCharId] && gameState.userProfile && (
        <LevelUpView 
          type="LEVEL_UP"
          character={allCharacters[activeCharId]}
          nextLevelIndex={gameState.progress[activeCharId]?.[gameState.userProfile.level] || 0}
          difficulty={gameState.userProfile.level}
          onAction={handleNextLevel}
          onHome={handleGoHome}
        />
      )}

      {view === 'COMPLETED' && activeCharId && allCharacters[activeCharId] && gameState.userProfile && (
        <LevelUpView 
          type="COMPLETED"
          character={allCharacters[activeCharId]}
          nextLevelIndex={0}
          difficulty={gameState.userProfile.level}
          onAction={handleGoHome}
        />
      )}

      {view === 'GAME_OVER' && activeCharId && (
        <GameOverView 
          reviewItems={reviewItems}
          onRetry={handleRetryLevel}
          onHome={handleGoHome}
        />
      )}

      {view === 'PRACTICE' && (
          <PracticeView
              rounds={collectedRounds}
              learningLanguage={gameState.userProfile.learningLanguage}
              onBack={handleGoHome}
          />
      )}
    </div>
  );
};

export default App;