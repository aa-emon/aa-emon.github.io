# PROJECT.md — Academic Portfolio (Ayub Ali Emon)

Single source of truth for this repository. Read this before editing anything.
If a session is interrupted, resume from §12 (Build log / status).

---

## 1. Intent

A one-page academic profile that presents Ayub Ali Emon as a researcher preparing for
PhD applications: credible, quiet, fast. It is **not** a startup landing page and not a
generic timeline template. It should read like a Swiss-typography printed prospectus that
happens to be a website.

Hard requirements from the owner:

| Requirement | Decision |
| --- | --- |
| Language | English only (on-page). Chinese source names are kept in data as provenance, never rendered. |
| Theme | Light only. No dark mode, no `prefers-color-scheme` switching. |
| Style | Minimalism × Swiss (International Typographic Style): grid, hairlines, flush-left type, one functional accent. |
| Responsive | 320 px → ultrawide. Verified at 375 / 768 / 1024 / 1440. |
| Performance | Static HTML + CSS, no UI framework, ≤ ~60 KB CSS/JS total, self-hosted subset fonts, LCP = portrait or headline. |
| SEO | Canonical, OG/Twitter, JSON-LD `Person` + `ProfilePage`, sitemap, robots, semantic landmarks. |
| Data | Every section is data-driven, typed, and renders conditionally. Adding one object must not require touching markup. |
| Scope | Single page. No router, no anchors beyond section ids. |

Status: **private / not deployed**. Nothing is published by this repo yet.

---

## 2. Stack

- **Astro 7.4.10** (`output: static`), Vite 8, Rust compiler.
- **No Tailwind.** Raw modern CSS: design tokens as custom properties, scoped `<style>`
  per component, one `global.css`. Rationale: bespoke editorial layout, zero utility-soup,
  smallest possible CSS, no extra build dependency.
- **No UI framework / no client islands.** ~40 lines of vanilla JS total
  (mobile index dialog + active-section highlighting).
- **Fonts via Astro's Fonts API** (`fonts:` config + `<Font />` from `astro:assets`).
  Fonts are downloaded at build time, self-hosted, subset to `latin`, preloaded, and get
  automatic size-adjust fallbacks (no CLS, no third-party requests at runtime).
- **Images via `astro:assets`** (`<Image />`) — the portrait is imported from
  `src/assets/`, so it is converted to WebP and given `srcset`/`sizes`.
- **Type safety**: `src/lib/types.ts` is the schema; every data file ends with
  `satisfies` so a malformed entry fails at type-check time.
- Verbatim HTML discipline: the Astro 7 Rust compiler **errors on unclosed tags** and does
  not auto-correct invalid nesting. Keep templates clean.
- `compressHTML: true` (not the v7 default `'jsx'`) so a space between inline elements
  (`<em>`, `<a>`) is never swallowed.

### Design decisions (and why)

| Decision | Why |
| --- | --- |
| One grotesk (Archivo) + one mono (JetBrains Mono) | Swiss discipline; mono carries metadata like a data sheet. No display/body font split, no serif. |
| Warm paper `#F4F1EB`, ink `#15140F`, vermillion `#C8361C` | Reads as printed matter, not SaaS white. Accent appears only as signal (index numbers, status, focus). |
| Hairlines as structure, never as card borders | Rules divide the page like a typographic grid; no floating cards, no shadows, no radii beyond 2 px. |
| Persistent left rail (desktop) = identity + index + links | Navigation without a "sticky navbar" cliché; also gives the page its spine. Sticky inside the grid, not `position: fixed`, so nothing can overlap. |
| Big single-family headline, tight tracking | The name is the only 7rem element on the page — hierarchy by scale, not by boxes. |
| Scroll reveal = hairline draw + 12 px rise, CSS scroll-driven only | Zero JS, cancels under `prefers-reduced-motion`, falls back to static where `animation-timeline` is unsupported. |
| Depth | No shadow anywhere; a 1 px ink line + 8 px paper-tint plate around the portrait only. |

---

## 3. File map

```
astro.config.mjs          site/base, fonts, image, build settings
PROJECT.md                this file
src/
  data/
    site.ts               SEO, URL, nav labels, colophon, contact order
    profile.ts            identity, bio, links, affiliations, portrait meta
    research.ts           research themes (feeds nav + Publications cross-refs)
    publications.ts       manuscripts / papers
    projects.ts           selected work
    awards.ts             competition results, grouped by level
    experience.ts         education + positions + (optional) teaching/service
    people.ts             lab, supervisor, collaborators
    index.ts              barrel + derived selectors (visible sections, numbering, sorts)
  lib/
    types.ts              all interfaces (single schema definition)
    format.ts             author list, date ranges, status labels, BibTeX writer
  styles/
    tokens.css            design tokens (color, type scale, space, motion)
    base.css              reset, typography defaults, utilities, print
  components/
    Rail.astro            desktop sticky rail (identity + index + links)
    TopBar.astro          mobile bar + <dialog> index
    SectionHeader.astro   hairline + index number + h2 + optional lead
    Hero.astro
    Research.astro
    Publications.astro
    Projects.astro
    Awards.astro
    Experience.astro
    People.astro
    Footer.astro
    Icon.astro            inline SVG sprite (arrow, mail, dot)
  layouts/
    BaseLayout.astro      <head>, SEO, JSON-LD, fonts, global css
  pages/
    index.astro           composes sections, conditional rendering
  assets/
    emon.jpg              portrait source (500×500, canonical)
public/
  robots.txt  sitemap.xml  favicon.svg  emon.jpg (OG fallback copy)
.github/workflows/deploy.yml   GitHub Pages build+deploy (inert until Pages is enabled)
```

