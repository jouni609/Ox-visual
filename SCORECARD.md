# OX SHOWCASE — FULL REVIEW SCORECARD

**Scope:** 21 registered sets · 105 designs · reviewed 2026-09-03/04 against `AGENTS.md`.
**Method:** full Playwright render of every design (desktop 1440px full-page + 375px mobile, scroll-through to trigger reveals), automated console-error & horizontal-overflow sweep (0 errors, 0 overflow across all 105), static source audit of every set, SVG path-hash originality sweep, plus visual review of every desktop render.

**Quality score (0–100):** ox legibility & presence /30 · five distinct visual directions /25 · craft (type, layout, color) /25 · subject-grounded copy /10 · a11y + responsive + motion /10.
**OX gate (canonical wording, per AGENTS.md):** every design is judged on its rendered page by one question — **does the image portray a bovine in any form, and does it resemble one?** The set passes at 4 of 5 designs or better; per-design results shown. (The review of 2026-09-03/04 applied this same test under the earlier wording "distinct and understandable as a bovine"; the question now lives verbatim in the brief so agents and judges share one sentence.)
Static-rule violations (signing, banned techniques, naming, a11y floor) are listed as gate flags and weighed in the score. Visual verdicts were produced in a two-pass process: a primary review of all 105 desktop renders, an independent blind re-review of sampled sets (no set verdict changed; single-design borderline drift only), reviewer verification of every verdict that flipped a set outcome, and a 12-page mobile sweep at 375px.

---

## ox-faces — Faces of the Ox (credit: "Set I") — SCORE 60 · FAIL

| # | Design | Ox gate | Notes |
|---|--------|---------|-------|
| 01 | Monolith | **FAIL** | Geometric flat-style head reads as robot-cat/feline; horn triangles read as ears. Strong brutalist industrial layout, playful manifesto copy. |
| 02 | Heritage | PASS | Naive line-engraved ox in museum plate frame; full chronology timeline renders, elegant cream/burgundy; wax dots slightly overlap date labels. |
| 03 | Circuit Beast | PASS | Neon wireframe ox, unmistakable horned silhouette; cyberpunk terminal framing with working diagnostics panel. |
| 04 | Stillness | **FAIL** | Zen ink-stroke ox is abstract — no horns, no head; reads as table-like strokes. Enso + haiku are lovely but the animal is not legible. Also no `<h1>` in this design. |
| 05 | Barnyard Pop | PASS | Cartoon ox mascot, unmistakably bovine; kids-show pop direction, real copy throughout. |

**Quality:** ox 13/30 · directions 21/25 · craft 15/25 · copy 8/10 · a11y/responsive/motion 3/10 → **60/100**
**Gate flags:** mandatory visible signature MISSING in all five designs (Definition-of-done failure) · credit is "Set I", not an agent name · README summary lacks "· designed by" · Stillness has no `<h1>` · JSX comments in CircuitBeast · ~10 unprefixed class names · root `overflow-x:hidden`/`position:relative` missing in 4 CSS files.
**Verdict:** The founding set has five genuinely distinct, fun directions, but no signature anywhere, no attributable credit, and two of five oxen that don't read as oxen.

## ox-atlas — Ox Atlas (credit: ox-alpha) — SCORE 89 · PASS

| # | Design | Ox gate | Notes |
|---|--------|---------|-------|
| 01 | Talvi | PASS | Nordic knit-pattern band of horned Finn-cattle heads; Finnish editorial card with real breed history and stats. |
| 02 | Ushi no Kawa | PASS | Woodblock ox wading in indigo waves — body + horn above water, haiku anchors it; serene and deliberate. |
| 03 | Raja | PASS | Decorated festival zebu (hump, garland, blanket) — slightly toy-like but bovine reads; fact cards are excellent ("not a camel's reservoir"). |
| 04 | Jianzhi | PASS | Red paper-cut ox, unmistakable folk-cut horns/face/florals; culturally precise. |
| 05 | Tarde de Toros | PASS | Silkscreen charging bull over halftone sunset — the strongest silhouette in the set. |

**Quality:** ox 26/30 · directions 25/25 · craft 21/25 · copy 9/10 · a11y/responsive/motion 8/10 → **89/100**
**Gate flags:** Raja/Ushi/Toros signatures omit "DESIGNED BY" (e.g. "OX ALPHA · SET II", "IMPRENTA OX ALPHA · SET II") · classes/ids use design-level prefixes rather than `ox-atlas-*` (6 unnamespaced SVG ids).
**Verdict:** A quietly excellent regional atlas — five distinct cultures, five distinct oxen. Signature drift on three designs is the only real blemish.

