# PROJECT.md — Academic portfolio (Ayub Ali Emon)

Single source of truth. Read this before editing; it reflects the current
minimal / centred build, not earlier drafts.

---

## 1. Intent

One page, one column, centred. Quiet Swiss typography — hairlines, monospace
labels, one accent — with as little prose as possible. Academic credibility,
not a personal brand site.

| Constraint | Decision |
| --- | --- |
| Content scope | Personal info, education, lab, papers, awards, activities. **No projects section, no lab member list, no separate collaborator line.** |
| Tone | Descriptive text kept to one short paragraph. Lists carry the rest. |
| Layout | Single centred column, `--page: 44rem`, left-aligned text inside it. |
| Theme | Light only. No dark mode. |
| Stack | Astro 7 static. No Tailwind, no UI framework, no client JS. |
| Fonts | Archivo (400–700) + JetBrains Mono, self-hosted via the Astro Fonts API. |
| Status | Live at <https://aa-emon.github.io>, published from `main`. Local commits can be ahead of it. |

---

## 2. Page structure

```
hero      role · name · location · portrait (square, hairline frame + paper mat) · one paragraph · keywords · links
01        Education      (2 degrees, each with location)
02        Lab            (CogTwins Lab + supervisor; add one object per group)
03        Awards         (4 results, newest first: the 2026 university honour, then 3 competitions)
04        Publications   (3 submitted manuscripts)
05        Activities     (memberships, volunteer and community roles)
06        Contact        (email + location + profile links)
footer    ©
```

No counts are printed in section headers. `publications[].url` / `.doi` and
`labs[].url` / `.supervisorUrl` are optional — when present the title or name
becomes a link, when absent the same text renders plain.

Every list section (01–05) is optional: if its data array is empty, the
component is not rendered and its number does not appear. Hero and Contact
always render; Contact reads `profile` and `site`, so it cannot be absent.

---

## 3. File map

```
astro.config.mjs          site/base, compressHTML, fonts, sharp externals
package.json              astro ^7.4.10 + sharp ^0.35.5; dev/build/preview scripts
tsconfig.json             extends astro/tsconfigs/strict; excludes dist/
README.md                 setup, commands, structure, design rules, Astro credit
AGENTS.md                 dev-server note for agents (astro dev --background)
PROJECT.md                this file
src/
  data/
    profile.ts            name, role, bio, interests, links, sameAs, portrait
    publications.ts       manuscripts (status drives label + order)
    awards.ts             the 2026 university honour + 3 competitions
                          (Chinese originals kept, never rendered)
    education.ts          degrees
    labs.ts               research groups: name, role, supervisor, optional links
    activities.ts         memberships, volunteer and community roles
    site.ts               URL, title, description, locale, email, updated, location
    index.ts              barrel + sorted lists: paperList, awardList,
                          degreeList, activityList
  lib/
    types.ts              the only schema (Profile, Publication, Award,
                          Education, Activity, Lab, Link)
    format.ts             dates, period, status label; sorting for papers,
                          awards and degrees (activities sort in index.ts)
  styles/
    tokens.css            colour, type scale, spacing
    base.css              reset, .page/.block/.rows primitives, .ulink, print
  components/
    Hero.astro            role, name, location, one paragraph, keywords, links,
                          portrait on a paper mat
    Block.astro           section shell: hairline + mono label; `count` prop
                          exists but is never passed
    Education.astro       degrees
    Lab.astro             research groups
    Awards.astro          competition results
    Publications.astro    manuscripts
    Activities.astro      memberships and service
    Contact.astro         email, location, profile links again
    Footer.astro          © line only, column-width rule
    Background.astro      fixed corner artwork, geometry built at build time
    Icon.astro            single arrow glyph
  layouts/
    BaseLayout.astro      head, SEO, JSON-LD, fonts, <Background>, <main>, <Footer>
  pages/
    index.astro           hero + six sections, each gated on a non-empty array
  assets/
    emon.jpg              portrait source (500×500) — the only copy in the repo
public/
  favicon.svg  robots.txt  sitemap.xml
.github/workflows/deploy.yml   build + deploy to GitHub Pages on push to main
.vscode/                  git-ignored; editor files stay local
```

---

## 4. Design tokens

```
--paper   #f6f4ef      --ink      #16150f     --muted   #6d6a5e
--paper-hi #fbfaf7     --ink-soft #3a372e     --rule    #dcd7cb
--accent  #c8361c      (only: section numbers, award level, hover,
                        focus ring, email arrow, one dot per background plate)
```

- Type: `--fs-name` clamp(2rem, 6.4vw, 3.05rem), body 1rem/1.65, small .875rem,
  micro .625rem monospace for every label, count, date and venue.
