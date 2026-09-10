import { motion } from 'framer-motion'
import './taurus.css'

const C = 380

const ticks = Array.from({ length: 72 }, (_, i) => {
  const a = (i * 5 * Math.PI) / 180
  const major = i % 3 === 0
  const r1 = 366
  const r2 = major ? 342 : 356
  return {
    x1: C + r1 * Math.sin(a),
    y1: C - r1 * Math.cos(a),
    x2: C + r2 * Math.sin(a),
    y2: C - r2 * Math.cos(a),
    major,
  }
})

const labels = Array.from({ length: 12 }, (_, i) => {
  const deg = i * 30
  const a = (deg * Math.PI) / 180
  return {
    deg,
    x: C + 318 * Math.sin(a),
    y: C - 318 * Math.cos(a),
  }
})

const stars = [
  { x: 300, y: 190, r: 5.5, tone: 'amber' },
  { x: 390, y: 200, r: 5.5, tone: 'amber' },
  { x: 330, y: 250, r: 4, tone: 'cyan' },
  { x: 370, y: 250, r: 3.5, tone: 'cyan' },
  { x: 354, y: 274, r: 4, tone: 'cyan' },
  { x: 306, y: 304, r: 9, tone: 'amber' },
  { x: 240, y: 344, r: 5, tone: 'cyan' },
  { x: 300, y: 348, r: 3.5, tone: 'cyan' },
  { x: 336, y: 344, r: 3.5, tone: 'cyan' },
  { x: 400, y: 290, r: 4.5, tone: 'cyan' },
  { x: 470, y: 278, r: 4, tone: 'cyan' },
  { x: 540, y: 278, r: 4, tone: 'cyan' },
  { x: 600, y: 288, r: 4, tone: 'cyan' },
  { x: 640, y: 320, r: 4.5, tone: 'cyan' },
  { x: 668, y: 370, r: 3.5, tone: 'cyan' },
  { x: 690, y: 440, r: 4.5, tone: 'cyan' },
  { x: 450, y: 404, r: 3.5, tone: 'cyan' },
  { x: 520, y: 414, r: 3.5, tone: 'cyan' },
  { x: 580, y: 408, r: 4, tone: 'cyan' },
  { x: 386, y: 390, r: 4.5, tone: 'amber' },
  { x: 382, y: 440, r: 3.5, tone: 'cyan' },
  { x: 380, y: 488, r: 3.5, tone: 'cyan' },
  { x: 566, y: 390, r: 4.5, tone: 'cyan' },
  { x: 562, y: 440, r: 3.5, tone: 'cyan' },
  { x: 560, y: 490, r: 3.5, tone: 'cyan' },
]

const faintStars = [
  { x: 410, y: 386 },
  { x: 406, y: 436 },
  { x: 404, y: 484 },
  { x: 606, y: 386 },
  { x: 602, y: 436 },
  { x: 600, y: 484 },
]

const linePath = [
  'M300 190 L330 250 L354 274',
  'M390 200 L370 250 L354 274',
  'M354 274 L306 304 L240 344 L300 348 L336 344 L376 380',
  'M354 274 L400 290',
  'M400 290 L470 278 L540 278 L600 288 L640 320 L668 370 L690 440',
  'M336 344 L450 404 L520 414 L580 408 L640 320',
  'M376 380 L386 390 L382 440 L380 488',
  'M580 408 L566 390 L562 440 L560 490',
].join(' ')

const faintLinePath = [
  'M376 380 L410 386 L406 436 L404 484',
  'M580 408 L606 386 L602 436 L600 484',
].join(' ')

const hyades = [
  [296, 312],
  [280, 322],
  [262, 332],
  [246, 340],
  [232, 346],
]

const pleiades = [
  [416, 276],
  [428, 268],
  [442, 272],
  [450, 284],
  [438, 292],
  [424, 290],
  [414, 286],
]

