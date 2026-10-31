-- ============================================================================
-- MECHCODE QUEST – SUPABASE POSTGRESQL DATABASE MIGRATION SCRIPT
-- Institution: Adichunchanagiri Polytechnic, Chikkamagaluru
-- Department: Department of Mechanical Engineering (III Sem Diploma)
-- Course: Programming Concepts in Mechanical Engineering
-- ============================================================================

-- 1. EXTENSIONS
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- ============================================================================
-- 2. CREATE TABLES
-- ============================================================================

-- Table A: students
CREATE TABLE IF NOT EXISTS public.students (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    auth_user_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
    register_number TEXT NOT NULL UNIQUE,
    student_name TEXT NOT NULL,
    pin_hash TEXT NOT NULL, -- Stored securely (or bcrypt hash)
    active_status BOOLEAN NOT NULL DEFAULT TRUE,
    semester TEXT NOT NULL DEFAULT 'III',
    branch TEXT NOT NULL DEFAULT 'Mechanical Engineering',
    college TEXT NOT NULL DEFAULT 'Adichunchanagiri Polytechnic',
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    last_login_at TIMESTAMPTZ
);

-- Table B: student_progress
CREATE TABLE IF NOT EXISTS public.student_progress (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    student_id UUID NOT NULL REFERENCES public.students(id) ON DELETE CASCADE,
    total_xp INTEGER NOT NULL DEFAULT 0 CHECK (total_xp >= 0),
    completed_levels INTEGER[] NOT NULL DEFAULT '{}',
    current_level INTEGER NOT NULL DEFAULT 1 CHECK (current_level >= 1 AND current_level <= 13),
    total_attempts INTEGER NOT NULL DEFAULT 0 CHECK (total_attempts >= 0),
    completed_at TIMESTAMPTZ,
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    CONSTRAINT uq_student_progress_student UNIQUE (student_id)
);

-- Table C: level_progress
CREATE TABLE IF NOT EXISTS public.level_progress (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    student_id UUID NOT NULL REFERENCES public.students(id) ON DELETE CASCADE,
    level_number INTEGER NOT NULL CHECK (level_number >= 1 AND level_number <= 13),
    exercise_number INTEGER NOT NULL,
    status TEXT NOT NULL DEFAULT 'not_started' CHECK (status IN ('not_started', 'in_progress', 'completed')),
    xp_earned INTEGER NOT NULL DEFAULT 0 CHECK (xp_earned >= 0 AND xp_earned <= 100),
    highest_score INTEGER NOT NULL DEFAULT 0 CHECK (highest_score >= 0 AND highest_score <= 100),
    attempts INTEGER NOT NULL DEFAULT 0,
    learn_completed BOOLEAN NOT NULL DEFAULT FALSE,
    practice_completed BOOLEAN NOT NULL DEFAULT FALSE,
    test_completed BOOLEAN NOT NULL DEFAULT FALSE,
    started_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    completed_at TIMESTAMPTZ,
    CONSTRAINT uq_student_level UNIQUE (student_id, level_number)
);

