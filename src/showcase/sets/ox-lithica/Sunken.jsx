import { motion } from 'framer-motion'
import './sunken.css'

export default function Sunken() {
  return (
    <div className="th-sunken">
      <div className="sunken-sand" aria-hidden="true" />

      <main className="sunken-main">
        <motion.div
          className="sunken-relief-wrap"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 55, damping: 18 }}
        >
          <svg className="sunken-relief" viewBox="0 0 800 320" aria-hidden="true">
            <defs>
              <linearGradient id="sunken-stone-grad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#D4C4A0" />
                <stop offset="50%" stopColor="#E0D2B0" />
                <stop offset="100%" stopColor="#C8B898" />
              </linearGradient>
              <filter id="sunken-shadow">
                <feDropShadow dx="1" dy="2" stdDeviation="1.5" floodColor="#1A1410" floodOpacity="0.25" />
              </filter>
            </defs>

            <rect x="10" y="10" width="780" height="300" rx="4" fill="url(#sunken-stone-grad)" />
            <rect x="22" y="22" width="756" height="276" rx="2" fill="none" stroke="#B8A880" strokeWidth="2" />
            <line x1="22" y1="38" x2="778" y2="38" stroke="#B8A880" strokeWidth="1" opacity="0.5" />
            <line x1="22" y1="282" x2="778" y2="282" stroke="#B8A880" strokeWidth="1" opacity="0.5" />

            <g transform="translate(60, 55)" filter="url(#sunken-shadow)">
              <path d="M40 140 Q35 110 45 90 Q55 70 75 75 Q95 80 105 100 Q115 120 110 145 Q105 170 90 185 Q75 200 55 195 Q40 190 35 170 Q30 155 40 140 Z" fill="#B8A880" />
              <path d="M75 75 Q80 50 90 35 Q100 25 110 40 Q118 55 112 70 Q105 80 95 78" fill="#B8A880" />
              <path d="M105 100 Q130 90 155 100 Q180 110 190 130 Q198 150 188 170 Q175 185 152 180 Q130 175 115 160" fill="#B8A880" />
              <path d="M110 145 Q130 165 145 190 Q155 215 145 240 Q135 260 112 262 Q90 265 72 250 Q55 235 52 210 Q50 185 62 165" fill="#B8A880" />
              <path d="M90 185 Q80 210 75 240 Q72 270 82 295 Q92 315 115 312 Q138 310 152 290 Q165 270 165 245 Q165 220 152 200" fill="#B8A880" />
              <path d="M115 312 Q125 340 130 370 Q132 400 120 425 Q108 445 82 442 Q58 438 45 415 Q35 392 38 365 Q42 338 58 318" fill="#B8A880" />
              <path d="M82 442 Q88 470 90 500 Q92 530 80 555 Q68 575 42 570 Q18 565 8 540 Q0 515 5 488 Q12 460 32 442" fill="#B8A880" />
              <path d="M42 570 Q48 600 50 630 Q52 660 40 685 Q30 705 5 700 Q-18 695 -28 670 Q-35 645 -30 618 Q-22 590 0 572" fill="#B8A880" />
              <path d="M5 700 L0 730 Q-5 742 5 745 Q18 748 25 738 L30 708" fill="#B8A880" />
              <path d="M145 240 Q165 255 180 280 Q195 305 198 335 Q200 365 185 388 Q168 408 142 405 Q118 402 100 382 Q85 362 85 335 Q85 308 100 285" fill="#B8A880" />
              <path d="M142 405 Q158 430 168 460 Q175 490 165 520 Q155 545 128 550 Q102 555 80 538 Q60 520 55 490 Q52 460 65 435" fill="#B8A880" />
              <path d="M128 550 Q140 580 148 615 Q152 650 138 680 Q125 705 95 708 Q65 712 42 692 Q22 672 18 640 Q15 608 28 580" fill="#B8A880" />
              <path d="M95 708 Q102 740 105 775 Q108 810 95 840 Q82 865 52 862 Q22 858 5 832 Q-8 808 -5 775 Q0 742 18 718" fill="#B8A880" />
              <path d="M52 862 Q58 895 60 930 Q62 965 48 995 Q35 1020 5 1015 Q-25 1010 -40 980 Q-52 952 -48 918 Q-42 885 -18 858" fill="#B8A880" />
              <path d="M5 1015 L-2 1050 Q-8 1062 2 1065 Q15 1068 22 1058 L28 1022" fill="#B8A880" />
              <circle cx="72" cy="115" r="6" fill="#1A1410" opacity="0.6" />
              <path d="M85 95 Q100 82 120 88 Q140 95 148 112" fill="none" stroke="#B8A880" strokeWidth="3.5" opacity="0.7" />
            </g>

            <g transform="translate(60, 55)">
              <ellipse cx="95" cy="55" rx="28" ry="14" fill="#1E3A5F" opacity="0.2" />
              <ellipse cx="95" cy="55" rx="22" ry="10" fill="#C9A227" opacity="0.35" />
              <path d="M75 35 L85 15 L95 35 L105 15 L115 35" fill="none" stroke="#C9A227" strokeWidth="2" opacity="0.5" />
            </g>

            <g transform="translate(320, 80)">
              <path d="M20 60 Q15 40 25 25 Q35 15 45 20 Q55 25 60 40 Q65 55 55 70 Q45 85 30 80 Q20 75 20 60 Z" fill="#4A7C6F" opacity="0.35" />
              <path d="M30 80 L30 140 Q35 150 40 140 L40 80" fill="#4A7C6F" opacity="0.35" />
              <path d="M45 75 L45 135 Q50 145 55 135 L55 75" fill="#4A7C6F" opacity="0.35" />
              <path d="M20 60 Q10 50 5 35 Q10 25 20 35" fill="none" stroke="#4A7C6F" strokeWidth="2" opacity="0.4" />
              <path d="M60 40 Q70 30 75 15 Q70 5 60 15" fill="none" stroke="#4A7C6F" strokeWidth="2" opacity="0.4" />
            </g>

            <g transform="translate(420, 100)">
              <path d="M25 10 L35 10 L35 50 L45 50 L30 75 L15 50 L25 50 Z" fill="#1E3A5F" opacity="0.25" />
              <circle cx="30" cy="5" r="8" fill="none" stroke="#1E3A5F" strokeWidth="2" opacity="0.3" />
            </g>

            <g transform="translate(520, 60)">
              <path d="M20 80 Q15 60 25 45 Q35 35 45 40 Q55 45 60 60 Q65 75 55 90 Q45 105 30 100 Q20 95 20 80 Z" fill="#4A7C6F" opacity="0.3" />
              <path d="M30 100 L30 160 Q35 170 40 160 L40 100" fill="#4A7C6F" opacity="0.3" />
              <path d="M45 95 L45 155 Q50 165 55 155 L55 95" fill="#4A7C6F" opacity="0.3" />
              <path d="M20 80 Q10 70 5 55 Q10 45 20 55" fill="none" stroke="#4A7C6F" strokeWidth="2" opacity="0.35" />
              <path d="M60 60 Q70 50 75 35 Q70 25 60 35" fill="none" stroke="#4A7C6F" strokeWidth="2" opacity="0.35" />
            </g>

            <g transform="translate(620, 100)">
              <path d="M25 10 L35 10 L35 50 L45 50 L30 75 L15 50 L25 50 Z" fill="#1E3A5F" opacity="0.2" />
              <circle cx="30" cy="5" r="8" fill="none" stroke="#1E3A5F" strokeWidth="2" opacity="0.25" />
            </g>

            <g transform="translate(720, 80)">
              <path d="M20 60 Q15 40 25 25 Q35 15 45 20 Q55 25 60 40 Q65 55 55 70 Q45 85 30 80 Q20 75 20 60 Z" fill="#4A7C6F" opacity="0.3" />
              <path d="M30 80 L30 140 Q35 150 40 140 L40 80" fill="#4A7C6F" opacity="0.3" />
              <path d="M45 75 L45 135 Q50 145 55 135 L55 75" fill="#4A7C6F" opacity="0.3" />
              <path d="M20 60 Q10 50 5 35 Q10 25 20 35" fill="none" stroke="#4A7C6F" strokeWidth="2" opacity="0.35" />
              <path d="M60 40 Q70 30 75 15 Q70 5 60 15" fill="none" stroke="#4A7C6F" strokeWidth="2" opacity="0.35" />
            </g>
          </svg>
        </motion.div>

        <motion.section
          className="sunken-text"
          initial={{ y: 35, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 60, damping: 16 }}
        >
          <p className="sunken-kicker">LIMESTONE RELIEF, DEIR EL-BAHARI, C. 1450 BCE</p>
          <h1 className="sunken-headline">The solar ox of Hathor</h1>
          <p className="sunken-lede">
            Egyptian sculptors worked in sunk relief, cutting the background away so the image sat slightly below the surface.
            This protected the carving from chipping and gave it a subtle shadow in strong light.
            The ox here wears the solar disk between its horns, an attribute shared with Hathor, goddess of love and destruction.
            It stands in the classic walking pose: two legs forward, two back, eternally mid-stride.
          </p>

          <div className="sunken-facts">
            <div className="sunken-fact">
              <span className="sunken-fact-label">Technique</span>
              <span className="sunken-fact-value">Sunk relief</span>
            </div>
            <div className="sunken-fact">
              <span className="sunken-fact-label">Stone</span>
              <span className="sunken-fact-value">Limestone</span>
            </div>
            <div className="sunken-fact">
              <span className="sunken-fact-label">Height</span>
              <span className="sunken-fact-value">42 centimetres</span>
            </div>
          </div>
        </motion.section>
      </main>

      <footer className="sunken-footer">
        <div className="sunken-signature">
          <svg viewBox="0 0 220 64" aria-hidden="true">
            <ellipse cx="110" cy="32" rx="100" ry="28" fill="none" stroke="#B85450" strokeWidth="1.5" opacity="0.4" />
            <ellipse cx="110" cy="32" rx="92" ry="22" fill="none" stroke="#B85450" strokeWidth="1" opacity="0.3" />
            <text x="110" y="37" textAnchor="middle" fontFamily="'Cinzel', serif" fontSize="11" fill="#1A1410" letterSpacing="2" opacity="0.75">SET VIII · DESIGNED BY OPENCODE</text>
          </svg>
        </div>
      </footer>
    </div>
  )
}
