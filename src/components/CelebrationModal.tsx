import React from 'react';
import { 
  Trophy, Sparkles, Award, ArrowRight, CheckCircle2, 
  RotateCcw, Check 
} from 'lucide-react';
import { Language, LevelData } from '../types';

interface CelebrationModalProps {
  isOpen: boolean;
  onClose: () => void;
  studentName: string;
  level: LevelData;
  xpEarned: number;
  unlockedBadgeName?: string;
  lang: Language;
  onNextLevel?: () => void;
}

export const CelebrationModal: React.FC<CelebrationModalProps> = ({
  isOpen,
  onClose,
  studentName,
  level,
  xpEarned,
  unlockedBadgeName,
  lang,
  onNextLevel
}) => {
  if (!isOpen) return null;
  const isKn = lang === 'kn' || lang === 'bilingual';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div className="bg-gradient-to-b from-slate-900 via-slate-900 to-amber-950/40 border-2 border-amber-500/80 w-full max-w-lg rounded-3xl shadow-2xl p-6 sm:p-8 text-center space-y-6 relative overflow-hidden">
        {/* Glow behind trophy */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-48 h-48 bg-amber-500/20 rounded-full blur-2xl pointer-events-none"></div>

        {/* Big Icon */}
        <div className="relative mx-auto w-20 h-20 rounded-3xl bg-gradient-to-tr from-amber-500 to-yellow-400 p-0.5 shadow-xl shadow-amber-950 flex items-center justify-center animate-bounce">
          <div className="w-full h-full bg-slate-950 rounded-[22px] flex items-center justify-center text-amber-400">
            <Trophy className="w-10 h-10" />
          </div>
        </div>

        {/* Personalized Message */}
        <div className="space-y-2 relative z-10">
          <span className="text-xs font-mono uppercase tracking-widest font-bold text-amber-400 bg-amber-500/15 px-3 py-1 rounded-full border border-amber-500/30 inline-block">
            {isKn ? 'ಮಿಷನ್ ಪೂರ್ಣಗೊಂಡಿದೆ!' : 'Mission Accomplished!'}
          </span>

          <h2 className="text-2xl sm:text-3xl font-black text-white font-sans">
            {isKn
              ? `ಚೆನ್ನಾಗಿದೆ, ${studentName}! ನೀವು Level ${level.id} ಪೂರ್ಣಗೊಳಿಸಿದ್ದೀರಿ!`
              : `Excellent, ${studentName}! You completed Level ${level.id}!`}
          </h2>

          <p className="text-sm text-amber-200 font-medium font-sans">
            {isKn
              ? 'ಅಭಿನಂದನೆಗಳು! ನೀವು ಮೆಕ್ಯಾನಿಕಲ್ ಕೋಡಿಂಗ್ ಇಂಜಿನಿಯರ್ ಆಗುತ್ತಿದ್ದೀರಿ!'
              : 'Congratulations! You are becoming a true Mechanical Coding Engineer!'}
          </p>

          <p className="text-xs text-slate-400 font-mono">
            {isKn ? level.title.kn : level.title.en}
          </p>
        </div>

        {/* Rewards Ribbon */}
        <div className="grid grid-cols-2 gap-3 bg-slate-950/80 p-4 rounded-2xl border border-slate-800 relative z-10">
          <div>
            <span className="text-[10px] font-mono text-slate-400 block uppercase">
              {isKn ? 'ಗಳಿಸಿದ ಅಂಕಗಳು' : 'Earned Points'}
            </span>
            <div className="text-2xl font-black text-emerald-400 font-mono mt-0.5 flex items-center justify-center gap-1">
              <Sparkles className="w-5 h-5 text-amber-400 fill-amber-400" />
              <span>+{xpEarned} XP</span>
            </div>
          </div>

          <div>
            <span className="text-[10px] font-mono text-slate-400 block uppercase">
              {isKn ? 'ಹಂತದ ಸ್ಥಿತಿ' : 'Status'}
            </span>
            <div className="text-2xl font-black text-amber-400 font-mono mt-0.5 flex items-center justify-center gap-1">
              <CheckCircle2 className="w-5 h-5 text-emerald-400" />
              <span>100%</span>
            </div>
          </div>
        </div>

        {/* Unlocked Badge Notice if any */}
        {unlockedBadgeName && (
          <div className="p-3 bg-gradient-to-r from-amber-500/20 via-slate-900 to-amber-500/20 border border-amber-500/50 rounded-xl text-xs text-amber-200 flex items-center justify-center gap-2 font-mono">
            <Award className="w-4 h-4 text-amber-400" />
            <span>
              {isKn ? 'ಹೊಸ ಬ್ಯಾಡ್ಜ್ ಅನ್‌ಲಾಕ್ ಆಗಿದೆ:' : 'New Badge Unlocked:'}{' '}
              <strong className="text-white">{unlockedBadgeName}</strong>
            </span>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 relative z-10">
          <button
            onClick={onClose}
            className="flex-1 py-3 bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs rounded-xl transition-colors cursor-pointer"
          >
            {isKn ? 'ಮುಖಪುಟಕ್ಕೆ ಹಿಂತಿರುಗಿ (Mission Map)' : 'Back to Mission Map'}
          </button>

          {onNextLevel && level.id < 13 && (
            <button
              onClick={() => {
                onClose();
                onNextLevel();
              }}
              className="flex-1 py-3 bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs rounded-xl transition-all shadow-lg shadow-amber-950 flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <span>{isKn ? 'ಮುಂದಿನ ಲೆವೆಲ್‌ಗೆ ಹೋಗಿ' : 'Next Mission'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
