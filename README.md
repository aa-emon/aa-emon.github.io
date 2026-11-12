# Ayub Ali Emon — academic profile

The one-page academic profile of **Ayub Ali Emon**, MSc candidate in computer
science at Shandong University of Science and Technology, Qingdao. Research on
AI agents, large language models and industrial AI.

Live at **<https://aa-emon.github.io>**.

A single centred column of type: no navigation, no cards, no client-side
JavaScript, no dark mode. One accent colour, hairline rules, monospaced
metadata, and a fixed two-plate background composition in the margins. The page
is data-driven — the five list sections are typed arrays, and each one
disappears when its array is empty, taking its section number with it.

## Stack

| Layer | Choice |
| --- | --- |
| Framework | [Astro](https://astro.build) 7, static output |
| Styling | Hand-written CSS (`src/styles/`), custom properties, no framework |
| Type | Archivo + JetBrains Mono, self-hosted through the Astro Fonts API |
| Images | `astro:assets` + `sharp` — responsive WebP portrait, 500×500 social JPEG |
| Scripts | None. Motion is one 0.9s artwork fade plus short hover transitions; the fade is dropped under `prefers-reduced-motion` |

## Requirements

- **Node ≥ 22.23.4** (`engines` in `package.json`). Astro 7 will not build on
  anything older.
- npm (the repo ships `package-lock.json`).

## Getting started

```sh
npm install
npm run dev        # http://localhost:4321
```

## Commands

| Command | Action |
| --- | --- |
| `npm install` | Install dependencies |
| `npm run dev` | Dev server on `localhost:4321`, reachable on the LAN (`--host`) |
| `npm run build` | Static build into `./dist/` |
| `npm run preview` | Serve the built output locally |
| `npm run astro ...` | Astro CLI (`astro add`, `astro info`, …) |

## Structure

```text
src/
  data/        typed content, one file per section + index.ts barrel
  lib/         types.ts (the schema) and format.ts (dates, labels, sorting)
  styles/      tokens.css (colour, type, rhythm) and base.css (reset, primitives)
  components/  one Astro component per section, plus Block, Background, Icon, Footer
  layouts/     BaseLayout.astro — head, SEO, JSON-LD, fonts, shell
  pages/       index.astro — composes the page from the data
  assets/      emon.jpg, the single portrait source
public/        favicon.svg, robots.txt, sitemap.xml
```

`PROJECT.md` is the source of truth for intent, structure, tokens and
constraints. Read it before changing layout or copy.

## Editing content

Almost everything lives in `src/data/`. Components never read the data files
directly; they import from `src/data/index.ts`.

| I want to… | Edit |
| --- | --- |
| Change the bio, keywords or links | `profile.ts` |
| Add a paper, or mark one accepted | `publications.ts` (`status` drives the label and order) |
| Add an award | `awards.ts` |
| Add a degree | `education.ts` |
| Add a lab or research group | `labs.ts` |
| Add a membership or volunteer role | `activities.ts` (`end: null` renders as Present) |
| Change the photo | replace `src/assets/emon.jpg` (square; 500px is enough) |
| Change the title, description or URL | `site.ts` |
| Change the background pattern | the `PATTERN` array in `components/Background.astro` |

Each data file ends with `satisfies <Type>`, so `npm run build` fails loudly on a
malformed entry rather than rendering something half-formed.

## Design rules

These are constraints, not preferences:

- **Minimalism + Swiss.** One column (`--page: 44rem`), left-aligned inside it,
  hairlines instead of boxes, monospaced micro-labels, generous vertical rhythm.
- **One accent.** `--accent` appears only on section numbers, award level, the
  email arrow, focus rings, hover states and the dot on each background plate.
- **No dark mode.** Light paper only; `color-scheme: light` is declared.
- **No client JavaScript.** Everything is rendered at build time.
- **English only.** Chinese source strings are kept in `titleZh` / `issuerZh`
  for provenance and are never rendered.

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds on Node
24 and publishes `dist/` to GitHub Pages.

`site` is set to the root domain and `base` to `/` in `astro.config.mjs`. If this
ever becomes a project page, change `base` only — internal links already resolve
against `BASE_URL`.

## Credits

Built with [Astro](https://astro.build). Typefaces: [Archivo](https://fonts.google.com/specimen/Archivo) and
[JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono).
