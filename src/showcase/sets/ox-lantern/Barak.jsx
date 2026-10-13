import './Barak.css'
import { motion } from 'framer-motion'

export default function Barak() {
  return (
    <div className="ox-lantern-barak th-ox-lantern">
      <header className="ox-lantern-barak-mast">
        <p className="ox-lantern-barak-kicker">Set XXXIII · Region</p>
        <h1 className="ox-lantern-barak-title">Barak</h1>
        <p className="ox-lantern-barak-sub">Water buffalo at the monsoon waterline, beads of rain on its horn.</p>
      </header>

      <div className="ox-lantern-barak-plain">
        <div className="ox-lantern-barak-rain" aria-hidden="true" />
        <motion.svg
          className="ox-lantern-barak-figure"
          viewBox="0 0 760 460"
          role="img"
          aria-labelledby="ox-lantern-barak-title"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <title id="ox-lantern-barak-title">Water buffalo wading at the waterline</title>
          <g aria-hidden="true">
            <rect x="0" y="300" width="760" height="160" fill="#0F3B3A" />
            <path d="M0 300 Q190 285 380 300 T760 300" fill="none" stroke="#6DB7A8" strokeWidth="1.2" />
            {Array.from({ length: 7 }, (_, i) => (
              <motion.ellipse
                key={i}
                cx={120 + i * 95}
                cy={320 + (i % 2) * 18}
                rx="14"
                ry="3"
                fill="none"
                stroke="#6DB7A8"
                strokeWidth="1"
                animate={{ opacity: [0.8, 0, 0.8] }}
                transition={{ duration: 3.2, repeat: Infinity, delay: i * 0.35 }}
              />
            ))}
            <ellipse cx="370" cy="210" rx="170" ry="90" fill="#123333" stroke="#6DB7A8" strokeWidth="1.6" />
            <circle cx="220" cy="150" r="52" fill="#123333" stroke="#6DB7A8" strokeWidth="1.6" />
            <path d="M180 115 Q130 95 110 135 Q118 175 150 180" fill="none" stroke="#6DB7A8" strokeWidth="2.4" />
            <path d="M180 118 Q135 70 125 65 Q115 68 126 85" fill="none" stroke="#6DB7A8" strokeWidth="1.6" />
            <path d="M255 125 Q310 95 345 105 Q360 135 330 150" fill="none" stroke="#6DB7A8" strokeWidth="2.4" />
            <path d="M258 125 Q310 78 325 70 Q336 74 324 90" fill="none" stroke="#6DB7A8" strokeWidth="1.6" />
            <path d="M200 175 Q170 240 165 295" fill="none" stroke="#6DB7A8" strokeWidth="7" strokeLinecap="round" />
            <path d="M260 195 Q255 250 260 298" fill="none" stroke="#6DB7A8" strokeWidth="7" strokeLinecap="round" />
            <path d="M440 230 Q445 285 452 298" fill="none" stroke="#6DB7A8" strokeWidth="7" strokeLinecap="round" />
            <path d="M500 220 Q520 275 532 298" fill="none" stroke="#6DB7A8" strokeWidth="7" strokeLinecap="round" />
            <path d="M280 190 Q330 215 360 195" fill="none" stroke="#EFC97A" strokeWidth="1.4" />
            <circle cx="240" cy="155" r="5" fill="#EFC97A" />
            <path d="M540 200 Q580 180 585 220" stroke="#6DB7A8" strokeWidth="1.4" fill="none" />
          </g>
        </motion.svg>
      </div>

      <div className="ox-lantern-barak-seal">
        <span>Monsoon ledger · 380 mm rain · 1 herd</span>
      </div>

      <div className="ox-lantern-barak-signature">
        <span>SET 05 · DESIGNED BY CATJAM</span>
      </div>
    </div>
  )
}