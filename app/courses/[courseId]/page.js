'use client';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { coursesRegistry } from '@/data/courses-registry';
import { getCourseChapters } from '@/data/course-loader';
import { useState, useEffect } from 'react';

export default function CourseLandingPage() {
  const { courseId } = useParams();
  const course = coursesRegistry[courseId];
  const [completed, setCompleted] = useState([]);

  const chapters = getCourseChapters(courseId);

  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem(`${courseId}-progress`) || '[]');
      setCompleted(saved);
    } catch {}
  }, [courseId]);

  if (!course) {
    return (
      <div className="content-wrapper" style={{ textAlign: 'center', padding: '80px 20px' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: 12 }}>🚫</h1>
        <h2>ไม่พบคอร์สนี้</h2>
        <Link href="/courses" className="glow-btn" style={{ display: 'inline-block', padding: '12px 28px', borderRadius: 'var(--radius)', textDecoration: 'none', color: '#fff', marginTop: 16 }}>
          ← กลับหน้าคอร์สทั้งหมด
        </Link>
      </div>
    );
  }

  const progress = chapters.length > 0 ? Math.round((completed.length / chapters.length) * 100) : 0;

  return (
    <div className="content-wrapper">
      <div style={{ maxWidth: 700, margin: '0 auto' }}>
        {/* Breadcrumb */}
        <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: 16 }}>
          <Link href="/" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>🏠 หน้าแรก</Link>
          {' > '}
          <Link href="/courses" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>📚 Courses</Link>
          {' > '}
          <span style={{ color: 'var(--text)' }}>{course.emoji} {course.title}</span>
        </div>

        {/* Hero */}
        <div style={{ textAlign: 'center', marginBottom: 32 }}>
          <div style={{ fontSize: '3.5rem', marginBottom: 8 }}>{course.emoji}</div>
          <h1 style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: 4 }}>{course.fullTitle}</h1>
          <p style={{ color: 'var(--text-dim)', fontSize: '0.9rem', marginBottom: 12 }}>{course.subtitle}</p>
          <p style={{ color: 'var(--text-dim)', fontSize: '0.82rem', maxWidth: 500, margin: '0 auto 16px', lineHeight: 1.6 }}>
            {course.desc}
          </p>

          {/* Meta badges */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: 12, marginBottom: 16, fontSize: '0.78rem' }}>
            <span style={{ padding: '4px 12px', background: 'var(--glass2)', border: '1px solid var(--border)', borderRadius: 12 }}>
              📖 {course.chapterCount} บท
            </span>
            <span style={{ padding: '4px 12px', background: 'var(--glass2)', border: '1px solid var(--border)', borderRadius: 12 }}>
              ⏱️ {course.duration}
            </span>
            <span style={{ padding: '4px 12px', background: `${course.levelColor}15`, border: `1px solid ${course.levelColor}30`, borderRadius: 12, color: course.levelColor, fontWeight: 600 }}>
              ● {course.level}
            </span>
          </div>

          {/* Tags */}
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 6, marginBottom: 20 }}>
            {course.tags.map(t => (
              <span key={t} className="course-tag">{t}</span>
            ))}
          </div>

          {/* Progress */}
          {completed.length > 0 && (
            <div style={{ marginBottom: 16 }}>
              <div className="stat-bar" style={{ maxWidth: 300, margin: '0 auto 6px' }}>
                <div className="stat-bar-fill" style={{ width: `${progress}%`, background: course.levelColor }} />
              </div>
              <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                {progress}% สำเร็จ ({completed.length}/{chapters.length} บท)
              </div>
            </div>
          )}
        </div>

        {/* Chapter List */}
        {chapters.length > 0 ? (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
            <h2 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: 8 }}>📖 สารบัญ</h2>
            {chapters.map(ch => (
              <Link
                key={ch.slug}
                href={`/courses/${courseId}/${ch.slug}`}
                className={`roadmap-chapter ${completed.includes(ch.number) ? 'done' : ''}`}
                style={{ padding: '10px 14px', fontSize: '0.85rem' }}
              >
                <span style={{ fontSize: '1.1rem' }}>{ch.emoji}</span>
                <span style={{ fontWeight: 600 }}>#{ch.number}</span>
                <span>{ch.title}</span>
                {completed.includes(ch.number) && <span style={{ marginLeft: 'auto' }}>✅</span>}
              </Link>
            ))}
          </div>
        ) : (
          <div style={{ textAlign: 'center', padding: 40, background: 'var(--glass)', border: '1px solid var(--border)', borderRadius: 'var(--radius)' }}>
            <div style={{ fontSize: '2rem', marginBottom: 8 }}>🔜</div>
            <h3>เนื้อหากำลังมา เร็วๆ นี้!</h3>
            <p style={{ fontSize: '0.82rem', color: 'var(--text-dim)' }}>กำลังสร้างเนื้อหาคอร์สนี้ กรุณารอสักครู่</p>
          </div>
        )}

        {/* Back */}
        <div style={{ textAlign: 'center', marginTop: 32 }}>
          <Link href="/courses" style={{ color: 'var(--text-muted)', fontSize: '0.82rem', textDecoration: 'none' }}>
            ← กลับหน้าคอร์สทั้งหมด
          </Link>
        </div>
      </div>
    </div>
  );
}