## ox-works — Ox Works (credit: muse-spark) — SCORE 70 · FAIL

| # | Design | Ox gate | Notes |
|---|--------|---------|-------|
| 01 | Furrow | **FAIL** | The "paired oxen" in the field elevation are a tiny dark blob at the field edge — not legible as animals. Agronomy concept and soil-strata diagram are excellent. |
| 02 | Haul | **FAIL** | Draught ox + cart figure reads insect/camel: horn strokes like antennae, only two legs rendered, snout buried. Waybill framing is superb. |
| 03 | Forge | **FAIL** | Only a disembodied ox head perched on the treadwheel — no animal body exists on the page. Beautiful dark-forge direction, strongest copy in the set. |
| 04 | Altar | **FAIL** | Nandi never visibly renders — the shrine interior is empty; only an abstract horned mask in the pediment. Card source citations are nearly illegible (contrast). |
| 05 | Exchange | PASS (borderline) | Iconic horned ox head on the scale pan (reads crab-like without the "OX · 540 KG" label); ledger concept with real commodity table is great. |

**Quality:** ox 8/30 · directions 23/25 · craft 22/25 · copy 9/10 · a11y/responsive/motion 8/10 → **70/100**
**Gate flags:** signatures read "SET III · DESIGNED BY MUSE-SPARK" in all five (set ordinal + uppercased name vs credit "muse-spark") — present but not per-design verbatim.
**Verdict:** The best-designed set to fail the gate: magazine-grade layouts and copy, but the actual oxen — the mandatory subject — are missing, cropped, head-only, or unrecognizable in four of five designs.

## ox-biomes — Ox Biomes (credit: Minimax M3) — SCORE 84 · PASS

| # | Design | Ox gate | Notes |
|---|--------|---------|-------|
| 01 | Mist | PASS | Shaggy yak in snow drift, low horns, visible eye — atmospheric and legible. Tibetan epigraphy and mist layers are lovely. |
| 02 | Monsoon | PASS | Carabao half-submerged in rain; layered downpour sells the biome. Signature here omits "DESIGNED BY". |
| 03 | Prairie | PASS | Bison over soil-strata contours, unmistakable hump-and-head mass. |
| 04 | Tundra | PASS | Muskox built from crystalline horn-boss forms under aurora bands — stylized but clearly a horned quadruped. |
| 05 | Savanna | PASS | Hump-shouldered zebu with acacia scene; clean figure. |

**Quality:** ox 24/30 · directions 22/25 · craft 21/25 · copy 9/10 · a11y/responsive/motion 8/10 → **84/100**
**Gate flags:** signatures use "SET IV" ordinal, Monsoon's omits "DESIGNED BY", 3/5 share one footer-signature form · design-level prefixes (`mist-`, `mon-`…) instead of `ox-biomes-*` · `☂` dingbat in Monsoon.
**Verdict:** Coherent biome atlas with five solid, distinct animal renderings; weaker only in signature discipline and signature-form variety.

## ox-folio — Ox Folio (credit: GLM 5.2) — SCORE 68 · FAIL

| # | Design | Ox gate | Notes |
|---|--------|---------|-------|
| 01 | Myology | **FAIL** | The anatomical plate figure — cream mass with red muscle patches — reads as a ram/sheep/cloud, not an ox. Curled horn, stubby legs. Labels are excellent; the animal isn't. |
| 02 | Pitch | **FAIL** | The ox-head study is dark-brown-on-dark-maroon and nearly invisible; the waveform tape is the hero, the ox is a shadow. |
| 03 | Labyrinth | PASS | Minotaur silhouette with horns in the gold labyrinth ring reads well; the stained-glass window is half empty (unlit panes read as unfinished). |
| 04 | BrandBook | PASS (borderline) | The Running Ox emboss on the hide is dramatically low-contrast but the full silhouette (body, legs, horns, tail) is discernible; brand registry concept is superb. |
| 05 | Volvelle | **FAIL** | The Taurus forequarters emerging from the star wheel read as a giant hand/nautilus; bull head is tiny and ambiguous. |

**Quality:** ox 9/30 · directions 24/25 · craft 20/25 · copy 9/10 · a11y/responsive/motion 6/10 → **68/100**
**Gate flags:** signatures use "SET V" ordinal; Pitch/BrandBook/Volvelle split or fragment the verbatim string; two figure SVGs lack `aria-hidden` (Pitch, Volvelle); design-level prefixes instead of `ox-folio-*`.
**Verdict:** The most original five directions in the showcase, wrapped around oxen that mostly aren't visible as oxen — a concept-first set that forgot the subject is the point.

## ox-numismatica — Ox Numismatica (credit: Gemini 3.7 Flash) — SCORE 66 · FAIL

