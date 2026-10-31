import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { WelcomeScreen } from './components/WelcomeScreen';
import { StudentDashboard } from './components/StudentDashboard';
import { LevelView } from './components/LevelView';
import { TeacherDashboard } from './components/TeacherDashboard';
import { TeacherLogin } from './components/TeacherLogin';
import { BadgesModal } from './components/BadgesModal';
import { ManualModal } from './components/ManualModal';
import { LabCertificate } from './components/LabCertificate';
import { CelebrationModal } from './components/CelebrationModal';
import { LEVELS_DATA, BADGES_LIST } from './data/levelsData';
import { Language, LevelData, StudentProgress } from './types';
import { 
  getActiveStudentSession, saveLocalStudentSession, 
  clearStudentSession, updateStudentModeProgress, 
  recordStudentLevelStart, getActiveTeacherSession, 
  clearTeacherSession, convertDbProgressToLocal
} from './services/supabaseService';

export default function App() {
  // 1. Language state (Kannada is default)
  const [lang, setLang] = useState<Language>(() => {
    const saved = localStorage.getItem('mechcode_lang');
    return (saved as Language) || 'kn';
  });

  // 2. Active Student Session & Progress
  const [progress, setProgress] = useState<StudentProgress | null>(() => {
    const sess = getActiveStudentSession();
    if (sess) {
      return convertDbProgressToLocal(sess.student, sess.progress);
    }
    return null;
  });

  // 3. Current Route: 'student' | 'teacher-login' | 'teacher-dashboard'
  const [currentRoute, setCurrentRoute] = useState<'student' | 'teacher-login' | 'teacher-dashboard'>(() => {
    if (typeof window !== 'undefined') {
      const path = window.location.pathname;
      const hash = window.location.hash;
      if (path === '/teacher-login' || hash === '#/teacher-login') return 'teacher-login';
      if (path === '/teacher-dashboard' || hash === '#/teacher-dashboard') {
        const teacher = getActiveTeacherSession();
        return teacher ? 'teacher-dashboard' : 'teacher-login';
      }
    }
    return 'student';
  });

  const [activeLevelId, setActiveLevelId] = useState<number | null>(null);

  // 4. Modals
  const [isBadgesOpen, setIsBadgesOpen] = useState(false);
  const [isManualOpen, setIsManualOpen] = useState(false);
  const [isCertificateOpen, setIsCertificateOpen] = useState(false);

  // 5. Celebration Modal
  const [celebrationData, setCelebrationData] = useState<{
    isOpen: boolean;
    level: LevelData | null;
    xpEarned: number;
    unlockedBadgeName?: string;
  }>({
    isOpen: false,
    level: null,
    xpEarned: 0
  });

  useEffect(() => {
    localStorage.setItem('mechcode_lang', lang);
  }, [lang]);

  // Sync route with URL history
  const navigateTo = (route: 'student' | 'teacher-login' | 'teacher-dashboard') => {
    setCurrentRoute(route);
    if (typeof window !== 'undefined') {
      if (route === 'teacher-login') window.history.pushState({}, '', '/teacher-login');
      else if (route === 'teacher-dashboard') window.history.pushState({}, '', '/teacher-dashboard');
      else window.history.pushState({}, '', '/');
    }
  };

  // Listen to browser back/forward buttons
  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname;
      const hash = window.location.hash;
      if (path === '/teacher-login' || hash === '#/teacher-login') {
        setCurrentRoute('teacher-login');
      } else if (path === '/teacher-dashboard' || hash === '#/teacher-dashboard') {
        const teacher = getActiveTeacherSession();
        setCurrentRoute(teacher ? 'teacher-dashboard' : 'teacher-login');
      } else {
        setCurrentRoute('student');
      }
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Handle successful student login from WelcomeScreen
  const handleStudentLoginSuccess = (studentProgress: StudentProgress) => {
    setProgress(studentProgress);
    setActiveLevelId(null);
    navigateTo('student');
  };

  // Switch student profile / Logout
  const handleStudentLogout = () => {
    clearStudentSession();
    setProgress(null);
    setActiveLevelId(null);
    navigateTo('student');
  };

  // Progress updater saving to Supabase / persistent database
  const handleUpdateProgress = async (levelId: number, mode: 'learn' | 'practice' | 'test', xpGained: number) => {
    if (!progress) return;
    const studentId = progress.id || progress.studentId || 'std-01';

    try {
      const { updatedProgress: dbProg, isFirstCompletion } = await updateStudentModeProgress(
        studentId,
        levelId,
        mode,
        xpGained
      );

      // Check for badge unlocks
      const newCompletedLevels = dbProg.completed_levels;
      let newBadges = [...progress.unlockedBadges];
      let justUnlockedBadgeName: string | undefined = undefined;

      const checkAndAwardBadge = (badgeId: string) => {
        if (!newBadges.includes(badgeId)) {
          newBadges.push(badgeId);
          const bObj = BADGES_LIST.find((b) => b.id === badgeId);
          if (bObj) {
            justUnlockedBadgeName = lang === 'kn' ? bObj.nameKn : bObj.nameEn;
          }
        }
      };

      if (newCompletedLevels.includes(1)) checkAndAwardBadge('b1');
      if (newCompletedLevels.length >= 3) checkAndAwardBadge('b2');
      if (newCompletedLevels.includes(2)) checkAndAwardBadge('b3');
      if (newCompletedLevels.includes(6)) checkAndAwardBadge('b4');
      if (newCompletedLevels.includes(7)) checkAndAwardBadge('b5');
      if (newCompletedLevels.includes(8)) checkAndAwardBadge('b6');
      if (newCompletedLevels.includes(12)) checkAndAwardBadge('b7');
      if (newCompletedLevels.length >= 13) checkAndAwardBadge('b8');

      const existingLvl = progress.modeProgress[levelId] || {
        learnCompleted: false,
        practiceCompleted: false,
        testCompleted: false
      };

      const updatedModeProgress = {
        ...progress.modeProgress,
        [levelId]: {
          ...existingLvl,
          [mode === 'learn' ? 'learnCompleted' : mode === 'practice' ? 'practiceCompleted' : 'testCompleted']: true
        }
      };

      const updatedLocalProgress: StudentProgress = {
        ...progress,
        xp: dbProg.total_xp,
        completedLevels: newCompletedLevels,
        modeProgress: updatedModeProgress,
        unlockedBadges: newBadges
      };

      setProgress(updatedLocalProgress);

      // Trigger celebration dialog
      const targetLvl = LEVELS_DATA.find((l) => l.id === levelId) || null;
      setCelebrationData({
        isOpen: true,
        level: targetLvl,
        xpEarned: xpGained,
        unlockedBadgeName: justUnlockedBadgeName
      });
    } catch (err) {
      console.error('[MECHCODE] Progress update failed:', err);
    }
  };

  // When a student clicks into a level
  const handleSelectLevel = (levelId: number) => {
    setActiveLevelId(levelId);
    if (progress?.id || progress?.studentId) {
      recordStudentLevelStart(progress.id || progress.studentId || 'std-01', levelId);
    }
  };

  // 1. Route: Teacher Login (/teacher-login)
  if (currentRoute === 'teacher-login') {
    return (
      <TeacherLogin
        lang={lang}
        onLanguageChange={setLang}
        onSuccess={() => navigateTo('teacher-dashboard')}
        onBackToStudent={() => navigateTo('student')}
      />
    );
  }

  // 2. Route: Teacher Dashboard (/teacher-dashboard)
  if (currentRoute === 'teacher-dashboard') {
    return (
      <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans">
        <TeacherDashboard
          lang={lang}
          onExit={() => {
            clearTeacherSession();
            navigateTo('student');
          }}
        />
      </div>
    );
  }

  // 3. Route: Student Not Logged In -> Show Welcome / Student Login Screen
  if (!progress) {
    return (
      <WelcomeScreen
        lang={lang}
        onLanguageChange={setLang}
        onLoginSuccess={handleStudentLoginSuccess}
        onNavigateToTeacherLogin={() => navigateTo('teacher-login')}
      />
    );
  }

  // 4. Route: Student Logged In
  const activeLevel = activeLevelId ? LEVELS_DATA.find((l) => l.id === activeLevelId) : null;

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-amber-500 selection:text-slate-950">
      {/* Navigation Bar */}
      <Navbar
        lang={lang}
        onLanguageChange={setLang}
        studentName={progress.name}
        xp={progress.xp}
        completedCount={progress.completedLevels.length}
        currentMode="student"
        onModeChange={() => {}}
        onOpenBadges={() => setIsBadgesOpen(true)}
        onOpenManual={() => setIsManualOpen(true)}
        onOpenCertificate={() => setIsCertificateOpen(true)}
        onGoHome={() => setActiveLevelId(null)}
        onSwitchStudent={handleStudentLogout}
      />

      {/* Main Content Area */}
      <main className="flex-1 pb-12">
        {activeLevel ? (
          <LevelView
            level={activeLevel}
            progress={progress}
            lang={lang}
            onBack={() => setActiveLevelId(null)}
            onNextLevel={() => {
              if (activeLevel.id < 13) {
                handleSelectLevel(activeLevel.id + 1);
              } else {
                setActiveLevelId(null);
                setIsCertificateOpen(true);
              }
            }}
            onUpdateProgress={handleUpdateProgress}
          />
        ) : (
          <StudentDashboard
            progress={progress}
            lang={lang}
            onSelectLevel={handleSelectLevel}
            onOpenBadges={() => setIsBadgesOpen(true)}
            onOpenCertificate={() => setIsCertificateOpen(true)}
          />
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-900 bg-slate-950/80 py-6 px-4 text-center text-xs text-slate-500 font-mono">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="text-amber-400 font-bold">MECHCODE QUEST</span>
            <span>•</span>
            <span>Adichunchanagiri Polytechnic, Chikkamagaluru</span>
          </div>

          <div className="flex items-center gap-3 text-[11px]">
            <span>Active Student: <strong className="text-slate-300">{progress.name}</strong> ({progress.usn})</span>
            <span>•</span>
            <button
              onClick={handleStudentLogout}
              className="text-amber-400 hover:underline cursor-pointer"
            >
              {lang === 'kn' ? 'ನಿರ್ಗಮಿಸಿ (Logout)' : 'Logout'}
            </button>
            <span>•</span>
            <button
              onClick={() => navigateTo('teacher-login')}
              className="text-slate-600 hover:text-amber-400/80 cursor-pointer"
            >
              {lang === 'kn' ? 'ಬೋಧಕರ ಪ್ರವೇಶ' : 'Faculty Access'}
            </button>
          </div>
        </div>
      </footer>

      {/* Modals */}
      <BadgesModal
        isOpen={isBadgesOpen}
        onClose={() => setIsBadgesOpen(false)}
        unlockedBadgeIds={progress.unlockedBadges}
        lang={lang}
      />

      <ManualModal
        isOpen={isManualOpen}
        onClose={() => setIsManualOpen(false)}
        lang={lang}
      />

      <LabCertificate
        isOpen={isCertificateOpen}
        onClose={() => setIsCertificateOpen(false)}
        studentName={progress.name}
        usn={progress.usn}
        completedCount={progress.completedLevels.length}
        totalXp={progress.xp}
        lang={lang}
      />

      {celebrationData.level && (
        <CelebrationModal
          isOpen={celebrationData.isOpen}
          onClose={() => setCelebrationData((prev) => ({ ...prev, isOpen: false }))}
          studentName={progress.name}
          level={celebrationData.level}
          xpEarned={celebrationData.xpEarned}
          unlockedBadgeName={celebrationData.unlockedBadgeName}
          lang={lang}
          onNextLevel={() => {
            setCelebrationData((prev) => ({ ...prev, isOpen: false }));
            if (celebrationData.level && celebrationData.level.id < 13) {
              handleSelectLevel(celebrationData.level.id + 1);
            }
          }}
        />
      )}
    </div>
  );
}
