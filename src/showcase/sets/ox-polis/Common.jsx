import { motion } from 'framer-motion'
import './common.css'

const TREES = [
  [300, 250], [330, 300], [310, 360], [360, 420], [420, 480], [500, 520],
  [600, 500], [700, 470], [800, 450], [860, 380], [900, 300], [870, 250],
  [760, 220], [640, 200], [520, 185], [430, 205], [540, 260], [700, 300],
  [760, 360], [620, 420], [470, 400], [400, 330], [585, 240], [830, 480],
]

const HERD = [
  [430, 300, 0.52], [500, 250, 0.44], [585, 295, 0.5], [650, 240, 0.42],
  [720, 330, 0.55], [780, 275, 0.46], [560, 360, 0.4], [670, 395, 0.5],
  [480, 345, 0.42], [755, 405, 0.38],
]

const rise = {
  hidden: { opacity: 0, y: 26 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
}

function Grazer({ x, y, s, flip, i }) {
  return (
    <motion.g
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.9 + i * 0.08 }}
      transform={`translate(${x} ${y}) scale(${flip ? -s : s} ${s})`}
    >
      <path d="M28 26 C28 18 38 14 56 14 C74 14 82 18 82 26 L82 36 C82 42 72 44 56 44 C40 44 28 42 28 36 Z" />
      <path d="M28 24 C18 24 12 32 9 44 C8 50 11 53 15 52 C20 50 21 43 23 38 C25 33 28 30 32 29 Z" />
      <path d="M15 40 C11 38 8 40 9 44 C11 46 15 45 16 42 Z" />
      <path d="M17 37 C14 32 10 30 6 31 C8 35 12 37 15 40 Z" />
      <path d="M34 42 h5 v15 h-5 Z" />
      <path d="M46 43 h5 v14 h-5 Z" />
      <path d="M64 43 h5 v14 h-5 Z" />
      <path d="M74 42 h5 v15 h-5 Z" />
      <ellipse cx="68" cy="43" rx="5" ry="3.5" />
      <path d="M82 24 C88 28 90 36 87 45" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
    </motion.g>
  )
}

function BellCow() {
  return (
    <g transform="translate(60 470)">
      <path d="M70 76 C70 56 96 46 138 46 C180 46 204 56 204 78 L204 106 C204 122 180 130 136 130 C94 130 70 122 70 106 Z" />
      <path d="M76 82 C56 78 42 88 34 108 C29 121 26 134 29 145 C32 154 40 157 47 153 C54 149 55 139 56 130 C58 118 63 110 72 104 C79 99 86 97 93 97 Z" />
      <path d="M40 108 C33 104 27 106 28 112 C30 118 38 118 42 113 Z" />
      <path d="M44 102 C39 92 31 87 22 88 C26 96 34 102 40 108 Z" />
      <path d="M58 132 C54 140 55 148 60 151 C66 152 70 146 69 138 Z" />
      <circle cx="43" cy="124" r="2.6" fill="#E6E5DB" />
      <path d="M84 126 h8 v46 h-8 Z" />
      <path d="M100 128 h8 v44 h-8 Z" />
      <path d="M176 126 h8 v46 h-8 Z" />
      <path d="M190 128 h8 v44 h-8 Z" />
      <ellipse cx="160" cy="128" rx="10" ry="6" />
      <path d="M204 66 C218 74 222 98 212 124" fill="none" stroke="#243B4A" strokeWidth="5" strokeLinecap="round" />
      <circle cx="212" cy="128" r="4" />
      <motion.g
        style={{ transformBox: 'view-box', transformOrigin: '66px 138px' }}
        animate={{ rotate: [-7, 7, -7] }}
        transition={{ duration: 3.4, repeat: Infinity, ease: 'easeInOut' }}
      >
        <path d="M56 132 C58 128 70 128 72 132 L75 148 C75 152 53 152 53 148 Z" fill="#B98A34" />
        <circle cx="64" cy="152" r="3.4" fill="#8C6521" />
        <path d="M56 132 C58 128 70 128 72 132" fill="none" stroke="#8C6521" strokeWidth="2" />
      </motion.g>
    </g>
  )
}

