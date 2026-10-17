import { useState } from 'react'
import { motion } from 'framer-motion'
import './noria.css'

const CADENCES = [
  {
    id: 'steady',
    name: 'Paso de Huerta (Steady Walk)',
    rpm: '2.4 RPM',
    flow: '4,800 L / hr',
    torque: '640 N·m',
    trackSpeed: '2.8 km / h',
    wheelDuration: 14,
    summary:
      'At a unhurried fifty-two steps per minute around the seven-metre stone track, a single yoked ox raises enough groundwater from a ten-metre well to irrigate three hectares of Valencia orange and pomegranate groves.',
  },
  {
    id: 'peak',
    name: 'Tiro de Estío (Midday Peak)',
    rpm: '3.8 RPM',
    flow: '7,600 L / hr',
    torque: '810 N·m',
    trackSpeed: '4.1 km / h',
    wheelDuration: 7.5,
    summary:
      'When July Sirocco winds parch the terraces, the ox leans its full shoulder mass into the olive-wood sweep beam—emptying thirty-six terracotta arcaduces per minute into the limewashed alberca cistern.',
  },
  {
    id: 'halt',
    name: 'Parada de Sombra (Shaded Rest)',
    rpm: '0.0 RPM',
    flow: 'Cistern Full',
    torque: 'Pawl Locked',
    trackSpeed: 'At Rest',
    wheelDuration: 0,
    summary:
      'The iron wooden pawl (trinquete) drops between the holm-oak cogs to prevent the heavy water column from spinning the beam backward while the ox drinks and ruminates under the fig arbor.',
  },
]

const COMPONENTS = [
  {
    id: 'yugo',
    code: 'I · YUGO CORNAL',
    title: 'Carved Horn & Withers Yoke',
    detail:
      'Hand-adzed from seasoned elm and lashed to the horn bosses with rawhide coyundas, transferring horizontal thrust directly from the ox’s skull and cervical spine into the iron draw-clevis.',
  },
  {
    id: 'mayal',
    code: 'II · MAYAL DE TIRO',
    title: 'Olive-Wood Sweep Beam',
    detail:
      'A curved 3.6-metre lever arm providing a 4.5 : 1 mechanical advantage around the central vertical post, allowing steady bovine walking force to overcome deep static head pressure.',
  },
  {
    id: 'linterna',
    code: 'III · ENGRANAJE DE LINTERNA',
    title: 'Right-Angle Lantern Pinion',
    detail:
      'Thirty-two holm-oak pegs on the horizontal crown wheel mesh at ninety degrees with the vertical lantern drum—converting the ox’s circular path into vertical bucket elevation.',
  },
  {
    id: 'arcaduces',
    code: 'IV · ROSARIO DE ARCADUCES',
    title: 'Terracotta Jar Garland',
    detail:
      'Forty-eight waisted clay pots lashed between twin esparto ropes; each jar carries a base pinhole so the chain drains silently back into the well whenever the ox stops.',
  },
]

