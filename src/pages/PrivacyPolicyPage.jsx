import { useEffect } from 'react';
import Layout from '../components/layout/Layout';
import PolicyPage from '../components/policy/PolicyPage';
import { ROUTES } from '../routes/paths';

const navItems = [
  { id: 'about', label: 'About This Privacy Policy' },
  { id: 'collect', label: 'Information We Collect' },
  { id: 'use', label: 'Use of Information' },
  { id: 'payments', label: 'Payments and User Rights' },
  { id: 'ai', label: 'AI Features and the Information Sharing' },
  { id: 'retention', label: 'Data Retention and Security' },
  { id: 'legal', label: 'Legal and Contact' },
];

const sections = [
  {
    id: 'about',
    heading: '1. About This Privacy Policy',
    body: 'This Privacy Policy applies to all users of AgeWell, including seniors, youth, NGOs, institutions, organizers, volunteers, mentors, learners, and marketplace participants. It explains how personal information is collected, used, stored, and protected while using the Platform. This Policy should be read together with the Terms & Conditions and other applicable platform policies.',
  },
  {
    id: 'collect',
    heading: '2. Information We Collect',
    body: 'AgeWell may collect personal information such as names, contact details, profile information, preferences, and organization details where applicable. We may also collect technical information including device data, browser information, IP addresses, usage patterns, and platform activity. Content shared through profiles, messages, posts, comments, events, opportunities, and marketplace listings may also be processed as part of platform operations.',
  },
  {
    id: 'use',
    heading: '3. Use of Information',
    body: 'Information collected by AgeWell is used to create and manage user accounts, facilitate platform features and interactions, review listings and activities, improve user experience, provide support, enhance platform safety, prevent fraud or misuse, and comply with legal obligations. Information may also be used to improve platform functionality and overall service quality.',
  },
  {
    id: 'ai',
    heading: '4. AI Features and Information Sharing',
    body: 'AgeWell may use AI-powered tools to provide recommendations, assistance, and platform enhancements. AI-generated outputs are informational only and do not constitute professional advice. AgeWell does not sell personal information. Information may be shared with other users based on profile visibility settings, trusted service providers supporting platform operations, payment processing, analytics, or authorities where required by law or necessary to protect users and the Platform.',
  },
  {
    id: 'payments',
    heading: '5. Payments and User Rights',
    body: 'Payments on the Platform are processed through authorized third-party providers, and AgeWell does not store complete payment credentials. Users may access, update, correct, or request deletion of their personal information, subject to applicable legal and operational requirements. Users may also manage profile visibility and interaction preferences where such controls are available.',
  },
  {
    id: 'retention',
    heading: '6. Data Retention and Security',
    body: 'Personal information is retained only for as long as necessary to provide services, comply with legal obligations, resolve disputes, or maintain platform security. AgeWell implements reasonable technical and organizational measures to protect user data; however, no digital platform can guarantee absolute security. Users are responsible for maintaining the confidentiality of their account credentials and login information.',
  },
  {
    id: 'legal',
    heading: '7. Legal and Contact',
    body: 'Users must be at least 13 years old to use the Platform. AgeWell does not knowingly collect personal information from children below the permitted age and will remove such information if identified. The Platform may contain links to third-party services, and AgeWell is not responsible for their privacy practices. Data may be stored or processed within or outside India in accordance with applicable laws and safeguards. AgeWell may update this Privacy Policy from time to time, and continued use of the Platform constitutes acceptance of any revisions. For privacy-related questions, requests, or concerns, contact support@agewellus.com.',
  },
];

export default function PrivacyPolicyPage() {
  useEffect(() => {
    document.title = 'Privacy Policy – AgeWell';
  }, []);

  return (
    <Layout ctaVariant="ghost" copyrightYear="2026">
      <PolicyPage
        title="Privacy Policy"
        intro={[
          'This Privacy Policy describes how AgeWell ("we", "our", "us") collects, uses, stores, shares, and protects personal data of users ("you", "your") who access or use the AgeWell website, mobile application, and related services (collectively, the "Platform").',
          'By using the Platform, you consent to the practices described in this Privacy Policy.',
        ]}
        navItems={navItems}
        sections={sections}
        relatedLinks={[
          { label: 'Terms & Conditions', to: ROUTES.terms },
          { label: 'Cookie Policy', to: ROUTES.cookies },
          { label: 'Legal', to: ROUTES.legal },
          { label: 'Contact Us', to: ROUTES.contact },
        ]}
      />
    </Layout>
  );
}
