import React, { useState } from 'react';
import { 
  ShieldCheck, Lock, Mail, ArrowRight, ArrowLeft, 
  KeyRound, AlertCircle, Info, Sparkles 
} from 'lucide-react';
import { Language } from '../types';
import { authenticateTeacher } from '../services/supabaseService';
import { isSupabaseConfigured, getSupabaseConfig } from '../lib/supabaseClient';

interface TeacherLoginProps {
  lang: Language;
  onLanguageChange: (lang: Language) => void;
  onSuccess: () => void;
  onBackToStudent: () => void;
}

export const TeacherLogin: React.FC<TeacherLoginProps> = ({
  lang,
  onLanguageChange,
  onSuccess,
  onBackToStudent
}) => {
  const isKn = lang === 'kn' || lang === 'bilingual';
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [showForgotNotice, setShowForgotNotice] = useState(false);

  const supabaseInfo = getSupabaseConfig();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !password.trim()) {
      setErrorMsg(
        isKn ? 'ದಯವಿಟ್ಟು ಇಮೇಲ್ ಮತ್ತು ಪಾಸ್‌ವರ್ಡ್ ನಮೂದಿಸಿ.' : 'Please enter your email and password.'
      );
      return;
    }

    setLoading(true);
    setErrorMsg('');

    try {
      const res = await authenticateTeacher(email, password);
      if (res.success) {
        onSuccess();
      } else {
        setErrorMsg(
          res.error || (isKn ? 'ದೃಢೀಕರಣ ವಿಫಲವಾಗಿದೆ.' : 'Authentication failed. Please check credentials.')
        );
      }
    } catch (err: any) {
      setErrorMsg(err.message || 'An error occurred during authentication.');
    } finally {
      setLoading(false);
    }
  };

  const handleFillDemoCredentials = () => {
    setEmail('teacher.mech@adichunchanagiri.edu.in');
    setPassword('mech@2026');
    setErrorMsg('');
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col justify-between font-sans selection:bg-amber-500 selection:text-slate-950 relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none"></div>

      {/* Top Header */}
      <header className="p-4 flex items-center justify-between max-w-5xl mx-auto w-full z-10">
        <button
          onClick={onBackToStudent}
          className="flex items-center gap-2 px-3 py-1.5 bg-slate-900 hover:bg-slate-800 text-slate-300 rounded-xl text-xs font-mono transition-colors cursor-pointer border border-slate-800"
        >
          <ArrowLeft className="w-4 h-4 text-amber-400" />
          <span>{isKn ? 'ವಿದ್ಯಾರ್ಥಿ ಪೋರ್ಟಲ್' : 'Student Portal'}</span>
        </button>

        {/* Language selector */}
        <div className="flex items-center bg-slate-900 border border-slate-800 rounded-xl p-1 text-xs">
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
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center p-4 z-10">
        <div className="w-full max-w-md space-y-5">
          {/* Faculty Card */}
          <div className="bg-slate-900/95 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl backdrop-blur-xl relative">
            {/* Security Shield Icon */}
            <div className="flex justify-center mb-4">
              <div className="w-14 h-14 rounded-2xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400 shadow-inner">
                <ShieldCheck className="w-7 h-7" />
              </div>
            </div>

            {/* Title & Subtitle */}
            <div className="text-center space-y-1 mb-6">
              <span className="text-[11px] font-mono uppercase tracking-widest text-amber-400/90 font-bold block">
                Adichunchanagiri Polytechnic
              </span>
              <h1 className="text-xl sm:text-2xl font-black text-white font-mono">
                {isKn ? 'ಖಾಸಗಿ ಶಿಕ್ಷಕರ ಲಾಗಿನ್' : 'Faculty Access Portal'}
              </h1>
              <p className="text-xs text-slate-400 font-sans">
                {isKn
                  ? 'ಮೆಕ್ಯಾನಿಕಲ್ ಇಂಜಿನಿಯರಿಂಗ್ ವಿಭಾಗ • III ಸೆಮಿಸ್ಟರ್ ಲ್ಯಾಬ್ ನಿರ್ವಹಣೆ'
                  : 'Dept. of Mechanical Engineering • Authorized Instructors Only'}
              </p>
            </div>

            {/* Login Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-mono text-slate-300 font-semibold mb-1.5">
                  {isKn ? 'ಶಿಕ್ಷಕರ ಅಧಿಕೃತ ಇಮೇಲ್ (Faculty Email):' : 'Official Faculty Email:'}
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
                    <Mail className="w-4 h-4 text-amber-400" />
                  </div>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (errorMsg) setErrorMsg('');
                    }}
                    placeholder="teacher.mech@adichunchanagiri.edu.in"
                    autoFocus
                    required
                    className="w-full bg-slate-950 border border-slate-700/80 rounded-xl pl-10 pr-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 font-mono"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="block text-xs font-mono text-slate-300 font-semibold">
                    {isKn ? 'ಪಾಸ್‌ವರ್ಡ್ (Password):' : 'Password:'}
                  </label>
                  <button
                    type="button"
                    onClick={() => setShowForgotNotice(true)}
                    className="text-[11px] text-amber-400/80 hover:text-amber-300 underline font-sans cursor-pointer"
                  >
                    {isKn ? 'ಪಾಸ್‌ವರ್ಡ್ ಮರೆತಿರಾ?' : 'Reset Password?'}
                  </button>
                </div>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
                    <Lock className="w-4 h-4 text-amber-400" />
                  </div>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                      if (errorMsg) setErrorMsg('');
                    }}
                    placeholder="••••••••••••"
                    required
                    className="w-full bg-slate-950 border border-slate-700/80 rounded-xl pl-10 pr-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 font-mono"
                  />
                </div>
              </div>

              {errorMsg && (
                <div className="p-3 bg-rose-950/60 border border-rose-800 rounded-xl text-xs text-rose-300 flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                  <span>{errorMsg}</span>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-black text-sm rounded-xl transition-all shadow-lg shadow-amber-950 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                {loading ? (
                  <span>{isKn ? 'ದೃಢೀಕರಿಸಲಾಗುತ್ತಿದೆ...' : 'Verifying Credentials...'}</span>
                ) : (
                  <>
                    <span>{isKn ? 'ಡ್ಯಾಶ್‌ಬೋರ್ಡ್ ಪ್ರವೇಶಿಸಿ' : 'Enter Teacher Dashboard'}</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>

            {/* Quick Demo Fill Helper */}
            <div className="mt-5 pt-4 border-t border-slate-800 text-center">
              <button
                type="button"
                onClick={handleFillDemoCredentials}
                className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-amber-400 font-mono transition-colors cursor-pointer"
              >
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>{isKn ? 'ಪೂರ್ವನಿಯೋಜಿತ ರುಜುವಾತುಗಳನ್ನು ಭರ್ತಿ ಮಾಡಿ (Demo)' : 'Auto-fill Demo Credentials'}</span>
              </button>
            </div>
          </div>

          {/* Database & Security Notice */}
          <div className="p-4 bg-slate-900/60 border border-slate-800 rounded-2xl text-xs text-slate-400 space-y-1 font-sans">
            <div className="flex items-center justify-between text-[11px] font-mono text-slate-300">
              <span className="flex items-center gap-1">
                <span className={`w-2 h-2 rounded-full ${supabaseInfo.isConfigured ? 'bg-emerald-400' : 'bg-amber-400'}`}></span>
                <span>Database: {supabaseInfo.isConfigured ? 'Supabase Live' : 'Local Fallback'}</span>
              </span>
              <span className="text-slate-500">RLS Enforced</span>
            </div>
            <p className="text-[11px] text-slate-500 mt-1">
              {isKn
                ? 'ಸಾರ್ವಜನಿಕ ವಿದ್ಯಾರ್ಥಿ ನೋಂದಣಿಯನ್ನು ನಿಷೇಧಿಸಲಾಗಿದೆ. ಈ ಪೋರ್ಟಲ್ ಕೇವಲ ಇಲಾಖೆಯ ಬೋಧಕರಿಗೆ ಮಾತ್ರ.'
                : 'Public instructor registration is prohibited. Only pre-provisioned faculty accounts can access this panel.'}
            </p>
          </div>
        </div>
      </main>

      {/* Forgot Password Notice Modal */}
      {showForgotNotice && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-slate-900 border border-slate-700 w-full max-w-md rounded-2xl p-6 space-y-4 shadow-2xl">
            <div className="flex items-center gap-2 text-amber-400 font-bold font-mono text-sm">
              <KeyRound className="w-5 h-5" />
              <span>{isKn ? 'ಶಿಕ್ಷಕರ ಪಾಸ್‌ವರ್ಡ್ ಮರುಹೊಂದಿಕೆ' : 'Faculty Password Reset'}</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed font-sans">
              {isKn
                ? 'ಭದ್ರತೆಯ ದೃಷ್ಟಿಯಿಂದ, ಶಿಕ್ಷಕರ ಖಾತೆಯ ಪಾಸ್‌ವರ್ಡ್ ಅನ್ನು Supabase ಡ್ಯಾಶ್‌ಬೋರ್ಡ್‌ನಲ್ಲಿ ನೇರವಾಗಿ ಪ್ರಾಜೆಕ್ಟ್ ಮಾಲೀಕರು ಅಥವಾ HOD ಅವರ ಮೂಲಕ ಮರುಹೊಂದಿಸಬೇಕು.'
                : 'For institutional security, faculty passwords can only be reset through the Supabase Authentication Dashboard or by your department Head of Department.'}
            </p>
            <div className="p-3 bg-slate-950 border border-slate-800 rounded-xl text-[11px] font-mono text-slate-400">
              {isKn ? 'ಡೀಫಾಲ್ಟ್ ಡೆಮೊ ಪಾಸ್‌ವರ್ಡ್:' : 'Demo Test Password:'} <strong className="text-amber-400">mech@2026</strong>
            </div>
            <div className="flex justify-end pt-2">
              <button
                onClick={() => setShowForgotNotice(false)}
                className="px-4 py-2 bg-amber-500 text-slate-950 font-bold text-xs rounded-xl hover:bg-amber-400 cursor-pointer"
              >
                {isKn ? 'ಅರ್ಥವಾಯಿತು (Close)' : 'Close'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="p-4 text-center text-xs text-slate-500 font-mono z-10">
        Adichunchanagiri Polytechnic, Chikkamagaluru • Department of Mechanical Engineering
      </footer>
    </div>
  );
};
