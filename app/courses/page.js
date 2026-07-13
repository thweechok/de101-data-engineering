'use client';
import Link from 'next/link';
import { useState } from 'react';
import CourseThumbnail from '@/components/CourseThumbnail';
import SearchBar from '@/components/SearchBar';
import { coursesRegistry } from '@/data/courses-registry';

// Extra metadata not stored in registry (order, group, rating, students)
const extraMeta = {
  'de101':                  { order:  1, group: 'de',   rating: 4.9, students: 2840 },
  'sql-mastery':            { order:  2, group: 'de',   rating: 4.8, students: 1930 },
  'python-de':              { order:  3, group: 'de',   rating: 4.8, students: 1620 },
  'de201':                  { order:  4, group: 'de',   rating: 4.9, students: 1180 },
  'kafka101':               { order:  5, group: 'de',   rating: 4.7, students:  870 },
  'gcp-cert':               { order:  6, group: 'de',   rating: 4.8, students:  720 },
  'de301':                  { order:  7, group: 'de',   rating: 4.9, students:  540 },
  '10phase-de':             { order:  8, group: 'de',   rating: 4.8, students: 1350 },
  'interview':              { order:  9, group: 'de',   rating: 4.9, students: 2100 },
  'line101':                { order: 10, group: 'line', rating: 4.7, students:  960 },
  'line-google':            { order: 11, group: 'line', rating: 4.8, students: 1240 },
  'flex-master':            { order: 12, group: 'line', rating: 4.7, students:  680 },
  'line-ai':                { order: 13, group: 'line', rating: 4.9, students: 1050 },
  'liff-builder':           { order: 14, group: 'line', rating: 4.8, students:  590 },
  'line-autopilot':         { order: 15, group: 'line', rating: 4.8, students: 1490 },
  'line-shop':              { order: 16, group: 'line', rating: 4.7, students:  780 },
  'line-pay':               { order: 17, group: 'line', rating: 4.8, students:  440 },
  'line-workshop':          { order: 18, group: 'line', rating: 4.9, students:  620 },
  'antigravity':            { order: 19, group: 'ai',   rating: 4.9, students: 1450 },
  'vscode-mastery':         { order: 20, group: 'ai',   rating: 4.8, students: 3100 },
  'notebooklm':             { order: 21, group: 'ai',   rating: 4.8, students: 1740 },
  'claude-ai':              { order: 22, group: 'ai',   rating: 4.9, students:  890 },
  'ads-mastery':            { order: 23, group: 'ecom', rating: 4.8, students: 1120 },
  'weather-canvas':         { order: 24, group: 'ecom', rating: 4.7, students:  560 },
  'chatgpt-pro':            { order: 25, group: 'ai',   rating: 4.9, students: 1200 },
  'google-analytics':       { order: 26, group: 'ai',   rating: 4.8, students:  980 },
  'canva-seller':           { order: 27, group: 'ecom', rating: 4.8, students:  870 },
  'line-oa-pro':            { order: 28, group: 'line', rating: 4.8, students:  760 },
  'tiktok-content':         { order: 29, group: 'ecom', rating: 4.9, students: 1100 },
  'codex-mastery':          { order: 30, group: 'ai',   rating: 4.9, students:  920 },
  'claude-ecosystem':       { order: 31, group: 'ai',   rating: 4.9, students:  850 },
  'uxui-design':            { order: 32, group: 'ai',   rating: 4.9, students:  780 },
  'n8n-automation':         { order: 33, group: 'ai',   rating: 4.9, students:  890 },
  'facebook-ads':           { order: 34, group: 'ecom', rating: 4.8, students: 1050 },
  'power-bi':               { order: 35, group: 'de',   rating: 4.8, students:  760 },
  'excel-business':         { order: 36, group: 'de',   rating: 4.8, students: 1320 },
  'python-automation':      { order: 37, group: 'de',   rating: 4.9, students:  980 },
  'tiktok-shop-setup':      { order: 38, group: 'ecom', rating: 4.8, students: 1100 },
  'prompt-engineering':     { order: 39, group: 'ai',   rating: 4.9, students:  870 },
  'notion-ai':              { order: 40, group: 'ai',   rating: 4.8, students:  650 },
  'dbt-mastery':            { order: 41, group: 'de',   rating: 4.9, students:  720 },
  'docker-de':              { order: 42, group: 'de',   rating: 4.8, students:  680 },
  'airflow-advanced':       { order: 43, group: 'de',   rating: 4.9, students:  560 },
  'pyspark-mastery':        { order: 44, group: 'de',   rating: 4.9, students:  490 },
  'databricks-fundamentals':{ order: 45, group: 'de',   rating: 4.8, students:  430 },
  'terraform-de':           { order: 46, group: 'de',   rating: 4.8, students:  380 },
  'aws-data-engineer':      { order: 47, group: 'de',   rating: 4.8, students:  510 },
  'azure-data-engineer':    { order: 48, group: 'de',   rating: 4.8, students:  420 },
  'apache-flink':           { order: 49, group: 'de',   rating: 4.9, students:  310 },
  'medallion-architecture': { order: 50, group: 'de',   rating: 4.9, students:  350 },
  'data-quality':           { order: 51, group: 'de',   rating: 4.8, students:  460 },
  'data-catalog':           { order: 52, group: 'de',   rating: 4.8, students:  290 },
  'de-portfolio':           { order: 53, group: 'de',   rating: 4.9, students:  840 },
  'freelance-de':           { order: 54, group: 'de',   rating: 4.9, students:  720 },
  'de-system-design':       { order: 55, group: 'de',   rating: 4.9, students:  380 },
  'sql-for-da':             { order: 56, group: 'da',   rating: 4.9, students: 1150 },
  'python-da':              { order: 57, group: 'da',   rating: 4.8, students:  980 },
  'tableau':                { order: 58, group: 'da',   rating: 4.8, students:  860 },
  'statistics-da':          { order: 59, group: 'da',   rating: 4.8, students:  720 },
  'da-career':              { order: 60, group: 'da',   rating: 4.9, students: 1320 },
  'tiktok-ads-pro':         { order: 61, group: 'ecom', rating: 4.9, students:  890 },
  'shopee-ads-pro':         { order: 62, group: 'ecom', rating: 4.9, students:  760 },
  'lazada-ads-pro':         { order: 63, group: 'ecom', rating: 4.8, students:  540 },
  // Software Engineering
  'sw-fundamentals':        { order:  64, group: 'sw', rating: 4.8, students:  920 },
  'sw-git':                 { order:  65, group: 'sw', rating: 4.9, students:  780 },
  'sw-thinking':            { order:  66, group: 'sw', rating: 4.8, students:  650 },
  'sw-html-css':            { order:  67, group: 'sw', rating: 4.9, students: 1150 },
  'sw-javascript':          { order:  68, group: 'sw', rating: 4.9, students: 1340 },
  'sw-javascript-advanced': { order:  69, group: 'sw', rating: 4.8, students:  720 },
  'sw-react':               { order:  70, group: 'sw', rating: 4.9, students: 1580 },
  'sw-nextjs':              { order:  71, group: 'sw', rating: 4.9, students:  980 },
  'sw-typescript':          { order:  72, group: 'sw', rating: 4.8, students:  850 },
  'sw-python-backend':      { order:  73, group: 'sw', rating: 4.8, students:  760 },
  'sw-fastapi':             { order:  74, group: 'sw', rating: 4.9, students:  680 },
  'sw-nodejs':              { order:  75, group: 'sw', rating: 4.8, students:  920 },
  'sw-sql':                 { order:  76, group: 'sw', rating: 4.9, students: 1100 },
  'sw-nosql-cache':         { order:  77, group: 'sw', rating: 4.8, students:  540 },
  'sw-auth-security':       { order:  78, group: 'sw', rating: 4.9, students:  640 },
  'sw-flutter':             { order:  79, group: 'sw', rating: 4.9, students:  870 },
  'sw-flutter-state':       { order:  80, group: 'sw', rating: 4.8, students:  490 },
  'sw-docker':              { order:  81, group: 'sw', rating: 4.9, students:  820 },
  'sw-cicd':                { order:  82, group: 'sw', rating: 4.8, students:  580 },
  'sw-aws':                 { order:  83, group: 'sw', rating: 4.8, students:  720 },
  'sw-linux-k8s':           { order:  84, group: 'sw', rating: 4.8, students:  490 },
  'sw-system-design':       { order:  85, group: 'sw', rating: 4.9, students:  960 },
  'sw-clean-code':          { order:  86, group: 'sw', rating: 4.9, students:  750 },
  'sw-microservices':       { order:  87, group: 'sw', rating: 4.9, students:  480 },
  'sw-testing':             { order:  88, group: 'sw', rating: 4.8, students:  560 },
  'sw-dsa':                 { order:  89, group: 'sw', rating: 4.9, students: 1280 },
  'sw-coding-interview':    { order:  90, group: 'sw', rating: 4.9, students: 1450 },
  'sw-junior-roadmap':      { order:  91, group: 'sw', rating: 4.9, students:  890 },
  // AI Engineer
  'ai-engineer':            { order:  92, group: 'ai', rating: 4.9, students:  650 },
};

