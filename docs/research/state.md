# Goal Lock State

- **Task ID:** archio-sveltekit-clone
- **Created:** 2026-06-23
- **Updated:** 2026-06-23
- **Depth:** deep
- **Task profile:** UI reconstruction / conversion
- **Current step:** 03-execute
- **Status:** in_progress

## Contract

### Goal
Pixel-perfect clone of https://archio-template.framer.website/ as a SvelteKit + Tailwind CSS v4 site, validated by surf screenshot comparison.

### Deliverables
- Complete SvelteKit components matching Framer template
- Visual diff proof via surf screenshots

### Explicit requirements
- Use surf CLI for screenshot comparison
- SvelteKit (not Next.js)
- Tailwind CSS v4 (CSS-first config)
- Svelte 5 runes
- Per-component read/write (one React file → one Svelte file)
- `save` directive: persist state
- `auto` directive: avoid unnecessary confirmations

### Source of truth
1. Rendered behavior at https://archio-template.framer.website/
2. React components in /home/kali/projects/yeghalawfirm/
3. Computed DOM/CSS from Framer template

### Acceptance criteria
| ID | Criterion | Required proof | Status |
|---|---|---|---|
| AC-1 | Build passes | `npm run build` | pending |
| AC-2 | Type-check passes | `npm run check` | pending |
| AC-3 | All sections render identical to original | surf screenshot comparison | pending |

### Inferred assumptions
- React components in /home/kali/projects/yeghalawfirm/ represent pixel-perfect Framer styling
- Archio template content (English) should be preserved, not replaced with YEGHA Law Firm French content

## Active slice
- **Active slice:** NavBar + utility components (ButtonMain, NavLink)
- **Status:** completed
- **Files created:** ButtonMain.svelte, NavLink.svelte
- **Files refactored:** NavBar.svelte

## Next slice
- **Next slice:** HeroSection
- **Source:** /home/kali/projects/yeghalawfirm/components/sections/HeroSection.tsx
- **Target:** src/lib/components/sections/HeroSection.svelte (NEW)
