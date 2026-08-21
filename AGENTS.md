# AGENTS.md

This repository is a **design showcase built by agents**. Each agent contributes one **set of five frontend designs**, and every set shares one subject: **the ox**. This document is your brief: read it fully before writing code.

**Why these rules exist**: everything below is here to stop agents from cheating on the subject — faking the ox, dodging it, or drawing it just well enough to pass — not to demand originality for its own sake. When two rules pull in different directions, the ox wins.

## What this project is

A Vite + React single-page app that hosts multiple **sets**. A set is a folder containing exactly five self-contained full-page designs plus a manifest. The shell (set switcher, design dock, persistence) already exists — you only add a set.

Current sets live in `src/showcase/sets/`. Read one (e.g. `ox-atlas/`) as a reference before starting.

## The subject: the ox

Every design you make portrays **the ox** — this is mandatory subject matter, not optional inspiration.

- **Scope**: the broad bovine family — domestic ox, bull, zebu, water buffalo, yak, bison — plus mythic bovines (Nandi, the minotaur, Taurus) where culturally grounded.
- **Per-design floor**: each of the five designs contains at least one **recognizable ox figure or silhouette drawn as hand-built inline SVG**.
- **Five facets rule**: the five designs must each take a different facet of the animal — anatomy, breed, labour, mythology, region, and so on — so a set reads as five views of one ox, never one idea repeated five times.
- **What counts as cheating** — any one of these fails a design, no matter how good the rest looks:
  - Bovine presence limited to a horn motif, an "OX" wordmark, or abstraction so stylized no viewer sees an animal.
  - The same SVG figure reused across designs with only recolors, crops, or mirrors.
  - Artwork copied from or closely tracing another set's ox.
  - A page that would still make sense if every trace of the ox were removed — when in doubt, apply that test before submitting.

## Your task

1. Create `src/showcase/sets/<your-set-id>/` containing:
   - `manifest.js` — exports `{ id, name, tagline, accent, credit, designs }`, where `designs` is an array of five entries `{ id, num, name, tag, chip, Component }` and each `Component` is `lazy(() => import('./Design.jsx'))`.
   - Five design components (`Design.jsx`) with one co-located CSS file each (`import './design.css'`).
2. Register your set with **one line** in `src/showcase/sets/index.js`.
3. Add any Google Fonts you need to the existing font `<link>` in `index.html` (append families; do not restructure).
4. Add your set to `README.md` under "The sets" as a new collapsible `<details>` block with a summary line and a five-row table.
5. Verify: `npm run build` passes and emits one chunk per design; `npm run dev` renders all five designs cleanly.

## Signing your work (mandatory)

Your set must be attributable three ways:

1. `credit` field in `manifest.js` — your agent name (shown on the set card in the manager modal).
2. The README `<summary>` line for your set — append "· designed by <your-name>".
3. **Inside every design**: a visible signature element carrying "SET <n> · DESIGNED BY <YOUR-NAME>", rendered natively in that design's visual vernacular (a seal, a colophon, a stamp, a label — never a plain footer line pasted verbatim into all five).

## Tech stack (must use)

- React 18 + Vite, automatic JSX runtime — do **not** write `import React`; import only named hooks you use.
- `framer-motion` (already installed) for motion. No other animation libraries.
- Hand-written CSS, one file per design. No Tailwind, no CSS-in-JS, no UI frameworks.
- All artwork hand-built as inline SVG. No external images, no icon fonts, no emoji as artwork.
- Fonts from Google Fonts only, loaded via `index.html`.

## Not allowed

- Modifying the shell: `App.jsx`, `ShowcaseContext.jsx`, `ThemeDock`, `SetBar`, `SetModal`, `base.css`, `dock.css`, `setbar.css`, `setmodal.css`, or another set's folder.
- Adding or upgrading npm dependencies; touching `vite.config.js`, `package.json`, or CI.
- Code comments anywhere.
- Lorem ipsum or placeholder copy — write real, subject-grounded copy.
- Forms, text inputs, or network calls.
- Generic template looks: no cream-background-plus-serif-plus-terracotta default, no near-black-with-one-acid-accent default, no broadsheet hairline-grid default unless your brief genuinely demands it.

## Quality bar

- **Five genuinely distinct directions** within your set: different palettes, type pairings, layouts, and motion languages. If two pages could swap CSS variables and still work, redesign one.
- **Ox presence**: every design visibly portrays the animal, per *The subject* section above.
- Define your palette as CSS custom properties on the theme root (`.th-<prefix>`), including a themed `::selection`.
- Prefix every class name with your set/design prefix (`.<prefix>-*`). Namespace every SVG `id` (`<prefix>-gradient`, `<prefix>-mask`) — ids are global across the bundle.
- Root element: `min-height: 100vh`, `position: relative`, `overflow-x: hidden`.
- Responsive down to 375px; fluid type via `clamp()`.
- Accessibility floor: exactly one `<h1>` per page; `aria-hidden="true"` on decorative SVGs; body-text contrast ≥ 4.5:1; `:focus-visible` styles on anything interactive; `lang` attributes on non-English runs.
- Motion: prefer transform/opacity; give loops seamless periods; the shell's global `MotionConfig reducedMotion="user"` and CSS reduced-motion rule handle user preferences — gate any manual rAF animations yourself.
- Typography is a design decision: pair display and body faces deliberately, never default to the same families across designs.

## Definition of done

- [ ] `npm run build` passes; five new chunks appear in `dist/assets`
- [ ] All five designs render without console errors at desktop and 375px widths
- [ ] Signature visible in all five designs; credit set in manifest and README
- [ ] A recognizable ox figure appears in all five designs
- [ ] README updated; no other files touched beyond the allowed list
- [ ] Commit message names the set (e.g. `Add <set name> set by <agent>`)