// Build allCourses from registry (correct Thai text) + extraMeta
const allCourses = Object.entries(coursesRegistry)
  .map(([id, c]) => {
    const meta = extraMeta[id] || { order: 99, group: 'de', rating: 4.8, students: 500 };
    return {
      id,
      order: meta.order,
      emoji: c.emoji || '',
      group: meta.group,
      title: c.fullTitle || c.title || id,
      desc: c.desc || '',
      chapters: c.chapterCount || 0,
      duration: c.duration || '',
      level: c.level || '',
      levelColor: c.levelColor || '#8b5cf6',
      link: '/courses/' + id,
      tags: c.tags || [],
      rating: meta.rating,
      students: meta.students,
    };
  })
  .sort((a, b) => a.order - b.order);

const filterGroups = [
  { key: 'all',  label: '✨ ทั้งหมด' },
  { key: 'de',   label: 'Data Engineering' },
  { key: 'da',   label: 'Data Analyst' },
  { key: 'sw',   label: 'Software Dev' },
  { key: 'line', label: 'LINE API' },
  { key: 'ai',   label: 'AI Tools' },
  { key: 'ecom', label: 'E-Commerce' },
];

function Stars({ r }) {
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 1 }}>
      {[1,2,3,4,5].map(i => (
        <span key={i} style={{ color: i <= Math.floor(r) ? '#f59e0b' : '#374151', fontSize: '0.68rem' }}>★</span>
      ))}
      <span style={{ color: '#f59e0b', fontSize: '0.7rem', fontWeight: 700, marginLeft: 3 }}>{r}</span>
    </span>
  );
}

