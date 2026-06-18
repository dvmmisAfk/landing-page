import AppLink from '../ui/AppLink';
import PressureHeading from '../ui/PressureHeading';
import usePolicyScrollSpy from '../../hooks/usePolicyScrollSpy';

export default function PolicyPage({ title, intro, sections, navItems, relatedLinks = [] }) {
  usePolicyScrollSpy(sections.map((s) => s.id));

  return (
    <div className="policy-page-body">
      <div className="container">
        <aside className="policy-sidebar">
          <ul className="policy-nav">
            {navItems.map((item, index) => (
              <li key={item.id}>
                <a href={`#${item.id}`} className={index === 0 ? 'active' : undefined}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </aside>

        <main className="policy-content">
          <PressureHeading text={title} variant="page" />
          {intro?.map((paragraph) => (
            <p key={paragraph.slice(0, 32)} className="policy-intro">{paragraph}</p>
          ))}
          {sections.map((section) => (
            <div key={section.id} className="policy-sec" id={section.id}>
              <PressureHeading text={section.heading} variant="content" />
              <p>{section.body}</p>
            </div>
          ))}

          {relatedLinks.length > 0 && (
            <aside className="info-related">
              <h3>Related links</h3>
              <ul>
                {relatedLinks.map((link) => (
                  <li key={link.to}>
                    <AppLink to={link.to}>{link.label}</AppLink>
                  </li>
                ))}
              </ul>
            </aside>
          )}
        </main>
      </div>
    </div>
  );
}
