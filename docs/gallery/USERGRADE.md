# User grade — fourth audit, 2026-10-04

The two sets registered after the 2026-10-01 audit. Same rubric as [SCORECARD.md](SCORECARD.md): ox legibility and presence /30, five distinct visual directions /25, craft /25, subject-grounded copy /10, accessibility plus responsive plus motion /10. The ox gate is the rendered page, asked of a stranger: does the image portray a bovine in any form, and does it resemble one? A set passes at 4 of 5 or better.

**Method:** Playwright, desktop 1440×900 full-page and mobile 375×812, scroll-through, then the pages judged by eye. Console errors: 0. Horizontal overflow: 0. Across all 20 renders. Static audit of signatures, class prefixes, SVG ids, headings, `lang`, selection styling, and fonts against `index.html`.

**Result:** ox-attention 76 · PASS · 5/5, and it joins the board at a three-way tie for 12th. ox-ledger 57 · FAIL · 0/5, and the set was removed. The board is in [LEADERBOARD.md](LEADERBOARD.md). The failure is also on [WALLOFSHAME.md](WALLOFSHAME.md).

## ox-attention — GPT Luna 6 — 76 · PASS

| # | Design | Ox gate | Notes |
|---|--------|---------|-------|
| 01 | Windward | PASS | Raised-muzzle yak. Horns, nostril, four legs. The sawtooth skirt starts here and never leaves the set. Species line under the dock at desktop, clipped at the right edge on mobile. |
| 02 | Resonance | PASS | Bellowing zebu, real hump, open mouth. Footer under the dock at 1440; clear at 375. |
| 03 | Range | PASS | Bison in a viewfinder. Hump, short horns, beard. The beard is the zigzag again, and the animal still reads. |
| 04 | Bristle | PASS | Highland cow, fringe over the eye. Same broadside mascot as Windward. |
| 05 | Browse | PASS | Water buffalo, head down, one crescent horn, wet meadow. The only pose that is not the standing profile. |

**Quality:** ox 23/30 · directions 18/25 · craft 19/25 · copy 8/10 · a11y/responsive/motion 8/10 → **76/100**

Five palettes and five page skeletons (field study, screen-print poster, optic plate, loom, meadow). One drawn animal: profile, pink muzzle, cream horns, dark legs, sawtooth belly used as coat, dewlap, beard and fringe. Paths differ, so this is not a copied SVG. It is one character. Unbounded is the display face twice, Fraunces twice, Karla the body face twice. Signatures are verbatim and visible, in five forms. Themed selection uses a descendant selector, so it reaches the text.

## ox-ledger — Composer — 57 · FAIL

| # | Design | Ox gate | Notes |
|---|--------|---------|-------|
| 01 | Brand | **FAIL** | Sphere, two tall filled lobes. Drawn as horns, read as rabbit ears. At 375 the stamp covers the sentence. |
| 02 | Draught | **FAIL** | Loaf body, same ears, stub legs. A gold yoke beam is drawn across the shoulders and still loses. At 375 the stencil is printed through the paragraph and under the dock. |
| 03 | Zebu | **FAIL** | A hump behind the same rabbit head. The copy claims a silhouette no European ox can claim. Signature clipped at 375. |
| 04 | Nandi | **FAIL** | Round face, red mouth, nose ring, two vertical gold paddles. Rabbit, seal, or small idol. The copy says the forelegs are folded; they are not. Cartouche clipped at 375. |
| 05 | Bison | **FAIL** | A ball with two short black hooks. No cape, no beard. Capybara, or a bear cub. Tag clipped at 375. |

**Quality:** ox 8/30 · directions 19/25 · craft 17/25 · copy 7/10 · a11y/responsive/motion 6/10 → **57/100**

Five records and five display faces, and the type is the best thing in the pair of sets. The animal is one toy. Upright filled lobes on a round body are the wall's old failure mode, this time with mass, and the mass is the shape of an ear. `::selection` is bound to the theme root, so the themed selection does not reach the text. Signatures are verbatim at desktop and broken at 375 on four of the five pages.
