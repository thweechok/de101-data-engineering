'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { chapters as defaultChapters } from '@/data/chapters-index';
import { coursesList } from '@/data/courses-registry';
import { getCourseChapters } from '@/data/course-loader';
import { useState, useEffect } from 'react';

export default function Sidebar({ isOpen, onClose }) {
  const pathname = usePathname();
  const [completed, setCompleted] = useState([]);
  const [search, setSearch] = useState('');
  const [showCourses, setShowCourses] = useState(false);

  // Detect which course we're in from URL
  const courseMatch = pathname.match(/\/courses\/([^/]+)/);
  const activeCourseId = courseMatch ? courseMatch[1] : null;

  // Get chapters for the active course, or default DE101 chapters
  const courseChapters = activeCourseId ? getCourseChapters(activeCourseId) : [];
  const chapters = activeCourseId && courseChapters.length > 0 ? courseChapters : defaultChapters;
  const isOnCourse = activeCourseId && courseChapters.length > 0;

  useEffect(() => {
    try {
      const key = activeCourseId ? `${activeCourseId}-progress` : 'de101-progress';
      const saved = JSON.parse(localStorage.getItem(key) || '[]');
      setCompleted(saved);
    } catch {}
  }, [activeCourseId]);

  const phases = [
    { num: 1, title: 'พื้นฐาน', color: '#10b981' },
    { num: 2, title: 'Core DE', color: '#3b82f6' },
    { num: 3, title: 'Modern Stack', color: '#8b5cf6' },
    { num: 4, title: 'Production & Career', color: '#f59e0b' },
  ];

  const progress = chapters.length > 0 ? Math.round((completed.length / chapters.length) * 100) : 0;
  const activeCourse = activeCourseId ? coursesList.find(c => c.id === activeCourseId) : null;

  const filteredChapters = search.trim()
    ? chapters.filter(c => {
        const title = c.title || c.shortTitle || '';
        const desc = c.description || '';
        const q = search.toLowerCase();
        return title.toLowerCase().includes(q) || desc.toLowerCase().includes(q);
      })
    : null;

  const getChapterHref = (ch) => {
    if (isOnCourse) return `/courses/${activeCourseId}/${ch.slug}`;
    return `/chapters/${ch.slug}`;
  };

  return (
    <>
      <div className={`sidebar-overlay ${isOpen ? 'open' : ''}`} onClick={onClose} />
      <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <div style={{ position: 'relative' }}>
            <button
              onClick={() => setShowCourses(!showCourses)}
              style={{
                width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                padding: '8px 12px', background: 'var(--glass2)', border: '1px solid var(--border)',
                borderRadius: 'var(--radius-sm)', cursor: 'pointer', color: 'var(--text)',
                fontSize: '0.85rem', fontWeight: 700, fontFamily: 'var(--font-th)', transition: 'all 0.2s'
              }}
            >
              <span>{activeCourse ? `${activeCourse.emoji} ${activeCourse.title}` : '🎓 DE101'}</span>
              <span style={{ fontSize: '0.7rem', opacity: 0.5 }}>{showCourses ? '▲' : '▼'}</span>
            </button>

            {showCourses && (
              <div style={{
                position: 'absolute', top: '100%', left: 0, right: 0, zIndex: 100,
                background: 'var(--bg2)', border: '1px solid var(--border)', borderRadius: 'var(--radius-sm)',
                marginTop: 4, maxHeight: 300, overflowY: 'auto', boxShadow: '0 8px 24px rgba(0,0,0,0.2)'
              }}>
                <Link href="/" onClick={() => { onClose(); setShowCourses(false); }} style={{
                  display: 'flex', alignItems: 'center', gap: 8, padding: '8px 12px', textDecoration: 'none',
                  color: !activeCourseId ? 'var(--blue)' : 'var(--text-dim)', fontSize: '0.78rem',
                  background: !activeCourseId ? 'var(--blue-dim)' : 'transparent',
                  fontWeight: !activeCourseId ? 700 : 400,
                }}>🎓 DE101 — เริ่มต้นจากศูนย์</Link>
                <div style={{ height: 1, background: 'var(--border)', margin: '2px 0' }} />
                <div style={{ padding: '4px 12px', fontSize: '0.6rem', color: 'var(--text-muted)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: 1 }}>
                  คอร์สเสริม
                </div>
                {coursesList.map(c => (
                  <Link key={c.id} href={`/courses/${c.id}`} onClick={() => { onClose(); setShowCourses(false); }} style={{
                    display: 'flex', alignItems: 'center', gap: 8, padding: '8px 12px', textDecoration: 'none',
                    color: activeCourseId === c.id ? 'var(--blue)' : 'var(--text-dim)', fontSize: '0.78rem',
                    background: activeCourseId === c.id ? 'var(--blue-dim)' : 'transparent',
                    fontWeight: activeCourseId === c.id ? 700 : 400,
                  }}>{c.emoji} {c.title}</Link>
                ))}
              </div>
            )}
          </div>

          <div className="sidebar-progress">
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: `${progress}%` }} />
            </div>
            <div className="progress-text">{progress}% สำเร็จ ({completed.length}/{chapters.length} บท)</div>
          </div>
          <div className="sidebar-search">
            <input type="text" placeholder="🔍 ค้นหาบทเรียน..." value={search} onChange={e => setSearch(e.target.value)} className="search-input" />
          </div>
        </div>

        <nav className="sidebar-nav">
          {filteredChapters ? (
            <div className="phase-group">
              <div className="phase-label">
                <span className="phase-dot" style={{ background: 'var(--cyan)' }} />
                ผลค้นหา ({filteredChapters.length})
              </div>
              {filteredChapters.length === 0 && (
                <div style={{ padding: '12px 20px', fontSize: '0.8rem', color: 'var(--text-muted)' }}>ไม่พบบทเรียน</div>
              )}
              {filteredChapters.map(ch => {
                const href = getChapterHref(ch);
                const isActive = pathname === href;
                const isDone = completed.includes(ch.number);
                return (
                  <Link key={ch.slug} href={href} className={`chapter-link ${isActive ? 'active' : ''} ${isDone ? 'completed' : ''}`} onClick={() => { onClose(); setSearch(''); }}>
                    <span className="ch-emoji">{isDone ? '✅' : (ch.emoji || '📖')}</span>
                    <span className="ch-num">{ch.number}</span>
                    {ch.shortTitle || ch.title}
                  </Link>
                );
              })}
            </div>
          ) : isOnCourse ? (
            <div className="phase-group">
              <div className="phase-label">
                <span className="phase-dot" style={{ background: activeCourse?.levelColor || '#10b981' }} />
                {activeCourse?.emoji} {activeCourse?.title || 'บทเรียน'}
              </div>
              {chapters.map(ch => {
                const href = getChapterHref(ch);
                const isActive = pathname === href;
                const isDone = completed.includes(ch.number);
                return (
                  <Link key={ch.slug} href={href} className={`chapter-link ${isActive ? 'active' : ''} ${isDone ? 'completed' : ''}`} onClick={onClose}>
                    <span className="ch-emoji">{isDone ? '✅' : (ch.emoji || '📖')}</span>
                    <span className="ch-num">{ch.number}</span>
                    {ch.shortTitle || ch.title}
                  </Link>
                );
              })}
            </div>
          ) : (
            phases.map(phase => (
              <div className="phase-group" key={phase.num}>
                <div className="phase-label">
                  <span className="phase-dot" style={{ background: phase.color }} />
                  Phase {phase.num}: {phase.title}
                </div>
                {chapters.filter(c => c.phase === phase.num).map(ch => {
                  const href = `/chapters/${ch.slug}`;
                  const isActive = pathname === href;
                  const isDone = completed.includes(ch.number);
                  return (
                    <Link key={ch.slug} href={href} className={`chapter-link ${isActive ? 'active' : ''} ${isDone ? 'completed' : ''}`} onClick={onClose}>
                      <span className="ch-emoji">{isDone ? '✅' : ch.emoji}</span>
                      <span className="ch-num">{ch.number}</span>
                      {ch.shortTitle}
                    </Link>
                  );
                })}
              </div>
            ))
          )}
        </nav>

        <div style={{ padding: '12px 16px', borderTop: '1px solid var(--border)', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 6 }}>
          {[
            { href: '/dashboard', emoji: '📊', label: 'Dashboard' },
            { href: '/courses', emoji: '📚', label: 'Courses' },
            { href: '/projects', emoji: '🛠️', label: 'Projects' },
            { href: '/roadmap', emoji: '🎯', label: 'Roadmap' },
            { href: '/glossary', emoji: '📖', label: 'Glossary' },
          ].map(item => (
            <Link key={item.href} href={item.href} onClick={onClose} style={{
              textAlign: 'center', padding: '8px 4px', fontSize: '0.72rem', fontWeight: 600,
              background: 'var(--glass2)', border: '1px solid var(--border)', borderRadius: 'var(--radius-sm)',
              color: 'var(--text-dim)', textDecoration: 'none', transition: 'all 0.2s'
            }}>{item.emoji} {item.label}</Link>
          ))}
        </div>
      </aside>
    </>
  );
}
