import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './visceral.css'

const CHAMBERS = [
  {
    id: 'rumen',
    num: 'I',
    latin: 'Saccus Ruminis',
    name: 'The Rumen (Paunch)',
    volume: '150 – 180 Litres',
    temp: '39.2 °C',
    ph: '6.4 pH',
    dwell: '36 – 48 Hours',
    role: 'Anaerobic Fermentation Vat',
    summary:
      'Occupying nearly the entire left flank of the abdominal cavity, the muscular rumen churns coarse cellulose twice per minute. Billions of symbiotic ciliates and fibrolytic bacteria cleave raw pasture straw into volatile fatty acids—acetate, propionate, and butyrate—supplying seventy percent of the draught ox’s metabolic energy.',
    color: '#D93829',
    bolusPath: 'M 105 268 C 175 260, 250 235, 338 242 C 415 248, 495 220, 575 248 C 625 266, 618 338, 545 348 C 468 358, 405 322, 360 285',
  },
  {
    id: 'reticulum',
    num: 'II',
    latin: 'Reticulum Cellulosum',
    name: 'The Reticulum (Honeycomb)',
    volume: '10 – 14 Litres',
    temp: '39.0 °C',
    ph: '6.5 pH',
    dwell: '4 – 6 Hours',
    role: 'Particle Sieve & Regurgitation Pump',
    summary:
      'Set directly against the diaphragm behind the heart, its mucosa is folded into hexagonal ridges like a wax honeycomb. Dense forage sinks into its floor while coarse fibres trigger a biphasic contraction that propels a cud bolus back up the oesophagus to be remasticated fifty-five times per minute.',
    color: '#E5A93C',
    bolusPath: 'M 360 285 C 330 310, 318 335, 342 350 C 365 362, 378 320, 340 250 C 260 238, 180 258, 105 268',
  },
  {
    id: 'omasum',
    num: 'III',
    latin: 'Psalterium (Omasum)',
    name: 'The Omasum (Manyplies)',
    volume: '16 – 22 Litres',
    temp: '38.8 °C',
    ph: '6.1 pH',
    dwell: '6 – 8 Hours',
    role: 'Foliate Water & Mineral Press',
    summary:
      'Named the Psalterium by early anatomists because its hundred muscular laminae turn like the leaves of a liturgical book. Finely ground ingesta passing through the reticulo-omasal orifice is pressed between these studded sheets, reclaiming sixty percent of water and bicarbonate before acid digestion begins.',
    color: '#2B8A78',
    bolusPath: 'M 342 350 C 365 335, 392 302, 415 308 C 438 314, 435 345, 412 352',
  },
  {
    id: 'abomasum',
    num: 'IV',
    latin: 'Ventriculus Glandularis',
    name: 'The Abomasum (Rennet Bag)',
    volume: '18 – 25 Litres',
    temp: '38.6 °C',
    ph: '2.3 pH',
    dwell: '2 – 4 Hours',
    role: 'Enzymatic & Acid Hydrolysis',
    summary:
      'Lying along the ventral floor of the abdomen, the fourth chamber is the true glandular stomach. Secreting hydrochloric acid, pepsinogen, and chymosin, it digests not grass itself, but the vast microbial harvest cultivated in the rumen—turning meadow weeds into heavy bone and draught muscle.',
    color: '#7E57C2',
    bolusPath: 'M 412 352 C 425 368, 455 382, 495 376 C 530 370, 552 350, 578 355',
  },
]

const ANATOMY_PINS = [
  { id: 'reticulum', x: 342, y: 332, labelX: 285, label: 'II. RETICULUM' },
  { id: 'omasum', x: 408, y: 312, labelX: 405, label: 'III. OMASUM' },
  { id: 'abomasum', x: 468, y: 368, labelX: 525, label: 'IV. ABOMASUM' },
  { id: 'rumen', x: 565, y: 272, labelX: 645, label: 'I. RUMEN' },
]

