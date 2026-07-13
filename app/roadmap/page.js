'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';

/* ── DE Path Courses ── */
const DE_PATH = [
  { id: 'de101', emoji: '🎓', title: 'DE101', sub: 'เริ่มต้นจากศูนย์', color: '#22c55e', phase: 1 },
  { id: 'sql-mastery', emoji: '🗄️', title: 'SQL Mastery', sub: 'Window, CTE, Optimize', color: '#06b6d4', phase: 1 },
  { id: 'python-de', emoji: '🐍', title: 'Python for DE', sub: 'OOP, Async, Testing', color: '#f59e0b', phase: 1 },
  { id: 'dbt-mastery', emoji: '🔧', title: 'dbt Mastery', sub: 'Transform, Test, Docs', color: '#10b981', phase: 2 },
  { id: 'kafka101', emoji: '⚡', title: 'Apache Kafka', sub: 'Real-time Streaming', color: '#ef4444', phase: 2 },
  { id: 'docker-de', emoji: '🐳', title: 'Docker for DE', sub: 'Container, Compose', color: '#0ea5e9', phase: 2 },
  { id: 'de201', emoji: '🏗️', title: 'DE201 Advanced', sub: 'Architecture, CI/CD', color: '#8b5cf6', phase: 2 },
  { id: 'gcp-cert', emoji: '☁️', title: 'GCP Cert', sub: 'BigQuery, Dataflow', color: '#3b82f6', phase: 3 },
  { id: 'aws-data-engineer', emoji: '☁️', title: 'AWS for DE', sub: 'S3, Glue, Athena', color: '#f97316', phase: 3 },
  { id: 'pyspark-mastery', emoji: '⚡', title: 'PySpark', sub: 'Big Data Processing', color: '#eab308', phase: 3 },
  { id: 'airflow-advanced', emoji: '🌬️', title: 'Airflow Advanced', sub: 'XCom, Sensors, TaskFlow', color: '#22c55e', phase: 3 },
  { id: 'de301', emoji: '🚀', title: 'DE301 Senior', sub: 'Production Systems', color: '#a855f7', phase: 3 },
  { id: 'de-system-design', emoji: '🏛️', title: 'System Design', sub: 'Architecture like Senior', color: '#6366f1', phase: 4 },
  { id: 'de-portfolio', emoji: '💼', title: 'DE Portfolio', sub: 'GitHub, Resume, LinkedIn', color: '#06b6d4', phase: 4 },
  { id: 'interview', emoji: '🎤', title: 'DE Interview', sub: 'Technical + Behavioral', color: '#f59e0b', phase: 4 },
];

const DA_PATH = [
  { id: 'sql-for-da', emoji: '🔍', title: 'SQL for DA', sub: 'Window, CTE, Business KPI', color: '#06b6d4', phase: 1 },
  { id: 'python-da', emoji: '🐼', title: 'Python for DA', sub: 'pandas, EDA, Visualization', color: '#eab308', phase: 1 },
  { id: 'excel-business', emoji: '📊', title: 'Excel Business', sub: 'Pivot, Dashboard, Power Query', color: '#22c55e', phase: 1 },
  { id: 'tableau', emoji: '📉', title: 'Tableau', sub: 'Dashboard, LOD, Storytelling', color: '#0ea5e9', phase: 2 },
  { id: 'power-bi', emoji: '📈', title: 'Power BI', sub: 'DAX, Reports, Gateway', color: '#f59e0b', phase: 2 },
  { id: 'google-analytics', emoji: '📡', title: 'Google Analytics', sub: 'GA4, Events, Funnels', color: '#ef4444', phase: 2 },
  { id: 'statistics-da', emoji: '📐', title: 'Statistics for DA', sub: 'A/B Test, Regression', color: '#8b5cf6', phase: 3 },
  { id: 'da-career', emoji: '🚀', title: 'DA Career Path', sub: 'Junior → Analytics Manager', color: '#eab308', phase: 4 },
];

const PHASES = {
  de: [
    { num: 1, label: 'Phase 1 — พื้นฐาน', color: '#22c55e' },
    { num: 2, label: 'Phase 2 — Core DE', color: '#3b82f6' },
    { num: 3, label: 'Phase 3 — Cloud & Scale', color: '#8b5cf6' },
    { num: 4, label: 'Phase 4 — Career Ready', color: '#f59e0b' },
  ],
  da: [
    { num: 1, label: 'Phase 1 — พื้นฐาน', color: '#06b6d4' },
    { num: 2, label: 'Phase 2 — Tools', color: '#0ea5e9' },
    { num: 3, label: 'Phase 3 — Analytics', color: '#8b5cf6' },
    { num: 4, label: 'Phase 4 — Career', color: '#f59e0b' },
  ],
};

function getCourseProgress(id) {
  if (typeof window === 'undefined') return [];
  try { return JSON.parse(localStorage.getItem(`${id}-progress`) || '[]'); } catch { return []; }
}

