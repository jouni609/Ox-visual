import { motion } from 'framer-motion'
import './leap.css'

const SPECKLES = [
  [40, 120, 2.5], [90, 200, 2], [150, 150, 3], [250, 120, 2], [320, 180, 2.5],
  [420, 120, 2], [520, 150, 3], [600, 110, 2], [680, 170, 2.5], [780, 120, 2],
  [860, 160, 3], [920, 110, 2.5], [60, 460, 3], [180, 520, 2], [300, 500, 2.5],
  [430, 520, 3], [560, 500, 2], [700, 530, 2.5], [820, 510, 3], [930, 520, 2],
  [120, 300, 2], [940, 300, 2.5], [500, 470, 2],
]

const BODY_MARKS = [
  [430, 340, 7], [500, 332, 6], [570, 344, 8], [660, 330, 6], [720, 356, 5], [388, 340, 5],
]

function waveBand(y, shift, stroke, width, opacity) {
  let d = `M ${20 + shift} ${y} q 20 -14 40 0 `
  for (let i = 0; i < 23; i += 1) d += 't 40 0 '
  return <path d={d} fill="none" stroke={stroke} strokeWidth={width} opacity={opacity} />
}

function FrescoPanel() {
  return (
    <svg className="ox-arena-leap-fresco" viewBox="0 0 1000 620" aria-hidden="true" focusable="false">
      <defs>
        <clipPath id="ox-arena-leap-chip">
          <polygon points="0,44 18,26 44,28 62,10 96,16 124,2 174,12 214,4 264,16 314,6 364,18 424,8 474,20 534,8 594,18 654,6 714,18 774,8 834,20 894,8 954,18 1000,10 1000,602 978,614 938,602 898,616 848,602 798,614 748,600 698,614 648,600 598,614 548,600 498,616 448,600 398,614 348,600 298,614 248,600 198,614 148,600 98,616 48,600 0,614" />
        </clipPath>
        <g id="ox-arena-leap-bull">
          <path d="M330 320 C320 380 380 430 520 428 C650 426 740 390 780 350 C800 326 792 304 766 296 C690 284 400 288 330 320 Z" />
          <path d="M332 322 C296 300 256 294 224 306 C190 320 162 340 132 356 C116 364 108 372 114 380 C142 386 180 384 212 378 C208 390 202 398 208 406 C244 400 280 398 312 404 C326 424 334 438 344 448 C348 412 344 366 332 322 Z" />
          <path d="M318 396 C310 430 330 452 360 452 C392 452 404 428 396 398 C388 372 352 368 318 396 Z" />
          <path d="M760 302 C792 302 810 324 810 350 C810 378 790 398 760 398 C730 398 710 378 710 350 C710 324 728 302 760 302 Z" />
          <path d="M336 430 C296 448 256 468 216 486 C206 492 198 488 202 478 C240 458 280 436 318 420 Z" />
          <path d="M366 438 C338 462 308 486 278 506 C268 514 258 510 264 498 C294 478 326 452 354 428 Z" />
          <path d="M724 390 C766 404 810 420 852 438 C864 444 864 456 852 456 C806 442 762 424 724 408 Z" />
          <path d="M744 382 C796 398 850 416 900 434 C912 440 912 452 900 452 C852 436 800 416 748 398 Z" />
          <path d="M786 340 C850 322 902 288 930 260 C938 252 950 258 944 268 C918 300 872 336 816 358 Z" />
          <path d="M216 308 C176 268 128 236 84 220 C80 244 104 266 152 288 C180 300 202 306 216 310 Z" />
          <path d="M196 318 C160 296 118 274 84 262 C88 286 120 304 164 316 C178 322 190 324 196 320 Z" />
          <path d="M238 304 C252 300 262 304 264 312 C252 316 242 314 238 304 Z" />
        </g>
        <g id="ox-arena-leap-leaper">
          <path d="M-4 -78 L0 0 L8 0 L4 -76 Z" />
          <path d="M-8 -78 C-30 -88 -52 -82 -64 -66 L-32 -30 C-12 -44 2 -56 8 -72 Z" />
          <circle cx="-42" cy="-102" r="13" />
          <circle cx="-56" cy="-114" r="7" />
          <path d="M-60 -62 C-34 -102 6 -126 48 -134 L58 -118 C20 -110 -16 -92 -40 -70 Z" />
        </g>
      </defs>

      <g clipPath="url(#ox-arena-leap-chip)">
        <rect width="1000" height="620" fill="#1F4E79" />
        <rect x="0" y="26" width="1000" height="44" fill="#D9A441" />
        <rect x="0" y="552" width="1000" height="44" fill="#D9A441" />
        <rect x="0" y="22" width="1000" height="4" fill="#2A1B12" />
        <rect x="0" y="70" width="1000" height="4" fill="#2A1B12" />
        <rect x="0" y="548" width="1000" height="4" fill="#2A1B12" />
        <rect x="0" y="596" width="1000" height="4" fill="#2A1B12" />
        {waveBand(48, 0, '#C0532F', 5, 0.95)}
        {waveBand(62, 22, '#EFE3C8', 3.5, 0.9)}
        {waveBand(574, 0, '#C0532F', 5, 0.95)}
        {waveBand(588, 22, '#EFE3C8', 3.5, 0.9)}
        {SPECKLES.map(([x, y, r], i) => (
          <circle key={i} cx={x} cy={y} r={r} fill="#EFE3C8" opacity="0.32" />
        ))}

        <ellipse cx="500" cy="552" rx="330" ry="16" fill="#14283E" opacity="0.55" />

        <motion.g
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 5.2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <use href="#ox-arena-leap-bull" transform="translate(500 360) scale(1.05) translate(-500 -360)" fill="#2A1B12" />
          <use href="#ox-arena-leap-bull" fill="#C0532F" />
          <ellipse cx="211" cy="483" rx="16" ry="7" fill="#2A1B12" transform="rotate(-24 211 483)" />
          <ellipse cx="272" cy="505" rx="15" ry="7" fill="#2A1B12" transform="rotate(-22 272 505)" />
          <ellipse cx="858" cy="447" rx="15" ry="7" fill="#2A1B12" transform="rotate(14 858 447)" />
          <ellipse cx="907" cy="446" rx="14" ry="6.5" fill="#2A1B12" transform="rotate(12 907 446)" />
          <circle cx="932" cy="256" r="6" fill="#EFE3C8" />
          <path d="M172 352 Q164 362 154 356 Q160 346 172 352 Z" fill="#2A1B12" />
          <circle cx="124" cy="372" r="4" fill="#2A1B12" />
          <path d="M118 380 C140 386 162 386 184 382" fill="none" stroke="#2A1B12" strokeWidth="3" strokeLinecap="round" />
          <path d="M384 344 C392 336 402 340 400 350 C398 358 390 360 384 352" fill="none" stroke="#EFE3C8" strokeWidth="3" strokeLinecap="round" />
          {BODY_MARKS.map(([x, y, r], i) => (
            <circle key={i} cx={x} cy={y} r={r} fill="#EFE3C8" opacity="0.85" />
          ))}
        </motion.g>

        <use href="#ox-arena-leap-leaper" transform="translate(470 290) scale(1.07) translate(-470 -290)" fill="#2A1B12" />
        <motion.g
          style={{ transformOrigin: '0px 0px' }}
          animate={{ rotate: [-7, 5, -7] }}
          transition={{ duration: 3.8, repeat: Infinity, ease: 'easeInOut' }}
        >
          <g transform="translate(470 290)">
            <use href="#ox-arena-leap-leaper" fill="#EFE3C8" />
          </g>
        </motion.g>
      </g>
    </svg>
  )
}

