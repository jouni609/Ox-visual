import { motion } from 'framer-motion'
import './cathedral.css'

function Arch({ x, w, base, h, sw, op }) {
  const r = w / 2
  return (
    <path
      d={`M ${x} ${base} L ${x} ${base - (h - r)} A ${r} ${r} 0 0 1 ${x + r} ${base - h} A ${r} ${r} 0 0 1 ${x + w} ${base - (h - r)} L ${x + w} ${base}`}
      fill="none"
      stroke="currentColor"
      strokeWidth={sw}
      opacity={op}
    />
  )
}

function Gasolier({ x, y, delay }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <path d="M0 -46 V0" stroke="#5A5148" strokeWidth="2.4" />
      <path d="M-12 0 H12 L9 8 H-9 Z" fill="#3A332C" />
      <motion.g
        animate={{ opacity: [1, 0.72, 1, 0.88, 0.96, 1], scale: [1, 0.94, 1, 1.05, 0.98, 1] }}
        transition={{ duration: 4.2, repeat: Infinity, ease: 'easeInOut', delay }}
        style={{ transformBox: 'view-box', transformOrigin: `${x}px ${y + 20}px` }}
      >
        <ellipse cx="0" cy="26" rx="26" ry="34" fill="url(#ox-polis-cath-glow)" />
        <path d="M-7 8 L7 8 L4.5 26 C4.5 30 -4.5 30 -4.5 26 Z" fill="#E8A94A" />
        <circle cx="0" cy="19" r="4" fill="#FBE2AE" />
      </motion.g>
    </g>
  )
}

function Bullock() {
  return (
    <g transform="translate(452 318)">
      <ellipse cx="160" cy="212" rx="175" ry="15" fill="#000000" opacity="0.5" />
      <path d="M58 90 C58 60 84 42 118 38 C140 24 172 24 192 38 C238 42 268 62 272 94 L272 124 C268 150 240 160 200 162 L112 162 C76 158 58 132 58 90 Z" fill="#2A231C" />
      <path d="M118 38 C140 24 172 24 192 38 C170 32 140 32 118 42 Z" fill="#3A3128" />
      <path d="M60 84 C46 66 30 60 18 68 C4 78 2 98 12 112 C24 126 44 126 55 116 C61 110 64 98 65 92 Z" fill="#262019" />
      <path d="M12 98 C0 100 -6 110 0 118 C8 124 20 118 22 108 Z" fill="#3A3128" />
      <path d="M92 158 h14 v50 h-14 Z" fill="#262019" />
      <path d="M116 160 h12 v48 h-12 Z" fill="#262019" />
      <path d="M212 160 h13 v48 h-13 Z" fill="#262019" />
      <path d="M236 158 h13 v50 h-13 Z" fill="#262019" />
      <path d="M120 162 q56 10 92 0 v26 q-48 8 -92 0 Z" fill="#1E1915" />
      <motion.g
        style={{ transformBox: 'view-box', transformOrigin: '610px 350px' }}
        animate={{ rotate: [0, 5, 0, -4, 0] }}
        transition={{ duration: 5.4, repeat: Infinity, ease: 'easeInOut' }}
      >
        <path d="M270 96 C296 106 306 140 296 178" fill="none" stroke="#262019" strokeWidth="9" strokeLinecap="round" />
        <circle cx="295" cy="184" r="7" fill="#262019" />
      </motion.g>
      <path d="M34 66 L-10 28 C6 44 22 58 34 72 Z" fill="#A8987A" />
      <path d="M50 60 L14 2 C20 30 32 52 46 66 Z" fill="#C4B18C" />
      <path d="M50 76 C60 70 70 74 70 81 C61 86 52 83 50 79 Z" fill="#1E1915" />
      <circle cx="26" cy="88" r="3.2" fill="#E8A94A" />
      <path
        d="M64 52 C88 36 130 26 168 28 C212 30 250 46 268 74"
        fill="none"
        stroke="#E8A94A"
        strokeWidth="3"
        strokeLinecap="round"
        opacity="0.42"
      />
      <path d="M96 162 L96 212 M224 162 L224 212 M56 178 H272 M56 200 H272" stroke="#4C4238" strokeWidth="6" strokeLinecap="round" opacity="0.9" />
      <path d="M70 178 V200 M124 178 V200 M178 178 V200 M232 178 V200" stroke="#4C4238" strokeWidth="4" opacity="0.8" />
    </g>
  )
}

