import type { Education } from '../lib/types';

export const education = [
  {
    id: 'msc-sdust',
    degree: 'MSc in Computer Science',
    org: 'Shandong University of Science and Technology',
    start: '2024',
    end: '2027',
  },
  {
    id: 'bsc-sdust',
    degree: 'BSc in Software Engineering',
    org: 'Shandong University of Science and Technology',
    start: '2020',
    end: '2024',
  },
] satisfies Education[];

/** One line under the degrees — affiliation, not a section of its own. */
export const lab = {
  name: 'CogTwins Lab',
  supervisor: 'Dr. Jiehan Zhou',
  supervisorUrl: 'https://cogtwins.github.io/jiehan_zhou',
};