/* ── Mobile card (2-col grid) with cover image ── */
function MobileCourseCard({ c }) {
  const [pressed, setPressed] = useState(false);
  return (
    <Link href={c.link} style={{ textDecoration: 'none', color: 'inherit' }}
      onTouchStart={() => setPressed(true)} onTouchEnd={() => setPressed(false)}
      onMouseEnter={() => setPressed(true)} onMouseLeave={() => setPressed(false)}>
      <div style={{
        background: 'var(--glass)',
        border: `1.5px solid ${pressed ? c.levelColor + '55' : 'var(--border)'}`,
        borderRadius: 16, overflow: 'hidden',
        transform: pressed ? 'scale(0.97)' : 'scale(1)',
        transition: 'all 0.18s cubic-bezier(.4,0,.2,1)',
        boxShadow: pressed ? `0 4px 20px ${c.levelColor}33` : 'none',
      }}>
        {/* Cover image compact */}
        <CourseThumbnail course={c} compact={true} />
        {/* Card body */}
        <div style={{ padding: '10px 12px 13px' }}>
          <div style={{
            fontSize: '0.8rem', fontWeight: 700, lineHeight: 1.35,
            marginBottom: 7, color: 'var(--text)',
            display: '-webkit-box', WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical', overflow: 'hidden',
          }}>{c.emoji} {c.title}</div>
          <div style={{ display: 'flex', gap: 5, flexWrap: 'wrap', alignItems: 'center' }}>
            <span style={{
              fontSize: '0.58rem', padding: '2px 8px', borderRadius: 8, fontWeight: 700,
              background: `${c.levelColor}18`, color: c.levelColor,
              border: `1px solid ${c.levelColor}28`,
            }}>{c.level}</span>
            <span style={{ fontSize: '0.6rem', color: 'var(--text-muted)' }}>📖 {c.chapters} บท</span>
          </div>
        </div>
      </div>
    </Link>
  );
}

