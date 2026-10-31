import React, { useState, useEffect } from 'react';
import { 
  Play, Square, RotateCw, AlertTriangle, CheckCircle, 
  Layers, Database, ArrowRight, Gauge, Activity, RefreshCw 
} from 'lucide-react';
import { Language } from '../../types';

interface SimulationProps {
  type: string;
  lang: Language;
  onSimulationComplete?: () => void;
}

interface SubSimulationProps {
  isKn: boolean;
  onComplete?: () => void;
}

export const SimulationEngine: React.FC<SimulationProps> = ({ type, lang, onSimulationComplete }) => {
  const isKn = lang === 'kn' || lang === 'bilingual';

  return (
    <div className="w-full bg-slate-900 border border-slate-700/80 rounded-2xl p-5 shadow-2xl relative overflow-hidden">
      {/* Simulation Badge */}
      <div className="flex items-center justify-between mb-4 border-b border-slate-800 pb-3">
        <div className="flex items-center gap-2">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
          </span>
          <span className="text-xs uppercase font-mono tracking-wider font-semibold text-emerald-400">
            {isKn ? 'ವರ್ಚುವಲ್ ಲ್ಯಾಬ್ ಸಿಮ್ಯುಲೇಶನ್' : 'Virtual Lab Simulation'}
          </span>
        </div>
        <span className="text-xs text-slate-400 font-mono bg-slate-800/80 px-2.5 py-1 rounded-md border border-slate-700">
          Module: {type.toUpperCase()}
        </span>
      </div>

      {type === 'csv' && <CsvSimulation isKn={isKn} onComplete={onSimulationComplete} />}
      {type === 'car' && <CarSimulation isKn={isKn} onComplete={onSimulationComplete} />}
      {type === 'inheritance' && <InheritanceSimulation isKn={isKn} onComplete={onSimulationComplete} />}
      {type === 'bank' && <BankSimulation isKn={isKn} onComplete={onSimulationComplete} />}
      {type === 'motor' && <MotorSimulation isKn={isKn} onComplete={onSimulationComplete} />}
      {type === 'factory' && <FactorySimulation isKn={isKn} onComplete={onSimulationComplete} />}
      {type === 'robot' && <RobotSimulation isKn={isKn} onComplete={onSimulationComplete} />}
      {type === 'xbar_r' && <XBarRSimulation isKn={isKn} onComplete={onSimulationComplete} />}
      {type === 'stats' && <StatsSimulation isKn={isKn} onComplete={onSimulationComplete} />}
      {type === 'spc' && <SpcSimulation isKn={isKn} onComplete={onSimulationComplete} />}
      {type === 'fishbone' && <FishboneSimulation isKn={isKn} onComplete={onSimulationComplete} />}
      {type === 'stress_bar' && <StressBarSimulation isKn={isKn} onComplete={onSimulationComplete} />}
      {type === 'stress_hole' && <StressHoleSimulation isKn={isKn} onComplete={onSimulationComplete} />}
    </div>
  );
};

