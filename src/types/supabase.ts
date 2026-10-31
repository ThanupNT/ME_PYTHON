export interface DbStudent {
  id: string;
  auth_user_id?: string;
  register_number: string;
  student_name: string;
  pin_hash?: string;
  active_status: boolean;
  created_at: string;
  last_login_at?: string;
}

export interface DbStudentProgress {
  id: string;
  student_id: string;
  total_xp: number;
  completed_levels: number[];
  current_level: number;
  total_attempts: number;
  completed_at?: string | null;
  updated_at: string;
}

export interface DbLevelProgress {
  id: string;
  student_id: string;
  level_number: number;
  exercise_number: number;
  status: 'not_started' | 'in_progress' | 'completed';
  xp_earned: number;
  highest_score: number;
  attempts: number;
  started_at: string;
  completed_at?: string | null;
  learn_completed: boolean;
  practice_completed: boolean;
  test_completed: boolean;
}

export interface DbQuizAttempt {
  id: string;
  student_id: string;
  level_number: number;
  question_id: string;
  question_text?: string;
  selected_answer: string;
  is_correct: boolean;
  marks_obtained: number;
  attempted_at: string;
}

export interface DbActivityLog {
  id: string;
  student_id: string;
  activity_type: 'login' | 'start_level' | 'complete_learn' | 'complete_practice' | 'complete_quiz' | 'complete_all_levels' | 'earned_badge';
  level_number?: number;
  activity_details: Record<string, any>;
  created_at: string;
}

export interface DbTeacherProfile {
  id: string;
  auth_user_id: string;
  full_name: string;
  role: 'teacher' | 'head_of_department';
  email: string;
  created_at: string;
}

export interface StudentDetailedAnalytics {
  student: DbStudent;
  progress: DbStudentProgress;
  levelRecords: DbLevelProgress[];
  quizAttempts: DbQuizAttempt[];
  recentActivities: DbActivityLog[];
  averageScore: number;
  status: 'Ahead' | 'On Track' | 'Needs Help' | 'Not Started';
  difficultLevels: number[];
}

export interface ClassAnalyticsSummary {
  totalStudents: number;
  activeStudents: number;
  notStartedStudents: number;
  completedCurriculumCount: number;
  totalMissionsCompleted: number;
  averageXp: number;
  averageQuizScore: number;
  overallClassProgressPercent: number;
  certificatesEarned: number;
  mostDifficultLevel: {
    levelNumber: number;
    title: string;
    avgScore: number;
    failureRate: number;
  };
  levelStats: {
    levelNumber: number;
    exerciseNumber: number;
    title: string;
    category: string;
    completedCount: number;
    averageScore: number;
    averageAttempts: number;
  }[];
  xpDistribution: {
    range: string;
    count: number;
  }[];
}