/* ── Desktop grid card ── */
function DesktopCard({ c }) {
  return (
    <Link href={c.link} style={{ textDecoration: 'none', color: 'inherit' }}>
      <div className="course-grid-card" style={{
        background: 'var(--glass)', border: '1px solid var(--border)',
        borderRadius: 18, overflow: 'hidden', height: '100%',
        display: 'flex', flexDirection: 'column',
        transition: 'all 0.25s', cursor: 'pointer',
      }}>
        <CourseThumbnail course={c} />
        <div style={{ padding: '14px 16px 18px', flex: 1, display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', gap: 8, alignItems: 'flex-start', marginBottom: 7 }}>
            <span style={{ fontSize: '1.5rem', lineHeight: 1, flexShrink: 0 }}>{c.emoji}</span>
            <h2 style={{
              fontSize: '0.88rem', fontWeight: 700, lineHeight: 1.35, margin: 0,
              display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden',
            }}>{c.title}</h2>
          </div>
          <p style={{
            fontSize: '0.74rem', color: 'var(--text-dim)', lineHeight: 1.55,
            marginBottom: 10, flex: 1,
            display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden',
          }}>{c.desc}</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4, marginBottom: 10 }}>
            {c.tags.slice(0,3).map(t => (
              <span key={t} style={{
                fontSize: '0.6rem', fontWeight: 600, padding: '2px 8px', borderRadius: 8,
                background: 'var(--glass2)', border: '1px solid var(--border)', color: 'var(--text-muted)',
              }}>{t}</span>
            ))}
            {c.tags.length > 3 && <span style={{ fontSize: '0.6rem', color: 'var(--text-muted)', padding: '2px 4px' }}>+{c.tags.length-3}</span>}
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
            <Stars r={c.rating} />
            <span style={{ fontSize: '0.67rem', color: 'var(--text-muted)' }}>👥 {c.students.toLocaleString()}</span>
          </div>
          <div style={{
            display: 'flex', gap: 10, fontSize: '0.67rem', color: 'var(--text-muted)',
            marginBottom: 13, borderTop: '1px solid var(--border)', paddingTop: 10,
          }}>
            <span>📖 {c.chapters} บท</span>
            <span>⏱️ {c.duration}</span>
            <span style={{ marginLeft: 'auto', color: '#22c55e', fontWeight: 700 }}>ฟรี!</span>
          </div>
          <div className="cta-btn" style={{
            textAlign: 'center', padding: '10px 0', borderRadius: 11,
            background: `linear-gradient(135deg,${c.levelColor},${c.levelColor}bb)`,
            color: '#fff', fontSize: '0.82rem', fontWeight: 700,
            boxShadow: `0 4px 12px ${c.levelColor}44`,
          }}>🚀 เริ่มเรียนเลย</div>
        </div>
      </div>
    </Link>
  );
}

const groupLabels = {
  de: { label: '📊 Data Engineering', color: '#8b5cf6' },
  da: { label: '🔍 Data Analyst', color: '#06b6d4' },
  sw: { label: '💻 Software Dev', color: '#6366f1' },
  line: { label: '💬 LINE API', color: '#22c55e' },
  ai: { label: '🤖 AI Tools', color: '#f59e0b' },
  ecom: { label: '🛒 E-Commerce', color: '#ef4444' },
};

/* ═══════════════════════════════════════════════════════
   DE Learning Roadmap — 27 courses, 5 phases
   ═══════════════════════════════════════════════════════ */
