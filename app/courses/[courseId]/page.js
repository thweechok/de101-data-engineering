'use client';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { coursesRegistry, coursesList } from '@/data/courses-registry';
import { getCourseChapters } from '@/data/course-loader';
import { useState, useEffect } from 'react';

/* ── Prerequisites map ── */
const PREREQUISITES = {
  'de201': ['de101'],
  'de301': ['de201'],
  'kafka101': ['de101'],
  'gcp-cert': ['de101'],
  'airflow-advanced': ['de101'],
  'pyspark-mastery': ['python-de'],
  'databricks-fundamentals': ['pyspark-mastery'],
  'aws-data-engineer': ['de101'],
  'azure-data-engineer': ['de101'],
  'apache-flink': ['kafka101'],
  'dbt-mastery': ['sql-mastery'],
  'medallion-architecture': ['dbt-mastery'],
  'data-quality': ['dbt-mastery'],
  'data-catalog': ['data-quality'],
  'de-system-design': ['de301'],
  'de-portfolio': ['de101'],
  'freelance-de': ['de-portfolio'],
  'python-da': ['sql-for-da'],
  'statistics-da': ['python-da'],
  'da-career': ['sql-for-da'],
  'terraform-de': ['docker-de'],
};

/* ── Timeline Chapter Card ── */
function TimelineChapter({ ch, courseId, completed, color, isLast }) {
  const [hovered, setHovered] = useState(false);
  const done = completed.includes(ch.number);

  return (
    <div style={{ display: 'flex', gap: 0, position: 'relative' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: 56, flexShrink: 0 }}>
        <div style={{
          width: 44, height: 44, borderRadius: '50%', flexShrink: 0, zIndex: 2,
          background: done
            ? 'linear-gradient(135deg,#22c55e,#16a34a)'
            : hovered ? `linear-gradient(135deg,${color},${color}cc)` : 'var(--glass2)',
          border: done ? '2px solid #22c55e' : `2px solid ${hovered ? color : 'var(--border)'}`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: done ? '1.1rem' : '0.75rem', fontWeight: 800,
          color: done ? '#fff' : hovered ? '#fff' : 'var(--text-muted)',
          boxShadow: hovered && !done ? `0 0 18px ${color}55` : done ? '0 0 14px #22c55e55' : 'none',
          transition: 'all 0.28s cubic-bezier(.4,0,.2,1)',
        }}>
          {done ? '✓' : String(ch.number).padStart(2, '0')}
        </div>
        {!isLast && (
          <div style={{
            width: 2, flex: 1, minHeight: 28, marginTop: 4,
            background: done
              ? `linear-gradient(to bottom, #22c55e, ${color}44)`
              : `linear-gradient(to bottom, var(--border), transparent)`,
            transition: 'background 0.4s',
          }} />
        )}
      </div>
      <Link
        href={`/courses/${courseId}/${ch.slug}`}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{ textDecoration: 'none', color: 'inherit', flex: 1, marginBottom: isLast ? 0 : 12 }}
      >
        <div style={{
          background: hovered ? `linear-gradient(135deg, ${color}0d, ${color}05)` : done ? 'rgba(34,197,94,0.05)' : 'var(--glass)',
          border: `1.5px solid ${done ? '#22c55e44' : hovered ? color + '66' : 'var(--border)'}`,
          borderRadius: 14, padding: '14px 18px',
          display: 'flex', alignItems: 'center', gap: 14,
          transition: 'all 0.25s cubic-bezier(.4,0,.2,1)',
          transform: hovered ? 'translateX(6px) translateY(-1px)' : 'translateX(0)',
          boxShadow: hovered ? `0 6px 28px ${color}22, 0 2px 8px rgba(0,0,0,.2)` : '0 1px 4px rgba(0,0,0,.12)',
          cursor: 'pointer', marginLeft: 12,
        }}>
          <span style={{ fontSize: '1.6rem', lineHeight: 1, flexShrink: 0 }}>{ch.emoji}</span>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{
              fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.08em',
              color: done ? '#22c55e' : hovered ? color : 'var(--text-muted)',
              marginBottom: 3, textTransform: 'uppercase', transition: 'color 0.2s',
            }}>บทที่ {ch.number}</div>
            <div style={{
              fontSize: '0.9rem', fontWeight: 700, lineHeight: 1.35,
              color: done ? '#86efac' : hovered ? '#f1f5f9' : 'var(--text)',
              transition: 'color 0.2s',
              whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
            }}>{ch.title}</div>
          </div>
          <div style={{
            width: 28, height: 28, borderRadius: '50%', flexShrink: 0,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            background: done ? '#22c55e22' : hovered ? color + '22' : 'var(--glass2)',
            border: `1px solid ${done ? '#22c55e44' : hovered ? color + '55' : 'var(--border)'}`,
            fontSize: '0.7rem', color: done ? '#22c55e' : hovered ? color : 'var(--text-muted)',
            transition: 'all 0.22s',
          }}>
            {done ? '✓' : '→'}
          </div>
        </div>
      </Link>
    </div>
  );
}

