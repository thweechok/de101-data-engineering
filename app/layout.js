'use client';
import { useState } from 'react';
import Sidebar from '@/components/Sidebar';
import './globals.css';

export default function RootLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <html lang="th">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="DE101 — คอร์สเรียน Data Engineering ภาษาไทย เริ่มจากศูนย์ เนื้อหาเข้มข้น พร้อมรูปประกอบและทริค" />
        <title>DE101 — เริ่มต้น Data Engineering จากศูนย์</title>
      </head>
      <body>
        <div className="topbar">
          <button className="menu-btn" onClick={() => setSidebarOpen(!sidebarOpen)}>
            ☰
          </button>
          <span className="topbar-title">🎓 DE101</span>
        </div>

        <div className="app-layout">
          <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
          <main className="main-content">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
