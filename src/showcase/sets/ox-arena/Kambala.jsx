import { motion } from 'framer-motion'
import './kambala.css'

const DASHES = Array.from({ length: 14 }, (_, i) => -90 + i * 90)

function CheckerBand() {
  return (
    <svg className="ox-arena-kambala-checker" viewBox="0 0 400 26" preserveAspectRatio="none" aria-hidden="true" focusable="false">
      <defs>
        <pattern id="ox-arena-kambala-check" width="26" height="26" patternUnits="userSpaceOnUse">
          <rect width="26" height="26" fill="#F3E9CF" />
          <rect width="13" height="13" fill="#201D1A" />
          <rect x="13" y="13" width="13" height="13" fill="#201D1A" />
        </pattern>
      </defs>
      <rect width="400" height="26" fill="url(#ox-arena-kambala-check)" />
    </svg>
  )
}

function Palm({ x, y }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <path d="M0 0 Q-34 -16 -58 -6 Q-30 -2 -12 2 Z" fill="#1E5B43" />
      <path d="M0 0 Q-20 -28 -38 -38 Q-20 -22 -6 -6 Z" fill="#1E5B43" />
      <path d="M0 0 Q4 -36 -6 -58 Q12 -36 14 -10 Z" fill="#1E5B43" />
      <path d="M0 0 Q24 -22 44 -16 Q24 -4 12 4 Z" fill="#1E5B43" />
      <path d="M0 0 Q36 4 54 -8 Q32 8 12 10 Z" fill="#1E5B43" />
      <path d="M0 0 Q-8 26 4 40 Q4 20 6 6 Z" fill="#1E5B43" />
      <path d="M0 0 Q4 24 2 48" fill="none" stroke="#1E5B43" strokeWidth="6" strokeLinecap="round" />
    </g>
  )
}

