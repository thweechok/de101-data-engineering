'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { chapters } from '@/data/chapters-index';
import { useState, useEffect } from 'react';

export default function Sidebar({ isOpen, onClose }) {
  const pathname = usePathname();
  const [completed, setCompleted] = useState([]);

  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem('de101-progress') || '[]');
      setCompleted(saved);
    } catch {}
  }, []);

  const phases = [
    { num: 1, title: 'พื้นฐาน', color: '#10b981' },
    { num: 2, title: 'Core DE', color: '#3b82f6' },
    { num: 3, title: 'Modern Stack', color: '#8b5cf6' },
    { num: 4, title: 'Production & Career', color: '#f59e0b' },
  ];

  const progress = chapters.length > 0 ? Math.round((completed.length / chapters.length) * 100) : 0;

  return (
    <>
      <div className={`sidebar-overlay ${isOpen ? 'open' : ''}`} onClick={onClose} />
      <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <Link href="/" className="sidebar-logo" onClick={onClose}>
            <span>🎓</span> DE101
          </Link>
          <div className="sidebar-progress">
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: `${progress}%` }} />
            </div>
            <div className="progress-text">{progress}% สำเร็จ ({completed.length}/{chapters.length} บท)</div>
          </div>
        </div>

        <nav className="sidebar-nav">
          {phases.map(phase => (
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
                  <Link
                    key={ch.slug}
                    href={href}
                    className={`chapter-link ${isActive ? 'active' : ''} ${isDone ? 'completed' : ''}`}
                    onClick={onClose}
                  >
                    <span className="ch-emoji">{isDone ? '✅' : ch.emoji}</span>
                    <span className="ch-num">{ch.number}</span>
                    {ch.shortTitle}
                  </Link>
                );
              })}
            </div>
          ))}
        </nav>
      </aside>
    </>
  );
}
