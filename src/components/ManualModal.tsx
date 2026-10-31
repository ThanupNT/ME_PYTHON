import React from 'react';
import { X, BookOpen, ExternalLink, CheckCircle, FileText, Info } from 'lucide-react';
import { Language } from '../types';

interface ManualModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
}

export const ManualModal: React.FC<ManualModalProps> = ({ isOpen, onClose, lang }) => {
  if (!isOpen) return null;
  const isKn = lang === 'kn' || lang === 'bilingual';

  const exercises = [
    { no: 23, title: 'Read Data from a CSV File and Perform Basic Operations', week: 'Week 6: File Handling' },
    { no: 24, title: 'Car Class with Attributes and Methods', week: 'Week 7: OOP' },
    { no: 25, title: 'Inheritance with Base Class Animal and Derived Classes Dog and Cat', week: 'Week 7: OOP' },
    { no: 27, title: 'Bank Class Supporting Deposit, Withdrawal and Balance Inquiry', week: 'Week 7: OOP' },
    { no: 28, title: 'Controlling DC Motors Using L298N Motor Driver with Raspberry Pi', week: 'Week 8: Raspberry Pi' },
    { no: 29, title: 'Building a Simple Automated System (Fan / Water Pump Controller)', week: 'Week 8: Raspberry Pi' },
    { no: 30, title: 'Building a Simple Robot Using Raspberry Pi, Motors and Sensors', week: 'Week 9: Simple Robot' },
    { no: 31, title: 'Sample Average (X-bar) and Sample Range (R) Charts Using Matplotlib', week: 'Week 10: SQC' },
    { no: 32, title: 'Calculate Mean, Variance and Standard Deviation', week: 'Week 11: SPC' },
    { no: 33, title: 'Generate X-bar and R Control Charts; Identify In-control / Out-of-control Points', week: 'Week 11: SPC' },
    { no: 34, title: 'Plot a Fishbone (Cause and Effect) Diagram', week: 'Week 12: TQM' },
    { no: 36, title: 'Plot Stress Distribution in a Plate at Various Lengths Along the Bar', week: 'Week 13: FEM' },
    { no: 37, title: 'Compare and Plot Stress Distribution in a Plate With and Without Hole', week: 'Week 13: FEM' },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div className="bg-slate-900 border border-slate-700 w-full max-w-3xl rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="p-4 border-b border-slate-800 bg-slate-950 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-emerald-500/20 text-emerald-400 rounded-xl">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base font-bold text-white">
                {isKn
                  ? 'ಲ್ಯಾಬೋರೇಟರಿ ರೆಕಾರ್ಡ್ ಮ್ಯಾನುಯಲ್ (Laboratory Record Manual)'
                  : 'Laboratory Record Manual Reference'}
              </h2>
              <p className="text-xs text-slate-400">
                Adichunchanagiri Polytechnic, Chikkamagaluru • III Sem Mechanical
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-5 overflow-y-auto space-y-4">
          {/* Strict Compliance Notice */}
          <div className="p-3.5 bg-emerald-950/40 border border-emerald-500/40 rounded-xl flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
            <div className="text-xs text-slate-300 space-y-1">
              <span className="font-bold text-emerald-400 block">
                {isKn ? 'ಮೂಲ ಮ್ಯಾನುಯಲ್‌ನ ಕಟ್ಟುನಿಟ್ಟಿನ ನಿಯಮ ಪಾಲನೆ:' : 'Strict Manual Code Preservation:'}
              </span>
              <p>
                {isKn
                  ? 'ಈ ಅಪ್ಲಿಕೇಶನ್‌ನಲ್ಲಿರುವ ಎಲ್ಲಾ 13 ಪ್ರೋಗ್ರಾಂಗಳು ಪಾಲಿಟೆಕ್ನಿಕ್ ಮ್ಯಾನುಯಲ್‌ನಲ್ಲಿರುವ ಮೂಲ ಇಂಗ್ಲಿಷ್ ಕೋಡ್ ಅನ್ನು ಯಥಾವತ್ತಾಗಿ ಸಂರಕ್ಷಿಸಿವೆ. ವೇರಿಯಬಲ್ ಹೆಸರುಗಳು, ಮೌಲ್ಯಗಳು ಅಥವಾ ಸೂತ್ರಗಳನ್ನು ಬದಲಾಯಿಸಲಾಗಿಲ್ಲ. ವಿದ್ಯಾರ್ಥಿಗಳು ತಮ್ಮ ಪ್ರಾಯೋಗಿಕ ದಾಖಲೆಗಳಲ್ಲಿ (Lab Records) ಬರೆಯಲು ಇದೇ ಕೋಡ್ ಅನ್ನು ನೇರವಾಗಿ ಉಲ್ಲೇಖಿಸಬಹುದು.'
                  : 'All 13 Python programs preserved verbatim from the manual. No variables, formulas, or values have been modified. Students can cross-reference the exact code expected in their physical lab records.'}
              </p>
            </div>
          </div>

          {/* List of 13 Exercises */}
          <div>
            <h3 className="text-xs uppercase font-mono tracking-wider text-slate-400 font-bold mb-2">
              {isKn ? 'ಆಯ್ಕೆಮಾಡಲಾದ 13 ಪ್ರಾಯೋಗಿಕ ಪ್ರೋಗ್ರಾಂಗಳ ಪಟ್ಟಿ' : 'Selected 13 Practical Exercises Index'}
            </h3>
            <div className="border border-slate-800 rounded-xl overflow-hidden divide-y divide-slate-800/80 font-mono text-xs">
              {exercises.map((ex, idx) => (
                <div key={idx} className="p-2.5 bg-slate-950/60 hover:bg-slate-950 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2.5">
                    <span className="w-6 h-6 rounded-lg bg-slate-900 border border-slate-700 flex items-center justify-center font-bold text-amber-400 text-[11px]">
                      {idx + 1}
                    </span>
                    <div>
                      <span className="font-semibold text-slate-200">
                        Ex. No: {ex.no} – {ex.title}
                      </span>
                      <span className="block text-[10px] text-slate-500 font-sans">{ex.week}</span>
                    </div>
                  </div>
                  <span className="text-[10px] bg-slate-900 text-slate-400 px-2 py-0.5 rounded border border-slate-800 shrink-0">
                    Level {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Manual PDF link */}
          <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs text-slate-300">
              <FileText className="w-4 h-4 text-amber-400" />
              <span>Attached Manual PDF: Mechanical_Engg_Programming_Lab_Manual_bc535071.pdf</span>
            </div>
            <a
              href="/assets/aistudio/Mechanical_Engg_Programming_Lab_Manual_bc535071.pdf"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1 px-3 py-1 bg-slate-800 hover:bg-slate-700 text-amber-400 text-xs rounded-lg transition-colors font-mono"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              Open PDF
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
