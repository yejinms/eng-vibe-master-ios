
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { DialogueRound, Option } from '../types';
import { ChevronLeft, GraduationCap, CheckCircle2, XCircle, ArrowRight, BookOpen, Lightbulb } from 'lucide-react';
import confetti from 'canvas-confetti';

interface Props {
  rounds: { charName: string, round: DialogueRound }[];
  onBack: () => void;
}

const PracticeView: React.FC<Props> = ({ rounds, onBack }) => {
  const { t, i18n } = useTranslation();
  const [mode, setMode] = useState<'LIST' | 'QUIZ'>('LIST');
  const getOptionText = (opt: Option) => (i18n.language === 'ko' ? opt.textKo : opt.text);

  // Quiz State
  const [quizQuestions, setQuizQuestions] = useState<{ charName: string, round: DialogueRound }[]>([]);
  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  // Prepare Quiz Data
  const startQuiz = () => {
      // Shuffle rounds and pick 5 (or fewer if less available)
      const shuffled = [...rounds].sort(() => 0.5 - Math.random());
      const selected = shuffled.slice(0, 5);
      setQuizQuestions(selected);
      setCurrentQIndex(0);
      setScore(0);
      setQuizFinished(false);
      setSelectedOption(null);
      setIsCorrect(null);
      setMode('QUIZ');
  };

  const handleQuizAnswer = (option: Option) => {
      if (selectedOption) return; // Prevent double click
      
      setSelectedOption(option);
      const correct = option.correct;
      setIsCorrect(correct);
      
      if (correct) {
          setScore(prev => prev + 1);
      }

      setTimeout(() => {
          if (currentQIndex < quizQuestions.length - 1) {
              setCurrentQIndex(prev => prev + 1);
              setSelectedOption(null);
              setIsCorrect(null);
          } else {
              setQuizFinished(true);
              if (correct && score + 1 === quizQuestions.length) {
                   confetti({ particleCount: 150, spread: 70, origin: { y: 0.6 } });
              }
          }
      }, 1500);
  };

  if (rounds.length === 0) {
      return (
          <div className="h-full flex flex-col items-center justify-center p-6 bg-slate-50 text-center animate-fade-in">
              <div className="w-24 h-24 bg-slate-200 text-slate-400 rounded-full flex items-center justify-center mb-6">
                  <BookOpen size={40} />
              </div>
              <h2 className="text-2xl font-bold text-slate-800 mb-2">{t('practice.noContent')}</h2>
              <p className="text-slate-500 mb-8 max-w-xs mx-auto">
                  {t('practice.noContentDesc')}
              </p>
              <button 
                  onClick={onBack}
                  className="px-8 py-4 bg-primary text-white font-bold rounded-2xl shadow-lg shadow-primary/30 active:scale-95 transition-all flex items-center gap-2"
              >
                  {t('practice.goToConversation')} <ArrowRight size={20} />
              </button>
          </div>
      );
  }

  // Quiz Completed View
  if (mode === 'QUIZ' && quizFinished) {
      return (
          <div className="h-full flex flex-col items-center justify-center p-6 bg-slate-50 animate-fade-in text-center">
              <div className="w-24 h-24 bg-yellow-100 text-yellow-600 rounded-full flex items-center justify-center mb-4 animate-bounce">
                  <GraduationCap size={48} />
              </div>
              <h2 className="text-2xl font-extrabold text-slate-800 mb-2">{t('practice.quizCompleted')}</h2>
              <p className="text-slate-500 mb-6">
                  {t('quiz.score', { score, total: quizQuestions.length })}
              </p>
              <button 
                  onClick={() => setMode('LIST')}
                  className="w-full max-w-xs py-4 bg-white border-2 border-slate-200 text-slate-700 font-bold rounded-xl active:scale-95 transition-all"
              >
                  {t('practice.backToList')}
              </button>
              <button 
                  onClick={startQuiz}
                  className="w-full max-w-xs py-4 bg-primary text-white font-bold rounded-xl shadow-lg shadow-primary/30 active:scale-95 transition-all mt-3"
              >
                  {t('practice.retakeQuiz')}
              </button>
          </div>
      );
  }

  // Quiz Active View
  if (mode === 'QUIZ') {
      const currentQ = quizQuestions[currentQIndex];
      // Re-shuffle options for quiz feeling if needed, but here we just take them
      const options = currentQ.round.options; 

      return (
          <div className="h-full flex flex-col bg-white">
              <div 
                className="flex items-center justify-between px-4 border-b border-slate-100"
                style={{
                  minHeight: '4rem',
                  paddingTop: 'calc(env(safe-area-inset-top) + 0.5rem)',
                  paddingBottom: '0.5rem',
                }}
              >
                  <button onClick={() => setMode('LIST')} className="p-2 -ml-2 text-slate-400 hover:text-slate-600 active:scale-95 transition-transform">
                      <ChevronLeft size={24} />
                  </button>
                  <span className="font-bold text-slate-800">{t('practice.reviewQuiz')}</span>
                  <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-1 rounded-full">
                      {currentQIndex + 1}/{quizQuestions.length}
                  </span>
              </div>
              
              <div className="flex-1 p-6 flex flex-col justify-center animate-slide-up">
                  <div className="text-center mb-8">
                       <span className="inline-block px-3 py-1 rounded-full bg-slate-100 text-xs font-bold text-slate-500 mb-4 uppercase tracking-wide">
                           {t('practice.with', { name: currentQ.charName })}
                       </span>
                       <h3 className="text-slate-400 text-sm font-bold uppercase tracking-wider mb-2">{t('practice.intention')}</h3>
                       <p className="text-xl font-medium text-slate-800 leading-relaxed">"{currentQ.round.intent}"</p>
                  </div>

                  <div className="space-y-3">
                      {options.map((opt, idx) => {
                           let btnClass = "border-slate-100 bg-white text-slate-600 hover:bg-slate-50";
                           if (selectedOption) {
                               if (opt === selectedOption) {
                                   btnClass = isCorrect ? "border-green-500 bg-green-50 text-green-700" : "border-red-500 bg-red-50 text-red-700";
                               } else if (opt.correct) {
                                   btnClass = "border-green-500 bg-green-50 text-green-700 opacity-50";
                               } else {
                                   btnClass = "opacity-30 border-slate-100";
                               }
                           }

                           return (
                               <button 
                                   key={idx}
                                   onClick={() => handleQuizAnswer(opt)}
                                   disabled={selectedOption !== null}
                                   className={`w-full p-4 rounded-xl border-2 font-bold text-left transition-all relative ${btnClass}`}
                               >
                                   {getOptionText(opt)}
                                   {selectedOption === opt && (
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
  }

  // LIST Mode
  return (
    <div className="flex flex-col h-full bg-slate-50">
      <div 
        className="bg-white flex items-center justify-between px-4 shadow-sm z-10 shrink-0"
        style={{
          minHeight: '4rem',
          paddingTop: 'calc(env(safe-area-inset-top) + 0.5rem)',
          paddingBottom: '0.5rem',
        }}
      >
          <div className="flex items-center gap-3">
            <button onClick={onBack} className="p-2 -ml-2 text-slate-400 hover:text-slate-600 active:scale-95 transition-transform">
              <ChevronLeft size={24} />
            </button>
            <h1 className="text-xl font-extrabold text-slate-800">{t('practice.title')}</h1>
          </div>
          <span className="text-xs font-bold text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
              {t('practice.total', { count: rounds.length })}
          </span>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-hide pb-24">
          {rounds.map((item, idx) => {
              const correctOpt = item.round.options.find(o => o.correct);
              if (!correctOpt) return null;

              return (
                  <div key={idx} className="bg-white p-5 rounded-2xl shadow-sm border border-slate-200">
                      <div className="flex items-center justify-between mb-3">
                          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest bg-slate-100 px-2 py-0.5 rounded-sm">
                              {item.charName}
                          </span>
                      </div>
                      
                      {/* Intent */}
                      <p className="text-sm text-slate-600 border-l-4 border-slate-200 pl-3 py-1 mb-3 font-medium">
                          {item.round.intent}
                      </p>

                      {/* English Sentence */}
                      <div className="flex items-start gap-2 mb-4">
                         <CheckCircle2 size={18} className="text-green-500 mt-0.5 shrink-0" />
                         <p className="text-lg font-bold text-primary leading-tight">{getOptionText(correctOpt)}</p>
                      </div>

                      {/* Hint */}
                      <div className="bg-yellow-50 p-3 rounded-xl flex gap-2 items-start text-xs text-slate-600">
                          <Lightbulb size={14} className="text-yellow-500 mt-0.5 shrink-0" />
                          {correctOpt.explain}
                      </div>
                  </div>
              );
          })}
      </div>

      <div className="absolute bottom-0 w-full p-4 bg-gradient-to-t from-slate-50 to-transparent z-20 pointer-events-none flex justify-center pb-8">
          <button 
            onClick={startQuiz}
            className="pointer-events-auto shadow-xl shadow-primary/30 w-full max-w-xs bg-primary text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-primary/90 active:scale-95 transition-all"
          >
            <GraduationCap size={20} />
            {t('practice.startQuiz')}
          </button>
      </div>
    </div>
  );
};

export default PracticeView;