| # | Design | Ox gate | Notes |
|---|--------|---------|-------|
| 01 | Pecunia | **FAIL** | The ingot ox is drawn with two long upright horn-lines on a crouched blob — it reads as a rabbit. |
| 02 | Euboea | **FAIL** | The stater bull reads insectoid: antennae horns, dangling legs, eye-dot; the archaic look doesn't save the bovine read. |
| 03 | Pasupati | **FAIL** | The zebu's tall lyre horns render as two straight lines — donkey/rabbit gestalt, hump barely indicated. |
| 04 | Nomisma | **FAIL** | The yoked pair on the solidus read as two beetles with crossing antennae. |
| 05 | Specie-Scrip | PASS (borderline) | The only legible bull on the set — proper horn arcs and a charging mass, though still line-thin. |

**Quality:** ox 7/30 · directions 22/25 · craft 22/25 · copy 8/10 · a11y/responsive/motion 7/10 → **66/100**
**Gate flags:** weigh/bolt/star unicode glyphs inside artwork compositions (Pecunia scale pivot, Euboea bolt, SpecieScrip stars) brush against the no-emoji-artwork rule · signatures all "SET VI · DESIGNED BY GEMINI 3.7 FLASH" (set ordinal, uppercased).
**Verdict:** Handsome layouts and genuinely good numismatic storytelling, but every animal is drawn with antennae horns on blob bodies — five coins, one recognizable bull.

## ox-sensorium — Ox Sensorium (credit: Grok 4.6) — SCORE 84 · PASS

| # | Design | Ox gate | Notes |
|---|--------|---------|-------|
| 01 | Meridian | PASS | Cartoon frontal ox head with sweeping horns on a dichromatic split field; vision-science concept well told (330° ring, blind cone diagram). |
| 02 | Flehmen | PASS | Same head construction re-used with curled lip and dental pad — near-twin of Meridian's figure, though the olfaction story (Jacobson's organ, scent cards) is great. |
| 03 | Pinna | PASS | Side-view ox with rotating ears and sound bars; ears read slightly boar-like but horns+tail anchor the bovine. |
| 04 | Pelage | PASS | Rain-soaked ox with hair-parting texture (reads a touch wood-grain); strong "the ox is a coat that thinks" copy. |
| 05 | Halite | PASS | Ox licking a pink salt crystal, dotted tongue — clean, charming, legible. |

**Quality:** ox 26/30 · directions 21/25 · craft 21/25 · copy 9/10 · a11y/responsive/motion 7/10 → **84/100**
**Gate flags:** classes/ids use design prefixes (`meridian-`, `pinna-`…) instead of `ox-sensorium-*` · signatures all "SET VII · DESIGNED BY GROK 4.6" (set ordinal).
**Verdict:** A likeable science-museum set with real sensory facts and consistent signature discipline; docked for the near-twin frontal heads and naming-namespace drift.

## ox-lithica — Ox Lithica (credit: Kimi 2.6) — SCORE 54 · FAIL

| # | Design | Ox gate | Notes |
|---|--------|---------|-------|
| 01 | Menhir | **FAIL** | The petroglyph aurochs reads as a rabbit — two upright strokes for horns/ears on a plump body. |
| 02 | Stele | **FAIL** | The tribute zebu is a vertical chain of brown lozenges with a tiny head — reads as a caterpillar/snake, not an animal. |
| 03 | Sunken | **FAIL** | The relief figures read as pitchers/jugs with legs; the "solar ox of Hathor" never appears as an ox. |
| 04 | Cameo | **FAIL** | The sardonyx bull is so low-contrast it reads as an abstract cherub-blob; the subject is effectively invisible. |
| 05 | Grotesque | **FAIL** | The gargoyle reads monkey/koala; horns are faint strokes behind round ears. |

**Quality:** ox 2/30 · directions 20/25 · craft 16/25 · copy 9/10 · a11y/responsive/motion 7/10 → **54/100**
**Gate flags:** signature stamps visibly broken on Menhir/Stele/Sunken — zigzag ornament glyphs overlap the text, and Sunken's is clipped to "…DESIGNED BY KIMI 2." · Grotesque signature casing wrong ("Set VIII · Designed by Kimi 2.6") · corrupted blackletter kicker/label rows in Grotesque · 13 unnamespaced SVG ids.
**Verdict:** The art-history writing deserves a better set: refined museum-plaque layouts wrapped around animals that never resolve into oxen, plus genuinely broken signature rendering.

## ox-materia — Ox Materia (credit: Grok 4.5) — SCORE 66 · FAIL

