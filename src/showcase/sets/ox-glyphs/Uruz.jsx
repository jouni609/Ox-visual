import { useState } from 'react'
import { motion } from 'framer-motion'
import './uruz.css'

function CarvedAurochs() {
  return (
    <svg className="uru-ox" viewBox="0 0 880 600" aria-hidden="true" focusable="false">
      <g stroke="#cfdbe2" strokeWidth="13" strokeLinecap="round" strokeLinejoin="round" fill="#1d262e">
        <path d="M330 282 C 300 250 300 214 344 190 C 426 140 588 142 692 192 C 762 224 788 270 782 322 C 776 372 738 414 676 430 C 602 448 522 452 450 442 C 402 436 362 422 346 400 C 372 386 380 360 366 344 C 318 340 302 318 330 282 Z" />
        <path d="M252 318 L 288 258 L 332 284 L 336 350 L 272 368 Z" />
        <path d="M286 260 C 232 196 156 168 112 214 C 148 210 190 218 242 286" />
        <path d="M306 268 C 286 226 234 208 202 236 C 232 234 268 240 300 276" />
        <path d="M262 358 L 240 372 M264 350 L 238 352" />
        <path d="M294 396 L 236 392" />
      </g>
      <g stroke="#9fb2bd" strokeWidth="8" strokeLinecap="round" fill="none">
        <path d="M380 436 L 374 566 M436 442 L 434 566" />
        <path d="M628 442 L 646 544 M694 430 L 712 544" />
        <path d="M374 566 L 386 578 L 400 566 M434 566 L 446 578 L 460 566" />
        <path d="M646 544 L 660 556 L 676 544 M712 544 L 726 556 L 742 544" />
        <path d="M782 322 C 812 348 820 386 808 422" />
        <path d="M806 424 C 800 438 806 452 820 458 C 828 444 822 432 808 424" />
        <path d="M418 260 C 480 246 560 246 632 262 M400 306 C 470 292 556 292 636 306 M404 352 C 480 338 572 338 648 352" />
        <path d="M500 250 C 500 230 508 218 524 214 M560 250 C 560 228 566 214 584 212 M624 256 C 628 234 638 222 656 220" />
        <path d="M330 190 L 344 214 L 374 200" />
        <path d="M782 322 L 762 342" />
      </g>
      <g stroke="#8fa3ae" strokeWidth="5" strokeLinecap="round" fill="none">
        <circle cx="296" cy="304" r="7" />
        <path d="M262 372 C 254 384 258 394 272 398" />
        <path d="M290 280 L 302 262" />
      </g>
    </svg>
  )
}