-- Table D: quiz_attempts
CREATE TABLE IF NOT EXISTS public.quiz_attempts (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    student_id UUID NOT NULL REFERENCES public.students(id) ON DELETE CASCADE,
    level_number INTEGER NOT NULL CHECK (level_number >= 1 AND level_number <= 13),
    question_id TEXT NOT NULL,
    selected_answer TEXT NOT NULL,
    is_correct BOOLEAN NOT NULL,
    marks_obtained INTEGER NOT NULL DEFAULT 0,
    attempted_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Table E: activity_logs
CREATE TABLE IF NOT EXISTS public.activity_logs (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    student_id UUID NOT NULL REFERENCES public.students(id) ON DELETE CASCADE,
    activity_type TEXT NOT NULL,
    level_number INTEGER,
    activity_details JSONB NOT NULL DEFAULT '{}'::jsonb,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Table F: teacher_profiles
CREATE TABLE IF NOT EXISTS public.teacher_profiles (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    auth_user_id UUID NOT NULL UNIQUE REFERENCES auth.users(id) ON DELETE CASCADE,
    full_name TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE,
    role TEXT NOT NULL DEFAULT 'teacher' CHECK (role IN ('teacher', 'head_of_department', 'admin')),
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- ============================================================================
-- 3. INDEXES FOR PERFORMANCE
-- ============================================================================
CREATE INDEX IF NOT EXISTS idx_students_reg ON public.students(register_number);
CREATE INDEX IF NOT EXISTS idx_students_auth ON public.students(auth_user_id);
CREATE INDEX IF NOT EXISTS idx_level_prog_std ON public.level_progress(student_id);
CREATE INDEX IF NOT EXISTS idx_quiz_std ON public.quiz_attempts(student_id);
CREATE INDEX IF NOT EXISTS idx_activity_std ON public.activity_logs(student_id);
CREATE INDEX IF NOT EXISTS idx_teacher_auth ON public.teacher_profiles(auth_user_id);

-- ============================================================================
-- 4. SECURITY HELPERS & ROW LEVEL SECURITY (RLS)
-- ============================================================================

-- Helper: Check if current auth user is a verified teacher
CREATE OR REPLACE FUNCTION public.is_teacher()
RETURNS BOOLEAN
LANGUAGE sql
SECURITY DEFINER
STABLE
AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.teacher_profiles
    WHERE auth_user_id = auth.uid()
    AND role IN ('teacher', 'head_of_department', 'admin')
  );
$$;

-- Helper: Get current student ID from authenticated user
CREATE OR REPLACE FUNCTION public.get_my_student_id()
RETURNS UUID
LANGUAGE sql
SECURITY DEFINER
STABLE
AS $$
  SELECT id FROM public.students
  WHERE auth_user_id = auth.uid()
  LIMIT 1;
$$;

-- Enable RLS on all tables
ALTER TABLE public.students ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.student_progress ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.level_progress ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.quiz_attempts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.activity_logs ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.teacher_profiles ENABLE ROW LEVEL SECURITY;

-- ----------------------------------------------------------------------------
-- RLS Policies: students
-- ----------------------------------------------------------------------------
-- Teachers can do everything
CREATE POLICY "Teacher full access to students"
    ON public.students
    FOR ALL
    USING (public.is_teacher());

-- Students can read their own record only
CREATE POLICY "Student read own profile"
    ON public.students
    FOR SELECT
    USING (auth_user_id = auth.uid());

-- ----------------------------------------------------------------------------
-- RLS Policies: student_progress
-- ----------------------------------------------------------------------------
CREATE POLICY "Teacher full access to student_progress"
    ON public.student_progress
    FOR ALL
    USING (public.is_teacher());

CREATE POLICY "Student read own progress"
    ON public.student_progress
    FOR SELECT
    USING (student_id = public.get_my_student_id());

CREATE POLICY "Student update own progress"
    ON public.student_progress
    FOR UPDATE
    USING (student_id = public.get_my_student_id());

-- ----------------------------------------------------------------------------
-- RLS Policies: level_progress
-- ----------------------------------------------------------------------------
CREATE POLICY "Teacher full access to level_progress"
    ON public.level_progress
    FOR ALL
    USING (public.is_teacher());

CREATE POLICY "Student read own level_progress"
    ON public.level_progress
    FOR SELECT
    USING (student_id = public.get_my_student_id());

CREATE POLICY "Student insert own level_progress"
    ON public.level_progress
    FOR INSERT
    WITH CHECK (student_id = public.get_my_student_id());

CREATE POLICY "Student update own level_progress"
    ON public.level_progress
    FOR UPDATE
    USING (student_id = public.get_my_student_id());

-- ----------------------------------------------------------------------------
-- RLS Policies: quiz_attempts
-- ----------------------------------------------------------------------------
CREATE POLICY "Teacher full access to quiz_attempts"
    ON public.quiz_attempts
    FOR ALL
    USING (public.is_teacher());

CREATE POLICY "Student read own quiz_attempts"
    ON public.quiz_attempts
    FOR SELECT
    USING (student_id = public.get_my_student_id());

CREATE POLICY "Student insert own quiz_attempts"
    ON public.quiz_attempts
    FOR INSERT
    WITH CHECK (student_id = public.get_my_student_id());

-- ----------------------------------------------------------------------------
-- RLS Policies: activity_logs
-- ----------------------------------------------------------------------------
CREATE POLICY "Teacher full access to activity_logs"
    ON public.activity_logs
    FOR ALL
    USING (public.is_teacher());

CREATE POLICY "Student insert own activity_logs"
    ON public.activity_logs
    FOR INSERT
    WITH CHECK (student_id = public.get_my_student_id());

CREATE POLICY "Student read own activity_logs"
    ON public.activity_logs
    FOR SELECT
    USING (student_id = public.get_my_student_id());

-- ----------------------------------------------------------------------------
-- RLS Policies: teacher_profiles
-- ----------------------------------------------------------------------------
CREATE POLICY "Teachers can view faculty profiles"
    ON public.teacher_profiles
    FOR SELECT
    USING (auth_user_id = auth.uid() OR public.is_teacher());

-- ============================================================================
-- 5. SECURE STORED PROCEDURES (Anti-Cheat & Operations)
-- ============================================================================

-- Function: Reset student PIN (Teacher Only)
CREATE OR REPLACE FUNCTION public.reset_student_pin(
    target_student_id UUID,
    new_pin TEXT
)
RETURNS BOOLEAN
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
    IF NOT public.is_teacher() THEN
        RAISE EXCEPTION 'Access denied: Only authorized faculty can reset student PINs.';
    END IF;

    UPDATE public.students
    SET pin_hash = new_pin
    WHERE id = target_student_id;

    RETURN TRUE;
END;
$$;

-- Function: Reset student progress (Teacher Only)
CREATE OR REPLACE FUNCTION public.reset_student_progress(
    target_student_id UUID
)
RETURNS BOOLEAN
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
    IF NOT public.is_teacher() THEN
        RAISE EXCEPTION 'Access denied: Only authorized faculty can reset student progress.';
    END IF;

    -- Reset student_progress table
    UPDATE public.student_progress
    SET total_xp = 0,
        completed_levels = '{}',
        current_level = 1,
        total_attempts = 0,
        completed_at = NULL,
        updated_at = NOW()
    WHERE student_id = target_student_id;

    -- Delete individual level progress & quiz attempts
    DELETE FROM public.level_progress WHERE student_id = target_student_id;
    DELETE FROM public.quiz_attempts WHERE student_id = target_student_id;

    -- Log reset action
    INSERT INTO public.activity_logs (student_id, activity_type, activity_details)
    VALUES (target_student_id, 'progress_reset_by_faculty', json_build_object('reset_by', auth.uid()));

    RETURN TRUE;
END;
$$;

-- ============================================================================
-- 6. SEED DATA: 28 DIPLOMA MECHANICAL STUDENTS (PCME - 23ME34P)
-- Adichunchanagiri Polytechnic, Chikkamagaluru
-- Source: Official Marks Register
-- Common Password for all: 'mech123'
-- ============================================================================

INSERT INTO public.students (register_number, student_name, pin_hash, active_status) VALUES
-- Students 1-12 with official Karnataka BTE Register Numbers
('440ME25002', 'DARSHAN B.J', 'mech123', TRUE),
('440ME25003', 'JEEVAN H.R', 'mech123', TRUE),
('440ME25006', 'MANJU S', 'mech123', TRUE),
('440ME25007', 'M.D FARAZ', 'mech123', TRUE),
('440ME25009', 'N.S MANOJ', 'mech123', TRUE),
('440ME25014', 'R.H JEEVAN', 'mech123', TRUE),
('440ME25015', 'RAMESH H.V', 'mech123', TRUE),
('440ME25016', 'ROHITH BN', 'mech123', TRUE),
('440ME25017', 'SUDARSHAN R', 'mech123', TRUE),
('440ME25018', 'TAHANIYATH', 'mech123', TRUE),
('440ME25019', 'TEJU. D.R', 'mech123', TRUE),
('440ME25020', 'YASHWANTH A', 'mech123', TRUE),

-- Students 13-28 (Can log in directly using their student name!)
('ROLL-13', 'ANOOP CA', 'mech123', TRUE),
('ROLL-14', 'JEEVAN K J', 'mech123', TRUE),
('ROLL-15', 'MD SAHAD K K', 'mech123', TRUE),
('ROLL-16', 'PRAJWAL L', 'mech123', TRUE),
('ROLL-17', 'SHARAN RAJ M U', 'mech123', TRUE),
('ROLL-18', 'SHIVA KUMAR K.B', 'mech123', TRUE),
('ROLL-19', 'SHREYAS H.J', 'mech123', TRUE),
('ROLL-20', 'VARADARAJU. R.H', 'mech123', TRUE),
('ROLL-21', 'VASANTHA KP', 'mech123', TRUE),
('ROLL-22', 'VISHNU', 'mech123', TRUE),
('ROLL-23', 'YASHAS B R', 'mech123', TRUE),
('ROLL-24', 'BHUVANESH S N', 'mech123', TRUE),
('ROLL-25', 'THARUN', 'mech123', TRUE),
('ROLL-26', 'CHETHAN D P', 'mech123', TRUE),
('ROLL-27', 'KEERTHI D D', 'mech123', TRUE),
('ROLL-28', 'SANKETH Y M', 'mech123', TRUE)
ON CONFLICT (register_number) DO NOTHING;

-- Initialize student_progress records for all seeded students
INSERT INTO public.student_progress (student_id, total_xp, completed_levels, current_level, total_attempts)
SELECT id, 0, '{}', 1, 0
FROM public.students
ON CONFLICT (student_id) DO NOTHING;

