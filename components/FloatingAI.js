'use client';
import { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';

/* ── FlashCard ── */
function FlashCard({ card, index, total }) {
  const [flipped, setFlipped] = useState(false);
  return (
    <div style={{ perspective: 1000, width: '100%', margin: '0 auto' }}>
      <div onClick={() => setFlipped(f => !f)} style={{
        position: 'relative', width: '100%', minHeight: 160,
        transformStyle: 'preserve-3d',
        transform: flipped ? 'rotateY(180deg)' : 'rotateY(0)',
        transition: 'transform 0.5s cubic-bezier(.4,0,.2,1)', cursor: 'pointer',
      }}>
        <div style={{
          position: 'absolute', inset: 0, backfaceVisibility: 'hidden',
          background: 'linear-gradient(135deg,rgba(139,92,246,0.12),rgba(59,130,246,0.08))',
          border: '1.5px solid rgba(139,92,246,0.3)', borderRadius: 14,
          display: 'flex', flexDirection: 'column', alignItems: 'center',
          justifyContent: 'center', padding: '18px 20px', textAlign: 'center',
        }}>
          <div style={{ fontSize: '0.6rem', color: '#a78bfa', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 10 }}>❓ {index + 1}/{total}</div>
          <div style={{ fontSize: '0.88rem', fontWeight: 700, lineHeight: 1.5, color: 'var(--text)' }}>{card.q}</div>
          <div style={{ marginTop: 10, fontSize: '0.62rem', color: 'var(--text-muted)' }}>👆 แตะดูเฉลย</div>
        </div>
        <div style={{
          position: 'absolute', inset: 0, backfaceVisibility: 'hidden',
          transform: 'rotateY(180deg)',
          background: 'linear-gradient(135deg,rgba(34,197,94,0.1),rgba(16,185,129,0.06))',
          border: '1.5px solid rgba(34,197,94,0.3)', borderRadius: 14,
          display: 'flex', flexDirection: 'column', alignItems: 'center',
          justifyContent: 'center', padding: '18px 20px', textAlign: 'center',
        }}>
          <div style={{ fontSize: '0.6rem', color: '#22c55e', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 10 }}>✅ เฉลย</div>
          <div style={{ fontSize: '0.82rem', lineHeight: 1.6, color: 'var(--text)' }}>{card.a}</div>
        </div>
      </div>
    </div>
  );
}

/* ── Mind Map SVG ── */
function MindMapSVG({ data }) {
  if (!data || !data.branches) return null;
  const W = 500, H = 340, cx = W / 2, cy = H / 2, R = 120, SR = 65;
  const n = data.branches.length;
  const colors = ['#8b5cf6','#22c55e','#3b82f6','#f59e0b','#ef4444','#ec4899','#06b6d4','#84cc16'];
  return (
    <svg width="100%" viewBox={`0 0 ${W} ${H}`} style={{ fontFamily: 'inherit' }}>
      <circle cx={cx} cy={cy} r={44} fill="rgba(139,92,246,0.08)" />
      <circle cx={cx} cy={cy} r={36} fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" strokeWidth="1.5" />
      <text x={cx} y={cy} textAnchor="middle" dominantBaseline="middle" fill="#e2e8f0" fontSize="9" fontWeight="800">{(data.center || '').slice(0, 16)}</text>
      {data.branches.map((branch, i) => {
        const angle = (i / n) * 2 * Math.PI - Math.PI / 2;
        const bx = cx + R * Math.cos(angle), by = cy + R * Math.sin(angle);
        const color = colors[i % colors.length];
        const items = (branch.items || []).slice(0, 2);
        return (
          <g key={i}>
            <line x1={cx + 36 * Math.cos(angle)} y1={cy + 36 * Math.sin(angle)} x2={bx - 32 * Math.cos(angle)} y2={by - 32 * Math.sin(angle)} stroke={color} strokeWidth="1.2" opacity="0.5" />
            <ellipse cx={bx} cy={by} rx={32} ry={15} fill={`${color}18`} stroke={color} strokeWidth="1.2" />
            <text x={bx} y={by} textAnchor="middle" dominantBaseline="middle" fill={color} fontSize="8" fontWeight="700">{(branch.label || '').slice(0, 10)}</text>
            {items.map((item, j) => {
              const spread = items.length === 1 ? 0 : (j - 0.5) * 0.5;
              const sa = angle + spread;
              const sx = bx + SR * Math.cos(sa), sy = by + SR * Math.sin(sa);
              return (
                <g key={j}>
                  <line x1={bx} y1={by} x2={sx} y2={sy} stroke={color} strokeWidth="0.8" opacity="0.3" strokeDasharray="3,2" />
                  <text x={sx} y={sy} textAnchor="middle" dominantBaseline="middle" fill="#94a3b8" fontSize="7">{(item || '').slice(0, 12)}</text>
                </g>
              );
            })}
          </g>
        );
      })}
    </svg>
  );
}

/* ── AI call via server route ── */
async function callAIServer(prompt, systemPrompt, provider = 'gemini') {
  const res = await fetch('/api/ai', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ prompt, systemPrompt, provider }),
  });
  const data = await res.json();
  if (data.error) throw new Error(data.error);
  return data.text || '';
}

