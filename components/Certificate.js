'use client';
import { useState, useEffect, useRef } from 'react';
import { chapters } from '@/data/chapters-index';

export default function Certificate() {
  const [completed, setCompleted] = useState([]);
  const [name, setName] = useState('');
  const [showCert, setShowCert] = useState(false);
  const canvasRef = useRef(null);

  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem('de101-progress') || '[]');
      setCompleted(saved);
    } catch {}
  }, []);

  const allDone = completed.length >= chapters.length;
  const today = new Date().toLocaleDateString('th-TH', { year: 'numeric', month: 'long', day: 'numeric' });

  const generateCertificate = () => {
    if (!name.trim()) return;
    setShowCert(true);

    setTimeout(() => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      const w = 1200;
      const h = 850;
      canvas.width = w;
      canvas.height = h;

      // Background gradient
      const grad = ctx.createLinearGradient(0, 0, w, h);
      grad.addColorStop(0, '#0a0f1c');
      grad.addColorStop(0.5, '#111827');
      grad.addColorStop(1, '#0a0f1c');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, w, h);

      // Border
      ctx.strokeStyle = '#3b82f6';
      ctx.lineWidth = 3;
      ctx.strokeRect(30, 30, w - 60, h - 60);

      // Inner border
      ctx.strokeStyle = 'rgba(139, 92, 246, 0.3)';
      ctx.lineWidth = 1;
      ctx.strokeRect(40, 40, w - 80, h - 80);

      // Corner decorations
      const corners = [[50, 50], [w - 50, 50], [50, h - 50], [w - 50, h - 50]];
      corners.forEach(([cx, cy]) => {
        ctx.beginPath();
        ctx.arc(cx, cy, 8, 0, Math.PI * 2);
        ctx.fillStyle = '#3b82f6';
        ctx.fill();
      });

      // Top accent line
      const accentGrad = ctx.createLinearGradient(200, 0, w - 200, 0);
      accentGrad.addColorStop(0, 'transparent');
      accentGrad.addColorStop(0.3, '#3b82f6');
      accentGrad.addColorStop(0.5, '#8b5cf6');
      accentGrad.addColorStop(0.7, '#3b82f6');
      accentGrad.addColorStop(1, 'transparent');
      ctx.fillStyle = accentGrad;
      ctx.fillRect(200, 80, w - 400, 2);

      // Emoji
      ctx.font = '48px serif';
      ctx.textAlign = 'center';
      ctx.fillText('🎓', w / 2, 140);

      // Title
      ctx.font = 'bold 18px Inter, sans-serif';
      ctx.fillStyle = '#94a3b8';
      ctx.letterSpacing = '8px';
      ctx.fillText('CERTIFICATE OF COMPLETION', w / 2, 185);

      // Course name
      ctx.font = 'bold 42px Inter, sans-serif';
      const titleGrad = ctx.createLinearGradient(300, 200, w - 300, 260);
      titleGrad.addColorStop(0, '#3b82f6');
      titleGrad.addColorStop(1, '#8b5cf6');
      ctx.fillStyle = titleGrad;
      ctx.fillText('DE101 — Data Engineering', w / 2, 250);

      // Subtitle
      ctx.font = '16px Inter, sans-serif';
      ctx.fillStyle = '#64748b';
      ctx.fillText('เริ่มต้นจากศูนย์ สู่ Data Engineer', w / 2, 285);

      // Divider
      ctx.fillStyle = accentGrad;
      ctx.fillRect(350, 310, w - 700, 1);

      // "This certifies that"
      ctx.font = '16px Inter, sans-serif';
      ctx.fillStyle = '#94a3b8';
      ctx.fillText('ขอมอบใบประกาศนี้ให้แก่', w / 2, 360);

      // Name
      ctx.font = 'bold 48px Inter, sans-serif';
      ctx.fillStyle = '#f8fafc';
      ctx.fillText(name.trim(), w / 2, 420);

      // Underline for name
      const nameWidth = ctx.measureText(name.trim()).width;
      ctx.strokeStyle = 'rgba(59, 130, 246, 0.3)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo((w - nameWidth) / 2 - 20, 435);
      ctx.lineTo((w + nameWidth) / 2 + 20, 435);
      ctx.stroke();

      // Description
      ctx.font = '16px Inter, sans-serif';
      ctx.fillStyle = '#94a3b8';
      ctx.fillText('ได้สำเร็จหลักสูตร DE101 — Data Engineering เริ่มต้นจากศูนย์', w / 2, 480);
      ctx.fillText(`ครบทั้ง ${chapters.length} บทเรียน ครอบคลุม Python, SQL, Airflow, dbt, BigQuery, Docker, Spark`, w / 2, 510);

      // Stats boxes
      const stats = [
        { label: 'บทเรียน', value: `${chapters.length}` },
        { label: 'แผนภาพ', value: '21+' },
        { label: 'ตัวอย่างโค้ด', value: '100+' },
        { label: 'คำถามสัมภาษณ์', value: '25+' },
      ];
      const boxW = 120;
      const boxH = 50;
      const startX = (w - (stats.length * boxW + (stats.length - 1) * 20)) / 2;
      stats.forEach((s, i) => {
        const x = startX + i * (boxW + 20);
        const y = 540;
        ctx.fillStyle = 'rgba(59, 130, 246, 0.08)';
        ctx.beginPath();
        ctx.roundRect(x, y, boxW, boxH, 8);
        ctx.fill();
        ctx.strokeStyle = 'rgba(59, 130, 246, 0.2)';
        ctx.lineWidth = 1;
        ctx.stroke();
        ctx.font = 'bold 18px Inter, sans-serif';
        ctx.fillStyle = '#3b82f6';
        ctx.fillText(s.value, x + boxW / 2, y + 22);
        ctx.font = '11px Inter, sans-serif';
        ctx.fillStyle = '#64748b';
        ctx.fillText(s.label, x + boxW / 2, y + 40);
      });

      // Bottom divider
      ctx.fillStyle = accentGrad;
      ctx.fillRect(350, 620, w - 700, 1);

      // Date
      ctx.font = '14px Inter, sans-serif';
      ctx.fillStyle = '#94a3b8';
      ctx.fillText(`วันที่ออกใบประกาศ: ${today}`, w / 2, 660);

      // Footer
      ctx.font = '12px Inter, sans-serif';
      ctx.fillStyle = '#475569';
      ctx.fillText('DE101 Thailand — https://de-course-seven.vercel.app', w / 2, 700);

      // Bottom accent
      ctx.fillStyle = accentGrad;
      ctx.fillRect(200, h - 80, w - 400, 2);

      // Verification
      const hash = btoa(name.trim() + '-DE101-' + Date.now()).slice(0, 12);
      ctx.font = '10px monospace';
      ctx.fillStyle = '#334155';
      ctx.fillText(`ID: ${hash}`, w / 2, h - 55);
    }, 100);
  };

  const downloadCertificate = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const link = document.createElement('a');
    link.download = `DE101-Certificate-${name.trim()}.png`;
    link.href = canvas.toDataURL('image/png');
    link.click();
  };

  if (!allDone) {
    return (
      <div className="cert-locked">
        <div className="cert-locked-icon">🔒</div>
        <h3>ใบ Certificate</h3>
        <p>เรียนครบทั้ง {chapters.length} บทเพื่อรับใบ Certificate</p>
        <div className="cert-progress-info">
          <div className="cert-progress-bar">
            <div className="cert-progress-fill" style={{ width: `${(completed.length / chapters.length) * 100}%` }} />
          </div>
          <span>{completed.length}/{chapters.length} บท</span>
        </div>
      </div>
    );
  }

  return (
    <div className="cert-section">
      <div className="cert-unlocked-icon">🎉</div>
      <h3>🏅 ยินดีด้วย! คุณเรียนจบครบทุกบทแล้ว</h3>
      <p>กรอกชื่อเพื่อรับใบ Certificate ของคุณ</p>

      {!showCert ? (
        <div className="cert-form">
          <input
            type="text"
            placeholder="กรอกชื่อ-นามสกุล ภาษาไทยหรืออังกฤษ"
            value={name}
            onChange={e => setName(e.target.value)}
            className="cert-input"
          />
          <button
            onClick={generateCertificate}
            className="cert-generate-btn"
            disabled={!name.trim()}
          >
            🏅 สร้าง Certificate
          </button>
        </div>
      ) : (
        <div className="cert-result">
          <canvas ref={canvasRef} className="cert-canvas" />
          <button onClick={downloadCertificate} className="cert-download-btn">
            📥 ดาวน์โหลด Certificate (PNG)
          </button>
          <button onClick={() => setShowCert(false)} className="cert-retry-btn">
            ✏️ แก้ไขชื่อ
          </button>
        </div>
      )}
    </div>
  );
}
