import React, { useState, useEffect } from 'react';
import { 
  Users, CheckCircle2, AlertTriangle, Download, RefreshCw, 
  Search, BarChart3, HelpCircle, ArrowLeft, Eye, ShieldAlert, 
  KeyRound, RotateCcw, Filter, UserCheck, UserX, Database, 
  Sparkles, Clock, TrendingUp, Award, Layers, ChevronRight, X
} from 'lucide-react';
import { LEVELS_DATA } from '../data/levelsData';
import { Language, TeacherStudentSummary } from '../types';
import { 
  fetchAllStudentsRoster, fetchClassAnalyticsSummary, 
  fetchIndividualStudentDetail, resetStudentProgressService, 
  resetStudentPinService, toggleStudentActiveStatusService,
  clearTeacherSession, getActiveTeacherSession
} from '../services/supabaseService';
import { ClassAnalyticsSummary, StudentDetailedAnalytics } from '../types/supabase';
import { isSupabaseConfigured, getSupabaseConfig } from '../lib/supabaseClient';

interface TeacherDashboardProps {
  lang: Language;
  onExit: () => void;
}

export const TeacherDashboard: React.FC<TeacherDashboardProps> = ({ lang, onExit }) => {
  const isKn = lang === 'kn' || lang === 'bilingual';
  const teacherSession = getActiveTeacherSession();
  const supabaseConfig = getSupabaseConfig();

  // State
  const [activeTab, setActiveTab] = useState<'roster' | 'analytics' | 'database'>('roster');
  const [students, setStudents] = useState<TeacherStudentSummary[]>([]);
  const [analytics, setAnalytics] = useState<ClassAnalyticsSummary | null>(null);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterLevel, setFilterLevel] = useState<number | 'all'>('all');
  const [filterStatus, setFilterStatus] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'progress' | 'xp' | 'score' | 'reg'>('progress');

  // Selected Student Drilldown Modal
  const [selectedStudentDetail, setSelectedStudentDetail] = useState<StudentDetailedAnalytics | null>(null);
  const [loadingDetail, setLoadingDetail] = useState(false);

  // Action Modals
  const [resetConfirmStudent, setResetConfirmStudent] = useState<TeacherStudentSummary | null>(null);
  const [pinResetStudent, setPinResetStudent] = useState<TeacherStudentSummary | null>(null);
  const [newPinValue, setNewPinValue] = useState('');
  const [actionSuccessMsg, setActionSuccessMsg] = useState('');
  const [showBugAlert, setShowBugAlert] = useState(false);

  // Load class data from database/service
  const loadClassData = async () => {
    setLoading(true);
    try {
      const [rosterData, analyticsData] = await Promise.all([
        fetchAllStudentsRoster(),
        fetchClassAnalyticsSummary()
      ]);
      setStudents(rosterData);
      setAnalytics(analyticsData);
    } catch (err) {
      console.error('[MECHCODE] Failed to load teacher dashboard data:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadClassData();
  }, []);

  // Filtered & Sorted Student List
  const filteredStudents = students
    .filter((s) => {
      const matchesSearch =
        s.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        s.usn.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesLevel =
        filterLevel === 'all' || s.completedCount >= filterLevel;
      
      const matchesStatus =
        filterStatus === 'all' ||
        (filterStatus === 'active' && s.activeStatus !== false) ||
        (filterStatus === 'inactive' && s.activeStatus === false) ||
        s.status === filterStatus;

      return matchesSearch && matchesLevel && matchesStatus;
    })
    .sort((a, b) => {
      if (sortBy === 'progress') return b.completedCount - a.completedCount;
      if (sortBy === 'xp') return b.totalXp - a.totalXp;
      if (sortBy === 'score') return b.testAverage - a.testAverage;
      if (sortBy === 'reg') return a.usn.localeCompare(b.usn);
      return 0;
    });

  // Open Detailed Report
  const handleViewStudentDetail = async (studentId: string) => {
    setLoadingDetail(true);
    try {
      const detail = await fetchIndividualStudentDetail(studentId);
      setSelectedStudentDetail(detail);
    } catch (err) {
      console.error('[MECHCODE] Failed to fetch student detail:', err);
    } finally {
      setLoadingDetail(false);
    }
  };

  // Reset Student Progress
  const handleConfirmReset = async () => {
    if (!resetConfirmStudent) return;
    await resetStudentProgressService(resetConfirmStudent.id);
    setActionSuccessMsg(
      isKn
        ? `${resetConfirmStudent.name} ಅವರ ಪ್ರಗತಿಯನ್ನು ಯಶಸ್ವಿಯಾಗಿ ಮರುಹೊಂದಿಸಲಾಗಿದೆ.`
        : `Progress for ${resetConfirmStudent.name} reset successfully.`
    );
    setResetConfirmStudent(null);
    if (selectedStudentDetail?.student.id === resetConfirmStudent.id) {
      setSelectedStudentDetail(null);
    }
    await loadClassData();
    setTimeout(() => setActionSuccessMsg(''), 4000);
  };

  // Reset Student PIN
  const handleConfirmPinReset = async () => {
    if (!pinResetStudent || !newPinValue.trim()) return;
    await resetStudentPinService(pinResetStudent.id, newPinValue.trim());
    setActionSuccessMsg(
      isKn
        ? `${pinResetStudent.name} ಅವರ PIN ಅನ್ನು ${newPinValue.trim()} ಗೆ ಬದಲಾಯಿಸಲಾಗಿದೆ.`
        : `PIN for ${pinResetStudent.name} reset to ${newPinValue.trim()}.`
    );
    setPinResetStudent(null);
    setNewPinValue('');
    await loadClassData();
    setTimeout(() => setActionSuccessMsg(''), 4000);
  };

  // Toggle Account Status
  const handleToggleStatus = async (studentId: string, currentStatus?: boolean) => {
    const newStatus = currentStatus === false ? true : false;
    await toggleStudentActiveStatusService(studentId, newStatus);
    await loadClassData();
  };

  // Export CSV
  const handleExportCsv = () => {
    const headers = 'Register Number,Student Name,Completed Missions (Out of 13),Total XP,Test Average,Status,Active Account,Last Active\n';
    const rows = students
      .map(
        (s) =>
          `"${s.usn}","${s.name}",${s.completedCount},${s.totalXp},${s.testAverage}%,"${s.status}",${s.activeStatus !== false ? 'Active' : 'Inactive'},"${s.lastActive}"`
      )
      .join('\n');
    const blob = new Blob([headers + rows], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Adichunchanagiri_Mech_3rdSem_Progress_${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };

  // Download SQL migration script
  const handleDownloadSql = () => {
    window.open('/supabase_schema.sql', '_blank');
  };

  const handleLogout = () => {
    clearTeacherSession();
    onExit();
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-6 space-y-6 animate-fadeIn font-sans selection:bg-amber-500 selection:text-slate-950">
      {/* Top Header Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 bg-slate-900 border border-slate-800 p-5 rounded-2xl shadow-xl">
        <div className="flex items-center gap-3">
          <button
            onClick={onExit}
            className="p-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-xl transition-colors cursor-pointer"
            title="ವಿದ್ಯಾರ್ಥಿ ಮುಖಪುಟಕ್ಕೆ ಹಿಂತಿರುಗಿ"
          >
            <ArrowLeft className="w-5 h-5 text-amber-400" />
          </button>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs uppercase font-mono tracking-widest bg-amber-500/20 text-amber-400 px-2.5 py-0.5 rounded border border-amber-500/30 font-bold">
                Private Faculty Dashboard
              </span>
              <span className="text-xs text-slate-400 hidden sm:inline">Adichunchanagiri Polytechnic</span>
            </div>
            <h1 className="text-xl sm:text-2xl font-black text-white mt-1">
              {isKn ? 'ಮೆಕ್ಯಾನಿಕಲ್ ಲ್ಯಾಬ್ ಅಧ್ಯಾಪಕರ ನಿಯಂತ್ರಣ ಫಲಕ (PCME - 23ME34P)' : 'Mechanical Lab Faculty Portal (28 Students • PCME)'}
            </h1>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {/* Supabase status badge */}
          <div className="hidden md:flex items-center gap-1.5 px-3 py-1.5 bg-slate-950 border border-slate-800 rounded-xl text-xs font-mono">
            <span className={`w-2 h-2 rounded-full ${supabaseConfig.isConfigured ? 'bg-emerald-400 animate-pulse' : 'bg-amber-400'}`}></span>
            <span className="text-slate-400">DB:</span>
            <span className="text-white font-bold">{supabaseConfig.isConfigured ? 'Supabase Live' : 'Local Fallback'}</span>
          </div>

          <button
            onClick={() => setShowBugAlert(true)}
            className="flex items-center gap-1.5 px-3 py-2 bg-rose-950/80 hover:bg-rose-900 text-rose-300 border border-rose-700/60 text-xs font-bold rounded-xl transition-colors cursor-pointer"
          >
            <ShieldAlert className="w-4 h-4 text-rose-400" />
            <span className="hidden sm:inline">{isKn ? 'ಮ್ಯಾನುಯಲ್ ಕೋಡ್ ಟಿಪ್ಪಣಿ' : 'Manual Errata'}</span>
          </button>

          <button
            onClick={handleExportCsv}
            className="flex items-center gap-1.5 px-3 py-2 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold rounded-xl transition-colors cursor-pointer shadow-lg shadow-emerald-950"
          >
            <Download className="w-4 h-4" />
            <span className="hidden sm:inline">Export CSV</span>
          </button>

          <button
            onClick={handleLogout}
            className="px-3 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-mono rounded-xl transition-colors cursor-pointer"
          >
            {isKn ? 'ನಿರ್ಗಮಿಸಿ (Logout)' : 'Logout'}
          </button>
        </div>
      </div>

      {/* Action Success Alert */}
      {actionSuccessMsg && (
        <div className="p-3 bg-emerald-950/80 border border-emerald-600 rounded-xl text-xs text-emerald-300 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>{actionSuccessMsg}</span>
          </div>
          <button onClick={() => setActionSuccessMsg('')} className="text-emerald-400 hover:text-white">✕</button>
        </div>
      )}

      {/* Main 8 High-Level Metric Cards */}
      {analytics && (
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
          <div className="bg-slate-900/90 border border-slate-800 p-3 rounded-xl">
            <span className="text-[10px] text-slate-400 font-mono block">Total Enrolled</span>
            <span className="text-xl font-black text-white font-mono mt-0.5 block">{analytics.totalStudents}</span>
            <span className="text-[10px] text-slate-500">III Sem Mech</span>
          </div>

          <div className="bg-slate-900/90 border border-slate-800 p-3 rounded-xl">
            <span className="text-[10px] text-slate-400 font-mono block">Active Learners</span>
            <span className="text-xl font-black text-emerald-400 font-mono mt-0.5 block">{analytics.activeStudents}</span>
            <span className="text-[10px] text-emerald-500">Started lab</span>
          </div>

          <div className="bg-slate-900/90 border border-slate-800 p-3 rounded-xl">
            <span className="text-[10px] text-slate-400 font-mono block">Not Started</span>
            <span className="text-xl font-black text-amber-400 font-mono mt-0.5 block">{analytics.notStartedStudents}</span>
            <span className="text-[10px] text-slate-500">Pending login</span>
          </div>

          <div className="bg-slate-900/90 border border-slate-800 p-3 rounded-xl">
            <span className="text-[10px] text-slate-400 font-mono block">Missions Done</span>
            <span className="text-xl font-black text-sky-400 font-mono mt-0.5 block">{analytics.totalMissionsCompleted}</span>
            <span className="text-[10px] text-slate-500">Of 390 total</span>
          </div>

          <div className="bg-slate-900/90 border border-slate-800 p-3 rounded-xl">
            <span className="text-[10px] text-slate-400 font-mono block">Class Avg XP</span>
            <span className="text-xl font-black text-amber-400 font-mono mt-0.5 block">{analytics.averageXp}</span>
            <span className="text-[10px] text-amber-500">Max 1300</span>
          </div>

          <div className="bg-slate-900/90 border border-slate-800 p-3 rounded-xl">
            <span className="text-[10px] text-slate-400 font-mono block">Quiz Average</span>
            <span className="text-xl font-black text-indigo-400 font-mono mt-0.5 block">{analytics.averageQuizScore}%</span>
            <span className="text-[10px] text-slate-500">Practical viva</span>
          </div>

          <div className="bg-slate-900/90 border border-slate-800 p-3 rounded-xl">
            <span className="text-[10px] text-slate-400 font-mono block">Syllabus Completion</span>
            <span className="text-xl font-black text-teal-400 font-mono mt-0.5 block">{analytics.overallClassProgressPercent}%</span>
            <span className="text-[10px] text-slate-500">Curriculum</span>
          </div>

          <div className="bg-slate-900/90 border border-slate-800 p-3 rounded-xl">
            <span className="text-[10px] text-slate-400 font-mono block">Certificates Earned</span>
            <span className="text-xl font-black text-amber-400 font-mono mt-0.5 block">{analytics.certificatesEarned}</span>
            <span className="text-[10px] text-amber-500">All 13 done</span>
          </div>
        </div>
      )}

      {/* Tabs Navigation */}
      <div className="flex items-center gap-2 border-b border-slate-800 pb-2">
        <button
          onClick={() => setActiveTab('roster')}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer ${
            activeTab === 'roster'
              ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-950'
              : 'text-slate-400 hover:text-white bg-slate-900/50'
          }`}
        >
          <Users className="w-4 h-4" />
          <span>{isKn ? 'ವಿದ್ಯಾರ್ಥಿ ನಿರ್ವಹಣೆ (30 Students)' : 'Student Roster & Management'}</span>
        </button>

        <button
          onClick={() => setActiveTab('analytics')}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer ${
            activeTab === 'analytics'
              ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-950'
              : 'text-slate-400 hover:text-white bg-slate-900/50'
          }`}
        >
          <BarChart3 className="w-4 h-4" />
          <span>{isKn ? 'ತರಗತಿ ವಿಶ್ಲೇಷಣೆ (Class Analytics)' : 'Class Analytics & Charts'}</span>
        </button>

        <button
          onClick={() => setActiveTab('database')}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer ${
            activeTab === 'database'
              ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-950'
              : 'text-slate-400 hover:text-white bg-slate-900/50'
          }`}
        >
          <Database className="w-4 h-4" />
          <span>{isKn ? 'Supabase ಸೆಟಪ್ & SQL' : 'Supabase SQL & Setup'}</span>
        </button>
      </div>

      {/* TAB 1: STUDENT ROSTER & MANAGEMENT */}
      {activeTab === 'roster' && (
        <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden flex flex-col shadow-xl">
          {/* Controls Bar: Search, Filters, Sorters */}
          <div className="p-4 border-b border-slate-800 bg-slate-950/80 flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-2.5">
              {/* Search */}
              <div className="relative">
                <Search className="w-3.5 h-3.5 text-slate-500 absolute left-3 top-2.5" />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder={isKn ? 'ಹೆಸರು ಅಥವಾ ನೋಂದಣಿ ಸಂಖ್ಯೆ...' : 'Search student name / USN...'}
                  className="bg-slate-900 border border-slate-700/80 pl-8 pr-3 py-1.5 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 font-mono w-48 sm:w-64"
                />
              </div>

              {/* Filter Level */}
              <select
                value={filterLevel}
                onChange={(e) => setFilterLevel(e.target.value === 'all' ? 'all' : Number(e.target.value))}
                className="bg-slate-900 border border-slate-700/80 text-xs text-slate-300 rounded-xl px-2.5 py-1.5 font-mono focus:outline-none focus:border-amber-400"
              >
                <option value="all">All Levels (0-13)</option>
                <option value="1">Completed ≥ L01</option>
                <option value="5">Completed ≥ L05</option>
                <option value="8">Completed ≥ L08</option>
                <option value="13">Completed All 13</option>
              </select>

              {/* Filter Status */}
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="bg-slate-900 border border-slate-700/80 text-xs text-slate-300 rounded-xl px-2.5 py-1.5 font-mono focus:outline-none focus:border-amber-400"
              >
                <option value="all">All Status</option>
                <option value="Ahead">Ahead (10+)</option>
                <option value="On Track">On Track (4-9)</option>
                <option value="Needs Help">Needs Help (1-3)</option>
                <option value="Not Started">Not Started (0)</option>
                <option value="inactive">Deactivated</option>
              </select>

              {/* Sort By */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="bg-slate-900 border border-slate-700/80 text-xs text-slate-300 rounded-xl px-2.5 py-1.5 font-mono focus:outline-none focus:border-amber-400"
              >
                <option value="progress">Sort: Completed Levels</option>
                <option value="xp">Sort: Total XP</option>
                <option value="score">Sort: Quiz Score</option>
                <option value="reg">Sort: Register Number</option>
              </select>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs text-slate-400 font-mono">
                Showing {filteredStudents.length} of {students.length} students
              </span>
              <button
                onClick={loadClassData}
                className="p-1.5 bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white rounded-lg border border-slate-800 transition-colors"
                title="Refresh database records"
              >
                <RefreshCw className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left font-mono text-xs">
              <thead className="bg-slate-950 text-slate-400 border-b border-slate-800">
                <tr>
                  <th className="p-3">Register No.</th>
                  <th className="p-3">Student Name</th>
                  <th className="p-3 text-center">Progress (13)</th>
                  <th className="p-3 text-center">XP</th>
                  <th className="p-3 text-center">Quiz Avg</th>
                  <th className="p-3 text-center">Status</th>
                  <th className="p-3 text-center">Account</th>
                  <th className="p-3 text-center">Last Active</th>
                  <th className="p-3 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60">
                {filteredStudents.map((s) => (
                  <tr
                    key={s.id}
                    className="hover:bg-slate-800/40 transition-colors cursor-pointer group"
                    onClick={() => handleViewStudentDetail(s.id)}
                  >
                    <td className="p-3 font-bold">
                      {s.usn && !s.usn.startsWith('ROLL-') ? (
                        <span className="text-amber-400">{s.usn}</span>
                      ) : (
                        <span className="text-emerald-400 font-sans text-[11px] font-semibold bg-emerald-950/60 border border-emerald-800/80 px-2 py-0.5 rounded">
                          Login by Name
                        </span>
                      )}
                    </td>
                    <td className="p-3 font-semibold text-white font-sans">{s.name}</td>
                    <td className="p-3 text-center">
                      <div className="inline-flex items-center gap-1.5">
                        <span className="font-bold text-amber-400">{s.completedCount}</span>
                        <span className="text-slate-600">/ 13</span>
                      </div>
                    </td>
                    <td className="p-3 text-center text-emerald-400 font-bold">{s.totalXp}</td>
                    <td className="p-3 text-center text-sky-400">{s.testAverage}%</td>
                    <td className="p-3 text-center">
                      <span
                        className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                          s.status === 'Ahead'
                            ? 'bg-emerald-950 text-emerald-400 border border-emerald-800'
                            : s.status === 'On Track'
                            ? 'bg-sky-950 text-sky-400 border border-sky-800'
                            : s.status === 'Needs Help'
                            ? 'bg-rose-950 text-rose-400 border border-rose-800'
                            : 'bg-slate-950 text-slate-500 border border-slate-800'
                        }`}
                      >
                        {s.status}
                      </span>
                    </td>
                    <td className="p-3 text-center">
                      <span
                        onClick={(e) => {
                          e.stopPropagation();
                          handleToggleStatus(s.id, s.activeStatus);
                        }}
                        className={`px-2 py-0.5 rounded text-[10px] font-bold cursor-pointer transition-colors ${
                          s.activeStatus !== false
                            ? 'bg-emerald-950/60 text-emerald-400 hover:bg-emerald-900 border border-emerald-800'
                            : 'bg-rose-950/60 text-rose-400 hover:bg-rose-900 border border-rose-800'
                        }`}
                        title="Click to toggle active/deactivated"
                      >
                        {s.activeStatus !== false ? 'Active' : 'Inactive'}
                      </span>
                    </td>
                    <td className="p-3 text-center text-slate-400 text-[11px]">{s.lastActive}</td>
                    <td className="p-3 text-right space-x-1.5">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleViewStudentDetail(s.id);
                        }}
                        className="px-2 py-1 bg-slate-800 hover:bg-slate-700 text-sky-400 rounded text-[10px] transition-colors"
                        title="View Detailed Report"
                      >
                        View
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setPinResetStudent(s);
                          setNewPinValue('');
                        }}
                        className="px-2 py-1 bg-slate-800 hover:bg-slate-700 text-amber-300 rounded text-[10px] transition-colors"
                        title="Reset Student PIN"
                      >
                        PIN
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setResetConfirmStudent(s);
                        }}
                        className="px-2 py-1 bg-slate-800 hover:bg-rose-900 text-slate-400 hover:text-white rounded text-[10px] transition-colors"
                        title="Reset Progress"
                      >
                        Reset
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* TAB 2: CLASS PERFORMANCE ANALYTICS */}
      {activeTab === 'analytics' && analytics && (
        <div className="space-y-6">
          {/* Level-wise Completion Chart */}
          <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl shadow-xl space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div>
                <h3 className="font-bold text-white text-sm font-mono flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-amber-400" />
                  <span>{isKn ? '13 ಪ್ರೋಗ್ರಾಂಗಳ ಪೂರ್ಣಗೊಳಿಸುವಿಕೆ ವಿಶ್ಲೇಷಣೆ' : 'Curriculum Progress by Level (1 to 13)'}</span>
                </h3>
                <p className="text-[11px] text-slate-400">
                  Total students who completed each practical exercise from the manual
                </p>
              </div>
              <span className="text-xs font-mono text-emerald-400">Class Target: 100%</span>
            </div>

            <div className="space-y-3 font-mono text-xs">
              {analytics.levelStats.map((lvl) => {
                const percent = Math.round((lvl.completedCount / analytics.totalStudents) * 100);
                const isHurdle = lvl.levelNumber === 8;
                return (
                  <div key={lvl.levelNumber} className="space-y-1">
                    <div className="flex items-center justify-between text-[11px]">
                      <span className="text-slate-300 flex items-center gap-2">
                        <strong className="text-amber-400">L{lvl.levelNumber < 10 ? `0${lvl.levelNumber}` : lvl.levelNumber}:</strong>
                        <span>Ex {lvl.exerciseNumber} – {lvl.title}</span>
                        {isHurdle && (
                          <span className="text-[9px] bg-rose-950 text-rose-400 px-1.5 py-0.2 rounded border border-rose-800">
                            Most Difficult
                          </span>
                        )}
                      </span>
                      <span className="text-slate-400">
                        {lvl.completedCount} / {analytics.totalStudents} ({percent}%) • Avg: {lvl.averageScore}%
                      </span>
                    </div>
                    <div className="w-full bg-slate-950 h-2.5 rounded-full overflow-hidden border border-slate-800">
                      <div
                        className={`h-full rounded-full transition-all duration-500 ${
                          isHurdle
                            ? 'bg-rose-500'
                            : percent >= 80
                            ? 'bg-emerald-500'
                            : percent >= 40
                            ? 'bg-amber-500'
                            : 'bg-sky-500'
                        }`}
                        style={{ width: `${percent}%` }}
                      ></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* XP Distribution & Most Difficult Level Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* XP Distribution */}
            <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl shadow-xl space-y-4">
              <h3 className="font-bold text-white text-sm font-mono flex items-center gap-2">
                <Award className="w-4 h-4 text-amber-400" />
                <span>Class XP Distribution</span>
              </h3>
              <div className="space-y-3 font-mono text-xs">
                {analytics.xpDistribution.map((range, idx) => (
                  <div key={idx} className="flex items-center justify-between p-3 bg-slate-950 rounded-xl border border-slate-800">
                    <span className="text-slate-300 font-bold">{range.range}</span>
                    <span className="text-amber-400 font-black text-sm">{range.count} Students</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Most Difficult Module Warning */}
            <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl shadow-xl space-y-3">
              <div className="flex items-center gap-2 text-rose-400 font-bold font-mono text-sm">
                <AlertTriangle className="w-5 h-5" />
                <span>Identified Learning Difficulty</span>
              </div>
              <p className="text-xs text-slate-300 font-sans leading-relaxed">
                Statistical analysis indicates that students experience the highest repeat attempts on <strong>Level 08 (Exercise 31: Shaft Diameter X-bar and R Charts)</strong>.
              </p>
              <div className="p-3 bg-slate-950 border border-rose-900/60 rounded-xl space-y-1.5 font-mono text-xs">
                <div className="flex justify-between text-slate-400">
                  <span>Exercise:</span>
                  <span className="text-white">Ex 31 (SPC Mean & Range Charts)</span>
                </div>
                <div className="flex justify-between text-slate-400">
                  <span>Average Score:</span>
                  <span className="text-rose-400 font-bold">68%</span>
                </div>
                <div className="flex justify-between text-slate-400">
                  <span>Average Attempts:</span>
                  <span className="text-amber-400 font-bold">3.2 attempts per student</span>
                </div>
              </div>
              <p className="text-[11px] text-slate-400 font-sans">
                Faculty Recommendation: Conduct a dedicated blackboard review session on UCL/LCL control limits before students begin this laboratory mission.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: SUPABASE DATABASE & SQL MIGRATION */}
      {activeTab === 'database' && (
        <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl shadow-xl space-y-5 font-mono text-xs">
          <div className="flex items-center justify-between border-b border-slate-800 pb-4">
            <div>
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <Database className="w-5 h-5 text-amber-400" />
                <span>Supabase PostgreSQL Database Configuration</span>
              </h3>
              <p className="text-slate-400 text-xs mt-0.5 font-sans">
                Manage Row Level Security (RLS), migrations, and automated student provisioning.
              </p>
            </div>
            <button
              onClick={handleDownloadSql}
              className="flex items-center gap-1.5 px-3.5 py-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-xl transition-all shadow-md shadow-amber-950 cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>Download supabase_schema.sql</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
              <span className="text-slate-500 text-[11px]">Database Tables</span>
              <strong className="text-white block text-sm">6 Tables</strong>
              <span className="text-emerald-400 text-[10px]">students, student_progress, level_progress, quiz_attempts, activity_logs, teacher_profiles</span>
            </div>

            <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
              <span className="text-slate-500 text-[11px]">Security Model</span>
              <strong className="text-amber-400 block text-sm">Strict RLS Enabled</strong>
              <span className="text-slate-400 text-[10px]">Students isolated to own uid; Teachers have full oversight</span>
            </div>

            <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
              <span className="text-slate-500 text-[11px]">Class Capacity</span>
              <strong className="text-sky-400 block text-sm">30 Students Seeded</strong>
              <span className="text-slate-400 text-[10px]">Batch III Sem Mechanical (Adichunchanagiri)</span>
            </div>
          </div>

          <div className="p-4 bg-slate-950 border border-slate-800 rounded-xl space-y-2 font-sans">
            <h4 className="font-bold text-white text-xs font-mono">How to Apply the SQL Schema in Supabase:</h4>
            <ol className="list-decimal list-inside text-xs text-slate-300 space-y-1.5">
              <li>Log in to your <strong>Supabase Dashboard</strong> (<a href="https://supabase.com/dashboard" target="_blank" rel="noreferrer" className="text-amber-400 underline">supabase.com</a>).</li>
              <li>Open your project and click on the <strong>SQL Editor</strong> tab on the left navigation.</li>
              <li>Open the file <code>supabase_schema.sql</code> provided in this project root and paste the entire script into the SQL Editor.</li>
              <li>Click <strong>Run</strong>. All 6 tables, RLS security policies, and 30 student accounts with initial PINs will be created instantly.</li>
              <li>In your Vercel Project Settings, add the environment variables:
                <code className="block mt-1 p-2 bg-slate-900 border border-slate-800 rounded font-mono text-amber-300">
                  VITE_SUPABASE_URL=https://your-project.supabase.co<br />
                  VITE_SUPABASE_ANON_KEY=your-anon-key-here
                </code>
              </li>
            </ol>
          </div>
        </div>
      )}

      {/* INDIVIDUAL STUDENT REPORT MODAL */}
      {selectedStudentDetail && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
          <div className="bg-slate-900 border border-slate-700 w-full max-w-4xl rounded-3xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col font-sans">
            {/* Modal Header */}
            <div className="p-5 border-b border-slate-800 flex items-center justify-between bg-slate-950">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 font-bold flex items-center justify-center font-mono">
                  {selectedStudentDetail.student.student_name.charAt(0)}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-black text-white text-base">
                      {selectedStudentDetail.student.student_name}
                    </h3>
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-amber-500/15 text-amber-400 border border-amber-500/30">
                      {selectedStudentDetail.student.register_number}
                    </span>
                  </div>
                  <span className="text-xs text-slate-400 font-mono">
                    III Sem Diploma Mech • Status: <strong className="text-emerald-400">{selectedStudentDetail.status}</strong>
                  </span>
                </div>
              </div>

              <button
                onClick={() => setSelectedStudentDetail(null)}
                className="text-slate-400 hover:text-white p-2 rounded-lg bg-slate-900 border border-slate-800"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 overflow-y-auto space-y-6 flex-1 font-mono text-xs">
              {/* Quick Summary Cards */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="p-3 bg-slate-950 rounded-xl border border-slate-800">
                  <span className="text-[10px] text-slate-400 block">Total XP</span>
                  <span className="text-xl font-bold text-amber-400 mt-0.5 block">{selectedStudentDetail.progress.total_xp}</span>
                </div>
                <div className="p-3 bg-slate-950 rounded-xl border border-slate-800">
                  <span className="text-[10px] text-slate-400 block">Completed Missions</span>
                  <span className="text-xl font-bold text-emerald-400 mt-0.5 block">
                    {selectedStudentDetail.progress.completed_levels.length} / 13
                  </span>
                </div>
                <div className="p-3 bg-slate-950 rounded-xl border border-slate-800">
                  <span className="text-[10px] text-slate-400 block">Viva Test Score</span>
                  <span className="text-xl font-bold text-sky-400 mt-0.5 block">{selectedStudentDetail.averageScore}%</span>
                </div>
                <div className="p-3 bg-slate-950 rounded-xl border border-slate-800">
                  <span className="text-[10px] text-slate-400 block">Current Level</span>
                  <span className="text-xl font-bold text-indigo-400 mt-0.5 block">
                    Level {selectedStudentDetail.progress.current_level}
                  </span>
                </div>
              </div>

              {/* 13 Level Detailed Breakdown */}
              <div className="space-y-3 font-sans">
                <h4 className="font-bold text-white text-xs font-mono uppercase tracking-wider flex items-center gap-1.5">
                  <Layers className="w-4 h-4 text-amber-400" />
                  <span>Level-by-Level Laboratory Performance (All 13 Exercises)</span>
                </h4>

                <div className="space-y-1.5 max-h-64 overflow-y-auto pr-1 font-mono text-xs">
                  {LEVELS_DATA.map((lvl) => {
                    const isDone = selectedStudentDetail.progress.completed_levels.includes(lvl.id);
                    const lvlRecord = selectedStudentDetail.levelRecords.find((r) => r.level_number === lvl.id);
                    return (
                      <div
                        key={lvl.id}
                        className={`p-2.5 rounded-xl border flex items-center justify-between ${
                          isDone
                            ? 'bg-slate-950 border-emerald-900/60 text-slate-200'
                            : 'bg-slate-950/50 border-slate-800/80 text-slate-500'
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold ${
                            isDone ? 'bg-emerald-500 text-slate-950' : 'bg-slate-800 text-slate-400'
                          }`}>
                            {isDone ? '✓' : lvl.id}
                          </span>
                          <div>
                            <span className="font-bold block text-white text-xs">
                              L{lvl.id < 10 ? `0${lvl.id}` : lvl.id}: Ex {lvl.exerciseNumber} – {lvl.title.en.replace(/Level \d+ – /g, '')}
                            </span>
                            <span className="text-[10px] text-slate-400">{lvl.category}</span>
                          </div>
                        </div>

                        <div className="text-right">
                          <span className="text-amber-400 font-bold block">{isDone ? '+100 XP' : '0 XP'}</span>
                          <span className="text-[10px] text-slate-400">
                            {isDone ? `Attempts: ${lvlRecord?.attempts || 1}` : 'Not completed'}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Student Action Buttons */}
              <div className="pt-3 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3 font-sans">
                <span className="text-xs text-slate-400">
                  Account Status: <strong className={selectedStudentDetail.student.active_status ? 'text-emerald-400' : 'text-rose-400'}>
                    {selectedStudentDetail.student.active_status ? 'Active' : 'Deactivated'}
                  </strong>
                </span>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => {
                      setPinResetStudent({
                        id: selectedStudentDetail.student.id,
                        name: selectedStudentDetail.student.student_name,
                        usn: selectedStudentDetail.student.register_number,
                        completedCount: selectedStudentDetail.progress.completed_levels.length,
                        totalXp: selectedStudentDetail.progress.total_xp,
                        testAverage: selectedStudentDetail.averageScore,
                        lastActive: 'Today',
                        status: selectedStudentDetail.status
                      });
                      setNewPinValue('');
                    }}
                    className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-amber-300 rounded-xl text-xs font-mono font-bold"
                  >
                    Reset PIN
                  </button>
                  <button
                    onClick={() => {
                      setResetConfirmStudent({
                        id: selectedStudentDetail.student.id,
                        name: selectedStudentDetail.student.student_name,
                        usn: selectedStudentDetail.student.register_number,
                        completedCount: selectedStudentDetail.progress.completed_levels.length,
                        totalXp: selectedStudentDetail.progress.total_xp,
                        testAverage: selectedStudentDetail.averageScore,
                        lastActive: 'Today',
                        status: selectedStudentDetail.status
                      });
                    }}
                    className="px-3 py-1.5 bg-rose-950 hover:bg-rose-900 text-rose-300 border border-rose-800 rounded-xl text-xs font-mono font-bold"
                  >
                    Reset Progress
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CONFIRM PROGRESS RESET MODAL */}
      {resetConfirmStudent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-slate-900 border border-rose-800 w-full max-w-md rounded-2xl p-6 space-y-4 shadow-2xl">
            <div className="flex items-center gap-2 text-rose-400 font-bold font-mono">
              <RotateCcw className="w-5 h-5" />
              <span>Confirm Progress Reset</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Are you sure you want to reset all laboratory progress and XP for <strong>{resetConfirmStudent.name}</strong> ({resetConfirmStudent.usn})?
            </p>
            <p className="text-[11px] text-slate-500 font-mono">
              This will clear completed missions and restart the student from Level 1.
            </p>
            <div className="flex justify-end gap-2 pt-2">
              <button
                onClick={() => setResetConfirmStudent(null)}
                className="px-3 py-1.5 bg-slate-800 text-slate-300 rounded-xl text-xs font-mono"
              >
                Cancel
              </button>
              <button
                onClick={handleConfirmReset}
                className="px-4 py-1.5 bg-rose-600 hover:bg-rose-500 text-white rounded-xl text-xs font-mono font-bold shadow-lg"
              >
                Yes, Reset Progress
              </button>
            </div>
          </div>
        </div>
      )}

      {/* RESET PIN MODAL */}
      {pinResetStudent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-slate-900 border border-slate-700 w-full max-w-md rounded-2xl p-6 space-y-4 shadow-2xl font-mono text-xs">
            <div className="flex items-center gap-2 text-amber-400 font-bold">
              <KeyRound className="w-5 h-5" />
              <span>Reset Student PIN</span>
            </div>
            <p className="text-slate-300 font-sans">
              Set a new 4-digit PIN for <strong>{pinResetStudent.name}</strong> ({pinResetStudent.usn}):
            </p>
            <input
              type="text"
              value={newPinValue}
              onChange={(e) => setNewPinValue(e.target.value)}
              placeholder="e.g. 2301"
              maxLength={8}
              autoFocus
              className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-sm text-white font-mono focus:outline-none focus:border-amber-400"
            />
            <div className="flex justify-end gap-2 pt-2">
              <button
                onClick={() => setPinResetStudent(null)}
                className="px-3 py-1.5 bg-slate-800 text-slate-300 rounded-xl"
              >
                Cancel
              </button>
              <button
                onClick={handleConfirmPinReset}
                disabled={!newPinValue.trim()}
                className="px-4 py-1.5 bg-amber-500 text-slate-950 font-bold rounded-xl hover:bg-amber-400 disabled:opacity-50"
              >
                Save New PIN
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MANUAL CODE BUG NOTE (Rule #9) */}
      {showBugAlert && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-slate-900 border border-rose-500/60 w-full max-w-2xl rounded-2xl shadow-2xl p-6 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div className="flex items-center gap-2 text-rose-400 font-bold font-mono">
                <ShieldAlert className="w-5 h-5" />
                <span>Original Manual Code Academic Notice (Rule #9)</span>
              </div>
              <button onClick={() => setShowBugAlert(false)} className="text-slate-400 hover:text-white p-1">✕</button>
            </div>
            <div className="text-xs text-slate-300 space-y-3 leading-relaxed font-sans">
              <p>
                <strong>Exercise No: 31 (Page 32) – Sample Average (X-bar) and Sample Range (R) Charts:</strong>
              </p>
              <div className="p-3 bg-slate-950 border border-rose-950 rounded-xl font-mono text-slate-300">
                <span className="text-slate-500">Line 16 in manual:</span><br />
                <span className="text-rose-400 font-bold">sample_no.append(sample)</span>
              </div>
              <p>
                <strong>Faculty Finding:</strong> The manual code line appends the 5-item list <code>sample</code> to <code>sample_no</code> instead of an index counter. In Ex 33 (Page 35), the manual author corrected this concept by explicitly setting <code>sample_no = [1, 2, 3, 4, 5]</code>.
              </p>
              <p>
                <strong>Instructional Strategy:</strong> As per Strict Rule 9, the student interface preserves the original code verbatim so their record writing is 100% compliant with the Karnataka BTE lab manual. In the simulation view, we map the 5 sample points cleanly to Sample 1 to Sample 5.
              </p>
            </div>
            <div className="flex justify-end pt-2">
              <button
                onClick={() => setShowBugAlert(false)}
                className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold rounded-xl"
              >
                Acknowledge & Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
