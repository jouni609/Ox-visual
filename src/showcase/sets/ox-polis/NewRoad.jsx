import { motion } from 'framer-motion'
import './newroad.css'

const MILESTONES = [
  { x: 120, label: 'CITY WATCH', miles: '0 mi' },
  { x: 480, label: 'MARYLEBONE', miles: '1 mi' },
  { x: 840, label: 'TYBURN', miles: '1½ mi' },
]

function Walker({ x, s, delay }) {
  return (
    <motion.g
      transform={`translate(${x} 0)`}
      animate={{ y: [0, -3, 0] }}
      transition={{ duration: 0.9, repeat: Infinity, ease: 'easeInOut', delay }}
    >
      <g transform={`scale(${s})`} fill="currentColor">
        <path d="M16 34 C15 24 26 15 42 13 C50 7 62 6 72 12 C88 14 96 19 97 28 L98 41 C97 50 83 55 57 55 C33 55 17 49 16 41 Z" />
        <path d="M17 32 C10 30 5 34 2 41 C-1 48 1 54 7 55 C13 55 16 49 17 43 C18 39 18 35 19 33 Z" />
        <path d="M6 46 C-1 46 -4 51 -1 55 C3 58 9 55 10 50 Z" />
        <path d="M8 36 C4 32 0 30 -5 30 C-2 34 2 37 6 39 Z" />
        <path d="M14 33 C12 28 10 24 6 21 C7 27 9 31 12 35 Z" />
        <path d="M26 53 h5 v34 h-5 Z" />
        <path d="M38 55 h5 v32 h-5 Z" />
        <path d="M72 55 h5 v32 h-5 Z" />
        <path d="M84 53 h5 v34 h-5 Z" />
        <path d="M97 28 C104 35 105 47 99 58" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        <circle cx="98" cy="61" r="2.6" />
      </g>
    </motion.g>
  )
}

function Drove({ x, tone }) {
  return (
    <g transform={`translate(${x} 188)`} style={{ color: tone }}>
      <Walker x={0} s={1.02} delay={0} />
      <Walker x={132} s={0.78} delay={0.24} />
      <Walker x={238} s={0.92} delay={0.48} />
      <Walker x={376} s={0.7} delay={0.12} />
    </g>
  )
}

function Drover() {
  return (
    <motion.g
      transform="translate(560 176)"
      animate={{ y: [0, -2.5, 0] }}
      transition={{ duration: 0.8, repeat: Infinity, ease: 'easeInOut' }}
    >
      <circle cx="0" cy="0" r="9" fill="currentColor" />
      <path d="M-8 12 C-10 24 -9 38 -6 50 L8 50 C10 36 10 22 7 12 Z" fill="currentColor" />
      <path d="M-5 50 L-8 84 L-2 84 L0 56 L4 84 L10 84 L7 50 Z" fill="currentColor" />
      <path d="M9 18 L26 58" stroke="currentColor" strokeWidth="3.4" strokeLinecap="round" />
    </motion.g>
  )
}

