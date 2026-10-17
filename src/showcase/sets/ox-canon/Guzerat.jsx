import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './guzerat.css'

const CONFORMATION_POINTS = [
  {
    id: 'horns',
    code: 'PT-01',
    title: 'Symmetrical Lyre Horns',
    portuguese: 'Chifres em Lira',
    score: '98 / 100',
    measure: '118 cm tip-to-tip arc',
    detail:
      'Emerging wide from a broad sub-convex poll, the horns sweep outward in a double curve—first laterally, then vertically, with dark keratinized tips turning inward to form the classic Guzerat lyre.',
    cx: 162,
    cy: 78,
  },
  {
    id: 'hump',
    code: 'PT-02',
    title: 'Cervico-Thoracic Hump',
    portuguese: 'Cupim Torácico',
    score: '99 / 100',
    measure: '44 cm dorsal elevation',
    detail:
      'Seated squarely over the withers and shaped like a rounded chestnut, the muscular-adipose hump stores lipid reserves and water-binding tissue that sustain the bull through seven-month Sertão droughts.',
    cx: 392,
    cy: 118,
  },
  {
    id: 'dewlap',
    code: 'PT-03',
    title: 'Pleated Pendulous Dewlap',
    portuguese: 'Barbela Pregueada',
    score: '97 / 100',
    measure: '1.8 m² radiative skin fold',
    detail:
      'Draped from the chin to the xiphoid sternum in deep vertical pleats, the vascularized dewlap acts as a biological radiator—dissipating tropical solar heat alongside pendulous spear-tipped ears.',
    cx: 288,
    cy: 378,
  },
  {
    id: 'hide',
    code: 'PT-04',
    title: 'Ash-Silver Coat & Dark Hide',
    portuguese: 'Pelagem Cinza-Azulada',
    score: '96 / 100',
    measure: '1,650 sweat glands / cm²',
    detail:
      'Short, silky steel-grey hair overlies jet-black melanized skin. While the light coat reflects fierce solar radiation, the black dermis blocks ultraviolet burn and secretes tick-repellent sebum.',
    cx: 535,
    cy: 278,
  },
  {
    id: 'quarters',
    code: 'PT-05',
    title: ' Draught Quarters & Cloven Hooves',
    portuguese: 'Garupa e Cascos Negros',
    score: '98 / 100',
    measure: '1,120 kg live ring weight',
    detail:
      'Long, gently sloped sacral croup carried on high-density cannon bones and hard, black-pigmented cloven hooves engineered to walk forty kilometres between seasonal waterholes without splitting.',
    cx: 735,
    cy: 438,
  },
]

const COAT_SHADES = [
  {
    id: 'prata',
    name: 'Cinza Prata (Silver Ash)',
    bodyTop: '#DCE2E8',
    bodyMid: '#9BA6B2',
    bodyDeep: '#4B5563',
    shoulder: '#5E6978',
  },
  {
    id: 'aco',
    name: 'Cinza Aço (Dark Steel)',
    bodyTop: '#B0BAC6',
    bodyMid: '#6E7A8A',
    bodyDeep: '#28303D',
    shoulder: '#394354',
  },
  {
    id: 'alvao',
    name: 'Branco Alvão (Chalk Pearl)',
    bodyTop: '#F4F6F8',
    bodyMid: '#C7CFD9',
    bodyDeep: '#687382',
    shoulder: '#7C8796',
  },
]

