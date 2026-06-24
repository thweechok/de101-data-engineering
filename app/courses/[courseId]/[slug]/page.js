'use client';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import { coursesRegistry } from '@/data/courses-registry';
import { getCourseChapters } from '@/data/course-loader';
import { useState, useEffect } from 'react';

export default function CourseChapterPage() {
  const { courseId, slug } = useParams();
  const router = useRouter();
  const course = coursesRegistry[courseId];
  const chapters = getCourseChapters(courseId);
  const currentChapter = chapters.find(c => c.slug === slug) || null;
  const [completed, setCompleted] = useState([]);

  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem(`${courseId}-progress`) || '[]');
      setCompleted(saved);
    } catch {}
  }, [courseId]);

  // Prism highlighting
  useEffect(() => {
    if (!currentChapter) return;
    const timer = setTimeout(() => {
      if (typeof window !== 'undefined' && window.Prism) window.Prism.highlightAll();
    }, 200);
    return () => clearTimeout(timer);
  }, [currentChapter]);

  // Copy buttons
  useEffect(() => {
    if (!currentChapter) return;
    const timer = setTimeout(() => {
      document.querySelectorAll('.chapter-content pre').forEach(pre => {
        if (pre.querySelector('.copy-btn')) return;
        const btn = document.createElement('button');
        btn.className = 'copy-btn';
        btn.textContent = '📋 Copy';
        btn.onclick = () => {
          const code = pre.querySelector('code');
          if (code) {
            navigator.clipboard.writeText(code.textContent).then(() => {
              btn.textContent = '✅ Copied!';
              btn.classList.add('copied');
              setTimeout(() => { btn.textContent = '📋 Copy'; btn.classList.remove('copied'); }, 2000);
            });
          }
        };
        pre.style.position = 'relative';
        pre.appendChild(btn);
      });
    }, 300);
    return () => clearTimeout(timer);
  }, [currentChapter]);

  // Lazy loading images
  useEffect(() => {
    document.querySelectorAll('.chapter-content img').forEach(img => {
      img.setAttribute('loading', 'lazy');
      img.setAttribute('decoding', 'async');
    });
  }, [currentChapter]);

  // Mark complete
  const toggleComplete = () => {
    if (!currentChapter) return;
    const num = currentChapter.number;
    let updated;
    if (completed.includes(num)) {
      updated = completed.filter(n => n !== num);
    } else {
      updated = [...completed, num];
    }
    setCompleted(updated);
    try { localStorage.setItem(`${courseId}-progress`, JSON.stringify(updated)); } catch {}
  };

  // Keyboard nav
  useEffect(() => {
    const handleKey = (e) => {
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
      const idx = chapters.findIndex(c => c.slug === slug);
      if (e.key === 'ArrowLeft' && idx > 0) {
        router.push(`/courses/${courseId}/${chapters[idx - 1].slug}`);
      } else if (e.key === 'ArrowRight' && idx < chapters.length - 1) {
        router.push(`/courses/${courseId}/${chapters[idx + 1].slug}`);
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [chapters, slug, courseId]);

  if (!course || !currentChapter) {
    return (
      <div className="content-wrapper" style={{ textAlign: 'center', padding: '80px 20px' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: 12 }}>🚫</h1>
        <h2>ไม่พบบทเรียนนี้</h2>
        <Link href={`/courses/${courseId}`} className="glow-btn" style={{ display: 'inline-block', padding: '12px 28px', borderRadius: 'var(--radius)', textDecoration: 'none', color: '#fff', marginTop: 16 }}>
          ← กลับหน้าคอร์ส
        </Link>
      </div>
    );
  }

  const idx = chapters.findIndex(c => c.slug === slug);
  const prev = idx > 0 ? chapters[idx - 1] : null;
  const next = idx < chapters.length - 1 ? chapters[idx + 1] : null;
  const isDone = completed.includes(currentChapter.number);

  return (
    <div className="content-wrapper">
      {/* Breadcrumb */}
      <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', marginBottom: 16 }}>
        <Link href="/courses" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>📚 Courses</Link>
        {' > '}
        <Link href={`/courses/${courseId}`} style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>{course.emoji} {course.title}</Link>
        {' > '}
        <span style={{ color: 'var(--text)' }}>#{currentChapter.number}</span>
      </div>

      {/* Title */}
      <h1 className="chapter-title" style={{ fontSize: '1.6rem' }}>
        {currentChapter.emoji} {currentChapter.title}
      </h1>

      {/* Content */}
      <div className="chapter-content" dangerouslySetInnerHTML={{ __html: currentChapter.content }} />

      {/* Complete button */}
      <button onClick={toggleComplete} className={`complete-btn ${isDone ? 'completed' : ''}`}
        style={{
          display: 'block', width: '100%', padding: '14px', marginTop: 32, borderRadius: 'var(--radius)',
          border: isDone ? '1px solid var(--green-border)' : '1px solid var(--border)',
          background: isDone ? 'var(--green-dim)' : 'var(--glass)',
          color: isDone ? 'var(--green)' : 'var(--text-dim)',
          fontSize: '0.9rem', fontWeight: 700, cursor: 'pointer', fontFamily: 'var(--font-th)',
          transition: 'all 0.2s'
        }}>
        {isDone ? '✅ เรียนบทนี้แล้ว' : '☐ กดเพื่อเรียนจบบทนี้'}
      </button>

      {/* Navigation */}
      <div className="chapter-nav" style={{ marginTop: 16 }}>
        {prev ? (
          <Link href={`/courses/${courseId}/${prev.slug}`} className="nav-btn">← {prev.emoji} #{prev.number}</Link>
        ) : <div />}
        {next ? (
          <Link href={`/courses/${courseId}/${next.slug}`} className="nav-btn">#{next.number} {next.emoji} →</Link>
        ) : (
          <Link href={`/courses/${courseId}`} className="nav-btn">🏠 กลับหน้าคอร์ส</Link>
        )}
      </div>
    </div>
  );
}
