import { motion } from 'framer-motion'
import './zebu.css'

function ZebuOx() {
  return (
    <svg className="ox-ledger-zebu-ox" viewBox="0 0 720 720" aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id="ox-ledger-zebu-coat" x1="0.15" y1="0" x2="0.9" y2="1">
          <stop offset="0%" stopColor="#F2D9A0" />
          <stop offset="40%" stopColor="#D4A040" />
          <stop offset="100%" stopColor="#7A4A18" />
        </linearGradient>
        <linearGradient id="ox-ledger-zebu-hump" x1="0.5" y1="0" x2="0.5" y2="1">
          <stop offset="0%" stopColor="#F0D070" />
          <stop offset="100%" stopColor="#A06820" />
        </linearGradient>
      </defs>
      <ellipse cx="350" cy="680" rx="190" ry="20" fill="#040C20" opacity="0.45" />
      <path
        fill="url(#ox-ledger-zebu-coat)"
        d="M160 400
           C140 330 160 250 220 205
           C270 168 335 165 390 190
           C450 170 520 195 560 255
           C600 315 610 390 585 455
           C560 520 485 560 400 565
           C315 570 210 530 170 460
           C150 425 165 410 160 400 Z"
      />
      <path
        fill="url(#ox-ledger-zebu-hump)"
        d="M285 230
           C300 140 355 85 420 95
           C485 105 525 165 520 245
           C515 305 455 335 395 320
           C335 305 285 275 285 230 Z"
      />
      <path
        fill="#C88838"
        d="M520 280
           C585 250 660 285 685 350
           C710 415 680 480 610 500
           C555 515 505 475 495 415
           C488 365 500 310 520 280 Z"
      />
      <path
        fill="#5A3010"
        d="M640 300
           C700 235 750 160 730 90
           C715 45 665 65 660 125
           C655 185 645 250 640 300 Z"
      />
      <path
        fill="#5A3010"
        d="M585 285
           C620 215 630 140 585 80
           C555 40 515 70 520 130
           C525 190 555 245 580 285 Z"
      />
      <path
        fill="#6A3A10"
        d="M545 270 C525 290 520 315 540 330 C555 305 560 285 545 270 Z"
      />
      <ellipse cx="640" cy="375" rx="14" ry="11" fill="#1A1008" />
      <path
        fill="#5A3010"
        d="M610 420
           C645 405 685 430 680 465
           C673 500 620 515 585 490
           C560 470 580 440 610 420 Z"
      />
      <path
        fill="#B07030"
        d="M470 380
           C500 450 520 540 500 590
           L440 590
           C450 520 445 440 430 390 Z"
      />
      <path
        fill="#906028"
        d="M380 400
           C390 480 395 560 375 600
           L315 600
           C325 540 320 460 310 405 Z"
      />
      <path
        fill="#B07030"
        d="M270 390
           C255 470 245 545 265 590
           L325 590
           C320 520 330 450 340 400 Z"
      />
      <path
        fill="#7A4818"
        d="M500 430 C545 480 575 530 555 570 C510 540 470 485 450 440 Z"
      />
      <path
        fill="#D4A040"
        opacity="0.65"
        d="M400 340 C430 400 440 470 425 520 C395 490 370 420 365 360 Z"
      />
      <path
        fill="none"
        stroke="#E8B339"
        strokeWidth="3.5"
        strokeLinecap="round"
        d="M320 145 C360 95 430 90 475 135"
      />
    </svg>
  )
}

const rain = Array.from({ length: 18 }, (_, i) => ({
  id: i,
  left: `${6 + ((i * 17) % 88)}%`,
  delay: (i % 7) * 0.22,
  dur: 1.4 + (i % 5) * 0.18,
}))

export default function Zebu() {
  return (
    <div className="th-ledger-zebu ox-ledger-zebu">
      <div className="ox-ledger-zebu-sky" aria-hidden="true" />
      {rain.map((drop) => (
        <motion.span
          key={drop.id}
          className="ox-ledger-zebu-rain"
          style={{ left: drop.left }}
          aria-hidden="true"
          animate={{ y: ['-10vh', '110vh'], opacity: [0, 0.7, 0] }}
          transition={{ duration: drop.dur, delay: drop.delay, repeat: Infinity, ease: 'linear' }}
        />
      ))}
      <div className="ox-ledger-zebu-layout">
        <div className="ox-ledger-zebu-copy">
          <p className="ox-ledger-zebu-kicker" lang="hi">
            नस्ल · breed plate
          </p>
          <h1 className="ox-ledger-zebu-title">Zebu</h1>
          <p className="ox-ledger-zebu-lede">
            The thoracic hump rises like a second skyline — heat stored for hard seasons, a silhouette no European ox can claim.
          </p>
        </div>
        <motion.div
          className="ox-ledger-zebu-stage"
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 5.2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ZebuOx />
        </motion.div>
      </div>
      <aside className="ox-ledger-zebu-plate" aria-label="SET XXXI · DESIGNED BY COMPOSER">
        <span>SET XXXI · DESIGNED BY COMPOSER</span>
      </aside>
    </div>
  )
}
