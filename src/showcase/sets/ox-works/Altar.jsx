import { motion } from 'framer-motion'
import './altar.css'

function Shrine() {
  return (
    <svg className="at-shrine" viewBox="0 0 800 560" aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id="at-gold" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#F5D76E" />
          <stop offset="0.5" stopColor="#C79A11" />
          <stop offset="1" stopColor="#8A6D0A" />
        </linearGradient>
        <pattern id="at-stone" width="18" height="18" patternUnits="userSpaceOnUse">
          <rect width="18" height="18" fill="#FFF8E8" />
          <circle cx="9" cy="9" r="0.7" fill="#0B2B5E" opacity="0.08" />
        </pattern>
      </defs>
      <rect x="0" y="0" width="800" height="560" fill="#FFF8E8" />
      <path d="M 40 140 L 400 36 L 760 140 Z" fill="none" stroke="#0B2B5E" strokeWidth="3" />
      <path d="M 58 138 L 400 52 L 742 138 L 720 158 L 80 158 Z" fill="url(#at-gold)" stroke="#0B2B5E" strokeWidth="2.2" />
      <g transform="translate(400,118)">
        <ellipse cx="0" cy="8" rx="128" ry="18" fill="#0B2B5E" opacity="0.08" />
        <path d="M -88 18 C -72 6 -46 -4 -10 -6 C 22 -8 52 -2 78 14 L 72 26 C 48 16 22 12 -6 14 C -36 16 -66 24 -82 34 Z" fill="#FFF8E8" stroke="#0B2B5E" strokeWidth="3" strokeLinejoin="round" />
        <path d="M -88 18 C -96 10 -94 2 -82 -6" stroke="#0B2B5E" strokeWidth="3" fill="none" strokeLinecap="round" />
        <path d="M 78 14 C 88 8 92 0 88 -10" stroke="#0B2B5E" strokeWidth="3" fill="none" strokeLinecap="round" />
        <ellipse cx="-56" cy="8" rx="14" ry="10" fill="#0B2B5E" />
        <ellipse cx="54" cy="10" rx="14" ry="10" fill="#0B2B5E" />
        <circle cx="-56" cy="10" r="2.8" fill="#C79A11" />
        <circle cx="54" cy="12" r="2.8" fill="#C79A11" />
        <path d="M -22 14 C -18 20 -8 22 2 18 L -4 26 C -14 28 -24 24 -28 16 Z" fill="#B81E2C" stroke="#0B2B5E" strokeWidth="1.6" />
        <path d="M -10 2 L -6 -10 L -1 2 Z" fill="#C79A11" stroke="#0B2B5E" strokeWidth="1.4" />
        <path d="M -22 24 C -10 32 10 32 22 24 L 18 34 C 6 40 -6 40 -18 34 Z" fill="#0B2B5E" />
      </g>
      <g fill="#0B2B5E">
        <rect x="100" y="158" width="18" height="268" />
        <rect x="682" y="158" width="18" height="268" />
        <rect x="260" y="158" width="14" height="268" />
        <rect x="526" y="158" width="14" height="268" />
        <rect x="80" y="152" width="640" height="18" rx="2" />
        <rect x="70" y="426" width="660" height="16" rx="2" />
      </g>
      <rect x="118" y="176" width="14" height="250" fill="#FFF8E8" opacity="0.9" />
      <rect x="668" y="176" width="14" height="250" fill="#FFF8E8" opacity="0.9" />
      <g className="at-garland" stroke="#0B2B5E" strokeWidth="1.6" fill="none">
        <path d="M 132 186 C 200 228 320 242 400 238 C 480 242 600 228 668 186" strokeDasharray="0" />
      </g>
      <g className="at-garland-dots">
        {Array.from({ length: 16 }, (_, i) => {
          const t = i / 15
          const x = 132 + t * 536
          const y = 186 + Math.sin(t * Math.PI) * 34
          return <circle key={i} cx={x} cy={y} r={7} fill={i % 2 ? '#B81E2C' : '#C79A11'} stroke="#0B2B5E" strokeWidth="1.6" />
        })}
      </g>
      <g transform="translate(400,336)">
        <rect x="-124" y="72" width="248" height="54" rx="3" fill="#0B2B5E" />
        <text x="0" y="96" textAnchor="middle" fontFamily="Cinzel, serif" fontWeight="700" fontSize="11" letterSpacing="4" fill="#F5D76E">NANDI · THE PATIENT</text>
        <text x="0" y="110" textAnchor="middle" fontFamily="Cormorant Garamond, serif" fontStyle="italic" fontSize="11" fill="#FFF8E8" opacity="0.85">reclines before Shiva, listening forever</text>
      </g>
      <g className="at-diya" transform="translate(168,432)">
        <ellipse cx="0" cy="12" rx="18" ry="8" fill="#C79A11" stroke="#0B2B5E" strokeWidth="1.6" />
        <path d="M -8 -6 C -6 -2 6 -2 8 -6 L 5 4 L -5 4 Z" fill="#B81E2C" />
        <path d="M 0 -14 C 0 -14 3 -10 0 -6 C -3 -10 0 -14 0 -14" fill="#FFB700" className="at-flame" />
      </g>
      <g className="at-diya" transform="translate(632,432)">
        <ellipse cx="0" cy="12" rx="18" ry="8" fill="#C79A11" stroke="#0B2B5E" strokeWidth="1.6" />
        <path d="M -8 -6 C -6 -2 6 -2 8 -6 L 5 4 L -5 4 Z" fill="#B81E2C" />
        <path d="M 0 -14 C 0 -14 3 -10 0 -6 C -3 -10 0 -14 0 -14" fill="#FFB700" className="at-flame at-flame-2" />
      </g>
      <g className="at-smoke" fill="none" stroke="#0B2B5E" strokeWidth="1.2" opacity="0.18" strokeLinecap="round">
        <path d="M168 420 C 162 400 174 380 168 360 C 162 340 172 322 168 300" />
        <path d="M632 420 C 638 400 626 380 632 360 C 638 340 628 322 632 300" />
      </g>
      <rect x="0" y="0" width="800" height="560" fill="none" stroke="#0B2B5E" strokeWidth="2.5" />
      <rect x="10" y="10" width="780" height="540" fill="none" stroke="#0B2B5E" strokeWidth="1" opacity="0.35" />
    </svg>
  )
}

