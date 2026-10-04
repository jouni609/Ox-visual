import { motion } from 'framer-motion'
import './nandi.css'

function NandiOx() {
  return (
    <svg className="ox-ledger-nandi-ox" viewBox="0 0 640 720" aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id="ox-ledger-nandi-stone" x1="0.3" y1="0" x2="0.75" y2="1">
          <stop offset="0%" stopColor="#EAD6AA" />
          <stop offset="50%" stopColor="#C4A574" />
          <stop offset="100%" stopColor="#7A5A30" />
        </linearGradient>
        <linearGradient id="ox-ledger-nandi-gold" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#F2D878" />
          <stop offset="100%" stopColor="#B8860B" />
        </linearGradient>
      </defs>
      <ellipse cx="320" cy="680" rx="210" ry="22" fill="#220C06" opacity="0.4" />
      <path
        fill="url(#ox-ledger-nandi-stone)"
        d="M120 450
           C105 370 135 295 200 255
           C250 222 295 230 330 255
           C360 228 405 215 455 235
           C520 265 560 330 565 400
           C570 470 540 540 485 580
           C430 620 210 620 155 575
           C115 540 125 490 120 450 Z"
      />
      <path
        fill="#B89458"
        d="M235 275
           C240 200 265 135 310 105
           C340 85 365 90 385 120
           C410 165 425 230 430 280
           C385 255 285 250 235 275 Z"
      />
      <path
        fill="url(#ox-ledger-nandi-gold)"
        d="M275 130
           C265 70 255 20 285 -5
           C305 -22 330 0 332 40
           C335 85 325 125 318 155 Z"
      />
      <path
        fill="url(#ox-ledger-nandi-gold)"
        d="M375 132
           C385 72 395 22 365 -5
           C345 -22 320 0 318 40
           C315 85 325 125 332 155 Z"
      />
      <path
        fill="#8A6A3C"
        d="M220 265 C195 290 190 320 215 340 C235 310 240 280 220 265 Z"
      />
      <path
        fill="#8A6A3C"
        d="M430 268 C455 293 460 323 435 343 C415 313 410 283 430 268 Z"
      />
      <ellipse cx="280" cy="250" rx="18" ry="13" fill="#2A1810" />
      <ellipse cx="380" cy="250" rx="18" ry="13" fill="#2A1810" />
      <circle cx="285" cy="246" r="4.5" fill="#F0D878" />
      <circle cx="385" cy="246" r="4.5" fill="#F0D878" />
      <path
        fill="#6B1D1D"
        d="M275 320
           C305 300 335 300 365 320
           C385 335 390 370 368 395
           C340 425 280 425 252 395
           C230 370 245 335 275 320 Z"
      />
      <path
        fill="url(#ox-ledger-nandi-gold)"
        d="M295 345 C320 338 340 338 365 345 C355 365 305 365 295 345 Z"
      />
      <path
        fill="#A88850"
        d="M145 520
           C130 580 140 640 175 665
           L270 665
           C255 600 245 545 250 510 Z"
      />
      <path
        fill="#947440"
        d="M495 520
           C510 580 500 640 465 665
           L370 665
           C385 600 395 545 390 510 Z"
      />
      <path
        fill="#C4A574"
        d="M200 540
           C260 590 380 590 440 540
           C410 610 230 610 200 540 Z"
      />
      <path
        fill="#8A6A3C"
        opacity="0.5"
        d="M220 460 C280 510 360 510 420 460 C385 530 255 530 220 460 Z"
      />
      <circle cx="320" cy="430" r="24" fill="none" stroke="url(#ox-ledger-nandi-gold)" strokeWidth="5" />
      <circle cx="320" cy="430" r="11" fill="url(#ox-ledger-nandi-gold)" />
      <path
        fill="none"
        stroke="#6B1D1D"
        strokeWidth="3"
        opacity="0.45"
        d="M180 370 C240 340 290 330 320 335 C350 330 400 340 460 370"
      />
    </svg>
  )
}

export default function Nandi() {
  return (
    <div className="th-ledger-nandi ox-ledger-nandi">
      <div className="ox-ledger-nandi-relief" aria-hidden="true" />
      <motion.div
        className="ox-ledger-nandi-smoke"
        aria-hidden="true"
        animate={{ opacity: [0.25, 0.5, 0.25], y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />
      <div className="ox-ledger-nandi-frame">
        <motion.div
          className="ox-ledger-nandi-stage"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <NandiOx />
        </motion.div>
        <div className="ox-ledger-nandi-copy">
          <p className="ox-ledger-nandi-kicker" lang="sa">
            नन्दि · the waiting bull
          </p>
          <h1 className="ox-ledger-nandi-title">Nandi</h1>
          <p className="ox-ledger-nandi-lede">
            Forelegs folded, horns raised like temple pillars — the sacred mount keeps vigil, stillness recorded as devotion.
          </p>
        </div>
      </div>
      <aside className="ox-ledger-nandi-cartouche" aria-label="SET XXXI · DESIGNED BY COMPOSER">
        <span>SET XXXI · DESIGNED BY COMPOSER</span>
      </aside>
    </div>
  )
}
