'use client';
import Link from 'next/link';
import { chapters } from '@/data/chapters-index';

export default function Home() {
  const phases = [
    { num: 1, title: 'พื้นฐาน', color: '#10b981', emoji: '🟢', desc: 'DE คืออะไร, คอมพิวเตอร์, Terminal+Git, Python' },
    { num: 2, title: 'Core DE', color: '#3b82f6', emoji: '🔵', desc: 'SQL เจาะลึก, Python ปฏิบัติ, Data Modeling, ETL/ELT' },
    { num: 3, title: 'Modern Stack', color: '#8b5cf6', emoji: '🟣', desc: 'BigQuery, Airflow, dbt, Docker+Spark' },
    { num: 4, title: 'Production & Career', color: '#f59e0b', emoji: '🟡', desc: 'Data Quality, โปรเจกต์จริง, System Design, สมัครงาน' },
  ];

  return (
    <div className="content-wrapper">
      <div className="landing">
        <div className="landing-badge">🚀 คอร์สฟรี 16 บท — อัปเดต 2026</div>
        <h1>
          <span className="gradient">Data Engineering</span><br />
          เริ่มต้นจากศูนย์
        </h1>
        <p className="subtitle">
          คอร์สภาษาไทยที่จะพาคุณจากไม่เคยเขียนโค้ดเลย สู่การเป็น Data Engineer
          ที่สมัครงานบริษัทระดับ Agoda, SCB, LINE ได้จริง
        </p>

        <Link href={`/chapters/${chapters[0].slug}`} className="start-btn">
          🎓 เริ่มเรียนเลย — บทที่ 0
        </Link>

        <div className="stats-row">
          <div className="stat-item">
            <div className="stat-num" style={{ color: '#3b82f6' }}>16</div>
            <div className="stat-label">บทเรียน</div>
          </div>
          <div className="stat-item">
            <div className="stat-num" style={{ color: '#10b981' }}>21+</div>
            <div className="stat-label">แผนภาพ</div>
          </div>
          <div className="stat-item">
            <div className="stat-num" style={{ color: '#8b5cf6' }}>100+</div>
            <div className="stat-label">ตัวอย่างโค้ด</div>
          </div>
          <div className="stat-item">
            <div className="stat-num" style={{ color: '#f59e0b' }}>25+</div>
            <div className="stat-label">คำถามสัมภาษณ์</div>
          </div>
        </div>

        <div className="phase-cards">
          {phases.map(p => (
            <div className="phase-card" key={p.num}>
              <div className="phase-card-num" style={{ color: p.color }}>{p.emoji} Phase {p.num}</div>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
            </div>
          ))}
        </div>

        <h2 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: 20, marginTop: 40 }}>📚 สารบัญ</h2>

        <div style={{ textAlign: 'left', maxWidth: 600, margin: '0 auto' }}>
          {chapters.map(ch => (
            <Link
              key={ch.slug}
              href={`/chapters/${ch.slug}`}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 12,
                padding: '10px 16px',
                borderRadius: 'var(--radius-sm)',
                textDecoration: 'none',
                color: 'var(--text-dim)',
                transition: 'all 0.2s',
                borderBottom: '1px solid var(--border)',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = 'var(--glass2)'; e.currentTarget.style.color = 'var(--text)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--text-dim)'; }}
            >
              <span style={{ fontSize: '1.1rem', width: 28, textAlign: 'center' }}>{ch.emoji}</span>
              <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)', fontFamily: 'var(--font-en)', width: 24 }}>#{ch.number}</span>
              <span style={{ fontSize: '0.88rem' }}>{ch.shortTitle}</span>
              <span style={{ marginLeft: 'auto', fontSize: '0.65rem', padding: '2px 8px', borderRadius: 4, background: `${ch.phaseColor}15`, color: ch.phaseColor, border: `1px solid ${ch.phaseColor}30` }}>
                {ch.phaseTitle}
              </span>
            </Link>
          ))}
        </div>

        <div style={{ marginTop: 48, padding: 24, borderRadius: 'var(--radius)', background: 'var(--glass)', border: '1px solid var(--border)', maxWidth: 600, marginLeft: 'auto', marginRight: 'auto' }}>
          <h3 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: 8 }}>🎯 เรียนจบแล้วจะได้อะไร?</h3>
          <ul style={{ textAlign: 'left', paddingLeft: 20, fontSize: '0.85rem', color: 'var(--text-dim)', lineHeight: 2 }}>
            <li>✅ เข้าใจ Data Engineering ตั้งแต่พื้นฐานจนถึงขั้นสูง</li>
            <li>✅ เขียน SQL, Python สำหรับงาน DE ได้คล่อง</li>
            <li>✅ ใช้ BigQuery, Airflow, dbt, Docker, Spark ได้</li>
            <li>✅ สร้าง End-to-End Pipeline ได้ด้วยตัวเอง</li>
            <li>✅ มี Portfolio พร้อมสมัครงาน Junior Data Engineer</li>
            <li>✅ เตรียมสัมภาษณ์ได้ (25+ คำถามพร้อมเฉลย)</li>
          </ul>
        </div>

        <p style={{ marginTop: 40, fontSize: '0.72rem', color: 'var(--text-muted)' }}>
          DE101 © 2026 — คอร์สฟรีสำหรับคนไทยที่อยากเป็น Data Engineer
        </p>
      </div>
    </div>
  );
}