export default function Leap() {
  return (
    <div className="th-ox-arena ox-arena-leap">
      <header className="ox-arena-leap-head">
        <p className="ox-arena-leap-kicker">OX ARENA · GAME I OF V · ΚΝΩΣΟΣ</p>
        <h1 className="ox-arena-leap-h1">The Bull Leap</h1>
        <p className="ox-arena-leap-greek" lang="el">Ταυροκαθάψια</p>
        <p className="ox-arena-leap-standfirst">
          Three and a half thousand years before the rodeo, young Cretans ran straight at a
          charging bull, seized its horns and vaulted over its back. The Minoans set the whole
          leap in wet lime plaster — grasp, vault, land — on the walls of the palace of Knossos.
        </p>
      </header>

      <section className="ox-arena-leap-fresco-wrap" aria-label="Reconstructed bull-leaping fresco: a galloping bull and a vaulting acrobat on lapis plaster">
        <FrescoPanel />
        <span className="ox-arena-leap-frag ox-arena-leap-frag-a" aria-hidden="true" />
        <span className="ox-arena-leap-frag ox-arena-leap-frag-b" aria-hidden="true" />
      </section>

      <section className="ox-arena-leap-plaque-row">
        <div className="ox-arena-leap-plaque">
          <p className="ox-arena-leap-plaque-title">BULL-LEAPING FRESCO · TAUROKATHAPSIA</p>
          <p className="ox-arena-leap-plaque-text">
            Lime plaster with mineral pigments. East Wing, Palace of Knossos, Heraklion, Crete,
            c. 1450 BCE. Whether the leap was sport, rite or the passage of the young, the bull
            here is not the enemy — it is the ground the game is played on.
          </p>
        </div>
        <div className="ox-arena-leap-label" aria-label="Set signature: SET XVII · DESIGNED BY DEEPSEEK V4 PRO">
          <p className="ox-arena-leap-label-head">EXCAVATION RECORD</p>
          <p className="ox-arena-leap-label-line">KN 1900 · EAST WING · FRAG. 14</p>
          <p className="ox-arena-leap-label-line">ATTRIBUTION</p>
          <p className="ox-arena-leap-label-sig">SET XVII · DESIGNED BY DEEPSEEK V4 PRO</p>
          <p className="ox-arena-leap-label-line">FIELD COPY — NOT FOR SALE</p>
        </div>
      </section>

      <section className="ox-arena-leap-grid">
        <article className="ox-arena-leap-article">
          <h2 className="ox-arena-leap-h2">THE GAME</h2>
          <p className="ox-arena-leap-body">
            The leaper comes at the bull head-on. At the last stride he takes the horns, lets the
            animal’s own toss lift him, and turns a handspring over its back to land on his feet
            behind it. A third figure waits at the horns, and a catcher runs to steady the landing
            — the three phases are painted over and over on frescoes, seals and stone vases from
            the palace workshops.
          </p>
          <p className="ox-arena-leap-body">
            The Minoans painted bulls the way other courts painted armies: blue ground, flying
            gallop, every hoof off the earth. Whatever the leap was for, it survives as the oldest
            complete rulebook of a game between one animal and one human — no weapons, no arena
            wall, only timing.
          </p>
        </article>
        <aside className="ox-arena-leap-phases" aria-label="The three phases of the leap">
          <div className="ox-arena-leap-phase">
            <span className="ox-arena-leap-phase-num">I</span>
            <div>
              <p className="ox-arena-leap-phase-name">GRASP</p>
              <p className="ox-arena-leap-phase-text">Hands on the horns, trusting the bull’s own upward toss.</p>
            </div>
          </div>
          <div className="ox-arena-leap-phase">
            <span className="ox-arena-leap-phase-num">II</span>
            <div>
              <p className="ox-arena-leap-phase-name">VAULT</p>
              <p className="ox-arena-leap-phase-text">A handspring over the withers, weight on straight arms.</p>
            </div>
          </div>
          <div className="ox-arena-leap-phase">
            <span className="ox-arena-leap-phase-num">III</span>
            <div>
              <p className="ox-arena-leap-phase-name">LAND</p>
              <p className="ox-arena-leap-phase-text">Feet down on the far side, the catcher already running in.</p>
            </div>
          </div>
        </aside>
      </section>

      <section className="ox-arena-leap-stats">
        <div className="ox-arena-leap-stat">
          <span className="ox-arena-leap-stat-num">c. 1450</span>
          <span className="ox-arena-leap-stat-label">BCE — PAINTED IN WET PLASTER</span>
        </div>
        <div className="ox-arena-leap-stat">
          <span className="ox-arena-leap-stat-num">3</span>
          <span className="ox-arena-leap-stat-label">PHASES — GRASP · VAULT · LAND</span>
        </div>
        <div className="ox-arena-leap-stat">
          <span className="ox-arena-leap-stat-num">1</span>
          <span className="ox-arena-leap-stat-label">PALACE — KNOSSOS, CRETE</span>
        </div>
      </section>

      <footer className="ox-arena-leap-footer">
        <span>OX ARENA — GAME I OF V</span>
        <span lang="el">ΚΝΩΣΟΣ · ΚΡΗΤΗ</span>
      </footer>
    </div>
  )
}
