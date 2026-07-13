'use client';
import { useState, useEffect, useRef } from 'react';

/* ── FlashCard ── */
function FlashCard({ card, index, total }) {
  const [flipped, setFlipped] = useState(false);
  return (
    <div style={{ perspective: 1000, width: '100%', maxWidth: 520, margin: '0 auto' }}>
      <div onClick={() => setFlipped(f => !f)} style={{
        position: 'relative', width: '100%', minHeight: 200,
        transformStyle: 'preserve-3d',
        transform: flipped ? 'rotateY(180deg)' : 'rotateY(0)',
        transition: 'transform 0.55s cubic-bezier(.4,0,.2,1)', cursor: 'pointer',
      }}>
        <div style={{
          position: 'absolute', inset: 0, backfaceVisibility: 'hidden',
          background: 'linear-gradient(135deg,rgba(139,92,246,0.12),rgba(59,130,246,0.08))',
          border: '1.5px solid rgba(139,92,246,0.3)', borderRadius: 18,
          display: 'flex', flexDirection: 'column', alignItems: 'center',
          justifyContent: 'center', padding: '24px 28px', textAlign: 'center',
        }}>
          <div style={{ fontSize: '0.65rem', color: '#a78bfa', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 14 }}>❓ คำถาม {index + 1}/{total}</div>
          <div style={{ fontSize: '1rem', fontWeight: 700, lineHeight: 1.55, color: 'var(--text)' }}>{card.q}</div>
          <div style={{ marginTop: 16, fontSize: '0.68rem', color: 'var(--text-muted)' }}>👆 แตะเพื่อดูเฉลย</div>
        </div>
        <div style={{
          position: 'absolute', inset: 0, backfaceVisibility: 'hidden',
          transform: 'rotateY(180deg)',
          background: 'linear-gradient(135deg,rgba(34,197,94,0.1),rgba(16,185,129,0.06))',
          border: '1.5px solid rgba(34,197,94,0.3)', borderRadius: 18,
          display: 'flex', flexDirection: 'column', alignItems: 'center',
          justifyContent: 'center', padding: '24px 28px', textAlign: 'center',
        }}>
          <div style={{ fontSize: '0.65rem', color: '#22c55e', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 14 }}>✅ เฉลย</div>
          <div style={{ fontSize: '0.92rem', lineHeight: 1.65, color: 'var(--text)' }}>{card.a}</div>
          <div style={{ marginTop: 16, fontSize: '0.68rem', color: 'var(--text-muted)' }}>👆 แตะเพื่อดูคำถาม</div>
        </div>
      </div>
    </div>
  );
}

