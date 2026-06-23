'use client';
import Link from 'next/link';
import { chapters } from '@/data/chapters-index';
import Certificate from '@/components/Certificate';
import { useState, useEffect, useRef } from 'react';

function AnimatedCounter({ target, suffix = '', color }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const num = parseInt(target);
          const duration = 1500;
          const step = Math.ceil(num / (duration / 16));
          let current = 0;
          const timer = setInterval(() => {
            current += step;
            if (current >= num) {
              current = num;
              clearInterval(timer);
            }
            setCount(current);
          }, 16);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div className="stat-num" ref={ref} style={{ color }}>
      {count}{suffix}
    </div>
  );
}

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
        {/* Animated gradient orbs */}
        <div className="hero-bg">
          <div className="orb orb-1" />
          <div className="orb orb-2" />
          <div className="orb orb-3" />
        </div>

        <div className="landing-badge">🚀 คอร์สฟรี 16 บท — อัปเดต 2026</div>
        <h1>
          <span className="gradient animated-gradient">Data Engineering</span><br />
          เริ่มต้นจากศูนย์
        </h1>
        <p className="subtitle">
          คอร์สภาษาไทยที่จะพาคุณจากไม่เคยเขียนโค้ดเลย สู่การเป็น Data Engineer
          ที่สมัครงานบริษัทระดับ Agoda, SCB, LINE ได้จริง
        </p>

        <Link href={`/chapters/${chapters[0].slug}`} className="start-btn glow-btn">
          🎓 เริ่มเรียนเลย — บทที่ 0
        </Link>

        <div className="stats-row">
          <div className="stat-item">
            <AnimatedCounter target="16" color="#3b82f6" />
            <div className="stat-label">บทเรียน</div>
          </div>
          <div className="stat-item">
            <AnimatedCounter target="21" suffix="+" color="#10b981" />
            <div className="stat-label">แผนภาพ</div>
          </div>
          <div className="stat-item">
            <AnimatedCounter target="100" suffix="+" color="#8b5cf6" />
            <div className="stat-label">ตัวอย่างโค้ด</div>
          </div>
          <div className="stat-item">
            <AnimatedCounter target="25" suffix="+" color="#f59e0b" />
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

        <div className="chapter-list-landing">
          {chapters.map((ch, i) => (
            <Link
              key={ch.slug}
              href={`/chapters/${ch.slug}`}
              className="chapter-list-item"
              style={{ animationDelay: `${0.05 * i}s` }}
            >
              <span className="cli-emoji">{ch.emoji}</span>
              <span className="cli-num">#{ch.number}</span>
              <span className="cli-title">{ch.shortTitle}</span>
              <span className="cli-badge" style={{ background: `${ch.phaseColor}15`, color: ch.phaseColor, border: `1px solid ${ch.phaseColor}30` }}>
                {ch.phaseTitle}
              </span>
            </Link>
          ))}
        </div>

        <div className="benefits-card">
          <h3>🎯 เรียนจบแล้วจะได้อะไร?</h3>
          <ul>
            <li>✅ เข้าใจ Data Engineering ตั้งแต่พื้นฐานจนถึงขั้นสูง</li>
            <li>✅ เขียน SQL, Python สำหรับงาน DE ได้คล่อง</li>
            <li>✅ ใช้ BigQuery, Airflow, dbt, Docker, Spark ได้</li>
            <li>✅ สร้าง End-to-End Pipeline ได้ด้วยตัวเอง</li>
            <li>✅ มี Portfolio พร้อมสมัครงาน Junior Data Engineer</li>
            <li>✅ เตรียมสัมภาษณ์ได้ (25+ คำถามพร้อมเฉลย)</li>
          </ul>
        </div>

        <Certificate />

        <p style={{ marginTop: 40, fontSize: '0.72rem', color: 'var(--text-muted)' }}>
          DE101 © 2026 — คอร์สฟรีสำหรับคนไทยที่อยากเป็น Data Engineer
        </p>
      </div>
    </div>
  );
}
