import { motion } from 'framer-motion'
import './bubalus.css'

export default function Bubalus() {
  return (
    <div className="oc-bubalus-root">
      <main className="oc-bubalus-content">
        <motion.h1 
          className="oc-bubalus-title"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          Bubalus
        </motion.h1>
        <motion.p 
          className="oc-bubalus-desc"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.8 }}
        >
          The quiet strength of the paddy fields. Moving with the rhythm of the water, a silent engine of the harvest.
        </motion.p>
      </main>

      <div className="oc-bubalus-svg-container" aria-hidden="true">
        <svg viewBox="0 0 1000 500" width="100%" height="100%" preserveAspectRatio="xMidYMax slice">
          {/* Background reeds */}
          {[...Array(15)].map((_, i) => (
            <motion.path
              key={`reed-bg-${i}`}
              d={`M ${50 + i * 60} 500 Q ${60 + i * 60 + Math.sin(i)*20} 350 ${50 + i * 60 + Math.cos(i)*30} 250`}
              className="oc-bubalus-reed"
              animate={{ pathLength: [0.9, 1, 0.9], skewX: [0, 2, -2, 0] }}
              transition={{ duration: 4 + i % 3, repeat: Infinity, ease: "easeInOut" }}
            />
          ))}

          {/* Water Buffalo */}
          <motion.g
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            {/* Buffalo Head and back emerging from water */}
            <path 
              d="M 300 400 C 350 300 450 280 500 280 C 600 280 700 320 750 400 Z" 
              className="oc-bubalus-buffalo"
            />
            {/* Head details */}
            <path 
              d="M 300 400 C 280 370 250 380 220 400 C 260 350 300 350 350 320 C 320 380 310 390 300 400 Z" 
              className="oc-bubalus-buffalo"
            />
            {/* Horns (sweeping back) */}
            <path 
              d="M 310 330 C 250 300 150 320 120 380 C 180 320 280 310 330 350 Z" 
              className="oc-bubalus-buffalo"
            />
            <path 
              d="M 350 330 C 400 300 450 310 480 360 C 430 310 380 320 340 350 Z" 
              className="oc-bubalus-buffalo"
            />
            
            {/* Reflection */}
            <g transform="scale(1, -1) translate(0, -800)">
              <path 
                d="M 300 400 C 350 300 450 280 500 280 C 600 280 700 320 750 400 Z" 
                className="oc-bubalus-reflection"
              />
              <path 
                d="M 310 330 C 250 300 150 320 120 380 C 180 320 280 310 330 350 Z" 
                className="oc-bubalus-reflection"
              />
            </g>
          </motion.g>

          {/* Foreground Water Waves */}
          <motion.path
            d="M 0 420 Q 250 400 500 420 T 1000 420 L 1000 500 L 0 500 Z"
            className="oc-bubalus-water-layer"
            animate={{ x: [-50, 0, -50] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.path
            d="M -50 440 Q 200 460 450 440 T 1050 440 L 1050 500 L -50 500 Z"
            fill="rgba(31, 54, 46, 0.4)"
            animate={{ x: [0, -50, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Foreground reeds */}
          {[...Array(10)].map((_, i) => (
            <motion.path
              key={`reed-fg-${i}`}
              d={`M ${100 + i * 90} 500 Q ${120 + i * 90 + Math.sin(i)*10} 400 ${90 + i * 90 + Math.cos(i)*20} 320`}
              className="oc-bubalus-reed"
              style={{ strokeWidth: 5 }}
              animate={{ skewX: [0, -3, 3, 0] }}
              transition={{ duration: 5 + i % 2, repeat: Infinity, ease: "easeInOut", delay: i * 0.2 }}
            />
          ))}
        </svg>
      </div>

      <div className="oc-bubalus-signature">
        SET 04 · DESIGNED BY GEMINI 3.1 PRO
      </div>
    </div>
  )
}
