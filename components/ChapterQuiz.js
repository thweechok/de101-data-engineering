'use client';
import { useState } from 'react';

// Sample quizzes per courseId — can be expanded per course
const quizBank = {
  'sql-mastery': [
    { q: 'Window Function ใดที่ใช้หาลำดับโดยไม่ข้ามเลข?', a: 1, choices: ['RANK()', 'DENSE_RANK()', 'ROW_NUMBER()', 'NTILE()'] },
    { q: 'CTE ย่อมาจากอะไร?', a: 1, choices: ['Common Type Expression', 'Common Table Expression', 'Calculated Table Entry', 'Core Table Expression'] },
    { q: 'Query ใดเร็วกว่าสำหรับการกรองข้อมูลใน WHERE clause?', a: 0, choices: ['ใช้ Index Column', 'ใช้ SELECT *', 'ใช้ LIKE %keyword%', 'ใช้ OR แทน AND'] },
  ],
  'python-de': [
    { q: 'asyncio ใช้สำหรับอะไร?', a: 2, choices: ['เขียน OOP', 'ทำ Unit Test', 'Async/Non-blocking I/O', 'สร้าง REST API'] },
    { q: 'Decorator ใน Python คืออะไร?', a: 0, choices: ['Function ที่ wrap function อื่น', 'Class พิเศษ', 'Library สำหรับ Data', 'Type Hint'] },
  ],
  'ads-mastery': [
    { q: 'ROAS = 4x หมายความว่าอะไร?', a: 1, choices: ['ขาดทุน 4 เท่า', 'ทุก 1 บาทที่ยิงแอด ได้รายได้ 4 บาท', 'กำไร 400%', 'ยิงแอดไป 4 ครั้ง'] },
    { q: 'GMV Max ของ TikTok คือ Objective อะไร?', a: 0, choices: ['เพิ่มยอดขายสูงสุดอัตโนมัติ', 'เพิ่ม Follower', 'เพิ่ม Click', 'ลด CPC'] },
    { q: 'เมื่อไหร่ควรปิดแอด (Kill)?', a: 2, choices: ['ยิงไปแค่ 1 ชั่วโมง', 'ROAS สูงกว่า Break-even', 'ใช้งบเกิน 3× CPO แต่ยังไม่ได้ Order', 'Impression ต่ำ'] },
  ],
  'de101': [
    { q: 'ETL ย่อมาจากอะไร?', a: 0, choices: ['Extract, Transform, Load', 'Execute, Transfer, Log', 'Export, Test, Launch', 'Edit, Track, Link'] },
    { q: 'Data Warehouse แตกต่างจาก Data Lake อย่างไร?', a: 1, choices: ['DW เก็บ Raw data, Lake เก็บ Structured', 'DW เก็บ Structured data, Lake เก็บทุกรูปแบบ', 'DW ถูกกว่า Lake', 'ไม่มีความแตกต่าง'] },
    { q: 'Apache Airflow ใช้สำหรับ?', a: 2, choices: ['Machine Learning', 'Data Visualization', 'Orchestrate/Schedule Data Pipeline', 'Web Scraping'] },
  ],
  'line101': [
    { q: 'LINE Webhook ทำหน้าที่อะไร?', a: 0, choices: ['รับ Event จาก LINE ส่งมาที่ Server เรา', 'ส่งข้อความไปหาผู้ใช้', 'สร้าง QR Code', 'ดึงข้อมูล User'] },
    { q: 'Reply Message vs Push Message ต่างกันอย่างไร?', a: 1, choices: ['Push ฟรี Reply เสียตังค์', 'Reply ตอบกลับ Event, Push ส่งหาใครก็ได้ทุกเวลา', 'ไม่มีความต่าง', 'Reply เร็วกว่า Push'] },
  ],
  'kafka101': [
    { q: 'Kafka Partition คืออะไร?', a: 0, choices: ['การแบ่ง Topic ออกเป็นส่วนย่อยเพื่อ Parallel Processing', 'การลบข้อความเก่า', 'Consumer Group', 'Offset ของ Message'] },
    { q: 'Kafka Consumer Group ใช้ทำอะไร?', a: 2, choices: ['บีบอัด Message', 'เพิ่ม Producer', 'ให้หลาย Consumer อ่าน Topic เดียวกันแบบ Load Balance', 'เพิ่ม Retention'] },
  ],
};

