import { motion } from 'framer-motion'
import './stercus.css'

const USES = [
  { t: 'Fuel cakes', d: 'Sun-dried on the courtyard wall — the evening hearth begins as geometry.' },
  { t: 'Adobe plaster', d: 'Mixed with straw and earth; walls breathe what the herd returns.' },
  { t: 'Field meal', d: 'Nitrogen and organic matter cycled back under the plough.' },
]

function CourtyardZebu() {
  return (
    <svg className="stercus-ox" viewBox="0 0 480 360" aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id="stercus-hide" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#8a6a3e" />
          <stop offset="100%" stopColor="#4a3218" />
        </linearGradient>
        <linearGradient id="stercus-shade" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#3d5c4a" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#3d5c4a" stopOpacity="0" />
        </linearGradient>
      </defs>
      <ellipse cx="240" cy="330" rx="150" ry="16" fill="#6b4e2e" opacity="0.45" />
      <path d="M80 40 Q160 10 240 40 Q320 10 400 40 L400 120 Q240 90 80 120 Z" fill="url(#stercus-shade)" />
      <path
        d="M140 210 C110 200 95 160 115 135 C140 110 180 120 195 145 C210 115 255 105 290 130 C325 115 370 130 385 165 C415 175 425 215 405 240 C420 270 400 300 360 305 C320 325 250 330 200 318 C155 328 120 310 110 280 C90 265 115 230 140 210 Z"
        fill="url(#stercus-hide)"
        stroke="#1f3a5f"
        strokeWidth="2.5"
      />
      <path
        d="M255 130 C260 100 275 85 290 100 C298 82 318 85 318 110 C325 130 305 145 285 142 C270 152 255 145 255 130 Z"
        fill="#6b4e2e"
        stroke="#1f3a5f"
        strokeWidth="2"
      />
      <path d="M285 95 C270 70 255 58 265 48 C278 40 292 65 298 88" fill="#e8d7b0" stroke="#1f3a5f" strokeWidth="2" />
      <path d="M312 112 C338 90 360 82 352 68 C340 58 325 85 315 105" fill="#e8d7b0" stroke="#1f3a5f" strokeWidth="2" />
      <ellipse cx="330" cy="165" rx="7" ry="5" fill="#1f3a5f" />
      <circle cx="328" cy="164" r="1.6" fill="#e8d7b0" />
      <path d="M345 180 Q360 192 350 205" fill="none" stroke="#1f3a5f" strokeWidth="2" strokeLinecap="round" />
      <path d="M250 280 C260 298 290 298 300 280 C295 305 255 305 250 280 Z" fill="#3d2a18" />
      <path d="M160 275 L152 308 L168 308 Z" fill="#3d2a18" stroke="#1f3a5f" strokeWidth="1.5" />
      <path d="M200 282 L195 308 L210 308 Z" fill="#3d2a18" stroke="#1f3a5f" strokeWidth="1.5" />
      <path d="M320 282 L315 308 L332 308 Z" fill="#3d2a18" stroke="#1f3a5f" strokeWidth="1.5" />
      <path d="M360 275 L355 308 L372 308 Z" fill="#3d2a18" stroke="#1f3a5f" strokeWidth="1.5" />
      <path d="M390 195 C405 220 400 255 380 268" fill="#5a4028" stroke="#1f3a5f" strokeWidth="2" />
    </svg>
  )
}

function CakeWall() {
  const cakes = Array.from({ length: 24 }, (_, i) => i)
  return (
    <div className="stercus-wall" aria-hidden="true">
      {cakes.map((i) => (
        <motion.span
          key={i}
          className="stercus-cake"
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.04 * i, duration: 0.4 }}
        />
      ))}
      <motion.div
        className="stercus-shimmer"
        animate={{ opacity: [0.15, 0.4, 0.15], x: [0, 8, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  )
}

function Biogas() {
  return (
    <svg className="stercus-dome" viewBox="0 0 160 120" aria-hidden="true" focusable="false">
      <path d="M20 90 H140 V100 H20 Z" fill="#6b4e2e" stroke="#1f3a5f" strokeWidth="2" />
      <path d="M30 90 Q80 20 130 90 Z" fill="#c4a06a" stroke="#1f3a5f" strokeWidth="2.5" />
      <path d="M55 90 Q80 45 105 90" fill="none" stroke="#1f3a5f" strokeWidth="1.5" strokeDasharray="3 2" />
      <motion.circle
        cx="80"
        cy="58"
        r="6"
        fill="#e08a2a"
        animate={{ opacity: [0.4, 1, 0.4], scale: [0.9, 1.15, 0.9] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <text x="80" y="116" textAnchor="middle" fill="#1f3a5f" fontSize="9" fontFamily="Mukta, sans-serif">
        BIOGAS DOME
      </text>
    </svg>
  )
}

export default function Stercus() {
  return (
    <div className="th-stercus">
      <div className="stercus-layout">
        <div className="stercus-left">
          <CakeWall />
          <div className="stercus-yard">
            <CourtyardZebu />
            <p className="stercus-cap">
              Courtyard rest · <span lang="hi">gobar</span> drying on the windward wall
            </p>
          </div>
        </div>
        <main className="stercus-main">
          <p className="stercus-kicker">Substance 05 · Stercus · Returned matter</p>
          <h1 className="stercus-h1">
            What the ox
            <em> gives back</em>
          </h1>
          <p className="stercus-lead">
            In the subcontinent the herd is a small power plant. Fresh{' '}
            <span lang="hi">gobar</span> becomes cake, plaster, and methane — the courtyard wall is
            a ledger of fuel drying in the sun.
          </p>
          <Biogas />
          <ul className="stercus-uses">
            {USES.map((u) => (
              <li key={u.t}>
                <strong>{u.t}</strong>
                <span>{u.d}</span>
              </li>
            ))}
          </ul>
          <div className="stercus-stamp" role="note">
            <svg viewBox="0 0 80 80" aria-hidden="true" focusable="false">
              <circle cx="40" cy="40" r="36" fill="#6b4e2e" stroke="#1f3a5f" strokeWidth="3" />
              <circle cx="40" cy="40" r="28" fill="none" stroke="#e8d7b0" strokeWidth="2" strokeDasharray="2 3" />
              <path
                d="M28 48 C32 32 48 28 52 44 C56 32 62 36 58 50 C50 58 34 58 28 48 Z"
                fill="#e8d7b0"
                opacity="0.85"
              />
            </svg>
            <p>
              Adobe thumb-stamp
              <b>SET IX · DESIGNED BY GROK 4.5</b>
            </p>
          </div>
        </main>
      </div>
    </div>
  )
}
