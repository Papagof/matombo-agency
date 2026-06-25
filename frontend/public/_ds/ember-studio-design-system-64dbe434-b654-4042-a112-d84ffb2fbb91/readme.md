# Ember Studio — Design System

A warm, craft-focused design system for **creative project-management tools**. The aesthetic blends terracotta warmth with modern minimalism — soft earth tones anchor the interface while amber accents draw attention to actions and progress. Built for teams that value aesthetics alongside productivity. The mood is **calm, focused, and subtly luxurious**.

> **Source:** This system was authored from a written brand brief (the "Ember Studio" spec). No external codebase or Figma file was provided — there are no upstream links to track. If a canonical product codebase or Figma library exists, share it and this system can be reconciled against it.

---

## Content fundamentals

How Ember Studio writes copy.

- **Voice:** warm, calm, human, unhurried. Encouraging without being chirpy. We talk *with* the user, not *at* them.
- **Person:** address the user as **you** ("Assigned to you", "Nice work — moved to Done"). Refer to the team as **your team**.
- **Casing:** **sentence case** everywhere — buttons, headings, nav, menus ("New project", not "New Project"). Overlines are the one exception (uppercase, tracked).
- **Tone examples:**
  - Empty/affirming: *"Nice work — moved to Done."*
  - Action labels: *"New project"*, *"Create project"*, *"Continue"* — verbs, short.
  - Destructive confirmations are plain and honest: *"This removes the project and all its tasks. This can't be undone."*
  - Metadata is quiet and factual: *"Updated 2 hours ago"*, *"6 assigned to you"*, *"Due Oct 4"*.
- **Punctuation:** em dashes for warmth; avoid exclamation marks (one, rarely). No ALL-CAPS shouting.
- **Emoji:** **none.** The warmth comes from color and type, not emoji or ornament.
- **Numbers:** spell out counts in prose where natural ("4 active"), use digits in UI chips/badges.

---

## Visual foundations

