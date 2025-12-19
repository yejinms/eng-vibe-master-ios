import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { CharacterProfile, Difficulty, UserProfile } from '../types';
import CharacterCard from '../components/CharacterCard';
import { RotateCcw, Plus, X, Sparkles, Heart, Sword, Briefcase, Lock, User, UserMinus, Users, Ghost, Loader2, Settings, Check, BookOpen, Languages } from 'lucide-react';

// 국기 이모지 컴포넌트
const FlagIcon: React.FC<{ code: string; size?: number }> = ({ code, size = 20 }) => {
  const flags: Record<string, string> = {
    'ko': '🇰🇷',
    'en': '🇺🇸',
    'es': '🇪🇸'
  };
  return <span style={{ fontSize: size }}>{flags[code] || '🌐'}</span>;
};
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
  onUpdateLearningLanguage: (language: 'en' | 'ko') => void;
  onPractice: () => void;
}

const HomeView: React.FC<Props> = ({ progress, characters, userProfile, onSelectCharacter, onReset, onCreateCharacter, isGenerating, onRetakeTest, onUpdateLevel, onUpdateLearningLanguage, onPractice }) => {
  const { t, i18n } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLevelModalOpen, setIsLevelModalOpen] = useState(false);
  const [selectedRelation, setSelectedRelation] = useState<RelationType | null>(null);
  const [selectedTheme, setSelectedTheme] = useState<ThemeType | null>(null);
  
  const languages = [
    { code: 'ko', name: '한국어' },
    { code: 'en', name: 'English' },
    { code: 'es', name: 'Español' },
  ];

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
      { id: 'boss', label: t('home.relations.boss'), icon: <Briefcase size={20} /> },
      { id: 'ex', label: t('home.relations.ex'), icon: <UserMinus size={20} /> },
      { id: 'neighbor', label: t('home.relations.neighbor'), icon: <Users size={20} /> },
      { id: 'stranger', label: t('home.relations.stranger'), icon: <Ghost size={20} /> },
  ];

  const THEMES: {id: ThemeType, label: string, icon: React.ReactNode, color: string}[] = [
      { id: 'romance', label: t('home.themes.romance'), icon: <Heart size={18} />, color: 'bg-pink-100 text-pink-600 border-pink-200' },
      { id: 'conflict', label: t('home.themes.conflict'), icon: <Sword size={18} />, color: 'bg-red-100 text-red-600 border-red-200' },
      { id: 'business', label: t('home.themes.business'), icon: <Briefcase size={18} />, color: 'bg-blue-100 text-blue-600 border-blue-200' },
      { id: 'secret', label: t('home.themes.secret'), icon: <Lock size={18} />, color: 'bg-purple-100 text-purple-600 border-purple-200' },
  ];

  const difficultyLabel = userProfile.level.charAt(0).toUpperCase() + userProfile.level.slice(1);
  const DIFFICULTIES: {id: Difficulty, label: string, desc: string, color: string}[] = [
      { id: 'beginner', label: t('home.difficulties.beginner.label'), desc: t('home.difficulties.beginner.desc'), color: 'bg-green-100 text-green-800 border-green-200' },
      { id: 'intermediate', label: t('home.difficulties.intermediate.label'), desc: t('home.difficulties.intermediate.desc'), color: 'bg-blue-100 text-blue-800 border-blue-200' },
      { id: 'advanced', label: t('home.difficulties.advanced.label'), desc: t('home.difficulties.advanced.desc'), color: 'bg-purple-100 text-purple-800 border-purple-200' },
  ];

  // 난이도 순서 정의
  const difficultyOrder: Difficulty[] = ['beginner', 'intermediate', 'advanced'];
  const currentDifficultyIndex = difficultyOrder.indexOf(userProfile.level);
  
  const canChangeToDifficulty = (targetDifficulty: Difficulty) => {
    const targetIndex = difficultyOrder.indexOf(targetDifficulty);
    // 현재 난이도보다 낮거나 같은 난이도로만 변경 가능
    return targetIndex <= currentDifficultyIndex;
  };

  return (
    <div className="flex flex-col h-full bg-slate-50 relative">
      {/* Header */}
      <div 
        className="pb-6 px-6 bg-white rounded-b-[2rem] shadow-sm z-10 shrink-0"
        style={{ 
          paddingTop: 'calc(3rem + env(safe-area-inset-top))',
        }}
      >
        <h2 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">VibeCheck</h2>
        <div className="flex justify-between items-center">
            <h1 className="text-3xl font-extrabold text-slate-800">{t('home.hello', { name: userProfile.name })}</h1>
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
            <span className="font-bold text-sm">{t('home.createNewCharacter')}</span>
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
          {t('home.practice')}
        </button>
      </div>

      {/* Creation Modal */}
      {isModalOpen && (
          <div className="absolute inset-0 bg-black/60 z-50 flex items-end sm:items-center justify-center animate-fade-in backdrop-blur-sm">
              <div className="bg-white w-full max-w-sm mx-4 mb-4 sm:mb-0 rounded-3xl p-6 shadow-2xl animate-slide-up flex flex-col max-h-[90%]">
                  <div className="flex justify-between items-center mb-6">
                      <div className="flex items-center gap-2">
                        <Sparkles className="text-yellow-500" size={20} />
                        <h2 className="text-xl font-bold text-slate-800">{t('home.newStory')}</h2>
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
                        <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wide mb-3">{t('home.selectRelationship')}</h3>
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
                        <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wide mb-3">{t('home.selectVibe')}</h3>
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
                          {t('app.storyGenerating')}
                        </>
                      ) : (
                        t('home.startConversation')
                      )}
                  </button>
              </div>
          </div>
      )}

      {/* Level Settings Modal */}
      {isLevelModalOpen && (
          <div className="absolute inset-0 bg-black/60 z-50 flex items-end sm:items-center justify-center animate-fade-in backdrop-blur-sm">
               <div className="bg-white w-full max-w-sm mx-4 mb-4 sm:mb-0 rounded-3xl p-5 shadow-2xl animate-slide-up flex flex-col max-h-[85vh] overflow-y-auto">
                  <div className="flex justify-between items-center mb-4">
                      <h2 className="text-lg font-bold text-slate-800">{t('home.settings')}</h2>
                      <button onClick={() => setIsLevelModalOpen(false)} className="p-2 bg-slate-100 rounded-full hover:bg-slate-200 text-slate-500">
                          <X size={18} />
                      </button>
                  </div>
                  
                  <div className="space-y-2 mb-4">
                      <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">{t('home.difficulty')}</h3>
                      <div className="grid grid-cols-3 gap-2">
                          {DIFFICULTIES.map(diff => {
                            const isLocked = !canChangeToDifficulty(diff.id);
                            const isSelected = userProfile.level === diff.id;
                            return (
                              <button
                                key={diff.id}
                                onClick={() => !isLocked && onUpdateLevel(diff.id)}
                                disabled={isLocked}
                                className={`p-3 rounded-lg border-2 flex flex-col items-center gap-1 transition-all min-h-[60px] ${
                                  isSelected 
                                    ? 'border-primary bg-primary/5 text-primary' 
                                    : isLocked
                                    ? 'border-slate-100 bg-slate-50 text-slate-400 opacity-50 cursor-not-allowed'
                                    : 'border-slate-200 bg-white text-slate-600 hover:border-slate-300'
                                }`}
                              >
                                  {isLocked && !isSelected && (
                                    <Lock size={14} className="text-slate-400 mb-0.5" />
                                  )}
                                  <span className={`text-xs font-bold ${isSelected ? 'text-primary' : isLocked ? 'text-slate-400' : 'text-slate-700'}`}>{diff.label}</span>
                                  {isSelected && (
                                      <Check size={12} className="text-primary" />
                                  )}
                              </button>
                            );
                          })}
                      </div>
                  </div>
                  
                  <div className="space-y-2 mb-4">
                      <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">{t('home.uiLanguage')}</h3>
                      <div className="grid grid-cols-3 gap-2">
                          {languages.map(lang => (
                              <button
                                key={lang.code}
                                onClick={() => i18n.changeLanguage(lang.code)}
                                className={`p-3 rounded-lg border-2 flex flex-col items-center gap-1 transition-all min-h-[60px] ${i18n.language === lang.code ? `border-primary bg-primary/5 text-primary` : 'border-slate-200 bg-white text-slate-600 hover:border-slate-300'}`}
                              >
                                  <FlagIcon code={lang.code} size={20} />
                                  <span className={`text-xs font-bold ${i18n.language === lang.code ? 'text-primary' : 'text-slate-700'}`}>{lang.name}</span>
                                  {i18n.language === lang.code && (
                                      <Check size={12} className="text-primary" />
                                  )}
                              </button>
                          ))}
                      </div>
                  </div>
                  
                  <div className="space-y-2 mb-4">
                      <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">{t('home.learningLanguage')}</h3>
                      <div className="grid grid-cols-2 gap-2">
                          <button
                            onClick={() => onUpdateLearningLanguage('en')}
                            className={`p-3 rounded-lg border-2 flex flex-col items-center gap-1 transition-all min-h-[60px] ${userProfile.learningLanguage === 'en' ? `border-primary bg-primary/5 text-primary` : 'border-slate-200 bg-white text-slate-600 hover:border-slate-300'}`}
                          >
                              <FlagIcon code="en" size={20} />
                              <span className={`text-xs font-bold ${userProfile.learningLanguage === 'en' ? 'text-primary' : 'text-slate-700'}`}>{t('home.learningLanguageEnglish')}</span>
                              {userProfile.learningLanguage === 'en' && (
                                  <Check size={12} className="text-primary" />
                              )}
                          </button>
                          <button
                            onClick={() => onUpdateLearningLanguage('ko')}
                            className={`p-3 rounded-lg border-2 flex flex-col items-center gap-1 transition-all min-h-[60px] ${userProfile.learningLanguage === 'ko' ? `border-primary bg-primary/5 text-primary` : 'border-slate-200 bg-white text-slate-600 hover:border-slate-300'}`}
                          >
                              <FlagIcon code="ko" size={20} />
                              <span className={`text-xs font-bold ${userProfile.learningLanguage === 'ko' ? 'text-primary' : 'text-slate-700'}`}>{t('home.learningLanguageKorean')}</span>
                              {userProfile.learningLanguage === 'ko' && (
                                  <Check size={12} className="text-primary" />
                              )}
                          </button>
                      </div>
                  </div>
                  
                  <div className="flex gap-2 mt-4">
                    <button 
                        onClick={onRetakeTest}
                        className="flex-1 py-3 bg-slate-100 text-slate-600 font-bold text-sm rounded-lg hover:bg-slate-200 transition-colors min-h-[44px] flex items-center justify-center"
                    >
                        {t('home.retakeTest')}
                    </button>

                    <button 
                        onClick={onReset}
                        className="flex-1 py-3 border-2 border-red-200 text-red-500 font-bold text-sm rounded-lg hover:bg-red-50 transition-colors flex items-center justify-center gap-1.5 min-h-[44px]"
                    >
                        <RotateCcw size={14} />
                        {t('home.resetData')}
                    </button>
                  </div>
               </div>
          </div>
      )}
    </div>
  );
};

export default HomeView;