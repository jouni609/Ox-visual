import { useState } from 'react'
import { motion } from 'framer-motion'
import './jugyu.css'

const STAGES = [
  {
    id: 1,
    numeral: 'I',
    kanji: '尋牛',
    title: 'Seeking the Ox',
    coat: '#292421',
    coatFar: '#1A1715',
    stroke: '#D9A74A',
    muzzle: '#171412',
    ropeSlack: false,
    verse: 'In the pasture of the world, I endlessly push aside the tall grasses in search of the ox.',
    note: 'The untamed mind appears first in dark ink—wild, heavy, and elusive among thick brush.',
  },
  {
    id: 2,
    numeral: 'III',
    kanji: '見牛',
    title: 'Perceiving the Ox',
    coat: '#4A413A',
    coatFar: '#312B26',
    stroke: '#D9A74A',
    muzzle: '#251F1B',
    ropeSlack: false,
    verse: 'I hear the song of the nightingale; the sun is warm, the wind is mild, willows are green along the bank.',
    note: 'Form separates from shadow: horns, broad brow, and slow stride stand unmistakable in daylight.',
  },
  {
    id: 3,
    numeral: 'V',
    kanji: '牧牛',
    title: 'Taming the Ox',
    coat: '#948878',
    coatFar: '#6C6255',
    stroke: '#241D18',
    muzzle: '#4D443B',
    ropeSlack: false,
    verse: 'The whip and rope are necessary, else he might stray off down some dusty road.',
    note: 'In Kuoan’s painted scrolls, the ox’s coat gradually pales from black to silver-grey as habit softens.',
  },
  {
    id: 4,
    numeral: 'VI',
    kanji: '騎牛帰家',
    title: 'Riding the Ox Home',
    coat: '#EFE6D5',
    coatFar: '#C9BEA8',
    stroke: '#1A1410',
    muzzle: '#5A4D43',
    ropeSlack: true,
    verse: 'Mounting the ox, slowly I return homeward; the voice of my flute intones through the evening.',
    note: 'The white ox walks unhurried inside the golden ensō; the hemp tether hangs loose with nothing left to force.',
  },
  {
    id: 5,
    numeral: 'VII',
    kanji: '忘牛存人',
    title: 'The Ox Transcended',
    coat: '#FAF4E8',
    coatFar: '#DDD3BE',
    stroke: '#8C6223',
    muzzle: '#7D6D5C',
    ropeSlack: true,
    verse: 'Astride the ox, I reach home; I am serene. Though the sun is high, I am still dreaming.',
    note: 'Pure alabaster against gold leaf: effort dissolves into quiet presence, leaving only stillness and breath.',
  },
]

