import { ContentTiltedCard } from '../ui/TiltedCard';

const FEATURES = [
  {
    title: 'Mobile First',
    desc: 'Designed for all generations',
    icon: '/assets/app-icon-mobile.svg',
  },
  {
    title: 'Easy Access',
    desc: 'Simple, quick and access',
    icon: '/assets/app-icon-access.svg',
  },
  {
    title: 'Early Access',
    desc: 'Get exclusive updates',
    icon: '/assets/app-icon-lock.svg',
  },
];

export default function AppSection() {
  return (
    <section className="app-section" id="waitlist">
      <div className="container app-inner">

          {/* Phone mockup */}
          <div className="app-phone" aria-hidden="true">
            <img src="/assets/mobile.png" alt="" />
          </div>

          {/* Copy */}
          <div className="app-copy">
            <p className="app-eyebrow">Coming Soon</p>
            <h2 className="app-title">Get Our App</h2>
            <p className="app-lead">
              Be the first to experience the future of intergenerational connection.
            </p>
            <a
              href="https://play.google.com/store"
              className="app-store-link"
              aria-label="Get it on Google Play"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/assets/download.png"
                alt="Get it on Google Play"
                className="app-store-badge"
                width="200"
                height="62"
              />
            </a>
          </div>

          {/* Feature list */}
          <ul className="app-feature-list">
            {FEATURES.map((f) => (
              <li key={f.title} className="app-feature-item">
                <span className="app-feature-icon" aria-hidden="true">
                  <img src={f.icon} alt="" width="34" height="34" />
                </span>
                <span className="app-feature-text">
                  <strong>{f.title}</strong>
                  <span>{f.desc}</span>
                </span>
              </li>
            ))}
          </ul>

          {/* Waitlist form */}
          <ContentTiltedCard className="app-waitlist-tilt">
            <form className="app-waitlist" onSubmit={(e) => e.preventDefault()}>
              <h3>Join the Waitlist</h3>
              <label className="app-field">
                <span>Name</span>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter Your Name"
                  autoComplete="name"
                />
              </label>
              <label className="app-field">
                <span>Email Address</span>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter Your Email Address"
                  autoComplete="email"
                />
              </label>
              <button type="submit" className="btn btn-primary app-waitlist-btn">
                Join
              </button>
            </form>
          </ContentTiltedCard>

      </div>
    </section>
  );
}
