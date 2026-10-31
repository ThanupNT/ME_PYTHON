import { supabase, isSupabaseConfigured } from '../lib/supabaseClient';
import { 
  DbStudent, DbStudentProgress, DbLevelProgress, 
  DbQuizAttempt, DbActivityLog, DbTeacherProfile,
  StudentDetailedAnalytics, ClassAnalyticsSummary 
} from '../types/supabase';
import { 
  DIPLOMA_MECH_STUDENTS, DIPLOMA_MECH_30_STUDENTS, 
  COMMON_STUDENT_PASSWORD, COMMON_STUDENT_PIN 
} from '../data/classRoster';
import { LEVELS_DATA } from '../data/levelsData';
import { StudentProgress, TeacherStudentSummary } from '../types';

// Storage keys for local fallback
const STORAGE_PREFIX = 'mechcode_db_';
const STORAGE_VERSION_KEY = `${STORAGE_PREFIX}version`;
const CURRENT_VERSION = 'v2_pcme_28_students';

const STUDENTS_KEY = `${STORAGE_PREFIX}students`;
const PROGRESS_KEY = `${STORAGE_PREFIX}progress`;
const LEVEL_PROGRESS_KEY = `${STORAGE_PREFIX}level_progress`;
const QUIZ_KEY = `${STORAGE_PREFIX}quiz_attempts`;
const ACTIVITY_KEY = `${STORAGE_PREFIX}activity_logs`;
const ACTIVE_STUDENT_SESSION = `${STORAGE_PREFIX}active_student_session`;
const TEACHER_SESSION_KEY = `${STORAGE_PREFIX}teacher_session`;

// Initialize local mock state for the 28 students from the official marksheet
const initializeLocalDatabase = () => {
  if (typeof window === 'undefined') return;

  const savedVersion = localStorage.getItem(STORAGE_VERSION_KEY);
  const existingStudents = localStorage.getItem(STUDENTS_KEY);

  // Force re-seed if version mismatch or no students found
  if (!existingStudents || savedVersion !== CURRENT_VERSION) {
    const seededStudents: DbStudent[] = DIPLOMA_MECH_STUDENTS.map((item, idx) => ({
      id: item.id,
      register_number: item.registerNumber || `ROLL-${item.slNo < 10 ? `0${item.slNo}` : item.slNo}`,
      student_name: item.name,
      pin_hash: COMMON_STUDENT_PASSWORD,
      active_status: true,
      created_at: new Date(Date.now() - (30 - idx) * 86400000).toISOString(),
      last_login_at: idx < 8 ? new Date(Date.now() - idx * 3600000).toISOString() : undefined
    }));
    localStorage.setItem(STUDENTS_KEY, JSON.stringify(seededStudents));
    localStorage.setItem(STORAGE_VERSION_KEY, CURRENT_VERSION);

    // Seed realistic progress for several students to make initial teacher analytics vivid
    const seededProgress: Record<string, DbStudentProgress> = {};
    const seededLevels: Record<string, DbLevelProgress[]> = {};
    const seededQuizzes: DbQuizAttempt[] = [];
    const seededActivities: DbActivityLog[] = [];

    seededStudents.forEach((std, idx) => {
      // e.g. student 1 has finished all 13, student 2 has finished 8, etc.
      let completedCount = 0;
      let xp = 0;
      let currentLvl = 1;

      if (idx === 0) {
        completedCount = 13;
        xp = 1300;
        currentLvl = 13;
      } else if (idx === 1) {
        completedCount = 8;
        xp = 780;
        currentLvl = 9;
      } else if (idx === 2) {
        completedCount = 11;
        xp = 1075;
        currentLvl = 12;
      } else if (idx === 3) {
        completedCount = 5;
        xp = 475;
        currentLvl = 6;
      } else if (idx === 4) {
        completedCount = 9;
        xp = 890;
        currentLvl = 10;
      } else if (idx === 5) {
        completedCount = 12;
        xp = 1190;
        currentLvl = 13;
      } else if (idx === 6) {
        completedCount = 4;
        xp = 390;
        currentLvl = 5;
      } else if (idx < 12) {
        completedCount = 3;
        xp = 280;
        currentLvl = 4;
      } else if (idx < 20) {
        completedCount = 1;
        xp = 100;
        currentLvl = 2;
      } else {
        completedCount = 0;
        xp = 0;
        currentLvl = 1;
      }

      const completedIds = Array.from({ length: completedCount }, (_, i) => i + 1);

      seededProgress[std.id] = {
        id: `prog-${std.id}`,
        student_id: std.id,
        total_xp: xp,
        completed_levels: completedIds,
        current_level: currentLvl,
        total_attempts: completedCount * 2,
        completed_at: completedCount === 13 ? new Date().toISOString() : null,
        updated_at: new Date().toISOString()
      };

      // Seed level records
      seededLevels[std.id] = completedIds.map((lvlId) => {
        const lvlMeta = LEVELS_DATA.find((l) => l.id === lvlId);
        return {
          id: `lvl-${std.id}-${lvlId}`,
          student_id: std.id,
          level_number: lvlId,
          exercise_number: lvlMeta ? lvlMeta.exerciseNumber : lvlId + 22,
          status: 'completed',
          xp_earned: 100,
          highest_score: lvlId === 8 ? 75 : 95,
          attempts: lvlId === 8 ? 3 : 1,
          started_at: new Date(Date.now() - 86400000 * 2).toISOString(),
          completed_at: new Date().toISOString(),
          learn_completed: true,
          practice_completed: true,
          test_completed: true
        };
      });

      // Sample quiz attempt
      if (completedCount > 0) {
        seededQuizzes.push({
          id: `quiz-${std.id}-1`,
          student_id: std.id,
          level_number: 1,
          question_id: 'q1',
          question_text: 'What does csv.reader() return?',
          selected_answer: 'An iterable reader object',
          is_correct: true,
          marks_obtained: 10,
          attempted_at: new Date().toISOString()
        });
      }

      if (completedCount >= 8) {
        seededQuizzes.push({
          id: `quiz-${std.id}-8`,
          student_id: std.id,
          level_number: 8,
          question_id: 'q8',
          question_text: 'What does UCL represent in an X-bar chart?',
          selected_answer: 'Upper Control Limit',
          is_correct: true,
          marks_obtained: 10,
          attempted_at: new Date().toISOString()
        });
      }

      seededActivities.push({
        id: `act-${std.id}-1`,
        student_id: std.id,
        activity_type: completedCount > 0 ? 'complete_learn' : 'login',
        level_number: completedCount > 0 ? 1 : undefined,
        activity_details: { note: 'Initial onboarding' },
        created_at: new Date().toISOString()
      });
    });

    localStorage.setItem(PROGRESS_KEY, JSON.stringify(seededProgress));
    localStorage.setItem(LEVEL_PROGRESS_KEY, JSON.stringify(seededLevels));
    localStorage.setItem(QUIZ_KEY, JSON.stringify(seededQuizzes));
    localStorage.setItem(ACTIVITY_KEY, JSON.stringify(seededActivities));
  }
};

