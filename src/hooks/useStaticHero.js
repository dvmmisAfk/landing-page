import { useEffect, useState } from 'react';

export default function useStaticHero() {
  const [staticHero, setStaticHero] = useState(() => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia('(max-width: 768px), (prefers-reduced-motion: reduce)').matches;
  });

  useEffect(() => {
    const query = window.matchMedia('(max-width: 768px), (prefers-reduced-motion: reduce)');
    const update = () => setStaticHero(query.matches);
    query.addEventListener('change', update);
    return () => query.removeEventListener('change', update);
  }, []);

  return staticHero;
}
