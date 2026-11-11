import type { Profile } from '../lib/types';
import portrait from '../assets/emon.jpg';

export const profile = {
  name: 'Ayub Ali Emon',
  role: 'MSc Candidate, Computer Science',

  bio: [
    'I am a master’s candidate in computer science. My research is on AI agents, large language models, and industrial AI systems.',
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
