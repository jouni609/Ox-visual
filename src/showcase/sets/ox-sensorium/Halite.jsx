import { useState } from 'react'
import { motion } from 'framer-motion'
import './halite.css'

const MINERALS = [
  { id: 'na', sym: 'Na', name: 'Sodium', why: 'The rumen’s oldest debt. Nerve, thirst, the will to walk for a block.' },
  { id: 'co', sym: 'Co', name: 'Cobalt', why: 'For B12 the flora cannot mint without it. Blood that carries the rest.' },
  { id: 'se', sym: 'Se', name: 'Selenium', why: 'Muscle that does not seize. White-muscle country is a map of missing Se.' },
  { id: 'i', sym: 'I', name: 'Iodine', why: 'The thyroid’s ration. A lick is cheaper than a goitre.' },
  { id: 'zn', sym: 'Zn', name: 'Zinc', why: 'Hoof horn, hide repair, the enzymes of a working hide.' },
]

function Cathedral() {
  return (
    <svg className="halite-svg" viewBox="-40 0 700 560" aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id="halite-facet-a" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ffe0e6" />
          <stop offset="50%" stopColor="#e08ba0" />
          <stop offset="100%" stopColor="#9b2242" />
        </linearGradient>
        <linearGradient id="halite-facet-b" x1="1" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f7c4ce" />
          <stop offset="100%" stopColor="#7a1834" />
        </linearGradient>
        <linearGradient id="halite-ox" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#5c4030" />
          <stop offset="100%" stopColor="#2a1810" />
        </linearGradient>
        <radialGradient id="halite-glow" cx="50%" cy="30%" r="60%">
          <stop offset="0%" stopColor="#fff5f7" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#e08ba0" stopOpacity="0" />
        </radialGradient>
      </defs>
      <ellipse cx="340" cy="500" rx="240" ry="22" fill="#2a1810" opacity="0.16" />
      <g className="halite-block">
        <polygon points="360,36 490,120 490,300 360,380 230,300 230,120" fill="url(#halite-facet-a)" stroke="#7a1834" strokeWidth="3" />
        <polygon points="360,36 490,120 360,196 230,120" fill="#fff0f3" opacity="0.55" />
        <polygon points="490,120 490,300 360,380 360,196" fill="url(#halite-facet-b)" />
        <polygon points="292,90 388,68 430,140 340,176" fill="#fff" opacity="0.25" />
        <polygon points="280,230 350,268 326,330 246,280" fill="#9b2242" opacity="0.35" />
        <g className="halite-glints">
          <path d="M340 88 L348 108 L328 102 Z" fill="#fff" />
          <path d="M428 176 L438 198 L412 190 Z" fill="#fff" opacity="0.8" />
          <path d="M268 156 L278 174 L256 168 Z" fill="#fff" opacity="0.7" />
        </g>
      </g>
      <g className="halite-oxg">
        <path d="M86 390 C60 330 110 300 170 318 C250 300 310 330 318 376 C326 430 250 460 150 454 C90 450 80 424 86 390 Z" fill="url(#halite-ox)" stroke="#2a1810" strokeWidth="3" />
        <path d="M70 368 C40 328 68 298 112 318 C138 332 136 368 110 386 C86 402 70 392 70 368 Z" fill="url(#halite-ox)" stroke="#2a1810" strokeWidth="3" />
        <path d="M48 328 C-20 260 -56 304 6 360 C22 376 56 360 64 338 Z" fill="#f2d2b0" stroke="#2a1810" strokeWidth="2.5" />
        <ellipse cx="54" cy="336" rx="10" ry="7" fill="#d4c09a" stroke="#2a1810" strokeWidth="1.8" />
        <path d="M28 348 C-8 360 2 392 44 376" fill="none" stroke="#2a1810" strokeWidth="2.5" />
        <path d="M96 318 C118 286 156 292 140 328 Z" fill="#4a3020" stroke="#2a1810" strokeWidth="2.5" />
        <ellipse cx="58" cy="348" rx="7" ry="5" fill="#1a1008" />
        <circle cx="56" cy="347" r="1.8" fill="#f7e9e3" />
        <path className="halite-tongue" d="M96 360 C150 348 210 320 268 278" fill="none" stroke="#e08ba0" strokeWidth="12" strokeLinecap="round" />
        <path d="M96 360 C150 348 210 320 268 278" fill="none" stroke="#9b2242" strokeWidth="3" strokeLinecap="round" opacity="0.35" />
        <path d="M128 448 L128 498 L110 518 L148 518 L144 498 L144 448 Z" fill="#3a2418" stroke="#2a1810" strokeWidth="2" />
        <path d="M176 454 L176 500 L158 520 L196 520 L192 500 L192 454 Z" fill="#3a2418" stroke="#2a1810" strokeWidth="2" />
        <path d="M230 448 L230 498 L212 518 L250 518 L246 498 L246 448 Z" fill="#3a2418" stroke="#2a1810" strokeWidth="2" />
        <path d="M278 454 L278 500 L260 520 L298 520 L294 500 L294 454 Z" fill="#3a2418" stroke="#2a1810" strokeWidth="2" />
        <path d="M110 518 L128 528 L148 518 M158 520 L176 530 L196 520 M212 518 L230 528 L250 518 M260 520 L278 530 L298 520" fill="none" stroke="#2a1810" strokeWidth="3" strokeLinecap="round" />
        <path d="M300 360 C330 332 348 352 328 372 Z" fill="#4a3020" />
      </g>
      <circle cx="360" cy="190" r="130" fill="url(#halite-glow)" className="halite-halo" />
    </svg>
  )
}

export default function Halite() {
  const [min, setMin] = useState(MINERALS[0])

  return (
    <div className="th-halite">
      <div className="halite-sky" aria-hidden="true" />
      <div className="halite-layout">
        <main className="halite-copy">
          <p className="halite-kicker">Taste · Mineral · <span lang="la">Bos taurus</span></p>
          <h1 className="halite-h1">The tongue that mines</h1>
          <p className="halite-lead">
            Sodium is not a seasoning. It is a debt the rumen keeps. On pasture leached by rain the
            ox will walk a mile for a block of salt, licking until the crystal remembers the tongue.
            A lick is a pharmacy the animal administers itself — cobalt for B12, selenium for muscle,
            iodine for the gland that sets the day’s fire.
          </p>
          <ul className="halite-mins">
            {MINERALS.map((m) => (
              <li key={m.id}>
                <button
                  type="button"
                  className={m.id === min.id ? 'is-on' : ''}
                  aria-pressed={m.id === min.id}
                  onClick={() => setMin(m)}
                >
                  <b>{m.sym}</b>
                  {m.name}
                </button>
              </li>
            ))}
          </ul>
          <motion.p className="halite-why" key={min.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <strong>{min.name}.</strong> {min.why}
          </motion.p>
        </main>
        <div className="halite-art">
          <Cathedral />
          <p className="halite-cap">Compressed halite, offered. The tongue is the assay.</p>
        </div>
      </div>
      <aside className="halite-label" role="note">
        <span>Specimen 05 · NaCl + trace</span>
        <b>SET VII · DESIGNED BY GROK 4.6</b>
        <i>Geological survey of appetite</i>
      </aside>
    </div>
  )
}