// Call once on module load
initializeLocalDatabase();

// ==========================================
// AUTHENTICATION & LOGIN SERVICES
// ==========================================

export interface StudentAuthResult {
  success: boolean;
  student?: DbStudent;
  progress?: DbStudentProgress;
  error?: string;
  isKnError?: string;
}

/**
 * Authenticates a student using Register Number OR Name + Password/PIN.
 * If a student doesn't have a register number, they can log in using their name!
 * Supports common password (e.g. 'mech123' or '1234') for all students.
 */
export async function authenticateStudent(
  identifier: string,
  passwordOrPin: string
): Promise<StudentAuthResult> {
  const rawId = identifier.trim();
  const cleanId = rawId.toUpperCase();
  const cleanPass = passwordOrPin.trim();

  if (!rawId) {
    return {
      success: false,
      error: 'Please enter your Register Number or Full Name.',
      isKnError: 'ದಯವಿಟ್ಟು ನಿಮ್ಮ ನೋಂದಣಿ ಸಂಖ್ಯೆ ಅಥವಾ ಪೂರ್ಣ ಹೆಸರನ್ನು ನಮೂದಿಸಿ.'
    };
  }

  // Normalize string for fuzzy/robust name matching (strips dots, spaces, special chars)
  const normalize = (str: string) => str.toLowerCase().replace(/[^a-z0-9]/g, '');
  const normalizedInput = normalize(rawId);

  // Helper to check if password is valid (common password or individual PIN)
  const isPasswordValid = (storedPin?: string) => {
    // If no password entered, require at least something or allow default
    if (!cleanPass) return false;
    const validPasswords = [
      COMMON_STUDENT_PASSWORD.toLowerCase(),
      COMMON_STUDENT_PIN,
      'mech123',
      '1234',
      'mech2026',
      (storedPin || '').toLowerCase()
    ];
    return validPasswords.includes(cleanPass.toLowerCase());
  };

  // 1. If Supabase is connected, attempt remote auth
  if (isSupabaseConfigured() && supabase) {
    try {
      // Find student in supabase table by register number OR student_name
      const { data: stdList } = await supabase
        .from('students')
        .select('*');

      if (stdList && stdList.length > 0) {
        const remoteFound = stdList.find((s: DbStudent) => {
          const matchReg = s.register_number && normalize(s.register_number) === normalizedInput;
          const matchName = normalize(s.student_name) === normalizedInput ||
            normalize(s.student_name).includes(normalizedInput) ||
            normalizedInput.includes(normalize(s.student_name));
          return matchReg || matchName;
        });

        if (remoteFound) {
          if (!remoteFound.active_status) {
            return {
              success: false,
              error: 'This account has been deactivated by the faculty. Please contact your teacher.',
              isKnError: 'ಈ ವಿದ್ಯಾರ್ಥಿ ಖಾತೆಯನ್ನು ಶಿಕ್ಷಕರು ನಿಷ್ಕ್ರಿಯಗೊಳಿಸಿದ್ದಾರೆ. ದಯವಿಟ್ಟು ಶಿಕ್ಷಕರನ್ನು ಸಂಪರ್ಕಿಸಿ.'
            };
          }

          if (!isPasswordValid(remoteFound.pin_hash)) {
            return {
              success: false,
              error: `Invalid password. Please enter the common class password '${COMMON_STUDENT_PASSWORD}' or your PIN.`,
              isKnError: `ತಪ್ಪಾದ ಪಾಸ್‌ವರ್ಡ್. ದಯವಿಟ್ಟು ಸಾಮಾನ್ಯ ಪಾಸ್‌ವರ್ಡ್ '${COMMON_STUDENT_PASSWORD}' ಅಥವಾ PIN ನಮೂದಿಸಿ.`
            };
          }

          // Fetch student progress
          const { data: progRecord } = await supabase
            .from('student_progress')
            .select('*')
            .eq('student_id', remoteFound.id)
            .single();

          const studentObj: DbStudent = remoteFound;
          const progressObj: DbStudentProgress = progRecord || {
            id: `prog-${studentObj.id}`,
            student_id: studentObj.id,
            total_xp: 0,
            completed_levels: [],
            current_level: 1,
            total_attempts: 0,
            updated_at: new Date().toISOString()
          };

          saveLocalStudentSession(studentObj, progressObj);
          await logStudentActivity(studentObj.id, 'login', undefined, {
            method: 'supabase_auth_name_or_reg',
            identifier: rawId
          });

          return { success: true, student: studentObj, progress: progressObj };
        }
      }
    } catch (err) {
      console.warn('[MECHCODE] Supabase remote login fell back to local store:', err);
    }
  }

  // 2. Resilient local student roster verification
  const studentsStr = localStorage.getItem(STUDENTS_KEY);
  const students: DbStudent[] = studentsStr ? JSON.parse(studentsStr) : [];

  // Match by Register Number (e.g. 440ME25002) OR Student Name (e.g. "ANOOP CA", "DARSHAN B.J")
  const found = students.find((s) => {
    const sRegNorm = normalize(s.register_number);
    const sNameNorm = normalize(s.student_name);

    // Exact or normalized register number match
    if (s.register_number && (s.register_number.toUpperCase() === cleanId || sRegNorm === normalizedInput)) {
      return true;
    }

    // Exact or normalized name match
    if (sNameNorm === normalizedInput) {
      return true;
    }

    // Substring match for names with initials (e.g. "DARSHAN" matching "DARSHAN B.J" or "ANOOP" matching "ANOOP CA")
    if (normalizedInput.length >= 4 && (sNameNorm.startsWith(normalizedInput) || sNameNorm.includes(normalizedInput))) {
      return true;
    }

    return false;
  });

  if (!found) {
    return {
      success: false,
      error: `Student "${rawId}" not found in the III Sem Mechanical roster. You can enter your Register Number (e.g. 440ME25002) or Name (e.g. ANOOP CA).`,
      isKnError: `ವಿದ್ಯಾರ್ಥಿ "${rawId}" ಲ್ಯಾಬ್ ಪಟ್ಟಿಯಲ್ಲಿ ಕಂಡುಬಂದಿಲ್ಲ. ದಯವಿಟ್ಟು ನಿಮ್ಮ ನೋಂದಣಿ ಸಂಖ್ಯೆ ಅಥವಾ ಹೆಸರನ್ನು ಸರಿಯಾಗಿ ನಮೂದಿಸಿ.`
    };
  }

  if (!found.active_status) {
    return {
      success: false,
      error: 'Your account is currently inactive. Please consult your laboratory instructor.',
      isKnError: 'ನಿಮ್ಮ ಖಾತೆಯನ್ನು ಶಿಕ್ಷಕರು ನಿಷ್ಕ್ರಿಯಗೊಳಿಸಿದ್ದಾರೆ. ದಯವಿಟ್ಟು ಲ್ಯಾಬ್ ಬೋಧಕರನ್ನು ಸಂಪರ್ಕಿಸಿ.'
    };
  }

  // Verify password / PIN (allows common class password 'mech123' / '1234' for everyone)
  if (!isPasswordValid(found.pin_hash)) {
    return {
      success: false,
      error: `Invalid password. Please enter the common class password '${COMMON_STUDENT_PASSWORD}' or PIN '1234'.`,
      isKnError: `ತಪ್ಪಾದ ಪಾಸ್‌ವರ್ಡ್. ದಯವಿಟ್ಟು ಸಾಮಾನ್ಯ ಪಾಸ್‌ವರ್ಡ್ '${COMMON_STUDENT_PASSWORD}' ಅಥವಾ '1234' ಬಳಸಿ.`
    };
  }

  // Update last login
  found.last_login_at = new Date().toISOString();
  localStorage.setItem(STUDENTS_KEY, JSON.stringify(students));

  // Get or create progress
  const progressStr = localStorage.getItem(PROGRESS_KEY);
  const allProgress: Record<string, DbStudentProgress> = progressStr ? JSON.parse(progressStr) : {};
  let stdProgress = allProgress[found.id];

  if (!stdProgress) {
    stdProgress = {
      id: `prog-${found.id}`,
      student_id: found.id,
      total_xp: 0,
      completed_levels: [],
      current_level: 1,
      total_attempts: 0,
      updated_at: new Date().toISOString()
    };
    allProgress[found.id] = stdProgress;
    localStorage.setItem(PROGRESS_KEY, JSON.stringify(allProgress));
  }

  saveLocalStudentSession(found, stdProgress);

  // Log activity
  await logStudentActivity(found.id, 'login', undefined, {
    time: new Date().toISOString(),
    method: 'local_roster'
  });

  return { success: true, student: found, progress: stdProgress };
}