/* ── Related Course Card ── */
function RelatedCard({ course }) {
  const [hov, setHov] = useState(false);
  return (
    <Link href={`/courses/${course.id}`} style={{ textDecoration: 'none', color: 'inherit' }}
      onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}>
      <div style={{
        background: hov ? `linear-gradient(135deg,${course.levelColor}0d,${course.levelColor}05)` : 'var(--glass)',
        border: `1.5px solid ${hov ? (course.levelColor + '55') : 'var(--border)'}`,
        borderRadius: 14, padding: '14px 16px',
        display: 'flex', alignItems: 'center', gap: 12,
        transition: 'all 0.22s',
        transform: hov ? 'translateY(-2px)' : 'none',
        boxShadow: hov ? `0 6px 24px ${course.levelColor}22` : 'none',
        cursor: 'pointer',
      }}>
        <span style={{ fontSize: '1.8rem' }}>{course.emoji}</span>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ fontSize: '0.82rem', fontWeight: 700, lineHeight: 1.3, marginBottom: 4,
            whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
            {course.title}
          </div>
          <div style={{ fontSize: '0.65rem', color: course.levelColor, fontWeight: 600 }}>
            {course.level} · {course.chapterCount} บท
          </div>
        </div>
        <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>→</span>
      </div>
    </Link>
  );
}

