import React from 'react';
import { 
  X, Award, Sparkles, Compass, Layers, Factory, 
  Bot, CheckCircle2, LineChart, Trophy, Lock 
} from 'lucide-react';
import { BADGES_LIST } from '../data/levelsData';
import { Language } from '../types';

interface BadgesModalProps {
  isOpen: boolean;
  onClose: () => void;
  unlockedBadgeIds: string[];
  lang: Language;
}

export const BadgesModal: React.FC<BadgesModalProps> = ({
  isOpen,
  onClose,
  unlockedBadgeIds,
  lang
}) => {
  if (!isOpen) return null;
  const isKn = lang === 'kn' || lang === 'bilingual';

  const iconMap: { [key: string]: React.ReactNode } = {
    Sparkles: <Sparkles className="w-6 h-6 text-amber-400" />,
    Compass: <Compass className="w-6 h-6 text-sky-400" />,
    Layers: <Layers className="w-6 h-6 text-purple-400" />,
    Factory: <Factory className="w-6 h-6 text-emerald-400" />,
    Bot: <Bot className="w-6 h-6 text-rose-400" />,
    CheckCircle2: <CheckCircle2 className="w-6 h-6 text-cyan-400" />,
    LineChart: <LineChart className="w-6 h-6 text-yellow-400" />,
    Trophy: <Trophy className="w-6 h-6 text-amber-300" />
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div className="bg-slate-900 border border-slate-700 w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-slate-800 bg-slate-950">
          <div className="flex items-center gap-2.5">
            <div className="p-2 bg-amber-500/20 text-amber-400 rounded-xl">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base font-bold text-white">
                {isKn ? 'ಸಾಧನೆಯ ಬ್ಯಾಡ್ಜ್‌ಗಳು (Achievement Badges)' : 'Achievement Badges'}
              </h2>
              <p className="text-xs text-slate-400">
                {isKn
                  ? `ಅನ್‌ಲಾಕ್ ಆಗಿರುವ ಬ್ಯಾಡ್ಜ್‌ಗಳು: ${unlockedBadgeIds.length} / ${BADGES_LIST.length}`
                  : `Unlocked: ${unlockedBadgeIds.length} of ${BADGES_LIST.length}`}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Badges Grid */}
        <div className="p-5 overflow-y-auto grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          {BADGES_LIST.map((b) => {
            const isUnlocked = unlockedBadgeIds.includes(b.id);
            return (
              <div
                key={b.id}
                className={`p-3.5 rounded-xl border transition-all flex items-start gap-3.5 ${
                  isUnlocked
                    ? 'bg-slate-950/80 border-amber-500/40 shadow-lg shadow-amber-950/20'
                    : 'bg-slate-950/40 border-slate-800/80 opacity-60'
                }`}
              >
                <div
                  className={`p-2.5 rounded-xl border flex items-center justify-center ${
                    isUnlocked
                      ? 'bg-slate-900 border-amber-500/30'
                      : 'bg-slate-900 border-slate-800'
                  }`}
                >
                  {isUnlocked ? iconMap[b.icon] || <Award className="w-6 h-6 text-amber-400" /> : <Lock className="w-6 h-6 text-slate-600" />}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1.5">
                    <h3 className="font-bold text-xs text-white truncate">
                      {isKn ? b.nameKn : b.nameEn}
                    </h3>
                  </div>
                  <p className="text-[11px] text-slate-400 mt-1 leading-relaxed">
                    {isKn ? b.descKn : b.descEn}
                  </p>
                  <div className="mt-2 text-[10px] font-mono">
                    {isUnlocked ? (
                      <span className="text-emerald-400 font-semibold">✓ {isKn ? 'ಗಳಿಸಲಾಗಿದೆ' : 'Unlocked'}</span>
                    ) : (
                      <span className="text-slate-500">🔒 {isKn ? 'ಲಾಕ್ ಆಗಿದೆ' : 'Locked'}</span>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <div className="p-3 bg-slate-950 border-t border-slate-800 text-center text-xs text-slate-400">
          {isKn
            ? 'ಪ್ರತಿ ಹಂತದ ಕಲಿಕೆ ಮತ್ತು ಚಾಲೆಂಜ್ ಮುಗಿಸಿದಂತೆ ಹೊಸ ಬ್ಯಾಡ್ಜ್‌ಗಳು ದೊರೆಯುತ್ತವೆ!'
            : 'Complete missions, practice challenges, and tests to earn all badges!'}
        </div>
      </div>
    </div>
  );
};
