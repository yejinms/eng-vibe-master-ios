
import React from 'react';
import { CharacterProfile, Difficulty } from '../types';
import { Trophy } from 'lucide-react';

interface Props {
  character: CharacterProfile;
  level: number;
  difficulty: Difficulty;
  onClick: () => void;
  userName?: string;
}

const CharacterCard: React.FC<Props> = ({ character, level, difficulty, onClick, userName }) => {
  const levels = character.levels[difficulty] || [];
  const maxLevel = levels.length || 1; 
  const progressPercent = Math.min((level / maxLevel) * 100, 100);
  const isCompleted = level >= maxLevel && maxLevel > 0;

  return (
    <div 
      onClick={onClick}
      className="relative bg-white rounded-2xl p-4 shadow-sm border border-slate-100 flex items-center gap-4 cursor-pointer active:scale-98 transition-transform hover:shadow-md mb-4 group"
    >
      <div className={`w-16 h-16 rounded-full p-0.5 border-2 border-white shadow-sm overflow-hidden shrink-0 ${character.colorTheme}`}>
        <img 
          src={`https://api.dicebear.com/9.x/micah/svg?seed=${character.avatarSeed}&backgroundColor=transparent`} 
          alt={character.name}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform"
        />
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-3">
          <h3 className="font-bold text-lg text-slate-800">{character.name}</h3>
          <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wide ${character.tagColor}`}>
            {character.role}
          </span>
        </div>
        
        <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
          <div 
            className="h-full bg-primary transition-all duration-500 ease-out" 
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>

      <div className="flex flex-col items-end justify-center pl-2">
        {isCompleted ? (
           <div className="w-8 h-8 bg-yellow-100 text-yellow-600 rounded-full flex items-center justify-center">
             <Trophy size={16} />
           </div>
        ) : (
          <div className="text-xs font-bold text-slate-400 bg-slate-50 px-2 py-1 rounded-lg">
            Lv.{level + 1}
          </div>
        )}
      </div>
    </div>
  );
};

export default CharacterCard;