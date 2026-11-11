import type { Profile } from '../lib/types';
import portrait from '../assets/emon.jpg';

export const profile = {
  name: 'Ayub Ali Emon',
  role: 'MSc Candidate, Computer Science',

  bio: [
    'I build and study AI systems for industry — agents, language models, and digital twins that have to hold up where labels are scarce, hardware is small, and a wrong decision is expensive. My research is about the unglamorous guarantees: calibration, auditability, and knowing when a model should stay quiet.',
  ],

  interests: ['AI agents', 'Large language models', 'Industrial AI', 'Digital twins'],

  links: [
    { label: 'emon@sdust.edu.cn', href: 'mailto:emon@sdust.edu.cn' },
    { label: 'ORCID', href: 'https://orcid.org/0009-0004-6763-1672', external: true },
    {
      label: 'ResearchGate',
      href: 'https://www.researchgate.net/profile/Ayub-Ali-Emon',
      external: true,
    },
    // Add Google Scholar here once the profile exists.
  ],

  sameAs: [
    'https://orcid.org/0009-0004-6763-1672',
    'https://www.researchgate.net/profile/Ayub-Ali-Emon',
  ],

  portrait: { src: portrait, alt: 'Ayub Ali Emon' },
} satisfies Profile;