function RuneStrokes({ carved }) {
  const strokes = ['M150 52 L 172 180', 'M300 52 L 278 180']
  return (
    <svg className="uru-bigrune" viewBox="0 0 460 240" aria-hidden="true" focusable="false">
      <path d="M20 28 L 64 196" stroke="#8fa3ae" strokeWidth="5" fill="none" opacity="0.5" />
      <path d="M438 28 L 394 196" stroke="#8fa3ae" strokeWidth="5" fill="none" opacity="0.5" />
      {strokes.map((d, i) => {
        const on = carved[i]
        return (
          <motion.path
            key={d}
            d={d}
            stroke="#cfdbe2"
            strokeWidth="26"
            strokeLinecap="round"
            fill="none"
            initial={on ? { pathLength: 0, opacity: 0.6 } : false}
            animate={on ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
            transition={{ duration: 1.1, ease: 'easeInOut' }}
          />
        )
      })}
      <path
        d="M170 184 L 188 208 C 204 228 242 228 258 208 L 276 184"
        stroke="#cfdbe2"
        strokeWidth="20"
        strokeLinecap="round"
        fill="none"
        opacity={carved[0] && carved[1] ? 0.9 : 0.3}
      />
      <path d="M180 188 L 278 188" stroke="#75858f" strokeWidth="6" strokeLinecap="round" fill="none" opacity={carved[0] && carved[1] ? 0.6 : 0.2} />
    </svg>
  )
}

export default function Uruz() {
  const [carved, setCarved] = useState([false, false])
  const carve = () => {
    const i = carved.findIndex((v) => !v)
    if (i === -1) {
      setCarved([false, false])
      return
    }
    setCarved(carved.map((v, j) => (j === i ? true : v)))
  }
  const count = carved.filter(Boolean).length

  return (
    <div className="th-uru">
      <svg className="uru-sky" viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice" aria-hidden="true" focusable="false">
        <defs>
          <linearGradient id="uru-skygrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#0a1220" />
            <stop offset="0.7" stopColor="#14202d" />
            <stop offset="1" stopColor="#1f2a30" />
          </linearGradient>
          <radialGradient id="uru-moon" cx="0.5" cy="0.5" r="0.5">
            <stop offset="0" stopColor="#e9f2f5" />
            <stop offset="0.7" stopColor="#b9c9d2" />
            <stop offset="1" stopColor="#8fa3ae" />
          </radialGradient>
        </defs>
        <rect width="1600" height="900" fill="url(#uru-skygrad)" />
        <circle cx="1180" cy="190" r="88" fill="url(#uru-moon)" opacity="0.9" />
        <circle cx="1180" cy="190" r="150" fill="none" stroke="#cfdbe2" strokeWidth="2" opacity="0.16" />
        {[
          [180, 120], [420, 90], [640, 150], [880, 70], [1400, 120], [1500, 300], [90, 320], [760, 250],
        ].map(([x, y]) => (
          <circle key={`${x}${y}`} cx={x} cy={y} r="1.8" fill="#e9f2f5" opacity="0.8" />
        ))}
        <path d="M0 760 C 260 700 430 724 640 686 C 880 642 1120 690 1360 656 C 1450 640 1540 646 1600 634 L 1600 900 L 0 900 Z" fill="#101820" />
        <path d="M0 830 C 300 790 640 806 940 778 C 1210 754 1420 780 1600 760 L 1600 900 L 0 900 Z" fill="#0b1218" />
      </svg>

      <header className="uru-head">
        <span className="uru-head-left" lang="ang">ᚠᚢᚦᚨᚱᚲ</span>
        <span className="uru-head-title">THE RUNE OF THE AUROCHS</span>
        <span className="uru-head-right">ELDER FUTHARK · 02</span>
      </header>

      <main className="uru-main">
        <section className="uru-hero">
          <div className="uru-stone-block">
            <motion.div
              className="uru-stone"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: 'easeOut' }}
            >
              <RuneStrokes carved={carved} />
              <div className="uru-stone-caption">
                <span className="uru-stone-rune" lang="ang">ᚢ</span>
                <span className="uru-stone-name">URUZ</span>
                <span className="uru-stone-meaning">THE AUROCHS</span>
              </div>
              <CarvedAurochs />
              <button
                type="button"
                className="uru-carve-btn"
                onClick={carve}
                aria-label={count === 2 ? 'Re-carve the rune' : `Carve the rune, ${2 - count} strokes left`}
              >
                {count === 2 ? 'SET IT AGAIN' : 'CARVE THE ᚢ'}
              </button>
            </motion.div>
          </div>

          <div className="uru-hero-copy">
            <p className="uru-kicker">A RUNE IS A NAME FIRST</p>
            <h1 className="uru-title">
              Before the ox
              <br />
              was <em>ox</em>,
              <br />
              it was a rune.
            </h1>
            <p className="uru-lede">
              Every letter of the Elder Futhark was named for something you could see from a
              farmyard. The second of them, <strong lang="ang">ᚢ uruz</strong>, is the aurochs:
              the wild ox of the northern forest with its long, lyre-shaped horns; a creature
              no yoke ever fitted.
            </p>
            <p className="uru-lede-snd">
              In the rune poem of the Anglo-Saxons the stave is still called <em lang="ang">ūr</em>,
              'the ox': fierce, and horned without end. By then the animal itself was already
              a memory in the north.
            </p>
          </div>
        </section>

        <section className="uru-facts">
          <article className="uru-fact">
            <span className="uru-fact-num">I</span>
            <h2 className="uru-fact-title">The last one was seen in 1627</h2>
            <p className="uru-fact-text">
              A cow of the Jaktorów herd died in the forest east of Warsaw. With her the
              aurochs left the world, and with it went the wild ancestor of every ox that
              has since walked behind a yoke.
            </p>
          </article>
          <article className="uru-fact">
            <span className="uru-fact-num">II</span>
            <h2 className="uru-fact-title">1.6 metres at the shoulder</h2>
            <p className="uru-fact-text">
              Taller than any farm bull, black with a cream stripe down the back, horns
              forward like a lyre. The aurochs was the champion animal of the rune, and the
              rune took the ox's name.
            </p>
          </article>
          <article className="uru-fact">
            <span className="uru-fact-num">III</span>
            <h2 className="uru-fact-title">A name in a poem</h2>
            <p className="uru-fact-text">
              The Anglo-Saxon Rune Poem keeps the old word alive: <em lang="ang">ūr</em>, the
              ox, is fierce and high-horned. Fourteen centuries after the animal vanished
              from the north, its rune still stands second in the row.
            </p>
          </article>
        </section>

        <section className="uru-row">
          <p className="uru-row-title">TWENTY-FOUR LETTERS, ONE HERD</p>
          <div className="uru-row-track" aria-hidden="true">
            <div className="uru-row-glyphs" lang="ang">ᚠ ᚢ ᚦ ᚨ ᚱ ᚲ ᚷ ᚹ ᚺ ᚾ ᛁ ᛃ ᛇ ᛈ ᛉ ᛊ ᛏ ᛒ ᛖ ᛗ ᛚ ᛜ ᛞ ᛟ</div>
            <div className="uru-row-glyphs" lang="ang">ᚠ ᚢ ᚦ ᚨ ᚱ ᚲ ᚷ ᚹ ᚺ ᚾ ᛁ ᛃ ᛇ ᛈ ᛉ ᛊ ᛏ ᛒ ᛖ ᛗ ᛚ ᛜ ᛞ ᛟ</div>
          </div>
          <p className="uru-row-note">
            All twenty-four, in a running herd across the well. The second is the ox.
          </p>
        </section>

        <footer className="uru-footer">
          <div className="uru-carve-mark">
            <span className="uru-carve-mark-glyph" lang="ang">ᚢ</span>
            <span className="uru-carve-mark-text">
              <span className="uru-carve-mark-line">SET XI · DESIGNED BY DEEPSEEK V4</span>
              <span className="uru-carve-mark-sub">CARVED BY THE MONUMENT MAKER · OXBURGH</span>
            </span>
          </div>
        </footer>
      </main>
    </div>
  )
}
