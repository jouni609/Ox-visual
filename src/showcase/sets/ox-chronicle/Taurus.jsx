import { motion } from 'framer-motion'
import './taurus.css'

export default function Taurus() {
  return (
    <div className="oc-taurus-root">
      <div className="oc-taurus-svg-container" aria-hidden="true">
        <svg viewBox="0 0 800 800" width="100%" height="100%" preserveAspectRatio="xMidYMid slice">
          <g transform="translate(400, 400)">
            <motion.g
              animate={{ rotate: 360 }}
              transition={{ duration: 200, repeat: Infinity, ease: "linear" }}
            >
              {/* Star connections (Ox Head shape) */}
              <path
                d="M -150 -100 L -80 0 L 0 50 L 80 0 L 150 -100 M -80 0 L -40 -120 L -100 -220 M 80 0 L 40 -120 L 100 -220 M 0 50 L -20 120 L 0 160 L 20 120 Z"
                className="oc-taurus-line"
                fill="none"
              />
              
              {/* Stars */}
              <circle cx="-150" cy="-100" r="4" className="oc-taurus-star" style={{ animationDelay: '0.1s' }} />
              <circle cx="-80" cy="0" r="5" className="oc-taurus-star" style={{ animationDelay: '0.5s' }} />
              <circle cx="0" cy="50" r="6" className="oc-taurus-star" style={{ animationDelay: '1.2s' }} />
              <circle cx="80" cy="0" r="5" className="oc-taurus-star" style={{ animationDelay: '0.8s' }} />
              <circle cx="150" cy="-100" r="4" className="oc-taurus-star" style={{ animationDelay: '0.3s' }} />
              <circle cx="-40" cy="-120" r="3" className="oc-taurus-star" style={{ animationDelay: '1.5s' }} />
              <circle cx="-100" cy="-220" r="6" className="oc-taurus-star" style={{ animationDelay: '2.1s' }} />
              <circle cx="40" cy="-120" r="3" className="oc-taurus-star" style={{ animationDelay: '0.9s' }} />
              <circle cx="100" cy="-220" r="6" className="oc-taurus-star" style={{ animationDelay: '0.4s' }} />
              <circle cx="-20" cy="120" r="4" className="oc-taurus-star" style={{ animationDelay: '1.8s' }} />
              <circle cx="0" cy="160" r="5" className="oc-taurus-star" style={{ animationDelay: '0.7s' }} />
              <circle cx="20" cy="120" r="4" className="oc-taurus-star" style={{ animationDelay: '1.1s' }} />
              
              {/* Background filler stars */}
              {[...Array(40)].map((_, i) => (
                <circle
                  key={i}
                  cx={(Math.random() - 0.5) * 1600}
                  cy={(Math.random() - 0.5) * 1600}
                  r={Math.random() * 2 + 1}
                  className="oc-taurus-star"
                  style={{ animationDelay: `${Math.random() * 4}s`, opacity: Math.random() * 0.5 }}
                />
              ))}
            </motion.g>
          </g>
        </svg>
      </div>

      <main className="oc-taurus-content">
        <motion.h1 
          className="oc-taurus-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Taurus
        </motion.h1>
        <motion.p 
          className="oc-taurus-desc"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Written in the firmament before humanity tilled the soil. The celestial bull guides the spring.
        </motion.p>
      </main>

      <div className="oc-taurus-signature">
        SET 01 · DESIGNED BY ANTIGRAVITY
      </div>
    </div>
  )
}
