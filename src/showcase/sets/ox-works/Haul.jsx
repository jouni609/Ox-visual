import { motion } from 'framer-motion'
import './haul.css'

const waypoints = ['KARAKORAM', 'SALT ROAD', 'TIMBER LINE', 'STONE YARD', 'GRAIN SILO', 'MARKET SQUARE', 'KARAKORAM']

function CartArt() {
  return (
    <svg className="hl-cart" viewBox="0 0 880 360" aria-hidden="true" focusable="false">
      <rect x="0" y="288" width="880" height="14" fill="#0B1C33" />
      <g className="hl-dash" stroke="#FFD600" strokeWidth="4" strokeDasharray="18 14" strokeLinecap="round" opacity="0.95">
        <line x1="0" y1="295" x2="880" y2="295" />
      </g>
      <g transform="translate(88,104)">
        <path d="M 18 122 C 6 98 16 70 38 62 C 48 58 58 60 66 66 L 72 54 C 86 38 116 32 148 46 L 162 64 L 172 52 C 188 42 212 44 228 58 L 220 78 C 204 68 188 68 176 76 L 162 92 L 148 98 L 86 98 L 66 112 L 48 128 Z" fill="#E7E9EC" stroke="#0B1C33" strokeWidth="5" strokeLinejoin="round" />
        <path d="M 38 62 C 26 48 28 30 42 20" stroke="#0B1C33" strokeWidth="5" fill="none" strokeLinecap="round" />
        <path d="M 66 66 C 60 50 64 32 78 22" stroke="#0B1C33" strokeWidth="5" fill="none" strokeLinecap="round" />
        <circle cx="52" cy="96" r="8" fill="#0B1C33" />
        <circle cx="54" cy="96" r="2.2" fill="#FFD600" />
        <path d="M 18 122 L 10 158 L 34 158 L 42 122 Z" fill="#0B1C33" />
        <path d="M 96 98 L 96 158 L 118 158 L 118 98" fill="#0B1C33" />
        <path d="M 176 76 L 176 96 L 210 96 L 210 56 L 188 56 Z" fill="#FF2E1F" stroke="#0B1C33" strokeWidth="3" />
        <path d="M 210 96 L 336 96 L 336 72 L 300 72 L 300 56 L 210 56 Z" fill="#E7E9EC" stroke="#0B1C33" strokeWidth="4" />
        <rect x="222" y="68" width="64" height="16" rx="2" fill="#FFD600" stroke="#0B1C33" strokeWidth="2" />
        <rect x="302" y="110" width="68" height="14" rx="7" fill="#0B1C33" />
        <circle cx="242" cy="158" r="34" fill="#0B1C33" />
        <circle cx="242" cy="158" r="22" fill="#E7E9EC" />
        <circle cx="242" cy="158" r="8" fill="#0B1C33" />
        <circle cx="326" cy="158" r="34" fill="#0B1C33" />
        <circle cx="326" cy="158" r="22" fill="#E7E9EC" />
        <circle cx="326" cy="158" r="8" fill="#0B1C33" />
        <path d="M 336 110 L 352 110 L 352 132 L 336 132 Z" fill="#FFD600" stroke="#0B1C33" strokeWidth="2" />
        <g fill="#0B1C33" opacity="0.9">
          <rect x="228" y="82" width="10" height="10" rx="1" />
          <rect x="246" y="82" width="10" height="10" rx="1" />
          <rect x="264" y="82" width="10" height="10" rx="1" />
        </g>
        <path d="M 148 98 L 210 98" stroke="#FFD600" strokeWidth="6" strokeLinecap="round" />
      </g>
      <g className="hl-cargo-sway">
        <rect x="522" y="162" width="18" height="48" rx="3" fill="#FF2E1F" stroke="#0B1C33" strokeWidth="2" />
        <rect x="546" y="156" width="18" height="54" rx="3" fill="#E7E9EC" stroke="#0B1C33" strokeWidth="2" />
        <rect x="570" y="168" width="18" height="42" rx="3" fill="#9AA8B5" stroke="#0B1C33" strokeWidth="2" />
      </g>
    </svg>
  )
}

function Gauge({ label, value, unit, rotation }) {
  return (
    <div className="hl-gauge">
      <svg viewBox="0 0 120 120" aria-hidden="true" focusable="false">
        <circle cx="60" cy="60" r="48" fill="none" stroke="#E7E9EC" strokeWidth="7" opacity="0.14" />
        <path d="M 18 86 A 48 48 0 0 1 102 86" fill="none" stroke="#FFD600" strokeWidth="7" strokeLinecap="round" />
        <g transform={`rotate(${rotation} 60 60)`}>
          <line x1="60" y1="60" x2="60" y2="18" stroke="#FF2E1F" strokeWidth="4" strokeLinecap="round" />
          <circle cx="60" cy="60" r="6" fill="#0B1C33" stroke="#E7E9EC" strokeWidth="2" />
        </g>
      </svg>
      <span className="hl-gauge-val">{value}<em>{unit}</em></span>
      <span className="hl-gauge-label">{label}</span>
    </div>
  )
}

