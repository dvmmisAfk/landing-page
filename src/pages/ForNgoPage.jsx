import { useEffect } from 'react';
import Layout from '../components/layout/Layout';
import AppLink from '../components/ui/AppLink';
import HashLink from '../components/ui/HashLink';
import {
  NGO_ICON_KEYS,
  NgoCtaIcon,
  NgoFeatureIcon,
  NgoPartnerIcon,
  StepArrowIcon,
} from '../components/for-ngo/ForNgoIcons';
import { ROUTES } from '../routes/paths';

const stats = [
  { value: '12+', label: 'Partner Discussions' },
  { value: '6+', label: 'Pilot Programs in Progress' },
  { value: '3', label: 'Community Segments' },
  { value: '1', label: 'Missions' },
];

const audiences = [
  {
    title: 'Organizations',
    desc: 'Work with a trusted network of organizations.',
    icon: '/assets/ngo/icon-audience-organizations.png',
  },
  {
    title: 'Healthcare',
    desc: 'Wellness and engagements initiatives',
    icon: '/assets/ngo/icon-audience-healthcare.png',
  },
  {
    title: 'Universities & CSR',
    desc: 'Intergenerational impact programs',
    icon: '/assets/ngo/icon-audience-university.png',
  },
];

const platformFeatures = [
  {
    title: 'Volunteer Management',
    desc: 'Recruit and engage volunteers efficiently.',
    icon: NGO_ICON_KEYS.volunteers,
  },
  {
    title: 'Senior Engagement',
    desc: ['Run community events, wellness initiatives', 'and learning programs.'],
    icon: NGO_ICON_KEYS.heart,
  },
  {
    title: 'AI-Powered Support',
    desc: ['Smart recommendations and resource', 'matching to save time.'],
    icon: NGO_ICON_KEYS.ai,
  },
  {
    title: 'Impact Analytics',
    desc: ['Measure outcomes, track participation', 'and generate reports.'],
    icon: NGO_ICON_KEYS.analytics,
  },
];

const partnerBenefits = [
  {
    title: 'Expand Reach',
    lines: [
      'Connect with more seniors,',
      'volunteers and communities',
      'across your network.',
    ],
    icon: NGO_ICON_KEYS.volunteers,
  },
  {
    title: 'Reduce Administrative Work',
    lines: [
      'Streamline registrations,',
      'communication and reporting',
      'in one platform.',
    ],
    icon: NGO_ICON_KEYS.document,
  },
  {
    title: 'Increase Participation',
    lines: [
      'Create engaging programs that',
      'encourage involvement across',
      'generations.',
    ],
    icon: NGO_ICON_KEYS.heart,
  },
  {
    title: 'Strengthen Funding Opportunities',
    lines: [
      'Generate credible impact',
      'reports for grants and CSR',
      'initiatives.',
    ],
    icon: NGO_ICON_KEYS.chartUp,
    titleLines: ['Strengthen Funding', 'Opportunities'],
  },
];

const steps = [
  {
    number: 1,
    title: 'Join',
    lines: ['Sign up and tell us', 'about your', 'organization.'],
  },
  {
    number: 2,
    title: 'Setup',
    lines: ['Complete onboarding', 'and set up your', 'organization profile.'],
  },
  {
    number: 3,
    title: 'Launch',
    lines: ['Create programs and', 'invite volunteers to', 'get started.'],
  },
  {
    number: 4,
    title: 'Connect',
    lines: ['Engage seniors and', 'build meaningful', 'connections.'],
  },
  {
    number: 5,
    title: 'Measure',
    lines: ['Track impact and', 'improve outcomes', 'continuously.'],
  },
];

function FeatureText({ desc }) {
  if (Array.isArray(desc)) {
    return desc.map((line) => <p key={line}>{line}</p>);
  }
  return <p>{desc}</p>;
}