const DE_PHASES = [
  {
    phase: '🟣 Phase 1', label: 'Foundation', sub: 'เริ่มจาก 0 ได้เลย', color: '#8b5cf6',
    courses: [
      { id: 'de101',          emoji: '📊', name: 'DE101 พื้นฐาน' },
      { id: 'sql-mastery',    emoji: '🗄️', name: 'SQL Mastery' },
      { id: 'python-de',      emoji: '🐍', name: 'Python for DE' },
      { id: 'excel-business', emoji: '📊', name: 'Excel Business' },
      { id: 'power-bi',       emoji: '📊', name: 'Power BI' },
    ],
  },
  {
    phase: '🔵 Phase 2', label: 'Core Pipeline', sub: 'สร้าง Pipeline จริง', color: '#3b82f6',
    courses: [
      { id: 'de201',             emoji: '🚀', name: 'DE201 Pipeline' },
      { id: 'docker-de',         emoji: '🐳', name: 'Docker for DE' },
      { id: 'kafka101',          emoji: '🔥', name: 'Kafka 101' },
      { id: 'gcp-cert',          emoji: '☁️', name: 'GCP Cloud' },
      { id: 'python-automation', emoji: '🤖', name: 'Python Automation' },
    ],
  },
  {
    phase: '🟠 Phase 3', label: 'Advanced', sub: 'ระดับ Senior DE', color: '#f59e0b',
    courses: [
      { id: 'de301',           emoji: '💎', name: 'DE301 Production' },
      { id: 'dbt-mastery',     emoji: '🔧', name: 'dbt Mastery' },
      { id: 'airflow-advanced',emoji: '🌬️', name: 'Airflow Advanced' },
      { id: 'pyspark-mastery', emoji: '⚡', name: 'PySpark' },
    ],
  },
  {
    phase: '⭐ Phase 4', label: 'Specialization', sub: 'เลือกตามสาย', color: '#22c55e',
    courses: [
      { id: 'databricks-fundamentals', emoji: '🧱', name: 'Databricks' },
      { id: 'terraform-de',            emoji: '🔩', name: 'Terraform' },
      { id: 'aws-data-engineer',       emoji: '☁️', name: 'AWS DE' },
      { id: 'azure-data-engineer',     emoji: '🔷', name: 'Azure DE' },
      { id: 'apache-flink',            emoji: '⚡', name: 'Apache Flink' },
      { id: 'medallion-architecture',  emoji: '🏅', name: 'Medallion' },
      { id: 'data-quality',            emoji: '✅', name: 'Data Quality' },
      { id: 'data-catalog',            emoji: '📋', name: 'Data Catalog' },
      { id: 'de-system-design',        emoji: '🏗️', name: 'System Design' },
    ],
  },
  {
    phase: '🏆 Career', label: 'Ready to Work', sub: 'เตรียมงาน & สร้าง Brand', color: '#ef4444',
    courses: [
      { id: '10phase-de',  emoji: '🗺️', name: '10 Phase DE' },
      { id: 'interview',   emoji: '🎤', name: 'Interview Prep' },
      { id: 'de-portfolio',emoji: '💼', name: 'DE Portfolio' },
      { id: 'freelance-de',emoji: '💰', name: 'Freelance DE' },
    ],
  },
];

