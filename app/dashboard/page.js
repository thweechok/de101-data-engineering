'use client';

import { useState, useEffect, useCallback } from 'react';
import { chapters } from '@/data/chapters-index';
import ProgressRing from '@/components/ProgressRing';

/* ─── helpers ─── */
function getCompleted() {
  if (typeof window === 'undefined') return [];
  try {
    return JSON.parse(localStorage.getItem('de101-completed') || '[]');
  } catch { return []; }
}

function getQuizScores() {
  if (typeof window === 'undefined') return {};
  try {
    return JSON.parse(localStorage.getItem('de101-quiz-scores') || '{}');
  } catch { return {}; }
}

function getStudyDates() {
  if (typeof window === 'undefined') return [];
  try {
    return JSON.parse(localStorage.getItem('de101-dates') || '[]');
  } catch { return []; }
}

function getStudyTime() {
  if (typeof window === 'undefined') return 0;
  return parseInt(localStorage.getItem('de101-study-time') || '0', 10);
}

function calcStreak(dates) {
  if (!dates.length) return 0;
  const unique = [...new Set(dates)].sort().reverse();
  const today = new Date().toISOString().slice(0, 10);
  const yesterday = new Date(Date.now() - 86400000).toISOString().slice(0, 10);

  if (unique[0] !== today && unique[0] !== yesterday) return 0;

  let streak = 1;
  for (let i = 0; i < unique.length - 1; i++) {
    const curr = new Date(unique[i]);
    const prev = new Date(unique[i + 1]);
    const diff = (curr - prev) / 86400000;
    if (diff === 1) streak++;
    else break;
  }
  return streak;
}

function formatTime(minutes) {
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  if (h === 0) return `${m} นาที`;
  return `${h} ชั่วโมง ${m} นาที`;
}

/* ─── badge definitions ─── */
const BADGES = [
  { id: 'start', emoji: '🌟', name: 'เริ่มต้น', desc: 'เรียนจบ 1 บทแรก', check: (c) => c >= 1 },
  { id: 'diligent', emoji: '🔥', name: 'ขยัน', desc: 'เข้าเรียนต่อเนื่อง 3 วัน', check: (_, s) => s >= 3 },
  { id: 'halfway', emoji: '🏆', name: 'ครึ่งทาง', desc: 'เรียนจบ 8 บท', check: (c) => c >= 8 },
  { id: 'complete', emoji: '💎', name: 'สำเร็จ', desc: 'เรียนจบครบ 16 บท', check: (c) => c >= 16 },
  { id: 'quiz', emoji: '🧠', name: 'Quiz Master', desc: 'ได้คะแนน Quiz เต็มทุกบท', check: (_, __, q) => {
    const scores = Object.values(q);
    return scores.length === 16 && scores.every(s => s === 3);
  }},
];

