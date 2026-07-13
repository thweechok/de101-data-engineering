'use client';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Sidebar from '@/components/Sidebar';
import PageTransition from '@/components/PageTransition';
import ReadingProgress from '@/components/ReadingProgress';
import BackToTop from '@/components/BackToTop';
import MobileNav from '@/components/MobileNav';
import './globals.css';

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [theme, setTheme] = useState('dark');
  const [fontSize, setFontSize] = useState(16);
  const [showShortcuts, setShowShortcuts] = useState(false);
  const [showEmailPopup, setShowEmailPopup] = useState(false);
  const [emailSaved, setEmailSaved] = useState(false);

  // Sidebar only shows on chapter/lesson pages, not on homepage or courses listing
  const isHomePage = pathname === '/';
  const isCoursesListing = pathname === '/courses';
  const showSidebar = !isHomePage && !isCoursesListing;

  useEffect(() => {
    try {
      const saved = localStorage.getItem('de101-theme') || 'dark';
      setTheme(saved);
      document.documentElement.setAttribute('data-theme', saved);
      const savedSize = parseInt(localStorage.getItem('de101-fontsize') || '16');
      setFontSize(savedSize);
      document.documentElement.style.setProperty('--user-font-size', `${savedSize}px`);
      if (localStorage.getItem('de101-email')) setEmailSaved(true);
    } catch {}
    // Register Service Worker (PWA)
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js').catch(() => {});
    }
  }, []);

  // Show email popup after 60s if not already captured
  useEffect(() => {
    if (emailSaved) return;
    const timer = setTimeout(() => {
      try {
        if (!localStorage.getItem('de101-email') && !localStorage.getItem('de101-email-dismissed')) {
          setShowEmailPopup(true);
        }
      } catch {}
    }, 60000);
    return () => clearTimeout(timer);
  }, [emailSaved]);

  // Keyboard shortcut: ? for shortcuts modal
  useEffect(() => {
    const handleKey = (e) => {
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
      if (e.key === '?' || (e.shiftKey && e.key === '/')) {
        e.preventDefault();
        setShowShortcuts(prev => !prev);
      }
      if (e.key === 'Escape') {
        setShowShortcuts(false);
        setShowEmailPopup(false);
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, []);

  const toggleTheme = (e) => {
    const next = theme === 'dark' ? 'light' : 'dark';
    const circle = document.createElement('div');
    circle.className = 'theme-transition-overlay';
    const rect = e?.currentTarget?.getBoundingClientRect();
    const x = rect ? rect.left + rect.width / 2 : window.innerWidth / 2;
    const y = rect ? rect.top + rect.height / 2 : 0;
    const size = Math.max(window.innerWidth, window.innerHeight) * 2;
    Object.assign(circle.style, {
      left: `${x - size / 2}px`,
      top: `${y - size / 2}px`,
      width: `${size}px`,
      height: `${size}px`,
      background: next === 'dark' ? '#0a0f1c' : '#f8fafc',
    });
    document.body.appendChild(circle);
    setTimeout(() => circle.remove(), 600);
    setTheme(next);
    try {
      localStorage.setItem('de101-theme', next);
    } catch {}
    document.documentElement.setAttribute('data-theme', next);
  };

  const changeFontSize = (delta) => {
    const newSize = Math.min(22, Math.max(12, fontSize + delta));
    setFontSize(newSize);
    document.documentElement.style.setProperty('--user-font-size', `${newSize}px`);
    try { localStorage.setItem('de101-fontsize', String(newSize)); } catch {}
  };

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    if (email) {
      try {
        localStorage.setItem('de101-email', email);
      } catch {}
      setEmailSaved(true);
      setShowEmailPopup(false);
    }
  };

  const dismissEmail = () => {
    setShowEmailPopup(false);
    try { localStorage.setItem('de101-email-dismissed', 'true'); } catch {}
  };

  return (
    <html lang="th" data-theme="dark">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>DE101 — Data Engineering เริ่มต้นจากศูนย์ | คอร์สภาษาไทย</title>
        <meta name="description" content="คอร์ส Data Engineering ภาษาไทยฟรี 16 บท ตั้งแต่พื้นฐาน Python, SQL จนถึง Airflow, dbt, BigQuery, Docker, Spark พร้อมโปรเจกต์จริง" />
        <meta property="og:title" content="DE101 — Data Engineering เริ่มต้นจากศูนย์" />
        <meta property="og:description" content="คอร์สฟรี 16 บท สำหรับคนไทยที่อยากเป็น Data Engineer" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://de-course-seven.vercel.app" />
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🎓</text></svg>" />
        {/* PWA */}
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icons/icon-192.png" />
        <meta name="theme-color" content="#8b5cf6" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        {/* Syntax Highlighting */}
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/themes/prism-tomorrow.min.css" />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/prism.min.js" defer></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/components/prism-python.min.js" defer></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/components/prism-sql.min.js" defer></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/components/prism-bash.min.js" defer></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/components/prism-yaml.min.js" defer></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/components/prism-docker.min.js" defer></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/components/prism-json.min.js" defer></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/components/prism-java.min.js" defer></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/components/prism-hcl.min.js" defer></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/components/prism-protobuf.min.js" defer></script>
      </head>
      <body>
        {showSidebar && <ReadingProgress />}
        {showSidebar && (
          <div className="topbar">
            <button className="menu-btn" onClick={() => setSidebarOpen(!sidebarOpen)}>
              ☰
            </button>
            <span className="topbar-title">🎓 DE101</span>
            <div className="font-controls">
              <button className="font-btn" onClick={() => changeFontSize(-1)} title="ลดขนาดตัวอักษร">A-</button>
              <span className="font-size-label">{fontSize}</span>
              <button className="font-btn" onClick={() => changeFontSize(1)} title="เพิ่มขนาดตัวอักษร">A+</button>
            </div>
            <a href="/dashboard" title="ดูความก้าวหน้า" style={{
              display: 'inline-flex', alignItems: 'center', gap: 4, padding: '4px 12px',
              borderRadius: 20, fontSize: '0.75rem', fontWeight: 600, textDecoration: 'none',
              background: 'linear-gradient(135deg,rgba(139,92,246,.2),rgba(59,130,246,.2))',
              border: '1px solid rgba(139,92,246,.4)', color: '#a78bfa',
              transition: 'all 0.2s',
            }}>📊 Dashboard</a>
            <button className="theme-toggle" onClick={toggleTheme} title={theme === 'dark' ? 'Light Mode' : 'Dark Mode'}>
              {theme === 'dark' ? '☀️' : '🌙'}
            </button>
            <button className="shortcut-btn" onClick={() => setShowShortcuts(true)} title="Keyboard Shortcuts (?)">
              ⌨️
            </button>
          </div>
        )}

        <div className={showSidebar ? 'app-layout' : 'app-layout app-layout--full'}>
          {showSidebar && <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />}
          <main className={showSidebar ? 'main-content' : 'main-content main-content--full'}>
            <PageTransition>{children}</PageTransition>
          </main>
        </div>
        <BackToTop />
        {showSidebar && <MobileNav />}

        {/* Shortcuts Modal */}
        {showShortcuts && (
          <div className="modal-overlay" onClick={() => setShowShortcuts(false)}>
            <div className="modal-content shortcuts-modal" onClick={e => e.stopPropagation()}>
              <button className="modal-close" onClick={() => setShowShortcuts(false)}>✕</button>
              <h3>⌨️ Keyboard Shortcuts</h3>
              <div className="shortcuts-list">
                <div style={{ fontSize: '0.65rem', color: 'var(--text-muted)', marginBottom: 8, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em' }}>Navigation</div>
                <div className="shortcut-row"><kbd>←</kbd> <span>บทก่อนหน้า</span></div>
                <div className="shortcut-row"><kbd>→</kbd> <span>บทถัดไป</span></div>
                <div className="shortcut-row"><kbd>Home</kbd> <span>กลับด้านบนสุด</span></div>
                <div style={{ fontSize: '0.65rem', color: 'var(--text-muted)', margin: '12px 0 8px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em' }}>Actions</div>
                <div className="shortcut-row"><kbd>P</kbd> <span>พิมพ์/Export PDF</span></div>
                <div className="shortcut-row"><kbd>A+</kbd> <span>เพิ่มขนาดตัวอักษร</span></div>
                <div className="shortcut-row"><kbd>A-</kbd> <span>ลดขนาดตัวอักษร</span></div>
                <div style={{ fontSize: '0.65rem', color: 'var(--text-muted)', margin: '12px 0 8px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em' }}>UI</div>
                <div className="shortcut-row"><kbd>?</kbd> <span>เปิด/ปิด Shortcuts</span></div>
                <div className="shortcut-row"><kbd>Esc</kbd> <span>ปิด Modal</span></div>
              </div>
            </div>
          </div>
        )}

        {/* Email Capture Popup */}
        {showEmailPopup && (
          <div className="modal-overlay" onClick={dismissEmail}>
            <div className="modal-content email-modal" onClick={e => e.stopPropagation()}>
              <button className="modal-close" onClick={dismissEmail}>✕</button>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '2.5rem', marginBottom: 8 }}>📧</div>
                <h3>อย่าพลาดอัปเดตใหม่!</h3>
                <p style={{ fontSize: '0.82rem', color: 'var(--text-dim)', marginBottom: 16 }}>
                  กรอกอีเมลเพื่อรับแจ้งเตือนเนื้อหาใหม่ เทคนิคสัมภาษณ์ และโปรโมชั่นพิเศษ
                </p>
                <form onSubmit={handleEmailSubmit} className="email-form">
                  <input type="email" name="email" placeholder="your@email.com" required className="email-input" />
                  <button type="submit" className="email-submit">🚀 สมัครรับข่าวสาร</button>
                </form>
                <button onClick={dismissEmail} className="email-skip">ไว้ทีหลัง</button>
              </div>
            </div>
          </div>
        )}
      </body>
    </html>
  );
}
