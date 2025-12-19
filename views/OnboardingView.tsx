
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Difficulty, UserProfile } from '../types';
import { ArrowRight, Sparkles, Lightbulb, Languages, Check } from 'lucide-react';

interface Props {
  onComplete: (profile: UserProfile) => void;
}

const TEST_SCENARIOS_EN = [
  {
    level: 'beginner',
    partnerName: 'Emma',
    context: "Hi! It's nice to meet you. How are you doing today?",
    intent: "기분이 '날아갈 듯이 좋다'고 대답하려면?",
    options: [
      { text: "I'm on cloud nine!", textKo: "완전 기분 좋아!", score: 1 }, // Correct Idiom
      { text: "My feeling is very high.", textKo: "제 기분이 매우 높습니다.", score: 0 }, // Konglish
      { text: "I feel like a bird.", textKo: "새처럼 느껴져.", score: 0 } // Literal/Awkward
    ]
  },
  {
    level: 'intermediate',
    partnerName: 'Boss',
    context: "This project is really important. We can't make any mistakes.",
    intent: "걱정 마세요. 제가 '신경 써서(계속 지켜보며)' 처리하겠다고 하려면?",
    options: [
      { text: "I'll keep an eye on it.", textKo: "제가 주의 깊게 살펴보겠습니다.", score: 1 }, // Correct
      { text: "I will see it carefully.", textKo: "조심스럽게 볼게요.", score: 0 }, // Awkward
      { text: "I put my eyes on it.", textKo: "제 눈을 거기에 둘게요.", score: 0 } // Wrong preposition/idiom
    ]
  },
  {
    level: 'advanced',
    partnerName: 'Colleague',
    context: "I heard the negotiations are stalled. What should we do?",
    intent: "우리가 '주도권을 잡아야' 한다고 말하려면?",
    options: [
      { text: "We need to get the upper hand.", textKo: "우리가 우위를 점해야 해.", score: 1 }, // Correct Idiom
      { text: "We need to handle the lead.", textKo: "우리가 리드를 처리해야 해.", score: 0 }, // Awkward
      { text: "We must be the main driver.", textKo: "우리가 주요 주체가 되어야 해.", score: 0 } // Corporate jargon but less natural idiom
    ]
  }
];

const TEST_SCENARIOS_KO = [
  {
    level: 'beginner',
    partnerName: '은지',
    context: "안녕하세요! 만나서 반가워요. 오늘 기분이 어떠세요?",
    intent: "How do I say I'm 'on cloud nine' (extremely happy)?",
    options: [
      { text: "I'm on cloud nine!", textKo: "완전 기분이 좋아!", score: 1 }, // Correct translation
      { text: "I'm very good.", textKo: "아주 좋아요!", score: 0 }, // Too literal/simple
      { text: "I'm flying in the sky.", textKo: "하늘을 날고 있어.", score: 0 } // Literal translation, wrong meaning
    ]
  },
  {
    level: 'intermediate',
    partnerName: '상사',
    context: "이 프로젝트는 정말 중요해요. 실수를 해선 안 돼요.",
    intent: "How do I say 'I'll keep an eye on it' (I'll watch it carefully)?",
    options: [
      { text: "I'll keep an eye on it.", textKo: "제가 계속 지켜보겠습니다.", score: 1 }, // Correct
      { text: "I'll watch it carefully.", textKo: "조심스럽게 볼게요.", score: 0 }, // Awkward, less idiomatic
      { text: "I'll put my eye on it.", textKo: "제 눈을 거기에 둘게요.", score: 0 } // Wrong, unnatural
    ]
  },
  {
    level: 'advanced',
    partnerName: '동료',
    context: "협상이 막혔다고 들었어요. 어떻게 해야 할까요?",
    intent: "How do I say 'we need to get the upper hand' (we need to take control)?",
    options: [
      { text: "We need to get the upper hand.", textKo: "우리가 주도권을 잡아야 해요.", score: 1 }, // Correct Idiom
      { text: "We need to control the situation.", textKo: "상황을 통제해야 해요.", score: 0 }, // Less idiomatic
      { text: "We must become the main driver.", textKo: "우리가 주도자가 되어야 해요.", score: 0 } // Corporate jargon, less natural
    ]
  }
];

