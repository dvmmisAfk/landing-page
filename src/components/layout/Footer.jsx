import AppLink from '../ui/AppLink';
import { ROUTES, SOCIAL_LINKS } from '../../routes/paths';

const socialIcons = {
  Facebook: <path d="M9.5 16 L9.5 9.5 L11.5 9.5 L12 7.5 L9.5 7.5 L9.5 6.3 C9.5 5.7 9.8 5.1 10.8 5.1 L12.1 5.1 L12.1 3.1 C12.1 3.1 10.9 2.9 9.8 2.9 C7.8 2.9 6.5 4.1 6.5 6 L6.5 7.5 L4.5 7.5 L4.5 9.5 L6.5 9.5 L6.5 16 Z" stroke="currentColor" strokeWidth="1.3" fill="none" strokeLinejoin="round" />,
  Twitter: <path d="M2 3 L7.5 9.5 L2 15 L3.5 15 L8.2 10.5 L12 15 L15 15 L9.3 8.2 L14.5 3 L13 3 L8.7 7.2 L5 3 Z" stroke="currentColor" strokeWidth="1.3" fill="none" strokeLinejoin="round" />,
  Discord: <path d="M12.5 3.5 C11.5 3.1 10.5 2.8 9.5 2.7 C9.4 2.9 9.2 3.2 9 3.5 C8 3.3 7 3.3 6 3.5 C5.8 3.2 5.6 2.9 5.5 2.7 C4.5 2.8 3.5 3.1 2.5 3.5 C0.7 6.2 0.2 8.8 0.5 11.4 C1.7 12.3 2.9 12.8 4 13.1 C4.3 12.7 4.6 12.2 4.8 11.7 C4.3 11.5 3.8 11.3 3.4 11 C3.5 10.9 3.7 10.8 3.8 10.7 C6.5 11.9 9.5 11.9 12.2 10.7 C12.3 10.8 12.5 10.9 12.6 11 C12.2 11.3 11.7 11.5 11.2 11.7 C11.4 12.2 11.7 12.7 12 13.1 C13.1 12.8 14.3 12.3 15.5 11.4 C15.8 8.4 15 5.9 12.5 3.5 Z" stroke="currentColor" strokeWidth="1.2" fill="none" />,
  Telegram: <><path d="M2 8.5 L15 3 L11 14 L8 11 L5 13 L5.5 9.5 Z" stroke="currentColor" strokeWidth="1.3" fill="none" strokeLinejoin="round" /><path d="M5.5 9.5 L8.5 7" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" /></>,
  Instagram: <><rect x="2.5" y="2.5" width="12" height="12" rx="3.5" stroke="currentColor" strokeWidth="1.3" /><circle cx="8.5" cy="8.5" r="3" stroke="currentColor" strokeWidth="1.3" /><circle cx="12.5" cy="4.5" r=".8" fill="currentColor" /></>,
  Threads: <><path d="M11 8.5 C11 10.7 9.9 12 8.5 12 C7.1 12 6 10.7 6 8.5 C6 6.3 7.1 5 8.5 5 C9.9 5 11 6.3 11 8.5 Z" stroke="currentColor" strokeWidth="1.3" fill="none" /><path d="M8.5 5 C8.5 5 10 5 11 6.5 C12 8 11.5 11 10 12.5 C8.5 14 5 14 4 12.5 C3 11 3 6 5 4.5 C6.5 3.5 8.5 3.5 10 4" stroke="currentColor" strokeWidth="1.3" fill="none" strokeLinecap="round" /></>,
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
              <a href="mailto:support@agewellus.com">
                <svg viewBox="0 0 14 14" fill="none"><rect x="1" y="3" width="12" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.3" fill="none" /><path d="M1 4 L7 8 L13 4" stroke="currentColor" strokeWidth="1.3" fill="none" /></svg>
                support@agewellus.com
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
