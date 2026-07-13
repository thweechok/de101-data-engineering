'use client';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import { coursesRegistry } from '@/data/courses-registry';
import { getCourseChapters } from '@/data/course-loader';
import { useState, useEffect, useRef } from 'react';
import ChapterQuiz from '@/components/ChapterQuiz';
import FloatingAI from '@/components/FloatingAI';

// All courses summary for cross-course AI context
const allCoursesSummary = Object.values(coursesRegistry).map(c => ({
  id: c.id, title: c.title, desc: c.desc, level: c.level, tags: c.tags || [],
}));

/* ── Confetti ── */
function launchConfetti() {
  if (typeof window === 'undefined') return;
  const canvas = document.createElement('canvas');
  Object.assign(canvas.style, {
    position: 'fixed', top: 0, left: 0,
    width: '100%', height: '100%',
    pointerEvents: 'none', zIndex: 9999,
  });
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  document.body.appendChild(canvas);
  const ctx = canvas.getContext('2d');
  const colors = ['#8b5cf6','#22c55e','#3b82f6','#f59e0b','#ef4444','#ec4899','#06b6d4','#a78bfa'];
  const particles = Array.from({ length: 140 }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height * 0.5 - canvas.height * 0.5,
    r: Math.random() * 7 + 3,
    color: colors[Math.floor(Math.random() * colors.length)],
    vx: (Math.random() - 0.5) * 6,
    vy: Math.random() * 5 + 2,
    rot: Math.random() * 360,
    rotV: (Math.random() - 0.5) * 12,
    shape: Math.random() > 0.5 ? 'rect' : 'circle',
  }));
  let frame = 0;
  const MAX = 150;
  function animate() {
    if (frame >= MAX) { canvas.remove(); return; }
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const alpha = Math.max(0, 1 - frame / MAX);
    particles.forEach(p => {
      p.y += p.vy; p.x += p.vx; p.rot += p.rotV;
      ctx.save();
      ctx.globalAlpha = alpha;
      ctx.translate(p.x, p.y);
      ctx.rotate((p.rotation * Math.PI) / 180);
      ctx.fillStyle = p.color;
      if (p.shape === 'circle') {
        ctx.beginPath(); ctx.arc(0, 0, p.r, 0, Math.PI * 2); ctx.fill();
      } else {
        ctx.fillRect(-p.r / 2, -p.r / 2, p.r, p.r * 1.6);
      }
      ctx.restore();
    });
    frame++;
    requestAnimationFrame(animate);
  }
  animate();
}

