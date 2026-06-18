// Component ported from https://codepen.io/JuanFuentes/full/rgXKGQ

import { createElement, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import './TextPressure.css';

const dist = (a, b) => {
  const dx = b.x - a.x;
  const dy = b.y - a.y;
  return Math.sqrt(dx * dx + dy * dy);
};

const getAttr = (distance, maxDist, minVal, maxVal) => {
  const val = maxVal - Math.abs((maxVal * distance) / maxDist);
  return Math.max(minVal, val + minVal);
};

const debounce = (func, delay) => {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func(...args);
    }, delay);
  };
};

const smoothstep = (t) => t * t * (3 - 2 * t);

const TextPressure = ({
  text = 'Compressa',
  fontFamily = 'Compressa VF',
  fontUrl = 'https://res.cloudinary.com/dr6lvwubh/raw/upload/v1529908256/CompressaPRO-GX.woff2',
  standardFont = false,
  fisheye = false,
  fisheyeMaxScale = 1.32,
  fisheyeRadius = 100,
  fisheyeSmoothing = 10,
  tag = 'h1',
  width = true,
  weight = true,
  italic = true,
  alpha = false,
  flex = true,
  stroke = false,
  scale = false,
  uppercase = true,
  textAlign = 'center',
  textColor = '#FFFFFF',
  strokeColor = '#FF0000',
  className = '',
  minFontSize = 24,
  maxFontSize,
  transformOrigin = 'center top',
  weightMin = 560,
  weightMax = 900,
  widthMin = 92,
  widthMax = 118,
}) => {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const spansRef = useRef([]);

  const mouseRef = useRef({ x: 0, y: 0 });
  const cursorRef = useRef({ x: 0, y: 0 });
  const isHoveringRef = useRef(false);
  const scaleStateRef = useRef([]);

  const [fontSize, setFontSize] = useState(minFontSize);
  const [scaleY, setScaleY] = useState(1);
  const [lineHeight, setLineHeight] = useState(1);

  const chars = text.split('');

  useEffect(() => {
    const handleMouseMove = (e) => {
      cursorRef.current.x = e.clientX;
      cursorRef.current.y = e.clientY;
    };
    const handleTouchMove = (e) => {
      const t = e.touches[0];
      cursorRef.current.x = t.clientX;
      cursorRef.current.y = t.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove, { passive: true });

    if (containerRef.current) {
      const { left, top, width: w, height: h } = containerRef.current.getBoundingClientRect();
      mouseRef.current.x = left + w / 2;
      mouseRef.current.y = top + h / 2;
      cursorRef.current.x = mouseRef.current.x;
      cursorRef.current.y = mouseRef.current.y;
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, []);

  useEffect(() => {
    if (!fisheye) return undefined;

    const el = containerRef.current;
    if (!el) return undefined;

    const onEnter = () => {
      isHoveringRef.current = true;
    };
    const onLeave = () => {
      isHoveringRef.current = false;
    };
    const onTouchStart = (e) => {
      isHoveringRef.current = true;
      const t = e.touches[0];
      if (t) {
        cursorRef.current.x = t.clientX;
        cursorRef.current.y = t.clientY;
      }
    };
    const onTouchEnd = () => {
      isHoveringRef.current = false;
    };

    el.addEventListener('mouseenter', onEnter);
    el.addEventListener('mouseleave', onLeave);
    el.addEventListener('touchstart', onTouchStart, { passive: true });
    el.addEventListener('touchend', onTouchEnd);
    el.addEventListener('touchcancel', onTouchEnd);

    return () => {
      el.removeEventListener('mouseenter', onEnter);
      el.removeEventListener('mouseleave', onLeave);
      el.removeEventListener('touchstart', onTouchStart);
      el.removeEventListener('touchend', onTouchEnd);
      el.removeEventListener('touchcancel', onTouchEnd);
    };
  }, [fisheye]);

  const setSize = useCallback(() => {
    if (!containerRef.current || !titleRef.current) return;

    const { width: containerW, height: containerH } = containerRef.current.getBoundingClientRect();

    let newFontSize = containerW / (chars.length / 2);
    if (maxFontSize) newFontSize = Math.min(newFontSize, maxFontSize);
    newFontSize = Math.max(newFontSize, minFontSize);

    setFontSize(newFontSize);
    setScaleY(1);
    setLineHeight(1);

    requestAnimationFrame(() => {
      if (!titleRef.current) return;
      const textRect = titleRef.current.getBoundingClientRect();

      if (scale && textRect.height > 0) {
        const yRatio = containerH / textRect.height;
        setScaleY(yRatio);
        setLineHeight(yRatio);
      }
    });
  }, [chars.length, minFontSize, maxFontSize, scale]);

  useEffect(() => {
    const debouncedSetSize = debounce(setSize, 100);
    debouncedSetSize();
    window.addEventListener('resize', debouncedSetSize);
    return () => window.removeEventListener('resize', debouncedSetSize);
  }, [setSize]);

  useEffect(() => {
    let rafId;
    const animate = () => {
      mouseRef.current.x += (cursorRef.current.x - mouseRef.current.x) / 15;
      mouseRef.current.y += (cursorRef.current.y - mouseRef.current.y) / 15;

      if (titleRef.current) {
        const titleRect = titleRef.current.getBoundingClientRect();
        const maxDist = titleRect.width / 2;
        const lensRadius = Math.max(fisheyeRadius, titleRect.width * 0.22);
        const fisheyeBoost = Math.max(0, fisheyeMaxScale - 1);

        spansRef.current.forEach((span, index) => {
          if (!span) return;

          const rect = span.getBoundingClientRect();
          const charCenter = {
            x: rect.x + rect.width / 2,
            y: rect.y + rect.height / 2,
          };

          const d = dist(mouseRef.current, charCenter);

          if (fisheye) {
            if (!scaleStateRef.current[index]) {
              scaleStateRef.current[index] = 1;
            }

            let targetScale = 1;
            if (isHoveringRef.current) {
              const influence = Math.max(0, 1 - d / lensRadius);
              targetScale = 1 + fisheyeBoost * smoothstep(influence);
            }

            scaleStateRef.current[index] +=
              (targetScale - scaleStateRef.current[index]) / fisheyeSmoothing;

            const nextScale = scaleStateRef.current[index].toFixed(3);
            const nextTransform = `scale(${nextScale})`;
            if (span.style.transform !== nextTransform) {
              span.style.transform = nextTransform;
            }
            return;
          }

          const proximity = Math.min(d / maxDist, 1);

          const wght = weight
            ? Math.floor(weightMax - proximity * (weightMax - weightMin))
            : 600;

          if (standardFont) {
            const nextWeight = String(wght);
            if (span.style.fontWeight !== nextWeight) {
              span.style.fontWeight = nextWeight;
            }
          } else {
            const wdth = width
              ? Math.floor(widthMax - proximity * (widthMax - widthMin))
              : 100;
            const italVal = italic
              ? (proximity * 0.35).toFixed(2)
              : 0;
            const parts = [`'wght' ${wght}`];
            if (width) parts.push(`'wdth' ${wdth}`);
            if (italic) parts.push(`'ital' ${italVal}`);
            const newFontVariationSettings = parts.join(', ');

            if (span.style.fontVariationSettings !== newFontVariationSettings) {
              span.style.fontVariationSettings = newFontVariationSettings;
            }
          }

          const alphaVal = alpha ? getAttr(d, maxDist, 0, 1).toFixed(2) : 1;
          if (alpha && span.style.opacity !== alphaVal) {
            span.style.opacity = alphaVal;
          }
        });
      }

      rafId = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(rafId);
  }, [
    width,
    weight,
    italic,
    alpha,
    standardFont,
    fisheye,
    fisheyeMaxScale,
    fisheyeRadius,
    fisheyeSmoothing,
    weightMin,
    weightMax,
    widthMin,
    widthMax,
  ]);

  const styleElement = useMemo(
    () => (
      <style>{`
        ${fontUrl ? `@font-face {
          font-family: '${fontFamily}';
          src: url('${fontUrl}');
          font-style: normal;
        }` : ''}

        .text-pressure-flex {
          display: flex;
          justify-content: space-between;
        }

        .text-pressure-stroke span {
          position: relative;
          color: ${textColor};
        }
        .text-pressure-stroke span::after {
          content: attr(data-char);
          position: absolute;
          left: 0;
          top: 0;
          color: transparent;
          z-index: -1;
          -webkit-text-stroke-width: 3px;
          -webkit-text-stroke-color: ${strokeColor};
        }

        .text-pressure-title {
          color: ${textColor};
        }
      `}</style>
    ),
    [fontFamily, fontUrl, textColor, strokeColor],
  );

  const dynamicClassName = [
    'text-pressure-title',
    className,
    flex ? 'text-pressure-flex' : '',
    stroke ? 'text-pressure-stroke' : '',
    fisheye ? 'text-pressure-fisheye' : '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div
      ref={containerRef}
      className={`text-pressure-root${fisheye ? ' text-pressure-root--fisheye' : ''}`}
    >
      {styleElement}
      {createElement(
        tag,
        {
          ref: titleRef,
          className: dynamicClassName,
          style: {
            fontFamily,
            textTransform: uppercase ? 'uppercase' : 'none',
            fontSize,
            lineHeight,
            transform: `scale(1, ${scaleY})`,
            transformOrigin,
            margin: 0,
            textAlign,
            userSelect: 'none',
            whiteSpace: 'nowrap',
            fontWeight: 600,
            width: flex ? '100%' : 'auto',
          },
        },
        chars.map((char, i) => (
          <span
            key={i}
            ref={(el) => {
              spansRef.current[i] = el;
            }}
            data-char={char}
            style={{
              display: 'inline-block',
              color: stroke ? undefined : textColor,
              fontWeight: standardFont ? weightMin : 600,
              fontVariationSettings: standardFont
                ? undefined
                : `'wght' ${weightMin}${width ? `, 'wdth' ${widthMin}` : ''}${italic ? ', \'ital\' 0' : ''}`,
            }}
          >
            {char === ' ' ? '\u00a0' : char}
          </span>
        )),
      )}
    </div>
  );
};

export default TextPressure;
