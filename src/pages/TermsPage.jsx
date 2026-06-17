import { useEffect } from 'react';
import Layout from '../components/layout/Layout';
import PolicyPage from '../components/policy/PolicyPage';
import { ROUTES } from '../routes/paths';

const navItems = [
  { id: 'about-agewell', label: 'About AgeWell' },
  { id: 'eligibility', label: 'Eligibility and User Accounts' },
  { id: 'community', label: 'Community Guidelines' },
  { id: 'responsibility', label: 'User Responsibility' },
  { id: 'events', label: 'Events and Marketplace Services' },
  { id: 'content', label: 'Content, AI and Intellectual Property' },
  { id: 'privacy', label: 'Privacy and Legal' },
];

const sections = [
  {
    id: 'about-agewell',
    heading: '1. About AgeWell',
    body: 'AgeWell is a digital platform that brings together senior citizens, youth, NGOs, institutions, volunteers, mentors, learners, organizers, and marketplace users. The platform supports community engagement, learning opportunities, mentorship, volunteering initiatives, events, wellbeing activities, and meaningful social connections. AgeWell operates solely as a technology facilitator, helping users discover and participate in opportunities while fostering an inclusive and supportive community. It does not provide professional, medical, legal, financial, or employment services.',
  },
  {
    id: 'eligibility',
    heading: '2. Eligibility & Accounts',
    body: 'Users must be at least 13 years old to access and use the platform. By creating an account, users confirm that the information they provide is accurate, current, and lawful. Organizations and NGOs must be properly authorized to operate and offer activities through the platform. Users are responsible for safeguarding their account credentials, managing activities conducted through their accounts, and complying with these Terms and all applicable laws. AgeWell reserves the right to restrict or terminate access where necessary.',
  },
  {
    id: 'community',
    heading: '3. Community Guidelines',
    body: 'AgeWell is committed to maintaining a safe, respectful, and inclusive environment for all users. Members are expected to interact ethically and responsibly across community spaces, messaging, mentoring, volunteering, events, and other platform activities. Harassment, discrimination, abuse, exploitation, misleading conduct, and harmful content are strictly prohibited. Users should show particular respect toward senior citizens and younger participants. AgeWell may remove content or restrict access where necessary to protect the community and uphold platform standards.',
  },
  {
    id: 'responsibility',
    heading: '4. User Responsibility',
    body: "All interactions and opportunities available through the platform are voluntary and undertaken at the user's own discretion. AgeWell does not verify user identities, qualifications, skills, credentials, or claims and does not guarantee outcomes from any activity, interaction, or connection made through the platform. Users are responsible for assessing opportunities, evaluating risks, and making informed decisions before engaging with individuals or organizations. Any decisions made through the platform remain the sole responsibility of the user.",
  },
  {
    id: 'events',
    heading: '5. Events & Marketplace',
    body: "AgeWell may facilitate access to events, trips, activities, volunteering opportunities, and marketplace transactions between users. Participation in these activities is entirely at the user's own discretion and risk. Organizers are responsible for safety arrangements, permissions, and compliance with applicable laws, while buyers and sellers are responsible for their transactions and agreements. AgeWell does not control products, services, pricing, delivery, or refunds and is not liable for disputes, losses, injuries, payment failures, or issues arising from user interactions.",
  },
  {
    id: 'content',
    heading: '6. Content & AI',
    body: "Users retain ownership of the content they create and share on the platform. By submitting content, users grant AgeWell permission to host, display, and distribute it as required for platform operations. Users must not upload illegal, harmful, misleading, defamatory, or infringing material. AgeWell's branding, logos, and proprietary content remain protected. The platform may also provide AI-powered recommendations or assistance to enhance user experience; however, such outputs are informational only and should not be considered professional advice.",
  },
  {
    id: 'privacy',
    heading: '7. Privacy & Legal',
    body: 'Personal information is collected and processed in accordance with the Privacy Policy to support platform functionality, security, and ongoing improvements. AgeWell may suspend or terminate access where these Terms are violated, user conduct poses a risk, or action is required by law. The platform may update these Terms periodically, and continued use constitutes acceptance of any revisions. These Terms are governed by the laws of India, and any disputes shall be subject to the jurisdiction of Indian courts. For inquiries, users may contact support@agewellus.com.',
  },
];

export default function TermsPage() {
  useEffect(() => {
    document.title = 'Terms & Conditions – AgeWell';
  }, []);

  return (
    <Layout ctaVariant="ghost" copyrightYear="2026">
      <PolicyPage
        title="Terms & Conditions"
        navItems={navItems}
        sections={sections}
        relatedLinks={[
          { label: 'Privacy Policy', to: ROUTES.privacy },
          { label: 'Community Guidelines', to: ROUTES.communityGuidelines },
          { label: 'Sales and Refunds', to: ROUTES.salesRefunds },
          { label: 'Contact Us', to: ROUTES.contact },
        ]}
      />
    </Layout>
  );
}
