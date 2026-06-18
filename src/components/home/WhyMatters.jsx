import PressureHeading from '../ui/PressureHeading';
import { GlowTiltedCard } from '../ui/GlowTiltedCard';

function CheckIcon() {
  return (
    <span className="check-circle">
      <svg viewBox="0 0 10 10"><polyline points="1.5,5 4,8 8.5,2" strokeLinecap="round" strokeLinejoin="round" /></svg>
    </span>
  );
}

function WhyAvatar({ id, src, alt, animation = 'float' }) {
  return (
    <figure
      className="why-avatar"
      data-avatar={id}
      data-animate={animation}
      aria-label={alt}
    >
      <div className="why-avatar-stage">
        <img
          className="why-avatar-image"
          src={src}
          alt=""
          width="120"
          height="120"
          decoding="async"
          draggable="false"
        />
      </div>
    </figure>
  );
}

const whyCards = [
  {
    id: 'senior-isolation',
    title: 'Senior Isolation is Real.',
    paragraphs: [
      '43% of Seniors report feeling isolated regularly',
      'Their wisdom, skills & experience remain underutilized.',
    ],
    image: '/assets/why-senior-isolation.png',
    alt: 'Senior looking out a window',
    animation: 'float',
  },
  {
    id: 'youth-gap',
    title: 'Youth Skill Gap',
    paragraphs: [
      '67% of young adults lack mentorship',
      'Miss chances to volunteer, learn, and build intergenerational connections.',
    ],
    image: '/assets/why-youth-gap.png',
    alt: 'Hand holding a help sign',
    animation: 'wave',
  },
  {
    id: 'ngo-challenges',
    title: 'NGO Challenges',
    paragraphs: [
      'Struggle to find consistent, skilled volunteers',
      'Limited tools for outreach, impact measurement & sustainability.',
    ],
    image: '/assets/why-ngo-challenges.png',
    alt: 'Clipboard with checklist',
    animation: 'pulse',
    featured: true,
  },
];

export default function WhyMatters() {
  return (
    <section className="why-matters">
      <div className="container">
        <div className="section-header">
          <PressureHeading text="Why This Matters?" />
          <p>Loneliness is real. Meaningful connections can change lives</p>
        </div>

        <div className="why-grid">
          {whyCards.map((card) => (
            <GlowTiltedCard
              key={card.id}
              className={`why-card-tilt${card.featured ? ' why-card-tilt--featured' : ''}`}
              backgroundColor="#f8fafc"
              glowProps={{ glowRadius: 18, borderRadius: 14 }}
            >
              <article className="why-card" data-card={card.id}>
                <WhyAvatar
                  id={card.id}
                  src={card.image}
                  alt={card.alt}
                  animation={card.animation}
                />
                <div className="why-text">
                  <h3>{card.title}</h3>
                  {card.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </article>
            </GlowTiltedCard>
          ))}
        </div>
      </div>
    </section>
  );
}

export { CheckIcon };
