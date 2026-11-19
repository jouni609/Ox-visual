import { useState } from 'react'
import { motion } from 'framer-motion'
import './taurine.css'

const MODES = [
  { id: 'all', label: '01 · Full Cutaway' },
  { id: 'nuchal', label: '02 · Nuchal & Spine' },
  { id: 'vectors', label: '03 · Force Vectors' },
]

const CALLOUTS = [
  {
    id: 'horn',
    code: 'A1',
    title: 'Pneumatic Horn Core',
    metric: 'Hollow frontal sinus',
    x: 248,
    y: 136,
    note: 'A bull’s horn is a permanent extension of the frontal bone sheathed in keratin; air-filled sinus cavities lighten the skull while stiffening impact resistance.',
  },
  {
    id: 'ligament',
    code: 'B2',
    title: 'Ligamentum Nuchae',
    metric: '80% elastin cable',
    x: 382,
    y: 156,
    note: 'This thick yellow elastic suspension cable bridges the occiput to the tall thoracic spines, counterbalancing the heavy horned head without burning muscle ATP.',
  },
  {
    id: 'withers',
    code: 'C3',
    title: 'Thoracic Withers Lever',
    metric: '34 cm neural spines',
    x: 486,
    y: 158,
    note: 'Elongated dorsal spines on thoracic vertebrae T1 through T6 form a biological crane mast, giving the neck ligament and shoulder muscles maximum mechanical advantage.',
  },
  {
    id: 'hoof',
    code: 'D4',
    title: 'Cloven Fulcrum',
    metric: 'Dual-digit load split',
    x: 418,
    y: 472,
    note: 'Weight transfers vertically through fused metacarpal cannon bones into paired keratinized digits that splay under load for traction on wet turf and clay.',
  },
]

