import { useState } from 'react'
import { motion } from 'framer-motion'
import './oxen.css'

const declension = [
  { m: 'SINGULAR', head: 'NOMINATIVE', word: 'OXA', latin: 'the ox', note: 'In Old English the n-stem noun keeps -en in the plural' },
  { m: 'SINGULAR', head: 'DATIVE', word: 'OXAN', latin: 'to the ox', note: 'The -n stem has been going in the dark since the 8th century' },
  { m: 'PLURAL', head: 'NOMINATIVE', word: 'OXAN', latin: 'the oxen', note: 'en, not -s. A living fossil' },
  { m: 'PLURAL', head: 'GENITIVE', word: 'OXENA', latin: 'of the oxen', note: 'the herd, the meadow, the plough, all in one phrase' },
]

const familije = [
  { word: 'oxen', score: 1, note: 'the one everyone still uses' },
  { word: 'children', score: 2, note: 'kept its -en by accident of use' },
  { word: 'brethren', score: 0.6, note: 'withdrew into the church' },
  { word: 'kine', score: 0.2, note: 'a plural of cows, now cows' },
  { word: 'brothers', score: 0.1, note: 'the -s took over' },
]

function EngravedOx() {
  return (
    <svg className="oxen-ox" viewBox="0 0 900 520" aria-hidden="true" focusable="false">
      <defs>
        <clipPath id="oxen-clip">
          <path d="M398 288 C 366 256 370 220 416 198 C 502 150 668 152 770 200 C 840 232 864 278 856 328 C 850 378 812 420 752 436 C 680 454 602 458 532 448 C 484 442 448 428 432 408 C 458 396 466 370 452 354 C 404 350 388 326 398 288 Z" />
        </clipPath>
        <pattern id="oxen-hatch" width="7" height="7" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
          <line x1="0" y1="0" x2="0" y2="7" stroke="#3d2b22" strokeWidth="1.4" />
        </pattern>
      </defs>
      <g>
        <path d="M398 288 C 366 256 370 220 416 198 C 502 150 668 152 770 200 C 840 232 864 278 856 328 C 850 378 812 420 752 436 C 680 454 602 458 532 448 C 484 442 448 428 432 408 C 458 396 466 370 452 354 C 404 350 388 326 398 288 Z" fill="#3d2b22" />
        <path d="M398 288 C 366 256 370 220 416 198 C 502 150 668 152 770 200 C 840 232 864 278 856 328 C 850 378 812 420 752 436 C 680 454 602 458 532 448 C 484 442 448 428 432 408 C 458 396 466 370 452 354 C 404 350 388 326 398 288 Z" fill="url(#oxen-hatch)" />
        <path d="M332 340 L 366 282 L 412 306 L 418 368 L 362 386 Z" fill="#3d2b22" />
        <path d="M332 340 L 366 282 L 412 306 L 418 368 L 362 386 Z" fill="url(#oxen-hatch)" />
        <path d="M366 286 C 320 222 258 196 214 236 C 246 232 282 240 326 300" fill="none" stroke="#3d2b22" strokeWidth="10" strokeLinecap="round" />
        <path d="M386 294 C 368 252 322 234 292 260 C 318 258 352 264 382 296" fill="none" stroke="#3d2b22" strokeWidth="8" strokeLinecap="round" />
        <path d="M332 396 L 276 392" stroke="#3d2b22" strokeWidth="8" strokeLinecap="round" />
        <path d="M380 470 L 374 336 M452 476 L 448 342" stroke="#3d2b22" strokeWidth="9" />
        <path d="M704 470 L 718 352 M772 462 L 786 348" stroke="#3d2b22" strokeWidth="9" />
        <path d="M374 336 L 352 470 L 398 470 L 380 336 Z" fill="none" stroke="#3d2b22" strokeWidth="2" />
        <circle cx="380" cy="410" r="2.6" fill="#3d2b22" />
        <path d="M374 336 L 352 470 M380 336 L 374 470 L 398 470 L 384 336" fill="none" stroke="#b9a078" strokeWidth="1.6" opacity="0.7" />
        <path d="M856 328 C 874 356 878 396 866 430 M866 432 C 866 448 874 458 886 462 C 890 448 882 436 870 432" fill="none" stroke="#3d2b22" strokeWidth="10" strokeLinecap="round" />
        <path d="M480 262 C 540 246 620 246 690 262 M462 306 C 530 290 618 290 692 306 M466 352 C 540 338 632 338 704 352" fill="none" stroke="#b9a078" strokeWidth="2.6" opacity="0.85" />
        <path d="M540 252 C 538 226 546 210 562 204" fill="none" stroke="#b9a078" strokeWidth="2.4" opacity="0.85" />
        <path d="M600 252 C 598 224 608 208 626 202" fill="none" stroke="#b9a078" strokeWidth="2.4" opacity="0.85" />
        <path d="M668 258 C 668 230 678 214 696 208" fill="none" stroke="#b9a078" strokeWidth="2.4" opacity="0.85" />
        <circle cx="348" cy="330" r="8" fill="none" stroke="#3d2b22" strokeWidth="2.6" />
        <circle cx="348" cy="330" r="2.4" fill="#3d2b22" />
        <path d="M330 372 L 310 380 M352 366 L 348 382" stroke="#3d2b22" strokeWidth="2.4" />
        <path d="M378 262 C 390 248 410 242 428 248" fill="none" stroke="#b9a078" strokeWidth="2.6" opacity="0.85" />
      </g>
    </svg>
  )
}

