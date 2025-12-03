
import React, { useState, useEffect } from 'react';
import { Difficulty, UserProfile } from '../types';
import { ArrowRight, Sparkles, Lightbulb } from 'lucide-react';

interface Props {
  onComplete: (profile: UserProfile) => void;
}

const TEST_SCENARIOS = [
  {
    level: 'beginner',
    partnerName: 'Emma',
    context: "Hi! It's nice to meet you. How are you doing today?",
    intent: "기분이 '날아갈 듯이 좋다'고 대답하려면?",
    options: [
      { text: "I'm on cloud nine!", score: 1 }, // Correct Idiom
      { text: "My feeling is very high.", score: 0 }, // Konglish
      { text: "I feel like a bird.", score: 0 } // Literal/Awkward
    ]
  },
  {
    level: 'intermediate',
    partnerName: 'Boss',
    context: "This project is really important. We can't make any mistakes.",
    intent: "걱정 마세요. 제가 '신경 써서(계속 지켜보며)' 처리하겠다고 하려면?",
    options: [
      { text: "I'll keep an eye on it.", score: 1 }, // Correct
      { text: "I will see it carefully.", score: 0 }, // Awkward
      { text: "I put my eyes on it.", score: 0 } // Wrong preposition/idiom
    ]
  },
  {
    level: 'advanced',
    partnerName: 'Colleague',
    context: "I heard the negotiations are stalled. What should we do?",
    intent: "우리가 '주도권을 잡아야' 한다고 말하려면?",
    options: [
      { text: "We need to get the upper hand.", score: 1 }, // Correct Idiom
      { text: "We need to handle the lead.", score: 0 }, // Awkward
      { text: "We must be the main driver.", score: 0 } // Corporate jargon but less natural idiom
    ]
  }
];

const OnboardingView: React.FC<Props> = ({ onComplete }) => {
  const [step, setStep] = useState<'NAME' | 'TEST' | 'RESULT'>('NAME');
  const [name, setName] = useState('');
  const [testIndex, setTestIndex] = useState(0);
  const [score, setScore] = useState(0);

  // Reset state on mount
  useEffect(() => {
    setStep('NAME');
    setName('');
    setTestIndex(0);
    setScore(0);
  }, []);

  const handleNameSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim().length > 0 && name.trim().length <= 10) {
      setStep('TEST');
    }
  };

  const handleTestAnswer = (points: number) => {
    const newScore = score + points;
    setScore(newScore);

    if (testIndex < TEST_SCENARIOS.length - 1) {
      setTestIndex(testIndex + 1);
    } else {
      setStep('RESULT');
    }
  };

  const getResult = (): Difficulty => {
    if (score === 3) return 'advanced';
    if (score === 2) return 'intermediate';
    return 'beginner';
  };

  const resultLevel = getResult();
  const currentScenario = TEST_SCENARIOS[testIndex];

  return (
    <div className="h-full flex flex-col items-center justify-center p-6 bg-white">
      {step === 'NAME' && (
        <form onSubmit={handleNameSubmit} className="w-full max-w-xs flex flex-col gap-6 animate-pop-in">
          <div className="text-center">
             <h1 className="text-3xl font-extrabold text-primary mb-2">Welcome!</h1>
             <p className="text-slate-500">당신의 이름을 알려주세요.</p>
          </div>
          <input 
            type="text" 
            value={name}
            onChange={(e) => setName(e.target.value)}
            maxLength={10}
            placeholder="What is your name?"
            className="w-full p-4 text-center text-xl font-bold border-2 border-slate-100 rounded-2xl focus:border-primary outline-none transition-colors"
            autoFocus
          />
          <button 
            type="submit"
            disabled={!name.trim()}
            className="w-full py-4 bg-primary text-white font-bold rounded-2xl disabled:bg-slate-200 disabled:text-slate-400 transition-all active:scale-95"
          >
            시작하기
          </button>
        </form>
      )}

      {step === 'TEST' && (
        <div className="w-full h-full flex flex-col pt-10 pb-6 animate-slide-up">
           <div className="text-center mb-6">
             <span className="text-xs font-bold text-slate-400 uppercase tracking-widest bg-slate-100 px-3 py-1 rounded-full">Level Test {testIndex + 1}/{TEST_SCENARIOS.length}</span>
           </div>

           {/* Chat Bubble Context */}
           <div className="flex-1 flex flex-col items-center justify-center gap-6">
             <div className="w-full flex flex-col items-start gap-2">
                <span className="text-xs font-bold text-slate-400 ml-2">{currentScenario.partnerName}</span>
                <div className="bg-white border border-slate-200 p-4 rounded-2xl rounded-tl-sm shadow-sm text-slate-700 max-w-[90%] text-lg">
                    {currentScenario.context}
                </div>
             </div>

             {/* Intention Box */}
             <div className="w-full bg-yellow-50 border border-yellow-100 p-4 rounded-xl text-center">
                 <div className="flex items-center justify-center gap-2 text-xs font-bold text-yellow-600 uppercase tracking-wide mb-2">
                     <Lightbulb size={12} /> My Intention
                  </div>
                 <p className="text-slate-800 font-bold text-lg">"{currentScenario.intent}"</p>
             </div>
           </div>
           
           {/* Options */}
           <div className="flex flex-col gap-3 mt-auto pt-6">
              {currentScenario.options.map((opt, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleTestAnswer(opt.score)}
                    className="p-4 rounded-xl border-2 border-slate-100 hover:border-primary hover:bg-primary/5 text-slate-600 font-medium transition-all text-left active:scale-98"
                  >
                      {opt.text}
                  </button>
              ))}
           </div>
        </div>
      )}

      {step === 'RESULT' && (
        <div className="text-center animate-pop-in">
            <Sparkles size={64} className="text-yellow-400 mx-auto mb-6 animate-bounce" />
            <h2 className="text-2xl font-bold text-slate-800 mb-2">테스트 완료!</h2>
            <p className="text-slate-500 mb-6">당신의 추천 레벨은...</p>
            
            <div className="text-4xl font-extrabold text-primary mb-8 uppercase tracking-wider">
                {resultLevel}
            </div>

            <button 
                onClick={() => onComplete({ name, level: resultLevel })}
                className="px-8 py-4 bg-primary text-white font-bold rounded-full shadow-lg shadow-primary/30 active:scale-95 transition-all flex items-center gap-2 mx-auto"
            >
                VibeCheck 시작하기 <ArrowRight size={20} />
            </button>
        </div>
      )}
    </div>
  );
};

export default OnboardingView;
