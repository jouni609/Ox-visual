import { motion } from 'framer-motion'
import './lascaux.css'

export default function Lascaux() {
  return (
    <div className="oc-lascaux-root">
      <div className="oc-lascaux-signature">
        SET 02 · DESIGNED BY GEMINI 3.1 PRO
      </div>
      
      <div className="oc-lascaux-layout">
        <div className="oc-lascaux-text-col">
          <motion.h1 
            className="oc-lascaux-title"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            Lascaux
          </motion.h1>
          <motion.p 
            className="oc-lascaux-desc"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            Drawn in charcoal and ochre on limestone walls, the primal beast embodies untamed vitality and the birth of art.
          </motion.p>
        </div>

        <div className="oc-lascaux-svg-col" aria-hidden="true">
          <motion.svg 
            viewBox="0 0 500 400" 
            className="oc-lascaux-art"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.7, 1, 0.8, 1] }}
            transition={{ duration: 4, repeat: Infinity, repeatType: "mirror" }}
          >
            {/* Rough bison shape */}
            <path 
              d="M 120 280 C 100 280 80 250 80 220 C 80 180 120 120 180 100 C 250 80 320 80 380 120 C 420 150 440 200 420 250 C 400 300 360 320 320 300 C 280 280 250 250 220 260 C 180 280 150 280 120 280 Z" 
              className="oc-lascaux-path-fill" 
            />
            {/* Hump and back */}
            <motion.path 
              d="M 80 220 C 70 160 140 90 200 80 C 280 70 350 90 400 130" 
              className="oc-lascaux-path" 
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
            {/* Front legs and chest */}
            <motion.path 
              d="M 100 280 C 120 220 150 250 180 280 C 200 340 180 380 160 380 C 140 380 140 330 150 290" 
              className="oc-lascaux-path" 
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, delay: 0.5, ease: "easeInOut" }}
            />
            {/* Back legs */}
            <motion.path 
              d="M 380 280 C 390 320 380 370 350 380 C 320 390 330 330 340 280" 
              className="oc-lascaux-path" 
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, delay: 1, ease: "easeInOut" }}
            />
            {/* Horns */}
            <motion.path 
              d="M 400 130 C 440 120 480 150 460 180 C 440 210 420 180 400 160" 
              className="oc-lascaux-path" 
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.5, delay: 1.5, ease: "easeInOut" }}
            />
          </motion.svg>
        </div>
      </div>
    </div>
  )
}
