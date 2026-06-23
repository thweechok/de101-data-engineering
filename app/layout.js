'use client';
import { useState, useEffect } from 'react';
import Sidebar from '@/components/Sidebar';
import PageTransition from '@/components/PageTransition';
import ReadingProgress from '@/components/ReadingProgress';
import './globals.css';

export default function RootLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const saved = localStorage.getItem('de101-theme') || 'dark';
    setTheme(saved);
    document.documentElement.setAttribute('data-theme', saved);
  }, []);

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    localStorage.setItem('de101-theme', next);
    document.documentElement.setAttribute('data-theme', next);
  };

  return (
    <html lang="th" data-theme="dark">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>DE101 — เริ่มต้น Data Engineering จากศูนย์ | คอร์สฟรี ภาษาไทย</title>
        <meta name="description" content="คอร์สเรียน Data Engineering ภาษาไทย ฟรี 16 บท เริ่มจากศูนย์ ครอบคลุม Python, SQL, Airflow, dbt, BigQuery, Docker, Spark พร้อมรูปประกอบและแบบฝึกหัด" />
        <meta name="keywords" content="Data Engineering, DE101, คอร์สฟรี, Python, SQL, Airflow, dbt, BigQuery, Docker, Spark, Data Pipeline, เรียน Data Engineer" />
        <meta name="author" content="DE101 Thailand" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://de-course-seven.vercel.app" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://de-course-seven.vercel.app" />
        <meta property="og:title" content="DE101 — เริ่มต้น Data Engineering จากศูนย์ 🚀" />
        <meta property="og:description" content="คอร์สฟรี 16 บท สอน Data Engineering ภาษาไทย ตั้งแต่ Python, SQL จนถึง Airflow, dbt, BigQuery — พร้อมรูปประกอบ แบบฝึกหัด และคำถามสัมภาษณ์งาน" />
        <meta property="og:image" content="https://de-course-seven.vercel.app/images/de_roadmap.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:locale" content="th_TH" />
        <meta property="og:site_name" content="DE101 Thailand" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="DE101 — เริ่มต้น Data Engineering จากศูนย์ 🚀" />
        <meta name="twitter:description" content="คอร์สฟรี 16 บท สอน Data Engineering ภาษาไทย — Python, SQL, Airflow, dbt, BigQuery, Docker, Spark" />
        <meta name="twitter:image" content="https://de-course-seven.vercel.app/images/de_roadmap.png" />
        <meta name="theme-color" content="#0a0f1c" />
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🎓</text></svg>" />
      </head>
      <body>
        <ReadingProgress />
        <div className="topbar">
          <button className="menu-btn" onClick={() => setSidebarOpen(!sidebarOpen)}>
            ☰
          </button>
          <span className="topbar-title">🎓 DE101</span>
          <button className="theme-toggle" onClick={toggleTheme} title={theme === 'dark' ? 'เปลี่ยนเป็น Light Mode' : 'เปลี่ยนเป็น Dark Mode'}>
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>
        </div>

        <div className="app-layout">
          <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
          <main className="main-content">
            <PageTransition>{children}</PageTransition>
          </main>
        </div>
      </body>
    </html>
  );
}
