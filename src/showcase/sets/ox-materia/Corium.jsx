import { useState } from 'react'
import { motion } from 'framer-motion'
import './corium.css'

const PROCESSES = [
  {
    id: 'chrome',
    label: 'Chrome drum',
    note: 'Basic chromium sulfate. Wet-blue in hours, not weeks. Modern yards run on this chemistry.',
  },
  {
    id: 'oak',
    label: 'Oak bark',
    note: 'Vegetable tannins from Quercus. Slow, warm brown, and still the gold standard for heavy harness leather.',
  },
]

function StandingOx({ mode }) {
  return (
    <svg className="corium-ox" viewBox="0 0 640 420" aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id="corium-hide" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={mode === 'chrome' ? '#7ec8c8' : '#c4a06a'} />
          <stop offset="45%" stopColor={mode === 'chrome' ? '#3a8f8f' : '#8a6236'} />
          <stop offset="100%" stopColor={mode === 'chrome' ? '#1f5a5a' : '#4a3018'} />
        </linearGradient>
        <linearGradient id="corium-horn" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f0e2c4" />
          <stop offset="100%" stopColor="#b89a6a" />
        </linearGradient>
        <pattern id="corium-grain" width="12" height="12" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="3" r="0.8" fill="#1a1f22" opacity="0.18" />
          <circle cx="8" cy="9" r="0.6" fill="#1a1f22" opacity="0.14" />
        </pattern>
      </defs>
      <ellipse cx="320" cy="392" rx="210" ry="14" fill="#1a1f22" opacity="0.35" />
      <path
        d="M168 248 C120 236 88 200 96 168 C108 128 148 118 178 132 C198 96 248 78 292 92 C318 48 378 42 418 78 C458 62 508 78 528 118 C562 128 578 168 562 204 C588 228 586 278 552 298 C568 338 548 372 508 378 C478 402 418 408 368 398 C318 418 248 408 208 378 C168 368 148 318 168 248 Z"
        fill="url(#corium-hide)"
        stroke="#1a1f22"
        strokeWidth="3"
      />
      <path
        d="M168 248 C120 236 88 200 96 168 C108 128 148 118 178 132 C198 96 248 78 292 92 C318 48 378 42 418 78 C458 62 508 78 528 118 C562 128 578 168 562 204 C588 228 586 278 552 298 C568 338 548 372 508 378 C478 402 418 408 368 398 C318 418 248 408 208 378 C168 368 148 318 168 248 Z"
        fill="url(#corium-grain)"
      />
      <path
        d="M292 92 C268 72 248 48 262 28 C278 12 298 36 308 58"
        fill="url(#corium-horn)"
        stroke="#1a1f22"
        strokeWidth="2.5"
      />
      <path
        d="M378 78 C402 58 428 38 448 48 C468 60 448 88 428 102"
        fill="url(#corium-horn)"
        stroke="#1a1f22"
        strokeWidth="2.5"
      />
      <path d="M248 168 C228 188 218 218 238 228 C258 218 268 188 248 168 Z" fill="#5a3a22" opacity="0.55" />
      <ellipse cx="318" cy="148" rx="10" ry="7" fill="#1a1f22" />
      <circle cx="315" cy="146" r="2.2" fill="#d9c4a8" />
      <path d="M348 158 Q368 172 358 188" fill="none" stroke="#1a1f22" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M208 318 L198 378 L218 378 Z" fill="#3a2a18" stroke="#1a1f22" strokeWidth="2" />
      <path d="M268 328 L262 382 L282 382 Z" fill="#3a2a18" stroke="#1a1f22" strokeWidth="2" />
      <path d="M408 328 L402 382 L422 382 Z" fill="#3a2a18" stroke="#1a1f22" strokeWidth="2" />
      <path d="M468 318 L462 378 L482 378 Z" fill="#3a2a18" stroke="#1a1f22" strokeWidth="2" />
      <path d="M528 220 C548 248 558 278 538 292 C518 278 522 248 528 220 Z" fill="#5a3a22" stroke="#1a1f22" strokeWidth="2" />
      <motion.path
        className="corium-peel"
        d="M210 210 C260 190 320 185 380 200 C430 214 480 230 520 250 L510 290 C470 270 420 252 370 240 C310 226 250 230 210 248 Z"
        fill={mode === 'chrome' ? '#a8e0e0' : '#e0c49a'}
        opacity="0.55"
        animate={{ y: [0, -6, 0], opacity: [0.45, 0.7, 0.45] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
      />
    </svg>
  )
}

function Drum() {
  return (
    <svg className="corium-drum" viewBox="0 0 160 160" aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id="corium-drum-metal" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#5a6570" />
          <stop offset="100%" stopColor="#1a1f22" />
        </linearGradient>
      </defs>
      <motion.g
        animate={{ rotate: 360 }}
        transition={{ duration: 14, repeat: Infinity, ease: 'linear' }}
        style={{ transformOrigin: '80px 80px' }}
      >
        <ellipse cx="80" cy="80" rx="62" ry="62" fill="url(#corium-drum-metal)" stroke="#d9c4a8" strokeWidth="3" />
        <ellipse cx="80" cy="80" rx="42" ry="42" fill="none" stroke="#4a9b9b" strokeWidth="8" />
        <path d="M80 18 L86 80 L80 142 L74 80 Z" fill="#d9c4a8" opacity="0.85" />
        <path d="M18 80 L80 86 L142 80 L80 74 Z" fill="#1f6b6b" opacity="0.7" />
      </motion.g>
      <text x="80" y="154" textAnchor="middle" fill="#d9c4a8" fontSize="10" fontFamily="Source Sans 3, sans-serif">
        DRUM 18 RPM
      </text>
    </svg>
  )
}

export default function Corium() {
  const [mode, setMode] = useState('chrome')
  const active = PROCESSES.find((p) => p.id === mode)

  return (
    <div className={`th-corium is-${mode}`}>
      <div className="corium-drips" aria-hidden="true">
        {[0, 1, 2, 3, 4].map((i) => (
          <motion.span
            key={i}
            className="corium-drip"
            style={{ left: `${12 + i * 18}%` }}
            animate={{ y: [0, 120], opacity: [0, 1, 0] }}
            transition={{ duration: 3.2 + i * 0.35, repeat: Infinity, delay: i * 0.55, ease: 'easeIn' }}
          />
        ))}
      </div>
      <div className="corium-grid">
        <header className="corium-head">
          <p className="corium-kicker">Substance 01 · Corium · Bos hide</p>
          <h1 className="corium-h1">
            The hide is a
            <span> wet machine</span>
          </h1>
          <p className="corium-lead">
            Before it is a saddle or a shoe, the ox is a membrane. Collagen fibres, grain side out,
            flesh side in — a living sheet that tanneries still measure in square feet and pH. Choose
            the bath and the colour of the animal changes under your eye.
          </p>
        </header>
        <div className="corium-stage">
          <StandingOx mode={mode} />
          <p className="corium-cap">Standing donor · grain mapped · layers lifting toward the drum</p>
        </div>
        <aside className="corium-side">
          <div className="corium-toggles" role="group" aria-label="Tanning process">
            {PROCESSES.map((p) => (
              <button
                key={p.id}
                type="button"
                className={`corium-btn${mode === p.id ? ' is-on' : ''}`}
                aria-pressed={mode === p.id}
                onClick={() => setMode(p.id)}
              >
                {p.label}
              </button>
            ))}
          </div>
          <p className="corium-note">{active.note}</p>
          <Drum />
          <ul className="corium-specs">
            <li>
              <strong>pH 2.8–3.5</strong>
              <span>Pickle before chrome</span>
            </li>
            <li>
              <strong>4–6 mm</strong>
              <span>Full-substance ox hide</span>
            </li>
            <li>
              <strong>~45 sq ft</strong>
              <span>Average adult yield</span>
            </li>
          </ul>
          <div className="corium-seal" role="note">
            <svg viewBox="0 0 88 88" aria-hidden="true" focusable="false">
              <circle cx="44" cy="44" r="40" fill="none" stroke="currentColor" strokeWidth="3" strokeDasharray="4 3" />
              <circle cx="44" cy="44" r="28" fill="none" stroke="currentColor" strokeWidth="2" />
              <path d="M28 44 H60 M44 28 V60" stroke="currentColor" strokeWidth="3" />
              <circle cx="44" cy="44" r="6" fill="currentColor" />
            </svg>
            <p>
              Leather punch · Lot C-09
              <b>SET IX · DESIGNED BY GROK 4.5</b>
            </p>
          </div>
        </aside>
      </div>
    </div>
  )
}
