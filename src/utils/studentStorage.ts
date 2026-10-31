import { StudentProgress } from '../types';

const ACTIVE_STUDENT_KEY = 'mechcode_active_student_id';
const PROFILES_LIST_KEY = 'mechcode_all_profiles_index';

export interface StoredStudentSummary {
  id: string;
  name: string;
  lastActive: string;
  completedLevelsCount: number;
  xp: number;
}

export function generateStudentId(): string {
  return `std_${Date.now().toString(36)}_${Math.random().toString(36).substring(2, 6)}`;
}

export function getAllStoredStudents(): StoredStudentSummary[] {
  try {
    const raw = localStorage.getItem(PROFILES_LIST_KEY);
    if (!raw) return [];
    return JSON.parse(raw);
  } catch {
    return [];
  }
}

export function saveProfilesList(list: StoredStudentSummary[]): void {
  try {
    localStorage.setItem(PROFILES_LIST_KEY, JSON.stringify(list));
  } catch (e) {
    console.error('Failed to save profiles list:', e);
  }
}

export function getActiveStudentId(): string | null {
  return localStorage.getItem(ACTIVE_STUDENT_KEY);
}

export function setActiveStudentId(id: string): void {
  localStorage.setItem(ACTIVE_STUDENT_KEY, id);
}

export function getStudentProfile(id: string): StudentProgress | null {
  try {
    const raw = localStorage.getItem(`mechcode_profile_${id}`);
    if (!raw) return null;
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

export function createNewStudent(name: string, usn: string = ''): StudentProgress {
  const trimmedName = name.trim() || 'ವಿದ್ಯಾರ್ಥಿ';
  const id = generateStudentId();
  
  const newProfile: StudentProgress = {
    name: trimmedName,
    usn: usn.trim() || 'MECH-2026',
    completedLevels: [], // Starts clean at Level 1
    stepProgress: {},
    modeProgress: {},
    xp: 0,
    unlockedBadges: []
  };

  // Save profile
  try {
    localStorage.setItem(`mechcode_profile_${id}`, JSON.stringify(newProfile));
    setActiveStudentId(id);

    // Update profiles index
    const currentList = getAllStoredStudents();
    const updatedList: StoredStudentSummary[] = [
      {
        id,
        name: trimmedName,
        lastActive: new Date().toISOString(),
        completedLevelsCount: 0,
        xp: 0
      },
      ...currentList.filter((s) => s.id !== id)
    ];
    saveProfilesList(updatedList);
  } catch (e) {
    console.error('Failed to create student profile:', e);
  }

  return newProfile;
}

export function saveStudentProfile(id: string, profile: StudentProgress): void {
  try {
    localStorage.setItem(`mechcode_profile_${id}`, JSON.stringify(profile));
    
    // Update summary in list
    const currentList = getAllStoredStudents();
    const updatedList = currentList.map((s) => {
      if (s.id === id) {
        return {
          ...s,
          name: profile.name,
          completedLevelsCount: profile.completedLevels.length,
          xp: profile.xp,
          lastActive: new Date().toISOString()
        };
      }
      return s;
    });
    saveProfilesList(updatedList);
  } catch (e) {
    console.error('Failed to save student profile:', e);
  }
}

export function deleteStudentProfile(id: string): void {
  try {
    localStorage.removeItem(`mechcode_profile_${id}`);
    const currentList = getAllStoredStudents().filter((s) => s.id !== id);
    saveProfilesList(currentList);
    
    if (getActiveStudentId() === id) {
      if (currentList.length > 0) {
        setActiveStudentId(currentList[0].id);
      } else {
        localStorage.removeItem(ACTIVE_STUDENT_KEY);
      }
    }
  } catch (e) {
    console.error('Failed to delete profile:', e);
  }
}
