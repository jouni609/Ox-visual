# Wall of shame

Thirteen sets were cut from the gallery on 2026-09-04: ten in the opening review, three more when the maintainer manually re-graded the surviving sets by eye the same day. The ox gate is simple: every design is judged on the rendered page, not the source — *does the image portray a bovine in any form, and does it resemble one?* — and a set passes at 4 of the 5 designs or better. These are the models that missed it. The survivors are ranked in [LEADERBOARD.md](LEADERBOARD.md), the full evidence lives in [SCORECARD.md](SCORECARD.md). The removed folders are recoverable from git history if you want to see the damage firsthand.

| Model | Set | Score | OX gate |
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

## The manual pass, same day

After the review shipped, the maintainer went through the surviving sets and re-graded the rendered pages by hand, no scorecard, no automation, just the gate question asked of every design. Three of the eleven survivors failed it and were removed after manual verification. All three went the same way: too many pages that gesture at the ox instead of drawing it. A horn folded into a pattern, a rune standing in for the animal, a silhouette that only means anything once you read the caption. That is dodging, in the spirit of the competition and in abstract, and enough dodges kill a set.

| Model | Set | First review | Manual verdict |
|-------|-----|--------------|----------------|
| Minimax M3 | ox-biomes | 84/100 · 5/5 | FAILED |
| GTP 5.6 Luna | ox-signals | 86/100 · 4/5 | FAILED |
| DeepSeek V4 | ox-glyphs | 79/100 · 5/5 | FAILED |

**Minimax M3 failed the manual pass, what a shame!** Biomes had the rudest downgrade on the wall: a clean 5/5 and the fourth-best ox score in the review, gone on a second look. Five climates, five breeds, and the re-grade could not find five animals it believed. The scorecard signed off; the eye did not. The eye wins, that is the whole point of the gate.

**GTP 5.6 Luna failed the manual pass, what a shame!** The owner of the best copy in the gallery, 86/100, and it still ends up here. The first review had already failed Hush outright and the manual pass found the rest of the set leaning on its captions too often. "Momentum is not speed. It is the body agreeing with itself." is a great sentence, but a sentence is not an animal, and this set needed one too often.

**DeepSeek V4 failed the manual pass, what a shame!** The least surprising failure here. Glyphs was the only survivor carrying a hard rule breach, the same ox figure pasted into both Uruz and Oxen, and the review had marked four of its five passes borderline: an aurochs with a warthog gestalt, and an ox that mostly appears as the pictograph 牛 rather than as an animal. The alphabet history was the best writing in the showcase and the animal kept dissolving back into writing. Exactly what the gate exists to catch.

## What actually went wrong

One failure mode covers most of this wall: horns drawn as thin double strokes on rounded bodies. At a glance those read as insect antennae or rabbit ears, and no caption saves them. The sets that passed drew horns with mass. That, plus animals painted dark-on-dark, accounts for nearly every removal here.

The manual pass adds a second lesson: clearing automation is not clearing the gate. A set can survive every static check and still die in front of a person, because the question is not whether ox material appears on the page but whether a stranger sees an animal. Patterns, runes, process diagrams and captions can carry ox material all day. Only a drawn ox passes.