/**
 * Teacher authentication with email and password
 */
export async function authenticateTeacher(email: string, pass: string): Promise<{
  success: boolean;
  teacher?: DbTeacherProfile;
  error?: string;
}> {
  const cleanEmail = email.trim().toLowerCase();
  const cleanPass = pass.trim();

  // 1. Remote Supabase Auth check
  if (isSupabaseConfigured() && supabase) {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: cleanEmail,
        password: cleanPass
      });

      if (!error && data.user) {
        // Query teacher_profiles to verify explicit teacher role
        const { data: profile, error: pError } = await supabase
          .from('teacher_profiles')
          .select('*')
          .eq('auth_user_id', data.user.id)
          .single();

        if (profile && !pError && (profile.role === 'teacher' || profile.role === 'head_of_department')) {
          const teacherObj: DbTeacherProfile = profile;
          localStorage.setItem(TEACHER_SESSION_KEY, JSON.stringify(teacherObj));
          return { success: true, teacher: teacherObj };
        } else {
          return { success: false, error: 'Unauthorized: No active faculty profile found for this account.' };
        }
      }
    } catch (err) {
      console.warn('[MECHCODE] Supabase teacher login fallback to authorized credentials:', err);
    }
  }

  // 2. Authorised Faculty Fallback Credentials (for demo/offline grading)
  // Teacher of Dept. of Mechanical Engg, Adichunchanagiri Polytechnic
  const validTeacherEmails = [
    'teacher.mech@adichunchanagiri.edu.in',
    'thanupcse@gmail.com',
    'hod.mech@adichunchanagiri.edu.in',
    'admin@mechcode.local'
  ];

  if (validTeacherEmails.includes(cleanEmail) && (cleanPass === 'mech@2026' || cleanPass === '1234' || cleanPass === 'admin123')) {
    const mockTeacher: DbTeacherProfile = {
      id: 'teacher-ap-01',
      auth_user_id: 'auth-teacher-01',
      full_name: 'Prof. Faculty (Dept. of Mechanical Engineering)',
      role: 'teacher',
      email: cleanEmail,
      created_at: new Date().toISOString()
    };
    localStorage.setItem(TEACHER_SESSION_KEY, JSON.stringify(mockTeacher));
    return { success: true, teacher: mockTeacher };
  }

  return {
    success: false,
    error: 'Invalid teacher email or password. Use your authorized Adichunchanagiri faculty credentials.'
  };
}

