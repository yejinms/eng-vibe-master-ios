import React, { useState, useEffect, useRef, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { CharacterProfile, Message, Option, ReviewItem, UserProfile } from '../types';
import GameHeader from '../components/GameHeader';
import { Lightbulb } from 'lucide-react';
import confetti from 'canvas-confetti';
import { getLocalizedLevelData, getLocalizedRound, getLocalizedOption } from '../utils/localization';

interface Props {
  character: CharacterProfile;
  userProfile: UserProfile;
  levelIndex: number;
  onLevelComplete: () => void;
  onGameOver: (mistakes: ReviewItem[]) => void;
  onBack: () => void;
}

const shuffleArray = <T,>(array: T[]): T[] => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};

const GameView: React.FC<Props> = ({ character, userProfile, levelIndex, onLevelComplete, onGameOver, onBack }) => {
  const { t, i18n } = useTranslation();
  const difficulty = userProfile.level;
  const rawLevelData = character.levels[difficulty]?.[levelIndex];
  
  // Recalculate localized data when language changes
  const levelData = useMemo(() => {
    return rawLevelData ? getLocalizedLevelData(rawLevelData) : null;
  }, [rawLevelData, i18n.language]);
  
  // States
  const [roundIndex, setRoundIndex] = useState(0);
  const [messages, setMessages] = useState<Message[]>([]);
  const [vibeScore, setVibeScore] = useState(50);
  const [pendingScore, setPendingScore] = useState<number | null>(null); // Store score update
  const [isTyping, setIsTyping] = useState(false);
  const [turnState, setTurnState] = useState<'WAITING' | 'USER_INPUT' | 'FEEDBACK' | 'COMPLETED' | 'GAME_OVER_MODAL'>('WAITING');
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);
  const [feedback, setFeedback] = useState<{isCorrect: boolean, explain: string} | null>(null);
  const [mistakes, setMistakes] = useState<ReviewItem[]>([]);
  const [currentOptions, setCurrentOptions] = useState<Option[]>([]);
  
  const chatEndRef = useRef<HTMLDivElement>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);
  
  // Recalculate localized round when language or round index changes
  const currentRound = useMemo(() => {
    const rawCurrentRound = levelData?.rounds[roundIndex];
    return rawCurrentRound ? getLocalizedRound(rawCurrentRound) : null;
  }, [levelData, roundIndex, i18n.language]);
  
  // Get current UI language
  const isEnglish = i18n.language === 'en';
  // Use learningLanguage to determine which text to show (textKo for Korean learning, text for English learning)
  const getOptionText = (opt: Option) => (userProfile.learningLanguage === 'ko' ? opt.textKo : opt.text);

  const scrollToBottom = () => {
    setTimeout(() => {
        if (chatContainerRef.current) {
          chatContainerRef.current.scrollTo({
            top: chatContainerRef.current.scrollHeight,
            behavior: 'smooth'
          });
        }
    }, 100);
  };

  // Helper to replace {user} with real name, handling case variations
  const formatText = (text: string) => {
      if (!text) return "";
      return text
        .replace(/{user}/gi, userProfile.name)
        .replace(/{username}/gi, userProfile.name)
        .replace(/\[user\]/gi, userProfile.name);
  };

  // Initialize level when levelIndex, character, or difficulty changes
  useEffect(() => {
    if (!levelData) return;

    setMessages([
      { id: 'sys-start', sender: 'system', text: `${t('game.chapter', { chapter: levelIndex + 1, title: formatText(levelData.title) })}` }
    ]);
    setRoundIndex(0);
    setVibeScore(50);
    setPendingScore(null);
    setMistakes([]);
    startRound(0);

  }, [levelIndex, character, difficulty]);

  // Update messages when language changes
  useEffect(() => {
    if (!levelData || messages.length === 0) return;

    // Update system message
    const updatedMessages = messages.map(msg => {
      if (msg.sender === 'system' && msg.id === 'sys-start') {
        return {
          ...msg,
          text: `${t('game.chapter', { chapter: levelIndex + 1, title: formatText(levelData.title) })}`
        };
      }
      // Update other messages with localized context
      if (msg.sender === 'other' && msg.id.startsWith('msg-')) {
        const roundIdx = parseInt(msg.id.replace('msg-', ''));
        const rawRoundData = levelData.rounds[roundIdx];
        if (rawRoundData) {
          const localizedRound = getLocalizedRound(rawRoundData);
          return {
            ...msg,
            text: formatText(localizedRound.context)
          };
        }
      }
      return msg;
    });

    setMessages(updatedMessages);
  }, [i18n.language]);

  const startRound = (rIdx: number) => {
    const rawRoundData = levelData?.rounds[rIdx];
    if (!rawRoundData) return;
    
    const roundData = getLocalizedRound(rawRoundData);

    setTurnState('WAITING');
    setSelectedOption(null);
    setFeedback(null);
    setCurrentOptions(shuffleArray(roundData.options));

    setTimeout(() => {
      setIsTyping(true);
      scrollToBottom();
      setTimeout(() => {
        setIsTyping(false);
        setMessages(prev => [
            ...prev, 
            { 
                id: `msg-${rIdx}`, 
                sender: 'other', 
                text: formatText(roundData.context)
            }
        ]);
        setTurnState('USER_INPUT');
        scrollToBottom();
      }, 1000 + Math.random() * 500);
    }, 600);
  };

  const handleOptionSelect = (option: Option) => {
    if (turnState !== 'USER_INPUT') return;
    setSelectedOption(option);
    
    const isCorrect = option.correct;
    let nextScore = vibeScore;

    if (isCorrect) {
        nextScore = Math.min(100, vibeScore + 10);
        // Do not setVibeScore here, defer to handleSendResponse
        setTurnState('FEEDBACK');
    } else {
        nextScore = Math.max(0, vibeScore - 15);
        
        if (currentRound) {
            const correctOpt = currentRound.options.find(o => o.correct);
            if (correctOpt) {
                setMistakes(prev => [...prev, {
                    id: `mistake-${Date.now()}`,
                    context: formatText(currentRound.context),
                    wrongAnswer: formatText(getOptionText(option)),
                    correctOption: correctOpt
                }]);
            }
        }

        if (nextScore <= 0) {
            setTurnState('GAME_OVER_MODAL');
        } else {
            setTurnState('FEEDBACK');
        }
    }
    
    setPendingScore(nextScore); // Store for later
    const localizedOption = getLocalizedOption(option);
    setFeedback({ isCorrect, explain: formatText(localizedOption.explain) });
  };

  const handleSendResponse = () => {
    if (!selectedOption) return;

    // Apply pending score update
    if (pendingScore !== null) {
        setVibeScore(pendingScore);
        setPendingScore(null);
    }

    setMessages(prev => [...prev, { id: `user-${Date.now()}`, sender: 'me', text: formatText(getOptionText(selectedOption)) }]);
    scrollToBottom();

    if (levelData && roundIndex < levelData.rounds.length - 1) {
       const nextRound = roundIndex + 1;
       setRoundIndex(nextRound);
       startRound(nextRound);
    } else {
       setTurnState('COMPLETED');
       const finalScore = pendingScore ?? vibeScore;
       if(finalScore >= 80) confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
       setTimeout(() => {
         onLevelComplete();
       }, 2000);
    }
  };

  const handleRetry = () => {
      // Apply pending score update even on retry
      if (pendingScore !== null) {
          setVibeScore(pendingScore);
          setPendingScore(null);
      }
      setTurnState('USER_INPUT');
      setFeedback(null);
      setSelectedOption(null);
  };

  const triggerGameOver = () => {
      if (pendingScore !== null) {
          setVibeScore(pendingScore);
          setPendingScore(null);
      }
      onGameOver(mistakes);
  };

  const isGameOverModal = turnState === 'GAME_OVER_MODAL';

  if (!levelData) return <div className="p-10 text-center">{t('app.loadingLevelData')}</div>;

  return (
    <div className="flex flex-col h-full bg-slate-50 relative">
      <GameHeader 
        character={character} 
        levelIndex={levelIndex} 
        onBack={onBack} 
        progressValue={vibeScore} // This remains the old score until user clicks Next/Retry
        currentStep={roundIndex + 1}
        totalSteps={levelData.rounds.length}
        isEnglish={isEnglish}
        onToggleLanguage={() => {
          // Toggle between ko and en for now (since we only have ko/en in constants)
          const currentLang = i18n.language;
          if (currentLang === 'en') {
            i18n.changeLanguage('ko');
          } else if (currentLang === 'es') {
            i18n.changeLanguage('en');
          } else {
            i18n.changeLanguage('en');
          }
        }}
        difficulty={userProfile.level}
      />

      <div 
        ref={chatContainerRef}
        className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-hide"
        style={{ paddingBottom: 'calc(1rem + env(safe-area-inset-bottom))' }}
      >
        {messages.map((msg) => (
          <div key={msg.id} className={`flex w-full ${msg.sender === 'me' ? 'justify-end' : 'justify-start'} ${msg.sender === 'system' ? 'justify-center' : ''}`}>
            {msg.sender === 'system' ? (
                <div className="flex flex-col items-center gap-1 my-4 animate-fade-in">
                    <span className="text-[10px] uppercase font-bold text-slate-400 bg-slate-100 px-3 py-1 rounded-full tracking-widest">
                        {msg.text}
                    </span>
                    <span className="text-xs text-slate-400 max-w-[200px] text-center">{formatText(levelData.description)}</span>
                </div>
            ) : (
                <div 
                    className={`
                        max-w-[85%] px-4 py-3 rounded-2xl text-[15px] leading-relaxed shadow-sm animate-pop-in relative transition-all duration-300
                        ${msg.sender === 'me' 
                            ? 'bg-primary text-white rounded-tr-sm' 
                            : 'bg-white text-slate-700 rounded-tl-sm border border-slate-100'}
                    `}
                >
                    {msg.text}
                </div>
            )}
          </div>
        ))}
        
        {isTyping && (
           <div className="flex justify-start animate-pop-in">
               <div className="bg-white px-4 py-3 rounded-2xl rounded-tl-sm border border-slate-100 flex gap-1 items-center shadow-sm">
                   <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0s'}}></div>
                   <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s'}}></div>
                   <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s'}}></div>
               </div>
           </div>
        )}
        <div ref={chatEndRef} />
      </div>

      <div 
        className="w-full bg-white border-t border-slate-100 p-4 shadow-[0_-5px_20px_rgba(0,0,0,0.03)] z-10 transition-all duration-300 shrink-0"
        style={{ paddingBottom: 'calc(2rem + env(safe-area-inset-bottom))' }}
      >
        {turnState === 'USER_INPUT' && currentRound ? (
           <div className="flex flex-col gap-3 animate-slide-up">
              <div className="bg-yellow-50 border border-yellow-100 rounded-xl p-3 text-center mb-1">
                  <div className="flex items-center justify-center gap-2 text-xs font-bold text-yellow-600 uppercase tracking-wide mb-1">
                     <Lightbulb size={12} /> {t('onboarding.myIntention')}
                  </div>
                  <p className="text-sm font-medium text-slate-700">{formatText(currentRound.intent)}</p>
              </div>

              <div className="grid grid-cols-1 gap-2">
                  {currentOptions.map((opt, idx) => (
                      <button 
                        key={idx}
                        onClick={() => handleOptionSelect(opt)}
                        className="text-left w-full p-4 bg-slate-50 hover:bg-slate-100 active:bg-slate-200 rounded-xl font-medium text-slate-700 text-sm transition-colors border border-transparent focus:border-primary outline-none"
                      >
                          {formatText(getOptionText(opt))}
                      </button>
                  ))}
              </div>
           </div>
        ) : (
            <div className="h-20 flex items-center justify-center text-slate-400 text-sm italic">
                {turnState === 'COMPLETED' 
                    ? t('game.chapterComplete')
                    : isGameOverModal 
                        ? t('game.gameOver')
                        : isTyping 
                            ? t('game.typing')
                            : '...'}
            </div>
        )}
      </div>

      {(turnState === 'FEEDBACK' || isGameOverModal) && feedback && (
          <div className="absolute inset-0 bg-black/50 z-50 flex items-end animate-fade-in backdrop-blur-sm">
              <div className="w-full bg-white rounded-t-[2rem] p-6 pb-10 animate-slide-up shadow-2xl">
                  <div className="text-center mb-4">
                      <div className="text-5xl mb-3 animate-bounce">
                          {isGameOverModal ? '💔' : (feedback.isCorrect ? '🥰' : '😅')}
                      </div>
                      <h3 className={`text-xl font-extrabold ${isGameOverModal ? 'text-slate-800' : (feedback.isCorrect ? 'text-green-600' : 'text-red-500')}`}>
                          {isGameOverModal ? t('game.gameOverTitle') : (feedback.isCorrect ? t('game.perfectVibe') : t('game.notQuite'))}
                      </h3>
                      {isGameOverModal && <p className="text-slate-500 text-sm mt-1">{t('game.vibeDepleted')}</p>}
                  </div>
                  
                  <div className="bg-slate-50 p-5 rounded-2xl mb-6 text-sm text-slate-600 leading-relaxed border border-slate-100">
                      <p className="font-bold text-slate-800 mb-2 text-base">{selectedOption ? formatText(getOptionText(selectedOption)) : ''}</p>
                      {feedback.explain}
                  </div>

                  <button 
                    onClick={isGameOverModal ? triggerGameOver : (feedback.isCorrect ? handleSendResponse : handleRetry)}
                    className={`w-full py-4 rounded-full font-bold text-white text-lg shadow-lg active:scale-95 transition-transform ${isGameOverModal ? 'bg-slate-800' : (feedback.isCorrect ? 'bg-primary' : 'bg-slate-400')}`}
                  >
                      {isGameOverModal ? t('game.checkReview') : (feedback.isCorrect ? t('game.continueConversation') : t('game.tryAgain'))}
                  </button>
              </div>
          </div>
      )}
    </div>
  );
};

export default GameView;