- **Color vibe:** warm earth tones throughout. **Terracotta (#C2410C)** is the anchor and is used *only* for interactive and active states — CTAs, links, active nav, focus rings, progress fills, selected borders. **Amber (#F59E0B)** is the accent, reserved for attention-drawing elements only (notification dots, "new" badges). Neutrals are **warm stone**, never cool/blue-gray. Never pure black or pure white — the darkest text is `#1C1917`, the page is cream `#FAFAF9`.
- **Type:** the signature is **serif/sans contrast** — **Playfair Display** (bold, `-0.02em` tracking) for display & headings; **Source Sans 3** (400 + 600) for all body/UI; **Fira Code** (ligatures on) for code. Max **two weights per screen** (regular + semibold).
- **Spacing:** strict **4px grid** — 4 · 8 · 12 · 16 · 20 · 24 · 32 · 40 · 48 · 64 · 80. Container max 1200px with 24px gutters; sidebar 256px.
- **Backgrounds:** flat warm color only. **No gradients, no images, no patterns, no textures.** Page is `--bg-page` cream; cards/panels sit on `--surface`.
- **Corner radii:** never mixed — **4px** inline code/small badges, **8px** buttons/inputs/selects, **12px** cards/panels/modals/popovers, **9999px** avatars/chips/pills/progress bars.
- **Cards:** warm surface, **1px stone border**, 12px radius, 16px padding. Rest **flat** (no shadow). On hover they **lift 2px** and gain a soft warm shadow `0 4px 16px rgba(28,25,23,0.06)`. A **4px colored left stripe** marks a project's color; **selected** cards swap to a **2px terracotta left border**.
- **Shadows (warm, stone-tinted):** card-hover `0 4px 16px rgba(28,25,23,0.06)` · popover `0 8px 24px rgba(28,25,23,0.08)` · modal `0 24px 48px rgba(28,25,23,0.12)`. Primary buttons get a warm **glow** on hover `0 4px 12px rgba(194,65,12,0.25)`. No inner shadows.
- **Borders:** 1px `--border` (#D6D3D1) for card edges, dividers, inputs. 2px terracotta for selected/active accents; 3px terracotta left bar for the active nav item.
- **Focus state:** border turns terracotta + a 3px warm ring `0 0 0 3px rgba(194,65,12,0.12)`.
- **Hover state:** surfaces tint to `--surface-raised`; primary buttons darken to burnt sienna `#9A3412` + glow; links darken to burnt sienna.
- **Press state:** color shift (no scale shrink) — keep motion calm.
- **Animation:** restrained. **150ms ease** for interactive transitions (button, hover, focus); **300ms ease** for progress-bar fills. Fades and width/color tweens only — **no bounces, no infinite loops**, nothing flashy.
- **Transparency & blur:** used sparingly and intentionally — the **nav/topbar** is translucent cream with `backdrop-filter: blur(8px)`; **modal backdrops** use `rgba(28,25,23,0.35)` + `blur(4px)`. Not decorative elsewhere.
- **Layout rules:** sidebar fixed at 256px; topbar sticky/translucent; content max 1200px. Single primary CTA per view.
- **Imagery:** the system ships no photography. If imagery is added, keep it **warm-toned** to match the palette.
- **Ornament:** none. *"The warmth comes from the color palette, not ornament."*

---

## Iconography

- **System:** **Lucide** (lucide.dev, MIT) — 24×24 grid, **2px stroke**, round caps & joins, no fill. This stroke style matches the calm, light-touch aesthetic.
- **Implementation:** the `Icon` component (`components/core/Icon.jsx`) ships a **curated subset** (~32 names — see `ICON_NAMES`) embedded as Lucide path data, so it works inside the bundle with no external request. Icons inherit color via `currentColor` and size in px.
- **Extending:** for a name outside the curated set, either add the official Lucide path to the `PATHS` map, or link Lucide from CDN. **Never hand-roll SVG icons** — always use official Lucide path data.
- **Emoji / unicode as icons:** **never.** All iconography goes through Lucide.
- **Logo:** `assets/logo.svg` (flame logomark + "Ember Studio" wordmark) and `assets/logomark.svg` (terracotta rounded-square mark, for compact placements like the sidebar). The flame nods to "Ember"; the mark uses the official Lucide `flame` glyph.

---

## Index / manifest

**Root**
- `styles.css` — global entry point (consumers link this). `@import` list only.
- `tokens/` — `fonts.css` (Google Fonts), `colors.css`, `typography.css`, `spacing.css`, `elevation.css` (radius + shadow + motion), `base.css` (reset).
- `assets/` — `logo.svg`, `logomark.svg`.
- `SKILL.md` — Agent-Skill manifest for using this system in Claude Code.

**Components** (`window.EmberStudioDesignSystem_64dbe4.*`)
- `components/core/` — **Button**, **Icon** (+ `ICON_NAMES`)
- `components/forms/` — **Input**, **Select**, **Checkbox**, **Switch**
- `components/display/` — **Card**, **Badge**, **Chip**, **Avatar** / **AvatarGroup**, **ProgressBar**, **Tabs**
- `components/feedback/` — **Dialog**, **Toast**

Each directory has `<Name>.jsx`, `<Name>.d.ts`, a `.prompt.md`, and a `@dsCard`-tagged `*.card.html` specimen.

**UI kits**
- `ui_kits/ember-studio-app/` — full creative project-management workspace (sidebar, projects grid, kanban board, dialog, toasts). Entry: `index.html`. Also registered as a **starting point**.

**Guidelines / specimen cards** (`guidelines/*.card.html`) — Colors (brand, neutrals, semantic), Type (display, body, code), Spacing (scale, radius & elevation), Brand (logo). These populate the Design System tab.

---

## Do's & Don'ts

**Do**
- Use terracotta only for interactive/active states — never decoration.
- Keep the 4px spacing grid.
- Pair Playfair (headings) with Source Sans (body) — the contrast is the signature.
- Keep neutrals warm; avoid cool/blue grays.
- Use amber sparingly, for attention only.

**Don't**
- Use more than two font weights on a screen.
- Mix radii (buttons 8px, cards 12px).
- Use pure black/white.
- Add decorative elements — warmth comes from color, not ornament.
- Place more than one terracotta primary button in a section.
