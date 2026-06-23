'use client';

export default function ProgressRing({ progress = 0, size = 60, strokeWidth = 4 }) {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;
  const center = size / 2;
  const gradientId = `progress-ring-gradient-${size}`;

  return (
    <div
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        width: size,
        height: size,
      }}
    >
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        style={{ transform: 'rotate(-90deg)' }}
      >
        <defs>
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--blue, #3b82f6)" />
            <stop offset="100%" stopColor="var(--purple, #8b5cf6)" />
          </linearGradient>
        </defs>

        {/* Background circle */}
        <circle
          cx={center}
          cy={center}
          r={radius}
          fill="none"
          stroke="var(--bg4, #2a2a3a)"
          strokeWidth={strokeWidth}
        />

        {/* Progress circle */}
        <circle
          cx={center}
          cy={center}
          r={radius}
          fill="none"
          stroke={`url(#${gradientId})`}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          style={{
            transition: 'stroke-dashoffset 0.6s cubic-bezier(0.22, 1, 0.36, 1)',
          }}
        />
      </svg>

      {/* Center percentage text */}
      <span
        style={{
          position: 'absolute',
          fontSize: size * 0.22,
          fontWeight: 700,
          color: 'var(--text, #e0e0e0)',
          fontFamily: 'inherit',
          userSelect: 'none',
        }}
      >
        {Math.round(progress)}%
      </span>
    </div>
  );
}