function RaceArt() {
  return (
    <svg className="ox-arena-kambala-art" viewBox="0 0 1000 480" aria-hidden="true" focusable="false">
      <defs>
        <g id="ox-arena-kambala-front">
          <path d="M320 240 C380 226 460 228 530 248 C580 264 600 292 588 320 C574 346 540 356 490 356 C430 356 370 350 330 336 C300 324 292 300 300 272 C306 254 312 246 320 240 Z" />
          <path d="M520 252 C566 258 604 272 628 294 C646 310 650 326 640 334 C628 340 610 338 596 328 C584 318 576 304 570 288 C560 274 542 262 522 258 Z" />
          <path d="M556 262 C512 232 462 210 410 200 C402 218 438 232 486 250 C516 262 542 266 556 268 Z" />
          <path d="M562 276 C522 254 476 238 428 230 C422 248 456 260 500 274 C528 284 548 284 562 280 Z" />
          <path d="M546 252 C550 238 558 230 566 234 C570 242 564 252 546 252 Z" />
          <path d="M560 340 C582 352 604 366 620 382 C628 390 636 386 632 376 C616 358 596 344 576 332 Z" />
          <path d="M520 346 C540 364 556 382 568 400 C572 408 580 406 578 396 C566 378 550 360 536 344 Z" />
          <path d="M330 340 C312 358 296 378 284 396 C280 404 270 402 272 392 C284 372 300 354 316 338 Z" />
          <path d="M370 344 C356 366 344 388 336 406 C332 414 322 412 324 402 C334 382 348 364 360 346 Z" />
          <path d="M300 280 C270 290 244 304 224 322 C214 332 202 326 206 314 C228 294 256 276 290 266 Z" />
        </g>
        <g id="ox-arena-kambala-back">
          <path d="M250 180 C310 164 400 164 470 184 C520 200 540 228 528 256 C514 282 480 292 430 292 C372 292 314 286 290 270 C268 256 260 232 268 208 C274 194 262 186 250 180 Z" />
          <path d="M462 190 C504 194 540 206 564 226 C582 240 588 256 578 264 C568 270 550 268 538 258 C526 250 518 238 512 224 C502 210 484 200 466 196 Z" />
          <path d="M496 198 C456 172 410 152 362 144 C354 162 388 176 434 194 C462 206 484 208 496 204 Z" />
          <path d="M502 212 C466 192 424 178 380 172 C374 190 406 202 448 216 C474 226 494 224 502 216 Z" />
          <path d="M500 280 C520 292 540 306 554 320 C562 328 570 324 566 314 C552 296 534 284 516 274 Z" />
          <path d="M462 286 C480 302 496 318 506 334 C510 342 518 340 516 330 C506 314 490 298 476 282 Z" />
          <path d="M282 282 C266 298 252 316 242 332 C238 340 228 338 230 328 C240 310 256 294 270 280 Z" />
          <path d="M320 286 C306 306 296 326 290 342 C288 350 278 348 280 338 C288 320 298 304 310 288 Z" />
          <path d="M256 220 C232 232 212 248 198 268 C188 278 176 272 180 260 C200 238 224 220 248 208 Z" />
        </g>
      </defs>

      <rect x="0" y="0" width="1000" height="150" fill="#F3E9CF" />
      <circle cx="150" cy="86" r="34" fill="#E9A23B" />
      <Palm x={420} y={150} />
      <Palm x={880} y={150} />
      <rect x="0" y="150" width="1000" height="190" fill="#2E7D5B" />
      <path d="M0 190 C 240 178 700 182 1000 176" fill="none" stroke="#1E5B43" strokeWidth="3" opacity="0.6" />
      <path d="M0 260 C 320 250 760 254 1000 246" fill="none" stroke="#1E5B43" strokeWidth="3" opacity="0.5" />
      <rect x="0" y="340" width="1000" height="140" fill="#0E4F40" />

      <g className="ox-arena-kambala-dash">
        {DASHES.map((x) => (
          <rect key={x} x={x} y={332} width={34} height={5} fill="#F3E9CF" opacity="0.55" />
        ))}
      </g>
      <path d="M0 340 L1000 340" stroke="#F3E9CF" strokeWidth="2.5" opacity="0.7" />

      <motion.g animate={{ y: [0, -5, 0] }} transition={{ duration: 0.9, repeat: Infinity, ease: 'easeInOut' }}>
        <use href="#ox-arena-kambala-back" transform="translate(440 240) scale(1.05) translate(-440 -240)" fill="#F3E9CF" />
        <use href="#ox-arena-kambala-back" fill="#241B14" />
        <circle cx="566" cy="238" r="4" fill="#F3E9CF" />
        <circle cx="578" cy="238" r="3" fill="#F3E9CF" />
        <path d="M560 250 C536 256 512 258 492 256" fill="none" stroke="#F3E9CF" strokeWidth="3" strokeLinecap="round" />
      </motion.g>

      <motion.g animate={{ y: [0, -6, 0] }} transition={{ duration: 0.9, repeat: Infinity, ease: 'easeInOut', delay: 0.18 }}>
        <use href="#ox-arena-kambala-front" transform="translate(480 340) scale(1.05) translate(-480 -340)" fill="#F3E9CF" />
        <use href="#ox-arena-kambala-front" fill="#241B14" />
        <circle cx="606" cy="306" r="4" fill="#F3E9CF" />
        <circle cx="618" cy="310" r="3" fill="#F3E9CF" />
        <path d="M612 310 C584 322 552 330 520 334" fill="none" stroke="#F3E9CF" strokeWidth="3" strokeLinecap="round" />
      </motion.g>

      <path d="M530 300 C560 320 590 330 620 334" fill="none" stroke="#F3E9CF" strokeWidth="3" strokeLinecap="round" />
      <path d="M560 282 C590 300 620 312 648 318" fill="none" stroke="#F3E9CF" strokeWidth="3" strokeLinecap="round" />

      <motion.g animate={{ rotate: [-1.5, 2.5, -1.5] }} transition={{ duration: 0.9, repeat: Infinity, ease: 'easeInOut' }} style={{ transformBox: 'fill-box', transformOrigin: 'center' }}>
        <rect x="640" y="318" width="112" height="10" fill="#7A4A28" />
        <rect x="640" y="336" width="112" height="10" fill="#7A4A28" />
        <path d="M684 336 C684 318 690 304 700 292 C706 284 714 290 708 298 C698 312 692 326 692 338 Z" fill="#201D1A" />
        <path d="M692 292 C684 272 678 252 676 236 C674 226 684 222 690 230 C696 250 700 270 700 288 Z" fill="#F3E9CF" />
        <path d="M680 244 C664 234 648 228 634 226 C626 224 628 216 636 218 C650 222 668 228 682 238 Z" fill="#F3E9CF" />
        <circle cx="682" cy="216" r="9" fill="#F3E9CF" />
        <path d="M674 210 C678 206 686 206 690 210" fill="none" stroke="#C23B22" strokeWidth="3" strokeLinecap="round" />
        <path d="M684 264 C692 270 700 276 704 284 C706 290 698 296 694 290 C688 280 682 272 678 266 Z" fill="#C23B22" />
      </motion.g>

      <motion.ellipse cx="560" cy="368" rx="52" ry="7" fill="none" stroke="#F3E9CF" strokeWidth="3" opacity="0.55" style={{ transformBox: 'fill-box', transformOrigin: 'center' }} animate={{ scaleX: [1, 1.5, 1], opacity: [0.55, 0.1, 0.55] }} transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }} />
      <motion.ellipse cx="700" cy="382" rx="44" ry="6" fill="none" stroke="#F3E9CF" strokeWidth="3" opacity="0.5" style={{ transformBox: 'fill-box', transformOrigin: 'center' }} animate={{ scaleX: [1, 1.6, 1], opacity: [0.5, 0.08, 0.5] }} transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }} />
      <motion.ellipse cx="360" cy="376" rx="40" ry="6" fill="none" stroke="#F3E9CF" strokeWidth="3" opacity="0.45" style={{ transformBox: 'fill-box', transformOrigin: 'center' }} animate={{ scaleX: [1, 1.5, 1], opacity: [0.45, 0.08, 0.45] }} transition={{ duration: 2.6, repeat: Infinity, ease: 'easeInOut', delay: 1 }} />

      <path d="M540 352 q 10 -12 20 0" fill="none" stroke="#F3E9CF" strokeWidth="3.5" strokeLinecap="round" opacity="0.8" />
      <path d="M600 356 q 10 -12 20 0" fill="none" stroke="#F3E9CF" strokeWidth="3.5" strokeLinecap="round" opacity="0.8" />
      <path d="M330 348 q 10 -12 20 0" fill="none" stroke="#F3E9CF" strokeWidth="3.5" strokeLinecap="round" opacity="0.7" />
      <path d="M470 350 q 10 -12 20 0" fill="none" stroke="#F3E9CF" strokeWidth="3.5" strokeLinecap="round" opacity="0.7" />

      <path d="M70 470 L930 470" stroke="#F3E9CF" strokeWidth="2" opacity="0.35" />
      <text x="930" y="120" textAnchor="end" fill="#7A4A28" fontFamily="'Barlow Condensed', sans-serif" fontSize="26" letterSpacing="2" opacity="0.85">META — 132 M</text>
    </svg>
  )
}

