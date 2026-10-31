import React from 'react';
import { 
  Award, BookOpen, GraduationCap, Globe, 
  Sparkles, CheckCircle2, ShieldAlert 
} from 'lucide-react';
import { Language } from '../types';

interface NavbarProps {
  lang: Language;
  onLanguageChange: (lang: Language) => void;
  studentName?: string;
  xp: number;
  completedCount: number;
  currentMode: 'student' | 'teacher';
  onModeChange: (mode: 'student' | 'teacher') => void;
  onOpenBadges: () => void;
  onOpenManual: () => void;
  onOpenCertificate: () => void;
  onGoHome: () => void;
  onSwitchStudent?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  lang,
  onLanguageChange,
  studentName,
  xp,
  completedCount,
  currentMode,
  onModeChange,
  onOpenBadges,
  onOpenManual,
  onOpenCertificate,
  onGoHome,
  onSwitchStudent
}) => {
  const isKn = lang === 'kn' || lang === 'bilingual';

  return (
    <header className="sticky top-0 z-50 bg-slate-950/90 backdrop-blur-md border-b border-slate-800">
      {/* Top micro institution bar */}
      <div className="bg-gradient-to-r from-amber-600/20 via-sky-900/30 to-amber-600/20 border-b border-slate-800/80 px-4 py-1 text-[11px] text-slate-300 flex items-center justify-between">
        <div className="flex items-center gap-2 truncate">
          <span className="font-semibold text-amber-400">Adichunchanagiri Polytechnic</span>
          <span className="hidden sm:inline text-slate-500">•</span>
          <span className="hidden sm:inline text-slate-400">Department of Mechanical Engineering</span>
          <span className="hidden md:inline text-slate-500">•</span>
          <span className="hidden md:inline text-slate-400">III Sem Diploma (Prog Concepts in Mech Engg)</span>
        </div>
        <div className="flex items-center gap-2 text-xs">
          {studentName && currentMode === 'student' && onSwitchStudent && (
            <button
              onClick={onSwitchStudent}
              className="text-[10px] font-mono text-amber-300/80 hover:text-amber-300 hover:underline cursor-pointer mr-1"
            >
              {isKn ? 'ನಿರ್ಗಮಿಸಿ (Logout)' : 'Logout'}
            </button>
          )}
          {currentMode === 'teacher' && (
            <button
              onClick={() => onModeChange('student')}
              className="px-2.5 py-0.5 rounded text-[10px] font-mono font-bold bg-amber-500 text-slate-950 shadow-md shadow-amber-950 hover:bg-amber-400 cursor-pointer"
            >
              {isKn ? 'ಫ್ಯಾಕಲ್ಟಿ ನಿರ್ಗಮಿಸಿ (Exit Teacher)' : 'Exit Faculty Portal'}
            </button>
          )}
        </div>
      </div>

      {/* Main navigation */}
      <div className="max-w-7xl mx-auto px-4 py-2.5 flex items-center justify-between gap-4">
        {/* Brand identity */}
        <div 
          onClick={onGoHome}
          className="flex items-center gap-3 cursor-pointer group"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 to-amber-600 flex items-center justify-center text-slate-950 font-black shadow-lg shadow-amber-900/40 group-hover:scale-105 transition-transform">
            ⚙️
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-lg sm:text-xl tracking-tight text-white font-mono">
                MECH<span className="text-amber-400">CODE</span> QUEST
              </span>
              <span className="hidden lg:inline text-[10px] font-mono uppercase bg-slate-800 text-amber-300 px-2 py-0.5 rounded border border-slate-700">
                Diploma Lab
              </span>
            </div>
            <div className="text-[11px] text-amber-200/90 font-medium">
              {lang === 'kn' ? 'ಆಟವಾಡುತ್ತಾ Python ಕಲಿಯೋಣ!' : lang === 'en' ? 'Learn Programming Through Mechanical Engineering!' : 'ಆಟವಾಡುತ್ತಾ Python ಕಲಿಯೋಣ! • Learn Python'}
            </div>
          </div>
        </div>

        {/* Center / Right controls */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Language Selector */}
          <div className="flex items-center bg-slate-900 border border-slate-700/80 rounded-xl p-1">
            <Globe className="w-3.5 h-3.5 text-amber-400 ml-1.5 mr-1 hidden sm:block" />
            <button
              onClick={() => onLanguageChange('kn')}
              className={`px-2.5 py-1 text-xs font-semibold rounded-lg transition-all ${
                lang === 'kn' ? 'bg-amber-500 text-slate-950 font-bold shadow' : 'text-slate-400 hover:text-white'
              }`}
              title="ಕನ್ನಡದಲ್ಲಿ ಮಾತ್ರ"
            >
              ಕನ್ನಡ
            </button>
            <button
              onClick={() => onLanguageChange('en')}
              className={`px-2 py-1 text-xs font-semibold rounded-lg transition-all ${
                lang === 'en' ? 'bg-amber-500 text-slate-950 font-bold shadow' : 'text-slate-400 hover:text-white'
              }`}
              title="English only"
            >
              English
            </button>
            <button
              onClick={() => onLanguageChange('bilingual')}
              className={`px-2 py-1 text-xs font-semibold rounded-lg transition-all hidden md:block ${
                lang === 'bilingual' ? 'bg-amber-500 text-slate-950 font-bold shadow' : 'text-slate-400 hover:text-white'
              }`}
              title="ಕನ್ನಡ + English ಜೋಡಿ"
            >
              ಕನ್ನಡ + EN
            </button>
          </div>

          {/* Personalized Student Badge */}
          {studentName && currentMode === 'student' && (
            <button
              onClick={onSwitchStudent}
              className="flex items-center gap-1.5 bg-gradient-to-r from-amber-500/15 to-amber-600/10 hover:from-amber-500/25 border border-amber-500/30 px-3 py-1.5 rounded-xl font-mono text-xs transition-colors cursor-pointer group"
              title="ವಿದ್ಯಾರ್ಥಿ ವಿವರ / ಬದಲಿಸಿ (Click to switch)"
            >
              <div className="w-5 h-5 rounded-full bg-amber-500 text-slate-950 flex items-center justify-center font-bold text-[10px] shrink-0">
                {studentName.charAt(0).toUpperCase()}
              </div>
              <span className="font-bold text-amber-300 max-w-[100px] sm:max-w-[140px] truncate">
                {studentName}
              </span>
            </button>
          )}

          {/* XP Badge */}
          <div className="flex items-center gap-1.5 bg-slate-900 border border-amber-500/30 px-3 py-1.5 rounded-xl font-mono">
            <Sparkles className="w-4 h-4 text-amber-400 fill-amber-400" />
            <div className="text-right">
              <span className="text-[10px] text-slate-400 block leading-none">{isKn ? 'ಅಂಕಗಳು' : 'XP'}</span>
              <span className="text-xs sm:text-sm font-extrabold text-amber-400 leading-tight">{xp}</span>
            </div>
          </div>

          {/* Badges Button */}
          <button
            onClick={onOpenBadges}
            className="flex items-center gap-1.5 bg-slate-900 hover:bg-slate-800 text-slate-300 px-3 py-1.5 rounded-xl text-xs font-medium border border-slate-700 transition-colors cursor-pointer"
            title="ಸಾಧನೆಯ ಬ್ಯಾಡ್ಜ್‌ಗಳು (Badges)"
          >
            <Award className="w-4 h-4 text-sky-400" />
            <span className="hidden sm:inline">{isKn ? 'ಬ್ಯಾಡ್ಜ್‌ಗಳು' : 'Badges'}</span>
          </button>

          {/* Manual Reference Button */}
          <button
            onClick={onOpenManual}
            className="flex items-center gap-1.5 bg-slate-900 hover:bg-slate-800 text-slate-300 px-3 py-1.5 rounded-xl text-xs font-medium border border-slate-700 transition-colors cursor-pointer"
            title="ಲ್ಯಾಬ್ ಮ್ಯಾನುಯಲ್ (Lab Manual)"
          >
            <BookOpen className="w-4 h-4 text-emerald-400" />
            <span className="hidden sm:inline">{isKn ? 'ಮ್ಯಾನುಯಲ್' : 'Manual'}</span>
          </button>

          {/* Certificate Button */}
          <button
            onClick={onOpenCertificate}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              completedCount >= 13
                ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 shadow-md shadow-amber-950 animate-pulse'
                : 'bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-700'
            }`}
            title="ಪ್ರಮಾಣಪತ್ರ (Lab Record Certificate)"
          >
            <GraduationCap className="w-4 h-4 text-amber-300" />
            <span className="hidden sm:inline">{isKn ? 'ಪ್ರಮಾಣಪತ್ರ' : 'Certificate'}</span>
          </button>
        </div>
      </div>
    </header>
  );
};
