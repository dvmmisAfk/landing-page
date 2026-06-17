import { useCallback, useEffect, useRef, useState } from 'react';
import ScrollFloat from '../ui/ScrollFloat';

const TESTIMONIALS = [
  {
    name: 'Salman.',
    role: 'Young Volunteer, 25',
    quote:
      "I've found a space where I'll soon do what I love — learn new skills, connect with amazing people, and gain guidance from experienced professionals. Can't wait for AgeWell to kick off!",
    avatarSrc: '/assets/testimonial.png',
  },
  {
    name: 'Margaret C.',
    role: 'Senior Member, 68',
    quote:
      'AgeWell has given me a new sense of purpose. Connecting with young people who want to learn from my experiences is the most joyful part of my week. I feel truly valued.',
    avatarSrc: 'https://i.pravatar.cc/200?img=47',
  },
  {
    name: 'Priya S.',
    role: 'NGO Coordinator, 31',
    quote:
      'Finding skilled volunteers used to take weeks. AgeWell changed everything. We now run better programs with a community that genuinely cares about creating real, lasting impact.',
    avatarSrc: 'https://i.pravatar.cc/200?img=16',
  },
  {
    name: 'James O.',
    role: 'Young Volunteer, 23',
    quote:
      "I came to volunteer and found mentors for life. The seniors I've connected with through AgeWell have truly shaped how I think about my career and my future. An incredible community.",
    avatarSrc: 'https://i.pravatar.cc/200?img=33',
  },
];

function getSlideState(offset) {
  const distance = Math.abs(offset);
  if (distance === 0) return 'active';
  if (distance === 1) return 'adjacent';
  return 'far';
}

function TestimonialSlide({ testimonial, state, distance }) {
  const [avatarError, setAvatarError] = useState(false);

  return (
    <article
      className={`testimonial-slide testimonial-slide--${state}`}
      data-distance={distance}
      style={{ zIndex: 10 - distance }}
    >
      <div className="testimonial-slide-card">
        <div className="testimonial-slide-accent testimonial-slide-accent--top" aria-hidden="true" />
        <blockquote className="testimonial-slide-quote">
          <span className="testimonial-slide-quote-mark" aria-hidden="true">
            &ldquo;
          </span>
          <p>{testimonial.quote}</p>
        </blockquote>
        <div className="testimonial-slide-author">
          <div className="testimonial-slide-avatar">
            {!avatarError ? (
              <img
                src={testimonial.avatarSrc}
                alt=""
                onError={() => setAvatarError(true)}
              />
            ) : (
              <span className="testimonial-slide-initial">{testimonial.name[0]}</span>
            )}
          </div>
          <p className="testimonial-slide-name">{testimonial.name}</p>
          <p className="testimonial-slide-role">{testimonial.role}</p>
          <div className="testimonial-slide-accent testimonial-slide-accent--bottom" aria-hidden="true" />
        </div>
      </div>
    </article>
  );
}

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const trackRef = useRef(null);
  const viewportRef = useRef(null);
  const [metrics, setMetrics] = useState({ slideWidth: 300, step: 230 });
  const [viewportWidth, setViewportWidth] = useState(0);

  const total = TESTIMONIALS.length;

  const goTo = useCallback(
    (direction) => {
      setActiveIndex((current) => (current + direction + total) % total);
    },
    [total],
  );

  useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;

    const measure = () => {
      const slide = trackRef.current?.firstElementChild;
      if (!slide) return;
      const slideWidth = slide.offsetWidth;
      const styles = window.getComputedStyle(slide);
      const marginLeft = parseFloat(styles.marginLeft) || 0;
      const marginRight = parseFloat(styles.marginRight) || 0;
      setMetrics({
        slideWidth,
        step: slideWidth + marginLeft + marginRight,
      });
      setViewportWidth(viewport.clientWidth);
    };

    measure();

    const resizeObserver =
      typeof ResizeObserver !== 'undefined'
        ? new ResizeObserver(measure)
        : null;

    resizeObserver?.observe(viewport);
    window.addEventListener('resize', measure);

    return () => {
      resizeObserver?.disconnect();
      window.removeEventListener('resize', measure);
    };
  }, []);

  const trackOffset =
    metrics.slideWidth > 0
      ? activeIndex * metrics.step + metrics.slideWidth / 2
      : 0;

  const trackTranslate =
    viewportWidth > 0 ? viewportWidth / 2 - trackOffset : 0;

  const touchStartX = useRef(0);

  const handleTouchStart = (event) => {
    touchStartX.current = event.changedTouches[0].clientX;
  };

  const handleTouchEnd = (event) => {
    const deltaX = event.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(deltaX) < 48) return;
    goTo(deltaX < 0 ? 1 : -1);
  };

  return (
    <section className="testimonials">
      <div className="container">
        <div className="section-header">
          <ScrollFloat>Voices From Our Community</ScrollFloat>
          <p>Real experiences from people building meaningful connections</p>
        </div>
      </div>

      <div className="testimonial-carousel">
        <button
          type="button"
          className="testimonial-carousel-btn testimonial-carousel-btn--prev"
          onClick={() => goTo(-1)}
          aria-label="Previous testimonial"
        >
          <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M15 6L9 12L15 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        <div
          className="testimonial-carousel-viewport"
          ref={viewportRef}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div
            ref={trackRef}
            className="testimonial-carousel-track"
            style={{ transform: `translateX(${trackTranslate}px)` }}
          >
            {TESTIMONIALS.map((testimonial, index) => {
              const offset = index - activeIndex;
              const distance = Math.abs(offset);

              return (
                <TestimonialSlide
                  key={testimonial.name}
                  testimonial={testimonial}
                  state={getSlideState(offset)}
                  distance={distance}
                />
              );
            })}
          </div>
        </div>

        <button
          type="button"
          className="testimonial-carousel-btn testimonial-carousel-btn--next"
          onClick={() => goTo(1)}
          aria-label="Next testimonial"
        >
          <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M9 6L15 12L9 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </section>
  );
}
