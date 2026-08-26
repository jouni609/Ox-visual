import { motion } from 'framer-motion'
import './temple.css'

function NandiSvg() {
  return (
    <svg className="temple-nandi-svg" viewBox="0 0 500 380" aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id="temple-gold" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#E8D19A" />
          <stop offset="100%" stopColor="#8A6B2A" />
        </linearGradient>
      </defs>
      {/* Temple arch background */}
      <path d="M140,340 Q250,60 360,340 L340,360 L160,360 Z" fill="#2A1848" stroke="#C9A227" strokeWidth="3" />
      {/* Inner arch */}
      <path d="M170,340 Q250,100 330,340 L310,360 L190,360 Z" fill="#1A0A30" stroke="#E8D19A" strokeWidth="2" opacity="0.7" />
      {/* Nandi seated body */}
      <rect x="200" y="280" width="110" height="50" rx="16" fill="#4A2A5A" stroke="#C9A227" strokeWidth="2.5" />
      {/* Nandi head */}
      <ellipse cx="280" cy="240" rx="45" ry="50" fill="#4A2A5A" stroke="#C9A227" strokeWidth="3" />
      {/* Horns - curved upward */}
      <path d="M245,200 Q210,130 230,90 Q240,70 255,100 Q250,140 260,190 Z" fill="#E8D19A" stroke="#8A6B2A" strokeWidth="2" strokeLinecap="round" />
      <path d="M315,200 Q350,130 335,90 Q325,70 310,100 Q315,140 305,190 Z" fill="#E8D19A" stroke="#8A6B2A" strokeWidth="2" strokeLinecap="round" />
      {/* Eyes */}
      <ellipse cx="265" cy="235" rx="8" ry="6" fill="#F5F0E6" stroke="#8A6B2A" strokeWidth="1" />
      <circle cx="267" cy="236" r="2.5" fill="#2A1848" />
      <ellipse cx="295" cy="235" rx="8" ry="6" fill="#F5F0E6" stroke="#8A6B2A" strokeWidth="1" />
      <circle cx="297" cy="236" r="2.5" fill="#2A1848" />
      {/* Snout */}
      <rect x="270" y="245" width="28" height="16" rx="8" fill="#F5F0E6" stroke="#8A6B2A" strokeWidth="1" />
      <circle cx="278" cy="252" r="2.5" fill="#2A1848" />
      <circle cx="290" cy="252" r="2.5" fill="#2A1848" />
      {/* Decorative garland */}
      <path d="M200,280 Q150,300 140,270 Q150,250 180,260 Q210,270 230,250" fill="none" stroke="#C8102E" strokeWidth="3" strokeLinecap="round" />
      <circle cx="150" cy="270" r="4" fill="#C8102E" />
      <circle cx="170" cy="260" r="3" fill="#C8102E" />
      <circle cx="200" cy="255" r="3.5" fill="#C8102E" />
      <circle cx="230" cy="250" r="4" fill="#C8102E" />
      {/* Gold inscriptions */}
      <text x="250" y="145" textAnchor="middle" fontSize="18" fontFamily="EB Garamond, serif" fill="#C9A227" letterSpacing="4" lang="hi">नन्दि</text>
      <text x="250" y="165" textAnchor="middle" fontSize="10" fontFamily="Archivo, sans-serif" fill="#E8D19A" letterSpacing="2">THE SACRED BULL</text>
    </svg>
  )
}

export default function Temple() {
  return (
    <div className="th-aurora-temple">
      <main className="temple-main">
        <section className="temple-hero" aria-label="Sacred Nandi in temple">
          <article className="temple-copy">
            <motion.p
              className="temple-kicker"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
            >
              OX AURORA · SET 03
            </motion.p>
            <motion.h1
              className="temple-headline"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.9, ease: 'easeOut' }}
            >
              The Seated God
            </motion.h1>
            <motion.p
              className="temple-subline"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.65, duration: 1 }}
            >
              Nandi waits, not because he is patient — because he is eternal.
            </motion.p>
            <motion.div
              className="temple-lede"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.85, duration: 0.8 }}
            >
              <p>
                In every Shiva temple in India, a bull sits before the inner sanctum — Nandi, the mount of the destroyer, the listener who hears every prayer. He is not a decoration. He is the first witness.
              </p>
              <p>
                The seated form is calm, almost geometric: curved horns like temples, a body that fills the arch. Gold on indigo. The ox is not a beast here; it is the threshold between the human and the divine.
              </p>
            </motion.div>
          </article>

          <div className="temple-art">
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.1, ease: 'easeOut' }}
            >
              <NandiSvg />
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="temple-footer">
        <div className="temple-signature" aria-label="Signature seal">
          <span className="temple-signature-mark">SET 03 · DESIGNED BY INKLING</span>
          <span className="temple-signature-sub">OX AURORA · TEMPLE</span>
        </div>
      </footer>
    </div>
  )
}
