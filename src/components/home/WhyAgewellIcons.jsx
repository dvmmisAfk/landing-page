const iconProps = {
  className: 'feat-icon',
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.75,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
};

function IconWrap({ children, animation = 'bob' }) {
  return (
    <span className="why-feature-icon" data-animate={animation} aria-hidden="true">
      {children}
    </span>
  );
}

export function IntergenerationalIcon() {
  return (
    <IconWrap animation="float">
      <svg {...iconProps}>
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    </IconWrap>
  );
}

export function EventActivitiesIcon() {
  return (
    <IconWrap animation="sway">
      <svg {...iconProps}>
        <path d="M8 2v4" />
        <path d="M16 2v4" />
        <rect x="3" y="4" width="18" height="18" rx="2" />
        <path d="M3 10h18" />
        <path d="M8 14h.01" />
        <path d="M12 14h.01" />
        <path d="M16 14h.01" />
        <path d="M8 18h.01" />
        <path d="M12 18h.01" />
      </svg>
    </IconWrap>
  );
}

export function GrowthLearningIcon() {
  return (
    <IconWrap animation="rise">
      <svg {...iconProps}>
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M7 17V7" />
        <path d="M7 17h12" />
        <path d="M9 14l3-4 3 2 4-4" />
      </svg>
    </IconWrap>
  );
}

export function AiMatchmakingIcon() {
  return (
    <IconWrap animation="shimmer">
      <svg {...iconProps}>
        <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .962 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.962 0z" />
        <path d="M20 3v4" />
        <path d="M22 5h-4" />
      </svg>
    </IconWrap>
  );
}

export function SecurePlatformIcon() {
  return (
    <IconWrap animation="breathe">
      <svg {...iconProps}>
        <rect x="3" y="11" width="18" height="11" rx="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    </IconWrap>
  );
}

export function CommunityMarketplaceIcon() {
  return (
    <IconWrap animation="bob">
      <svg {...iconProps}>
        <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
        <path d="M3 6h18" />
        <path d="M16 10a4 4 0 0 1-8 0" />
      </svg>
    </IconWrap>
  );
}