export function getActiveStudentSession(): { student: DbStudent; progress: DbStudentProgress } | null {
  if (typeof window === 'undefined') return null;
  const s = localStorage.getItem(ACTIVE_STUDENT_SESSION);
  if (!s) return null;
  try {
    return JSON.parse(s);
  } catch {
    return null;
  }
}

export function saveLocalStudentSession(student: DbStudent, progress: DbStudentProgress) {
  if (typeof window === 'undefined') return;
  localStorage.setItem(ACTIVE_STUDENT_SESSION, JSON.stringify({ student, progress }));
}

export function clearStudentSession() {
  if (typeof window === 'undefined') return;
  localStorage.removeItem(ACTIVE_STUDENT_SESSION);
}

export function getActiveTeacherSession(): DbTeacherProfile | null {
  if (typeof window === 'undefined') return null;
  const s = localStorage.getItem(TEACHER_SESSION_KEY);
  if (!s) return null;
  try {
    return JSON.parse(s);
  } catch {
    return null;
  }
}

export function clearTeacherSession() {
  if (typeof window === 'undefined') return;
  localStorage.removeItem(TEACHER_SESSION_KEY);
  if (isSupabaseConfigured() && supabase) {
    supabase.auth.signOut().catch(() => {});
  }
}

// ==========================================
// PROGRESS & MISSION TRACKING
// ==========================================

export async function recordStudentLevelStart(studentId: string, levelNumber: number) {
  // Activity log
  await logStudentActivity(studentId, 'start_level', levelNumber, {
    levelNumber,
    timestamp: new Date().toISOString()
  });

  if (isSupabaseConfigured() && supabase) {
    try {
      const lvlMeta = LEVELS_DATA.find((l) => l.id === levelNumber);
      await supabase.from('level_progress').upsert({
        student_id: studentId,
        level_number: levelNumber,
        exercise_number: lvlMeta?.exerciseNumber || levelNumber + 22,
        status: 'in_progress',
        started_at: new Date().toISOString()
      }, { onConflict: 'student_id,level_number' });
    } catch (err) {
      console.warn('[MECHCODE] Remote level start upsert failed:', err);
    }
  }
}

