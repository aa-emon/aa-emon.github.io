import type { Project } from '../lib/types';

export const projects = [
  {
    id: 'intellifactory',
    title: 'IntelliFactory',
    subtitle: 'A multi-agent digital twin platform for industrial optimisation',
    summary:
      'A platform that couples a simulated twin of an industrial process with multiple cooperating agents, so that optimisation strategies can be explored and evaluated against the model before they are committed to the physical line.',
    detail: [
      'Agent layer: cooperating agents that propose, test and compare optimisation strategies against the twin.',
      'Twin layer: a simulated representation of the process that returns performance signals without touching production hardware.',
    ],
    tags: ['Multi-agent systems', 'Digital twin', 'Industrial optimisation'],
    period: '2025',
    awardIds: ['shandong-digital-engineer-2025'],
    featured: true,
  },
] satisfies Project[];
