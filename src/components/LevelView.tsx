import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { 
  ArrowLeft, ArrowRight, Play, CheckCircle2, AlertCircle, Copy, 
  HelpCircle, Sparkles, BookOpen, Wrench, Terminal, RotateCcw, 
  ChevronRight, Award, Check, RefreshCw, Eye, Lightbulb, FileCode 
} from 'lucide-react';
import { LevelData, Language, StudentProgress } from '../types';
import { SimulationEngine } from './simulations/SimulationEngine';
import { runPythonCode, ExecutionResult } from '../utils/pythonRunner';

interface LevelViewProps {
  level: LevelData;
  progress: StudentProgress;
  lang: Language;
  onBack: () => void;
  onNextLevel?: () => void;
  onUpdateProgress: (levelId: number, mode: 'learn' | 'practice' | 'test', xpGained: number) => void;
}

export const LevelView: React.FC<LevelViewProps> = ({
  level,
  progress,
  lang,
  onBack,
  onNextLevel,
  onUpdateProgress
}) => {
  const isKn = lang === 'kn' || lang === 'bilingual';
  const [activeMode, setActiveMode] = useState<'learn' | 'practice' | 'test'>('learn');

  // Mode 1: 8 Steps State
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [selectedLine, setSelectedLine] = useState<number>(1);
  const [copiedCode, setCopiedCode] = useState<boolean>(false);

  // Step 6: Predict state
  const [selectedPredict, setSelectedPredict] = useState<number | null>(null);
  const [predictSubmitted, setPredictSubmitted] = useState<boolean>(false);

  // Step 7: Run state
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [execResult, setExecResult] = useState<ExecutionResult | null>(null);
  const [editableCode, setEditableCode] = useState<string>(level.step4Code.originalCode);
  const [showEditor, setShowEditor] = useState<boolean>(false);

  // Step 8: Mini Challenge state
  const [challengeAnswers, setChallengeAnswers] = useState<{ [qId: string]: number }>({});
  const [showHints, setShowHints] = useState<{ [qId: string]: boolean }>({});

  // Mode 2: Practice state
  const [clozeAnswers, setClozeAnswers] = useState<{ [blankId: string]: string }>({});
  const [practiceSubmitted, setPracticeSubmitted] = useState<boolean>(false);
  const [matchedTerms, setMatchedTerms] = useState<{ [term: string]: string }>({});

  // Mode 3: Test state
  const [testAnswers, setTestAnswers] = useState<{ [qId: string]: number }>({});
  const [testSubmitted, setTestSubmitted] = useState<boolean>(false);
  const [testScore, setTestScore] = useState<number>(0);

  const lvlProgress = progress.modeProgress[level.id];
  const isLearnDone = lvlProgress?.learnCompleted ?? false;
  const isPracticeDone = lvlProgress?.practiceCompleted ?? false;
  const isTestDone = lvlProgress?.testCompleted ?? false;

  const triggerConfetti = () => {
    try {
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.7 }
      });
    } catch {
      // safe fallback
    }
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(level.step4Code.originalCode);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  const handleRunProgram = async () => {
    setIsRunning(true);
    const res = await runPythonCode(
      editableCode,
      level.step4Code.virtualFiles,
      level.step7Run.expectedStdout
    );
    setExecResult(res);
    setIsRunning(false);
  };

  const handleCompleteLearn = () => {
    if (!isLearnDone) {
      onUpdateProgress(level.id, 'learn', 50);
      triggerConfetti();
    }
  };

  const handlePracticeSubmit = () => {
    setPracticeSubmitted(true);
    // Check if cloze answers are correct
    const cloze = level.practiceMode.cloze;
    let allCorrect = true;
    if (cloze) {
      for (const blank of cloze.blanks) {
        if (clozeAnswers[blank.id] !== blank.answer) {
          allCorrect = false;
        }
      }
    }
    if (allCorrect && !isPracticeDone) {
      onUpdateProgress(level.id, 'practice', 25);
      triggerConfetti();
    }
  };

  const handleTestSubmit = () => {
    let score = 0;
    level.testMode.questions.forEach((q) => {
      const selectedIdx = testAnswers[q.id];
      if (selectedIdx !== undefined && q.options[selectedIdx]?.isCorrect) {
        score += 1;
      }
    });
    setTestScore(score);
    setTestSubmitted(true);
    if (!isTestDone) {
      onUpdateProgress(level.id, 'test', 25);
      triggerConfetti();
    }
  };

  const stepTitles = [
    { num: 1, kn: '1. ಏನು ಕಲಿಯುತ್ತಿದ್ದೇವೆ?', en: '1. What Are We Learning?' },
    { num: 2, kn: '2. ಇಂಜಿನಿಯರಿಂಗ್ ಅನ್ವಯ', en: '2. Engineering Application' },
    { num: 3, kn: '3. ಪೈಥಾನ್ ಪರಿಕಲ್ಪನೆ', en: '3. Python Concept' },
    { num: 4, kn: '4. ಮೂಲ ಪ್ರೋಗ್ರಾಂ', en: '4. Original Code' },
    { num: 5, kn: '5. ಸಾಲುವಾರು ವಿವರಣೆ', en: '5. Line by Line' },
    { num: 6, kn: '6. ಫಲಿತಾಂಶ ಊಹಿಸಿ', en: '6. Predict Output' },
    { num: 7, kn: '7. ಪ್ರೋಗ್ರಾಂ ರನ್ ಮಾಡಿ', en: '7. Run Programme' },
    { num: 8, kn: '8. ಮಿನಿ ಸವಾಲು', en: '8. Mini Challenge' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-6 space-y-6 font-sans">
      {/* Level Header Banner */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-5 sm:p-6 shadow-xl relative overflow-hidden">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <button
              onClick={onBack}
              className="p-2.5 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-xl transition-colors cursor-pointer"
              title="ಹಿಂದಕ್ಕೆ (Back to Map)"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <div>
              <div className="flex flex-wrap items-center gap-2 font-mono text-xs">
                <span className="bg-amber-500/20 text-amber-400 px-2.5 py-0.5 rounded-full border border-amber-500/30 font-bold">
                  Level {level.id < 10 ? `0${level.id}` : level.id}
                </span>
                <span className="text-slate-400">Ex. No: {level.exerciseNumber}</span>
                <span className="text-slate-600">•</span>
                <span className="text-sky-400">{isKn ? level.weekTitle.kn : level.weekTitle.en}</span>
              </div>
              <h1 className="text-xl sm:text-2xl font-black text-white mt-1">
                {isKn ? level.title.kn : level.title.en}
              </h1>
              <p className="text-xs sm:text-sm text-slate-300 mt-0.5 font-medium">
                {isKn ? level.subtitle.kn : level.subtitle.en}
              </p>
            </div>
          </div>

          {/* Mode Selector */}
          <div className="flex items-center bg-slate-950 border border-slate-800 rounded-2xl p-1 font-mono text-xs">
            <button
              onClick={() => setActiveMode('learn')}
              className={`px-3 py-2 rounded-xl transition-all flex items-center gap-1.5 cursor-pointer ${
                activeMode === 'learn'
                  ? 'bg-amber-500 text-slate-950 font-bold shadow'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <BookOpen className="w-4 h-4" />
              <span>{isKn ? '1. ಕಲಿ (Learn)' : '1. Learn'}</span>
              {isLearnDone && <Check className="w-3.5 h-3.5 text-emerald-950 stroke-[3]" />}
            </button>

            <button
              onClick={() => setActiveMode('practice')}
              className={`px-3 py-2 rounded-xl transition-all flex items-center gap-1.5 cursor-pointer ${
                activeMode === 'practice'
                  ? 'bg-amber-500 text-slate-950 font-bold shadow'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Wrench className="w-4 h-4" />
              <span>{isKn ? '2. ಅಭ್ಯಾಸ (Practice)' : '2. Practice'}</span>
              {isPracticeDone && <Check className="w-3.5 h-3.5 text-emerald-950 stroke-[3]" />}
            </button>

            <button
              onClick={() => setActiveMode('test')}
              className={`px-3 py-2 rounded-xl transition-all flex items-center gap-1.5 cursor-pointer ${
                activeMode === 'test'
                  ? 'bg-amber-500 text-slate-950 font-bold shadow'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Award className="w-4 h-4" />
              <span>{isKn ? '3. ಪರೀಕ್ಷೆ (Test)' : '3. Test'}</span>
              {isTestDone && <Check className="w-3.5 h-3.5 text-emerald-950 stroke-[3]" />}
            </button>
          </div>
        </div>
      </div>

      {/* ======================================================== */}
      {/* MODE 1: LEARN MODE (8 Progressive Steps) */}
      {/* ======================================================== */}
      {activeMode === 'learn' && (
        <div className="space-y-6">
          {/* 8-Step Navigation Tabs */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-2 overflow-x-auto">
            <div className="flex items-center gap-1.5 min-w-max">
              {stepTitles.map((s) => (
                <button
                  key={s.num}
                  onClick={() => setCurrentStep(s.num)}
                  className={`px-3 py-2 rounded-xl text-xs font-mono font-semibold transition-all cursor-pointer ${
                    currentStep === s.num
                      ? 'bg-amber-500 text-slate-950 font-bold shadow-md shadow-amber-950/40'
                      : 'text-slate-400 hover:text-white hover:bg-slate-800'
                  }`}
                >
                  {isKn ? s.kn : s.en}
                </button>
              ))}
            </div>
          </div>

          {/* STEP 1: What Are We Learning? */}
          {currentStep === 1 && (
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 space-y-6 animate-fadeIn">
              <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
                <div className="p-3 bg-amber-500/20 text-amber-400 rounded-2xl">
                  <Lightbulb className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-mono text-amber-400 font-bold uppercase">
                    Step 1 / 8
                  </span>
                  <h2 className="text-lg sm:text-xl font-bold text-white">
                    {isKn ? 'ಏನು ಕಲಿಯುತ್ತಿದ್ದೇವೆ? (What Are We Learning?)' : 'What Are We Learning?'}
                  </h2>
                </div>
              </div>

              <div className="text-sm text-slate-300 leading-relaxed space-y-4">
                <p className="text-base font-medium text-slate-200">
                  {isKn ? level.step1What.description.kn : level.step1What.description.en}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-2">
                  {level.step1What.keyPoints.map((pt, idx) => (
                    <div key={idx} className="bg-slate-950 p-4 rounded-2xl border border-slate-800 space-y-1">
                      <span className="text-xs font-mono font-bold text-amber-400">
                        Point #{idx + 1}
                      </span>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        {isKn ? pt.kn : pt.en}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex justify-end pt-4 border-t border-slate-800">
                <button
                  onClick={() => setCurrentStep(2)}
                  className="flex items-center gap-2 px-5 py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs rounded-xl transition-all cursor-pointer"
                >
                  <span>{isKn ? 'ಮುಂದಿನ ಹಂತ: ಇಂಜಿನಿಯರಿಂಗ್ ಅನ್ವಯ' : 'Next: Engineering Connection'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 2: Mechanical Engineering Connection */}
          {currentStep === 2 && (
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 space-y-6 animate-fadeIn">
              <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
                <div className="p-3 bg-sky-500/20 text-sky-400 rounded-2xl">
                  <Wrench className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-mono text-sky-400 font-bold uppercase">
                    Step 2 / 8
                  </span>
                  <h2 className="text-lg sm:text-xl font-bold text-white">
                    {isKn ? level.step2Engineering.title.kn : level.step2Engineering.title.en}
                  </h2>
                </div>
              </div>

              <div className="space-y-4">
                <div className="p-5 bg-gradient-to-r from-slate-950 via-slate-950 to-sky-950/30 border border-sky-500/30 rounded-2xl">
                  <h3 className="text-xs font-mono uppercase tracking-wider text-sky-400 font-bold mb-2">
                    {isKn ? 'ವರ್ಕ್‌ಶಾಪ್ ಮತ್ತು ಕಾರ್ಖಾನೆಯ ಹೋಲಿಕೆ:' : 'Workshop & Industry Analogy:'}
                  </h3>
                  <p className="text-sm text-slate-200 leading-relaxed font-sans">
                    {isKn ? level.step2Engineering.analogy.kn : level.step2Engineering.analogy.en}
                  </p>
                </div>

                <div className="p-4 bg-slate-950 border border-slate-800 rounded-2xl flex items-center justify-between">
                  <div>
                    <span className="text-xs font-mono text-slate-400 block">
                      {isKn ? 'ನೈಜ ಕೈಗಾರಿಕಾ ಅನ್ವಯ (Industry Application):' : 'Industrial Use-Case:'}
                    </span>
                    <span className="text-xs font-bold text-emerald-400 font-mono mt-0.5 block">
                      {isKn ? level.step2Engineering.industryUseCase.kn : level.step2Engineering.industryUseCase.en}
                    </span>
                  </div>
                  <span className="text-2xl">🏭</span>
                </div>
              </div>

              <div className="flex justify-between pt-4 border-t border-slate-800">
                <button
                  onClick={() => setCurrentStep(1)}
                  className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold rounded-xl"
                >
                  {isKn ? 'ಹಿಂದಿನ ಹಂತ' : 'Previous'}
                </button>
                <button
                  onClick={() => setCurrentStep(3)}
                  className="flex items-center gap-2 px-5 py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs rounded-xl transition-all cursor-pointer"
                >
                  <span>{isKn ? 'ಮುಂದಿನ ಹಂತ: ಪೈಥಾನ್ ಪರಿಕಲ್ಪನೆ' : 'Next: Python Rules'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: Python Concept (3-5 short sentences) */}
          {currentStep === 3 && (
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 space-y-6 animate-fadeIn">
              <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
                <div className="p-3 bg-purple-500/20 text-purple-400 rounded-2xl">
                  <BookOpen className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-mono text-purple-400 font-bold uppercase">
                    Step 3 / 8
                  </span>
                  <h2 className="text-lg sm:text-xl font-bold text-white">
                    {isKn ? level.step3Python.title.kn : level.step3Python.title.en}
                  </h2>
                </div>
              </div>

              <div className="space-y-4">
                <p className="text-sm text-slate-200 font-medium">
                  {isKn ? level.step3Python.summary.kn : level.step3Python.summary.en}
                </p>

                <div className="space-y-2">
                  {level.step3Python.rules.map((rule, i) => (
                    <div
                      key={i}
                      className="p-3 bg-slate-950 border border-slate-800 rounded-xl flex items-start gap-3"
                    >
                      <span className="w-6 h-6 rounded-lg bg-purple-950/80 text-purple-400 border border-purple-800 flex items-center justify-center font-mono text-xs font-bold shrink-0">
                        {i + 1}
                      </span>
                      <p className="text-xs text-slate-300 leading-relaxed pt-0.5">
                        {isKn ? rule.kn : rule.en}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Key Terminology Pills */}
                <div className="pt-2">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold mb-2">
                    {isKn ? 'ಮುಖ್ಯ ತಾಂತ್ರಿಕ ಪದಗಳು (Terminology):' : 'Key Technical Terms:'}
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {level.step3Python.terms.map((t, idx) => (
                      <div key={idx} className="p-2.5 bg-slate-950 rounded-xl border border-slate-800 font-mono text-xs">
                        <span className="text-amber-400 font-bold block">{t.term}</span>
                        <span className="text-[11px] text-slate-400 font-sans mt-0.5 block">
                          {isKn ? t.meaningKn : t.meaningEn}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex justify-between pt-4 border-t border-slate-800">
                <button
                  onClick={() => setCurrentStep(2)}
                  className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold rounded-xl"
                >
                  {isKn ? 'ಹಿಂದಿನ ಹಂತ' : 'Previous'}
                </button>
                <button
                  onClick={() => setCurrentStep(4)}
                  className="flex items-center gap-2 px-5 py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs rounded-xl transition-all cursor-pointer"
                >
                  <span>{isKn ? 'ಮುಂದಿನ ಹಂತ: ಮೂಲ ಕೋಡ್ ನೋಡಿ' : 'Next: See Original Code'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 4: See Original Code (Strict Preservation) */}
          {currentStep === 4 && (
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 space-y-6 animate-fadeIn">
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-emerald-500/20 text-emerald-400 rounded-2xl">
                    <FileCode className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-emerald-400 font-bold uppercase">
                      Step 4 / 8 • Ex. No: {level.exerciseNumber}
                    </span>
                    <h2 className="text-lg sm:text-xl font-bold text-white">
                      {isKn ? 'ಮೂಲ ಲ್ಯಾಬ್ ಮ್ಯಾನುಯಲ್ ಪ್ರೋಗ್ರಾಂ' : 'Original Manual Code (Preserved)'}
                    </h2>
                  </div>
                </div>

                <button
                  onClick={handleCopyCode}
                  className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-mono rounded-xl transition-colors cursor-pointer"
                >
                  {copiedCode ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  <span>{copiedCode ? 'Copied!' : 'Copy Code'}</span>
                </button>
              </div>

              {/* Strict Manual Preservation Banner */}
              <div className="p-3 bg-emerald-950/40 border border-emerald-500/40 rounded-xl text-xs text-slate-300 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>
                  {isKn
                    ? 'ಕಟ್ಟುನಿಟ್ಟಿನ ನಿಯಮ: ಈ ಕೋಡ್ ನಿಮ್ಮ ಪ್ರಾಯೋಗಿಕ ದಾಖಲೆ (Lab Record) ಯಲ್ಲಿ ಬರೆಯಲು ನಿಖರವಾಗಿ ಹೊಂದಿಕೆಯಾಗುತ್ತದೆ. ಯಾವುದೇ ಅಕ್ಷರ ಅಥವಾ ಸೂತ್ರ ಬದಲಾಗಿಲ್ಲ.'
                    : 'Verified: Preserved verbatim from manual. You can write this exact code in your physical laboratory record.'}
                </span>
              </div>

              {/* Code Display with line numbers */}
              <div className="bg-slate-950 border border-slate-800 rounded-2xl overflow-hidden font-mono text-xs sm:text-sm">
                <div className="bg-slate-900 px-4 py-2 border-b border-slate-800 flex justify-between items-center text-xs text-slate-400">
                  <span>python_lab_record_ex_{level.exerciseNumber}.py</span>
                  <span>Python 3</span>
                </div>
                <div className="p-4 overflow-x-auto">
                  <pre className="text-slate-200 leading-relaxed">
                    {level.step4Code.originalCode.split('\n').map((line, idx) => (
                      <div key={idx} className="flex hover:bg-slate-900/60 px-2 py-0.5 rounded">
                        <span className="w-8 text-slate-600 select-none text-right pr-4 font-mono">
                          {idx + 1}
                        </span>
                        <span className="font-mono">{line}</span>
                      </div>
                    ))}
                  </pre>
                </div>
              </div>

              {level.step4Code.sampleDataDescription && (
                <div className="p-3 bg-slate-950 border border-slate-800 rounded-xl font-mono text-xs text-amber-300">
                  {isKn ? level.step4Code.sampleDataDescription.kn : level.step4Code.sampleDataDescription.en}
                </div>
              )}

              <div className="flex justify-between pt-4 border-t border-slate-800">
                <button
                  onClick={() => setCurrentStep(3)}
                  className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold rounded-xl"
                >
                  {isKn ? 'ಹಿಂದಿನ ಹಂತ' : 'Previous'}
                </button>
                <button
                  onClick={() => setCurrentStep(5)}
                  className="flex items-center gap-2 px-5 py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs rounded-xl transition-all cursor-pointer"
                >
                  <span>{isKn ? 'ಮುಂದಿನ ಹಂತ: ಸಾಲುವಾರು ವಿವರಣೆ' : 'Next: Line-by-Line Explanation'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 5: Understand Each Line (Clickable Line Explanations) */}
          {currentStep === 5 && (
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 space-y-6 animate-fadeIn">
              <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
                <div className="p-3 bg-amber-500/20 text-amber-400 rounded-2xl">
                  <Eye className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-mono text-amber-400 font-bold uppercase">
                    Step 5 / 8
                  </span>
                  <h2 className="text-lg sm:text-xl font-bold text-white">
                    {isKn ? 'ಸಾಲುವಾರು ವಿವರಣೆ (Click Lines to Understand)' : 'Understand Each Line'}
                  </h2>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
                {/* Clickable Code Column */}
                <div className="lg:col-span-7 bg-slate-950 border border-slate-800 rounded-2xl p-3 font-mono text-xs overflow-x-auto space-y-1">
                  <div className="text-[11px] text-slate-500 px-2 pb-1 border-b border-slate-800 mb-2">
                    {isKn ? 'ವಿವರಣೆ ನೋಡಲು ಸಾಲಿನ ಮೇಲೆ ಕ್ಲಿಕ್ ಮಾಡಿ:' : 'Click on any line to see its explanation:'}
                  </div>
                  {level.step5LineByLine.map((lineObj) => (
                    <div
                      key={lineObj.line}
                      onClick={() => setSelectedLine(lineObj.line)}
                      className={`flex items-center px-3 py-2 rounded-xl cursor-pointer transition-all ${
                        selectedLine === lineObj.line
                          ? 'bg-amber-500/20 text-amber-300 font-bold border border-amber-500/50 shadow'
                          : 'text-slate-300 hover:bg-slate-900 hover:text-white'
                      }`}
                    >
                      <span className="w-6 text-slate-600 select-none mr-2 font-mono">
                        {lineObj.line}
                      </span>
                      <span className="truncate">{lineObj.code}</span>
                    </div>
                  ))}
                </div>

                {/* Explanation Card */}
                <div className="lg:col-span-5 bg-slate-950 border border-slate-800 rounded-2xl p-5 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between text-xs font-mono mb-3">
                      <span className="text-amber-400 font-bold">Line #{selectedLine} Analysis</span>
                      <span className="text-slate-500">Python 3</span>
                    </div>

                    {(() => {
                      const activeItem = level.step5LineByLine.find((l) => l.line === selectedLine) || level.step5LineByLine[0];
                      return (
                        <div className="space-y-3 font-sans">
                          <div className="p-2.5 bg-slate-900 rounded-xl font-mono text-xs text-amber-300 border border-slate-800">
                            {activeItem.code}
                          </div>
                          <div>
                            <span className="text-[11px] uppercase tracking-wider font-mono text-slate-400 font-bold block mb-1">
                              {isKn ? 'ಕನ್ನಡ ವಿವರಣೆ:' : 'Kannada Explanation:'}
                            </span>
                            <p className="text-sm text-slate-200 leading-relaxed font-medium">
                              {activeItem.kn}
                            </p>
                          </div>
                          <div>
                            <span className="text-[11px] uppercase tracking-wider font-mono text-slate-400 font-bold block mb-1">
                              English Explanation:
                            </span>
                            <p className="text-xs text-slate-300 leading-relaxed">
                              {activeItem.en}
                            </p>
                          </div>
                        </div>
                      );
                    })()}
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-800 flex justify-between text-xs font-mono">
                    <button
                      onClick={() => setSelectedLine((prev) => Math.max(1, prev - 1))}
                      disabled={selectedLine <= 1}
                      className="px-3 py-1 bg-slate-900 hover:bg-slate-800 disabled:opacity-40 text-slate-300 rounded-lg"
                    >
                      ← Prev Line
                    </button>
                    <button
                      onClick={() => setSelectedLine((prev) => Math.min(level.step5LineByLine.length, prev + 1))}
                      disabled={selectedLine >= level.step5LineByLine.length}
                      className="px-3 py-1 bg-slate-900 hover:bg-slate-800 disabled:opacity-40 text-slate-300 rounded-lg"
                    >
                      Next Line →
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex justify-between pt-4 border-t border-slate-800">
                <button
                  onClick={() => setCurrentStep(4)}
                  className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold rounded-xl"
                >
                  {isKn ? 'ಹಿಂದಿನ ಹಂತ' : 'Previous'}
                </button>
                <button
                  onClick={() => setCurrentStep(6)}
                  className="flex items-center gap-2 px-5 py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs rounded-xl transition-all cursor-pointer"
                >
                  <span>{isKn ? 'ಮುಂದಿನ ಹಂತ: ಫಲಿತಾಂಶ ಊಹಿಸಿ' : 'Next: Predict Output'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 6: Predict the Output */}
          {currentStep === 6 && (
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 space-y-6 animate-fadeIn">
              <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
                <div className="p-3 bg-amber-500/20 text-amber-400 rounded-2xl">
                  <HelpCircle className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-mono text-amber-400 font-bold uppercase">
                    Step 6 / 8
                  </span>
                  <h2 className="text-lg sm:text-xl font-bold text-white">
                    {isKn ? 'ಫಲಿತಾಂಶ ಊಹಿಸಿ (Predict the Output)' : 'Predict the Output'}
                  </h2>
                </div>
              </div>

              <div className="space-y-4">
                <div className="p-4 bg-slate-950 border border-slate-800 rounded-2xl">
                  <p className="text-sm sm:text-base font-semibold text-slate-200">
                    {isKn ? level.step6Predict.prompt.kn : level.step6Predict.prompt.en}
                  </p>
                </div>

                <div className="space-y-3">
                  {level.step6Predict.options.map((opt, idx) => {
                    const isSelected = selectedPredict === idx;
                    return (
                      <div
                        key={idx}
                        onClick={() => {
                          setSelectedPredict(idx);
                          setPredictSubmitted(true);
                          if (opt.isCorrect) triggerConfetti();
                        }}
                        className={`p-4 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between ${
                          predictSubmitted && isSelected
                            ? opt.isCorrect
                              ? 'bg-emerald-950/60 border-emerald-500 text-emerald-200'
                              : 'bg-rose-950/60 border-rose-500 text-rose-200'
                            : isSelected
                            ? 'bg-amber-500/20 border-amber-500 text-white'
                            : 'bg-slate-950/70 border-slate-800 hover:border-slate-700 text-slate-300'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-mono text-sm font-bold">
                            {isKn ? opt.textKn : opt.textEn}
                          </span>
                          {predictSubmitted && isSelected && (
                            <span>
                              {opt.isCorrect ? (
                                <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                              ) : (
                                <AlertCircle className="w-5 h-5 text-rose-400" />
                              )}
                            </span>
                          )}
                        </div>

                        {predictSubmitted && isSelected && (
                          <div className="mt-2 text-xs pt-2 border-t border-slate-800/80 leading-relaxed font-sans">
                            {isKn ? opt.explanationKn : opt.explanationEn}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="flex justify-between pt-4 border-t border-slate-800">
                <button
                  onClick={() => setCurrentStep(5)}
                  className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold rounded-xl"
                >
                  {isKn ? 'ಹಿಂದಿನ ಹಂತ' : 'Previous'}
                </button>
                <button
                  onClick={() => setCurrentStep(7)}
                  className="flex items-center gap-2 px-5 py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs rounded-xl transition-all cursor-pointer"
                >
                  <span>{isKn ? 'ಮುಂದಿನ ಹಂತ: ಪ್ರೋಗ್ರಾಂ ಚಲಾಯಿಸಿ' : 'Next: Run Programme'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 7: Run the Programme (Visual Simulation + Execution) */}
          {currentStep === 7 && (
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 space-y-6 animate-fadeIn">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-emerald-500/20 text-emerald-400 rounded-2xl">
                    <Terminal className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-emerald-400 font-bold uppercase">
                      Step 7 / 8
                    </span>
                    <h2 className="text-lg sm:text-xl font-bold text-white">
                      {isKn ? 'ಪ್ರೋಗ್ರಾಂ ಚಲಾಯಿಸಿ (Run Programme)' : 'Run Programme & Visual Simulation'}
                    </h2>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setShowEditor(!showEditor)}
                    className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-mono rounded-xl transition-colors cursor-pointer"
                  >
                    {showEditor ? (isKn ? 'ಎಡಿಟರ್ ಮುಚ್ಚಿ' : 'Hide Editor') : (isKn ? 'ಕೋಡ್ ಬದಲಾಯಿಸಿ (Edit Code)' : 'Edit Code')}
                  </button>
                  <button
                    onClick={handleRunProgram}
                    disabled={isRunning}
                    className="flex items-center gap-2 px-5 py-2 bg-emerald-600 hover:bg-emerald-500 disabled:opacity-50 text-white font-bold text-xs rounded-xl transition-all cursor-pointer shadow-lg shadow-emerald-950"
                  >
                    <Play className="w-4 h-4 fill-current" />
                    <span>{isRunning ? (isKn ? 'ಚಾಲನೆಯಾಗುತ್ತಿದೆ...' : 'Running...') : (isKn ? 'ಪ್ರೋಗ್ರಾಂ ಚಲಾಯಿಸಿ' : 'Run Programme')}</span>
                  </button>
                </div>
              </div>

              {/* Editable Code Area (if toggled) */}
              {showEditor && (
                <div className="bg-slate-950 border border-slate-800 rounded-2xl p-4 font-mono text-xs space-y-2">
                  <div className="flex justify-between items-center text-slate-400">
                    <span>Editable Scratchpad (Student Sandbox)</span>
                    <button
                      onClick={() => setEditableCode(level.step4Code.originalCode)}
                      className="text-amber-400 hover:underline flex items-center gap-1"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                      Reset to Manual Code
                    </button>
                  </div>
                  <textarea
                    rows={6}
                    value={editableCode}
                    onChange={(e) => setEditableCode(e.target.value)}
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl p-3 text-slate-200 font-mono focus:outline-none focus:border-amber-500"
                  />
                </div>
              )}

              {/* Hardware Simulation Notice if applicable */}
              {level.step7Run.simulationNotice && (
                <div className="p-3 bg-amber-950/40 border border-amber-500/40 rounded-xl text-xs text-amber-200 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>{isKn ? level.step7Run.simulationNotice.kn : level.step7Run.simulationNotice.en}</span>
                </div>
              )}

              {/* Interactive Visual Simulation Component */}
              <SimulationEngine
                type={level.step7Run.simulationType}
                lang={lang}
                onSimulationComplete={() => {
                  if (!execResult) handleRunProgram();
                }}
              />

              {/* Terminal / Standard Output Console */}
              <div className="bg-slate-950 border border-slate-800 rounded-2xl overflow-hidden font-mono text-xs">
                <div className="bg-slate-900 px-4 py-2 border-b border-slate-800 flex justify-between items-center text-slate-400">
                  <div className="flex items-center gap-2">
                    <Terminal className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Standard Output Console (stdout)</span>
                  </div>
                  {execResult && (
                    <span className="text-[10px] text-emerald-400">
                      Executed in {execResult.executionTimeMs}ms
                    </span>
                  )}
                </div>
                <div className="p-4 min-h-[90px] text-emerald-400 whitespace-pre-wrap leading-relaxed">
                  {execResult ? (
                    execResult.stdout || execResult.stderr || 'Program returned with code 0.'
                  ) : (
                    <span className="text-slate-600">
                      {isKn
                        ? 'ಕೋಡ್ ಔಟ್‌ಪುಟ್ ನೋಡಲು ಮೇಲಿನ "ಪ್ರೋಗ್ರಾಂ ಚಲಾಯಿಸಿ" ಬಟನ್ ಒತ್ತಿ...'
                        : 'Click "Run Programme" to view console output...'}
                    </span>
                  )}
                </div>
              </div>

              <div className="flex justify-between pt-4 border-t border-slate-800">
                <button
                  onClick={() => setCurrentStep(6)}
                  className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold rounded-xl"
                >
                  {isKn ? 'ಹಿಂದಿನ ಹಂತ' : 'Previous'}
                </button>
                <button
                  onClick={() => setCurrentStep(8)}
                  className="flex items-center gap-2 px-5 py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs rounded-xl transition-all cursor-pointer"
                >
                  <span>{isKn ? 'ಮುಂದಿನ ಹಂತ: ಮಿನಿ ಸವಾಲು' : 'Next: Mini Challenge'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 8: Mini Challenge */}
          {currentStep === 8 && (
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 space-y-6 animate-fadeIn">
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-amber-500/20 text-amber-400 rounded-2xl">
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-amber-400 font-bold uppercase">
                      Step 8 / 8 • Final Step
                    </span>
                    <h2 className="text-lg sm:text-xl font-bold text-white">
                      {isKn ? 'ಮಿನಿ ಸವಾಲು (Mini Challenge)' : 'Mini Challenge & Mission Completion'}
                    </h2>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-bold bg-amber-500/20 text-amber-400 px-3 py-1 rounded-xl border border-amber-500/30">
                    +50 XP Reward
                  </span>
                </div>
              </div>

              <div className="space-y-6">
                {level.step8Challenge.map((q, idx) => {
                  const answeredIdx = challengeAnswers[q.id];
                  const hasAnswered = answeredIdx !== undefined;
                  const isCorrect = hasAnswered && q.options[answeredIdx]?.isCorrect;
                  const showHint = showHints[q.id];

                  return (
                    <div key={q.id} className="p-5 bg-slate-950 border border-slate-800 rounded-2xl space-y-3">
                      <div className="flex justify-between items-start gap-3">
                        <h4 className="text-sm font-semibold text-white">
                          <span className="text-amber-400 font-mono mr-2">Q{idx + 1}.</span>
                          {isKn ? q.questionKn : q.questionEn}
                        </h4>
                        <button
                          onClick={() => setShowHints((prev) => ({ ...prev, [q.id]: !prev[q.id] }))}
                          className="text-[11px] font-mono text-amber-400 hover:underline flex items-center gap-1 shrink-0"
                        >
                          <HelpCircle className="w-3.5 h-3.5" />
                          {isKn ? 'ಸುಳಿವು (Hint)' : 'Hint'}
                        </button>
                      </div>

                      {showHint && (
                        <div className="p-2.5 bg-amber-950/30 border border-amber-800/60 rounded-xl text-xs text-amber-300 font-sans">
                          💡 {isKn ? q.hintKn : q.hintEn}
                        </div>
                      )}

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                        {q.options.map((opt, oIdx) => (
                          <button
                            key={oIdx}
                            onClick={() => {
                              setChallengeAnswers((prev) => ({ ...prev, [q.id]: oIdx }));
                              if (opt.isCorrect) triggerConfetti();
                            }}
                            className={`p-3 rounded-xl border text-xs font-medium text-left transition-all cursor-pointer ${
                              answeredIdx === oIdx
                                ? opt.isCorrect
                                  ? 'bg-emerald-950 border-emerald-500 text-emerald-300 font-bold'
                                  : 'bg-rose-950 border-rose-500 text-rose-300'
                                : 'bg-slate-900 border-slate-800 hover:border-slate-700 text-slate-300'
                            }`}
                          >
                            <span className="font-mono text-slate-500 mr-1.5">
                              {String.fromCharCode(65 + oIdx)}.
                            </span>
                            {isKn ? opt.textKn : opt.textEn}
                          </button>
                        ))}
                      </div>

                      {hasAnswered && (
                        <div
                          className={`p-3 rounded-xl text-xs font-sans ${
                            isCorrect
                              ? 'bg-emerald-950/60 text-emerald-200 border border-emerald-700/80'
                              : 'bg-amber-950/40 text-amber-200 border border-amber-700/60'
                          }`}
                        >
                          <div className="font-bold flex items-center gap-1 mb-1">
                            {isCorrect ? (
                              <>
                                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                                <span>{isKn ? 'ಅದ್ಭುತ! ಸರಿಯಾದ ಉತ್ತರ!' : 'Excellent! Correct Answer!'}</span>
                              </>
                            ) : (
                              <>
                                <Lightbulb className="w-4 h-4 text-amber-400" />
                                <span>{isKn ? 'ಪರವಾಗಿಲ್ಲ, ಮತ್ತೊಮ್ಮೆ ಪ್ರಯತ್ನಿಸಿ! ನೀವು ಕಲಿಯುತ್ತಿದ್ದೀರಿ:' : 'Don\'t worry, keep trying! You are learning:'}</span>
                              </>
                            )}
                          </div>
                          <div>
                            {isKn ? q.explanationKn : q.explanationEn}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-800">
                <button
                  onClick={() => setCurrentStep(7)}
                  className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold rounded-xl"
                >
                  {isKn ? 'ಹಿಂದಿನ ಹಂತ' : 'Previous'}
                </button>

                <div className="flex items-center gap-3">
                  <button
                    onClick={handleCompleteLearn}
                    className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-extrabold text-xs rounded-xl transition-all cursor-pointer shadow-lg shadow-amber-950"
                  >
                    <CheckCircle2 className="w-4 h-4" />
                    <span>
                      {isLearnDone
                        ? (isKn ? 'ಕಲಿಕೆ ಪೂರ್ಣಗೊಂಡಿದೆ (+50 XP)' : 'Learn Step Done (+50 XP)')
                        : (isKn ? 'ಕಲಿಕೆ ಮುಗಿಸಿ 50 XP ಪಡೆಯಿರಿ' : 'Complete Step & Claim 50 XP')}
                    </span>
                  </button>

                  <button
                    onClick={() => setActiveMode('practice')}
                    className="flex items-center gap-1.5 px-4 py-3 bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs rounded-xl transition-colors cursor-pointer"
                  >
                    <span>{isKn ? 'ಅಭ್ಯಾಸ ಮೋಡ್‌ಗೆ ಹೋಗಿ' : 'Go to Practice'}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* ======================================================== */}
      {/* MODE 2: PRACTICE MODE (Fill in Blanks / Cloze & Terms) */}
      {/* ======================================================== */}
      {activeMode === 'practice' && (
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 space-y-6 animate-fadeIn">
          <div className="flex items-center justify-between border-b border-slate-800 pb-4">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-amber-500/20 text-amber-400 rounded-2xl">
                <Wrench className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-mono text-amber-400 font-bold uppercase">
                  Mode 2 • Practice Workshop (+25 XP)
                </span>
                <h2 className="text-lg sm:text-xl font-bold text-white">
                  {isKn ? 'ಕೋಡ್ ಅಭ್ಯಾಸ ಸವಾಲು (Code Cloze & Matching)' : 'Fill in the Code & Matching'}
                </h2>
              </div>
            </div>

            {isPracticeDone && (
              <span className="bg-emerald-950 text-emerald-400 px-3 py-1 rounded-xl text-xs font-mono font-bold border border-emerald-800">
                ✓ Practice Completed
              </span>
            )}
          </div>

          {/* Cloze Code Exercise */}
          {level.practiceMode.cloze && (
            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-slate-200">
                {isKn ? level.practiceMode.cloze.instructionKn : level.practiceMode.cloze.instructionEn}
              </h3>

              <div className="bg-slate-950 p-5 rounded-2xl border border-slate-800 font-mono text-xs sm:text-sm text-slate-300 leading-loose">
                {level.practiceMode.cloze.codeTemplate.split('\n').map((line, lIdx) => {
                  return (
                    <div key={lIdx} className="flex flex-wrap items-center gap-1.5 py-0.5">
                      {line.split(/({{BLANK\d+}})/g).map((part, pIdx) => {
                        const match = part.match(/{{(BLANK\d+)}}/);
                        if (match) {
                          const blankId = match[1];
                          const blankObj = level.practiceMode.cloze?.blanks.find((b) => b.id === blankId);
                          const val = clozeAnswers[blankId] || '';
                          const isCorrect = practiceSubmitted && val === blankObj?.answer;
                          const isWrong = practiceSubmitted && val !== blankObj?.answer;

                          return (
                            <select
                              key={pIdx}
                              value={val}
                              onChange={(e) => setClozeAnswers((prev) => ({ ...prev, [blankId]: e.target.value }))}
                              className={`bg-slate-900 border px-2.5 py-1 rounded-lg text-xs font-mono font-bold cursor-pointer transition-colors ${
                                isCorrect
                                  ? 'border-emerald-500 text-emerald-400 bg-emerald-950/60'
                                  : isWrong
                                  ? 'border-rose-500 text-rose-400 bg-rose-950/60'
                                  : 'border-amber-500/60 text-amber-300'
                              }`}
                            >
                              <option value="">-- [Select] --</option>
                              {blankObj?.options.map((opt, oIdx) => (
                                <option key={oIdx} value={opt}>
                                  {opt}
                                </option>
                              ))}
                            </select>
                          );
                        }
                        return <span key={pIdx}>{part}</span>;
                      })}
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Term Matching Section */}
          {level.practiceMode.termMatches && (
            <div className="space-y-3 pt-2">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold">
                {isKn ? 'ಪದ ಮತ್ತು ಅರ್ಥ ಜೋಡಿಸಿ (Concept Linkage):' : 'Key Concepts Linkage:'}
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {level.practiceMode.termMatches.map((tm, idx) => (
                  <div key={idx} className="p-3 bg-slate-950 rounded-xl border border-slate-800 font-mono text-xs">
                    <span className="text-amber-400 font-bold block">{tm.term}</span>
                    <span className="text-slate-400 font-sans text-[11px] mt-1 block">
                      ➔ {isKn ? tm.meaningKn : tm.meaningEn}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="flex justify-between items-center pt-4 border-t border-slate-800">
            <button
              onClick={() => setActiveMode('learn')}
              className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold rounded-xl"
            >
              ← {isKn ? 'ಕಲಿಕೆ ಮೋಡ್‌ಗೆ ಹಿಂತಿರುಗಿ' : 'Back to Learn'}
            </button>

            <button
              onClick={handlePracticeSubmit}
              className="flex items-center gap-2 px-6 py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs rounded-xl transition-all cursor-pointer shadow-lg shadow-amber-950"
            >
              <CheckCircle2 className="w-4 h-4" />
              <span>{isKn ? 'ಪರಿಶೀಲಿಸಿ (+25 XP)' : 'Verify Practice (+25 XP)'}</span>
            </button>
          </div>
        </div>
      )}

      {/* ======================================================== */}
      {/* MODE 3: TEST MODE (Viva & Practical Examination) */}
      {/* ======================================================== */}
      {activeMode === 'test' && (
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 space-y-6 animate-fadeIn">
          <div className="flex items-center justify-between border-b border-slate-800 pb-4">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-amber-500/20 text-amber-400 rounded-2xl">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-mono text-amber-400 font-bold uppercase">
                  Mode 3 • Lab Viva Examination (+25 XP)
                </span>
                <h2 className="text-lg sm:text-xl font-bold text-white">
                  {isKn ? 'ಪ್ರಾಯೋಗಿಕ ಮೌಖಿಕ ಪರೀಕ್ಷೆ (Viva Questions)' : 'Practical Viva Questions'}
                </h2>
              </div>
            </div>

            {testSubmitted && (
              <div className="flex items-center gap-2 bg-slate-950 px-3 py-1.5 rounded-xl border border-slate-800 font-mono text-xs">
                <span className="text-slate-400">Score:</span>
                <span className="text-amber-400 font-bold text-sm">
                  {testScore} / {level.testMode.questions.length}
                </span>
              </div>
            )}
          </div>

          <div className="space-y-5">
            {level.testMode.questions.map((q, idx) => {
              const selectedOpt = testAnswers[q.id];
              const isSelected = selectedOpt !== undefined;

              return (
                <div key={q.id} className="p-5 bg-slate-950 border border-slate-800 rounded-2xl space-y-3">
                  <h4 className="text-sm font-semibold text-white">
                    <span className="text-amber-400 font-mono mr-2">Q{idx + 1}.</span>
                    {isKn ? q.questionKn : q.questionEn}
                  </h4>

                  <div className="space-y-2">
                    {q.options.map((opt, oIdx) => {
                      const isOptionSelected = selectedOpt === oIdx;
                      return (
                        <div
                          key={oIdx}
                          onClick={() => {
                            if (!testSubmitted) {
                              setTestAnswers((prev) => ({ ...prev, [q.id]: oIdx }));
                            }
                          }}
                          className={`p-3 rounded-xl border text-xs transition-all cursor-pointer flex items-center justify-between ${
                            testSubmitted && isOptionSelected
                              ? opt.isCorrect
                                ? 'bg-emerald-950/80 border-emerald-500 text-emerald-300 font-bold'
                                : 'bg-rose-950/80 border-rose-500 text-rose-300 font-bold'
                              : testSubmitted && opt.isCorrect
                              ? 'bg-emerald-950/40 border-emerald-600/60 text-emerald-300'
                              : isOptionSelected
                              ? 'bg-amber-500/20 border-amber-500 text-white font-semibold'
                              : 'bg-slate-900 border-slate-800 hover:border-slate-700 text-slate-300'
                          }`}
                        >
                          <div className="flex items-center gap-2">
                            <span className="w-5 h-5 rounded-md bg-slate-950 border border-slate-800 flex items-center justify-center font-mono text-[10px] text-slate-400">
                              {String.fromCharCode(65 + oIdx)}
                            </span>
                            <span>{isKn ? opt.textKn : opt.textEn}</span>
                          </div>

                          {testSubmitted && isOptionSelected && (
                            <span>
                              {opt.isCorrect ? (
                                <Check className="w-4 h-4 text-emerald-400" />
                              ) : (
                                <AlertCircle className="w-4 h-4 text-rose-400" />
                              )}
                            </span>
                          )}
                        </div>
                      );
                    })}
                  </div>

                  {testSubmitted && (
                    <div className="p-3 bg-slate-900 rounded-xl text-xs text-slate-300 border border-slate-800 font-sans leading-relaxed">
                      💡 {isKn ? q.explanationKn : q.explanationEn}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-800">
            <button
              onClick={() => setActiveMode('practice')}
              className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold rounded-xl"
            >
              ← {isKn ? 'ಅಭ್ಯಾಸಕ್ಕೆ ಹಿಂತಿರುಗಿ' : 'Back to Practice'}
            </button>

            <div className="flex items-center gap-3">
              {!testSubmitted ? (
                <button
                  onClick={handleTestSubmit}
                  className="px-6 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded-xl transition-all cursor-pointer shadow-lg shadow-emerald-950"
                >
                  {isKn ? 'ಪರೀಕ್ಷೆ ಸಲ್ಲಿಸಿ (Submit Test)' : 'Submit Test (+25 XP)'}
                </button>
              ) : (
                onNextLevel && (
                  <button
                    onClick={onNextLevel}
                    className="flex items-center gap-2 px-6 py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-xs rounded-xl transition-all cursor-pointer shadow-lg shadow-amber-950"
                  >
                    <span>{isKn ? 'ಮುಂದಿನ ಲೆವೆಲ್‌ಗೆ ಹೋಗಿ' : 'Next Mission'}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                )
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
