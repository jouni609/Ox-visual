import { motion } from 'framer-motion'
import './bronze.css'

const TICKER = [
  '7,000 LB OF BRONZE',
  'INSTALLED WITHOUT A PERMIT · OPP. THE STOCK EXCHANGE',
  'TOWED AWAY BY DEPT. OF PARKS',
  'THE NEIGHBOURHOOD ASKED FOR IT BACK',
  'CITY RULING: IT STAYS',
  'BOWLING GREEN · HEAD OF BROADWAY · MILE ZERO',
  'THE HORN SHINES WHERE HANDS HAVE WISHED',
]

const SPECK = Array.from({ length: 90 }, (_, i) => {
  const x = (i * 137.5) % 1200
  const y = (i * 73.3) % 460
  const r = 0.6 + ((i * 7) % 10) / 8
  const o = 0.05 + ((i * 11) % 14) / 100
  return [x, y, r, o]
})

function Bull() {
  return (
    <svg className="ox-polis-brz-figure" viewBox="0 0 900 620" aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id="ox-polis-brz-body" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#C99A54" />
          <stop offset="46%" stopColor="#8A5A2A" />
          <stop offset="100%" stopColor="#4E3016" />
        </linearGradient>
        <linearGradient id="ox-polis-brz-sheen" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#F5D9A8" stopOpacity="0" />
          <stop offset="50%" stopColor="#F5D9A8" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#F5D9A8" stopOpacity="0" />
        </linearGradient>
        <radialGradient id="ox-polis-brz-spot">
          <stop offset="0%" stopColor="#F5D9A8" stopOpacity="0.32" />
          <stop offset="100%" stopColor="#F5D9A8" stopOpacity="0" />
        </radialGradient>
        <clipPath id="ox-polis-brz-bullclip">
          <path d="M252 336 C262 268 322 216 402 196 C438 156 506 148 548 176 C590 158 656 172 700 212 C744 248 764 302 758 352 C752 398 712 428 656 436 C600 444 480 446 420 442 C340 438 262 410 252 336 Z" />
          <path d="M262 306 C214 296 168 316 142 356 C124 384 122 416 142 434 C160 448 190 444 204 426 C214 410 226 392 248 378 Z" />
        </clipPath>
      </defs>

      <ellipse cx="450" cy="120" rx="430" ry="330" fill="url(#ox-polis-brz-spot)" />
      <ellipse cx="480" cy="572" rx="330" ry="18" fill="#000000" opacity="0.5" />

      <g>
        <path d="M252 336 C262 268 322 216 402 196 C438 156 506 148 548 176 C590 158 656 172 700 212 C744 248 764 302 758 352 C752 398 712 428 656 436 C600 444 480 446 420 442 C340 438 262 410 252 336 Z" fill="url(#ox-polis-brz-body)" />
        <path d="M402 196 C438 156 506 148 548 176" fill="none" stroke="#D9A95E" strokeWidth="5" opacity="0.55" strokeLinecap="round" />
        <ellipse cx="704" cy="320" rx="56" ry="92" fill="#5E3A18" opacity="0.35" />
        <ellipse cx="470" cy="400" rx="120" ry="34" fill="#3E8E7E" opacity="0.07" />
        <path d="M262 306 C214 296 168 316 142 356 C124 384 122 416 142 434 C160 448 190 444 204 426 C214 410 226 392 248 378 Z" fill="#A6742F" />
        <path d="M142 416 C126 424 120 440 130 452 C144 460 162 452 168 436 Z" fill="#5E3A18" />
        <path d="M192 332 L150 296 C162 316 176 330 190 340 Z" fill="#C4A778" />
        <path d="M210 322 L178 272 C186 298 198 314 208 328 Z" fill="#D9BE8C" />
        <path d="M232 344 C248 336 262 340 262 350 C250 356 238 353 233 348 Z" fill="#7A4E20" />
        <circle cx="202" cy="362" r="4.6" fill="#2A1A0C" />
        <path d="M300 430 C286 470 276 512 280 550 L326 554 C328 514 334 474 344 434 Z" fill="#8A5A2A" />
        <path d="M272 548 h62 v18 h-62 Z" fill="#3D2610" />
        <path d="M368 436 C364 482 360 524 366 556 L410 556 C410 516 414 476 420 438 Z" fill="#6B441C" />
        <path d="M358 552 h58 v16 h-58 Z" fill="#3D2610" />
        <path d="M610 434 C604 480 598 520 592 552 L638 556 C646 516 654 476 662 436 Z" fill="#8A5A2A" />
        <path d="M584 548 h62 v18 h-62 Z" fill="#3D2610" />
        <path d="M668 428 C684 468 704 506 726 536 L764 514 C742 480 724 444 712 406 Z" fill="#6B441C" />
        <path d="M714 542 l44 -24 10 16 -46 26 Z" fill="#3D2610" />
        <path d="M752 300 C784 322 794 380 778 438" fill="none" stroke="#7A4E20" strokeWidth="13" strokeLinecap="round" />
        <path d="M776 444 C770 466 776 486 792 494 C806 496 814 482 810 466" fill="none" stroke="#5E3A18" strokeWidth="10" strokeLinecap="round" />
        <path d="M330 250 C420 210 540 210 630 246" fill="none" stroke="#F5D9A8" strokeWidth="3.4" opacity="0.3" />
        <path d="M292 330 C306 372 334 402 374 416" fill="none" stroke="#3D2610" strokeWidth="4" opacity="0.5" />
        <path d="M560 210 C580 250 586 300 578 350" fill="none" stroke="#3D2610" strokeWidth="3" opacity="0.4" />
      </g>

      <motion.g clipPath="url(#ox-polis-brz-bullclip)">
        <motion.rect
          x="-260"
          y="120"
          width="240"
          height="460"
          fill="url(#ox-polis-brz-sheen)"
          transform="skewX(-18)"
          animate={{ x: [-260, 1080] }}
          transition={{ duration: 2.6, repeat: Infinity, repeatDelay: 4.2, ease: 'easeInOut' }}
        />
      </motion.g>

      <motion.g animate={{ opacity: [0.7, 1, 0.7] }} transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}>
        <circle cx="152" cy="284" r="10" fill="url(#ox-polis-brz-spot)" />
        <circle cx="152" cy="284" r="3.6" fill="#FFF2D4" />
      </motion.g>
    </svg>
  )
}

