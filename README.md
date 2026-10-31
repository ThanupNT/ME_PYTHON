# MECHCODE QUEST – ಕನ್ನಡದಲ್ಲಿ Python ಕಲಿಯೋಣ!
### Gamified Programming Concepts in Mechanical Engineering with Supabase & Teacher Dashboard
**Institution:** Adichunchanagiri Polytechnic, Chikkamagaluru, Karnataka  
**Department:** Department of Mechanical Engineering  
**Course:** Programming Concepts in Mechanical Engineering (III Semester Diploma)  
**Taglines:**  
- Kannada: *"ಆಟವಾಡುತ್ತಾ Python ಕಲಿಯೋಣ!"*  
- English: *"Learn Programming Through Mechanical Engineering!"*

---

## 🚀 Overview

**MECHCODE QUEST** transforms the laboratory manual exercises for 3rd Semester Diploma in Mechanical Engineering into an interactive, gamified workshop experience. Designed specifically for diploma beginners with zero prior coding background, the platform features:

1. **Bilingual Instruction:** Default Kannada (ಕನ್ನಡ) with English and dual-language side-by-side mode.
2. **Verbatim Lab Manual Code:** All 13 selected lab programs are preserved exactly as printed in the official Karnataka BTE manual.
3. **8-Step Pedagogical Engine:**
   - Step 1: Real-World Mechanical Concept
   - Step 2: Mechanical Engineering Connection (Automotive, Robotics, Quality Control, Testing)
   - Step 3: Simple Python Rules
   - Step 4: Original Verbatim Program from Lab Manual (with line numbers & syntax highlighting)
   - Step 5: Clickable Line-by-Line Code Breakdown in Kannada/English
   - Step 6: "Predict the Output" Brain Teaser
   - Step 7: Dual-Tier Python Execution & Interactive Engineering Simulation
   - Step 8: Encouraging Mini-Challenge (Kind, non-punitive hints)
4. **Permanent Supabase PostgreSQL Database:**
   - Pre-provisioned for **30 Diploma Mechanical Engineering students**.
   - Tracks individual student XP, mission completions, quiz scores, attempts, and activity logs.
   - Strict **Row Level Security (RLS)** prevents student data leakage and unauthorized progress alteration.
5. **Private Faculty Portal (`/teacher-login`):**
   - Separate, secure teacher login with email/password authentication.
   - Class analytics, student roster, PIN management, progress reset, and CSV export.
6. **Printable Official Certificate:** An A4 certificate styled after Page 1 of the official lab record manual, complete with the student's name, USN, completion date, and verification seals.

---

## 👨‍🎓 Student Login Experience (Zero-Barrier, Permanent Multi-Device Sync)

Students open the common Vercel link and log in without needing email addresses or phone numbers:

1. **Register Number OR Student Name:**
   - Students 1 to 12 can enter their **Register Number** (e.g., `440ME25002`) OR their **Name**.
   - Students 13 to 28 who do not yet have a register number can simply **type their Name** (e.g., `ANOOP CA`, `VISHNU`, `PRAJWAL L`).
2. **Common Class Password for All:**
   - Universal class password: **`mech123`** (or PIN: `1234`).
3. **Personalized Welcome:**
   - *"ನಮಸ್ಕಾರ, DARSHAN B.J! MECHCODE QUEST ಗೆ ಸ್ವಾಗತ!"*
   - *"Welcome, ANOOP CA! Your mechanical coding adventure starts here!"*
4. **Multi-Device Sync:**
   - Students can log in from laboratory PCs, personal laptops, or mobile phones. Progress is retrieved instantly from the Supabase database.
   - No student can view or edit another student's progress.

### Official Class Roster – III Sem Mechanical (PCME - 23ME34P)
*Source: Adichunchanagiri Polytechnic CIE & SEE Marks Register*