/* ── Share Screenshot ── */
function shareChapter(course, chapter, color) {
  const canvas = document.createElement('canvas');
  canvas.width = 800; canvas.height = 420;
  const ctx = canvas.getContext('2d');

  // Background gradient
  const grad = ctx.createLinearGradient(0, 0, 800, 420);
  grad.addColorStop(0, '#0a0a0f');
  grad.addColorStop(1, '#1a1030');
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, 800, 420);

  // Accent glow
  const glow = ctx.createRadialGradient(400, 210, 0, 400, 210, 300);
  glow.addColorStop(0, color + '22');
  glow.addColorStop(1, 'transparent');
  ctx.fillStyle = glow;
  ctx.fillRect(0, 0, 800, 420);

  // Border
  ctx.strokeStyle = color + '44';
  ctx.lineWidth = 2;
  ctx.roundRect(10, 10, 780, 400, 20);
  ctx.stroke();

  // Top badge
  ctx.fillStyle = color + '22';
  ctx.roundRect(40, 40, 180, 36, 18);
  ctx.fill();
  ctx.fillStyle = color;
  ctx.font = 'bold 14px "Inter", sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText('📚 DE Learning Path', 130, 63);

  // Course emoji + title
  ctx.font = '80px serif';
  ctx.textAlign = 'left';
  ctx.fillText(course.emoji || '📖', 40, 200);

  ctx.fillStyle = '#ffffff';
  ctx.font = 'bold 36px "Inter", sans-serif';
  ctx.fillText(course.title, 145, 165);

  ctx.fillStyle = color;
  ctx.font = 'bold 16px "Inter", sans-serif';
  ctx.fillText(course.level || 'Beginner', 145, 195);

  // Chapter title
  ctx.fillStyle = '#e2e8f0';
  ctx.font = 'bold 28px "Inter", sans-serif';
  const title = `#${chapter.number} ${chapter.title}`;
  ctx.fillText(title.length > 40 ? title.slice(0, 40) + '...' : title, 40, 270);

  // Divider
  ctx.strokeStyle = color + '33';
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(40, 295); ctx.lineTo(760, 295);
  ctx.stroke();

  // URL
  ctx.fillStyle = '#64748b';
  ctx.font = '14px "Inter", sans-serif';
  ctx.fillText('de-course-seven.vercel.app', 40, 330);

  ctx.fillStyle = color;
  ctx.font = 'bold 14px "Inter", sans-serif';
  ctx.fillText('เรียนฟรี ไม่มีค่าใช้จ่าย', 40, 360);

  canvas.toBlob(blob => {
    if (!blob) return;
    const url = URL.createObjectURL(blob);
    if (navigator.share && navigator.canShare({ files: [new File([blob], 'chapter.png', { type: 'image/png' })] })) {
      navigator.share({
        title: `${course.title} — บทที่ ${chapter.number}`,
        text: chapter.title,
        files: [new File([blob], 'chapter.png', { type: 'image/png' })],
      });
    } else {
      const a = document.createElement('a');
      a.href = url;
      a.download = `chapter-${chapter.number}.png`;
      a.click();
      setTimeout(() => URL.revokeObjectURL(url), 2000);
    }
  }, 'image/png');
}

/* ── Reading Time ── */
function estimateReadingTime(htmlContent) {
  if (!htmlContent) return 5;
  const text = htmlContent.replace(/<[^>]+>/g, '');
  return Math.max(3, Math.round(text.length / 1200));
}

