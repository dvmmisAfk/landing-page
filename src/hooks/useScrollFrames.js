import { useEffect, useRef, useState } from 'react';
import { FRAME_COUNT } from '../utils/heroFrames';

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

export default function useScrollFrames(sectionRef) {
  const [frameIndex, setFrameIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const rafRef = useRef(null);

  useEffect(() => {
    const update = () => {
      const section = sectionRef.current;
      if (!section) return;

      const scrollTop = window.scrollY;
      const start = section.offsetTop;
      const navHeight = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-h'), 10) || 72;
      const end = start + section.offsetHeight - (window.innerHeight - navHeight);
      const range = Math.max(end - start, 1);
      const nextProgress = clamp((scrollTop - start) / range, 0, 1);
      const nextFrame = Math.round(nextProgress * (FRAME_COUNT - 1));

      setProgress(nextProgress);
      setFrameIndex(nextFrame);
    };

    const onScroll = () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [sectionRef]);

  return { frameIndex, progress };
}
