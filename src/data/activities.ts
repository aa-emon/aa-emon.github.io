import type { Activity } from '../lib/types';

/**
 * Memberships, volunteer roles, club and community positions — everything
 * that is neither a degree nor a lab.
 *
 * One object per role. `end: null` renders as "Present"; add `url` and the
 * organisation name becomes a link (IEEE, a society page, a group site).
 */
export const activities = [
  {
    id: 'bcysa',
    role: 'Member',
    org: 'Bangladesh-China Youth Student Association',
    start: '2024',
    end: null,
  },
  {
    id: 'qingdao-ftz-volunteers',
    role: 'Volunteer representative',
    org: 'Qingdao Free Trade Zone International Volunteer Group',
    start: '2023',
    end: '2025',
  },
  {
    id: 'sdust-intl-volunteers',
    role: 'Advisor',
    org: 'SDUST International Students Volunteer Group',
    start: '2023',
    end: '2024',
  },
] satisfies Activity[];
