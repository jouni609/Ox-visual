import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './euboea.css'

export default function Euboea() {
  const [dieSide, setDieSide] = useState('obverse')
  const [isStriking, setIsStriking] = useState(false)
  const [multiplier, setMultiplier] = useState(1)

  const triggerStrike = () => {
    setIsStriking(true)
    setTimeout(() => setIsStriking(false), 600)
  }

  return (
    <main className="th-oxn-euboea">
      <div className="oxn-eub-container">
        <header className="oxn-eub-header">
          <div className="oxn-eub-eyebrow">
            <span>Archaic Hellenic Numismatics</span>
            <div className="oxn-eub-eyebrow-line" aria-hidden="true" />
            <span>Chalkis & Eretria · c. 510 BCE</span>
          </div>
          <div className="oxn-eub-title-row">
            <h1 className="oxn-eub-title">EUBOEA</h1>
            <span className="oxn-eub-greek-tag" lang="el">ΕΥΒΟΙΑ · ΧΑΛΚΙΣ</span>
          </div>
          <p className="oxn-eub-subtitle">
            Named in antiquity as the <span lang="el">«Εὔβοια»</span> — the isle rich in fine oxen. When the Chalcidian mintmasters struck Greece’s earliest silver didrachms, they chose the muscular horned bull as their sovereign seal of purity and maritime exchange across the Aegean sea lanes.
          </p>
        </header>

        <section className="oxn-eub-coin-stage-card" aria-label="Silver Coin Die Inspector">
          <div className="oxn-eub-controls-bar">
            <div className="oxn-eub-toggle-group" role="tablist" aria-label="Coin Face Selector">
              <button
                role="tab"
                aria-selected={dieSide === 'obverse'}
                className={`oxn-eub-toggle-btn ${dieSide === 'obverse' ? 'active' : ''}`}
                onClick={() => setDieSide('obverse')}
              >
                OBVERSE · THE BULL
              </button>
              <button
                role="tab"
                aria-selected={dieSide === 'reverse'}
                className={`oxn-eub-toggle-btn ${dieSide === 'reverse' ? 'active' : ''}`}
                onClick={() => setDieSide('reverse')}
              >
                REVERSE · INCUSE WHEEL
              </button>
            </div>

            <button
              className="oxn-eub-strike-btn"
              onClick={triggerStrike}
              aria-label="Strike the coin die with anvil hammer"
            >
              <span>⚡</span>
              <span>HAMMER STRIKE DIE</span>
            </button>
          </div>

          <div className="oxn-eub-die-wrapper">
            <AnimatePresence mode="wait">
              {dieSide === 'obverse' ? (
                <motion.div
                  key="obverse"
                  initial={{ rotateY: -90, opacity: 0 }}
                  animate={{
                    rotateY: 0,
                    opacity: 1,
                    scale: isStriking ? [1, 1.08, 0.96, 1.02, 1] : 1,
                    filter: isStriking ? 'drop-shadow(0 0 35px #5eead4)' : 'drop-shadow(0 20px 35px rgba(0, 0, 0, 0.8))'
                  }}
                  exit={{ rotateY: 90, opacity: 0 }}
                  transition={{ duration: isStriking ? 0.5 : 0.4 }}
                  onClick={() => setDieSide('reverse')}
                  aria-label="Obverse die showing the charging Euboean bull"
                >
                  <svg
                    className="oxn-eub-coin-svg"
                    viewBox="0 0 500 500"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs>
                      <radialGradient id="oxn-eub-grad-planchet" cx="50%" cy="45%" r="50%">
                        <stop offset="0%" stopColor="#FFFFFF" />
                        <stop offset="35%" stopColor="#E2E8F0" />
                        <stop offset="70%" stopColor="#94A3B8" />
                        <stop offset="100%" stopColor="#334155" />
                      </radialGradient>
                      <linearGradient id="oxn-eub-grad-bull" x1="120" y1="120" x2="380" y2="380" gradientUnits="userSpaceOnUse">
                        <stop offset="0%" stopColor="#FFFFFF" />
                        <stop offset="40%" stopColor="#CBD5E1" />
                        <stop offset="80%" stopColor="#64748B" />
                        <stop offset="100%" stopColor="#1E293B" />
                      </linearGradient>
                      <linearGradient id="oxn-eub-grad-rim" x1="0" y1="0" x2="500" y2="500" gradientUnits="userSpaceOnUse">
                        <stop offset="0%" stopColor="#5EEAD4" />
                        <stop offset="50%" stopColor="#E2E8F0" />
                        <stop offset="100%" stopColor="#C5A869" />
                      </linearGradient>
                    </defs>

                    <circle cx="250" cy="250" r="230" fill="url(#oxn-eub-grad-planchet)" stroke="url(#oxn-eub-grad-rim)" strokeWidth="4" />
                    <circle cx="250" cy="250" r="215" fill="none" stroke="#64748B" strokeWidth="2" strokeDasharray="4 6" opacity="0.6" />

                    <g opacity="0.2" stroke="#0F172A" strokeWidth="1">
                      <circle cx="250" cy="250" r="195" />
                      <circle cx="250" cy="250" r="175" />
                    </g>

                    <g id="oxn-eub-bull-figure" transform="translate(10, 0)">
                      <path
                        d="M 160 270 C 145 250 140 215 155 185 C 170 155 210 135 255 140 C 295 130 340 135 375 160 C 400 180 410 210 405 240 C 398 260 380 275 355 270 C 335 265 320 250 310 235 C 290 245 255 250 220 248 C 195 255 180 270 160 270 Z"
                        fill="url(#oxn-eub-grad-bull)"
                      />

                      <path
                        d="M 160 185 C 140 170 120 168 100 180 C 85 192 82 210 90 228 C 98 245 118 255 140 252 C 158 250 168 238 175 220 Z"
                        fill="url(#oxn-eub-grad-bull)"
                      />

                      <path
                        d="M 115 175 C 105 140 90 115 65 95 C 60 90 52 92 54 100 C 62 122 75 150 90 172"
                        stroke="#FFFFFF"
                        strokeWidth="6"
                        strokeLinecap="round"
                        fill="none"
                      />
                      <path
                        d="M 135 172 C 138 135 148 105 170 85 C 175 80 182 85 178 94 C 170 116 158 144 148 168"
                        stroke="#E2E8F0"
                        strokeWidth="5"
                        strokeLinecap="round"
                        fill="none"
                      />

                      <path
                        d="M 125 245 C 118 265 115 295 118 318 C 120 328 128 335 136 332 C 144 328 146 315 148 298 C 155 268 160 245 162 230"
                        fill="#64748B"
                      />
                      <path
                        d="M 175 265 C 182 290 190 320 195 342 C 198 352 208 355 214 350 C 220 345 220 330 218 310 C 212 280 205 255 195 235"
                        fill="url(#oxn-eub-grad-bull)"
                      />

                      <path
                        d="M 330 255 C 335 282 342 315 348 338 C 352 348 362 350 368 344 C 374 338 372 322 368 300 C 362 272 355 248 345 230"
                        fill="url(#oxn-eub-grad-bull)"
                      />
                      <path
                        d="M 380 250 C 392 272 402 298 412 318 C 418 326 428 326 432 318 C 436 308 432 292 422 272 C 410 248 400 230 390 210"
                        fill="#64748B"
                      />

                      <path
                        d="M 395 200 C 420 205 445 225 455 255 C 460 270 455 285 450 298 C 446 306 438 304 436 296 C 432 280 425 265 415 252"
                        stroke="#E2E8F0"
                        strokeWidth="3.5"
                        strokeLinecap="round"
                        fill="none"
                      />

                      <circle cx="108" cy="195" r="4.5" fill="#0F172A" />

                      <g stroke="#5EEAD4" strokeWidth="2" opacity="0.8" strokeLinecap="round">
                        <line x1="210" y1="180" x2="225" y2="210" />
                        <line x1="230" y1="175" x2="245" y2="205" />
                        <line x1="250" y1="172" x2="265" y2="202" />
                        <line x1="270" y1="175" x2="285" y2="205" />
                      </g>

                      <g transform="translate(220, 360) scale(0.6)" opacity="0.85">
                        <path
                          d="M 0 0 C 15 -10 35 -10 50 0 C 60 8 70 8 80 0 C 70 18 50 25 35 22 C 20 18 10 10 0 0 Z"
                          fill="#5EEAD4"
                        />
                        <circle cx="20" cy="5" r="2" fill="#070D18" />
                      </g>
                    </g>

                    <text x="250" y="445" textAnchor="middle" fill="#5EEAD4" fontFamily="Syne" fontWeight="800" fontSize="16" letterSpacing="4">
                      EYBOIA · DIDRACHM
                    </text>
                  </svg>
                </motion.div>
              ) : (
                <motion.div
                  key="reverse"
                  initial={{ rotateY: 90, opacity: 0 }}
                  animate={{
                    rotateY: 0,
                    opacity: 1,
                    scale: isStriking ? [1, 1.08, 0.96, 1.02, 1] : 1,
                    filter: isStriking ? 'drop-shadow(0 0 35px #c5a869)' : 'drop-shadow(0 20px 35px rgba(0, 0, 0, 0.8))'
                  }}
                  exit={{ rotateY: -90, opacity: 0 }}
                  transition={{ duration: isStriking ? 0.5 : 0.4 }}
                  onClick={() => setDieSide('obverse')}
                  aria-label="Reverse die showing the incuse punch with the wheel of Chalkis"
                >
                  <svg
                    className="oxn-eub-coin-svg"
                    viewBox="0 0 500 500"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="250" cy="250" r="230" fill="url(#oxn-eub-grad-planchet)" stroke="url(#oxn-eub-grad-rim)" strokeWidth="4" />
                    
                    <rect x="110" y="110" width="280" height="280" rx="12" fill="#1E293B" stroke="#64748B" strokeWidth="4" />
                    
                    <g transform="translate(250, 250)">
                      <circle cx="0" cy="0" r="90" fill="none" stroke="#C5A869" strokeWidth="6" />
                      <circle cx="0" cy="0" r="30" fill="#C5A869" stroke="#E2E8F0" strokeWidth="3" />
                      
                      <line x1="0" y1="-90" x2="0" y2="90" stroke="#C5A869" strokeWidth="6" />
                      <line x1="-90" y1="0" x2="90" y2="0" stroke="#C5A869" strokeWidth="6" />
                      
                      <circle cx="0" cy="0" r="10" fill="#070D18" />
                    </g>

                    <text x="250" y="80" textAnchor="middle" fill="#C5A869" fontFamily="Marcellus" fontSize="18" letterSpacing="4">
                      ΧΑΛΚΙΔΕΩΝ · ΚΑΝΩΝ
                    </text>
                    <text x="250" y="445" textAnchor="middle" fill="#94A3B8" fontFamily="Syne" fontSize="14" letterSpacing="3">
                      QUADRATUM INCUSUM · FOUR-SPOKE WHEEL
                    </text>
                  </svg>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="oxn-eub-coin-meta">
            <div className="oxn-eub-meta-item">
              <span className="oxn-eub-meta-label">Standard</span>
              <span className="oxn-eub-meta-val">Euboeic-Attic</span>
            </div>
            <div className="oxn-eub-meta-item">
              <span className="oxn-eub-meta-label">Denomination</span>
              <span className="oxn-eub-meta-val">Didrachm (Stater)</span>
            </div>
            <div className="oxn-eub-meta-item">
              <span className="oxn-eub-meta-label">Fine Mass</span>
              <span className="oxn-eub-meta-val">8.60 g AR</span>
            </div>
            <div className="oxn-eub-meta-item">
              <span className="oxn-eub-meta-label">Silver Purity</span>
              <span className="oxn-eub-meta-val">98.5% Struck</span>
            </div>
          </div>
        </section>

        <section className="oxn-eub-converter-section" aria-label="Euboeic Currency Calculator">
          <h2 className="oxn-eub-converter-title">The Euboeic Weight Canon & Exchange</h2>
          <p className="oxn-eub-converter-desc">
            Adjust the stater tally to compute the silver exchange value across the archaic Mediterranean maritime network.
          </p>

          <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
            {[1, 10, 50, 100, 300].map((count) => (
              <button
                key={count}
                className={`oxn-eub-toggle-btn ${multiplier === count ? 'active' : ''}`}
                onClick={() => setMultiplier(count)}
              >
                {count} {count === 1 ? 'STATER' : 'STATERS'}
              </button>
            ))}
          </div>

          <div className="oxn-eub-calc-grid">
            <div className="oxn-eub-calc-card">
              <div className="oxn-eub-calc-header">
                <span className="oxn-eub-calc-name">Fine Silver Mass</span>
                <span className="oxn-eub-calc-greek">ΑΡΓΥΡΟΣ</span>
              </div>
              <div className="oxn-eub-calc-val">{(8.6 * multiplier).toFixed(1)} g</div>
              <p className="oxn-eub-calc-sub">Refined metallurgical silver from Chalkis & Laurion.</p>
            </div>

            <div className="oxn-eub-calc-card">
              <div className="oxn-eub-calc-header">
                <span className="oxn-eub-calc-name">Drachmae Count</span>
                <span className="oxn-eub-calc-greek">ΔΡΑΧΜΑΙ</span>
              </div>
              <div className="oxn-eub-calc-val">{2 * multiplier} Δρ.</div>
              <p className="oxn-eub-calc-sub">Each stater equals 2 standard archaic drachmae.</p>
            </div>

            <div className="oxn-eub-calc-card">
              <div className="oxn-eub-calc-header">
                <span className="oxn-eub-calc-name">Obol Subunits</span>
                <span className="oxn-eub-calc-greek">ΟΒΟΛΟΙ</span>
              </div>
              <div className="oxn-eub-calc-val">{12 * multiplier} Ὀβ.</div>
              <p className="oxn-eub-calc-sub">Silver spit coins for daily civic market transactions.</p>
            </div>

            <div className="oxn-eub-calc-card">
              <div className="oxn-eub-calc-header">
                <span className="oxn-eub-calc-name">Pastoral Equivalence</span>
                <span className="oxn-eub-calc-greek">ΒΟΕΣ</span>
              </div>
              <div className="oxn-eub-calc-val">{(multiplier * 0.2).toFixed(1)} Oxen</div>
              <p className="oxn-eub-calc-sub">Approximate head of Euboean cattle value in Homeric tariff.</p>
            </div>
          </div>
        </section>

        <section className="oxn-eub-folio-grid" aria-label="Numismatic History">
          <article className="oxn-eub-folio-card">
            <div className="oxn-eub-folio-tag">01 · GEOGRAPHY</div>
            <h3 className="oxn-eub-folio-title">The Pastures of the Euripus</h3>
            <p className="oxn-eub-folio-text">
              Separated from mainland Boeotia by the churning tidal strait of Euripus, Euboea flourished as Greece’s premier pastoral powerhouse. Its fertile Lelantine Plain fed herds of heavy draft oxen whose strength powered both Aegean farming and silver transport.
            </p>
          </article>
          <article className="oxn-eub-folio-card">
            <div className="oxn-eub-folio-tag">02 · METROLOGY</div>
            <h3 className="oxn-eub-folio-title">The Pan-Hellenic Standard</h3>
            <p className="oxn-eub-folio-text">
              The Euboeic weight system (didrachm of ~8.6g) was adopted by Solon in Athens around 594 BCE and later formed the bedrock of the pan-Hellenic empire under Alexander the Great, proving the enduring legacy of the bovine standard.
            </p>
          </article>
          <article className="oxn-eub-folio-card">
            <div className="oxn-eub-folio-tag">03 · ICONOGRAPHY</div>
            <h3 className="oxn-eub-folio-title">The Retrospective Bull</h3>
            <p className="oxn-eub-folio-text">
              The archaic motif of the bull looking back over its shoulder was deliberately engineered to fit the circular coin planchet with maximum muscular tension, symbolizing the guardian spirit of Chalkis watching over maritime trade.
            </p>
          </article>
        </section>

        <footer className="oxn-eub-signature">
          <div className="oxn-eub-sig-stamp">
            <svg className="oxn-eub-sig-amphora" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M7 4 L17 4 M9 4 L9 8 C9 13 4 15 4 19 C4 21 8 22 12 22 C16 22 20 21 20 19 C20 15 15 13 15 8 L15 4" stroke="#5EEAD4" strokeWidth="1.5" />
              <path d="M4 11 C2 11 2 15 4 15 M20 11 C22 11 22 15 20 15" stroke="#5EEAD4" strokeWidth="1.5" />
            </svg>
            <span className="oxn-eub-sig-text">SET VI · DESIGNED BY ANTIGRAVITY</span>
          </div>
          <div className="oxn-eub-sig-colophon">
            <span>OFFICINA NUMISMATICA · HELLENIC STATER SERIES · 02 OF 05</span>
          </div>
        </footer>
      </div>
    </main>
  )
}
