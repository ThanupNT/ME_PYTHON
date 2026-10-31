export interface StudentRosterItem {
  id: string;
  slNo: number;
  registerNumber?: string; // Optional if not yet assigned
  name: string;
  defaultPin: string; // Common password or pin
  hasRegNumber: boolean;
  semester: string;
  branch: string;
  college: string;
}

// Common password for all students as requested by faculty
export const COMMON_STUDENT_PASSWORD = 'mech123';
export const COMMON_STUDENT_PIN = '1234';

/**
 * Official Student Roster for III Sem Mechanical Engineering (PCME - 23ME34P)
 * Adichunchanagiri Polytechnic, Chikkamagaluru
 * Source: Official Department CIE & SEE Marks Register
 */
export const DIPLOMA_MECH_STUDENTS: StudentRosterItem[] = [
  // 1 to 12: Students with official BTE Register Numbers (440ME25...)
  { id: 'std-01', slNo: 1, registerNumber: '440ME25002', name: 'DARSHAN B.J', defaultPin: COMMON_STUDENT_PASSWORD, hasRegNumber: true, semester: 'III', branch: 'Mechanical', college: 'Adichunchanagiri Polytechnic' },
  { id: 'std-02', slNo: 2, registerNumber: '440ME25003', name: 'JEEVAN H.R', defaultPin: COMMON_STUDENT_PASSWORD, hasRegNumber: true, semester: 'III', branch: 'Mechanical', college: 'Adichunchanagiri Polytechnic' },
  { id: 'std-03', slNo: 3, registerNumber: '440ME25006', name: 'MANJU S', defaultPin: COMMON_STUDENT_PASSWORD, hasRegNumber: true, semester: 'III', branch: 'Mechanical', college: 'Adichunchanagiri Polytechnic' },
  { id: 'std-04', slNo: 4, registerNumber: '440ME25007', name: 'M.D FARAZ', defaultPin: COMMON_STUDENT_PASSWORD, hasRegNumber: true, semester: 'III', branch: 'Mechanical', college: 'Adichunchanagiri Polytechnic' },
  { id: 'std-05', slNo: 5, registerNumber: '440ME25009', name: 'N.S MANOJ', defaultPin: COMMON_STUDENT_PASSWORD, hasRegNumber: true, semester: 'III', branch: 'Mechanical', college: 'Adichunchanagiri Polytechnic' },
  { id: 'std-06', slNo: 6, registerNumber: '440ME25014', name: 'R.H JEEVAN', defaultPin: COMMON_STUDENT_PASSWORD, hasRegNumber: true, semester: 'III', branch: 'Mechanical', college: 'Adichunchanagiri Polytechnic' },
  { id: 'std-07', slNo: 7, registerNumber: '440ME25015', name: 'RAMESH H.V', defaultPin: COMMON_STUDENT_PASSWORD, hasRegNumber: true, semester: 'III', branch: 'Mechanical', college: 'Adichunchanagiri Polytechnic' },
  { id: 'std-08', slNo: 8, registerNumber: '440ME25016', name: 'ROHITH BN', defaultPin: COMMON_STUDENT_PASSWORD, hasRegNumber: true, semester: 'III', branch: 'Mechanical', college: 'Adichunchanagiri Polytechnic' },
  { id: 'std-09', slNo: 9, registerNumber: '440ME25017', name: 'SUDARSHAN R', defaultPin: COMMON_STUDENT_PASSWORD, hasRegNumber: true, semester: 'III', branch: 'Mechanical', college: 'Adichunchanagiri Polytechnic' },
  { id: 'std-10', slNo: 10, registerNumber: '440ME25018', name: 'TAHANIYATH', defaultPin: COMMON_STUDENT_PASSWORD, hasRegNumber: true, semester: 'III', branch: 'Mechanical', college: 'Adichunchanagiri Polytechnic' },
  { id: 'std-11', slNo: 11, registerNumber: '440ME25019', name: 'TEJU. D.R', defaultPin: COMMON_STUDENT_PASSWORD, hasRegNumber: true, semester: 'III', branch: 'Mechanical', college: 'Adichunchanagiri Polytechnic' },
  { id: 'std-12', slNo: 12, registerNumber: '440ME25020', name: 'YASHWANTH A', defaultPin: COMMON_STUDENT_PASSWORD, hasRegNumber: true, semester: 'III', branch: 'Mechanical', college: 'Adichunchanagiri Polytechnic' },

  // 13 to 28: Students without Register Numbers (login directly using their name)
  { id: 'std-13', slNo: 13, registerNumber: '', name: 'ANOOP CA', defaultPin: COMMON_STUDENT_PASSWORD, hasRegNumber: false, semester: 'III', branch: 'Mechanical', college: 'Adichunchanagiri Polytechnic' },
  { id: 'std-14', slNo: 14, registerNumber: '', name: 'JEEVAN K J', defaultPin: COMMON_STUDENT_PASSWORD, hasRegNumber: false, semester: 'III', branch: 'Mechanical', college: 'Adichunchanagiri Polytechnic' },
  { id: 'std-15', slNo: 15, registerNumber: '', name: 'MD SAHAD K K', defaultPin: COMMON_STUDENT_PASSWORD, hasRegNumber: false, semester: 'III', branch: 'Mechanical', college: 'Adichunchanagiri Polytechnic' },
  { id: 'std-16', slNo: 16, registerNumber: '', name: 'PRAJWAL L', defaultPin: COMMON_STUDENT_PASSWORD, hasRegNumber: false, semester: 'III', branch: 'Mechanical', college: 'Adichunchanagiri Polytechnic' },
  { id: 'std-17', slNo: 17, registerNumber: '', name: 'SHARAN RAJ M U', defaultPin: COMMON_STUDENT_PASSWORD, hasRegNumber: false, semester: 'III', branch: 'Mechanical', college: 'Adichunchanagiri Polytechnic' },
  { id: 'std-18', slNo: 18, registerNumber: '', name: 'SHIVA KUMAR K.B', defaultPin: COMMON_STUDENT_PASSWORD, hasRegNumber: false, semester: 'III', branch: 'Mechanical', college: 'Adichunchanagiri Polytechnic' },
  { id: 'std-19', slNo: 19, registerNumber: '', name: 'SHREYAS H.J', defaultPin: COMMON_STUDENT_PASSWORD, hasRegNumber: false, semester: 'III', branch: 'Mechanical', college: 'Adichunchanagiri Polytechnic' },
  { id: 'std-20', slNo: 20, registerNumber: '', name: 'VARADARAJU. R.H', defaultPin: COMMON_STUDENT_PASSWORD, hasRegNumber: false, semester: 'III', branch: 'Mechanical', college: 'Adichunchanagiri Polytechnic' },
  { id: 'std-21', slNo: 21, registerNumber: '', name: 'VASANTHA KP', defaultPin: COMMON_STUDENT_PASSWORD, hasRegNumber: false, semester: 'III', branch: 'Mechanical', college: 'Adichunchanagiri Polytechnic' },
  { id: 'std-22', slNo: 22, registerNumber: '', name: 'VISHNU', defaultPin: COMMON_STUDENT_PASSWORD, hasRegNumber: false, semester: 'III', branch: 'Mechanical', college: 'Adichunchanagiri Polytechnic' },
  { id: 'std-23', slNo: 23, registerNumber: '', name: 'YASHAS B R', defaultPin: COMMON_STUDENT_PASSWORD, hasRegNumber: false, semester: 'III', branch: 'Mechanical', college: 'Adichunchanagiri Polytechnic' },
  { id: 'std-24', slNo: 24, registerNumber: '', name: 'BHUVANESH S N', defaultPin: COMMON_STUDENT_PASSWORD, hasRegNumber: false, semester: 'III', branch: 'Mechanical', college: 'Adichunchanagiri Polytechnic' },
  { id: 'std-25', slNo: 25, registerNumber: '', name: 'THARUN', defaultPin: COMMON_STUDENT_PASSWORD, hasRegNumber: false, semester: 'III', branch: 'Mechanical', college: 'Adichunchanagiri Polytechnic' },
  { id: 'std-26', slNo: 26, registerNumber: '', name: 'CHETHAN D P', defaultPin: COMMON_STUDENT_PASSWORD, hasRegNumber: false, semester: 'III', branch: 'Mechanical', college: 'Adichunchanagiri Polytechnic' },
  { id: 'std-27', slNo: 27, registerNumber: '', name: 'KEERTHI D D', defaultPin: COMMON_STUDENT_PASSWORD, hasRegNumber: false, semester: 'III', branch: 'Mechanical', college: 'Adichunchanagiri Polytechnic' },
  { id: 'std-28', slNo: 28, registerNumber: '', name: 'SANKETH Y M', defaultPin: COMMON_STUDENT_PASSWORD, hasRegNumber: false, semester: 'III', branch: 'Mechanical', college: 'Adichunchanagiri Polytechnic' }
];

// Backwards compatibility alias
export const DIPLOMA_MECH_30_STUDENTS = DIPLOMA_MECH_STUDENTS.map((s) => ({
  id: s.id,
  registerNumber: s.registerNumber || `ROLL-${s.slNo < 10 ? `0${s.slNo}` : s.slNo}`,
  name: s.name,
  defaultPin: s.defaultPin,
  activeStatus: true,
  semester: s.semester,
  branch: s.branch,
  college: s.college
}));
