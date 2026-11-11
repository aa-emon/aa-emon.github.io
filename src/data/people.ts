import type { Lab, Person } from '../lib/types';

export const lab = {
  name: 'CogTwins Lab',
  fullName: 'Cognitive Industrial Digital Twins Lab',
  url: 'https://cogtwins.github.io',
  description:
    'A research group working on cognitive industrial digital twins — digital models of industrial processes that learn, reason, and support decisions.',
} satisfies Lab;

/**
 * Supervisor and collaborators. Add an entry with `role` and optional links
 * and the Lab section grows accordingly.
 */
export const people = [
  {
    id: 'jiehan-zhou',
    name: 'Dr. Jiehan Zhou',
    role: 'Supervisor',
    affiliation: 'Shandong University of Science and Technology',
    links: [
      {
        label: 'Lab profile',
        href: 'https://cogtwins.github.io/jiehan_zhou',
        icon: 'arrow',
        external: true,
      },
      {
        label: 'Google Scholar',
        href: 'https://scholar.google.com/citations?user=Elzkz90AAAAJ',
        icon: 'arrow',
        external: true,
      },
    ],
  },
  {
    id: 'p-phonesamay',
    name: 'P. Phonesamay',
    role: 'Co-author',
  },
] satisfies Person[];
