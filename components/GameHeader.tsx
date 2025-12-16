import React, { useState, useEffect, useRef, useMemo } from 'react';
import { ChevronLeft, Languages, Heart, HeartCrack } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { CharacterProfile, Difficulty } from '../types';
import { getLocalizedLevelData } from '../utils/localization';

interface Props {
  character: CharacterProfile;
  levelIndex: number;
  onBack: () => void;
  progressValue: number; // 0 to 100
  currentStep: number;
  totalSteps: number;
  isEnglish: boolean;
  onToggleLanguage: () => void;
  difficulty: Difficulty;
}

const GameHeader: React.FC<Props> = ({ character, levelIndex, onBack, progressValue, currentStep, totalSteps, isEnglish, onToggleLanguage, difficulty }) => {
  const { i18n } = useTranslation();
  const rawLevelData = character.levels[difficulty]?.[levelIndex];
  
  // Get localized title based on UI language
  const currentLevelTitle = useMemo(() => {
    if (!rawLevelData) return "Ending";
    const localizedData = getLocalizedLevelData(rawLevelData, i18n.language);
    return localizedData.title;
  }, [rawLevelData, i18n.language]);
  
  const diffColor = {
      beginner: 'bg-green-100 text-green-700',
      intermediate: 'bg-blue-100 text-blue-700',
      advanced: 'bg-purple-100 text-purple-700',
  }[difficulty];

  // Animation logic for Heart/Broken Heart
  const prevProgressRef = useRef(progressValue);
  const [feedbackIcon, setFeedbackIcon] = useState<'heart' | 'broken' | null>(null);

  useEffect(() => {
    // Only trigger if difference is significant (e.g. correct/incorrect answer)
    // and prevent initial mount trigger if progressValue starts at 50
    if (prevProgressRef.current !== progressValue) {
        if (progressValue > prevProgressRef.current) {
            setFeedbackIcon('heart');
            setTimeout(() => setFeedbackIcon(null), 1500);
        } else if (progressValue < prevProgressRef.current) {
            setFeedbackIcon('broken');
            setTimeout(() => setFeedbackIcon(null), 1500);
        }
        prevProgressRef.current = progressValue;
    }
  }, [progressValue]);

  // Animation logic for Language Button emphasis (on mount)
  const [isButtonHighlighted, setIsButtonHighlighted] = useState(true);
  useEffect(() => {
      const timer = setTimeout(() => setIsButtonHighlighted(false), 2000);
      return () => clearTimeout(timer);
  }, []);

  return (
    <div 
      className="bg-white flex items-center justify-between px-4 shadow-sm z-20 shrink-0 relative"
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
        
        <div className="flex items-center gap-3">
          <img 
            src={`https://api.dicebear.com/9.x/micah/svg?seed=${character.avatarSeed}&backgroundColor=transparent`}
            className={`w-10 h-10 rounded-full border border-slate-100 ${character.colorTheme}`}
            alt="avatar"
          />
          <div className="flex flex-col">
            <span className="font-bold text-slate-800 leading-tight">{character.name}</span>
            <span className="text-xs text-slate-500 flex items-center gap-1">
                <span className={`px-1.5 rounded-sm uppercase text-[9px] font-bold ${diffColor}`}>
                    {difficulty.substring(0,3)}
                </span>
                Ch.{levelIndex + 1}: {currentLevelTitle}
            </span>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-3">
        {/* Language Toggle with Emphasis */}
        <button 
          onClick={onToggleLanguage}
          className={`flex items-center gap-1 text-[10px] font-bold px-2 py-1 rounded-full border transition-all duration-300
            ${isButtonHighlighted 
                ? 'bg-primary text-white border-primary shadow-lg scale-110 ring-4 ring-primary/20 animate-pulse' 
                : isEnglish 
                    ? 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
                    : 'bg-slate-800 text-white border-slate-800'
            }
          `}
        >
          <Languages size={12} />
          {isEnglish ? 'EN' : 'KR'}
        </button>

        <div className="flex flex-col items-end gap-1 relative">
           {/* Feedback Icon Overlay */}
           {feedbackIcon && (
               <div className={`absolute top-4 right-5 transition-opacity duration-300 z-50 pointer-events-none ${feedbackIcon === 'heart' ? 'animate-bounce' : 'animate-shake'}`}>
                   {feedbackIcon === 'heart' ? (
                       <Heart className="text-pink-500 fill-pink-500 drop-shadow-sm" size={24} />
                   ) : (
                       <HeartCrack className="text-slate-400 fill-slate-300 drop-shadow-sm" size={24} />
                   )}
               </div>
           )}

           <div className="text-[10px] font-bold text-slate-400 bg-slate-100 px-2 py-0.5 rounded-full">
              {currentStep} / {totalSteps}
           </div>
           
           <div className="w-16 h-1.5 bg-slate-100 rounded-full overflow-hidden relative">
               <div 
                  className={`h-full transition-all duration-500 ease-out ${progressValue < 30 ? 'bg-red-400' : 'bg-accent'}`}
                  style={{ width: `${progressValue}%` }}
               />
           </div>
        </div>
      </div>
    </div>
  );
};

export default GameHeader;