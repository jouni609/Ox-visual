import { useState } from 'react'
import { motion } from 'framer-motion'
import './nomisma.css'

const ESTATES = [
  { id: 'chorion', name: 'Free Village Commune (Chorion)', oxenTeams: 6, modiiGrain: 3600, solidiTax: 24, desc: 'Peasant smallholders protected under the Nomos Georgikos with communal pasture rights.' },
  { id: 'proasteion', name: 'Monastic Estate (Proasteion)', oxenTeams: 24, modiiGrain: 14400, solidiTax: 96, desc: 'Mount Athos or Bithynian monastic foundation endowed with tax immunity charter.' },
  { id: 'magnate', name: 'Aristocratic Dynatoi Fief', oxenTeams: 80, modiiGrain: 48000, solidiTax: 320, desc: 'Anatolian military magnate sustaining heavy cavalry troops on grain surpluses.' }
]

export default function Nomisma() {
  const [lightAngle, setLightAngle] = useState(45)
  const [selectedEstate, setSelectedEstate] = useState(ESTATES[0])

  const rad = (lightAngle * Math.PI) / 180
  const lightX = 250 + Math.cos(rad) * 200
  const lightY = 250 - Math.sin(rad) * 200

  return (
    <main className="th-oxn-nomisma">
      <div className="oxn-nom-container">
        <header>
          <div className="oxn-nom-eyebrow">
            <span>Byzantine Imperial Chrysography</span>
            <div className="oxn-nom-eyebrow-line" aria-hidden="true" />
            <span>Constantinople · c. 920 CE</span>
          </div>
          <h1 className="oxn-nom-title">NOMISMA</h1>
          <p className="oxn-nom-subtitle">
            The gold <span lang="el">νόμισμα</span> (solidus) was the undisputed dollar of the medieval world, unvarying in weight for seven centuries. At its imperial agricultural core was the sacred yoke (<span lang="el">ζυγός</span>) — twin oxen bound in labor to feed the capital and anchor the Roman fiscal ledger.
          </p>
        </header>

        <section className="oxn-nom-hero-stage" aria-label="Imperial Gold Nomisma Display">
          <div className="oxn-nom-gold-disc-wrapper">
            <svg
              className="oxn-nom-coin-svg"
              viewBox="0 0 500 500"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-label="Byzantine gold nomisma featuring a yoked pair of haloed oxen turning the imperial threshing floor"
            >
              <defs>
                <radialGradient id="oxn-nom-grad-gold" cx={`${(lightX / 500) * 100}%`} cy={`${(lightY / 500) * 100}%`} r="65%">
                  <stop offset="0%" stopColor="#FFFBEB" />
                  <stop offset="25%" stopColor="#FDE68A" />
                  <stop offset="65%" stopColor="#F59E0B" />
                  <stop offset="100%" stopColor="#B45309" />
                </radialGradient>
                <linearGradient id="oxn-nom-grad-halo" x1="0" y1="0" x2="0" y2="100" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#FFFBEB" />
                  <stop offset="100%" stopColor="#D97706" />
                </linearGradient>
                <linearGradient id="oxn-nom-grad-purple" x1="0" y1="0" x2="500" y2="500" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#701A75" />
                  <stop offset="100%" stopColor="#3B0726" />
                </linearGradient>
              </defs>

              <circle cx="250" cy="250" r="235" fill="url(#oxn-nom-grad-gold)" stroke="#FDE68A" strokeWidth="4" />

              <g stroke="#92400E" strokeWidth="2.5" fill="#FDE68A">
                {Array.from({ length: 48 }).map((_, i) => {
                  const angle = (i * 360) / 48
                  const aRad = (angle * Math.PI) / 180
                  const cx = 250 + Math.cos(aRad) * 220
                  const cy = 250 + Math.sin(aRad) * 220
                  return <circle key={i} cx={cx} cy={cy} r="3" />
                })}
              </g>

              <circle cx="250" cy="250" r="205" fill="none" stroke="#78350F" strokeWidth="2" strokeDasharray="3 3" />
              <circle cx="250" cy="250" r="200" fill="url(#oxn-nom-grad-purple)" opacity="0.35" />

              <g id="oxn-nom-halos" transform="translate(0, 0)">
                <circle cx="190" cy="155" r="42" fill="url(#oxn-nom-grad-halo)" opacity="0.45" stroke="#FFFBEB" strokeWidth="2" />
                <circle cx="310" cy="155" r="42" fill="url(#oxn-nom-grad-halo)" opacity="0.45" stroke="#FFFBEB" strokeWidth="2" />
                
                <g stroke="#FDE68A" strokeWidth="1.5" opacity="0.75">
                  <line x1="190" y1="110" x2="190" y2="95" />
                  <line x1="155" y1="125" x2="145" y2="115" />
                  <line x1="225" y1="125" x2="235" y2="115" />
                  
                  <line x1="310" y1="110" x2="310" y2="95" />
                  <line x1="275" y1="125" x2="265" y2="115" />
                  <line x1="345" y1="125" x2="355" y2="115" />
                </g>
              </g>

              <g id="oxn-nom-yoke" stroke="#FDE68A" strokeWidth="6" strokeLinecap="round" fill="none">
                <path d="M 140 185 C 160 170 220 170 250 185 C 280 170 340 170 360 185" />
                <path d="M 160 180 L 160 225 M 220 180 L 220 225 M 280 180 L 280 225 M 340 180 L 340 225" strokeWidth="3" />
                <circle cx="250" cy="185" r="8" fill="#DC2626" stroke="#FFFBEB" strokeWidth="2" />
              </g>

              <g id="oxn-nom-oxen-pair">
                <path
                  d="M 190 170 C 175 160 160 165 145 180 C 135 195 138 215 148 230 C 158 245 178 250 195 242 C 210 235 218 215 215 195 C 212 180 202 172 190 170 Z"
                  fill="#78350F"
                  stroke="#FDE68A"
                  strokeWidth="2"
                />

                <path
                  d="M 160 165 C 150 135 135 110 115 95 C 110 90 102 95 105 102 C 115 125 128 150 142 170"
                  stroke="#FFFBEB"
                  strokeWidth="4.5"
                  strokeLinecap="round"
                  fill="none"
                />
                <path
                  d="M 180 160 C 185 130 195 105 215 90 C 220 85 228 90 224 98 C 215 120 205 145 195 165"
                  stroke="#FFFBEB"
                  strokeWidth="4.5"
                  strokeLinecap="round"
                  fill="none"
                />

                <path
                  d="M 310 170 C 295 160 280 165 265 180 C 255 195 258 215 268 230 C 278 245 298 250 315 242 C 330 235 338 215 335 195 C 332 180 322 172 310 170 Z"
                  fill="#78350F"
                  stroke="#FDE68A"
                  strokeWidth="2"
                />

                <path
                  d="M 280 165 C 270 135 255 110 235 95 C 230 90 222 95 225 102 C 235 125 248 150 262 170"
                  stroke="#FFFBEB"
                  strokeWidth="4.5"
                  strokeLinecap="round"
                  fill="none"
                />
                <path
                  d="M 300 160 C 305 130 315 105 335 90 C 340 85 348 90 344 98 C 335 120 325 145 315 165"
                  stroke="#FFFBEB"
                  strokeWidth="4.5"
                  strokeLinecap="round"
                  fill="none"
                />

                <path
                  d="M 130 235 C 115 255 110 290 120 330 C 125 350 145 365 175 360 C 205 355 220 340 235 315 C 245 290 240 260 225 240 Z"
                  fill="#92400E"
                  stroke="#FDE68A"
                  strokeWidth="2"
                />
                <path
                  d="M 265 240 C 250 260 245 290 255 315 C 270 340 285 355 315 360 C 345 365 365 350 370 330 C 380 290 375 255 360 235 Z"
                  fill="#92400E"
                  stroke="#FDE68A"
                  strokeWidth="2"
                />

                <path d="M 145 345 L 140 395 M 195 345 L 200 395 M 295 345 L 290 395 M 345 345 L 350 395" stroke="#FDE68A" strokeWidth="4" strokeLinecap="round" />

                <circle cx="162" cy="195" r="3.5" fill="#FFFBEB" />
                <circle cx="282" cy="195" r="3.5" fill="#FFFBEB" />
              </g>

              <g fill="#FDE68A" fontFamily="Cinzel" fontWeight="700" fontSize="14" letterSpacing="3">
                <text x="250" y="70" textAnchor="middle">BASILEUS · ROMAION</text>
                <text x="250" y="440" textAnchor="middle">ZYGOS · IUSTITIA</text>
              </g>

              <path d="M 250 82 L 250 102 M 240 92 L 260 92" stroke="#FDE68A" strokeWidth="2.5" />
            </svg>
          </div>

          <div className="oxn-nom-gold-controls">
            <span className="oxn-nom-slider-label">LIGHT REFLECTION ANGLE ({lightAngle}°)</span>
            <input
              type="range"
              min="0"
              max="360"
              value={lightAngle}
              onChange={(e) => setLightAngle(Number(e.target.value))}
              className="oxn-nom-range-input"
              aria-label="Adjust specular gold light reflection angle"
            />
          </div>

          <div className="oxn-nom-meta-row">
            <div className="oxn-nom-meta-card">
              <span className="oxn-nom-meta-lbl">Carat Standard</span>
              <span className="oxn-nom-meta-v">24 Carats Pure</span>
            </div>
            <div className="oxn-nom-meta-card">
              <span className="oxn-nom-meta-lbl">Solidus Weight</span>
              <span className="oxn-nom-meta-v">4.55 g Fine Au</span>
            </div>
            <div className="oxn-nom-meta-card">
              <span className="oxn-nom-meta-lbl">Imperial Ratio</span>
              <span className="oxn-nom-meta-v">1 lb = 72 Solidi</span>
            </div>
            <div className="oxn-nom-meta-card">
              <span className="oxn-nom-meta-lbl">Mint Authority</span>
              <span className="oxn-nom-meta-v">Constantinople</span>
            </div>
          </div>
        </section>

        <section className="oxn-nom-tax-section" aria-label="Imperial Grain & Oxen Tax Ledger">
          <h2 className="oxn-nom-tax-title">The Imperial Annona & Agrarian Ledger</h2>
          <p className="oxn-nom-tax-sub">
            Select an imperial agrarian estate tier to calculate its grain quota, gold tribute in nomismata, and required yoked draft teams.
          </p>

          <div className="oxn-nom-tax-toggles" role="tablist" aria-label="Estate Tier Selector">
            {ESTATES.map((est) => (
              <button
                key={est.id}
                role="tab"
                aria-selected={selectedEstate.id === est.id}
                className={`oxn-nom-tax-btn ${selectedEstate.id === est.id ? 'active' : ''}`}
                onClick={() => setSelectedEstate(est)}
              >
                {est.name}
              </button>
            ))}
          </div>

          <motion.div
            key={selectedEstate.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
            className="oxn-nom-calc-grid"
          >
            <div className="oxn-nom-tax-card">
              <span className="oxn-nom-tcard-title">YOKED TEAMS (ZYGA)</span>
              <span className="oxn-nom-tcard-val">{selectedEstate.oxenTeams} Pairs</span>
              <p className="oxn-nom-tcard-desc">Working draft pairs turning threshing floors and plows.</p>
            </div>
            <div className="oxn-nom-tax-card">
              <span className="oxn-nom-tcard-title">ANNUAL GRAIN HARVEST</span>
              <span className="oxn-nom-tcard-val">{selectedEstate.modiiGrain.toLocaleString()} Modii</span>
              <p className="oxn-nom-tcard-desc">Durum wheat volume delivered to imperial horrea silos.</p>
            </div>
            <div className="oxn-nom-tax-card">
              <span className="oxn-nom-tcard-title">IMPERIAL GOLD TAX</span>
              <span className="oxn-nom-tcard-val">{selectedEstate.solidiTax} Nomismata</span>
              <p className="oxn-nom-tcard-desc">Direct land tax assessment in pure 24-carat solidi.</p>
            </div>
            <div className="oxn-nom-tax-card">
              <span className="oxn-nom-tcard-title">ESTATE JURISDICTION</span>
              <span className="oxn-nom-tcard-val">Imperial Theme</span>
              <p className="oxn-nom-tcard-desc">{selectedEstate.desc}</p>
            </div>
          </motion.div>
        </section>

        <section className="oxn-nom-history-grid" aria-label="Byzantine Legal History">
          <article className="oxn-nom-hist-card">
            <div className="oxn-nom-hist-tag">I · JURISPRUDENCE</div>
            <h3 className="oxn-nom-hist-h3">Nomos Georgikos</h3>
            <p className="oxn-nom-hist-p">
              The 8th-century Byzantine Farmer’s Law enacted severe penal sanctions against anyone who maimed, stole, or over-worked a neighbor’s plow-ox. An ox was protected by law as the indispensable foundation of civic sustenance and state survival.
            </p>
          </article>
          <article className="oxn-nom-hist-card">
            <div className="oxn-nom-hist-tag">II · METROLOGY</div>
            <h3 className="oxn-nom-hist-h3">The Sacred Zygos</h3>
            <p className="oxn-nom-hist-p">
              The Greek word <span lang="el">ζυγός</span> (zygos) denoted both the wooden yoke binding two draft oxen and the balance beam of justice. Fair measurement in imperial markets was seen as a divine equilibrium derived from the shared pull of yoked cattle.
            </p>
          </article>
          <article className="oxn-nom-hist-card">
            <div className="oxn-nom-hist-tag">III · DIPLOMACY</div>
            <h3 className="oxn-nom-hist-h3">The Chrysobull</h3>
            <p className="oxn-nom-hist-p">
              Imperial charters were authenticated with heavy golden seals called chrysobulls. In times of treaty and alliance, Byzantine emperors paid tributes to foreign princes in pure nomismata, known across Western Europe as the infallible <span lang="la">bezant</span>.
            </p>
          </article>
        </section>

        <footer className="oxn-nom-signature">
          <div className="oxn-nom-bulla-stamp">
            <svg className="oxn-nom-bulla-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <circle cx="12" cy="12" r="10" stroke="#FDE68A" strokeWidth="2" />
              <path d="M 12 4 L 12 20 M 4 12 L 20 12" stroke="#F59E0B" strokeWidth="1.5" />
              <circle cx="12" cy="12" r="4" fill="#DC2626" />
            </svg>
            <span className="oxn-nom-bulla-text">SET VI · DESIGNED BY GEMINI 3.7 FLASH</span>
          </div>
          <div className="oxn-nom-colophon">
            <span>OFFICINA CHRYSOGRAPHICA · NOMISMA SERIES · 04 OF 05</span>
          </div>
        </footer>
      </div>
    </main>
  )
}
