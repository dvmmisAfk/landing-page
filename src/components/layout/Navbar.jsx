import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import AppLink from '../ui/AppLink';
import { ROUTES } from '../../routes/paths';

const navItems = [
  { label: 'Explore', to: ROUTES.explore },
  { label: 'For Senior', to: ROUTES.forSeniors },
  { label: 'For Youth', to: ROUTES.forYouth },
  { label: 'For NGO', to: ROUTES.forNgo },
];

function WaitlistCta({ variant, onNavigate }) {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const className = `btn btn-${variant === 'ghost' ? 'ghost' : 'teal-out'}`;

  const handleClick = (event) => {
    event.preventDefault();
    onNavigate?.();

    if (pathname === '/') {
      document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      window.history.pushState(null, '', '#waitlist');
      return;
    }

    navigate({ pathname: '/', hash: '#waitlist' });
  };

  return (
    <a href="#waitlist" className={className} onClick={handleClick}>
      Join Waitlist
    </a>
  );
}

export default function Navbar({ activePath, ctaVariant = 'teal-out' }) {
  const location = useLocation();
  const currentPath = activePath ?? location.pathname;
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname, location.hash]);

  useEffect(() => {
    document.body.classList.toggle('nav-open', menuOpen);
    return () => document.body.classList.remove('nav-open');
  }, [menuOpen]);

  return (
    <nav className="navbar">
      <div className="container nav-inner">
        <AppLink to="/" className="nav-brand" aria-label="AgeWell home" onClick={closeMenu}>
          <span className="nav-brand-mark" aria-hidden="true">
            <img
              className="nav-logo"
              src="/assets/logo.png"
              alt=""
              width="52"
              height="49"
            />
          </span>
          <span className="nav-brand-text">
            <span className="brand-name">AgeWell</span>
            <span className="brand-tagline">Where Generations Grow Together</span>
          </span>
        </AppLink>

        <nav className={`nav-links${menuOpen ? ' is-open' : ''}`} id="main-nav" aria-label="Main">
            {navItems.map((item) => (
              <AppLink
                key={item.label}
                to={item.to}
                className={currentPath === item.to ? 'active' : undefined}
                onClick={closeMenu}
              >
                {item.label}
              </AppLink>
            ))}
            <div className="nav-mobile-cta">
              <WaitlistCta variant={ctaVariant} onNavigate={closeMenu} />
            </div>
        </nav>

        <div className="nav-actions">
            <div className="nav-desktop-cta">
              <WaitlistCta variant={ctaVariant} />
            </div>

            <button
              type="button"
              className={`nav-toggle${menuOpen ? ' is-open' : ''}`}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              aria-controls="main-nav"
              onClick={() => setMenuOpen((open) => !open)}
            >
              <span className="nav-toggle-bar" />
              <span className="nav-toggle-bar" />
              <span className="nav-toggle-bar" />
            </button>
        </div>
      </div>
    </nav>
  );
}
