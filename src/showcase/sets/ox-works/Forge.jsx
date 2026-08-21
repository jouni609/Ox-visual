import { motion } from 'framer-motion'
import './forge.css'

function ForgeArt() {
  return (
    <svg className="fg-scene" viewBox="0 0 900 480" aria-hidden="true" focusable="false">
      <defs>
        <radialGradient id="fg-glow" cx="50%" cy="62%" r="38%">
          <stop offset="0" stopColor="#FFB700" stopOpacity="0.85" />
          <stop offset="0.5" stopColor="#FF6B00" stopOpacity="0.45" />
          <stop offset="1" stopColor="#0A0A0B" stopOpacity="0" />
        </radialGradient>
        <pattern id="fg-brick" width="52" height="22" patternUnits="userSpaceOnUse">
          <rect width="52" height="22" fill="#1C120E" />
          <rect x="1" y="1" width="50" height="20" fill="none" stroke="#2A1A12" strokeWidth="1.2" />
          <line x1="26" y1="1" x2="26" y2="11" stroke="#2A1A12" strokeWidth="1.2" />
          <line x1="0" y1="11" x2="52" y2="11" stroke="#2A1A12" strokeWidth="1" />
        </pattern>
      </defs>
      <rect x="0" y="0" width="900" height="480" fill="url(#fg-brick)" />
      <rect x="0" y="0" width="900" height="480" fill="url(#fg-glow)" />
      <rect x="0" y="420" width="900" height="60" fill="#0A0A0B" />
      <line x1="0" y1="420" x2="900" y2="420" stroke="#E8C36A" strokeWidth="2" opacity="0.3" />
      <g transform="translate(88,104)">
        <ellipse cx="124" cy="278" rx="62" ry="10" fill="#000" opacity="0.35" />
        <circle cx="124" cy="190" r="84" fill="none" stroke="#F5F0E8" strokeWidth="3" opacity="0.85" />
        <circle cx="124" cy="190" r="8" fill="#E8C36A" stroke="#F5F0E8" strokeWidth="2" />
        {Array.from({ length: 8 }, (_, i) => {
          const a = (i * 45 * Math.PI) / 180
          const x1 = 124 + Math.cos(a) * 8
          const y1 = 190 + Math.sin(a) * 8
          const x2 = 124 + Math.cos(a) * 84
          const y2 = 190 + Math.sin(a) * 84
          return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#F5F0E8" strokeWidth="4" strokeLinecap="round" />
        })}
        <g transform="translate(124,110)">
          <path d="M -32 22 C -38 8 -30 -6 -16 -10 C -6 -12 6 -10 16 -2 L 22 14 C 16 8 6 6 -6 8 C -18 12 -28 18 -32 22 Z" fill="#F5F0E8" stroke="#0A0A0B" strokeWidth="2" />
          <circle cx="-8" cy="2" r="3" fill="#0A0A0B" />
        </g>
      </g>
      <g transform="translate(360, 176)">
        <rect x="0" y="96" width="18" height="118" fill="#2A1A12" stroke="#F5F0E8" strokeWidth="2.2" />
        <rect x="160" y="96" width="18" height="118" fill="#2A1A12" stroke="#F5F0E8" strokeWidth="2.2" />
        <g className="fg-bellows">
          <path d="M 18 112 L 160 112 L 148 138 L 18 138 Z" fill="#E8C36A" stroke="#0A0A0B" strokeWidth="2" />
          <path d="M 18 138 L 148 138 L 136 164 L 18 164 Z" fill="#FF6B00" stroke="#0A0A0B" strokeWidth="2" />
          <path d="M 18 164 L 136 164 L 124 190 L 18 190 Z" fill="#E8C36A" stroke="#0A0A0B" strokeWidth="2" />
        </g>
        <rect x="72" y="214" width="54" height="10" rx="3" fill="#FF6B00" />
        <ellipse cx="99" cy="234" rx="44" ry="18" fill="#FF6B00" stroke="#F5F0E8" strokeWidth="2" />
        <ellipse cx="99" cy="232" rx="26" ry="9" fill="#FFB700" opacity="0.9" />
      </g>
      <g transform="translate(580, 226)">
        <rect x="0" y="88" width="128" height="46" rx="4" fill="#8A7F7A" stroke="#F5F0E8" strokeWidth="2.5" />
        <path d="M 14 88 L 14 64 L 114 64 L 114 88" fill="#6B5A52" stroke="#F5F0E8" strokeWidth="2" />
        <rect x="42" y="42" width="44" height="24" rx="3" fill="#F5F0E8" stroke="#0A0A0B" strokeWidth="2" />
        <path d="M 22 42 C 22 18 40 8 64 12 C 88 8 106 18 106 42" fill="none" stroke="#F5F0E8" strokeWidth="3" strokeLinecap="round" />
        <g className="fg-hammer" transform="translate(64,24)">
          <rect x="-6" y="-44" width="12" height="44" fill="#E8C36A" stroke="#0A0A0B" strokeWidth="1.6" />
          <rect x="-22" y="-56" width="44" height="16" rx="3" fill="#F5F0E8" stroke="#0A0A0B" strokeWidth="1.8" />
        </g>
        <ellipse cx="64" cy="146" rx="72" ry="8" fill="#000" opacity="0.28" />
      </g>
      <g className="fg-sparks" aria-hidden="true">
        <circle cx="458" cy="224" r="2.2" fill="#FFB700" />
        <circle cx="472" cy="212" r="1.6" fill="#FFB700" />
        <circle cx="446" cy="208" r="1.4" fill="#FFB700" />
        <circle cx="628" cy="118" r="2" fill="#FFB700" />
        <circle cx="642" cy="102" r="1.5" fill="#FFB700" />
      </g>
    </svg>
  )
}

