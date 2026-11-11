/** Build-time formatting helpers. Pure functions, no runtime cost. */

import type { Award, AwardLevel, Education, Publication, PublicationStatus } from './types';

/* --- Dates ---------------------------------------------------------------- */

/** 'YYYY' or 'YYYY-MM' → '2025' / 'Jul 2025'. */
export function formatDate(value: string): string {
  const [year, month] = value.split('-');
  if (!month) return year ?? value;
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  return `${months[Number.parseInt(month, 10) - 1] ?? month} ${year}`;
}

export function formatPeriod(start: string, end: string | null): string {
  const from = start.slice(0, 4);
  const to = end ? end.slice(0, 4) : 'Present';
  return `${from}–${to}`;
}

/* --- Publications --------------------------------------------------------- */

const STATUS: Record<PublicationStatus, string> = {
  submitted: 'Submitted',
  'under-review': 'Under review',
  revision: 'Revision',
  accepted: 'Accepted',
  published: 'Published',
  preprint: 'Preprint',
};

export function statusLabel(status: PublicationStatus): string {
  return STATUS[status];
}

const ORDER: Record<PublicationStatus, number> = {
  published: 0,
  accepted: 1,
  preprint: 2,
  revision: 3,
  'under-review': 4,
  submitted: 5,
};

export function sortPublications(items: Publication[]): Publication[] {
  return [...items].sort(
    (a, b) => ORDER[a.status] - ORDER[b.status] || b.year - a.year,
  );
}

/* --- Awards --------------------------------------------------------------- */

const LEVEL: Record<AwardLevel, string> = {
  national: 'National',
  provincial: 'Provincial',
  institutional: 'Institutional',
};

export function levelLabel(level: AwardLevel): string {
  return LEVEL[level];
}

/** Newest first. */
export function sortAwards(items: Award[]): Award[] {
  return [...items].sort((a, b) => b.date.localeCompare(a.date));
}

/* --- Education ------------------------------------------------------------ */

export function sortEducation(items: Education[]): Education[] {
  return [...items].sort((a, b) => b.start.localeCompare(a.start));
}
