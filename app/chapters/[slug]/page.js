'use client';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { chapters } from '@/data/chapters-index';
import { getChapterContent } from '@/data/content-loader';
import { useState, useEffect } from 'react';

export default function ChapterPage() {
  const params = useParams();
  const slug = params.slug;
  const chapterIndex = chapters.findIndex(c => c.slug === slug);
  const chapter = chapters[chapterIndex];
  const prev = chapterIndex > 0 ? chapters[chapterIndex - 1] : null;
  const next = chapterIndex < chapters.length - 1 ? chapters[chapterIndex + 1] : null;
  const [completed, setCompleted] = useState([]);
  const [content, setContent] = useState('');

  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem('de101-progress') || '[]');
      setCompleted(saved);
    } catch {}
  }, []);

  useEffect(() => {
    if (chapter) {
      const c = getChapterContent(chapter.number);
      setContent(c);
    }
  }, [chapter]);

  useEffect(() => {
    // Add copy buttons to code blocks
    const timer = setTimeout(() => {
      document.querySelectorAll('.chapter-content pre').forEach(pre => {
        if (pre.querySelector('.copy-btn')) return;
        const btn = document.createElement('button');
        btn.className = 'copy-btn';
        btn.textContent = 'Copy';
        btn.onclick = () => {
          const code = pre.querySelector('code');
          if (code) {
            navigator.clipboard.writeText(code.textContent).then(() => {
              btn.textContent = '✓ Copied';
              setTimeout(() => btn.textContent = 'Copy', 2000);
            });
          }
        };
        pre.style.position = 'relative';
        pre.appendChild(btn);
      });
    }, 100);
    return () => clearTimeout(timer);
  }, [content]);

  const markComplete = () => {
    if (!chapter) return;
    let updated;
    if (completed.includes(chapter.number)) {
      updated = completed.filter(n => n !== chapter.number);
    } else {
      updated = [...completed, chapter.number];
    }
    setCompleted(updated);
    localStorage.setItem('de101-progress', JSON.stringify(updated));
  };

  if (!chapter) {
    return (
      <div className="content-wrapper" style={{ textAlign: 'center', paddingTop: 80 }}>
        <h1>404</h1>
        <p>ไม่พบบทเรียนนี้</p>
        <Link href="/" style={{ color: 'var(--blue)' }}>← กลับหน้าหลัก</Link>
      </div>
    );
  }

  const isDone = completed.includes(chapter.number);

  return (
    <div className="content-wrapper">
      <div className="chapter-header">
        <div className="chapter-badge" style={{ background: `${chapter.phaseColor}15`, color: chapter.phaseColor, border: `1px solid ${chapter.phaseColor}30` }}>
          Phase {chapter.phase}: {chapter.phaseTitle} — บทที่ {chapter.number}
        </div>
        <h1 className="chapter-title">
          {chapter.emoji} {chapter.title}
        </h1>
        <p className="chapter-desc">{chapter.description || ''}</p>
      </div>

      <div className="chapter-content" dangerouslySetInnerHTML={{ __html: content || '<p style="color:var(--text-muted);text-align:center;padding:40px">⏳ กำลังโหลดเนื้อหา...</p>' }} />

      <div style={{ textAlign: 'center', margin: '32px 0' }}>
        <button
          onClick={markComplete}
          style={{
            padding: '12px 28px',
            borderRadius: 'var(--radius)',
            background: isDone ? 'var(--green-dim)' : 'linear-gradient(135deg, var(--blue), var(--purple))',
            color: isDone ? 'var(--green)' : '#fff',
            border: isDone ? '1px solid var(--green-border)' : 'none',
            fontSize: '0.9rem',
            fontWeight: 700,
            cursor: 'pointer',
            fontFamily: 'var(--font-th)',
            transition: 'all 0.2s',
          }}
        >
          {isDone ? '✅ เรียนจบแล้ว — คลิกเพื่อยกเลิก' : '☑️ ทำเครื่องหมายว่าเรียนจบ'}
        </button>
      </div>

      <div className="chapter-nav">
        {prev && (
          <Link href={`/chapters/${prev.slug}`} className="nav-link">
            <span className="nav-label">← ก่อนหน้า</span>
            <span className="nav-title">{prev.emoji} {prev.shortTitle}</span>
          </Link>
        )}
        {next && (
          <Link href={`/chapters/${next.slug}`} className="nav-link next">
            <span className="nav-label">ถัดไป →</span>
            <span className="nav-title">{next.emoji} {next.shortTitle}</span>
          </Link>
        )}
      </div>
    </div>
  );
}
