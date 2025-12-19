
import React from 'react';
import { useTranslation } from 'react-i18next';
import { ReviewItem } from '../types';
import { RotateCcw, Home } from 'lucide-react';

interface Props {
  reviewItems: ReviewItem[];
  onRetry: () => void;
  onHome: () => void;
}

const GameOverView: React.FC<Props> = ({ reviewItems, onRetry, onHome }) => {
  const { t, i18n } = useTranslation();
  return (
    <div className="flex flex-col h-full bg-slate-100">
      <div className="bg-white p-6 pb-8 rounded-b-[2rem] shadow-sm text-center z-10">
        <div className="text-5xl mb-3 animate-pulse">💔</div>
        <h2 className="text-2xl font-extrabold text-slate-800 mb-1">{t('gameOver.title')}</h2>
        <p className="text-slate-500 text-sm">{t('gameOver.subtitle')}</p>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-hide">
        {reviewItems.length === 0 ? (
           <div className="text-center text-slate-400 mt-10">
               {t('gameOver.noMistakes')}
           </div>
        ) : (
            reviewItems.map((item) => (
                <div key={item.id} className="bg-white p-5 rounded-2xl shadow-sm border border-slate-200">
                    <div className="bg-slate-50 p-3 rounded-lg text-slate-600 text-sm mb-3 italic border-l-4 border-slate-300">
                        "{item.context}"
                    </div>
                    
                    <div className="mb-3">
                        <span className="text-xs font-bold text-red-500 uppercase tracking-wide">{t('gameOver.yourChoice')}</span>
                        <p className="text-slate-800 line-through decoration-red-400 decoration-2 opacity-70">{item.wrongAnswer}</p>
                    </div>

                    <div>
                        <span className="text-xs font-bold text-green-600 uppercase tracking-wide">{t('gameOver.betterVibe')}</span>
                        <p className="text-primary font-bold">{i18n.language === 'ko' ? item.correctOption.textKo : item.correctOption.text}</p>
                        <p className="text-xs text-slate-500 mt-1 bg-green-50 p-2 rounded-lg">
                            💡 {item.correctOption.explain}
                        </p>
                    </div>
                </div>
            ))
        )}
        <div className="h-10"></div>
      </div>

      <div className="bg-white p-4 border-t border-slate-100 flex gap-3 shadow-[0_-5px_20px_rgba(0,0,0,0.03)]">
        <button 
            onClick={onHome}
            className="flex-1 py-3 px-4 rounded-xl border-2 border-slate-100 text-slate-600 font-bold flex items-center justify-center gap-2 hover:bg-slate-50 active:scale-95 transition-all"
        >
            <Home size={18} />
            {t('gameOver.goHome')}
        </button>
        <button 
            onClick={onRetry}
            className="flex-[2] py-3 px-4 rounded-xl bg-primary text-white font-bold flex items-center justify-center gap-2 shadow-lg shadow-primary/30 active:scale-95 transition-all"
        >
            <RotateCcw size={18} />
            {t('gameOver.retry')}
        </button>
      </div>
    </div>
  );
};

export default GameOverView;
