'use client';
import Link from 'next/link';
import { chapters } from '@/data/chapters-index';
import Certificate from '@/components/Certificate';
import ProgressRing from '@/components/ProgressRing';
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
  const [completed, setCompleted] = useState([]);
  const [streak, setStreak] = useState(0);
  const [flipped, setFlipped] = useState({});
  const [sparkles, setSparkles] = useState([]);

  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem('de101-progress') || '[]');
      setCompleted(saved);
    } catch {}

    // Calculate streak
    try {
      const dates = JSON.parse(localStorage.getItem('de101-dates') || '[]');
      const today = new Date().toISOString().split('T')[0];
      if (!dates.includes(today)) {
        dates.push(today);
        localStorage.setItem('de101-dates', JSON.stringify(dates.slice(-30)));
      }
      let s = 0;
      const sorted = [...dates].sort().reverse();
      for (let i = 0; i < sorted.length; i++) {
        const expected = new Date();
        expected.setDate(expected.getDate() - i);
        if (sorted[i] === expected.toISOString().split('T')[0]) {
          s++;
        } else break;
      }
      setStreak(s);
    } catch {}
  }, []);

  // Sparkle cursor effect
  useEffect(() => {
    let count = 0;
    const handleMove = (e) => {
      count++;
      if (count % 3 !== 0) return; // throttle
      const colors = ['#3b82f6', '#8b5cf6', '#ec4899', '#10b981', '#f59e0b'];
      const sparkle = {
        id: Date.now() + Math.random(),
        x: e.clientX,
        y: e.clientY,
        color: colors[Math.floor(Math.random() * colors.length)],
      };
      setSparkles(prev => [...prev.slice(-8), sparkle]);
      setTimeout(() => {
        setSparkles(prev => prev.filter(s => s.id !== sparkle.id));
      }, 600);
    };
    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, []);

  const progress = Math.round((completed.length / chapters.length) * 100);

  const phases = [
    { num: 1, title: 'พื้นฐาน', color: '#10b981', emoji: '🟢', desc: 'DE คืออะไร, คอมพิวเตอร์, Terminal+Git, Python', details: 'เรียนรู้ว่า Data Engineer ทำอะไร ฝึกใช้ Terminal, Git, และเขียน Python เบื้องต้น' },
    { num: 2, title: 'Core DE', color: '#3b82f6', emoji: '🔵', desc: 'SQL เจาะลึก, Python ปฏิบัติ, Data Modeling, ETL/ELT', details: 'เขียน SQL ซับซ้อน, Python สำหรับ Data, ออกแบบ Star Schema, สร้าง Pipeline' },
    { num: 3, title: 'Modern Stack', color: '#8b5cf6', emoji: '🟣', desc: 'BigQuery, Airflow, dbt, Docker+Spark', details: 'ใช้เครื่องมือจริงที่บริษัทต่างๆ ใช้: BigQuery, Airflow, dbt, Docker, Spark' },
    { num: 4, title: 'Production & Career', color: '#f59e0b', emoji: '🟡', desc: 'Data Quality, โปรเจกต์จริง, System Design, สมัครงาน', details: 'สร้าง Portfolio, เตรียมสัมภาษณ์, System Design สำหรับ Junior DE' },
  ];

  const toggleFlip = (num) => {
    setFlipped(prev => ({ ...prev, [num]: !prev[num] }));
  };

  return (
    <div className="content-wrapper">
      <div className="landing">
        {/* Sparkle cursor */}
        {sparkles.map(s => (
          <div
            key={s.id}
            className="sparkle"
            style={{ left: s.x, top: s.y, background: s.color }}
          />
        ))}

        {/* Animated gradient orbs + morphing shapes */}
        <div className="hero-bg">
          <div className="orb orb-1" />
          <div className="orb orb-2" />
          <div className="orb orb-3" />
        </div>

        {/* Streak counter */}
        {streak > 1 && (
          <div className="streak-counter" style={{ marginBottom: 8 }}>
            <span className="streak-fire">🔥</span> เรียนติดต่อกัน {streak} วัน!
          </div>
        )}

        <div className="landing-badge">🚀 คอร์สฟรี 16 บท — อัปเดต 2026</div>
        <h1>
          <span className="gradient animated-gradient typewriter">Data Engineering</span><br />
          เริ่มต้นจากศูนย์
        </h1>
        <p className="subtitle">
          คอร์สภาษาไทยที่จะพาคุณจากไม่เคยเขียนโค้ดเลย สู่การเป็น Data Engineer
          ที่สมัครงานบริษัทระดับ Agoda, SCB, LINE ได้จริง
        </p>

        {/* Progress Ring */}
        {completed.length > 0 && (
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: 16, gap: 8 }}>
            <ProgressRing progress={progress} size={70} strokeWidth={5} />
            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
              {completed.length < chapters.length
                ? `⏰ เรียนอีก ~${Math.ceil((chapters.length - completed.length) * 20 / 60)} ชม. จบทั้งคอร์ส`
                : '🎉 เรียนจบครบทุกบทแล้ว!'}
            </div>
          </div>
        )}

        <Link href={`/chapters/${chapters[completed.length < chapters.length ? chapters.filter(c => !completed.includes(c.number))[0]?.number || 0 : 0].slug}`} className="start-btn glow-btn">
          🎓 {completed.length >= chapters.length ? '🎉 เรียนจบแล้ว!' : completed.length > 0 ? `เรียนต่อ — บทที่ ${chapters.filter(c => !completed.includes(c.number))[0]?.number || 0}` : 'เริ่มเรียนเลย — บทที่ 0'}
        </Link>

        <div className="stats-row">
          <div className="stat-item">
            <AnimatedCounter target="16" color="#3b82f6" />
            <div className="stat-label">บทเรียน</div>
            <div className="stat-bar"><div className="stat-bar-fill" style={{ width: `${progress}%`, background: 'linear-gradient(90deg, #3b82f6, #8b5cf6)' }} /></div>
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

        {/* Flip Cards */}
        <div className="phase-cards">
          {phases.map(p => (
            <div
              className={`phase-card flip-card ${flipped[p.num] ? 'flipped' : ''}`}
              key={p.num}
              onClick={() => toggleFlip(p.num)}
              title="คลิกเพื่อดูรายละเอียด"
            >
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <div className="phase-card-num" style={{ color: p.color }}>{p.emoji} Phase {p.num}</div>
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>
                  <div style={{ fontSize: '0.65rem', color: 'var(--text-muted)', marginTop: 8 }}>👆 คลิกพลิก</div>
                </div>
                <div className="flip-card-back" style={{ background: 'var(--bg3)', padding: 16, borderRadius: 'var(--radius)', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
                  <div>
                    <div style={{ fontSize: '1.5rem', marginBottom: 8 }}>{p.emoji}</div>
                    <p style={{ fontSize: '0.82rem', color: 'var(--text-dim)', lineHeight: 1.6 }}>{p.details}</p>
                  </div>
                </div>
              </div>
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
              {completed.includes(ch.number) && (
                <span className="badge-unlock badge-glow" style={{ fontSize: '0.8rem' }}>✅</span>
              )}
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
