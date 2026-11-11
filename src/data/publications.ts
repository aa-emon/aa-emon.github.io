import type { Publication } from '../lib/types';

/**
 * Manuscripts, newest state first. `status` drives the label, the order and
 * nothing else: change it to 'accepted' or 'published' and add `doi` when the
 * news arrives.
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
    venue: 'RESS',
    publisher: 'Reliability Engineering & System Safety · Elsevier',
    year: 2026,
    status: 'submitted',
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
    venue: 'EAAI',
    publisher: 'Engineering Applications of Artificial Intelligence · Elsevier',
    year: 2026,
    status: 'submitted',
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
    venue: 'JISA',
    publisher: 'Journal of Information Security and Applications · Elsevier',
    year: 2026,
    status: 'submitted',
  },
] satisfies Publication[];