export default function Kambala() {
  return (
    <div className="th-ox-arena ox-arena-kambala">
      <div className="ox-arena-kambala-board">
        <CheckerBand />

        <header className="ox-arena-kambala-head">
          <div className="ox-arena-kambala-titleblock">
            <p className="ox-arena-kambala-kn" lang="kn">ಕಂಬಳ</p>
            <h1 className="ox-arena-kambala-h1">KAMBALA</h1>
            <p className="ox-arena-kambala-sub">THE PADDY RACE OF THE TULU COAST</p>
          </div>
          <div className="ox-arena-kambala-raceblock">
            <p className="ox-arena-kambala-race-num">RACE 23</p>
            <p className="ox-arena-kambala-race-class">KANE HALAGE CLASS · PAIR Nº 17</p>
          </div>
        </header>

        <div className="ox-arena-kambala-meta">
          <span>132 M — FLOODED TRACK</span>
          <span>TWO BUFFALOES · ONE JOCKEY</span>
          <span>COASTAL KARNATAKA · NOV–MAR</span>
        </div>

        <section className="ox-arena-kambala-stage" aria-label="A pair of buffaloes race through the flooded paddy with the jockey on the halage plank behind them">
          <RaceArt />
        </section>

        <section className="ox-arena-kambala-grid">
          <article className="ox-arena-kambala-lede">
            <h2 className="ox-arena-kambala-h2">THE RACE</h2>
            <p className="ox-arena-kambala-body">
              Kambala is the Tulu country’s harvest race: a pair of buffaloes, a wooden plank and
              a hundred and thirty metres of flooded paddy. The jockey stands on the halage behind
              the team, yells the old calls and lashes the water to make the animals run — the
              faster the splashing, the faster the pair.
            </p>
            <p className="ox-arena-kambala-body">
              The race began as thanks for the harvest, run between villages with teams their
              owners had raised from calfhood. Today the season runs from November to March, and
              the best pairs are known by name from Udupi to Mangaluru.
            </p>
          </article>
          <aside className="ox-arena-kambala-stats" aria-label="Race statistics">
            <div className="ox-arena-kambala-stat">
              <span className="ox-arena-kambala-stat-num">132 M</span>
              <span className="ox-arena-kambala-stat-label">THE TRACK, TWO RUNS OF IT BETWEEN THE REEDS</span>
            </div>
            <div className="ox-arena-kambala-stat">
              <span className="ox-arena-kambala-stat-num">≈14 S</span>
              <span className="ox-arena-kambala-stat-label">A QUICK HEAT — HOOVES NEVER DRY</span>
            </div>
            <div className="ox-arena-kambala-stat">
              <span className="ox-arena-kambala-stat-num">2 + 1</span>
              <span className="ox-arena-kambala-stat-label">BUFFALOES AND THE JOCKEY ON THE HALAGE PLANK</span>
            </div>
          </aside>
        </section>

        <footer className="ox-arena-kambala-footer">
          <span className="ox-arena-kambala-footer-brand">OX ARENA — GAME V OF V · MANGALURU BOARDS LTD</span>
          <div className="ox-arena-kambala-bib" aria-label="Set signature: SET XVII · DESIGNED BY DEEPSEEK V4 PRO">
            <svg viewBox="0 0 40 22" aria-hidden="true" focusable="false">
              <path d="M4 2 C14 -1 26 -1 36 2 L36 7 C26 5 14 5 4 7 Z" fill="#8A8578" stroke="#201D1A" strokeWidth="1.5" />
              <circle cx="6" cy="9" r="2.4" fill="none" stroke="#201D1A" strokeWidth="1.5" />
            </svg>
            <span className="ox-arena-kambala-bib-top">RACE DAY · COMPETITOR PAIR Nº 17</span>
            <span className="ox-arena-kambala-bib-sig">SET XVII · DESIGNED BY DEEPSEEK V4 PRO</span>
          </div>
        </footer>
      </div>
    </div>
  )
}
