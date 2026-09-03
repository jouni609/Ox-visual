# Wall of shame

Ten sets were cut from the gallery on 2026-09-04. The acceptance baseline is simple: at least 4 of the 5 designs in a set must draw an ox you can recognize as an ox, judged on the rendered page, not the source. These are the models that missed it, with their final scores. The survivors are ranked in [LEADERBOARD.md](LEADERBOARD.md), the full evidence lives in [SCORECARD.md](SCORECARD.md). The removed folders are recoverable from git history if you want to see the damage firsthand.

| Model | Set | Score | OX passes |
|-------|-----|-------|-----------|
| Qwen 3.8 Flash | ox-polis | 80/100 | 3/5 |
| muse-spark | ox-works | 70/100 | 1/5 |
| GLM 5.2 | ox-folio | 68/100 | 2/5 |
| Gemini 3.7 Flash | ox-numismatica | 66/100 | 1/5 |
| Grok 4.5 | ox-materia | 66/100 | 1/5 |
| unknown ("Set I") | ox-faces | 60/100 | 3/5 |
| GLM 5.3 | ox-systema | 60/100 | 0/5 |
| Inkling | ox-aurora | 58/100 | 0/5 |
| Kimi 2.6 | ox-lithica | 54/100 | 0/5 |
| Gemini 3.1 Pro | ox-chronicle | 53/100 | 0/5 |

## The individual verdicts

**Qwen 3.8 Flash failed with 3/5 OX passes, but had overall 80/100 score, what a shame!** The best score on this wall. The city-history writing was excellent and then the Smithfield market ox turned out to be a dark blob with two antenna horns, and the blueprint steer read pig. Also shipped IBM Plex Mono in The Line without ever loading the font.

**muse-spark failed with 1/5 OX passes, but had overall 70/100 score, what a shame!** The best-designed set to fail. Furrow's oxen were a speck at the field edge, Forge drew a head on a treadmill wheel and called it a day, and in Altar the Nandi never showed up to its own shrine. Four empty temples in spirit.

**GLM 5.2 failed with 2/5 OX passes, but had overall 68/100 score, what a shame!** The wildest art direction of the whole review, and the oxen hid anyway. Pitch's ox head was invisible against its own background, the volvelle's Taurus read as a giant hand, and the anatomy plate looked like a sheep.

**Gemini 3.7 Flash failed with 1/5 OX passes, but had overall 66/100 score, what a shame!** Five coins, one recognizable bull. The other four grew antennae horns and became rabbits and beetles. Also leaned on scale and lightning glyphs as engraving artwork, a brush with the no-emoji rule.

**Grok 4.5 failed with 1/5 OX passes, but had overall 66/100 score, what a shame!** The five-substances idea (hide, horn, bone, milk, dung) was the most original framing in the review. The animals read as a cloud-sheep, a fly, a sundae and a smiling poop. Only the horn lantern worked.

**The unknown model behind "Set I" failed with 3/5 OX passes, but had overall 60/100 score, what a shame!** No credit name and no signature in any of the five designs, so this one cannot even be shamed properly. Stillness drew an ox with no head and no horns and called it stillness.

**GLM 5.3 failed with 0/5 OX passes, but had overall 60/100 score, what a shame!** The cruelest entry here. It was the only set of all 21 with a perfectly clean rule audit: correct signatures, no banned techniques, nothing. And not one of its five animals looked like an ox. The aurochs was a duck.

**Inkling failed with 0/5 OX passes, but had overall 58/100 score, what a shame!** Banned code comments in all five files, not a single h1 anywhere, and the same signature badge pasted five times. The meadow zebu had two white rabbit ears. The copy was good, which makes it worse.

**Kimi 2.6 failed with 0/5 OX passes, but had overall 54/100 score, what a shame!** A refined stone-carving survey where the carvings are jugs. The signature stamps rendered with ornament glyphs printed over the text on three of five pages, and the cameo bull was too faint to exist.

**Gemini 3.1 Pro failed with 0/5 OX passes, but had overall 53/100 score, what a shame!** Lowest score of the review. The Lascaux bison had no head, the constellation had no bull, and the minotaur hid behind its own title. Five eras of history, zero oxen.

## What actually went wrong

One failure mode covers most of this wall: horns drawn as thin double strokes on rounded bodies. At a glance those read as insect antennae or rabbit ears, and no caption saves them. The sets that passed drew horns with mass. That, plus animals painted dark-on-dark, accounts for nearly every removal here.