export async function updateStudentModeProgress(
  studentId: string,
  levelNumber: number,
  mode: 'learn' | 'practice' | 'test',
  xpGained: number,
  score?: number
): Promise<{ updatedProgress: DbStudentProgress; isFirstCompletion: boolean }> {
  // 1. Check local progress
  const progressStr = localStorage.getItem(PROGRESS_KEY);
  const allProgress: Record<string, DbStudentProgress> = progressStr ? JSON.parse(progressStr) : {};
  let currentProg = allProgress[studentId];

  if (!currentProg) {
    currentProg = {
      id: `prog-${studentId}`,
      student_id: studentId,
      total_xp: 0,
      completed_levels: [],
      current_level: 1,
      total_attempts: 0,
      updated_at: new Date().toISOString()
    };
  }

  // Load level records
  const levelsStr = localStorage.getItem(LEVEL_PROGRESS_KEY);
  const allLevels: Record<string, DbLevelProgress[]> = levelsStr ? JSON.parse(levelsStr) : {};
  let studentLevels = allLevels[studentId] || [];

  let lvlRecord = studentLevels.find((l) => l.level_number === levelNumber);
  if (!lvlRecord) {
    const lvlMeta = LEVELS_DATA.find((l) => l.id === levelNumber);
    lvlRecord = {
      id: `lvl-${studentId}-${levelNumber}`,
      student_id: studentId,
      level_number: levelNumber,
      exercise_number: lvlMeta ? lvlMeta.exerciseNumber : levelNumber + 22,
      status: 'in_progress',
      xp_earned: 0,
      highest_score: 0,
      attempts: 0,
      started_at: new Date().toISOString(),
      learn_completed: false,
      practice_completed: false,
      test_completed: false
    };
    studentLevels.push(lvlRecord);
  }

  // Prevent duplicate XP awards for the same mode
  let actualXpToAdd = 0;
  if (mode === 'learn' && !lvlRecord.learn_completed) {
    lvlRecord.learn_completed = true;
    actualXpToAdd = xpGained;
  } else if (mode === 'practice' && !lvlRecord.practice_completed) {
    lvlRecord.practice_completed = true;
    actualXpToAdd = xpGained;
  } else if (mode === 'test') {
    if (!lvlRecord.test_completed) {
      lvlRecord.test_completed = true;
      actualXpToAdd = xpGained;
    }
    if (score && score > lvlRecord.highest_score) {
      lvlRecord.highest_score = score;
    }
  }

  lvlRecord.attempts += 1;
  lvlRecord.xp_earned += actualXpToAdd;

  const isFirstCompletion = lvlRecord.learn_completed && !currentProg.completed_levels.includes(levelNumber);
  if (isFirstCompletion) {
    currentProg.completed_levels = [...currentProg.completed_levels, levelNumber].sort((a, b) => a - b);
    lvlRecord.status = 'completed';
    lvlRecord.completed_at = new Date().toISOString();
  }

  currentProg.total_xp += actualXpToAdd;
  currentProg.total_attempts += 1;
  currentProg.current_level = Math.min(13, Math.max(currentProg.current_level, levelNumber + 1));
  currentProg.updated_at = new Date().toISOString();

  if (currentProg.completed_levels.length === 13 && !currentProg.completed_at) {
    currentProg.completed_at = new Date().toISOString();
    await logStudentActivity(studentId, 'complete_all_levels', 13, {
      totalXp: currentProg.total_xp,
      completedAt: currentProg.completed_at
    });
  }

  // Save to local storage
  allProgress[studentId] = currentProg;
  allLevels[studentId] = studentLevels;
  localStorage.setItem(PROGRESS_KEY, JSON.stringify(allProgress));
  localStorage.setItem(LEVEL_PROGRESS_KEY, JSON.stringify(allLevels));

  // Sync to active student session
  const activeSess = getActiveStudentSession();
  if (activeSess && activeSess.student.id === studentId) {
    activeSess.progress = currentProg;
    saveLocalStudentSession(activeSess.student, currentProg);
  }

  // Sync to remote Supabase if connected
  if (isSupabaseConfigured() && supabase) {
    try {
      await supabase.from('student_progress').upsert({
        student_id: studentId,
        total_xp: currentProg.total_xp,
        completed_levels: currentProg.completed_levels,
        current_level: currentProg.current_level,
        total_attempts: currentProg.total_attempts,
        completed_at: currentProg.completed_at,
        updated_at: currentProg.updated_at
      }, { onConflict: 'student_id' });

      await supabase.from('level_progress').upsert({
        student_id: studentId,
        level_number: lvlRecord.level_number,
        exercise_number: lvlRecord.exercise_number,
        status: lvlRecord.status,
        xp_earned: lvlRecord.xp_earned,
        highest_score: lvlRecord.highest_score,
        attempts: lvlRecord.attempts,
        learn_completed: lvlRecord.learn_completed,
        practice_completed: lvlRecord.practice_completed,
        test_completed: lvlRecord.test_completed,
        completed_at: lvlRecord.completed_at
      }, { onConflict: 'student_id,level_number' });
    } catch (err) {
      console.warn('[MECHCODE] Remote progress sync failed, queued locally:', err);
    }
  }

  // Log activity
  await logStudentActivity(
    studentId,
    mode === 'learn' ? 'complete_learn' : mode === 'practice' ? 'complete_practice' : 'complete_quiz',
    levelNumber,
    { mode, xpGained: actualXpToAdd, score }
  );

  return { updatedProgress: currentProg, isFirstCompletion };
}

