'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { chapters } from '@/data/chapters-index';

const courses = [
  {
    id: 'de101',
    order: 1,
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
    group: 'main',
    tags: ['Python', 'SQL', 'Airflow', 'dbt', 'BigQuery', 'Docker', 'Spark'],
    features: ['📖 16 บทเรียน', '🧪 48 ข้อสอบ', '📋 Cheat Sheets', '🏆 Certificate'],
    prereq: 'ไม่ต้องมีพื้นฐาน',
  },
  {
    id: 'sql-mastery',
    order: 2,
    emoji: '🗄️',
    title: 'SQL Mastery — เก่ง SQL สุดทาง',
    subtitle: 'Basic → Advanced → Performance → Interview',
    desc: 'คอร์สเฉพาะทางสำหรับคนอยากเก่ง SQL จริงๆ ตั้งแต่ SELECT ไปจนถึง Window Functions, CTEs, Query Optimization',
    chapters: 10,
    duration: '~5 ชม.',
    level: 'เริ่มต้น-กลาง',
    levelColor: '#06b6d4',
    status: 'active',
    link: '/courses/sql-mastery',
    group: 'skill',
    tags: ['SQL', 'Window Functions', 'CTE', 'Optimization', 'Interview'],
    features: ['📖 10 บทเรียน', '💻 100+ แบบฝึกหัด', '🎯 Interview Prep'],
    prereq: 'เรียน DE101 บทที่ 4 (SQL) ก่อน',
  },
  {
    id: 'python-de',
    order: 3,
    emoji: '🐍',
    title: 'Python for Data Engineering',
    subtitle: 'OOP → Async → Testing → Production Code',
    desc: 'เจาะลึก Python สำหรับสาย Data ครอบคลุม OOP, Async, Testing, Design Patterns, Production-grade code',
    chapters: 10,
    duration: '~6 ชม.',
    level: 'กลาง',
    levelColor: '#f59e0b',
    status: 'active',
    link: '/courses/python-de',
    group: 'skill',
    tags: ['Python', 'OOP', 'Async', 'pytest', 'Design Patterns'],
    features: ['📖 10 บทเรียน', '🐍 Mini Projects', '🧪 Unit Tests'],
    prereq: 'เรียน DE101 บทที่ 3 (Python) ก่อน',
  },
  {
    id: 'de201',
    order: 4,
    emoji: '🚀',
    title: 'DE201 — Intermediate Data Engineering',
    subtitle: 'Streaming → Advanced Tools → Cloud → CI/CD',
    desc: 'ยกระดับจาก Junior สู่ Mid-level DE เจาะลึก Kafka, Advanced Airflow, Cloud Architecture, CI/CD สำหรับ Data Pipeline',
    chapters: 10,
    duration: '~8 ชม.',
    level: 'กลาง',
    levelColor: '#3b82f6',
    status: 'active',
    link: '/courses/de201',
    group: 'main',
    tags: ['Kafka', 'Streaming', 'Advanced Airflow', 'Terraform', 'GCP', 'CI/CD'],
    features: ['📖 10 บทเรียน', '🔥 Hands-on Labs', '☁️ Cloud Projects'],
    prereq: 'เรียน DE101 จบก่อน',
  },
  {
    id: 'kafka101',
    order: 5,
    emoji: '🔥',
    title: 'Kafka 101 — Real-time Streaming จากศูนย์',
    subtitle: 'Producer → Consumer → Streams → Connect',
    desc: 'เรียนรู้ Apache Kafka ตั้งแต่เริ่มต้น ทำ Real-time Data Pipeline, Event-driven Architecture',
    chapters: 8,
    duration: '~5 ชม.',
    level: 'กลาง',
    levelColor: '#ef4444',
    status: 'active',
    link: '/courses/kafka101',
    group: 'skill',
    tags: ['Kafka', 'Streaming', 'Event-driven', 'Real-time', 'Microservices'],
    features: ['📖 8 บทเรียน', '🔥 Live Demo', '🏗️ Projects'],
    prereq: 'เรียน DE101 + Python เสริม ก่อน',
  },
  {
    id: 'gcp-cert',
    order: 6,
    emoji: '☁️',
    title: 'GCP Data Engineer Certification Prep',
    subtitle: 'เตรียมสอบ Google Cloud Professional Data Engineer',
    desc: 'เตรียมสอบ GCP DE Certification ครบจบในคอร์สเดียว พร้อม Practice Exam และเทคนิคทำข้อสอบ',
    chapters: 10,
    duration: '~8 ชม.',
    level: 'กลาง-สูง',
    levelColor: '#4285f4',
    status: 'active',
    link: '/courses/gcp-cert',
    group: 'cert',
    tags: ['GCP', 'BigQuery', 'Dataflow', 'Pub/Sub', 'Certification'],
    features: ['📖 10 บทเรียน', '📝 Practice Exams', '☁️ GCP Labs'],
    prereq: 'เรียน DE201 ก่อนจะเข้าใจง่ายขึ้น',
  },
  {
    id: 'de301',
    order: 7,
    emoji: '💎',
    title: 'DE301 — Advanced & Senior Level',
    subtitle: 'Architecture → ML Ops → Enterprise → Leadership',
    desc: 'สำหรับคนที่อยากก้าวสู่ Senior DE / Staff Engineer เรียนรู้ Lakehouse, Data Mesh, ML Engineering, Enterprise System Design',
    chapters: 8,
    duration: '~10 ชม.',
    level: 'สูง',
    levelColor: '#8b5cf6',
    status: 'active',
    link: '/courses/de301',
    group: 'main',
    tags: ['Data Mesh', 'Lakehouse', 'Delta Lake', 'MLOps', 'System Design'],
    features: ['📖 8 บทเรียน', '🏗️ Architecture Labs', '🎤 Mock Interviews'],
    prereq: 'เรียน DE201 + มีประสบการณ์ 1-2 ปี',
  },
  {
    id: 'interview',
    order: 8,
    emoji: '🎤',
    title: 'DE Interview Bootcamp',
    subtitle: '30 วัน เตรียมสัมภาษณ์ Data Engineer',
    desc: 'เตรียมตัวสัมภาษณ์งาน DE อย่างเข้มข้น SQL challenges, System Design, Behavioral questions, Resume review',
    chapters: 8,
    duration: '~4 ชม.',
    level: 'ทุกระดับ',
    levelColor: '#ec4899',
    status: 'active',
    link: '/courses/interview',
    group: 'career',
    tags: ['Interview', 'SQL Challenge', 'System Design', 'Resume', 'Portfolio'],
    features: ['📖 8 บทเรียน', '🎯 50+ คำถาม', '📄 Resume Template'],
    prereq: 'เรียนตอนพร้อมหางาน',
  },
  {
    id: '10phase-de',
    order: 9,
    emoji: '🗺️',
    title: '10 Phase สู่การเป็น Data Engineer',
    subtitle: 'Career → SQL → Python → Storage → Pipeline → Portfolio',
    desc: 'คอร์สครบวงจร 10 Phase ครอบคลุมทุกทักษะที่ต้องรู้ ตั้งแต่ Career Overview, SQL, Python, Storage, ETL, Orchestration, Infra, Data Modeling ไปจนถึง Portfolio & Interview',
    chapters: 11,
    duration: '~10 ชม.',
    level: 'เริ่มต้น-สูง',
    levelColor: '#10b981',
    status: 'active',
    link: '/courses/10phase-de',
    group: 'main',
    tags: ['SQL', 'Python', 'Spark', 'Kafka', 'Airflow', 'dbt', 'Cloud', 'Interview'],
    features: ['📖 11 บทเรียน', '💻 โค้ดจริงทุกบท', '🏆 ครบจบในคอร์สเดียว'],
    prereq: 'ไม่ต้องมีพื้นฐาน',
  },
];