const OnboardingView: React.FC<Props> = ({ onComplete }) => {
  const { t } = useTranslation();
  const [step, setStep] = useState<'NAME' | 'LANGUAGE' | 'TEST' | 'RESULT'>('NAME');
  const [name, setName] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState<'en' | 'ko'>('en');
  const [testIndex, setTestIndex] = useState(0);
  const [score, setScore] = useState(0);

  // Reset state on mount
  useEffect(() => {
    setStep('NAME');
    setName('');
    setSelectedLanguage('en');
    setTestIndex(0);
    setScore(0);
  }, []);

  const handleNameSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim().length > 0 && name.trim().length <= 10) {
      setStep('LANGUAGE');
    }
  };

  const handleLanguageSelect = (lang: 'en' | 'ko') => {
    setSelectedLanguage(lang);
    setStep('TEST');
  };

  const handleTestAnswer = (points: number) => {
    const newScore = score + points;
    setScore(newScore);

    const currentScenarios = selectedLanguage === 'ko' ? TEST_SCENARIOS_KO : TEST_SCENARIOS_EN;
    if (testIndex < currentScenarios.length - 1) {
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
  const currentScenarios = selectedLanguage === 'ko' ? TEST_SCENARIOS_KO : TEST_SCENARIOS_EN;
  const currentScenario = currentScenarios[testIndex];

  return (
    <div className="h-full flex flex-col items-center justify-center p-6 bg-white">
      {step === 'NAME' && (
        <form onSubmit={handleNameSubmit} className="w-full max-w-xs flex flex-col gap-6 animate-pop-in">
          <div className="text-center">
             <h1 className="text-3xl font-extrabold text-primary mb-2">{t('onboarding.welcome')}</h1>
             <p className="text-slate-500">{t('onboarding.enterName')}</p>
          </div>
          <input 
            type="text" 
            value={name}
            onChange={(e) => setName(e.target.value)}
            maxLength={10}
            placeholder={t('onboarding.namePlaceholder')}
            className="w-full p-4 text-center text-xl font-bold border-2 border-slate-100 rounded-2xl focus:border-primary outline-none transition-colors"
            autoFocus
          />
          <button 
            type="submit"
            disabled={!name.trim()}
            className="w-full py-4 bg-primary text-white font-bold rounded-2xl disabled:bg-slate-200 disabled:text-slate-400 transition-all active:scale-95"
          >
            {t('onboarding.start')}
          </button>
        </form>
      )}

      {step === 'LANGUAGE' && (
        <div className="w-full max-w-xs flex flex-col gap-6 animate-pop-in">
          <div className="text-center">
            <h1 className="text-3xl font-extrabold text-primary mb-2">{t('onboarding.selectLanguage')}</h1>
            <p className="text-slate-500">{t('onboarding.selectLanguageDesc')}</p>
          </div>
          <div className="flex flex-col gap-3">
            <button
              onClick={() => handleLanguageSelect('en')}
              className={`p-6 rounded-xl border-2 flex items-center justify-between transition-all ${
                selectedLanguage === 'en' 
                  ? 'border-primary bg-primary/5' 
                  : 'border-slate-100 hover:border-slate-300'
              }`}
            >
              <div className="flex items-center gap-3">
                <Languages size={24} className="text-slate-400" />
                <h3 className={`font-bold text-lg ${selectedLanguage === 'en' ? 'text-primary' : 'text-slate-700'}`}>
                  {t('onboarding.learningLanguageEnglish')}
                </h3>
              </div>
              {selectedLanguage === 'en' && (
                <div className="bg-primary text-white p-1 rounded-full">
                  <Check size={18} />
                </div>
              )}
            </button>
            <button
              onClick={() => handleLanguageSelect('ko')}
              className={`p-6 rounded-xl border-2 flex items-center justify-between transition-all ${
                selectedLanguage === 'ko' 
                  ? 'border-primary bg-primary/5' 
                  : 'border-slate-100 hover:border-slate-300'
              }`}
            >
              <div className="flex items-center gap-3">
                <Languages size={24} className="text-slate-400" />
                <h3 className={`font-bold text-lg ${selectedLanguage === 'ko' ? 'text-primary' : 'text-slate-700'}`}>
                  {t('onboarding.learningLanguageKorean')}
                </h3>
              </div>
              {selectedLanguage === 'ko' && (
                <div className="bg-primary text-white p-1 rounded-full">
                  <Check size={18} />
                </div>
              )}
            </button>
          </div>
        </div>
      )}

      {step === 'TEST' && (
        <div className="w-full h-full flex flex-col pt-10 pb-6 animate-slide-up">
           <div className="text-center mb-6">
             <span className="text-xs font-bold text-slate-400 uppercase tracking-widest bg-slate-100 px-3 py-1 rounded-full">{t('onboarding.levelTest', { current: testIndex + 1, total: currentScenarios.length })}</span>
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
                     <Lightbulb size={12} /> {t('onboarding.myIntention')}
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
                      {selectedLanguage === 'ko' ? opt.textKo : opt.text}
                  </button>
              ))}
           </div>
        </div>
      )}

      {step === 'RESULT' && (
        <div className="text-center animate-pop-in">
            <Sparkles size={64} className="text-yellow-400 mx-auto mb-6 animate-bounce" />
            <h2 className="text-2xl font-bold text-slate-800 mb-2">{t('onboarding.testComplete')}</h2>
            <p className="text-slate-500 mb-6">{t('onboarding.recommendedLevel')}</p>
            
            <div className="text-4xl font-extrabold text-primary mb-8 uppercase tracking-wider">
                {resultLevel}
            </div>

            <button 
                onClick={() => onComplete({ name, level: resultLevel, learningLanguage: selectedLanguage })}
                className="px-8 py-4 bg-primary text-white font-bold rounded-full shadow-lg shadow-primary/30 active:scale-95 transition-all flex items-center gap-2 mx-auto"
            >
                {t('onboarding.startVibeCheck')} <ArrowRight size={20} />
            </button>
        </div>
      )}
    </div>
  );
};

export default OnboardingView;
