import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';
import './TiltedCard.css';

const springValues = {
  damping: 30,
  stiffness: 100,
  mass: 2,
};

function usePointerTilt() {
  const [enabled, setEnabled] = useState(() => {
    if (typeof window === 'undefined') return true;
    return window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  });

  useEffect(() => {
    const query = window.matchMedia('(hover: hover) and (pointer: fine)');
    const update = () => setEnabled(query.matches);
    query.addEventListener('change', update);
    return () => query.removeEventListener('change', update);
  }, []);

  return enabled;
}

function TiltedCardSurface({
  children,
  className = '',
  rotateAmplitude = 10,
  scaleOnHover = 1.02,
}) {
  const ref = useRef(null);
  const rotateX = useSpring(useMotionValue(0), springValues);
  const rotateY = useSpring(useMotionValue(0), springValues);
  const scale = useSpring(1, springValues);

  function handleMouse(e) {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const offsetX = e.clientX - rect.left - rect.width / 2;
    const offsetY = e.clientY - rect.top - rect.height / 2;

    rotateX.set((offsetY / (rect.height / 2)) * -rotateAmplitude);
    rotateY.set((offsetX / (rect.width / 2)) * rotateAmplitude);
  }

  function handleMouseEnter() {
    scale.set(scaleOnHover);
  }

  function handleMouseLeave() {
    scale.set(1);
    rotateX.set(0);
    rotateY.set(0);
  }

  return (
    <figure
      ref={ref}
      className={`tilted-card-figure tilted-card-figure--content ${className}`.trim()}
      onMouseMove={handleMouse}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        className="tilted-card-inner tilted-card-inner--content"
        style={{ rotateX, rotateY, scale }}
      >
        <div className="tilted-card-content-slot">{children}</div>
      </motion.div>
    </figure>
  );
}

export function ContentTiltedCard({
  children,
  className,
  rotateAmplitude = 10,
  scaleOnHover = 1.02,
}) {
  const tiltEnabled = usePointerTilt();

  if (!tiltEnabled) {
    return <div className={className}>{children}</div>;
  }

  return (
    <TiltedCardSurface
      className={className}
      rotateAmplitude={rotateAmplitude}
      scaleOnHover={scaleOnHover}
    >
      {children}
    </TiltedCardSurface>
  );
}