---

## 4. Visual system

### Color (light only)

```
--paper      #F4F1EB   page
--paper-hi   #FBFAF7   raised plate (portrait frame, dialog)
--ink        #15140F   headings, body strong
--ink-soft   #35322A   body copy
--muted      #625E51   secondary meta (AA on paper)
--rule       #D9D3C6   hairline
--rule-ink   #15140F   structural rule at 100% (section tops)
--accent     #C8361C   signal only: index numbers, active state, focus ring
--accent-ink #A82B14   accent hover
```

### Type

```
--font-sans  Archivo        display + body          400 / 500 / 600
--font-mono  JetBrains Mono labels, dates, IDs     400 / 500
--fs-name    clamp(2.85rem, 8.4vw, 7.4rem)   lh .88  ls -.045em
--fs-h2      clamp(1.55rem, 3vw, 2.35rem)    lh 1.02 ls -.025em
--fs-h3      clamp(1.05rem, 1.4vw, 1.2rem)   lh 1.35 ls -.01em
--fs-body    1.0625rem (17px)                lh 1.62
--fs-lead    clamp(1.125rem, 1.6vw, 1.35rem) lh 1.5
--fs-meta    .6875rem (11px)  mono, uppercase, ls .13em
```

### Space & layout

```
--gutter  clamp(1.25rem, 4.2vw, 3.5rem)
--rail    15.5rem        desktop index rail
--measure 42rem          body column max
--section clamp(5rem, 11vh, 9.5rem)   vertical rhythm between sections
--hair    1px
```

Grid: `[rail][content]` above 1080 px; single column below. Content column is capped at
`--measure` for prose, but full-width rows (rules, tables) may use the whole column.

### Motion

```
--ease  cubic-bezier(.22,.61,.36,1)
--slow  700ms      --med 420ms      --fast 220ms
```
- Hero: staggered mask-up on first paint (CSS keyframes, no JS).
- Sections: `animation-timeline: view()` hairline draw + 12 px rise, guarded by `@supports`.
- Links: underline grows via `background-size` (paint-only).
- Everything collapses under `prefers-reduced-motion: reduce`.

---

## 5. Data model (authoritative)

Full interfaces live in `src/lib/types.ts`. Summary of intent:

- **`Publication`** — `id`, `title`, `authors[]` (with `self`, `corresponding`),
  `venue` (short + full + publisher), `year`, `status`
  (`submitted | under-review | revision | accepted | published | preprint`),
  `type` (`journal | conference | workshop | preprint`), optional `doi`, `url`,
  `pdf`, `code`, `abstract`, `note`, `keywords`, `selected`.
- **`Award`** — `id`, `title`, `titleZh` (provenance, not rendered), `prize`,
  `level` (`national | provincial | institutional | international`), `date`
  (`YYYY-MM`), `issued` (`YYYY-MM`), `issuer`, `issuerZh`, optional `reference`
  (`{label, value}` so certificate no. *or* team no. both fit), optional
  `projectId`, `scope` (e.g. campus round).
- **`ResearchTheme`** — `id`, `title`, `summary`, `keywords[]`, `paperIds[]`.
- **`Project`** — `id`, `title`, `subtitle`, `summary`, `detail[]`, `tags[]`,
  `period`, optional `links[]`, `awardId`, `featured`.
- **`ExperienceItem`** — `id`, `kind` (`education | research | industry | teaching |
  service`), `role`, `org`, optional `orgUrl`, optional `location`, `start`/`end`
  (either may be `null` → renders "Present"), `summary`, `bullets[]`, `tags[]`.
- **`Person`** — `id`, `name`, `role`, `affiliation`, `links[]`, `note`.
- **`Link`** — `label`, `href`, optional `icon` (`mail | arrow | orcid | scholar | lab`).

Derived data (`src/data/index.ts`): `navSections` (only sections with content — numbering
follows this list), `publicationCount`, `awardCount`, sorted `awardsByLevel`,
`timeline` (reverse-chronological, "Present" first).

### How to add content

- New paper → append an object to `publications.ts`. Nothing else.
- Paper gets accepted → change `status`, add `doi`/`url`; the status label, badge colour
  and BibTeX entry update automatically.
