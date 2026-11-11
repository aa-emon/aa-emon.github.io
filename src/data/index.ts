/**
 * Single import surface for content.
 *
 * Components import from here, never from the individual data files, so the
 * derived views (sorting, grouping, numbering) stay consistent everywhere.
 */

import { groupAwardsByLevel, sortExperience, sortPublications } from '../lib/format';
import type { NavSection, SectionId } from '../lib/types';
import { awards } from './awards';
import { experience } from './experience';
import { lab, people } from './people';
import { profile } from './profile';
import { projects } from './projects';
import { publications } from './publications';
import { researchThemes } from './research';
import { site } from './site';

export { awards, experience, lab, people, profile, projects, publications, researchThemes, site };

/* --- Derived views -------------------------------------------------------- */

/** Published/accepted first, then submissions; newest year first within each. */
export const publicationList = sortPublications(publications);

/** Reverse-chronological, current positions first. */
export const timeline = sortExperience(experience);

export const awardGroups = groupAwardsByLevel(awards);
export const awardCount = awards.length;

export const supervisors = people.filter((person) => person.role === 'Supervisor');
export const collaborators = people.filter((person) => person.role !== 'Supervisor');

/** `P.1`, `P.2` … numbering follows the rendered order. */
export function paperLabel(id: string): string | null {
  const index = publicationList.findIndex((paper) => paper.id === id);
  return index === -1 ? null : `P.${index + 1}`;
}

/* --- Section registry ----------------------------------------------------- */

/**
 * Section order on the page. `visible` is the only switch: empty a data file
 * and the section, its nav entry and its number disappear together.
 */
const registry: { id: SectionId; label: string; visible: boolean }[] = [
  { id: 'profile', label: 'Profile', visible: true },
  { id: 'research', label: 'Research', visible: researchThemes.length > 0 },
  { id: 'publications', label: 'Publications', visible: publications.length > 0 },
  { id: 'projects', label: 'Projects', visible: projects.length > 0 },
  { id: 'awards', label: 'Awards', visible: awards.length > 0 },
  { id: 'experience', label: 'Experience', visible: experience.length > 0 },
  { id: 'lab', label: 'Lab', visible: people.length > 0 },
  { id: 'contact', label: 'Contact', visible: true },
];

export const navSections: NavSection[] = registry
  .filter((section) => section.visible)
  .map((section, index) => ({
    id: section.id,
    label: section.label,
    number: String(index + 1).padStart(2, '0'),
  }));

export function sectionNumber(id: SectionId): string {
  return navSections.find((section) => section.id === id)?.number ?? '';
}
