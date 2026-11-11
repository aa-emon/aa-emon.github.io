/** Single import surface for content. Components never read the data files directly. */

import { sortAwards, sortEducation, sortPublications } from '../lib/format';
import { awards } from './awards';
import { education, lab } from './education';
import { profile } from './profile';
import { publications } from './publications';
import { site } from './site';

export { awards, education, lab, profile, publications, site };

/** Published first, then submissions. */
export const paperList = sortPublications(publications);
/** Newest first. */
export const awardList = sortAwards(awards);
/** Newest degree first. */
export const degreeList = sortEducation(education);