export default function Forge() {
  return (
    <div className="th-forge">
      <div className="fg-topline" aria-hidden="true">
        <span>FORGE · OX-DRIVEN BLOWER · PLANT № 01</span>
        <span className="fg-topline-heat">
          <em /> 1 420 °C — WORKING HEAT
        </span>
      </div>

      <header className="fg-hero">
        <motion.div
          className="fg-hero-copy"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <p className="fg-kicker">THE ANIMAL THAT KEPT THE FIRE ALIVE</p>
          <h1 className="fg-title">
            <span>FOR</span>
            <span className="fg-title-ge">GE</span>
          </h1>
          <p className="fg-lede">
            Before coal, before bellows by hand — the ox walked a circle and the fire breathed. Each step drove air into charcoal until iron sweated and steel remembered its shape.
          </p>
          <div className="fg-stats">
            <div>
              <span className="fg-stat-num">24</span>
              <span className="fg-stat-label">BLOWS / MINUTE<br />AT WALKING PACE</span>
            </div>
            <div>
              <span className="fg-stat-num">800 KG</span>
              <span className="fg-stat-label">INGOT PER DAY<br />WITH OX BLOWER</span>
            </div>
            <div>
              <span className="fg-stat-num">3×</span>
              <span className="fg-stat-label">FASTER THAN<br />HAND BLOWN</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="fg-hero-art"
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15, ease: 'easeOut' }}
        >
          <ForgeArt />
          <div className="fg-art-foot">
            <span>Fig. 3 — Ox treadmill operating wedge bellows, Rhenish forge, circa 1580 after Agricola. Anvil at right; note charcoal pile at centre.</span>
            <span className="fg-art-scale">SECTION · 1:18</span>
          </div>
        </motion.div>
      </header>

      <section className="fg-strip" aria-label="Forge data">
        <div className="fg-strip-item">
          <span className="fg-strip-label">FUEL</span>
          <span className="fg-strip-val">Charcoal + bone — 60 kg / heat</span>
        </div>
        <span className="fg-strip-sep" aria-hidden="true">◆</span>
        <div className="fg-strip-item">
          <span className="fg-strip-label">WIND</span>
          <span className="fg-strip-val">Ox bellows sustains 1 200 l/min</span>
        </div>
        <span className="fg-strip-sep" aria-hidden="true">◆</span>
        <div className="fg-strip-item">
          <span className="fg-strip-label">YIELD</span>
          <span className="fg-strip-val">Wrought iron to blister steel</span>
        </div>
      </section>

      <section className="fg-ingots">
        <motion.article className="fg-ingot" initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <svg viewBox="0 0 200 72" aria-hidden="true" focusable="false">
            <path d="M18 52 L182 52 L168 16 L32 16 Z" fill="#8A7F7A" stroke="#F5F0E8" strokeWidth="2" />
            <path d="M32 16 L168 16 L154 8 L46 8 Z" fill="#E8C36A" stroke="#F5F0E8" strokeWidth="1.5" />
            <text x="100" y="40" textAnchor="middle" fontFamily="Teko, sans-serif" fontWeight="700" fontSize="16" fill="#F5F0E8">FE  ·  99.2%</text>
          </svg>
          <h3>Pig</h3>
          <p>Cast from the smelt, still hot enough to brand the floor. Break it and read the crystal — good iron snaps like cold toffee.</p>
          <span className="fg-ingot-meta">143 kg · poured 06:00 · pit 2</span>
        </motion.article>
        <motion.article className="fg-ingot" initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.08 }}>
          <svg viewBox="0 0 200 72" aria-hidden="true" focusable="false">
            <path d="M18 52 L182 52 L168 16 L32 16 Z" fill="#FF6B00" stroke="#F5F0E8" strokeWidth="2" />
            <path d="M32 16 L168 16 L154 8 L46 8 Z" fill="#FFB700" stroke="#F5F0E8" strokeWidth="1.5" />
            <text x="100" y="40" textAnchor="middle" fontFamily="Teko, sans-serif" fontWeight="700" fontSize="16" fill="#0A0A0B">STEEL  ·  0.8C</text>
          </svg>
          <h3>Blister</h3>
          <p>Iron packed in charcoal, sealed, baked for days. The ox never stopped. Open the chest and find steel blistered like bread.</p>
          <span className="fg-ingot-meta">88 kg · sealed 72 hr · chest B</span>
        </motion.article>
        <motion.article className="fg-ingot" initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.14 }}>
          <svg viewBox="0 0 200 72" aria-hidden="true" focusable="false">
            <path d="M18 52 L182 52 L168 16 L32 16 Z" fill="#6B5A52" stroke="#F5F0E8" strokeWidth="2" />
            <path d="M32 16 L168 16 L154 8 L46 8 Z" fill="#8A7F7A" stroke="#F5F0E8" strokeWidth="1.5" />
            <text x="100" y="40" textAnchor="middle" fontFamily="Teko, sans-serif" fontWeight="700" fontSize="16" fill="#F5F0E8">SLAG  ·  CULLET</text>
          </svg>
          <h3>Slag</h3>
          <p>What the fire rejects, the builder keeps. Crushed for roads, cast for weights. Nothing leaves the forge without a second use.</p>
          <span className="fg-ingot-meta">210 kg · tapped 11:40 · heap 1</span>
        </motion.article>
      </section>

      <blockquote className="fg-quote">
        <p>“The ox does not know steel. It only knows the circle. But the circle makes the steel.”</p>
        <cite>— Georgius Agricola, <span lang="la">De Re Metallica</span>, 1556</cite>
      </blockquote>

      <footer className="fg-foot">
        <div className="fg-stamp">
          <span className="fg-stamp-top">FOUNDRY MARK · HEAT № 118</span>
          <span className="fg-stamp-main">SET III · DESIGNED BY MUSE-SPARK</span>
          <span className="fg-stamp-sub">OX WORKS — FORGE · STRUCK WHILE HOT</span>
        </div>
        <span className="fg-foot-brand">OX WORKS — FORGE · THE FIRE BREATHES WHEN THE OX WALKS</span>
      </footer>
    </div>
  )
}
