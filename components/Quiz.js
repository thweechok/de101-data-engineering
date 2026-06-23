'use client';

import { useState, useEffect } from 'react';
import { quizzes } from '../data/quizzes';

const STORAGE_KEY = 'de101-quiz-scores';

function getScoreMessage(score, total) {
  const pct = score / total;
  if (pct === 1) return `${score}/${total} 🎉 เก่งมาก! ยอดเยี่ยม!`;
  if (pct >= 0.7) return `${score}/${total} 👏 ดีมาก! เกือบเต็มแล้ว`;
  if (pct >= 0.5) return `${score}/${total} 💪 พอใช้ ลองทบทวนอีกนิด`;
  return `${score}/${total} 📚 ลองทบทวนบทเรียนแล้วทำใหม่นะ`;
}

export default function Quiz({ chapterNumber }) {
  const questions = quizzes[chapterNumber];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  // Save score to localStorage when quiz finishes
  useEffect(() => {
    if (finished) {
      try {
        const stored = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
        stored[chapterNumber] = score;
        localStorage.setItem(STORAGE_KEY, JSON.stringify(stored));
      } catch {
        // silently ignore storage errors
      }
    }
  }, [finished, score, chapterNumber]);

  if (!questions || questions.length === 0) {
    return (
      <div className="quiz-container">
        <p>ยังไม่มีคำถามสำหรับบทนี้</p>
      </div>
    );
  }

  const current = questions[currentIndex];
  const isAnswered = selectedAnswer !== null;
  const isCorrect = selectedAnswer === current.answer;

  function handleSelect(optionIndex) {
    if (isAnswered) return;
    setSelectedAnswer(optionIndex);
    if (optionIndex === current.answer) {
      setScore((prev) => prev + 1);
    }
  }

  function handleNext() {
    if (currentIndex + 1 < questions.length) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedAnswer(null);
    } else {
      setFinished(true);
    }
  }

  function handleRetry() {
    setCurrentIndex(0);
    setSelectedAnswer(null);
    setScore(0);
    setFinished(false);
  }

  if (finished) {
    return (
      <div className="quiz-container">
        <div className="quiz-result">
          <h3>ผลคะแนน</h3>
          <p className="quiz-score">{getScoreMessage(score, questions.length)}</p>
          <button className="quiz-retry-btn" onClick={handleRetry}>
            🔄 ทำใหม่
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="quiz-container">
      <div className="quiz-progress">
        ข้อ {currentIndex + 1} / {questions.length}
      </div>

      <div className="quiz-question">
        <p>{current.q}</p>
      </div>

      <div className="quiz-options">
        {current.options.map((option, i) => {
          let className = 'quiz-option';
          if (isAnswered) {
            if (i === current.answer) className += ' correct';
            else if (i === selectedAnswer) className += ' wrong';
          }
          return (
            <button
              key={i}
              className={className}
              onClick={() => handleSelect(i)}
              disabled={isAnswered}
            >
              {option}
            </button>
          );
        })}
      </div>

      {isAnswered && (
        <div className="quiz-explain">
          <p>
            <strong>{isCorrect ? '✅ ถูกต้อง!' : '❌ ไม่ถูกต้อง'}</strong>
          </p>
          <p>{current.explain}</p>
          <button className="quiz-next-btn" onClick={handleNext}>
            {currentIndex + 1 < questions.length ? 'ข้อถัดไป →' : 'ดูผลคะแนน →'}
          </button>
        </div>
      )}
    </div>
  );
}