export default function Jugyu() {
  const [stageIdx, setStageIdx] = useState(3)
  const stage = STAGES[stageIdx]

  return (
    <div className="th-vantage-jugyu ox-vantage-jug-root">
      <div className="ox-vantage-jug-seams" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>

      <div className="ox-vantage-jug-layout">
        <header className="ox-vantage-jug-rail">
          <div className="ox-vantage-jug-kanji" lang="ja" aria-label="Jūgyūzu — Ten Ox-Herding Pictures">
            十牛図
          </div>
          <div className="ox-vantage-jug-headcopy">
            <p className="ox-vantage-jug-kicker">TWELFTH-CENTURY ZEN PARABLE · KUOAN SHIYUAN</p>
            <h1 className="ox-vantage-jug-h1">JŪGYŪ</h1>
            <p className="ox-vantage-jug-sub">
              In the Zen ox-herding scrolls, the mind is drawn as a stray ox—dark and unruly at first,
              turning luminous white as discipline gives way to ease.
            </p>
          </div>
        </header>

        <main className="ox-vantage-jug-stage">
          <svg
            className="ox-vantage-jug-svg"
            viewBox="0 0 760 610"
            role="img"
            aria-label={`Walking East Asian ox in three-quarter right-facing profile framed inside a golden brushed ensō circle, showing graceful crescent horns, calm broad muzzle with hemp nose-ring, rounded barrel, tufted tail, and four cloven-hoofed legs during Zen stage ${stage.title}`}
          >
            <defs>
              <radialGradient id="ox-vantage-jug-glow" cx="50%" cy="48%" r="48%">
                <stop offset="0%" stopColor="#D9A74A" stopOpacity="0.22" />
                <stop offset="68%" stopColor="#8A5E1A" stopOpacity="0.06" />
                <stop offset="100%" stopColor="#14110F" stopOpacity="0" />
              </radialGradient>
              <linearGradient id="ox-vantage-jug-enso" x1="10%" y1="90%" x2="90%" y2="10%">
                <stop offset="0%" stopColor="#B8832E" />
                <stop offset="52%" stopColor="#E6BC68" />
                <stop offset="100%" stopColor="#C9933B" stopOpacity="0.55" />
              </linearGradient>
              <linearGradient id="ox-vantage-jug-horn" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#8E7558" />
                <stop offset="55%" stopColor="#E7D8BE" />
                <stop offset="100%" stopColor="#3B2E24" />
              </linearGradient>
            </defs>

            <circle cx="380" cy="306" r="276" fill="url(#ox-vantage-jug-glow)" />

            <motion.path
              d="M 556 126 C 632 198 652 322 598 424 C 538 538 394 584 274 534 C 148 482 94 336 144 210 C 194 84 342 30 468 78 C 492 88 512 100 530 112"
              fill="none"
              stroke="url(#ox-vantage-jug-enso)"
              strokeWidth="22"
              strokeLinecap="round"
              opacity="0.92"
              animate={{ opacity: [0.82, 0.98, 0.82] }}
              transition={{ duration: 6.5, repeat: Infinity, ease: 'easeInOut' }}
            />
            <path
              d="M 546 138 C 618 206 638 320 586 416 C 532 518 396 562 284 516 C 166 468 116 332 162 216 C 208 100 344 50 460 94"
              fill="none"
              stroke="#F7DDA2"
              strokeWidth="3"
              strokeLinecap="round"
              opacity="0.35"
            />

            <path
              d="M 136 502 Q 380 488 624 502"
              fill="none"
              stroke="#D9A74A"
              strokeWidth="1.5"
              opacity="0.45"
            />
            <ellipse cx="364" cy="500" rx="204" ry="13" fill="#070504" opacity="0.65" />

            <motion.g
              animate={{ y: [0, -2.5, 0] }}
              transition={{ duration: 5.2, repeat: Infinity, ease: 'easeInOut' }}
            >
              <path
                d="M 272 356 L 266 420 L 278 476 L 302 476 L 292 420 L 304 356 Z"
                fill={stage.coatFar}
                stroke={stage.stroke}
                strokeWidth="2.2"
              />
              <path d="M 274 474 L 292 474 L 298 492 L 272 492 Z" fill="#1D1714" />

              <path
                d="M 458 358 L 484 420 L 498 476 L 522 476 L 510 416 L 486 350 Z"
                fill={stage.coatFar}
                stroke={stage.stroke}
                strokeWidth="2.2"
              />
              <path d="M 496 474 L 514 474 L 522 492 L 494 492 Z" fill="#1D1714" />

              <motion.g
                style={{ originX: '204px', originY: '248px' }}
                animate={{ rotate: [0, 4, -2, 0] }}
                transition={{ duration: 5.8, repeat: Infinity, ease: 'easeInOut' }}
              >
                <path
                  d="M 206 248 C 176 266 170 326 168 398"
                  fill="none"
                  stroke={stage.stroke}
                  strokeWidth="8.5"
                  strokeLinecap="round"
                />
                <path
                  d="M 206 248 C 176 266 170 326 168 398"
                  fill="none"
                  stroke={stage.coatFar}
                  strokeWidth="4.5"
                  strokeLinecap="round"
                />
                <path
                  d="M 168 390 C 154 408 156 432 168 448 C 180 432 182 408 174 390 Z"
                  fill="#231C18"
                  stroke={stage.stroke}
                  strokeWidth="1.6"
                />
              </motion.g>

              <path
                d="M 210 240 C 234 218 296 220 356 218 C 406 216 446 196 488 212 C 514 222 526 258 518 310 C 512 346 498 378 468 390 L 456 388 L 434 428 L 432 482 L 404 482 L 406 426 L 394 388 C 344 398 292 394 246 376 L 222 424 L 230 482 L 202 482 L 194 422 C 204 386 196 346 196 296 C 196 268 200 250 210 240 Z"
                fill={stage.coat}
                stroke={stage.stroke}
                strokeWidth="3.2"
                strokeLinejoin="round"
              />

              <path
                d="M 476 342 C 474 364 464 380 448 386"
                fill="none"
                stroke={stage.stroke}
                strokeWidth="2.2"
                strokeLinecap="round"
                opacity="0.48"
              />

              <path
                d="M 252 246 C 282 268 296 312 284 358 M 392 254 C 414 282 422 326 410 368 M 322 248 Q 354 252 386 244"
                fill="none"
                stroke={stage.stroke}
                strokeWidth="2.4"
                strokeLinecap="round"
                opacity="0.38"
              />

              <path d="M 398 480 L 416 480 L 420 500 L 394 500 Z" fill="#18120F" />
              <path d="M 418 480 L 434 480 L 438 499 L 421 499 Z" fill="#2E241E" />
              <path d="M 198 480 L 216 480 L 220 500 L 194 500 Z" fill="#18120F" />
              <path d="M 218 480 L 232 480 L 236 499 L 221 499 Z" fill="#2E241E" />

              <g>
                <path
                  d="M 500 228 C 468 218 448 194 456 154 C 464 178 478 198 510 208 Z"
                  fill="url(#ox-vantage-jug-horn)"
                  stroke={stage.stroke}
                  strokeWidth="2.4"
                  strokeLinejoin="round"
                />
                <path
                  d="M 546 226 C 584 214 606 188 598 150 C 590 176 574 196 538 206 Z"
                  fill="url(#ox-vantage-jug-horn)"
                  stroke={stage.stroke}
                  strokeWidth="2.4"
                  strokeLinejoin="round"
                />

                <path
                  d="M 494 246 C 470 246 448 256 442 272 C 458 278 480 274 498 264 Z"
                  fill={stage.coat}
                  stroke={stage.stroke}
                  strokeWidth="2.4"
                />
                <path
                  d="M 552 246 C 574 246 592 254 596 268 C 582 274 566 272 550 262 Z"
                  fill={stage.coatFar}
                  stroke={stage.stroke}
                  strokeWidth="2.2"
                />

                <path
                  d="M 496 218 C 514 206 544 208 558 224 C 574 244 584 274 588 304 C 592 326 578 344 556 346 C 532 348 510 338 498 318 C 484 294 480 256 488 232 C 490 226 492 222 496 218 Z"
                  fill={stage.coat}
                  stroke={stage.stroke}
                  strokeWidth="2.8"
                  strokeLinejoin="round"
                />

                <path d="M 508 266 Q 521 261 533 268" fill="none" stroke={stage.stroke} strokeWidth="2.5" strokeLinecap="round" />
                <ellipse cx="522" cy="272" rx="6" ry="3.2" fill="#17120E" />
                <circle cx="524" cy="271" r="1.4" fill="#FAF4E8" />

                <path d="M 556 266 Q 566 261 576 268" fill="none" stroke={stage.stroke} strokeWidth="2.3" strokeLinecap="round" />
                <ellipse cx="566" cy="272" rx="5" ry="3" fill="#17120E" />
                <circle cx="567" cy="271" r="1.3" fill="#FAF4E8" />

                <path
                  d="M 526 300 C 542 292 574 292 588 302 C 596 314 592 334 578 342 C 560 350 536 348 524 338 C 516 326 518 308 526 300 Z"
                  fill={stage.muzzle}
                  stroke={stage.stroke}
                  strokeWidth="2.2"
                />
                <ellipse cx="542" cy="320" rx="5.5" ry="3.8" transform="rotate(16 542 320)" fill="#0E0A08" />
                <ellipse cx="574" cy="318" rx="5.5" ry="3.8" transform="rotate(-16 574 318)" fill="#0E0A08" />

                <circle cx="560" cy="342" r="11" fill="none" stroke="#C9933B" strokeWidth="3.5" />

                {stage.ropeSlack ? (
                  <path
                    d="M 560 353 C 566 398 598 448 574 486 C 562 504 536 498 548 482 C 562 464 592 486 626 496"
                    fill="none"
                    stroke="#C92A2A"
                    strokeWidth="3.2"
                    strokeLinecap="round"
                  />
                ) : (
                  <path
                    d="M 560 353 C 594 374 634 388 682 396"
                    fill="none"
                    stroke="#C92A2A"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                  />
                )}
              </g>
            </motion.g>
          </svg>
        </main>

        <section className="ox-vantage-jug-scroll" aria-label="Ten Bulls progression">
          <div className="ox-vantage-jug-steps" role="tablist" aria-label="Select Zen ox-herding stage">
            {STAGES.map((item, idx) => (
              <button
                key={item.id}
                type="button"
                role="tab"
                aria-selected={stageIdx === idx}
                className={`ox-vantage-jug-step ${stageIdx === idx ? 'is-current' : ''}`}
                onClick={() => setStageIdx(idx)}
              >
                <span className="ox-vantage-jug-num">{item.numeral}</span>
                <span className="ox-vantage-jug-step-kanji" lang="ja">{item.kanji}</span>
                <span className="ox-vantage-jug-step-title">{item.title}</span>
              </button>
            ))}
          </div>

          <article className="ox-vantage-jug-versecard">
            <div className="ox-vantage-jug-vhead">
              <span className="ox-vantage-jug-vkanji" lang="ja">{stage.kanji}</span>
              <h2>
                {stage.numeral} · {stage.title}
              </h2>
            </div>
            <blockquote className="ox-vantage-jug-quote">“{stage.verse}”</blockquote>
            <p className="ox-vantage-jug-commentary">{stage.note}</p>
          </article>

          <footer className="ox-vantage-jug-footer">
            <div className="ox-vantage-jug-hanko" aria-label="Vermilion hanko seal signature">
              <span className="ox-vantage-jug-hanko-glyph" lang="ja" aria-hidden="true">牛</span>
              <span className="ox-vantage-jug-hanko-text">SET XXXVI · DESIGNED BY GEMINI 4 NEON</span>
            </div>
          </footer>
        </section>
      </div>
    </div>
  )
}