export default function Haul() {
  return (
    <div className="th-haul">
      <div className="hl-toprule" aria-hidden="true">
        <div className="hl-toprule-inner">
          <span>DEPARTMENT OF DRAUGHT · BUREAU OF HAULAGE</span>
          <span>CLASS III · YOKED VEHICLE</span>
        </div>
      </div>

      <header className="hl-header">
        <div className="hl-shield" aria-hidden="true">
          <span className="hl-shield-num">OX</span>
          <span className="hl-shield-route">01</span>
        </div>
        <div className="hl-header-copy">
          <p className="hl-kicker">LOAD · PULL · DELIVER · REPEAT SINCE 4000 BCE</p>
          <h1 className="hl-title">
            <span>HAUL</span>
            <span className="hl-title-outline">HAUL</span>
          </h1>
          <p className="hl-sub">The road is a rope, the ox is the hand that pulls it. Salt, timber, stone — if it built a city, an ox dragged it there first.</p>
        </div>
        <div className="hl-specs">
          <div className="hl-spec">
            <span className="hl-spec-num">900 KG</span>
            <span className="hl-spec-label">RATED PULL</span>
          </div>
          <div className="hl-spec">
            <span className="hl-spec-num">28 KM</span>
            <span className="hl-spec-label">PER DAY · LOADED</span>
          </div>
          <div className="hl-spec">
            <span className="hl-spec-num">0 L</span>
            <span className="hl-spec-label">FUEL · GRASS ONLY</span>
          </div>
        </div>
      </header>

      <div className="hl-roadwrap">
        <motion.div
          className="hl-roadcard"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <div className="hl-roadbar">
            <span>WAYBILL № HL-2026 — PAIRED OXEN · TWO-WHEEL CART · SPRUNG YOKE</span>
            <span className="hl-roadbar-dot" aria-hidden="true" />
            <span>MAX GRADE 12%</span>
          </div>
          <CartArt />
          <div className="hl-roadmeta">
            <span>Fig. 2 — Timber cart, central Anatolia. Note yoke padding and iron-banded wheels. Cargo lashing is the driver’s signature.</span>
            <span className="hl-roadmeta-right">SCALE 1:24 · SIDE ELEVATION</span>
          </div>
        </motion.div>
      </div>

      <div className="hl-gauges">
        <Gauge label="DISTANCE THIS YEAR" value="4 860" unit="KM" rotation={42} />
        <Gauge label="TONNAGE HAULED" value="31" unit="T" rotation={-18} />
        <Gauge label="AVG SPEED LOADED" value="3.2" unit="KM/H" rotation={12} />
      </div>

      <div className="hl-marquee" aria-hidden="true">
        <div className="hl-marquee-track">
          <div className="hl-marquee-half">
            {waypoints.map((w, i) => (
              <span key={i}>{w}<em>↔</em></span>
            ))}
          </div>
          <div className="hl-marquee-half" aria-hidden="true">
            {waypoints.map((w, i) => (
              <span key={`b-${i}`}>{w}<em>↔</em></span>
            ))}
          </div>
        </div>
      </div>

      <section className="hl-tickets">
        <motion.article className="hl-ticket" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <span className="hl-ticket-kicker">WEIGHBRIDGE · 06:14</span>
          <h3>Stone for the temple</h3>
          <p>Two blocks, roughly dressed, 1.2 tonnes. The oxen lean, the rope creaks, the cart does not argue. Arrival before noon heat.</p>
          <span className="hl-ticket-stamp">CLEARED</span>
        </motion.article>
        <motion.article className="hl-ticket hl-ticket-alt" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}>
          <span className="hl-ticket-kicker">WEIGHBRIDGE · 14:40</span>
          <h3>Salt to market</h3>
          <p>Forty-two sacks, stitched hessian. Every sack salted the road a little. The ox knows the market by smell.</p>
          <span className="hl-ticket-stamp">CLEARED</span>
        </motion.article>
        <motion.article className="hl-ticket" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.15 }}>
          <span className="hl-ticket-kicker">WEIGHBRIDGE · 19:02</span>
          <h3>Timber for winter</h3>
          <p>Green oak, still bleeding sap. The yoke groans like a small house settling. By dusk it will be a roof.</p>
          <span className="hl-ticket-stamp">CLEARED</span>
        </motion.article>
      </section>

      <footer className="hl-foot">
        <div className="hl-inspection">
          <span className="hl-inspection-badge">✓ INSPECTED</span>
          <span className="hl-inspection-text">
            <strong>SET III · DESIGNED BY MUSE-SPARK</strong>
            <span>HAULAGE DIVISION · BRAKE TEST PASSED · YOKE FIT CERTIFIED</span>
          </span>
          <span className="hl-inspection-perf" aria-hidden="true" />
        </div>
        <span className="hl-foot-brand">OX WORKS — HAUL · THE ROAD BELONGS TO THOSE WHO PULL</span>
      </footer>
    </div>
  )
}
