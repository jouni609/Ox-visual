import './Apis.css'
import { motion } from 'framer-motion'

export default function Apis() {
  return (
    <div className="ox-lantern-apis th-ox-lantern">
      <header className="ox-lantern-apis-mast">
        <p className="ox-lantern-apis-kicker" lang="egy-Latn">Set XXXIII · Mythology</p>
        <h1 className="ox-lantern-apis-title">Apis</h1>
        <p className="ox-lantern-apis-sub" lang="egy-Latn">
          The sacred black bull of Memphis, walking in the Egyptian canon.
        </p>
      </header>

      <div className="ox-lantern-apis-shrine">
        <motion.svg
          className="ox-lantern-apis-figure"
          viewBox="0 0 760 460"
          role="img"
          aria-labelledby="ox-lantern-apis-title"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          <title id="ox-lantern-apis-title">Sacred bull Apis in profile</title>
          <g aria-hidden="true">
            <rect x="0" y="380" width="760" height="80" fill="#0A0F1D" />
            <path d="M60 380 Q380 360 700 380" stroke="#D4AF37" strokeWidth="1" fill="none" />
            {Array.from({ length: 30 }, (_, i) => (
              <motion.circle
                key={i}
                cx={40 + i * 24}
                cy={60 + ((i * 17) % 80)}
                r={i % 3 === 0 ? 2 : 1}
                fill="#F2E7CE"
                animate={{ opacity: [0.2, 0.9, 0.2] }}
                transition={{ duration: 3 + (i % 4), repeat: Infinity, delay: i * 0.15 }}
              />
            ))}
            <ellipse cx="380" cy="260" rx="150" ry="80" fill="#0A0F1D" stroke="#D4AF37" strokeWidth="1.4" />
            <circle cx="260" cy="185" r="42" fill="#0A0F1D" stroke="#D4AF37" strokeWidth="1.4" />
            <path d="M230 150 Q200 120 195 145 Q200 175 225 180" fill="none" stroke="#D4AF37" strokeWidth="2" />
            <path d="M290 145 Q320 115 325 140 Q318 172 292 178" fill="none" stroke="#D4AF37" strokeWidth="2" />
            <motion.circle
              cx="308"
              cy="95"
              r="26"
              fill="none"
              stroke="#D4AF37"
              strokeWidth="3"
              style={{ transformOrigin: '308px 95px' }}
              animate={{ scale: [1, 1.14, 1], opacity: [0.8, 1, 0.8] }}
              transition={{ duration: 2.6, repeat: Infinity, ease: 'easeInOut' }}
            />
            <circle cx="308" cy="95" r="8" fill="#D4AF37" />
            <path d="M245 215 Q210 270 205 350" fill="none" stroke="#D4AF37" strokeWidth="6" strokeLinecap="round" />
            <path d="M285 225 Q280 275 285 350" fill="none" stroke="#D4AF37" strokeWidth="6" strokeLinecap="round" />
            <path d="M420 290 Q425 320 432 350" fill="none" stroke="#D4AF37" strokeWidth="6" strokeLinecap="round" />
            <path d="M480 285 Q495 318 505 350" fill="none" stroke="#D4AF37" strokeWidth="6" strokeLinecap="round" />
            <path d="M333 180 Q340 160 355 158" stroke="#D4AF37" strokeWidth="1.2" fill="none" />
            <circle cx="330" cy="185" r="4" fill="#D4AF37" />
            <path d="M490 200 Q525 185 520 230" stroke="#D4AF37" strokeWidth="1.2" fill="none" />
            <circle cx="508" cy="210" r="6" fill="#D4AF37" opacity="0.8" />
            <path d="M515 235 Q525 245 520 260" stroke="#D4AF37" strokeWidth="1.2" fill="none" />
          </g>
        </motion.svg>

        <div className="ox-lantern-apis-cartouche">
          <span className="ox-lantern-apis-cartouche-line">Apis · Hapi · Serapeum</span>
          <span className="ox-lantern-apis-cartouche-line">Sol Invictus · sacred bull</span>
        </div>
      </div>

      <div className="ox-lantern-apis-signature">
        <span>SET 04 · DESIGNED BY CATJAM</span>
      </div>
    </div>
  )
}