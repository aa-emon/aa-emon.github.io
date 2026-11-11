import type { ExperienceItem } from '../lib/types';

/**
 * Education, research positions, and anything else worth a line in the
 * timeline. Sorted automatically: current entries first, then latest start.
 * `kind` is rendered as a small label above the role.
 */
export const experience = [
  {
    id: 'msc-sdust',
    kind: 'education',
    role: 'MSc in Computer Science',
    org: 'Shandong University of Science and Technology',
    location: 'Qingdao, China',
    start: '2024',
    end: '2027',
    summary:
      'Graduate study in the College of Computer Science, with research on language models and decision systems for industrial applications.',
  },
  {
    id: 'cogtwins-member',
    kind: 'research',
    role: 'Member, CogTwins Lab',
    org: 'Cognitive Industrial Digital Twins Lab',
    orgUrl: 'https://cogtwins.github.io',
    start: null,
    end: null,
    periodNote: 'Current',
    summary:
      'Research on efficient language models, conformal decision-making, and agent-based digital twins for industrial processes, supervised by Dr. Jiehan Zhou.',
    tags: ['LLM efficiency', 'Conformal prediction', 'Digital twins'],
  },
  {
    id: 'bsc-sdust',
    kind: 'education',
    role: 'BSc in Software Engineering',
    org: 'Shandong University of Science and Technology',
    location: 'Qingdao, China',
    start: '2020',
    end: '2024',
  },
] satisfies ExperienceItem[];