export default function Bronze() {
  return (
    <div className="th-ox-polis ox-polis-brz">
      <svg className="ox-polis-brz-granite" viewBox="0 0 1200 460" preserveAspectRatio="none" aria-hidden="true" focusable="false">
        {SPECK.map(([x, y, r, o], i) => (
          <circle key={i} cx={x} cy={y} r={r} fill="#D8D2C6" opacity={o} />
        ))}
      </svg>

      <div className="ox-polis-brz-wrap">
        <header className="ox-polis-brz-head">
          <p className="ox-polis-brz-kicker">Ox Polis · 05 · New York · Dec 1989</p>
          <h1 className="ox-polis-brz-h1">
            The Bull
            <span>That Stayed</span>
          </h1>
          <p className="ox-polis-brz-deck">
            Three centuries after Boston's cows, the ox family re-entered the American city as
            seven thousand pounds of bronze — installed on Wall Street without a permit, towed
            away by the parks department, and handed back to the neighbourhood two weeks later.
            The only bovine the city ever voted to keep.
          </p>
        </header>

        <main className="ox-polis-brz-stage">
          <div className="ox-polis-brz-cone" aria-hidden="true" />
          <Bull />
          <div className="ox-polis-brz-plinth">
            <div className="ox-polis-brz-plaque">
              <p className="ox-polis-brz-plaque-line">CHARGING BULL · F. DI MODICA</p>
              <p className="ox-polis-brz-sign">SET XIX · DESIGNED BY QWEN 3.8 FLASH</p>
              <p className="ox-polis-brz-plaque-sub">cast without leave of the city · kept by order of it</p>
            </div>
          </div>
        </main>

        <section className="ox-polis-brz-cards" aria-label="Notes from the plaza">
          <article>
            <h2>Answer to a crash</h2>
            <p>
              After October 1987 took a quarter of the market in a day, the sculptor carved the
              bull on his own time and at his own expense — a gift, he said, to the city that got
              back up. The city's first reply was a parking ticket on a statue.
            </p>
          </article>
          <article>
            <h2>Mile zero</h2>
            <p>
              Bowling Green is where Broadway begins its 3,200-odd miles. The bull faces south at
              its head, so the great commercial road starts, to this day, with a lowered head.
            </p>
          </article>
          <article>
            <h2>Touch brass</h2>
            <p>
              Strangers polish the horn and nose by gripping them for luck. Conservators file the
              requests every spring and let the shine stay where the crowd put it.
            </p>
          </article>
        </section>
      </div>

      <div className="ox-polis-brz-ticker" aria-hidden="true">
        <motion.div
          className="ox-polis-brz-tape"
          animate={{ x: [0, -1470] }}
          transition={{ duration: 26, repeat: Infinity, ease: 'linear' }}
        >
          {[0, 1].map((copy) => (
            <span key={copy} className="ox-polis-brz-tape-run">
              {TICKER.map((item, i) => (
                <span className="ox-polis-brz-tape-item" key={`${copy}-${i}`}>
                  <b>{`0${i + 1}`}</b>
                  {item}
                </span>
              ))}
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