| # | Design | Ox gate | Notes |
|---|--------|---------|-------|
| 01 | Corium | **FAIL** | The tannery hide-ox reads as a cloud-sheep: fluffy teal blob, spike horns, girth strap. |
| 02 | Cornu | PASS | Head-on ox with big glowing lantern horns — the clearest bovine in the set; horn-craft copy (lantern, comb, snuff box) is superb. |
| 03 | Ossein | **FAIL** | The skeleton reads as a fly — skull with antennae horn-cores, thin legs, rib-wings. |
| 04 | Lactis | **FAIL** | The Bauhaus zebu reads as a sundae — white cloud with a red cherry hump-knob and blue triangle legs. |
| 05 | Stercus | **FAIL** | Deliberately a dung-pat ox; it reads as poop with a smiley face and horn sticks. Witty concept, illegible animal. |

**Quality:** ox 6/30 · directions 23/25 · craft 21/25 · copy 9/10 · a11y/responsive/motion 7/10 → **66/100**
**Gate flags:** signatures all "SET IX · DESIGNED BY GROK 4.5" (set ordinal); Stercus signature collides with the thumb-stamp graphic; design-level class prefixes.
**Verdict:** The five-substances concept (hide, horn, bone, milk, dung) is the most original framing in the showcase — and its animals are its failure: four of five read as clouds, insects, or pats.

## ox-signals — Ox Signals (credit: GTP 5.6 Luna) — SCORE 86 · PASS

| # | Design | Ox gate | Notes |
|---|--------|---------|-------|
| 01 | Stride | PASS | Geometric blue ox in locomotion plate with center-of-mass annotations; horn disc reads slightly abstract but the animal is clear. |
| 02 | Hush | **FAIL (borderline)** | The radar ox reads as a cartoon ghost/hippo — pom ears, no horns; species illegible without the caption. |
| 03 | Ferment | PASS | Purple ox with lime rumen cutaway; sheep-adjacent stylization but horns/hooves/tail anchor it. |
| 04 | Rings | PASS | Frontal ox face with coral horn-leaves — clearly bovine; horn-growth calendar concept is excellent. |
| 05 | Return | PASS | Aurochs silhouette with long forward horns — unambiguous and handsome rewilding letter. |

**Quality:** ox 24/30 · directions 23/25 · craft 22/25 · copy 9/10 · a11y/responsive/motion 8/10 → **86/100**
**Gate flags:** signatures all "SET X · DESIGNED BY GTP 5.6 LUNA" (set ordinal; credit uppercased) and structurally the same footer-bar form in all five — the set's one real discipline gap.
**Verdict:** Scientific-plate design of a high order with the best copy in the showcase ("Momentum is not speed. It is the body agreeing with itself."); signature monotony and one fuzzy creature are the only dents.

## ox-glyphs — Ox Glyphs (credit: DeepSeek V4) — SCORE 79 · PASS

| # | Design | Ox gate | Notes |
|---|--------|---------|-------|
| 01 | Alef | PASS | Golden horned ox head on the Serabit stele — clear and handsome; alphabet-history storytelling is first rate. |
| 02 | Boustrophedon | PASS (borderline) | Black-figure vase ox is faint scratch-work but the quadruped reads; the interactive boustrophedon script toy is brilliant. |
| 03 | Uruz | PASS (borderline) | Carved aurochs on green stone — horn arcs read slightly tusk-like (warthog gestalt) but a horned beast is discernible. |
| 04 | Niu | PASS (borderline) | The ox appears as the oracle-bone pictograph 牛 in four scripts — glyph-as-figure is defensible (horns visible) but weak as an animal image; typographically gorgeous. |
| 05 | Oxen | PASS (borderline) | Letterpress ox plate — same body as Uruz's figure (see flag); horned animal readable. |

**Quality:** ox 20/30 · directions 22/25 · craft 21/25 · copy 10/10 · a11y/responsive/motion 6/10 → **79/100**
**Gate flags:** **HARD VIOLATION — designs 03 (Uruz) and 05 (Oxen) reuse the same ox figure**, translated (+68,+6) with different rendering treatment: prohibited "same figure reused across designs"; IBM Plex Mono used 5× in uruz.css but never loaded in index.html (silent fallback); signatures all "SET XI · DESIGNED BY DEEPSEEK V4" (set ordinal).
**Verdict:** The best-written set in the showcase, held back by a genuine originality breach between two of its five designs and an unloaded font.

## ox-chronicle — Ox Chronicle (credit: Gemini 3.1 Pro) — SCORE 53 · FAIL

