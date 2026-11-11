import type { Profile } from '../lib/types';
import portrait from '../assets/emon.jpg';

export const profile = {
  name: 'Ayub Ali Emon',
  headline: 'MSc Candidate, Computer Science',
  focus: 'Industrial AI · Efficient language models · Multi-agent systems',
  status: 'Shandong University of Science and Technology · 2024–2027',

  bio: [
    'I am a master’s candidate in computer science at Shandong University of Science and Technology, where I also completed my bachelor’s degree in software engineering. I am from Bangladesh and have studied in Qingdao since 2020.',
    'My research sits where large language models meet industrial systems: adapting compact models to the hardware a factory can actually afford, coupling multi-agent systems to digital twins, and deciding when a model’s output is trustworthy enough to act on. I am drawn to the unglamorous parts — label budgets, calibration, memory ceilings, and the audits that decide whether a detector can be trusted.',
  ],

  facts: [
    { label: 'Programme', value: 'MSc in Computer Science, 2024–2027' },
    {
      label: 'Lab',
      value: 'CogTwins Lab — Cognitive Industrial Digital Twins',
      href: 'https://cogtwins.github.io',
    },
    {
      label: 'Supervisor',
      value: 'Dr. Jiehan Zhou',
      href: 'https://cogtwins.github.io/jiehan_zhou',
    },
    { label: 'Based in', value: 'Qingdao, Shandong, China' },
  ],

  location: 'Qingdao, Shandong, China',

  links: [
    {
      label: 'emon@sdust.edu.cn',
      href: 'mailto:emon@sdust.edu.cn',
      icon: 'mail',
      external: false,
    },
    {
      label: 'ORCID',
      href: 'https://orcid.org/0009-0004-6763-1672',
      icon: 'arrow',
      external: true,
    },
    {
      label: 'ResearchGate',
      href: 'https://www.researchgate.net/profile/Ayub-Ali-Emon',
      icon: 'arrow',
      external: true,
    },
    {
      label: 'CogTwins Lab',
      href: 'https://cogtwins.github.io',
      icon: 'arrow',
      external: true,
    },
  ],

  sameAs: [
    'https://orcid.org/0009-0004-6763-1672',
    'https://www.researchgate.net/profile/Ayub-Ali-Emon',
  ],

  portrait: {
    src: portrait,
    alt: 'Ayub Ali Emon',
    label: 'Fig. 01',
  },
} satisfies Profile;
