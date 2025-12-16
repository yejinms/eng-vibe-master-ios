
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { CharacterProfile, Difficulty } from '../types';
import confetti from 'canvas-confetti';
import { getLocalizedLevelData, getLocalizedText } from '../utils/localization';

interface Props {
  type: 'LEVEL_UP' | 'COMPLETED';
  character: CharacterProfile;
  nextLevelIndex: number;
  difficulty: Difficulty;
  onAction: () => void;
  onHome?: () => void;
}

const LevelUpView: React.FC<Props> = ({ type, character, nextLevelIndex, difficulty, onAction, onHome }) => {
  const { t, i18n } = useTranslation();
  
  useEffect(() => {
    if (type === 'COMPLETED') {
        const duration = 3000;
        const end = Date.now() + duration;

        const frame = () => {
        confetti({
            particleCount: 2,
            angle: 60,
            spread: 55,
            origin: { x: 0 },
            colors: ['#6c5ce7', '#fd79a8']
        });
        confetti({
            particleCount: 2,
            angle: 120,
            spread: 55,
            origin: { x: 1 },
            colors: ['#6c5ce7', '#fd79a8']
        });

        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }
        };
        frame();
    }
  }, [type]);

  const isCompleted = type === 'COMPLETED';
  const rawNextLevelData = character.levels[difficulty]?.[nextLevelIndex];
  const nextLevelData = rawNextLevelData ? getLocalizedLevelData(rawNextLevelData, i18n.language) : null;
  const nextChapterTitle = nextLevelData?.title;

  return (
    <div className="flex flex-col items-center justify-center h-full bg-slate-50 p-6 text-center animate-fade-in space-y-6">
      <div className="text-6xl animate-bounce">
        {isCompleted ? '🎉' : '🆙'}
      </div>
      
      <div>
        <h2 className="text-3xl font-extrabold text-slate-800 mb-2">
            {isCompleted ? t('levelUp.allChaptersCleared') : t('levelUp.levelUp')}
        </h2>
        <p className="text-slate-500">
            {isCompleted 
                ? t('levelUp.storyCompleted', { name: character.name, difficulty })
                : t('levelUp.relationshipDeepened', { name: character.name })}
        </p>
      </div>

      {!isCompleted && nextChapterTitle && (
          <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 w-full max-w-xs">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">{t('levelUp.nextChapter')}</span>
              <div className="font-bold text-lg text-primary mt-1">
                  {nextChapterTitle}
              </div>
          </div>
      )}

      <div className="w-full max-w-xs flex flex-col gap-3">
        <button 
          onClick={onAction}
          className="w-full py-4 bg-primary text-white rounded-full font-bold text-lg shadow-lg shadow-primary/30 hover:bg-primary/90 active:scale-95 transition-all"
        >
          {isCompleted ? t('levelUp.goToMain') : t('levelUp.continueStory')}
        </button>

        {!isCompleted && onHome && (
          <button 
              onClick={onHome}
              className="w-full py-3 text-slate-400 font-bold text-sm hover:text-slate-600 active:scale-95 transition-all"
          >
              {t('levelUp.goToMain')}
          </button>
        )}
      </div>
    </div>
  );
};

export default LevelUpView;