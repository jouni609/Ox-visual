import { motion } from 'framer-motion'
import './frantoio.css'

export default function Frantoio() {
  return (
    <article className="th-span-frantoio">
      <motion.header
        className="ox-span-frantoio-copy"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      >
        <p className="ox-span-frantoio-sign">SET 3 · DESIGNED BY GROK 4.7</p>
        <p className="ox-span-frantoio-kicker">Labour · the beam press</p>
        <h1>Frantoio</h1>
        <p className="ox-span-frantoio-lead">
          Before the engine, the press was an ox. Yoked to a beam, the animal walked a circle and turned a screw, or a stone, at the hub. The radius is the beam. The work is the circumference. One patient ox could keep an olive harvest moving from first light until the oil ran gold.
        </p>
      </motion.header>

      <div className="ox-span-frantoio-yard">
        <svg className="ox-span-frantoio-ox" viewBox="0 0 1200 880" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
          <ellipse cx="560" cy="800" rx="420" ry="36" fill="#cbb98a" />
          <ellipse cx="560" cy="800" rx="420" ry="36" fill="none" stroke="#a89462" strokeWidth="6" />

          <g className="ox-span-frantoio-wheel">
            <circle cx="1040" cy="430" r="72" fill="#d7c7a2" stroke="#5c4630" strokeWidth="8" />
            <circle cx="1040" cy="430" r="16" fill="#5c4630" />
            <path d="M1040 362 V498 M972 430 H1108 M990 380 L1090 480 M990 480 L1090 380" stroke="#5c4630" strokeWidth="6" />
          </g>
          <rect x="1014" y="250" width="52" height="160" rx="6" fill="#6b4a2e" />
          <path d="M1026 274 H1054 M1026 298 H1054 M1026 322 H1054 M1026 346 H1054 M1026 370 H1054" stroke="#3a2918" strokeWidth="3" />
          <ellipse cx="1040" cy="520" rx="86" ry="26" fill="#6e5a38" />
          <ellipse cx="1040" cy="512" rx="64" ry="14" fill="#3d4a26" />

          <path d="M880 360 C 940 430, 960 530, 930 610" stroke="#7A4A28" strokeWidth="16" fill="none" strokeLinecap="round" />
          <path d="M930 590 C 960 630, 966 680, 928 702 C 898 674, 894 630, 912 596 Z" fill="#2A1A10" />

          <path d="M760 500 L 812 500 L 828 680 L 792 680 L 804 756 L 756 760 L 746 680 L 772 680 Z" fill="#543218" />
          <path d="M752 744 L 766 790 L 808 790 L 798 744 Z" fill="#1C120C" />

          <path d="M430 490 L 482 490 L 468 670 L 432 670 L 444 754 L 396 758 L 406 670 L 438 670 Z" fill="#543218" />
          <path d="M392 742 L 406 788 L 448 788 L 438 742 Z" fill="#1C120C" />

          <path
            d="M840 340 C 740 280, 540 276, 400 320 C 300 352, 250 430, 260 520 C 272 610, 380 680, 540 700 L 800 670 C 920 640, 990 550, 970 450 C 956 380, 910 346, 840 340 Z"
            fill="url(#ox-span-frantoio-hide)"
          />
          <path d="M380 560 C 540 680, 820 650, 960 520 L 920 590 C 760 690, 500 700, 360 610 Z" fill="#5A341C" opacity="0.4" />

          <path d="M780 520 L 860 508 L 888 660 L 940 690 L 924 766 L 868 760 L 886 690 L 840 662 L 812 540 Z" fill="#7A4A28" />
          <path d="M864 750 L 878 796 L 922 796 L 912 750 Z" fill="#1C120C" />
          <path d="M890 758 V 790" stroke="#E6C8A4" strokeWidth="2" />

          <path d="M340 520 L 410 500 L 360 650 L 290 690 L 250 760 L 196 752 L 230 678 L 290 640 L 318 540 Z" fill="#8A5530" />
          <path d="M194 740 L 208 788 L 252 788 L 242 740 Z" fill="#1C120C" />
          <path d="M220 750 V 782" stroke="#E6C8A4" strokeWidth="2" />

          <path d="M360 360 L 250 300 L 210 360 L 310 460 L 400 420 Z" fill="#7A4A28" />
          <path d="M280 400 L 330 520 L 240 560 L 180 430 Z" fill="#543218" />

          <path d="M248 268 L 400 292 L 392 330 L 236 308 Z" fill="#c49a62" />
          <rect x="230" y="250" width="26" height="90" rx="6" fill="#a67c52" stroke="#5c3d22" strokeWidth="3" />
          <rect x="360" y="268" width="26" height="84" rx="6" fill="#a67c52" stroke="#5c3d22" strokeWidth="3" />
          <path d="M400 292 C 620 250, 840 268, 1020 300" stroke="#a67c52" strokeWidth="22" fill="none" strokeLinecap="round" />
          <path d="M400 292 C 620 250, 840 268, 1020 300" stroke="#6b4a2e" strokeWidth="6" fill="none" strokeLinecap="round" />

          <path d="M230 300 L 70 360 C 28 400, 36 480, 96 516 L 230 470 L 260 350 Z" fill="#7A4A28" />
          <path d="M110 390 L 48 430 L 70 508 L 140 468 Z" fill="#2A1A10" />
          <ellipse cx="72" cy="460" rx="9" ry="6" fill="#0e0a08" />
          <path d="M118 496 C 90 510, 64 500, 74 486" stroke="#1C120C" strokeWidth="2.4" fill="none" strokeLinecap="round" />
          <ellipse cx="168" cy="380" rx="14" ry="11" fill="#1A120E" />
          <ellipse cx="163" cy="377" rx="3.2" ry="2.4" fill="#F3E6D4" />
          <path d="M240 320 L 300 290 L 286 360 Z" fill="#7A4A28" />
          <path d="M246 326 L 286 306 L 276 350 Z" fill="#E4B8AE" />

          <path d="M250 292 C 200 220, 120 210, 96 268 C 150 250, 210 280, 252 330 Z" fill="#e6d2a4" />
          <path d="M100 230 C 78 220, 74 256, 102 268 C 116 248, 110 234, 100 230 Z" fill="#1C120C" />
          <path d="M270 286 C 250 210, 170 170, 130 220 C 190 210, 246 250, 278 312 Z" fill="#d7be8c" />
          <path d="M136 180 C 114 170, 110 206, 138 218 C 152 198, 146 184, 136 180 Z" fill="#1C120C" />

          <defs>
            <linearGradient id="ox-span-frantoio-hide" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#8E5832" />
              <stop offset="0.7" stopColor="#7A4A28" />
              <stop offset="1" stopColor="#5C3418" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <motion.ul
        className="ox-span-frantoio-facts"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.25, duration: 0.6 }}
      >
        <li>
          <strong>4 m</strong>
          <span>beam, the radius</span>
        </li>
        <li>
          <strong>25 m</strong>
          <span>one circle walked</span>
        </li>
        <li>
          <strong>Puglia</strong>
          <span>Crete, the Maghreb</span>
        </li>
      </motion.ul>
    </article>
  )
}
