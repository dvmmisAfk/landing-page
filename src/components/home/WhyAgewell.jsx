import PressureHeading from '../ui/PressureHeading';
import {
  AiMatchmakingIcon,
  CommunityMarketplaceIcon,
  EventActivitiesIcon,
  GrowthLearningIcon,
  IntergenerationalIcon,
  SecurePlatformIcon,
} from './WhyAgewellIcons';

const features = [
  {
    title: 'Intergenerational Connections',
    desc: 'Bridge generations through meaningful interactions and shared experiences.',
    icon: <IntergenerationalIcon />,
  },
  {
    title: 'AI-Powered Matchmaking',
    desc: 'Smart algorithms connect the right people for maximum impact.',
    icon: <AiMatchmakingIcon />,
  },
  {
    title: 'Event & Activities',
    desc: 'Join curated trips, workshops and community gatherings',
    icon: <EventActivitiesIcon />,
  },
  {
    title: 'Secure Platform',
    desc: 'Your data is protected and encrypted at every step',
    icon: <SecurePlatformIcon />,
  },
  {
    title: 'Growth Learning',
    desc: 'Continuous skill development and personal growth opportunities.',
    icon: <GrowthLearningIcon />,
  },
  {
    title: 'Community Marketplace',
    desc: 'Buy, Sell and showcase creations in a trusted environment.',
    icon: <CommunityMarketplaceIcon />,
  },
];

export default function WhyAgewell() {
  return (
    <section className="why-agewell" id="how">
      <div className="container">
        <div className="section-header"><PressureHeading text="Why AgeWell?" /></div>
        <div className="features-grid">
          {features.map((feature) => (
            <div key={feature.title} className="feature-item">
              {feature.icon}
              <div>
                <h4>{feature.title}</h4>
                <p>{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
