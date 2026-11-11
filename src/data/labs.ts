import type { Lab } from '../lib/types';

/**
 * Research groups. One object per lab — add another when a PhD or a visiting
 * position starts; the section grows on its own.
 *
 * `url` and `supervisorUrl` are optional: leave them out and the same lines
 * render as plain text.
 */
export const labs = [
  {
    id: 'cogtwins',
    name: 'CogTwins Lab',
    fullName: 'Cognitive Industrial Digital Twins Lab',
    role: 'MSc researcher',
    supervisor: 'Dr. Jiehan Zhou',
    supervisorUrl: 'https://cogtwins.github.io/jiehan_zhou',
    url: 'https://cogtwins.github.io',
  },
] satisfies Lab[];
