import { motion } from 'framer-motion'
import './glacier.css'

function YakSvg() {
  return (
    <svg className="glacier-yak-svg" viewBox="0 0 500 360" aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id="glacier-frost" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#A0D2E8" />
          <stop offset="100%" stopColor="#2A3F52" />
        </linearGradient>
      </defs>
      {/* Body - long-hair yak */}
      <path d="M140,220 C130,180 170,140 220,135 C280,130 340,150 370,170 C390,190 380,240 340,260 C290,280 210,270 160,250 Z" fill="#2A3F52" stroke="#1A2E42" strokeWidth="3" />
      {/* Long hair fringe */}
      <path d="M130,190 Q110,220 120,260 Q140,240 160,200 Z" fill="#A0D2E8" stroke="#2A3F52" strokeWidth="2" />
      <path d="M360,170 Q390,210 380,250 Q360,230 340,190 Z" fill="#A0D2E8" stroke="#2A3F52" strokeWidth="2" />
      {/* Head */}
      <path d="M340,160 C360,155 380,170 385,200 C385,220 360,230 340,215 Z" fill="#2A3F52" stroke="#1A2E42" strokeWidth="2.5" />
      {/* Horns - thick curved */}
      <path d="M345,175 Q310,100 280,70 Q270,60 290,85 Q320,130 350,180 Z" fill="#FFFFFF" stroke="#2A3F52" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M375,180 Q410,110 435,80 Q445,70 425,95 Q395,140 370,185 Z" fill="#FFFFFF" stroke="#2A3F52" strokeWidth="2.5" strokeLinecap="round" />
      {/* Snout */}
      <rect x="370" y="210" width="24" height="16" rx="6" fill="#DCEBF4" stroke="#1A2E42" strokeWidth="1.5" />
      <circle cx="380" cy="218" r="2.5" fill="#1A2E42" />
      <circle cx="386" cy="218" r="2.5" fill="#1A2E42" />
      {/* Eye */}
      <ellipse cx="365" cy="198" rx="7" ry="5" fill="#DCEBF4" stroke="#1A2E42" strokeWidth="1.5" />
      <circle cx="366" cy="199" r="2.5" fill="#1A2E42" />
      {/* Legs */}
      <path d="M200,250 L190,310 L210,310 L220,255 Z" fill="#2A3F52" stroke="#1A2E42" strokeWidth="2" />
      <path d="M280,260 L300,310 L315,308 L300,265 Z" fill="#2A3F52" stroke="#1A2E42" strokeWidth="2" />
      <path d="M170,240 L160,300 L175,298 L185,245 Z" fill="#2A3F52" stroke="#1A2E42" strokeWidth="2" />
      <path d="M330,250 L340,310 L355,308 L345,255 Z" fill="#2A3F52" stroke="#1A2E42" strokeWidth="2" />
      {/* Tail */}
      <path d="M150,245 Q100,230 80,260 Q75,290 110,270 Q130,240 160,250 Z" fill="#A0D2E8" stroke="#2A3F52" strokeWidth="2" />
      {/* Crystalline geometric background shapes */}
      <g opacity="0.18" fill="none" stroke="#A0D2E8" strokeWidth="2">
        <polygon points="250,40 300,120 200,120" />
        <polygon points="60,280 120,340 20,340" />
        <polygon points="420,260 480,300 440,340" />
      </g>
    </svg>
  )
}

export default function Glacier() {
  return (
    <div className="th-aurora-glacier">
      <main className="glacier-main">
        <section className="glacier-hero" aria-label="Frozen yak on glacier">
          <div className="glacier-art-col">
            <motion.div
              className="glacier-art"
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.1, ease: 'easeOut' }}
            >
              <YakSvg />
            </motion.div>
          </div>
          <article className="glacier-copy-col">
            <motion.p
              className="glacier-kicker"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
            >
              OX AURORA · SET 02
            </motion.p>
            <motion.h1
              className="glacier-headline"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.9, ease: 'easeOut' }}
            >
              Glacier Breath
            </motion.h1>
            <motion.p
              className="glacier-subline"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.65, duration: 1 }}
            >
              At five thousand meters, the yak is a crystal.
            </motion.p>
            <motion.div
              className="glacier-lede"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.85, duration: 0.8 }}
            >
              <p>
                The yak is not built for speed. It is built for cold — thick hair like frost crystals, lungs that drink thin air, horns that curve like the arcs of a glacier. On the Tibetan plateau, the yak carries wood, milk, and warmth; without it, high villages would not survive the winter.
              </p>
              <p>
                Here it stands in geometric stillness: not a photograph, a crystal structure. Each hair is a line of frost, each horn a frozen arc of resistance.
              </p>
            </motion.div>
          </article>
        </section>

        <section className="glacier-stats" aria-label="Yak facts">
          <div className="glacier-stat">
            <span className="glacier-num">4,500</span>
            <span className="glacier-label">Meters — average altitude</span>
          </div>
          <div className="glacier-stat">
            <span className="glacier-num">20</span>
            <span className="glacier-label">Years — life span in the high cold</span>
          </div>
          <div className="glacier-stat">
            <span className="glacier-num">−40</span>
            <span className="glacier-label">Degrees — winter the yak endures</span>
          </div>
        </section>
      </main>

      <footer className="glacier-footer">
        <div className="glacier-signature" aria-label="Signature seal">
          <span className="glacier-signature-mark">SET 02 · DESIGNED BY INKLING</span>
          <span className="glacier-signature-sub">OX AURORA · GLACIER</span>
        </div>
      </footer>
    </div>
  )
}
