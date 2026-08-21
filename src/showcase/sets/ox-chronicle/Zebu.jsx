import { motion } from 'framer-motion'
import { useState } from 'react'
import './zebu.css'

export default function Zebu() {
  const [activeInfo, setActiveInfo] = useState('general')

  const infoContent = {
    general: {
      title: 'BOS TAURUS INDICUS',
      desc: 'The Zebu, a species or subspecies of domestic cattle originating in South Asia. Characterized by a fatty hump on their shoulders, a large dewlap, and sometimes drooping ears. Highly adapted to high temperatures.'
    },
    hump: {
      title: 'THORACIC HUMP',
      desc: 'A prominent fatty deposit situated over the wither, used as a reserve of energy in times of famine. It also aids in thermoregulation, providing a larger surface area for heat dissipation.'
    },
    dewlap: {
      title: 'CERVICAL DEWLAP',
      desc: 'A longitudinal flap of skin hanging beneath the lower jaw or neck. Its large surface area provides superior cooling properties in arid and tropical climates.'
    }
  }

  return (
    <div className="oc-zebu-root">
      <div className="oc-zebu-container">
        <header className="oc-zebu-header">
          <motion.h1 
            className="oc-zebu-title"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Anatomy
          </motion.h1>
          <div className="oc-zebu-subtitle">FIG 3. ZEBU (BOS INDICUS)</div>
        </header>

        <main className="oc-zebu-main">
          <div className="oc-zebu-diagram" aria-hidden="true">
            <svg viewBox="0 0 800 600" className="oc-zebu-svg">
              {/* Grid axes */}
              <line x1="50" y1="550" x2="750" y2="550" stroke="rgba(56, 189, 248, 0.4)" strokeWidth="1" />
              <line x1="50" y1="50" x2="50" y2="550" stroke="rgba(56, 189, 248, 0.4)" strokeWidth="1" />
              
              {/* Zebu Outline */}
              <motion.path 
                d="M 200 450 L 220 300 C 230 200 300 150 350 150 C 400 150 420 180 480 200 C 550 220 620 180 650 150 C 670 130 700 130 710 160 C 720 190 700 240 680 260 C 640 300 580 320 540 350 C 500 380 480 450 480 450 M 420 450 L 440 350 C 380 350 350 380 320 450 M 650 150 C 660 120 680 110 700 120 C 720 130 710 160 710 160"
                className="oc-zebu-path"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2.5, ease: "easeInOut" }}
              />

              {/* Dewlap detail */}
              <motion.path 
                d="M 680 260 C 680 320 630 380 580 350 C 550 330 540 350 540 350"
                className="oc-zebu-path"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, delay: 1, ease: "easeInOut" }}
              />

              {/* Callouts */}
              <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.5 }}>
                {/* Hump callout */}
                <circle cx="350" cy="150" r="4" className="oc-zebu-point" />
                <line x1="350" y1="150" x2="350" y2="80" className="oc-zebu-callout-line" />
                <line x1="350" y1="80" x2="280" y2="80" className="oc-zebu-callout-line" />
                <text x="270" y="85" fill="var(--oc-accent)" fontFamily="Share Tech Mono" fontSize="14" textAnchor="end" style={{cursor: 'pointer'}} onMouseEnter={() => setActiveInfo('hump')}>[01] HUMP</text>

                {/* Dewlap callout */}
                <circle cx="630" cy="350" r="4" className="oc-zebu-point" />
                <line x1="630" y1="350" x2="680" y2="400" className="oc-zebu-callout-line" />
                <line x1="680" y1="400" x2="720" y2="400" className="oc-zebu-callout-line" />
                <text x="730" y="405" fill="var(--oc-accent)" fontFamily="Share Tech Mono" fontSize="14" style={{cursor: 'pointer'}} onMouseEnter={() => setActiveInfo('dewlap')}>[02] DEWLAP</text>
              </motion.g>
            </svg>
          </div>

          <motion.div 
            className="oc-zebu-info"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <h2 className="oc-zebu-info-title">{infoContent[activeInfo].title}</h2>
            <p className="oc-zebu-info-desc">{infoContent[activeInfo].desc}</p>
          </motion.div>
        </main>
      </div>

      <div className="oc-zebu-signature">
        SET 03 · DESIGNED BY GEMINI 3.1 PRO
      </div>
    </div>
  )
}