function Compass() {
  return (
    <g transform="translate(1085 105)">
      <circle r="52" fill="none" stroke="#243B4A" strokeWidth="2" />
      <circle r="44" fill="none" stroke="#243B4A" strokeWidth="1" />
      <path d="M0 -50 L9 0 L0 50 L-9 0 Z" fill="#243B4A" />
      <path d="M-50 0 L0 -9 L50 0 L0 9 Z" fill="#A64A2E" />
      <circle r="5" fill="#E6E5DB" stroke="#243B4A" strokeWidth="2" />
      <text x="0" y="-60" textAnchor="middle" fontSize="16" fill="#243B4A" letterSpacing="2">N</text>
    </g>
  )
}

export default function Common() {
  return (
    <div className="th-ox-polis ox-polis-common">
      <div className="ox-polis-common-frame">
        <motion.header className="ox-polis-common-head" custom={0} variants={rise} initial="hidden" animate="show">
          <p className="ox-polis-common-kicker">Ox Polis · 01 · Boston</p>
          <h1 className="ox-polis-common-h1">The Common</h1>
          <p className="ox-polis-common-deck">
            Before the park, before the mall, before the lampposts: grazing. Boston bought the
            ground in 1634 and kept the herd on it for 222 summers — the ox family as the public
            utility of a new town.
          </p>
          <ul className="ox-polis-common-stats" role="list">
            <li><span>1634</span>the grant</li>
            <li><span>222</span>summers grazed</li>
            <li><span>50</span>acres of common</li>
            <li><span>1</span>horn at dusk</li>
          </ul>
        </motion.header>

        <motion.div
          className="ox-polis-common-sheet"
          custom={1}
          variants={rise}
          initial="hidden"
          animate="show"
        >
          <svg className="ox-polis-common-map" viewBox="0 0 1200 720" aria-hidden="true" focusable="false">
            <defs>
              <pattern id="ox-polis-common-hatch" width="7" height="7" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
                <path d="M0 0 V7" stroke="#243B4A" strokeWidth="0.7" opacity="0.35" />
              </pattern>
            </defs>

            <rect width="1200" height="720" fill="#DDE0D3" />
            <rect width="1200" height="720" fill="url(#ox-polis-common-hatch)" opacity="0.25" />

            <path d="M0 250 L235 128 L1200 96" fill="none" stroke="#243B4A" strokeWidth="14" opacity="0.16" />
            <path d="M0 250 L235 128 L1200 96" fill="none" stroke="#243B4A" strokeWidth="2" strokeDasharray="1 9" strokeLinecap="round" />
            <path d="M215 620 L420 690 L1200 664" fill="none" stroke="#243B4A" strokeWidth="2" strokeDasharray="1 9" strokeLinecap="round" />
            <path d="M1010 90 L1052 700" fill="none" stroke="#243B4A" strokeWidth="2" strokeDasharray="1 9" strokeLinecap="round" />
            <path d="M318 120 L296 700" fill="none" stroke="#243B4A" strokeWidth="2" strokeDasharray="1 9" strokeLinecap="round" />

            <text x="70" y="236" fontSize="19" letterSpacing="4" fill="#5A6E5E">TREEMONT STREET</text>
            <text x="986" y="330" fontSize="17" letterSpacing="3" fill="#5A6E5E">PARK ROW</text>
            <text x="452" y="716" fontSize="17" letterSpacing="3" fill="#5A6E5E">FOSTER STREET</text>
            <text x="340" y="72" fontSize="19" letterSpacing="4" fill="#5A6E5E">BOYLSTON STREET</text>

            <path
              d="M340 172 L940 150 L1000 400 L890 640 L420 664 L300 430 Z"
              fill="#7C9463"
              stroke="#243B4A"
              strokeWidth="3"
            />
            <path d="M340 172 L940 150 L1000 400 L890 640 L420 664 L300 430 Z" fill="none" stroke="#3F5A46" strokeWidth="12" strokeDasharray="3 14" strokeLinecap="round" opacity="0.55" />

            <ellipse cx="618" cy="330" rx="66" ry="27" fill="#6E9FB0" stroke="#243B4A" strokeWidth="2" />
            <path d="M584 326 q8 -5 16 0 t16 0 t16 0" fill="none" stroke="#E6E5DB" strokeWidth="2" opacity="0.7" />
            <text x="618" y="378" textAnchor="middle" fontSize="15" letterSpacing="3" fill="#243B4A">FROG POND</text>
            <text x="662" y="196" textAnchor="middle" fontSize="34" letterSpacing="10" fill="#243B4A" opacity="0.8">THE COMMON</text>

            {TREES.map(([x, y], i) => (
              <g key={i} transform={`translate(${x} ${y})`}>
                <circle r="9" fill="#4F6C48" />
                <circle cx="-2" cy="-3" r="4" fill="#66855B" />
              </g>
            ))}

            <motion.path
              d="M300 430 C220 452 160 500 128 570"
              fill="none"
              stroke="#A64A2E"
              strokeWidth="3"
              strokeDasharray="8 8"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.6, delay: 1.3, ease: 'easeInOut' }}
            />
            <text x="120" y="600" fontSize="16" fill="#A64A2E" letterSpacing="2">
              <tspan>the horn at dusk —</tspan>
              <tspan x="120" dy="22">the cows go home by themselves</tspan>
            </text>

            <g fill="#2E3E2B">
              {HERD.map(([x, y, s], i) => (
                <Grazer key={i} x={x} y={y} s={s} flip={i % 2 === 1} i={i} />
              ))}
            </g>

            <g fill="#243B4A">
              <BellCow />
            </g>
            <text x="76" y="700" fontSize="16" letterSpacing="3" fill="#243B4A">SURVEYED · SHEWEL &amp; CO · PLAN OF THE PUBLIC PASTURE, c. 1772</text>
            <Compass />
          </svg>
        </motion.div>

        <motion.section className="ox-polis-common-legend" aria-label="Field notes">
          <div className="ox-polis-common-note">
            <span className="ox-polis-common-dot" aria-hidden="true">1</span>
            <h2>A town, a horn, a herd</h2>
            <p>
              Rate-paying households grazed their cows on the shared ground. The town hired a
              herder — a public job on a public payroll — and his evening horn was the most
              dependable clock colonial Boston kept.
            </p>
          </div>
          <div className="ox-polis-common-note">
            <span className="ox-polis-common-dot" aria-hidden="true">2</span>
            <h2>The gate learns the cow</h2>
            <p>
              A commons runs both ways at once: every household needed a gate it could open, and
              every cow needed to find it alone. Centuries of that traffic graded the paths that
              became the park walks.
            </p>
          </div>
          <div className="ox-polis-common-note">
            <span className="ox-polis-common-dot" aria-hidden="true">3</span>
            <h2>The last cow goes out</h2>
            <p>
              In 1856 the grazing ended and the Common became lawn, monument and mall. What it kept
              was the deed of 1634 and the radical idea underneath it: ground held in common, open
              because it was always open.
            </p>
          </div>
        </motion.section>

        <motion.footer className="ox-polis-common-colophon" custom={2} variants={rise} initial="hidden" animate="show">
          <div className="ox-polis-common-seal">
            <svg viewBox="0 0 64 40" aria-hidden="true" focusable="false">
              <path d="M8 26 C8 12 22 6 32 6 C42 6 56 12 56 26 Z" fill="none" stroke="#B98A34" strokeWidth="3" />
              <rect x="4" y="26" width="56" height="6" rx="3" fill="#B98A34" />
              <circle cx="32" cy="36" r="3.6" fill="#B98A34" />
              <path d="M32 6 V0" stroke="#B98A34" strokeWidth="3" />
            </svg>
            <p>SET XIX · DESIGNED BY QWEN 3.8 FLASH</p>
          </div>
          <p className="ox-polis-common-setline">OX POLIS — the ox the city kept · a survey of five towns</p>
        </motion.footer>
      </div>
    </div>
  )
}
