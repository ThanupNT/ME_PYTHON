import React from 'react';
import { 
  Play, CheckCircle2, Lock, Sparkles, Award, ArrowRight, 
  FileSpreadsheet, Car, GitBranch, Landmark, Cpu, Factory, 
  Bot, LineChart, Calculator, Activity, GitPullRequest, Zap, Trophy, 
  GraduationCap, ChevronRight 
} from 'lucide-react';
import { LEVELS_DATA, BADGES_LIST } from '../data/levelsData';
import { Language, LevelData, StudentProgress } from '../types';

interface StudentDashboardProps {
  progress: StudentProgress;
  lang: Language;
  onSelectLevel: (levelId: number) => void;
  onOpenBadges: () => void;
  onOpenCertificate: () => void;
}

export const StudentDashboard: React.FC<StudentDashboardProps> = ({
  progress,
  lang,
  onSelectLevel,
  onOpenBadges,
  onOpenCertificate
}) => {
  const isKn = lang === 'kn' || lang === 'bilingual';

  const iconMap: { [key: string]: React.ReactNode } = {
    FileSpreadsheet: <FileSpreadsheet className="w-5 h-5 text-amber-400" />,
    Car: <Car className="w-5 h-5 text-sky-400" />,
    GitBranch: <GitBranch className="w-5 h-5 text-purple-400" />,
    Landmark: <Landmark className="w-5 h-5 text-emerald-400" />,
    Cpu: <Cpu className="w-5 h-5 text-rose-400" />,
    Factory: <Factory className="w-5 h-5 text-amber-500" />,
    Bot: <Bot className="w-5 h-5 text-teal-400" />,
    LineChart: <LineChart className="w-5 h-5 text-blue-400" />,
    Calculator: <Calculator className="w-5 h-5 text-indigo-400" />,
    Activity: <Activity className="w-5 h-5 text-pink-400" />,
    GitPullRequest: <GitPullRequest className="w-5 h-5 text-orange-400" />,
    Zap: <Zap className="w-5 h-5 text-yellow-400" />,
    Trophy: <Trophy className="w-5 h-5 text-amber-300" />
  };

  const completedCount = progress.completedLevels.length;
  const remainingCount = 13 - completedCount;
  const currentLevelId = Math.min(
    Math.max(...progress.completedLevels, 0) + 1,
    13
  );
  const currentLevel = LEVELS_DATA.find((l) => l.id === currentLevelId) || LEVELS_DATA[0];

  return (
    <div className="max-w-7xl mx-auto px-4 py-6 space-y-8 animate-fadeIn font-sans">
      {/* Hero Workshop Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-slate-900 via-slate-900/95 to-amber-950/40 border border-slate-800 p-6 sm:p-8 shadow-2xl">
        {/* Subtle gear ambient backdrop */}
        <div className="absolute right-[-20px] top-[-20px] text-slate-800/20 text-9xl font-black select-none pointer-events-none">
          ⚙️
        </div>

        <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-bold bg-amber-500/20 text-amber-400 border border-amber-500/30">
                {isKn ? 'III ಸೆಮಿಸ್ಟರ್ ಮೆಕ್ಯಾನಿಕಲ್ ಡಿಪ್ಲೋಮಾ' : 'III Sem Diploma in Mechanical Engg'}
              </span>
              <span className="text-xs text-slate-400 font-mono">USN: {progress.usn}</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
              {isKn 
                ? `ನಮಸ್ಕಾರ, ${progress.name}! MECHCODE QUEST ಗೆ ಸ್ವಾಗತ!` 
                : `Welcome, ${progress.name}! Your mechanical coding adventure starts here!`}
            </h1>
            <p className="text-sm text-slate-300 leading-relaxed font-sans">
              {isKn
                ? 'ಆದಿಚುಂಚನಗಿರಿ ಪಾಲಿಟೆಕ್ನಿಕ್‌ನ ಮೆಕ್ಯಾನಿಕಲ್ ಲ್ಯಾಬ್ ಮ್ಯಾನುಯಲ್‌ನ 13 ಪ್ರೋಗ್ರಾಂಗಳನ್ನು ಗೇಮ್ ಆಡುತ್ತಾ ಸುಲಭವಾಗಿ ಕಲಿಯಿರಿ.'
                : 'Master all 13 official laboratory record Python programs from Adichunchanagiri Polytechnic through interactive game missions.'}
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={() => onSelectLevel(currentLevelId)}
                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-extrabold text-sm rounded-xl transition-all shadow-lg shadow-amber-950/50 hover:scale-[1.02] cursor-pointer"
              >
                <Play className="w-4 h-4 fill-current" />
                <span>
                  {isKn ? 'ಕಲಿಕೆ ಮುಂದುವರಿಸಿ (Continue Mission)' : 'Continue Mission'}
                </span>
                <span className="text-xs bg-slate-950/20 px-2 py-0.5 rounded font-mono">
                  Level {currentLevelId < 10 ? `0${currentLevelId}` : currentLevelId}
                </span>
              </button>

              {completedCount >= 13 && (
                <button
                  onClick={onOpenCertificate}
                  className="flex items-center gap-2 px-4 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded-xl transition-all cursor-pointer shadow-lg shadow-emerald-950"
                >
                  <GraduationCap className="w-4 h-4" />
                  <span>{isKn ? 'ಪ್ರಮಾಣಪತ್ರ ಪಡೆಯಿರಿ' : 'View Certificate'}</span>
                </button>
              )}
            </div>
          </div>

          {/* Quick Stats Pillar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-2 gap-3 w-full md:w-auto shrink-0 font-mono">
            <div className="bg-slate-950/80 border border-slate-800 p-3.5 rounded-2xl text-center">
              <span className="text-[10px] text-slate-400 block uppercase tracking-wider">
                {isKn ? 'ಪ್ರಸ್ತುತ ಹಂತ' : 'Current Level'}
              </span>
              <span className="text-2xl font-black text-amber-400 mt-1 block">
                {currentLevelId < 10 ? `0${currentLevelId}` : currentLevelId}
              </span>
            </div>

            <div className="bg-slate-950/80 border border-slate-800 p-3.5 rounded-2xl text-center">
              <span className="text-[10px] text-slate-400 block uppercase tracking-wider">
                {isKn ? 'ಗಳಿಸಿದ ಅಂಕಗಳು' : 'Total XP'}
              </span>
              <span className="text-2xl font-black text-emerald-400 mt-1 block">
                {progress.xp}
              </span>
            </div>

            <div className="bg-slate-950/80 border border-slate-800 p-3.5 rounded-2xl text-center">
              <span className="text-[10px] text-slate-400 block uppercase tracking-wider">
                {isKn ? 'ಪೂರ್ಣಗೊಂಡಿದೆ' : 'Completed'}
              </span>
              <span className="text-2xl font-black text-sky-400 mt-1 block">
                {completedCount}
              </span>
            </div>

            <div className="bg-slate-950/80 border border-slate-800 p-3.5 rounded-2xl text-center">
              <span className="text-[10px] text-slate-400 block uppercase tracking-wider">
                {isKn ? 'ಬಾಕಿ ಉಳಿದಿದೆ' : 'Remaining'}
              </span>
              <span className="text-2xl font-black text-rose-400 mt-1 block">
                {remainingCount}
              </span>
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mt-6 pt-5 border-t border-slate-800/80">
          <div className="flex justify-between items-center text-xs font-mono mb-2">
            <span className="text-slate-400">
              {isKn ? 'ಪ್ರೋಗ್ರಾಮಿಂಗ್ ಪ್ರಯೋಗಾಲಯ ಪ್ರಗತಿ' : 'Laboratory Curriculum Progress'}
            </span>
            <span className="text-amber-400 font-bold">
              {Math.round((completedCount / 13) * 100)}% ({completedCount}/13 Missions)
            </span>
          </div>
          <div className="w-full h-3 bg-slate-950 rounded-full overflow-hidden border border-slate-800 p-0.5">
            <div
              className="h-full bg-gradient-to-r from-amber-500 via-amber-400 to-emerald-400 rounded-full transition-all duration-500"
              style={{ width: `${(completedCount / 13) * 100}%` }}
            ></div>
          </div>
        </div>
      </div>

      {/* 13-Level Mission Map */}
      <div className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <h2 className="text-xl font-bold text-white font-mono flex items-center gap-2">
              <span>🗺️</span>
              <span>{isKn ? '13 ಹಂತಗಳ ಮಿಷನ್ ನಕ್ಷೆ (13-Level Mission Map)' : '13-Level Mission Map'}</span>
            </h2>
            <p className="text-xs text-slate-400 mt-0.5">
              {isKn
                ? 'ಲ್ಯಾಬ್ ಮ್ಯಾನುಯಲ್‌ನ ಕ್ರಮಬದ್ಧ ಪ್ರಾಯೋಗಿಕ ವ್ಯಾಯಾಮಗಳು (ವಾರ್ಷಿಕ ಪರೀಕ್ಷೆಗೆ ನೇರ ಉಪಯುಕ್ತ)'
                : 'Directly aligned with Karnataka BTE Mechanical Engineering Practical Record.'}
            </p>
          </div>

          <div className="flex items-center gap-4 text-xs font-mono">
            <div className="flex items-center gap-1.5 text-emerald-400">
              <CheckCircle2 className="w-4 h-4" />
              <span>{isKn ? 'ಮುಗಿದಿದೆ' : 'Completed'}</span>
            </div>
            <div className="flex items-center gap-1.5 text-amber-400">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse"></span>
              <span>{isKn ? 'ಪ್ರಸ್ತುತ' : 'Current'}</span>
            </div>
            <div className="flex items-center gap-1.5 text-slate-500">
              <Lock className="w-3.5 h-3.5" />
              <span>{isKn ? 'ಲಾಕ್ ಆಗಿದೆ' : 'Locked'}</span>
            </div>
          </div>
        </div>

        {/* Level Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {LEVELS_DATA.map((lvl) => {
            const isCompleted = progress.completedLevels.includes(lvl.id);
            const isCurrent = lvl.id === currentLevelId;
            const isUnlocked = isCompleted || isCurrent || lvl.id <= (Math.max(...progress.completedLevels, 0) + 1);
            const lvlProgress = progress.modeProgress[lvl.id];
            const earnedXp = (lvlProgress?.learnCompleted ? 50 : 0) +
              (lvlProgress?.practiceCompleted ? 25 : 0) +
              (lvlProgress?.testCompleted ? 25 : 0);

            return (
              <div
                key={lvl.id}
                onClick={() => isUnlocked && onSelectLevel(lvl.id)}
                className={`relative rounded-2xl border p-5 transition-all flex flex-col justify-between ${
                  isCurrent
                    ? 'bg-gradient-to-b from-slate-900 via-slate-900 to-amber-950/30 border-amber-500/80 shadow-xl shadow-amber-950/40 ring-1 ring-amber-500/50 cursor-pointer scale-[1.01]'
                    : isCompleted
                    ? 'bg-slate-900/90 border-slate-700/80 hover:border-emerald-500/60 cursor-pointer hover:bg-slate-900'
                    : isUnlocked
                    ? 'bg-slate-900/60 border-slate-800 hover:border-slate-700 cursor-pointer'
                    : 'bg-slate-950/40 border-slate-800/60 opacity-60 cursor-not-allowed'
                }`}
              >
                <div>
                  {/* Card Header */}
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <div
                        className={`w-9 h-9 rounded-xl border flex items-center justify-center ${
                          isCompleted
                            ? 'bg-emerald-950/60 border-emerald-500/50'
                            : isCurrent
                            ? 'bg-amber-950/60 border-amber-500/50 text-amber-400'
                            : 'bg-slate-950 border-slate-800 text-slate-500'
                        }`}
                      >
                        {iconMap[lvl.badgeIcon] || <Cpu className="w-5 h-5 text-amber-400" />}
                      </div>
                      <div>
                        <span className="font-mono text-xs font-bold text-amber-400 block">
                          Level {lvl.id < 10 ? `0${lvl.id}` : lvl.id}
                        </span>
                        <span className="text-[10px] text-slate-500 font-mono block">
                          Ex. No: {lvl.exerciseNumber}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5">
                      {isCompleted ? (
                        <span className="flex items-center gap-1 bg-emerald-950/80 text-emerald-400 border border-emerald-800/80 text-[10px] font-mono px-2 py-0.5 rounded-md font-bold">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          Done
                        </span>
                      ) : isCurrent ? (
                        <span className="bg-amber-950/80 text-amber-400 border border-amber-800 text-[10px] font-mono px-2 py-0.5 rounded-md font-bold animate-pulse">
                          Active
                        </span>
                      ) : isUnlocked ? (
                        <span className="bg-slate-800 text-slate-400 text-[10px] font-mono px-2 py-0.5 rounded-md">
                          Unlocked
                        </span>
                      ) : (
                        <span className="flex items-center gap-1 bg-slate-950 text-slate-600 text-[10px] font-mono px-2 py-0.5 rounded-md border border-slate-800">
                          <Lock className="w-3 h-3" />
                          Locked
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="font-bold text-sm text-white font-sans leading-snug line-clamp-1">
                    {isKn ? lvl.title.kn : lvl.title.en}
                  </h3>
                  <p className="text-xs text-slate-400 mt-1 line-clamp-2 leading-relaxed">
                    {isKn ? lvl.subtitle.kn : lvl.subtitle.en}
                  </p>
                </div>

                {/* Footer of Card */}
                <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-1 font-mono text-[11px]">
                    <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                    <span className="text-slate-300 font-semibold">{earnedXp}</span>
                    <span className="text-slate-500">/ 100 XP</span>
                  </div>

                  {isUnlocked && (
                    <span className="text-amber-400 font-semibold flex items-center gap-1 text-[11px] group-hover:translate-x-1 transition-transform">
                      {isKn ? 'ಪ್ರವೇಶಿಸಿ' : 'Enter'}
                      <ChevronRight className="w-3.5 h-3.5" />
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
