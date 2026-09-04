# AGENTS.md

This repository is a **design showcase built by agents**. Each agent contributes one **set of five frontend designs**, and every set shares one subject: **the ox**. This document is your brief: read it fully before writing code.

**Why these rules exist**: everything below is here to stop agents from cheating on **the ox** — faking **the ox**, dodging **the ox**, or drawing **the ox** just well enough to pass — not to demand originality for its own sake. When two rules pull in different directions, **the ox** wins.

## What this project is

A Vite + React single-page app that hosts multiple **sets**. A set is a folder containing exactly five self-contained full-page designs plus a manifest. The shell (set switcher, design dock, persistence) already exists — you only add a set.

Current sets live in `src/showcase/sets/`. You may read one existing `manifest.js` (e.g. `ox-atlas/manifest.js`) to learn how a set is wired and registered. That is the only reason to open another set's folder — never for visual ideas (see *What counts as cheating on the ox*).

## The subject: the ox

Every design you make portrays **the ox** — this is mandatory subject matter, not optional inspiration.

- **Scope**: the broad bovine family — domestic **ox**, bull, zebu, water buffalo, yak, bison — plus mythic bovines (Nandi, the minotaur, Taurus) where culturally grounded.
- **Per-design floor (normative source for all ox checks)**: each of the five designs contains at least one **recognizable ox figure or silhouette drawn as hand-built inline SVG** — **the ox** must be immediately legible as an animal (not merely visible), co-visible with the `<h1>` or occupying ≥15% of the viewport, and hand-drawn path-by-path. All later **ox** checks refer here; do not re-define.
- **The pass bar (hard gate)**: every design is judged on its rendered page by one question — **does the image portray a bovine in any form, and does it resemble one?** Your set passes only at **4 of 5 designs or better**. Fewer than four recognizable oxen and the whole submission fails — no matter how good the layouts, copy, or craft look.
- **Self-check before you submit**: for each of the five designs, look at the rendered page (not the code) and answer the gate question: does the image portray a bovine in any form, and does it resemble one? Read it as a stranger would — no captions, no labels, no wordmark helping. If the animal only appears once you explain it, redesign the figure.
- **Five facets rule (content)**: the five designs must each take a different facet of **the ox** — anatomy, breed, labour, mythology, region, and so on — so a set reads as five views of one **ox**, never one idea repeated five times. Facet is content; see Quality bar for visual distinction.
- **What counts as cheating on the ox** — any one of these fails a design, no matter how good the rest looks:
  - **Ox** presence limited to a horn motif, an "OX" wordmark, or abstraction so stylized no viewer sees **the ox** as an animal.
  - The same **ox** SVG figure reused across designs with only recolors, crops, or mirrors.
  - Artwork copied from or closely tracing another set's **ox** — you may open one `manifest.js` to learn the wiring, but other sets' visuals stay closed; **the ox** must be your own drawing, not theirs redrawn. Their themes and facets are fair game.
  - A page that would still make sense if every trace of **the ox** were removed — when in doubt, apply that test before submitting.

## Your task

1. Create `src/showcase/sets/<your-set-id>/` containing:
   - `manifest.js` — exports `{ id, name, tagline, accent, credit, designs }`, where `designs` is an array of five entries `{ id, num, name, tag, chip, Component }` and each `Component` is `lazy(() => import('./Design.jsx'))`.
   - Five design components (`Design.jsx`) with one co-located CSS file each (`import './design.css'`).
2. Register your set with **one line** in `src/showcase/sets/index.js`.
3. Add any Google Fonts you need to the canonical font `<link>` in `index.html` (the second `<link>` containing `family=Anton` onward) — append families; do not restructure or duplicate links.
4. Add your set to `README.md` under "The sets" as a new collapsible `<details>` block with a summary line and a five-row table.
5. Verify: `npm run build` passes and emits one chunk per design; `npm run dev` renders all five designs cleanly.

## Signing your work (mandatory)

Your set must be attributable three ways:

1. `credit` field in `manifest.js` — your agent name (shown on the set card in the manager modal).
2. The README `<summary>` line for your set — append "· designed by <your-name>".
3. **Inside every design**: a visible signature element carrying the verbatim string "SET <n> · DESIGNED BY <YOUR-NAME>" — rendered natively in that design's visual vernacular (a seal, a colophon, a stamp, a label). Content is verbatim; form must differ per design — never a plain footer line pasted identically into all five.

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

## Quality bar

- **Five genuinely distinct visual directions (form) within your set**: different palettes, type pairings, layouts, and motion languages for **the ox**. Facet (content) and direction (form) are separate axes — if two pages could swap CSS variables and still work, redesign one. Generic template failure is shipping an unadapted default — cream-background-plus-serif-plus-terracotta, near-black-with-one-acid-accent, or broadsheet hairline-grid — as the entire idea; a familiar idiom deliberately chosen and carrying real **ox** work is fine.
- **Ox presence**: satisfies **Per-design floor** above — a *recognizable* **ox**, never merely a visible one. No re-definition here.
- Define your palette as CSS custom properties on the theme root (`.th-<prefix>`), including a themed `::selection`.
- Prefix every class name with your set id (`.<set-id>-*`, e.g. `.ox-foo-*`). Namespace every SVG `id` (`<set-id>-gradient`, `<set-id>-mask`) — ids are global across the bundle.
- Root element: `min-height: 100vh`, `position: relative`, `overflow-x: hidden`.
- Responsive down to 375px width; fluid type via `clamp()`.
- Accessibility floor: exactly one `<h1>` per page; `aria-hidden="true"` on decorative SVGs; body-text contrast ≥ 4.5:1; `:focus-visible` styles on anything interactive; `lang` attributes on non-English runs.
- Motion: prefer transform/opacity; give loops seamless periods; the shell's global `MotionConfig reducedMotion="user"` and CSS `prefers-reduced-motion` handle user preferences — gate any manual rAF animations yourself via `matchMedia`.
- Typography is a design decision: pair display and body faces deliberately, never default to the same families across designs.

## Definition of done

- [ ] `npm run build` passes; five new chunks appear in `dist/assets` (one per design)
- [ ] All five designs render without console errors at desktop and 375px widths
- [ ] Signature visible in all five designs; credit set in manifest and README (see Signing)
- [ ] **Ox gate passed**: does the image portray a bovine in any form, and does it resemble one — asked of every design on its rendered page; **at least 4 of 5 must pass or the submission fails** (see The subject: the ox)
- [ ] README updated; no other files touched beyond the allowed list
- [ ] Commit message names the set (e.g. `Add <set name> set by <agent>`)
