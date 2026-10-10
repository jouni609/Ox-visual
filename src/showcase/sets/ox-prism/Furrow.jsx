
import './furrow.css'
import { motion } from 'framer-motion'

function FurrowOx({ tone }) {
  const isNear = tone === 'near'
  const primaryFill = isNear ? '#1F4E5A' : '#E0592A'
  const secondaryFill = isNear ? '#163B44' : '#B83E16'
  const patternUrl = isNear ? 'url(#ox-prism-fur-pattern-orange)' : 'url(#ox-prism-fur-pattern-teal)'
  const patternOpacity = isNear ? 0.38 : 0.32
  const strokeColor = '#1F4E5A'
  const accentColor = isNear ? '#E0592A' : '#1F4E5A'
  const hoofColor = '#163B44'

  return (
    <g>
      <motion.g
        style={{ transformOrigin: '240px 230px' }}
        animate={{ rotate: isNear ? [10, -10, 10] : [-10, 10, -10] }}
        transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
      >
        <path
          d="M 230 225 C 245 255 240 285 225 305 L 230 350 L 222 365 L 248 365 L 244 350 L 246 305 C 265 285 275 255 270 225 Z"
          fill={secondaryFill}
        />
        <polygon points="222,354 248,354 244,365 222,365" fill={hoofColor} />
        <polygon points="234,365 236,357 238,365" fill="#EFE3C8" />
      </motion.g>

      <motion.g
        style={{ transformOrigin: '515px 245px' }}
        animate={{ rotate: isNear ? [-10, 10, -10] : [10, -10, 10] }}
        transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
      >
        <path
          d="M 500 245 L 508 305 L 510 350 L 502 365 L 528 365 L 524 350 L 526 305 L 525 245 Z"
          fill={secondaryFill}
        />
        <polygon points="502,354 528,354 524,365 502,365" fill={hoofColor} />
        <polygon points="514,365 516,357 518,365" fill="#EFE3C8" />
      </motion.g>

      <motion.g
        animate={{ y: [0, -2.5, 0, -2.5, 0] }}
        transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
      >
        <path
          d="M 175 135 C 160 170 156 215 158 265 C 160 295 162 315 164 325"
          fill="none"
          stroke={primaryFill}
          strokeWidth="4"
        />
        <path
          d="M 164 320 C 154 330 154 352 164 362 C 174 352 174 330 164 320 Z"
          fill={accentColor}
        />

        <path
          d="M 460 95 C 410 118 365 125 310 120 C 260 115 215 105 175 135 C 145 165 145 200 148 230 C 152 255 165 268 185 270 C 210 270 235 255 245 240 C 280 275 330 295 380 295 C 430 295 465 275 490 255 C 515 248 530 228 535 198 C 532 168 505 130 475 110 C 468 102 464 98 460 95 Z"
          fill={primaryFill}
        />
        <path
          d="M 460 95 C 410 118 365 125 310 120 C 260 115 215 105 175 135 C 145 165 145 200 148 230 C 152 255 165 268 185 270 C 210 270 235 255 245 240 C 280 275 330 295 380 295 C 430 295 465 275 490 255 C 515 248 530 228 535 198 C 532 168 505 130 475 110 C 468 102 464 98 460 95 Z"
          fill={patternUrl}
          opacity={patternOpacity}
        />

        <path
          d="M 535 198 C 560 220 545 265 515 275 C 495 270 485 255 480 245 C 505 245 525 225 535 198 Z"
          fill={primaryFill}
          stroke={accentColor}
          strokeWidth="2.5"
        />

        <path
          d="M 535 145 C 555 165 580 190 605 215 L 610 258 L 580 260 C 562 252 548 228 540 200 C 532 175 530 155 535 145 Z"
          fill={primaryFill}
        />
        <polygon points="595,215 610,215 610,258 580,260 580,235" fill={secondaryFill} />

        <ellipse cx="598" cy="242" rx="4.5" ry="6.5" fill="#EFE3C8" />
        <ellipse cx="598" cy="242" rx="2.5" ry="4" fill="#163B44" />

        <ellipse cx="565" cy="182" rx="7" ry="5.5" fill="#EFE3C8" />
        <ellipse cx="565" cy="182" rx="4" ry="4" fill={secondaryFill} />

        <path
          d="M 526 140 C 532 110 545 80 562 62 C 554 82 546 112 540 138 Z"
          fill="#EFE3C8"
          stroke={strokeColor}
          strokeWidth="2.5"
        />
        <polygon points="558,68 562,62 560,74" fill="#163B44" />

        <path
          d="M 536 144 C 548 116 565 86 585 72 C 572 94 562 124 554 148 Z"
          fill="#EFE3C8"
          stroke={strokeColor}
          strokeWidth="3"
        />
        <polygon points="580,78 585,72 583,84" fill="#163B44" />

        <path
          d="M 530 165 C 505 162 485 168 475 174 C 490 180 512 182 528 178 Z"
          fill={primaryFill}
          stroke={accentColor}
          strokeWidth="2"
        />
      </motion.g>

      <motion.g
        style={{ transformOrigin: '210px 230px' }}
        animate={{ rotate: isNear ? [-10, 10, -10] : [10, -10, 10] }}
        transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
      >
        <path
          d="M 185 225 C 205 255 200 285 185 305 L 192 350 L 184 365 L 210 365 L 206 350 L 208 305 C 228 285 240 255 235 225 Z"
          fill={primaryFill}
        />
        <polygon points="184,354 210,354 206,365 184,365" fill={hoofColor} />
        <polygon points="196,365 198,357 200,365" fill="#EFE3C8" />
      </motion.g>

      <motion.g
        style={{ transformOrigin: '480px 245px' }}
        animate={{ rotate: isNear ? [10, -10, 10] : [-10, 10, -10] }}
        transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
      >
        <path
          d="M 465 245 L 472 305 L 474 350 L 466 365 L 492 365 L 488 350 L 490 305 L 490 245 Z"
          fill={primaryFill}
        />
        <polygon points="466,354 492,354 488,365 466,365" fill={hoofColor} />
        <polygon points="478,365 480,357 482,365" fill="#EFE3C8" />
      </motion.g>
    </g>
  )
}

