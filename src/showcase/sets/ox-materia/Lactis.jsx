import { motion } from 'framer-motion'
import './lactis.css'

const METRICS = [
  { n: '4.2%', l: 'Butterfat · Jersey-type zebu cross' },
  { n: '8.6%', l: 'Solids-not-fat · protein + lactose + ash' },
  { n: '1.028', l: 'Specific gravity at 15 °C' },
]

function ZebuElevation() {
  return (
    <svg className="lactis-ox" viewBox="0 0 560 320" aria-hidden="true" focusable="false">
      <defs>
        <pattern id="lactis-hatch" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
          <line x1="0" y1="0" x2="0" y2="8" stroke="#111" strokeWidth="1.2" />
        </pattern>
      </defs>
      <line x1="20" y1="280" x2="540" y2="280" stroke="#111" strokeWidth="2" />
      <text x="28" y="300" fill="#111" fontSize="10" fontFamily="DM Sans, sans-serif" letterSpacing="2">
        ELEVATION · BOS INDICUS
      </text>
      <path
        d="M120 200 C90 190 70 150 90 120 C110 95 150 100 165 125 C175 95 210 80 250 95 C270 60 320 55 350 95 C390 85 440 105 455 140 C490 150 505 190 485 215 C500 245 485 270 450 275 C410 290 320 295 260 285 C200 298 140 285 120 255 C95 245 100 220 120 200 Z"
        fill="#f5f2ea"
        stroke="#111"
        strokeWidth="3"
      />
      <path
        d="M250 95 C255 70 270 55 285 70 C292 55 310 55 312 78 C320 95 300 110 280 108 C265 118 250 110 250 95 Z"
        fill="#e62828"
        stroke="#111"
        strokeWidth="2.5"
      />
      <path d="M300 55 C285 30 270 22 278 12 C290 4 305 28 312 48" fill="#f0c400" stroke="#111" strokeWidth="2" />
      <path d="M330 70 C355 45 380 35 372 22 C360 12 345 40 335 60" fill="#f0c400" stroke="#111" strokeWidth="2" />
      <ellipse cx="340" cy="130" rx="7" ry="5" fill="#111" />
      <circle cx="338" cy="129" r="1.8" fill="#f5f2ea" />
      <path d="M355 145 Q370 155 362 168" fill="none" stroke="#111" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M280 250 C290 268 320 268 330 250 C325 275 285 275 280 250 Z" fill="#111" />
      <path d="M160 250 L150 278 L168 278 Z" fill="#1f4b99" stroke="#111" strokeWidth="2" />
      <path d="M210 255 L205 278 L220 278 Z" fill="#1f4b99" stroke="#111" strokeWidth="2" />
      <path d="M360 255 L355 278 L372 278 Z" fill="#1f4b99" stroke="#111" strokeWidth="2" />
      <path d="M410 248 L405 278 L422 278 Z" fill="#1f4b99" stroke="#111" strokeWidth="2" />
      <path d="M455 180 C470 200 475 230 455 245" fill="url(#lactis-hatch)" stroke="#111" strokeWidth="2" />
      <line x1="90" y1="120" x2="90" y2="280" stroke="#111" strokeWidth="1" strokeDasharray="4 3" opacity="0.4" />
      <line x1="485" y1="140" x2="485" y2="280" stroke="#111" strokeWidth="1" strokeDasharray="4 3" opacity="0.4" />
    </svg>
  )
}

function Centrifuge() {
  return (
    <svg className="lactis-spin" viewBox="0 0 140 140" aria-hidden="true" focusable="false">
      <circle cx="70" cy="70" r="64" fill="none" stroke="#111" strokeWidth="3" />
      <circle cx="70" cy="70" r="50" fill="#f5f2ea" stroke="#111" strokeWidth="2" />
      <motion.g
        animate={{ rotate: 360 }}
        transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
        style={{ transformOrigin: '70px 70px' }}
      >
        <path d="M70 20 L78 70 L70 120 L62 70 Z" fill="#e62828" />
        <path d="M20 70 L70 78 L120 70 L70 62 Z" fill="#1f4b99" />
        <circle cx="70" cy="70" r="10" fill="#f0c400" stroke="#111" strokeWidth="2" />
      </motion.g>
      <text x="70" y="136" textAnchor="middle" fill="#111" fontSize="9" fontFamily="Oswald, sans-serif" letterSpacing="1">
        SEPARATOR
      </text>
    </svg>
  )
}

export default function Lactis() {
  return (
    <div className="th-lactis">
      <div className="lactis-blocks" aria-hidden="true">
        <span className="lactis-b lactis-b-r" />
        <span className="lactis-b lactis-b-y" />
        <span className="lactis-b lactis-b-u" />
      </div>
      <div className="lactis-grid">
        <header className="lactis-head">
          <p className="lactis-kicker">Substance 04 · Lactis · Dairy pavilion</p>
          <h1 className="lactis-h1">
            Milk is a
            <span> white algebra</span>
          </h1>
          <p className="lactis-lead">
            Fat globules in water, casein in suspension — the zebu writes a daily equation of
            butterfat and solids. The pavilion measures; the centrifuge divides cream from skim
            with Bauhaus clarity.
          </p>
        </header>
        <div className="lactis-art">
          <ZebuElevation />
        </div>
        <aside className="lactis-aside">
          <Centrifuge />
          <div className="lactis-glass" aria-hidden="true">
            <motion.div
              className="lactis-cream"
              animate={{ height: ['28%', '62%', '28%'] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
            />
            <span>Sight glass</span>
          </div>
          <ul className="lactis-metrics">
            {METRICS.map((m) => (
              <li key={m.n}>
                <strong>{m.n}</strong>
                <span>{m.l}</span>
              </li>
            ))}
          </ul>
          <div className="lactis-cap" role="note">
            <svg viewBox="0 0 72 72" aria-hidden="true" focusable="false">
              <circle cx="36" cy="36" r="34" fill="#f0c400" stroke="#111" strokeWidth="3" />
              <circle cx="36" cy="36" r="26" fill="none" stroke="#111" strokeWidth="2" strokeDasharray="3 2" />
              <text x="36" y="32" textAnchor="middle" fill="#111" fontSize="8" fontFamily="Oswald, sans-serif">
                GRADE A
              </text>
              <text x="36" y="46" textAnchor="middle" fill="#111" fontSize="7" fontFamily="DM Sans, sans-serif">
                EMBOSSED
              </text>
            </svg>
            <p>
              Bottle-cap seal
              <b>SET IX · DESIGNED BY GROK 4.5</b>
            </p>
          </div>
        </aside>
      </div>
    </div>
  )
}