export default function Oxen() {
  const [checked, setChecked] = useState(0)
  const words = familije.map((f) => f.word)
  const chosen = words[checked]

  return (
    <div className="th-oxen">
      <header className="oxen-head">
        <span className="oxen-head-left">THE GRAMMAR OF THE HERD</span>
        <span className="oxen-head-title">A BROADSYDE ON THE PLURAL</span>
        <span className="oxen-head-right">OLD ENGLISH · OXA</span>
      </header>

      <main className="oxen-main">
        <section className="oxen-hero">
          <div className="oxen-hero-copy">
            <p className="oxen-kicker">STEM NOUN, n-, DECLENSION TYPE 1</p>
            <h1 className="oxen-title">
              Most plurals
              <br />
              end in <em>-s</em>.
              <br />
              Not this one.
            </h1>
            <p className="oxen-lede">
              Old English said <strong>oxa</strong>, and for a plural <strong>oxan</strong>.
              The -s that swallows every other English plural never took hold of this animal.
              In 2026 the plural is still <strong>oxen</strong>: a word you conjugate the way
              a 9th century farmer did.
            </p>
            <p className="oxen-sub">
              Try it with any other noun of the old herd. Press the picket markers below.
            </p>

            <div className="oxen-pick">
              {familije.map((f, i) => (
                <button
                  key={f.word}
                  type="button"
                  className={`oxen-picket${checked === i ? ' is-on' : ''}`}
                  onClick={() => setChecked(i)}
                  aria-pressed={checked === i}
                >
                  <span className="oxen-picket-word">{f.word}</span>
                  <span className="oxen-picket-note">{f.note}</span>
                </button>
              ))}
            </div>
            <p className="oxen-gauge" aria-live="polite">
              <span className="oxen-gauge-word">{chosen}</span>
              <span className="oxen-gauge-verdict">
                {familije[checked].score === 1 ? 'an ox of a plural: still in the field' : null}
                {familije[checked].score === 2 ? 'almost oxen: the -en family holds two' : null}
                {familije[checked].score === 0.6 ? 'went to church in 1611 and stayed' : null}
                {familije[checked].score === 0.2 ? 'archaic: from Old English cy. Still grazes in scripture' : null}
                {familije[checked].score === 0.1 ? 'the -s won this one' : null}
              </span>
            </p>
          </div>

          <figure className="oxen-plate">
            <EngravedOx />
            <figcaption className="oxen-plate-cap">
              <span className="oxen-plate-no">PLATE V</span>
              <span className="oxen-plate-title">BOS·TAURUS the n-stem, out of the -en herd</span>
              <span className="oxen-plate-sub">Cut after the stone of the 9th century</span>
            </figcaption>
          </figure>
        </section>

        <section className="oxen-table" aria-label="Declension of oxa">
          <div className="oxen-table-head">
            <h2 className="oxen-h2">Declined, and folded</h2>
            <p className="oxen-table-sub">The Old English paradigm, by horn-figure and case.</p>
          </div>
          <div className="oxen-rows">
            {declension.map((row, i) => (
              <motion.div
                key={row.head + row.word}
                className="oxen-row"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: i * 0.09, ease: 'easeOut' }}
              >
                <span className="oxen-row-mode">{row.m}</span>
                <span className="oxen-row-head">{row.head}</span>
                <span className="oxen-row-word">{row.word}</span>
                <span className="oxen-row-latin" lang="la">{row.latin}</span>
                <span className="oxen-row-note">{row.note}</span>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="oxen-crossing">
          <p className="oxen-crossing-kicker">A FORD NAMED AFTER THEM</p>
          <div className="oxen-crossing-body">
            <p className="oxen-crossing-text">
              Oxford was <em>Oxenford</em> in the 10th century: the ford where the oxen
              crossed the Thames. The bulls of the Bosphorus crossed much farther. The strait
              of Istanbul is named, in Greek, the ox-ford: <em lang="el">Βόσπορος</em>.
            </p>
            <p className="oxen-crossing-line">oxa + ford = a city. bous + poros = a strait.</p>
          </div>
        </section>

        <footer className="oxen-footer">
          <div className="oxen-last">
            <span className="oxen-last-state">SET XI · DESIGNED BY DEEPSEEK V4</span>
            <span className="oxen-last-sub">TAYLOR &amp; HORN · LETTERPRESS WARE · 29 SCRIBES LANE</span>
          </div>
          <p className="oxen-note">No ox was harmed in the composition of this page.</p>
        </footer>
      </main>
    </div>
  )
}
