import { useState } from 'react'
import './pinna.css'

const SOURCES = [
  { id: 'left', label: 'Fly, near flank', az: -50, ear: 'L' },
  { id: 'front', label: 'Voice at the yoke', az: 0, ear: 'both' },
  { id: 'right', label: 'Gate latch, east', az: 55, ear: 'R' },
]

function OxBody({ aim }) {
  const left = aim === 'right' ? -18 : aim === 'left' ? 32 : 8
  const right = aim === 'left' ? 18 : aim === 'right' ? -32 : -8

  return (
    <svg className="pinna-ox" viewBox="0 0 780 460" aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id="pinna-hide" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#8a6240" />
          <stop offset="100%" stopColor="#3e2c1c" />
        </linearGradient>
        <linearGradient id="pinna-ear" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#e8a090" />
          <stop offset="100%" stopColor="#c07068" />
        </linearGradient>
        <linearGradient id="pinna-horn" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#f3ead2" />
          <stop offset="100%" stopColor="#c4b089" />
        </linearGradient>
      </defs>
      <path d="M300 210 C260 150 330 118 390 148 C470 128 560 148 600 200 C640 250 620 310 540 330 C430 360 310 340 280 280 C260 250 270 230 300 210 Z" fill="url(#pinna-hide)" stroke="#1f2a32" strokeWidth="3.5" />
      <path d="M236 230 C200 170 250 130 300 168 C330 190 328 230 310 258 C280 286 244 270 236 230 Z" fill="url(#pinna-hide)" stroke="#1f2a32" strokeWidth="3.5" />
      <path d="M168 210 C110 176 82 132 96 96 C140 88 176 120 204 156 C228 186 236 214 228 236 Z" fill="url(#pinna-hide)" stroke="#1f2a32" strokeWidth="3.5" />
      <path d="M118 128 C40 70 -36 96 12 168 C28 192 78 184 122 150 Z" fill="url(#pinna-horn)" stroke="#1f2a32" strokeWidth="3.5" />
      <ellipse cx="122" cy="142" rx="14" ry="9" fill="#d8c49a" stroke="#1f2a32" strokeWidth="2" />
      <path d="M86 154 C48 176 56 214 96 204" fill="none" stroke="#1f2a32" strokeWidth="3" />
      <ellipse cx="132" cy="168" rx="11" ry="8" fill="#1f2a32" />
      <circle cx="128" cy="166" r="2.4" fill="#f7f3ea" />
      <path d="M188 250 Q228 310 196 332 Q156 292 188 250" fill="#5a4030" />
      <g style={{ transform: `rotate(${left}deg)`, transformOrigin: '228px 148px' }} className="pinna-ear-l">
        <ellipse cx="210" cy="132" rx="58" ry="28" transform="rotate(-28 210 132)" fill="#6a4a32" stroke="#1f2a32" strokeWidth="3" />
        <ellipse cx="210" cy="132" rx="38" ry="16" transform="rotate(-28 210 132)" fill="url(#pinna-ear)" />
      </g>
      <g style={{ transform: `rotate(${right}deg)`, transformOrigin: '258px 136px' }} className="pinna-ear-r">
        <ellipse cx="286" cy="118" rx="62" ry="30" transform="rotate(18 286 118)" fill="#6a4a32" stroke="#1f2a32" strokeWidth="3" />
        <ellipse cx="286" cy="118" rx="40" ry="17" transform="rotate(18 286 118)" fill="url(#pinna-ear)" />
      </g>
      <path d="M328 318 L328 392 L304 418 L352 418 L348 392 L348 318 Z" fill="#4a3424" stroke="#1f2a32" strokeWidth="3" />
      <path d="M400 328 L400 396 L376 422 L424 422 L420 396 L420 328 Z" fill="#4a3424" stroke="#1f2a32" strokeWidth="3" />
      <path d="M488 318 L488 392 L464 418 L512 418 L508 392 L508 318 Z" fill="#4a3424" stroke="#1f2a32" strokeWidth="3" />
      <path d="M556 328 L556 396 L532 422 L580 422 L576 396 L576 328 Z" fill="#4a3424" stroke="#1f2a32" strokeWidth="3" />
      <path d="M304 418 L328 430 L352 418 M376 422 L400 434 L424 422 M464 418 L488 430 L512 418 M532 422 L556 434 L580 422" fill="none" stroke="#1f2a32" strokeWidth="3" strokeLinecap="round" />
      <path d="M590 196 C660 150 710 186 690 230 C650 248 610 230 590 214 Z" fill="#3e2c1c" stroke="#1f2a32" strokeWidth="3.5" />
      <path d="M678 224 C698 250 692 268 668 262" fill="#2a1c14" />
    </svg>
  )
}

