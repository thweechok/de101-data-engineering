'use client';
import Link from 'next/link';
import { chapters } from '@/data/chapters-index';
import { useState, useEffect } from 'react';

export default function RoadmapPage() {
  const [completed, setCompleted] = useState([]);

  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem('de101-progress') || '[]');
      setCompleted(saved);
    } catch {}
  }, []);

  const phases = [
    {
      num: 1, title: 'Phase 1 — พื้นฐาน', color: '#10b981', emoji: '🟢',
      desc: 'ปูพื้นฐานให้แน่น ก่อนไปต่อ',
      chapters: chapters.filter(c => c.phase === 1),
      skills: ['เข้าใจ DE คืออะไร', 'ใช้ Terminal + Git', 'เขียน Python เบื้องต้น'],
    },
    {
      num: 2, title: 'Phase 2 — Core DE', color: '#3b82f6', emoji: '🔵',
      desc: 'ทักษะหลักที่ DE ต้องใช้ทุกวัน',
      chapters: chapters.filter(c => c.phase === 2),
      skills: ['เขียน SQL ซับซ้อน', 'Python for Data', 'ออกแบบ Data Model', 'สร้าง ETL Pipeline'],
    },
    {
      num: 3, title: 'Phase 3 — Modern Stack', color: '#8b5cf6', emoji: '🟣',
      desc: 'เครื่องมือจริงที่บริษัทใช้',
      chapters: chapters.filter(c => c.phase === 3),
      skills: ['BigQuery', 'Apache Airflow', 'dbt', 'Docker + Spark'],
    },
    {
      num: 4, title: 'Phase 4 — Production & Career', color: '#f59e0b', emoji: '🟡',
      desc: 'พร้อมทำงานจริง + สมัครงาน',
      chapters: chapters.filter(c => c.phase === 4),
      skills: ['Data Quality Testing', 'End-to-End Project', 'System Design', 'เตรียมสัมภาษณ์'],
    },
  ];

  const getPhaseProgress = (phaseChapters) => {
    const done = phaseChapters.filter(c => completed.includes(c.number)).length;
    return Math.round((done / phaseChapters.length) * 100);
  };

  return (
    <div className="content-wrapper">
      <div style={{ maxWidth: 700, margin: '0 auto' }}>
        <h1 style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: 8 }}>
          🎯 Learning Path Roadmap
        </h1>
        <p style={{ color: 'var(--text-dim)', fontSize: '0.88rem', marginBottom: 32 }}>
          เส้นทางเรียน DE101 จากศูนย์สู่ Junior Data Engineer — เรียนตามลำดับเพื่อผลลัพธ์ดีที่สุด
        </p>

        <div className="roadmap-timeline">
          {phases.map((phase, pi) => {
            const prog = getPhaseProgress(phase.chapters);
            const isComplete = prog === 100;
            return (
              <div key={phase.num} className={`roadmap-phase ${isComplete ? 'complete' : ''}`}>
                {/* Timeline connector */}
                {pi < phases.length - 1 && (
                  <div className="roadmap-connector" style={{
                    background: isComplete ? phase.color : 'var(--border)',
                  }} />
                )}

                {/* Phase circle */}
                <div className="roadmap-circle" style={{
                  background: isComplete ? phase.color : 'var(--bg3)',
                  borderColor: phase.color,
                  color: isComplete ? '#fff' : phase.color,
                }}>
                  {isComplete ? '✓' : phase.num}
                </div>

                {/* Phase content */}
                <div className="roadmap-content">
                  <div className="roadmap-phase-header">
                    <h2 style={{ color: phase.color, fontSize: '1.1rem', fontWeight: 700 }}>
                      {phase.emoji} {phase.title}
                    </h2>
                    <span className="roadmap-progress-badge" style={{
                      background: `${phase.color}15`,
                      color: phase.color,
                      border: `1px solid ${phase.color}30`,
                    }}>
                      {prog}%
                    </span>
                  </div>
                  <p style={{ fontSize: '0.82rem', color: 'var(--text-dim)', marginBottom: 12 }}>{phase.desc}</p>

                  {/* Progress bar */}
                  <div className="stat-bar" style={{ marginBottom: 12 }}>
                    <div className="stat-bar-fill" style={{ width: `${prog}%`, background: phase.color }} />
                  </div>

                  {/* Skills */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 12 }}>
                    {phase.skills.map(s => (
                      <span key={s} className="roadmap-skill">{s}</span>
                    ))}
                  </div>

                  {/* Chapter links */}
                  <div className="roadmap-chapters">
                    {phase.chapters.map(ch => (
                      <Link
                        key={ch.slug}
                        href={`/chapters/${ch.slug}`}
                        className={`roadmap-chapter ${completed.includes(ch.number) ? 'done' : ''}`}
                      >
                        <span>{ch.emoji}</span>
                        <span>#{ch.number} {ch.shortTitle}</span>
                        {completed.includes(ch.number) && <span className="badge-glow" style={{ marginLeft: 'auto' }}>✅</span>}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Summary */}
        <div style={{ textAlign: 'center', marginTop: 40 }}>
          <Link href="/" className="glow-btn" style={{ display: 'inline-block', padding: '12px 28px', borderRadius: 'var(--radius)', textDecoration: 'none', color: '#fff', fontSize: '0.9rem', fontWeight: 700 }}>
            📚 กลับหน้าสารบัญ
          </Link>
        </div>
      </div>
    </div>
  );
}