/* ── Note Editor ── */
function NoteEditor({ noteKey }) {
  const [note, setNote] = useState('');
  const [saved, setSaved] = useState(false);
  const [polishing, setPolishing] = useState(false);
  const [polished, setPolished] = useState('');
  const timerRef = useRef(null);

  useEffect(() => {
    try { setNote(localStorage.getItem(noteKey) || ''); } catch {}
  }, [noteKey]);

  const handleChange = (val) => {
    setNote(val);
    setSaved(false);
    setPolished('');
    clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      try { localStorage.setItem(noteKey, val); setSaved(true); } catch {}
    }, 800);
  };

  const polishNote = async () => {
    if (!note.trim()) return;
    setPolishing(true);
    try {
      const res = await fetch('/api/ai', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          prompt: note,
          systemPrompt: 'เรียบเรียงโน้ตนี้ให้อ่านง่ายขึ้น จัดหัวข้อ ใช้ bullet points ตอบเป็นภาษาไทย ห้ามเพิ่มเนื้อหาใหม่',
          provider: 'gemini',
        }),
      });
      const data = await res.json();
      if (data.error) throw new Error(data.error);
      setPolished(data.text || '');
    } catch (e) {
      alert('เกิดข้อผิดพลาด: ' + e.message);
    }
    setPolishing(false);
  };

  return (
    <div style={{ marginTop: 32 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
        <div style={{ width: 3, height: 18, borderRadius: 2, background: 'linear-gradient(to bottom,#8b5cf6,#3b82f6)' }} />
        <span style={{ fontSize: '0.85rem', fontWeight: 700 }}>📝 โน้ตของฉัน</span>
        {saved && !polishing && <span style={{ fontSize: '0.65rem', color: '#22c55e' }}>✓ บันทึกแล้ว</span>}
        {note.trim() && (
          <button onClick={polishNote} disabled={polishing} style={{
            marginLeft: 'auto', fontSize: '0.68rem', padding: '4px 12px', borderRadius: 12,
            background: polishing ? 'var(--glass2)' : 'rgba(139,92,246,0.12)',
            border: '1px solid rgba(139,92,246,0.3)', color: polishing ? 'var(--text-muted)' : '#a78bfa',
            cursor: polishing ? 'wait' : 'pointer', fontWeight: 600, transition: 'all 0.2s',
          }}>✨ {polishing ? 'กำลังเรียบเรียง...' : 'AI Polish'}</button>
        )}
      </div>
      <textarea
        value={note} onChange={e => handleChange(e.target.value)}
        placeholder="จดโน้ตไว้เตือนความจำ... (บันทึกอัตโนมัติ)"
        rows={4}
        style={{
          width: '100%', borderRadius: 14, resize: 'vertical',
          padding: '14px 16px', fontSize: '0.84rem', lineHeight: 1.7,
          background: 'rgba(139,92,246,0.05)',
          border: '1.5px solid rgba(139,92,246,0.2)',
          color: 'var(--text)', outline: 'none',
          fontFamily: 'inherit', boxSizing: 'border-box', transition: 'border-color 0.2s',
        }}
        onFocus={e => e.target.style.borderColor = 'rgba(139,92,246,0.5)'}
        onBlur={e => e.target.style.borderColor = 'rgba(139,92,246,0.2)'}
      />
      {polished && (
        <div style={{ marginTop: 10, borderRadius: 14, overflow: 'hidden', border: '1px solid rgba(139,92,246,0.25)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '8px 14px', background: 'rgba(139,92,246,0.08)', borderBottom: '1px solid rgba(139,92,246,0.15)' }}>
            <span style={{ fontSize: '0.72rem', fontWeight: 700, color: '#a78bfa' }}>✨ AI ช่วยเรียบเรียงแล้ว</span>
            <button onClick={() => { handleChange(polished); setPolished(''); }} style={{ marginLeft: 'auto', fontSize: '0.68rem', padding: '3px 10px', borderRadius: 8, background: 'rgba(139,92,246,0.2)', border: '1px solid rgba(139,92,246,0.3)', color: '#a78bfa', cursor: 'pointer', fontWeight: 600 }}>ใช้เวอร์ชันนี้</button>
            <button onClick={() => setPolished('')} style={{ fontSize: '0.68rem', padding: '3px 8px', borderRadius: 8, background: 'var(--glass2)', border: '1px solid var(--border)', color: 'var(--text-muted)', cursor: 'pointer' }}>✕</button>
          </div>
          <div style={{ padding: '12px 14px', fontSize: '0.82rem', lineHeight: 1.7, color: 'var(--text)', whiteSpace: 'pre-wrap', maxHeight: 240, overflowY: 'auto' }}>{polished}</div>
        </div>
      )}
    </div>
  );
}

export default function CourseChapterPage() {
  const { courseId, slug } = useParams();
  const router = useRouter();
  const course = coursesRegistry[courseId];
  const chapters = getCourseChapters(courseId);
  const currentChapter = chapters.find(c => c.slug === slug) || null;
  const [completed, setCompleted] = useState([]);
  const [shared, setShared] = useState(false);

  // Scroll Resume
  useEffect(() => {
    if (!currentChapter) return;
    const key = `scroll-${courseId}-${slug}`;
    const saved = parseInt(localStorage.getItem(key) || '0');
    if (saved > 100) {
      setTimeout(() => window.scrollTo({ top: saved, behavior: 'smooth' }), 300);
    }
    const saveScroll = () => {
      try { localStorage.setItem(key, String(window.scrollY)); } catch {}
    };
    const throttle = setInterval(saveScroll, 2000);
    return () => clearInterval(throttle);
  }, [courseId, slug, currentChapter]);

  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem(`${courseId}-progress`) || '[]');
      setCompleted(saved);
    } catch {}
  }, [courseId]);

  useEffect(() => {
    if (!currentChapter) return;
    const timer = setTimeout(() => {
      if (typeof window !== 'undefined' && window.Prism) window.Prism.highlightAll();
    }, 200);
    return () => clearTimeout(timer);
  }, [currentChapter]);

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

  useEffect(() => {
    document.querySelectorAll('.chapter-content img').forEach(img => {
      img.setAttribute('loading', 'lazy');
      img.setAttribute('decoding', 'async');
    });
  }, [currentChapter]);

  const toggleComplete = () => {
    if (!currentChapter) return;
    const num = currentChapter.number;
    const wasNotDone = !completed.includes(num);
    const updated = completed.includes(num)
      ? completed.filter(n => n !== num)
      : [...completed, num];
    setCompleted(updated);
    try { localStorage.setItem(`${courseId}-progress`, JSON.stringify(updated)); } catch {}
    if (wasNotDone) launchConfetti();
  };

  const handlePrint = () => window.print();

  const handleShare = () => {
    shareChapter(course, currentChapter, color);
    setShared(true);
    setTimeout(() => setShared(false), 2000);
  };

  useEffect(() => {
    const handleKey = (e) => {
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
      const idx = chapters.findIndex(c => c.slug === slug);
      if (e.key === 'ArrowLeft' && idx > 0) {
        router.push(`/courses/${courseId}/${chapters[idx - 1].slug}`);
      } else if (e.key === 'ArrowRight' && idx < chapters.length - 1) {
        router.push(`/courses/${courseId}/${chapters[idx + 1].slug}`);
      } else if (e.key === 'p' || e.key === 'P') {
        handlePrint();
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
  const readingMins = estimateReadingTime(currentChapter.content);
  const color = course.levelColor || '#8b5cf6';

  return (
    <div className="content-wrapper">
      {/* Print-only header */}
      <div className="print-header">
        <strong>{course.emoji} {course.fullTitle}</strong> — บทที่ {currentChapter.number}: {currentChapter.title}
        <div style={{ fontSize: '0.75rem', marginTop: 4 }}>de-course-seven.vercel.app</div>
      </div>

      {/* Top nav bar */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20, flexWrap: 'wrap', gap: 8 }}>
        <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>
          <Link href="/courses" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>📚 Courses</Link>
          {' › '}
          <Link href={`/courses/${courseId}`} style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>{course.emoji} {course.title}</Link>
          {' › '}
          <span style={{ color: 'var(--text)' }}>#{currentChapter.number}</span>
        </div>
        {/* Action buttons */}
        <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
          <button onClick={handleShare} title="แชร์บทนี้" style={{
            width: 32, height: 32, borderRadius: '50%', border: '1px solid var(--border)',
            background: shared ? 'rgba(34,197,94,0.15)' : 'var(--glass)',
            color: shared ? '#22c55e' : 'var(--text-muted)',
            fontSize: '0.8rem', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
            transition: 'all 0.2s',
          }}>{shared ? '✓' : '📸'}</button>
          <button onClick={handlePrint} title="พิมพ์/PDF (P)" style={{
            width: 32, height: 32, borderRadius: '50%', border: '1px solid var(--border)',
            background: 'var(--glass)', color: 'var(--text-muted)',
            fontSize: '0.8rem', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>🖨️</button>
          <Link href={`/courses/${courseId}`} style={{
            display: 'inline-flex', alignItems: 'center', gap: 6,
            padding: '6px 14px', borderRadius: 20,
            background: 'var(--glass)', border: '1px solid var(--border)',
            color: 'var(--text-dim)', textDecoration: 'none',
            fontSize: '0.78rem', fontWeight: 600, transition: 'all 0.2s',
          }}>← สารบัญ</Link>
        </div>
      </div>

      {/* Chapter Header */}
      <h1 className="chapter-title" style={{ fontSize: '1.6rem', margin: '0 0 8px' }}>
        {currentChapter.emoji} {currentChapter.title}
      </h1>

      {/* Meta badges */}
      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 28, alignItems: 'center' }}>
        <span style={{
          fontSize: '0.68rem', padding: '3px 12px', borderRadius: 20,
          background: `${color}15`, border: `1px solid ${color}30`, color, fontWeight: 600,
        }}>บทที่ {currentChapter.number}</span>
        <span style={{
          fontSize: '0.68rem', padding: '3px 12px', borderRadius: 20,
          background: 'var(--glass2)', border: '1px solid var(--border)',
          color: 'var(--text-muted)', fontWeight: 600,
        }}>⏱️ ~{readingMins} นาที</span>
        {isDone && (
          <span style={{
            fontSize: '0.68rem', padding: '3px 12px', borderRadius: 20,
            background: 'rgba(34,197,94,0.12)', border: '1px solid rgba(34,197,94,0.3)',
            color: '#22c55e', fontWeight: 700,
          }}>✅ เรียนจบแล้ว</span>
        )}
        <span style={{ marginLeft: 'auto', fontSize: '0.65rem', color: 'var(--text-muted)' }}>
          {idx + 1}/{chapters.length}
        </span>
      </div>

      {/* Content */}
      <div className="chapter-content" dangerouslySetInnerHTML={{ __html: currentChapter.content }} />

      {/* Note Editor */}
      <NoteEditor noteKey={`note-${courseId}-${slug}`} />

      {/* Floating AI Widget */}
      <FloatingAI
        course={course}
        chapters={chapters}
        chapterNumber={currentChapter.number}
        chapterTitle={currentChapter.title}
        chapterContent={currentChapter.content}
        allCourses={allCoursesSummary}
      />

      {/* Complete button */}
      <button onClick={toggleComplete} className={`complete-btn ${isDone ? 'completed' : ''}`}
        style={{
          display: 'block', width: '100%', padding: '16px', marginTop: 28,
          borderRadius: 'var(--radius)',
          border: isDone ? '1px solid var(--green-border)' : '1px solid var(--border)',
          background: isDone
            ? 'linear-gradient(135deg,rgba(34,197,94,0.15),rgba(22,163,74,0.1))'
            : `linear-gradient(135deg,${color}10,transparent)`,
          color: isDone ? 'var(--green)' : 'var(--text-dim)',
          fontSize: '0.92rem', fontWeight: 700, cursor: 'pointer',
          fontFamily: 'var(--font-th)', transition: 'all 0.25s',
        }}>
        {isDone ? '✅ เรียนบทนี้แล้ว — คลิกเพื่อยกเลิก' : '🎯 กดเพื่อทำเครื่องหมายว่าเรียนจบบทนี้'}
      </button>

      {/* Quiz */}
      <ChapterQuiz courseId={courseId} chapterTitle={currentChapter.title} />

      {/* Navigation */}
      <div className="chapter-nav">
        {prev ? (
          <Link href={`/courses/${courseId}/${prev.slug}`} className="nav-link prev">
            <span className="nav-label">← บทก่อนหน้า</span>
            <span className="nav-emoji">{prev.emoji}</span>
            <span className="nav-title">{prev.title}</span>
          </Link>
        ) : (
          <Link href={`/courses/${courseId}`} className="nav-link home">
            <span className="nav-label">สารบัญคอร์ส</span>
            <span className="nav-emoji">🏠</span>
            <span className="nav-title">{course.title}</span>
          </Link>
        )}
        {next ? (
          <Link href={`/courses/${courseId}/${next.slug}`} className="nav-link next">
            <span className="nav-label">บทต่อไป →</span>
            <span className="nav-emoji">{next.emoji}</span>
            <span className="nav-title">{next.title}</span>
          </Link>
        ) : (
          <Link href="/courses" className="nav-link next finish">
            <span className="nav-label">✅ เรียนจบคอร์สแล้ว!</span>
            <span className="nav-emoji">🎉</span>
            <span className="nav-title">ดูคอร์สอื่น →</span>
          </Link>
        )}
      </div>
    </div>
  );
}
