<!-- BEGIN:sveltekit-agent-rules -->
# This is NOT the SvelteKit you know from training data

This project uses Svelte 5 runes mode and SvelteKit v2 with breaking changes from Svelte 4. APIs, conventions, and file structure differ significantly. Read the relevant docs before writing any code:

- `/node_modules/svelte/svelte-docs/llms.txt` — Svelte 5 runes, snippets, events
- `/node_modules/@sveltejs/kit/kit-docs/llms.txt` — SvelteKit v2 routing, load, form actions
- `/node_modules/tailwindcss/…` — Tailwind CSS v4 (CSS-first config, `@import "tailwindcss"`, no `tailwind.config.js`)

Heed deprecation notices. Do not use Svelte 4 patterns (`export let`, `on:click`, `$:`, `{#await}`) — use Svelte 5 runes (`$props`, `$state`, `$derived`, `$effect`, `onclick`, `{@render}`).
<!-- END:sveltekit-agent-rules -->

# Website Reverse-Engineer Template (SvelteKit)

## What This Is
A reusable template for reverse-engineering any website into a clean, modern SvelteKit codebase using AI coding agents. The SvelteKit + Tailwind CSS v4 base is pre-scaffolded — the goal-lock skill drives execution.

## Tech Stack
- **Framework:** SvelteKit v2 (Svelte 5 runes, TypeScript strict)
- **UI:** Tailwind CSS v4 (CSS-first config, `@theme` tokens, `@import "tailwindcss"`)
- **Icons:** Phosphor Svelte (import individual icons from `phosphor-svelte/lib/IconName`)
- **Styling:** Tailwind CSS v4 with CSS custom property design tokens
- **CMS:** Decap CMS (Git-based, files in `src/lib/content/`)
- **Testing:** Vitest v4
- **Deployment:** Cloudflare Pages (`@sveltejs/adapter-cloudflare`)

## Commands
- `npm run dev` — Start dev server (Vite)
- `npm run build` — Production build (`vite build`)
- `npm run check` — Type-check (`svelte-check --tsconfig ./tsconfig.json`)
- `npm run lint` — Prettier format check
- `npm run format` — Prettier auto-format
- `npm run test` — Run vitest tests

## Code Style
- TypeScript strict mode, no `any`
- Named exports, PascalCase components, camelCase utils
- Tailwind utility classes only — no `<style>` blocks, no inline styles, no `@apply`
- 2-space indentation, single quotes
- Responsive: mobile-first (`sm:` | `md:` | `lg:` | `xl:`)

## Design Principles
- **Pixel-perfect emulation** — match the target's spacing, colors, typography exactly
- **No personal aesthetic changes during emulation** — match 1:1 first, customize later
- **Real content** — use actual text and assets from the target site, not placeholders
- **Beauty-first** — every pixel matters

## Project Structure
```
src/
  app.html              # SvelteKit HTML shell
  app.d.ts              # Global type declarations
  routes/               # SvelteKit routes (file-based)
    +layout.svelte      # Root layout
    +page.svelte        # Index page (redirects to /en/)
    [lang=locale]/      # Multilingual routes (en/fr)
      +layout.svelte    # Locale-aware layout
      +page.svelte      # CMS-driven home page with all sections
      +page.server.ts   # Loads CMS data (home, settings)
      blog/             # Dynamic blog listing + [slug] detail
    api/
      contact/+server.ts # Contact form POST endpoint
    sitemap.xml/+server.ts # Dynamic multilingual sitemap
    contact/
    privacy/
  lib/
    cms/                # CMS types (Legacy — kept for component compatibility)
      types.ts          # TypeScript interfaces (HomePageContent, SiteSettings, Article, etc.)
      fallback.ts       # Default content when CMS unavailable
    content/            # Decap CMS content layer
      types.ts          # Bilingual storage types
      loaders.ts        # Content loader functions (getHomeContent, getSiteSettings, etc.)
      home.json         # Home page content (bilingual)
      settings.json     # Site settings (bilingual)
    components/
      ui/               # Primitive components (buttons, badges, links, CloudinaryImage, etc.)
      layout/           # Layout components (NavBar, Footer)
      sections/         # Page sections (HeroSection, ServicesSection, FaqSection, etc.)
    utils/
      cloudinary.ts     # Cloudinary URL builder + storyblokAssetUrl helper
      contact-validation.ts # Contact form validation logic
    i18n.svelte.ts      # Rune-based i18n with locale detection
    locales/            # JSON translation files (en.json, fr.json)
static/
  robots.txt
```

## Component Rules
See `src/lib/COMPONENT_RULES.md` for detailed component conventions (in French — design tokens, transition utilities, icon imports, mobile nav rules).

## MOST IMPORTANT NOTES
- Svelte 5 uses **runes** (`$props`, `$state`, `$derived`, `$effect`) — NOT Svelte 4 `export let`, `$:`, or `on:click`
- Event handlers use `onclick`, `onkeydown` syntax (not `on:click`, `on:keydown`)
- Conditionals use `{#if}` blocks; looping uses `{#each}` blocks
- Slot content uses `{@render children()}` with `$children()` rune — NOT `<slot />`
- When launching Claude Code agent teams, ALWAYS have each teammate work in their own worktree branch and merge everyone's work at the end, resolving any merge conflicts smartly since you are serving the orchestrator role with full context
- Import paths use `$lib/` alias (e.g., `$lib/components/ui/Button.svelte`)
- SvelteKit file-based routing: `+page.svelte`, `+layout.svelte`, `+page.ts`, `+server.ts`
- Run `npm run check` after any TypeScript changes to verify types
- Run `npm run build` before declaring any clone complete
- Run `npm run test` after adding/modifying test files

## Svelte 5 Quick Reference (runes mode)

| Svelte 4 (old) | Svelte 5 (this project) |
|---|---|
| `export let name` | `let { name } = $props()` |
| `let count = 0` | `let count = $state(0)` |
| `$: doubled = count * 2` | `let doubled = $derived(count * 2)` |
| `$: console.log(count)` | `$effect(() => console.log(count))` |
| `on:click={handler}` | `onclick={handler}` |
| `<slot />` | `{@render children()}` with `let { children } = $props()` |
| `bind:value` | `bind:value` (still works) |
| `{#await promise}` | `{#await promise}` (still works) |
| `<svelte:window>` | `<svelte:window>` (still works) |

## Docs for LLMs

This project follows the Svelte/SvelteKit llms.txt convention:

- `/node_modules/svelte/svelte-docs/llms.txt` — Svelte 5 core docs (runes, snippets, reactivity)
- `/node_modules/@sveltejs/kit/kit-docs/llms.txt` — SvelteKit v2 docs (routing, loading, actions, adapters)
- Full docs: `llms-full.txt` | Medium: `llms-medium.txt` | Small: `llms-small.txt` (at package root in node_modules)