- New award → append to `awards.ts`; `reference` accepts any label/value pair.
- Hide a whole section → empty its array. The nav item, its number and its hairline
  disappear and the remaining numbers re-flow.

---

## 6. SEO

- `<title>`: `Ayub Ali Emon — Computer Science Researcher`
- Description (≤160 chars): master's candidate at SDUST working on industrial AI,
  multi-agent digital twins, and efficient large language models.
- Canonical from `Astro.site`; `og:image` generated from the portrait at 1200×630.
- JSON-LD `@graph`: `Person` (`sameAs`: ORCID, ResearchGate) + `ProfilePage`.
- `public/robots.txt`, `public/sitemap.xml` (single URL; no integration dependency).
- One `<h1>`; sections are `<h2>`; nothing skips a level.

---

## 7. Accessibility

- Skip link to `#main`.
- Landmarks: `header`/`nav` (rail), `main`, `footer`.
- Rail and dialog links carry `aria-current="true"` for the active section.
- `:focus-visible` = 2 px accent outline, 2 px offset.
- Contrast checked: `--muted` on `--paper` ≈ 5.6:1; accent on paper ≈ 4.9:1.
- Mobile index is a native `<dialog>` (Esc, backdrop click, focus handling free).
- No motion without `prefers-reduced-motion` opt-out; no hover-only information.

---

## 8. Performance budget

| Asset | Budget | Notes |
| --- | --- | --- |
| HTML | ≤ 35 KB | one page |
| CSS | ≤ 30 KB uncompressed | inlined by Astro `inlineStylesheets: 'auto'` |
| JS | ≤ 2 KB | mobile dialog + observer |
| Fonts | ≤ 3 files, ≤ 60 KB | Archivo 400/600 + JetBrains Mono 400, latin subset |
| Portrait | ≤ 60 KB | WebP, 280/360/500 widths |
| Requests | ≤ 8 | html, css, 3 fonts, 1–2 images |

---

## 9. Deployment (GitHub Pages)

`astro.config.mjs` assumes a **user site**: `site: https://aa-emon.github.io`, `base: '/'`.
If this repo is ever renamed to a project repo, set `base: '/<repo>/'` — all internal
links use `import.meta.env.BASE_URL` or relative paths, so nothing else changes.

`.github/workflows/deploy.yml` builds with Node 22 and publishes `dist/` when `main`
updates. It only takes effect after the owner enables Pages → Source: GitHub Actions.
Nothing is pushed or published by this work.

---

## 10. Content provenance / translation notes

Chinese source strings are stored verbatim in `titleZh` / `issuerZh` but rendered in
English. Translator choices worth a second look by the owner:

| Chinese | Rendered as |
| --- | --- |
| 先导智算专项校内赛-山东科技大学比赛 | Xiandao Intelligent Computing Programme — SDUST Campus Competition |
| 先导产业生态合作基地秘书处 | Secretariat, Xiandao Industrial Ecosystem Cooperation Base |
| 山东科技大学计算机科学与工程学院 | College of Computer Science and Engineering, SDUST |
| 首届山东省数字工程师创新创意大赛暨国际数字工程师邀请赛 | First Shandong Provincial Digital Engineer Innovation and Creativity Competition (International Digital Engineer Invitational) |
| 山东省人力资源和社会保障厅 | Shandong Provincial Department of Human Resources and Social Security |
| 2025年全国大学生计算机系统能力大赛 智能计算创新设计赛（先导杯） | 2025 National University Student Computer Systems Ability Competition — Intelligent Computing Innovation Design Track (Xiandao Cup) |
| 全国高等学校计算机教育研究会 | National Research Association for Computer Education in Higher Education |
| 优胜奖 | Excellence Award |
| 一等奖 | First Prize |
| 队伍编号 | Team ID |
| 证书编号 | Certificate No. |

---

## 11. Deliberate omissions (do not invent these later)

- No claimed publications: all three manuscripts are **submitted only**, no DOI, no
  preprint. The UI says so plainly.
- No PhD-availability claim (owner is still deciding).
- No lab member list, no co-author affiliations, no project role for IntelliFactory —
  none were provided.
- No GitHub/profile link for the owner (not supplied).
- No publication dates beyond the year 2026 (submission month not supplied).

---

## 12. Build log / status

- [x] Inventory repo, confirm Astro 7.4.10, Vite 8, Rust compiler, Fonts API stable.
- [x] Verify `fonts` config shape and `<Font />` / `<Image />` props against v7 docs.
- [x] Write PROJECT.md.
- [ ] Tokens + base CSS.
- [ ] Types + data.
- [ ] Layout + components.
- [ ] index composition.
- [ ] SEO/OG/sitemap/robots/favicon.
- [ ] GitHub Pages workflow.
- [ ] Build, type-check, browser verification at 375/768/1024/1440, a11y + perf pass.