/* ─── component ─── */
export default function DashboardPage() {
  const [completed, setCompleted] = useState([]);
  const [quizScores, setQuizScores] = useState({});
  const [streak, setStreak] = useState(0);
  const [studyTime, setStudyTime] = useState(0);
  const [mounted, setMounted] = useState(false);

  /* load data on mount */
  useEffect(() => {
    setCompleted(getCompleted());
    setQuizScores(getQuizScores());
    setStreak(calcStreak(getStudyDates()));
    setStudyTime(getStudyTime());
    setMounted(true);
  }, []);

  /* study time tracker */
  useEffect(() => {
    if (!mounted) return;
    const interval = setInterval(() => {
      setStudyTime(prev => {
        const next = prev + 1;
        localStorage.setItem('de101-study-time', String(next));
        return next;
      });
    }, 60000); // every minute
    return () => clearInterval(interval);
  }, [mounted]);

  /* listen for storage changes from other tabs */
  useEffect(() => {
    const handler = () => {
      setCompleted(getCompleted());
      setQuizScores(getQuizScores());
      setStreak(calcStreak(getStudyDates()));
    };
    window.addEventListener('storage', handler);
    return () => window.removeEventListener('storage', handler);
  }, []);

  const completedCount = completed.length;
  const progress = Math.round((completedCount / 16) * 100);
  const estTimeRemaining = (16 - completedCount) * 45; // ~45 min per chapter

  /* quiz totals */
  const totalQuizScore = Object.values(quizScores).reduce((a, b) => a + b, 0);
  const totalPossible = 16 * 3;
  const quizAttempted = Object.keys(quizScores).length;

  if (!mounted) return null;

  return (
    <>
      <style jsx global>{`
        /* ===== DASHBOARD STYLES ===== */
        .dashboard-page {
          max-width: 1100px;
          margin: 0 auto;
          padding: 2rem 1.5rem 4rem;
        }

        .dashboard-header {
          text-align: center;
          margin-bottom: 2.5rem;
        }

        .dashboard-header h1 {
          font-size: 2rem;
          font-weight: 800;
          background: linear-gradient(135deg, var(--blue), var(--purple));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 0.25rem;
        }

        .dashboard-header p {
          color: var(--text-dim);
          font-size: 0.95rem;
        }

        .dashboard-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.25rem;
          margin-bottom: 2rem;
        }

        .dashboard-card {
          background: var(--bg2);
          border: 1px solid var(--border);
          border-radius: var(--radius);
          padding: 1.5rem;
          transition: transform 0.2s ease, border-color 0.2s ease;
          position: relative;
          overflow: hidden;
        }

        .dashboard-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(90deg, var(--blue), var(--purple));
          opacity: 0;
          transition: opacity 0.2s ease;
        }

        .dashboard-card:hover {
          transform: translateY(-2px);
          border-color: var(--border2);
        }

        .dashboard-card:hover::before {
          opacity: 1;
        }

        .dashboard-card-title {
          font-size: 0.8rem;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: var(--text-muted);
          margin-bottom: 1rem;
          font-weight: 600;
        }

        .dashboard-card--full {
          grid-column: 1 / -1;
        }

        /* Progress card */
        .progress-main {
          display: flex;
          align-items: center;
          gap: 1.5rem;
        }

        .progress-details h2 {
          font-size: 1.75rem;
          font-weight: 800;
          color: var(--text-bright);
          line-height: 1.2;
        }

        .progress-details h2 span {
          color: var(--blue);
        }

        .progress-details .progress-sub {
          color: var(--text-dim);
          font-size: 0.85rem;
          margin-top: 0.25rem;
        }

        .progress-bar-bg {
          width: 100%;
          height: 6px;
          background: var(--bg4);
          border-radius: 3px;
          margin-top: 1rem;
          overflow: hidden;
        }

        .progress-bar-fill {
          height: 100%;
          background: linear-gradient(90deg, var(--blue), var(--purple));
          border-radius: 3px;
          transition: width 0.8s cubic-bezier(0.22, 1, 0.36, 1);
        }

        /* Streak */
        .streak-display {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .streak-fire {
          font-size: 2.5rem;
          line-height: 1;
        }

        .streak-fire.animate {
          animation: fireGlow 1s ease-in-out infinite alternate;
        }

        @keyframes fireGlow {
          0% { filter: brightness(1) drop-shadow(0 0 4px rgba(245, 158, 11, 0.3)); transform: scale(1); }
          100% { filter: brightness(1.3) drop-shadow(0 0 12px rgba(245, 158, 11, 0.6)); transform: scale(1.1); }
        }

        .streak-info h2 {
          font-size: 1.75rem;
          font-weight: 800;
          color: var(--text-bright);
        }

        .streak-info h2 span {
          color: var(--orange);
        }

        .streak-info p {
          color: var(--text-dim);
          font-size: 0.85rem;
        }

        /* Quiz heatmap */
        .quiz-heatmap {
          display: grid;
          grid-template-columns: repeat(8, 1fr);
          gap: 0.5rem;
          margin-bottom: 0.75rem;
        }

        .quiz-cell {
          aspect-ratio: 1;
          border-radius: var(--radius-sm);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.7rem;
          font-weight: 700;
          color: rgba(255,255,255,0.7);
          transition: transform 0.15s ease;
          cursor: default;
          position: relative;
        }

        .quiz-cell:hover {
          transform: scale(1.15);
          z-index: 2;
        }

        .quiz-cell--3 { background: var(--green); color: #fff; }
        .quiz-cell--2 { background: var(--orange); color: #fff; }
        .quiz-cell--1 { background: var(--red); color: #fff; }
        .quiz-cell--0 { background: var(--bg4); color: var(--text-muted); }

        .quiz-total {
          text-align: center;
          color: var(--text-dim);
          font-size: 0.85rem;
        }

        .quiz-total strong {
          color: var(--text-bright);
          font-size: 1.1rem;
        }

        .quiz-legend {
          display: flex;
          justify-content: center;
          gap: 1rem;
          margin-top: 0.5rem;
          font-size: 0.7rem;
          color: var(--text-muted);
        }

        .quiz-legend span {
          display: flex;
          align-items: center;
          gap: 0.25rem;
        }

        .quiz-legend-dot {
          width: 10px;
          height: 10px;
          border-radius: 3px;
          display: inline-block;
        }

        /* Study time */
        .study-time-display {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .study-time-icon {
          font-size: 2.5rem;
          line-height: 1;
        }

        .study-time-info h2 {
          font-size: 1.5rem;
          font-weight: 800;
          color: var(--text-bright);
        }

        .study-time-info p {
          color: var(--text-dim);
          font-size: 0.85rem;
        }

        .study-time-pulse {
          display: inline-block;
          width: 8px;
          height: 8px;
          background: var(--green);
          border-radius: 50%;
          margin-left: 0.5rem;
          animation: pulse 2s ease-in-out infinite;
          vertical-align: middle;
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(0.8); }
        }

        /* Chapter grid */
        .chapter-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 0.75rem;
        }

        .chapter-mini {
          background: var(--bg3);
          border: 1px solid var(--border);
          border-radius: var(--radius-sm);
          padding: 0.75rem;
          text-align: center;
          transition: transform 0.2s ease, border-color 0.2s ease, background 0.2s ease;
          cursor: default;
          position: relative;
        }

        .chapter-mini:hover {
          transform: translateY(-2px);
          border-color: var(--border2);
          background: var(--bg4);
        }

        .chapter-mini-emoji {
          font-size: 1.5rem;
          margin-bottom: 0.25rem;
          display: block;
        }

        .chapter-mini-title {
          font-size: 0.7rem;
          color: var(--text-dim);
          line-height: 1.3;
          margin-bottom: 0.35rem;
          min-height: 1.8em;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .chapter-mini-status {
          font-size: 0.85rem;
        }

        .chapter-mini-phase {
          position: absolute;
          top: 4px;
          right: 4px;
          width: 8px;
          height: 8px;
          border-radius: 50%;
        }

        /* Badges */
        .badges-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 1rem;
        }

        .badge-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          padding: 1.25rem 0.75rem;
          background: var(--bg3);
          border: 1px solid var(--border);
          border-radius: var(--radius);
          transition: transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;
          position: relative;
        }

        .badge-item:not(.badge-locked):hover {
          transform: translateY(-3px);
          border-color: var(--blue-border);
          box-shadow: 0 8px 24px rgba(59, 130, 246, 0.1);
        }

        .badge-locked {
          opacity: 0.3;
          filter: grayscale(0.8);
        }

        .badge-emoji {
          font-size: 2rem;
          margin-bottom: 0.5rem;
          line-height: 1;
          position: relative;
        }

        .badge-locked .badge-emoji::after {
          content: '🔒';
          position: absolute;
          bottom: -4px;
          right: -8px;
          font-size: 0.8rem;
        }

        .badge-name {
          font-size: 0.85rem;
          font-weight: 700;
          color: var(--text-bright);
          margin-bottom: 0.15rem;
        }

        .badge-desc {
          font-size: 0.65rem;
          color: var(--text-muted);
          line-height: 1.3;
        }

        .badge-unlocked-glow {
          animation: badgeGlow 2s ease-in-out infinite alternate;
        }

        @keyframes badgeGlow {
          0% { box-shadow: 0 0 0 rgba(139, 92, 246, 0); }
          100% { box-shadow: 0 0 16px rgba(139, 92, 246, 0.2); }
        }

        /* Responsive */
        @media (max-width: 768px) {
          .dashboard-grid {
            grid-template-columns: 1fr;
          }
          .chapter-grid {
            grid-template-columns: repeat(4, 1fr);
          }
          .badges-grid {
            grid-template-columns: repeat(3, 1fr);
          }
          .quiz-heatmap {
            grid-template-columns: repeat(4, 1fr);
          }
        }

        @media (max-width: 480px) {
          .chapter-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .badges-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .dashboard-page {
            padding: 1.25rem 1rem 3rem;
          }
        }
      `}</style>

      <div className="dashboard-page">
        {/* Header */}
        <div className="dashboard-header">
          <h1>📊 แดชบอร์ดการเรียนรู้</h1>
          <p>ติดตามความก้าวหน้าของคุณในคอร์ส Data Engineering 101</p>
        </div>

        {/* Top stats grid */}
        <div className="dashboard-grid">
          {/* ──── 1. Overall Progress ──── */}
          <div className="dashboard-card">
            <div className="dashboard-card-title">ความก้าวหน้าโดยรวม</div>
            <div className="progress-main">
              <ProgressRing progress={progress} size={90} strokeWidth={6} />
              <div className="progress-details">
                <h2>
                  <span>{completedCount}</span> / 16 <span style={{ fontSize: '0.9rem', fontWeight: 500 }}>บท</span>
                </h2>
                <p className="progress-sub">
                  {completedCount === 16
                    ? '🎉 เรียนจบทุกบทแล้ว!'
                    : `⏱️ เหลืออีกประมาณ ${formatTime(estTimeRemaining)}`
                  }
                </p>
              </div>
            </div>
            <div className="progress-bar-bg">
              <div className="progress-bar-fill" style={{ width: `${progress}%` }} />
            </div>
          </div>

          {/* ──── 2. Streak ──── */}
          <div className="dashboard-card">
            <div className="dashboard-card-title">สถิติการเข้าเรียน</div>
            <div className="streak-display">
              <div className={`streak-fire ${streak > 1 ? 'animate' : ''}`}>
                {streak > 0 ? '🔥' : '❄️'}
              </div>
              <div className="streak-info">
                <h2>
                  <span>{streak}</span> วันติดต่อกัน
                </h2>
                <p>
                  {streak === 0 && 'เริ่มเรียนวันนี้เพื่อสร้าง Streak!'}
                  {streak === 1 && 'เริ่มต้นดีมาก! มาเรียนต่อพรุ่งนี้นะ'}
                  {streak === 2 && 'เก่งมาก! อีกนิดก็จะได้ Badge ขยัน'}
                  {streak >= 3 && streak < 7 && '🔥 คุณเป็นคนขยันมาก! ไปต่อเลย!'}
                  {streak >= 7 && '🏆 สุดยอด! Streak ยาวนานมาก!'}
                </p>
              </div>
            </div>
          </div>

          {/* ──── 3. Quiz Scores ──── */}
          <div className="dashboard-card">
            <div className="dashboard-card-title">คะแนน Quiz</div>
            <div className="quiz-heatmap">
              {chapters.map(ch => {
                const score = quizScores[ch.number];
                const level = score != null ? score : 0;
                const hasAttempted = score != null;
                return (
                  <div
                    key={ch.number}
                    className={`quiz-cell quiz-cell--${hasAttempted ? level : 0}`}
                    title={`บท ${ch.number}: ${ch.shortTitle} — ${hasAttempted ? `${score}/3` : 'ยังไม่ทำ'}`}
                  >
                    {ch.number}
                  </div>
                );
              })}
            </div>
            <div className="quiz-total">
              <strong>{totalQuizScore}</strong> / {totalPossible} คะแนน
              <span style={{ color: 'var(--text-muted)', marginLeft: '0.5rem', fontSize: '0.75rem' }}>
                ({quizAttempted}/16 บท)
              </span>
            </div>
            <div className="quiz-legend">
              <span><span className="quiz-legend-dot" style={{ background: 'var(--green)' }} /> 3/3</span>
              <span><span className="quiz-legend-dot" style={{ background: 'var(--orange)' }} /> 2/3</span>
              <span><span className="quiz-legend-dot" style={{ background: 'var(--red)' }} /> 1/3</span>
              <span><span className="quiz-legend-dot" style={{ background: 'var(--bg4)' }} /> ยังไม่ทำ</span>
            </div>
          </div>

          {/* ──── 4. Study Time ──── */}
          <div className="dashboard-card">
            <div className="dashboard-card-title">เวลาเรียนสะสม</div>
            <div className="study-time-display">
              <div className="study-time-icon">⏱️</div>
              <div className="study-time-info">
                <h2>
                  {formatTime(studyTime)}
                  <span className="study-time-pulse" />
                </h2>
                <p>กำลังนับเวลาอยู่...</p>
              </div>
            </div>
          </div>
        </div>

        {/* ──── 5. Chapter Progress Grid ──── */}
        <div className="dashboard-card dashboard-card--full" style={{ marginBottom: '1.25rem' }}>
          <div className="dashboard-card-title">ความก้าวหน้ารายบท</div>
          <div className="chapter-grid">
            {chapters.map(ch => {
              const done = completed.includes(ch.number) || completed.includes(String(ch.number));
              return (
                <div key={ch.number} className="chapter-mini">
                  <span
                    className="chapter-mini-phase"
                    style={{ background: ch.phaseColor }}
                    title={`Phase ${ch.phase}: ${ch.phaseTitle}`}
                  />
                  <span className="chapter-mini-emoji">{ch.emoji}</span>
                  <div className="chapter-mini-title">{ch.shortTitle}</div>
                  <div className="chapter-mini-status">{done ? '✅' : '⬜'}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ──── 6. Achievements ──── */}
        <div className="dashboard-card dashboard-card--full">
          <div className="dashboard-card-title">🏅 เหรียญตรา & ความสำเร็จ</div>
          <div className="badges-grid">
            {BADGES.map(badge => {
              const unlocked = badge.check(completedCount, streak, quizScores);
              return (
                <div
                  key={badge.id}
                  className={`badge-item ${unlocked ? 'badge-unlocked-glow' : 'badge-locked'}`}
                >
                  <div className="badge-emoji">{badge.emoji}</div>
                  <div className="badge-name">{badge.name}</div>
                  <div className="badge-desc">{badge.desc}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