/* ── Mind Map SVG ── */
function MindMapSVG({ data }) {
  if (!data || !data.branches) return null;
  const W = 760, H = 480, cx = W / 2, cy = H / 2, R = 170, SR = 85;
  const n = data.branches.length;
  const colors = ['#8b5cf6','#22c55e','#3b82f6','#f59e0b','#ef4444','#ec4899','#06b6d4','#84cc16'];
  return (
    <svg width="100%" viewBox={`0 0 ${W} ${H}`} style={{ fontFamily: 'inherit', overflow: 'visible' }}>
      <circle cx={cx} cy={cy} r={64} fill="rgba(139,92,246,0.08)" />
      <circle cx={cx} cy={cy} r={54} fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" strokeWidth="2" />
      <text x={cx} y={cy - 6} textAnchor="middle" fill="#e2e8f0" fontSize="11" fontWeight="800">{(data.center || '').slice(0,14)}</text>
      {(data.center || '').length > 14 && (
        <text x={cx} y={cy + 10} textAnchor="middle" fill="#e2e8f0" fontSize="11" fontWeight="800">{(data.center || '').slice(14, 28)}</text>
      )}
      {data.branches.map((branch, i) => {
        const angle = (i / n) * 2 * Math.PI - Math.PI / 2;
        const bx = cx + R * Math.cos(angle);
        const by = cy + R * Math.sin(angle);
        const color = colors[i % colors.length];
        const items = (branch.items || []).slice(0, 3);
        return (
          <g key={i}>
            <line x1={cx + 54 * Math.cos(angle)} y1={cy + 54 * Math.sin(angle)} x2={bx - 44 * Math.cos(angle)} y2={by - 44 * Math.sin(angle)} stroke={color} strokeWidth="1.5" opacity="0.5" />
            <ellipse cx={bx} cy={by} rx={46} ry={20} fill={`${color}18`} stroke={color} strokeWidth="1.5" />
            <text x={bx} y={by} textAnchor="middle" dominantBaseline="middle" fill={color} fontSize="10" fontWeight="700">{(branch.label || '').slice(0, 12)}</text>
            {items.map((item, j) => {
              const spread = items.length === 1 ? 0 : (j - (items.length - 1) / 2) * 0.55;
              const sa = angle + spread;
              const sx = bx + SR * Math.cos(sa);
              const sy = by + SR * Math.sin(sa);
              return (
                <g key={j}>
                  <line x1={bx + 46 * Math.cos(sa)} y1={by + 20 * Math.sin(sa)} x2={sx} y2={sy} stroke={color} strokeWidth="1" opacity="0.3" strokeDasharray="4,3" />
                  <text x={sx} y={sy} textAnchor="middle" dominantBaseline="middle" fill="#94a3b8" fontSize="9">{(item || '').slice(0, 16)}</text>
                </g>
              );
            })}
          </g>
        );
      })}
    </svg>
  );
}

/* ── Shared AI call via server route ── */
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

