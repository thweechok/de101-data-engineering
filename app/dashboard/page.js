'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { coursesList } from '@/data/courses-registry';

function getCourseProgress(courseId) {
  if (typeof window === 'undefined') return [];
  try { return JSON.parse(localStorage.getItem(`${courseId}-progress`) || '[]'); }
  catch { return []; }
}

function getBookmarks() {
  if (typeof window === 'undefined') return [];
  try { return JSON.parse(localStorage.getItem('bookmarked-courses') || '[]'); }
  catch { return []; }
}

function getProgressColor(pct) {
  if (pct === 0) return '#6b7280';
  if (pct < 50) return '#f59e0b';
  if (pct < 100) return '#3b82f6';
  return '#22c55e';
}

function getProgressLabel(pct) {
  if (pct === 0) return { text: 'ยังไม่เริ่ม', bg: 'rgba(107,114,128,0.15)', color: '#9ca3af' };
  if (pct < 50) return { text: 'กำลังเรียน', bg: 'rgba(245,158,11,0.15)', color: '#f59e0b' };
  if (pct < 100) return { text: 'ใกล้จบแล้ว!', bg: 'rgba(59,130,246,0.15)', color: '#60a5fa' };
  return { text: '✅ จบแล้ว', bg: 'rgba(34,197,94,0.15)', color: '#4ade80' };
}

function CircularRing({ pct, size = 140, stroke = 10, color = '#8b5cf6' }) {
  const r = (size - stroke) / 2;
  const circ = 2 * Math.PI * r;
  const offset = circ - (pct / 100) * circ;
  return (
    <svg width={size} height={size} style={{ transform: 'rotate(-90deg)', display: 'block' }}>
      <circle cx={size/2} cy={size/2} r={r} fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth={stroke} />
      <circle cx={size/2} cy={size/2} r={r} fill="none" stroke={color} strokeWidth={stroke}
        strokeDasharray={circ} strokeDashoffset={offset} strokeLinecap="round"
        style={{ transition: 'stroke-dashoffset 0.8s cubic-bezier(0.4,0,0.2,1)' }} />
    </svg>
  );
}

function ProgressBar({ pct, color }) {
  return (
    <div style={{ height: 6, borderRadius: 99, background: 'rgba(255,255,255,0.06)', overflow: 'hidden', flex: 1 }}>
      <div style={{
        height: '100%', borderRadius: 99, width: `${pct}%`,
        background: `linear-gradient(90deg, ${color}, ${color}cc)`,
        transition: 'width 0.8s cubic-bezier(0.4,0,0.2,1)',
        boxShadow: `0 0 8px ${color}66`,
      }} />
    </div>
  );
}

function CourseRow({ course }) {
  const color = getProgressColor(course.pct);
  const badge = getProgressLabel(course.pct);
  return (
    <div style={{
      background: 'var(--glass,rgba(255,255,255,0.04))',
      border: `1px solid ${course.pct === 100 ? 'rgba(34,197,94,0.2)' : 'rgba(255,255,255,0.07)'}`,
      borderRadius: 18, padding: '16px 20px',
      transition: 'all 0.2s', position: 'relative', overflow: 'hidden',
    }}>
      {course.pct === 100 && (
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2,
          background: 'linear-gradient(90deg,#22c55e,#4ade80,#22c55e)', borderRadius: '18px 18px 0 0' }} />
      )}
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: 14 }}>
        <div style={{ position: 'relative', flexShrink: 0, width: 52, height: 52 }}>
          <CircularRing pct={course.pct} size={52} stroke={5} color={color} />
          <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.1rem' }}>
            {course.emoji}
          </div>
        </div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4, flexWrap: 'wrap' }}>
            <span style={{ fontSize: '0.87rem', fontWeight: 700,
              whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: '100%' }}>
              {course.fullTitle || course.title}
            </span>
            <span style={{ fontSize: '0.62rem', fontWeight: 600, padding: '2px 9px',
              borderRadius: 10, background: badge.bg, color: badge.color, whiteSpace: 'nowrap', flexShrink: 0 }}>
              {badge.text}
            </span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 7 }}>
            <ProgressBar pct={course.pct} color={color} />
            <span style={{ fontSize: '0.72rem', fontWeight: 700, color, flexShrink: 0, minWidth: 36, textAlign: 'right' }}>
              {course.pct}%
            </span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap' }}>
            <span style={{ fontSize: '0.67rem', color: 'var(--text-muted,#6b7280)' }}>
              ✅ {course.done}/{course.total} บท
            </span>
            {course.level && (
              <span style={{ fontSize: '0.62rem', padding: '1px 8px', borderRadius: 8,
                background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)',
                color: course.levelColor || 'var(--text-dim)' }}>{course.level}</span>
            )}
            {course.duration && (
              <span style={{ fontSize: '0.67rem', color: 'var(--text-muted,#6b7280)' }}>⏱️ {course.duration}</span>
            )}
            <Link href={`/courses/${course.id}`} style={{
              marginLeft: 'auto', flexShrink: 0,
              display: 'inline-flex', alignItems: 'center', gap: 5,
              padding: '5px 14px', borderRadius: 14, fontSize: '0.72rem', fontWeight: 700,
              background: course.pct === 100
                ? 'linear-gradient(135deg,rgba(34,197,94,0.2),rgba(74,222,128,0.15))'
                : 'linear-gradient(135deg,rgba(139,92,246,0.25),rgba(59,130,246,0.2))',
              color: course.pct === 100 ? '#4ade80' : '#a78bfa',
              border: `1px solid ${course.pct === 100 ? 'rgba(34,197,94,0.3)' : 'rgba(139,92,246,0.35)'}`,
              textDecoration: 'none', transition: 'all 0.2s',
            }}>
              {course.pct === 100 ? '🔁 ทบทวน' : course.done > 0 ? '▶ เรียนต่อ' : '🚀 เริ่ม'}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

