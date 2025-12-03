
import React, { useState, useEffect } from 'react';
import { CharacterProfile, Difficulty, DialogueRound } from '../types';
import { CheckCircle2, XCircle, GraduationCap, ArrowRight, RotateCcw, Home } from 'lucide-react';
import confetti from 'canvas-confetti';

interface Props {
  character: CharacterProfile;
  difficulty: Difficulty;
  onPass: () => void;
  onFail: () => void;
}

const QuizView: React.FC<Props> = ({ character, difficulty, onPass, onFail }) => {
  const [questions, setQuestions] = useState<DialogueRound[]>([]);
  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedOptionIndex, setSelectedOptionIndex] = useState<number | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [retryCount, setRetryCount] = useState(0);

  useEffect(() => {
    // Generate quiz questions: Pick 1 random round from each of the 5 chapters
    const levels = character.levels[difficulty] || [];
    const quizQs: DialogueRound[] = [];

    levels.forEach(level => {
        if (level.rounds.length > 0) {
            const randomRound = level.rounds[Math.floor(Math.random() * level.rounds.length)];
            quizQs.push(randomRound);
        }
    });

    // Shuffle questions
    for (let i = quizQs.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [quizQs[i], quizQs[j]] = [quizQs[j], quizQs[i]];
    }

    setQuestions(quizQs);
  }, [character, difficulty, retryCount]);

  const handleOptionClick = (isOptCorrect: boolean, index: number) => {
    if (selectedOptionIndex !== null) return; // Prevent multiple clicks

    setSelectedOptionIndex(index);
    setIsCorrect(isOptCorrect);

    if (isOptCorrect) {
        setScore(prev => prev + 1);
    }

    setTimeout(() => {
        if (currentQIndex < questions.length - 1) {
            setCurrentQIndex(prev => prev + 1);
            setSelectedOptionIndex(null);
            setIsCorrect(null);
        } else {
            setShowResult(true);
            const passed = (isOptCorrect ? score + 1 : score) >= 3;
            if (passed) {
                 confetti({
                    particleCount: 150,
                    spread: 70,
                    origin: { y: 0.6 }
                });
            }
        }
    }, 1500);
  };

  const handleRetry = () => {
    setShowResult(false);
    setScore(0);
    setCurrentQIndex(0);
    setSelectedOptionIndex(null);
    setIsCorrect(null);
    setRetryCount(prev => prev + 1);
  };

  const currentQ = questions[currentQIndex];
  const passed = score >= 3; // Pass if 3 or more out of 5 are correct

  if (questions.length === 0) return <div className="p-10 text-center flex flex-col items-center justify-center h-full"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mb-2"></div>Loading Quiz...</div>;

  if (showResult) {
      return (
          <div className="h-full flex flex-col items-center justify-center p-6 bg-slate-50 animate-fade-in text-center">
              <div className="mb-6">
                  {passed ? (
                      <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce">
                          <GraduationCap size={48} />
                      </div>
                  ) : (
                      <div className="w-24 h-24 bg-red-100 text-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                           <XCircle size={48} />
                      </div>
                  )}
                  <h2 className="text-2xl font-extrabold text-slate-800 mb-2">
                      {passed ? 'Level Up Test Passed!' : 'Test Failed'}
                  </h2>
                  <p className="text-slate-500 mb-2">
                      Score: <span className={`font-bold ${passed ? 'text-green-600' : 'text-red-500'}`}>{score}</span> / {questions.length}
                  </p>
                  <p className="text-slate-400 text-sm">
                      {passed ? '승급 자격을 획득했습니다!' : '조금 더 복습이 필요해요.'}
                  </p>
              </div>

              <div className="w-full max-w-xs space-y-3">
                  <button 
                      onClick={passed ? onPass : handleRetry}
                      className={`w-full py-4 rounded-full font-bold text-lg shadow-lg active:scale-95 transition-all flex items-center justify-center gap-2 ${passed ? 'bg-primary text-white shadow-primary/30' : 'bg-primary text-white shadow-primary/30'}`}
                  >
                      {passed ? (
                          <>Level Up <ArrowRight size={20} /></>
                      ) : (
                          <>Try Again <RotateCcw size={20} /></>
                      )}
                  </button>
                  
                  {!passed && (
                      <button 
                          onClick={onFail}
                          className="w-full py-3 bg-white text-slate-400 font-bold rounded-full hover:bg-slate-50 flex items-center justify-center gap-2 transition-all"
                      >
                          <Home size={18} /> Main Menu
                      </button>
                  )}
              </div>
          </div>
      );
  }

  return (
    <div className="h-full flex flex-col bg-white">
      {/* Header */}
      <div className="h-16 flex items-center justify-between px-6 border-b border-slate-100">
          <span className="font-bold text-slate-400">Level Test</span>
          <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-1 rounded-full">
                  Q{currentQIndex + 1}/{questions.length}
              </span>
          </div>
      </div>

      {/* Question */}
      <div className="flex-1 p-6 flex flex-col justify-center animate-slide-up">
          <div className="mb-8 text-center">
              <h3 className="text-slate-400 text-sm font-bold uppercase tracking-wider mb-4">Correct Expression</h3>
              <p className="text-xl font-medium text-slate-800 leading-relaxed">
                  "{currentQ.intent}"
              </p>
          </div>

          <div className="space-y-3">
              {currentQ.options.map((option, idx) => {
                  let btnClass = "border-slate-100 bg-white text-slate-600 hover:bg-slate-50";
                  if (selectedOptionIndex !== null) {
                      if (idx === selectedOptionIndex) {
                          btnClass = isCorrect ? "border-green-500 bg-green-50 text-green-700" : "border-red-500 bg-red-50 text-red-700";
                      } else if (option.correct && !isCorrect) {
                           // Show correct answer if wrong selected
                           btnClass = "border-green-500 bg-green-50 text-green-700 opacity-50";
                      } else {
                          btnClass = "opacity-50 border-slate-100";
                      }
                  }

                  return (
                      <button
                        key={idx}
                        onClick={() => handleOptionClick(option.correct, idx)}
                        disabled={selectedOptionIndex !== null}
                        className={`w-full p-4 rounded-xl border-2 font-bold text-left transition-all relative ${btnClass}`}
                      >
                          {option.text}
                          {selectedOptionIndex === idx && (
                              <div className="absolute right-4 top-1/2 -translate-y-1/2">
                                  {isCorrect ? <CheckCircle2 size={20} /> : <XCircle size={20} />}
                              </div>
                          )}
                      </button>
                  );
              })}
          </div>
      </div>
    </div>
  );
};

export default QuizView;