export default function Guzerat() {
  const [selectedPoint, setSelectedPoint] = useState('horns')
  const [coatId, setCoatId] = useState('prata')

  const activePoint =
    CONFORMATION_POINTS.find((pt) => pt.id === selectedPoint) || CONFORMATION_POINTS[0]
  const activeCoat = COAT_SHADES.find((c) => c.id === coatId) || COAT_SHADES[0]

  return (
    <main className="ox-canon-guz-root th-ox-canon-guz">
      <div className="ox-canon-guz-arch-bg" aria-hidden="true" />

      <header className="ox-canon-guz-header">
        <div className="ox-canon-guz-ribbon-bar">
          <span className="ox-canon-guz-pavilion-pill">
            EXPOSIÇÃO NACIONAL DO ZEBU · UBERABA — PAVILHÃO CENTRAL
          </span>
          <span className="ox-canon-guz-reg-code">HERDBOOK REG. ABCZ #GZ-4092-BR</span>
        </div>

        <div className="ox-canon-guz-hero-head">
          <div>
            <p className="ox-canon-guz-eyebrow">FACET 02 · BREED STANDARD · BOS INDICUS</p>
            <h1 className="ox-canon-guz-h1">Guzerat: The Lyre-Horned Zebu</h1>
          </div>
          <div className="ox-canon-guz-rosette-card">
            <div className="ox-canon-guz-rosette-medal" aria-hidden="true">
              <span>GRANDE</span>
              <strong>CAMPEÃO</strong>
              <span>1,120 KG</span>
            </div>
            <div className="ox-canon-guz-rosette-copy">
              <strong>Kankrej — Guzerá Lineage</strong>
              <p>
                Bred from the Rann of Kutch to the Brazilian Sertão: the oldest triple-purpose
                zebu of the tropics—supreme in draught, milk, and heat endurance.
              </p>
            </div>
          </div>
        </div>
      </header>

      <section className="ox-canon-guz-stage">
        <div className="ox-canon-guz-ring-card">
          <div className="ox-canon-guz-ring-toolbar">
            <span className="ox-canon-guz-ring-label">
              RING EVALUATION STANCE · THREE-QUARTER PROJECTION
            </span>
            <div className="ox-canon-guz-coat-switcher" role="group" aria-label="Registered coat variety">
              <span className="ox-canon-guz-coat-title">REGISTERED COAT:</span>
              {COAT_SHADES.map((shade) => (
                <button
                  key={shade.id}
                  type="button"
                  className={`ox-canon-guz-coat-btn ${coatId === shade.id ? 'is-active' : ''}`}
                  onClick={() => setCoatId(shade.id)}
                >
                  <span
                    className="ox-canon-guz-coat-dot"
                    style={{ background: shade.bodyMid }}
                  />
                  {shade.name}
                </button>
              ))}
            </div>
          </div>

          <div className="ox-canon-guz-svg-stage">
            <svg
              viewBox="0 0 920 600"
              className="ox-canon-guz-svg"
              role="img"
              aria-label="Three-quarter view of a Guzerat zebu champion bull with towering lyre-shaped horns, long pendulous ears, a massive thoracic shoulder hump, deeply pleated dewlap, ash-grey coat, and four sturdy legs with cloven hooves."
            >
              <defs>
                <linearGradient id="ox-canon-guz-body-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor={activeCoat.bodyTop} />
                  <stop offset="55%" stopColor={activeCoat.bodyMid} />
                  <stop offset="100%" stopColor={activeCoat.bodyDeep} />
                </linearGradient>
                <linearGradient id="ox-canon-guz-hump-grad" x1="20%" y1="0%" x2="80%" y2="100%">
                  <stop offset="0%" stopColor={activeCoat.shoulder} />
                  <stop offset="50%" stopColor={activeCoat.bodyDeep} />
                  <stop offset="100%" stopColor="#1E242E" />
                </linearGradient>
                <linearGradient id="ox-canon-guz-horn-l" x1="100%" y1="100%" x2="0%" y2="0%">
                  <stop offset="0%" stopColor="#D8CEBE" />
                  <stop offset="45%" stopColor="#9E9280" />
                  <stop offset="85%" stopColor="#3B352E" />
                  <stop offset="100%" stopColor="#161412" />
                </linearGradient>
                <linearGradient id="ox-canon-guz-horn-r" x1="0%" y1="100%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#E5DDD0" />
                  <stop offset="45%" stopColor="#A69B8A" />
                  <stop offset="85%" stopColor="#3B352E" />
                  <stop offset="100%" stopColor="#161412" />
                </linearGradient>
                <linearGradient id="ox-canon-guz-dewlap-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor={activeCoat.bodyMid} />
                  <stop offset="60%" stopColor={activeCoat.bodyDeep} />
                  <stop offset="100%" stopColor="#1D232E" />
                </linearGradient>
              </defs>

              <g opacity="0.22">
                <path
                  d="M 70 548 A 390 260 0 0 1 850 548"
                  fill="none"
                  stroke="#12236B"
                  strokeWidth="2"
                  strokeDasharray="8 6"
                />
                <path
                  d="M 130 548 A 330 210 0 0 1 790 548"
                  fill="none"
                  stroke="#12236B"
                  strokeWidth="1.5"
                />
              </g>

              <ellipse cx="495" cy="552" rx="345" ry="22" fill="#D5C4A8" />
              <ellipse cx="495" cy="552" rx="285" ry="12" fill="#B8A382" />

              <g id="ox-canon-guz-far-legs">
                <path
                  d="M 356 392 L 362 462 L 360 518 L 348 544 L 354 554 L 392 554 L 390 518 L 398 458 L 406 388 Z"
                  fill="#2A323F"
                  stroke="#141824"
                  strokeWidth="2.5"
                />
                <path
                  d="M 348 544 L 368 538 L 368 554 L 351 554 Z M 371 538 L 392 542 L 392 554 L 371 554 Z"
                  fill="#141824"
                />

                <path
                  d="M 618 378 L 636 446 L 628 514 L 614 542 L 620 554 L 658 554 L 656 516 L 672 444 L 664 370 Z"
                  fill="#2A323F"
                  stroke="#141824"
                  strokeWidth="2.5"
                />
                <path
                  d="M 614 542 L 634 536 L 634 554 L 617 554 Z M 637 536 L 658 540 L 658 554 L 637 554 Z"
                  fill="#141824"
                />
              </g>

              <path
                d="M 784 205
                   C 812 228, 826 292, 824 378
                   C 822 426, 816 462, 812 486
                   C 824 502, 826 530, 810 546
                   C 794 536, 792 508, 800 484
                   C 806 452, 808 412, 806 365
                   C 804 294, 792 238, 774 218 Z"
                fill="#1E242E"
                stroke="#141824"
                strokeWidth="2.2"
              />

              <path
                d="M 278 196
                   C 305 182, 326 142, 348 106
                   C 368 74, 405 68, 434 90
                   C 462 112, 472 152, 482 178
                   C 542 184, 622 180, 692 176
                   C 742 174, 776 188, 790 212
                   C 804 238, 798 282, 782 328
                   C 766 372, 766 410, 778 442
                   L 756 518
                   L 738 542
                   L 744 554
                   L 704 554
                   L 708 538
                   L 724 512
                   L 734 444
                   C 712 416, 692 394, 668 386
                   C 626 404, 582 426, 548 442
                   C 518 456, 488 452, 468 424
                   C 425 422, 385 415, 348 404
                   L 338 462
                   L 332 518
                   L 318 542
                   L 322 554
                   L 282 554
                   L 286 538
                   L 300 514
                   L 302 458
                   L 296 398
                   C 264 388, 248 348, 254 296 Z"
                fill="url(#ox-canon-guz-body-grad)"
                stroke="#141824"
                strokeWidth="3"
              />

              <path
                d="M 332 162
                   C 344 114, 368 74, 404 74
                   C 442 74, 468 118, 478 176
                   C 452 198, 368 198, 332 162 Z"
                fill="url(#ox-canon-guz-hump-grad)"
                stroke="#141824"
                strokeWidth="2.5"
              />

              <path
                d="M 244 298
                   C 232 332, 236 376, 256 406
                   C 276 436, 314 446, 352 430
                   C 368 422, 372 396, 358 376
                   C 332 354, 318 318, 312 282 Z"
                fill="url(#ox-canon-guz-dewlap-grad)"
                stroke="#141824"
                strokeWidth="2.5"
              />
              <path
                d="M 256 312 C 248 352, 264 394, 304 420
                   M 272 308 C 268 348, 286 388, 326 414
                   M 290 304 C 292 342, 308 378, 344 398"
                stroke="#141824"
                strokeWidth="2"
                fill="none"
                opacity="0.7"
              />

              <path
                d="M 468 420 C 495 446, 528 448, 558 422"
                stroke="#141824"
                strokeWidth="2"
                fill="none"
              />

              <path
                d="M 282 542 L 302 536 L 302 554 L 282 554 Z M 305 536 L 322 542 L 322 554 L 305 554 Z"
                fill="#141824"
              />
              <path
                d="M 704 542 L 724 536 L 724 554 L 704 554 Z M 727 536 L 744 542 L 744 554 L 727 554 Z"
                fill="#141824"
              />

              <g id="ox-canon-guz-ears">
                <path
                  d="M 232 198
                     C 202 204, 178 236, 174 274
                     C 172 292, 186 298, 200 284
                     C 218 266, 232 238, 240 212 Z"
                  fill={activeCoat.bodyDeep}
                  stroke="#141824"
                  strokeWidth="2.5"
                />
                <path
                  d="M 226 212 C 206 224, 192 248, 188 274"
                  stroke="#141824"
                  strokeWidth="2.5"
                  fill="none"
                />

                <path
                  d="M 304 196
                     C 332 204, 356 234, 362 272
                     C 364 290, 350 296, 336 282
                     C 318 264, 304 236, 296 210 Z"
                  fill={activeCoat.bodyDeep}
                  stroke="#141824"
                  strokeWidth="2.5"
                />
                <path
                  d="M 310 210 C 328 222, 342 246, 346 272"
                  stroke="#141824"
                  strokeWidth="2.5"
                  fill="none"
                />
              </g>

              <g id="ox-canon-guz-head">
                <path
                  d="M 236 176
                     C 254 166, 282 166, 300 176
                     C 312 194, 314 226, 304 256
                     L 288 304
                     C 278 320, 244 320, 234 304
                     L 224 256
                     C 218 226, 222 194, 236 176 Z"
                  fill="url(#ox-canon-guz-body-grad)"
                  stroke="#141824"
                  strokeWidth="2.8"
                />

                <path
                  d="M 230 288
                     C 238 276, 282 276, 290 288
                     C 296 302, 286 318, 260 318
                     C 234 318, 224 302, 230 288 Z"
                  fill="#1C2029"
                  stroke="#141824"
                  strokeWidth="2"
                />
                <ellipse cx="246" cy="298" rx="6.5" ry="4" transform="rotate(24 246 298)" fill="#0B0D12" />
                <ellipse cx="274" cy="298" rx="6.5" ry="4" transform="rotate(-24 274 298)" fill="#0B0D12" />

                <path d="M 224 218 C 234 210, 246 212, 252 220" stroke="#141824" strokeWidth="2.5" fill="none" />
                <ellipse cx="238" cy="225" rx="7" ry="5" fill="#141824" />
                <circle cx="236" cy="223" r="2" fill="#FFFFFF" />

                <path d="M 282 220 C 288 212, 300 210, 310 218" stroke="#141824" strokeWidth="2.5" fill="none" />
                <ellipse cx="295" cy="225" rx="7" ry="5" fill="#141824" />
                <circle cx="293" cy="223" r="2" fill="#FFFFFF" />

                <path
                  d="M 225 256 L 298 256 M 262 176 L 262 256"
                  stroke="#C93829"
                  strokeWidth="3.5"
                  fill="none"
                />
                <circle cx="226" cy="256" r="5" fill="#F7B500" stroke="#141824" strokeWidth="1.5" />
                <circle cx="298" cy="256" r="5" fill="#F7B500" stroke="#141824" strokeWidth="1.5" />
              </g>

              <g id="ox-canon-guz-lyre-horns">
                <path
                  d="M 244 180
                     C 192 168, 134 134, 136 78
                     C 138 42, 166 18, 192 26
                     C 198 28, 196 36, 188 38
                     C 168 42, 158 62, 162 88
                     C 168 124, 212 146, 256 164 Z"
                  fill="url(#ox-canon-guz-horn-l)"
                  stroke="#141824"
                  strokeWidth="2.8"
                />
                <path
                  d="M 292 180
                     C 344 168, 402 134, 400 78
                     C 398 42, 370 18, 344 26
                     C 338 28, 340 36, 348 38
                     C 368 42, 378 62, 374 88
                     C 368 124, 324 146, 280 164 Z"
                  fill="url(#ox-canon-guz-horn-r)"
                  stroke="#141824"
                  strokeWidth="2.8"
                />
              </g>

              {CONFORMATION_POINTS.map((pt, idx) => {
                const isSelected = selectedPoint === pt.id
                return (
                  <g
                    key={pt.id}
                    className="ox-canon-guz-marker"
                    onClick={() => setSelectedPoint(pt.id)}
                    style={{ cursor: 'pointer' }}
                  >
                    {isSelected && (
                      <motion.circle
                        cx={pt.cx}
                        cy={pt.cy}
                        r="22"
                        fill="none"
                        stroke="#F7B500"
                        strokeWidth="2.5"
                        initial={{ scale: 0.7, opacity: 0.9 }}
                        animate={{ scale: 1.35, opacity: 0 }}
                        transition={{ duration: 1.6, repeat: Infinity }}
                      />
                    )}
                    <circle
                      cx={pt.cx}
                      cy={pt.cy}
                      r={isSelected ? 14 : 11}
                      fill={isSelected ? '#F7B500' : '#12236B'}
                      stroke="#FFFFFF"
                      strokeWidth="2.5"
                    />
                    <text
                      x={pt.cx}
                      y={pt.cy + 4}
                      textAnchor="middle"
                      fill={isSelected ? '#141824' : '#FFFFFF'}
                      fontSize="10"
                      fontFamily="Space Mono, monospace"
                      fontWeight="700"
                    >
                      0{idx + 1}
                    </text>
                  </g>
                )
              })}
            </svg>
          </div>

          <div className="ox-canon-guz-ring-foot">
            <span>INSPECT THE 5 BREED CONFORMATION MARKERS DIRECTLY ON THE BULL OR BELOW</span>
            <span>ABCZ MORPHOLOGICAL SCORE: 97.6 PTS (EXCELLENT)</span>
          </div>
        </div>

        <aside className="ox-canon-guz-sidebar">
          <div className="ox-canon-guz-point-nav" role="tablist" aria-label="Breed conformation points">
            {CONFORMATION_POINTS.map((pt, idx) => (
              <button
                key={pt.id}
                role="tab"
                aria-selected={selectedPoint === pt.id}
                type="button"
                className={`ox-canon-guz-point-btn ${selectedPoint === pt.id ? 'is-active' : ''}`}
                onClick={() => setSelectedPoint(pt.id)}
              >
                <span className="ox-canon-guz-point-num">0{idx + 1}</span>
                <span className="ox-canon-guz-point-label">{pt.title}</span>
                <span className="ox-canon-guz-point-score">{pt.score}</span>
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activePoint.id}
              className="ox-canon-guz-judge-card"
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.2 }}
            >
              <div className="ox-canon-guz-judge-top">
                <span className="ox-canon-guz-judge-code">{activePoint.code}</span>
                <span className="ox-canon-guz-judge-pt" lang="pt">
                  {activePoint.portuguese}
                </span>
              </div>
              <h2 className="ox-canon-guz-h2">{activePoint.title}</h2>
              <div className="ox-canon-guz-measure-pill">{activePoint.measure}</div>
              <p className="ox-canon-guz-judge-desc">{activePoint.detail}</p>
            </motion.div>
          </AnimatePresence>

          <div className="ox-canon-guz-pedigree-box">
            <h3 className="ox-canon-guz-pedigree-title">GENEALOGICAL REGISTRY · SERTÃO HERDBOOK</h3>
            <div className="ox-canon-guz-pedigree-grid">
              <div className="ox-canon-guz-ped-node">
                <span>SIRE</span>
                <strong>Sultão da Paraopeba (GZ-1884)</strong>
              </div>
              <div className="ox-canon-guz-ped-node">
                <span>DAM</span>
                <strong>Rainha do Curvelo (GZ-2109)</strong>
              </div>
              <div className="ox-canon-guz-ped-node">
                <span>ANCESTRAL ORIGIN</span>
                <strong>Kankrej · Gujarat, India (5000 BCE)</strong>
              </div>
              <div className="ox-canon-guz-ped-node">
                <span>DRAUGHT TRACTION</span>
                <strong>Pairs pull 3,500 kg over dry scrub</strong>
              </div>
            </div>
          </div>
        </aside>
      </section>

      <footer className="ox-canon-guz-footer">
        <div className="ox-canon-guz-eartag">
          <div className="ox-canon-guz-eartag-hole" aria-hidden="true" />
          <div className="ox-canon-guz-eartag-text">
            <span className="ox-canon-guz-eartag-top">ABCZ OFICIAL · REGISTRO GENEALÓGICO</span>
            <span className="ox-canon-guz-signature">SET XXXV · DESIGNED BY GEMINI 4 ARGON</span>
          </div>
        </div>
      </footer>
    </main>
  )
}