| Sl. | Register No. | Student Name | Login Identifier | Common Password |
|---|---|---|---|---|
| 01 | `440ME25002` | DARSHAN B.J | `440ME25002` or `DARSHAN B.J` | `mech123` |
| 02 | `440ME25003` | JEEVAN H.R | `440ME25003` or `JEEVAN H.R` | `mech123` |
| 03 | `440ME25006` | MANJU S | `440ME25006` or `MANJU S` | `mech123` |
| 04 | `440ME25007` | M.D FARAZ | `440ME25007` or `M.D FARAZ` | `mech123` |
| 05 | `440ME25009` | N.S MANOJ | `440ME25009` or `N.S MANOJ` | `mech123` |
| 06 | `440ME25014` | R.H JEEVAN | `440ME25014` or `R.H JEEVAN` | `mech123` |
| 07 | `440ME25015` | RAMESH H.V | `440ME25015` or `RAMESH H.V` | `mech123` |
| 08 | `440ME25016` | ROHITH BN | `440ME25016` or `ROHITH BN` | `mech123` |
| 09 | `440ME25017` | SUDARSHAN R | `440ME25017` or `SUDARSHAN R` | `mech123` |
| 10 | `440ME25018` | TAHANIYATH | `440ME25018` or `TAHANIYATH` | `mech123` |
| 11 | `440ME25019` | TEJU. D.R | `440ME25019` or `TEJU. D.R` | `mech123` |
| 12 | `440ME25020` | YASHWANTH A | `440ME25020` or `YASHWANTH A` | `mech123` |
| 13 | *(Awaiting)* | ANOOP CA | `ANOOP CA` (Login by Name) | `mech123` |
| 14 | *(Awaiting)* | JEEVAN K J | `JEEVAN K J` (Login by Name) | `mech123` |
| 15 | *(Awaiting)* | MD SAHAD K K | `MD SAHAD K K` (Login by Name) | `mech123` |
| 16 | *(Awaiting)* | PRAJWAL L | `PRAJWAL L` (Login by Name) | `mech123` |
| 17 | *(Awaiting)* | SHARAN RAJ M U | `SHARAN RAJ M U` (Login by Name) | `mech123` |
| 18 | *(Awaiting)* | SHIVA KUMAR K.B | `SHIVA KUMAR K.B` (Login by Name) | `mech123` |
| 19 | *(Awaiting)* | SHREYAS H.J | `SHREYAS H.J` (Login by Name) | `mech123` |
| 20 | *(Awaiting)* | VARADARAJU. R.H | `VARADARAJU. R.H` (Login by Name) | `mech123` |
| 21 | *(Awaiting)* | VASANTHA KP | `VASANTHA KP` (Login by Name) | `mech123` |
| 22 | *(Awaiting)* | VISHNU | `VISHNU` (Login by Name) | `mech123` |
| 23 | *(Awaiting)* | YASHAS B R | `YASHAS B R` (Login by Name) | `mech123` |
| 24 | *(Awaiting)* | BHUVANESH S N | `BHUVANESH S N` (Login by Name) | `mech123` |
| 25 | *(Awaiting)* | THARUN | `THARUN` (Login by Name) | `mech123` |
| 26 | *(Awaiting)* | CHETHAN D P | `CHETHAN D P` (Login by Name) | `mech123` |
| 27 | *(Awaiting)* | KEERTHI D D | `KEERTHI D D` (Login by Name) | `mech123` |
| 28 | *(Awaiting)* | SANKETH Y M | `SANKETH Y M` (Login by Name) | `mech123` |

---

## 👨‍🏫 Private Faculty Dashboard (`/teacher-login`)

To preserve privacy and prevent students from accessing administrative controls, faculty access is isolated:

1. **Private Route:** Navigate directly to `https://your-app.vercel.app/teacher-login` or click the discreet **"Faculty Access"** link in the footer.
2. **Faculty Credentials:**
   - **Email:** `teacher.mech@adichunchanagiri.edu.in` (or your registered Supabase teacher email)
   - **Password:** `mech@2026` (or your Supabase Auth password)
