import { motion } from 'framer-motion'
import './circuitbeast.css'

const LINES = [
  ['LOAD CAPACITY', '900 KG'],
  ['OPERATING TEMPO', 'DAWN → DUSK'],
  ['DOWNTIME', 'NULL'],
  ['FUEL', 'GRASS // RENEWABLE'],
  ['UPTIME', '∞'],
]

const TICKER = ['UNSTOPPABLE', 'INFINITE TORQUE', 'GRASS-POWERED', 'ZERO DOWNTIME', 'BUILT TO OUTLAST']

function WireOx() {
  return (
    <svg className="beast-wire" viewBox="0 0 480 300" aria-hidden="true">
      <ellipse cx="240" cy="266" rx="185" ry="10" fill="rgba(0,240,255,0.08)" />
      <g className="dashlines" stroke="#00f0ff" strokeWidth="2" opacity="0.5">
        <line x1="16" y1="64" x2="150" y2="64" strokeDasharray="14 12" />
        <line x1="60" y1="98" x2="170" y2="98" strokeDasharray="10 14" />
        <line x1="330" y1="220" x2="452" y2="220" strokeDasharray="16 10" />
      </g>
      <g fill="none" stroke="#00f0ff" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round">
        <polyline points="70,120 140,86 250,82 330,100 366,92 428,114 448,144 424,164 396,156 372,150 352,168" />
        <polyline points="96,150 120,176 330,176 352,168" />
        <polyline points="318,176 312,252 296,252" />
        <polyline points="292,178 288,254 272,254" />
        <polyline points="176,177 170,252 154,252" />
        <polyline points="150,176 142,254 126,254" />
        <polyline points="70,122 46,180 54,212" />
        <polyline points="428,112 452,88 468,94" />
        <polyline points="404,108 392,96" />
      </g>
      <circle cx="416" cy="134" r="4" fill="#ff2bd6" />
      <g fill="#ff2bd6">
        <circle cx="305" cy="214" r="3" />
        <circle cx="280" cy="216" r="3" />
        <circle cx="160" cy="214" r="3" />
        <circle cx="134" cy="216" r="3" />
      </g>
    </svg>
  )
}

function TickerHalf() {
  return (
    <div className="beast-ticker-half">
      {[...TICKER, ...TICKER].map((item, i) => (
        <span key={i}>
          {item}
          <em>▸</em>
        </span>
      ))}
    </div>
  )
}

export default function CircuitBeast() {
  return (
    <div className="th-beast">
      <div className="beast-scanlines" aria-hidden="true" />

      <header className="beast-hud">
        <span>OX://DRIVE.SYSTEMS_v9.3</span>
        <span className="beast-status">
          <i className="blink-dot" /> STATUS: UNSTOPPABLE
        </span>
      </header>

      <main className="beast-hero">
        <h1 className="glitch" data-text="RELENTLESS DRIVE">
          RELENTLESS DRIVE
        </h1>
        <p className="beast-sub">// torque of a thousand harvests — zero emissions, infinite stubbornness</p>

        <div className="beast-stage">
          <div className="horizon-glow" aria-hidden="true" />
          <div className="grid-floor" aria-hidden="true" />
          <WireOx />
        </div>
      </main>

      <section className="beast-terminal">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.3 } } }}
        >
          <p className="term-head">
            &gt; RUN diagnostics.ox --full
            <span className="caret" />
          </p>
          {LINES.map(([k, v]) => (
            <motion.p
              key={k}
              className="term-line"
              variants={{
                hidden: { opacity: 0, x: -16 },
                show: { opacity: 1, x: 0, transition: { duration: 0.3 } },
              }}
            >
              <span className="dim">&gt;</span> {k}
              <span className="dots" />
              <span className="val">{v}</span>
            </motion.p>
          ))}
        </motion.div>
      </section>

      <div className="beast-ticker" aria-hidden="true">
        <div className="beast-ticker-track">
          <TickerHalf />
          <TickerHalf />
        </div>
      </div>

      <footer className="beast-foot">BUILT TO OUTLAST THE FUTURE</footer>
    </div>
  )
}