function CourseNode({ course, progress }) {
  const [hov, setHov] = useState(false);
  const done = progress.length;
  const isDone = done > 0;
  return (
    <Link href={`/courses/${course.id}`} style={{ textDecoration: 'none', color: 'inherit' }}
      onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}>
      <div style={{
        background: hov ? `linear-gradient(135deg,${course.color}15,${course.color}08)` : 'var(--glass,rgba(255,255,255,0.04))',
        border: `1.5px solid ${hov ? course.color + '66' : isDone ? course.color + '33' : 'rgba(255,255,255,0.08)'}`,
        borderRadius: 14, padding: '12px 16px',
        display: 'flex', alignItems: 'center', gap: 12,
        transition: 'all 0.22s',
        transform: hov ? 'translateY(-2px)' : 'none',
        boxShadow: hov ? `0 8px 28px ${course.color}22` : 'none',
        cursor: 'pointer', position: 'relative', overflow: 'hidden',
      }}>
        {isDone && (
          <div style={{
            position: 'absolute', bottom: 0, left: 0, height: 3, borderRadius: '0 0 14px 14px',
            width: `${Math.min(100, (done / 5) * 100)}%`,
            background: `linear-gradient(90deg, ${course.color}, ${course.color}88)`,
          }} />
        )}
        <span style={{ fontSize: '1.6rem', flexShrink: 0 }}>{course.emoji}</span>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ fontSize: '0.82rem', fontWeight: 800, lineHeight: 1.2,
            color: hov ? '#f1f5f9' : isDone ? course.color : 'var(--text)', marginBottom: 2 }}>
            {course.title}
          </div>
          <div style={{ fontSize: '0.65rem', color: hov ? course.color : 'var(--text-muted,#6b7280)', lineHeight: 1.2 }}>
            {course.sub}
          </div>
        </div>
        {isDone ? (
          <span style={{ fontSize: '0.75rem', flexShrink: 0, padding: '3px 8px', borderRadius: 8,
            background: `${course.color}20`, color: course.color, fontWeight: 700, border: `1px solid ${course.color}33` }}>
            {done} บท
          </span>
        ) : (
          <span style={{ fontSize: '0.8rem', color: hov ? course.color : 'var(--text-muted,#6b7280)' }}>→</span>
        )}
      </div>
    </Link>
  );
}