3. **Core Faculty Features:**
   - **Overview Metrics:** Total enrolled (30), Active learners, Not started, Missions completed, Class average XP, Quiz average %, Syllabus completion %, Certificates earned.
   - **Student Management Table:**
     - Search by Name or Register Number.
     - Filter by level (Levels 1–13) and status (Ahead, On Track, Needs Help, Not Started, Inactive).
     - Reset student PIN directly from the dashboard.
     - Reset student progress with confirmation dialog.
     - Activate / Deactivate student accounts.
     - Export full class progress report as `.csv`.
   - **Individual Student Drilldown Report:**
     - Click any student to view their 13-program scorecard, quiz scores, number of attempts, and activity history.
   - **Class Performance Analytics:**
     - Level-by-level completion percentage charts.
     - XP distribution histogram.
     - Most difficult exercise identification (Level 08 Ex 31 SPC charts).
   - **Manual Code Errata Note (Rule #9):** Detailed faculty note on Exercise 31 line 16 (`sample_no.append(sample)`).

---

## 🗄️ Supabase Database Architecture & SQL Setup

The application uses 6 relational tables with Row Level Security (RLS) enabled on all tables:

1. `students`: Unique student records, register numbers, names, PIN hashes, and account status.
2. `student_progress`: Total XP, array of completed levels, current level, total attempts, and completion timestamp.
3. `level_progress`: Per-level progress, exercise number, status, XP earned, test score, and timestamps.
4. `quiz_attempts`: Records of practical viva answers, correctness, and marks obtained.
5. `activity_logs`: Audit trail of logins, level starts, quiz submissions, and badge unlocks.
6. `teacher_profiles`: Authorised faculty credentials and roles (`teacher`, `head_of_department`).

### Applying the SQL Migration:
1. Open your project at [supabase.com](https://supabase.com).
2. Go to the **SQL Editor** tab.
3. Open `supabase_schema.sql` located in this project's root directory.
4. Paste the contents into the SQL Editor and click **Run**.
5. All 6 tables, indexes, RLS policies, secure functions, and the 30 student accounts are created immediately.

---

## 🌐 Deploying to Vercel

### Step 1: Push Repository to GitHub
```bash
git init
git add .
git commit -m "Upgrade MECHCODE QUEST with Supabase and Teacher Dashboard"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/mechcode-quest.git
git push -u origin main
```

### Step 2: Import Project on Vercel
1. Log in to [vercel.com](https://vercel.com) and click **"Add New..."** $\rightarrow$ **"Project"**.
2. Select your `mechcode-quest` GitHub repository.
3. Vercel automatically selects the **Vite** preset:
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
   - **Install Command:** `npm install`

### Step 3: Configure Environment Variables in Vercel
In the Vercel project deployment screen, under **Environment Variables**, add:
- `VITE_SUPABASE_URL` = `https://your-project.supabase.co`
- `VITE_SUPABASE_ANON_KEY` = `your-anon-publishable-key`

*(Note: Never add `SUPABASE_SERVICE_ROLE_KEY` to Vercel frontend environment variables.)*

Click **Deploy**!

---

## 📋 The 13 Mechanical Engineering Missions

| Level | Manual Ex No. | Title | Mechanical Engineering Connection |
|---|---|---|---|
| **01** | Ex 23 | CSV File Detective | Reading student records from `student.csv` |
| **02** | Ex 24 | Build Your Own Car | Automotive OOP: Car class attributes, ignition, and RPM |
| **03** | Ex 25 | The Animal Kingdom | Hierarchical Inheritance: acoustic animal sound visualizer |
| **04** | Ex 27 | Secure Bank Account | Encapsulation & access modifiers for financial transactions |
| **05** | Ex 28 | Robotic Motor Driver | Mechatronics: L298N dual H-bridge DC motor control (gpiozero) |
| **06** | Ex 29 | Smart Factory Alert | Industrial IoT: Temperature sensor triggering cooling fan & water pump |
| **07** | Ex 30 | Dual Motor Rover | Mobile Robotics: 2-wheel Automated Guided Vehicle (AGV) kinematics |
| **08** | Ex 31 | Shaft Diameter X-bar Chart | Quality Control: Statistical Process Control (SPC) mean charts |
| **09** | Ex 32 | Shaft Quality Inspector | Metrology: Normal distribution bell curve for shaft tolerance |
| **10** | Ex 33 | Out-of-Control Alarm | Statistical Process Control: Control chart breach detector (UCL/LCL) |
| **11** | Ex 34 | Defect Detective (Fishbone) | Quality Management: Ishikawa 4M Root Cause Diagram |
| **12** | Ex 36 | Tensile Test Inspector | Material Testing: Stress vs. Strain and Young's Modulus calculation |
| **13** | Ex 37 | Stress Concentration Analysis | Structural Design: Von Mises stress concentration around hole in plate |

---

## 🛡️ Security & Verification Checklist

- [x] **Student Authentication:** Register Number + PIN verified securely (no emails/passwords required).
- [x] **Data Isolation:** Row Level Security (RLS) ensures students cannot query or modify other students' records.
- [x] **Anti-Cheat:** XP increases are controlled through mode completions and validated against duplicate awards.
- [x] **Teacher Route Protection:** Private `/teacher-login` and `/teacher-dashboard` routes verify faculty credentials.
- [x] **Resilient Fallback:** Offline/demo mode ensures seamless operation if Supabase keys are pending.
- [x] **A4 Certificate:** Dynamically reflects authenticated student name, USN, and completion date.
- [x] **Vercel SPA Routing:** `vercel.json` rewrite rules eliminate 404 errors on `/teacher-login` and `/teacher-dashboard`.

---

*Adichunchanagiri Polytechnic – Department of Mechanical Engineering, Chikkamagaluru.*
