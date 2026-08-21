import { useState } from 'react'
import { motion } from 'framer-motion'
import './flehmen.css'

const NOTES = [
  {
    id: 'grass',
    name: 'cis-3-Hexenol',
    note: 'Cut pasture',
    copy: 'The green leaf volatile. A scythe, a mouthful, the field announcing itself before the tongue arrives.',
  },
  {
    id: 'earth',
    name: 'Geosmin',
    note: 'Wet soil',
    copy: 'Petrichor’s backbone. After rain the paddock writes its name in the air at parts per trillion.',
  },
  {
    id: 'barn',
    name: '4-Methylphenol',
    note: 'Yard & hide',
    copy: 'The warm phenolic of dung and coat. To us a barn. To the ox, a census of who stood here.',
  },
  {
    id: 'kin',
    name: 'Androstenone',
    note: 'Kin & rut',
    copy: 'A steroid the vomeronasal organ reads as rank and readiness. The lip curls to pump it home.',
  },
]

function Muzzle() {
  return (
    <svg className="flehmen-muzzle" viewBox="0 0 540 680" aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id="flehmen-coat" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#4a2018" />
          <stop offset="40%" stopColor="#8a4a32" />
          <stop offset="100%" stopColor="#c48a62" />
        </linearGradient>
        <linearGradient id="flehmen-horn" x1="0" y1="0" x2="0.2" y2="1">
          <stop offset="0%" stopColor="#f4e8c8" />
          <stop offset="100%" stopColor="#b8a078" />
        </linearGradient>
        <radialGradient id="flehmen-pad" cx="50%" cy="40%" r="70%">
          <stop offset="0%" stopColor="#f0c8bc" />
          <stop offset="100%" stopColor="#c4887c" />
        </radialGradient>
      </defs>
      <path
        d="M188 176 C78 170 -20 100 18 24 C56 -8 112 40 132 92 C148 128 172 158 198 178 Z"
        fill="url(#flehmen-horn)"
        stroke="#2a1020"
        strokeWidth="4"
      />
      <path
        d="M352 176 C462 170 560 100 522 24 C484 -8 428 40 408 92 C392 128 368 158 342 178 Z"
        fill="url(#flehmen-horn)"
        stroke="#2a1020"
        strokeWidth="4"
      />
      <ellipse cx="196" cy="172" rx="18" ry="12" fill="#d8c49a" stroke="#2a1020" strokeWidth="2.5" />
      <ellipse cx="344" cy="172" rx="18" ry="12" fill="#d8c49a" stroke="#2a1020" strokeWidth="2.5" />
      <path d="M142 188 C64 214 42 286 102 312 C148 286 176 236 184 204 Z" fill="#5a3020" stroke="#2a1020" strokeWidth="3.5" />
      <path d="M398 188 C476 214 498 286 438 312 C392 286 364 236 356 204 Z" fill="#5a3020" stroke="#2a1020" strokeWidth="3.5" />
      <path d="M154 228 C132 236 124 258 146 270" fill="#e8a898" />
      <path d="M386 228 C408 236 416 258 394 270" fill="#e8a898" />
      <path
        d="M270 92 C168 98 118 178 126 278 C132 368 168 458 214 536 C236 572 256 604 270 604 C284 604 304 572 326 536 C372 458 408 368 414 278 C422 178 372 98 270 92 Z"
        fill="url(#flehmen-coat)"
        stroke="#2a1020"
        strokeWidth="4"
      />
      <path d="M196 168 Q270 138 344 168 Q322 218 270 226 Q218 218 196 168 Z" fill="#6a3424" opacity="0.45" />
      <ellipse cx="176" cy="262" rx="24" ry="15" fill="#1a0810" transform="rotate(-16 176 262)" />
      <ellipse cx="364" cy="262" rx="24" ry="15" fill="#1a0810" transform="rotate(16 364 262)" />
      <ellipse cx="172" cy="260" rx="7" ry="7" fill="#3a1020" />
      <ellipse cx="368" cy="260" rx="7" ry="7" fill="#3a1020" />
      <circle cx="168" cy="256" r="2.2" fill="#f3dce8" />
      <circle cx="364" cy="256" r="2.2" fill="#f3dce8" />
      <path
        className="flehmen-lip"
        d="M176 392 C214 348 240 332 270 332 C300 332 326 348 364 392 C348 418 308 438 270 442 C232 438 192 418 176 392 Z"
        fill="#6e2a3c"
        stroke="#2a1020"
        strokeWidth="3"
      />
      <path d="M204 400 Q270 424 336 400 Q310 456 270 460 Q230 456 204 400 Z" fill="url(#flehmen-pad)" />
      <path d="M222 410 Q270 428 318 410" fill="none" stroke="#a06058" strokeWidth="2" />
      <ellipse className="flehmen-naris" cx="228" cy="512" rx="24" ry="30" fill="#1a0810" />
      <ellipse className="flehmen-naris" cx="312" cy="512" rx="24" ry="30" fill="#1a0810" />
      <path d="M228 498 Q242 512 228 528" fill="none" stroke="#c49084" strokeWidth="2" />
      <path d="M312 498 Q298 512 312 528" fill="none" stroke="#c49084" strokeWidth="2" />
      <path d="M238 572 Q270 586 302 572" fill="none" stroke="#2a1020" strokeWidth="3" strokeLinecap="round" />
      <path d="M206 612 Q270 662 334 612 Q304 640 270 644 Q236 640 206 612 Z" fill="#6a3424" stroke="#2a1020" strokeWidth="3" />
    </svg>
  )
}

