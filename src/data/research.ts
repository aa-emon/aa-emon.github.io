import type { ResearchTheme } from '../lib/types';

/**
 * Research threads. Each one is a row in the Research section, and `paperIds`
 * links it to the manuscripts below so the two sections never drift apart.
 */
export const researchThemes = [
  {
    id: 'industrial-ai',
    title: 'Industrial AI and digital twins',
    summary:
      'Coupling simulated models of industrial processes with learning agents, so that optimisation and monitoring can be tested against a twin before they touch the line.',
    keywords: ['Digital twins', 'Multi-agent systems', 'Process optimisation'],
  },
  {
    id: 'efficient-llms',
    title: 'Language models under hardware constraints',
    summary:
      'Quantised and low-rank-adapted language models on hardware that fits on a factory floor — measuring what compression actually costs in diagnostic accuracy and memory.',
    keywords: ['LLM adaptation', 'Quantisation', 'Fault diagnosis'],
    paperIds: ['quantized-lora-bearing'],
  },
  {
    id: 'label-scarcity',
    title: 'Decisions under label scarcity',
    summary:
      'Conformal and calibrated decision rules when labels are expensive: when to spend the budget on recalibration, and when verification is the cheaper guarantee.',
    keywords: ['Conformal prediction', 'Calibration', 'Maintenance decisions'],
    paperIds: ['label-budgets-conformal'],
  },
  {
    id: 'detection-reliability',
    title: 'Reliability of detection models',
    summary:
      'Auditing detectors that cross domain boundaries — including the uncomfortable case where an attack is ranked below ordinary traffic, and how a monitor window repairs it.',
    keywords: ['IoT security', 'Intrusion detection', 'Model auditing'],
    paperIds: ['cross-domain-iot'],
  },
] satisfies ResearchTheme[];
