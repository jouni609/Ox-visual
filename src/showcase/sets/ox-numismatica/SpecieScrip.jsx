import { useState } from 'react'
import { motion } from 'framer-motion'
import './specie-scrip.css'

const PARITIES = [
  { id: 'b1', name: '$1,000 Gold Bond', goldOz: '48.375 oz', cattleHead: '24 Head', carloads: '1.2 Rail Cars', desc: 'Payable in United States Gold Coin of standard weight and fineness at the Sub-Treasury, Wall Street.' },
  { id: 'b5', name: '$5,000 Bullion Certificate', goldOz: '241.875 oz', cattleHead: '120 Head', carloads: '6.0 Rail Cars', desc: 'Commercial banking settlement scrip for Chicago Union Stock Yard meatpacking cartels.' },
  { id: 'b10', name: '$10,000 Sovereign Specie', goldOz: '483.750 oz', cattleHead: '240 Head', carloads: '12.0 Rail Cars', desc: 'Transcontinental rail and livestock freight bond backed by federal gold reserves.' }
]

export default function SpecieScrip() {
  const [selectedParity, setSelectedParity] = useState(PARITIES[0])

  return (
    <main className="th-oxn-scrip">
      <div className="oxn-scr-container">
        <header>
          <div className="oxn-scr-eyebrow">
            <span>Sovereign Bullion & Livestock Specie</span>
            <div className="oxn-scr-eyebrow-line" aria-hidden="true" />
            <span>New York & Chicago · 1898</span>
          </div>
          <h1 className="oxn-scr-title">SPECIE SCRIP</h1>
          <p className="oxn-scr-subtitle">
            During the height of the Gilded Age Gold Standard, the sovereign wealth of the United States was tied to two twin anchors: the gold vault and the prairie bovine. High-denomination treasury certificates carried steel-engraved vignettes of the charging American bull — the ultimate symbol of industrial momentum.
          </p>
        </header>

        <div className="oxn-scr-ticker-tape" aria-label="Telegraphic Cattle Price Ticker">
          <motion.div
            className="oxn-scr-ticker-inner"
            animate={{ x: [0, -1200] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 25 }}
          >
            <span className="oxn-scr-ticker-item"><span className="oxn-scr-ticker-symbol">TEX.STR:</span> $4.85/cwt ▲ +0.12</span>
            <span className="oxn-scr-ticker-item"><span className="oxn-scr-ticker-symbol">PRIME.OX:</span> $5.40/cwt ▲ +0.25</span>
            <span className="oxn-scr-ticker-item"><span className="oxn-scr-ticker-symbol">CHI.STK:</span> 18,400 HEAD RECD</span>
            <span className="oxn-scr-ticker-item"><span className="oxn-scr-ticker-symbol">AU.SPECIE:</span> $20.6718/OZ PAR</span>
            <span className="oxn-scr-ticker-item"><span className="oxn-scr-ticker-symbol">FEEDER.CALF:</span> $4.10/cwt ▼ -0.05</span>
            <span className="oxn-scr-ticker-item"><span className="oxn-scr-ticker-symbol">WEST.STEER:</span> $5.15/cwt ▲ +0.18</span>
            <span className="oxn-scr-ticker-item"><span className="oxn-scr-ticker-symbol">TEX.STR:</span> $4.85/cwt ▲ +0.12</span>
            <span className="oxn-scr-ticker-item"><span className="oxn-scr-ticker-symbol">PRIME.OX:</span> $5.40/cwt ▲ +0.25</span>
            <span className="oxn-scr-ticker-item"><span className="oxn-scr-ticker-symbol">CHI.STK:</span> 18,400 HEAD RECD</span>
            <span className="oxn-scr-ticker-item"><span className="oxn-scr-ticker-symbol">AU.SPECIE:</span> $20.6718/OZ PAR</span>
          </motion.div>
        </div>

        <section className="oxn-scr-bond-card" aria-label="Steel-Engraved Specie Bond Display">
          <svg
            className="oxn-scr-banknote-svg"
            viewBox="0 0 800 460"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-label="Steel-engraved banknote bond certificate with the vignette of a charging bull and guilloche borders"
          >
            <defs>
              <linearGradient id="oxn-scr-grad-paper" x1="0" y1="0" x2="800" y2="460" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#FAF8F2" />
                <stop offset="50%" stopColor="#F1EFE6" />
                <stop offset="100%" stopColor="#E5E1D3" />
              </linearGradient>
              <linearGradient id="oxn-scr-grad-ink" x1="200" y1="100" x2="600" y2="350" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#142820" />
                <stop offset="100%" stopColor="#0B1712" />
              </linearGradient>
              <pattern id="oxn-scr-guilloche-lathe" width="16" height="16" patternUnits="userSpaceOnUse">
                <circle cx="8" cy="8" r="7" fill="none" stroke="#489B74" strokeWidth="0.5" strokeOpacity="0.3" />
                <circle cx="0" cy="0" r="7" fill="none" stroke="#489B74" strokeWidth="0.5" strokeOpacity="0.3" />
              </pattern>
            </defs>

            <rect x="15" y="15" width="770" height="430" rx="8" fill="url(#oxn-scr-grad-paper)" stroke="#142820" strokeWidth="4" />
            <rect x="25" y="25" width="750" height="410" rx="6" fill="url(#oxn-scr-guilloche-lathe)" />
            <rect x="35" y="35" width="730" height="390" fill="none" stroke="#3B7E5B" strokeWidth="1.5" />

            <g stroke="#142820" strokeWidth="1" opacity="0.35">
              {Array.from({ length: 18 }).map((_, i) => (
                <ellipse key={i} cx="400" cy="230" rx={120 + i * 15} ry={70 + i * 9} fill="none" />
              ))}
            </g>

            <g transform="translate(60, 50)">
              <text x="0" y="25" fill="#142820" fontFamily="Space Mono" fontWeight="700" fontSize="13" letterSpacing="4">
                SERIES OF 1898 · GOLD SPECIE CERTIFICATE
              </text>
              <text x="680" y="25" textAnchor="end" fill="#E11D48" fontFamily="Space Mono" fontWeight="700" fontSize="14" letterSpacing="2">
                № 884,912-B
              </text>
            </g>

            <g id="oxn-scr-bull-vignette" transform="translate(130, 80)">
              <path
                d="M 120 220 C 100 200 95 160 110 130 C 130 95 180 80 235 85 C 285 70 345 75 395 105 C 430 130 445 165 440 200 C 430 225 405 245 370 238 C 345 230 330 210 315 190 C 290 205 245 210 200 205 C 170 215 145 235 120 220 Z"
                fill="url(#oxn-scr-grad-ink)"
              />

              <path
                d="M 110 130 C 90 110 70 105 45 120 C 25 135 22 160 35 185 C 48 210 75 222 105 218 C 125 215 138 200 148 180 Z"
                fill="url(#oxn-scr-grad-ink)"
              />

              <path
                d="M 60 125 C 45 80 25 45 -5 20 C -12 14 -20 20 -16 28 C -2 60 15 100 35 130"
                stroke="#142820"
                strokeWidth="7"
                strokeLinecap="round"
                fill="none"
              />
              <path
                d="M 85 118 C 92 75 108 35 138 5 C 145 -2 154 5 148 14 C 136 45 120 85 108 115"
                stroke="#142820"
                strokeWidth="6"
                strokeLinecap="round"
                fill="none"
              />

              <path
                d="M 75 215 C 65 245 60 280 62 308 C 65 318 75 325 84 322 C 94 316 95 300 98 280 C 108 245 115 218 120 200"
                fill="url(#oxn-scr-grad-ink)"
              />
              <path
                d="M 140 225 C 150 255 160 290 168 315 C 172 325 182 328 188 322 C 194 315 194 298 190 275 C 182 245 172 215 160 195"
                fill="#3B7E5B"
              />

              <path
                d="M 330 220 C 338 250 348 285 355 312 C 360 322 370 324 376 318 C 382 310 380 292 374 268 C 366 238 356 212 346 190"
                fill="url(#oxn-scr-grad-ink)"
              />
              <path
                d="M 385 210 C 400 235 415 265 428 290 C 435 300 445 300 450 290 C 455 280 450 262 438 238 C 424 212 410 190 398 170"
                fill="#3B7E5B"
              />

              <path
                d="M 430 170 C 460 175 490 195 500 230 C 506 248 500 265 494 280 C 488 290 478 288 476 278 C 472 260 464 242 452 228"
                stroke="#142820"
                strokeWidth="4"
                strokeLinecap="round"
                fill="none"
              />

              <g stroke="#FAF8F2" strokeWidth="1.5" opacity="0.6" strokeLinecap="round">
                <line x1="160" y1="120" x2="190" y2="150" />
                <line x1="180" y1="115" x2="210" y2="145" />
                <line x1="200" y1="110" x2="230" y2="140" />
                <line x1="220" y1="108" x2="250" y2="138" />
                <line x1="280" y1="120" x2="310" y2="150" />
                <line x1="300" y1="115" x2="330" y2="145" />
              </g>

              <circle cx="50" cy="150" r="5" fill="#FAF8F2" />
            </g>

            <g transform="translate(680, 230)">
              <circle cx="0" cy="0" r="45" fill="#E11D48" opacity="0.85" />
              <circle cx="0" cy="0" r="40" fill="none" stroke="#FAF8F2" strokeWidth="2" strokeDasharray="3 2" />
              <text x="0" y="4" textAnchor="middle" fill="#FAF8F2" fontFamily="Space Mono" fontWeight="700" fontSize="10" letterSpacing="1">
                TREASURY
              </text>
              <text x="0" y="16" textAnchor="middle" fill="#FAF8F2" fontFamily="Space Mono" fontSize="8">
                ★ U.S.A. ★
              </text>
            </g>

            <g transform="translate(100, 230)">
              <circle cx="0" cy="0" r="45" fill="#142820" />
              <circle cx="0" cy="0" r="40" fill="none" stroke="#4ADE80" strokeWidth="2" strokeDasharray="4 2" />
              <text x="0" y="-8" textAnchor="middle" fill="#4ADE80" fontFamily="Space Mono" fontSize="9">
                PAYABLE
              </text>
              <text x="0" y="10" textAnchor="middle" fill="#FAF8F2" fontFamily="Big Shoulders Display" fontWeight="900" fontSize="20">
                $1,000
              </text>
              <text x="0" y="24" textAnchor="middle" fill="#4ADE80" fontFamily="Space Mono" fontSize="8">
                IN GOLD
              </text>
            </g>

            <text x="400" y="415" textAnchor="middle" fill="#142820" fontFamily="Space Mono" fontSize="11" letterSpacing="2">
              THIS CERTIFICATE IS LEGAL TENDER FOR ALL DEBTS PUBLIC AND PRIVATE
            </text>
          </svg>

          <div className="oxn-scr-bond-meta">
            <div className="oxn-scr-bmeta-item">
              <span className="oxn-scr-bmeta-lbl">Standard</span>
              <span className="oxn-scr-bmeta-val">Gold Standard Act</span>
            </div>
            <div className="oxn-scr-bmeta-item">
              <span className="oxn-scr-bmeta-lbl">Statutory Parity</span>
              <span className="oxn-scr-bmeta-val">$20.67 / oz Troy</span>
            </div>
            <div className="oxn-scr-bmeta-item">
              <span className="oxn-scr-bmeta-lbl">Stock Yard Hub</span>
              <span className="oxn-scr-bmeta-val">Chicago Union</span>
            </div>
            <div className="oxn-scr-bmeta-item">
              <span className="oxn-scr-bmeta-lbl">Intaglio Plate</span>
              <span className="oxn-scr-bmeta-val">Steel Master Die</span>
            </div>
          </div>
        </section>

        <section className="oxn-scr-parity-section" aria-label="Specie Parity Calculator">
          <h2 className="oxn-scr-parity-title">Commodity Parity & Specie Balance Engine</h2>
          <p className="oxn-scr-parity-sub">
            Select a treasury certificate denomination to calculate its backing in pure troy gold bullion, live horned cattle headcount, and transcontinental freight capacity.
          </p>

          <div className="oxn-scr-toggles" role="tablist" aria-label="Denomination Selector">
            {PARITIES.map((p) => (
              <button
                key={p.id}
                role="tab"
                aria-selected={selectedParity.id === p.id}
                className={`oxn-scr-toggle-btn ${selectedParity.id === p.id ? 'active' : ''}`}
                onClick={() => setSelectedParity(p)}
              >
                {p.name}
              </button>
            ))}
          </div>

          <motion.div
            key={selectedParity.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
            className="oxn-scr-calc-grid"
          >
            <div className="oxn-scr-calc-card">
              <span className="oxn-scr-calc-lbl">FINE GOLD EQUIVALENCE</span>
              <span className="oxn-scr-calc-v">{selectedParity.goldOz}</span>
              <p className="oxn-scr-calc-txt">Assayed .9999 fine gold bullion in treasury vaults.</p>
            </div>
            <div className="oxn-scr-calc-card">
              <span className="oxn-scr-calc-lbl">LIVE HORNED CATTLE HEAD</span>
              <span className="oxn-scr-calc-v">{selectedParity.cattleHead}</span>
              <p className="oxn-scr-calc-txt">Prime 1,200 lb steers at Chicago yard settlement prices.</p>
            </div>
            <div className="oxn-scr-calc-card">
              <span className="oxn-scr-calc-lbl">RAIL FREIGHT CAPACITY</span>
              <span className="oxn-scr-calc-v">{selectedParity.carloads}</span>
              <p className="oxn-scr-calc-txt">Armour-Swift stock cars routed over Union Pacific lines.</p>
            </div>
            <div className="oxn-scr-calc-card">
              <span className="oxn-scr-calc-lbl">SETTLEMENT INSTRUMENT</span>
              <span className="oxn-scr-calc-v">Sovereign Specie</span>
              <p className="oxn-scr-calc-txt">{selectedParity.desc}</p>
            </div>
          </motion.div>
        </section>

        <section className="oxn-scr-history-grid" aria-label="Financial History Context">
          <article className="oxn-scr-hist-card">
            <div className="oxn-scr-hist-tag">01 · COMMERCE</div>
            <h3 className="oxn-scr-hist-title">The Union Stock Yards</h3>
            <p className="oxn-scr-hist-p">
              Spanning 375 acres on Chicago’s South Side, the Union Stock Yards processed over 10,000 cattle daily. Transcontinental cattle cars and refrigerated boxcars turned Western bovine livestock into America’s most liquid industrial commodity.
            </p>
          </article>
          <article className="oxn-scr-hist-card">
            <div className="oxn-scr-hist-tag">02 · MONETARY POLICY</div>
            <h3 className="oxn-scr-hist-title">The Cross of Gold</h3>
            <p className="oxn-scr-hist-p">
              The 1896 presidential election hinged on whether prairie ranchers and farmers should be tied to the rigid Gold Standard or free silver bimetallism. The bull remained the supreme political and economic metaphor of prairie labor.
            </p>
          </article>
          <article className="oxn-scr-hist-card">
            <div className="oxn-scr-hist-tag">03 · SECURITY CRAFT</div>
            <h3 className="oxn-scr-hist-title">The Rose Engine Lathe</h3>
            <p className="oxn-scr-hist-p">
              Banknote engravers employed geometric lathe machines to spin concentric, non-repeating cycloid rosettes. Combined with hand-engraved steel master dies, these designs rendered counterfeit reproduction physically impossible.
            </p>
          </article>
        </section>

        <footer className="oxn-scr-signature">
          <div className="oxn-scr-die-seal">
            <svg className="oxn-scr-seal-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <rect x="3" y="3" width="18" height="18" rx="2" stroke="#4ADE80" strokeWidth="2" />
              <path d="M 6 12 L 18 12 M 12 6 L 12 18" stroke="#F59E0B" strokeWidth="1.5" />
            </svg>
            <span className="oxn-scr-seal-text">SET VI · DESIGNED BY ANTIGRAVITY</span>
          </div>
          <div className="oxn-scr-colophon">
            <span>BUREAU OF ENGRAVING & PRINTING · SPECIE SCRIP SERIES · 05 OF 05</span>
          </div>
        </footer>
      </div>
    </main>
  )
}
