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
| Content scope | Personal info, education, papers, competitions. **No projects section, no people/lab section.** |
| Tone | Descriptive text kept to one short paragraph. Lists carry the rest. |
| Layout | Single centred column, `--page: 44rem`, left-aligned text inside it. |
| Theme | Light only. No dark mode. |
| Stack | Astro 7 static. No Tailwind, no UI framework, no client JS. |
| Fonts | Archivo (400–700) + JetBrains Mono, self-hosted via the Astro Fonts API. |
| Status | Private. Nothing deployed. |

---

## 2. Page structure

```
hero      role · name · location · portrait (square, no frame, no caption) · one paragraph · keywords · links
01        Education      (2 degrees, each with location)
02        Lab            (CogTwins Lab + supervisor; add one object per group)
03        Awards         (3 competition results, newest first)
04        Publications   (3 submitted manuscripts)
05        Activities     (memberships, volunteer and community roles)
06        Contact        (email + location + profile links)
footer    ©
```

No counts are printed in section headers. `publications[].url` / `.doi` and
`labs[].url` / `.supervisorUrl` are optional — when present the title or name
becomes a link, when absent the same text renders plain.

Every section is optional: if its data array is empty, the component is not
rendered and its number does not appear.

---

## 3. File map

```
astro.config.mjs          site/base, fonts, sharp externals
PROJECT.md                this file
src/
  data/
    profile.ts            name, role, affiliation, bio, interests, links, portrait
    publications.ts       manuscripts (status drives label + order)
    awards.ts             competitions (Chinese originals kept, not rendered)
    education.ts          degrees
    activities.ts         memberships, volunteer and community roles
    site.ts               URL, title, description, updated date
    index.ts              barrel + sorted derived lists
  lib/
    types.ts              the only schema (Profile, Publication, Award, Education, Link)
    format.ts             dates, period, status label, sorting
  styles/
    tokens.css            colour, type scale, spacing
    base.css              reset, .page/.block/.rows primitives, .ulink, print
  components/
    Hero.astro            the opening block
    Block.astro           section shell: hairline + mono label + count
    Publications.astro
    Awards.astro
    Education.astro
    Activities.astro
    Contact.astro
    Footer.astro
    Icon.astro            single arrow glyph
  layouts/
    BaseLayout.astro      head, SEO, JSON-LD, fonts, <main>
  pages/
    index.astro           composes the four sections
  assets/
    emon.jpg              portrait source (500×500) — the only copy in the repo
public/
  favicon.svg  robots.txt  sitemap.xml
.github/workflows/deploy.yml   GitHub Pages build (inert until Pages is enabled)
```

---

## 4. Design tokens

```
--paper   #f6f4ef      --ink      #16150f     --muted   #6d6a5e
--paper-hi #fbfaf7     --ink-soft #3a372e     --rule    #dcd7cb
--accent  #c8361c      (only: section numbers, award level, hover, email arrow)
```

- Type: `--fs-name` clamp(2rem, 6.4vw, 3.05rem), body 1rem/1.65, small .875rem,
  micro .625rem monospace for every label, count, date and venue.
- Rhythm: sections separated by `--block` (2.75–4rem) plus a 1px hairline.
- Rules: content-width only — the footer rule spans the column, never the viewport.
- No shadows, no radii, no cards, no icons except the ↗ glyph.
- Portrait: 112px square, no border, no caption, no rules — the photo is the only framed element and it carries no type.
- Background: a halftone field (12px dot pattern, radial mask) fading out of
  the top-right corner with two construction circles through it, all in
  `--rule`. Fixed, `aria-hidden`, `pointer-events: none`, 55% opacity under
  720px, hidden in print. It must never sit behind body text at full contrast.

---

## 5. Adding or updating content

| Task | Where |
| --- | --- |
| New paper | append to `publications.ts` |
| Paper accepted | set `status: 'accepted'`, add `doi`/`url` — label and order update |
| New award | append to `awards.ts` |
| New degree | append to `education.ts` |
| New activity | append to `activities.ts`; `end: null` renders as Present |
| Change photo | replace `src/assets/emon.jpg` (square, 500px is enough at the rendered 112px) |
| Change copy | `profile.ts` / `site.ts` |

`npm run build` fails on a malformed entry, because every data file ends with
`satisfies <Type>`.

---

## 6. SEO / a11y / performance

- `<title>Ayub Ali Emon</title>`, description, canonical, OG + Twitter, 800×800
  social image generated from the portrait.
- JSON-LD `Person` + `ProfilePage`; `sameAs` = ORCID, ResearchGate.
- `public/robots.txt`, `public/sitemap.xml`.
- One `h1`; each section is `<section aria-labelledby>` with an `h2`.
- Contrast: muted on paper ≈ 5.6:1, accent ≈ 4.7:1. `:focus-visible` = 2px accent.
- Budget: HTML ≈ 12 KB, CSS ≈ 12 KB, fonts 2 files ≈ 66 KB, portrait 2–6 KB,
  zero JavaScript.

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

`site: https://aa-emon.github.io`, `base: '/'`. If the repo becomes a project
page, change `base` only. `.github/workflows/deploy.yml` runs on Node 24 and
publishes `dist/` once GitHub Pages → Source is set to GitHub Actions.





