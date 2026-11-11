/**
 * Presentation helpers. Everything here is pure and build-time only, so it
 * costs nothing at runtime.
 */

import type { Author, AwardLevel, ExperienceItem, Publication, PublicationStatus } from './types';

/* -------------------------------------------------------------------------- */
/* Names                                                                      */
/* -------------------------------------------------------------------------- */

/** "Ayub Ali Emon" → "Emon". Good enough for the name styles used here. */
export function surname(name: string): string {
  const parts = name.trim().split(/\s+/);
  return parts[parts.length - 1] ?? name;
}

/** "Ayub Ali Emon" → "Emon, Ayub Ali" (BibTeX convention). */
export function invertName(name: string): string {
  const parts = name.trim().split(/\s+/);
  if (parts.length < 2) return name;
  const last = parts.pop() as string;
  return `${last}, ${parts.join(' ')}`;
}

/** Comma-separated author list for dense meta lines. */
export function authorLine(authors: Author[]): string {
  return authors.map((a) => a.name).join(', ');
}

/* -------------------------------------------------------------------------- */
/* Dates                                                                      */
/* -------------------------------------------------------------------------- */

const MONTHS = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

/** 'YYYY-MM' → 'Jul 2025'; 'YYYY' → '2025'. */
export function formatDate(value: string): string {
  const [year, month] = value.split('-');
  if (!month) return year ?? value;
  const index = Number.parseInt(month, 10) - 1;
  return `${MONTHS[index] ?? month} ${year}`;
}

/** 'YYYY-MM' → '2025.07' (rail/table aesthetic). */
export function formatDateNumeric(value: string): string {
  const [year, month] = value.split('-');
  return month ? `${year}.${month}` : (year ?? value);
}

/**
 * Experience periods. `null` start/end are tolerated:
 *   ('2024', null) → '2024 — Present'
 *   (null, '2024') → 'Until 2024'
 */
export function formatPeriod(start: string | null, end: string | null): string {
  if (!start && !end) return '—';
  if (!start) return `Until ${formatDate(end as string)}`;
  if (!end) return `${formatDate(start)} — Present`;
  return `${formatDate(start)} — ${formatDate(end)}`;
}

/** Reverse-chronological, "Present" first, then latest start first. */
export function sortExperience(items: ExperienceItem[]): ExperienceItem[] {
  return [...items].sort((a, b) => {
    if (!a.end && b.end) return -1;
    if (a.end && !b.end) return 1;
    const aStart = a.start ?? '0000';
    const bStart = b.start ?? '0000';
    return bStart.localeCompare(aStart);
  });
}

/* -------------------------------------------------------------------------- */
/* Publications                                                               */
/* -------------------------------------------------------------------------- */

const STATUS_LABEL: Record<PublicationStatus, string> = {
  submitted: 'Submitted',
  'under-review': 'Under review',
  revision: 'Major revision',
  accepted: 'Accepted',
  published: 'Published',
  preprint: 'Preprint',
};

export function statusLabel(status: PublicationStatus): string {
  return STATUS_LABEL[status];
}

/** Open statuses get the accent dot; settled ones get ink. */
export function isOpenStatus(status: PublicationStatus): boolean {
  return status === 'submitted' || status === 'under-review' || status === 'revision';
}

const STATUS_ORDER: Record<PublicationStatus, number> = {
  published: 0,
  accepted: 1,
  preprint: 2,
  revision: 3,
  'under-review': 4,
  submitted: 5,
};

/** Published first, then by year descending; submissions stay at the end. */
export function sortPublications(items: Publication[]): Publication[] {
  return [...items].sort((a, b) => {
    const byStatus = STATUS_ORDER[a.status] - STATUS_ORDER[b.status];
    if (byStatus !== 0) return byStatus;
    return b.year - a.year;
  });
}

export function publicationCount(items: Publication[]): string {
  const n = items.length;
  return `${n} manuscript${n === 1 ? '' : 's'}`;
}

/* -------------------------------------------------------------------------- */
/* Awards                                                                     */
/* -------------------------------------------------------------------------- */

const LEVEL_LABEL: Record<AwardLevel, string> = {
  international: 'International',
  national: 'National',
  provincial: 'Provincial',
  institutional: 'Institutional',
};

const LEVEL_ORDER: AwardLevel[] = ['international', 'national', 'provincial', 'institutional'];

export function levelLabel(level: AwardLevel): string {
  return LEVEL_LABEL[level];
}

export function groupAwardsByLevel<T extends { level: AwardLevel }>(
  items: T[],
): { level: AwardLevel; label: string; items: T[] }[] {
  return LEVEL_ORDER.map((level) => ({
    level,
    label: LEVEL_LABEL[level],
    items: items.filter((item) => item.level === level),
  })).filter((group) => group.items.length > 0);
}

/* -------------------------------------------------------------------------- */
/* BibTeX                                                                     */
/* -------------------------------------------------------------------------- */

/** `@unpublished` for anything not yet published, `@article` otherwise. */
export function toBibtex(paper: Publication): string {
  const key = [
    surname(paper.authors[0]?.name ?? 'anon').toLowerCase().replace(/[^a-z]/g, ''),
    paper.year,
    paper.title.split(/\s+/)[0]?.toLowerCase().replace(/[^a-z0-9]/g, '') ?? '',
  ]
    .filter(Boolean)
    .join('');

  const isPublished = paper.status === 'published' || paper.status === 'accepted';
  const fields: [string, string | undefined][] = [
    ['author', paper.authors.map((a) => invertName(a.name)).join(' and ')],
    ['title', `{${paper.title}}`],
    ['journal', paper.venue.full],
    ['publisher', paper.venue.publisher],
    ['year', String(paper.year)],
    ['volume', paper.venue.volume],
    ['pages', paper.venue.pages],
    ['doi', paper.doi],
    [
      'note',
      isPublished ? undefined : `Manuscript ${statusLabel(paper.status).toLowerCase()}`,
    ],
  ];

  const body = fields
    .filter(([, value]) => Boolean(value))
    .map(([name, value]) => `  ${name.padEnd(9)} = {${value}}`)
    .join(',\n');

  return `@${isPublished ? 'article' : 'unpublished'}{${key},\n${body}\n}`;
}