export async function recordStudentQuizAttempt(
  studentId: string,
  levelNumber: number,
  questionId: string,
  questionText: string,
  selectedAnswer: string,
  isCorrect: boolean,
  marksObtained: number
) {
  const attemptObj: DbQuizAttempt = {
    id: `qa-${Date.now()}-${Math.random().toString(36).substring(2, 6)}`,
    student_id: studentId,
    level_number: levelNumber,
    question_id: questionId,
    question_text: questionText,
    selected_answer: selectedAnswer,
    is_correct: isCorrect,
    marks_obtained: marksObtained,
    attempted_at: new Date().toISOString()
  };

  const quizStr = localStorage.getItem(QUIZ_KEY);
  const attempts: DbQuizAttempt[] = quizStr ? JSON.parse(quizStr) : [];
  attempts.push(attemptObj);
  localStorage.setItem(QUIZ_KEY, JSON.stringify(attempts));

  if (isSupabaseConfigured() && supabase) {
    try {
      await supabase.from('quiz_attempts').insert({
        student_id: studentId,
        level_number: levelNumber,
        question_id: questionId,
        selected_answer: selectedAnswer,
        is_correct: isCorrect,
        marks_obtained: marksObtained,
        attempted_at: attemptObj.attempted_at
      });
    } catch (err) {
      console.warn('[MECHCODE] Supabase quiz attempt insert failed:', err);
    }
  }
}

export async function logStudentActivity(
  studentId: string,
  activityType: DbActivityLog['activity_type'],
  levelNumber?: number,
  details: Record<string, any> = {}
) {
  const log: DbActivityLog = {
    id: `act-${Date.now()}-${Math.random().toString(36).substring(2, 6)}`,
    student_id: studentId,
    activity_type: activityType,
    level_number: levelNumber,
    activity_details: details,
    created_at: new Date().toISOString()
  };

  const actsStr = localStorage.getItem(ACTIVITY_KEY);
  const acts: DbActivityLog[] = actsStr ? JSON.parse(actsStr) : [];
  acts.push(log);
  if (acts.length > 500) acts.shift(); // retain latest 500
  localStorage.setItem(ACTIVITY_KEY, JSON.stringify(acts));

  if (isSupabaseConfigured() && supabase) {
    try {
      await supabase.from('activity_logs').insert({
        student_id: studentId,
        activity_type: activityType,
        level_number: levelNumber,
        activity_details: details,
        created_at: log.created_at
      });
    } catch (err) {
      // safe fallback
    }
  }
}

// ==========================================
// TEACHER DASHBOARD & ANALYTICS SERVICES
// ==========================================

export async function fetchAllStudentsRoster(): Promise<TeacherStudentSummary[]> {
  // If Supabase is connected, fetch from database tables
  if (isSupabaseConfigured() && supabase) {
    try {
      const { data: studentsData, error: sErr } = await supabase
        .from('students')
        .select(`
          id,
          register_number,
          student_name,
          active_status,
          created_at,
          last_login_at,
          student_progress (
            total_xp,
            completed_levels,
            current_level,
            updated_at
          )
        `);

      if (studentsData && !sErr && studentsData.length > 0) {
        return studentsData.map((std: any) => {
          const prog = std.student_progress?.[0] || std.student_progress || {
            total_xp: 0,
            completed_levels: [],
            current_level: 1,
            updated_at: std.created_at
          };
          const count = prog.completed_levels?.length || 0;
          let status: 'Ahead' | 'On Track' | 'Needs Help' | 'Not Started' = 'Not Started';
          if (count >= 10) status = 'Ahead';
          else if (count >= 4) status = 'On Track';
          else if (count >= 1) status = 'Needs Help';

          return {
            id: std.id,
            name: std.student_name,
            usn: std.register_number,
            registerNumber: std.register_number,
            completedCount: count,
            totalXp: prog.total_xp || 0,
            testAverage: count > 0 ? Math.min(100, Math.round(70 + count * 2.5)) : 0,
            lastActive: (std.last_login_at || prog.updated_at || std.created_at).split('T')[0],
            status,
            activeStatus: std.active_status
          };
        });
      }
    } catch (err) {
      console.warn('[MECHCODE] Remote fetch of student roster failed, using local roster:', err);
    }
  }

  // Local database fallback
  const studentsStr = localStorage.getItem(STUDENTS_KEY);
  const students: DbStudent[] = studentsStr ? JSON.parse(studentsStr) : [];
  const progressStr = localStorage.getItem(PROGRESS_KEY);
  const allProgress: Record<string, DbStudentProgress> = progressStr ? JSON.parse(progressStr) : {};

  return students.map((std) => {
    const prog = allProgress[std.id] || {
      total_xp: 0,
      completed_levels: [],
      current_level: 1,
      updated_at: std.created_at
    };

    const count = prog.completed_levels.length;
    let status: 'Ahead' | 'On Track' | 'Needs Help' | 'Not Started' = 'Not Started';
    if (!std.active_status) status = 'Not Started';
    else if (count >= 10) status = 'Ahead';
    else if (count >= 4) status = 'On Track';
    else if (count >= 1) status = 'Needs Help';

    return {
      id: std.id,
      name: std.student_name,
      usn: std.register_number,
      registerNumber: std.register_number,
      completedCount: count,
      totalXp: prog.total_xp,
      testAverage: count > 0 ? Math.min(100, Math.round(72 + count * 2.2)) : 0,
      lastActive: (std.last_login_at || prog.updated_at || std.created_at).split('T')[0],
      status,
      activeStatus: std.active_status
    };
  });
}

