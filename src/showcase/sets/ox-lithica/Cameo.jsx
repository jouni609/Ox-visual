import { motion } from 'framer-motion'
import './cameo.css'

export default function Cameo() {
  return (
    <div className="th-cameo">
      <div className="cameo-velvet" aria-hidden="true" />

      <main className="cameo-main">
        <motion.div
          className="cameo-medallion-wrap"
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 50, damping: 16 }}
        >
          <svg className="cameo-medallion" viewBox="0 0 440 520" aria-hidden="true">
            <defs>
              <linearGradient id="cameo-gold-grad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#E8D5A3" />
                <stop offset="40%" stopColor="#C9A227" />
                <stop offset="70%" stopColor="#B8941F" />
                <stop offset="100%" stopColor="#E8D5A3" />
              </linearGradient>
              <linearGradient id="cameo-cream-grad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#FFF8F0" />
                <stop offset="100%" stopColor="#F5E6D3" />
              </linearGradient>
              <linearGradient id="cameo-carnelian-grad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#D46550" />
                <stop offset="100%" stopColor="#A83828" />
              </linearGradient>
            </defs>

            <ellipse cx="220" cy="260" rx="210" ry="250" fill="url(#cameo-gold-grad)" />
            <ellipse cx="220" cy="260" rx="198" ry="238" fill="#4A1C2C" />
            <ellipse cx="220" cy="260" rx="190" ry="230" fill="url(#cameo-cream-grad)" />

            <g transform="translate(220, 260)">
              <ellipse cx="0" cy="0" rx="170" ry="205" fill="url(#cameo-carnelian-grad)" opacity="0.12" />

              <path d="M-80 -20 Q-95 -50 -80 -80 Q-60 -105 -30 -100 Q-5 -95 10 -75 Q20 -55 15 -30" fill="#F5E6D3" />
              <path d="M-30 -100 Q-35 -130 -25 -155 Q-15 -170 0 -165 Q15 -160 20 -140 Q25 -120 15 -100" fill="#F5E6D3" />
              <path d="M15 -30 Q45 -35 70 -20 Q90 -5 95 25 Q98 55 85 80 Q70 105 45 115 Q20 122 -5 118 Q-30 112 -50 95 Q-70 75 -75 50 Q-80 25 -70 5" fill="#F5E6D3" />
              <path d="M-80 -20 Q-110 -40 -130 -20 Q-145 5 -135 35 Q-125 60 -100 70 Q-85 75 -70 65" fill="#F5E6D3" />
              <path d="M95 25 Q120 15 140 35 Q155 60 145 90 Q135 115 110 120 Q95 122 85 110" fill="#F5E6D3" />
              <path d="M-70 5 Q-90 20 -100 45 Q-105 70 -95 95 Q-85 115 -65 125 Q-45 132 -25 128" fill="#F5E6D3" />
              <path d="M85 80 Q105 95 110 120 Q112 145 95 165 Q75 182 50 185 Q25 188 0 185" fill="#F5E6D3" />
              <path d="M-25 128 Q-10 145 10 155 Q35 162 60 158 Q85 152 100 135" fill="#F5E6D3" />
              <path d="M0 185 Q20 200 45 205 Q70 208 90 198 Q108 188 118 168" fill="#F5E6D3" />

              <circle cx="-45" cy="-35" r="5" fill="#A83828" opacity="0.4" />
              <path d="M-25 -55 Q-5 -65 15 -55" fill="none" stroke="#A83828" strokeWidth="1.5" opacity="0.35" />
              <path d="M-60 20 Q-40 35 -20 30" fill="none" stroke="#A83828" strokeWidth="1.5" opacity="0.3" />
              <path d="M30 -10 Q50 0 60 25" fill="none" stroke="#A83828" strokeWidth="1.5" opacity="0.3" />

              <path d="M-15 -95 Q-5 -85 5 -95" fill="none" stroke="#C9A227" strokeWidth="1.2" opacity="0.5" />
              <path d="M-10 -75 Q0 -65 10 -75" fill="none" stroke="#C9A227" strokeWidth="1.2" opacity="0.5" />
            </g>

            <ellipse cx="220" cy="260" rx="170" ry="205" fill="none" stroke="url(#cameo-gold-grad)" strokeWidth="2" opacity="0.6" />

            <g transform="translate(220, 475)">
              <ellipse cx="0" cy="0" rx="55" ry="18" fill="none" stroke="#C9A227" strokeWidth="1" opacity="0.5" />
              <text x="0" y="5" textAnchor="middle" fontFamily="'Cinzel', serif" fontSize="9" fill="#8B6914" letterSpacing="1.5" opacity="0.7">OPENCODE</text>
            </g>
          </svg>
        </motion.div>

        <motion.section
          className="cameo-text"
          initial={{ y: 35, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 60, damping: 16 }}
        >
          <p className="cameo-kicker">SARDONYX SHELL, ROME, C. 50 BCE</p>
          <h1 className="cameo-headline">Bull of the Campus Martius</h1>
          <p className="cameo-lede">
            Roman gem-cutters carved sardonyx shell in layers, exploiting the natural colour bands to create depth without paint.
            A skilled artisan could render a bull's head in three planes: cream foreground, pink middle, deep red background.
            Such cameos were set in gold and worn as signet rings by senators and soldiers alike.
            The bull recalled the legendary founding of Rome, when cattle grazed the marshy field that became the Campus Martius.
          </p>

          <div className="cameo-facts">
            <div className="cameo-fact">
              <span className="cameo-fact-label">Material</span>
              <span className="cameo-fact-value">Sardonyx shell</span>
            </div>
            <div className="cameo-fact">
              <span className="cameo-fact-label">Mount</span>
              <span className="cameo-fact-value">Gold filigree</span>
            </div>
            <div className="cameo-fact">
              <span className="cameo-fact-label">Diameter</span>
              <span className="cameo-fact-value">4.2 centimetres</span>
            </div>
          </div>
        </motion.section>
      </main>

      <footer className="cameo-footer">
        <div className="cameo-signature">
          <svg viewBox="0 0 200 40" aria-hidden="true">
            <path d="M20 20 L30 10 L40 20 L50 10 L60 20" fill="none" stroke="#C9A227" strokeWidth="1.5" opacity="0.5" />
            <text x="100" y="25" textAnchor="middle" fontFamily="'Playfair Display', serif" fontSize="11" fill="#8B6914" letterSpacing="2" opacity="0.8">SET VIII · DESIGNED BY OPENCODE</text>
            <path d="M140 20 L150 10 L160 20 L170 10 L180 20" fill="none" stroke="#C9A227" strokeWidth="1.5" opacity="0.5" />
          </svg>
        </div>
      </footer>
    </div>
  )
}
