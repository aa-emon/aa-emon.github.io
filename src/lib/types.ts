/**
 * Content schema. Four data files, one shape each.
 * Data files assert against these types with `satisfies`.
 */

import type { ImageMetadata } from 'astro';

export interface Link {
  label: string;
  href: string;
  /** Renders a small ↗ after the label. */
  external?: boolean;
}

export interface Profile {
  name: string;
  /** e.g. "MSc Candidate, Computer Science" */
  role: string;
  /** e.g. "Shandong University of Science and Technology · Qingdao, China" */
  affiliation: string;
  /** Two sentences at most. */
  bio: string[];
  /** Research keywords, rendered on one line. */
  interests: string[];
  links: Link[];
  sameAs: string[];
  portrait: { src: ImageMetadata; alt: string };
}

export type PublicationStatus =
  | 'submitted'
  | 'under-review'
  | 'revision'
  | 'accepted'
  | 'published'
  | 'preprint';

export interface Author {
  name: string;
  self?: boolean;
}

export interface Publication {
  id: string;
  title: string;
  authors: Author[];
  /** Abbreviation, e.g. RESS. */
  venue: string;
  publisher: string;
  year: number;
  status: PublicationStatus;
  doi?: string;
  url?: string;
}

export type AwardLevel = 'national' | 'provincial' | 'institutional';

export interface Award {
  id: string;
  /** Rendered, English. */
  title: string;
  /** Original Chinese, kept for provenance, not rendered. */
  titleZh?: string;
  prize: string;
  level: AwardLevel;
  /** 'YYYY-MM' */
  date: string;
  issuer: string;
  issuerZh?: string;
  reference?: { label: string; value: string };
}

export interface Education {
  id: string;
  degree: string;
  org: string;
  /** '2024' or '2024-09' */
  start: string;
  /** null renders as "Present". */
  end: string | null;
  note?: string;
}