export default function RoadmapPage() {
  const [activePath, setActivePath] = useState('de');
  const [progressMap, setProgressMap] = useState({});

  const path = activePath === 'de' ? DE_PATH : DA_PATH;
  const phases = PHASES[activePath];

  useEffect(() => {
    const map = {};
    [...DE_PATH, ...DA_PATH].forEach(c => {
      map[c.id] = getCourseProgress(c.id);
    });
    setProgressMap(map);
  }, []);

  const totalCourses = path.length;
  const startedCourses = path.filter(c => (progressMap[c.id] || []).length > 0).length;
  const pathPct = totalCourses > 0 ? Math.round((startedCourses / totalCourses) * 100) : 0;

  return (
    <div className="content-wrapper">
      <div style={{ maxWidth: 780, margin: '0 auto' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 32 }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: 'linear-gradient(135deg,rgba(139,92,246,.15),rgba(59,130,246,.15))',
            border: '1px solid rgba(139,92,246,.3)', borderRadius: 24,
            padding: '5px 18px', fontSize: '0.75rem', color: '#a78bfa', fontWeight: 600, marginBottom: 14,
          }}>🗺️ Learning Path Roadmap</div>
          <h1 style={{ fontSize: 'clamp(1.5rem,3.5vw,2.2rem)', fontWeight: 900, marginBottom: 10, lineHeight: 1.2 }}>
            เลือกเส้นทางของคุณ
          </h1>
          <p style={{ color: 'var(--text-dim)', fontSize: '0.88rem', maxWidth: 480, margin: '0 auto' }}>
            เรียนตามลำดับ Phase เพื่อผลลัพธ์ดีที่สุด — คลิกคอร์สเพื่อเริ่มเรียนได้เลย
          </p>
        </div>

        {/* Path Selector */}
        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', marginBottom: 32 }}>
          {[
            { key: 'de', emoji: '📊', label: 'Data Engineering', color: '#8b5cf6' },
            { key: 'da', emoji: '🔍', label: 'Data Analyst', color: '#06b6d4' },
          ].map(p => (
            <button key={p.key} onClick={() => setActivePath(p.key)} style={{
              padding: '12px 28px', borderRadius: 24, fontSize: '0.9rem', fontWeight: 700,
              cursor: 'pointer', transition: 'all 0.25s',
              border: `1.5px solid ${activePath === p.key ? p.color : 'var(--border)'}`,
              background: activePath === p.key
                ? `linear-gradient(135deg,${p.color}25,${p.color}10)`
                : 'var(--glass)',
              color: activePath === p.key ? p.color : 'var(--text-dim)',
              boxShadow: activePath === p.key ? `0 4px 20px ${p.color}30` : 'none',
              transform: activePath === p.key ? 'scale(1.03)' : 'scale(1)',
            }}>
              {p.emoji} {p.label}
            </button>
          ))}
        </div>

        {/* Progress Summary */}
        <div style={{
          background: 'var(--glass)', border: '1px solid var(--border)',
          borderRadius: 16, padding: '14px 20px', marginBottom: 28,
          display: 'flex', alignItems: 'center', gap: 16,
        }}>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', marginBottom: 6 }}>
              ความคืบหน้า {activePath.toUpperCase()} Path
            </div>
            <div style={{ height: 8, borderRadius: 99, background: 'rgba(255,255,255,0.06)', overflow: 'hidden' }}>
              <div style={{
                height: '100%', borderRadius: 99, width: `${pathPct}%`,
                background: activePath === 'de'
                  ? 'linear-gradient(90deg,#8b5cf6,#3b82f6)'
                  : 'linear-gradient(90deg,#06b6d4,#0ea5e9)',
                transition: 'width 0.8s cubic-bezier(.4,0,.2,1)',
                boxShadow: activePath === 'de' ? '0 0 10px #8b5cf688' : '0 0 10px #06b6d488',
              }} />
            </div>
          </div>
          <div style={{ textAlign: 'center', flexShrink: 0 }}>
            <div style={{ fontSize: '1.3rem', fontWeight: 900,
              color: activePath === 'de' ? '#a78bfa' : '#22d3ee' }}>{startedCourses}/{totalCourses}</div>
            <div style={{ fontSize: '0.6rem', color: 'var(--text-muted)' }}>คอร์สที่เริ่มแล้ว</div>
          </div>
        </div>

        {/* Phase Timeline */}
        {phases.map((phase, pi) => {
          const phaseCourses = path.filter(c => c.phase === phase.num);
          const phaseStarted = phaseCourses.filter(c => (progressMap[c.id] || []).length > 0).length;
          return (
            <div key={phase.num} style={{ marginBottom: 32, position: 'relative' }}>
              {/* Phase Header */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
                <div style={{
                  width: 36, height: 36, borderRadius: '50%', flexShrink: 0,
                  background: phaseStarted === phaseCourses.length
                    ? `linear-gradient(135deg,${phase.color},${phase.color}cc)`
                    : 'var(--glass2)',
                  border: `2px solid ${phase.color}`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '0.8rem', fontWeight: 800,
                  color: phaseStarted === phaseCourses.length ? '#fff' : phase.color,
                  boxShadow: `0 0 12px ${phase.color}44`,
                }}>
                  {phaseStarted === phaseCourses.length ? '✓' : phase.num}
                </div>
                <div>
                  <div style={{ fontSize: '0.92rem', fontWeight: 800, color: phase.color }}>{phase.label}</div>
                  <div style={{ fontSize: '0.65rem', color: 'var(--text-muted)' }}>
                    {phaseStarted}/{phaseCourses.length} คอร์ส
                  </div>
                </div>
                {/* Connector line */}
                {pi < phases.length - 1 && (
                  <div style={{
                    position: 'absolute', left: 17, top: 52,
                    width: 2, height: 'calc(100% - 16px)',
                    background: phaseStarted === phaseCourses.length
                      ? `linear-gradient(to bottom,${phase.color},${phases[pi+1].color}44)`
                      : `linear-gradient(to bottom,${phase.color}44,transparent)`,
                    zIndex: 0,
                  }} />
                )}
              </div>

              {/* Courses Grid */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill,minmax(280px,1fr))',
                gap: 10, paddingLeft: 20,
              }}>
                {phaseCourses.map(c => (
                  <CourseNode key={c.id} course={c} progress={progressMap[c.id] || []} />
                ))}
              </div>
            </div>
          );
        })}

        {/* CTA */}
        <div style={{ textAlign: 'center', marginTop: 20, display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/courses" style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            padding: '12px 28px', borderRadius: 24,
            background: 'linear-gradient(135deg,#7c3aed,#4f46e5)',
            color: '#fff', fontWeight: 700, fontSize: '0.88rem',
            textDecoration: 'none', boxShadow: '0 4px 18px rgba(124,58,237,0.4)',
          }}>📚 ดูคอร์สทั้งหมด</Link>
          <Link href="/dashboard" style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            padding: '12px 28px', borderRadius: 24,
            background: 'var(--glass)', border: '1px solid var(--border)',
            color: 'var(--text-dim)', fontWeight: 700, fontSize: '0.88rem',
            textDecoration: 'none',
          }}>📊 ดูความก้าวหน้า</Link>
        </div>
      </div>
    </div>
  );
}
