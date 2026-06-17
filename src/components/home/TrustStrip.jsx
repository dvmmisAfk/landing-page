import { GlowTiltedCard } from '../ui/GlowTiltedCard';

const trustItems = [
  {
    label: 'Verified Community',
    sub: 'Trusted and reviewed members.',
    icon: (
      <svg className="trust-icon" viewBox="0 0 44 44" fill="none">
        <path d="M22 5 L36 10 L36 22 C36 30 29 37 22 39 C15 37 8 30 8 22 L8 10 Z" stroke="#177B96" strokeWidth="2" fill="#E4EFF2" strokeLinejoin="round" />
        <path d="M16 22 L20 26 L28 17" stroke="#177B96" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    label: 'Privacy First',
    sub: 'Your information stays protected',
    divider: true,
    icon: (
      <svg className="trust-icon" viewBox="0 0 44 44" fill="none">
        <rect x="10" y="20" width="24" height="18" rx="3" stroke="#177B96" strokeWidth="2" fill="#E4EFF2" />
        <path d="M16 20 L16 15 C16 11.7 18.7 9 22 9 C25.3 9 28 11.7 28 15 L28 20" stroke="#177B96" strokeWidth="2" strokeLinecap="round" />
        <circle cx="22" cy="29" r="2.5" fill="#177B96" />
        <line x1="22" y1="31.5" x2="22" y2="34" stroke="#177B96" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    label: 'Safe & Moderated',
    sub: 'Respectful and monitored interactions.',
    divider: true,
    icon: (
      <svg className="trust-icon" viewBox="0 0 44 44" fill="none">
        <circle cx="16" cy="16" r="5" stroke="#177B96" strokeWidth="2" fill="#E4EFF2" />
        <circle cx="28" cy="16" r="5" stroke="#177B96" strokeWidth="2" fill="#E4EFF2" />
        <path d="M7 35 C7 29 11.5 24 16 24" stroke="#177B96" strokeWidth="2" strokeLinecap="round" fill="none" />
        <path d="M28 24 C32.5 24 37 29 37 35" stroke="#177B96" strokeWidth="2" strokeLinecap="round" fill="none" />
        <path d="M16 24 C16 24 18 22 22 22 C26 22 28 24 28 24 C28 24 30 27 30 31 L14 31 C14 27 16 24 16 24Z" stroke="#177B96" strokeWidth="2" fill="#E4EFF2" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export default function TrustStrip() {
  return (
    <div className="trust-strip">
      <div className="container">
        <GlowTiltedCard backgroundColor="#FAFCFB">
          <div className="trust-inner">
            {trustItems.map((item) => (
              <div key={item.label} className={`trust-item${item.divider ? ' trust-divider' : ''}`}>
                <div className="trust-icon-wrap">{item.icon}</div>
                <div>
                  <div className="trust-label">{item.label}</div>
                  <div className="trust-sub">{item.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </GlowTiltedCard>
      </div>
    </div>
  );
}