export default function AIChat({ courseId, course, chapters, chapterTitle, chapterContent, chapterNumber, allCourses }) {
  const [mode, setMode] = useState(null);
  const [provider, setProvider] = useState('gemini');
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [cards, setCards] = useState([]);
  const [cardIndex, setCardIndex] = useState(0);
  const [generating, setGenerating] = useState(false);
  const [mindMapData, setMindMapData] = useState(null);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const cleanContent = (html) => html ? html.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim().slice(0, 10000) : '';

  const buildSystemPrompt = (m) => {
    const content = cleanContent(chapterContent);
    const totalChapters = chapters ? chapters.length : '?';
    const chapterList = chapters ? chapters.map(c => `  บทที่ ${c.number}: ${c.title}`).join('\n') : '';
    const courseCtx = [
      '=== คอร์สที่กำลังเรียน ===',
      course ? `ชื่อ: ${course.title}` : '',
      course ? `คำอธิบาย: ${course.desc}` : '',
      course ? `ระดับ: ${course.level}` : '',
      course && course.tags ? `หัวข้อที่ครอบคลุม: ${course.tags.join(', ')}` : '',
    ].filter(Boolean).join('\n');

    const allCoursesCtx = m === 'cross' && allCourses
      ? '\n=== คอร์สทั้งหมดในระบบ ===\n' + allCourses.map(c => `- ${c.title} (${c.level}): ${(c.desc || '').slice(0, 80)}...`).join('\n')
      : '';

    const intro = m === 'socratic'
      ? 'คุณคือผู้ช่วยสอนที่ใช้วิธี Socratic Method — แทนที่จะตอบตรงๆ ให้ถามคำถามนำให้ผู้เรียนคิดก่อน ถ้าคิดไม่ออก 2 รอบแล้วค่อยให้ hint ทีละขั้น'
      : m === 'cross'
      ? 'คุณคือผู้ช่วยสอนที่รู้จักทุกคอร์สในระบบ ตอบคำถามข้ามคอร์สได้ อ้างอิงความสัมพันธ์ระหว่างคอร์สเมื่อเกี่ยวข้อง'
      : 'คุณคือผู้ช่วยสอนส่วนตัว ตอบคำถามเป็นภาษาไทย ให้คำตอบชัดเจน เข้าใจง่าย และอ้างอิงจากเนื้อหาในคอร์สนี้เป็นหลัก';

    return [
      intro, '',
      courseCtx, allCoursesCtx,
      '',
      `=== สารบัญคอร์ส (${totalChapters} บท) ===`, chapterList,
      '',
      '=== บทที่กำลังเรียนอยู่ ===',
      `บทที่ ${chapterNumber || '?'}: ${chapterTitle}`,
      chapters ? `(บทที่ ${chapterNumber} จากทั้งหมด ${totalChapters} บท)` : '',
      '',
      '=== เนื้อหาบทนี้ทั้งหมด ===', content,
      '',
      'หมายเหตุ: ถ้าคำถามเกี่ยวข้องกับเนื้อหาในคอร์ส ให้อ้างอิงจากเนื้อหาข้างต้น ถ้านอกเหนือจากนั้น ให้ตอบพร้อมระบุว่าเป็นข้อมูลเพิ่มเติม',
    ].filter(s => s !== undefined).join('\n');
  };

  const sendMessage = async () => {
    if (!input.trim() || loading) return;
    const q = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: q }]);
    setLoading(true);
    try {
      const systemPrompt = buildSystemPrompt(mode);
      const answer = await callAIServer(q, systemPrompt, provider);
      setMessages(prev => [...prev, { role: 'ai', text: answer }]);
    } catch (e) {
      setMessages(prev => [...prev, { role: 'error', text: `❌ ${e.message}` }]);
    }
    setLoading(false);
  };

  const generateFlashcards = async () => {
    setGenerating(true);
    try {
      const systemPrompt = buildSystemPrompt('chat');
      const prompt = 'สร้าง Flashcard 6 ใบจากเนื้อหาบทนี้ ตอบเป็น JSON array เท่านั้น format: [{"q":"คำถาม","a":"คำตอบ"},...] ห้ามมีข้อความอื่นนอกจาก JSON';
      const raw = await callAIServer(prompt, systemPrompt, provider);
      const m = raw.match(/\[[\s\S]*\]/);
      if (m) { setCards(JSON.parse(m[0])); setCardIndex(0); }
    } catch (e) {
      setCards([{ q: 'เกิดข้อผิดพลาด', a: e.message }]);
    }
    setGenerating(false);
  };

  const generateMindMap = async () => {
    setGenerating(true);
    setMindMapData(null);
    try {
      const systemPrompt = buildSystemPrompt('chat');
      const prompt = 'สร้าง Mind Map จากบทนี้ ตอบเป็น JSON เท่านั้น format: {"center":"concept หลัก","branches":[{"label":"หัวข้อ","items":["รายละเอียด 1","รายละเอียด 2"]},...]} สร้าง 5-6 branches แต่ละ branch มี 2-3 items ห้ามมีข้อความอื่นนอกจาก JSON';
      const raw = await callAIServer(prompt, systemPrompt, provider);
      const m = raw.match(/\{[\s\S]*\}/);
      if (m) setMindMapData(JSON.parse(m[0]));
    } catch (e) {
      setMindMapData({ center: 'Error', branches: [{ label: e.message, items: [] }] });
    }
    setGenerating(false);
  };

  const modeOptions = [
    { key: 'chat', icon: '💬', label: 'ถามคำถาม', desc: 'อธิบายสิ่งที่ไม่เข้าใจ', color: '#8b5cf6' },
    { key: 'socratic', icon: '🧠', label: 'Socratic Mode', desc: 'AI ถามกลับให้คิดเอง', color: '#06b6d4' },
    { key: 'cross', icon: '🌐', label: 'ถามข้ามคอร์ส', desc: 'เชื่อมความรู้ทุกคอร์ส', color: '#22c55e' },
    { key: 'flashcard', icon: '🃏', label: 'Flashcard', desc: 'AI สร้าง Q&A จากบทนี้', color: '#f59e0b' },
    { key: 'mindmap', icon: '🧩', label: 'Mind Map', desc: 'สร้าง Mind Map visual', color: '#ec4899' },
  ];

  const isChatMode = mode === 'chat' || mode === 'socratic' || mode === 'cross';
  const chatMeta = modeOptions.find(opt => opt.key === mode);

  return (
    <div style={{ marginTop: 28 }}>

      {/* Mode Selector */}
      {mode === null && (
        <div style={{ background: 'linear-gradient(135deg,rgba(139,92,246,0.08),rgba(59,130,246,0.05))', border: '1px solid rgba(139,92,246,0.2)', borderRadius: 18, padding: '20px 24px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
            <div style={{ width: 3, height: 18, borderRadius: 2, background: 'linear-gradient(to bottom,#8b5cf6,#3b82f6)' }} />
            <span style={{ fontSize: '0.88rem', fontWeight: 800 }}>🤖 AI Assistant</span>
            {/* Provider toggle */}
            <div style={{ marginLeft: 'auto', display: 'flex', gap: 4, background: 'var(--glass2)', borderRadius: 20, padding: '3px', border: '1px solid var(--border)' }}>
              {[{ key: 'gemini', label: '✦ Gemini' }, { key: 'openai', label: '⬡ GPT-4o' }].map(p => (
                <button key={p.key} onClick={() => setProvider(p.key)} style={{
                  padding: '3px 10px', borderRadius: 16, fontSize: '0.65rem', fontWeight: 700,
                  background: provider === p.key ? 'linear-gradient(135deg,#7c3aed,#4f46e5)' : 'transparent',
                  color: provider === p.key ? '#fff' : 'var(--text-muted)',
                  border: 'none', cursor: 'pointer', transition: 'all 0.2s',
                }}>{p.label}</button>
              ))}
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(140px,1fr))', gap: 8 }}>
            {modeOptions.map(opt => (
              <button key={opt.key}
                onClick={() => {
                  setMode(opt.key);
                  if (opt.key === 'flashcard') generateFlashcards();
                  if (opt.key === 'mindmap') generateMindMap();
                }}
                style={{ padding: '12px 14px', borderRadius: 14, textAlign: 'left', cursor: 'pointer', background: 'var(--glass)', border: '1.5px solid var(--border)', color: 'inherit', transition: 'all 0.22s' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = opt.color; e.currentTarget.style.background = `${opt.color}10`; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.background = 'var(--glass)'; }}>
                <div style={{ fontSize: '1.3rem', marginBottom: 5 }}>{opt.icon}</div>
                <div style={{ fontSize: '0.78rem', fontWeight: 700 }}>{opt.label}</div>
                <div style={{ fontSize: '0.64rem', color: 'var(--text-muted)', marginTop: 2 }}>{opt.desc}</div>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Chat / Socratic / Cross panel */}
      {isChatMode && (
        <div style={{ background: 'var(--glass)', border: '1px solid var(--border)', borderRadius: 18, overflow: 'hidden' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '14px 18px', borderBottom: '1px solid var(--border)', background: `linear-gradient(135deg,${chatMeta?.color}10,transparent)` }}>
            <span style={{ fontSize: '0.88rem', fontWeight: 800 }}>{chatMeta?.icon} {chatMeta?.label}</span>
            <span style={{ fontSize: '0.62rem', padding: '2px 8px', borderRadius: 8, background: 'var(--glass2)', border: '1px solid var(--border)', color: 'var(--text-muted)' }}>{provider === 'gemini' ? '✦ Gemini' : '⬡ GPT-4o'}</span>
            {mode === 'socratic' && <span style={{ fontSize: '0.62rem', padding: '2px 8px', borderRadius: 8, background: 'rgba(6,182,212,0.15)', border: '1px solid rgba(6,182,212,0.3)', color: '#06b6d4' }}>Socratic 🧠</span>}
            {mode === 'cross' && <span style={{ fontSize: '0.62rem', padding: '2px 8px', borderRadius: 8, background: 'rgba(34,197,94,0.15)', border: '1px solid rgba(34,197,94,0.3)', color: '#22c55e' }}>ทุกคอร์ส 🌐</span>}
            <button onClick={() => { setMode(null); setMessages([]); }} style={{ marginLeft: 'auto', background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', fontSize: '0.8rem' }}>✕ ปิด</button>
          </div>
          <div style={{ height: 280, overflowY: 'auto', padding: '16px', display: 'flex', flexDirection: 'column', gap: 10 }}>
            {messages.length === 0 && (
              <div style={{ textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.82rem', marginTop: 40 }}>
                {mode === 'socratic' ? '🧠 ถามมาเลย AI จะถามกลับให้คิดเอง' : mode === 'cross' ? '🌐 ถามได้ทุกเรื่อง เชื่อมข้ามคอร์สได้' : `💡 ถามอะไรก็ได้เกี่ยวกับ "${chapterTitle}"`}
              </div>
            )}
            {messages.map((m, i) => (
              <div key={i} style={{
                alignSelf: m.role === 'user' ? 'flex-end' : 'flex-start', maxWidth: '85%',
                background: m.role === 'user' ? 'linear-gradient(135deg,#7c3aed,#4f46e5)' : m.role === 'error' ? 'rgba(239,68,68,0.15)' : 'var(--glass2)',
                border: m.role !== 'user' ? '1px solid var(--border)' : 'none',
                borderRadius: m.role === 'user' ? '18px 18px 4px 18px' : '18px 18px 18px 4px',
                padding: '10px 14px', fontSize: '0.82rem', lineHeight: 1.6,
                color: m.role === 'error' ? '#ef4444' : 'inherit', whiteSpace: 'pre-wrap',
              }}>{m.text}</div>
            ))}
            {loading && <div style={{ alignSelf: 'flex-start', background: 'var(--glass2)', border: '1px solid var(--border)', borderRadius: '18px 18px 18px 4px', padding: '10px 16px', fontSize: '0.82rem', color: 'var(--text-muted)' }}>⏳ กำลังคิด...</div>}
            <div ref={messagesEndRef} />
          </div>
          <div style={{ padding: '12px', borderTop: '1px solid var(--border)', display: 'flex', gap: 8 }}>
            <input value={input} onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && !e.shiftKey && sendMessage()}
              placeholder="พิมพ์คำถาม... (Enter ส่ง)"
              style={{ flex: 1, padding: '10px 14px', borderRadius: 12, background: 'var(--glass2)', border: '1.5px solid var(--border)', color: 'var(--text)', fontSize: '0.84rem', outline: 'none', fontFamily: 'inherit' }} />
            <button onClick={sendMessage} disabled={loading || !input.trim()} style={{
              padding: '10px 18px', borderRadius: 12, fontWeight: 700, fontSize: '0.84rem',
              background: loading || !input.trim() ? 'var(--glass2)' : `linear-gradient(135deg,${chatMeta?.color},${chatMeta?.color}cc)`,
              color: loading || !input.trim() ? 'var(--text-muted)' : '#fff',
              border: 'none', cursor: loading ? 'wait' : 'pointer', transition: 'all 0.2s',
            }}>ส่ง →</button>
          </div>
        </div>
      )}

      {/* Flashcard panel */}
      {mode === 'flashcard' && (
        <div style={{ background: 'var(--glass)', border: '1px solid var(--border)', borderRadius: 18, overflow: 'hidden' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '14px 18px', borderBottom: '1px solid var(--border)', background: 'linear-gradient(135deg,rgba(245,158,11,0.08),transparent)' }}>
            <span style={{ fontSize: '0.88rem', fontWeight: 800 }}>🃏 Flashcard Mode</span>
            <button onClick={() => { setMode(null); setCards([]); }} style={{ marginLeft: 'auto', background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', fontSize: '0.8rem' }}>✕ ปิด</button>
          </div>
          <div style={{ padding: '24px' }}>
            {generating && <div style={{ textAlign: 'center', padding: '40px 0', color: 'var(--text-muted)', fontSize: '0.88rem' }}>⏳ AI กำลังสร้าง Flashcard...</div>}
            {!generating && cards.length > 0 && (
              <>
                <FlashCard card={cards[cardIndex]} index={cardIndex} total={cards.length} />
                <div style={{ display: 'flex', justifyContent: 'center', gap: 12, marginTop: 20 }}>
                  <button onClick={() => setCardIndex(i => Math.max(0, i - 1))} disabled={cardIndex === 0} style={{ padding: '8px 20px', borderRadius: 24, fontWeight: 700, fontSize: '0.82rem', background: cardIndex === 0 ? 'var(--glass2)' : 'var(--glass)', border: '1px solid var(--border)', color: cardIndex === 0 ? 'var(--text-muted)' : 'var(--text)', cursor: cardIndex === 0 ? 'not-allowed' : 'pointer' }}>← ก่อนหน้า</button>
                  <span style={{ display: 'flex', alignItems: 'center', fontSize: '0.75rem', color: 'var(--text-muted)' }}>{cardIndex + 1} / {cards.length}</span>
                  <button onClick={() => setCardIndex(i => Math.min(cards.length - 1, i + 1))} disabled={cardIndex === cards.length - 1} style={{ padding: '8px 20px', borderRadius: 24, fontWeight: 700, fontSize: '0.82rem', background: cardIndex === cards.length - 1 ? 'var(--glass2)' : 'linear-gradient(135deg,#f59e0b,#d97706)', border: 'none', color: cardIndex === cards.length - 1 ? 'var(--text-muted)' : '#fff', cursor: cardIndex === cards.length - 1 ? 'not-allowed' : 'pointer' }}>ถัดไป →</button>
                </div>
                <div style={{ textAlign: 'center', marginTop: 14 }}>
                  <button onClick={generateFlashcards} style={{ fontSize: '0.72rem', padding: '5px 14px', borderRadius: 20, background: 'var(--glass2)', border: '1px solid var(--border)', color: 'var(--text-muted)', cursor: 'pointer' }}>🔄 สร้างใหม่</button>
                </div>
              </>
            )}
          </div>
        </div>
      )}

      {/* Mind Map panel */}
      {mode === 'mindmap' && (
        <div style={{ background: 'var(--glass)', border: '1px solid var(--border)', borderRadius: 18, overflow: 'hidden' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '14px 18px', borderBottom: '1px solid var(--border)', background: 'linear-gradient(135deg,rgba(236,72,153,0.08),transparent)' }}>
            <span style={{ fontSize: '0.88rem', fontWeight: 800 }}>🧩 Mind Map</span>
            <button onClick={() => { setMode(null); setMindMapData(null); }} style={{ marginLeft: 'auto', background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', fontSize: '0.8rem' }}>✕ ปิด</button>
          </div>
          <div style={{ padding: '20px' }}>
            {generating && <div style={{ textAlign: 'center', padding: '40px 0', color: 'var(--text-muted)', fontSize: '0.88rem' }}>⏳ AI กำลังสร้าง Mind Map...</div>}
            {!generating && mindMapData && (
              <>
                <div style={{ overflowX: 'auto', background: 'rgba(0,0,0,0.2)', borderRadius: 14, padding: 12 }}>
                  <MindMapSVG data={mindMapData} />
                </div>
                <div style={{ marginTop: 16, display: 'flex', gap: 8, justifyContent: 'center' }}>
                  <button onClick={generateMindMap} style={{ fontSize: '0.75rem', padding: '6px 16px', borderRadius: 20, background: 'rgba(236,72,153,0.1)', border: '1px solid rgba(236,72,153,0.3)', color: '#ec4899', cursor: 'pointer', fontWeight: 600 }}>🔄 สร้างใหม่</button>
                </div>
                <div style={{ marginTop: 16 }}>
                  <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', marginBottom: 8, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>📋 สรุปหัวข้อ</div>
                  {mindMapData.branches?.map((b, i) => (
                    <div key={i} style={{ display: 'flex', gap: 8, alignItems: 'flex-start', marginBottom: 6, fontSize: '0.78rem' }}>
                      <span style={{ color: '#ec4899', fontWeight: 700, flexShrink: 0 }}>• {b.label}</span>
                      {b.items && <span style={{ color: 'var(--text-muted)' }}>— {b.items.join(', ')}</span>}
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
