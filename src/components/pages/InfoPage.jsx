import AppLink from '../ui/AppLink';
import PressureHeading from '../ui/PressureHeading';

function PageLink({ to, className, children }) {
  if (to.startsWith('mailto:') || to.startsWith('http://') || to.startsWith('https://')) {
    const external = to.startsWith('http');
    return (
      <a
        href={to}
        className={className}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      >
        {children}
      </a>
    );
  }

  return <AppLink to={to} className={className}>{children}</AppLink>;
}

export default function InfoPage({
  title,
  intro,
  sections = [],
  relatedLinks = [],
  sitemapGroups = [],
  cta,
}) {
  return (
    <div className="info-page">
      <div className="stub-hero">
        <div className="container">
          <PressureHeading text={title} variant="page" />
          {intro && <p className="info-intro">{intro}</p>}
        </div>
      </div>

      <div className="container info-content">
        {sections.map((section) => (
          <section key={section.heading} className="info-sec">
            <PressureHeading text={section.heading} variant="content" />
            {section.paragraphs?.map((paragraph) => (
              <p key={paragraph.slice(0, 40)}>{paragraph}</p>
            ))}
            {section.list && (
              <ul className="info-list">
                {section.list.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            )}
          </section>
        ))}

        {sitemapGroups.map((group) => (
          <section key={group.heading} className="info-sec">
            <PressureHeading text={group.heading} variant="content" />
            <ul className="info-sitemap">
              {group.links.map((link) => (
                <li key={link.to}>
                  <PageLink to={link.to}>{link.label}</PageLink>
                </li>
              ))}
            </ul>
          </section>
        ))}

        {cta && (
          <div className="info-cta">
            <PageLink to={cta.to} className="btn btn-primary">{cta.label}</PageLink>
          </div>
        )}

        {relatedLinks.length > 0 && (
          <aside className="info-related">
            <h3>Related links</h3>
            <ul>
              {relatedLinks.map((link) => (
                <li key={link.to}>
                  <PageLink to={link.to}>{link.label}</PageLink>
                </li>
              ))}
            </ul>
          </aside>
        )}
      </div>
    </div>
  );
}
