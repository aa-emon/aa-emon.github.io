// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

// User site: https://aa-emon.github.io. If this repo becomes a *project* repo,
// only `base` needs to change (e.g. '/aa-emon.github.io/'); every internal link
// uses BASE_URL or relative paths.
export default defineConfig({
  site: 'https://aa-emon.github.io',
  base: '/',

  // Astro 7 defaults to 'jsx', which strips the space between inline elements.
  // This page is prose with inline <em>/<a>, so keep HTML-aware compression.
  compressHTML: true,

  build: {
    inlineStylesheets: 'auto',
  },

  // sharp ships native binaries; it must stay external to the build bundle.
  vite: {
    ssr: {
      external: ['sharp'],
    },
  },

  fonts: [
    {
      provider: fontProviders.google(),
      name: 'Archivo',
      cssVariable: '--font-sans',
      weights: ['400 700'],
      styles: ['normal'],
      subsets: ['latin'],
      fallbacks: ['sans-serif'],
    },
    {
      provider: fontProviders.google(),
      name: 'JetBrains Mono',
      cssVariable: '--font-mono',
      weights: [400, 500],
      styles: ['normal'],
      subsets: ['latin'],
      fallbacks: ['monospace'],
    },
  ],
});