- Rhythm: sections separated by `--block` (2.75–4rem) plus a 1px hairline.
- Rules: content-width only — the footer rule spans the column, never the viewport.
- No shadows, no radii, no cards, no icons except the ↗ glyph.
- Portrait: square inside a `clamp(5.75rem, 18vw, 7.5rem)` box, 5px paper mat,
  one 1px hairline (rgba ink .24) — a mounted print, never a card: no tint, no
  radius, no shadow, no type near it.
- Background: two plates of one modular composition — a 5 x 5 grid holding
  quarter-arcs, discs, concentric rings, a diagonal and hairline registration
  crosses. Plate A sits flush in the top-right corner with its solid shapes
  filled; plate B is the same grid rotated 180 degrees in the bottom-left
  corner, outline only. Solid and traced — physical and digital — with no text
  and no claim attached to it.
  - Composition is data: the `PATTERN` array at the top of `Background.astro`,
    one spaced string per row, legend in that file's header comment.
  - One ink tone, `color-mix(ink 18%, paper)`; one `--accent` dot per plate.
  - No CSS mask, filter or blend mode. Each plate fades toward the column with
    a diagonal gradient stroke (faint at its outer corner, solid at the inner
    end), so the artwork never reaches full contrast behind body text.
  - Width `clamp(14rem, (100vw - 44rem)/2 + 4rem, 30rem)` — the margin beside
    the column plus a little that fades under it.
  - Opacity 1 → .7 at ≤1180px → .5 at ≤900px → .45 at ≤480px, where the width
    drops to `min(56vw, 22rem)` and `62vw`. CSS-only 0.9s fade-in, removed
    under `prefers-reduced-motion`; hidden in print and `forced-colors`.
  - Fixed, `aria-hidden`, `pointer-events: none`, `contain: strict`, `z-index: 0`
    beneath `.page` / `.foot` (both `z-index: 1`).

---

## 5. Adding or updating content

| Task | Where |
| --- | --- |
| New paper | append to `publications.ts` |
| Paper accepted | set `status: 'accepted'`, add `doi`/`url` — label and order update |
| New award | append to `awards.ts` |
| New degree | append to `education.ts` |
| New lab or group | append to `labs.ts`; `url` / `supervisorUrl` optional |
| New activity | append to `activities.ts`; `end: null` renders as Present |
| Change photo | replace `src/assets/emon.jpg` (square, 500px is enough at the rendered 112px) |
| Change copy | `profile.ts` / `site.ts` |
| Change background | edit the `PATTERN` array in `Background.astro` |

`npm run build` fails on a malformed entry, because every data file ends with
`satisfies <Type>`.

---

## 6. SEO / a11y / performance

- `<title>Ayub Ali Emon</title>`, description, canonical, OG + Twitter, 500×500
  JPEG generated from the portrait at build time.
- JSON-LD `Person` + `ProfilePage`; `sameAs` = ORCID, ResearchGate, LinkedIn.
- `public/robots.txt`, `public/sitemap.xml`.
- One `h1`; each section is `<section aria-labelledby>` with an `h2`.
- Contrast: muted on paper ≈ 5.6:1, accent ≈ 4.7:1. `:focus-visible` = 2px accent.
- Budget (`npx astro build`, 2026-11-12): HTML 22 KB, CSS 11 KB, fonts 2 files
  65 KB, portrait 2.5 KB / 6 KB (webp 1x / 2x), social JPEG 25 KB, zero
  JavaScript. The background is 4.5 KB of that HTML (path data repeated for
  both plates) — the largest single item on the page and the first thing to
  trim if it ever needs to shrink.

---

## 7. Local toolchain

The managed Node here is 22.23.2; **Astro 7 requires ≥ 22.23.4**. Use the system
Node 24 for builds:

```powershell
$env:PATH = "C:\Program Files\nodejs;" + $env:PATH
npm run build
```

`sharp` must stay a direct dependency and external in `vite.ssr`, otherwise image
optimisation fails during build. `src/assets/emon.jpg` is the single portrait
source; `public/emon.jpg` was removed to avoid two copies drifting apart.

---

## 8. Deliberate omissions — do not invent

- No publications: all three manuscripts are submitted, no DOI, no preprint.
- No PhD-availability claim.
- No projects section, no lab member list, no collaborator profiles.
- No certificate numbers or team IDs — the awards list carries the result,
  the competition and the issuer only.
- No GitHub/profile link (not supplied).
- No submission months beyond the year 2026.
- Chinese source strings stay in `titleZh` / `issuerZh` only.

---

## 9. Deployment

`site: https://aa-emon.github.io`, `base: '/'`. The page is **live** at that URL;
`main` is the published branch. `.github/workflows/deploy.yml` runs on every push
to `main` (Node 24 → `npm ci` → `npm run build` → upload `dist` → deploy), so a
committed change goes public on its own. Local work stays local until it is
pushed. If the repo ever becomes a project page, change `base` only.


