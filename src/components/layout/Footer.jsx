import AppLink from '../ui/AppLink';
import { ROUTES, SITE, SOCIAL_LINKS } from '../../routes/paths';

const socialIcons = {
  Facebook: <path d="M9.5 16 L9.5 9.5 L11.5 9.5 L12 7.5 L9.5 7.5 L9.5 6.3 C9.5 5.7 9.8 5.1 10.8 5.1 L12.1 5.1 L12.1 3.1 C12.1 3.1 10.9 2.9 9.8 2.9 C7.8 2.9 6.5 4.1 6.5 6 L6.5 7.5 L4.5 7.5 L4.5 9.5 L6.5 9.5 L6.5 16 Z" stroke="currentColor" strokeWidth="1.3" fill="none" strokeLinejoin="round" />,
  Instagram: <><rect x="2.5" y="2.5" width="12" height="12" rx="3.5" stroke="currentColor" strokeWidth="1.3" /><circle cx="8.5" cy="8.5" r="3" stroke="currentColor" strokeWidth="1.3" /><circle cx="12.5" cy="4.5" r=".8" fill="currentColor" /></>,
  LinkedIn: <><path d="M3.5 6.5v7" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" /><circle cx="3.5" cy="3.8" r="1" fill="currentColor" /><path d="M7 6.5v7" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" /><path d="M7 10c0-1.7 1.3-3 3-3s3 1.3 3 3v3.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" /></>,
};

const footerNav = {
  product: [
    { label: 'Explore', to: ROUTES.explore },
    { label: 'Community', to: ROUTES.community },
    { label: 'For Seniors', to: ROUTES.forSeniors },
    { label: 'For Youths', to: ROUTES.forYouth },
    { label: 'For NGOs', to: ROUTES.forNgo },
  ],
  company: [
    { label: 'About Us', to: ROUTES.about },
    { label: 'Our Mission', to: ROUTES.mission },
    { label: 'Careers', to: ROUTES.careers },
    { label: 'Contact Us', to: ROUTES.contact },
  ],
  support: [
    { label: 'Help Center', to: ROUTES.help },
    { label: 'Community Guidelines', to: ROUTES.communityGuidelines },
    { label: 'Safety & Security', to: ROUTES.safety },
    { label: 'Report Issue', to: ROUTES.reportIssue },
    { label: 'Feedback', to: ROUTES.feedback },
    { label: 'Support', to: ROUTES.support },
  ],
  legal: [
    { label: 'Privacy Policy', to: ROUTES.privacy },
    { label: 'Terms & Conditions', to: ROUTES.terms },
    { label: 'Cookie Policy', to: ROUTES.cookies },
    { label: 'Our Team', to: ROUTES.teams },
    { label: 'Contact Us', to: ROUTES.contact },
  ],
};

const footerBottom = [
  { label: 'Privacy Policy', to: ROUTES.privacy },
  { label: 'Terms of Use', to: ROUTES.terms },
  { label: 'Sales and Refunds', to: ROUTES.salesRefunds },
  { label: 'Legal', to: ROUTES.legal },
  { label: 'Site Map', to: ROUTES.sitemap },
];

export default function Footer({ copyrightYear = '2026' }) {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <AppLink to={ROUTES.home} className="footer-brand-row">
              <img src="/assets/logo.png" alt="" width="34" height="32" style={{ objectFit: 'contain' }} />
              <span className="footer-brand-name">AgeWell</span>
            </AppLink>
            <div className="footer-contact">
              <AppLink to={ROUTES.contact}>
                <svg viewBox="0 0 14 14" fill="none"><path d="M7 1 C4.8 1 3 2.8 3 5 C3 8 7 13 7 13 C7 13 11 8 11 5 C11 2.8 9.2 1 7 1Z" stroke="currentColor" strokeWidth="1.3" fill="none" /><circle cx="7" cy="5" r="1.5" fill="currentColor" /></svg>
                New Delhi, India
              </AppLink>
              <a href={SITE.website} target="_blank" rel="noopener noreferrer">
                <svg viewBox="0 0 14 14" fill="none"><circle cx="7" cy="7" r="5.5" stroke="currentColor" strokeWidth="1.3" /><path d="M2.5 7h9M7 2.5c1.5 1.8 2.3 3.6 2.3 4.5S8.5 9.7 7 11.5M7 2.5C5.5 4.3 4.7 6.1 4.7 7s.8 2.7 2.3 4.5" stroke="currentColor" strokeWidth="1.3" /></svg>
                www.agewellus.com
              </a>
              <a href={`mailto:${SITE.email}`}>
                <svg viewBox="0 0 14 14" fill="none"><rect x="1" y="3" width="12" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.3" fill="none" /><path d="M1 4 L7 8 L13 4" stroke="currentColor" strokeWidth="1.3" fill="none" /></svg>
                {SITE.email}
              </a>
            </div>
          </div>

          {Object.entries(footerNav).map(([key, links]) => (
            <div key={key} className="footer-col">
              <h4>{key.charAt(0).toUpperCase() + key.slice(1)}</h4>
              <ul className="footer-links">
                {links.map((link) => (
                  <li key={link.to}><AppLink to={link.to}>{link.label}</AppLink></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="footer-social-bar">
        <span className="follow-label">Follow us</span>
        <div className="social-links">
          {SOCIAL_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="social-link"
              aria-label={link.label}
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg viewBox="0 0 17 17" fill="none">{socialIcons[link.label]}</svg>
            </a>
          ))}
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-links">
            {footerBottom.map((link) => (
              <AppLink key={link.to} to={link.to}>{link.label}</AppLink>
            ))}
          </div>
          <p className="copyright">© {copyrightYear} All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
}
