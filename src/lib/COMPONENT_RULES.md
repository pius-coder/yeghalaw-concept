# Règles de composants - Yegha Law Firm

## Structure

```
src/lib/
  components/
    ui/          ← boutons, badges, liens, icônes
    layout/      ← NavBar, Footer, Header
    sections/    ← HeroSection, ServicesSection, etc.
  utils/         ← helpers, fonctions pures
```

## Règles Styling

1. **UNIQUEMENT Tailwind** — pas de `<style>`, pas de CSS inline, pas de classes custom
2. Utiliser les design tokens : `bg-primary`, `text-clean`, `border-secondary`, `font-heading`, etc.
3. Responsive : `sm:` | `md:` | `lg:` | `xl:`
4. Pas de `@apply` — utiliser les classes directement dans le HTML

## Règles Icons

- Package : `phosphor-svelte`
- Import (recommandé pour la perf) :
  ```svelte
  import IconName from "phosphor-svelte/lib/IconName";
  ```
- Props :
  - `size={number}` — taille en px (défaut: 1em)
  - `weight="regular" | "fill" | "bold" | "thin" | "light" | "duotone"`
  - `color="currentColor"` — inherits la couleur du parent
- Styling : utiliser les classes Tailwind sur le parent (`text-primary`, `w-5 h-5`)

## Règles Composants

- Script : `<script lang="ts">` avec Svelte 5 runes (`$props`, `$state`, `$derived`)
- Props : typées avec interface inline
- Export : composant par fichier, nom = PascalCase
- Accessibilité : `aria-label` sur boutons/liens interactifs
- Événements : utiliser `onclick`, `onkeydown` (Svelte 5 syntax)

## Règles Navigation Mobile

- **UN seul `<nav>`** qui change de forme via classes conditionnelles
- Fermé : `rounded-full px-4 py-3` (pill)
- Ouvert : `rounded-2xl p-6` (card)
- Le contenu se rend à l'intérieur du même élément avec `{#if}`
- Pas de deux éléments séparés qui apparaissent/disparaissent
- Overlay (`bg-black/10`) rendu DERIÈRE le nav, pas dans le même bloc

## Ajouter un nouveau composant

1. Créer `src/lib/components/[category]/NomComposant.svelte`
2. Utiliser **UNIQUEMENT** Tailwind pour le style
3. Importer icons via `phosphor-svelte/lib/NomIcon`
4. Exporter avec props typées
5. Importer via `$lib/components/[category]/NomComposant.svelte`

## Design Tokens disponibles

| Token | Valeur | Usage Tailwind |
|-------|--------|----------------|
| `--color-primary` | `#0e3a27` | `bg-primary`, `text-primary` |
| `--color-secondary` | `#e6eecd` | `bg-secondary`, `text-secondary` |
| `--color-clean` | `#f6f4ed` | `bg-clean`, `text-clean` |
| `--color-bg` | `#ecebe4` | `bg-bg` |
| `--color-text` | `#04070d` | `text-text` |
| `--color-white` | `#ffffff` | `bg-white`, `text-white` |
| `--font-sans` | Manrope | `font-sans` |
| `--font-heading` | Poppins | `font-heading` |
| `--font-serif` | Playfair Display | `font-serif` |

## Transition Utilities

Utiliser les classes de transition prédéfinies (dans `layout.css`) :

| Classe | Description | Durée |
|--------|-------------|-------|
| `transition-base` | Couleurs, background, border, shadow, opacity | 200ms |
| `transition-fast` | Idem mais plus rapide | 100ms |
| `transition-slow` | Idem mais plus lent | 350ms |
| `transition-transform` | Transform uniquement | 200ms |
| `transition-all` | Toutes les propriétés | 200ms |

### Animations

| Classe | Description |
|--------|-------------|
| `fade-in` | Apparition en fondu |
| `fade-in-slow` | Apparition en fondu (lent) |
| `slide-down` | Slide depuis le haut |
| `slide-down-slow` | Slide depuis le haut (lent) |
| `slide-up` | Slide depuis le bas |
| `scale-in` | Apparition avec zoom |

### Exemple

```svelte
<button class="transition-base hover:opacity-80">Cliquer</button>
<div class="fade-in">Contenu animé</div>
```
