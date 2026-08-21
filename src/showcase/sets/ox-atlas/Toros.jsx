import { motion, MotionConfig } from 'framer-motion'
import './toros.css'

const BANDS = [
  { mod: 'coral', top: 0, height: 12 },
  { mod: 'coral2', top: 12, height: 16 },
  { mod: 'amber', top: 28, height: 22 },
  { mod: 'amber2', top: 50, height: 26 },
  { mod: 'dust', top: 76, height: 24 },
]

const WORDS = [
  { text: 'TARDE', mod: 'solid' },
  { text: 'DE', mod: 'outline' },
  { text: 'TOROS', mod: 'blood' },
]

const POST_COUNT = 13

const BULL_PATH =
  'M1122 468 ' +
  'C1116 448 1108 428 1096 412 ' +
  'C1080 396 1064 390 1048 386 ' +
  'C1092 378 1136 344 1150 296 ' +
  'C1154 286 1148 280 1140 284 ' +
  'C1120 314 1088 336 1030 352 ' +
  'C1024 352 1018 349 1012 346 ' +
  'C1022 310 1034 272 1044 250 ' +
  'C1048 242 1040 238 1034 246 ' +
  'C1018 282 1002 318 988 342 ' +
  'C978 346 970 352 974 362 ' +
  'C920 326 856 306 790 303 ' +
  'C730 310 668 322 610 328 ' +
  'C552 330 498 334 452 344 ' +
  'C404 326 360 288 330 240 ' +
  'C314 214 304 196 292 180 ' +
  'C280 170 268 174 264 188 ' +
  'C260 202 266 216 278 226 ' +
  'C300 254 344 300 446 370 ' +
  'C424 392 402 412 390 430 ' +
  'C372 454 356 470 340 484 ' +
  'C312 512 276 542 226 566 ' +
  'L206 576 ' +
  'C196 582 188 590 190 598 ' +
  'L208 602 ' +
  'C248 566 292 534 344 500 ' +
  'C366 488 390 480 416 494 ' +
  'C430 502 440 508 448 516 ' +
  'C444 544 440 574 436 602 ' +
  'L432 618 ' +
  'L460 620 ' +
  'C464 606 468 590 474 566 ' +
  'C478 546 480 532 486 522 ' +
  'C566 542 664 552 772 554 ' +
  'C792 554 812 552 830 550 ' +
  'C834 568 828 590 822 610 ' +
  'L818 622 ' +
  'L850 624 ' +
  'C856 606 862 582 870 560 ' +
  'C874 552 878 548 884 546 ' +
  'C906 554 922 560 936 562 ' +
  'C948 578 956 592 962 606 ' +
  'L958 622 ' +
  'L992 624 ' +
  'C998 604 1006 584 1016 562 ' +
  'C1030 540 1044 522 1058 504 ' +
  'C1070 498 1078 496 1088 494 ' +
  'C1102 490 1114 482 1122 468 Z'

const bandWipe = {
  hidden: { scaleX: 0 },
  show: (i) => ({
    scaleX: 1,
    transition: { duration: 0.65, ease: [0.65, 0, 0.35, 1], delay: i * 0.08 },
  }),
}

const wordUp = {
  hidden: { y: '112%' },
  show: (i) => ({
    y: '0%',
    transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: 1.05 + i * 0.12 },
  }),
}

const bullCharge = {
  hidden: { x: '-60%' },
  show: {
    x: '0%',
    transition: { duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.55 },
  },
}

function HalftoneSun() {
  return (
    <div className="th-toros__sun" aria-hidden="true">
      <svg viewBox="0 0 200 200" role="presentation" focusable="false">
        <defs>
          <pattern id="toros-halftone" width="11" height="11" patternUnits="userSpaceOnUse" patternTransform="rotate(12)">
            <circle cx="5.5" cy="5.5" r="2.4" fill="#17120E" opacity="0.15" />
          </pattern>
          <clipPath id="toros-sun-clip">
            <circle cx="100" cy="100" r="90" />
          </clipPath>
        </defs>
        <circle cx="100" cy="100" r="90" fill="#FFE8B0" />
        <circle cx="100" cy="100" r="90" fill="url(#toros-halftone)" clipPath="url(#toros-sun-clip)" />
      </svg>
    </div>
  )
}

function RegMark() {
  return (
    <svg className="th-toros__reg" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <circle cx="12" cy="12" r="7" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <path d="M12 1v22M1 12h22" stroke="currentColor" strokeWidth="1.6" fill="none" />
    </svg>
  )
}

export default function Toros() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="th-toros">
        <main className="th-toros__sheet">
          <div className="th-toros__sky" aria-hidden="true">
            {BANDS.map((band, i) => (
              <motion.div
                key={band.mod}
                className={`th-toros__band th-toros__band--${band.mod}`}
                style={{ top: `${band.top}%`, height: `${band.height}%` }}
                custom={i}
                variants={bandWipe}
                initial="hidden"
                animate="show"
              />
            ))}
            <HalftoneSun />
          </div>

          <div className="th-toros__arena" aria-hidden="true">
            <div className="th-toros__fence">
              <span className="th-toros__rail" />
              <div className="th-toros__posts">
                {Array.from({ length: POST_COUNT }).map((_, i) => (
                  <span className="th-toros__post" key={i} />
                ))}
              </div>
            </div>
          </div>

          <motion.div
            className="th-toros__bull"
            variants={bullCharge}
            initial="hidden"
            animate="show"
            aria-hidden="true"
          >
            <motion.div
              className="th-toros__bull-bob"
              animate={{ y: [0, -12, 5, 0] }}
              transition={{ duration: 1.1, delay: 0.55, times: [0, 0.45, 0.78, 1], ease: 'easeOut' }}
            >
              <svg className="th-toros__bull-svg" viewBox="0 0 1200 660" preserveAspectRatio="xMidYMax meet" focusable="false">
                <path d={BULL_PATH} />
              </svg>
            </motion.div>
          </motion.div>

          <h1 className="th-toros__title">
            {WORDS.map((word, i) => (
              <span className="th-toros__mask" key={word.mod}>
                <motion.span
                  className={`th-toros__word th-toros__word--${word.mod}`}
                  custom={i}
                  variants={wordUp}
                  initial="hidden"
                  animate="show"
                >
                  {word.text}
                </motion.span>
              </span>
            ))}
          </h1>

          <p className="th-toros__side" aria-hidden="true">
            OX ATLAS — FERIA DE ANDALUCÍA
          </p>

          <motion.div
            className="th-toros__credit"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.7, ease: 'easeOut' }}
          >
            <p className="th-toros__credit-line">PLAZA DE TOROS DE OX ATLAS</p>
            <p className="th-toros__credit-line th-toros__credit-line--sub">TODOS LOS DÍAS — EXCEPTO EL LUNES</p>
            <span className="th-toros__rule" />
            <p className="th-toros__colophon">
              <RegMark />
              <span>IMPRENTA OX-ALPHA · SET II</span>
            </p>
          </motion.div>

          <span className="th-toros__crop th-toros__crop--tl" aria-hidden="true" />
          <span className="th-toros__crop th-toros__crop--tr" aria-hidden="true" />
          <span className="th-toros__crop th-toros__crop--bl" aria-hidden="true" />
          <span className="th-toros__crop th-toros__crop--br" aria-hidden="true" />

          <span className="th-toros__paper" aria-hidden="true" />
        </main>
      </div>
    </MotionConfig>
  )
}
