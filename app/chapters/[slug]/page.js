'use client';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { chapters } from '@/data/chapters-index';
import { getChapterContent } from '@/data/content-loader';
import Quiz from '@/components/Quiz';
import CheatSheet from '@/components/CheatSheet';
import { useState, useEffect, useMemo } from 'react';

export default function ChapterPage() {
  const params = useParams();
  const router = useRouter();
  const slug = params.slug;
  const chapterIndex = chapters.findIndex(c => c.slug === slug);
  const chapter = chapters[chapterIndex];
  const prev = chapterIndex > 0 ? chapters[chapterIndex - 1] : null;
  const next = chapterIndex < chapters.length - 1 ? chapters[chapterIndex + 1] : null;
  const [completed, setCompleted] = useState([]);
  const [content, setContent] = useState('');
  const [tocItems, setTocItems] = useState([]);
  const [activeHeading, setActiveHeading] = useState('');

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

  // Parse TOC from content
  useEffect(() => {
    if (!content) return;
    const timer = setTimeout(() => {
      const headings = document.querySelectorAll('.chapter-content h3, .chapter-content h4');
      const items = [];
      headings.forEach((h, i) => {
        const id = `heading-${i}`;
        h.setAttribute('id', id);
        items.push({
          id,
          text: h.textContent.slice(0, 40) + (h.textContent.length > 40 ? '...' : ''),
          level: h.tagName === 'H4' ? 4 : 3,
        });
      });
      setTocItems(items);
    }, 200);
    return () => clearTimeout(timer);
  }, [content]);

  // Track active heading for TOC highlight
  useEffect(() => {
    if (tocItems.length === 0) return;
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveHeading(entry.target.id);
          }
        });
      },
      { rootMargin: '-80px 0px -70% 0px' }
    );
    tocItems.forEach(item => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [tocItems]);

  // Copy buttons for code blocks
  useEffect(() => {
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

  // Syntax highlighting with Prism
  useEffect(() => {
    if (!content) return;
    const timer = setTimeout(() => {
      if (typeof window !== 'undefined' && window.Prism) {
        window.Prism.highlightAll();
      }
    }, 300);
    return () => clearTimeout(timer);
  }, [content]);

  // Keyboard navigation ← →
  useEffect(() => {
    const handleKey = (e) => {
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
      if (e.key === 'ArrowLeft' && prev) {
        router.push(`/chapters/${prev.slug}`);
      } else if (e.key === 'ArrowRight' && next) {
        router.push(`/chapters/${next.slug}`);
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [prev, next, router]);

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

  // Calculate reading time
  const readingTime = useMemo(() => {
    if (!content) return 0;
    const text = content.replace(/<[^>]*>/g, '');
    const thaiChars = (text.match(/[\u0E00-\u0E7F]/g) || []).length;
    const words = text.replace(/[\u0E00-\u0E7F]/g, '').split(/\s+/).filter(Boolean).length;
    return Math.max(1, Math.ceil((thaiChars / 200 + words / 200)));
  }, [content]);

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
        <div className="chapter-meta">
          <span className="meta-item">⏱️ อ่าน ~{readingTime} นาที</span>
          <span className="meta-item">⌨️ กด ← → เพื่อเปลี่ยนบท</span>
        </div>
      </div>

      {/* Floating TOC */}
      {tocItems.length > 3 && (
        <div className="floating-toc">
          <div className="toc-title">📑 สารบัญ</div>
          {tocItems.filter(t => t.level === 3).map(item => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`toc-item ${activeHeading === item.id ? 'active' : ''}`}
              onClick={e => {
                e.preventDefault();
                document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
            >
              {item.text}
            </a>
          ))}
        </div>
      )}

      <div className="chapter-content" dangerouslySetInnerHTML={{ __html: content || '<p style="color:var(--text-muted);text-align:center;padding:40px">⏳ กำลังโหลดเนื้อหา...</p>' }} />

      <CheatSheet chapterNumber={chapter.number} />

      <Quiz chapterNumber={chapter.number} />

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

