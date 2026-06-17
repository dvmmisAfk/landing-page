import ScrollFloat from '../ui/ScrollFloat';
import { ContentTiltedCard } from '../ui/TiltedCard';

function CheckIcon() {
  return (
    <span className="check-circle">
      <svg viewBox="0 0 10 10"><polyline points="1.5,5 4,8 8.5,2" strokeLinecap="round" strokeLinejoin="round" /></svg>
    </span>
  );
}

const whyCards = [
  {
    title: 'Senior Isolation is Real.',
    paragraphs: ['43% of seniors report feeling isolated regularly.', 'Their wisdom, skills, and experience remain underutilized.'],
    icon: (
      <svg viewBox="0 0 80 80" fill="none">
        <circle cx="40" cy="40" r="38" fill="#EAF5F7" />
        <circle cx="35" cy="26" r="9" stroke="#4A98A8" strokeWidth="2" fill="#fff" />
        <path d="M28 35 L25 52" stroke="#4A98A8" strokeWidth="2" strokeLinecap="round" />
        <path d="M42 35 L45 52" stroke="#4A98A8" strokeWidth="2" strokeLinecap="round" />
        <path d="M28 35 C29 41 41 41 42 35" stroke="#4A98A8" strokeWidth="2" fill="none" />
        <path d="M28 42 L20 48" stroke="#4A98A8" strokeWidth="2" strokeLinecap="round" />
        <line x1="20" y1="48" x2="17" y2="62" stroke="#4A98A8" strokeWidth="2.5" strokeLinecap="round" />
        <rect x="22" y="52" width="28" height="5" rx="2.5" fill="#BFE0E5" />
        <rect x="50" y="36" width="16" height="20" rx="2" stroke="#4A98A8" strokeWidth="1.5" fill="#fff" />
        <line x1="53" y1="41" x2="63" y2="41" stroke="#4A98A8" strokeWidth="1.5" />
        <line x1="53" y1="45" x2="63" y2="45" stroke="#4A98A8" strokeWidth="1.5" />
        <line x1="53" y1="49" x2="60" y2="49" stroke="#4A98A8" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    title: 'Youth Skill Gap',
    paragraphs: ['67% of young adults lack mentorship.', 'Miss chances to volunteer, learn, and build intergenerational connections.'],
    icon: (
      <svg viewBox="0 0 80 80" fill="none">
        <circle cx="40" cy="40" r="38" fill="#EAF5F7" />
        <path d="M40 22 L44 34 L56 34 L46 42 L50 54 L40 46 L30 54 L34 42 L24 34 L36 34 Z" stroke="#4A98A8" strokeWidth="1.8" fill="#fff" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'NGO Challenges',
    paragraphs: ['Struggle to find consistent, skilled volunteers.', 'Limited tools for outreach, impact measurement, and sustainability.'],
    icon: (
      <svg viewBox="0 0 80 80" fill="none">
        <circle cx="40" cy="40" r="38" fill="#EAF5F7" />
        <circle cx="30" cy="32" r="6" stroke="#4A98A8" strokeWidth="1.8" fill="#fff" />
        <circle cx="50" cy="32" r="6" stroke="#4A98A8" strokeWidth="1.8" fill="#fff" />
        <circle cx="40" cy="48" r="6" stroke="#4A98A8" strokeWidth="1.8" fill="#fff" />
        <path d="M24 58 C28 52 52 52 56 58" stroke="#4A98A8" strokeWidth="1.8" fill="none" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function WhyMatters() {
  return (
    <section className="why-matters">
      <div className="container">
        <div className="section-header">
          <ScrollFloat>Why This Matters?</ScrollFloat>
          <p>Loneliness is real. Meaningful connections can change lives</p>
        </div>
        <div className="why-grid">
          {whyCards.map((card) => (
            <ContentTiltedCard key={card.title}>
              <div className="why-card">
              <div className="why-icon">{card.icon}</div>
              <div className="why-text">
                <h3>{card.title}</h3>
                {card.paragraphs.map((p) => <p key={p}>{p}</p>)}
              </div>
              </div>
            </ContentTiltedCard>
          ))}
        </div>
      </div>
    </section>
  );
}

export { CheckIcon };