const modeOptions = [
  { key: 'chat', icon: '💬', label: 'ถามคำถาม', color: '#8b5cf6' },
  { key: 'socratic', icon: '🧠', label: 'Socratic', color: '#06b6d4' },
  { key: 'cross', icon: '🌐', label: 'ข้ามคอร์ส', color: '#22c55e' },
  { key: 'flashcard', icon: '🃏', label: 'Flashcard', color: '#f59e0b' },
  { key: 'mindmap', icon: '🧩', label: 'Mind Map', color: '#ec4899' },
];

export default function FloatingAI({ course, chapters, chapterTitle, chapterContent, chapterNumber, allCourses }) {
  const [isOpen, setIsOpen] = useState(false);
  const [mode, setMode] = useState(null);
  const [provider, setProvider] = useState('gemini');
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [cards, setCards] = useState([]);
  const [cardIndex, setCardIndex] = useState(0);
  const [generating, setGenerating] = useState(false);
  const [mindMapData, setMindMapData] = useState(null);
  const [hasNewContext, setHasNewContext] = useState(true);
  const [mounted, setMounted] = useState(false);
  const [historyLoaded, setHistoryLoaded] = useState(false);
  const messagesEndRef = useRef(null);

  // localStorage key unique per course + chapter
  const storageKey = course?.id ? `ai_chat_${course.id}_ch${chapterNumber ?? 0}` : null;

  useEffect(() => { setMounted(true); }, []);

  // Load history from localStorage when component mounts or chapter changes
  useEffect(() => {
    if (!storageKey) return;
    try {
      const saved = localStorage.getItem(storageKey);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          setMessages(parsed);
          setHistoryLoaded(true);
        } else {
          setMessages([]);
          setHistoryLoaded(false);
        }
      } else {
        setMessages([]);
        setHistoryLoaded(false);
      }
    } catch { setMessages([]); }
  }, [storageKey]);

  // Save messages to localStorage whenever they change
  useEffect(() => {
    if (!storageKey || !mounted) return;
    try {
      if (messages.length > 0) {
        // Keep last 100 messages to avoid storage overflow
        const toSave = messages.slice(-100);
        localStorage.setItem(storageKey, JSON.stringify(toSave));
      }
    } catch { /* storage full — ignore */ }
  }, [messages, storageKey, mounted]);

  // Clear history for this chapter
  const clearHistory = () => {
    setMessages([]);
    setHistoryLoaded(false);
    if (storageKey) localStorage.removeItem(storageKey);
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // pulse when chapter changes
  useEffect(() => {
    setHasNewContext(true);
    const t = setTimeout(() => setHasNewContext(false), 4000);
    return () => clearTimeout(t);
  }, [chapterTitle]);

  const cleanContent = (html) => html ? html.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim().slice(0, 10000) : '';

  const buildSystemPrompt = (m) => {
    const content = cleanContent(chapterContent);
    const totalChapters = chapters ? chapters.length : '?';
    const chapterList = chapters ? chapters.map(c => `  บทที่ ${c.number}: ${c.title}`).join('\n') : '';
    const allCoursesCtx = m === 'cross' && allCourses
      ? '\n=== คอร์สทั้งหมด ===\n' + allCourses.map(c => `- ${c.title} (${c.level}): ${(c.desc || '').slice(0, 60)}`).join('\n')
      : '';
    const intro = m === 'socratic'
      ? 'คุณใช้วิธี Socratic — ถามคำถามนำแทนตอบตรงๆ ถ้าคิดไม่ออก 2 รอบค่อยให้ hint'
      : m === 'cross'
      ? 'คุณรู้จักทุกคอร์สในระบบ ตอบได้ข้ามคอร์ส'
      : 'คุณคือผู้ช่วยสอน ตอบเป็นภาษาไทย ชัดเจน เข้าใจง่าย อ้างอิงจากเนื้อหาในคอร์สเป็นหลัก';
    return [
      intro, '',
      course ? `=== คอร์ส: ${course.title} (${course.level}) ===` : '',
      course && course.tags ? `หัวข้อ: ${course.tags.join(', ')}` : '',
      allCoursesCtx,
      '',
      `=== สารบัญ (${totalChapters} บท) ===`, chapterList,
      '',
      `=== บทนี้: บทที่ ${chapterNumber}: ${chapterTitle} ===`,
      '=== เนื้อหา ===', content,
    ].filter(Boolean).join('\n');
  };

  const sendMessage = async () => {
    if (!input.trim() || loading) return;
    const q = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: q, ts: Date.now() }]);
    setLoading(true);
    try {
      const answer = await callAIServer(q, buildSystemPrompt(mode), provider);
      setMessages(prev => [...prev, { role: 'ai', text: answer, ts: Date.now() }]);
    } catch (e) {
      setMessages(prev => [...prev, { role: 'error', text: '❌ ' + e.message, ts: Date.now() }]);
    }
    setLoading(false);
  };

  const generateFlashcards = async () => {
    setGenerating(true);
    try {
      const raw = await callAIServer(
        'สร้าง Flashcard 5 ใบจากบทนี้ ตอบ JSON array เท่านั้น: [{"q":"...","a":"..."}]',
        buildSystemPrompt('chat'), provider
      );
      const m = raw.match(/\[[\s\S]*\]/);
      if (m) { setCards(JSON.parse(m[0])); setCardIndex(0); }
    } catch (e) { setCards([{ q: 'Error', a: e.message }]); }
    setGenerating(false);
  };

  const generateMindMap = async () => {
    setGenerating(true); setMindMapData(null);
    try {
      const raw = await callAIServer(
        'สร้าง Mind Map จากบทนี้ ตอบ JSON เท่านั้น: {"center":"...","branches":[{"label":"...","items":["...","..."]},...]} 4-5 branches',
        buildSystemPrompt('chat'), provider
      );
      const m = raw.match(/\{[\s\S]*\}/);
      if (m) setMindMapData(JSON.parse(m[0]));
    } catch (e) { setMindMapData({ center: 'Error', branches: [] }); }
    setGenerating(false);
  };

  const handleModeSelect = (key) => {
    setMode(key);
    if (key === 'flashcard') generateFlashcards();
    if (key === 'mindmap') generateMindMap();
  };

  const closePanel = () => { setIsOpen(false); };
  const backToMenu = () => { setMode(null); setMessages([]); setCards([]); setMindMapData(null); };
  const isChatMode = mode === 'chat' || mode === 'socratic' || mode === 'cross';
  const chatMeta = modeOptions.find(opt => opt.key === mode);

  if (!mounted) return null;

  return createPortal(
    <>
      <style>{`
        @keyframes floatPulse {
          0%, 100% { box-shadow: 0 4px 20px rgba(124,58,237,0.45), 0 0 0 0 rgba(124,58,237,0.3); }
          50% { box-shadow: 0 6px 28px rgba(124,58,237,0.6), 0 0 0 8px rgba(124,58,237,0); }
        }
        @keyframes slideUpPanel {
          from { opacity: 0; transform: translateY(12px) scale(0.97); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes newContextBadge {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.3); }
        }
        .floating-ai-btn:hover { transform: scale(1.08) !important; }
        .floating-ai-btn:active { transform: scale(0.96) !important; }
        .ai-mode-btn:hover { border-color: var(--hc) !important; background: color-mix(in srgb, var(--hc) 10%, transparent) !important; transform: translateY(-1px); }
      `}</style>

      {/* ── Floating Button ── */}
      <button
        className="floating-ai-btn"
        onClick={() => { setIsOpen(o => !o); setHasNewContext(false); }}
        title="AI Assistant"
        style={{
          position: 'fixed', bottom: 24, right: 24, zIndex: 9998,
          width: 56, height: 56, borderRadius: '50%',
          background: isOpen
            ? 'linear-gradient(135deg,#ef4444,#dc2626)'
            : 'linear-gradient(135deg,#7c3aed,#4f46e5)',
          border: 'none', cursor: 'pointer',
          boxShadow: isOpen
            ? '0 4px 20px rgba(239,68,68,0.5)'
            : '0 4px 24px rgba(124,58,237,0.55)',
          animation: !isOpen ? 'floatPulse 2.5s ease-in-out infinite' : 'none',
          transition: 'background 0.25s, box-shadow 0.25s, transform 0.15s',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          flexShrink: 0,
        }}
      >
        {isOpen ? (
          /* X close icon */
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round">
            <line x1="18" y1="6" x2="6" y2="18"/>
            <line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        ) : (
          /* Sparkle + chat AI icon */
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
            {/* Chat bubble */}
            <path d="M20 2H4C2.9 2 2 2.9 2 4v13c0 1.1.9 2 2 2h3l3 3 3-3h7c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"
              fill="rgba(255,255,255,0.2)" stroke="#fff" strokeWidth="1.5" strokeLinejoin="round"/>
            {/* Sparkle */}
            <path d="M12 7l1 2.5L15.5 10 13 11l-1 2.5L11 11 8.5 10 11 9z"
              fill="#fff" stroke="none"/>
            {/* Small star dots */}
            <circle cx="7.5" cy="7.5" r="1" fill="rgba(255,255,255,0.7)"/>
            <circle cx="16.5" cy="13.5" r="0.8" fill="rgba(255,255,255,0.6)"/>
          </svg>
        )}
        {/* New context badge */}
        {hasNewContext && !isOpen && (
          <div style={{
            position: 'absolute', top: -2, right: -2,
            width: 12, height: 12, borderRadius: '50%',
            background: '#22c55e', border: '2px solid var(--bg)',
            animation: 'newContextBadge 1s ease infinite',
          }} />
        )}
        {/* History saved badge */}
        {!isOpen && !hasNewContext && messages.length > 0 && (
          <div style={{
            position: 'absolute', top: -4, right: -4,
            minWidth: 18, height: 18, borderRadius: 9, paddingInline: 4,
            background: '#f59e0b', border: '2px solid var(--bg)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '0.55rem', fontWeight: 800, color: '#000',
          }}>{messages.length > 99 ? '99+' : messages.length}</div>
        )}
      </button>

      {/* ── Floating Panel ── */}
      {isOpen && (
        <div style={{
          position: 'fixed', bottom: 86, right: 20,
          width: 'min(380px, calc(100vw - 32px))',
          height: 'min(520px, calc(100vh - 120px))',
          background: 'var(--bg2)',
          border: '1px solid rgba(139,92,246,0.35)',
          borderRadius: 20,
          boxShadow: '0 12px 48px rgba(0,0,0,0.35), 0 0 0 1px rgba(139,92,246,0.1)',
          zIndex: 9997,
          display: 'flex', flexDirection: 'column',
          overflow: 'hidden',
          animation: 'slideUpPanel 0.22s cubic-bezier(.4,0,.2,1)',
        }}>

          {/* Header */}
          <div style={{
            display: 'flex', alignItems: 'center', gap: 10,
            padding: '12px 16px',
            background: 'linear-gradient(135deg,rgba(124,58,237,0.12),rgba(79,70,229,0.06))',
            borderBottom: '1px solid rgba(139,92,246,0.15)',
            flexShrink: 0,
          }}>
            {mode && (
              <button onClick={backToMenu} style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', fontSize: '0.75rem', padding: '2px 4px', borderRadius: 6 }}>← กลับ</button>
            )}
            <span style={{ fontSize: '0.82rem', fontWeight: 800 }}>
              {mode ? (chatMeta?.icon + ' ' + chatMeta?.label) : '🤖 AI Assistant'}
            </span>
            {/* Clear history button — only shown in chat modes */}
            {isChatMode && messages.length > 0 && (
              <button
                onClick={clearHistory}
                title="ล้างประวัติแชทบทนี้"
                style={{
                  marginLeft: 'auto', background: 'rgba(239,68,68,0.1)',
                  border: '1px solid rgba(239,68,68,0.25)', borderRadius: 8,
                  color: '#ef4444', fontSize: '0.65rem', fontWeight: 700,
                  padding: '3px 9px', cursor: 'pointer',
                }}
              >🗑 ล้าง</button>
            )}
            {/* Provider toggle */}
            {!mode && (
              <div style={{ marginLeft: 'auto', display: 'flex', gap: 3, background: 'var(--glass2)', borderRadius: 16, padding: '2px', border: '1px solid var(--border)' }}>
                {[{ key: 'gemini', label: '✦' }, { key: 'openai', label: '⬡' }].map(p => (
                  <button key={p.key} onClick={() => setProvider(p.key)} title={p.key === 'gemini' ? 'Gemini' : 'GPT-4o'} style={{
                    padding: '3px 9px', borderRadius: 12, fontSize: '0.68rem', fontWeight: 700,
                    background: provider === p.key ? 'linear-gradient(135deg,#7c3aed,#4f46e5)' : 'transparent',
                    color: provider === p.key ? '#fff' : 'var(--text-muted)',
                    border: 'none', cursor: 'pointer', transition: 'all 0.18s',
                  }}>{p.label} {p.key === 'gemini' ? 'Gemini' : 'GPT-4o'}</button>
                ))}
              </div>
            )}
            {mode && (
              <span style={{ marginLeft: 'auto', fontSize: '0.6rem', padding: '2px 8px', borderRadius: 8, background: 'var(--glass2)', border: '1px solid var(--border)', color: 'var(--text-muted)' }}>
                {provider === 'gemini' ? '✦ Gemini' : '⬡ GPT-4o'}
              </span>
            )}
          </div>

          {/* Chapter context badge */}
          {!mode && (
            <div style={{
              padding: '8px 16px', fontSize: '0.66rem', color: 'var(--text-muted)',
              borderBottom: '1px solid var(--border)',
              background: 'rgba(139,92,246,0.04)',
              overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
              flexShrink: 0,
            }}>
              📖 บทที่ {chapterNumber}: {chapterTitle}
            </div>
          )}

          {/* Body */}
          <div style={{ flex: 1, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>

            {/* Mode selector */}
            {!mode && (
              <div style={{ padding: '14px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, overflowY: 'auto', flex: 1 }}>
                {modeOptions.map(opt => (
                  <button key={opt.key}
                    onClick={() => handleModeSelect(opt.key)}
                    style={{
                      padding: '12px 10px', borderRadius: 12, textAlign: 'left', cursor: 'pointer',
                      background: 'var(--glass)', border: '1.5px solid var(--border)',
                      color: 'inherit', transition: 'all 0.18s', outline: 'none',
                    }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = opt.color; e.currentTarget.style.background = opt.color + '12'; }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.background = 'var(--glass)'; }}>
                    <div style={{ fontSize: '1.2rem', marginBottom: 4 }}>{opt.icon}</div>
                    <div style={{ fontSize: '0.76rem', fontWeight: 700 }}>{opt.label}</div>
                  </button>
                ))}
              </div>
            )}

            {/* Chat mode */}
            {isChatMode && (
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
                <div style={{ flex: 1, overflowY: 'auto', padding: '12px', display: 'flex', flexDirection: 'column', gap: 8 }}>
                  {/* History restored banner */}
                  {historyLoaded && messages.length > 0 && (
                    <div style={{
                      textAlign: 'center', fontSize: '0.64rem', color: '#a78bfa',
                      background: 'rgba(139,92,246,0.08)', border: '1px solid rgba(139,92,246,0.2)',
                      borderRadius: 10, padding: '5px 10px', marginBottom: 4,
                      display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 5,
                    }}>
                      <span>💾</span>
                      <span>โหลดประวัติแชทเก่า ({messages.length} ข้อความ) — <button onClick={clearHistory} style={{ background: 'none', border: 'none', color: '#ef4444', fontSize: '0.64rem', cursor: 'pointer', padding: 0, fontWeight: 700 }}>ล้าง</button></span>
                    </div>
                  )}
                  {messages.length === 0 && (
                    <div style={{ textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.78rem', marginTop: 30, lineHeight: 1.6 }}>
                      {mode === 'socratic' ? '🧠 ถามมาเลย จะถามกลับให้คิดก่อน' : mode === 'cross' ? '🌐 ถามได้ทุกเรื่องข้ามคอร์ส' : '💡 ถามอะไรก็ได้เกี่ยวกับบทนี้'}
                    </div>
                  )}
                  {messages.map((m, i) => (
                    <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: m.role === 'user' ? 'flex-end' : 'flex-start', gap: 2 }}>
                      <div style={{
                        alignSelf: m.role === 'user' ? 'flex-end' : 'flex-start',
                        maxWidth: '88%',
                        background: m.role === 'user' ? 'linear-gradient(135deg,#7c3aed,#4f46e5)' : m.role === 'error' ? 'rgba(239,68,68,0.12)' : 'var(--glass2)',
                        border: m.role !== 'user' ? '1px solid var(--border)' : 'none',
                        borderRadius: m.role === 'user' ? '16px 16px 4px 16px' : '16px 16px 16px 4px',
                        padding: '8px 12px', fontSize: '0.78rem', lineHeight: 1.6,
                        color: m.role === 'error' ? '#ef4444' : 'inherit', whiteSpace: 'pre-wrap',
                      }}>{m.text}</div>
                      {m.ts && (
                        <div style={{ fontSize: '0.58rem', color: 'var(--text-muted)', paddingInline: 4 }}>
                          {new Date(m.ts).toLocaleTimeString('th-TH', { hour: '2-digit', minute: '2-digit' })}
                        </div>
                      )}
                    </div>
                  ))}
                  {loading && (
                    <div style={{ alignSelf: 'flex-start', background: 'var(--glass2)', border: '1px solid var(--border)', borderRadius: '16px 16px 16px 4px', padding: '8px 14px', fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                      ⏳ กำลังคิด...
                    </div>
                  )}
                  <div ref={messagesEndRef} />
                </div>
                <div style={{ padding: '10px', borderTop: '1px solid var(--border)', display: 'flex', gap: 6, flexShrink: 0 }}>
                  <input value={input} onChange={e => setInput(e.target.value)}
                    onKeyDown={e => e.key === 'Enter' && !e.shiftKey && sendMessage()}
                    placeholder="พิมพ์คำถาม... (Enter)"
                    style={{ flex: 1, padding: '8px 12px', borderRadius: 10, background: 'var(--glass2)', border: '1.5px solid var(--border)', color: 'var(--text)', fontSize: '0.8rem', outline: 'none', fontFamily: 'inherit' }} />
                  <button onClick={sendMessage} disabled={loading || !input.trim()} style={{
                    padding: '8px 14px', borderRadius: 10, fontWeight: 700, fontSize: '0.78rem',
                    background: loading || !input.trim() ? 'var(--glass2)' : `linear-gradient(135deg,${chatMeta?.color},${chatMeta?.color}bb)`,
                    color: loading || !input.trim() ? 'var(--text-muted)' : '#fff',
                    border: 'none', cursor: loading ? 'wait' : 'pointer',
                  }}>→</button>
                </div>
              </div>
            )}

            {/* Flashcard mode */}
            {mode === 'flashcard' && (
              <div style={{ flex: 1, padding: '14px', overflowY: 'auto' }}>
                {generating && <div style={{ textAlign: 'center', padding: '40px 0', color: 'var(--text-muted)', fontSize: '0.82rem' }}>⏳ สร้าง Flashcard...</div>}
                {!generating && cards.length > 0 && (
                  <>
                    <FlashCard card={cards[cardIndex]} index={cardIndex} total={cards.length} />
                    <div style={{ display: 'flex', justifyContent: 'center', gap: 8, marginTop: 14 }}>
                      <button onClick={() => setCardIndex(i => Math.max(0, i - 1))} disabled={cardIndex === 0} style={{ padding: '6px 14px', borderRadius: 20, fontSize: '0.76rem', fontWeight: 700, background: 'var(--glass)', border: '1px solid var(--border)', color: cardIndex === 0 ? 'var(--text-muted)' : 'var(--text)', cursor: cardIndex === 0 ? 'default' : 'pointer' }}>←</button>
                      <span style={{ display: 'flex', alignItems: 'center', fontSize: '0.72rem', color: 'var(--text-muted)' }}>{cardIndex + 1}/{cards.length}</span>
                      <button onClick={() => setCardIndex(i => Math.min(cards.length - 1, i + 1))} disabled={cardIndex === cards.length - 1} style={{ padding: '6px 14px', borderRadius: 20, fontSize: '0.76rem', fontWeight: 700, background: cardIndex < cards.length - 1 ? 'linear-gradient(135deg,#f59e0b,#d97706)' : 'var(--glass)', border: 'none', color: cardIndex < cards.length - 1 ? '#fff' : 'var(--text-muted)', cursor: cardIndex < cards.length - 1 ? 'pointer' : 'default' }}>→</button>
                    </div>
                    <div style={{ textAlign: 'center', marginTop: 10 }}>
                      <button onClick={generateFlashcards} style={{ fontSize: '0.68rem', padding: '4px 12px', borderRadius: 16, background: 'var(--glass2)', border: '1px solid var(--border)', color: 'var(--text-muted)', cursor: 'pointer' }}>🔄 สร้างใหม่</button>
                    </div>
                  </>
                )}
              </div>
            )}

            {/* Mind Map mode */}
            {mode === 'mindmap' && (
              <div style={{ flex: 1, padding: '12px', overflowY: 'auto' }}>
                {generating && <div style={{ textAlign: 'center', padding: '40px 0', color: 'var(--text-muted)', fontSize: '0.82rem' }}>⏳ สร้าง Mind Map...</div>}
                {!generating && mindMapData && (
                  <>
                    <div style={{ background: 'rgba(0,0,0,0.15)', borderRadius: 12, padding: 8 }}>
                      <MindMapSVG data={mindMapData} />
                    </div>
                    <div style={{ marginTop: 10 }}>
                      {mindMapData.branches?.map((b, i) => (
                        <div key={i} style={{ fontSize: '0.72rem', marginBottom: 4 }}>
                          <span style={{ color: '#ec4899', fontWeight: 700 }}>• {b.label}</span>
                          {b.items && <span style={{ color: 'var(--text-muted)' }}> — {b.items.join(', ')}</span>}
                        </div>
                      ))}
                    </div>
                    <div style={{ textAlign: 'center', marginTop: 10 }}>
                      <button onClick={generateMindMap} style={{ fontSize: '0.68rem', padding: '4px 12px', borderRadius: 16, background: 'rgba(236,72,153,0.1)', border: '1px solid rgba(236,72,153,0.3)', color: '#ec4899', cursor: 'pointer' }}>🔄 สร้างใหม่</button>
                    </div>
                  </>
                )}
              </div>
            )}

          </div>
        </div>
      )}
    </>,
    document.body
  );
}