/* ---------------- 1. CSV SIMULATION ---------------- */
const CsvSimulation: React.FC<SubSimulationProps> = ({ isKn, onComplete }) => {
  const [activeRow, setActiveRow] = useState<number>(-1);
  const [counted, setCounted] = useState<number>(0);
  const [isReading, setIsReading] = useState<boolean>(false);

  const rows = [
    { num: 1, type: 'Header', col1: 'Name', col2: 'Age', status: 'Header Row' },
    { num: 2, type: 'Data', col1: 'Ravi', col2: '18', status: 'Student 1' },
    { num: 3, type: 'Data', col1: 'Manu', col2: '19', status: 'Student 2' },
    { num: 4, type: 'Data', col1: 'Asha', col2: '17', status: 'Student 3' }
  ];

  const handleStartReading = () => {
    setIsReading(true);
    setCounted(0);
    setActiveRow(0);

    let idx = 0;
    const interval = setInterval(() => {
      idx++;
      if (idx < rows.length) {
        setActiveRow(idx);
        setCounted(idx + 1);
      } else {
        clearInterval(interval);
        setIsReading(false);
        setCounted(rows.length);
        if (onComplete) onComplete();
      }
    }, 700);
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-3 bg-slate-950 p-3 rounded-xl border border-slate-800">
        <div className="flex items-center gap-3">
          <Database className="w-5 h-5 text-amber-400" />
          <span className="font-mono text-sm text-slate-200">File: student.csv (Read Mode: "r")</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-xs text-slate-400 font-mono">
            {isKn ? 'ಎಣಿಸಿದ ಸಾಲುಗಳು:' : 'Counted Rows:'}{' '}
            <strong className="text-amber-400 text-base">{counted}</strong> / {rows.length}
          </span>
          <button
            onClick={handleStartReading}
            disabled={isReading}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-amber-500 hover:bg-amber-400 disabled:opacity-50 text-slate-950 font-bold text-xs rounded-lg transition-colors cursor-pointer"
          >
            <Play className="w-3.5 h-3.5 fill-current" />
            {isReading ? (isKn ? 'ಓದಲಾಗುತ್ತಿದೆ...' : 'Reading...') : (isKn ? 'ಫೈಲ್ ಓದಿ' : 'Inspect CSV')}
          </button>
        </div>
      </div>

      {/* Visual Table */}
      <div className="border border-slate-800 rounded-xl overflow-hidden font-mono text-xs">
        <div className="grid grid-cols-12 bg-slate-800/90 text-slate-300 font-bold p-2.5 border-b border-slate-700">
          <div className="col-span-2">Line #</div>
          <div className="col-span-4">Column 1 (Name)</div>
          <div className="col-span-3">Column 2 (Age)</div>
          <div className="col-span-3 text-right">Loop Status</div>
        </div>
        {rows.map((r, i) => (
          <div
            key={i}
            className={`grid grid-cols-12 p-2.5 items-center transition-all border-b border-slate-800/50 ${
              activeRow === i
                ? 'bg-amber-500/20 text-amber-200 border-amber-500 font-bold'
                : i < counted
                ? 'bg-slate-900/60 text-slate-300'
                : 'text-slate-500 bg-slate-950'
            }`}
          >
            <div className="col-span-2 flex items-center gap-1.5">
              {activeRow === i && <ArrowRight className="w-3.5 h-3.5 text-amber-400 animate-pulse" />}
              <span>{r.num}</span>
            </div>
            <div className="col-span-4 text-emerald-400 font-semibold">{r.col1}</div>
            <div className="col-span-3 text-sky-400">{r.col2}</div>
            <div className="col-span-3 text-right text-xs">
              {i < counted ? (
                <span className="text-emerald-400">✓ Counted (+1)</span>
              ) : activeRow === i ? (
                <span className="text-amber-400">Reading row...</span>
              ) : (
                <span className="text-slate-600">Pending</span>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="p-3 bg-slate-950/70 border border-slate-800 rounded-xl text-xs text-slate-300 flex items-center justify-between">
        <span>
          {isKn 
            ? '💡 ಗಮನಿಸಿ: `csv.reader` ಹೆಡರ್ ಸಾಲನ್ನೂ ಸೇರಿಸಿ ಒಟ್ಟು 4 ಸಾಲುಗಳನ್ನು ಎಣಿಸುತ್ತದೆ.'
            : '💡 Note: `csv.reader` iterates all 4 lines including the header row.'}
        </span>
        <span className="font-mono text-amber-400 font-bold bg-amber-950/50 px-2 py-0.5 rounded border border-amber-800">
          Total: 4
        </span>
      </div>
    </div>
  );
};

/* ---------------- 2. CAR BUILDER SIMULATION ---------------- */
const CarSimulation: React.FC<SubSimulationProps> = ({ isKn, onComplete }) => {
  const [model, setModel] = useState('Toyota');
  const [year, setYear] = useState('2024');
  const [color, setColor] = useState('Red');
  const [carState, setCarState] = useState<'stopped' | 'running'>('stopped');
  const [rpm, setRpm] = useState(0);

  const startCar = () => {
    setCarState('running');
    setRpm(2200);
    if (onComplete) onComplete();
  };

  const stopCar = () => {
    setCarState('stopped');
    setRpm(0);
  };

  return (
    <div className="space-y-4">
      {/* Attributes Inspector */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        <div className="bg-slate-950 p-3 rounded-xl border border-slate-800">
          <label className="text-xs text-slate-400 block mb-1">Model (self.model)</label>
          <input
            type="text"
            value={model}
            onChange={(e) => setModel(e.target.value)}
            className="w-full bg-slate-900 border border-slate-700 px-3 py-1.5 rounded-lg text-sm font-mono text-emerald-400"
          />
        </div>
        <div className="bg-slate-950 p-3 rounded-xl border border-slate-800">
          <label className="text-xs text-slate-400 block mb-1">Year (self.year)</label>
          <input
            type="text"
            value={year}
            onChange={(e) => setYear(e.target.value)}
            className="w-full bg-slate-900 border border-slate-700 px-3 py-1.5 rounded-lg text-sm font-mono text-sky-400"
          />
        </div>
        <div className="bg-slate-950 p-3 rounded-xl border border-slate-800">
          <label className="text-xs text-slate-400 block mb-1">Color (self.color)</label>
          <select
            value={color}
            onChange={(e) => setColor(e.target.value)}
            className="w-full bg-slate-900 border border-slate-700 px-3 py-1.5 rounded-lg text-sm font-mono text-rose-400"
          >
            <option value="Red">Red (ಮೂಲ ಮ್ಯಾನುಯಲ್)</option>
            <option value="Blue">Blue</option>
            <option value="Black">Black</option>
            <option value="Silver">Silver</option>
          </select>
        </div>
      </div>

      {/* Visual Car Graphic */}
      <div className="relative bg-gradient-to-b from-slate-950 to-slate-900 p-6 rounded-2xl border border-slate-800 flex flex-col items-center justify-center min-h-[160px] overflow-hidden">
        {/* Road markings */}
        <div className="absolute bottom-2 left-0 right-0 h-1 bg-slate-800 flex justify-around">
          <div className="w-12 h-1 bg-amber-500/50 animate-pulse"></div>
          <div className="w-12 h-1 bg-amber-500/50 animate-pulse"></div>
          <div className="w-12 h-1 bg-amber-500/50 animate-pulse"></div>
        </div>

        {/* Dynamic Car Chassis */}
        <div className={`relative transition-all duration-300 ${carState === 'running' ? 'translate-x-1 animate-bounce' : ''}`}>
          <svg width="220" height="90" viewBox="0 0 220 90" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Car Body */}
            <path
              d="M20 55 C35 55, 45 40, 65 30 C85 20, 140 20, 160 35 C175 40, 195 45, 210 55 L215 70 L5 70 Z"
              fill={color === 'Red' ? '#dc2626' : color === 'Blue' ? '#2563eb' : color === 'Black' ? '#1e293b' : '#94a3b8'}
              stroke="#0f172a"
              strokeWidth="3"
            />
            {/* Windows */}
            <path d="M70 32 L105 32 L105 48 L55 48 Z" fill="#38bdf8" opacity="0.8" />
            <path d="M115 32 L150 35 L160 48 L115 48 Z" fill="#38bdf8" opacity="0.8" />
            {/* Headlights */}
            <circle cx="210" cy="58" r="4" fill={carState === 'running' ? '#fef08a' : '#64748b'} />
            {carState === 'running' && (
              <polygon points="214,58 260,40 260,76" fill="#fef08a" opacity="0.25" />
            )}
            {/* Tail lights */}
            <rect x="5" y="55" width="4" height="8" rx="2" fill="#ef4444" />
            {/* Wheels */}
            <g className={carState === 'running' ? 'animate-spin origin-[50px_70px]' : ''}>
              <circle cx="50" cy="70" r="14" fill="#0f172a" stroke="#475569" strokeWidth="3" />
              <circle cx="50" cy="70" r="6" fill="#cbd5e1" />
            </g>
            <g className={carState === 'running' ? 'animate-spin origin-[170px_70px]' : ''}>
              <circle cx="170" cy="70" r="14" fill="#0f172a" stroke="#475569" strokeWidth="3" />
              <circle cx="170" cy="70" r="6" fill="#cbd5e1" />
            </g>
          </svg>
        </div>

        {/* Dashboard Instruments */}
        <div className="mt-4 flex items-center gap-6 font-mono text-xs">
          <div className="flex items-center gap-2">
            <Gauge className="w-4 h-4 text-emerald-400" />
            <span>Tachometer:</span>
            <span className={`font-bold ${carState === 'running' ? 'text-emerald-400' : 'text-slate-500'}`}>
              {rpm} RPM
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span>Status:</span>
            <span className={`font-bold px-2 py-0.5 rounded text-[11px] ${
              carState === 'running' ? 'bg-emerald-950 text-emerald-400 border border-emerald-800' : 'bg-rose-950 text-rose-400 border border-rose-800'
            }`}>
              {carState === 'running' ? 'CAR STARTED' : 'CAR STOPPED'}
            </span>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="flex flex-wrap items-center justify-center gap-3">
        <button
          onClick={startCar}
          disabled={carState === 'running'}
          className="flex items-center gap-2 px-4 py-2 bg-emerald-600 hover:bg-emerald-500 disabled:opacity-50 text-white font-bold text-xs rounded-xl transition-all cursor-pointer shadow-lg shadow-emerald-950"
        >
          <Play className="w-4 h-4 fill-current" />
          c.start()
        </button>
        <button
          onClick={stopCar}
          disabled={carState === 'stopped'}
          className="flex items-center gap-2 px-4 py-2 bg-rose-600 hover:bg-rose-500 disabled:opacity-50 text-white font-bold text-xs rounded-xl transition-all cursor-pointer shadow-lg shadow-rose-950"
        >
          <Square className="w-4 h-4 fill-current" />
          c.stop()
        </button>
      </div>
    </div>
  );
};

/* ---------------- 3. INHERITANCE SIMULATION ---------------- */
const InheritanceSimulation: React.FC<SubSimulationProps> = ({ isKn, onComplete }) => {
  const [activeAction, setActiveAction] = useState<string>('');

  const triggerAction = (action: string) => {
    setActiveAction(action);
    if (onComplete) onComplete();
  };

  return (
    <div className="space-y-4">
      {/* Base Class Parent Box */}
      <div className="flex flex-col items-center">
        <div className="w-full max-w-sm bg-gradient-to-r from-amber-950/60 to-amber-900/40 border-2 border-amber-500/80 p-3.5 rounded-2xl text-center shadow-lg relative">
          <div className="text-[11px] uppercase tracking-widest font-mono text-amber-400 font-bold">
            {isKn ? 'ಪೋಷಕ ವರ್ಗ (Base Class)' : 'Parent Base Class'}
          </div>
          <div className="text-base font-bold text-white font-mono mt-0.5">class Animal</div>
          <div className="mt-2 bg-slate-950/80 px-3 py-1.5 rounded-lg border border-amber-900/60 font-mono text-xs text-amber-300">
            def sound(self) ➔ "Animal makes sound"
          </div>
        </div>

        {/* Tree connector lines */}
        <div className="w-0.5 h-6 bg-slate-700"></div>
        <div className="w-48 h-0.5 bg-slate-700 relative">
          <div className="absolute left-0 top-0 w-0.5 h-4 bg-slate-700"></div>
          <div className="absolute right-0 top-0 w-0.5 h-4 bg-slate-700"></div>
        </div>
      </div>

      {/* Derived Classes Children */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Dog Child Class */}
        <div className="bg-slate-950 border border-slate-800 p-4 rounded-xl flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] uppercase font-mono tracking-wider bg-sky-950 text-sky-400 px-2 py-0.5 rounded border border-sky-800">
                Derived: Dog(Animal)
              </span>
              <span className="text-lg">🐕</span>
            </div>
            <div className="font-mono text-xs text-slate-300 space-y-1 bg-slate-900/60 p-2.5 rounded-lg">
              <div className="text-amber-400">⚡ Inherited: sound()</div>
              <div className="text-sky-400 font-semibold">✨ Own: def bark() ➔ "Dog barks"</div>
            </div>
          </div>
          <div className="flex gap-2 mt-3">
            <button
              onClick={() => triggerAction('dog_sound')}
              className="flex-1 py-1.5 bg-slate-800 hover:bg-slate-700 text-amber-300 rounded-lg text-xs font-mono transition-colors"
            >
              d.sound()
            </button>
            <button
              onClick={() => triggerAction('dog_bark')}
              className="flex-1 py-1.5 bg-sky-600 hover:bg-sky-500 text-white font-bold rounded-lg text-xs font-mono transition-colors"
            >
              d.bark()
            </button>
          </div>
        </div>

        {/* Cat Child Class */}
        <div className="bg-slate-950 border border-slate-800 p-4 rounded-xl flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] uppercase font-mono tracking-wider bg-purple-950 text-purple-400 px-2 py-0.5 rounded border border-purple-800">
                Derived: Cat(Animal)
              </span>
              <span className="text-lg">🐈</span>
            </div>
            <div className="font-mono text-xs text-slate-300 space-y-1 bg-slate-900/60 p-2.5 rounded-lg">
              <div className="text-amber-400">⚡ Inherited: sound()</div>
              <div className="text-purple-400 font-semibold">✨ Own: def meow() ➔ "Cat meows"</div>
            </div>
          </div>
          <div className="flex gap-2 mt-3">
            <button
              onClick={() => triggerAction('cat_sound')}
              className="flex-1 py-1.5 bg-slate-800 hover:bg-slate-700 text-amber-300 rounded-lg text-xs font-mono transition-colors"
            >
              c.sound()
            </button>
            <button
              onClick={() => triggerAction('cat_meow')}
              className="flex-1 py-1.5 bg-purple-600 hover:bg-purple-500 text-white font-bold rounded-lg text-xs font-mono transition-colors"
            >
              c.meow()
            </button>
          </div>
        </div>
      </div>

      {/* Acoustic speech / print balloon */}
      {activeAction && (
        <div className="p-3 bg-slate-950 border border-emerald-500/50 rounded-xl flex items-center justify-between animate-fadeIn">
          <div className="flex items-center gap-2 font-mono text-sm">
            <span className="text-slate-400">Stdout:</span>
            <span className="text-emerald-400 font-bold">
              {activeAction === 'dog_sound' && 'Animal makes sound (from Animal class)'}
              {activeAction === 'dog_bark' && 'Dog barks (from Dog class)'}
              {activeAction === 'cat_sound' && 'Animal makes sound (from Animal class)'}
              {activeAction === 'cat_meow' && 'Cat meows (from Cat class)'}
            </span>
          </div>
          <span className="text-xs text-slate-500 font-mono">Inheritance Active</span>
        </div>
      )}
    </div>
  );
};

/* ---------------- 4. BANK SIMULATION ---------------- */
const BankSimulation: React.FC<SubSimulationProps> = ({ isKn, onComplete }) => {
  const [balance, setBalance] = useState<number>(1000);
  const [history, setHistory] = useState<string[]>(['Account Opened with Initial Balance: ₹1000']);
  const [animating, setAnimating] = useState<string>('');

  const deposit = () => {
    setAnimating('deposit');
    setTimeout(() => {
      setBalance((b) => b + 500);
      setHistory((h) => [...h, 'b.deposit() ➔ +₹500 (Balance: ₹' + (balance + 500) + ')']);
      setAnimating('');
      if (onComplete) onComplete();
    }, 400);
  };

  const withdraw = () => {
    setAnimating('withdraw');
    setTimeout(() => {
      setBalance((b) => b - 200);
      setHistory((h) => [...h, 'b.withdraw() ➔ -₹200 (Balance: ₹' + (balance - 200) + ')']);
      setAnimating('');
      if (onComplete) onComplete();
    }, 400);
  };

  return (
    <div className="space-y-4">
      {/* Account Passbook Balance Display */}
      <div className="bg-gradient-to-r from-emerald-950/80 via-slate-900 to-slate-950 border border-emerald-500/40 p-5 rounded-2xl flex items-center justify-between shadow-xl">
        <div>
          <span className="text-xs uppercase font-mono tracking-wider text-emerald-400 font-semibold block mb-1">
            {isKn ? 'ಹಾಲಿ ಬ್ಯಾಲೆನ್ಸ್ (self.balance)' : 'Current Account Balance'}
          </span>
          <div className="text-3xl font-extrabold text-white font-mono flex items-center gap-1">
            <span>₹</span>
            <span className={animating ? 'text-amber-400 animate-pulse' : 'text-emerald-400'}>
              {balance}
            </span>
          </div>
        </div>
        <div className="flex gap-2">
          <button
            onClick={deposit}
            className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl text-xs font-mono transition-all cursor-pointer shadow-lg shadow-emerald-950"
          >
            + deposit(500)
          </button>
          <button
            onClick={withdraw}
            className="px-4 py-2 bg-rose-600 hover:bg-rose-500 text-white font-bold rounded-xl text-xs font-mono transition-all cursor-pointer shadow-lg shadow-rose-950"
          >
            - withdraw(200)
          </button>
        </div>
      </div>

      {/* Transaction Passbook Entries */}
      <div className="bg-slate-950 p-3 rounded-xl border border-slate-800 font-mono text-xs space-y-1.5 max-h-36 overflow-y-auto">
        <div className="text-slate-400 font-bold border-b border-slate-800 pb-1 flex justify-between">
          <span>Passbook Ledger / Statement</span>
          <span>Ex. No: 27</span>
        </div>
        {history.map((item, idx) => (
          <div key={idx} className="text-slate-300 flex items-center gap-2">
            <span className="text-slate-600">[{idx + 1}]</span>
            <span className={item.includes('+') ? 'text-emerald-400' : item.includes('-') ? 'text-rose-400' : 'text-slate-400'}>
              {item}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

/* ---------------- 5. MOTOR SIMULATION ---------------- */
const MotorSimulation: React.FC<SubSimulationProps> = ({ isKn, onComplete }) => {
  const [motorState, setMotorState] = useState<'idle' | 'running' | 'stopped'>('idle');
  const [countdown, setCountdown] = useState<number>(5);

  const startMotorSequence = () => {
    setMotorState('running');
    setCountdown(5);

    let sec = 5;
    const interval = setInterval(() => {
      sec--;
      setCountdown(sec);
      if (sec <= 0) {
        clearInterval(interval);
        setMotorState('stopped');
        if (onComplete) onComplete();
      }
    }, 1000);
  };

  return (
    <div className="space-y-4">
      {/* Hardware Schematic */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {/* Raspberry Pi Header */}
        <div className="bg-slate-950 p-3 rounded-xl border border-slate-800 font-mono text-xs">
          <div className="text-emerald-400 font-bold mb-2 flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            Raspberry Pi 4
          </div>
          <div className="space-y-1 text-slate-300">
            <div className="flex justify-between bg-slate-900/60 px-2 py-1 rounded">
              <span>GPIO 17 (Fwd):</span>
              <span className={motorState === 'running' ? 'text-emerald-400 font-bold' : 'text-slate-500'}>
                {motorState === 'running' ? 'HIGH (3.3V)' : 'LOW (0V)'}
              </span>
            </div>
            <div className="flex justify-between bg-slate-900/60 px-2 py-1 rounded">
              <span>GPIO 18 (Bwd):</span>
              <span className="text-slate-500">LOW (0V)</span>
            </div>
          </div>
        </div>

        {/* L298N Driver */}
        <div className="bg-slate-950 p-3 rounded-xl border border-slate-800 font-mono text-xs">
          <div className="text-rose-400 font-bold mb-2 flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-rose-500"></span>
            L298N Motor Driver
          </div>
          <div className="text-slate-400 space-y-1">
            <div>Supply: 12V External</div>
            <div>IN1: Connected to GPIO 17</div>
            <div>IN2: Connected to GPIO 18</div>
          </div>
        </div>

        {/* DC Motor Physical Visual */}
        <div className="bg-slate-950 p-3 rounded-xl border border-slate-800 flex flex-col items-center justify-center">
          <div className="relative">
            <RotateCw
              className={`w-14 h-14 text-amber-400 transition-all ${
                motorState === 'running' ? 'animate-spin' : ''
              }`}
              style={{ animationDuration: motorState === 'running' ? '0.4s' : '0s' }}
            />
            {motorState === 'running' && (
              <span className="absolute -top-1 -right-1 flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-amber-500"></span>
              </span>
            )}
          </div>
          <span className="text-xs font-mono font-bold mt-2 text-slate-200">
            {motorState === 'running'
              ? 'Rotating Forward (1200 RPM)'
              : motorState === 'stopped'
              ? 'Motor Stopped'
              : 'Standby'}
          </span>
          {motorState === 'running' && (
            <span className="text-[11px] font-mono text-amber-400 mt-0.5">
              sleep({countdown}s remaining)
            </span>
          )}
        </div>
      </div>

      <div className="flex justify-center">
        <button
          onClick={startMotorSequence}
          disabled={motorState === 'running'}
          className="flex items-center gap-2 px-6 py-2.5 bg-amber-500 hover:bg-amber-400 disabled:opacity-50 text-slate-950 font-bold text-sm rounded-xl transition-all cursor-pointer shadow-lg shadow-amber-950"
        >
          <Play className="w-4 h-4 fill-current" />
          {motorState === 'running' ? (isKn ? 'ಮೋಟಾರ್ ಓಡುತ್ತಿದೆ...' : 'Running 5s sequence...') : (isKn ? 'ಮೋಟಾರ್ ಚಾಲನೆ ಮಾಡಿ (Run motor.forward)' : 'Start 5-Second Motor Run')}
        </button>
      </div>
    </div>
  );
};

/* ---------------- 6. FACTORY SIMULATION ---------------- */
const FactorySimulation: React.FC<SubSimulationProps> = ({ isKn, onComplete }) => {
  const [temp, setTemp] = useState<number>(35); // Manual default is 35
  const [waterLevel, setWaterLevel] = useState<number>(20); // Manual default is 20

  const fanOn = temp > 30;
  const pumpOn = waterLevel < 30;

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* System 1: Fan Controller */}
        <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
          <div className="flex items-center justify-between mb-3">
            <span className="font-bold text-sm text-slate-200">
              {isKn ? '1. ಕೂಲಿಂಗ್ ಫ್ಯಾನ್ ನಿಯಂತ್ರಕ' : '1. Fan Controller'}
            </span>
            <span className={`text-xs font-mono font-bold px-2.5 py-0.5 rounded ${
              fanOn ? 'bg-emerald-950 text-emerald-400 border border-emerald-800' : 'bg-slate-900 text-slate-500'
            }`}>
              {fanOn ? 'Fan ON' : 'Fan OFF'}
            </span>
          </div>

          <div className="flex items-center gap-4">
            <div className="p-3 bg-slate-900 rounded-xl border border-slate-800 flex items-center justify-center">
              <RotateCw
                className={`w-10 h-10 text-emerald-400 ${fanOn ? 'animate-spin' : 'opacity-40'}`}
                style={{ animationDuration: '0.5s' }}
              />
            </div>
            <div className="flex-1">
              <div className="flex justify-between text-xs font-mono text-slate-400 mb-1">
                <span>Temperature: {temp}°C</span>
                <span className="text-amber-400">Threshold: 30°C</span>
              </div>
              <input
                type="range"
                min="15"
                max="50"
                value={temp}
                onChange={(e) => {
                  setTemp(Number(e.target.value));
                  if (onComplete) onComplete();
                }}
                className="w-full accent-emerald-500 cursor-pointer"
              />
              <div className="text-[11px] text-slate-500 mt-1">
                {isKn ? 'ಮ್ಯಾನುಯಲ್ ಬೆಲೆ: 35°C (>30 -> Fan ON)' : 'Manual value: 35°C (>30 -> Fan ON)'}
              </div>
            </div>
          </div>
        </div>

        {/* System 2: Water Pump Controller */}
        <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
          <div className="flex items-center justify-between mb-3">
            <span className="font-bold text-sm text-slate-200">
              {isKn ? '2. ವಾಟರ್ ಪಂಪ್ ನಿಯಂತ್ರಕ' : '2. Water Pump Controller'}
            </span>
            <span className={`text-xs font-mono font-bold px-2.5 py-0.5 rounded ${
              pumpOn ? 'bg-sky-950 text-sky-400 border border-sky-800' : 'bg-slate-900 text-slate-500'
            }`}>
              {pumpOn ? 'Water Pump ON' : 'Water Pump OFF'}
            </span>
          </div>

          <div className="flex items-center gap-4">
            {/* Water Tank Level Indicator */}
            <div className="w-14 h-16 bg-slate-900 border-2 border-slate-700 rounded-lg relative overflow-hidden flex items-end">
              <div
                className="w-full bg-sky-500 transition-all duration-300 relative"
                style={{ height: `${waterLevel}%` }}
              >
                {pumpOn && <div className="absolute inset-0 bg-sky-300/40 animate-pulse"></div>}
              </div>
              <span className="absolute inset-0 flex items-center justify-center font-mono text-[10px] text-white font-bold drop-shadow">
                {waterLevel}%
              </span>
            </div>
            <div className="flex-1">
              <div className="flex justify-between text-xs font-mono text-slate-400 mb-1">
                <span>Water Level: {waterLevel}%</span>
                <span className="text-sky-400">Low Limit: &lt; 30%</span>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                value={waterLevel}
                onChange={(e) => {
                  setWaterLevel(Number(e.target.value));
                  if (onComplete) onComplete();
                }}
                className="w-full accent-sky-500 cursor-pointer"
              />
              <div className="text-[11px] text-slate-500 mt-1">
                {isKn ? 'ಮ್ಯಾನುಯಲ್ ಬೆಲೆ: 20% (<30 -> Pump ON)' : 'Manual value: 20% (<30 -> Pump ON)'}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/* ---------------- 7. ROBOT SIMULATION ---------------- */
const RobotSimulation: React.FC<SubSimulationProps> = ({ isKn, onComplete }) => {
  const [posX, setPosX] = useState<number>(10);
  const [isDriving, setIsDriving] = useState<boolean>(false);
  const [timeRemaining, setTimeRemaining] = useState<number>(5);

  const driveRobot = () => {
    setIsDriving(true);
    setPosX(10);
    setTimeRemaining(5);

    let sec = 5;
    const interval = setInterval(() => {
      sec--;
      setTimeRemaining(sec);
      setPosX((prev) => Math.min(prev + 16, 85));
      if (sec <= 0) {
        clearInterval(interval);
        setIsDriving(false);
        if (onComplete) onComplete();
      }
    }, 1000);
  };

  return (
    <div className="space-y-4">
      {/* Workshop Grid Arena */}
      <div className="relative bg-slate-950 h-36 rounded-2xl border border-slate-800 overflow-hidden flex items-center px-4">
        {/* Floor Grid Lines */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:24px_24px] opacity-40"></div>

        {/* Mobile Robot Chassis */}
        <div
          className="relative transition-all duration-700 flex flex-col items-center"
          style={{ left: `${posX}%` }}
        >
          {/* Rover Body */}
          <div className="relative w-24 h-20 bg-emerald-950 border-2 border-emerald-500 rounded-xl p-2 flex flex-col justify-between shadow-2xl">
            {/* Left wheel */}
            <div className={`absolute -top-3 left-2 w-8 h-3.5 bg-slate-900 border border-slate-600 rounded ${isDriving ? 'animate-pulse' : ''}`}></div>
            {/* Right wheel */}
            <div className={`absolute -bottom-3 left-2 w-8 h-3.5 bg-slate-900 border border-slate-600 rounded ${isDriving ? 'animate-pulse' : ''}`}></div>

            <div className="text-[9px] font-mono font-bold text-emerald-400 text-center">
              AGV ROVER
            </div>

            {/* Ultrasonic sensor eyes */}
            <div className="flex justify-end gap-1.5 pr-1">
              <div className="w-2.5 h-2.5 rounded-full bg-sky-400"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-sky-400"></div>
            </div>

            <div className="text-[8px] font-mono text-slate-400 flex justify-between">
              <span>L:17,18</span>
              <span>R:22,23</span>
            </div>
          </div>
        </div>

        {/* Distance marker line */}
        <div className="absolute bottom-2 left-4 right-4 flex justify-between text-[10px] font-mono text-slate-600">
          <span>0m</span>
          <span>1m</span>
          <span>2m</span>
          <span>3m</span>
          <span>4m</span>
          <span>5m</span>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <span className="text-xs font-mono text-slate-400">
          Status:{' '}
          <strong className={isDriving ? 'text-emerald-400' : 'text-slate-300'}>
            {isDriving ? `Robot Moving Forward (${timeRemaining}s)` : 'Robot Stopped'}
          </strong>
        </span>
        <button
          onClick={driveRobot}
          disabled={isDriving}
          className="flex items-center gap-2 px-4 py-2 bg-emerald-600 hover:bg-emerald-500 disabled:opacity-50 text-white font-bold text-xs rounded-xl transition-all cursor-pointer shadow-lg shadow-emerald-950"
        >
          <Play className="w-4 h-4 fill-current" />
          {isDriving ? (isKn ? 'ರೋಬೋಟ್ ಚಲಿಸುತ್ತಿದೆ...' : 'Driving forward...') : (isKn ? 'ರೋಬೋಟ್ ಚಾಲನೆ (5 ಸೆಕೆಂಡು)' : 'Drive Robot Forward (5s)')}
        </button>
      </div>
    </div>
  );
};

/* ---------------- 8. X-BAR & R CHARTS SIMULATION ---------------- */
const XBarRSimulation: React.FC<SubSimulationProps> = ({ isKn, onComplete }) => {
  const [activeChart, setActiveChart] = useState<'xbar' | 'r'>('xbar');

  const sampleNumbers = [1, 2, 3, 4, 5];
  const xbarValues = [11.2, 12.0, 12.4, 13.0, 11.8];
  const rValues = [2, 2, 3, 2, 2];

  return (
    <div className="space-y-4">
      <div className="flex gap-2">
        <button
          onClick={() => {
            setActiveChart('xbar');
            if (onComplete) onComplete();
          }}
          className={`flex-1 py-2 text-xs font-bold rounded-xl font-mono transition-all ${
            activeChart === 'xbar' ? 'bg-sky-600 text-white shadow-lg shadow-sky-950' : 'bg-slate-800 text-slate-400'
          }`}
        >
          X-Bar Chart (ಮಾದರಿ ಸರಾಸರಿ / Average)
        </button>
        <button
          onClick={() => {
            setActiveChart('r');
            if (onComplete) onComplete();
          }}
          className={`flex-1 py-2 text-xs font-bold rounded-xl font-mono transition-all ${
            activeChart === 'r' ? 'bg-amber-600 text-white shadow-lg shadow-amber-950' : 'bg-slate-800 text-slate-400'
          }`}
        >
          R Chart (ಮಾದರಿ ವ್ಯಾಪ್ತಿ / Range)
        </button>
      </div>

      {/* SVG Matplotlib Chart Mockup */}
      <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
        <div className="text-center font-mono font-bold text-xs text-slate-300 mb-2">
          {activeChart === 'xbar' ? 'Matplotlib: X Bar Chart' : 'Matplotlib: R Chart'}
        </div>
        <svg viewBox="0 0 400 160" className="w-full h-44">
          {/* Grid lines */}
          <line x1="40" y1="20" x2="380" y2="20" stroke="#334155" strokeDasharray="3,3" />
          <line x1="40" y1="70" x2="380" y2="70" stroke="#334155" strokeDasharray="3,3" />
          <line x1="40" y1="120" x2="380" y2="120" stroke="#334155" strokeDasharray="3,3" />
          
          {/* Axis */}
          <line x1="40" y1="10" x2="40" y2="130" stroke="#64748b" strokeWidth="2" />
          <line x1="40" y1="130" x2="380" y2="130" stroke="#64748b" strokeWidth="2" />

          {/* Points & Lines */}
          {activeChart === 'xbar' ? (
            <>
              {/* Xbar points: 11.2 -> 12.0 -> 12.4 -> 13.0 -> 11.8 */}
              {/* Mapping: 10 => 120, 14 => 20 (delta 25px per unit) */}
              <polyline
                fill="none"
                stroke="#38bdf8"
                strokeWidth="2.5"
                points="80,90 140,70 200,60 260,45 320,75"
              />
              {[
                { x: 80, y: 90, val: 11.2 },
                { x: 140, y: 70, val: 12.0 },
                { x: 200, y: 60, val: 12.4 },
                { x: 260, y: 45, val: 13.0 },
                { x: 320, y: 75, val: 11.8 }
              ].map((p, idx) => (
                <g key={idx}>
                  <circle cx={p.x} cy={p.y} r="5" fill="#0284c7" stroke="#ffffff" strokeWidth="1.5" />
                  <text x={p.x} y={p.y - 9} fill="#38bdf8" fontSize="10" textAnchor="middle" fontFamily="monospace">
                    {p.val}
                  </text>
                  <text x={p.x} y="145" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="monospace">
                    S{idx + 1}
                  </text>
                </g>
              ))}
            </>
          ) : (
            <>
              {/* R points: 2, 2, 3, 2, 2 */}
              <polyline
                fill="none"
                stroke="#f59e0b"
                strokeWidth="2.5"
                points="80,80 140,80 200,40 260,80 320,80"
              />
              {[
                { x: 80, y: 80, val: 2 },
                { x: 140, y: 80, val: 2 },
                { x: 200, y: 40, val: 3 },
                { x: 260, y: 80, val: 2 },
                { x: 320, y: 80, val: 2 }
              ].map((p, idx) => (
                <g key={idx}>
                  <circle cx={p.x} cy={p.y} r="5" fill="#d97706" stroke="#ffffff" strokeWidth="1.5" />
                  <text x={p.x} y={p.y - 9} fill="#f59e0b" fontSize="10" textAnchor="middle" fontFamily="monospace">
                    {p.val}
                  </text>
                  <text x={p.x} y="145" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="monospace">
                    S{idx + 1}
                  </text>
                </g>
              ))}
            </>
          )}
        </svg>
      </div>
    </div>
  );
};

/* ---------------- 9. STATS SIMULATION ---------------- */
const StatsSimulation: React.FC<SubSimulationProps> = ({ isKn, onComplete }) => {
  const data = [10, 12, 14, 16, 18];
  const mean = 14;
  const variance = 10;
  const std = 3.16;

  return (
    <div className="space-y-4 font-mono text-xs">
      <div className="bg-slate-950 p-3 rounded-xl border border-slate-800 flex items-center justify-between">
        <span className="text-slate-400">Dataset (Shaft Diameters in mm):</span>
        <span className="text-amber-400 font-bold">[10, 12, 14, 16, 18]</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        <div className="bg-slate-950 p-3.5 rounded-xl border border-emerald-500/40">
          <span className="text-[10px] uppercase tracking-wider text-emerald-400 font-bold block mb-1">
            {isKn ? 'ಸರಾಸರಿ (Mean)' : 'Arithmetic Mean'}
          </span>
          <div className="text-2xl font-bold text-white">14.0</div>
          <div className="text-[10px] text-slate-500 mt-1">Sum(70) / 5 = 14</div>
        </div>

        <div className="bg-slate-950 p-3.5 rounded-xl border border-sky-500/40">
          <span className="text-[10px] uppercase tracking-wider text-sky-400 font-bold block mb-1">
            {isKn ? 'ವ್ಯತ್ಯಾಸ (Variance)' : 'Sample Variance'}
          </span>
          <div className="text-2xl font-bold text-white">10.0</div>
          <div className="text-[10px] text-slate-500 mt-1">Σ(x - x̄)² / (n - 1)</div>
        </div>

        <div className="bg-slate-950 p-3.5 rounded-xl border border-purple-500/40">
          <span className="text-[10px] uppercase tracking-wider text-purple-400 font-bold block mb-1">
            {isKn ? 'ಪ್ರಮಾಣಿತ ವಿಚಲನ (Std Dev)' : 'Standard Deviation'}
          </span>
          <div className="text-2xl font-bold text-white">3.16</div>
          <div className="text-[10px] text-slate-500 mt-1">√10 ≈ round(3.16, 2)</div>
        </div>
      </div>
    </div>
  );
};

/* ---------------- 10. SPC CONTROL LIMITS SIMULATION ---------------- */
const SpcSimulation: React.FC<SubSimulationProps> = ({ isKn, onComplete }) => {
  const points = [
    { val: 12, status: 'In Control' },
    { val: 13, status: 'In Control' },
    { val: 11, status: 'In Control' },
    { val: 15, status: 'In Control' },
    { val: 18, status: 'Out of Control', reason: '> UCL (16)' },
    { val: 10, status: 'Out of Control', reason: '< LCL (11)' }
  ];

  return (
    <div className="space-y-4">
      {/* Control Boundaries */}
      <div className="flex justify-between items-center bg-slate-950 p-3 rounded-xl border border-slate-800 font-mono text-xs">
        <div className="text-rose-400 font-bold">UCL = 16 (Upper Limit)</div>
        <div className="text-slate-400">Target Range: [11 to 16]</div>
        <div className="text-amber-400 font-bold">LCL = 11 (Lower Limit)</div>
      </div>

      {/* Point inspection cards */}
      <div className="grid grid-cols-2 md:grid-cols-6 gap-2">
        {points.map((p, i) => {
          const isOut = p.status === 'Out of Control';
          return (
            <div
              key={i}
              className={`p-2.5 rounded-xl border text-center font-mono ${
                isOut
                  ? 'bg-rose-950/60 border-rose-500/80 text-rose-300 animate-pulse'
                  : 'bg-emerald-950/40 border-emerald-600/50 text-emerald-300'
              }`}
            >
              <div className="text-xs text-slate-400">Point #{i + 1}</div>
              <div className="text-xl font-black my-0.5">{p.val}</div>
              <div className="text-[9px] font-bold uppercase">{p.status}</div>
              {p.reason && <div className="text-[8px] text-rose-400">{p.reason}</div>}
            </div>
          );
        })}
      </div>
    </div>
  );
};

/* ---------------- 11. FISHBONE SIMULATION ---------------- */
const FishboneSimulation: React.FC<SubSimulationProps> = ({ isKn, onComplete }) => {
  const [selectedBone, setSelectedBone] = useState<string>('Machine');

  const boneDetails: { [key: string]: { kn: string; en: string; causes: string[] } } = {
    Machine: {
      kn: 'ಯಂತ್ರದ ದೋಷಗಳು',
      en: 'Machine Causes',
      causes: ['Lathe spindle vibration', 'Tool bit wear', 'Hydraulic fluid pressure drop']
    },
    Material: {
      kn: 'ಕಚ್ಚಾ ವಸ್ತುವಿನ ದೋಷಗಳು',
      en: 'Material Causes',
      causes: ['High alloy porosity', 'Improper hardness heat treatment', 'Surface cracks']
    },
    Method: {
      kn: 'ಕಾರ್ಯಾಚರಣಾ ವಿಧಾನದ ದೋಷಗಳು',
      en: 'Method Causes',
      causes: ['Excessive cutting speed', 'Inadequate coolant flow', 'Improper clamping']
    },
    Manpower: {
      kn: 'ಮಾನವ ಸಂಪನ್ಮೂಲದ ದೋಷಗಳು',
      en: 'Manpower Causes',
      causes: ['Operator fatigue', 'Measurement reading parallax', 'Shift handover miscommunication']
    }
  };

  const handleSelectBone = (bone: string) => {
    setSelectedBone(bone);
    if (onComplete) onComplete();
  };

  return (
    <div className="space-y-4">
      {/* Interactive Fishbone Graphic */}
      <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
        <svg viewBox="0 0 460 200" className="w-full h-44">
          {/* Main Spine */}
          <line x1="30" y1="100" x2="360" y2="100" stroke="#f59e0b" strokeWidth="4" />
          {/* Head Arrow */}
          <polygon points="360,88 385,100 360,112" fill="#ef4444" />
          <text x="400" y="104" fill="#ef4444" fontSize="13" fontWeight="bold" fontFamily="monospace">
            DEFECT
          </text>

          {/* Rib 1: Manpower */}
          <line x1="100" y1="100" x2="60" y2="40" stroke="#38bdf8" strokeWidth="3" />
          <text
            x="50"
            y="30"
            fill="#38bdf8"
            fontSize="11"
            fontWeight="bold"
            fontFamily="monospace"
            className="cursor-pointer"
            onClick={() => handleSelectBone('Manpower')}
          >
            Manpower
          </text>

          {/* Rib 2: Material */}
          <line x1="240" y1="100" x2="200" y2="40" stroke="#38bdf8" strokeWidth="3" />
          <text
            x="190"
            y="30"
            fill="#38bdf8"
            fontSize="11"
            fontWeight="bold"
            fontFamily="monospace"
            className="cursor-pointer"
            onClick={() => handleSelectBone('Material')}
          >
            Material
          </text>

          {/* Rib 3: Machine */}
          <line x1="100" y1="100" x2="60" y2="160" stroke="#10b981" strokeWidth="3" />
          <text
            x="50"
            y="178"
            fill="#10b981"
            fontSize="11"
            fontWeight="bold"
            fontFamily="monospace"
            className="cursor-pointer"
            onClick={() => handleSelectBone('Machine')}
          >
            Machine
          </text>

          {/* Rib 4: Method */}
          <line x1="240" y1="100" x2="200" y2="160" stroke="#10b981" strokeWidth="3" />
          <text
            x="190"
            y="178"
            fill="#10b981"
            fontSize="11"
            fontWeight="bold"
            fontFamily="monospace"
            className="cursor-pointer"
            onClick={() => handleSelectBone('Method')}
          >
            Method
          </text>
        </svg>
      </div>

      {/* Selected Cause Drilldown */}
      <div className="bg-slate-950 p-3 rounded-xl border border-slate-800 text-xs font-mono">
        <div className="flex justify-between items-center mb-2">
          <span className="text-amber-400 font-bold">
            Selected 4M Branch: {selectedBone} ({isKn ? boneDetails[selectedBone].kn : boneDetails[selectedBone].en})
          </span>
          <span className="text-slate-500">Click branch to inspect</span>
        </div>
        <ul className="list-disc list-inside space-y-1 text-slate-300">
          {boneDetails[selectedBone].causes.map((c, i) => (
            <li key={i}>{c}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

/* ---------------- 12. STRESS BAR SIMULATION ---------------- */
const StressBarSimulation: React.FC<SubSimulationProps> = ({ isKn }) => {
  return (
    <div className="space-y-4">
      {/* 3D-styled FEA Bar Gradient */}
      <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
        <div className="text-xs font-mono text-slate-400 mb-2 flex justify-between">
          <span>Mechanical Bar Under Tensile Load</span>
          <span className="text-rose-400 font-bold">Peak Stress: 20 MPa @ Length = 2m</span>
        </div>
        
        {/* Color Heatmap Bar */}
        <div className="h-10 rounded-lg border border-slate-700 bg-gradient-to-r from-sky-500 via-rose-500 to-sky-600 relative flex items-center">
          <span className="absolute left-2 text-[10px] font-mono font-bold text-white">0m (10 MPa)</span>
          <span className="absolute left-[36%] text-[10px] font-mono font-bold text-white bg-slate-950/80 px-1.5 py-0.5 rounded">
            2m (20 MPa 🔥)
          </span>
          <span className="absolute right-2 text-[10px] font-mono font-bold text-white">5m (12 MPa)</span>
        </div>
      </div>

      {/* Matplotlib Curve */}
      <div className="bg-slate-950 p-3 rounded-xl border border-slate-800">
        <div className="text-center font-mono text-xs font-bold text-slate-300 mb-2">
          Matplotlib: Stress Distribution Along a Bar
        </div>
        <svg viewBox="0 0 360 140" className="w-full h-36">
          <line x1="30" y1="110" x2="330" y2="110" stroke="#64748b" />
          <line x1="30" y1="10" x2="30" y2="110" stroke="#64748b" />
          
          {/* Curve: (0,10) -> (1,15) -> (2,20) -> (3,18) -> (4,14) -> (5,12) */}
          <polyline
            fill="none"
            stroke="#f43f5e"
            strokeWidth="3"
            points="50,90 100,60 150,25 200,40 250,68 300,80"
          />
          {[
            { x: 50, y: 90, l: 0, s: 10 },
            { x: 100, y: 60, l: 1, s: 15 },
            { x: 150, y: 25, l: 2, s: 20 },
            { x: 200, y: 40, l: 3, s: 18 },
            { x: 250, y: 68, l: 4, s: 14 },
            { x: 300, y: 80, l: 5, s: 12 }
          ].map((pt, i) => (
            <g key={i}>
              <circle cx={pt.x} cy={pt.y} r="4" fill="#fb7185" stroke="#fff" strokeWidth="1" />
              <text x={pt.x} y={pt.y - 7} fill="#f43f5e" fontSize="9" textAnchor="middle" fontFamily="monospace">
                {pt.s}
              </text>
              <text x={pt.x} y="125" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="monospace">
                L={pt.l}
              </text>
            </g>
          ))}
        </svg>
      </div>
    </div>
  );
};

/* ---------------- 13. STRESS HOLE FINAL BOSS SIMULATION ---------------- */
const StressHoleSimulation: React.FC<SubSimulationProps> = ({ isKn }) => {
  return (
    <div className="space-y-4">
      {/* Comparative Visual Plates */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {/* Plate With Hole */}
        <div className="bg-slate-950 p-3.5 rounded-xl border border-rose-500/50">
          <div className="flex justify-between items-center mb-2 font-mono text-xs">
            <span className="text-rose-400 font-bold">Plate WITH Hole</span>
            <span className="text-rose-300 font-bold">Peak: 25 MPa 🔥</span>
          </div>
          <div className="h-16 bg-gradient-to-r from-sky-900 via-rose-600 to-sky-900 rounded-lg relative flex items-center justify-center">
            {/* The circular hole */}
            <div className="w-8 h-8 rounded-full bg-slate-950 border-2 border-white shadow-[0_0_15px_rgba(244,63,94,0.9)] flex items-center justify-center text-[8px] font-mono text-rose-300">
              Hole
            </div>
          </div>
          <div className="text-[10px] text-slate-400 mt-2 font-mono">
            Severe stress concentration around hole boundary (Kt ≈ 1.8x).
          </div>
        </div>

        {/* Plate Without Hole */}
        <div className="bg-slate-950 p-3.5 rounded-xl border border-sky-500/50">
          <div className="flex justify-between items-center mb-2 font-mono text-xs">
            <span className="text-sky-400 font-bold">Plate WITHOUT Hole</span>
            <span className="text-sky-300 font-bold">Peak: 14 MPa</span>
          </div>
          <div className="h-16 bg-gradient-to-r from-sky-950 via-sky-600 to-sky-950 rounded-lg relative flex items-center justify-center">
            <span className="text-xs font-mono text-white/80">Solid Uniform Member</span>
          </div>
          <div className="text-[10px] text-slate-400 mt-2 font-mono">
            Evenly distributed stress lines with no geometric discontinuity.
          </div>
        </div>
      </div>

      {/* Dual Comparative Chart */}
      <div className="bg-slate-950 p-3 rounded-xl border border-slate-800">
        <div className="flex justify-between items-center mb-2 font-mono text-xs">
          <span className="text-slate-300 font-bold">Stress Distribution Comparison</span>
          <div className="flex gap-4">
            <span className="text-rose-400 font-semibold">— With Hole (Max 25)</span>
            <span className="text-sky-400 font-semibold">— Without Hole (Max 14)</span>
          </div>
        </div>
        <svg viewBox="0 0 360 140" className="w-full h-36">
          <line x1="30" y1="110" x2="330" y2="110" stroke="#64748b" />
          <line x1="30" y1="10" x2="30" y2="110" stroke="#64748b" />

          {/* With hole: [10, 18, 25, 22, 16, 12] */}
          <polyline
            fill="none"
            stroke="#f43f5e"
            strokeWidth="3"
            points="50,90 100,55 150,15 200,35 250,65 300,82"
          />

          {/* Without hole: [10, 12, 14, 13, 12, 11] */}
          <polyline
            fill="none"
            stroke="#38bdf8"
            strokeWidth="2.5"
            strokeDasharray="4,2"
            points="50,90 100,80 150,70 200,75 250,80 300,85"
          />

          {[0, 1, 2, 3, 4, 5].map((l, i) => (
            <text key={i} x={50 + i * 50} y="125" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="monospace">
              L={l}
            </text>
          ))}
        </svg>
      </div>
    </div>
  );
};