export default function Altar() {
  return (
    <div className="th-altar">
      <header className="at-head">
        <motion.p className="at-eyebrow" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
          OX WORKS · IV — THE SACRED · APIS · NANDI · GAVA
        </motion.p>
        <motion.h1
          className="at-title"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.12 }}
        >
          ALTAR
        </motion.h1>
        <p className="at-sub">Where the ox ceases to be labour and becomes blessing.</p>
        <p className="at-lede">
          In Egypt the Apis bull wore the sun between its horns. On Shiva’s mountain Nandi kneels and will not rise until the world is just. In every village that ever yoked an ox, someone tied a ribbon to its horn and asked for more time.
        </p>
      </header>

      <motion.div
        className="at-stage"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.28, ease: 'easeOut' }}
      >
        <Shrine />
      </motion.div>

      <section className="at-cards">
        <motion.article className="at-card" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <span className="at-card-num">I</span>
          <h3>Patience</h3>
          <p>The ox does not hurry to the sacrifice. It walks as it has always walked. The priest must learn its tempo or the ritual fails.</p>
          <span className="at-card-meta">Observed at Pongal, Tamil Nadu — fresh turmeric tied to the horn</span>
        </motion.article>
        <motion.article className="at-card" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.08 }}>
          <span className="at-card-num">II</span>
          <h3>Strength held back</h3>
          <p>A Nandi can crush a chariot but chooses to kneel. Power that refuses to show itself — that is what a temple knows as sacred.</p>
          <span className="at-card-meta">Chola bronze, 12th century — Nandi facing the lingam, never the crowd</span>
        </motion.article>
        <motion.article className="at-card" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.14 }}>
          <span className="at-card-num">III</span>
          <h3>Abundance returned</h3>
          <p>First milk goes back to the calf. Second milk is offered. What remains is shared. The ox teaches economy as covenant, not extraction.</p>
          <span className="at-card-meta">Gopashtami — cows bathed, garlanded, walked through the village at dusk</span>
        </motion.article>
      </section>

      <blockquote className="at-quote">
        <p>“If you want to know whether a village will survive, look at how it speaks to its ox.”</p>
        <cite>— Inscription, Ellora Cave XXXII, 9th century</cite>
      </blockquote>

      <footer className="at-foot">
        <div className="at-plaque">
          <span className="at-plaque-rule" aria-hidden="true" />
          <span className="at-plaque-main">SET III · DESIGNED BY MUSE-SPARK</span>
          <span className="at-plaque-sub">OX WORKS — ALTAR · CARVED IN LAPIS &amp; GOLD · DEDICATED TO THE PATIENT ONE</span>
          <span className="at-plaque-rule" aria-hidden="true" />
        </div>
        <span className="at-foot-brand">OX WORKS — ALTAR · THE HORN THAT HELD THE SUN</span>
      </footer>
    </div>
  )
}