export default function Cathedral() {
  const far = [90, 230, 370, 510, 650, 790, 930, 1070]
  return (
    <div className="th-ox-polis ox-polis-cath">
      <div className="ox-polis-cath-wrap">
        <header className="ox-polis-cath-head">
          <p className="ox-polis-cath-kicker">Ox Polis · 03 · The City of London · 1868</p>
          <h1 className="ox-polis-cath-h1">Smithfield</h1>
          <p className="ox-polis-cath-sub">The Cathedral of the Cattle</p>
          <p className="ox-polis-cath-deck">
            For seven hundred years the city bought its meat where its cattle walked in. Then the
            herds were moved to the edge and given a roof of iron and glass ribbed like a ship
            bottom — a Gothic market for the last ox caravans of the industrial age.
          </p>
        </header>

        <motion.div
          className="ox-polis-cath-nave"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          aria-hidden="true"
        >
          <svg viewBox="0 0 1200 640" preserveAspectRatio="xMidYMax slice" focusable="false">
            <defs>
              <radialGradient id="ox-polis-cath-glow">
                <stop offset="0%" stopColor="#E8A94A" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#E8A94A" stopOpacity="0" />
              </radialGradient>
              <linearGradient id="ox-polis-cath-vault" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#221C16" />
                <stop offset="100%" stopColor="#131110" />
              </linearGradient>
            </defs>

            <rect width="1200" height="640" fill="url(#ox-polis-cath-vault)" />

            <g color="#6E6252">
              {far.map((x, i) => (
                <Arch key={i} x={x} w={110} base={470} h={250} sw={2} op={i % 2 ? 0.28 : 0.4} />
              ))}
            </g>

            <g stroke="#8A7A62" strokeWidth="2" fill="none" opacity="0.4">
              <path d="M0 96 L120 30 L240 96 L360 30 L480 96 L600 30 L720 96 L840 30 L960 96 L1080 30 L1200 96" />
              <path d="M0 126 L120 60 L240 126 L360 60 L480 126 L600 60 L720 126 L840 60 L960 126 L1080 60 L1200 126" opacity="0.6" />
            </g>

            <path d="M0 0 L300 0 L206 640 L0 640 Z" fill="#1B1712" />
            <path d="M1200 0 L900 0 L994 640 L1200 640 Z" fill="#1B1712" />
            <path d="M206 640 C232 420 262 240 300 60 L240 60 C210 250 178 430 152 640 Z" fill="#131110" opacity="0.6" />
            <g color="#A68F5F">
              <Arch x={210} w={180} base={640} h={420} sw={5} op={0.55} />
              <Arch x={810} w={180} base={640} h={420} sw={5} op={0.55} />
            </g>

            <g stroke="#57493A" strokeWidth="2" opacity="0.7">
              <path d="M150 640 L420 470" />
              <path d="M1050 640 L780 470" />
              <path d="M0 600 H1200" strokeDasharray="4 14" opacity="0.35" />
            </g>

            <Bullock />

            <ellipse cx="600" cy="150" rx="230" ry="60" fill="url(#ox-polis-cath-glow)" opacity="0.22" />

            <Gasolier x={380} y={120} delay={0} />
            <Gasolier x={600} y={96} delay={1.4} />
            <Gasolier x={820} y={120} delay={2.6} />

            <g fill="#E4D9BE" opacity="0.08">
              <circle cx="140" cy="210" r="1.6" />
              <circle cx="330" cy="160" r="1.2" />
              <circle cx="520" cy="230" r="1.4" />
              <circle cx="705" cy="175" r="1.1" />
              <circle cx="880" cy="225" r="1.5" />
              <circle cx="1040" cy="185" r="1.2" />
            </g>
          </svg>
        </motion.div>

        <section className="ox-polis-cath-stubs" aria-label="Market notes">
          <article className="ox-polis-cath-stub">
            <p className="ox-polis-cath-stub-no">No. 1</p>
            <h2>The Complaint</h2>
            <p>
              The old livestock fair sat in the middle of a growing city: bellowing in Cheapside,
              dung in the lanes, drovers blocking the mails. In 1853 Charles Dickens took up the
              pen publicly and demanded that Smithfield be moved — and the tide of the crowd moved
              it out.
            </p>
          </article>
          <article className="ox-polis-cath-stub">
            <p className="ox-polis-cath-stub-no">No. 2</p>
            <h2>The Building</h2>
            <p>
              Sir Horace Jones gave the herds a cathedral: four Gothic pavilions of iron and glass,
              ridge and furrow roofs, pointed arches over the stands, a clock tower facing the
              night train. The cattle walked in on their own legs. The meat left by rail.
            </p>
          </article>
          <article className="ox-polis-cath-stub ox-polis-cath-stub--sig">
            <p className="ox-polis-cath-stub-no">No. 3</p>
            <h2>The Surviving Market</h2>
            <p>
              Of all the City's medieval markets, one still trades on its ancient ground — built
              for oxen, kept by habit. Its ironwork still carries a maker's small brass plate at
              the shambles door.
            </p>
            <div className="ox-polis-cath-stub-perf" aria-hidden="true">
              {Array.from({ length: 12 }).map((_, i) => (
                <span key={i} />
              ))}
            </div>
            <p className="ox-polis-cath-sign">SET XIX · DESIGNED BY QWEN 3.8 FLASH</p>
          </article>
        </section>

        <footer className="ox-polis-cath-foot">
          <span>Open 1868</span>
          <span className="ox-polis-cath-diamond" aria-hidden="true">◆</span>
          <span>Four pavilions · one clock</span>
          <span className="ox-polis-cath-diamond" aria-hidden="true">◆</span>
          <span>Ox Polis — the ox the city kept</span>
        </footer>
      </div>
    </div>
  )
}
