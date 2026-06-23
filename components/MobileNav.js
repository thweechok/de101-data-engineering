'use client';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { chapters } from '@/data/chapters-index';

export default function MobileNav() {
  const params = useParams();
  const slug = params?.slug;
  
  if (!slug) return null;

  const idx = chapters.findIndex(c => c.slug === slug);
  if (idx === -1) return null;

  const prev = idx > 0 ? chapters[idx - 1] : null;
  const next = idx < chapters.length - 1 ? chapters[idx + 1] : null;

  return (
    <div className="mobile-nav">
      {prev ? (
        <Link href={`/chapters/${prev.slug}`} className="mobile-nav-btn">
          ← ก่อนหน้า
        </Link>
      ) : (
        <span className="mobile-nav-btn disabled" />
      )}
      <Link href="/" className="mobile-nav-btn home">
        📚 สารบัญ
      </Link>
      {next ? (
        <Link href={`/chapters/${next.slug}`} className="mobile-nav-btn">
          ถัดไป →
        </Link>
      ) : (
        <span className="mobile-nav-btn disabled" />
      )}
    </div>
  );
}
