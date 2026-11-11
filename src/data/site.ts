import type { Colophon } from '../lib/types';

/**
 * Global site metadata. `url` must match the canonical origin — it feeds the
 * canonical tag, Open Graph URLs and the sitemap.
 */
export const site = {
  url: 'https://aa-emon.github.io',
  name: 'Ayub Ali Emon',
  title: 'Ayub Ali Emon — MSc Candidate in Computer Science, SDUST',
  description:
    'Ayub Ali Emon — MSc candidate at Shandong University of Science and Technology, Qingdao. Research on industrial AI, multi-agent digital twins, and efficient large language models.',
  locale: 'en',
  email: 'emon@sdust.edu.cn',
  /** 'YYYY-MM' — rendered in the footer colophon. */
  updated: '2026-11',
  location: 'Qingdao, Shandong, China',

  colophon: {
    type: 'Set in Archivo and JetBrains Mono. Rules at one pixel, grids at twelve columns.',
    build: 'Built with Astro. No trackers, no cookies, no client-side framework.',
    note: 'Content and text © Ayub Ali Emon.',
  } satisfies Colophon,
} as const;

export const nav = {
  /** Accessible name for the index navigation. */
  label: 'Page index',
  /** Label on the mobile index trigger. */
  trigger: 'Index',
} as const;