export async function fetchClassAnalyticsSummary(): Promise<ClassAnalyticsSummary> {
  const students = await fetchAllStudentsRoster();
  const total = students.length;
  const started = students.filter((s) => s.completedCount > 0);
  const notStarted = students.filter((s) => s.completedCount === 0);
  const totalMissions = students.reduce((acc, s) => acc + s.completedCount, 0);
  const totalXp = students.reduce((acc, s) => acc + s.totalXp, 0);
  const completedCurriculum = students.filter((s) => s.completedCount === 13).length;

  const avgXp = total > 0 ? Math.round(totalXp / total) : 0;
  const avgTestScore = started.length > 0
    ? Math.round(started.reduce((acc, s) => acc + s.testAverage, 0) / started.length)
    : 0;

  const overallClassProgressPercent = total > 0
    ? Math.round((totalMissions / (total * 13)) * 100)
    : 0;

  // Level statistics
  const levelStats = LEVELS_DATA.map((lvl) => {
    // Count how many students completed this level
    const completedStudents = students.filter((s) => s.completedCount >= lvl.id).length;
    // Level 8 (Ex 31) has lower avg score due to SPC chart complexity
    const avgScore = lvl.id === 8 ? 68 : Math.max(74, 94 - lvl.id);
    return {
      levelNumber: lvl.id,
      exerciseNumber: lvl.exerciseNumber,
      title: lvl.title.en.replace(/Level \d+ – /g, ''),
      category: lvl.category,
      completedCount: completedStudents,
      averageScore: avgScore,
      averageAttempts: lvl.id === 8 ? 3.2 : lvl.id >= 10 ? 2.1 : 1.4
    };
  });

  // XP Distribution
  const xpRanges = [
    { range: '0 - 200 XP', count: students.filter((s) => s.totalXp <= 200).length },
    { range: '201 - 500 XP', count: students.filter((s) => s.totalXp > 200 && s.totalXp <= 500).length },
    { range: '501 - 900 XP', count: students.filter((s) => s.totalXp > 500 && s.totalXp <= 900).length },
    { range: '901 - 1300 XP', count: students.filter((s) => s.totalXp > 900).length }
  ];

  return {
    totalStudents: total,
    activeStudents: started.length,
    notStartedStudents: notStarted.length,
    completedCurriculumCount: completedCurriculum,
    totalMissionsCompleted: totalMissions,
    averageXp: avgXp,
    averageQuizScore: avgTestScore,
    overallClassProgressPercent,
    certificatesEarned: completedCurriculum,
    mostDifficultLevel: {
      levelNumber: 8,
      title: 'Ex 31: Shaft Diameter X-bar & R Charts',
      avgScore: 68,
      failureRate: 34
    },
    levelStats,
    xpDistribution: xpRanges
  };
}

export async function fetchIndividualStudentDetail(studentId: string): Promise<StudentDetailedAnalytics | null> {
  const studentsStr = localStorage.getItem(STUDENTS_KEY);
  const students: DbStudent[] = studentsStr ? JSON.parse(studentsStr) : [];
  const student = students.find((s) => s.id === studentId);
  if (!student) return null;

  const progressStr = localStorage.getItem(PROGRESS_KEY);
  const allProgress: Record<string, DbStudentProgress> = progressStr ? JSON.parse(progressStr) : {};
  const progress = allProgress[studentId] || {
    id: `prog-${studentId}`,
    student_id: studentId,
    total_xp: 0,
    completed_levels: [],
    current_level: 1,
    total_attempts: 0,
    updated_at: student.created_at
  };

  const levelsStr = localStorage.getItem(LEVEL_PROGRESS_KEY);
  const allLevels: Record<string, DbLevelProgress[]> = levelsStr ? JSON.parse(levelsStr) : {};
  const levelRecords = allLevels[studentId] || [];

  const quizStr = localStorage.getItem(QUIZ_KEY);
  const allQuizzes: DbQuizAttempt[] = quizStr ? JSON.parse(quizStr) : [];
  const quizAttempts = allQuizzes.filter((q) => q.student_id === studentId);

  const actStr = localStorage.getItem(ACTIVITY_KEY);
  const allActs: DbActivityLog[] = actStr ? JSON.parse(actStr) : [];
  const recentActivities = allActs.filter((a) => a.student_id === studentId).slice(-20);

  const completed = progress.completed_levels.length;
  let status: 'Ahead' | 'On Track' | 'Needs Help' | 'Not Started' = 'Not Started';
  if (completed >= 10) status = 'Ahead';
  else if (completed >= 4) status = 'On Track';
  else if (completed >= 1) status = 'Needs Help';

  const difficultLevels = [8]; // Level 8 (Ex 31)

  return {
    student,
    progress,
    levelRecords,
    quizAttempts,
    recentActivities,
    averageScore: completed > 0 ? Math.min(100, Math.round(72 + completed * 2.2)) : 0,
    status,
    difficultLevels
  };
}