function Polar({ az }) {
  const rad = ((az - 90) * Math.PI) / 180
  const x = 100 + 62 * Math.cos(rad)
  const y = 100 + 62 * Math.sin(rad)
  return (
    <svg className="pinna-polar" viewBox="0 0 200 200" aria-hidden="true" focusable="false">
      <circle cx="100" cy="100" r="84" fill="none" stroke="#1f2a32" strokeWidth="1.5" />
      <circle cx="100" cy="100" r="56" fill="none" stroke="#1f2a32" strokeWidth="1" opacity="0.4" />
      <circle cx="100" cy="100" r="28" fill="none" stroke="#1f2a32" strokeWidth="1" opacity="0.4" />
      <path d="M100 16 V184 M16 100 H184" stroke="#1f2a32" strokeWidth="1" opacity="0.35" />
      <g className="pinna-rings">
        <circle cx="100" cy="100" r="20" fill="none" stroke="#d4a017" strokeWidth="1.5" />
        <circle cx="100" cy="100" r="40" fill="none" stroke="#d4a017" strokeWidth="1.2" opacity="0.6" />
        <circle cx="100" cy="100" r="60" fill="none" stroke="#d4a017" strokeWidth="1" opacity="0.35" />
      </g>
      <circle cx={x} cy={y} r="8" fill="#c23b22" stroke="#1f2a32" strokeWidth="2" />
      <text x="100" y="22" textAnchor="middle" fontSize="9" fill="#1f2a32" fontFamily="Oxanium, sans-serif">
        0°
      </text>
    </svg>
  )
}

export default function Pinna() {
  const [src, setSrc] = useState(SOURCES[1])

  return (
    <div className="th-pinna">
      <header className="pinna-top">
        <div className="pinna-sticker" role="note">
          <span>ANECHOIC LAB · CAL 03</span>
          <b>SET VII · DESIGNED BY GROK 4.6</b>
        </div>
        <p className="pinna-kicker">Audition · 20 Hz – 35 kHz</p>
        <h1 className="pinna-h1">Two radars, no committee</h1>
        <p className="pinna-lead">
          Each pinna turns on its own muscle. One ear can hold a fly; the other can hold a voice.
          The range runs from a plough’s thud to a thin 35 kHz — ultrasound we do not share. Hearing
          is not a room the ox sits in. It is two dishes, independently aimed.
        </p>
      </header>
      <div className="pinna-stage">
        <div className="pinna-rings-bg" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
        <OxBody aim={src.id} />
        <div className="pinna-freq" aria-hidden="true">
          {Array.from({ length: 24 }).map((_, i) => (
            <i
              key={i}
              style={{
                height: `${20 + ((i * 37) % 64)}%`,
                animationDelay: `${i * 0.08}s`,
              }}
            />
          ))}
        </div>
      </div>
      <section className="pinna-board">
        <div className="pinna-plot">
          <p>Azimuth</p>
          <Polar az={src.az} />
        </div>
        <div className="pinna-sources">
          {SOURCES.map((s) => (
            <button
              key={s.id}
              type="button"
              className={s.id === src.id ? 'is-on' : ''}
              aria-pressed={s.id === src.id}
              onClick={() => setSrc(s)}
            >
              <em>{s.ear}</em>
              {s.label}
            </button>
          ))}
        </div>
        <dl className="pinna-spec">
          <div>
            <dt>Low bound</dt>
            <dd>20 Hz</dd>
          </div>
          <div>
            <dt>High bound</dt>
            <dd>35 kHz</dd>
          </div>
          <div>
            <dt>Pinna travel</dt>
            <dd>~180°</dd>
          </div>
          <div>
            <dt>Coupling</dt>
            <dd>Independent</dd>
          </div>
        </dl>
      </section>
    </div>
  )
}
