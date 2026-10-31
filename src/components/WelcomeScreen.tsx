import React, { useState } from 'react';
import { 
  Sparkles, ArrowRight, ShieldCheck, Hash, 
  KeyRound, AlertCircle, Users, CheckCircle2, User, Key 
} from 'lucide-react';
import { Language, StudentProgress } from '../types';
import { authenticateStudent, getActiveStudentSession } from '../services/supabaseService';
import { DIPLOMA_MECH_STUDENTS, COMMON_STUDENT_PASSWORD } from '../data/classRoster';

interface WelcomeScreenProps {
  lang: Language;
  onLanguageChange: (lang: Language) => void;
  onLoginSuccess: (studentProgress: StudentProgress) => void;
  onNavigateToTeacherLogin?: () => void;
}

export const WelcomeScreen: React.FC<WelcomeScreenProps> = ({
  lang,
  onLanguageChange,
  onLoginSuccess,
  onNavigateToTeacherLogin
}) => {
  const isKn = lang === 'kn' || lang === 'bilingual';
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState(COMMON_STUDENT_PASSWORD);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [showRosterHelp, setShowRosterHelp] = useState(false);

  // Check if there was an active student session previously
  const previousSession = getActiveStudentSession();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const cleanId = identifier.trim();
    if (!cleanId) {
      setErrorMsg(
        isKn 
          ? 'ದಯವಿಟ್ಟು ನಿಮ್ಮ ನೋಂದಣಿ ಸಂಖ್ಯೆ ಅಥವಾ ಹೆಸರನ್ನು ನಮೂದಿಸಿ!' 
          : 'Please enter your register number or full name!'
      );
      return;
    }
    if (!password.trim()) {
      setErrorMsg(
        isKn 
          ? `ದಯವಿಟ್ಟು ಸಾಮಾನ್ಯ ಪಾಸ್‌ವರ್ಡ್ '${COMMON_STUDENT_PASSWORD}' ನಮೂದಿಸಿ!` 
          : `Please enter the common password '${COMMON_STUDENT_PASSWORD}'!`
      );
      return;
    }

    setLoading(true);
    setErrorMsg('');

    try {
      const res = await authenticateStudent(cleanId, password.trim());
      if (res.success && res.student && res.progress) {
        // Convert to app StudentProgress
        const progressObj: StudentProgress = {
          id: res.student.id,
          studentId: res.student.id,
          name: res.student.student_name,
          usn: res.student.register_number || 'Awaiting Reg. No.',
          registerNumber: res.student.register_number,
          completedLevels: res.progress.completed_levels,
          stepProgress: {},
          modeProgress: {},
          xp: res.progress.total_xp,
          unlockedBadges: []
        };
        onLoginSuccess(progressObj);
      } else {
        setErrorMsg(isKn ? (res.isKnError || res.error || 'ದೃಢೀಕರಣ ವಿಫಲವಾಗಿದೆ.') : (res.error || 'Authentication failed.'));
      }
    } catch (err: any) {
      setErrorMsg(err.message || 'Error authenticating student.');
    } finally {
      setLoading(false);
    }
  };

  const handleQuickSelectStudent = (studentName: string, regNumber?: string) => {
    // If student has a register number, offer it, else set name
    setIdentifier(regNumber ? regNumber : studentName);
    setPassword(COMMON_STUDENT_PASSWORD);
    setErrorMsg('');
    setShowRosterHelp(false);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col justify-between font-sans selection:bg-amber-500 selection:text-slate-950 relative overflow-hidden">
      {/* Background gear & workshop ambiance */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none"></div>

      {/* Top micro bar with language toggle & institution title */}
      <header className="p-4 flex items-center justify-between max-w-5xl mx-auto w-full z-10">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-amber-500 flex items-center justify-center text-slate-950 font-black shadow-md shadow-amber-950">
            ⚙️
          </div>
          <span className="font-mono text-xs font-bold text-slate-300 hidden sm:inline">
            Adichunchanagiri Polytechnic • Dept. of Mechanical Engineering (PCME - 23ME34P)
          </span>
        </div>

        {/* Language selector */}
        <div className="flex items-center bg-slate-900 border border-slate-700/80 rounded-xl p-1 text-xs">
          <button
            onClick={() => onLanguageChange('kn')}
            className={`px-3 py-1 font-semibold rounded-lg transition-all ${
              lang === 'kn' ? 'bg-amber-500 text-slate-950 font-bold shadow' : 'text-slate-400 hover:text-white'
            }`}
          >
            ಕನ್ನಡ
          </button>
          <button
            onClick={() => onLanguageChange('en')}
            className={`px-2.5 py-1 font-semibold rounded-lg transition-all ${
              lang === 'en' ? 'bg-amber-500 text-slate-950 font-bold shadow' : 'text-slate-400 hover:text-white'
            }`}
          >
            English
          </button>
          <button
            onClick={() => onLanguageChange('bilingual')}
            className={`px-2.5 py-1 font-semibold rounded-lg transition-all hidden sm:block ${
              lang === 'bilingual' ? 'bg-amber-500 text-slate-950 font-bold shadow' : 'text-slate-400 hover:text-white'
            }`}
          >
            ಕನ್ನಡ + EN
          </button>
        </div>
      </header>

      {/* Main Container */}
      <main className="flex-1 flex items-center justify-center p-4 z-10">
        <div className="w-full max-w-lg space-y-6">
          {/* Welcome Card */}
          <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl backdrop-blur-xl relative">
            {/* Header Badge */}
            <div className="flex justify-center mb-4">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold bg-amber-500/15 text-amber-400 border border-amber-500/30">
                <Sparkles className="w-3.5 h-3.5" />
                <span>III Sem Mechanical Engineering • PCME Lab (23ME34P)</span>
              </span>
            </div>

            {/* Title & Tagline */}
            <div className="text-center space-y-2 mb-6">
              <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight font-mono">
                MECH<span className="text-amber-400">CODE</span> QUEST
              </h1>
              <p className="text-base sm:text-lg text-amber-300 font-semibold font-sans">
                "ಆಟವಾಡುತ್ತಾ Python ಕಲಿಯೋಣ!"
              </p>
              <p className="text-xs sm:text-sm text-slate-400 font-sans">
                {isKn
                  ? 'ನಿಮ್ಮ ನೋಂದಣಿ ಸಂಖ್ಯೆ ಅಥವಾ ಹೆಸರನ್ನು ನಮೂದಿಸಿ ನೇರವಾಗಿ ಲ್ಯಾಬ್ ಮಿಷನ್‌ಗಳನ್ನು ಪ್ರಾರಂಭಿಸಿ.'
                  : 'Enter your Register Number or Name to start your mechanical coding missions.'}
              </p>
            </div>

            {/* Form: Register Number OR Name + Common Password */}
            <form onSubmit={handleLogin} className="space-y-4">
              {/* Register Number OR Name Input */}
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="block text-xs font-mono text-slate-300 font-semibold">
                    {isKn ? 'ನೋಂದಣಿ ಸಂಖ್ಯೆ ಅಥವಾ ಹೆಸರು (Reg. No. or Name):' : 'Register Number (USN) or Name:'}
                  </label>
                  <button
                    type="button"
                    onClick={() => setShowRosterHelp(true)}
                    className="text-[11px] text-amber-400 hover:text-amber-300 font-sans flex items-center gap-1 cursor-pointer"
                  >
                    <Users className="w-3.5 h-3.5" />
                    <span>{isKn ? 'ತರಗತಿಯ 28 ವಿದ್ಯಾರ್ಥಿಗಳ ಪಟ್ಟಿ' : 'Select From Class List'}</span>
                  </button>
                </div>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
                    <User className="w-4 h-4 text-amber-400" />
                  </div>
                  <input
                    type="text"
                    value={identifier}
                    onChange={(e) => {
                      setIdentifier(e.target.value);
                      if (errorMsg) setErrorMsg('');
                    }}
                    placeholder={isKn ? 'ಉದಾ: 440ME25002 ಅಥವಾ ANOOP CA, VISHNU...' : 'e.g. 440ME25002 or ANOOP CA, VISHNU...'}
                    autoFocus
                    className="w-full bg-slate-950 border border-slate-700/80 rounded-2xl pl-10 pr-4 py-3 text-sm sm:text-base font-bold text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 transition-all font-mono tracking-wide"
                  />
                </div>
                <p className="text-[11px] text-slate-500 mt-1 font-sans">
                  {isKn
                    ? '💡 ನೋಂದಣಿ ಸಂಖ್ಯೆ ಇಲ್ಲದ ವಿದ್ಯಾರ್ಥಿಗಳು ತಮ್ಮ ಹೆಸರನ್ನು ನೇರವಾಗಿ ನಮೂದಿಸಬಹುದು.'
                    : '💡 Students without a register number can directly type their name.'}
                </p>
              </div>

              {/* Common Password Input */}
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="block text-xs font-mono text-slate-300 font-semibold">
                    {isKn ? 'ಪಾಸ್‌ವರ್ಡ್ (Common Password):' : 'Common Class Password:'}
                  </label>
                  <span className="text-[11px] font-mono font-bold text-emerald-400 bg-emerald-950/60 border border-emerald-800/80 px-2 py-0.5 rounded">
                    {COMMON_STUDENT_PASSWORD}
                  </span>
                </div>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
                    <Key className="w-4 h-4 text-amber-400" />
                  </div>
                  <input
                    type="text"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                      if (errorMsg) setErrorMsg('');
                    }}
                    placeholder={COMMON_STUDENT_PASSWORD}
                    className="w-full bg-slate-950 border border-slate-700/80 rounded-2xl pl-10 pr-4 py-3 text-sm font-bold text-amber-300 placeholder-slate-500 focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 transition-all font-mono"
                  />
                </div>
                <p className="text-[10px] text-slate-400 mt-1 font-mono">
                  {isKn
                    ? `ಎಲ್ಲಾ ವಿದ್ಯಾರ್ಥಿಗಳಿಗೂ ಸಾಮಾನ್ಯ ಪಾಸ್‌ವರ್ಡ್: '${COMMON_STUDENT_PASSWORD}' ಅಥವಾ '1234'`
                    : `Common password for all students: '${COMMON_STUDENT_PASSWORD}' or '1234'`}
                </p>
              </div>

              {errorMsg && (
                <div className="p-3 bg-rose-950/60 border border-rose-800 rounded-xl text-xs text-rose-300 flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                  <span>{errorMsg}</span>
                </div>
              )}

              {/* Privacy & Zero Email Promise */}
              <div className="p-3 bg-slate-950/60 border border-slate-800/80 rounded-xl text-xs text-slate-400 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>
                  {isKn
                    ? 'ಯಾವುದೇ ಇಮೇಲ್ ಅಥವಾ ಫೋನ್ ನಂಬರ್ ಅಗತ್ಯವಿಲ್ಲ. ನಿಮ್ಮ ಪ್ರಗತಿಯು ಸ್ವಯಂಚಾಲಿತವಾಗಿ ಉಳಿಯುತ್ತದೆ.'
                    : 'No email or phone number needed. Your lab progress is permanently saved.'}
                </span>
              </div>

              {/* Action Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-black text-sm sm:text-base rounded-2xl transition-all shadow-xl shadow-amber-950/50 hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                {loading ? (
                  <span>{isKn ? 'ದೃಢೀಕರಿಸಲಾಗುತ್ತಿದೆ...' : 'Verifying...'}</span>
                ) : (
                  <>
                    <span>{isKn ? 'ನನ್ನ ಪ್ರಯಾಣ ಪ್ರಾರಂಭಿಸಿ (Start My Journey)' : 'Start My Journey'}</span>
                    <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </button>
            </form>

            {/* Quick Resume on this browser */}
            {previousSession && (
              <div className="mt-5 pt-4 border-t border-slate-800/80 text-center">
                <button
                  type="button"
                  onClick={() => handleQuickSelectStudent(previousSession.student.student_name, previousSession.student.register_number)}
                  className="text-xs text-amber-400 hover:underline font-mono inline-flex items-center gap-1.5 cursor-pointer"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>
                    {isKn
                      ? `ಹಿಂದಿನ ವಿದ್ಯಾರ್ಥಿ: ${previousSession.student.student_name}`
                      : `Resume as ${previousSession.student.student_name}`}
                  </span>
                </button>
              </div>
            )}
          </div>

          {/* Quick Roster Modal / Drawer */}
          {showRosterHelp && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
              <div className="bg-slate-900 border border-slate-700 w-full max-w-2xl rounded-2xl p-5 space-y-4 shadow-2xl max-h-[85vh] flex flex-col">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <div>
                    <h3 className="text-sm font-bold text-white font-mono flex items-center gap-2">
                      <Users className="w-4 h-4 text-amber-400" />
                      <span>{isKn ? 'III ಸೆಮಿಸ್ಟರ್ ಮೆಕ್ಯಾನಿಕಲ್ ವಿದ್ಯಾರ್ಥಿಗಳ ಪಟ್ಟಿ (28 ವಿದ್ಯಾರ್ಥಿಗಳು)' : 'Official Class Roster – III Sem Mech (28 Students)'}</span>
                    </h3>
                    <p className="text-[11px] text-slate-400">
                      {isKn 
                        ? 'ನಿಮ್ಮ ಹೆಸರಿನ ಮೇಲೆ ಕ್ಲಿಕ್ ಮಾಡಿ ತಕ್ಷಣ ಲಾಗಿನ್ ವಿವರಗಳನ್ನು ಭರ್ತಿ ಮಾಡಿ' 
                        : 'Click your name to auto-fill your login credentials with common password'}
                    </p>
                  </div>
                  <button
                    onClick={() => setShowRosterHelp(false)}
                    className="text-slate-400 hover:text-white p-1 text-sm font-mono cursor-pointer"
                  >
                    ✕
                  </button>
                </div>

                <div className="flex-1 overflow-y-auto space-y-1.5 pr-1 font-mono text-xs">
                  {DIPLOMA_MECH_STUDENTS.map((item) => (
                    <div
                      key={item.id}
                      onClick={() => handleQuickSelectStudent(item.name, item.registerNumber)}
                      className="p-2.5 bg-slate-950 hover:bg-slate-800 border border-slate-800/80 hover:border-amber-500/60 rounded-xl flex items-center justify-between cursor-pointer transition-colors"
                    >
                      <div className="flex items-center gap-2.5">
                        <span className="w-6 text-[10px] text-slate-500 font-bold">
                          {item.slNo < 10 ? `0${item.slNo}` : item.slNo}
                        </span>
                        <div>
                          <strong className="text-white block font-sans text-xs">{item.name}</strong>
                          {item.registerNumber ? (
                            <span className="text-[11px] text-amber-400 font-mono font-bold">{item.registerNumber}</span>
                          ) : (
                            <span className="text-[10px] text-emerald-400 font-sans italic">ಹೆಸರಿನ ಮೂಲಕ ಲಾಗಿನ್ (Login by Name)</span>
                          )}
                        </div>
                      </div>
                      <span className="text-[11px] text-amber-300/90 bg-slate-900 px-2 py-1 rounded border border-slate-800">
                        {COMMON_STUDENT_PASSWORD}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="pt-2 border-t border-slate-800 flex items-center justify-between">
                  <span className="text-[11px] text-slate-400 font-mono">
                    Common Password: <strong className="text-emerald-400">{COMMON_STUDENT_PASSWORD}</strong>
                  </span>
                  <button
                    onClick={() => setShowRosterHelp(false)}
                    className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold rounded-xl cursor-pointer"
                  >
                    {isKn ? 'ಮುಚ್ಚಿ (Close)' : 'Close'}
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      {/* Footer with Discreet Faculty Link */}
      <footer className="p-4 flex flex-col sm:flex-row items-center justify-between max-w-5xl mx-auto w-full text-xs text-slate-500 font-mono z-10 gap-2">
        <span>Adichunchanagiri Polytechnic, Chikkamagaluru • Dept. of Mechanical Engineering</span>
        {onNavigateToTeacherLogin && (
          <button
            onClick={onNavigateToTeacherLogin}
            className="text-slate-600 hover:text-amber-400/80 transition-colors cursor-pointer text-[11px]"
          >
            {isKn ? 'ಬೋಧಕರ ಪ್ರವೇಶ (Faculty Portal)' : 'Faculty Login'}
          </button>
        )}
      </footer>
    </div>
  );
};
