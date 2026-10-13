import './Zebu.css'
import { motion } from 'framer-motion'

export default function Zebu() {
  return (
    <div className="ox-lantern-zebu th-ox-lantern">
      <div className="ox-lantern-zebu-stage">
        <header className="ox-lantern-zebu-mast">
          <p className="ox-lantern-zebu-kicker">Set XXXIII · Breed</p>
          <h1 className="ox-lantern-zebu-title">Zebu</h1>
          <p className="ox-lantern-zebu-sub">Indu-Brazil champion on the halter, hump and all.</p>
        </header>

        <div className="ox-lantern-zebu-ring">
          <motion.svg
            className="ox-lantern-zebu-rosette"
            viewBox="0 0 120 120"
            animate={{ rotate: 360 }}
            transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
            aria-hidden="true"
          >
            <circle cx="60" cy="60" r="52" fill="none" stroke="#D4AF37" strokeWidth="3" />
            {Array.from({ length: 12 }, (_, i) => (
              <line
                key={i}
                x1="60"
                y1="8"
                x2="60"
                y2="22"
                stroke="#D4AF37"
                strokeWidth="2"
                transform={`rotate(${i * 30} 60 60)`}
              />
            ))}
            <text x="60" y="66" textAnchor="middle" className="ox-lantern-zebu-rosette-text">CHAMP</text>
          </motion.svg>

          <svg
            className="ox-lantern-zebu-figure"
            viewBox="0 0 640 420"
            role="img"
            aria-labelledby="ox-lantern-zebu-title"
          >
            <title id="ox-lantern-zebu-title">Zebu bull in profile</title>
            <g aria-hidden="true">
              <ellipse cx="320" cy="350" rx="230" ry="18" fill="rgba(0,0,0,0.25)" />
              <path d="M140 300 Q130 240 145 195 Q175 160 220 165 L260 170 Q320 150 380 155 Q440 162 470 195 Q495 230 485 275 L475 305 Q460 325 435 325 L260 325 Q230 325 205 315 Q175 305 140 300Z" fill="#3A1D47" stroke="#D4AF37" strokeWidth="2" />
              <path d="M250 150 Q280 95 320 90 Q365 88 395 120 L385 150" fill="#3A1D47" stroke="#D4AF37" strokeWidth="2" />
              <path d="M335 90 Q360 60 385 55 Q410 55 415 78 Q405 95 385 98" fill="#3A1D47" stroke="#D4AF37" strokeWidth="2" />
              <path d="M195 165 Q160 130 150 95 Q160 75 180 78 Q200 110 215 150" fill="#3A1D47" stroke="#D4AF37" strokeWidth="2" />
              <path d="M135 195 Q105 185 85 200 Q80 225 100 235" fill="#3A1D47" stroke="#D4AF37" strokeWidth="1.5" />
              <path d="M485 275 Q525 260 545 280 Q550 310 530 320" fill="#3A1D47" stroke="#D4AF37" strokeWidth="1.5" />
              <path d="M160 300 L150 350" stroke="#D4AF37" strokeWidth="6" strokeLinecap="round" />
              <path d="M210 318 L205 350" stroke="#D4AF37" strokeWidth="6" strokeLinecap="round" />
              <path d="M420 318 L425 350" stroke="#D4AF37" strokeWidth="6" strokeLinecap="round" />
              <path d="M465 305 L470 350" stroke="#D4AF37" strokeWidth="6" strokeLinecap="round" />
              <ellipse cx="215" cy="205" rx="14" ry="10" fill="#F3E7C9" />
              <circle cx="215" cy="205" r="4" fill="#1A1A1A" />
              <path d="M150 215 Q135 230 140 250" stroke="#D4AF37" strokeWidth="1.5" fill="none" />
              <path d="M118 205 Q95 212 92 232" stroke="#D4AF37" strokeWidth="1.5" fill="none" />
            </g>
          </svg>
        </div>

        <span className="ox-lantern-zebu-tag">Brahman · humped bull · show halter</span>
      </div>

      <div className="ox-lantern-zebu-signature">
        <span>SET 02 · DESIGNED BY CATJAM</span>
      </div>
    </div>
  )
}