export default function Visceral() {
  const [activeId, setActiveId] = useState('rumen')
  const [xrayLayer, setXrayLayer] = useState('both')

  const activeChamber = CHAMBERS.find((c) => c.id === activeId) || CHAMBERS[0]

  return (
    <main className="ox-canon-visc-root th-ox-canon-visc">
      <div className="ox-canon-visc-grid-bg" aria-hidden="true" />

      <header className="ox-canon-visc-header">
        <div className="ox-canon-visc-folio-meta">
          <span className="ox-canon-visc-folio-tag">TABULA ANATOMICA · TOMUS IV</span>
          <span className="ox-canon-visc-folio-sub">INSTITUTUM PHYSIOLOGIAE BOVINAE · 1884</span>
        </div>

        <div className="ox-canon-visc-title-row">
          <div>
            <p className="ox-canon-visc-eyebrow">FACET 01 · ANATOMY OF BOS TAURUS</p>
            <h1 className="ox-canon-visc-h1">The Ruminant Engine</h1>
          </div>
          <p className="ox-canon-visc-lead">
            No mammal can cleave raw cellulose alone. The draught ox carries a two-hundred-litre
            anaerobic fermentation vessel slung beneath thirteen thoracic ribs—chewing each mouthful
            twice to turn coarse field sedge into four thousand pounds of pulling force.
          </p>
        </div>

        <div className="ox-canon-visc-layer-bar" role="group" aria-label="Anatomical dissection layer">
          <span className="ox-canon-visc-layer-caption">PLATE DISSECTION LAYER:</span>
          {[
            { id: 'both', label: 'Full Chromolithograph (Viscera + Osteology)' },
            { id: 'viscera', label: 'Gastric Chambers & Bolus Loop' },
            { id: 'osteology', label: 'Skeletal Frame & Hide Silhouette' },
          ].map((mode) => (
            <button
              key={mode.id}
              type="button"
              className={`ox-canon-visc-layer-btn ${xrayLayer === mode.id ? 'is-active' : ''}`}
              onClick={() => setXrayLayer(mode.id)}
            >
              {mode.label}
            </button>
          ))}
        </div>
      </header>

      <section className="ox-canon-visc-workbench">
        <div className="ox-canon-visc-plate-frame">
          <div className="ox-canon-visc-plate-corner ox-canon-visc-corner-tl" aria-hidden="true" />
          <div className="ox-canon-visc-plate-corner ox-canon-visc-corner-tr" aria-hidden="true" />
          <div className="ox-canon-visc-plate-corner ox-canon-visc-corner-bl" aria-hidden="true" />
          <div className="ox-canon-visc-plate-corner ox-canon-visc-corner-br" aria-hidden="true" />

          <div className="ox-canon-visc-plate-topline">
            <span>FIG. 1 — LATERAL SINISTRAL SECTION · ADULT DRAUGHT OX (1,040 KG)</span>
            <span>SCALE 1 : 12 · NATURAL PROPORTION</span>
          </div>

          <div className="ox-canon-visc-svg-wrap">
            <svg
              viewBox="0 0 960 590"
              className="ox-canon-visc-svg"
              role="img"
              aria-label="Anatomical lateral profile of a standing domestic ox with sweeping lyre horns, deep dewlap, four legs with cloven hooves, and an internal cutaway revealing the spine, ribcage, and four-chambered stomach."
            >
              <defs>
                <linearGradient id="ox-canon-visc-hide-grad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#3B2B23" />
                  <stop offset="55%" stopColor="#261B15" />
                  <stop offset="100%" stopColor="#17100C" />
                </linearGradient>
                <linearGradient id="ox-canon-visc-far-leg" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#1B120E" />
                  <stop offset="100%" stopColor="#0E0907" />
                </linearGradient>
                <linearGradient id="ox-canon-visc-horn-grad" x1="0%" y1="100%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#C9B38C" />
                  <stop offset="65%" stopColor="#EFE4CE" />
                  <stop offset="100%" stopColor="#2A211B" />
                </linearGradient>
                <linearGradient id="ox-canon-visc-cavity-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#1E100E" />
                  <stop offset="100%" stopColor="#100807" />
                </linearGradient>
                <radialGradient id="ox-canon-visc-rumen-grad" cx="45%" cy="40%" r="60%">
                  <stop offset="0%" stopColor="#E65342" />
                  <stop offset="70%" stopColor="#B8291B" />
                  <stop offset="100%" stopColor="#7A180E" />
                </radialGradient>
                <radialGradient id="ox-canon-visc-retic-grad" cx="45%" cy="45%" r="60%">
                  <stop offset="0%" stopColor="#F4C15D" />
                  <stop offset="100%" stopColor="#B87A18" />
                </radialGradient>
                <radialGradient id="ox-canon-visc-omasum-grad" cx="45%" cy="45%" r="60%">
                  <stop offset="0%" stopColor="#42B39E" />
                  <stop offset="100%" stopColor="#1B6355" />
                </radialGradient>
                <radialGradient id="ox-canon-visc-abomasum-grad" cx="50%" cy="50%" r="60%">
                  <stop offset="0%" stopColor="#9B74DE" />
                  <stop offset="100%" stopColor="#52328C" />
                </radialGradient>
              </defs>

              <g className="ox-canon-visc-measure-lines" opacity="0.45">
                <line x1="65" y1="548" x2="885" y2="548" stroke="#6B5B45" strokeWidth="1.5" />
                <line x1="65" y1="130" x2="65" y2="548" stroke="#6B5B45" strokeWidth="1" strokeDasharray="4 4" />
                <line x1="58" y1="130" x2="72" y2="130" stroke="#6B5B45" strokeWidth="1.5" />
                <text x="52" y="345" fill="#524330" fontSize="10" fontFamily="IBM Plex Mono, monospace" transform="rotate(-90 52 345)" textAnchor="middle">
                  WITHERS HEIGHT · 162 CM
                </text>
                <line x1="80" y1="98" x2="795" y2="98" stroke="#6B5B45" strokeWidth="1" strokeDasharray="4 4" />
                <line x1="80" y1="92" x2="80" y2="104" stroke="#6B5B45" strokeWidth="1.5" />
                <line x1="795" y1="92" x2="795" y2="104" stroke="#6B5B45" strokeWidth="1.5" />
                <text x="438" y="90" fill="#524330" fontSize="10" fontFamily="IBM Plex Mono, monospace" textAnchor="middle">
                  AXIAL BODY LENGTH · 248 CM
                </text>
              </g>

              <ellipse cx="485" cy="548" rx="350" ry="14" fill="#C9BEAB" opacity="0.65" />

              <path
                d="M 190 162 C 148 134, 114 92, 126 48 C 130 34, 144 40, 145 58 C 146 95, 172 132, 208 156 Z"
                fill="#A8926B"
                stroke="#2A2019"
                strokeWidth="2"
              />

              <g id="ox-canon-visc-far-limbs">
                <path
                  d="M 278 380 L 266 448 L 258 510 L 245 538 L 252 548 L 288 548 L 288 512 L 298 450 L 314 388 Z"
                  fill="url(#ox-canon-visc-far-leg)"
                  stroke="#120B08"
                  strokeWidth="2"
                />
                <path
                  d="M 245 538 L 266 534 L 266 548 L 248 548 Z M 269 534 L 288 536 L 288 548 L 269 548 Z"
                  fill="#403328"
                />

                <path
                  d="M 642 365 L 664 438 L 652 510 L 638 538 L 644 548 L 682 548 L 682 512 L 698 438 L 688 358 Z"
                  fill="url(#ox-canon-visc-far-leg)"
                  stroke="#120B08"
                  strokeWidth="2"
                />
                <path
                  d="M 638 538 L 658 534 L 658 548 L 641 548 Z M 661 534 L 682 536 L 682 548 L 661 548 Z"
                  fill="#403328"
                />
              </g>

              <path
                d="M 78 256
                   C 74 244, 82 232, 98 226
                   C 122 214, 145 196, 168 176
                   C 182 162, 198 152, 218 154
                   C 236 156, 255 162, 276 154
                   C 302 144, 326 128, 358 128
                   C 392 128, 422 144, 468 148
                   C 535 152, 608 142, 672 140
                   C 718 139, 756 146, 782 158
                   C 796 165, 804 188, 796 226
                   C 790 258, 782 292, 768 332
                   C 756 368, 764 405, 774 432
                   L 754 512
                   L 736 538
                   L 742 548
                   L 704 548
                   L 706 534
                   L 722 508
                   L 732 436
                   C 716 410, 696 388, 674 378
                   C 635 392, 578 424, 502 424
                   C 425 424, 376 412, 348 398
                   L 342 454
                   L 336 514
                   L 322 538
                   L 326 548
                   L 288 548
                   L 292 534
                   L 306 510
                   L 308 452
                   L 302 396
                   C 265 404, 232 392, 216 364
                   C 198 352, 192 326, 186 304
                   C 178 282, 162 284, 142 286
                   C 118 288, 96 288, 86 280
                   C 78 274, 76 265, 78 256 Z"
                fill="url(#ox-canon-visc-hide-grad)"
                stroke="#120B08"
                strokeWidth="3"
              />

              <path
                d="M 186 284
                   C 182 315, 194 348, 214 368
                   C 228 384, 252 406, 286 402
                   C 298 400, 304 388, 296 372
                   C 265 362, 240 330, 226 282 Z"
                fill="#2E2019"
                stroke="#594336"
                strokeWidth="1.5"
              />
              <path
                d="M 196 296 C 202 332, 224 364, 264 382 M 210 294 C 218 326, 242 354, 278 368"
                stroke="#6E5444"
                strokeWidth="1.5"
                fill="none"
                opacity="0.7"
              />

              <path
                d="M 782 162
                   C 804 182, 816 248, 814 335
                   C 812 385, 808 424, 804 448
                   C 816 462, 820 492, 806 514
                   C 792 504, 786 476, 794 448
                   C 798 418, 800 375, 798 322
                   C 796 254, 788 198, 774 174 Z"
                fill="#1C130E"
                stroke="#120B08"
                strokeWidth="2"
              />

              <path
                d="M 78 256 C 84 246, 102 246, 110 258 C 116 268, 108 282, 92 282 C 80 280, 76 268, 78 256 Z"
                fill="#5E463B"
                stroke="#1C130E"
                strokeWidth="1.5"
              />
              <ellipse cx="94" cy="264" rx="7" ry="4.5" transform="rotate(-20 94 264)" fill="#180F0B" />
              <path d="M 86 275 C 102 277, 118 274, 130 268" stroke="#180F0B" strokeWidth="2" fill="none" />

              <g id="ox-canon-visc-eye-ear">
                <path d="M 148 202 C 158 194, 172 195, 178 204" stroke="#6E5647" strokeWidth="2.5" fill="none" />
                <ellipse cx="164" cy="209" rx="7.5" ry="5.5" fill="#120C09" stroke="#6E5647" strokeWidth="1.2" />
                <circle cx="162" cy="207" r="2" fill="#F2ECE1" />

                <path
                  d="M 218 178 C 242 172, 268 176, 274 188 C 270 200, 244 204, 220 194 Z"
                  fill="#3A2920"
                  stroke="#140D09"
                  strokeWidth="2"
                />
                <path d="M 226 185 C 244 182, 258 184, 264 189" stroke="#7A5E4D" strokeWidth="1.5" fill="none" />
              </g>

              <path
                d="M 206 168
                   C 162 142, 128 92, 146 38
                   C 152 22, 168 30, 166 52
                   C 162 96, 188 134, 228 160 Z"
                fill="url(#ox-canon-visc-horn-grad)"
                stroke="#1E1610"
                strokeWidth="2.5"
              />
              <path
                d="M 192 152 C 198 144, 206 144, 212 152 M 176 134 C 182 126, 190 126, 196 134 M 162 110 C 168 104, 176 104, 180 112"
                stroke="#7A684B"
                strokeWidth="1.3"
                fill="none"
              />

              <path
                d="M 290 536 L 308 532 L 308 548 L 288 548 Z M 311 532 L 326 536 L 326 548 L 311 548 Z"
                fill="#695542"
                stroke="#1C130E"
                strokeWidth="1.2"
              />
              <path
                d="M 705 536 L 722 532 L 722 548 L 704 548 Z M 725 532 L 742 536 L 742 548 L 725 548 Z"
                fill="#695542"
                stroke="#1C130E"
                strokeWidth="1.2"
              />

              <path
                d="M 292 178
                   C 340 150, 425 154, 525 156
                   C 625 158, 695 155, 728 182
                   C 752 214, 742 315, 682 362
                   C 632 396, 548 412, 460 410
                   C 372 408, 315 385, 294 342
                   C 274 300, 268 210, 292 178 Z"
                fill="url(#ox-canon-visc-cavity-grad)"
                stroke="#B59B72"
                strokeWidth="2.5"
              />
              <path
                d="M 296 182
                   C 342 155, 425 159, 525 161
                   C 622 163, 690 160, 722 186
                   C 745 216, 735 312, 678 356
                   C 628 390, 546 406, 460 404
                   C 375 402, 320 380, 299 338
                   C 280 298, 274 212, 296 182 Z"
                fill="none"
                stroke="#D93829"
                strokeWidth="1"
                strokeDasharray="6 4"
                opacity="0.7"
              />

              {(xrayLayer === 'both' || xrayLayer === 'osteology') && (
                <g id="ox-canon-visc-skeleton" opacity={xrayLayer === 'osteology' ? '0.98' : '0.45'}>
                  <path
                    d="M 218 188 C 258 202, 298 185, 345 168 C 435 166, 585 164, 735 170"
                    stroke="#EAE0C8"
                    strokeWidth="9"
                    strokeLinecap="round"
                    fill="none"
                  />
                  {[335, 355, 375, 395, 415, 435, 455, 475, 495, 515, 535, 555, 575].map((rx, idx) => (
                    <g key={rx}>
                      <line
                        x1={rx}
                        y1={168}
                        x2={rx + 6}
                        y2={idx < 5 ? 138 + idx * 3 : 154}
                        stroke="#EAE0C8"
                        strokeWidth="4"
                        strokeLinecap="round"
                      />
                      <path
                        d={`M ${rx} 170 C ${rx - 14} 235, ${rx - 8} 305, ${rx + 12} ${345 + (idx < 7 ? idx * 4 : (12 - idx) * 5)}`}
                        stroke="#DFD3B8"
                        strokeWidth="4.5"
                        fill="none"
                        strokeLinecap="round"
                      />
                    </g>
                  ))}
                  <path
                    d="M 298 188 L 332 162 L 342 252 L 304 276 Z"
                    fill="#DFD3B8"
                     opacity="0.65"
                    stroke="#B5A486"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M 658 168 L 732 162 L 748 212 L 685 224 Z"
                    fill="#DFD3B8"
                    opacity="0.65"
                    stroke="#B5A486"
                    strokeWidth="1.5"
                  />
                </g>
              )}

              {(xrayLayer === 'both' || xrayLayer === 'viscera') && (
                <g id="ox-canon-visc-chambers">
                  <path
                    d="M 112 268 C 175 262, 235 236, 338 244"
                    stroke="#D96B59"
                    strokeWidth="8"
                    fill="none"
                    strokeLinecap="round"
                  />
                  <path
                    d="M 112 268 C 175 262, 235 236, 338 244"
                    stroke="#F7C6B5"
                    strokeWidth="2"
                    strokeDasharray="5 5"
                    fill="none"
                  />

                  <g
                    className={`ox-canon-visc-organ ${activeId === 'rumen' ? 'is-selected' : ''}`}
                    onClick={() => setActiveId('rumen')}
                    style={{ cursor: 'pointer' }}
                  >
                    <path
                      d="M 395 215
                         C 445 182, 558 178, 638 202
                         C 692 218, 708 268, 684 314
                         C 658 362, 578 378, 495 365
                         C 438 356, 398 328, 388 282
                         C 380 248, 382 226, 395 215 Z"
                      fill="url(#ox-canon-visc-rumen-grad)"
                      stroke={activeId === 'rumen' ? '#FFF6E5' : '#57120A'}
                      strokeWidth={activeId === 'rumen' ? '3.5' : '2'}
                    />
                    <path
                      d="M 412 272 C 478 258, 565 264, 658 282 M 445 222 C 495 245, 555 242, 622 225 M 438 322 C 505 312, 578 320, 642 332"
                      stroke="#FF9E8A"
                      strokeWidth="2"
                      fill="none"
                      opacity="0.55"
                    />
                  </g>

                  <g
                    className={`ox-canon-visc-organ ${activeId === 'reticulum' ? 'is-selected' : ''}`}
                    onClick={() => setActiveId('reticulum')}
                    style={{ cursor: 'pointer' }}
                  >
                    <path
                      d="M 318 285
                         C 338 268, 372 274, 382 302
                         C 392 332, 374 368, 342 368
                         C 312 368, 298 338, 304 308
                         C 306 296, 312 289, 318 285 Z"
                      fill="url(#ox-canon-visc-retic-grad)"
                      stroke={activeId === 'reticulum' ? '#FFF6E5' : '#593A08'}
                      strokeWidth={activeId === 'reticulum' ? '3.5' : '2'}
                    />
                    <path
                      d="M 324 308 L 336 302 L 348 308 L 348 322 L 336 328 L 324 322 Z
                         M 348 308 L 360 302 L 372 308 L 372 322 L 360 328 L 348 322 Z
                         M 336 328 L 348 322 L 360 328 L 360 342 L 348 348 L 336 342 Z"
                      stroke="#6E470B"
                      strokeWidth="1.3"
                      fill="none"
                      opacity="0.75"
                    />
                  </g>

                  <g
                    className={`ox-canon-visc-organ ${activeId === 'omasum' ? 'is-selected' : ''}`}
                    onClick={() => setActiveId('omasum')}
                    style={{ cursor: 'pointer' }}
                  >
                    <ellipse
                      cx="408"
                      cy="312"
                      rx="34"
                      ry="28"
                      transform="rotate(-18 408 312)"
                      fill="url(#ox-canon-visc-omasum-grad)"
                      stroke={activeId === 'omasum' ? '#FFF6E5' : '#0E3B32'}
                      strokeWidth={activeId === 'omasum' ? '3.5' : '2'}
                    />
                    <path
                      d="M 384 304 C 402 296, 418 298, 432 308 M 382 314 C 402 306, 420 308, 434 318 M 386 324 C 404 318, 418 320, 430 328"
                      stroke="#A8F0E2"
                      strokeWidth="1.6"
                      fill="none"
                      opacity="0.7"
                    />
                  </g>

                  <g
                    className={`ox-canon-visc-organ ${activeId === 'abomasum' ? 'is-selected' : ''}`}
                    onClick={() => setActiveId('abomasum')}
                    style={{ cursor: 'pointer' }}
                  >
                    <path
                      d="M 388 348
                         C 418 338, 462 342, 512 356
                         C 548 366, 568 352, 582 362
                         C 590 370, 578 388, 542 394
                         C 492 402, 422 396, 392 376
                         C 378 366, 378 352, 388 348 Z"
                      fill="url(#ox-canon-visc-abomasum-grad)"
                      stroke={activeId === 'abomasum' ? '#FFF6E5' : '#2D1952'}
                      strokeWidth={activeId === 'abomasum' ? '3.5' : '2'}
                    />
                  </g>

                  <motion.path
                    key={activeChamber.id}
                    d={activeChamber.bolusPath}
                    fill="none"
                    stroke="#FFF6E5"
                    strokeWidth="3"
                    strokeDasharray="8 8"
                    initial={{ strokeDashoffset: 120 }}
                    animate={{ strokeDashoffset: 0 }}
                    transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
                  />
                </g>
              )}

              {ANATOMY_PINS.map((pin) => {
                const isSelected = activeId === pin.id
                return (
                  <g
                    key={pin.id}
                    className="ox-canon-visc-pin"
                    onClick={() => setActiveId(pin.id)}
                    style={{ cursor: 'pointer' }}
                  >
                    <polyline
                      points={`${pin.x},${pin.y} ${pin.x},442 ${pin.labelX},472`}
                      fill="none"
                      stroke={isSelected ? '#D93829' : '#6B5B45'}
                      strokeWidth={isSelected ? '2' : '1.2'}
                      strokeDasharray={isSelected ? 'none' : '3 3'}
                    />
                    <circle
                      cx={pin.x}
                      cy={pin.y}
                      r={isSelected ? 9 : 6}
                      fill={isSelected ? '#D93829' : '#F2ECE1'}
                      stroke="#18120E"
                      strokeWidth="2"
                    />
                    <rect
                      x={pin.labelX - 54}
                      y={472}
                      width="108"
                      height="22"
                      rx="3"
                      fill={isSelected ? '#D93829' : '#201813'}
                      stroke="#F2ECE1"
                      strokeWidth="1"
                    />
                    <text
                      x={pin.labelX}
                      y={487}
                      textAnchor="middle"
                      fill="#FAF6EE"
                      fontSize="9.5"
                      fontFamily="IBM Plex Mono, monospace"
                      fontWeight="700"
                    >
                      {pin.label}
                    </text>
                  </g>
                )
              })}
            </svg>
          </div>

          <div className="ox-canon-visc-plate-caption">
            <span>AD NATURAM DELINEAVIT · TABULA I — BOS TAURUS DOMESTICUS</span>
            <span>CLICK ANY GASTRIC CHAMBER TO INSPECT DIGESTIVE KINETICS</span>
          </div>
        </div>

        <aside className="ox-canon-visc-console">
          <div className="ox-canon-visc-tabs" role="tablist" aria-label="Four chambers of the ox stomach">
            {CHAMBERS.map((ch) => (
              <button
                key={ch.id}
                role="tab"
                aria-selected={activeId === ch.id}
                type="button"
                className={`ox-canon-visc-tab ${activeId === ch.id ? 'is-active' : ''}`}
                onClick={() => setActiveId(ch.id)}
              >
                <span className="ox-canon-visc-tab-roman">{ch.num}</span>
                <span className="ox-canon-visc-tab-name">{ch.id.toUpperCase()}</span>
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeChamber.id}
              className="ox-canon-visc-dossier"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.22 }}
            >
              <div className="ox-canon-visc-dossier-head">
                <span
                  className="ox-canon-visc-organ-badge"
                  style={{ backgroundColor: activeChamber.color }}
                >
                  CHAMBER {activeChamber.num}
                </span>
                <span className="ox-canon-visc-latin" lang="la">
                  {activeChamber.latin}
                </span>
              </div>

              <h2 className="ox-canon-visc-h2">{activeChamber.name}</h2>
              <p className="ox-canon-visc-role">{activeChamber.role}</p>
              <p className="ox-canon-visc-body">{activeChamber.summary}</p>

              <dl className="ox-canon-visc-metrics">
                <div className="ox-canon-visc-metric-cell">
                  <dt>CHAMBER CAPACITY</dt>
                  <dd>{activeChamber.volume}</dd>
                </div>
                <div className="ox-canon-visc-metric-cell">
                  <dt>CORE TEMPERATURE</dt>
                  <dd>{activeChamber.temp}</dd>
                </div>
                <div className="ox-canon-visc-metric-cell">
                  <dt>ACIDITY INDEX</dt>
                  <dd>{activeChamber.ph}</dd>
                </div>
                <div className="ox-canon-visc-metric-cell">
                  <dt>RETENTION TRANSIT</dt>
                  <dd>{activeChamber.dwell}</dd>
                </div>
              </dl>
            </motion.div>
          </AnimatePresence>

          <div className="ox-canon-visc-ledger">
            <h3 className="ox-canon-visc-ledger-title">DAILY METABOLIC BALANCE · 1,040 KG OX</h3>
            <ul className="ox-canon-visc-ledger-list">
              <li>
                <span>COARSE FORAGE INTAKE</span>
                <strong>24.5 kg dry matter / day</strong>
              </li>
              <li>
                <span>PAROTID SALIVA BUFFER</span>
                <strong>165 litres / 24 hrs</strong>
              </li>
              <li>
                <span>CUD MASTICATION CYCLES</span>
                <strong>42,000 jaw strokes / day</strong>
              </li>
              <li>
                <span>THORACIC SKELETAL FRAME</span>
                <strong>13 rib pairs · 6 lumbar vertebrae</strong>
              </li>
            </ul>
          </div>
        </aside>
      </section>

      <footer className="ox-canon-visc-footer">
        <div className="ox-canon-visc-specimen-tag">
          <span className="ox-canon-visc-rivet" aria-hidden="true" />
          <div className="ox-canon-visc-tag-inner">
            <span className="ox-canon-visc-tag-cat">MUSEUM ANATOMICUM · SPECIMEN NO. 35-A</span>
            <span className="ox-canon-visc-signature">SET XXXV · DESIGNED BY GEMINI 4 ARGON</span>
          </div>
          <span className="ox-canon-visc-rivet" aria-hidden="true" />
        </div>
      </footer>
    </main>
  )
}
