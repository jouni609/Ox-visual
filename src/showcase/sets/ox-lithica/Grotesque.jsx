import { motion } from 'framer-motion'
import './grotesque.css'

export default function Grotesque() {
  return (
    <div className="th-grotesque">
      <div className="grotesque-rain" aria-hidden="true">
        <svg className="grotesque-rain-svg" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
          <defs>
            <linearGradient id="grotesque-rain-grad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#4A5568" stopOpacity="0" />
              <stop offset="30%" stopColor="#4A5568" stopOpacity="0.08" />
              <stop offset="100%" stopColor="#4A5568" stopOpacity="0.25" />
            </linearGradient>
          </defs>
          <rect width="1200" height="800" fill="url(#grotesque-rain-grad)" />
          <line x1="200" y1="0" x2="180" y2="200" stroke="#4A5568" strokeWidth="1.5" opacity="0.2" />
          <line x1="350" y1="0" x2="340" y2="150" stroke="#4A5568" strokeWidth="1.2" opacity="0.15" />
          <line x1="500" y1="0" x2="490" y2="220" stroke="#4A5568" strokeWidth="1.8" opacity="0.22" />
          <line x1="650" y1="0" x2="640" y2="180" stroke="#4A5568" strokeWidth="1.3" opacity="0.18" />
          <line x1="800" y1="0" x2="790" y2="250" stroke="#4A5568" strokeWidth="1.6" opacity="0.2" />
          <line x1="950" y1="0" x2="940" y2="160" stroke="#4A5568" strokeWidth="1.1" opacity="0.14" />
          <line x1="1100" y1="0" x2="1085" y2="210" stroke="#4A5568" strokeWidth="1.4" opacity="0.19" />
          <line x1="150" y1="300" x2="140" y2="500" stroke="#4A5568" strokeWidth="1.2" opacity="0.16" />
          <line x1="450" y1="350" x2="435" y2="600" stroke="#4A5568" strokeWidth="1.5" opacity="0.2" />
          <line x1="750" y1="280" x2="740" y2="480" stroke="#4A5568" strokeWidth="1.3" opacity="0.17" />
          <line x1="1050" y1="320" x2="1040" y2="520" stroke="#4A5568" strokeWidth="1.4" opacity="0.18" />
        </svg>
      </div>

      <main className="grotesque-main">
        <motion.div
          className="grotesque-arch-wrap"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 50, damping: 18 }}
        >
          <svg className="grotesque-arch" viewBox="0 0 480 600" aria-hidden="true">
            <defs>
              <linearGradient id="grotesque-stone-grad" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#A8A090" />
                <stop offset="50%" stopColor="#B8B0A0" />
                <stop offset="100%" stopColor="#989080" />
              </linearGradient>
              <linearGradient id="grotesque-glass-grad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#8B2635" stopOpacity="0.35" />
                <stop offset="100%" stopColor="#D4AF37" stopOpacity="0.15" />
              </linearGradient>
            </defs>

            <path d="M20 580 L20 200 Q20 80 240 20 Q460 80 460 200 L460 580 Z" fill="url(#grotesque-stone-grad)" />
            <path d="M35 565 L35 200 Q35 95 240 42 Q445 95 445 200 L445 565 Z" fill="#1A1410" />
            <path d="M45 555 L45 200 Q45 105 240 58 Q435 105 435 200 L435 555 Z" fill="url(#grotesque-glass-grad)" />

            <g transform="translate(240, 310)">
              <path d="M-70 -90 Q-85 -120 -70 -150 Q-55 -175 -25 -170 Q0 -165 15 -145 Q25 -125 20 -100" fill="#B8B0A0" />
              <path d="M-25 -170 Q-30 -200 -20 -225 Q-10 -240 5 -235 Q20 -230 25 -210 Q30 -190 20 -170" fill="#B8B0A0" />
              <path d="M20 -100 Q50 -105 75 -90 Q95 -75 100 -45 Q103 -15 90 10 Q75 35 50 45 Q25 52 0 48 Q-25 42 -45 25 Q-65 5 -70 -20 Q-75 -45 -65 -65" fill="#B8B0A0" />
              <path d="M-70 -90 Q-100 -110 -120 -90 Q-135 -65 -125 -35 Q-115 -10 -90 0 Q-75 5 -60 -5" fill="#B8B0A0" />
              <path d="M100 -45 Q125 -55 145 -35 Q160 -10 150 20 Q140 45 115 50 Q100 52 90 40" fill="#B8B0A0" />
              <path d="M-65 -65 Q-85 -50 -95 -25 Q-100 0 -90 25 Q-80 45 -60 55 Q-40 62 -20 58" fill="#B8B0A0" />
              <path d="M90 10 Q110 25 115 50 Q117 75 100 95 Q80 112 55 115 Q30 118 5 115" fill="#B8B0A0" />
              <path d="M-20 58 Q-5 75 15 85 Q40 92 65 88 Q90 82 105 65" fill="#B8B0A0" />
              <path d="M5 115 Q25 130 50 135 Q75 138 95 128 Q113 118 123 98" fill="#B8B0A0" />

              <circle cx="-35" cy="-55" r="7" fill="#1A1410" opacity="0.65" />
              <circle cx="45" cy="-60" r="7" fill="#1A1410" opacity="0.65" />
              <path d="M-20 -30 Q0 -20 20 -30" fill="none" stroke="#1A1410" strokeWidth="2.5" opacity="0.5" />
              <path d="M-30 15 Q-10 35 10 25 Q30 15 40 35" fill="none" stroke="#1A1410" strokeWidth="2" opacity="0.45" />
              <path d="M-50 70 Q-25 95 0 85 Q25 75 50 90" fill="none" stroke="#1A1410" strokeWidth="2" opacity="0.4" />
              <path d="M-60 105 Q-30 125 0 115 Q30 105 60 120" fill="none" stroke="#1A1410" strokeWidth="2" opacity="0.35" />

              <path d="M-80 -100 Q-95 -130 -85 -160" fill="none" stroke="#B8B0A0" strokeWidth="4" opacity="0.6" />
              <path d="M85 -105 Q105 -135 95 -165" fill="none" stroke="#B8B0A0" strokeWidth="4" opacity="0.6" />
            </g>

            <path d="M20 580 L460 580" stroke="#989080" strokeWidth="4" />
            <path d="M30 565 L450 565" stroke="#787060" strokeWidth="2" />
            <path d="M40 550 L440 550" stroke="#989080" strokeWidth="3" />
          </svg>
        </motion.div>

        <motion.section
          className="grotesque-text"
          initial={{ y: 35, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 60, damping: 16 }}
        >
          <p className="grotesque-kicker">LIMESTONE, PARIS, C. 1240 CE</p>
          <h1 className="grotesque-headline">Gargoyle of Saint-Luc</h1>
          <p className="grotesque-lede">
            Medieval masons carved grotesques from the soft limestone of the Ile-de-France, shaping demons, beasts, and hybrid creatures to spout rainwater clear of the church walls.
            The ox-demon was a favourite: horns for intimidation, a heavy jaw for grotesque humour, eyes that seemed to follow the faithful below.
            Water ran from its open mouth in a steady stream, turning the carving darker with each passing century.
          </p>

          <div className="grotesque-facts">
            <div className="grotesque-fact">
              <span className="grotesque-fact-label">Stone</span>
              <span className="grotesque-fact-value">Lutetian limestone</span>
            </div>
            <div className="grotesque-fact">
              <span className="grotesque-fact-label">Function</span>
              <span className="grotesque-fact-value">Rainspout</span>
            </div>
            <div className="grotesque-fact">
              <span className="grotesque-fact-label">Height</span>
              <span className="grotesque-fact-value">62 centimetres</span>
            </div>
          </div>
        </motion.section>
      </main>

      <footer className="grotesque-footer">
        <div className="grotesque-signature">
          <svg viewBox="0 0 260 52" aria-hidden="true">
            <rect x="2" y="2" width="256" height="48" rx="3" fill="none" stroke="#5A6B4E" strokeWidth="1.5" opacity="0.4" />
            <rect x="8" y="8" width="244" height="36" rx="2" fill="none" stroke="#5A6B4E" strokeWidth="1" opacity="0.25" />
            <text x="130" y="32" textAnchor="middle" fontFamily="'UnifrakturMaguntia', cursive" fontSize="16" fill="#B8B0A0" letterSpacing="1" opacity="0.7">Set VIII · Designed by Kimi 2.6</text>
          </svg>
        </div>
      </footer>
    </div>
  )
}