export default function Furrow() {
  return (
    <div className="th-fur ox-prism-fur-root">
      <header className="ox-prism-fur-header-bar">
        <div className="ox-prism-fur-meta-left">
          <span className="ox-prism-fur-plate-pill">PLATE 03</span>
          <span className="ox-prism-fur-reg-target" aria-hidden="true">&#8853; REG. MK 03-B</span>
          <span className="ox-prism-fur-sub-meta">LABOUR &middot; TWO-BEAST PLOUGH TEAM</span>
        </div>
        <div className="ox-prism-fur-meta-right">
          <span className="ox-prism-fur-ink-swatch ox-prism-fur-ink-teal">TEAL #1F4E5A</span>
          <span className="ox-prism-fur-ink-swatch ox-prism-fur-ink-orange">ORANGE #E0592A</span>
          <span className="ox-prism-fur-ink-swatch ox-prism-fur-ink-screen">100 LPI SCREEN</span>
        </div>
      </header>

      <section className="ox-prism-fur-hero">
        <div className="ox-prism-fur-panoramic-wrap">
          <div className="ox-prism-fur-title-overlay">
            <h1 className="ox-prism-fur-title">
              <span className="ox-prism-fur-title-line">THE</span>
              <span className="ox-prism-fur-title-line">FURROW</span>
            </h1>
            <p className="ox-prism-fur-title-sub">
              ANATOMY OF THE OPEN-FIELD PLOUGH TEAM &middot; DRAFT MECHANICS, ACRE GEOMETRY &amp; YOKE KINEMATICS
            </p>
          </div>

          <div className="ox-prism-fur-svg-container">
            <svg
              className="ox-prism-fur-panoramic-svg"
              viewBox="0 0 1500 580"
              aria-hidden="true"
              preserveAspectRatio="xMidYMid meet"
            >
              <defs>
                <pattern
                  id="ox-prism-fur-pattern-orange"
                  width="7"
                  height="7"
                  patternUnits="userSpaceOnUse"
                  patternTransform="rotate(45)"
                >
                  <circle cx="3.5" cy="3.5" r="1.8" fill="#E0592A" />
                </pattern>

                <pattern
                  id="ox-prism-fur-pattern-teal"
                  width="7"
                  height="7"
                  patternUnits="userSpaceOnUse"
                  patternTransform="rotate(15)"
                >
                  <circle cx="3.5" cy="3.5" r="1.8" fill="#1F4E5A" />
                </pattern>

                <pattern
                  id="ox-prism-fur-pattern-umber"
                  width="9"
                  height="9"
                  patternUnits="userSpaceOnUse"
                  patternTransform="rotate(60)"
                >
                  <circle cx="4.5" cy="4.5" r="2.5" fill="#6B4426" />
                </pattern>

                <pattern
                  id="ox-prism-fur-furrow-pattern"
                  width="120"
                  height="110"
                  patternUnits="userSpaceOnUse"
                >
                  <path
                    d="M 0 12 L 120 12 M 0 38 L 120 38 M 0 64 L 120 64 M 0 90 L 120 90"
                    stroke="#1F4E5A"
                    strokeWidth="1.2"
                    strokeDasharray="4 6"
                  />
                </pattern>
              </defs>

              <rect x="0" y="0" width="1500" height="350" fill="#EFE3C8" />
              <rect x="0" y="240" width="1500" height="110" fill="url(#ox-prism-fur-pattern-orange)" opacity="0.14" />

              <circle cx="1340" cy="110" r="75" fill="none" stroke="#E0592A" strokeWidth="2.5" />
              <circle cx="1340" cy="110" r="66" fill="url(#ox-prism-fur-pattern-orange)" opacity="0.32" />
              <line x1="1340" y1="15" x2="1340" y2="205" stroke="#E0592A" strokeWidth="1" strokeDasharray="3 3" />
              <line x1="1245" y1="110" x2="1435" y2="110" stroke="#E0592A" strokeWidth="1" strokeDasharray="3 3" />

              <line x1="0" y1="350" x2="1500" y2="350" stroke="#1F4E5A" strokeWidth="1.5" strokeDasharray="6 4" />
              <path
                d="M 0 348 Q 400 338 800 348 T 1500 344"
                fill="none"
                stroke="#E0592A"
                strokeWidth="1"
                opacity="0.45"
              />

              <g>
                <polygon points="0,350 1500,350 1500,580 0,580" fill="#EFE3C8" />
                <polygon points="0,350 1500,350 1500,580 0,580" fill="url(#ox-prism-fur-pattern-umber)" opacity="0.36" />

                <motion.g
                  animate={{ x: [0, -120] }}
                  transition={{ repeat: Infinity, duration: 1.6, ease: 'linear' }}
                >
                  <rect x="-120" y="350" width="1740" height="230" fill="url(#ox-prism-fur-furrow-pattern)" opacity="0.5" />
                  <line x1="-120" y1="390" x2="1620" y2="390" stroke="#1F4E5A" strokeWidth="2" />
                  <line x1="-120" y1="428" x2="1620" y2="428" stroke="#1F4E5A" strokeWidth="2.5" />
                  <line x1="-120" y1="470" x2="1620" y2="470" stroke="#1F4E5A" strokeWidth="3" />
                  <line x1="-120" y1="515" x2="1620" y2="515" stroke="#1F4E5A" strokeWidth="3.5" />
                  <line x1="-120" y1="562" x2="1620" y2="562" stroke="#1F4E5A" strokeWidth="4" />
                </motion.g>

                <path
                  d="M 120 350 L -70 580 M 290 350 L 80 580 M 460 350 L 230 580 M 630 350 L 380 580 M 800 350 L 530 580 M 970 350 L 680 580 M 1140 350 L 830 580 M 1310 350 L 980 580 M 1480 350 L 1130 580"
                  stroke="#1F4E5A"
                  strokeWidth="1.2"
                  opacity="0.32"
                />
              </g>

              <g>
                <motion.g
                  animate={{ y: [-4, 3, -4], x: [0, 6, 0] }}
                  transition={{ repeat: Infinity, duration: 2.2, ease: 'easeInOut' }}
                >
                  <path
                    d="M 220 225 C 235 210 250 215 265 228 C 250 225 240 229 232 235 C 230 230 225 228 220 225 Z"
                    fill="#1F4E5A"
                  />
                </motion.g>

                <motion.g
                  animate={{ y: [3, -5, 3], x: [-3, 5, -3] }}
                  transition={{ repeat: Infinity, duration: 2.6, ease: 'easeInOut' }}
                >
                  <path
                    d="M 330 255 C 342 243 356 247 368 257 C 356 255 348 258 342 263 C 338 259 334 257 330 255 Z"
                    fill="#1F4E5A"
                  />
                </motion.g>

                <motion.g
                  animate={{ y: [-2, 2, -2] }}
                  transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
                >
                  <path
                    d="M 130 455 C 136 450 145 452 150 457 C 143 457 139 461 136 464 C 134 460 132 458 130 455 Z"
                    fill="#1F4E5A"
                  />
                </motion.g>
              </g>

              <g id="ox-prism-fur-plough-assembly">
                <path
                  d="M 280 435 C 250 380 205 315 145 265"
                  fill="none"
                  stroke="#1F4E5A"
                  strokeWidth="6"
                  strokeLinecap="round"
                />
                <path
                  d="M 292 442 C 265 390 222 330 168 285"
                  fill="none"
                  stroke="#E0592A"
                  strokeWidth="4.5"
                  strokeLinecap="round"
                />
                <line x1="180" y1="300" x2="202" y2="322" stroke="#1F4E5A" strokeWidth="4" />
                <line x1="225" y1="350" x2="248" y2="375" stroke="#1F4E5A" strokeWidth="4" />

                <path
                  d="M 470 385 L 275 435 L 270 458 L 470 398 Z"
                  fill="#1F4E5A"
                />
                <path
                  d="M 468 387 L 277 435 L 273 452 L 468 395 Z"
                  fill="url(#ox-prism-fur-pattern-orange)"
                  opacity="0.6"
                />

                <path
                  d="M 370 405 L 365 488 L 374 488 L 378 405 Z"
                  fill="#1F4E5A"
                  stroke="#E0592A"
                  strokeWidth="1"
                />

                <polygon points="270,488 320,488 308,468" fill="#1F4E5A" />
                <path
                  d="M 285 488 C 330 470 375 450 410 438 C 400 465 355 490 300 494 Z"
                  fill="#E0592A"
                  stroke="#1F4E5A"
                  strokeWidth="2"
                />

                <path
                  d="M 305 488 C 345 458 390 450 425 470 C 408 492 360 502 315 498 Z"
                  fill="url(#ox-prism-fur-pattern-umber)"
                />
                <path
                  d="M 350 478 Q 390 455 435 475"
                  fill="none"
                  stroke="#6B4426"
                  strokeWidth="4"
                />

                <circle cx="470" cy="390" r="7" fill="#1F4E5A" />
                <circle cx="470" cy="390" r="4" fill="#EFE3C8" />
              </g>

              <path
                d="M 470 390 Q 740 330 1005 240"
                fill="none"
                stroke="#1F4E5A"
                strokeWidth="4"
                strokeDasharray="6 4"
              />
              <path
                d="M 472 392 Q 742 332 1007 242"
                fill="none"
                stroke="#E0592A"
                strokeWidth="1.5"
                strokeDasharray="6 4"
              />

              <g id="ox-prism-fur-far-ox" transform="translate(535, 102)">
                <FurrowOx tone="far" />
              </g>

              <g id="ox-prism-fur-near-ox" transform="translate(470, 102)">
                <FurrowOx tone="near" />
              </g>

              <g id="ox-prism-fur-yoke-assembly">
                <path
                  d="M 940 220 C 975 210 1010 200 1065 190 C 1072 188 1075 194 1070 200 C 1015 210 980 220 945 230 C 938 232 935 224 940 220 Z"
                  fill="#E0592A"
                  stroke="#1F4E5A"
                  strokeWidth="2.5"
                />
                <path
                  d="M 965 215 C 955 250 955 305 980 315 C 1000 305 1000 250 990 215"
                  fill="none"
                  stroke="#1F4E5A"
                  strokeWidth="6.5"
                  strokeLinecap="round"
                />
                <path
                  d="M 1030 195 C 1020 230 1020 285 1045 295 C 1065 285 1065 230 1055 195"
                  fill="none"
                  stroke="#E0592A"
                  strokeWidth="6.5"
                  strokeLinecap="round"
                />
                <circle cx="1005" cy="240" r="8" fill="none" stroke="#1F4E5A" strokeWidth="3.5" />
              </g>

              <rect x="2" y="2" width="1496" height="576" fill="none" stroke="#1F4E5A" strokeWidth="2" />
              <line x1="16" y1="16" x2="36" y2="16" stroke="#E0592A" strokeWidth="2" />
              <line x1="16" y1="16" x2="16" y2="36" stroke="#E0592A" strokeWidth="2" />
              <line x1="1484" y1="16" x2="1464" y2="16" stroke="#E0592A" strokeWidth="2" />
              <line x1="1484" y1="16" x2="1484" y2="36" stroke="#E0592A" strokeWidth="2" />
              <line x1="16" y1="564" x2="36" y2="564" stroke="#E0592A" strokeWidth="2" />
              <line x1="16" y1="564" x2="16" y2="544" stroke="#E0592A" strokeWidth="2" />
              <line x1="1484" y1="564" x2="1464" y2="564" stroke="#E0592A" strokeWidth="2" />
              <line x1="1484" y1="564" x2="1484" y2="544" stroke="#E0592A" strokeWidth="2" />
            </svg>
          </div>
        </div>

        <div className="ox-prism-fur-metrics-bar">
          <div className="ox-prism-fur-metric-cell">
            <div className="ox-prism-fur-metric-num">01 / CONTINUOUS PULL</div>
            <div className="ox-prism-fur-metric-val">1,800 N</div>
            <div className="ox-prism-fur-metric-sub">Tractive effort at 1.8 mph</div>
          </div>
          <div className="ox-prism-fur-metric-cell">
            <div className="ox-prism-fur-metric-num">02 / STATUTE ACRE</div>
            <div className="ox-prism-fur-metric-val">43,560 FT&sup2;</div>
            <div className="ox-prism-fur-metric-sub">One yoke daylight stint</div>
          </div>
          <div className="ox-prism-fur-metric-cell">
            <div className="ox-prism-fur-metric-num">03 / FURROW LENGTH</div>
            <div className="ox-prism-fur-metric-val">220 YARDS</div>
            <div className="ox-prism-fur-metric-sub">The Saxon furlong draft run</div>
          </div>
          <div className="ox-prism-fur-metric-cell">
            <div className="ox-prism-fur-metric-num">04 / LINEAR TILLAGE</div>
            <div className="ox-prism-fur-metric-val">8.25 MILES</div>
            <div className="ox-prism-fur-metric-sub">Distance trodden per acre</div>
          </div>
        </div>
      </section>

      <section className="ox-prism-fur-section">
        <div className="ox-prism-fur-container">
          <span className="ox-prism-fur-section-badge">FIELD LEDGER RECORD</span>
          <h2 className="ox-prism-fur-section-h2">THE DAY LEDGER: BREADTH &amp; TOIL</h2>
          <p className="ox-prism-fur-lead">
            In customary Saxon tenure, the acre was never an abstract geometric polygon; it was an exact biological unit of fatigue. One yoke of working bullocks, driven at a steady pacing stride of 1.8 miles per hour, overturned an acre of heavy clay loam between morning bell and late afternoon water. The furrow-long run of 220 yards allowed the draft team to lean against the hickory bows without compressing their windpipes, pausing only at each headland while the ploughman scraped sticky marl from the mouldboard.
          </p>

          <div className="ox-prism-fur-ledger-table-wrap">
            <table className="ox-prism-fur-table">
              <thead>
                <tr>
                  <th>Hour</th>
                  <th>Tackle &amp; Stint</th>
                  <th>Linear Measure</th>
                  <th>Turned Area</th>
                  <th>Draft Resistance</th>
                  <th>Bailiff Notes &amp; Cattle Welfare</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="ox-prism-fur-table-time">05:30</td>
                  <td className="ox-prism-fur-table-bold">Yoking at open byre stanchions</td>
                  <td>0 rods</td>
                  <td>0.00 acres</td>
                  <td>Static hitch</td>
                  <td>Tallow grease applied to axle spindles and clevis iron; both beasts quiet.</td>
                </tr>
                <tr>
                  <td className="ox-prism-fur-table-time">06:15</td>
                  <td className="ox-prism-fur-table-bold">Strike opening crown furrow</td>
                  <td>1 furlong (220 yd)</td>
                  <td>0.10 acres</td>
                  <td>1,650 N</td>
                  <td>Coulter slicing clean through couch-grass sod; 8-inch depth verified.</td>
                </tr>
                <tr>
                  <td className="ox-prism-fur-table-time">08:00</td>
                  <td className="ox-prism-fur-table-bold">Third bout completed on ridge</td>
                  <td>4 furlongs (880 yd)</td>
                  <td>0.32 acres</td>
                  <td>1,800 N</td>
                  <td>Near-ox steps in open furrow; far-ox holds level footing on unploughed land.</td>
                </tr>
                <tr>
                  <td className="ox-prism-fur-table-time">10:30</td>
                  <td className="ox-prism-fur-table-bold">Noon bait &amp; rumination rest</td>
                  <td>7 furlongs (1,540 yd)</td>
                  <td>0.58 acres</td>
                  <td>Unhitched</td>
                  <td>Team unpinned at east headland for spring water, clover hay and rumination.</td>
                </tr>
                <tr>
                  <td className="ox-prism-fur-table-time">11:45</td>
                  <td className="ox-prism-fur-table-bold">Reyoke; second shift begun</td>
                  <td>8 furlongs (1,760 yd)</td>
                  <td>0.66 acres</td>
                  <td>1,750 N</td>
                  <td>Teamster calls &quot;Hike Broad&quot;; beasts lean forward into hickory bows in unison.</td>
                </tr>
                <tr>
                  <td className="ox-prism-fur-table-time">14:00</td>
                  <td className="ox-prism-fur-table-bold">Ninth bout; uphill gradient</td>
                  <td>11 furlongs (2,420 yd)</td>
                  <td>0.86 acres</td>
                  <td>2,050 N</td>
                  <td>Heavy flint subsoil encountered; draft load rises 250 N on rising brow.</td>
                </tr>
                <tr>
                  <td className="ox-prism-fur-table-time">15:30</td>
                  <td className="ox-prism-fur-table-bold">Headland furrow finished out</td>
                  <td>13.2 furlongs (2,904 yd)</td>
                  <td>1.02 acres</td>
                  <td>Draft finished</td>
                  <td>One statute acre completed; bows unpinned; cattle driven to cooling pond.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="ox-prism-fur-ledger-cards">
            <div className="ox-prism-fur-card">
              <span className="ox-prism-fur-card-tag">SAXON MEASURE &middot; FURH-LANG</span>
              <h3 className="ox-prism-fur-card-h3">The Furlong: Furrow-Long</h3>
              <p className="ox-prism-fur-card-body">
                The furlong (literally &quot;furrow-long&quot;) was standardized as 40 rods or 220 yards (660 feet). This precise distance represents the physiological maximum an ox team could drag an iron-shod wooden turnwrest plough through heavy English loam before pulmonary distress forced a halt. At the furrow end lay the headland, where the team swung round across sixteen feet of unploughed margin to begin the reciprocal cut.
              </p>
              <ul className="ox-prism-fur-spec-list">
                <li className="ox-prism-fur-spec-item">
                  <span className="ox-prism-fur-spec-k">ROD MEASURE</span>
                  <span className="ox-prism-fur-spec-v">40 PERCHES / RODS</span>
                </li>
                <li className="ox-prism-fur-spec-item">
                  <span className="ox-prism-fur-spec-k">LINEAR FEET</span>
                  <span className="ox-prism-fur-spec-v">660 FEET (201.16 M)</span>
                </li>
                <li className="ox-prism-fur-spec-item">
                  <span className="ox-prism-fur-spec-k">HEADLAND TURN</span>
                  <span className="ox-prism-fur-spec-v">16 FT RADIUS ARC</span>
                </li>
              </ul>
            </div>

            <div className="ox-prism-fur-card">
              <span className="ox-prism-fur-card-tag">STATUTE GEOMETRY &middot; &AElig;CER</span>
              <h3 className="ox-prism-fur-card-h3">The Acre: The Day-Work</h3>
              <p className="ox-prism-fur-card-body">
                Defined under Edward I in the <span lang="la">Statutum de Admensuratione Terrae</span> as a strip forty rods long by four rods wide (one chain by one furlong, 66 &times; 660 feet). In turning an acre with a standard ten-inch furrow slice, the plough team performs ninety-nine parallel bouts, treading 8.25 miles of soil and lifting approximately 1,200 tons of earth against the iron breast.
              </p>
              <ul className="ox-prism-fur-spec-list">
                <li className="ox-prism-fur-spec-item">
                  <span className="ox-prism-fur-spec-k">STRIP WIDTH</span>
                  <span className="ox-prism-fur-spec-v">4 RODS (66 FEET)</span>
                </li>
                <li className="ox-prism-fur-spec-item">
                  <span className="ox-prism-fur-spec-k">PARALLEL BOUTS</span>
                  <span className="ox-prism-fur-spec-v">99 SLICES AT 10 INCHES</span>
                </li>
                <li className="ox-prism-fur-spec-item">
                  <span className="ox-prism-fur-spec-k">SOIL MASS TURNED</span>
                  <span className="ox-prism-fur-spec-v">APPROX. 1,200 TONS</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="ox-prism-fur-section">
        <div className="ox-prism-fur-container">
          <span className="ox-prism-fur-section-badge">TACKLE COMPARATIVE</span>
          <h2 className="ox-prism-fur-section-h2">THE YOKE &amp; TACKLE: DRAFT HARNESS</h2>
          <p className="ox-prism-fur-lead">
            Unlike equines whose draft relies on the soft muscle bed of the shoulder collar, bovines transmit tractive force directly through the skeletal mass of the cervical spine and withers hump. The wooden neck yoke locks this skeleton into a rigid mechanical union with the implement.
          </p>

          <div className="ox-prism-fur-yoke-grid">
            <div className="ox-prism-fur-card">
              <span className="ox-prism-fur-card-tag">PRIMARY BEAM</span>
              <h3 className="ox-prism-fur-card-h3">The Withers Yoke</h3>
              <p className="ox-prism-fur-card-body">
                Carved from seasoned white ash or sugar maple, hollowed into twin neck saddles that rest forward of the muscular withers hump. The beam bears directly upon the heavy cervical vertebrae. Pushing power is delivered through skeletal mass rather than soft muscular tension, allowing oxen to exert sustained continuous loads without shoulder galling.
              </p>
              <ul className="ox-prism-fur-spec-list">
                <li className="ox-prism-fur-spec-item">
                  <span className="ox-prism-fur-spec-k">TIMBER</span>
                  <span className="ox-prism-fur-spec-v">SEASONED WHITE ASH</span>
                </li>
                <li className="ox-prism-fur-spec-item">
                  <span className="ox-prism-fur-spec-k">WEIGHT</span>
                  <span className="ox-prism-fur-spec-v">32 LBS COMPLETE</span>
                </li>
                <li className="ox-prism-fur-spec-item">
                  <span className="ox-prism-fur-spec-k">BEAM SPREAD</span>
                  <span className="ox-prism-fur-spec-v">48 INCHES ON CENTERS</span>
                </li>
              </ul>
            </div>

            <div className="ox-prism-fur-card">
              <span className="ox-prism-fur-card-tag">RETENTION BOW</span>
              <h3 className="ox-prism-fur-card-h3">The Hickory Oxbow</h3>
              <p className="ox-prism-fur-card-body">
                Split shagbark hickory, heated in wood-ash steam pits for four hours and bent around an iron form. The U-shaped bow loops upward under the beast&apos;s throat and penetrates the beam mortises, secured with forged spring keys. An ill-fitted bow causes galls and tracheal constriction, while proper clearance permits complete neck extension during draft.
              </p>
              <ul className="ox-prism-fur-spec-list">
                <li className="ox-prism-fur-spec-item">
                  <span className="ox-prism-fur-spec-k">DIAMETER</span>
                  <span className="ox-prism-fur-spec-v">1.75 INCH TURNED</span>
                </li>
                <li className="ox-prism-fur-spec-item">
                  <span className="ox-prism-fur-spec-k">STEAM CYCLE</span>
                  <span className="ox-prism-fur-spec-v">4 HOURS AT 212&deg;F</span>
                </li>
                <li className="ox-prism-fur-spec-item">
                  <span className="ox-prism-fur-spec-k">FASTENING</span>
                  <span className="ox-prism-fur-spec-v">FORGED SPRING KEYS</span>
                </li>
              </ul>
            </div>

            <div className="ox-prism-fur-card">
              <span className="ox-prism-fur-card-tag">SOIL CUTTERS</span>
              <h3 className="ox-prism-fur-card-h3">Coulter, Share &amp; Board</h3>
              <p className="ox-prism-fur-card-body">
                The turning plough operates via three synchronized knife actions: the vertical forged coulter slices the surface sod; the chisel-pointed iron share shears the subsoil root mass horizontally; and the curved wooden mouldboard rolls the continuous slice 135 degrees into the open furrow cavity, burying weeds and aerating subsoil crumbs.
              </p>
              <ul className="ox-prism-fur-spec-list">
                <li className="ox-prism-fur-spec-item">
                  <span className="ox-prism-fur-spec-k">VERTICAL KNIFE</span>
                  <span className="ox-prism-fur-spec-v">FORGED STEEL COULTER</span>
                </li>
                <li className="ox-prism-fur-spec-item">
                  <span className="ox-prism-fur-spec-k">UNDER-SHARE</span>
                  <span className="ox-prism-fur-spec-v">CHILLED CAST IRON</span>
                </li>
                <li className="ox-prism-fur-spec-item">
                  <span className="ox-prism-fur-spec-k">INVERSION ROLL</span>
                  <span className="ox-prism-fur-spec-v">135&deg; COMPLETE ROTATION</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="ox-prism-fur-section">
        <div className="ox-prism-fur-container">
          <span className="ox-prism-fur-section-badge">TEAMSTER VOCAL PHONETICS</span>
          <h2 className="ox-prism-fur-section-h2">VOICE CALLS OF THE FURROW: THE TEAMSTER&apos;S CODE</h2>
          <p className="ox-prism-fur-lead">
            Oxen work without bits, bridles, or reins. The teamster controls half a ton of walking bone entirely through voice pitch, rhythmic syllable cadence, and the gentle touch of a ten-foot hazel goad on the flank.
          </p>

          <div className="ox-prism-fur-commands-grid">
            <div className="ox-prism-fur-command-card">
              <div className="ox-prism-fur-command-word">GEE</div>
              <div className="ox-prism-fur-command-ipa">/d&#658;i&#720;/</div>
              <span className="ox-prism-fur-command-action">TURN RIGHT / OFF-SIDE</span>
              <p className="ox-prism-fur-command-desc">
                Directs the near ox (furrow steer) to step away from the open furrow wall while the off ox shortens its stride. Pitch rises sharply on the vowel to prompt pivot acceleration.
              </p>
            </div>

            <div className="ox-prism-fur-command-card">
              <div className="ox-prism-fur-command-word">HAW</div>
              <div className="ox-prism-fur-command-ipa">/h&#596;&#720;/</div>
              <span className="ox-prism-fur-command-action">TURN LEFT / LAND-SIDE</span>
              <p className="ox-prism-fur-command-desc">
                Near ox pivots left toward the ploughed land while the off ox swings a wider outer circle. Call is delivered with a guttural, prolonged bass tone.
              </p>
            </div>

            <div className="ox-prism-fur-command-card">
              <div className="ox-prism-fur-command-word">WHOA</div>
              <div className="ox-prism-fur-command-ipa">/wo&#650;/</div>
              <span className="ox-prism-fur-command-action">IMMEDIATE ARREST / HOLD</span>
              <p className="ox-prism-fur-command-desc">
                Both beasts instantly set their cloven hooves into the furrow clay, locking hocks and arresting draft chain momentum within six inches of travel.
              </p>
            </div>

            <div className="ox-prism-fur-command-card">
              <div className="ox-prism-fur-command-word">BACK</div>
              <div className="ox-prism-fur-command-ipa">/b&aelig;k/</div>
              <span className="ox-prism-fur-command-action">STEP IN REVERSE</span>
              <p className="ox-prism-fur-command-desc">
                Oxen lower their polls and step backward one pace at a time to slacken the draft chain, permitting the ploughman to clear buried boulders or tree roots.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="ox-prism-fur-colophon-section">
        <div className="ox-prism-fur-colophon-inner">
          <div className="ox-prism-fur-colophon-specs">
            <h3 className="ox-prism-fur-colophon-h3">PRINT COLOPHON &middot; RISOGRAPH WORKSHOP</h3>
            <p className="ox-prism-fur-colophon-p">
              PRINTED ON A DUAL-DRUM DIGITAL DUPLICATOR (GR3770) USING SOY-OIL EMULSION INKS: RISOGRAPH TEAL (S-4254) AND FLUORESCENT ORANGE (S-4252).
            </p>
            <p className="ox-prism-fur-colophon-p">
              STOCK: 140GSM UNBLEACHED RAG FIBRE MANILA WITH VISIBLE CHAFF SPECKS. DRUM SEPARATIONS ENGRAVED AT 100 LPI ROUND DOT SCREEN WITH INTENTIONAL 2.5PX MECHANICAL REGISTRATION MISALIGNMENT.
            </p>
          </div>

          <div className="ox-prism-fur-stamp-wrap">
            <div className="ox-prism-fur-stamp">
              <div>SET XXXII &middot; DESIGNED BY ANTIGRAVITY</div>
              <span className="ox-prism-fur-stamp-sub">BOARD OF AGRICULTURE &middot; SURVEY IMPRINT</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
