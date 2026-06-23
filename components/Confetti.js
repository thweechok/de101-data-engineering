'use client';

const COLORS = ['#3b82f6', '#8b5cf6', '#ec4899', '#10b981', '#f59e0b', '#06b6d4'];

export function triggerConfetti() {
  // Create or reuse container
  let container = document.getElementById('confetti-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'confetti-container';
    Object.assign(container.style, {
      position: 'fixed',
      top: '0',
      left: '0',
      width: '100vw',
      height: '100vh',
      pointerEvents: 'none',
      zIndex: '9999',
      overflow: 'hidden',
    });
    document.body.appendChild(container);
  }

  for (let i = 0; i < 80; i++) {
    const piece = document.createElement('div');
    const color = COLORS[Math.floor(Math.random() * COLORS.length)];
    const size = Math.random() * 6 + 6; // 6-12px
    const startX = Math.random() * 100; // vw
    const rotation = Math.random() * 360;
    const drift = (Math.random() - 0.5) * 200; // px horizontal drift
    const duration = Math.random() * 1.5 + 1.5; // 1.5-3s fall duration
    const delay = Math.random() * 0.5; // 0-0.5s stagger

    Object.assign(piece.style, {
      position: 'absolute',
      top: '-20px',
      left: `${startX}vw`,
      width: `${size}px`,
      height: `${size}px`,
      backgroundColor: color,
      borderRadius: Math.random() > 0.5 ? '50%' : '2px',
      transform: `rotate(${rotation}deg)`,
      opacity: '1',
      animation: `confetti-fall ${duration}s ease-in ${delay}s forwards`,
    });

    // Inject keyframes if not already present
    if (!document.getElementById('confetti-keyframes')) {
      const style = document.createElement('style');
      style.id = 'confetti-keyframes';
      style.textContent = `
        @keyframes confetti-fall {
          0% {
            transform: translateY(0) translateX(0) rotate(0deg) scale(1);
            opacity: 1;
          }
          25% {
            opacity: 1;
          }
          100% {
            transform: translateY(100vh) translateX(var(--drift, 50px)) rotate(720deg) scale(0.5);
            opacity: 0;
          }
        }
      `;
      document.head.appendChild(style);
    }

    piece.style.setProperty('--drift', `${drift}px`);
    container.appendChild(piece);
  }

  // Auto-remove after 3 seconds
  setTimeout(() => {
    if (container && container.parentNode) {
      container.innerHTML = '';
    }
  }, 3000);
}

export default function Confetti() {
  return null;
}