function DELearningRoadmap({ activeGroup, setActiveGroup }) {
  const [open, setOpen] = useState(false);
  // Only show button when 'de' tab or 'all'
  const show = activeGroup === 'all' || activeGroup === 'de';
  if (!show) return null;

  return (
    <div style={{ marginBottom: 28 }}>
      {/* Toggle header */}
      <button
        onClick={() => setOpen(o => !o)}
        style={{
          width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '14px 20px', borderRadius: open ? '16px 16px 0 0' : 16,
          background: 'linear-gradient(135deg,rgba(139,92,246,.15),rgba(59,130,246,.1))',
          border: '1px solid rgba(139,92,246,.35)', cursor: 'pointer',
          transition: 'all 0.25s',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <span style={{ fontSize: '1.3rem' }}>🗺️</span>
          <div style={{ textAlign: 'left' }}>
            <div style={{ color: '#e2e8f0', fontWeight: 700, fontSize: '0.95rem' }}>
              เส้นทางเรียน Data Engineering
            </div>
            <div style={{ color: '#94a3b8', fontSize: '0.72rem' }}>
              27 คอร์ส · 5 ระดับ · คลิกเพื่อดูแผนที่การเรียน
            </div>
          </div>
        </div>
        <span style={{
          color: '#8b5cf6', fontSize: '0.8rem', fontWeight: 700,
          transform: open ? 'rotate(180deg)' : 'none', transition: 'transform 0.25s',
          display: 'inline-block',
        }}>▼</span>
      </button>

      {/* Roadmap content */}
      {open && (
        <div style={{
          border: '1px solid rgba(139,92,246,.35)', borderTop: 'none',
          borderRadius: '0 0 16px 16px', padding: '20px 16px 24px',
          background: 'rgba(13,13,26,0.7)', backdropFilter: 'blur(12px)',
          overflowX: 'auto',
        }}>
          <div style={{
            display: 'flex', alignItems: 'flex-start', gap: 0,
            minWidth: 'max-content',
          }}>
            {DE_PHASES.map((ph, pi) => (
              <div key={pi} style={{ display: 'flex', alignItems: 'center' }}>
                {/* Phase column */}
                <div style={{ width: 160, flexShrink: 0 }}>
                  {/* Phase header */}
                  <div style={{
                    background: `${ph.color}18`, border: `1.5px solid ${ph.color}55`,
                    borderRadius: 12, padding: '8px 10px', marginBottom: 10, textAlign: 'center',
                  }}>
                    <div style={{ fontSize: '0.72rem', fontWeight: 800, color: ph.color, letterSpacing: '0.04em' }}>
                      {ph.phase}
                    </div>
                    <div style={{ fontSize: '0.78rem', fontWeight: 700, color: '#e2e8f0', marginTop: 1 }}>
                      {ph.label}
                    </div>
                    <div style={{ fontSize: '0.63rem', color: '#64748b', marginTop: 1 }}>{ph.sub}</div>
                  </div>

                  {/* Course nodes */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                    {ph.courses.map((c, ci) => (
                      <Link
                        key={c.id}
                        href={`/courses/${c.id}`}
                        onClick={() => setActiveGroup('de')}
                        style={{ textDecoration: 'none' }}
                      >
                        <div style={{
                          display: 'flex', alignItems: 'center', gap: 7,
                          padding: '7px 10px', borderRadius: 10,
                          background: `${ph.color}10`,
                          border: `1px solid ${ph.color}30`,
                          transition: 'all 0.18s',
                          cursor: 'pointer',
                        }}
                        onMouseEnter={e => {
                          e.currentTarget.style.background = `${ph.color}25`;
                          e.currentTarget.style.borderColor = `${ph.color}70`;
                          e.currentTarget.style.transform = 'translateX(3px)';
                        }}
                        onMouseLeave={e => {
                          e.currentTarget.style.background = `${ph.color}10`;
                          e.currentTarget.style.borderColor = `${ph.color}30`;
                          e.currentTarget.style.transform = 'none';
                        }}
                        >
                          <span style={{ fontSize: '0.9rem', flexShrink: 0 }}>{c.emoji}</span>
                          <span style={{
                            fontSize: '0.71rem', fontWeight: 600, color: '#cbd5e1',
                            lineHeight: 1.3,
                          }}>{c.name}</span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Arrow between phases */}
                {pi < DE_PHASES.length - 1 && (
                  <div style={{
                    display: 'flex', flexDirection: 'column', alignItems: 'center',
                    padding: '0 8px', paddingTop: 40,
                  }}>
                    <div style={{
                      width: 28, height: 2,
                      background: `linear-gradient(90deg,${ph.color}80,${DE_PHASES[pi+1].color}80)`,
                    }}/>
                    <div style={{
                      width: 0, height: 0,
                      borderTop: '5px solid transparent',
                      borderBottom: '5px solid transparent',
                      borderLeft: `7px solid ${DE_PHASES[pi+1].color}90`,
                      marginLeft: 2,
                    }}/>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Legend */}
          <div style={{
            marginTop: 16, paddingTop: 14, borderTop: '1px solid rgba(255,255,255,0.06)',
            display: 'flex', gap: 16, flexWrap: 'wrap', justifyContent: 'center',
          }}>
            {DE_PHASES.map(ph => (
              <div key={ph.phase} style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                <div style={{ width: 8, height: 8, borderRadius: '50%', background: ph.color }} />
                <span style={{ fontSize: '0.65rem', color: '#64748b' }}>{ph.label}</span>
              </div>
            ))}
            <span style={{ fontSize: '0.65rem', color: '#475569' }}>· คลิกที่คอร์สเพื่อเริ่มเรียน</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default function CoursesPage() {
  const [activeGroup, setActiveGroup] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [isMobile, setIsMobile] = useState(false);

  const { useEffect } = require('react');
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 680);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const searchFiltered = searchQuery.trim()
    ? allCourses.filter(c => {
        const q = searchQuery.toLowerCase();
        return (
          c.title.toLowerCase().includes(q) ||
          c.desc.toLowerCase().includes(q) ||
          c.tags.some(t => t.toLowerCase().includes(q))
        );
      })
    : null;

  const filtered = searchFiltered !== null
    ? searchFiltered
    : (activeGroup === 'all' ? allCourses : allCourses.filter(c => c.group === activeGroup));

  const totalStudents = allCourses.reduce((a, c) => a + (c.students || 0), 0);

  const groupedFiltered = activeGroup === 'all' && !searchQuery.trim()
    ? Object.entries(groupLabels).map(([key, meta]) => ({
        key, meta,
        courses: allCourses.filter(c => c.group === key),
      })).filter(g => g.courses.length > 0)
    : null;

  return (
    <div style={{ maxWidth: 1280, margin: '0 auto', padding: isMobile ? '0 16px 80px' : '0 20px 80px' }}>

      {/* Hero */}
      <div style={{ textAlign: 'center', padding: isMobile ? '28px 0 20px' : '48px 0 32px' }}>
        <Link href="/dashboard" style={{
          display: 'inline-flex', alignItems: 'center', gap: 6,
          padding: '5px 16px', borderRadius: 20,
          background: 'rgba(139,92,246,0.1)', border: '1px solid rgba(139,92,246,0.25)',
          color: '#a78bfa', fontSize: '0.74rem', fontWeight: 600,
          textDecoration: 'none', marginBottom: 14, transition: 'all 0.2s',
        }}>📊 ดูความก้าวหน้าของฉัน →</Link>
        <h1 className="hero-title-shimmer" style={{
          fontSize: isMobile ? '2rem' : 'clamp(2rem,5vw,3.2rem)',
          fontWeight: 900, lineHeight: 1.15, marginBottom: 10,
        }}>เรียนฟรี ทุกคอร์ส</h1>
        <p style={{ color: 'var(--text-dim)', fontSize: isMobile ? '0.85rem' : '1rem', maxWidth: 520, margin: '0 auto' }}>
          Data Engineering · LINE API · AI Tools · E-Commerce
        </p>
      </div>

      {/* Stats */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(4, auto)',
        gap: isMobile ? 10 : 40,
        justifyContent: isMobile ? 'stretch' : 'center',
        marginBottom: isMobile ? 24 : 36,
      }}>
        {[
          { val: allCourses.length, lbl: 'คอร์ส', color: '#8b5cf6', icon: '📚' },
          { val: allCourses.reduce((a,c)=>a+c.chapters,0), lbl: 'บทเรียน', color: '#22c55e', icon: '📖' },
          { val: Math.round(totalStudents/1000)+'K+', lbl: 'ผู้เรียน', color: '#3b82f6', icon: '👥' },
          { val: '100%', lbl: 'ฟรี', color: '#f59e0b', icon: '🎁' },
        ].map(s => (
          <div key={s.lbl} className="stat-number" style={{
            textAlign: 'center',
            background: isMobile ? 'var(--glass)' : 'transparent',
            border: isMobile ? '1px solid var(--border)' : 'none',
            borderRadius: isMobile ? 14 : 0,
            padding: isMobile ? '12px 8px' : 0,
          }}>
            {isMobile && <div style={{ fontSize: '1.1rem', marginBottom: 2 }}>{s.icon}</div>}
            <div style={{ fontSize: isMobile ? '1.4rem' : '1.8rem', fontWeight: 900, color: s.color }}>{s.val}</div>
            <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', marginTop: 2 }}>{s.lbl}</div>
          </div>
        ))}
      </div>

      {/* ── DE Learning Roadmap ── */}
      <DELearningRoadmap activeGroup={activeGroup} setActiveGroup={setActiveGroup} />

      {/* Search Bar */}
      <SearchBar onSearch={setSearchQuery} totalCount={filtered.length} />

      {/* Filter buttons */}
      {!searchQuery.trim() ? (
        <div style={{
          display: 'flex', gap: 8,
          overflowX: isMobile ? 'auto' : 'visible',
          flexWrap: isMobile ? 'nowrap' : 'wrap',
          justifyContent: isMobile ? 'flex-start' : 'center',
          marginBottom: isMobile ? 20 : 36,
          paddingBottom: isMobile ? 4 : 0,
          scrollbarWidth: 'none',
          WebkitOverflowScrolling: 'touch',
        }}>
          {filterGroups.map(g => {
            const count = g.key === 'all' ? allCourses.length : allCourses.filter(c=>c.group===g.key).length;
            const active = activeGroup === g.key;
            return (
              <button key={g.key} onClick={() => setActiveGroup(g.key)} className="filter-btn" style={{
                padding: isMobile ? '7px 14px' : '9px 20px',
                borderRadius: 24, fontSize: isMobile ? '0.76rem' : '0.82rem',
                fontWeight: 600, whiteSpace: 'nowrap', flexShrink: 0,
                border: `1.5px solid ${active ? '#8b5cf6' : 'var(--border)'}`,
                background: active ? 'linear-gradient(135deg,#7c3aed,#4f46e5)' : 'var(--glass)',
                color: active ? '#fff' : 'var(--text-dim)', cursor: 'pointer', transition: 'all 0.22s',
                boxShadow: active ? '0 4px 16px rgba(124,58,237,.4)' : 'none',
              }}>
                {g.label}
                <span style={{
                  marginLeft: 5, fontSize: '0.6rem', borderRadius: 10, padding: '1px 6px',
                  background: active ? 'rgba(255,255,255,.2)' : 'var(--glass2)',
                }}>{count}</span>
              </button>
            );
          })}
        </div>
      ) : (
        <div style={{ textAlign: 'center', marginBottom: 20 }}>
          <span style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: 'linear-gradient(135deg,rgba(139,92,246,.12),rgba(59,130,246,.12))',
            border: '1px solid rgba(139,92,246,.25)', borderRadius: 24,
            padding: '8px 22px', fontSize: '0.82rem', color: '#a78bfa', fontWeight: 600,
          }}>
            🔍 ผลการค้นหา <strong style={{ color: '#f1f5f9', fontSize: '1rem' }}>{filtered.length}</strong> คอร์ส
          </span>
        </div>
      )}

      {/* MOBILE: Grouped list */}
      {isMobile && !searchQuery.trim() && groupedFiltered && activeGroup === 'all' ? (
        <div>
          {groupedFiltered.map(({ key, meta, courses }) => (
            <div key={key} style={{ marginBottom: 28 }}>
              <div style={{
                display: 'flex', alignItems: 'center', gap: 10, marginBottom: 4,
                padding: '10px 14px', borderRadius: 12,
                background: `${meta.color}10`, border: `1px solid ${meta.color}25`,
              }}>
                <div style={{ width: 4, height: 18, borderRadius: 2, background: meta.color }} />
                <span style={{ fontSize: '0.88rem', fontWeight: 800, color: meta.color }}>{meta.label}</span>
                <span style={{
                  marginLeft: 'auto', fontSize: '0.65rem', padding: '2px 9px', borderRadius: 10,
                  background: `${meta.color}18`, color: meta.color, fontWeight: 700,
                }}>{courses.length} คอร์ส</span>
              </div>
              <div>
                {courses.map(c => <MobileCourseRow key={c.id} c={c} />)}
              </div>
            </div>
          ))}
        </div>
      ) : isMobile ? (
        <div>
          {filtered.length === 0 && (
            <div style={{ textAlign: 'center', padding: '40px 0', color: 'var(--text-muted)' }}>
              🔍 ไม่พบคอร์สที่ค้นหา
            </div>
          )}
          {/* 2-column card grid on mobile */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: 12,
          }}>
            {filtered.map(c => <MobileCourseCard key={c.id} c={c} />)}
          </div>
        </div>
      ) : (
        /* DESKTOP: Grid */
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(290px, 1fr))',
          gap: 22,
        }}>
          {filtered.map(c => <DesktopCard key={c.id} c={c} />)}
        </div>
      )}

      {/* Footer CTA */}
      <div style={{
        textAlign: 'center', marginTop: isMobile ? 40 : 60,
        padding: isMobile ? '24px 16px' : '36px 24px',
        background: 'linear-gradient(135deg,rgba(124,58,237,.1),rgba(59,130,246,.1))',
        border: '1px solid rgba(139,92,246,.2)', borderRadius: 24,
      }}>
        <div style={{ fontSize: '2rem', marginBottom: 8 }}>🎓</div>
        <h3 style={{ fontSize: isMobile ? '1.1rem' : '1.3rem', fontWeight: 800, marginBottom: 8 }}>ทุกคอร์สฟรี ไม่มีค่าใช้จ่าย</h3>
        <p style={{ color: 'var(--text-dim)', fontSize: '0.85rem', maxWidth: 420, margin: '0 auto 18px' }}>
          เรียนได้ทุกที่ ไม่ต้องสมัคร บันทึก Progress อัตโนมัติ
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 8, flexWrap: 'wrap' }}>
          {['✅ ฟรี 100%','📱 บนมือถือ','🔖 Progress ออโต้','♾️ ไม่หมดอายุ'].map(f => (
            <span key={f} style={{
              fontSize: '0.78rem', color: 'var(--text-dim)',
              background: 'var(--glass)', border: '1px solid var(--border)',
              borderRadius: 20, padding: '6px 14px',
            }}>{f}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
