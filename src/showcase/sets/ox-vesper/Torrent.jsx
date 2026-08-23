import { useMemo } from 'react'
import { motion } from 'framer-motion'
import './torrent.css'

export default function Torrent() {
  const rainStreaks = useMemo(() => {
    return Array.from({ length: 32 }, (_, i) => ({
      id: i,
      left: `${(i * 3.125 + (i % 5) * 0.75) % 100}%`,
      delay: `${(i * 0.17) % 1.6}s`,
      duration: `${1.1 + (i % 4) * 0.25}s`,
      height: `${80 + (i % 5) * 35}px`,
      opacity: 0.35 + (i % 4) * 0.15,
    }))
  }, [])

  return (
    <div
      className="th-ox-vesper ox-vesper-torrent"
      style={{ minHeight: '100vh', position: 'relative', overflowX: 'hidden' }}
    >
      <div className="ox-vesper-torrent-rain-overlay" aria-hidden="true">
        {rainStreaks.map((s) => (
          <span
            key={s.id}
            className="ox-vesper-torrent-rain-streak"
            style={{
              left: s.left,
              height: s.height,
              opacity: s.opacity,
              animationDelay: s.delay,
              animationDuration: s.duration,
            }}
          />
        ))}
      </div>

      <header className="ox-vesper-torrent-mist-zone">
        <div className="ox-vesper-torrent-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <div className="ox-vesper-torrent-badge-row">
              <span className="ox-vesper-torrent-kicker">BUBALUS BUBALIS</span>
              <span className="ox-vesper-torrent-badge-dot" aria-hidden="true" />
              <span className="ox-vesper-torrent-badge-meta">DELTA MONSOON REGIME · PRECIPITATION 3,400 MM</span>
            </div>

            <h1 className="ox-vesper-torrent-h1">TORRENT</h1>

            <p className="ox-vesper-torrent-subhead">
              The Water Buffalo in Monsoon · Elemental Resilience in the Surge
            </p>
          </motion.div>
        </div>
      </header>

      <section className="ox-vesper-torrent-hero-stage" aria-label="Water buffalo submerged in floodwater">
        <div className="ox-vesper-torrent-svg-wrapper">
          <svg
            className="ox-vesper-torrent-buffalo-svg"
            viewBox="0 0 1400 740"
            aria-hidden="true"
            focusable="false"
          >
            <defs>
              <linearGradient id="ox-vesper-torrent-sky-band" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#E8F0ED" stopOpacity="1" />
                <stop offset="50%" stopColor="#C4E2D9" stopOpacity="0.9" />
                <stop offset="85%" stopColor="#87CEBC" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#1A6B5A" stopOpacity="0.9" />
              </linearGradient>

              <linearGradient id="ox-vesper-torrent-deep-water-band" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#1A6B5A" stopOpacity="0.95" />
                <stop offset="35%" stopColor="#104E4F" stopOpacity="0.98" />
                <stop offset="70%" stopColor="#0D3B3E" stopOpacity="1" />
                <stop offset="100%" stopColor="#072023" stopOpacity="1" />
              </linearGradient>

              <linearGradient id="ox-vesper-torrent-horn-left-grad" x1="0%" y1="50%" x2="100%" y2="50%">
                <stop offset="0%" stopColor="#1E2221" />
                <stop offset="30%" stopColor="#3A3A3A" />
                <stop offset="70%" stopColor="#4E5654" />
                <stop offset="100%" stopColor="#252A29" />
              </linearGradient>

              <linearGradient id="ox-vesper-torrent-horn-right-grad" x1="0%" y1="50%" x2="100%" y2="50%">
                <stop offset="0%" stopColor="#252A29" />
                <stop offset="30%" stopColor="#4E5654" />
                <stop offset="70%" stopColor="#3A3A3A" />
                <stop offset="100%" stopColor="#1E2221" />
              </linearGradient>

              <linearGradient id="ox-vesper-torrent-hide-grad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#444C4A" />
                <stop offset="45%" stopColor="#3A3A3A" />
                <stop offset="80%" stopColor="#2D3332" />
                <stop offset="100%" stopColor="#202424" />
              </linearGradient>

              <linearGradient id="ox-vesper-torrent-muzzle-grad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#343C3A" />
                <stop offset="50%" stopColor="#262D2C" />
                <stop offset="100%" stopColor="#181D1C" />
              </linearGradient>

              <linearGradient id="ox-vesper-torrent-sheen-grad" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#87CEBC" stopOpacity="0" />
                <stop offset="50%" stopColor="#E8F0ED" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#87CEBC" stopOpacity="0" />
              </linearGradient>

              <filter id="ox-vesper-torrent-water-blur" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="6" />
              </filter>
            </defs>

            <rect x="0" y="0" width="1400" height="460" fill="url(#ox-vesper-torrent-sky-band)" />

            <g className="ox-vesper-torrent-sky-drifts" opacity="0.4">
              <path d="M 0,220 Q 350,180 700,210 T 1400,190 L 1400,460 L 0,460 Z" fill="#87CEBC" opacity="0.25" />
              <path d="M 0,310 Q 400,270 850,300 T 1400,280 L 1400,460 L 0,460 Z" fill="#1A6B5A" opacity="0.3" />
            </g>

            <g className="ox-vesper-torrent-submerged-body">
              <path
                d="M 260,460 C 240,540 310,640 460,690 C 600,730 800,730 940,690 C 1090,640 1160,540 1140,460 Z"
                fill="#0A2224"
                opacity="0.65"
                filter="url(#ox-vesper-torrent-water-blur)"
              />
              <path
                d="M 440,460 C 420,530 480,630 600,660 C 720,680 840,660 920,580 C 960,530 970,480 960,460 Z"
                fill="#07191A"
                opacity="0.8"
                filter="url(#ox-vesper-torrent-water-blur)"
              />
            </g>

            <motion.g
              animate={{ y: [0, -3.5, 0, 3.5, 0] }}
              transition={{
                duration: 4.2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <path
                d="M 680,360 C 780,350 920,380 1060,420 C 1080,426 1095,435 1100,442 L 980,442 C 880,410 780,390 680,390 Z"
                fill="#2D3231"
              />
              <path
                d="M 710,364 C 800,360 920,390 1050,425"
                stroke="#606F6C"
                strokeWidth="3.5"
                strokeLinecap="round"
                fill="none"
              />

              <g id="ox-vesper-torrent-horns">
                <path
                  d="M 560,370 C 440,250 300,190 160,190 C 80,240 45,310 60,370 C 70,388 90,398 100,395 C 105,370 150,290 260,260 C 400,300 520,380 545,400 Z"
                  fill="url(#ox-vesper-torrent-horn-left-grad)"
                  stroke="#1B201F"
                  strokeWidth="2"
                />

                <path
                  d="M 840,370 C 960,250 1100,190 1240,190 C 1320,240 1355,310 1340,370 C 1330,388 1310,398 1300,395 C 1295,370 1250,290 1140,260 C 1000,300 880,380 855,400 Z"
                  fill="url(#ox-vesper-torrent-horn-right-grad)"
                  stroke="#1B201F"
                  strokeWidth="2"
                />

                <path
                  d="M 520,320 C 420,245 280,205 160,205 C 100,205 65,245 65,320"
                  stroke="#87CEBC"
                  strokeWidth="3.5"
                  fill="none"
                  opacity="0.65"
                  strokeLinecap="round"
                />
                <path
                  d="M 880,320 C 980,245 1120,205 1240,205 C 1300,205 1335,245 1335,320"
                  stroke="#87CEBC"
                  strokeWidth="3.5"
                  fill="none"
                  opacity="0.65"
                  strokeLinecap="round"
                />

                <g stroke="#1A1F1E" strokeWidth="2.5" strokeLinecap="round" fill="none">
                  <path d="M 110,355 Q 130,335 145,325" />
                  <path d="M 155,295 Q 180,285 200,290" />
                  <path d="M 225,250 Q 250,255 270,275" />
                  <path d="M 305,230 Q 330,250 350,280" />
                  <path d="M 385,245 Q 410,275 430,310" />
                  <path d="M 465,285 Q 485,325 500,360" />

                  <path d="M 1290,355 Q 1270,335 1255,325" />
                  <path d="M 1245,295 Q 1220,285 1200,290" />
                  <path d="M 1175,250 Q 1150,255 1130,275" />
                  <path d="M 1095,230 Q 1070,250 1050,280" />
                  <path d="M 1015,245 Q 990,275 970,310" />
                  <path d="M 935,285 Q 915,325 900,360" />
                </g>
              </g>

              <g id="ox-vesper-torrent-ears">
                <path
                  d="M 545,395 C 490,400 440,430 425,455 C 445,465 480,455 530,425 Z"
                  fill="#2F3433"
                  stroke="#1D2120"
                  strokeWidth="1.5"
                />
                <path
                  d="M 495,415 C 465,430 445,445 440,452 C 455,455 480,448 510,430 Z"
                  fill="#1B1E1E"
                />

                <path
                  d="M 855,395 C 910,400 960,430 975,455 C 955,465 920,455 870,425 Z"
                  fill="#2F3433"
                  stroke="#1D2120"
                  strokeWidth="1.5"
                />
                <path
                  d="M 905,415 C 935,430 955,445 960,452 C 945,455 920,448 890,430 Z"
                  fill="#1B1E1E"
                />
              </g>

              <g id="ox-vesper-torrent-head">
                <path
                  d="M 550,375 C 570,350 630,340 700,340 C 770,340 830,350 850,375 C 865,410 825,450 810,470 C 800,500 780,515 760,520 C 730,525 670,525 640,520 C 620,515 600,500 590,470 C 575,450 535,410 550,375 Z"
                  fill="url(#ox-vesper-torrent-hide-grad)"
                  stroke="#202424"
                  strokeWidth="2"
                />

                <path
                  d="M 580,370 C 630,360 700,355 770,360 C 800,380 815,405 805,420 C 765,410 635,410 595,420 C 585,405 600,380 580,370 Z"
                  fill="#292F2E"
                />

                <g id="ox-vesper-torrent-eyes">
                  <path d="M 575,405 Q 605,395 635,410 Q 605,425 575,405 Z" fill="#181C1B" />
                  <ellipse cx="605" cy="410" rx="14" ry="7" fill="#283331" />
                  <ellipse cx="606" cy="410" rx="9" ry="6" fill="#0D1110" />
                  <circle cx="609" cy="408" r="3.5" fill="#FFFFFF" />
                  <circle cx="602" cy="412" r="1.5" fill="#87CEBC" />

                  <path d="M 825,405 Q 795,395 765,410 Q 795,425 825,405 Z" fill="#181C1B" />
                  <ellipse cx="795" cy="410" rx="14" ry="7" fill="#283331" />
                  <ellipse cx="794" cy="410" rx="9" ry="6" fill="#0D1110" />
                  <circle cx="791" cy="408" r="3.5" fill="#FFFFFF" />
                  <circle cx="798" cy="412" r="1.5" fill="#87CEBC" />
                </g>

                <path
                  d="M 695,365 L 705,365 L 715,465 L 685,465 Z"
                  fill="#546360"
                  opacity="0.45"
                />

                <path d="M 605,435 C 625,460 645,480 660,490" stroke="#1D2221" strokeWidth="3" fill="none" />
                <path d="M 795,435 C 775,460 755,480 740,490" stroke="#1D2221" strokeWidth="3" fill="none" />

                <path
                  d="M 625,475 C 640,465 760,465 775,475 C 790,495 780,520 755,528 C 720,534 680,534 645,528 C 620,520 610,495 625,475 Z"
                  fill="url(#ox-vesper-torrent-muzzle-grad)"
                  stroke="#181C1B"
                  strokeWidth="2"
                />

                <path
                  d="M 645,482 Q 700,475 755,482"
                  stroke="#788C88"
                  strokeWidth="2"
                  fill="none"
                  opacity="0.85"
                />

                <g id="ox-vesper-torrent-nostrils">
                  <path
                    d="M 645,498 C 645,490 660,488 672,496 C 676,505 660,515 650,512 Z"
                    fill="#0A0D0C"
                  />
                  <path
                    d="M 646,494 C 655,489 668,493 671,500"
                    stroke="#87CEBC"
                    strokeWidth="1.5"
                    fill="none"
                  />

                  <path
                    d="M 755,498 C 755,490 740,488 728,496 C 724,505 740,515 750,512 Z"
                    fill="#0A0D0C"
                  />
                  <path
                    d="M 754,494 C 745,489 732,493 729,500"
                    stroke="#87CEBC"
                    strokeWidth="1.5"
                    fill="none"
                  />
                </g>

                <circle cx="670" cy="535" r="2.5" fill="#E8F0ED" opacity="0.9" />
                <circle cx="700" cy="538" r="3" fill="#E8F0ED" opacity="0.95" />
                <circle cx="730" cy="534" r="2.5" fill="#E8F0ED" opacity="0.9" />
              </g>
            </motion.g>

            <rect x="0" y="460" width="1400" height="280" fill="url(#ox-vesper-torrent-deep-water-band)" />

            <g id="ox-vesper-torrent-water-ripples">
              <ellipse cx="700" cy="505" rx="140" ry="18" fill="none" stroke="#E8F0ED" strokeWidth="2.2" opacity="0.75" />
              <ellipse cx="700" cy="518" rx="260" ry="28" fill="none" stroke="#87CEBC" strokeWidth="1.8" opacity="0.55" />
              <ellipse cx="700" cy="535" rx="430" ry="42" fill="none" stroke="#87CEBC" strokeWidth="1.4" opacity="0.35" />
              <ellipse cx="700" cy="555" rx="620" ry="58" fill="none" stroke="#87CEBC" strokeWidth="1.1" opacity="0.2" />

              <path
                d="M 0,466 Q 180,458 360,470 Q 540,480 700,476 Q 880,466 1060,474 Q 1240,482 1400,466"
                stroke="#C8EAE2"
                strokeWidth="3.5"
                fill="none"
                opacity="0.85"
                strokeLinecap="round"
              />
              <path
                d="M 510,488 Q 700,502 890,488"
                stroke="#FFFFFF"
                strokeWidth="3"
                fill="none"
                opacity="0.9"
                strokeLinecap="round"
              />
              <path
                d="M 430,504 Q 700,522 970,504"
                stroke="#87CEBC"
                strokeWidth="2"
                fill="none"
                opacity="0.65"
                strokeLinecap="round"
              />
            </g>

            <g className="ox-vesper-torrent-rain-lines" opacity="0.65">
              {Array.from({ length: 24 }, (_, i) => {
                const x = 30 + i * 58
                const y = 60 + (i % 6) * 45
                return (
                  <line
                    key={i}
                    x1={x}
                    y1={y}
                    x2={x - 14}
                    y2={y + 70}
                    stroke="#E8F0ED"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    opacity={0.4 + (i % 3) * 0.2}
                  />
                )
              })}
            </g>
          </svg>
        </div>

        <div className="ox-vesper-torrent-container">
          <div className="ox-vesper-torrent-caption-wrap">
            <p className="ox-vesper-torrent-caption">
              <strong>Fig. II — Bubalus bubalis</strong> in rising seasonal inundation. With nostrils aligned precisely at the meniscus and sweeping crescent horns spanning over four feet, the water buffalo remains stoically anchored in currents that overwhelm all other terrestrial ungulates.
            </p>
          </div>
        </div>
      </section>

      <main className="ox-vesper-torrent-submerged-zone">
        <div className="ox-vesper-torrent-container">
          <motion.div
            className="ox-vesper-torrent-lede-block"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7 }}
          >
            <p className="ox-vesper-torrent-lede-text">
              Semi-aquatic by evolutionary lineage, the water buffalo spends hours submerged in swollen rivers and inundated floodplains. Its wide, splayed hooves prevent sinking in deep liquid silt, allowing it to swim effortlessly across overflowing deltas with only its nostrils and sweeping horns held aloft above the waterline.
            </p>
            <p className="ox-vesper-torrent-lede-sub">
              Where torrential monsoons paralyze modern mechanized transport, the living hydraulic anchor of Southeast Asia transforms catastrophic flooding into its natural ecological sanctuary.
            </p>
          </motion.div>

          <section className="ox-vesper-torrent-metrics-grid" aria-label="Physiological water adaptations">
            <motion.article
              className="ox-vesper-torrent-metric-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <span className="ox-vesper-torrent-metric-tag">THERMOREGULATION</span>
              <span className="ox-vesper-torrent-metric-value">8.5 HR</span>
              <span className="ox-vesper-torrent-metric-label">Daily Submersion Capacity</span>
              <p className="ox-vesper-torrent-metric-desc">
                With only one-tenth the sweat gland density of humped zebu or European cattle, deep water immersion provides critical metabolic cooling during peak humid monsoon cycles.
              </p>
            </motion.article>

            <motion.article
              className="ox-vesper-torrent-metric-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <span className="ox-vesper-torrent-metric-tag">MUD DYNAMICS</span>
              <span className="ox-vesper-torrent-metric-value">48 DEG</span>
              <span className="ox-vesper-torrent-metric-label">Interdigital Splay Angle</span>
              <p className="ox-vesper-torrent-metric-desc">
                Extremely wide, hyper-flexible pastern joints and cloven hoof halves spread under pressure, multiplying ground contact surface area to float across liquefied alluvial clays.
              </p>
            </motion.article>

            <motion.article
              className="ox-vesper-torrent-metric-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <span className="ox-vesper-torrent-metric-tag">BUOYANCY</span>
              <span className="ox-vesper-torrent-metric-value">3.2 KM</span>
              <span className="ox-vesper-torrent-metric-label">Continuous Swim Distance</span>
              <p className="ox-vesper-torrent-metric-desc">
                Expansive thoracic volume and positive natural buoyancy enable deep channel navigation across the Mekong, Irrawaddy, and Chao Phraya delta networks.
              </p>
            </motion.article>
          </section>

          <section className="ox-vesper-torrent-stories-grid" aria-label="Monsoon ecology and agricultural partnership">
            <motion.article
              className="ox-vesper-torrent-story-panel"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="ox-vesper-torrent-story-num">01</span>
              <h2 className="ox-vesper-torrent-story-title">The Hydraulic Architecture</h2>
              <p className="ox-vesper-torrent-story-body">
                The water buffalo&apos;s skull geometry is an evolutionary masterpiece of riverine adaptation. The nostrils are positioned at the extreme dorsal apex of the rostral plane, allowing the animal to breathe in high swells without elevating its heavy cranial mass above the water line.
              </p>
              <p className="ox-vesper-torrent-story-body">
                Its sweeping horns curve backwards in a wide hydrodynamic crescent, stabilizing the neck in heavy cross-currents and cutting through dense mats of floating river hyacinth without snagging submerged debris.
              </p>
            </motion.article>

            <motion.article
              className="ox-vesper-torrent-story-panel"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="ox-vesper-torrent-story-num">02</span>
              <h2 className="ox-vesper-torrent-story-title">The Monsoon Alliance</h2>
              <p className="ox-vesper-torrent-story-body">
                Across Southeast Asian wet-rice agriculture, the water buffalo is indispensable. During peak monsoon puddling, when heavy tractors sink hopelessly into the flooded paddies, the water buffalo churns and levels meters of inundated mud with calm, rhythmic strides.
              </p>
              <p className="ox-vesper-torrent-story-body">
                In catastrophic floods exceeding two meters, these stoic animals tow cargo rafts between marooned villages and feed upon submerged wild grasses, sustaining human life when every other terrestrial system fails.
              </p>
            </motion.article>
          </section>

          <motion.blockquote
            className="ox-vesper-torrent-quote-box"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="ox-vesper-torrent-quote-text">
              “The river rises until trees are drowned and roads become channels of silt. In that boundless gray water, the buffalo does not flee. It lowers its chin to the wave and becomes a rock against the flood.”
            </p>
            <cite className="ox-vesper-torrent-quote-cite">
              — Hydrographic Field Log, Lower Brahmaputra Basin
            </cite>
          </motion.blockquote>

          <div className="ox-vesper-torrent-signature-wrap">
            <svg
              className="ox-vesper-torrent-stone"
              viewBox="0 0 460 120"
              role="img"
              aria-label="SET XVI · DESIGNED BY CLAUDE OPUS"
              focusable="false"
            >
              <defs>
                <linearGradient id="ox-vesper-torrent-stone-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#4A5658" />
                  <stop offset="50%" stopColor="#364042" />
                  <stop offset="100%" stopColor="#252D2E" />
                </linearGradient>
                <filter id="ox-vesper-torrent-stone-bevel" x="-10%" y="-10%" width="120%" height="120%">
                  <feDropShadow dx="0" dy="3" stdDeviation="4" floodColor="#000000" floodOpacity="0.6" />
                </filter>
              </defs>
              <path
                d="M 30,22 C 70,16 160,18 240,15 C 320,12 400,18 432,32 C 452,42 456,65 448,84 C 440,102 405,108 340,110 C 260,112 180,109 110,111 C 45,113 16,98 12,74 C 8,50 14,26 30,22 Z"
                fill="url(#ox-vesper-torrent-stone-grad)"
                stroke="#5D6D70"
                strokeWidth="2"
                filter="url(#ox-vesper-torrent-stone-bevel)"
              />
              <path
                d="M 40,28 C 120,22 340,22 422,38 C 438,70 428,96 340,102 C 200,104 60,105 26,72 C 22,46 30,34 40,28 Z"
                fill="none"
                stroke="#202728"
                strokeWidth="1.5"
                opacity="0.7"
              />
              <text
                x="230"
                y="66"
                textAnchor="middle"
                className="ox-vesper-torrent-stone-text"
                fill="#D4DFDC"
              >
                SET XVI · DESIGNED BY CLAUDE OPUS
              </text>
            </svg>
          </div>
        </div>
      </main>
    </div>
  )
}
