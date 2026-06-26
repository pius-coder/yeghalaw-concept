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
- **Deployment:** Adapter-auto (Vercel, Cloudflare Pages, Netlify, etc.)

## Commands
- `npm run dev` — Start dev server (Vite)
- `npm run build` — Production build (`vite build`)
- `npm run check` — Type-check (`svelte-check --tsconfig ./tsconfig.json`)
- `npm run lint` — Prettier format check
- `npm run format` — Prettier auto-format

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
    +layout.css         # Root layout CSS (Tailwind imports, @theme tokens)
    +page.svelte        # Index page
    +page.ts            # Index page load function
  lib/
    components/
      ui/               # Primitive components (buttons, badges, links)
      layout/           # Layout components (NavBar, Footer, Header)
      sections/         # Page sections (HeroSection, ServicesSection)
      icons.tsx         # Wait — no, use Phosphor or extract SVGs as .svelte components
    utils/
      cn.ts             # cn() utility for class merging (if needed)
      index.ts          # Barrel exports (optional)
types/                  # TypeScript interfaces (optional, can live in lib/)
static/
  images/               # Downloaded images from target site
  videos/               # Downloaded videos from target site
  seo/                  # Favicons, OG images, webmanifest
docs/
  research/             # Inspection output (design tokens, components, layout)
  design-references/    # Screenshots and visual references
scripts/                # Asset download scripts
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
