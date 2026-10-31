import React from 'react';
import { X, Printer, Award, CheckCircle, ShieldCheck } from 'lucide-react';
import { Language } from '../types';

interface LabCertificateProps {
  isOpen: boolean;
  onClose: () => void;
  studentName: string;
  usn: string;
  completedCount: number;
  totalXp: number;
  lang: Language;
}

export const LabCertificate: React.FC<LabCertificateProps> = ({
  isOpen,
  onClose,
  studentName,
  usn,
  completedCount,
  totalXp,
  lang
}) => {
  if (!isOpen) return null;
  const isKn = lang === 'kn' || lang === 'bilingual';

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn print:p-0 print:bg-white">
      <div className="bg-slate-900 border border-slate-700 w-full max-w-3xl rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[95vh] print:border-none print:shadow-none print:max-w-none print:w-full print:h-auto">
        {/* Modal Controls - Hidden during print */}
        <div className="p-3 border-b border-slate-800 bg-slate-950 flex items-center justify-between print:hidden">
          <div className="flex items-center gap-2">
            <Award className="w-5 h-5 text-amber-400" />
            <span className="font-bold text-sm text-white">
              {isKn ? 'ಪ್ರಾಯೋಗಿಕ ದಾಖಲೆ ಪ್ರಮಾಣಪತ್ರ (Laboratory Record Certificate)' : 'Laboratory Record Certificate'}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs rounded-lg transition-colors cursor-pointer"
            >
              <Printer className="w-4 h-4" />
              {isKn ? 'ಪ್ರಿಂಟ್ / PDF ಡೌನ್‌ಲೋಡ್' : 'Print Certificate'}
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Certificate Paper Canvas */}
        <div className="p-6 md:p-10 overflow-y-auto bg-stone-50 text-slate-900 print:p-6 print:m-0 font-serif">
          {/* Ornate Double Border */}
          <div className="border-4 border-amber-800/80 p-6 md:p-8 rounded-lg relative bg-white shadow-inner">
            {/* Corner flourishes */}
            <div className="absolute top-2 left-2 text-amber-800 text-lg">❖</div>
            <div className="absolute top-2 right-2 text-amber-800 text-lg">❖</div>
            <div className="absolute bottom-2 left-2 text-amber-800 text-lg">❖</div>
            <div className="absolute bottom-2 right-2 text-amber-800 text-lg">❖</div>

            {/* Header matching Page 1 */}
            <div className="text-center space-y-1">
              <h1 className="text-xl md:text-2xl font-bold tracking-wide uppercase text-slate-950 font-serif">
                ADICHUNCHANAGIRI POLYTECHNIC
              </h1>
              <p className="text-xs italic text-slate-600">
                (Affiliated to the Board of Technical Examinations, Karnataka)
              </p>
              <p className="text-sm font-semibold tracking-wider text-amber-900 uppercase pt-1">
                Department of Mechanical Engineering
              </p>
              <div className="w-24 h-0.5 bg-amber-800 mx-auto my-2"></div>
              <h2 className="text-sm md:text-base font-bold text-slate-800 uppercase tracking-widest">
                PROGRAMMING CONCEPTS IN MECHANICAL ENGINEERING
              </h2>
              <h3 className="text-xs md:text-sm font-semibold text-slate-700 uppercase">
                LABORATORY RECORD MANUAL
              </h3>
            </div>

            {/* Certificate Title */}
            <div className="my-6 text-center">
              <span className="text-lg md:text-xl font-bold tracking-widest uppercase border-b-2 border-slate-900 pb-1">
                CERTIFICATE
              </span>
            </div>

            {/* Bona Fide Statement matching manual text */}
            <p className="text-xs md:text-sm leading-relaxed text-justify text-slate-800 indent-8 font-serif">
              This is to certify that this is a <strong>bona fide record</strong> of practical work done in the{' '}
              <em>Programming Concepts in Mechanical Engineering</em> laboratory by the student named below, of the{' '}
              <strong>III Semester Diploma in Mechanical Engineering</strong>, having successfully executed the{' '}
              <strong>{completedCount} prescribed practical programmes</strong> with an academic achievement of{' '}
              <strong>{totalXp} XP points</strong> during the academic year 2026–2027, at <strong>Adichunchanagiri Polytechnic</strong>, Chikkamagaluru.
            </p>

            {/* Student Particulars */}
            <div className="my-6 grid grid-cols-1 md:grid-cols-2 gap-3.5 text-xs md:text-sm font-sans border-y border-stone-200 py-4">
              <div>
                <span className="text-slate-500">Student Name:</span>{' '}
                <strong className="text-slate-900 text-base underline decoration-dotted">{studentName}</strong>
              </div>
              <div>
                <span className="text-slate-500">Register Number (USN):</span>{' '}
                <strong className="text-slate-900 underline decoration-dotted font-mono">{usn}</strong>
              </div>
              <div>
                <span className="text-slate-500">Semester / Branch:</span>{' '}
                <strong className="text-slate-900">III Semester, Diploma in Mechanical Engineering</strong>
              </div>
              <div>
                <span className="text-slate-500">Achievement Title:</span>{' '}
                <strong className="text-amber-700 font-bold">
                  🏆 Mechanical Coding Champion
                </strong>
              </div>
              <div>
                <span className="text-slate-500">Curriculum Compliance:</span>{' '}
                <strong className="text-emerald-700 flex items-center gap-1 inline-flex">
                  <CheckCircle className="w-4 h-4 inline" /> 13 Manual Practical Programmes Verified
                </strong>
              </div>
              <div>
                <span className="text-slate-500">Completion Date:</span>{' '}
                <strong className="text-slate-900 font-mono">
                  {new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
                </strong>
              </div>
            </div>

            {/* Signatures matching Page 1 */}
            <div className="mt-12 pt-6 grid grid-cols-3 text-center text-xs md:text-sm font-serif">
              <div>
                <div className="w-32 border-b border-slate-700 mx-auto mb-2"></div>
                <span className="font-semibold text-slate-800">Signature of Student</span>
              </div>
              <div>
                <div className="w-32 border-b border-slate-700 mx-auto mb-2"></div>
                <span className="font-semibold text-slate-800">Signature of Staff-in-Charge</span>
              </div>
              <div>
                <div className="w-32 border-b border-slate-700 mx-auto mb-2"></div>
                <span className="font-semibold text-slate-800">Signature of HOD</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
