'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { chapters } from '@/data/chapters-index';

const courses = [
  {
    id: 'de101',
    emoji: '🎓',
    title: 'DE101 — Data Engineering เริ่มต้นจากศูนย์',
    subtitle: 'พื้นฐาน → Core → Modern Stack → Career',
    desc: 'คอร์สสำหรับคนที่อยากเป็น Data Engineer แต่ไม่รู้จะเริ่มยังไง ครอบคลุมตั้งแต่ Python, SQL, Data Modeling ไปจนถึง Airflow, dbt, BigQuery, Docker, Spark',
    chapters: 16,
    duration: '~6 ชม.',
    level: 'เริ่มต้น',
    levelColor: '#10b981',
    status: 'active',
    link: '/',
    tags: ['Python', 'SQL', 'Airflow', 'dbt', 'BigQuery', 'Docker', 'Spark'],
    features: ['📖 16 บทเรียน', '🧪 48 ข้อสอบ', '📋 Cheat Sheets', '🏆 Certificate'],
  },
  {
    id: 'de201',
    emoji: '🚀',
    title: 'DE201 — Intermediate Data Engineering',
    subtitle: 'Streaming → Advanced Tools → Cloud → CI/CD',
    desc: 'ยกระดับจาก Junior สู่ Mid-level DE เจาะลึก Kafka, Advanced Airflow, Cloud Architecture, CI/CD สำหรับ Data Pipeline',
    chapters: 12,
    duration: '~8 ชม.',
    level: 'กลาง',
    levelColor: '#3b82f6',
    status: 'coming',
    link: null,
    tags: ['Kafka', 'Streaming', 'Advanced Airflow', 'Terraform', 'GCP', 'CI/CD'],
    features: ['📖 12 บทเรียน', '🔥 Hands-on Labs', '☁️ Cloud Projects', '📜 Certificate'],
  },
  {
    id: 'de301',
    emoji: '💎',
    title: 'DE301 — Advanced & Senior Level',
    subtitle: 'Architecture → ML Ops → Enterprise → Leadership',
    desc: 'สำหรับคนที่อยากก้าวสู่ Senior DE / Staff Engineer เรียนรู้ Lakehouse, Data Mesh, ML Engineering, Enterprise System Design',
    chapters: 10,
    duration: '~10 ชม.',
    level: 'สูง',
    levelColor: '#8b5cf6',
    status: 'coming',
    link: null,
    tags: ['Data Mesh', 'Lakehouse', 'Delta Lake', 'MLOps', 'System Design'],
    features: ['📖 10 บทเรียน', '🏗️ Architecture Labs', '🎤 Mock Interviews', '📜 Certificate'],
  },
  {
    id: 'sql-mastery',
    emoji: '🗄️',
    title: 'SQL Mastery — เก่ง SQL สุดทาง',
    subtitle: 'Basic → Advanced → Performance → Interview',
    desc: 'คอร์สเฉพาะทางสำหรับคนอยากเก่ง SQL จริงๆ ตั้งแต่ SELECT ไปจนถึง Window Functions, CTEs, Query Optimization',
    chapters: 10,
    duration: '~5 ชม.',
    level: 'เริ่มต้น-กลาง',
    levelColor: '#06b6d4',
    status: 'coming',
    link: null,
    tags: ['SQL', 'Window Functions', 'CTE', 'Optimization', 'Interview'],
    features: ['📖 10 บทเรียน', '💻 100+ แบบฝึกหัด', '🎯 Interview Prep', '📜 Certificate'],
  },
  {
    id: 'python-de',
    emoji: '🐍',
    title: 'Python for Data Engineering',
    subtitle: 'OOP → Async → Testing → Production Code',
    desc: 'เจาะลึก Python สำหรับสาย Data ครอบคลุม OOP, Async, Testing, Design Patterns, Production-grade code',
    chapters: 10,
    duration: '~6 ชม.',
    level: 'กลาง',
    levelColor: '#f59e0b',
    status: 'coming',
    link: null,
    tags: ['Python', 'OOP', 'Async', 'pytest', 'Design Patterns'],
    features: ['📖 10 บทเรียน', '🐍 Mini Projects', '🧪 Unit Tests', '📜 Certificate'],
  },
  {
    id: 'interview-bootcamp',
    emoji: '🎤',
    title: 'DE Interview Bootcamp',
    subtitle: '30 วัน เตรียมสัมภาษณ์ Data Engineer',
    desc: 'เตรียมตัวสัมภาษณ์งาน DE อย่างเข้มข้น SQL challenges, System Design, Behavioral questions, Resume review',
    chapters: 8,
    duration: '~4 ชม.',
    level: 'ทุกระดับ',
    levelColor: '#ec4899',
    status: 'coming',
    link: null,
    tags: ['Interview', 'SQL Challenge', 'System Design', 'Resume', 'Portfolio'],
    features: ['📖 8 บทเรียน', '🎯 50+ คำถาม', '📄 Resume Template', '🏆 Mock Interview'],
  },
  {
    id: 'gcp-cert',
    emoji: '☁️',
    title: 'GCP Data Engineer Certification Prep',
    subtitle: 'เตรียมสอบ Google Cloud Professional Data Engineer',
    desc: 'เตรียมสอบ GCP DE Certification ครบจบในคอร์สเดียว พร้อม Practice Exam และเทคนิคทำข้อสอบ',
    chapters: 12,
    duration: '~8 ชม.',
    level: 'กลาง-สูง',
    levelColor: '#4285f4',
    status: 'coming',
    link: null,
    tags: ['GCP', 'BigQuery', 'Dataflow', 'Pub/Sub', 'Certification'],
    features: ['📖 12 บทเรียน', '📝 Practice Exams', '☁️ GCP Labs', '📜 Certificate'],
  },
  {
    id: 'kafka-101',
    emoji: '🔥',
    title: 'Kafka 101 — Real-time Streaming จากศูนย์',
    subtitle: 'Producer → Consumer → Streams → Connect',
    desc: 'เรียนรู้ Apache Kafka ตั้งแต่เริ่มต้น ทำ Real-time Data Pipeline, Event-driven Architecture',
    chapters: 8,
    duration: '~5 ชม.',
    level: 'กลาง',
    levelColor: '#ef4444',
    status: 'coming',
    link: null,
    tags: ['Kafka', 'Streaming', 'Event-driven', 'Real-time', 'Microservices'],
    features: ['📖 8 บทเรียน', '🔥 Live Demo', '🏗️ Projects', '📜 Certificate'],
  },
];