export default function CourseLandingPage() {
  const { courseId } = useParams();
  const course = coursesRegistry[courseId];
  const [completed, setCompleted] = useState([]);
  const [bookmarked, setBookmarked] = useState(false);
  const chapters = getCourseChapters(courseId);

  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem(`${courseId}-progress`) || '[]');
      setCompleted(saved);
      const bm = JSON.parse(localStorage.getItem('bookmarked-courses') || '[]');
      setBookmarked(bm.includes(courseId));
    } catch {}
  }, [courseId]);

  const toggleBookmark = () => {
    try {
      const bm = JSON.parse(localStorage.getItem('bookmarked-courses') || '[]');
      const updated = bm.includes(courseId) ? bm.filter(x => x !== courseId) : [...bm, courseId];
      localStorage.setItem('bookmarked-courses', JSON.stringify(updated));
      setBookmarked(!bookmarked);
    } catch {}
  };

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

  const color = course.levelColor || '#8b5cf6';
  const progress = chapters.length > 0 ? Math.round((completed.length / chapters.length) * 100) : 0;
  const doneCount = completed.length;
  // Find the first chapter that hasn't been completed yet (correct continue logic)
  const nextChapter = chapters.find(ch => !completed.includes(ch.number)) || chapters[0];

  // Prerequisites
  const prereqs = (PREREQUISITES[courseId] || [])
    .map(id => coursesRegistry[id])
    .filter(Boolean);

  // Related courses: same group/tags, exclude current, max 3
  const related = coursesList
    .filter(c => c.id !== courseId)
    .map(c => {
      const sharedTags = (c.tags || []).filter(t => (course.tags || []).includes(t)).length;
      return { ...c, score: sharedTags };
    })
    .filter(c => c.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 3);

  return (
    <div className="content-wrapper">
      <div style={{ maxWidth: 720, margin: '0 auto' }}>

        {/* Breadcrumb */}
        <div style={{ fontSize: '0.73rem', color: 'var(--text-muted)', marginBottom: 18, display: 'flex', alignItems: 'center', gap: 6 }}>
          <Link href="/" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>🏠 หน้าแรก</Link>
          <span>›</span>
          <Link href="/courses" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>📚 Courses</Link>
          <span>›</span>
          <span style={{ color: 'var(--text)' }}>{course.emoji} {course.title}</span>
        </div>

        {/* Hero Card */}
        <div style={{
          background: `linear-gradient(135deg, ${color}10, ${color}05, var(--glass))`,
          border: `1.5px solid ${color}30`,
          borderRadius: 22, padding: '32px 28px 28px', marginBottom: 28,
          boxShadow: `0 8px 40px ${color}15`,
          textAlign: 'center', position: 'relative', overflow: 'hidden',
        }}>
          <div style={{
            position: 'absolute', top: -60, left: '50%', transform: 'translateX(-50%)',
            width: 200, height: 200, borderRadius: '50%',
            background: `radial-gradient(circle, ${color}20 0%, transparent 70%)`,
            pointerEvents: 'none',
          }} />

          {/* Bookmark button */}
          <button onClick={toggleBookmark} style={{
            position: 'absolute', top: 16, right: 16,
            width: 36, height: 36, borderRadius: '50%',
            background: bookmarked ? `${color}25` : 'var(--glass2)',
            border: `1px solid ${bookmarked ? color + '55' : 'var(--border)'}`,
            color: bookmarked ? color : 'var(--text-muted)',
            fontSize: '1rem', cursor: 'pointer',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            transition: 'all 0.22s',
          }} title={bookmarked ? 'ลบ Bookmark' : 'เพิ่ม Bookmark'}>
            {bookmarked ? '🔖' : '🏷️'}
          </button>

          <div style={{ fontSize: '3.8rem', marginBottom: 10, lineHeight: 1 }}>{course.emoji}</div>
          <h1 style={{ fontSize: 'clamp(1.3rem,3vw,1.9rem)', fontWeight: 900, marginBottom: 6, lineHeight: 1.25 }}>
            {course.fullTitle}
          </h1>
          <p style={{ color, fontSize: '0.82rem', fontWeight: 600, marginBottom: 10, letterSpacing: '0.02em' }}>
            {course.subtitle}
          </p>
          <p style={{ color: 'var(--text-dim)', fontSize: '0.82rem', maxWidth: 500, margin: '0 auto 20px', lineHeight: 1.65 }}>
            {course.desc}
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: 10, flexWrap: 'wrap', marginBottom: 16, fontSize: '0.76rem' }}>
            {[
              { icon: '📖', val: `${course.chapterCount} บท` },
              { icon: '⏱️', val: course.duration },
              { icon: '●', val: course.level, color },
            ].map(m => (
              <span key={m.val} style={{
                padding: '5px 14px', borderRadius: 20,
                background: m.color ? `${m.color}15` : 'var(--glass2)',
                border: `1px solid ${m.color ? m.color + '35' : 'var(--border)'}`,
                color: m.color || 'var(--text-dim)', fontWeight: 600,
              }}>{m.icon} {m.val}</span>
            ))}
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 6, marginBottom: doneCount > 0 ? 20 : 0 }}>
            {course.tags.map(t => (
              <span key={t} className="course-tag">{t}</span>
            ))}
          </div>

          {doneCount > 0 && (
            <div style={{ maxWidth: 360, margin: '0 auto' }}>
              <div style={{
                height: 8, borderRadius: 99, background: 'var(--glass2)',
                border: '1px solid var(--border)', overflow: 'hidden',
              }}>
                <div style={{
                  height: '100%', borderRadius: 99, width: `${progress}%`,
                  background: `linear-gradient(90deg, ${color}, ${color}bb)`,
                  transition: 'width 0.8s cubic-bezier(.4,0,.2,1)',
                  boxShadow: `0 0 10px ${color}88`,
                }} />
              </div>
              <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', marginTop: 6 }}>
                ✅ เรียนแล้ว {doneCount}/{chapters.length} บท ({progress}%)
              </div>
            </div>
          )}
        </div>

        {/* Prerequisites */}
        {prereqs.length > 0 && (
          <div style={{
            background: 'rgba(245,158,11,0.06)', border: '1px solid rgba(245,158,11,0.2)',
            borderRadius: 14, padding: '14px 18px', marginBottom: 24,
            display: 'flex', alignItems: 'flex-start', gap: 12,
          }}>
            <span style={{ fontSize: '1.2rem', flexShrink: 0 }}>📌</span>
            <div>
              <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#f59e0b', marginBottom: 6 }}>
                แนะนำให้เรียนก่อน
              </div>
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                {prereqs.map(p => (
                  <Link key={p.id} href={`/courses/${p.id}`} style={{
                    display: 'inline-flex', alignItems: 'center', gap: 6,
                    padding: '4px 12px', borderRadius: 20, fontSize: '0.75rem', fontWeight: 600,
                    background: 'rgba(245,158,11,0.1)', border: '1px solid rgba(245,158,11,0.3)',
                    color: '#f59e0b', textDecoration: 'none', transition: 'all 0.2s',
                  }}>
                    {p.emoji} {p.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Timeline */}
        {chapters.length > 0 ? (
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 24 }}>
              <div style={{ width: 4, height: 24, borderRadius: 2, background: `linear-gradient(to bottom, ${color}, ${color}55)` }} />
              <h2 style={{ fontSize: '1.05rem', fontWeight: 800, margin: 0 }}>🗺️ สารบัญ — Learning Journey</h2>
              <span style={{
                marginLeft: 'auto', fontSize: '0.7rem', padding: '3px 10px', borderRadius: 12,
                background: `${color}15`, border: `1px solid ${color}30`, color,
              }}>{chapters.length} บท</span>
            </div>
            <div style={{ paddingLeft: 4 }}>
              {chapters.map((ch, i) => (
                <TimelineChapter key={ch.slug} ch={ch} courseId={courseId}
                  completed={completed} color={color} isLast={i === chapters.length - 1} />
              ))}
            </div>

            {/* CTA */}
            <div style={{ textAlign: 'center', marginTop: 36 }}>
              {doneCount === 0 ? (
                <Link href={`/courses/${courseId}/${chapters[0]?.slug || 'overview'}`} style={{
                  display: 'inline-flex', alignItems: 'center', gap: 8,
                  padding: '14px 36px', borderRadius: 99,
                  background: `linear-gradient(135deg, ${color}, ${color}cc)`,
                  color: '#fff', fontWeight: 700, fontSize: '0.95rem',
                  textDecoration: 'none', boxShadow: `0 6px 24px ${color}55`,
                }}>🚀 เริ่มเรียนบทแรก</Link>
              ) : doneCount < chapters.length ? (
                <Link href={`/courses/${courseId}/${nextChapter?.slug || chapters[0]?.slug}`} style={{
                  display: 'inline-flex', alignItems: 'center', gap: 8,
                  padding: '14px 36px', borderRadius: 99,
                  background: `linear-gradient(135deg, ${color}, ${color}cc)`,
                  color: '#fff', fontWeight: 700, fontSize: '0.95rem',
                  textDecoration: 'none', boxShadow: `0 6px 24px ${color}55`,
                }}>▶ เรียนต่อ: บทที่ {(nextChapter?.number ?? doneCount) + 1}</Link>
              ) : (
                <div style={{
                  display: 'inline-flex', alignItems: 'center', gap: 10,
                  padding: '14px 36px', borderRadius: 99,
                  background: 'linear-gradient(135deg,#22c55e,#16a34a)',
                  color: '#fff', fontWeight: 700, fontSize: '0.95rem',
                  boxShadow: '0 6px 24px #22c55e55',
                }}>🎉 เรียนจบครบทุกบทแล้ว!</div>
              )}
            </div>
          </div>
        ) : (
          <div style={{ textAlign: 'center', padding: 48, background: 'var(--glass)', border: '1px solid var(--border)', borderRadius: 20 }}>
            <div style={{ fontSize: '2.5rem', marginBottom: 10 }}>🔜</div>
            <h3>เนื้อหากำลังมา เร็วๆ นี้!</h3>
            <p style={{ fontSize: '0.82rem', color: 'var(--text-dim)' }}>กำลังสร้างเนื้อหาคอร์สนี้ กรุณารอสักครู่</p>
          </div>
        )}

        {/* Related Courses */}
        {related.length > 0 && (
          <div style={{ marginTop: 44 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
              <div style={{ width: 4, height: 20, borderRadius: 2, background: 'linear-gradient(to bottom,#8b5cf6,#3b82f6)' }} />
              <h3 style={{ fontSize: '0.95rem', fontWeight: 800, margin: 0 }}>🔗 คอร์สที่เรียนต่อได้</h3>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {related.map(c => <RelatedCard key={c.id} course={c} />)}
            </div>
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
