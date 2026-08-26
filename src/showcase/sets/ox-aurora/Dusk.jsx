import { motion } from 'framer-motion'
import './dusk.css'

function OxSvg() {
  return (
    <svg className="dusk-ox-svg" viewBox="0 0 520 340" aria-hidden="true" focusable="false">
      <defs>
        <filter id="dusk-ink-shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#1A0F00" floodOpacity="0.5" />
        </filter>
      </defs>
      <g filter="url(#dusk-ink-shadow)">
        {/* Body */}
        <path d="M120,200 C110,170 140,130 190,125 C240,120 300,140 340,160 C370,175 390,210 380,250 C370,290 320,300 260,300 C190,300 140,280 120,250 Z" fill="#2A2420" stroke="#1A0F00" strokeWidth="3" />
        {/* Neck */}
        <path d="M300,155 C330,160 350,180 340,220 C330,250 290,240 270,210 Z" fill="#2A2420" stroke="#1A0F00" strokeWidth="3" />
        {/* Head */}
        <path d="M340,160 C370,150 400,170 410,200 C410,230 380,240 350,220 Z" fill="#2A2420" stroke="#1A0F00" strokeWidth="3" />
        {/* Horn left */}
        <path d="M350,175 Q310,100 280,70 Q270,60 285,80 Q310,120 355,190 Z" fill="#F5E6C8" stroke="#1A0F00" strokeWidth="2.5" strokeLinecap="round" />
        {/* Horn right */}
        <path d="M380,185 Q430,110 460,80 Q470,70 455,95 Q430,140 385,195 Z" fill="#F5E6C8" stroke="#1A0F00" strokeWidth="2.5" strokeLinecap="round" />
        {/* Snout */}
        <rect x="390" y="210" width="22" height="18" rx="6" fill="#3A2A18" stroke="#1A0F00" strokeWidth="2" />
        {/* Eye */}
        <ellipse cx="385" cy="200" rx="6" ry="5" fill="#F5E6C8" stroke="#1A0F00" strokeWidth="1.5" />
        {/* Nose dots */}
        <circle cx="398" cy="218" r="2.5" fill="#1A0F00" />
        <circle cx="404" cy="218" r="2.5" fill="#1A0F00" />
        {/* Leg front left */}
        <path d="M220,290 L210,340 L225,342 L240,300 Z" fill="#2A2420" stroke="#1A0F00" strokeWidth="2.5" />
        {/* Leg front right */}
        <path d="M280,295 L300,340 L315,342 L300,300 Z" fill="#2A2420" stroke="#1A0F00" strokeWidth="2.5" />
        {/* Leg back left */}
        <path d="M160,280 L150,330 L165,332 L175,285 Z" fill="#2A2420" stroke="#1A0F00" strokeWidth="2.5" />
        {/* Leg back right */}
        <path d="M330,270 L340,320 L355,322 L345,275 Z" fill="#2A2420" stroke="#1A0F00" strokeWidth="2.5" />
        {/* Tail */}
        <path d="M120,240 Q80,200 60,230 Q50,260 70,240 Q90,210 130,250 Z" fill="#2A2420" stroke="#1A0F00" strokeWidth="2.5" />
        {/* Yoke / harness */}
        <path d="M340,190 Q400,150 450,170" fill="none" stroke="#D46A00" strokeWidth="5" strokeLinecap="round" />
        <path d="M300,200 Q240,160 190,180" fill="none" stroke="#D46A00" strokeWidth="4" strokeLinecap="round" />
        {/* Plow line */}
        <path d="M200,300 L50,340" fill="none" stroke="#1A0F00" strokeWidth="3" strokeLinecap="round" />
      </g>
    </svg>
  )
}

export default function Dusk() {
  return (
    <div className="th-aurora-dusk">
      <main className="dusk-main">
        <section className="dusk-hero" aria-label="Working ox at dusk">
          <div className="dusk-art">
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: 'easeOut' }}
            >
              <OxSvg />
            </motion.div>
          </div>
          <article className="dusk-copy">
            <motion.p
              className="dusk-kicker"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              OX AURORA · SET 01
            </motion.p>
            <motion.h1
              className="dusk-headline"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.9, ease: 'easeOut' }}
            >
              The Plough Still Turns
            </motion.h1>
            <motion.p
              className="dusk-subline"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 1 }}
            >
              When the light is low, the work does not stop.
            </motion.p>
            <motion.div
              className="dusk-lede"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
            >
              <p>
                The working ox does not know the hour. It knows the furrow, the yoke, the weight of the soil behind it and the cold air in its lungs. For ten thousand years the same silhouette has moved across fields from Finland to Punjab — a body built to pull what the earth demands.
              </p>
              <p>
                This is the ox at dusk: not heroic, not mythic, but necessary. The harness glows amber in the last light; the horns cut dark against the fading sky.
              </p>
            </motion.div>
          </article>
        </section>
      </main>

      <footer className="dusk-footer">
        <div className="dusk-signature" aria-label="Signature seal">
          <span className="dusk-signature-mark">SET 01 · DESIGNED BY INKLING</span>
          <span className="dusk-signature-sub">OX AURORA · DUSK</span>
        </div>
      </footer>
    </div>
  )
}
