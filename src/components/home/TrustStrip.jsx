const trustItems = [
  {
    id: 'verified-community',
    label: 'Verified Community',
    icon: (
      <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <path d="M10 2.5L16 5v5c0 3.5-2.5 6.5-6 7.5-3.5-1-6-4-6-7.5V5l6-2.5z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M7 10l2 2 4-4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: 'privacy-first',
    label: 'Privacy First',
    icon: (
      <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <rect x="5" y="9" width="10" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
        <path d="M7.5 9V6.75A2.5 2.5 0 0 1 12.5 6.75V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 'safe-moderated',
    label: 'Safe & Moderated',
    icon: (
      <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <circle cx="7" cy="7.5" r="2.25" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="13" cy="7.5" r="2.25" stroke="currentColor" strokeWidth="1.5" />
        <path d="M3.5 16c0-2.75 1.75-4.5 3.5-4.5M13 11.5c1.75 0 3.5 1.75 3.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M7 11.5c0 0 1-1.25 3-1.25s3 1.25 3 1.25v4.5H7v-4.5z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: 'trusted-seniors',
    label: 'Trusted by Seniors',
    icon: (
      <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <path d="M10 16.5s-5.5-3.5-5.5-7A3.25 3.25 0 0 1 10 6.5a3.25 3.25 0 0 1 5.5 3c0 3.5-5.5 7-5.5 7z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: 'meaningful-connections',
    label: 'Meaningful Connections',
    icon: (
      <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <path d="M10 3v3.5M10 13.5V17M6.5 5.5l2.5 2M11 11l2.5 2M3 10h3.5M13.5 10H17M6.5 14.5l2.5-2M11 9l2.5-2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="10" cy="10" r="2.25" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    id: 'human-centered',
    label: 'Human-Centered Design',
    icon: (
      <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <circle cx="10" cy="7" r="2.75" stroke="currentColor" strokeWidth="1.5" />
        <path d="M5.5 16.5c.75-2.75 2.5-4 4.5-4s3.75 1.25 4.5 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M4 10.5h1.25M14.75 10.5H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 'verified-orgs',
    label: 'Verified Organizations',
    icon: (
      <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <circle cx="10" cy="10" r="6.5" stroke="currentColor" strokeWidth="1.5" />
        <path d="M3.5 10h13M10 3.5c2 2.25 2 10.75 0 13M10 3.5c-2 2.25-2 10.75 0 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 'growing-community',
    label: 'Growing Community',
    icon: (
      <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <path d="M10 3.5l1.35 3.9h4.15l-3.35 2.45 1.3 3.9L10 11.3 6.55 13.75l1.3-3.9-3.35-2.45h4.15L10 3.5z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    ),
  },
];

function TickerRow({ items, hidden = false }) {
  return (
    <ul className="trust-ticker-row" aria-hidden={hidden || undefined}>
      {items.map((item) => (
        <li key={`${hidden ? 'dup-' : ''}${item.id}`} className="trust-ticker-item">
          <span className="trust-ticker-icon">{item.icon}</span>
          <span className="trust-ticker-label">{item.label}</span>
        </li>
      ))}
    </ul>
  );
}

export default function TrustStrip() {
  return (
    <section className="trust-ticker" aria-label="Trust highlights">
      <div className="trust-ticker-viewport">
        <div className="trust-ticker-track">
          <TickerRow items={trustItems} />
          <TickerRow items={trustItems} hidden />
        </div>
      </div>
    </section>
  );
}
