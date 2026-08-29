import { motion } from 'framer-motion'
import './theline.css'

const PENS = [
  [120, 96, 90, 54], [232, 96, 90, 54], [344, 96, 150, 54], [516, 96, 90, 54],
  [120, 172, 90, 54], [232, 172, 150, 54], [404, 172, 90, 54], [516, 172, 90, 54],
  [120, 248, 150, 54], [292, 248, 90, 54], [404, 248, 90, 54], [516, 248, 150, 54],
]

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  show: (i) => ({
    pathLength: 1,
    opacity: 1,
    transition: { pathLength: { duration: 1.2, delay: 0.3 + i * 0.1, ease: 'easeInOut' }, opacity: { duration: 0.1, delay: 0.3 + i * 0.1 } },
  }),
}

function Rail({ y }) {
  return (
    <g>
      <path d={`M60 ${y} H740`} stroke="#7FB4D8" strokeWidth="2" opacity="0.5" />
      <path d={`M60 ${y + 6} H740`} stroke="#7FB4D8" strokeWidth="1" opacity="0.25" />
    </g>
  )
}

function StockCar({ x }) {
  return (
    <g transform={`translate(${x} 0)`}>
      <rect x="0" y="0" width="120" height="44" fill="none" stroke="#D6EAF7" strokeWidth="2.4" />
      <path d="M14 8 h92 M14 18 h92 M14 28 h92" stroke="#D6EAF7" strokeWidth="1" opacity="0.5" />
      <rect x="8" y="8" width="14" height="12" fill="#D6EAF7" opacity="0.25" />
      <circle cx="28" cy="52" r="7" fill="none" stroke="#D6EAF7" strokeWidth="2.4" />
      <circle cx="92" cy="52" r="7" fill="none" stroke="#D6EAF7" strokeWidth="2.4" />
      <path d="M120 22 h26" stroke="#F2B33D" strokeWidth="2.4" />
    </g>
  )
}

function SteerPlate() {
  return (
    <svg className="ox-polis-line-plate" viewBox="0 0 640 470" aria-hidden="true" focusable="false">
      <g fill="none" stroke="#D6EAF7">
        <motion.path
          d="M152 198 C150 166 176 142 214 132 C242 118 268 114 292 120 C330 116 372 118 404 128 C442 132 468 148 480 172 C490 192 490 218 484 242 C476 268 450 280 412 282 L230 284 C182 280 154 258 152 228 Z"
          strokeWidth="2.6"
          custom={4}
          variants={draw}
          initial="hidden"
          animate="show"
        />
        <motion.path
          d="M158 190 C136 172 114 158 94 152 C78 147 66 153 62 166 C58 180 68 191 82 193 C94 195 104 202 111 213 C120 228 134 236 152 234"
          strokeWidth="2.6"
          custom={3}
          variants={draw}
          initial="hidden"
          animate="show"
        />
        <path d="M62 164 C50 163 43 171 46 181 C50 189 63 189 67 181" strokeWidth="2.4" />
        <path d="M88 150 C78 132 62 120 42 116" strokeWidth="2.4" strokeLinecap="round" />
        <path d="M102 146 C98 124 88 106 70 94" strokeWidth="2.4" strokeLinecap="round" />
        <path d="M106 154 C116 148 126 152 126 160 C118 165 108 162 105 158" strokeWidth="1.8" />
        <circle cx="80" cy="168" r="2.8" fill="#D6EAF7" />
        <path d="M186 282 h14 v98 h-14 Z M214 284 h12 v96 h-12 Z M428 282 h13 v96 h-13 Z M456 280 h12 v98 h-12 Z" strokeWidth="2.4" />
        <path d="M182 380 h22 M210 380 h20 M424 378 h21 M452 378 h20" strokeWidth="5" />
        <path d="M238 286 q64 10 106 0" strokeWidth="1.6" opacity="0.6" />
        <path d="M480 182 C500 202 506 238 498 274" strokeWidth="2.4" />
        <path d="M498 278 l-6 16 l13 -3 Z" strokeWidth="2" fill="#D6EAF7" opacity="0.9" />
        <path d="M246 130 C300 114 372 116 436 138" strokeWidth="1.4" opacity="0.45" />
        <path d="M160 214 C150 228 148 246 156 258" strokeWidth="1.6" opacity="0.55" />
      </g>

      <g stroke="#F2B33D" strokeWidth="1.6">
        <path d="M152 408 H484 M152 400 v16 M484 400 v16" />
        <path d="M122 132 V282 M114 132 h16 M114 282 h16" />
      </g>
      <text x="318" y="430" textAnchor="middle" fontSize="14" fill="#F2B33D" letterSpacing="2">12 FT 4 IN</text>
      <text x="108" y="212" textAnchor="end" fontSize="14" fill="#F2B33D" letterSpacing="1">4 FT 6 IN</text>

      <g fill="none" stroke="#7FB4D8" strokeWidth="1.4" strokeDasharray="5 4">
        <path d="M222 128 L184 64" />
        <path d="M332 116 L330 48" />
        <path d="M448 140 L502 72" />
        <path d="M262 284 L238 350" />
      </g>
      <g fill="#BFE0F2" fontSize="15" letterSpacing="3" fontFamily="'IBM Plex Mono', monospace">
        <text x="128" y="56">CHUCK</text>
        <text x="294" y="38">BACK / LOIN</text>
        <text x="508" y="64">ROUND</text>
        <text x="164" y="370">BRISKET · PLATE</text>
      </g>
      <text x="152" y="458" fontSize="12" fill="#6E93AE" letterSpacing="2" fontFamily="'IBM Plex Mono', monospace">
        LIVE WEIGHT 1,400 LB · FIG. 2 — STEER, CROSS-BRED, YARD SCALE APPROVED
      </text>
    </svg>
  )
}

