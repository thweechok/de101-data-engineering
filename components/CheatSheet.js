'use client';
import { cheatsheets } from '@/data/cheatsheets';
import { useState } from 'react';

export default function CheatSheet({ chapterNumber }) {
  const data = cheatsheets[chapterNumber];
  const [isOpen, setIsOpen] = useState(false);

  if (!data) return null;

  return (
    <div className="cheatsheet">
      <button className="cheatsheet-toggle" onClick={() => setIsOpen(!isOpen)}>
        <span>📋 {data.title}</span>
        <span className={`cheatsheet-arrow ${isOpen ? 'open' : ''}`}>▼</span>
      </button>
      {isOpen && (
        <div className="cheatsheet-content">
          {data.items.map((item, i) => (
            <div className="cheatsheet-item" key={i}>
              <code className="cheatsheet-label">{item.label}</code>
              <span className="cheatsheet-desc">{item.desc}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
