'use client';
import { useState, useRef, useEffect } from 'react';

export default function SearchBar({ onSearch, totalCount }) {
  const [query, setQuery] = useState('');
  const [focused, setFocused] = useState(false);
  const inputRef = useRef(null);

  const handleChange = (e) => {
    const val = e.target.value;
    setQuery(val);
    onSearch(val);
  };

  const handleClear = () => {
    setQuery('');
    onSearch('');
    inputRef.current?.focus();
  };

  // Keyboard shortcut: Ctrl+K or / to focus search
  useEffect(() => {
    const handler = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        inputRef.current?.focus();
      }
      if (e.key === '/' && document.activeElement?.tagName !== 'INPUT' && document.activeElement?.tagName !== 'TEXTAREA') {
        e.preventDefault();
        inputRef.current?.focus();
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);

  return (
    <div style={{ maxWidth: 560, margin: '0 auto 24px', position: 'relative' }}>
      {/* Search input container */}
      <div style={{
        position: 'relative',
        borderRadius: 50,
        background: 'var(--glass, rgba(255,255,255,0.05))',
        backdropFilter: 'blur(12px)',
        border: focused
          ? '1.5px solid #8b5cf6'
          : '1.5px solid rgba(255,255,255,0.12)',
        boxShadow: focused
          ? '0 0 0 3px rgba(139,92,246,0.18), 0 8px 32px rgba(139,92,246,0.15)'
          : '0 2px 12px rgba(0,0,0,0.25)',
        transition: 'all 0.25s cubic-bezier(0.4,0,0.2,1)',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
      }}>
        {/* Search icon */}
        <span style={{
          position: 'absolute', left: 18, top: '50%', transform: 'translateY(-50%)',
          color: focused ? '#8b5cf6' : 'var(--text-muted, #6b7280)',
          transition: 'color 0.2s', fontSize: '1.05rem', pointerEvents: 'none',
          display: 'flex', alignItems: 'center',
        }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8"/>
            <line x1="21" y1="21" x2="16.65" y2="16.65"/>
          </svg>
        </span>

        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={handleChange}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          placeholder="ค้นหาคอร์ส... เช่น Python, ROAS, LINE"
          id="course-search-input"
          autoComplete="off"
          style={{
            width: '100%',
            background: 'transparent',
            border: 'none',
            outline: 'none',
            padding: '14px 48px 14px 50px',
            fontSize: '0.92rem',
            color: 'var(--text, #f1f5f9)',
            fontFamily: 'inherit',
            letterSpacing: '0.01em',
          }}
        />

        {/* Clear button */}
        {query && (
          <button
            onClick={handleClear}
            aria-label="ล้างการค้นหา"
            style={{
              position: 'absolute', right: 14, top: '50%', transform: 'translateY(-50%)',
              background: 'rgba(139,92,246,0.18)', border: '1px solid rgba(139,92,246,0.3)',
              color: '#a78bfa', borderRadius: '50%', width: 26, height: 26,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              cursor: 'pointer', fontSize: '0.85rem', fontWeight: 700,
              transition: 'all 0.15s', lineHeight: 1,
            }}
          >
            ×
          </button>
        )}

        {/* Keyboard hint (shows when empty & not focused) */}
        {!query && !focused && (
          <span style={{
            position: 'absolute', right: 16, top: '50%', transform: 'translateY(-50%)',
            display: 'flex', alignItems: 'center', gap: 3,
            pointerEvents: 'none',
          }}>
            <kbd style={{
              background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.12)',
              borderRadius: 5, padding: '1px 6px', fontSize: '0.65rem',
              color: 'var(--text-muted, #6b7280)', fontFamily: 'inherit', letterSpacing: '0.02em',
            }}>/</kbd>
          </span>
        )}
      </div>

      {/* Result count */}
      {query && (
        <div style={{
          textAlign: 'center', marginTop: 10,
          fontSize: '0.8rem', color: 'var(--text-dim, #9ca3af)',
          animation: 'fadeInUp 0.2s ease',
        }}>
          <span style={{ color: '#a78bfa', fontWeight: 700 }}>พบ {totalCount} คอร์ส</span>
          {' '}สำหรับ &ldquo;<span style={{ color: 'var(--text, #f1f5f9)' }}>{query}</span>&rdquo;
        </div>
      )}
    </div>
  );
}
