import AppLink from '../ui/AppLink';
import ScrollFloat from '../ui/ScrollFloat';
import { ContentTiltedCard } from '../ui/TiltedCard';
import { CheckIcon } from './WhyMatters';
import HashLink from '../ui/HashLink';
import { ROUTES } from '../../routes/paths';

const roles = [
  {
    image: '/assets/role-senior.png',
    alt: 'Senior citizen',
    title: 'For Senior Citizen',
    subtitle: 'Age Gradually, Live Fully',
    to: ROUTES.forSeniors,
    desc: 'Join a vibrant community where your wisdom is valued and your days are filled with joy, purpose, and meaningful connections.',
    features: ['AI-powered daily dashboard', 'Community groups & activities'],
  },
  {
    image: '/assets/role-youth.png',
    alt: 'Young volunteer',
    title: 'For Young Volunteers',
    subtitle: 'Learn, Earn, Empower',
    to: ROUTES.forYouth,
    desc: 'Make a difference while gaining valuable real-world experience through volunteering, teaching, and connecting with seniors.',
    features: ['Volunteer opportunities', 'Teach & share your skills'],
  },
  {
    image: '/assets/role-ngo.png',
    alt: 'NGO organizer',
    title: 'For NGO Organizers',
    subtitle: 'Create Impact, Build Community',
    to: ROUTES.forNgo,
    desc: 'Join a vibrant community where your wisdom is valued and your days are filled with joy, purpose, and meaningful connections',
    features: ['Event trip & management', 'Volunteer coordination'],
  },
];

export default function ExploreRole() {
  return (
    <section className="explore-role" id="explore">
      <div className="container">
        <div className="section-header">
          <ScrollFloat>Explore Your Role</ScrollFloat>
          <p>Select your role to discover how AgeWell can enrich your life and strengthen our community</p>
        </div>
        <div className="role-grid">
          {roles.map((role) => (
            <ContentTiltedCard key={role.title}>
              <div className="role-card">
              <div className="role-card-head">
                <div className="role-avatar">
                  <img src={role.image} alt={role.alt} width="85" height="85" />
                </div>
                <div>
                  <div className="role-title">{role.title}</div>
                  <div className="role-subtitle">{role.subtitle}</div>
                </div>
              </div>
              <p className="role-desc">{role.desc}</p>
              <ul className="role-features">
                {role.features.map((feature) => (
                  <li key={feature}><CheckIcon />{feature}</li>
                ))}
              </ul>
              <div className="role-card-actions">
                <HashLink hash="waitlist" className="btn btn-primary">Join Waitlist</HashLink>
                <AppLink to={role.to} className="btn btn-ghost">Learn more</AppLink>
              </div>
              </div>
            </ContentTiltedCard>
          ))}
        </div>
      </div>
    </section>
  );
}
