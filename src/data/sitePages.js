import { ROUTES, SITE, SOCIAL_LINKS } from '../routes/paths';

const R = ROUTES;

export const SITE_PAGES = {
  [R.explore]: {
    title: 'Explore AgeWell',
    intro: 'Discover how AgeWell connects generations through meaningful activities, events, and community support.',
    sections: [
      {
        heading: 'Find your place in the community',
        paragraphs: [
          'AgeWell is built for seniors, young volunteers, and organizations who want to learn from each other and grow together.',
          'Whether you are looking to share wisdom, volunteer your time, or organize community programs, there is a path designed for you.',
        ],
      },
      {
        heading: 'Ways to participate',
        list: [
          'Seniors can join groups, attend events, and connect with youth mentors.',
          'Young volunteers can teach skills, assist with activities, and build real-world experience.',
          'NGOs and organizers can host programs and coordinate volunteers at scale.',
        ],
      },
    ],
    relatedLinks: [
      { label: 'For Seniors', to: R.forSeniors },
      { label: 'For Youths', to: R.forYouth },
      { label: 'For NGOs', to: R.forNgo },
      { label: 'Community', to: R.community },
    ],
    cta: { label: 'Join the Waitlist', to: `${R.home}#waitlist` },
  },

  [R.community]: {
    title: 'Community',
    intro: 'A safe, moderated space where seniors and youth build trust through shared experiences.',
    sections: [
      {
        heading: 'Built for connection',
        paragraphs: [
          'AgeWell communities are organized around interests, neighborhoods, and shared goals so members can find people they genuinely want to spend time with.',
          'Every group is supported by moderation tools and community guidelines that keep interactions respectful and welcoming.',
        ],
      },
      {
        heading: 'What you can do',
        list: [
          'Join interest-based groups and local circles.',
          'Participate in discussions, events, and volunteer activities.',
          'Share stories, skills, and encouragement across generations.',
        ],
      },
    ],
    relatedLinks: [
      { label: 'Community Guidelines', to: R.communityGuidelines },
      { label: 'Safety & Security', to: R.safety },
      { label: 'Explore Roles', to: R.explore },
    ],
    cta: { label: 'Explore Your Role', to: R.explore },
  },

  [R.forSeniors]: {
    title: 'For Seniors',
    intro: 'Age gradually, live fully — with a community that values your wisdom and keeps you connected.',
    activePath: R.forSeniors,
    sections: [
      {
        heading: 'Stay active and engaged',
        paragraphs: [
          'AgeWell helps seniors discover activities, events, and friendships that bring purpose to everyday life.',
          'Your experience matters here. Share knowledge, join conversations, and participate in programs designed around your interests.',
        ],
      },
      {
        heading: 'Features for seniors',
        list: [
          'AI-powered daily dashboard with personalized recommendations.',
          'Community groups, events, and volunteer opportunities.',
          'Safe, moderated interactions with verified members.',
        ],
      },
    ],
    relatedLinks: [
      { label: 'Community', to: R.community },
      { label: 'Safety & Security', to: R.safety },
      { label: 'Help Center', to: R.help },
    ],
    cta: { label: 'Join the Waitlist', to: `${R.home}#waitlist` },
  },

  [R.forYouth]: {
    title: 'For Youths',
    intro: 'Learn, earn, and empower — by volunteering, teaching, and connecting with seniors in your community.',
    activePath: R.forYouth,
    sections: [
      {
        heading: 'Make an impact while you grow',
        paragraphs: [
          'Young volunteers on AgeWell gain meaningful experience by supporting seniors, leading activities, and sharing skills.',
          'It is a chance to build empathy, leadership, and real-world confidence while giving back.',
        ],
      },
      {
        heading: 'Opportunities for youth',
        list: [
          'Volunteer for community events and senior support programs.',
          'Teach skills ranging from technology to arts and wellness.',
          'Earn recognition and grow your profile within the AgeWell network.',
        ],
      },
    ],
    relatedLinks: [
      { label: 'Community Guidelines', to: R.communityGuidelines },
      { label: 'For Seniors', to: R.forSeniors },
      { label: 'Careers', to: R.careers },
    ],
    cta: { label: 'Join the Waitlist', to: `${R.home}#waitlist` },
  },

  [R.forNgo]: {
    title: 'For NGO Organizers',
    intro: 'Create impact and build community by partnering with AgeWell to run senior-youth programs.',
    activePath: R.forNgo,
    sections: [
      {
        heading: 'Partner with purpose',
        paragraphs: [
          'AgeWell works with NGOs, institutions, and community organizers to design programs that bring generations together.',
          'From event management to volunteer coordination, our tools help you scale impact without losing the human connection.',
        ],
      },
      {
        heading: 'Tools for organizers',
        list: [
          'Event planning and trip management.',
          'Volunteer recruitment and coordination.',
          'Community outreach and partnership support.',
        ],
      },
    ],
    relatedLinks: [
      { label: 'Partner With Us', to: R.contact },
      { label: 'Community', to: R.community },
      { label: 'Our Mission', to: R.mission },
    ],
    cta: { label: 'Contact Us', to: R.contact },
  },

  [R.about]: {
    title: 'About Us',
    intro: 'AgeWell is on a mission to bridge generations and build communities where everyone belongs.',
    sections: [
      {
        heading: 'Who we are',
        paragraphs: [
          'AgeWell is a community platform that connects seniors, young volunteers, and organizations through activities, events, and shared support.',
          'We believe intergenerational connection reduces isolation, unlocks untapped wisdom, and creates stronger neighborhoods.',
        ],
      },
      {
        heading: 'What we stand for',
        list: [
          'Respect across every generation.',
          'Safe, privacy-first community design.',
          'Meaningful engagement over passive scrolling.',
        ],
      },
    ],
    relatedLinks: [
      { label: 'Our Mission', to: R.mission },
      { label: 'Our Team', to: R.teams },
      { label: 'Careers', to: R.careers },
    ],
  },

  [R.mission]: {
    title: 'Our Mission',
    intro: 'Where generations grow together — through trust, purpose, and shared experiences.',
    sections: [
      {
        heading: 'Our mission',
        paragraphs: [
          'AgeWell exists to reduce senior isolation and empower youth through intergenerational programs that are accessible, safe, and joyful.',
          'We partner with communities and NGOs to make these connections sustainable at local and national scale.',
        ],
      },
      {
        heading: 'How we measure success',
        list: [
          'More seniors feeling connected and engaged each month.',
          'More youth volunteers building skills through service.',
          'More organizations running successful intergenerational programs.',
        ],
      },
    ],
    relatedLinks: [
      { label: 'About Us', to: R.about },
      { label: 'Community', to: R.community },
      { label: 'Contact Us', to: R.contact },
    ],
  },

  [R.careers]: {
    title: 'Careers',
    intro: 'Help us build technology and community programs that bring generations together.',
    sections: [
      {
        heading: 'Work with purpose',
        paragraphs: [
          'AgeWell is growing a team of people who care about social impact, thoughtful product design, and inclusive community building.',
          'We welcome applications from engineers, designers, community managers, and partnership leads.',
        ],
      },
      {
        heading: 'How to apply',
        paragraphs: [
          'Send your resume and a short note about why AgeWell matters to you at careers@agewellus.com.',
          'We review applications on a rolling basis and will reach out when there is a strong match.',
        ],
      },
    ],
    relatedLinks: [
      { label: 'About Us', to: R.about },
      { label: 'Our Team', to: R.teams },
      { label: 'Contact Us', to: R.contact },
    ],
    cta: { label: 'Email Careers', to: 'mailto:careers@agewellus.com' },
  },

  [R.contact]: {
    title: 'Contact Us',
    intro: 'We would love to hear from you — whether you are a user, partner, or press contact.',
    sections: [
      {
        heading: 'Get in touch',
        paragraphs: [
          'Email us at support@agewellus.com for general questions, partnerships, or media inquiries.',
          'Our team is based in New Delhi, India and typically responds within two business days.',
        ],
      },
      {
        heading: 'Other ways to reach us',
        list: [
          'Website: www.agewellus.com',
          'Email: support@agewellus.com',
          'Partnerships & NGOs: partners@agewellus.com',
          'Careers: careers@agewellus.com',
        ],
      },
    ],
    relatedLinks: [
      { label: 'Website — www.agewellus.com', to: SITE.website },
      ...SOCIAL_LINKS.map((link) => ({
        label: `AgeWell on ${link.label}`,
        to: link.href,
      })),
      { label: 'Help Center', to: R.help },
      { label: 'Feedback', to: R.feedback },
      { label: 'Report an Issue', to: R.reportIssue },
    ],
    cta: { label: 'Send an Email', to: 'mailto:support@agewellus.com' },
  },

  [R.help]: {
    title: 'Help Center',
    intro: 'Answers and guidance for getting started on AgeWell.',
    sections: [
      {
        heading: 'Getting started',
        paragraphs: [
          'Join the waitlist to be notified when AgeWell launches in your area. Once live, you can create a profile, choose your role, and explore community groups.',
        ],
        list: [
          'How do I join AgeWell? Sign up via the waitlist on our homepage.',
          'Is AgeWell free? Core community features will be free; some events may have optional fees.',
          'Who can use AgeWell? Seniors, youth volunteers, and partner organizations.',
        ],
      },
    ],
    relatedLinks: [
      { label: 'Support', to: R.support },
      { label: 'Community Guidelines', to: R.communityGuidelines },
      { label: 'Safety & Security', to: R.safety },
      { label: 'Contact Us', to: R.contact },
    ],
  },

  [R.communityGuidelines]: {
    title: 'Community Guidelines',
    intro: 'Standards that keep AgeWell respectful, safe, and welcoming for every generation.',
    sections: [
      {
        heading: 'Our community standards',
        list: [
          'Treat every member with respect regardless of age, background, or ability.',
          'Share content that is appropriate, honest, and constructive.',
          'Do not harass, discriminate, spam, or impersonate others.',
          'Report behavior that makes you or others feel unsafe.',
        ],
      },
      {
        heading: 'Enforcement',
        paragraphs: [
          'Violations may result in content removal, account restrictions, or permanent bans depending on severity.',
          'AgeWell moderators and automated safety systems work together to review reports promptly.',
        ],
      },
    ],
    relatedLinks: [
      { label: 'Safety & Security', to: R.safety },
      { label: 'Report an Issue', to: R.reportIssue },
      { label: 'Terms & Conditions', to: R.terms },
    ],
  },

  [R.safety]: {
    title: 'Safety & Security',
    intro: 'How AgeWell protects members and keeps interactions trustworthy.',
    sections: [
      {
        heading: 'Platform safety',
        paragraphs: [
          'AgeWell uses verification, moderation, and reporting tools to maintain a safe environment for seniors, youth, and partner organizations.',
          'We never sell personal information and follow privacy best practices described in our Privacy Policy.',
        ],
        list: [
          'Verified community membership where applicable.',
          'Moderated groups and events.',
          'Easy reporting for suspicious or harmful behavior.',
        ],
      },
    ],
    relatedLinks: [
      { label: 'Privacy Policy', to: R.privacy },
      { label: 'Community Guidelines', to: R.communityGuidelines },
      { label: 'Report an Issue', to: R.reportIssue },
    ],
  },

  [R.reportIssue]: {
    title: 'Report an Issue',
    intro: 'See something concerning? Let us know so we can review it quickly.',
    sections: [
      {
        heading: 'What to report',
        list: [
          'Harassment, abuse, or discriminatory behavior.',
          'Suspicious accounts or impersonation.',
          'Unsafe event listings or misleading content.',
          'Technical bugs that affect your safety or data.',
        ],
      },
      {
        heading: 'How to submit a report',
        paragraphs: [
          'Email safety@agewellus.com with a description of the issue, relevant usernames, and screenshots if available.',
          'For urgent safety concerns, include "URGENT" in the subject line.',
        ],
      },
    ],
    relatedLinks: [
      { label: 'Safety & Security', to: R.safety },
      { label: 'Community Guidelines', to: R.communityGuidelines },
      { label: 'Support', to: R.support },
    ],
    cta: { label: 'Report via Email', to: 'mailto:safety@agewellus.com' },
  },

  [R.feedback]: {
    title: 'Feedback',
    intro: 'Your ideas help us build a better AgeWell for every generation.',
    sections: [
      {
        heading: 'Share your thoughts',
        paragraphs: [
          'We welcome feedback on features, accessibility, community programs, and anything that would make AgeWell more useful for you.',
          'Send suggestions to feedback@agewellus.com — we read every message.',
        ],
      },
    ],
    relatedLinks: [
      { label: 'Contact Us', to: R.contact },
      { label: 'Help Center', to: R.help },
      { label: 'Join the Waitlist', to: `${R.home}#waitlist` },
    ],
    cta: { label: 'Send Feedback', to: 'mailto:feedback@agewellus.com' },
  },

  [R.support]: {
    title: 'Support',
    intro: 'Need help using AgeWell? Our support team is here for you.',
    sections: [
      {
        heading: 'Support options',
        paragraphs: [
          'Browse the Help Center for common questions, or contact us directly for account and technical assistance.',
        ],
        list: [
          'Email: support@agewellus.com',
          'Response time: within 2 business days',
          'Hours: Monday–Friday, 9 AM – 6 PM IST',
        ],
      },
    ],
    relatedLinks: [
      { label: 'Help Center', to: R.help },
      { label: 'Report an Issue', to: R.reportIssue },
      { label: 'Contact Us', to: R.contact },
    ],
    cta: { label: 'Contact Support', to: 'mailto:support@agewellus.com' },
  },

  [R.cookies]: {
    title: 'Cookie Policy',
    intro: 'How AgeWell uses cookies and similar technologies on our website and app.',
    sections: [
      {
        heading: 'What are cookies?',
        paragraphs: [
          'Cookies are small text files stored on your device that help us remember preferences, understand usage, and improve your experience.',
        ],
      },
      {
        heading: 'How we use cookies',
        list: [
          'Essential cookies required for site functionality and security.',
          'Analytics cookies to understand how visitors use our pages.',
          'Preference cookies to remember settings such as language.',
        ],
      },
      {
        heading: 'Your choices',
        paragraphs: [
          'You can manage or disable cookies through your browser settings. Some features may not work correctly if essential cookies are blocked.',
          'For more on how we handle personal data, see our Privacy Policy.',
        ],
      },
    ],
    relatedLinks: [
      { label: 'Privacy Policy', to: R.privacy },
      { label: 'Terms & Conditions', to: R.terms },
      { label: 'Legal', to: R.legal },
    ],
  },

  [R.teams]: {
    title: 'Our Team',
    intro: 'The people building AgeWell — united by a belief that generations are stronger together.',
    sections: [
      {
        heading: 'Leadership & community',
        paragraphs: [
          'AgeWell is built by a cross-functional team spanning product, engineering, community operations, and partnerships.',
          'We work closely with seniors, youth leaders, and NGO partners to ensure the platform reflects real community needs.',
        ],
      },
      {
        heading: 'Founder',
        paragraphs: [
          'Greeva Verma founded AgeWell with a vision to connect generations through meaningful community experiences.',
        ],
      },
      {
        heading: 'Join us',
        paragraphs: [
          'Interested in working with us? Visit our Careers page or reach out at careers@agewellus.com.',
        ],
      },
    ],
    relatedLinks: [
      { label: 'Greeva on LinkedIn', to: SITE.founderLinkedIn },
      { label: 'AgeWell on LinkedIn', to: SOCIAL_LINKS.find((l) => l.label === 'LinkedIn').href },
      { label: 'About Us', to: R.about },
      { label: 'Careers', to: R.careers },
      { label: 'Our Mission', to: R.mission },
    ],
  },

  [R.salesRefunds]: {
    title: 'Sales and Refunds',
    intro: 'Information about purchases, refunds, and billing on AgeWell.',
    sections: [
      {
        heading: 'Purchases',
        paragraphs: [
          'Some events, programs, or premium features on AgeWell may require payment. All prices are shown clearly before you confirm a purchase.',
          'Payments are processed through authorized third-party providers; AgeWell does not store complete payment credentials.',
        ],
      },
      {
        heading: 'Refund policy',
        paragraphs: [
          'Refunds may be available for cancelled events or billing errors. Submit a request to support@agewellus.com within 14 days of purchase with your order details.',
          'Refund eligibility depends on the type of purchase and organizer policies for specific events.',
        ],
      },
    ],
    relatedLinks: [
      { label: 'Terms & Conditions', to: R.terms },
      { label: 'Support', to: R.support },
      { label: 'Contact Us', to: R.contact },
    ],
  },

  [R.legal]: {
    title: 'Legal',
    intro: 'Legal information and policies governing use of the AgeWell platform.',
    sections: [
      {
        heading: 'Legal documents',
        paragraphs: [
          'Use of AgeWell is governed by our Terms & Conditions and Privacy Policy. Additional policies apply to cookies, community conduct, and purchases.',
        ],
        list: [
          'Terms & Conditions — rules for using the platform.',
          'Privacy Policy — how we collect and protect your data.',
          'Cookie Policy — how we use cookies and tracking technologies.',
          'Community Guidelines — standards for member behavior.',
        ],
      },
    ],
    relatedLinks: [
      { label: 'Privacy Policy', to: R.privacy },
      { label: 'Terms & Conditions', to: R.terms },
      { label: 'Cookie Policy', to: R.cookies },
      { label: 'Site Map', to: R.sitemap },
    ],
  },

  [R.sitemap]: {
    title: 'Site Map',
    intro: 'A complete overview of pages on the AgeWell website.',
    sitemapGroups: [
      {
        heading: 'Product',
        links: [
          { label: 'Explore', to: R.explore },
          { label: 'Community', to: R.community },
          { label: 'For Seniors', to: R.forSeniors },
          { label: 'For Youths', to: R.forYouth },
          { label: 'For NGOs', to: R.forNgo },
        ],
      },
      {
        heading: 'Company',
        links: [
          { label: 'About Us', to: R.about },
          { label: 'Our Mission', to: R.mission },
          { label: 'Careers', to: R.careers },
          { label: 'Our Team', to: R.teams },
          { label: 'Contact Us', to: R.contact },
        ],
      },
      {
        heading: 'Support',
        links: [
          { label: 'Help Center', to: R.help },
          { label: 'Community Guidelines', to: R.communityGuidelines },
          { label: 'Safety & Security', to: R.safety },
          { label: 'Report Issue', to: R.reportIssue },
          { label: 'Feedback', to: R.feedback },
          { label: 'Support', to: R.support },
        ],
      },
      {
        heading: 'Legal',
        links: [
          { label: 'Privacy Policy', to: R.privacy },
          { label: 'Terms & Conditions', to: R.terms },
          { label: 'Cookie Policy', to: R.cookies },
          { label: 'Sales and Refunds', to: R.salesRefunds },
          { label: 'Legal', to: R.legal },
        ],
      },
    ],
    relatedLinks: [
      { label: 'Home', to: R.home },
      { label: 'Join the Waitlist', to: `${R.home}#waitlist` },
    ],
  },
};

export const SITE_PAGE_PATHS = Object.keys(SITE_PAGES);
