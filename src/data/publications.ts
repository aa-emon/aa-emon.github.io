import type { Publication } from '../lib/types';

/**
 * Manuscripts and publications, newest state first.
 *
 * `status` drives the badge, the BibTeX entry type and the sort order:
 *   submitted → under-review → revision → accepted → published → preprint
 * When a manuscript is accepted, change `status`, add `doi`/`url`, and the
 * rest of the page updates itself.
 */
export const publications = [
  {
    id: 'label-budgets-conformal',
    title:
      'Label budgets for conformal maintenance decisions: recalibration versus verification',
    authors: [
      { name: 'Ayub Ali Emon', self: true },
      { name: 'P. Phonesamay' },
      { name: 'Jiehan Zhou' },
    ],
    venue: {
      short: 'RESS',
      full: 'Reliability Engineering & System Safety',
      publisher: 'Elsevier',
    },
    year: 2026,
    status: 'submitted',
    type: 'journal',
    keywords: ['Conformal prediction', 'Label budget', 'Maintenance decisions'],
  },
  {
    id: 'quantized-lora-bearing',
    title:
      'Accuracy–Memory Tradeoffs of Quantized Low-Rank-Adapted Large Language Models for Bearing Fault Diagnosis on a Resource-Constrained Graphics Processing Unit',
    authors: [
      { name: 'Ayub Ali Emon', self: true },
      { name: 'P. Phonesamay' },
      { name: 'Jiehan Zhou' },
    ],
    venue: {
      short: 'EAAI',
      full: 'Engineering Applications of Artificial Intelligence',
      publisher: 'Elsevier',
    },
    year: 2026,
    status: 'submitted',
    type: 'journal',
    keywords: ['Large language models', 'LoRA', 'Quantisation', 'Fault diagnosis'],
  },
  {
    id: 'cross-domain-iot',
    title:
      'Cross-domain IoT intrusion detectors can rank attacks below benign traffic: a common-frame audit and a monitor-window repair',
    authors: [
      { name: 'P. Phonesamay' },
      { name: 'Ayub Ali Emon', self: true },
      { name: 'Jiehan Zhou' },
    ],
    venue: {
      short: 'JISA',
      full: 'Journal of Information Security and Applications',
      publisher: 'Elsevier',
    },
    year: 2026,
    status: 'submitted',
    type: 'journal',
    keywords: ['IoT security', 'Intrusion detection', 'Model auditing'],
  },
] satisfies Publication[];