export default function Taurine() {
  const [mode, setMode] = useState('all')
  const [selectedId, setSelectedId] = useState('ligament')
  const activeCallout = CALLOUTS.find((c) => c.id === selectedId) || CALLOUTS[1]

  const showAnatomy = mode === 'all' || mode === 'nuchal'
  const showVectors = mode === 'all' || mode === 'vectors'

  return (
    <div className="th-vantage-taurine ox-vantage-tau-root">
      <div className="ox-vantage-tau-sheet">
        <header className="ox-vantage-tau-header">
          <div className="ox-vantage-tau-titlecol">
            <p className="ox-vantage-tau-doccode">DWG NO. BOV-04 · BIOMECHANICS &amp; OSTEOLOGY · SCALE 1:12</p>
            <h1 className="ox-vantage-tau-h1">TAURINE</h1>
          </div>

          <div className="ox-vantage-tau-modes" role="group" aria-label="Blueprint layer display mode">
            {MODES.map((m) => (
              <button
                key={m.id}
                type="button"
                className={`ox-vantage-tau-mbtn ${mode === m.id ? 'is-active' : ''}`}
                onClick={() => setMode(m.id)}
                aria-pressed={mode === m.id}
              >
                {m.label}
              </button>
            ))}
          </div>
        </header>

        <section className="ox-vantage-tau-board">
          <svg
            className="ox-vantage-tau-svg"
            viewBox="0 0 1120 540"
            role="img"
            aria-label="Technical biomechanical blueprint of a standing domestic bull in full left-facing profile, displaying all four cloven-hoofed legs and a cutaway of its yellow elastic nuchal ligament, cervical spine, tall thoracic withers spines, and pneumatic horn core"
          >
            <defs>
              <pattern id="ox-vantage-tau-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#1E7CC8" strokeWidth="0.6" opacity="0.22" />
              </pattern>
              <linearGradient id="ox-vantage-tau-body" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#143B69" />
                <stop offset="55%" stopColor="#0E2C52" />
                <stop offset="100%" stopColor="#081C36" />
              </linearGradient>
              <linearGradient id="ox-vantage-tau-far" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#26548A" />
                <stop offset="100%" stopColor="#16365E" />
              </linearGradient>
              <marker id="ox-vantage-tau-arrow" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 1 L 10 5 L 0 9 z" fill="#E04632" />
              </marker>
            </defs>

            <rect x="0" y="0" width="1120" height="540" fill="url(#ox-vantage-tau-grid)" />

            <g stroke="#0B2545" strokeWidth="1" opacity="0.45">
              <line x1="72" y1="88" x2="72" y2="486" />
              <line x1="62" y1="88" x2="82" y2="88" />
              <line x1="62" y1="188" x2="82" y2="188" />
              <line x1="62" y1="288" x2="82" y2="288" />
              <line x1="62" y1="388" x2="82" y2="388" />
              <line x1="62" y1="486" x2="1050" y2="486" strokeWidth="1.8" />
            </g>
            <g fill="#0B2545" fontSize="11" fontFamily="DM Mono, monospace" opacity="0.72">
              <text x="20" y="92">160 cm</text>
              <text x="20" y="192">120 cm</text>
              <text x="26" y="292">80 cm</text>
              <text x="26" y="392">40 cm</text>
              <text x="34" y="490">0 cm</text>
              <text x="942" y="508">DATUM BASELINE</text>
            </g>

            <motion.line
              x1="0"
              y1="56"
              x2="0"
              y2="486"
              stroke="#1E7CC8"
              strokeWidth="1.2"
              strokeDasharray="5 5"
              opacity="0.35"
              animate={{ x: [140, 960, 140] }}
              transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
            />

            <g>
              <path
                d="M 352 332 L 348 404 L 344 466 L 368 466 L 374 404 L 388 336 Z"
                fill="url(#ox-vantage-tau-far)"
              />
              <path d="M 338 464 L 356 464 L 354 486 L 330 486 Z" fill="#0A1B33" />
              <path d="M 358 464 L 370 464 L 368 484 L 356 484 Z" fill="#1E3F6B" />

              <path
                d="M 730 330 L 748 402 L 738 466 L 762 466 L 774 398 L 764 326 Z"
                fill="url(#ox-vantage-tau-far)"
              />
              <path d="M 732 464 L 750 464 L 748 486 L 724 486 Z" fill="#0A1B33" />
              <path d="M 752 464 L 764 464 L 762 484 L 750 484 Z" fill="#1E3F6B" />

              <path
                d="M 852 178 C 882 196 888 264 886 356"
                fill="none"
                stroke="#0B2545"
                strokeWidth="8"
                strokeLinecap="round"
              />
              <path
                d="M 886 348 C 874 366 874 392 886 410 C 898 392 900 366 890 348 Z"
                fill="#0B2545"
              />

              <path
                d="M 284 140 C 244 134 216 116 206 86 C 222 104 248 118 286 122 Z"
                fill="#9BC2E3"
                stroke="#0B2545"
                strokeWidth="2"
              />

              <path
                d="M 294 148 C 328 134 374 128 424 124 C 464 120 494 122 536 138 C 602 148 688 150 778 152 C 824 154 854 170 864 208 C 874 248 866 306 846 354 L 856 406 L 840 466 L 812 466 L 826 404 L 800 356 C 756 340 704 344 640 364 C 572 376 494 372 444 358 L 434 410 L 432 466 L 404 466 L 406 408 L 392 356 C 344 360 314 334 294 282 C 276 286 240 292 214 282 C 194 274 188 254 196 236 L 238 182 C 254 162 272 152 294 148 Z"
                fill="url(#ox-vantage-tau-body)"
                stroke="#071930"
                strokeWidth="2.8"
                strokeLinejoin="round"
              />

              <path
                d="M 304 296 C 324 328 352 346 382 352"
                fill="none"
                stroke="#1E7CC8"
                strokeWidth="2"
                strokeLinecap="round"
                opacity="0.45"
              />

              <path
                d="M 304 176 C 324 172 346 178 354 194 C 338 202 318 198 302 188 Z"
                fill="#164073"
                stroke="#071930"
                strokeWidth="2.2"
              />

              <path
                d="M 294 156 C 250 152 222 132 214 98 C 232 118 258 134 296 138 Z"
                fill="#E3EEF8"
                stroke="#071930"
                strokeWidth="2.4"
                strokeLinejoin="round"
              />

              <path
                d="M 224 232 C 208 232 194 244 192 260 C 190 276 204 286 220 284 C 232 282 238 268 236 252 C 235 240 230 232 224 232 Z"
                fill="#071629"
                stroke="#1E7CC8"
                strokeWidth="1.4"
              />
              <ellipse cx="206" cy="256" rx="5.5" ry="3.6" transform="rotate(24 206 256)" fill="#030A14" />
              <ellipse cx="256" cy="196" rx="7.5" ry="5" fill="#F6F9FC" />
              <circle cx="255" cy="196" r="3.4" fill="#071629" />

              <path d="M 398 464 L 416 464 L 414 486 L 390 486 Z" fill="#071426" />
              <path d="M 418 464 L 434 464 L 432 485 L 416 485 Z" fill="#1C3F6E" />
              <path d="M 806 464 L 824 464 L 822 486 L 798 486 Z" fill="#071426" />
              <path d="M 826 464 L 842 464 L 840 485 L 824 485 Z" fill="#1C3F6E" />

              {showAnatomy && (
                <g>
                  <path
                    d="M 308 156 C 344 134 436 126 520 138 C 606 150 698 156 766 168 C 770 198 756 226 716 232 C 626 244 532 240 448 254 C 388 264 342 258 318 234 C 304 220 302 204 352 198 C 362 184 342 164 308 156 Z"
                    fill="#F6F9FC"
                    fillOpacity="0.93"
                    stroke="#1E7CC8"
                    strokeWidth="2"
                    strokeDasharray="6 4"
                  />

                  <path
                    d="M 284 144 C 258 140 240 130 228 114 C 244 124 264 132 288 136 Z"
                    fill="#1E7CC8"
                    opacity="0.7"
                  />

                  <path
                    d="M 318 208 C 338 220 356 238 388 242 C 426 248 456 224 494 212 C 562 194 644 196 742 204"
                    fill="none"
                    stroke="#0B2545"
                    strokeWidth="11"
                    strokeLinecap="round"
                    strokeDasharray="16 6"
                  />

                  {[
                    { x: 462, top: 138, bot: 214 },
                    { x: 482, top: 136, bot: 210 },
                    { x: 502, top: 140, bot: 206 },
                    { x: 522, top: 146, bot: 202 },
                    { x: 542, top: 152, bot: 200 },
                    { x: 562, top: 158, bot: 198 },
                  ].map((spine) => (
                    <line
                      key={spine.x}
                      x1={spine.x}
                      y1={spine.top}
                      x2={spine.x - 10}
                      y2={spine.bot}
                      stroke="#1E7CC8"
                      strokeWidth="6"
                      strokeLinecap="round"
                    />
                  ))}

                  <path
                    d="M 358 158 L 368 234 M 390 152 L 414 234 M 420 148 L 444 224 M 450 144 L 464 214"
                    stroke="#F5A623"
                    strokeWidth="3.2"
                    opacity="0.65"
                  />
                  <path
                    d="M 312 162 Q 394 144 486 140 Q 574 148 678 176"
                    fill="none"
                    stroke="#F5A623"
                    strokeWidth="9.5"
                    strokeLinecap="round"
                  />
                  <motion.path
                    d="M 312 162 Q 394 144 486 140 Q 574 148 678 176"
                    fill="none"
                    stroke="#FFF4D4"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    strokeDasharray="14 26"
                    animate={{ strokeDashoffset: [80, 0] }}
                    transition={{ duration: 2.2, repeat: Infinity, ease: 'linear' }}
                  />
                </g>
              )}

              {showVectors && (
                <g>
                  <line
                    x1="216"
                    y1="296"
                    x2="216"
                    y2="372"
                    stroke="#E04632"
                    strokeWidth="3"
                    markerEnd="url(#ox-vantage-tau-arrow)"
                  />
                  <text x="128" y="344" fill="#E04632" fontSize="12" fontWeight="700" fontFamily="DM Mono, monospace">
                    42 kg HEAD
                  </text>

                  <line
                    x1="468"
                    y1="104"
                    x2="314"
                    y2="112"
                    stroke="#E04632"
                    strokeWidth="3"
                    markerEnd="url(#ox-vantage-tau-arrow)"
                  />
                  <text x="330" y="94" fill="#E04632" fontSize="12" fontWeight="700" fontFamily="DM Mono, monospace">
                    ELASTIC TENSION · 2.1 kN
                  </text>

                  <line
                    x1="418"
                    y1="444"
                    x2="418"
                    y2="516"
                    stroke="#E04632"
                    strokeWidth="2.6"
                    markerEnd="url(#ox-vantage-tau-arrow)"
                  />
                  <text x="434" y="514" fill="#E04632" fontSize="12" fontWeight="700" fontFamily="DM Mono, monospace">
                    62% FOREHAND LOAD
                  </text>
                </g>
              )}

              {CALLOUTS.map((pin) => {
                const isSelected = pin.id === selectedId
                return (
                  <g
                    key={pin.id}
                    className="ox-vantage-tau-pin"
                    onClick={() => setSelectedId(pin.id)}
                    role="button"
                    tabIndex={0}
                    aria-label={`Inspect ${pin.title}`}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault()
                        setSelectedId(pin.id)
                      }
                    }}
                  >
                    <circle
                      cx={pin.x}
                      cy={pin.y}
                      r={isSelected ? 17 : 13}
                      fill={isSelected ? '#E04632' : '#0B2545'}
                      stroke="#F6F9FC"
                      strokeWidth="2.5"
                    />
                    <text
                      x={pin.x}
                      y={pin.y + 4}
                      textAnchor="middle"
                      fill="#F6F9FC"
                      fontSize="10"
                      fontWeight="700"
                      fontFamily="DM Mono, monospace"
                    >
                      {pin.code}
                    </text>
                  </g>
                )
              })}
            </g>
          </svg>
        </section>

        <section className="ox-vantage-tau-lower">
          <div className="ox-vantage-tau-index" role="tablist" aria-label="Anatomical callout pins">
            {CALLOUTS.map((c) => (
              <button
                key={c.id}
                type="button"
                role="tab"
                aria-selected={selectedId === c.id}
                className={`ox-vantage-tau-cbtn ${selectedId === c.id ? 'is-selected' : ''}`}
                onClick={() => setSelectedId(c.id)}
              >
                <span className="ox-vantage-tau-code">{c.code}</span>
                <span>{c.title}</span>
              </button>
            ))}
          </div>

          <article className="ox-vantage-tau-spec">
            <div className="ox-vantage-tau-spec-head">
              <h2>
                {activeCallout.code} — {activeCallout.title}
              </h2>
              <span className="ox-vantage-tau-badge">{activeCallout.metric}</span>
            </div>
            <p>{activeCallout.note}</p>
          </article>

          <aside className="ox-vantage-tau-titleblock" aria-label="Engineering drawing title block signature">
            <div className="ox-vantage-tau-tb-row">
              <span>SUBJECT</span>
              <strong>BOS TAURUS · NECK SUSPENSION</strong>
            </div>
            <div className="ox-vantage-tau-tb-row">
              <span>PROJECTION</span>
              <strong>LEFT ORTHOGRAPHIC SECTION</strong>
            </div>
            <div className="ox-vantage-tau-tb-sig">SET XXXVI · DESIGNED BY GEMINI 4 NEON</div>
          </aside>
        </section>
      </div>
    </div>
  )
}
