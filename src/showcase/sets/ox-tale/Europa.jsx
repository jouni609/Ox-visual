import { motion } from 'framer-motion'
import './europa.css'

export default function Europa() {
  return (
    <div className="th-ox-tale-europa ox-tale-e ox-tale-page">
      <div className="e-wall" aria-hidden="true" />

      <div className="e-panel">
        <svg className="e-chips" viewBox="0 0 1200 800" preserveAspectRatio="none" aria-hidden="true">
          <path
            className="e-chip-edge"
            d="M14 22 L118 10 L260 18 L410 8 L560 16 L720 6 L880 14 L1040 8 L1186 18 L1192 140 L1184 280 L1194 430 L1186 580 L1196 720 L1188 790 L1040 796 L880 788 L720 798 L560 790 L410 798 L250 790 L90 798 L10 792 L16 640 L8 500 L18 360 L6 220 Z"
          />
          <path className="e-crack" d="M300 12 L318 96 L296 180 L330 260 L310 340" />
          <path className="e-crack e-crack-b" d="M870 790 L856 700 L880 620 L858 540" />
          <path className="e-crack e-crack-c" d="M1194 300 L1100 318 L1030 296 L960 322" />
        </svg>

        <header className="e-head">
          <motion.p
            className="e-kicker"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            Fresco fragment · Aegean Bronze Age
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
          >
            Europa’s Bull
          </motion.h1>
          <motion.p
            className="e-body"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            Zeus settled into the herd of Agenor as a white bull, quiet the way cattle are quiet, and
            let Europa mount his back to crown him with flowers. Then he swam. The crossing put her
            on Crete, where she bore Minos, Rhadamanthys, and Sarpedon, and the bull outlived every
            palace that tried to keep him.
          </motion.p>
        </header>

        <figure className="e-art">
          <svg viewBox="0 0 900 620" className="e-svg" aria-hidden="true">
            <defs>
              <linearGradient id="ox-tale-e-sea" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stopColor="#3E93BA" />
                <stop offset="1" stopColor="#1F6F8B" />
              </linearGradient>
              <linearGradient id="ox-tale-e-hull" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stopColor="#FBF6EA" />
                <stop offset="1" stopColor="#E8D9BC" />
              </linearGradient>
            </defs>

            <rect x="0" y="360" width="900" height="260" fill="url(#ox-tale-e-sea)" />

            <motion.g
              className="e-bob"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.3 }}
            >
              <path
                fill="url(#ox-tale-e-hull)"
                d="M292 448
                   C298 368 344 318 450 318
                   C556 318 602 368 608 448 Z"
              />
              <path
                fill="url(#ox-tale-e-hull)"
                d="M366 168
                   C366 138 394 118 450 118
                   C506 118 534 138 534 168
                   L532 252
                   C528 296 498 332 450 332
                   C402 332 372 296 368 252 Z"
              />
              <path
                fill="#F7F1E4"
                d="M392 182
                   C336 172 278 148 242 108
                   C234 98 234 84 246 76
                   C256 72 268 82 280 98
                   C316 134 356 154 398 162 Z"
              />
              <path
                fill="#F7F1E4"
                d="M508 182
                   C564 172 622 148 658 108
                   C666 98 666 84 654 76
                   C644 72 632 82 620 98
                   C584 134 544 154 502 162 Z"
              />
              <path
                fill="#F0E6D2"
                d="M372 198 C330 190 292 198 268 220 C302 244 352 240 388 218 Z"
              />
              <path
                fill="#F0E6D2"
                d="M528 198 C570 190 608 198 632 220 C598 244 548 240 512 218 Z"
              />
              <path d="M384 186 C404 172 430 166 450 166 C470 166 496 172 516 186" stroke="#C4503A" strokeWidth="7" fill="none" strokeLinecap="round" />
              <ellipse cx="450" cy="284" rx="64" ry="44" fill="#E8C4B0" />
              <g fill="#3A2A20">
                <ellipse cx="404" cy="206" rx="9" ry="10" />
                <ellipse cx="496" cy="206" rx="9" ry="10" />
                <path d="M420 280 C414 292 416 304 424 310 C432 302 432 288 426 278 Z" />
                <path d="M480 280 C486 292 484 304 476 310 C468 302 468 288 474 278 Z" />
              </g>
              <path
                fill="url(#ox-tale-e-hull)"
                d="M318 400
                   C292 424 268 456 258 492
                   C252 516 258 540 274 552
                   C296 544 312 520 318 494
                   C326 462 340 434 358 412 Z"
              />
              <path d="M300 404 C330 398 358 404 378 420" stroke="#C4503A" strokeWidth="5" fill="none" strokeLinecap="round" />
              <path d="M330 418 C344 440 352 466 352 492" stroke="#E8C4B0" strokeWidth="5" fill="none" strokeLinecap="round" />
            </motion.g>

            <g className="e-waves">
              <motion.path
                className="e-wave e-wave-a"
                fill="#2E7FA8"
                d="M-900 430 Q-855 412 -810 430 T-720 430 T-630 430 T-540 430 T-450 430 T-360 430 T-270 430 T-180 430 T-90 430 T0 430 T90 430 T180 430 T270 430 T360 430 T450 430 T540 430 T630 430 T720 430 T810 430 T900 430 T990 430 T1080 430 T1170 430 T1260 430 T1350 430 T1440 430 T1530 430 T1620 430 T1710 430 T1800 430 L1800 620 L-900 620 Z"
              />
              <motion.path
                className="e-wave e-wave-b"
                fill="#1B5F7E"
                d="M-900 470 Q-855 452 -810 470 T-720 470 T-630 470 T-540 470 T-450 470 T-360 470 T-270 470 T-180 470 T-90 470 T0 470 T90 470 T180 470 T270 470 T360 470 T450 470 T540 470 T630 470 T720 470 T810 470 T900 470 T990 470 T1080 470 T1170 470 T1260 470 T1350 470 T1440 470 T1530 470 T1620 470 T1710 470 T1800 470 L1800 620 L-900 620 Z"
              />
              <g className="e-foam" stroke="#F4EEE0" strokeWidth="5" fill="none" strokeLinecap="round">
                <path d="M330 436 Q356 424 384 436" />
                <path d="M400 444 Q430 432 462 444" />
                <path d="M490 438 Q518 426 548 440" />
                <path d="M560 450 Q584 440 606 452" />
              </g>
            </g>

            <g className="e-fish" fill="#C4503A" opacity="0.75">
              <path d="M120 540 q28 -14 56 0 q-28 14 -56 0 Z" />
              <path d="M176 540 l18 -10 l0 20 Z" />
              <path d="M740 570 q24 -12 48 0 q-24 12 -48 0 Z" />
              <path d="M788 570 l16 -9 l0 18 Z" />
            </g>
          </svg>
          <figcaption className="e-fig">White bull at the waterline, after the palace at Knossos</figcaption>
        </figure>

        <aside className="e-plaque" aria-label="Signature">
          <span className="e-screw" aria-hidden="true" />
          <span className="e-plaque-text">SET 02 · DESIGNED BY MIMO</span>
          <span className="e-plaque-sub">Acc. 1926.411 · reinstalled</span>
          <span className="e-screw" aria-hidden="true" />
        </aside>

        <dl className="e-data">
          <div>
            <dt>Site</dt>
            <dd>Knossos, Crete</dd>
          </div>
          <div>
            <dt>Date</dt>
            <dd>c. 1600 BCE, restored</dd>
          </div>
          <div>
            <dt>Subject</dt>
            <dd>Taurine bull, white</dd>
          </div>
        </dl>
      </div>
    </div>
  )
}
