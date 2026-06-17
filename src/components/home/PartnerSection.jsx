import AppLink from '../ui/AppLink';
import { GlowTiltedCard } from '../ui/GlowTiltedCard';
import { ROUTES } from '../../routes/paths';

const badges = [
  {
    label: 'NGO Partnerships',
    icon: (
      <svg viewBox="0 0 22 22" fill="none" aria-hidden="true">
        <rect x="3" y="6" width="16" height="13" rx="1" stroke="currentColor" strokeWidth="1.5" />
        <path d="M7 6V4h8v2" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    label: 'Community',
    icon: (
      <svg viewBox="0 0 19 19" fill="none" aria-hidden="true">
        <path d="M9.5 16 C9.5 16 3 12 3 7.5 C3 5 5 3 7.5 3 C8.5 3 9.5 3.5 9.5 4.5 C9.5 3.5 10.5 3 11.5 3 C14 3 16 5 16 7.5 C16 12 9.5 16 9.5 16Z" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    label: 'Impact Driven',
    icon: (
      <svg viewBox="0 0 22 22" fill="none" aria-hidden="true">
        <path d="M11 3C7.5 3 5 6 5 9c0 5 6 10 6 10s6-5 6-10c0-3-2.5-6-6-6z" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="11" cy="9" r="2" fill="currentColor" />
      </svg>
    ),
  },
];

export default function PartnerSection() {
  return (
    <section className="partner-section">
      <div className="container">
        <GlowTiltedCard>
          <div className="partner-inner">
            <div className="partner-logo-wrap" aria-hidden="true">
              <img src="/assets/partner.png" alt="" width="118" height="114" />
            </div>

            <div className="partner-content">
              <div className="partner-body">
                <p className="partner-label">Partner With Us</p>
                <h2 className="partner-title">Join Hands With AgeWell</h2>
                <p className="partner-desc">
                  We collaborate with NGOs, organizers, and institutions to build meaningful
                  senior-youth engagement that creates lasting in communities.
                </p>
              </div>

              <div className="partner-cta">
                <AppLink to={ROUTES.contact} className="btn btn-outline-teal partner-contact-btn">
                  Contact Us
                </AppLink>
              </div>

              <div className="partner-badges">
                {badges.map((badge) => (
                  <span key={badge.label} className="partner-badge">
                    {badge.icon}
                    {badge.label}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </GlowTiltedCard>
      </div>
    </section>
  );
}