export default function TheLine() {
  return (
    <div className="th-ox-polis ox-polis-line">
      <div className="ox-polis-line-sheet">
        <header className="ox-polis-line-head">
          <p className="ox-polis-line-kicker">Ox Polis · 04 · Chicago · Union Stock-Yard</p>
          <h1 className="ox-polis-line-h1">The Line</h1>
          <p className="ox-polis-line-deck">
            326 acres of fence and rail on the south branch of the Chicago River — a city built to
            take the ox apart. The animal never touched ground between the holding pens and the
            cooler: it rode overhead on a single current of hooks, and the meat age learned to
            build things from the pieces back up.
          </p>
        </header>

        <div className="ox-polis-line-grid">
          <div className="ox-polis-line-panel">
            <p className="ox-polis-line-cap">Fig. 1 — Plan of the yards &amp; rail limits</p>
            <svg className="ox-polis-line-plan" viewBox="0 0 800 460" aria-hidden="true" focusable="false">
              <rect x="60" y="40" width="680" height="330" fill="none" stroke="#D6EAF7" strokeWidth="2.6" strokeDasharray="1 0" />
              <g fill="none" stroke="#7FB4D8" strokeWidth="1.4" opacity="0.8">
                {PENS.map(([x, y, w, h], i) => (
                  <rect key={i} x={x} y={y} width={w} height={h} />
                ))}
              </g>
              <Rail y={352} />
              <Rail y={392} />
              <g stroke="#D6EAF7" strokeWidth="1.6" opacity="0.55">
                <path d="M60 330 H740" />
                <path d="M110 330 V300 M250 330 V300 M420 330 V300 M620 330 V300" />
              </g>
              <motion.path
                d="M740 60 C700 160 720 260 748 340"
                fill="none"
                stroke="#6E93AE"
                strokeWidth="10"
                opacity="0.35"
                custom={2}
                variants={draw}
                initial="hidden"
                animate="show"
              />
              <text x="762" y="220" fontSize="13" fill="#6E93AE" letterSpacing="2" transform="rotate(90 762 220)">
                SOUTH BRANCH
              </text>
              <text x="60" y="30" fontSize="13" fill="#BFE0F2" letterSpacing="3" fontFamily="'IBM Plex Mono', monospace">
                BROADWAY ▲ ENTRY SIDE
              </text>
              <text x="400" y="432" textAnchor="middle" fontSize="13" fill="#6E93AE" letterSpacing="3" fontFamily="'IBM Plex Mono', monospace">
                26 MI OF TRACK INSIDE THE LIMITS · TELEGRAPH · U.S. POST OFFICE AT GATE
              </text>
              {PENS.map(([x, y, w, h], i) => (
                <text key={i} x={x + w / 2} y={y + h / 2 + 4} textAnchor="middle" fontSize="10" fill="#6E93AE" letterSpacing="1" fontFamily="'IBM Plex Mono', monospace">
                  PEN {(i + 1) * 7}
                </text>
              ))}
            </svg>
            <ul className="ox-polis-line-stats" role="list">
              <li><span>1865</span>opened</li>
              <li><span>326</span>acres</li>
              <li><span>≈5M</span>head per year</li>
              <li><span>1971</span>last sale</li>
            </ul>
          </div>

          <div className="ox-polis-line-panel">
            <p className="ox-polis-line-cap">Fig. 2 — Elevation, beef steer, dressed</p>
            <SteerPlate />
          </div>

          <div className="ox-polis-line-panel ox-polis-line-panel--notes">
            <h2>Field notes from the disassembly</h2>
            <p>
              <b>The current.</b> The packing houses ran one direction: live at the north end,
              chilled at the south. Each worker took one cut and never moved. The animal arrived by
              rail and left as a boxcar of provisions, sometimes the same night.
            </p>
            <p>
              <b>The reversal.</b> Watching the Line, a Michigan engineer named Randall sketched a
              moving assembly for automobiles; Ford's people took the idea the other way and the
              twentieth century got its own rhythm from the pace of the slaughter current.
            </p>
            <p>
              <b>The stench.</b> The town called its own south side disagreeable and put the yards
              there anyway. When the cattle trains stopped in 1971, the city had already forgotten
              why the smell had a schedule.
            </p>
            <div className="ox-polis-line-titleblock">
              <div className="ox-polis-line-tb-cell ox-polis-line-tb-big">
                UNION STOCK-YARD CO.
                <small>surveyed &amp; drawn · plate xix</small>
              </div>
              <div className="ox-polis-line-tb-cell">
                SHEET 04
                <small>of 05</small>
              </div>
              <div className="ox-polis-line-tb-cell ox-polis-line-tb-sig">
                SET XIX · DESIGNED BY QWEN 3.8 FLASH
              </div>
              <div className="ox-polis-line-rivets" aria-hidden="true">
                {Array.from({ length: 6 }).map((_, i) => (
                  <span key={i} />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="ox-polis-line-move" aria-hidden="true">
          <div className="ox-polis-line-rail" />
          <motion.div
            className="ox-polis-line-cars"
            animate={{ x: [0, -390] }}
            transition={{ duration: 6.5, repeat: Infinity, ease: 'linear' }}
          >
            <svg viewBox="0 0 1950 70" width="1950" height="70">
              {[0, 390, 780, 1170, 1560].map((x, i) => (
                <StockCar key={i} x={x} />
              ))}
            </svg>
          </motion.div>
        </div>

        <p className="ox-polis-line-setline">Ox Polis — the ox the city kept · the stockyards read the animal like a ledger, and the ledger became the machine</p>
      </div>
    </div>
  )
}
