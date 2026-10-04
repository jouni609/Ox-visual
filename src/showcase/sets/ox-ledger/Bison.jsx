import { motion } from 'framer-motion'
import './bison.css'

function BisonOx() {
  return (
    <svg className="ox-ledger-bison-ox" viewBox="0 0 820 640" aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id="ox-ledger-bison-hide" x1="0.2" y1="0" x2="0.9" y2="1">
          <stop offset="0%" stopColor="#6E4E34" />
          <stop offset="40%" stopColor="#3A2818" />
          <stop offset="100%" stopColor="#140E08" />
        </linearGradient>
        <linearGradient id="ox-ledger-bison-cape" x1="0.5" y1="0" x2="0.5" y2="1">
          <stop offset="0%" stopColor="#5C4028" />
          <stop offset="100%" stopColor="#22160C" />
        </linearGradient>
      </defs>
      <ellipse cx="400" cy="595" rx="270" ry="20" fill="#1A2830" opacity="0.35" />
      <g opacity="0.35" stroke="#5A7080" strokeWidth="1.5" fill="none">
        <path d="M80 160 Q220 130 360 155 Q500 180 700 140" />
        <path d="M60 250 Q210 220 360 250 Q510 280 720 230" />
        <path d="M70 340 Q220 310 370 345 Q520 380 710 320" />
        <path d="M90 430 Q230 405 380 435 Q530 465 690 410" />
      </g>
      <path
        fill="url(#ox-ledger-bison-hide)"
        d="M150 380
           C125 310 150 230 225 185
           C280 150 345 145 405 165
           C470 145 545 165 590 230
           C635 290 650 370 620 440
           C590 510 500 555 400 555
           C300 555 195 510 155 440
           C140 410 155 395 150 380 Z"
      />
      <path
        fill="url(#ox-ledger-bison-cape)"
        d="M200 250
           C220 140 300 85 400 90
           C500 95 575 155 590 255
           C600 330 535 380 440 385
           C340 390 230 340 200 250 Z"
      />
      <path
        fill="#2A1A10"
        d="M240 200
           C215 150 195 100 230 65
           C255 40 290 65 298 110
           C306 155 285 195 272 230 Z"
        opacity="0.9"
      />
      <path
        fill="#2A1A10"
        d="M500 205
           C525 155 545 105 510 70
           C485 45 450 70 442 115
           C434 160 455 200 468 235 Z"
        opacity="0.9"
      />
      <path
        fill="none"
        stroke="#0A0604"
        strokeWidth="14"
        strokeLinecap="round"
        d="M245 78 C225 55 245 35 275 50"
      />
      <path
        fill="none"
        stroke="#0A0604"
        strokeWidth="14"
        strokeLinecap="round"
        d="M495 82 C515 59 495 39 465 54"
      />
      <path
        fill="#4A3220"
        d="M520 270
           C590 245 670 280 695 350
           C720 420 680 490 600 510
           C545 525 495 480 485 415
           C478 360 495 300 520 270 Z"
      />
      <path
        fill="#2A1A10"
        d="M610 310
           C640 270 655 230 640 195
           C625 165 595 180 590 220
           C585 260 595 295 610 325 Z"
      />
      <path
        fill="#1A120C"
        d="M555 290 C530 315 525 345 555 365 C575 335 580 310 555 290 Z"
      />
      <ellipse cx="630" cy="370" rx="15" ry="12" fill="#0A0604" />
      <path
        fill="#140E08"
        d="M595 420
           C630 405 670 435 662 475
           C652 515 598 530 565 500
           C542 478 562 440 595 420 Z"
      />
      <path fill="#3A2818" d="M250 490 C235 540 225 580 250 600 L310 600 C305 555 315 510 325 485 Z" />
      <path fill="#2A1A10" d="M340 500 C330 545 325 580 345 602 L405 602 C400 560 408 520 415 498 Z" />
      <path fill="#3A2818" d="M450 495 C445 540 442 575 460 598 L515 598 C510 555 515 515 520 492 Z" />
      <path fill="#2A1A10" d="M200 450 C175 500 155 545 175 580 L240 580 C245 530 260 485 275 455 Z" />
      <path
        fill="none"
        stroke="#8B9AA4"
        strokeWidth="2"
        strokeDasharray="5 9"
        opacity="0.45"
        d="M170 290 C270 220 400 200 550 260"
      />
    </svg>
  )
}

const flakes = Array.from({ length: 12 }, (_, i) => ({
  id: i,
  left: `${8 + ((i * 23) % 84)}%`,
  delay: (i % 6) * 0.4,
  dur: 5 + (i % 4),
  size: 3 + (i % 3),
}))

export default function Bison() {
  return (
    <div className="th-ledger-bison ox-ledger-bison">
      <div className="ox-ledger-bison-map" aria-hidden="true" />
      {flakes.map((f) => (
        <motion.span
          key={f.id}
          className="ox-ledger-bison-flake"
          style={{ left: f.left, width: f.size, height: f.size }}
          aria-hidden="true"
          animate={{ y: ['-5vh', '105vh'], x: [0, 18, -10, 0], opacity: [0, 0.8, 0] }}
          transition={{ duration: f.dur, delay: f.delay, repeat: Infinity, ease: 'linear' }}
        />
      ))}
      <div className="ox-ledger-bison-layout">
        <motion.div
          className="ox-ledger-bison-stage"
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.75 }}
        >
          <BisonOx />
        </motion.div>
        <div className="ox-ledger-bison-copy">
          <p className="ox-ledger-bison-kicker">Range survey · sheet 05</p>
          <h1 className="ox-ledger-bison-title">Bison</h1>
          <p className="ox-ledger-bison-lede">
            Cape of winter wool, shoulder hump against the wind — the wild cousin of the ox, mapped where contour lines freeze.
          </p>
        </div>
      </div>
      <aside className="ox-ledger-bison-tag" aria-label="SET XXXI · DESIGNED BY COMPOSER">
        <span className="ox-ledger-bison-rivet" aria-hidden="true" />
        <span className="ox-ledger-bison-rivet ox-ledger-bison-rivet-r" aria-hidden="true" />
        SET XXXI · DESIGNED BY COMPOSER
      </aside>
    </div>
  )
}