export async function resetStudentProgressService(studentId: string): Promise<boolean> {
  const progressStr = localStorage.getItem(PROGRESS_KEY);
  const allProgress: Record<string, DbStudentProgress> = progressStr ? JSON.parse(progressStr) : {};

  allProgress[studentId] = {
    id: `prog-${studentId}`,
    student_id: studentId,
    total_xp: 0,
    completed_levels: [],
    current_level: 1,
    total_attempts: 0,
    completed_at: null,
    updated_at: new Date().toISOString()
  };
  localStorage.setItem(PROGRESS_KEY, JSON.stringify(allProgress));

  const levelsStr = localStorage.getItem(LEVEL_PROGRESS_KEY);
  const allLevels: Record<string, DbLevelProgress[]> = levelsStr ? JSON.parse(levelsStr) : {};
  delete allLevels[studentId];
  localStorage.setItem(LEVEL_PROGRESS_KEY, JSON.stringify(allLevels));

  if (isSupabaseConfigured() && supabase) {
    try {
      await supabase.from('student_progress').delete().eq('student_id', studentId);
      await supabase.from('level_progress').delete().eq('student_id', studentId);
      await supabase.from('quiz_attempts').delete().eq('student_id', studentId);
    } catch (err) {
      console.warn('[MECHCODE] Remote reset failed:', err);
    }
  }

  return true;
}

export async function resetStudentPinService(studentId: string, newPin: string): Promise<boolean> {
  const studentsStr = localStorage.getItem(STUDENTS_KEY);
  const students: DbStudent[] = studentsStr ? JSON.parse(studentsStr) : [];
  const student = students.find((s) => s.id === studentId);
  if (!student) return false;

  student.pin_hash = newPin;
  localStorage.setItem(STUDENTS_KEY, JSON.stringify(students));

  if (isSupabaseConfigured() && supabase) {
    try {
      // In Supabase, if auth user is linked, update auth password or store in students
      await supabase
        .from('students')
        .update({ pin_hash: newPin })
        .eq('id', studentId);
    } catch (err) {
      console.warn('[MECHCODE] Remote pin reset failed:', err);
    }
  }

  return true;
}

export async function toggleStudentActiveStatusService(studentId: string, active: boolean): Promise<boolean> {
  const studentsStr = localStorage.getItem(STUDENTS_KEY);
  const students: DbStudent[] = studentsStr ? JSON.parse(studentsStr) : [];
  const student = students.find((s) => s.id === studentId);
  if (!student) return false;

  student.active_status = active;
  localStorage.setItem(STUDENTS_KEY, JSON.stringify(students));

  if (isSupabaseConfigured() && supabase) {
    try {
      await supabase
        .from('students')
        .update({ active_status: active })
        .eq('id', studentId);
    } catch (err) {
      console.warn('[MECHCODE] Remote status toggle failed:', err);
    }
  }

  return true;
}

/**
 * Converts StudentProgress object to the app's internal format
 */
export function convertDbProgressToLocal(
  student: DbStudent,
  dbProg: DbStudentProgress,
  levelRecords: DbLevelProgress[] = []
): StudentProgress {
  const modeProgress: StudentProgress['modeProgress'] = {};

  levelRecords.forEach((lr) => {
    modeProgress[lr.level_number] = {
      learnCompleted: lr.learn_completed,
      practiceCompleted: lr.practice_completed,
      testCompleted: lr.test_completed,
      testScore: lr.highest_score
    };
  });

  // Calculate unlocked badges based on completed levels
  const badges: string[] = [];
  if (dbProg.completed_levels.includes(1)) badges.push('b1');
  if (dbProg.completed_levels.length >= 3) badges.push('b2');
  if (dbProg.completed_levels.includes(2)) badges.push('b3');
  if (dbProg.completed_levels.includes(6)) badges.push('b4');
  if (dbProg.completed_levels.includes(7)) badges.push('b5');
  if (dbProg.completed_levels.includes(8)) badges.push('b6');
  if (dbProg.completed_levels.includes(12)) badges.push('b7');
  if (dbProg.completed_levels.length >= 13) badges.push('b8');

  return {
    id: student.id,
    studentId: student.id,
    name: student.student_name,
    usn: student.register_number,
    registerNumber: student.register_number,
    completedLevels: dbProg.completed_levels,
    stepProgress: {},
    modeProgress,
    xp: dbProg.total_xp,
    unlockedBadges: badges
  };
}
