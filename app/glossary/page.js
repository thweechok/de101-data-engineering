'use client';
import { glossary } from '@/data/glossary';
import { useState, useMemo } from 'react';

export default function GlossaryPage() {
  const [search, setSearch] = useState('');

  const filtered = useMemo(() => {
    if (!search.trim()) return glossary;
    const q = search.toLowerCase();
    return glossary.filter(g =>
      g.term.toLowerCase().includes(q) ||
      g.thai.includes(q) ||
      g.desc.toLowerCase().includes(q)
    );
  }, [search]);

  // Group by first letter
  const grouped = useMemo(() => {
    const groups = {};
    filtered.forEach(item => {
      const letter = item.term[0].toUpperCase();
      if (!groups[letter]) groups[letter] = [];
      groups[letter].push(item);
    });
    return Object.entries(groups).sort((a, b) => a[0].localeCompare(b[0]));
  }, [filtered]);

  return (
    <div className="content-wrapper">
      <div style={{ maxWidth: 700, margin: '0 auto' }}>
        <h1 style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: 8 }}>
          📖 Glossary — คำศัพท์เทคนิค
        </h1>
        <p style={{ color: 'var(--text-dim)', fontSize: '0.88rem', marginBottom: 24 }}>
          รวมคำศัพท์ Data Engineering ทั้งหมดจากคอร์ส DE101 — ค้นหาได้ทั้งไทยและอังกฤษ
        </p>

        <div className="glossary-search-wrap">
          <span className="glossary-search-icon">🔍</span>
          <input
            type="text"
            placeholder="ค้นหาคำศัพท์... เช่น Pipeline, ETL, SQL"
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="glossary-search"
          />
        </div>

        <p className="glossary-count">
          แสดง {filtered.length} จาก {glossary.length} คำ
        </p>

        {grouped.map(([letter, items]) => (
          <div key={letter}>
            <div className="glossary-letter">{letter}</div>
            <div className="glossary-grid">
              {items.map(item => (
                <div key={item.term} className="glossary-item" style={{ animationDelay: '0s' }}>
                  <div>
                    <span className="glossary-term">{item.term}</span>
                    {item.thai && <span className="glossary-thai"> ({item.thai})</span>}
                  </div>
                  <span className="glossary-desc">{item.desc}</span>
                  <span className="glossary-chapter-badge">บทที่ {item.chapter}</span>
                </div>
              ))}
            </div>
          </div>
        ))}

        {filtered.length === 0 && (
          <div style={{ textAlign: 'center', padding: 40, color: 'var(--text-muted)' }}>
            🔍 ไม่พบคำศัพท์ที่ค้นหา
          </div>
        )}
      </div>
    </div>
  );
}
