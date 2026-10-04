import { motion } from 'framer-motion'
import './brand.css'

function BrandOx() {
  return (
    <svg className="ox-ledger-brand-ox" viewBox="0 0 760 700" aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id="ox-ledger-brand-hide" x1="0.15" y1="0.1" x2="0.9" y2="0.95">
          <stop offset="0%" stopColor="#6E4E32" />
          <stop offset="50%" stopColor="#3A2618" />
          <stop offset="100%" stopColor="#160E08" />
        </linearGradient>
        <linearGradient id="ox-ledger-brand-blaze" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#F5EFE4" />
          <stop offset="100%" stopColor="#C8BAA4" />
        </linearGradient>
      </defs>
      <ellipse cx="360" cy="655" rx="200" ry="22" fill="#0A1612" opacity="0.32" />
      <path
        fill="url(#ox-ledger-brand-hide)"
        d="M120 420
           C95 340 120 250 190 200
           C250 155 330 145 400 175
           C470 155 560 190 605 265
           C645 330 650 420 615 490
           C575 570 470 610 360 605
           C250 600 150 530 120 420 Z"
      />
      <path
        fill="#4A3220"
        d="M480 280
           C560 250 640 290 670 360
           C700 430 670 510 590 535
           C530 555 470 510 455 440
           C445 385 455 320 480 280 Z"
      />
      <path
        fill="url(#ox-ledger-brand-blaze)"
        d="M520 300
           C545 340 560 400 555 455
           C550 490 530 515 505 525
           C515 480 510 420 500 370
           C495 340 505 315 520 300 Z"
      />
      <path
        fill="#2A1A10"
        d="M430 220
           C400 150 370 80 410 35
           C440 0 485 30 490 85
           C495 140 470 190 455 235 Z"
      />
      <path
        fill="#2A1A10"
        d="M560 240
           C600 175 640 110 615 55
           C595 15 545 35 540 90
           C535 145 545 200 555 245 Z"
      />
      <path
        fill="#1A1008"
        d="M415 50
           C380 15 395 -20 445 5
           C475 25 490 60 485 95
           C470 70 445 55 415 50 Z"
      />
      <path
        fill="#1A1008"
        d="M600 70
           C635 35 620 0 570 25
           C540 45 525 80 530 115
           C545 90 570 75 600 70 Z"
      />
      <path
        fill="#5A3C28"
        d="M410 270
           C375 300 365 345 395 375
           C420 340 430 300 410 270 Z"
      />
      <ellipse cx="580" cy="370" rx="16" ry="12" fill="#0C0804" />
      <circle cx="586" cy="365" r="4" fill="#EDE4D4" />
      <path
        fill="#140E0A"
        d="M560 430
           C595 410 640 430 645 475
           C650 520 600 545 555 525
           C520 508 530 455 560 430 Z"
      />
      <ellipse cx="590" cy="475" rx="10" ry="7" fill="#5A3C28" />
      <ellipse cx="615" cy="475" rx="8" ry="6" fill="#5A3C28" />
      <path
        fill="#3A2818"
        d="M220 520
           C200 575 205 630 230 655
           L310 655
           C305 600 315 550 325 520 Z"
      />
      <path
        fill="#2A1A10"
        d="M360 530
           C350 580 355 630 375 655
           L450 655
           C445 600 440 555 435 530 Z"
      />
      <path
        fill="#4A3220"
        opacity="0.5"
        d="M200 450 C280 500 400 510 500 470 C420 540 260 530 200 450 Z"
      />
      <path
        fill="none"
        stroke="#C41E3A"
        strokeWidth="5"
        strokeDasharray="5 7"
        d="M500 340 C540 310 600 320 630 360 C655 395 635 450 580 470 C535 485 490 455 485 405 C480 365 470 355 500 340 Z"
      />
      <circle cx="555" cy="395" r="16" fill="none" stroke="#C41E3A" strokeWidth="2.5" />
      <text x="555" y="401" textAnchor="middle" fill="#C41E3A" fontFamily="Special Elite, monospace" fontSize="12">
        OX
      </text>
    </svg>
  )
}

export default function Brand() {
  return (
    <div className="th-ledger-brand ox-ledger-brand">
      <div className="ox-ledger-brand-grid" aria-hidden="true" />
      <motion.div
        className="ox-ledger-brand-stage"
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <BrandOx />
      </motion.div>
      <div className="ox-ledger-brand-copy">
        <p className="ox-ledger-brand-kicker">Herd register · folio 01</p>
        <h1 className="ox-ledger-brand-title">Brand</h1>
        <p className="ox-ledger-brand-lede">
          Every ox enters the ledger by the mark burned into hide — a circle of iron, a letter, a claim of belonging that outlasts the season.
        </p>
      </div>
      <motion.aside
        className="ox-ledger-brand-seal"
        aria-label="SET XXXI · DESIGNED BY COMPOSER"
        initial={{ opacity: 0, rotate: -12, scale: 0.8 }}
        animate={{ opacity: 1, rotate: -8, scale: 1 }}
        transition={{ delay: 0.45, type: 'spring', stiffness: 180, damping: 14 }}
      >
        <span className="ox-ledger-brand-seal-ring">SET XXXI · DESIGNED BY COMPOSER</span>
      </motion.aside>
      <motion.div
        className="ox-ledger-brand-ink"
        aria-hidden="true"
        animate={{ scale: [1, 1.04, 1], opacity: [0.35, 0.55, 0.35] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  )
}