export default function ForNgoPage() {
  useEffect(() => {
    document.title = 'For NGOs – AgeWell';
  }, []);

  return (
    <Layout activePath={ROUTES.forNgo}>
      <div className="for-ngo-page">
        <section className="ngo-hero" aria-label="For NGO organizers">
          <div className="container">
            <div className="ngo-hero-inner">
              <div className="ngo-hero-content">
                <span className="ngo-hero-badge">For Organisations</span>
                <h1>For Organisers</h1>
                <p className="ngo-hero-desc">
                  Partner with us to plan, coordinate and scale impactful programs for older adults.
                  Engage volunteers, streamline operations, and measure impact through one unified platform
                  designed for meaningful aging experiences.
                </p>
                <div className="ngo-hero-actions">
                  <HashLink hash="waitlist" className="btn btn-primary btn-lg">
                    Join the Waitlist
                    <span className="ngo-hero-arrow" aria-hidden="true">→</span>
                  </HashLink>
                  <AppLink to={ROUTES.contact} className="btn btn-outline-teal btn-lg">
                    Contact Us
                  </AppLink>
                </div>
              </div>
              <div className="ngo-hero-visual">
                <img
                  className="ngo-hero-image"
                  src="/assets/ngo/hero-visual.png"
                  alt=""
                  width="540"
                  height="462"
                  decoding="async"
                />
              </div>
            </div>

            <ul className="ngo-stats-grid" aria-label="Partnership statistics">
              {stats.map((item, index) => (
                <li key={item.label} className="ngo-stat">
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                  {index < stats.length - 1 && <span className="ngo-stat-divider" aria-hidden="true" />}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="ngo-audience">
          <div className="container">
            <h2 className="ngo-section-title">Who It&apos;s For</h2>
            <div className="ngo-audience-card">
              {audiences.map((item) => (
                <div key={item.title} className="ngo-audience-item">
                  <img
                    className="ngo-audience-icon"
                    src={item.icon}
                    alt=""
                    width="75"
                    height="75"
                    decoding="async"
                    aria-hidden="true"
                  />
                  <div className="ngo-audience-copy">
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="ngo-platform">
          <div className="container">
            <div className="ngo-platform-panel">
              <div className="ngo-platform-copy">
                <p className="ngo-eyebrow">
                  TOOLS BUILT FOR
                  <br />
                  MEANINGFUL IMPACT
                </p>
                <h2 className="ngo-platform-title">
                  Everything you need,
                  <br />
                  in one platform.
                </h2>
                <ul className="ngo-feature-list">
                  {platformFeatures.map((feature) => (
                    <li key={feature.title} className="ngo-feature-row">
                      <NgoFeatureIcon icon={feature.icon} />
                      <div>
                        <h3>{feature.title}</h3>
                        <FeatureText desc={feature.desc} />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="ngo-dashboard-wrap">
                <img
                  className="ngo-dashboard"
                  src="/assets/ngo/dashboard.png"
                  alt="AgeWell NGO dashboard overview with programs, participation trends, and analytics"
                  width="793"
                  height="602"
                  decoding="async"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="ngo-impact" aria-label="Impact goal">
          <div className="container">
            <p className="ngo-impact-value">10,000+</p>
            <h2 className="ngo-impact-title">Lives We Aim To Impact</h2>
            <p className="ngo-impact-desc">
              Through technology, programs, and partnerships that bring generations together.
            </p>
          </div>
        </section>

        <section className="ngo-partner">
          <div className="container">
            <h2 className="ngo-section-title">Why Partner With AgeWell?</h2>
            <div className="ngo-partner-grid">
              {partnerBenefits.map((card) => (
                <article key={card.title} className="ngo-partner-card">
                  <div className="ngo-partner-icon">
                    <NgoPartnerIcon icon={card.icon} />
                  </div>
                  {card.titleLines ? (
                    <h3>
                      {card.titleLines.map((line) => (
                        <span key={line}>{line}</span>
                      ))}
                    </h3>
                  ) : (
                    <h3>{card.title}</h3>
                  )}
                  <div className="ngo-partner-copy">
                    {card.lines.map((line) => (
                      <p key={line}>{line}</p>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="ngo-steps">
          <div className="container">
            <h2 className="ngo-section-title">How It Works</h2>
            <ol className="ngo-steps-grid">
              {steps.map((step, index) => (
                <li key={step.title} className="ngo-step">
                  <div className="ngo-step-marker">{step.number}</div>
                  <h3>{step.title}</h3>
                  <div className="ngo-step-copy">
                    {step.lines.map((line) => (
                      <p key={line}>{line}</p>
                    ))}
                  </div>
                  {index < steps.length - 1 && <StepArrowIcon />}
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="ngo-cta">
          <div className="container">
            <div className="ngo-cta-card">
              <NgoCtaIcon />
              <div className="ngo-cta-copy">
                <h2>Ready to Build Stronger Communities?</h2>
                <p>
                  Partner with AgeWell to create meaningful
                  <br />
                  experiences and lasting impact.
                </p>
              </div>
              <AppLink to={ROUTES.contact} className="btn btn-outline-teal ngo-cta-btn">
                Partner with Us
              </AppLink>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
