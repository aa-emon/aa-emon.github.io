/** Single import surface for content. Components never read the data files directly. */

import { sortAwards, sortEducation, sortPublications } from '../lib/format';
import { activities } from './activities';
import { awards } from './awards';
import { education } from './education';
import { labs } from './labs';
import { profile } from './profile';
import { publications } from './publications';
import { site } from './site';

export { activities, awards, education, labs, profile, publications, site };

/** Published first, then submissions. */
export const paperList = sortPublications(publications);
/** Newest first. */
export const awardList = sortAwards(awards);
/** Newest degree first. */
export const degreeList = sortEducation(education);
/** Newest role first. */
export const activityList = [...activities].sort((a, b) => b.start.localeCompare(a.start));
