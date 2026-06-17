import { useCallback, useEffect, useRef } from 'react';
import { FRAME_COUNT, getFramePath } from '../../utils/heroFrames';
import useScrollFrames from '../../hooks/useScrollFrames';
import HashLink from '../ui/HashLink';

const FRAME_CROP = 3;

function drawFrame(canvas, img) {
  const ctx = canvas.getContext('2d');
  if (!ctx || !img?.complete || !img.naturalWidth) return;

  const dpr = window.devicePixelRatio || 1;
  const width = canvas.width / dpr;
  const height = canvas.height / dpr;

  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  ctx.fillStyle = '#FFFFFF';
  ctx.fillRect(0, 0, width, height);

  const srcX = FRAME_CROP;
  const srcY = FRAME_CROP;
  const srcW = img.naturalWidth - FRAME_CROP * 2;
  const srcH = img.naturalHeight - FRAME_CROP * 2;

  const scale = Math.max(width / srcW, height / srcH);
  const drawWidth = srcW * scale;
  const drawHeight = srcH * scale;
  const offsetX = (width - drawWidth) / 2;
  const offsetY = (height - drawHeight) / 2;

  ctx.drawImage(img, srcX, srcY, srcW, srcH, offsetX, offsetY, drawWidth, drawHeight);
}

export default function Hero() {
  const sectionRef = useRef(null);
  const { frameIndex } = useScrollFrames(sectionRef);
  const canvasRef = useRef(null);
  const imagesRef = useRef([]);

  useEffect(() => {
    imagesRef.current = Array.from({ length: FRAME_COUNT }, (_, i) => {
      const img = new Image();
      img.src = getFramePath(i);
      return img;
    });
  }, []);

  const renderFrame = useCallback((index) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const img = imagesRef.current[index];
    if (img?.complete) {
      drawFrame(canvas, img);
    } else if (img) {
      img.onload = () => drawFrame(canvas, img);
    }

    [index - 1, index + 1, index + 2]
      .filter((i) => i >= 0 && i < FRAME_COUNT)
      .forEach((i) => {
        const next = imagesRef.current[i];
        if (next && !next.complete) next.src = getFramePath(i);
      });
  }, []);

  useEffect(() => {
    renderFrame(frameIndex);
  }, [frameIndex, renderFrame]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;

      const rect = parent.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;

      renderFrame(frameIndex);
    };

    resize();
    window.addEventListener('resize', resize);
    return () => window.removeEventListener('resize', resize);
  }, [frameIndex, renderFrame]);

  return (
    <section className="hero-scroll" ref={sectionRef}>
      <div className="hero-sticky">
        <div className="container hero-inner">
          <div className="hero-content">
            <h1>A Community Where Seniors and Youth Support Each Other</h1>
            <p className="hero-desc">
              AgeWell connects seniors, young volunteers, and organizations through meaningful activities, events, and community support.
            </p>
            <div className="hero-actions">
              <HashLink hash="waitlist" className="btn btn-primary btn-lg">Join Us</HashLink>
              <HashLink hash="how" className="btn btn-ghost btn-lg">See how it works</HashLink>
            </div>
            <div className="social-proof">
              <div className="avatar-stack">
                <img src="/assets/avatar-1.png" alt="" />
                <img src="/assets/avatar-2.png" alt="" />
                <img src="/assets/avatar-3.png" alt="" />
              </div>
              <span className="proof-text">Meera Thakur and others have already joined</span>
            </div>
          </div>

          <div className="hero-illustration" aria-hidden="true">
            <canvas ref={canvasRef} className="hero-illustration-canvas" />
          </div>
        </div>
      </div>
    </section>
  );
}
