import { useState } from 'react'
import { motion } from 'framer-motion'
import './pasupati.css'

const GLYPHS = [
  { id: 'g1', symbol: '𐍈', title: 'PASTORAL GUILD', desc: 'The horned jar ideogram denoting verified cattle owners and breeders of the upper Indus basin.' },
  { id: 'g2', symbol: '𐍉', title: 'GRAIN MEASURE', desc: 'Standardized double-comb mark representing 16 volumetric units of barley or sesame grain.' },
  { id: 'g3', symbol: '𐍊', title: 'PORT OF LOTHAL', desc: 'The boat-and-oar merchant cipher verifying ocean-going maritime cargo for the Gulf of Oman.' },
  { id: 'g4', symbol: '𐍋', title: 'STANDARD CHERT WEIGHT', desc: 'The cubic metrological stamp certifying balance against the 13.7g base chert weight system.' },
  { id: 'g5', symbol: '𐍌', title: 'ZEBU ROYAL LINEAGE', desc: 'The royal crescent-and-shield seal used by the high magistrates of Mohenjo-Daro.' }
]

export default function Pasupati() {
  const [sealMode, setSealMode] = useState('steatite')
  const [activeGlyph, setActiveGlyph] = useState(GLYPHS[0])

  const isClay = sealMode === 'clay'

  return (
    <main className="th-oxn-pasupati">
      <div className="oxn-pas-container">
        <header>
          <div className="oxn-pas-eyebrow">
            <span>Bronze Age Glyptic Standard</span>
            <div className="oxn-pas-eyebrow-line" aria-hidden="true" />
            <span>Mohenjo-Daro & Harappa · c. 2500 BCE</span>
          </div>
          <h1 className="oxn-pas-title">PASUPATI</h1>
          <p className="oxn-pas-subtitle">
            Centuries before coined metal, the great humped Zebu bull (<span lang="la">Bos indicus</span>) was the living pillar of Indus prosperity. Carved in intaglio on soapstone seals and pressed into moist clay tags across bales of cotton and grain, its majestic silhouette commanded commercial authority from Meluhha to Mesopotamia.
          </p>
        </header>

        <section className="oxn-pas-seal-stage-card" aria-label="Indus Steatite Seal Stage">
          <div className="oxn-pas-seal-wrapper">
            <div className={`oxn-pas-seal-svg-box ${sealMode}`}>
              <svg
                className="oxn-pas-seal-svg"
                viewBox="0 0 500 500"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-label={`Indus ${sealMode} seal portraying the sacred Zebu bull with ritual brazier and pictographs`}
              >
                <defs>
                  <filter id="oxn-pas-shadow-intaglio" x="-10%" y="-10%" width="120%" height="120%">
                    <feDropShadow dx="2" dy="3" stdDeviation="3" floodColor="#000" floodOpacity={isClay ? "0.2" : "0.5"} />
                  </filter>
                  <linearGradient id="oxn-pas-grad-zebu" x1="100" y1="100" x2="400" y2="400" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor={isClay ? "#FAF0E6" : "#2B211B"} />
                    <stop offset="50%" stopColor={isClay ? "#EAD7C5" : "#3D3027"} />
                    <stop offset="100%" stopColor={isClay ? "#C9A78E" : "#1A130E"} />
                  </linearGradient>
                  <linearGradient id="oxn-pas-grad-brazier" x1="80" y1="200" x2="160" y2="420" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor={isClay ? "#FFE3CC" : "#E58A2E"} />
                    <stop offset="100%" stopColor={isClay ? "#C85632" : "#59220D"} />
                  </linearGradient>
                </defs>

                <rect x="20" y="20" width="460" height="460" rx="16" fill="none" stroke={isClay ? "#8C361E" : "#B5A48E"} strokeWidth="3" opacity="0.6" />
                <rect x="30" y="30" width="440" height="440" rx="12" fill="none" stroke={isClay ? "#FFA07A" : "#8C7B68"} strokeWidth="1" strokeDasharray="6 4" opacity="0.4" />

                <g id="oxn-pas-script-row" transform="translate(60, 50)">
                  <path d="M 20 15 L 20 55 M 10 25 L 30 25 M 10 45 L 30 45" stroke={isClay ? "#FAF0E6" : "#2B211B"} strokeWidth="3" strokeLinecap="round" />
                  <path d="M 80 15 C 65 25 65 45 80 55 C 95 45 95 25 80 15 Z M 80 20 L 80 50" stroke={isClay ? "#FAF0E6" : "#2B211B"} strokeWidth="2.5" fill="none" />
                  <path d="M 140 15 L 160 55 L 180 15 M 160 30 L 160 55" stroke={isClay ? "#FAF0E6" : "#2B211B"} strokeWidth="2.5" strokeLinecap="round" fill="none" />
                  <circle cx="230" cy="35" r="16" stroke={isClay ? "#FAF0E6" : "#2B211B"} strokeWidth="2.5" fill="none" />
                  <path d="M 220 35 L 240 35 M 230 25 L 230 45" stroke={isClay ? "#FAF0E6" : "#2B211B"} strokeWidth="2" />
                  <path d="M 290 15 L 290 55 M 310 15 L 310 55 M 280 35 L 320 35" stroke={isClay ? "#FAF0E6" : "#2B211B"} strokeWidth="2.5" strokeLinecap="round" />
                  <path d="M 355 20 C 370 20 375 35 375 55 M 355 35 L 375 35" stroke={isClay ? "#FAF0E6" : "#2B211B"} strokeWidth="2.5" strokeLinecap="round" fill="none" />
                </g>

                <g id="oxn-pas-brazier" transform="translate(65, 230)">
                  <path d="M 20 180 L 80 180 M 50 180 L 50 80 M 15 80 L 85 80" stroke="url(#oxn-pas-grad-brazier)" strokeWidth="4" strokeLinecap="round" />
                  <ellipse cx="50" cy="65" rx="35" ry="14" fill="url(#oxn-pas-grad-brazier)" />
                  <ellipse cx="50" cy="35" rx="28" ry="12" fill="url(#oxn-pas-grad-brazier)" />
                  <path d="M 50 20 C 45 10 55 0 50 -10 C 45 -20 55 -30 50 -40" stroke="#E58A2E" strokeWidth="2.5" strokeLinecap="round" fill="none" opacity="0.85" />
                </g>

                <g id="oxn-pas-zebu-figure" filter="url(#oxn-pas-shadow-intaglio)" transform="translate(40, 30)">
                  <path
                    d="M 250 150 C 240 120 225 110 205 125 C 190 140 195 170 200 190 C 185 190 170 195 155 205 C 140 215 130 230 135 245 C 140 260 155 268 175 265 C 185 285 195 315 200 330 C 205 320 212 285 215 260 C 235 255 270 250 310 255 C 345 260 370 275 385 295 C 395 308 400 325 395 340 C 390 350 375 352 360 348 C 345 340 340 325 330 310 C 305 320 270 322 240 320 C 215 325 205 340 190 350 Z"
                    fill="url(#oxn-pas-grad-zebu)"
                  />

                  <path
                    d="M 135 205 C 120 185 105 180 85 190 C 70 200 68 220 75 240 C 82 258 100 270 120 268 C 135 265 145 250 152 235 Z"
                    fill="url(#oxn-pas-grad-zebu)"
                  />

                  <path
                    d="M 95 185 C 80 145 65 110 40 85 C 35 80 28 85 30 92 C 40 120 55 155 75 182"
                    stroke={isClay ? "#FAF0E6" : "#2B211B"}
                    strokeWidth="7"
                    strokeLinecap="round"
                    fill="none"
                  />
                  <path
                    d="M 115 180 C 120 140 130 105 155 80 C 160 75 168 80 164 88 C 152 115 140 150 130 178"
                    stroke={isClay ? "#FAF0E6" : "#2B211B"}
                    strokeWidth="6"
                    strokeLinecap="round"
                    fill="none"
                  />

                  <path
                    d="M 105 265 C 100 295 105 330 115 355 C 122 370 135 375 145 365 C 150 350 148 320 145 290 C 155 285 165 275 170 265"
                    fill="url(#oxn-pas-grad-zebu)"
                  />

                  <path
                    d="M 170 330 C 175 355 180 385 185 410 C 188 420 196 422 202 418 C 208 412 208 398 205 375 C 200 345 195 320 188 300"
                    fill="url(#oxn-pas-grad-zebu)"
                  />
                  <path
                    d="M 140 335 C 142 355 145 385 148 405 C 150 415 158 418 164 412 C 170 405 168 390 164 370 C 160 345 155 325 150 310"
                    fill={isClay ? "#C9A78E" : "#1A130E"}
                  />

                  <path
                    d="M 330 320 C 335 350 342 385 348 410 C 352 420 360 422 366 415 C 372 408 370 392 365 368 C 360 338 352 315 345 295"
                    fill="url(#oxn-pas-grad-zebu)"
                  />
                  <path
                    d="M 375 315 C 385 340 395 370 405 395 C 410 405 418 405 422 398 C 426 388 422 372 412 350 C 402 325 392 305 385 285"
                    fill={isClay ? "#C9A78E" : "#1A130E"}
                  />

                  <path
                    d="M 390 280 C 415 290 435 315 442 345 C 445 360 440 375 435 388 C 430 395 422 392 420 382 C 418 365 412 345 402 330"
                    stroke={isClay ? "#FAF0E6" : "#2B211B"}
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    fill="none"
                  />

                  <circle cx="92" cy="210" r="4.5" fill={isClay ? "#7A2B13" : "#F5EFE6"} />
                </g>
              </svg>
            </div>

            <div className="oxn-pas-mode-switcher" role="tablist" aria-label="Seal Material View">
              <button
                role="tab"
                aria-selected={sealMode === 'steatite'}
                className={`oxn-pas-mode-btn ${sealMode === 'steatite' ? 'active' : ''}`}
                onClick={() => setSealMode('steatite')}
              >
                STEATITE INTAGLIO (DIE)
              </button>
              <button
                role="tab"
                aria-selected={sealMode === 'clay'}
                className={`oxn-pas-mode-btn ${sealMode === 'clay' ? 'active' : ''}`}
                onClick={() => setSealMode('clay')}
              >
                TERRACOTTA SEALING (PRINT)
              </button>
            </div>
          </div>

          <div className="oxn-pas-info-panel">
            <div className="oxn-pas-badge">
              <span>HARAPPAN SEAL CLASSIFICATION: BOS INDICUS</span>
            </div>
            <p className="oxn-pas-info-p">
              Carved by master lapidaries using micro-cherts on talc stone (steatite), treated with an alkaline slurry, and baked in kilns up to 1,000°C to achieve a lustrous ivory-white glazed crust. Each seal identified cargo ownership, religious sanctity, and civic weight authority.
            </p>
            <div className="oxn-pas-specs-grid">
              <div className="oxn-pas-spec-cell">
                <span className="oxn-pas-spec-lbl">Material Matrix</span>
                <span className="oxn-pas-spec-val">Glazed Steatite</span>
              </div>
              <div className="oxn-pas-spec-cell">
                <span className="oxn-pas-spec-lbl">Standard Dimensions</span>
                <span className="oxn-pas-spec-val">38 × 38 × 10 mm</span>
              </div>
              <div className="oxn-pas-spec-cell">
                <span className="oxn-pas-spec-lbl">Trade Destination</span>
                <span className="oxn-pas-spec-val">Ur & Dilmun (Gulf)</span>
              </div>
              <div className="oxn-pas-spec-cell">
                <span className="oxn-pas-spec-lbl">Chert Weight Ratio</span>
                <span className="oxn-pas-spec-val">1 : 2 : 4 : 8 : 16 : 32</span>
              </div>
            </div>
          </div>
        </section>

        <section className="oxn-pas-glyph-section" aria-label="Harappan Script Decipherment">
          <h2 className="oxn-pas-glyph-title">Indus Merchant Cipher & Metrological Lexicon</h2>
          <p className="oxn-pas-glyph-sub">Click a trade glyph to explore its numismatic and civic function in Bronze Age exchange.</p>

          <div className="oxn-pas-glyph-bar" role="tablist" aria-label="Harappan Glyphs">
            {GLYPHS.map((g) => (
              <button
                key={g.id}
                role="tab"
                aria-selected={activeGlyph.id === g.id}
                className={`oxn-pas-glyph-btn ${activeGlyph.id === g.id ? 'active' : ''}`}
                onClick={() => setActiveGlyph(g)}
              >
                <span className="oxn-pas-glyph-icon" style={{ fontSize: '1.75rem' }}>{g.symbol}</span>
                <span className="oxn-pas-glyph-name">{g.title}</span>
              </button>
            ))}
          </div>

          <motion.div
            key={activeGlyph.id}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            className="oxn-pas-glyph-detail-card"
          >
            <span className="oxn-pas-gdetail-heading">INSCRIPTION ANALYSIS · {activeGlyph.title}</span>
            <p className="oxn-pas-gdetail-desc">{activeGlyph.desc}</p>
          </motion.div>
        </section>

        <section className="oxn-pas-culture-grid" aria-label="Indus Civilization Context">
          <article className="oxn-pas-culture-card">
            <div className="oxn-pas-culture-tag">01 · ARCHAEOLOGY</div>
            <h3 className="oxn-pas-culture-title">The Glazed Soapstone</h3>
            <p className="oxn-pas-culture-text">
              Indus artisans perfected a pyrotechnological glaze: after intaglio carving, steatite was coated in talc-soda paste and fired to produce enstatite crystals, creating a hard, impermeable seal capable of thousands of clay impressions.
            </p>
          </article>
          <article className="oxn-pas-culture-card">
            <div className="oxn-pas-culture-tag">02 · LOGISTICS</div>
            <h3 className="oxn-pas-culture-title">The Dockyard at Lothal</h3>
            <p className="oxn-pas-culture-text">
              At the tidal port of Lothal in modern Gujarat, terracotta sealings stamped with the Zebu bull were affixed to timber, carnelian beads, and fine cotton textiles before loading onto dhows bound for Oman, Failaka, and Bahrain.
            </p>
          </article>
          <article className="oxn-pas-culture-card">
            <div className="oxn-pas-culture-tag">03 · SANCTITY</div>
            <h3 className="oxn-pas-culture-title">The Ritual Brazier</h3>
            <p className="oxn-pas-culture-text">
              The ceremonial double-tiered offering stand before the Zebu bull held aromatic resins and sacred libations, cementing the animal’s status as both prime agricultural engine and supreme symbol of cosmic generative power.
            </p>
          </article>
        </section>

        <footer className="oxn-pas-signature">
          <div className="oxn-pas-sig-tablet">
            <svg className="oxn-pas-sig-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <rect x="3" y="3" width="18" height="18" rx="3" stroke="#C85632" strokeWidth="2" />
              <path d="M 7 12 C 9 8 15 8 17 12 C 15 16 9 16 7 12 Z" fill="#E58A2E" />
            </svg>
            <span className="oxn-pas-sig-text">SET VI · DESIGNED BY ANTIGRAVITY</span>
          </div>
          <div className="oxn-pas-sig-colophon">
            <span>HARAPPAN GLYPTIC ARCHIVE · MOHENJO-DARO · 03 OF 05</span>
          </div>
        </footer>
      </div>
    </main>
  )
}
