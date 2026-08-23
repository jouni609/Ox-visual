import { motion } from 'framer-motion'
import './cinder.css'

export default function Cinder() {
  const statVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 120,
        damping: 8,
        delay: 0.35 + i * 0.1,
      },
    }),
  }

  return (
    <div
      className="th-ox-vesper ox-vesper-cinder"
      style={{ minHeight: '100vh', position: 'relative', overflowX: 'hidden' }}
    >
      <div className="ox-vesper-cinder-bg" aria-hidden="true">
        <div className="ox-vesper-cinder-slash" />
        <div className="ox-vesper-cinder-ground">
          <div className="ox-vesper-cinder-heat-shimmer" />
        </div>
      </div>

      <div className="ox-vesper-cinder-dust-system" aria-hidden="true">
        <span className="ox-vesper-cinder-particle ox-vesper-cinder-particle-1" />
        <span className="ox-vesper-cinder-particle ox-vesper-cinder-particle-2" />
        <span className="ox-vesper-cinder-particle ox-vesper-cinder-particle-3" />
        <span className="ox-vesper-cinder-particle ox-vesper-cinder-particle-4" />
        <span className="ox-vesper-cinder-particle ox-vesper-cinder-particle-5" />
        <span className="ox-vesper-cinder-particle ox-vesper-cinder-particle-6" />
        <span className="ox-vesper-cinder-particle ox-vesper-cinder-particle-7" />
        <span className="ox-vesper-cinder-particle ox-vesper-cinder-particle-8" />
        <span className="ox-vesper-cinder-particle ox-vesper-cinder-particle-9" />
        <span className="ox-vesper-cinder-particle ox-vesper-cinder-particle-10" />
        <span className="ox-vesper-cinder-particle ox-vesper-cinder-particle-11" />
        <span className="ox-vesper-cinder-particle ox-vesper-cinder-particle-12" />
        <span className="ox-vesper-cinder-particle ox-vesper-cinder-particle-13" />
        <span className="ox-vesper-cinder-particle ox-vesper-cinder-particle-14" />
      </div>

      <div className="ox-vesper-cinder-container">
        <header className="ox-vesper-cinder-topbar">
          <motion.p
            className="ox-vesper-cinder-kicker"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            800 KILOGRAMS OF FURY
          </motion.p>
          <motion.div
            className="ox-vesper-cinder-facet-badge"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            FACET III · RAGE &amp; IMPACT
          </motion.div>
        </header>

        <main className="ox-vesper-cinder-hero-stage">
          <div className="ox-vesper-cinder-bull-pane">
            <motion.div
              style={{ width: '100%' }}
              initial={{ x: -200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            >
              <svg
                className="ox-vesper-cinder-bull-svg"
                viewBox="0 0 1100 580"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                focusable="false"
              >
                <defs>
                  <linearGradient
                    id="ox-vesper-cinder-horn-grad-near"
                    x1="770"
                    y1="260"
                    x2="1050"
                    y2="200"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0%" stopColor="#2A201A" />
                    <stop offset="35%" stopColor="#A0522D" />
                    <stop offset="70%" stopColor="#D4A03C" />
                    <stop offset="92%" stopColor="#F5E6C8" />
                    <stop offset="100%" stopColor="#8B0000" />
                  </linearGradient>
                  <linearGradient
                    id="ox-vesper-cinder-horn-grad-far"
                    x1="730"
                    y1="200"
                    x2="980"
                    y2="100"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0%" stopColor="#150E0B" />
                    <stop offset="40%" stopColor="#70361B" />
                    <stop offset="80%" stopColor="#D4A03C" />
                    <stop offset="100%" stopColor="#8B0000" />
                  </linearGradient>
                  <radialGradient
                    id="ox-vesper-cinder-dust-grad"
                    cx="50%"
                    cy="50%"
                    r="50%"
                  >
                    <stop offset="0%" stopColor="#D4A03C" stopOpacity="0.6" />
                    <stop offset="60%" stopColor="#A0522D" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#1C1410" stopOpacity="0" />
                  </radialGradient>
                </defs>

                <g>
                  <circle cx="130" cy="490" r="45" fill="url(#ox-vesper-cinder-dust-grad)" />
                  <circle cx="90" cy="460" r="65" fill="url(#ox-vesper-cinder-dust-grad)" />
                  <circle cx="50" cy="420" r="50" fill="url(#ox-vesper-cinder-dust-grad)" />
                  <circle cx="160" cy="510" r="30" fill="url(#ox-vesper-cinder-dust-grad)" />
                  <circle cx="780" cy="520" r="35" fill="url(#ox-vesper-cinder-dust-grad)" />
                </g>

                <path
                  d="M 740 225 C 770 180 820 135 885 105 C 920 90 955 80 985 82 C 955 100 905 130 850 168 C 805 198 770 225 748 245 Z"
                  fill="url(#ox-vesper-cinder-horn-grad-far)"
                />

                <path
                  d="M 310 290 C 285 330 255 385 225 435 C 205 470 175 510 145 540 L 170 545 C 205 515 235 470 265 425 C 290 380 325 335 345 305 Z"
                  fill="#100B08"
                />

                <path
                  d="M 590 350 C 620 395 655 440 685 490 L 710 488 C 680 435 645 385 615 340 Z"
                  fill="#100B08"
                />

                <path
                  d="M 195 240 C 160 210 120 185 80 175 C 55 170 35 180 30 198 C 28 208 36 216 48 218 C 75 220 110 235 150 255 C 175 268 190 270 195 255 Z"
                  fill="#17100D"
                />
                <path
                  d="M 80 175 C 50 160 20 165 5 185 C 2 188 8 192 14 190 C 35 180 55 182 72 188 Z"
                  fill="#D4A03C"
                  opacity="0.85"
                />
                <path
                  d="M 55 170 C 30 150 5 152 0 170 C 15 172 32 176 48 180 Z"
                  fill="#A0522D"
                />

                <path
                  d="M 195 240 C 225 220 270 205 335 200 C 400 195 445 190 485 160 C 515 135 545 102 590 95 C 625 90 660 110 685 142 C 715 180 745 220 780 255 C 810 278 845 295 880 320 C 915 345 945 375 965 410 C 975 428 970 442 950 448 C 930 452 905 445 885 432 C 865 445 845 452 825 448 C 805 435 790 410 780 385 C 755 425 720 460 675 472 C 640 480 618 465 600 440 C 610 460 635 490 665 520 C 690 545 720 570 750 590 L 775 585 C 755 555 725 520 695 480 C 670 445 650 415 635 385 C 590 395 535 400 470 390 C 410 380 350 360 310 340 C 290 375 265 425 235 480 C 210 525 180 565 145 595 L 125 588 C 155 550 185 500 215 440 C 240 385 260 330 250 285 C 240 260 215 248 195 240 Z"
                  fill="var(--soot)"
                />

                <path
                  d="M 780 260 C 815 245 875 225 950 218 C 990 215 1030 212 1060 216 C 1025 232 970 252 900 280 C 845 302 810 300 788 285 Z"
                  fill="url(#ox-vesper-cinder-horn-grad-near)"
                />

                <path
                  d="M 540 135 C 585 115 635 125 668 160"
                  stroke="var(--sienna)"
                  strokeWidth="5"
                  strokeLinecap="round"
                  opacity="0.85"
                />
                <path
                  d="M 520 165 C 565 145 615 155 648 190"
                  stroke="var(--dust-gold)"
                  strokeWidth="3"
                  strokeLinecap="round"
                  opacity="0.65"
                />
                <path
                  d="M 500 195 C 545 175 595 185 628 220"
                  stroke="var(--sienna)"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  opacity="0.55"
                />

                <path
                  d="M 690 220 C 715 255 735 295 745 340"
                  stroke="var(--sienna)"
                  strokeWidth="4.5"
                  strokeLinecap="round"
                  opacity="0.75"
                />
                <path
                  d="M 730 250 C 750 285 770 325 778 365"
                  stroke="var(--dust-gold)"
                  strokeWidth="3"
                  strokeLinecap="round"
                  opacity="0.6"
                />
                <path
                  d="M 655 245 C 675 285 690 330 695 375"
                  stroke="var(--sienna)"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  opacity="0.5"
                />

                <path
                  d="M 440 250 C 455 290 470 330 480 370"
                  stroke="var(--sienna)"
                  strokeWidth="3"
                  strokeLinecap="round"
                  opacity="0.45"
                />
                <path
                  d="M 475 240 C 490 280 505 320 515 360"
                  stroke="var(--sienna)"
                  strokeWidth="3"
                  strokeLinecap="round"
                  opacity="0.45"
                />
                <path
                  d="M 510 235 C 525 275 540 315 550 355"
                  stroke="var(--dust-gold)"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  opacity="0.35"
                />

                <path
                  d="M 245 250 C 285 275 320 320 310 375"
                  stroke="var(--sienna)"
                  strokeWidth="4.5"
                  strokeLinecap="round"
                  opacity="0.75"
                />
                <path
                  d="M 225 280 C 260 305 280 345 270 395"
                  stroke="var(--dust-gold)"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  opacity="0.55"
                />

                <path
                  d="M 610 300 C 635 340 648 385 638 430"
                  stroke="var(--sienna)"
                  strokeWidth="4"
                  strokeLinecap="round"
                  opacity="0.7"
                />
                <path
                  d="M 660 410 L 715 480 L 745 515"
                  stroke="var(--dust-gold)"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  opacity="0.6"
                />

                <polygon points="855,330 878,334 870,342 850,338" fill="var(--blood)" />
                <ellipse cx="864" cy="336" rx="4.5" ry="2.2" fill="var(--dust-gold)" />
                <circle cx="865" cy="336" r="1.4" fill="#FFFFFF" />
                <path d="M 842 326 L 885 332" stroke="var(--soot)" strokeWidth="3.5" strokeLinecap="round" />

                <ellipse
                  cx="915"
                  cy="412"
                  rx="7"
                  ry="4.5"
                  transform="rotate(-25 915 412)"
                  fill="#0C0705"
                  stroke="var(--blood)"
                  strokeWidth="1.8"
                />
                <path
                  d="M 930 418 C 965 428 1000 422 1035 442"
                  stroke="var(--dust-gold)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  opacity="0.6"
                />
                <path
                  d="M 922 430 C 955 450 985 460 1020 478"
                  stroke="var(--sand)"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  opacity="0.45"
                />
              </svg>
            </motion.div>
          </div>

          <div className="ox-vesper-cinder-content-pane">
            <motion.div
              className="ox-vesper-cinder-title-wrap"
              initial={{ y: -80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ type: 'spring', stiffness: 120, damping: 8, delay: 0.15 }}
            >
              <h1 className="ox-vesper-cinder-title">CINDER</h1>
            </motion.div>

            <motion.p
              className="ox-vesper-cinder-lead-text"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              A fighting bull reaches thirty-five miles per hour in three explosive strides,
              pivoting its entire mass on a single planted hoof. Lowering the skull drops the center
              of gravity below the shoulder ridge, channeling eight hundred kilograms of kinetic force
              directly through the horn tips. The charge is not blind rage—it is precision biomechanics
              honed for total impact.
            </motion.p>

            <motion.p
              className="ox-vesper-cinder-sub-text"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              Every tendon in the thoracic crest loads like a coiled steel spring. In the instant
              before collision, horizontal momentum converts into an explosive upward hook capable
              of tossing a full-grown stallion into the air.
            </motion.p>
          </div>
        </main>

        <section className="ox-vesper-cinder-stats-pane" aria-label="Physical statistics">
          <div className="ox-vesper-cinder-stats-grid">
            <motion.div
              className="ox-vesper-cinder-stat-card"
              custom={0}
              variants={statVariants}
              initial="hidden"
              animate="visible"
            >
              <div className="ox-vesper-cinder-stat-val">35 MPH</div>
              <div className="ox-vesper-cinder-stat-label">TOP SPEED</div>
              <p className="ox-vesper-cinder-stat-desc">
                Attained within three explosive strides across scorched ground.
              </p>
            </motion.div>

            <motion.div
              className="ox-vesper-cinder-stat-card"
              custom={1}
              variants={statVariants}
              initial="hidden"
              animate="visible"
            >
              <div className="ox-vesper-cinder-stat-val">800 KG</div>
              <div className="ox-vesper-cinder-stat-label">BODY MASS</div>
              <p className="ox-vesper-cinder-stat-desc">
                Dense bone and heavy thoracic musculature centered at the morrillo hump.
              </p>
            </motion.div>

            <motion.div
              className="ox-vesper-cinder-stat-card"
              custom={2}
              variants={statVariants}
              initial="hidden"
              animate="visible"
            >
              <div className="ox-vesper-cinder-stat-val">1.8 SEC</div>
              <div className="ox-vesper-cinder-stat-label">TIME TO PIVOT</div>
              <p className="ox-vesper-cinder-stat-desc">
                Complete 180-degree rotational turn pivoted on a single planted hoof.
              </p>
            </motion.div>

            <motion.div
              className="ox-vesper-cinder-stat-card"
              custom={3}
              variants={statVariants}
              initial="hidden"
              animate="visible"
            >
              <div className="ox-vesper-cinder-stat-val">180°</div>
              <div className="ox-vesper-cinder-stat-label">FIELD OF VISION</div>
              <p className="ox-vesper-cinder-stat-desc">
                Full panoramic target lock before dropping the skull into goring alignment.
              </p>
            </motion.div>
          </div>
        </section>

        <footer className="ox-vesper-cinder-footer">
          <div className="ox-vesper-cinder-footer-meta">
            <p className="ox-vesper-cinder-footer-title">OX VESPER · CINDER NO. 03</p>
            <p className="ox-vesper-cinder-footer-desc">
              Scorched earth and the physics of bovine confrontation.
            </p>
          </div>

          <div className="ox-vesper-cinder-brand-stamp" aria-label="Branding iron seal">
            <svg
              className="ox-vesper-cinder-brand-svg"
              viewBox="0 0 200 200"
              role="img"
              focusable="false"
            >
              <defs>
                <path
                  id="ox-vesper-cinder-brand-path"
                  d="M 100,100 m -64,0 a 64,64 0 1,1 128,0 a 64,64 0 1,1 -128,0"
                />
                <filter
                  id="ox-vesper-cinder-brand-glow"
                  x="-20%"
                  y="-20%"
                  width="140%"
                  height="140%"
                >
                  <feGaussianBlur stdDeviation="3" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>

              <circle
                cx="100"
                cy="100"
                r="92"
                fill="var(--soot)"
                stroke="var(--sienna)"
                strokeWidth="2.5"
                strokeDasharray="90 8 45 6"
              />
              <circle
                cx="100"
                cy="100"
                r="82"
                fill="none"
                stroke="var(--dust-gold)"
                strokeWidth="1.5"
                opacity="0.6"
              />

              <g transform="translate(100, 106) scale(0.65)" filter="url(#ox-vesper-cinder-brand-glow)">
                <path
                  d="M -38 -20 C -25 -5 0 5 0 25 C 0 5 25 -5 38 -20 C 50 -35 60 -55 55 -60 C 50 -65 35 -40 22 -22 C 12 -8 0 0 0 0 C 0 0 -12 -8 -22 -22 C -35 -40 -50 -65 -55 -60 C -60 -55 -50 -35 -38 -20 Z"
                  fill="var(--dust-gold)"
                />
                <polygon points="0,-8 -12,18 0,32 12,18" fill="var(--blood)" />
                <circle cx="0" cy="12" r="3.5" fill="var(--dust-gold)" />
              </g>

              <text
                fill="var(--dust-gold)"
                fontSize="8.5"
                fontFamily="'Oswald', sans-serif"
                fontWeight="700"
                letterSpacing="3.2px"
              >
                <textPath
                  href="#ox-vesper-cinder-brand-path"
                  startOffset="50%"
                  textAnchor="middle"
                >
                  SET XVI · DESIGNED BY CLAUDE OPUS
                </textPath>
              </text>
            </svg>
          </div>
        </footer>
      </div>
    </div>
  )
}
