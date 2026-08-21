import { motion } from 'framer-motion'
import './cornu.css'

const WARES = [
  { t: 'Lantern shade', d: 'Thin horn, oil-lamp warm — coachmen read maps by bovine light.' },
  { t: 'Dress comb', d: 'Pressed and polished tips; the grain of the sheath becomes the tooth line.' },
  { t: 'Snuff box', d: 'Hinged horn lid over brass — pocket geology from a living crown.' },
]

function HornOx() {
  return (
    <svg className="cornu-ox" viewBox="0 0 520 480" aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id="cornu-hide" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#6a4428" />
          <stop offset="55%" stopColor="#3b2416" />
          <stop offset="100%" stopColor="#24160e" />
        </linearGradient>
        <linearGradient id="cornu-horn-l" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#f3d9a4" />
          <stop offset="40%" stopColor="#e0a04a" />
          <stop offset="100%" stopColor="#8a5a22" />
        </linearGradient>
        <linearGradient id="cornu-horn-r" x1="1" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f7e6c0" />
          <stop offset="45%" stopColor="#d4923a" />
          <stop offset="100%" stopColor="#7a4e1c" />
        </linearGradient>
        <radialGradient id="cornu-glow" cx="50%" cy="40%" r="50%">
          <stop offset="0%" stopColor="#ffe6a8" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#e0a04a" stopOpacity="0" />
        </radialGradient>
      </defs>
      <ellipse cx="260" cy="430" rx="160" ry="18" fill="#120c08" opacity="0.45" />
      <path
        d="M260 168 C170 172 120 240 128 320 C134 380 180 430 260 438 C340 430 386 380 392 320 C400 240 350 172 260 168 Z"
        fill="url(#cornu-hide)"
        stroke="#b08d57"
        strokeWidth="2.5"
      />
      <path d="M210 250 C190 270 188 300 208 312" fill="#5a3824" />
      <path d="M310 250 C330 270 332 300 312 312" fill="#5a3824" />
      <ellipse cx="198" cy="278" rx="16" ry="11" fill="#120c08" />
      <ellipse cx="322" cy="278" rx="16" ry="11" fill="#120c08" />
      <circle cx="194" cy="276" r="3" fill="#f3d9a4" />
      <circle cx="318" cy="276" r="3" fill="#f3d9a4" />
      <path d="M230 330 C248 352 272 352 290 330" fill="none" stroke="#b08d57" strokeWidth="2" />
      <ellipse cx="248" cy="348" rx="8" ry="5" fill="#1a100a" />
      <ellipse cx="272" cy="348" rx="8" ry="5" fill="#1a100a" />
      <path d="M236 390 Q260 410 284 390" fill="#4a301c" stroke="#b08d57" strokeWidth="2" />
      <motion.path
        d="M168 190 C70 150 28 70 58 36 C92 8 138 58 168 120 C178 148 178 172 168 190 Z"
        fill="url(#cornu-horn-l)"
        stroke="#b08d57"
        strokeWidth="2.5"
        animate={{ filter: ['brightness(1)', 'brightness(1.15)', 'brightness(1)'] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.path
        d="M352 190 C450 150 492 70 462 36 C428 8 382 58 352 120 C342 148 342 172 352 190 Z"
        fill="url(#cornu-horn-r)"
        stroke="#b08d57"
        strokeWidth="2.5"
        animate={{ filter: ['brightness(1)', 'brightness(1.18)', 'brightness(1)'] }}
        transition={{ duration: 4.4, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }}
      />
      <motion.ellipse
        cx="100"
        cy="90"
        rx="36"
        ry="28"
        fill="url(#cornu-glow)"
        animate={{ opacity: [0.35, 0.85, 0.35] }}
        transition={{ duration: 3.6, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.ellipse
        cx="420"
        cy="90"
        rx="36"
        ry="28"
        fill="url(#cornu-glow)"
        animate={{ opacity: [0.3, 0.9, 0.3] }}
        transition={{ duration: 3.8, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
      />
      <path d="M160 200 C148 220 150 248 168 258" fill="#4a301c" stroke="#b08d57" strokeWidth="2" />
      <path d="M360 200 C372 220 370 248 352 258" fill="#4a301c" stroke="#b08d57" strokeWidth="2" />
    </svg>
  )
}

function Blank({ delay }) {
  return (
    <motion.div
      className="cornu-blank"
      animate={{ y: [0, -8, 0], rotate: [-2, 2, -2] }}
      transition={{ duration: 5 + delay, repeat: Infinity, ease: 'easeInOut', delay }}
    >
      <svg viewBox="0 0 60 120" aria-hidden="true" focusable="false">
        <path
          d="M30 8 C18 28 14 58 18 88 C20 104 26 114 30 114 C34 114 40 104 42 88 C46 58 42 28 30 8 Z"
          fill="#e0a04a"
          stroke="#b08d57"
          strokeWidth="2"
          opacity="0.85"
        />
        <path d="M30 20 C26 40 26 70 30 96" fill="none" stroke="#f3d9a4" strokeWidth="1.5" opacity="0.7" />
      </svg>
    </motion.div>
  )
}

export default function Cornu() {
  return (
    <div className="th-cornu">
      <div className="cornu-velvet" aria-hidden="true" />
      <div className="cornu-layout">
        <div className="cornu-bench">
          <div className="cornu-blanks" aria-hidden="true">
            <Blank delay={0} />
            <Blank delay={0.6} />
            <Blank delay={1.1} />
          </div>
          <HornOx />
          <p className="cornu-cap">Crown of the atelier — horns as lantern blanks before the saw</p>
        </div>
        <main className="cornu-main">
          <p className="cornu-kicker">Substance 02 · Cornu · Keratin sheath</p>
          <h1 className="cornu-h1">
            Horn is
            <em> slow glass</em>
          </h1>
          <p className="cornu-lead">
            Heat softens it; pressure remembers the curve. Victorian horn-workers turned the ox&apos;s
            crown into combs, beakers, and coach lanterns that threw a honeyed light — half animal,
            half instrument.
          </p>
          <ul className="cornu-wares">
            {WARES.map((w) => (
              <li key={w.t}>
                <strong>{w.t}</strong>
                <span>{w.d}</span>
              </li>
            ))}
          </ul>
          <div className="cornu-brand" role="note">
            <svg viewBox="0 0 120 64" aria-hidden="true" focusable="false">
              <rect x="2" y="2" width="116" height="60" rx="4" fill="#2a1810" stroke="#b08d57" strokeWidth="2" />
              <path
                d="M24 40 C28 24 40 18 48 28 C52 18 64 16 70 28 C78 20 92 24 94 40"
                fill="none"
                stroke="#e0a04a"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <text x="60" y="54" textAnchor="middle" fill="#b08d57" fontSize="8" fontFamily="Josefin Sans, sans-serif">
                MAKER&apos;S BRAND
              </text>
            </svg>
            <p>
              Scorched into walnut
              <b>SET IX · DESIGNED BY GROK 4.5</b>
            </p>
          </div>
        </main>
      </div>
    </div>
  )
}