function Chart() {
  return (
    <svg
      className="ox-lexicon-taurus-chart-svg"
      viewBox="0 0 760 760"
      role="img"
      aria-label="Star chart of the constellation Taurus drawn as a bull"
    >
      <defs>
        <radialGradient id="ox-lexicon-taurus-sky" cx="42%" cy="38%" r="75%">
          <stop offset="0" stopColor="#0b1630" />
          <stop offset="0.62" stopColor="#060c1d" />
          <stop offset="1" stopColor="#03060f" />
        </radialGradient>
        <radialGradient id="ox-lexicon-taurus-nebula" cx="50%" cy="50%" r="50%">
          <stop offset="0" stopColor="#6a58a8" stopOpacity="0.4" />
          <stop offset="1" stopColor="#6a58a8" stopOpacity="0" />
        </radialGradient>
      </defs>

      <circle cx={C} cy={C} r="380" fill="url(#ox-lexicon-taurus-sky)" />
      <circle cx="430" cy="300" r="150" fill="url(#ox-lexicon-taurus-nebula)" />

      <g className="ox-lexicon-taurus-dial" stroke="#33507e" fill="none">
        {ticks.map((t, i) => (
          <line
            key={i}
            x1={t.x1}
            y1={t.y1}
            x2={t.x2}
            y2={t.y2}
            strokeWidth={t.major ? 1.6 : 0.8}
            opacity={t.major ? 0.9 : 0.5}
          />
        ))}
        <circle cx={C} cy={C} r="342" strokeWidth="1" opacity="0.5" />
      </g>
      <g className="ox-lexicon-taurus-dial-labels" fill="#54749f">
        {labels.map((l) => (
          <text key={l.deg} x={l.x} y={l.y} textAnchor="middle" dominantBaseline="middle">
            {l.deg}
          </text>
        ))}
      </g>

      <circle cx={C} cy={C} r="300" fill="none" stroke="#22385f" strokeWidth="1" strokeDasharray="3 7" />
      <line x1={C} y1="60" x2={C} y2="700" stroke="#1a2a49" strokeWidth="0.8" />
      <line x1="60" y1={C} x2="700" y2={C} stroke="#1a2a49" strokeWidth="0.8" />

      <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.4, delay: 0.3 }}>
        <path
          d="M354 274 C 330 278, 300 288, 282 302 C 262 318, 242 332, 234 342 C 228 352, 236 362, 252 360 C 268 358, 288 352, 306 346 C 320 342, 334 340, 344 346 C 356 354, 366 364, 376 372 C 400 384, 450 404, 510 412 C 556 418, 596 410, 622 392 C 642 378, 652 356, 650 330 C 648 304, 634 290, 610 282 C 578 272, 530 268, 482 268 C 442 268, 410 274, 390 284 C 376 292, 366 304, 360 316 C 356 304, 354 288, 354 274 Z"
          fill="#12234a"
          stroke="#3f6ea6"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />
        <path
          d="M376 380 C 374 420, 372 460, 374 490 L 402 490 C 402 458, 400 418, 396 380 Z"
          fill="#12234a"
          stroke="#3f6ea6"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />
        <path
          d="M410 378 C 410 420, 410 458, 412 486 L 434 486 C 434 456, 432 418, 428 380 Z"
          fill="#12234a"
          stroke="#3f6ea6"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />
        <path
          d="M560 380 C 554 424, 550 462, 552 492 L 584 492 C 586 460, 586 420, 584 382 Z"
          fill="#12234a"
          stroke="#3f6ea6"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />
        <path
          d="M596 376 C 596 418, 596 456, 598 486 L 618 486 C 618 456, 616 418, 612 378 Z"
          fill="#12234a"
          stroke="#3f6ea6"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />
        <path
          d="M646 312 C 664 336, 678 372, 686 408 C 690 430, 692 448, 692 462 L 680 464 C 678 446, 674 428, 666 406 C 656 380, 646 352, 636 330 Z"
          fill="#12234a"
          stroke="#3f6ea6"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />
      </motion.g>

      <g>
        {hyades.map(([x, y]) => (
          <circle key={`h${x}`} cx={x} cy={y} r="3" fill="#9fd8ff" opacity="0.65" />
        ))}
        {pleiades.map(([x, y]) => (
          <circle key={`p${x}`} cx={x} cy={y} r="2.6" fill="#cfe6ff" opacity="0.75" />
        ))}
      </g>

      <motion.path
        d={faintLinePath}
        fill="none"
        stroke="#3f6ea6"
        strokeWidth="1.2"
        strokeDasharray="4 6"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 0.7 }}
        transition={{ duration: 2.6, delay: 1.1, ease: 'easeInOut' }}
      />
      <motion.path
        d={linePath}
        fill="none"
        stroke="#7fd0ff"
        strokeWidth="2"
        strokeLinejoin="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 0.9 }}
        transition={{ duration: 2.6, delay: 0.7, ease: 'easeInOut' }}
      />

      <g>
        {faintStars.map((s) => (
          <circle key={`f${s.x}`} cx={s.x} cy={s.y} r="2.4" fill="#7fd0ff" opacity="0.5" />
        ))}
      </g>
      <g>
        {stars.map((s) => (
          <g key={`${s.x}-${s.y}`}>
            <circle cx={s.x} cy={s.y} r={s.r * 2.6} fill={s.tone === 'amber' ? '#f2b04c' : '#7fd0ff'} opacity="0.12" />
            <circle
              className="ox-lexicon-taurus-star"
              cx={s.x}
              cy={s.y}
              r={s.r}
              fill={s.tone === 'amber' ? '#f2b04c' : '#dff1ff'}
              style={{
                '--tw': `${2.6 + ((s.x + s.y) % 7) * 0.45}s`,
                '--twd': `${((s.x * 7 + s.y) % 11) * 0.3}s`,
              }}
            />
          </g>
        ))}
      </g>

      <g className="ox-lexicon-taurus-chart-labels">
        <text x="238" y="184">Elnath</text>
        <text x="404" y="184">Zeta Tauri</text>
        <text x="322" y="316">Aldebaran</text>
        <text x="198" y="318" textAnchor="end">Hyades</text>
        <text x="452" y="256">Pleiades</text>
      </g>
      <g className="ox-lexicon-taurus-leaders" stroke="#54749f" strokeWidth="1" fill="none">
        <path d="M258 190 L296 190" />
        <path d="M412 192 L394 200" />
        <path d="M318 308 L310 305" />
        <path d="M216 326 L236 342" />
        <path d="M454 264 L440 280" />
        <path d="M436 206 L402 202" />
      </g>
      <circle cx="420" cy="212" r="7" fill="none" stroke="#f2b04c" strokeWidth="1.4" strokeDasharray="2 3" />
      <text className="ox-lexicon-taurus-crab" x="448" y="208">
        M1
      </text>
    </svg>
  )
}