function Molecule({ active }) {
  return (
    <svg className={`flehmen-mol ${active ? 'is-on' : ''}`} viewBox="0 0 80 80" aria-hidden="true" focusable="false">
      <g fill="none" stroke="currentColor" strokeWidth="2.4">
        <circle cx="22" cy="40" r="8" />
        <circle cx="40" cy="22" r="8" />
        <circle cx="58" cy="40" r="8" />
        <circle cx="40" cy="58" r="8" />
        <path d="M28 34 L34 28 M46 28 L52 34 M52 46 L46 52 M34 52 L28 46" />
      </g>
      <circle cx="40" cy="40" r="5" fill="currentColor" />
    </svg>
  )
}

export default function Flehmen() {
  const [active, setActive] = useState(NOTES[0].id)
  const current = NOTES.find((n) => n.id === active) || NOTES[0]

  return (
    <div className="th-flehmen">
      <div className="flehmen-veil" aria-hidden="true">
        {Array.from({ length: 18 }).map((_, i) => (
          <motion.span
            key={i}
            className="flehmen-mote"
            style={{ left: `${(i * 17) % 100}%`, animationDelay: `${i * 0.35}s` }}
            animate={{ y: [0, -24, 0], opacity: [0.15, 0.7, 0.15] }}
            transition={{ duration: 5 + (i % 4), repeat: Infinity, ease: 'easeInOut', delay: i * 0.2 }}
          />
        ))}
      </div>
      <div className="flehmen-grid">
        <figure className="flehmen-figure">
          <Muzzle />
          <figcaption>
            Upper lip retracted. Nostrils narrowed. The dental pad — cattle have no upper incisors —
            is offered to the air.
          </figcaption>
        </figure>
        <main className="flehmen-main">
          <p className="flehmen-kicker">
            Olfaction · <span lang="de">Flehmen</span> · VNO
          </p>
          <h1 className="flehmen-h1">The lip that reads the air</h1>
          <p className="flehmen-lead">
            From German <span lang="de">flehmen</span>, to bare the upper mouth. The ox is not
            grimacing. The curl closes the nostrils and pumps a sample into Jacobson’s organ — a
            second nose wired for pheromone, estrus, the iron of a neighbour’s breath. Smell is
            not atmosphere here. It is correspondence.
          </p>
          <div className="flehmen-notes" role="list">
            {NOTES.map((n) => (
              <button
                key={n.id}
                type="button"
                role="listitem"
                className={`flehmen-note${n.id === active ? ' is-active' : ''}`}
                aria-pressed={n.id === active}
                onClick={() => setActive(n.id)}
              >
                <Molecule active={n.id === active} />
                <span>
                  <b>{n.name}</b>
                  {n.note}
                </span>
              </button>
            ))}
          </div>
          <article className="flehmen-card">
            <p className="flehmen-card-k">{current.note}</p>
            <h2>{current.name}</h2>
            <p>{current.copy}</p>
          </article>
          <div className="flehmen-vial" role="note">
            <span className="flehmen-vial-glass" aria-hidden="true" />
            <p>
              Sample blotter 02
              <b>SET VII · DESIGNED BY GROK 4.6</b>
            </p>
          </div>
        </main>
      </div>
    </div>
  )
}
