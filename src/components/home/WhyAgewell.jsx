import ScrollFloat from '../ui/ScrollFloat';
import { GlowTiltedCard } from '../ui/GlowTiltedCard';

const features = [
  {
    title: 'Intergenerational Connections',
    desc: 'Bridge generations through meaningful interactions and shared experiences.',
    icon: (
      <svg className="feat-icon" viewBox="0 0 40 40" fill="none">
        <circle cx="14" cy="14" r="6" stroke="currentColor" strokeWidth="1.8" fill="none" />
        <circle cx="28" cy="14" r="6" stroke="currentColor" strokeWidth="1.8" fill="none" />
        <path d="M6 34 C6 28 9.5 24 14 24" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" fill="none" />
        <path d="M28 24 C32.5 24 34 28 34 34" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" fill="none" />
        <path d="M14 24 C14 24 16 22 20 22 C24 22 26 24 26 24 C28 26 28 30 28 34 L12 34 C12 30 12 26 14 24Z" stroke="currentColor" strokeWidth="1.8" fill="none" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'Event & Activities',
    desc: 'Join curated trips, workshops and community gatherings',
    icon: (
      <svg className="feat-icon" viewBox="0 0 40 40" fill="none">
        <rect x="6" y="10" width="28" height="24" rx="3" stroke="currentColor" strokeWidth="1.8" fill="none" />
        <line x1="6" y1="17" x2="34" y2="17" stroke="currentColor" strokeWidth="1.8" />
        <line x1="14" y1="6" x2="14" y2="14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <line x1="26" y1="6" x2="26" y2="14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <rect x="12" y="22" width="6" height="5" rx="1" fill="currentColor" opacity=".3" />
        <rect x="22" y="22" width="6" height="5" rx="1" fill="currentColor" opacity=".3" />
      </svg>
    ),
  },
  {
    title: 'AI-Powered Matchmaking',
    desc: 'Smart algorithms connect the right people for maximum impact.',
    icon: (
      <svg className="feat-icon" viewBox="0 0 40 40" fill="none">
        <circle cx="20" cy="20" r="14" stroke="currentColor" strokeWidth="1.8" fill="none" />
        <path d="M20 10 L22 17 L29 17 L23.5 21.5 L25.5 28.5 L20 24 L14.5 28.5 L16.5 21.5 L11 17 L18 17 Z" stroke="currentColor" strokeWidth="1.8" fill="none" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'Secure Platform',
    desc: 'Your data is protected and encrypted at every step',
    icon: (
      <svg className="feat-icon" viewBox="0 0 40 40" fill="none">
        <rect x="10" y="18" width="20" height="16" rx="3" stroke="currentColor" strokeWidth="1.8" fill="none" />
        <path d="M15 18 L15 13 C15 10.2 17.2 8 20 8 C22.8 8 25 10.2 25 13 L25 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <circle cx="20" cy="27" r="2.5" fill="currentColor" opacity=".5" />
      </svg>
    ),
  },
  {
    title: 'Growth Learning',
    desc: 'Continuous skill development and personal growth opportunities.',
    icon: (
      <svg className="feat-icon" viewBox="0 0 40 40" fill="none">
        <polyline points="6,30 14,20 20,24 28,13 34,16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <circle cx="34" cy="16" r="3" fill="currentColor" opacity=".4" />
      </svg>
    ),
  },
  {
    title: 'Community Marketplace',
    desc: 'Buy, Sell and showcase creations in a trusted environment.',
    icon: (
      <svg className="feat-icon" viewBox="0 0 40 40" fill="none">
        <path d="M8 14 L8 30 C8 31.1 8.9 32 10 32 L30 32 C31.1 32 32 31.1 32 30 L32 14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" fill="none" />
        <path d="M6 14 L34 14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M6 14 L10 8 L30 8 L34 14" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" fill="none" />
        <line x1="20" y1="20" x2="20" y2="27" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <line x1="17" y1="23.5" x2="23" y2="23.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function WhyAgewell() {
  return (
    <section className="why-agewell" id="how">
      <div className="container">
        <div className="section-header"><ScrollFloat>Why AgeWell?</ScrollFloat></div>
        <div className="features-grid">
          {features.map((feature) => (
            <GlowTiltedCard key={feature.title} className="feature-tilt">
              <div className="feature-item">
              {feature.icon}
              <div><h4>{feature.title}</h4><p>{feature.desc}</p></div>
              </div>
            </GlowTiltedCard>
          ))}
        </div>
      </div>
    </section>
  );
}