const rows = [
  { name: 'Aldebaran', des: 'α Tau', mag: '0.85', ly: '65 ly', note: 'the eye' },
  { name: 'Elnath', des: 'β Tau', mag: '1.65', ly: '134 ly', note: 'northern horn' },
  { name: 'Zeta Tauri', des: 'ζ Tau', mag: '3.00', ly: '440 ly', note: 'southern horn' },
  { name: 'Hyades', des: 'Mel 25', mag: '0.50', ly: '153 ly', note: 'the face' },
  { name: 'Pleiades', des: 'M45', mag: '1.60', ly: '444 ly', note: 'the shoulder' },
  { name: 'Crab Nebula', des: 'M1', mag: '8.40', ly: '6,500 ly', note: 'a wrecked star' },
]

export default function Taurus() {
  return (
    <section className="ox-lexicon-taurus">
      <div className="ox-lexicon-taurus-plate">
        <header className="ox-lexicon-taurus-head">
          <div className="ox-lexicon-taurus-head-left">
            <span className="ox-lexicon-taurus-kicker">Plate IV · the second sign</span>
            <h1 className="ox-lexicon-taurus-title">Taurus</h1>
            <p className="ox-lexicon-taurus-sub">
              The bull, drawn in stars before anyone drew it in ink. Aldebaran is the eye. The horns run out to
              Elnath and Zeta Tauri.
            </p>
          </div>
          <motion.div
            className="ox-lexicon-taurus-sign"
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.6 }}
          >
            <span className="ox-lexicon-taurus-sign-line">SET 4 · DESIGNED BY DEEPSEEK FLASH</span>
            <span className="ox-lexicon-taurus-sign-sub">04h 30m · +17° · instrument plate</span>
          </motion.div>
        </header>

        <div className="ox-lexicon-taurus-grid">
          <figure className="ox-lexicon-taurus-figure">
            <Chart />
            <figcaption>
              The bull is older than the lines. Babylonian astronomers marked this patch of sky as the Bull of
              Heaven; Ptolemy listed it; the two horn stars kept the shape alive after the story changed.
            </figcaption>
          </figure>

          <aside className="ox-lexicon-taurus-data">
            <h2 className="ox-lexicon-taurus-minihead">Positions tonight</h2>
            <table className="ox-lexicon-taurus-table">
              <thead>
                <tr>
                  <th scope="col">Star</th>
                  <th scope="col">Des.</th>
                  <th scope="col">Mag.</th>
                  <th scope="col">Dist.</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r) => (
                  <tr key={r.name}>
                    <td>
                      <span className="ox-lexicon-taurus-star-name">{r.name}</span>
                      <span className="ox-lexicon-taurus-star-note">{r.note}</span>
                    </td>
                    <td>{r.des}</td>
                    <td>{r.mag}</td>
                    <td>{r.ly}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <h2 className="ox-lexicon-taurus-minihead">Entry</h2>
            <p>
              Taurus is one of the forty-eight constellations Ptolemy catalogued and one of the twelve the sun still
              crosses. Zeus wore the shape when he carried Europa over the water; the Babylonians had called the
              region the Bull of Heaven long before that. In 1054 a star here blew apart and Chinese astronomers
              wrote the light down. We call the leftover the Crab Nebula, and it sits at the southern horn tip.
            </p>
            <p className="ox-lexicon-taurus-note">
              The constellation is a drawing laid over a sky that never needed one. The bull was there first, in
              the heads of the people looking up.
            </p>
          </aside>
        </div>
      </div>
    </section>
  )
}
