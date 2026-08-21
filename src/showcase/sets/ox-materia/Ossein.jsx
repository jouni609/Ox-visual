import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './ossein.css'

const BONES = [
  { n: 'Cornual process', d: 'Horn core — the bony spike inside the keratin sheath' },
  { n: 'Metacarpal III+IV', d: 'Cannon bone — turned into buttons and knife handles' },
  { n: 'Ossein collagen', d: 'Boiled for glue, ground for phosphate meal' },
]

function SkeletonOx({ showGhost }) {
  const fade = {
    hidden: { opacity: 0, y: 8 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <svg className="ossein-ox" viewBox="0 0 720 340" aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id="ossein-ghost" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#c9898a" stopOpacity="0.45" />
          <stop offset="100%" stopColor="#c9898a" stopOpacity="0.08" />
        </linearGradient>
      </defs>
      <AnimatePresence>
        {showGhost && (
          <motion.g
            key="ghost"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.45 }}
          >
            <motion.path
              d="M70 180 C40 170 35 130 70 110 C100 90 130 105 145 130 C160 95 210 80 260 100 C300 70 370 75 410 110 C460 95 520 120 540 160 C580 175 590 220 560 245 C575 280 545 305 500 308 C450 325 360 330 290 318 C220 332 140 320 105 285 C70 270 75 210 70 180 Z"
              fill="url(#ossein-ghost)"
              animate={{ opacity: [0.4, 0.65, 0.4] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            />
          </motion.g>
        )}
      </AnimatePresence>
      <motion.g initial="hidden" animate="show" variants={{ show: { transition: { staggerChildren: 0.05 } } }}>
        <motion.path variants={fade} d="M470 70 C445 55 420 70 425 100 C428 125 450 145 480 140 C510 145 535 120 530 90 C525 65 500 55 470 70 Z" fill="#e8e0d4" stroke="#9a7b4f" strokeWidth="2" />
        <motion.path variants={fade} d="M445 78 C410 40 375 28 385 18 C398 8 425 40 445 70" fill="#e8e0d4" stroke="#9a7b4f" strokeWidth="2" />
        <motion.path variants={fade} d="M505 72 C545 38 580 28 570 16 C555 6 530 40 510 68" fill="#e8e0d4" stroke="#9a7b4f" strokeWidth="2" />
        <motion.ellipse variants={fade} cx="500" cy="95" rx="7" ry="5" fill="#2c3a4a" stroke="#9a7b4f" strokeWidth="1.2" />
        <motion.path variants={fade} d="M455 125 L490 142 L520 128 L512 152 L488 160 L462 150 Z" fill="#e8e0d4" stroke="#9a7b4f" strokeWidth="1.8" />
        <motion.path variants={fade} d="M430 140 L400 165 L415 170 L440 148 Z" fill="#e8e0d4" stroke="#9a7b4f" strokeWidth="1.8" />
        <motion.path variants={fade} d="M400 168 L160 185" fill="none" stroke="#e8e0d4" strokeWidth="7" strokeLinecap="round" />
        <motion.path variants={fade} d="M390 175 Q320 210 250 205 Q200 215 165 195" fill="none" stroke="#9a7b4f" strokeWidth="2" />
        <motion.path variants={fade} d="M385 185 Q315 225 245 220 Q200 230 170 205" fill="none" stroke="#9a7b4f" strokeWidth="2" />
        <motion.path variants={fade} d="M380 195 Q310 240 240 235 Q195 245 172 215" fill="none" stroke="#9a7b4f" strokeWidth="2" />
        <motion.path variants={fade} d="M375 205 Q305 252 235 248 Q190 255 174 225" fill="none" stroke="#9a7b4f" strokeWidth="1.6" />
        <motion.path variants={fade} d="M160 185 L95 200 L105 215 L170 198 Z" fill="#e8e0d4" stroke="#9a7b4f" strokeWidth="2" />
        <motion.path variants={fade} d="M100 205 Q70 230 85 255 Q110 250 120 225 Z" fill="#e8e0d4" stroke="#9a7b4f" strokeWidth="2" />
        <motion.path variants={fade} d="M360 175 L350 230 L365 232 L372 178 Z" fill="#e8e0d4" stroke="#9a7b4f" strokeWidth="1.8" />
        <motion.path variants={fade} d="M352 230 L340 280 L358 282 L362 232 Z" fill="#e8e0d4" stroke="#9a7b4f" strokeWidth="1.8" />
        <motion.path variants={fade} d="M342 280 L335 310 L355 310 L356 282 Z" fill="#e8e0d4" stroke="#9a7b4f" strokeWidth="1.8" />
        <motion.path variants={fade} d="M320 178 L305 232 L320 234 L332 180 Z" fill="#e8e0d4" stroke="#9a7b4f" strokeWidth="1.8" />
        <motion.path variants={fade} d="M308 232 L298 282 L316 284 L320 234 Z" fill="#e8e0d4" stroke="#9a7b4f" strokeWidth="1.8" />
        <motion.path variants={fade} d="M300 282 L292 310 L314 310 L314 284 Z" fill="#e8e0d4" stroke="#9a7b4f" strokeWidth="1.8" />
        <motion.path variants={fade} d="M200 198 L185 250 L202 252 L212 200 Z" fill="#e8e0d4" stroke="#9a7b4f" strokeWidth="1.8" />
        <motion.path variants={fade} d="M188 250 L178 300 L198 300 L200 252 Z" fill="#e8e0d4" stroke="#9a7b4f" strokeWidth="1.8" />
        <motion.path variants={fade} d="M180 300 L172 325 L196 325 L196 300 Z" fill="#e8e0d4" stroke="#9a7b4f" strokeWidth="1.8" />
        <motion.path variants={fade} d="M155 205 L135 255 L152 258 L165 208 Z" fill="#e8e0d4" stroke="#9a7b4f" strokeWidth="1.8" />
        <motion.path variants={fade} d="M138 255 L128 305 L148 305 L150 258 Z" fill="#e8e0d4" stroke="#9a7b4f" strokeWidth="1.8" />
        <motion.path variants={fade} d="M130 305 L122 328 L148 328 L146 305 Z" fill="#e8e0d4" stroke="#9a7b4f" strokeWidth="1.8" />
        <motion.path variants={fade} d="M100 215 Q55 245 40 285" fill="none" stroke="#e8e0d4" strokeWidth="3.5" strokeLinecap="round" />
      </motion.g>
    </svg>
  )
}

export default function Ossein() {
  const [ghost, setGhost] = useState(true)

  return (
    <div className="th-ossein">
      <div className="ossein-cabinet" aria-hidden="true" />
      <div className="ossein-wrap">
        <header className="ossein-head">
          <p className="ossein-kicker">Substance 03 · Ossein · Mineral scaffold</p>
          <h1 className="ossein-h1">
            Under the hide,
            <span> a white machine</span>
          </h1>
          <p className="ossein-lead">
            Osteology treats the ox as architecture: horn cores, fused metacarpals, a pelvis wide
            enough for calving. What industry calls &quot;bone&quot; is collagen lattice and
            calcium phosphate — buttons, glue, and field meal waiting in the cabinet.
          </p>
          <button
            type="button"
            className={`ossein-toggle${ghost ? ' is-on' : ''}`}
            aria-pressed={ghost}
            onClick={() => setGhost((v) => !v)}
          >
            {ghost ? 'Muscle ghost on' : 'Muscle ghost off'}
          </button>
        </header>
        <div className="ossein-stage">
          <SkeletonOx showGhost={ghost} />
          <p className="ossein-cap">Articulated Bos · lateral aspect · cabinet light</p>
        </div>
        <aside className="ossein-side">
          <ul className="ossein-list">
            {BONES.map((b) => (
              <li key={b.n}>
                <strong>{b.n}</strong>
                <span>{b.d}</span>
              </li>
            ))}
          </ul>
          <div className="ossein-trays">
            <div className="ossein-tray">
              <span className="ossein-tray-t">Buttons</span>
              <svg viewBox="0 0 80 40" aria-hidden="true" focusable="false">
                <circle cx="18" cy="20" r="10" fill="#e8e0d4" stroke="#9a7b4f" />
                <circle cx="18" cy="20" r="3" fill="#2c3a4a" />
                <circle cx="42" cy="20" r="10" fill="#e8e0d4" stroke="#9a7b4f" />
                <circle cx="42" cy="20" r="3" fill="#2c3a4a" />
                <circle cx="66" cy="20" r="10" fill="#e8e0d4" stroke="#9a7b4f" />
                <circle cx="66" cy="20" r="3" fill="#2c3a4a" />
              </svg>
            </div>
            <div className="ossein-tray">
              <span className="ossein-tray-t">Bone meal</span>
              <svg viewBox="0 0 80 40" aria-hidden="true" focusable="false">
                <path d="M10 32 L20 10 H60 L70 32 Z" fill="#c9898a" opacity="0.35" stroke="#9a7b4f" />
                <text x="40" y="28" textAnchor="middle" fill="#e8e0d4" fontSize="8" fontFamily="IBM Plex Sans, sans-serif">
                  P₂O₅
                </text>
              </svg>
            </div>
          </div>
          <div className="ossein-label" role="note">
            <p>
              Spec. No. OX-441 · India ink
              <b>SET IX · DESIGNED BY GROK 4.5</b>
            </p>
          </div>
        </aside>
      </div>
    </div>
  )
}