export default function NewRoad() {
  return (
    <div className="th-ox-polis ox-polis-road">
      <div className="ox-polis-road-wrap">
        <header className="ox-polis-road-head">
          <div className="ox-polis-road-title">
            <p className="ox-polis-road-kicker">Ox Polis · 02 · London · Anno 1756</p>
            <h1 className="ox-polis-road-h1">
              The
              <em>New</em>
              Road
            </h1>
          </div>
          <p className="ox-polis-road-deck">
            Westminster cut a lane across the backs of its fields so that cattle for Smithfield
            would stop clogging the city lanes. A drove road for hooves became the busiest
            shopping street in London. Oxford Street is, etymologically, a cow path.
          </p>
        </header>

        <div className="ox-polis-road-strip" aria-hidden="true">
          <svg viewBox="0 165 1200 230" preserveAspectRatio="xMidYMid meet" focusable="false">
            <path
              d="M0 258 C180 238 320 268 520 246 S880 214 1200 236"
              fill="none"
              stroke="#E9E3D3"
              strokeWidth="26"
              opacity="0.1"
            />
            <path
              d="M0 258 C180 238 320 268 520 246 S880 214 1200 236"
              fill="none"
              stroke="#E9E3D3"
              strokeWidth="2.4"
              strokeDasharray="14 10"
              opacity="0.55"
            />
            <path
              d="M0 282 C180 262 320 292 520 270 S880 238 1200 260"
              fill="none"
              stroke="#E9E3D3"
              strokeWidth="1"
              opacity="0.3"
            />

            {MILESTONES.map((m) => (
              <g key={m.label} transform={`translate(${m.x} 262)`}>
                <rect x="-3" y="-46" width="6" height="46" fill="#E9E3D3" />
                <circle cx="0" cy="-52" r="6" fill="none" stroke="#D24B2A" strokeWidth="2.4" />
                <text x="0" y="-70" textAnchor="middle" fontSize="15" letterSpacing="3" fill="#E9E3D3">
                  {m.label}
                </text>
                <text x="0" y="24" textAnchor="middle" fontSize="12" fill="#8FA0A8" className="ox-polis-road-mile">
                  {m.miles}
                </text>
              </g>
            ))}

            <g transform="translate(950 150)">
              <rect x="-8" y="0" width="10" height="128" fill="#E9E3D3" opacity="0.85" />
              <rect x="86" y="0" width="10" height="128" fill="#E9E3D3" opacity="0.85" />
              <rect x="-8" y="-4" width="104" height="8" fill="#E9E3D3" opacity="0.85" />
              <g transform="translate(44 26)">
                <motion.g
                  style={{ transformBox: 'view-box', transformOrigin: '44px 160px' }}
                  animate={{ rotate: [0, 1.4, 0, -1.4, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <rect x="-31" y="-18" width="62" height="40" rx="3" fill="#14181B" stroke="#E9E3D3" strokeWidth="2" />
                  <text x="0" y="-4" textAnchor="middle" fontSize="8.6" letterSpacing="0.5" fill="#E9E3D3">NO WOODEN</text>
                  <text x="0" y="8" textAnchor="middle" fontSize="8.6" letterSpacing="0.5" fill="#E9E3D3">SHOES NOR</text>
                  <text x="0" y="19" textAnchor="middle" fontSize="7.6" letterSpacing="0.5" fill="#D24B2A">PENALTY 40s</text>
                </motion.g>
              </g>
              <text x="44" y="146" textAnchor="middle" fontSize="13" letterSpacing="3" fill="#8FA0A8">TOLL GATE</text>
            </g>

            <motion.g
              className="ox-polis-road-drove"
              animate={{ x: [0, -300] }}
              transition={{ duration: 14, repeat: Infinity, ease: 'linear' }}
            >
              <Drove x={-80} tone="#E9E3D3" />
              <Drove x={220} tone="#C6BFAE" />
              <Drove x={520} tone="#E9E3D3" />
              <Drove x={820} tone="#C6BFAE" />
              <Drove x={1120} tone="#E9E3D3" />
              <Drove x={1420} tone="#C6BFAE" />
            </motion.g>
            <Drover />

            <g opacity="0.5" stroke="#E9E3D3" strokeWidth="1.4">
              <path d="M60 330 h1080" strokeDasharray="2 26" />
            </g>
            <text x="60" y="368" fontSize="15" letterSpacing="4" fill="#8FA0A8">
              PLAN OF THE NEW ROAD FROM THE CITY WATCH TO TYBURN — SURVEYED FOR THE TRUSTEES, 1756
            </text>
          </svg>
        </div>

        <section className="ox-polis-road-body">
          <div className="ox-polis-road-board">
            <p className="ox-polis-road-board-top">By Act of Parliament</p>
            <h2 className="ox-polis-road-board-main">
              No Wooden Shoes
              <span>No Plated Wheels</span>
            </h2>
            <p className="ox-polis-road-board-fine">
              on penalty of forty shillings — the notice that protected a turnpike surface from
              iron, while the road itself existed only to protect the city from iron-rimmed carts
              and a thousand hooves a week.
            </p>
          </div>

          <div className="ox-polis-road-notes">
            <div className="ox-polis-road-note">
              <h3>The bypass</h3>
              <p>
                Smithfield-bound drovers had threaded Cheapside and the Strand for centuries,
                stopping trade, cracking cobbles. The trustees laid a mile and a half of new road
                across open fields at the back of Piccadilly — quick to build, impossible to
                ignore, fatal to the old lanes.
              </p>
            </div>
            <div className="ox-polis-road-note">
              <h3>The inversion</h3>
              <p>
                Once the cattle left, the speculators came. Within two generations the drove road
                wore shopfronts instead of hedges; today it carries half a million feet a day and
                remembers nothing of hooves — except a lane in Islington still named Cattle Track
                Road.
              </p>
            </div>
          </div>
        </section>

        <footer className="ox-polis-road-plate">
          <span className="ox-polis-road-bolt" aria-hidden="true" />
          <p>SET XIX · DESIGNED BY QWEN 3.8 FLASH</p>
          <span className="ox-polis-road-bolt ox-polis-road-bolt--end" aria-hidden="true" />
        </footer>
      </div>
    </div>
  )
}
