import React, { useState } from 'react';
import { CharacterProfile, Difficulty, UserProfile } from '../types';
import CharacterCard from '../components/CharacterCard';
import { RotateCcw, Plus, X, Sparkles, Heart, Sword, Briefcase, Lock, User, UserMinus, Users, Ghost, Loader2, Settings, Check, BookOpen } from 'lucide-react';
import { RelationType, ThemeType } from '../utils/generator';

interface Props {
  progress: Record<string, Record<string, number>>;
  userProfile: UserProfile;
  characters: CharacterProfile[];
  onSelectCharacter: (id: string) => void;
  onReset: () => void;
  onCreateCharacter: (relation: RelationType, theme: ThemeType) => void;
  isGenerating: boolean;
  onRetakeTest: () => void;
  onUpdateLevel: (level: Difficulty) => void;
  onPractice: () => void;
}

const HomeView: React.FC<Props> = ({ progress, characters, userProfile, onSelectCharacter, onReset, onCreateCharacter, isGenerating, onRetakeTest, onUpdateLevel, onPractice }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLevelModalOpen, setIsLevelModalOpen] = useState(false);
  const [selectedRelation, setSelectedRelation] = useState<RelationType | null>(null);
  const [selectedTheme, setSelectedTheme] = useState<ThemeType | null>(null);

  const handleCreate = () => {
    if (selectedRelation && selectedTheme) {
        onCreateCharacter(selectedRelation, selectedTheme);
    }
  };

  React.useEffect(() => {
    if (!isGenerating && isModalOpen && selectedRelation && selectedTheme) {
        setIsModalOpen(false);
        setSelectedRelation(null);
        setSelectedTheme(null);
    }
  }, [isGenerating]);

  const RELATIONS: {id: RelationType, label: string, icon: React.ReactNode}[] = [
      { id: 'boss', label: '직장 상사', icon: <Briefcase size={20} /> },
      { id: 'ex', label: '전 애인', icon: <UserMinus size={20} /> },
      { id: 'neighbor', label: '이웃', icon: <Users size={20} /> },
      { id: 'stranger', label: '낯선 사람', icon: <Ghost size={20} /> },
  ];

  const THEMES: {id: ThemeType, label: string, icon: React.ReactNode, color: string}[] = [
      { id: 'romance', label: '로맨스', icon: <Heart size={18} />, color: 'bg-pink-100 text-pink-600 border-pink-200' },
      { id: 'conflict', label: '싸움/갈등', icon: <Sword size={18} />, color: 'bg-red-100 text-red-600 border-red-200' },
      { id: 'business', label: '비즈니스', icon: <Briefcase size={18} />, color: 'bg-blue-100 text-blue-600 border-blue-200' },
      { id: 'secret', label: '비밀', icon: <Lock size={18} />, color: 'bg-purple-100 text-purple-600 border-purple-200' },
  ];

  const difficultyLabel = userProfile.level.charAt(0).toUpperCase() + userProfile.level.slice(1);
  const DIFFICULTIES: {id: Difficulty, label: string, desc: string, color: string}[] = [
      { id: 'beginner', label: 'Beginner', desc: '기초 회화 및 관용구', color: 'bg-green-100 text-green-800 border-green-200' },
      { id: 'intermediate', label: 'Intermediate', desc: '자연스러운 구어체 표현', color: 'bg-blue-100 text-blue-800 border-blue-200' },
      { id: 'advanced', label: 'Advanced', desc: '세련된 원어민 뉘앙스', color: 'bg-purple-100 text-purple-800 border-purple-200' },
  ];

  return (
    <div className="flex flex-col h-full bg-slate-50 relative">
      {/* Header */}
      <div 
        className="pb-6 px-6 bg-white rounded-b-[2rem] shadow-sm z-10 shrink-0"
        style={{ 
          paddingTop: 'calc(3rem + env(safe-area-inset-top))',
        }}
      >
        <h2 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Vibe Master</h2>
        <div className="flex justify-between items-center">
            <h1 className="text-3xl font-extrabold text-slate-800">Hello, {userProfile.name}</h1>
            <button 
                onClick={() => setIsLevelModalOpen(true)}
                className="bg-slate-100 hover:bg-slate-200 active:scale-95 transition-all px-3 py-1.5 rounded-full flex items-center gap-2"
            >
                <span className="text-xs font-bold text-slate-600 uppercase">{difficultyLabel}</span>
                <Settings size={14} className="text-slate-400" />
            </button>
        </div>
      </div>

      {/* Character List */}
      <div className="flex-1 overflow-y-auto px-5 py-6 space-y-2 scrollbar-hide pb-24">
        {characters.map((char) => {
          // Logic: Hide characters that do not have content for the current user level
          const hasContent = char.levels[userProfile.level] && char.levels[userProfile.level].length > 0;
          if (!hasContent) return null;

          return (
            <CharacterCard 
                key={char.id}
                character={char}
                level={progress[char.id]?.[userProfile.level] || 0}
                onClick={() => onSelectCharacter(char.id)}
                difficulty={userProfile.level}
                userName={userProfile.name}
            />
          );
        })}

        {/* Create New Card */}
        <div 
            onClick={() => setIsModalOpen(true)}
            className="border-2 border-dashed border-slate-300 rounded-2xl p-6 flex flex-col items-center justify-center gap-2 cursor-pointer hover:bg-slate-100 hover:border-slate-400 transition-all text-slate-400 hover:text-slate-600 group mb-10"
        >
            <div className="w-12 h-12 rounded-full bg-slate-200 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Plus size={24} />
            </div>
            <span className="font-bold text-sm">새로운 캐릭터 만들기</span>
        </div>
      </div>
      
      {/* Footer Practice Button */}
      <div 
        className="absolute bottom-0 w-full p-4 bg-gradient-to-t from-slate-50 to-transparent z-20 pointer-events-none flex justify-center"
        style={{ paddingBottom: 'calc(2rem + env(safe-area-inset-bottom))' }}
      >
        <button 
          onClick={onPractice}
          className="pointer-events-auto shadow-xl shadow-primary/30 w-full max-w-xs bg-primary text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-primary/90 active:scale-95 transition-all"
        >
          <BookOpen size={20} />
          연습하기 (Review)
        </button>
      </div>

      {/* Creation Modal */}
      {isModalOpen && (
          <div className="absolute inset-0 bg-black/60 z-50 flex items-end sm:items-center justify-center animate-fade-in backdrop-blur-sm">
              <div className="bg-white w-full max-w-sm mx-4 mb-4 sm:mb-0 rounded-3xl p-6 shadow-2xl animate-slide-up flex flex-col max-h-[90%]">
                  <div className="flex justify-between items-center mb-6">
                      <div className="flex items-center gap-2">
                        <Sparkles className="text-yellow-500" size={20} />
                        <h2 className="text-xl font-bold text-slate-800">New Story</h2>
                      </div>
                      <button 
                        onClick={() => setIsModalOpen(false)} 
                        disabled={isGenerating}
                        className="p-2 bg-slate-100 rounded-full hover:bg-slate-200 text-slate-500 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                          <X size={18} />
                      </button>
                  </div>

                  <div className="overflow-y-auto scrollbar-hide flex-1">
                    <div className="mb-6">
                        <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wide mb-3">1. 관계 선택 (Relationship)</h3>
                        <div className="grid grid-cols-2 gap-3">
                            {RELATIONS.map(rel => (
                                <button
                                    key={rel.id}
                                    onClick={() => setSelectedRelation(rel.id)}
                                    disabled={isGenerating}
                                    className={`p-4 rounded-xl border-2 flex flex-col items-center gap-2 transition-all ${selectedRelation === rel.id ? 'border-primary bg-primary/5 text-primary' : 'border-slate-100 bg-slate-50 text-slate-500 hover:border-slate-300'} ${isGenerating ? 'opacity-50 cursor-not-allowed' : ''}`}
                                >
                                    {rel.icon}
                                    <span className="text-sm font-bold">{rel.label}</span>
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="mb-6">
                        <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wide mb-3">2. 상황/분위기 (Vibe)</h3>
                        <div className="grid grid-cols-2 gap-3">
                            {THEMES.map(theme => (
                                <button
                                    key={theme.id}
                                    onClick={() => setSelectedTheme(theme.id)}
                                    disabled={!selectedRelation || isGenerating}
                                    className={`p-3 rounded-xl border-2 flex items-center gap-2 transition-all ${selectedTheme === theme.id ? 'border-slate-800 bg-slate-800 text-white' : 'border-slate-100 bg-white text-slate-600 hover:bg-slate-50'} ${(!selectedRelation || isGenerating) ? 'opacity-50 cursor-not-allowed' : ''}`}
                                >
                                    <div className={`p-1.5 rounded-full ${theme.color.split(' ')[0]} ${theme.color.split(' ')[1]}`}>
                                        {theme.icon}
                                    </div>
                                    <span className="text-sm font-bold">{theme.label}</span>
                                </button>
                            ))}
                        </div>
                    </div>
                  </div>

                  <button 
                    onClick={handleCreate}
                    disabled={!selectedRelation || !selectedTheme || isGenerating}
                    className="w-full py-4 bg-primary text-white font-bold rounded-2xl shadow-lg shadow-primary/30 disabled:bg-slate-200 disabled:text-slate-400 disabled:shadow-none transition-all active:scale-95 mt-4 flex items-center justify-center gap-2"
                  >
                      {isGenerating ? (
                        <>
                          <Loader2 size={20} className="animate-spin" />
                          스토리 생성 중...
                        </>
                      ) : (
                        '대화 시작하기'
                      )}
                  </button>
              </div>
          </div>
      )}

      {/* Level Settings Modal */}
      {isLevelModalOpen && (
          <div className="absolute inset-0 bg-black/60 z-50 flex items-end sm:items-center justify-center animate-fade-in backdrop-blur-sm">
               <div className="bg-white w-full max-w-sm mx-4 mb-4 sm:mb-0 rounded-3xl p-6 shadow-2xl animate-slide-up flex flex-col">
                  <div className="flex justify-between items-center mb-6">
                      <h2 className="text-xl font-bold text-slate-800">Settings</h2>
                      <button onClick={() => setIsLevelModalOpen(false)} className="p-2 bg-slate-100 rounded-full hover:bg-slate-200 text-slate-500">
                          <X size={18} />
                      </button>
                  </div>
                  
                  <div className="space-y-3 mb-6">
                      <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Difficulty</h3>
                      {DIFFICULTIES.map(diff => (
                          <div 
                            key={diff.id}
                            onClick={() => onUpdateLevel(diff.id)}
                            className={`p-4 rounded-xl border-2 flex items-center justify-between cursor-pointer transition-all ${userProfile.level === diff.id ? `border-primary bg-primary/5` : 'border-slate-100 hover:border-slate-300'}`}
                          >
                              <div>
                                  <h3 className={`font-bold ${userProfile.level === diff.id ? 'text-primary' : 'text-slate-700'}`}>{diff.label}</h3>
                                  <p className="text-xs text-slate-500">{diff.desc}</p>
                              </div>
                              {userProfile.level === diff.id && (
                                  <div className="bg-primary text-white p-1 rounded-full">
                                      <Check size={14} />
                                  </div>
                              )}
                          </div>
                      ))}
                  </div>
                  
                  <div className="space-y-3">
                    <button 
                        onClick={onRetakeTest}
                        className="w-full py-3 bg-slate-100 text-slate-600 font-bold rounded-xl hover:bg-slate-200 transition-colors"
                    >
                        레벨 테스트 다시 보기
                    </button>

                    <button 
                        onClick={onReset}
                        className="w-full py-3 border-2 border-red-100 text-red-400 font-bold rounded-xl hover:bg-red-50 hover:text-red-500 transition-colors flex items-center justify-center gap-2"
                    >
                        <RotateCcw size={16} />
                        데이터 초기화
                    </button>
                  </div>
               </div>
          </div>
      )}
    </div>
  );
};

export default HomeView;