const TABS = [
  { key: 'progress', label: '📈 กำลังเรียน' },
  { key: 'bookmarks', label: '🔖 Bookmarks' },
  { key: 'all', label: '📚 ทั้งหมด' },
];

const SORT_OPTIONS = [
  { key: 'progress', label: '📈 ความคืบหน้า' },
  { key: 'alpha', label: '🔤 ชื่อ' },
];

export default function AllDashboardPage() {
  const [courseData, setCourseData] = useState([]);
  const [sortBy, setSortBy] = useState('progress');
  const [activeTab, setActiveTab] = useState('progress');
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const bookmarks = getBookmarks();
    const data = coursesList.map(course => {
      const completed = getCourseProgress(course.id);
      const total = course.chapterCount || 0;
      const done = Array.isArray(completed) ? completed.length : 0;
      const pct = total > 0 ? Math.round((done / total) * 100) : 0;
      const isBookmarked = bookmarks.includes(course.id);
      return { ...course, done, total, pct, isBookmarked };
    });
    setCourseData(data);
    setLoaded(true);
  }, []);

  const started = courseData.filter(c => c.done > 0);
  const totalDone = courseData.reduce((a, c) => a + c.done, 0);
  const totalChapters = courseData.reduce((a, c) => a + c.total, 0);
  const overallPct = totalChapters > 0 ? Math.round((totalDone / totalChapters) * 100) : 0;
  const completedCourses = courseData.filter(c => c.pct === 100);
  const bookmarkedCourses = courseData.filter(c => c.isBookmarked);

  const sorted = [...courseData].sort((a, b) => {
    if (sortBy === 'progress') return b.pct - a.pct;
    return a.title.localeCompare(b.title, 'th');
  });

  const displayList =
    activeTab === 'progress' ? sorted.filter(c => c.done > 0) :
    activeTab === 'bookmarks' ? sorted.filter(c => c.isBookmarked) :
    sorted;

  if (!loaded) {
    return (
      <div style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ color: 'var(--text-dim)', fontSize: '1rem' }}>กำลังโหลด...</div>
      </div>
    );
  }

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg, #0a0a0f)', color: 'var(--text, #f1f5f9)', fontFamily: 'inherit', padding: '0 0 80px' }}>

      {/* Header */}
      <div style={{
        background: 'linear-gradient(135deg, rgba(139,92,246,0.12) 0%, rgba(59,130,246,0.08) 100%)',
        borderBottom: '1px solid rgba(139,92,246,0.2)',
        padding: '40px 24px 32px', textAlign: 'center',
      }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <div style={{ fontSize: '2.6rem', marginBottom: 10 }}>📊</div>
          <h1 style={{
            fontSize: 'clamp(1.6rem,4vw,2.4rem)', fontWeight: 900, margin: '0 0 8px',
            background: 'linear-gradient(135deg,#a78bfa,#60a5fa)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
          }}>ความก้าวหน้าของฉัน</h1>
          <p style={{ color: 'var(--text-dim,#9ca3af)', margin: 0, fontSize: '0.9rem' }}>
            ติดตามความคืบหน้า · Bookmarks · 60 คอร์สในที่เดียว
          </p>
        </div>
      </div>

      <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 20px' }}>

        {/* Overall Stats */}
        <div style={{
          display: 'grid', gridTemplateColumns: 'auto 1fr', gap: 28,
          alignItems: 'center',
          background: 'var(--glass,rgba(255,255,255,0.04))',
          border: '1px solid rgba(139,92,246,0.2)',
          borderRadius: 24, padding: '24px 28px',
          marginTop: 28, marginBottom: 24,
        }}>
          <div style={{ position: 'relative', width: 120, height: 120 }}>
            <CircularRing pct={overallPct} size={120} stroke={10} color="#8b5cf6" />
            <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ fontSize: '1.5rem', fontWeight: 900, color: '#a78bfa', lineHeight: 1 }}>{overallPct}%</span>
              <span style={{ fontSize: '0.58rem', color: 'var(--text-muted,#6b7280)', marginTop: 3 }}>โดยรวม</span>
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(100px,1fr))', gap: 12 }}>
            {[
              { val: started.length, lbl: 'กำลังเรียน', color: '#8b5cf6', icon: '📚' },
              { val: completedCourses.length, lbl: 'จบแล้ว', color: '#22c55e', icon: '🏆' },
              { val: bookmarkedCourses.length, lbl: 'Bookmarks', color: '#f59e0b', icon: '🔖' },
              { val: totalDone, lbl: 'บทเรียนที่จบ', color: '#3b82f6', icon: '✅' },
            ].map(s => (
              <div key={s.lbl} style={{
                background: 'rgba(255,255,255,0.04)', borderRadius: 12,
                border: '1px solid rgba(255,255,255,0.07)',
                padding: '12px 10px', textAlign: 'center',
              }}>
                <div style={{ fontSize: '1rem', marginBottom: 3 }}>{s.icon}</div>
                <div style={{ fontSize: '1.4rem', fontWeight: 900, color: s.color, lineHeight: 1 }}>{s.val}</div>
                <div style={{ fontSize: '0.6rem', color: 'var(--text-muted,#6b7280)', marginTop: 3, lineHeight: 1.3 }}>{s.lbl}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Tabs */}
        <div style={{ display: 'flex', gap: 8, marginBottom: 20, flexWrap: 'wrap' }}>
          {TABS.map(tab => (
            <button key={tab.key} onClick={() => setActiveTab(tab.key)} style={{
              padding: '8px 18px', borderRadius: 24, fontSize: '0.78rem', fontWeight: 700,
              border: `1px solid ${activeTab === tab.key ? '#8b5cf6' : 'rgba(255,255,255,0.1)'}`,
              background: activeTab === tab.key
                ? 'linear-gradient(135deg,rgba(139,92,246,0.3),rgba(59,130,246,0.2))'
                : 'rgba(255,255,255,0.04)',
              color: activeTab === tab.key ? '#a78bfa' : 'var(--text-dim,#9ca3af)',
              cursor: 'pointer', transition: 'all 0.2s',
            }}>{tab.label}{tab.key === 'bookmarks' && bookmarkedCourses.length > 0 ?
              <span style={{ marginLeft: 6, fontSize: '0.65rem', background: '#f59e0b22',
                color: '#f59e0b', padding: '1px 6px', borderRadius: 8, border: '1px solid #f59e0b33' }}>
                {bookmarkedCourses.length}
              </span> : null}
            </button>
          ))}
          <div style={{ marginLeft: 'auto', display: 'flex', gap: 6 }}>
            {SORT_OPTIONS.map(opt => (
              <button key={opt.key} onClick={() => setSortBy(opt.key)} style={{
                padding: '6px 12px', borderRadius: 20, fontSize: '0.72rem', fontWeight: 600,
                border: `1px solid ${sortBy === opt.key ? '#8b5cf6' : 'rgba(255,255,255,0.08)'}`,
                background: sortBy === opt.key ? 'rgba(139,92,246,0.15)' : 'rgba(255,255,255,0.04)',
                color: sortBy === opt.key ? '#a78bfa' : 'var(--text-muted,#6b7280)',
                cursor: 'pointer', transition: 'all 0.2s',
              }}>{opt.label}</button>
            ))}
          </div>
        </div>

        {/* Empty States */}
        {activeTab === 'progress' && started.length === 0 && (
          <div style={{ textAlign: 'center', padding: '52px 24px',
            background: 'var(--glass,rgba(255,255,255,0.04))',
            border: '1px solid rgba(255,255,255,0.08)', borderRadius: 20 }}>
            <div style={{ fontSize: '3rem', marginBottom: 14 }}>🎓</div>
            <h2 style={{ fontSize: '1.1rem', fontWeight: 800, marginBottom: 8 }}>ยังไม่ได้เริ่มเรียนเลย</h2>
            <p style={{ color: 'var(--text-dim,#9ca3af)', fontSize: '0.85rem', marginBottom: 20 }}>
              เลือกคอร์สและเริ่มเรียนได้เลย ฟรี 100%
            </p>
            <Link href="/courses" style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              background: 'linear-gradient(135deg,#7c3aed,#4f46e5)',
              color: '#fff', padding: '12px 28px', borderRadius: 24,
              fontSize: '0.88rem', fontWeight: 700, textDecoration: 'none',
              boxShadow: '0 4px 16px rgba(124,58,237,0.4)',
            }}>🚀 ดูคอร์สทั้งหมด</Link>
          </div>
        )}

        {activeTab === 'bookmarks' && bookmarkedCourses.length === 0 && (
          <div style={{ textAlign: 'center', padding: '52px 24px',
            background: 'var(--glass,rgba(255,255,255,0.04))',
            border: '1px solid rgba(255,255,255,0.08)', borderRadius: 20 }}>
            <div style={{ fontSize: '3rem', marginBottom: 14 }}>🔖</div>
            <h2 style={{ fontSize: '1.1rem', fontWeight: 800, marginBottom: 8 }}>ยังไม่มี Bookmark</h2>
            <p style={{ color: 'var(--text-dim,#9ca3af)', fontSize: '0.85rem', marginBottom: 20 }}>
              กด 🏷️ ในหน้าคอร์สเพื่อบันทึกคอร์สที่สนใจ
            </p>
            <Link href="/courses" style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              background: 'linear-gradient(135deg,#f59e0b,#d97706)',
              color: '#fff', padding: '12px 28px', borderRadius: 24,
              fontSize: '0.88rem', fontWeight: 700, textDecoration: 'none',
              boxShadow: '0 4px 16px rgba(245,158,11,0.4)',
            }}>📚 เลือกคอร์สที่ชอบ</Link>
          </div>
        )}

        {/* Course List */}
        {displayList.length > 0 && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <div style={{ fontSize: '0.72rem', color: 'var(--text-muted,#6b7280)', marginBottom: 4 }}>
              แสดง {displayList.length} คอร์ส
            </div>
            {displayList.map(course => <CourseRow key={course.id} course={course} />)}
          </div>
        )}

        {/* Footer CTA */}
        <div style={{
          marginTop: 40, padding: '24px', textAlign: 'center',
          background: 'linear-gradient(135deg,rgba(139,92,246,0.08),rgba(59,130,246,0.06))',
          border: '1px solid rgba(139,92,246,0.15)', borderRadius: 20,
        }}>
          <div style={{ display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/courses" style={{
              display: 'inline-flex', alignItems: 'center', gap: 6,
              background: 'linear-gradient(135deg,#7c3aed,#4f46e5)',
              color: '#fff', padding: '10px 22px', borderRadius: 20,
              fontSize: '0.82rem', fontWeight: 700, textDecoration: 'none',
              boxShadow: '0 4px 14px rgba(124,58,237,0.35)',
            }}>🎓 ดูคอร์สทั้งหมด</Link>
            <Link href="/roadmap" style={{
              display: 'inline-flex', alignItems: 'center', gap: 6,
              background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)',
              color: 'var(--text-dim,#9ca3af)', padding: '10px 22px', borderRadius: 20,
              fontSize: '0.82rem', fontWeight: 700, textDecoration: 'none',
            }}>🗺️ Learning Roadmap</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