| # | Design | Ox gate | Notes |
|---|--------|---------|-------|
| 01 | Taurus | **FAIL** | The constellation is an abstract V of dots and dashed lines — no bull is visible without the wordmark. |
| 02 | Lascaux | **FAIL** | The "bison" is a headless brown loaf with two loop legs and a tail curl — no head, no horns; reads as a bread loaf. |
| 03 | Zebu | **FAIL** | The blueprint zebu is an incomplete single-line curve (hump + head fragment + two leg arcs); the body never closes into an animal. |
| 04 | Bubalus | **FAIL** | A dark dome with one horn-wire in reeds — reads as a hill; the buffalo is not discernible. |
| 05 | Minotaur | **FAIL** | A faint gold mask barely visible behind the giant red title — horns only, no figure. |

**Quality:** ox 2/30 · directions 21/25 · craft 17/25 · copy 7/10 · a11y/responsive/motion 6/10 → **53/100**
**Gate flags:** JSX code comments in all five files (banned) · signature is a plain footer line repeated across all five (form rule) · `.oc-*-root::selection` selects the root element, so the themed text selection is dead · all five pages sit in near-identical dark registers with sparse one-line copy.
**Verdict:** Five evocative eras reduced to near-empty dark pages whose animals never materialize — the weakest ox renderings in the showcase alongside ox-lithica.



## ox-masque — Ox Masque (credit: Hy3) — SCORE 64 · PASS

| # | Design | Ox gate | Notes |
|---|--------|---------|-------|
| 01 | Surva | PASS (borderline) | Black Kukeri mask with upswept cream horns — head-only, slight demon/cartoon risk. |
| 02 | Oaken | PASS | Carved-wood ox head with horns and oak leaves — unmistakable; strongest craft in the set. |
| 03 | Jin | **FAIL (borderline)** | Gold medallion face reads as lion/dragon/sun-face; horns are two thin antenna strokes; corner seal clipped. |
| 04 | Gelede | PASS | Yoruba headdress with horned superstructure — clearly bovine; gingham-plaid ground is an odd cultural pick. |
| 05 | Percht | PASS (borderline) | White bull mask, legible but cartoon-emoji in character. |

**Quality:** ox 19/30 · directions 14/25 · craft 17/25 · copy 8/10 · a11y/responsive/motion 6/10 → **64/100**
**Gate flags:** Jin and Gelede signatures omit "DESIGNED BY"; Oaken/Percht are near-twin constructions; all five designs share one page skeleton (eyebrow/title/centered mask/paragraph/badge) — one template, five palettes.
**Verdict:** Real folklore, well told, but a repeated layout and a set of head-only masks of which one doesn't read as bovine.

## ox-hours — Ox Hours (credit: Qwen 3.8 Max) — SCORE 79 · PASS

| # | Design | Ox gate | Notes |
|---|--------|---------|-------|
| 01 | Matins | PASS (borderline) | Giant ox over a tiny barn at night — horns/eye legible but body nearly dissolves into the dark sky; Latin quote has a typo. |
| 02 | Terce | PASS | Ploughing ox in yoke inside an almanac frame — the set's best craft; stamp text partly garbled near the dock. |
| 03 | Sext | PASS (borderline) | Ox drinking at a ford — mass and posture carry it, but horns are faint and the muzzle runs tapir-long; signature omits "DESIGNED BY". |
| 04 | Vespers | PASS | Three ox silhouettes crossing a striped sunset — instantly legible herd; the most cinematic page. |
| 05 | Compline | PASS (borderline) | Sleeping ox reads as a soft dark mound — horn + closed eye visible, bovine confirmation is soft. |

**Quality:** ox 22/30 · directions 21/25 · craft 20/25 · copy 9/10 · a11y/responsive/motion 7/10 → **79/100**
**Gate flags:** Sext signature missing "DESIGNED BY"; Terce/Compline split the verbatim string across two arcs; "SET XIV" ordinal throughout; near-contrast dark scenes on Matins/Compline; several credits/captions collide with the dock zone.
**Verdict:** A genuinely differentiated liturgical set with strong copy; the dark scenes keep testing the gate, and all five designs pass — just barely in three cases.

## ox-systema — Ox Systema (credit: GLM 5.3) — SCORE 60 · FAIL

| # | Design | Ox gate | Notes |
|---|--------|---------|-------|
| 01 | Primigenius | **FAIL** | The ochre aurochs is a lumpy blob whose white "horn" reads as a bird's head — duck/person gestalt; a stray black smudge floats unexplained; caption clipped by the dock. (Visually verified by reviewer.) |
| 02 | Taurus | **FAIL** | Line-engraved figure reads as monkey/bird — no horns, no bovine mass. |
| 03 | Indicus | **FAIL** | Black silhouette with orange cap and whisk-curls reads as insect or costumed figure, not a zebu. |
| 04 | Bubalus | **FAIL** | Near-invisible dark-on-dark lump with one crescent horn — reads as a rock. |
| 05 | Bison | **FAIL** | Silhouette with white curl "beak" and gold cap reads as a bird. (Visually verified by reviewer.) |

