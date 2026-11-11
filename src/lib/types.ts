/**
 * Schema for every piece of content on this site.
 *
 * These are the only shapes the components know how to render. Data files
 * assert themselves against these types with `satisfies`, so a typo or a
 * missing field fails at type-check/build time, never in the browser.
 */

import type { ImageMetadata } from 'astro';

/* -------------------------------------------------------------------------- */
/* Shared                                                                     */
/* -------------------------------------------------------------------------- */

export type SectionId =
  | 'profile'
  | 'research'
  | 'publications'
  | 'projects'
  | 'awards'
  | 'experience'
  | 'lab'
  | 'contact';

export interface NavSection {
  id: SectionId;
  label: string;
  number: string;
}

export type LinkIcon = 'mail' | 'arrow' | 'dot';

export interface Link {
  label: string;
  href: string;
  icon?: LinkIcon;
  /** Set false for mailto:/same-page anchors so no ↗ is rendered. */
  external?: boolean;
  /** Screen-reader suffix, e.g. "opens in a new tab". */
  note?: string;
}

/* -------------------------------------------------------------------------- */
/* Profile                                                                    */
/* -------------------------------------------------------------------------- */

export interface ProfileFact {
  label: string;
  value: string;
  href?: string;
}

export interface Portrait {
  src: ImageMetadata;
  alt: string;
  /** Rendered beside the plate, e.g. "Fig. 01". */
  label?: string;
}

export interface Profile {
  name: string;
  /** Shown under the name in the hero and in the rail. */
  headline: string;
  /** One line of research identity. */
  focus: string;
  /** Short status line: programme, years. */
  status: string;
  /** Paragraphs of the introduction. First one is set as the lede. */
  bio: string[];
  facts: ProfileFact[];
  location: string;
  links: Link[];
  /** Canonical profile URLs (ORCID, ResearchGate) for schema.org sameAs. */
  sameAs: string[];
  portrait: Portrait;
}

/* -------------------------------------------------------------------------- */
/* Research                                                                   */
/* -------------------------------------------------------------------------- */

export interface ResearchTheme {
  id: string;
  title: string;
  summary: string;
  keywords: string[];
  /** Publication ids that came out of this thread, if any. */
  paperIds?: string[];
}

/* -------------------------------------------------------------------------- */
/* Publications                                                               */
/* -------------------------------------------------------------------------- */

export type PublicationStatus =
  | 'submitted'
  | 'under-review'
  | 'revision'
  | 'accepted'
  | 'published'
  | 'preprint';

export type PublicationType = 'journal' | 'conference' | 'workshop' | 'preprint';

export interface Author {
  name: string;
  /** Marks the site owner; rendered in bold. */
  self?: boolean;
  corresponding?: boolean;
}

export interface Venue {
  /** Abbreviation used in dense lists: RESS, JISA, EAAI. */
  short: string;
  full: string;
  publisher?: string;
  /** For published items only. */
  volume?: string;
  pages?: string;
}

export interface Publication {
  id: string;
  title: string;
  authors: Author[];
  venue: Venue;
  year: number;
  status: PublicationStatus;
  type: PublicationType;
  /** 'YYYY-MM', optional; only rendered when known. */
  month?: string;
  doi?: string;
  url?: string;
  pdf?: string;
  code?: string;
  abstract?: string;
  /** Free line rendered under the venue, e.g. a preprint note. */
  note?: string;
  keywords?: string[];
  selected?: boolean;
}

/* -------------------------------------------------------------------------- */
/* Projects                                                                   */
/* -------------------------------------------------------------------------- */

export interface Project {
  id: string;
  title: string;
  subtitle?: string;
  summary: string;
  /** Optional bullets; rendered only when present. */
  detail?: string[];
  tags: string[];
  period?: string;
  links?: Link[];
  /** Award ids earned by this project; the award block is cross-linked. */
  awardIds?: string[];
  featured?: boolean;
}

/* -------------------------------------------------------------------------- */
/* Awards                                                                     */
/* -------------------------------------------------------------------------- */

export type AwardLevel = 'international' | 'national' | 'provincial' | 'institutional';

export interface Award {
  id: string;
  /** English title, rendered. */
  title: string;
  /** Original Chinese title, kept for provenance and verification. */
  titleZh?: string;
  /** "First Prize", "Excellence Award". */
  prize: string;
  level: AwardLevel;
  /** 'YYYY-MM' — when the competition took place. */
  date: string;
  /** 'YYYY-MM' — when the certificate was issued. */
  issued?: string;
  issuer: string;
  issuerZh?: string;
  /** Certificate number, team number, anything verifiable. */
  reference?: { label: string; value: string };
  /** e.g. "Campus round" for a qualifier inside a larger competition. */
  scope?: string;
  projectId?: string;
  note?: string;
}

/* -------------------------------------------------------------------------- */
/* Experience                                                                 */
/* -------------------------------------------------------------------------- */

export type ExperienceKind = 'education' | 'research' | 'industry' | 'teaching' | 'service';

export interface ExperienceItem {
  id: string;
  kind: ExperienceKind;
  role: string;
  org: string;
  orgUrl?: string;
  location?: string;
  /** 'YYYY' or 'YYYY-MM'. null means unknown. */
  start: string | null;
  /** null renders as "Present". */
  end: string | null;
  /** Shown instead of a date range when start and end are unknown. */
  periodNote?: string;
  summary?: string;
  bullets?: string[];
  tags?: string[];
}

/* -------------------------------------------------------------------------- */
/* People                                                                     */
/* -------------------------------------------------------------------------- */

export interface Person {
  id: string;
  name: string;
  role: string;
  affiliation?: string;
  note?: string;
  links?: Link[];
}

export interface Lab {
  name: string;
  fullName: string;
  url: string;
  description: string;
}

/* -------------------------------------------------------------------------- */
/* Site                                                                       */
/* -------------------------------------------------------------------------- */

export interface Colophon {
  type: string;
  build: string;
  note?: string;
}
