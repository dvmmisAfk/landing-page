export const NGO_ICON_ASSETS = {
  volunteers: '/assets/ngo/icon-volunteers.png',
  heart: '/assets/ngo/icon-heart.png',
  ai: '/assets/ngo/icon-ai.png',
  analytics: '/assets/ngo/icon-analytics.png',
  document: '/assets/ngo/icon-document.png',
  chartUp: '/assets/ngo/icon-chart-up.png',
  community: '/assets/ngo/icon-community.png',
};

export function NgoFeatureIcon({ src }) {
  return (
    <span className="ngo-feature-icon" aria-hidden="true">
      <img src={src} alt="" width="32" height="32" decoding="async" draggable="false" />
    </span>
  );
}

export function NgoPartnerIcon({ src }) {
  return (
    <span className="ngo-partner-icon-badge" aria-hidden="true">
      <img src={src} alt="" width="32" height="32" decoding="async" draggable="false" />
    </span>
  );
}

export function StepArrowIcon() {
  return (
    <svg className="ngo-step-arrow" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