const groupLabels = {
  main: { label: '📘 คอร์สหลัก — เรียนตามลำดับ', color: 'var(--blue)' },
  skill: { label: '🔧 คอร์สเสริมทักษะ — เรียนเมื่อพร้อม', color: 'var(--cyan)' },
  cert: { label: '📜 คอร์สเตรียมสอบ', color: 'var(--green)' },
  career: { label: '🎯 คอร์สเตรียมสัมภาษณ์', color: 'var(--pink)' },
};

export default function CoursesPage() {
  const [completed, setCompleted] = useState([]);

  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem('de101-progress') || '[]');
      setCompleted(saved);
    } catch {}
  }, []);

  const de101Progress = chapters.length > 0 ? Math.round((completed.length / chapters.length) * 100) : 0;

  return (
    <div className="content-wrapper">
      <div style={{ maxWidth: 800, margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 24 }}>
          <h1 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: 8 }}>
            📚 All Courses
          </h1>
          <p style={{ color: 'var(--text-dim)', fontSize: '0.9rem', maxWidth: 500, margin: '0 auto 16px' }}>
            คอร์ส Data Engineering ภาษาไทย เรียนฟรี ครบทุกทักษะที่ต้องใช้จริง
          </p>
        </div>

        {/* Learning Path Visual */}
        <div style={{
          background: 'var(--glass)', border: '1px solid var(--border)',
          borderRadius: 'var(--radius)', padding: '20px 24px', marginBottom: 32,
        }}>
          <h3 style={{ fontSize: '0.92rem', fontWeight: 700, marginBottom: 12 }}>
            🗺️ แนะนำลำดับการเรียน
          </h3>
          <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: 4, fontSize: '0.75rem' }}>
            {courses.map((c, i) => (
              <span key={c.id} style={{ display: 'inline-flex', alignItems: 'center', gap: 4 }}>
                <Link href={c.link} style={{
                  display: 'inline-flex', alignItems: 'center', gap: 4,
                  padding: '4px 10px', borderRadius: 16,
                  background: c.group === 'main' ? 'var(--blue-dim)' : 'var(--glass2)',
                  border: `1px solid ${c.group === 'main' ? 'var(--blue-border)' : 'var(--border)'}`,
                  color: c.group === 'main' ? 'var(--blue)' : 'var(--text-dim)',
                  textDecoration: 'none', fontWeight: 600, transition: 'all 0.2s',
                  whiteSpace: 'nowrap',
                }}>
                  <span style={{
                    display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                    width: 18, height: 18, borderRadius: '50%',
                    background: c.levelColor, color: '#fff', fontSize: '0.6rem', fontWeight: 800,
                  }}>{c.order}</span>
                  {c.emoji} {c.id === 'de101' ? 'DE101' : c.id === 'sql-mastery' ? 'SQL' : c.id === 'python-de' ? 'Python' : c.id === 'de201' ? 'DE201' : c.id === 'kafka101' ? 'Kafka' : c.id === 'gcp-cert' ? 'GCP' : c.id === 'de301' ? 'DE301' : 'Interview'}
                </Link>
                {i < courses.length - 1 && <span style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>→</span>}
              </span>
            ))}
          </div>
          <p style={{ fontSize: '0.68rem', color: 'var(--text-muted)', marginTop: 8 }}>
            💡 <strong>คอร์สหลัก</strong> (สีน้ำเงิน) เรียนตามลำดับ · <strong>คอร์สเสริม</strong> เรียนเมื่อพร้อม
          </p>
        </div>

        {/* Course List — Ordered */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {courses.map((course, i) => (
            <div
              key={course.id}
              className="course-card"
              style={{ animationDelay: `${i * 0.06}s`, position: 'relative' }}
            >
              {/* Order Number Badge */}
              <div style={{
                position: 'absolute', top: -10, left: -10,
                width: 32, height: 32, borderRadius: '50%',
                background: `linear-gradient(135deg, ${course.levelColor}, ${course.levelColor}88)`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: '#fff', fontSize: '0.82rem', fontWeight: 800,
                boxShadow: `0 2px 8px ${course.levelColor}44`,
                zIndex: 2, border: '2px solid var(--bg)',
              }}>
                {course.order}
              </div>

              {/* Progress Badge — DE101 only */}
              {course.id === 'de101' && de101Progress > 0 && (
                <div className="course-badge-progress">{de101Progress}% สำเร็จ</div>
              )}

              {/* Header */}
              <div style={{ display: 'flex', gap: 12, marginBottom: 10, alignItems: 'flex-start', marginLeft: 16 }}>
                <span style={{ fontSize: '2rem' }}>{course.emoji}</span>
                <div style={{ flex: 1 }}>
                  <h2 style={{ fontSize: '0.95rem', fontWeight: 700, marginBottom: 2, lineHeight: 1.3 }}>
                    {course.title}
                  </h2>
                  <p style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>{course.subtitle}</p>
                </div>
              </div>

              {/* Description */}
              <p style={{ fontSize: '0.8rem', color: 'var(--text-dim)', lineHeight: 1.6, marginBottom: 10 }}>
                {course.desc}
              </p>

              {/* Meta */}
              <div style={{ display: 'flex', gap: 12, marginBottom: 10, fontSize: '0.72rem', color: 'var(--text-muted)', flexWrap: 'wrap' }}>
                <span>📖 {course.chapters} บท</span>
                <span>⏱️ {course.duration}</span>
                <span style={{ color: course.levelColor, fontWeight: 600 }}>
                  ● {course.level}
                </span>
                <span style={{ color: 'var(--text-muted)', fontStyle: 'italic' }}>
                  📋 {course.prereq}
                </span>
              </div>

              {/* Tags */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4, marginBottom: 12 }}>
                {course.tags.map(tag => (
                  <span key={tag} className="course-tag">{tag}</span>
                ))}
              </div>

              {/* CTA */}
              <Link href={course.link} className="course-cta active">
                {course.id === 'de101' && de101Progress > 0 ? '📚 เรียนต่อ' : '🚀 เริ่มเรียนเลย'}
              </Link>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div style={{ textAlign: 'center', marginTop: 40, padding: 24, background: 'var(--glass)', borderRadius: 'var(--radius)', border: '1px solid var(--border)' }}>
          <h3 style={{ fontSize: '1.1rem', marginBottom: 8 }}>📊 ภาพรวม</h3>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 32, fontSize: '0.85rem', flexWrap: 'wrap' }}>
            <div>
              <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--blue)' }}>{courses.length}</div>
              <div style={{ color: 'var(--text-muted)', fontSize: '0.72rem' }}>คอร์สทั้งหมด</div>
            </div>
            <div>
              <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--green)' }}>{courses.reduce((a, c) => a + c.chapters, 0)}</div>
              <div style={{ color: 'var(--text-muted)', fontSize: '0.72rem' }}>บทเรียน</div>
            </div>
            <div>
              <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--purple)' }}>{courses.filter(c => c.status === 'active').length}</div>
              <div style={{ color: 'var(--text-muted)', fontSize: '0.72rem' }}>เปิดแล้ว</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
