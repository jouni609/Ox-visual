import { useState } from 'react'
import { motion } from 'framer-motion'
import './pecunia.css'

const UNITS = [
  { id: 'uncia', name: 'Uncia', mass: '27.0 g', eqBarley: '1.2 kg', eqSheep: '0.08', desc: '1/12 of an As. Daily ration of spelt grain for a legionary.' },
  { id: 'sextans', name: 'Sextans', mass: '54.0 g', eqBarley: '2.4 kg', eqSheep: '0.16', desc: '1/6 of an As. Standard sacrificial vessel fee in early Latium.' },
  { id: 'as', name: 'As Grave', mass: '324.0 g', eqBarley: '14.5 kg', eqSheep: '1.00', desc: 'The fundamental Roman pound (libra) of cast bronze bullion.' },
  { id: 'decussis', name: 'Decussis', mass: '3,240.0 g', eqBarley: '145.0 kg', eqSheep: '10.00', desc: 'Heavy cast currency bar equal to ten whole Asses or one mature Pecus.' }
]

export default function Pecunia() {
  const [selectedUnit, setSelectedUnit] = useState(UNITS[2])

  return (
    <main className="th-oxn-pecunia">
      <div className="oxn-pec-container">
        <header>
          <div className="oxn-pec-eyebrow">
            <span>Metrology of the Horn</span>
            <div className="oxn-pec-eyebrow-line" aria-hidden="true" />
            <span>Central Italy · c. 600 BCE</span>
          </div>
          <h1 className="oxn-pec-title">PECUNIA</h1>
          <p className="oxn-pec-subtitle">
            Long before the minting of round coin, wealth in ancient Latium was reckoned in living cattle (<span lang="la">pecus</span>). When trade demanded a durable proxy, archaic foundries cast raw bronze into heavy quadrangular bars stamped with the figure of the walking ox — the birth of <span lang="la">pecunia</span>.
          </p>
        </header>

        <section className="oxn-pec-hero-grid" aria-label="Aes Signatum Display">
          <div className="oxn-pec-ingot-stage">
            <svg
              className="oxn-pec-ingot-svg"
              viewBox="0 0 600 380"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-label="Archaic bronze ingot cast with the relief figure of a walking ox"
            >
              <defs>
                <linearGradient id="oxn-pec-grad-ingot" x1="0" y1="0" x2="600" y2="380" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#2A433A" />
                  <stop offset="35%" stopColor="#1C2723" />
                  <stop offset="70%" stopColor="#312217" />
                  <stop offset="100%" stopColor="#18201D" />
                </linearGradient>
                <linearGradient id="oxn-pec-grad-ox" x1="120" y1="90" x2="480" y2="290" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#E28445" />
                  <stop offset="50%" stopColor="#B35E28" />
                  <stop offset="100%" stopColor="#6CC4AE" />
                </linearGradient>
                <linearGradient id="oxn-pec-grad-rim" x1="0" y1="0" x2="600" y2="380" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#6CC4AE" stopOpacity="0.8" />
                  <stop offset="50%" stopColor="#D97736" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="#386F62" stopOpacity="0.9" />
                </linearGradient>
                <pattern id="oxn-pec-pat-grid" width="20" height="20" patternUnits="userSpaceOnUse">
                  <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#6CC4AE" strokeWidth="0.5" strokeOpacity="0.12" />
                </pattern>
              </defs>

              <rect x="25" y="25" width="550" height="330" rx="8" fill="url(#oxn-pec-grad-ingot)" stroke="url(#oxn-pec-grad-rim)" strokeWidth="3" />
              <rect x="35" y="35" width="530" height="310" rx="4" fill="url(#oxn-pec-pat-grid)" />
              <rect x="42" y="42" width="516" height="296" rx="3" fill="none" stroke="#6CC4AE" strokeWidth="1" strokeDasharray="6 4" strokeOpacity="0.35" />

              <g opacity="0.3" stroke="#D97736" strokeWidth="1.5">
                <line x1="50" y1="50" x2="70" y2="70" />
                <line x1="530" y1="50" x2="550" y2="70" />
                <line x1="50" y1="330" x2="70" y2="310" />
                <line x1="530" y1="330" x2="550" y2="310" />
              </g>

              <g id="oxn-pec-ox-figure">
                <path
                  d="M 170 230 C 160 215 155 185 165 160 C 175 135 200 120 235 125 C 265 110 305 110 350 125 C 385 135 410 160 425 180 C 435 195 440 225 435 240 C 430 250 415 255 395 248 C 380 242 370 232 360 220 C 340 228 310 230 280 228 C 255 226 235 235 210 245 C 190 252 178 245 170 230 Z"
                  fill="url(#oxn-pec-grad-ox)"
                  opacity="0.85"
                />
                
                <path
                  d="M 165 160 C 150 150 135 145 120 148 C 105 152 98 165 102 180 C 106 195 120 205 140 205 C 155 205 165 195 175 180 Z"
                  fill="url(#oxn-pec-grad-ox)"
                />

                <path
                  d="M 125 150 C 118 125 108 105 92 90 C 88 86 80 88 82 96 C 88 112 96 130 106 148"
                  stroke="#E28445"
                  strokeWidth="5"
                  strokeLinecap="round"
                  fill="none"
                />
                <path
                  d="M 142 148 C 145 120 152 98 168 82 C 172 78 178 82 175 90 C 168 108 160 128 152 146"
                  stroke="#E28445"
                  strokeWidth="4.5"
                  strokeLinecap="round"
                  fill="none"
                />

                <path
                  d="M 135 200 C 130 215 128 235 130 250 C 132 260 138 268 145 268 C 152 268 155 258 158 245 C 165 220 170 200 172 185"
                  fill="#B35E28"
                />
                <path
                  d="M 180 230 C 185 248 190 270 192 285 C 194 295 202 298 208 295 C 214 292 216 280 215 265 C 212 245 205 225 198 210"
                  fill="#D97736"
                />

                <path
                  d="M 370 230 C 375 250 380 272 385 288 C 388 296 396 298 402 294 C 408 290 408 278 405 260 C 400 240 395 220 388 205"
                  fill="#D97736"
                />
                <path
                  d="M 415 235 C 425 252 432 270 440 282 C 445 288 452 288 456 282 C 460 275 458 262 450 248 C 440 230 432 215 425 200"
                  fill="#B35E28"
                />

                <path
                  d="M 430 185 C 450 190 470 205 480 228 C 485 240 482 250 478 262 C 476 268 470 268 468 262 C 465 250 460 238 452 230"
                  stroke="#E28445"
                  strokeWidth="3"
                  strokeLinecap="round"
                  fill="none"
                />

                <circle cx="118" cy="168" r="3.5" fill="#111715" />

                <g stroke="#6CC4AE" strokeWidth="1.5" strokeOpacity="0.75" strokeLinecap="round">
                  <line x1="240" y1="150" x2="270" y2="175" />
                  <line x1="250" y1="145" x2="280" y2="170" />
                  <line x1="260" y1="140" x2="290" y2="165" />
                  <line x1="330" y1="150" x2="360" y2="180" />
                  <line x1="340" y1="145" x2="370" y2="175" />
                </g>
              </g>

              <g fill="#6CC4AE" opacity="0.6" fontFamily="Space Mono" fontSize="12" letterSpacing="3">
                <text x="70" y="325">AES SIGNATUM · TARQUINIA MINT</text>
                <text x="440" y="70" textAnchor="end">PESO: I AS GRAVE</text>
              </g>
            </svg>
          </div>

          <div className="oxn-pec-spec-panel">
            <div className="oxn-pec-spec-badge">
              <span>INGOT CLASSIFICATION: AES SIGNATUM</span>
            </div>
            <p className="oxn-pec-spec-desc">
              Cast in two-piece sand matrices from a binary copper-tin alloy. The raised bovine relief guaranteed the bullion weight to archaic merchants throughout Etruria, Latium, and Umbria without requiring an immediate scale at market gates.
            </p>
            <div className="oxn-pec-metrics">
              <div className="oxn-pec-metric-item">
                <span className="oxn-pec-metric-label">Metallurgy</span>
                <span className="oxn-pec-metric-value">Cu 88% / Sn 10%</span>
              </div>
              <div className="oxn-pec-metric-item">
                <span className="oxn-pec-metric-label">Standard Bar Mass</span>
                <span className="oxn-pec-metric-value">1,620 g (5 Asses)</span>
              </div>
              <div className="oxn-pec-metric-item">
                <span className="oxn-pec-metric-label">Foundry Technique</span>
                <span className="oxn-pec-metric-value">Open Sand Cast</span>
              </div>
              <div className="oxn-pec-metric-item">
                <span className="oxn-pec-metric-label">Archaic Parity</span>
                <span className="oxn-pec-metric-value">1 Ox = 100 Asses</span>
              </div>
            </div>
          </div>
        </section>

        <section className="oxn-pec-scale-section" aria-label="Interactive Ingot Metrology">
          <h2 className="oxn-pec-section-heading">Archaic Weight & Exchange Ledger</h2>
          <p className="oxn-pec-section-sub">Select an archaic Roman bronze denomination to inspect its mass and barter equivalency.</p>

          <div className="oxn-pec-unit-toggles" role="tablist" aria-label="Bronze Denomination Selector">
            {UNITS.map((unit) => (
              <button
                key={unit.id}
                role="tab"
                aria-selected={selectedUnit.id === unit.id}
                className={`oxn-pec-unit-btn ${selectedUnit.id === unit.id ? 'active' : ''}`}
                onClick={() => setSelectedUnit(unit)}
              >
                <span className="oxn-pec-unit-name">{unit.name}</span>
                <span className="oxn-pec-unit-mass">{unit.mass}</span>
              </button>
            ))}
          </div>

          <motion.div
            key={selectedUnit.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
            className="oxn-pec-scale-visual"
          >
            <div className="oxn-pec-beam">
              <div className="oxn-pec-pan">
                <div className="oxn-pec-pan-label">Cast Bronze Bullion</div>
                <div className="oxn-pec-pan-value">{selectedUnit.name} ({selectedUnit.mass})</div>
              </div>
              <div className="oxn-pec-balance-pivot" aria-label="Scale Pivot">⚖</div>
              <div className="oxn-pec-pan">
                <div className="oxn-pec-pan-label">Pastoral Equivalent</div>
                <div className="oxn-pec-pan-value">{selectedUnit.eqSheep} Sheep Value</div>
              </div>
            </div>

            <div className="oxn-pec-equivalence-grid">
              <div className="oxn-pec-eq-card">
                <div className="oxn-pec-eq-title">GRAIN COMMODITY</div>
                <div className="oxn-pec-eq-val">{selectedUnit.eqBarley}</div>
                <p className="oxn-pec-eq-desc">Threshed emmer wheat or two-row barley standard.</p>
              </div>
              <div className="oxn-pec-eq-card">
                <div className="oxn-pec-eq-title">LIVESTOCK PROPORTION</div>
                <div className="oxn-pec-eq-val">{selectedUnit.eqSheep} Head</div>
                <p className="oxn-pec-eq-desc">Equivalent ratio of adult horned ovine livestock.</p>
              </div>
              <div className="oxn-pec-eq-card">
                <div className="oxn-pec-eq-title">HISTORICAL REGISTER</div>
                <div className="oxn-pec-eq-val">{selectedUnit.name}</div>
                <p className="oxn-pec-eq-desc">{selectedUnit.desc}</p>
              </div>
            </div>
          </motion.div>
        </section>

        <section className="oxn-pec-history-grid" aria-label="Historical Context">
          <article className="oxn-pec-hist-card">
            <div className="oxn-pec-hist-num">I · ETYMOLOGY</div>
            <h3 className="oxn-pec-hist-title">Pecus to Pecunia</h3>
            <p className="oxn-pec-hist-p">
              The Latin vocabulary of finance remains permanently stamped with cattle husbandry. <span lang="la">Capitale</span> stems from <span lang="la">caput</span> (head of cattle), while <span lang="la">peculium</span> originally denoted the small private herd granted to an enslaved herdsman or son.
            </p>
          </article>
          <article className="oxn-pec-hist-card">
            <div className="oxn-pec-hist-num">II · METALLURGY</div>
            <h3 className="oxn-pec-hist-title">The Sand Mold Casting</h3>
            <p className="oxn-pec-hist-p">
              Bronze smelters along the Tiber poured unrefined copper and Cornish tin into damp river sand impressions. The iconic walking ox motif was incised directly into the mold face with an iron stylus, producing raised, rounded relief contours.
            </p>
          </article>
          <article className="oxn-pec-hist-card">
            <div className="oxn-pec-hist-num">III · COMMERCE</div>
            <h3 className="oxn-pec-hist-title">The Forum Boarium</h3>
            <p className="oxn-pec-hist-p">
              Rome's oldest commercial forum, situated on the bend of the Tiber near the Pons Sublicius, operated as the central cattle market and bullion exchange where drovers from the Sabine hills traded horned herds for stamped bronze bars.
            </p>
          </article>
        </section>

        <footer className="oxn-pec-signature">
          <div className="oxn-pec-stamp">
            <svg className="oxn-pec-stamp-icon" viewBox="0 0 32 32" fill="none" aria-hidden="true">
              <rect x="2" y="2" width="28" height="28" rx="2" stroke="#D97736" strokeWidth="2" />
              <path d="M 8 16 L 16 8 L 24 16 L 16 24 Z" stroke="#6CC4AE" strokeWidth="1.5" />
              <circle cx="16" cy="16" r="3" fill="#D97736" />
            </svg>
            <span className="oxn-pec-stamp-text">SET VI · DESIGNED BY GEMINI 3.7 FLASH</span>
          </div>
          <div className="oxn-pec-sig-colophon">
            <span>OFFICINA METALLICA · BRONZE INGOT SERIES · 01 OF 05</span>
          </div>
        </footer>
      </div>
    </main>
  )
}
