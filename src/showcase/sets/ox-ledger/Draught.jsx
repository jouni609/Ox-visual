import { motion } from 'framer-motion'
import './draught.css'

function DraughtOx() {
  return (
    <svg className="ox-ledger-draught-ox" viewBox="0 0 1000 480" aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id="ox-ledger-draught-body" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#EFE8DA" />
          <stop offset="45%" stopColor="#C4B292" />
          <stop offset="100%" stopColor="#6E5E46" />
        </linearGradient>
      </defs>
      <ellipse cx="480" cy="445" rx="360" ry="16" fill="#000" opacity="0.42" />
      <path
        fill="none"
        stroke="#C4A35A"
        strokeWidth="18"
        strokeLinecap="round"
        d="M240 185 C350 145 500 138 640 170"
      />
      <path
        fill="none"
        stroke="#8A7340"
        strokeWidth="8"
        strokeLinecap="round"
        d="M240 185 C350 145 500 138 640 170"
      />
      <rect x="220" y="168" width="40" height="48" rx="6" fill="#C4A35A" stroke="#6A5830" strokeWidth="2" />
      <rect x="628" y="156" width="40" height="48" rx="6" fill="#C4A35A" stroke="#6A5830" strokeWidth="2" />
      <path
        fill="url(#ox-ledger-draught-body)"
        d="M200 250
           C185 205 205 155 260 140
           C310 125 360 145 390 175
           C440 140 545 128 650 155
           C740 180 800 235 815 300
           C830 365 800 415 740 430
           C670 450 500 455 380 440
           C280 425 215 380 200 320
           C190 285 200 265 200 250 Z"
      />
      <path
        fill="#A89070"
        d="M790 270
           C860 235 940 260 970 320
           C995 370 975 425 910 445
           C850 465 790 425 775 365
           C765 320 770 285 790 270 Z"
      />
      <path
        fill="#4A3C28"
        d="M900 240
           C960 175 1010 115 990 55
           C975 15 925 35 920 90
           C915 145 905 195 900 240 Z"
      />
      <path
        fill="#4A3C28"
        d="M850 235
           C880 165 890 95 845 45
           C815 10 775 40 780 95
           C785 150 820 200 845 240 Z"
      />
      <path
        fill="#5A4A34"
        d="M820 240 C795 260 790 290 815 310 C835 280 840 255 820 240 Z"
      />
      <ellipse cx="940" cy="340" rx="13" ry="10" fill="#1A1410" />
      <path
        fill="#2E2418"
        d="M910 380
           C950 365 990 395 980 435
           C968 475 910 485 870 455
           C845 430 870 395 910 380 Z"
      />
      <path
        fill="#7A6A50"
        opacity="0.75"
        d="M760 320 C810 360 845 400 825 430 C775 400 740 355 725 325 Z"
      />
      <path fill="#8A7E6A" d="M310 400 C295 445 285 480 305 492 L355 492 C352 458 360 425 372 400 Z" />
      <path fill="#6A5E4C" d="M410 408 C400 450 395 482 415 494 L465 494 C462 462 470 428 478 406 Z" />
      <path fill="#8A7E6A" d="M560 410 C552 452 548 482 568 494 L618 494 C614 462 622 428 630 408 Z" />
      <path fill="#6A5E4C" d="M670 398 C662 440 658 472 678 484 L728 484 C724 452 732 418 740 396 Z" />
      <path fill="#5A4E40" d="M720 370 C770 400 800 440 780 470 C740 450 710 415 690 385 Z" />
      <ellipse cx="330" cy="492" rx="28" ry="8" fill="#3A3024" />
      <ellipse cx="440" cy="494" rx="28" ry="8" fill="#3A3024" />
      <ellipse cx="593" cy="494" rx="28" ry="8" fill="#3A3024" />
      <ellipse cx="703" cy="484" rx="28" ry="8" fill="#3A3024" />
      <path
        fill="none"
        stroke="#C4A35A"
        strokeWidth="2.5"
        strokeDasharray="8 12"
        d="M70 285 L220 255 M55 335 L210 305 M40 385 L200 355"
      />
    </svg>
  )
}

export default function Draught() {
  return (
    <div className="th-ledger-draught ox-ledger-draught">
      <div className="ox-ledger-draught-grain" aria-hidden="true" />
      <motion.p
        className="ox-ledger-draught-mark"
        initial={{ opacity: 0, x: -24 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        FIELD POSTER · LOAD TEST
      </motion.p>
      <div className="ox-ledger-draught-hero">
        <h1 className="ox-ledger-draught-title">
          <motion.span
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            Draught
          </motion.span>
        </h1>
        <motion.div
          className="ox-ledger-draught-stage"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <DraughtOx />
          <motion.div
            className="ox-ledger-draught-strain"
            aria-hidden="true"
            animate={{ x: [0, -10, 0] }}
            transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.div>
      </div>
      <p className="ox-ledger-draught-lede">
        Shoulder into the yoke, four legs braced on cut earth — the ledger measures power not in words but in furrows finished before dusk.
      </p>
      <aside className="ox-ledger-draught-stencil" aria-label="SET XXXI · DESIGNED BY COMPOSER">
        SET XXXI · DESIGNED BY COMPOSER
      </aside>
    </div>
  )
}
