import type { ServiceRole } from '../lib/types';

/**
 * Community and volunteer roles. `end: null` renders as "Present"; add `url`
 * to any entry and the organisation name becomes a link.
 */
export const service = [
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
] satisfies ServiceRole[];
