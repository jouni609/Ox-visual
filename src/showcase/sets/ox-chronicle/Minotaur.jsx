import { motion } from 'framer-motion'
import './minotaur.css'

export default function Minotaur() {
  return (
    <div className="oc-minotaur-root">
      <div className="oc-minotaur-labyrinth" aria-hidden="true">
        <svg viewBox="0 0 800 800" width="100%" height="100%" preserveAspectRatio="xMidYMid slice">
          <g transform="translate(400, 400)">
            {/* Labyrinth rings */}
            {[...Array(6)].map((_, i) => (
              <motion.path
                key={`ring-${i}`}
                d={`M -${100 + i * 50} -${100 + i * 50} L ${100 + i * 50} -${100 + i * 50} L ${100 + i * 50} ${100 + i * 50} L -${100 + i * 50} ${100 + i * 50} Z`}
                className="oc-minotaur-maze-path"
                initial={{ rotate: i % 2 === 0 ? -90 : 90, scale: 0.8 }}
                animate={{ rotate: 0, scale: 1 }}
                transition={{ 
                  duration: 0.8, 
                  delay: i * 0.1,
                  type: "spring",
                  stiffness: 100,
                  damping: 10
                }}
              />
            ))}
            
            {/* Maze cross paths */}
            <motion.path 
              d="M 0 -350 L 0 -100 M 0 100 L 0 350 M -350 0 L -100 0 M 100 0 L 350 0" 
              className="oc-minotaur-maze-path"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
            />

            {/* Minotaur Silhouette in the center */}
            <motion.g
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 1.5, type: "spring", stiffness: 200, damping: 15 }}
            >
              {/* Head / Body */}
              <path 
                d="M -40 -60 L -50 -100 L -20 -80 L 0 -100 L 20 -80 L 50 -100 L 40 -60 L 60 -30 L 40 40 L 0 80 L -40 40 L -60 -30 Z" 
                className="oc-minotaur-beast"
              />
              {/* Horns */}
              <path d="M -50 -100 C -70 -130 -100 -120 -120 -80 C -80 -100 -50 -80 -40 -60" className="oc-minotaur-beast" fill="var(--oc-bg)" />
              <path d="M 50 -100 C 70 -130 100 -120 120 -80 C 80 -100 50 -80 40 -60" className="oc-minotaur-beast" fill="var(--oc-bg)" />
              
              {/* Eyes */}
              <motion.circle cx="-20" cy="-40" r="4" className="oc-minotaur-beast-eye" animate={{ opacity: [1, 0, 1] }} transition={{ duration: 4, repeat: Infinity, repeatDelay: 1 }} />
              <motion.circle cx="20" cy="-40" r="4" className="oc-minotaur-beast-eye" animate={{ opacity: [1, 0, 1] }} transition={{ duration: 4, repeat: Infinity, repeatDelay: 1 }} />
            </motion.g>
          </g>
        </svg>
      </div>

      <div className="oc-minotaur-container">
        <motion.h1 
          className="oc-minotaur-title"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 2, ease: "easeOut" }}
        >
          Minotaur
        </motion.h1>
        <motion.p 
          className="oc-minotaur-desc"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2.5 }}
        >
          At the center of the geometric prison, the hybrid wrath waits. 
          The ultimate corruption of the sacred ox.
        </motion.p>
      </div>

      <div className="oc-minotaur-signature">
        SET 05 · DESIGNED BY ANTIGRAVITY
      </div>
    </div>
  )
}