export default function CoursesPage() {
  const [completed, setCompleted] = useState([]);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem('de101-progress') || '[]');
      setCompleted(saved);
    } catch {}
  }, []);

  const de101Progress = Math.round((completed.length / 16) * 100);

  const filtered = filter === 'all' ? courses
    : filter === 'active' ? courses.filter(c => c.status === 'active')
    : courses.filter(c => c.status === 'coming');

  return (
    <div className="content-wrapper">
      <div style={{ maxWidth: 800, margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 32 }}>
          <h1 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: 8 }}>
            📚 All Courses
          </h1>
          <p style={{ color: 'var(--text-dim)', fontSize: '0.9rem', maxWidth: 500, margin: '0 auto' }}>
            คอร์ส Data Engineering ภาษาไทย เรียนฟรี ครบทุกทักษะที่ต้องใช้จริง
          </p>
        </div>

        {/* Filter */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: 8, marginBottom: 24 }}>
          {[
            { key: 'all', label: `ทั้งหมด (${courses.length})` },
            { key: 'active', label: '🟢 เปิดแล้ว' },
            { key: 'coming', label: '🔜 เร็วๆ นี้' },
          ].map(f => (
            <button
              key={f.key}
              onClick={() => setFilter(f.key)}
              className="course-filter-btn"
              style={{
                padding: '6px 16px',
                borderRadius: 20,
                border: `1px solid ${filter === f.key ? 'var(--blue)' : 'var(--border)'}`,
                background: filter === f.key ? 'var(--blue-dim)' : 'var(--glass)',
                color: filter === f.key ? 'var(--blue)' : 'var(--text-dim)',
                fontSize: '0.78rem',
                fontWeight: 600,
                cursor: 'pointer',
                fontFamily: 'var(--font-th)',
                transition: 'all 0.2s',
              }}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Course Grid */}
        <div className="courses-grid">
          {filtered.map((course, i) => (
            <div
              key={course.id}
              className={`course-card ${course.status === 'coming' ? 'coming-soon' : ''}`}
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              {/* Status Badge */}
              {course.status === 'coming' && (
                <div className="course-badge-coming">🔜 เร็วๆ นี้</div>
              )}
              {course.status === 'active' && de101Progress > 0 && (
                <div className="course-badge-progress">{de101Progress}% สำเร็จ</div>
              )}

              {/* Header */}
              <div style={{ display: 'flex', gap: 12, marginBottom: 12, alignItems: 'flex-start' }}>
                <span style={{ fontSize: '2.2rem' }}>{course.emoji}</span>
                <div style={{ flex: 1 }}>
                  <h2 style={{ fontSize: '0.95rem', fontWeight: 700, marginBottom: 2, lineHeight: 1.3 }}>
                    {course.title}
                  </h2>
                  <p style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>{course.subtitle}</p>
                </div>
              </div>

              {/* Description */}
              <p style={{ fontSize: '0.8rem', color: 'var(--text-dim)', lineHeight: 1.6, marginBottom: 12 }}>
                {course.desc}
              </p>

              {/* Meta */}
              <div style={{ display: 'flex', gap: 12, marginBottom: 12, fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                <span>📖 {course.chapters} บท</span>
                <span>⏱️ {course.duration}</span>
                <span style={{ color: course.levelColor, fontWeight: 600 }}>
                  ● {course.level}
                </span>
              </div>

              {/* Tags */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4, marginBottom: 12 }}>
                {course.tags.map(tag => (
                  <span key={tag} className="course-tag">{tag}</span>
                ))}
              </div>

              {/* Features */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 16, fontSize: '0.72rem', color: 'var(--text-dim)' }}>
                {course.features.map(f => (
                  <span key={f}>{f}</span>
                ))}
              </div>

              {/* CTA */}
              {course.status === 'active' ? (
                <Link href={course.link} className="course-cta active">
                  {de101Progress > 0 ? '📚 เรียนต่อ' : '🚀 เริ่มเรียนเลย'}
                </Link>
              ) : (
                <button className="course-cta coming" disabled>
                  🔔 แจ้งเตือนเมื่อเปิด
                </button>
              )}
            </div>
          ))}
        </div>

        {/* Stats */}
        <div style={{ textAlign: 'center', marginTop: 40, padding: 24, background: 'var(--glass)', borderRadius: 'var(--radius)', border: '1px solid var(--border)' }}>
          <h3 style={{ fontSize: '1.1rem', marginBottom: 8 }}>📊 ภาพรวม</h3>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 32, fontSize: '0.85rem' }}>
            <div>
              <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--blue)' }}>{courses.length}</div>
              <div style={{ color: 'var(--text-muted)', fontSize: '0.72rem' }}>คอร์สทั้งหมด</div>
            </div>
            <div>
              <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--green)' }}>{courses.reduce((a, c) => a + c.chapters, 0)}</div>
              <div style={{ color: 'var(--text-muted)', fontSize: '0.72rem' }}>บทเรียน</div>
            </div>
            <div>
              <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--purple)' }}>1</div>
              <div style={{ color: 'var(--text-muted)', fontSize: '0.72rem' }}>เปิดแล้ว</div>
            </div>
            <div>
              <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--orange)' }}>{courses.length - 1}</div>
              <div style={{ color: 'var(--text-muted)', fontSize: '0.72rem' }}>เร็วๆ นี้</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