**Quality:** ox 7/30 · directions 21/25 · craft 18/25 · copy 9/10 · a11y/responsive/motion 5/10 → **60/100**
**Gate flags:** none in source — this is the only set with a fully clean static audit (verbatim per-design signatures in five distinct forms, zero rule breaches) — and it still fails, because all five animals read as birds, insects, or rocks. All five figures share the same broken "blob + stick legs + white curl" template.
**Verdict:** The showcase's cleanest rule-following and its starkest subject failure: beautiful broadsides about animals that are not visibly there.

## ox-vesper — Ox Vesper (credit: Claude Opus) — SCORE 84 · PASS

| # | Design | Ox gate | Notes |
|---|--------|---------|-------|
| 01 | Vigil | PASS | Full-body guardian ox in a moonlit pasture — unmistakable. |
| 02 | Torrent | PASS (borderline) | Buffalo head with sweeping crescent horns rising from floodwater — head-only composition, horns read slightly antler-like; mobile body copy washes out on the misty gradient. |
| 03 | Cinder | PASS (borderline) | Charging bull in near-black-on-dark silhouette — white horns and red eye carry it, but the mass risks vanishing. |
| 04 | Verdure | PASS | Grazing zebu among botany — the clearest, most charming ox reviewed anywhere in the showcase. |
| 05 | Numen | PASS | Seated golden Nandi in a temple arch — unmistakable sacred bull. |

**Quality:** ox 23/30 · directions 23/25 · craft 21/25 · copy 9/10 · a11y/responsive/motion 8/10 → **84/100**
**Gate flags:** signatures all "SET XVI · DESIGNED BY CLAUDE OPUS" (set ordinal); Numen/Verdure/Torrent roots lack the required min-height/position/overflow trio; unicode dingbats (✦ ❖) used as decorative accents; large empty dark regions in Numen.
**Verdict:** Five distinct moods (nocturne, monsoon, ember, botanical plate, gold shrine) with consistently legible animals — the most professional all-rounder of the dark-palette sets.

## ox-arena — Ox Arena (credit: DeepSeek V4 Pro) — SCORE 88 · PASS

| # | Design | Ox gate | Notes |
|---|--------|---------|-------|
| 01 | Leap | PASS | Minoan flying-gallop bull with leaping acrobat — instantly legible, gorgeous fresco craft. |
| 02 | Rodeo | PASS | Bucking bull + rider in a red sunburst letterpress poster — bold and clear. |
| 03 | Encierro | PASS (borderline) | Running bull is a small column vignette in the San Fermín broadsheet — legible on inspection but not the visual hero. |
| 04 | Jallikattu | PASS (borderline) | Leaping zebu over the vaadi vaasal — elongated body and one swept horn drift toward antelope abstraction. |
| 05 | Kambala | PASS | Two surging buffalo with jockey through flooded paddy — clearly bovine. |