export default function Noria() {
  const [cadenceId, setCadenceId] = useState('steady')
  const [activeComp, setActiveComp] = useState('yugo')

  const cadence = CADENCES.find((c) => c.id === cadenceId) || CADENCES[0]

  return (
    <main className="ox-canon-nor-root th-ox-canon-nor">
      <div className="ox-canon-nor-azulejo-border" aria-hidden="true" />

      <header className="ox-canon-nor-header">
        <div className="ox-canon-nor-topmeta">
          <span className="ox-canon-nor-treatise-tag">
            TRATADO DE HIDRÁULICA AGRARIA · HUERTA DE MURCIA &amp; VALENCIA
          </span>
          <span className="ox-canon-nor-coords">WELL DEPTH: 9.5 METRES · TRACK Ø 7.2 METRES</span>
        </div>

        <div className="ox-canon-nor-hero-grid">
          <div>
            <p className="ox-canon-nor-eyebrow">FACET 03 · LABOUR &amp; HYDRAULIC TRACTION</p>
            <h1 className="ox-canon-nor-h1">La Noria de Sangre</h1>
          </div>
          <p className="ox-canon-nor-intro">
            Long before steam pumps, the Mediterranean orchard lived by the circular footfall of the
            draught ox. Hooded in woven esparto blinders to walk an endless seven-metre compass without
            vertigo, one animal turns desert clay into citrus gardens.
          </p>
        </div>

        <div className="ox-canon-nor-cadence-bar" role="group" aria-label="Ox traction cadence">
          <span className="ox-canon-nor-cadence-label">DRAUGHT CADENCE THROTTLE:</span>
          {CADENCES.map((item) => (
            <button
              key={item.id}
              type="button"
              className={`ox-canon-nor-cadence-btn ${cadenceId === item.id ? 'is-active' : ''}`}
              onClick={() => setCadenceId(item.id)}
            >
              <strong>{item.name}</strong>
              <span>{item.flow}</span>
            </button>
          ))}
        </div>
      </header>

      <section className="ox-canon-nor-courtyard">
        <div className="ox-canon-nor-elevation-card">
          <div className="ox-canon-nor-card-head">
            <span>COURTYARD MECHANICAL ELEVATION · OX IN CIRCULAR TRACTION</span>
            <span>DISCHARGE: {cadence.flow} ({cadence.rpm})</span>
          </div>

          <div className="ox-canon-nor-svg-wrap">
            <svg
              viewBox="0 0 960 600"
              className="ox-canon-nor-svg"
              role="img"
              aria-label="A muscular red-roan draught ox in full four-legged walking stride wearing a wooden neck yoke and esparto blinders, pulling the horizontal timber sweep beam of a geared wooden noria water wheel lifting terracotta jars from a stone well."
            >
              <defs>
                <linearGradient id="ox-canon-nor-roan-coat" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#9C3F27" />
                  <stop offset="55%" stopColor="#7A2B18" />
                  <stop offset="100%" stopColor="#4A170B" />
                </linearGradient>
                <linearGradient id="ox-canon-nor-far-limb" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#47180D" />
                  <stop offset="100%" stopColor="#260B05" />
                </linearGradient>
                <linearGradient id="ox-canon-nor-horn-grad" x1="0%" y1="100%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#E6D7BE" />
                  <stop offset="70%" stopColor="#C4B08F" />
                  <stop offset="100%" stopColor="#2E2318" />
                </linearGradient>
                <linearGradient id="ox-canon-nor-water-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#154384" />
                  <stop offset="50%" stopColor="#2668B8" />
                  <stop offset="100%" stopColor="#154384" />
                </linearGradient>
              </defs>

              <rect x="20" y="30" width="920" height="545" rx="8" fill="#FAF6EE" />

              <path
                d="M 55 488 C 210 458, 465 458, 635 488 C 510 532, 185 532, 55 488 Z"
                fill="none"
                stroke="#C9B89C"
                strokeWidth="18"
                strokeDasharray="16 8"
                opacity="0.7"
              />
              <ellipse cx="345" cy="512" rx="285" ry="26" fill="#E5D8C1" opacity="0.65" />

              <g id="ox-canon-nor-well-structure">
                <rect x="665" y="425" width="245" height="115" fill="#D8C8B0" stroke="#3D281A" strokeWidth="2.5" />
                <path
                  d="M 665 452 L 910 452 M 665 482 L 910 482 M 665 512 L 910 512"
                  stroke="#B5A184"
                  strokeWidth="1.5"
                />
                <rect x="735" y="425" width="125" height="115" fill="#0F2A54" stroke="#3D281A" strokeWidth="2.5" />

                <rect x="612" y="72" width="16" height="455" fill="#543824" stroke="#2B1B10" strokeWidth="2.5" />
                <rect x="580" y="64" width="340" height="16" fill="#6B472E" stroke="#2B1B10" strokeWidth="2.5" />

                <ellipse cx="620" cy="182" rx="74" ry="18" fill="#8C5D3C" stroke="#2B1B10" strokeWidth="2.5" />
                {[-56, -40, -24, -8, 8, 24, 40, 56].map((dx) => (
                  <rect
                    key={dx}
                    x={617 + dx}
                    y="158"
                    width="6"
                    height="16"
                    rx="2"
                    fill="#3D281A"
                  />
                ))}
              </g>

              <g id="ox-canon-nor-wheel-system">
                <motion.g
                  style={{ originX: '795px', originY: '235px' }}
                  animate={
                    cadence.wheelDuration > 0 ? { rotate: 360 } : { rotate: 0 }
                  }
                  transition={
                    cadence.wheelDuration > 0
                      ? { duration: cadence.wheelDuration, repeat: Infinity, ease: 'linear' }
                      : { duration: 0.3 }
                  }
                >
                  <circle
                    cx="795"
                    cy="235"
                    r="118"
                    fill="none"
                    stroke="#6B472E"
                    strokeWidth="14"
                  />
                  <circle
                    cx="795"
                    cy="235"
                    r="108"
                    fill="none"
                    stroke="#2B1B10"
                    strokeWidth="2"
                  />
                  {[0, 30, 60, 90, 120, 150].map((deg) => (
                    <line
                      key={deg}
                      x1="795"
                      y1="117"
                      x2="795"
                      y2="353"
                      stroke="#543824"
                      strokeWidth="5"
                      transform={`rotate(${deg} 795 235)`}
                    />
                  ))}
                  <circle cx="795" cy="235" r="22" fill="#3D281A" stroke="#FAF6EE" strokeWidth="2" />
                </motion.g>

                <line x1="620" y1="235" x2="795" y2="235" stroke="#3D281A" strokeWidth="10" />

                <path
                  d="M 748 215 L 748 515 M 842 215 L 842 515"
                  stroke="#8C6F46"
                  strokeWidth="3.5"
                  strokeDasharray="6 4"
                />

                {[155, 225, 295, 365, 435].map((jy, idx) => (
                  <g key={jy}>
                    <path
                      d={`M 736 ${jy} C 732 ${jy + 12}, 734 ${jy + 26}, 748 ${jy + 28} C 762 ${jy + 26}, 764 ${jy + 12}, 760 ${jy} Z`}
                      fill="#C44D2B"
                      stroke="#2B1B10"
                      strokeWidth="2"
                    />
                    <path
                      d={`M 738 ${jy + 3} L 758 ${jy + 3}`}
                      stroke="#3BA3E8"
                      strokeWidth="3"
                    />
                    <path
                      d={`M 830 ${jy + 18} C 826 ${jy + 30}, 828 ${jy + 44}, 842 ${jy + 46} C 856 ${jy + 44}, 858 ${jy + 30}, 854 ${jy + 18} Z`}
                      fill="#C44D2B"
                      stroke="#2B1B10"
                      strokeWidth="2"
                      transform={`rotate(180 842 ${jy + 32})`}
                    />
                    {cadence.wheelDuration > 0 && idx < 3 && (
                      <motion.path
                        d={`M 748 ${jy} C 735 ${jy - 18}, 720 ${jy - 10}, 714 ${jy + 18}`}
                        stroke="#2668B8"
                        strokeWidth="3"
                        fill="none"
                        animate={{ opacity: [0.3, 1, 0.3] }}
                        transition={{ duration: 1.2, repeat: Infinity }}
                      />
                    )}
                  </g>
                ))}
              </g>

              <path
                d="M 248 206 C 365 224, 495 256, 620 262 L 620 278 C 490 272, 362 240, 244 222 Z"
                fill="#7D5233"
                stroke="#2B1B10"
                strokeWidth="2.5"
              />

              <path
                d="M 176 202 C 138 176, 108 136, 118 92 C 122 76, 135 82, 136 98 C 138 134, 160 170, 192 194 Z"
                fill="#B59F7E"
                stroke="#2B1B10"
                strokeWidth="2"
              />

              <g id="ox-canon-nor-far-legs">
                <path
                  d="M 264 388 L 234 452 L 214 506 L 196 528 L 202 538 L 236 538 L 244 508 L 266 456 L 296 396 Z"
                  fill="url(#ox-canon-nor-far-limb)"
                  stroke="#240B04"
                  strokeWidth="2.5"
                />
                <path
                  d="M 196 528 L 216 524 L 216 538 L 199 538 Z M 219 524 L 236 528 L 236 538 L 219 538 Z"
                  fill="#1C140F"
                />

                <path
                  d="M 484 368 L 486 436 L 464 502 L 448 526 L 454 538 L 488 538 L 496 504 L 520 436 L 522 362 Z"
                  fill="url(#ox-canon-nor-far-limb)"
                  stroke="#240B04"
                  strokeWidth="2.5"
                />
                <path
                  d="M 448 526 L 468 522 L 468 538 L 451 538 Z M 471 522 L 488 526 L 488 538 L 471 538 Z"
                  fill="#1C140F"
                />
              </g>

              <path
                d="M 564 178
                   C 588 198, 604 262, 606 346
                   C 608 394, 602 434, 596 456
                   C 610 472, 612 502, 596 518
                   C 580 508, 578 482, 586 456
                   C 592 426, 594 388, 590 340
                   C 586 268, 574 210, 554 190 Z"
                fill="#381208"
                stroke="#240B04"
                strokeWidth="2.2"
              />

              <path
                d="M 70 286
                   C 66 272, 74 258, 92 250
                   C 116 238, 138 220, 160 198
                   C 176 184, 194 176, 214 178
                   C 234 180, 250 184, 268 172
                   C 292 156, 318 144, 352 146
                   C 386 148, 415 162, 456 164
                   C 502 166, 542 160, 568 174
                   C 584 184, 590 212, 580 250
                   C 572 284, 562 320, 554 356
                   C 546 390, 558 418, 572 442
                   L 556 512
                   L 538 536
                   L 544 546
                   L 506 546
                   L 510 530
                   L 526 506
                   L 532 442
                   C 512 414, 492 392, 468 384
                   C 432 404, 388 424, 342 422
                   C 316 420, 304 414, 294 406
                   L 304 462
                   L 306 514
                   L 294 536
                   L 298 546
                   L 262 546
                   L 264 532
                   L 276 508
                   L 272 458
                   L 258 402
                   C 228 408, 198 394, 182 368
                   C 168 348, 162 324, 154 308
                   C 142 308, 118 314, 96 314
                   C 78 314, 72 300, 70 286 Z"
                fill="url(#ox-canon-nor-roan-coat)"
                stroke="#240B04"
                strokeWidth="3"
              />

              <path
                d="M 158 308
                   C 156 342, 174 378, 204 398
                   C 226 412, 250 412, 266 398
                   C 242 378, 220 346, 206 302 Z"
                fill="#5E1E0F"
                stroke="#240B04"
                strokeWidth="2"
              />

              <path
                d="M 262 536 L 280 530 L 280 546 L 262 546 Z M 283 530 L 298 536 L 298 546 L 283 546 Z"
                fill="#1C140F"
              />
              <path
                d="M 506 536 L 524 530 L 524 546 L 506 546 Z M 527 530 L 544 536 L 544 546 L 527 546 Z"
                fill="#1C140F"
              />

              <path
                d="M 70 286 C 76 274, 96 274, 104 286 C 110 298, 102 312, 86 312 C 74 310, 68 298, 70 286 Z"
                fill="#361C14"
                stroke="#1C0B06"
                strokeWidth="2"
              />
              <ellipse cx="86" cy="294" rx="6.5" ry="4" transform="rotate(-18 86 294)" fill="#120603" />

              <path
                d="M 134 224 C 144 216, 156 218, 162 226"
                stroke="#240B04"
                strokeWidth="2.5"
                fill="none"
              />
              <ellipse cx="146" cy="232" rx="7" ry="5" fill="#180904" stroke="#5E1E0F" strokeWidth="1.2" />
              <circle cx="144" cy="230" r="2" fill="#FAF6EE" />

              <ellipse
                cx="166"
                cy="236"
                rx="13"
                ry="11"
                transform="rotate(-15 166 236)"
                fill="#D9B87C"
                stroke="#3D281A"
                strokeWidth="2.2"
              />
              <path
                d="M 155 232 L 177 240 M 158 226 L 174 246 M 166 225 L 198 188"
                stroke="#5C3D24"
                strokeWidth="1.8"
              />

              <path
                d="M 204 202 C 228 196, 252 202, 256 214 C 250 226, 226 228, 204 218 Z"
                fill="#5E1E0F"
                stroke="#240B04"
                strokeWidth="2"
              />

              <path
                d="M 192 206
                   C 150 182, 118 134, 134 82
                   C 140 66, 156 74, 154 94
                   C 150 134, 174 172, 212 196 Z"
                fill="url(#ox-canon-nor-horn-grad)"
                stroke="#240B04"
                strokeWidth="2.5"
              />

              <g id="ox-canon-nor-yoke">
                <path
                  d="M 256 176 L 620 182 L 620 196 L 256 192 Z"
                  fill="#8C5D3C"
                  stroke="#2B1B10"
                  strokeWidth="2.5"
                />
                <path
                  d="M 226 154
                     L 268 148
                     L 278 242
                     L 234 248 Z"
                  fill="#D49B4B"
                  stroke="#2B1B10"
                  strokeWidth="2.8"
                />
                <circle cx="256" cy="186" r="9" fill="#3D281A" stroke="#FAF6EE" strokeWidth="2" />
                <path
                  d="M 206 188 L 252 164 M 208 202 L 256 178 M 242 244 C 244 295, 266 348, 294 378"
                  stroke="#3D281A"
                  strokeWidth="3"
                  fill="none"
                />
              </g>

              <g id="ox-canon-nor-aqueduct">
                <rect x="20" y="552" width="920" height="28" fill="url(#ox-canon-nor-water-grad)" />
                <motion.path
                  d="M 20 564 Q 80 556, 140 564 T 260 564 T 380 564 T 500 564 T 620 564 T 740 564 T 860 564 T 940 564"
                  fill="none"
                  stroke="#8CC6FF"
                  strokeWidth="2.5"
                  animate={
                    cadence.wheelDuration > 0 ? { x: [-120, 0] } : { x: 0 }
                  }
                  transition={
                    cadence.wheelDuration > 0
                      ? { duration: 2.2, repeat: Infinity, ease: 'linear' }
                      : { duration: 0.2 }
                  }
                />
              </g>

              <g fontFamily="Courier Prime, monospace" fontSize="11" fontWeight="700" fill="#154384">
                <text x="195" y="132">I. YUGO CORNAL</text>
                <text x="415" y="212">II. MAYAL (3.6M SWEEP)</text>
                <text x="562" y="142">III. LINTERNA</text>
                <text x="752" y="104">IV. ARCADUCES</text>
              </g>
            </svg>
          </div>

          <div className="ox-canon-nor-card-foot">
            <span>
              TRACK COMPASS: 22.6 METRES PER REVOLUTION · ONE OX WALKS 16.2 KM PER SIX-HOUR SHIFT
            </span>
            <span>TRACTION TORQUE: {cadence.torque}</span>
          </div>
        </div>

        <aside className="ox-canon-nor-treatise-panel">
          <div className="ox-canon-nor-active-shift">
            <span className="ox-canon-nor-shift-kicker">ACTIVE IRRIGATION REGIME</span>
            <h2 className="ox-canon-nor-h2">{cadence.name}</h2>
            <p className="ox-canon-nor-shift-copy">{cadence.summary}</p>
            <div className="ox-canon-nor-shift-stats">
              <div>
                <span>WHEEL CADENCE</span>
                <strong>{cadence.rpm}</strong>
              </div>
              <div>
                <span>WATER DISCHARGE</span>
                <strong>{cadence.flow}</strong>
              </div>
              <div>
                <span>OX TRACK SPEED</span>
                <strong>{cadence.trackSpeed}</strong>
              </div>
              <div>
                <span>BEAM TORQUE</span>
                <strong>{cadence.torque}</strong>
              </div>
            </div>
          </div>

          <div className="ox-canon-nor-comp-list">
            <h3 className="ox-canon-nor-comp-heading">HYDRAULIC TRANSMISSION ANATOMY</h3>
            {COMPONENTS.map((comp) => (
              <button
                key={comp.id}
                type="button"
                className={`ox-canon-nor-comp-item ${activeComp === comp.id ? 'is-active' : ''}`}
                onClick={() => setActiveComp(comp.id)}
              >
                <div className="ox-canon-nor-comp-row">
                  <span className="ox-canon-nor-comp-code">{comp.code}</span>
                  <strong className="ox-canon-nor-comp-title">{comp.title}</strong>
                </div>
                {activeComp === comp.id && (
                  <p className="ox-canon-nor-comp-detail">{comp.detail}</p>
                )}
              </button>
            ))}
          </div>
        </aside>
      </section>

      <footer className="ox-canon-nor-footer">
        <div className="ox-canon-nor-azulejo-tile">
          <div className="ox-canon-nor-tile-ornament" aria-hidden="true">❖</div>
          <div className="ox-canon-nor-tile-body">
            <span className="ox-canon-nor-tile-sub">REAL FÁBRICA DE AZULEJOS · GREMIO DE REGANTES</span>
            <span className="ox-canon-nor-signature">SET XXXV · DESIGNED BY GEMINI 4 ARGON</span>
          </div>
          <div className="ox-canon-nor-tile-ornament" aria-hidden="true">❖</div>
        </div>
      </footer>
    </main>
  )
}