// Default quiz สำหรับคอร์สที่ยังไม่มี
const defaultQuiz = [
  { q: 'การเรียนรู้ที่ดีที่สุดคืออะไร?', a: 0, choices: ['ลงมือทำจริง', 'อ่านอย่างเดียว', 'จำทุกอย่าง', 'ดูวิดีโอซ้ำๆ'] },
  { q: 'Data Engineer ต่างจาก Data Scientist อย่างไร?', a: 1, choices: ['DE ทำ ML Model', 'DE สร้าง Pipeline ให้ DS ใช้', 'DE และ DS ทำงานเหมือนกัน', 'DE ใช้ Excel'] },
];

export default function ChapterQuiz({ courseId, chapterTitle }) {
  const questions = quizBank[courseId] || defaultQuiz;
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [answered, setAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [showQuiz, setShowQuiz] = useState(false);

  const q = questions[current];
  const isCorrect = selected === q?.a;

  const handleAnswer = (idx) => {
    if (answered) return;
    setSelected(idx);
    setAnswered(true);
    if (idx === q.a) setScore(s => s + 1);
  };

  const handleNext = () => {
    if (current < questions.length - 1) {
      setCurrent(c => c + 1);
      setSelected(null);
      setAnswered(false);
    } else {
      setFinished(true);
    }
  };

  const handleReset = () => {
    setCurrent(0); setSelected(null); setAnswered(false);
    setScore(0); setFinished(false);
  };

  const pct = Math.round((score / questions.length) * 100);
  const grade = pct === 100 ? '🏆 เยี่ยมมาก!' : pct >= 67 ? '✅ ผ่านแล้ว!' : '📚 ลองใหม่อีกครั้ง';
  const gradeColor = pct === 100 ? '#22c55e' : pct >= 67 ? '#3b82f6' : '#f59e0b';

  if (!showQuiz) {
    return (
      <div style={{
        marginTop: 32, padding: '20px 24px', borderRadius: 16,
        background: 'linear-gradient(135deg,rgba(139,92,246,.08),rgba(59,130,246,.08))',
        border: '1.5px solid rgba(139,92,246,.2)',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12,
      }}>
        <div>
          <div style={{ fontSize: '0.78rem', color: '#a78bfa', fontWeight: 700, marginBottom: 4 }}>
            🧠 ทดสอบความเข้าใจ
          </div>
          <div style={{ fontSize: '0.85rem', color: 'var(--text-dim)' }}>
            {questions.length} ข้อ · ใช้เวลาประมาณ 2 นาที
          </div>
        </div>
        <button onClick={() => setShowQuiz(true)} style={{
          padding: '10px 22px', borderRadius: 22,
          background: 'linear-gradient(135deg,#7c3aed,#4f46e5)',
          color: '#fff', border: 'none', cursor: 'pointer',
          fontSize: '0.82rem', fontWeight: 700,
          boxShadow: '0 4px 14px rgba(124,58,237,.4)',
          transition: 'all 0.2s',
        }}>
          🚀 เริ่มทำแบบทดสอบ
        </button>
      </div>
    );
  }

  if (finished) {
    return (
      <div style={{
        marginTop: 32, padding: '32px 24px', borderRadius: 16, textAlign: 'center',
        background: 'linear-gradient(135deg,rgba(139,92,246,.1),rgba(59,130,246,.1))',
        border: `1.5px solid ${gradeColor}44`,
      }}>
        <div style={{ fontSize: '3rem', marginBottom: 8 }}>
          {pct === 100 ? '🏆' : pct >= 67 ? '✅' : '📚'}
        </div>
        <div style={{ fontSize: '1.4rem', fontWeight: 900, color: gradeColor, marginBottom: 4 }}>{grade}</div>
        <div style={{ fontSize: '2rem', fontWeight: 900, color: '#fff', marginBottom: 4 }}>
          {score} / {questions.length}
        </div>
        <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: 20 }}>
          คะแนน {pct}%
        </div>
        {/* Score bar */}
        <div style={{ background: 'var(--glass2)', borderRadius: 8, height: 8, marginBottom: 24, overflow: 'hidden' }}>
          <div style={{
            height: '100%', width: `${pct}%`, borderRadius: 8,
            background: `linear-gradient(90deg, ${gradeColor}, ${gradeColor}88)`,
            transition: 'width 0.8s ease',
          }} />
        </div>
        <button onClick={handleReset} style={{
          padding: '10px 24px', borderRadius: 22, border: '1.5px solid rgba(139,92,246,.4)',
          background: 'var(--glass)', color: 'var(--text-dim)', cursor: 'pointer',
          fontSize: '0.82rem', fontWeight: 600, transition: 'all 0.2s',
        }}>🔄 ทำใหม่อีกครั้ง</button>
      </div>
    );
  }

  return (
    <div style={{
      marginTop: 32, padding: '24px', borderRadius: 16,
      background: 'var(--glass)', border: '1.5px solid var(--border)',
    }}>
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
        <div style={{ fontSize: '0.75rem', color: '#a78bfa', fontWeight: 700 }}>
          🧠 แบบทดสอบ — ข้อ {current + 1} / {questions.length}
        </div>
        <div style={{
          fontSize: '0.7rem', color: 'var(--text-muted)',
          background: 'var(--glass2)', padding: '3px 10px', borderRadius: 12, border: '1px solid var(--border)',
        }}>
          ✅ {score} คะแนน
        </div>
      </div>

      {/* Progress bar */}
      <div style={{ background: 'var(--glass2)', borderRadius: 4, height: 4, marginBottom: 20, overflow: 'hidden' }}>
        <div style={{
          height: '100%', borderRadius: 4,
          width: `${((current) / questions.length) * 100}%`,
          background: 'linear-gradient(90deg,#7c3aed,#4f46e5)',
          transition: 'width 0.4s ease',
        }} />
      </div>

      {/* Question */}
      <div style={{
        fontSize: '0.95rem', fontWeight: 700, color: 'var(--text)',
        marginBottom: 18, lineHeight: 1.5,
      }}>
        {q.q}
      </div>

      {/* Choices */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 20 }}>
        {q.choices.map((choice, idx) => {
          let bg = 'var(--glass)';
          let border = '1.5px solid var(--border)';
          let color = 'var(--text-dim)';
          if (answered) {
            if (idx === q.a) { bg = 'rgba(34,197,94,.12)'; border = '1.5px solid #22c55e'; color = '#22c55e'; }
            else if (idx === selected && idx !== q.a) { bg = 'rgba(239,68,68,.08)'; border = '1.5px solid #ef4444'; color = '#ef4444'; }
          } else if (selected === idx) {
            bg = 'rgba(139,92,246,.12)'; border = '1.5px solid #8b5cf6'; color = '#a78bfa';
          }
          return (
            <button key={idx} onClick={() => handleAnswer(idx)} style={{
              padding: '12px 16px', borderRadius: 12, textAlign: 'left',
              background: bg, border, color, cursor: answered ? 'default' : 'pointer',
              fontSize: '0.83rem', fontWeight: 500, transition: 'all 0.18s',
              display: 'flex', alignItems: 'center', gap: 10,
            }}>
              <span style={{
                width: 24, height: 24, borderRadius: '50%', flexShrink: 0,
                background: answered && idx === q.a ? '#22c55e' : 'var(--glass2)',
                border: `1px solid ${answered && idx === q.a ? '#22c55e' : 'var(--border)'}`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '0.68rem', fontWeight: 800,
              }}>
                {answered && idx === q.a ? '✓' : answered && idx === selected && idx !== q.a ? '✗' : String.fromCharCode(65 + idx)}
              </span>
              {choice}
            </button>
          );
        })}
      </div>

      {/* Feedback + Next */}
      {answered && (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 10 }}>
          <div style={{
            fontSize: '0.8rem', fontWeight: 600, padding: '8px 14px', borderRadius: 10,
            background: isCorrect ? 'rgba(34,197,94,.1)' : 'rgba(245,158,11,.1)',
            border: `1px solid ${isCorrect ? 'rgba(34,197,94,.3)' : 'rgba(245,158,11,.3)'}`,
            color: isCorrect ? '#22c55e' : '#f59e0b',
          }}>
            {isCorrect ? '🎉 ถูกต้อง!' : `💡 คำตอบคือ: ${q.choices[q.a]}`}
          </div>
          <button onClick={handleNext} style={{
            padding: '10px 22px', borderRadius: 22,
            background: 'linear-gradient(135deg,#7c3aed,#4f46e5)',
            color: '#fff', border: 'none', cursor: 'pointer',
            fontSize: '0.82rem', fontWeight: 700,
            boxShadow: '0 4px 12px rgba(124,58,237,.35)',
          }}>
            {current < questions.length - 1 ? 'ข้อต่อไป →' : 'ดูผลลัพธ์ 🏆'}
          </button>
        </div>
      )}
    </div>
  );
}