**Quality:** ox 24/30 · directions 24/25 · craft 23/25 · copy 9/10 · a11y/responsive/motion 8/10 → **88/100**
**Gate flags:** signatures all "SET XVII · DESIGNED BY DEEPSEEK V4 PRO" (set ordinal — the set's only rule issue).
**Verdict:** The best-made set in the showcase: five eras, five typographic systems, five cultures, all readable — held out of first place only by signature ordinals and two softened animal reads.

## ox-aurora — Ox Aurora (credit: Inkling) — SCORE 58 · FAIL

| # | Design | Ox gate | Notes |
|---|--------|---------|-------|
| 01 | Dusk | **FAIL (borderline)** | Dark low-contrast blob with stick horns on a near-identical dark field — dust-bunny gestalt; paragraph truncated under the dock. |
| 02 | Glacier | **FAIL** | Grey blob with two long antenna-horns and dot eyes — reads as a beetle/moth, not a yak; a stat is clipped by the dock. |
| 03 | Temple | **FAIL (borderline)** | Frontal purple Nandi with tall ear-like horns — monkey/rabbit face; only the caption says bull; arch body reads as a tent. |
| 04 | Meadow | **FAIL** | The zebu has two huge white rabbit ears and googly eyes — reads as a rabbit/insect on a hill. (Visually verified by reviewer.) |
| 05 | Storm | **FAIL** | Near-black bison silhouette with pale ear-antennae and lightning scribbles — spider/beetle gestalt. |

**Quality:** ox 8/30 · directions 18/25 · craft 18/25 · copy 9/10 · a11y/responsive/motion 5/10 → **58/100**
**Gate flags:** no `<h1>` anywhere in the set (a11y floor breach ×5) · JSX code comments in all five files (banned) · identical signature badge repeated five times (form rule) · 3 unnamespaced SVG ids · repeated dock-clipped copy.
**Verdict:** Good editorial copy ruined at both ends: banned comments and missing h1s in the source, and rabbit-eared blobs on the canvas.

## ox-polis — Ox Polis (credit: Qwen 3.8 Flash) — SCORE 80 · FAIL

| # | Design | Ox gate | Notes |
|---|--------|---------|-------|
| 01 | Common | PASS | Colonial pasture map with unmistakable horned cow silhouettes and a belled foreground ox. |
| 02 | New Road | PASS (borderline) | Drove-road cattle strip — small and pale, slightly sheep-like, but horns + toll-gate context land it. |
| 03 | Cathedral | **FAIL (borderline)** | The Smithfield ox is a dark mass with two antenna-like horn tips and an eye dot — a shadow, not an animal. (Visually verified by reviewer.) |
| 04 | The Line | **FAIL (borderline)** | Blueprint steer elevation reads pig/sheep; internal labels illegibly tiny; field-notes column clipped mid-sentence. |
| 05 | Bronze | PASS | Gold Charging Bull under its own spotlight — unmistakable. |

**Quality:** ox 20/30 · directions 23/25 · craft 21/25 · copy 9/10 · a11y/responsive/motion 7/10 → **80/100**
**Gate flags:** IBM Plex Mono used in The Line but never loaded in index.html (silent fallback); signatures all "SET XIX · DESIGNED BY QWEN 3.8 FLASH" (set ordinal; weakest form variety — a text line in all five); dock clips headings/captions on most pages.
**Verdict:** Superb city-history storytelling — but half its oxen are too dark, too small, or too porcine to pass the one test that matters.

## ox-vita — Ox Vita (credit: MUSE SPARK) — SCORE 85 · PASS

| # | Design | Ox gate | Notes |
|---|--------|---------|-------|
| 01 | First Light | PASS | Spotted newborn calf in a crib card — unmistakable; storybook direction. |
| 02 | Breaking | PASS (borderline) | Yearling in training yoke on a chalk ring — readable, head small; caption clipped by the dashed ring. |
| 03 | Prime | PASS | Yoked draught ox hauling a plough, industrial hazard-stripe framing — the boldest page of the wave. |
| 04 | Dam | PASS | Horned cow with suckling calf in a herd-book ledger — plainly readable; calf face slightly dog-like. |
| 05 | Relic | PASS (borderline) | Recumbent elder ox under a Taurus starfield — pale outline style makes it the softest read of the five. |

**Quality:** ox 25/30 · directions 22/25 · craft 21/25 · copy 9/10 · a11y/responsive/motion 8/10 → **85/100**
**Gate flags:** signatures all "SET XX · DESIGNED BY MUSE SPARK" (set ordinal); occasional overlaps near hero figures; empty regions inside hero cards.
**Verdict:** A life-story arc across five genuinely different design worlds — and, unlike its sibling ox-systema, every animal is actually visible.

## ox-mythos — Ox Mythos (credit: Gemini 3.8 Flash) — SCORE 75 · PASS

| # | Design | Ox gate | Notes |
|---|--------|---------|-------|
| 01 | Apis | PASS | Black bull with lyre horns and sun disk on a plinth — unmistakable; body contrast borderline against the dark stage. |
| 02 | Audhumbla | PASS (borderline) | Cow licking the salt stone — udder and milk streams present, but the drooping muzzle risks an elephant/donkey first read. |
| 03 | Gugalanna | PASS | Low-slung charging Bull of Heaven over cracked earth — clear; leg joints slightly noodly. |
| 04 | Kamadhenu | PASS | White cow with golden horns and calf at the udder — the most legible and charming figure of the set. |
| 05 | Gavaevodata | **FAIL (borderline)** | The "white bull" rendered as a faint navy outline on dark — low contrast, leaf-shaped horns read donkey/moth. |

**Quality:** ox 22/30 · directions 15/25 · craft 21/25 · copy 9/10 · a11y/responsive/motion 8/10 → **75/100**
**Gate flags:** signatures all "SET XXI · DESIGNED BY GEMINI 3.8 FLASH" (set ordinal, uppercased name); all five designs share one layout skeleton (hero left / panel right / three story cards) — distinct palettes and myths, one template; "VEDIC SANCTUARY" heading hidden behind the dock.
**Verdict:** Rich, literate mythology with five real animals — dragged down by template monotony and one invisible bull.

---

## FINAL RANKING

| Rank | Set | Credit | Score | Gate | Designs passing ox gate |
|------|-----|--------|-------|------|-------------------------|
| 1 | ox-atlas | ox-alpha | **89** | PASS | 5/5 |
| 2 | ox-arena | DeepSeek V4 Pro | **88** | PASS | 5/5 |
| 3 | ox-signals | GTP 5.6 Luna | **86** | PASS | 4/5 |
| 4 | ox-vita | MUSE SPARK | **85** | PASS | 5/5 |
| 5 | ox-biomes | Minimax M3 | **84** | PASS | 5/5 |
| 5 | ox-sensorium | Grok 4.6 | **84** | PASS | 5/5 |
| 5 | ox-vesper | Claude Opus | **84** | PASS | 5/5 |
| 8 | ox-polis | Qwen 3.8 Flash | **80** | **FAIL** | 3/5 |
| 9 | ox-glyphs | DeepSeek V4 | **79** | PASS | 5/5 |
| 9 | ox-hours | Qwen 3.8 Max | **79** | PASS | 5/5 |
| 11 | ox-mythos | Gemini 3.8 Flash | **75** | PASS | 4/5 |
| 12 | ox-works | muse-spark | **70** | **FAIL** | 1/5 |
| 13 | ox-folio | GLM 5.2 | **68** | **FAIL** | 2/5 |
| 14 | ox-numismatica | Gemini 3.7 Flash | **66** | **FAIL** | 1/5 |
| 14 | ox-materia | Grok 4.5 | **66** | **FAIL** | 1/5 |
| 16 | ox-masque | Hy3 | **64** | PASS | 4/5 |
| 17 | ox-faces | (Set I — no agent name) | **60** | **FAIL** | 3/5 |
| 17 | ox-systema | GLM 5.3 | **60** | **FAIL** | 0/5 |
| 19 | ox-aurora | Inkling | **58** | **FAIL** | 0/5 |
| 20 | ox-lithica | Kimi 2.6 | **54** | **FAIL** | 0/5 |
| 21 | ox-chronicle | Gemini 3.1 Pro | **53** | **FAIL** | 0/5 |

**Bottom line: 11 of 21 sets pass the ox gate; 63 of 105 designs render a recognizable bovine.**

---

## GLOBAL FINDINGS

**The showcase's #1 failure mode is horn rendering.** Across the failing sets, horns are drawn as thin double-line strokes that read as insect antennae or rabbit ears on rounded blob bodies — numismatica's coin oxen (rabbits/beetles), materia's substance mascots (clouds/poop), lithica (jugs/rabbits), chronicle (loafs/domes), systema and aurora (birds/rabbits). The passing sets draw horns as *masses* (atlas, arena, vesper, sensorium, signals, mythos) — the single most predictive craft difference between pass and fail.

**Second failure mode: dark-on-dark contrast.** polis/Cathedral, vesper/Cinder, chronicle (all five), hours/Matins+Compline, mythos/Gavaevodata — animals that exist in code but vanish on screen.

**Signature discipline is weak league-wide.** Only ox-systema rendered the template with per-design "SET 1–5" and five distinct native forms. Most sets used their set ordinal ("SET XVII") — treated here as acceptable since AGENTS.md's "SET <n>" is ambiguous — but real breaches exist: ox-faces has **no signature at all in any design** and no agent name in credit; ox-atlas (3 designs), ox-masque (2), ox-hours (1) omit "DESIGNED BY"; aurora, signals, chronicle repeat one identical footer form five times.

**Hard rule breaches:** ox-glyphs reuses one ox figure between Uruz and Oxen (translated +68,+6) — the only cross-design figure reuse found; ox-aurora and ox-chronicle ship JSX comments in all five designs (banned); ox-aurora has no h1 element in any design (plus faces/Stillness); IBM Plex Mono is used but never loaded in ox-glyphs and ox-polis; ox-faces' credit is "Set I", not an agent name, and its README summary lacks "designed by".

**Infrastructure is solid:** zero console errors and zero horizontal overflow at 375px across all 105 designs; no shell file touched by any set; both WIP sets (mythos, vita) were committed before review. One shell-level note for the maintainer: the showcase's own dock pill overlaps body copy or captions on roughly a third of all pages — a recurring occlusion cost charged to no set, but visible in nearly every screenshot in this review.

**Best of show:** ox-atlas (most complete), ox-arena (best craft), ox-vesper (best single figure — Verdure's zebu), ox-signals (best copy), ox-vita (best concept-to-execution arc). Worst: ox-chronicle — five evocative premises, zero visible oxen.
