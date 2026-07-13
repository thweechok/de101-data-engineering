// CourseThumbnail.js — cover image with emoji fallback (GitHub raw CDN)
'use client';
import { useState } from 'react';

// GitHub raw CDN — bypasses Vercel static file limit issues
const GITHUB_RAW = 'https://raw.githubusercontent.com/thweechok/de101-data-engineering/master/public';

export default function CourseThumbnail({ course, compact = false }) {
  const { id, emoji, title, levelColor, level, order } = course;
  const [imgErr, setImgErr]   = useState(false);
  const [triedAlt, setTriedAlt] = useState(false);

  // Try /images/courses/{id}.png  →  fallback /images/courses/{id}.jpg  →  emoji
  const imgSrc = !triedAlt
    ? `${GITHUB_RAW}/images/courses/${id}.png`
    : `${GITHUB_RAW}/images/courses/${id}.jpg`;

  const h = compact ? 110 : undefined;

  const handleError = () => {
    if (!triedAlt) { setTriedAlt(true); }
    else           { setImgErr(true);   }
  };

  return (
    <div style={{
      position: 'relative',
      width: '100%',
      aspectRatio: compact ? undefined : '16/9',
      height: compact ? h : undefined,
      overflow: 'hidden',
      background: `linear-gradient(145deg, #0d0d1a, ${levelColor}33)`,
      flexShrink: 0,
    }}>
      {/* Real cover image */}
      {!imgErr && (
        <img
          src={imgSrc}
          alt={title}
          loading="lazy"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
            display: 'block',
          }}
          onError={handleError}
        />
      )}

      {/* Emoji fallback when image fails */}
      {imgErr && (
        <div style={{
          width: '100%', height: '100%',
          display: 'flex', flexDirection: 'column',
          alignItems: 'center', justifyContent: 'center',
          gap: 6,
          background: `linear-gradient(145deg, #0d0d1a 0%, ${levelColor}22 100%)`,
        }}>
          <span style={{ fontSize: compact ? '2rem' : '2.8rem', lineHeight: 1 }}>{emoji}</span>
          {!compact && (
            <span style={{
              fontSize: '0.7rem', color: 'rgba(255,255,255,0.5)',
              maxWidth: '80%', textAlign: 'center', lineHeight: 1.3,
            }}>{title}</span>
          )}
        </div>
      )}

      {/* FREE badge */}
      <div className="free-badge" style={{
        position: 'absolute', top: 8, right: 8,
        background: 'linear-gradient(135deg, #22c55e, #16a34a)',
        color: '#fff', fontSize: compact ? '0.52rem' : '0.6rem', fontWeight: 800,
        padding: compact ? '2px 7px' : '3px 10px', borderRadius: 12,
        letterSpacing: '0.06em',
        boxShadow: '0 2px 8px rgba(34,197,94,.5)',
      }}>FREE</div>

      {/* Level badge */}
      <div style={{
        position: 'absolute', top: 8, left: 8,
        background: `${levelColor}cc`,
        color: '#fff', fontSize: compact ? '0.52rem' : '0.58rem', fontWeight: 700,
        padding: compact ? '2px 7px' : '3px 9px', borderRadius: 8,
        backdropFilter: 'blur(6px)',
        boxShadow: '0 2px 6px rgba(0,0,0,.4)',
      }}>{level}</div>

      {/* Order number */}
      {!compact && (
        <div style={{
          position: 'absolute', bottom: 10, right: 12,
          width: 26, height: 26, borderRadius: '50%',
          background: 'rgba(0,0,0,.65)',
          border: `2px solid ${levelColor}`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: '#fff', fontSize: '0.68rem', fontWeight: 800,
          backdropFilter: 'blur(4px)',
        }}>{order}</div>
      )}
    </div>
  );
}
