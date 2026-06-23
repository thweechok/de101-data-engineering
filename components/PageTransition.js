'use client';
import { usePathname } from 'next/navigation';
import { useState, useEffect, useRef } from 'react';

export default function PageTransition({ children }) {
  const pathname = usePathname();
  const [displayChildren, setDisplayChildren] = useState(children);
  const [stage, setStage] = useState('enter');
  const prevPathname = useRef(pathname);

  useEffect(() => {
    if (pathname !== prevPathname.current) {
      // Route changed — start exit animation
      setStage('exit');
      const timer = setTimeout(() => {
        setDisplayChildren(children);
        prevPathname.current = pathname;
        setStage('enter');
        window.scrollTo({ top: 0, behavior: 'instant' });
      }, 250);
      return () => clearTimeout(timer);
    } else {
      setDisplayChildren(children);
    }
  }, [pathname, children]);

  return (
    <div className={`page-transition ${stage}`}>
      {displayChildren}
    </div>
  );
}
