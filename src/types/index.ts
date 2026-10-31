export type Language = 'kn' | 'en' | 'bilingual';

export interface BilingualText {
  kn: string;
  en: string;
}

export interface LineExplanation {
  line: number;
  code: string;
  kn: string;
  en: string;
  concept?: string;
}

export interface PredictOption {
  textKn: string;
  textEn: string;
  isCorrect: boolean;
  explanationKn: string;
  explanationEn: string;
}

export interface MiniChallengeQuestion {
  id: string;
  questionKn: string;
  questionEn: string;
  options: {
    textKn: string;
    textEn: string;
    isCorrect: boolean;
  }[];
  hintKn: string;
  hintEn: string;
  explanationKn: string;
  explanationEn: string;
}

export interface ClozeExercise {
  instructionKn: string;
  instructionEn: string;
  codeTemplate: string; // contains {{BLANK1}}, {{BLANK2}}
  blanks: {
    id: string;
    answer: string;
    options: string[];
  }[];
}

export interface ArrangeExercise {
  instructionKn: string;
  instructionEn: string;
  shuffledLines: { id: string; text: string }[];
  correctOrder: string[]; // ids in correct order
}

export interface TermMatch {
  term: string;
  meaningKn: string;
  meaningEn: string;
}

export interface VivaQuestion {
  id: string;
  questionKn: string;
  questionEn: string;
  options: {
    textKn: string;
    textEn: string;
    isCorrect: boolean;
  }[];
  explanationKn: string;
  explanationEn: string;
}

export interface LevelData {
  id: number;
  exerciseNumber: number;
  weekNumber: number;
  weekTitle: BilingualText;
  title: BilingualText;
  subtitle: BilingualText;
  badgeName: BilingualText;
  badgeIcon: string;
  category: 'File Handling' | 'OOP' | 'Hardware & IoT' | 'Quality Control' | 'FEM & Analysis';
  
  // Step 1: What are we learning
  step1What: {
    description: BilingualText;
    keyPoints: BilingualText[];
  };

  // Step 2: Mechanical engineering connection
  step2Engineering: {
    title: BilingualText;
    analogy: BilingualText;
    industryUseCase: BilingualText;
    icon: string;
  };

  // Step 3: Python Concept
  step3Python: {
    title: BilingualText;
    summary: BilingualText;
    rules: BilingualText[];
    terms: TermMatch[];
  };

  // Step 4: The original manual code
  step4Code: {
    originalCode: string;
    sampleDataDescription?: BilingualText;
    virtualFiles?: { [filename: string]: string };
  };

  // Step 5: Line by line
  step5LineByLine: LineExplanation[];

  // Step 6: Predict output
  step6Predict: {
    prompt: BilingualText;
    options: PredictOption[];
  };

  // Step 7: Expected output and runner configuration
  step7Run: {
    expectedStdout: string;
    isSimulation: boolean;
    simulationNotice?: BilingualText;
    simulationType: 'csv' | 'car' | 'inheritance' | 'bank' | 'motor' | 'factory' | 'robot' | 'xbar_r' | 'stats' | 'spc' | 'fishbone' | 'stress_bar' | 'stress_hole';
  };

  // Step 8: Mini Challenge
  step8Challenge: MiniChallengeQuestion[];

  // Mode 2: Practice Mode
  practiceMode: {
    cloze?: ClozeExercise;
    arrange?: ArrangeExercise;
    termMatches?: TermMatch[];
  };

  // Mode 3: Test Mode
  testMode: {
    questions: VivaQuestion[];
  };

  // Teacher notes / Original manual errors or specific notes
  teacherNotes: {
    observationKn: string;
    observationEn: string;
    manualOddity?: string;
    labTipsKn: string;
    labTipsEn: string;
  };
}

export interface StudentProgress {
  id?: string;
  studentId?: string;
  name: string;
  usn: string; // Register Number (e.g. 426ME23001)
  registerNumber?: string;
  completedLevels: number[]; // level IDs
  stepProgress: { [levelId: number]: number }; // max step reached (1-8)
  modeProgress: {
    [levelId: number]: {
      learnCompleted: boolean; // +50 XP
      practiceCompleted: boolean; // +25 XP
      testCompleted: boolean; // +25 XP
      testScore?: number;
    };
  };
  xp: number;
  unlockedBadges: string[];
}

export interface TeacherStudentSummary {
  id: string;
  name: string;
  usn: string;
  registerNumber?: string;
  completedCount: number;
  totalXp: number;
  testAverage: number;
  lastActive: string;
  status: 'Ahead' | 'On Track' | 'Needs Help' | 'Not Started';
  difficultLevel?: number;
  activeStatus?: boolean;
}

export * from './supabase';
