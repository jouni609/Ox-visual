import { useState } from 'react'
import { motion } from 'framer-motion'
import './apis.css'

export default function Apis() {
  const [activeMark, setActiveMark] = useState(0)

  const marks = [
    {
      id: 0,
      name: 'The White Triangle',
      location: 'Forehead Blaze',
      meaning: 'A luminous chalk-white triangle upon the dark brow, signifying the divine descent of Ptah into mortal bovine form.',
    },
    {
      id: 1,
      name: 'The Winged Vulture',
      location: 'Withers & Shoulder',
      meaning: 'A sacred dark feather patterning across the right flank, representing the protective wings of Mut guarding the king of herds.',
    },
    {
      id: 2,
      name: 'The Sacred Scarab',
      location: 'Sublingual Knot',
      meaning: 'A knot of flesh shaped like the dung-beetle Khepri beneath the tongue, embodying eternal solar rebirth from the primordial mound.',
    },
  ]

  return (
    <div className="ox-mythos-apis-root th-ox-mythos-apis">
      <div className="ox-mythos-apis-container">
        <header className="ox-mythos-apis-header">
          <div className="ox-mythos-apis-eyebrow">
            <span className="ox-mythos-apis-pylon-line" aria-hidden="true" />
            <span>Memphis · Serapeum of Saqqara · c. 3000 BCE</span>
            <span className="ox-mythos-apis-pylon-line" aria-hidden="true" />
          </div>
          <h1 className="ox-mythos-apis-title">
            APIS <span className="ox-mythos-apis-title-highlight">· THE LIVING GOD</span>
          </h1>
          <p className="ox-mythos-apis-subtitle">
            Not an idol of wood or stone, but flesh: the living black bull consecrated in the temple of Ptah. Across thirty dynasties, only one bull at a time bore the twenty-nine sacred bodily marks demanded by the priesthood.
          </p>
        </header>

        <div className="ox-mythos-apis-stage">
          <div className="ox-mythos-apis-canvas-frame">
            <div className="ox-mythos-apis-sanctum-corners" aria-hidden="true" />
            <div className="ox-mythos-apis-svg-wrapper">
              <svg
                className="ox-mythos-apis-svg"
                viewBox="0 0 600 420"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label="Monumental Egyptian Apis bull in sacred obsidian silhouette crowned with gold sun-disk"
              >
                <defs>
                  <linearGradient id="ox-mythos-apis-gold-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#fcedaa" />
                    <stop offset="50%" stopColor="#d4af37" />
                    <stop offset="100%" stopColor="#8c6d17" />
                  </linearGradient>
                  <linearGradient id="ox-mythos-apis-body-grad" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#1c2433" />
                    <stop offset="40%" stopColor="#121721" />
                    <stop offset="100%" stopColor="#0a0d14" />
                  </linearGradient>
                  <radialGradient id="ox-mythos-apis-sun-aura" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#fcedaa" stopOpacity="0.8" />
                    <stop offset="50%" stopColor="#d4af37" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#d4af37" stopOpacity="0" />
                  </radialGradient>
                  <filter id="ox-mythos-apis-glow" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="4" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                  </filter>
                </defs>

                <rect x="70" y="365" width="460" height="18" fill="#18202d" stroke="#28354d" strokeWidth="2" />
                <rect x="50" y="383" width="500" height="12" fill="#121722" stroke="#28354d" strokeWidth="2" />
                <line x1="80" y1="374" x2="520" y2="374" stroke="#d4af37" strokeWidth="1" strokeOpacity="0.4" />

                <g className="ox-mythos-apis-sun-glow">
                  <circle cx="395" cy="115" r="54" fill="url(#ox-mythos-apis-sun-aura)" />
                </g>

                <g>
                  <path
                    d="M335 365 L345 365 L352 300 L365 265 L348 260 L332 305 Z"
                    fill="#0f131a"
                  />
                  <polygon points="333,365 348,365 346,358 333,358" fill="#d4af37" />

                  <path
                    d="M230 365 L242 365 L248 295 L255 245 L235 245 L222 290 Z"
                    fill="#0f131a"
                  />
                  <polygon points="228,365 243,365 241,358 228,358" fill="#d4af37" />
                </g>

                <g id="ox-mythos-apis-bull-torso">
                  <path
                    d="M 180 185 
                       C 188 175, 215 170, 245 174 
                       C 275 177, 305 175, 330 162 
                       C 345 154, 365 142, 385 138 
                       C 405 134, 420 148, 435 162 
                       C 450 178, 470 195, 465 208 
                       C 460 216, 442 220, 425 214 
                       C 415 228, 395 255, 375 268 
                       C 355 280, 325 288, 285 285 
                       C 255 282, 235 278, 215 265 
                       C 195 250, 185 225, 178 198 
                       Z"
                    fill="url(#ox-mythos-apis-body-grad)"
                    stroke="#2a374f"
                    strokeWidth="2"
                  />

                  <path
                    d="M 330 262
                       C 334 290, 328 325, 326 365
                       L 312 365
                       C 310 320, 315 290, 322 262
                       Z"
                    fill="url(#ox-mythos-apis-body-grad)"
                    stroke="#2a374f"
                    strokeWidth="1.5"
                  />
                  <polygon points="310,365 328,365 326,356 312,356" fill="#d4af37" />

                  <path
                    d="M 215 260
                       C 205 285, 192 320, 190 365
                       L 176 365
                       C 178 325, 190 285, 200 252
                       Z"
                    fill="url(#ox-mythos-apis-body-grad)"
                    stroke="#2a374f"
                    strokeWidth="1.5"
                  />
                  <polygon points="174,365 192,365 190,356 176,356" fill="#d4af37" />

                  <path
                    d="M 385 138
                       C 405 134, 420 148, 435 162
                       C 450 178, 470 195, 465 208
                       C 455 224, 428 222, 415 210
                       C 400 196, 390 170, 385 138
                       Z"
                    fill="#151b26"
                    stroke="#2a374f"
                    strokeWidth="1.5"
                  />

                  <circle cx="438" cy="172" r="3.5" fill="#fcedaa" />

                  <g className="ox-mythos-apis-tail">
                    <path
                      d="M 180 188
                         C 165 210, 160 250, 164 290
                         C 166 315, 162 335, 158 350"
                      stroke="#1a2233"
                      strokeWidth="4"
                      strokeLinecap="round"
                    />
                    <path
                      d="M 158 345
                         C 152 355, 150 370, 156 375
                         C 162 372, 164 360, 160 348
                         Z"
                      fill="#d4af37"
                    />
                  </g>
                </g>

                <g id="ox-mythos-apis-horns">
                  <path
                    d="M 405 142
                       C 425 125, 435 90, 428 65
                       C 424 50, 415 42, 412 45
                       C 410 52, 416 80, 395 132
                       Z"
                    fill="url(#ox-mythos-apis-gold-grad)"
                    stroke="#8c6d17"
                    strokeWidth="1"
                  />
                  <path
                    d="M 390 138
                       C 382 110, 375 80, 365 62
                       C 360 48, 350 42, 348 46
                       C 346 54, 355 85, 380 135
                       Z"
                    fill="url(#ox-mythos-apis-gold-grad)"
                    stroke="#8c6d17"
                    strokeWidth="1"
                  />
                </g>

                <g id="ox-mythos-apis-sundisk">
                  <circle
                    cx="395"
                    cy="102"
                    r="26"
                    fill="url(#ox-mythos-apis-gold-grad)"
                    stroke="#fcedaa"
                    strokeWidth="1.5"
                    filter="url(#ox-mythos-apis-glow)"
                  />
                  <path
                    d="M 395 128
                       C 392 120, 388 114, 388 108
                       C 388 102, 394 98, 398 94
                       C 400 90, 398 86, 395 84"
                    stroke="#a32c25"
                    strokeWidth="2.5"
                    fill="none"
                    strokeLinecap="round"
                  />
                  <circle cx="395" cy="83" r="2" fill="#a32c25" />
                </g>

                <g id="ox-mythos-apis-collar">
                  <path
                    d="M 402 185
                       C 390 220, 365 242, 345 255
                       L 348 265
                       C 372 250, 400 225, 412 188
                       Z"
                    fill="#1a4478"
                    stroke="#d4af37"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M 395 195
                       C 385 224, 362 244, 348 258"
                    stroke="#d4af37"
                    strokeWidth="2"
                    strokeDasharray="3,3"
                  />
                </g>

                <g id="ox-mythos-apis-saddle">
                  <rect
                    x="230"
                    y="178"
                    width="75"
                    height="50"
                    rx="4"
                    fill="#152238"
                    stroke="#d4af37"
                    strokeWidth="1.5"
                  />
                  <line x1="230" y1="228" x2="305" y2="228" stroke="#a32c25" strokeWidth="4" />
                  <path
                    d="M 245 195 L 267 195 L 256 215 Z"
                    fill="#d4af37"
                  />
                  <path
                    d="M 290 195 L 268 195 L 279 215 Z"
                    fill="#d4af37"
                  />
                </g>

                <g
                  className={`ox-mythos-apis-mark-highlight ${activeMark === 0 ? 'is-active' : ''}`}
                  onClick={() => setActiveMark(0)}
                >
                  <polygon
                    points="435,160 445,172 425,172"
                    fill="#ffffff"
                    stroke="#d4af37"
                    strokeWidth="1.5"
                    filter="url(#ox-mythos-apis-glow)"
                  />
                </g>

                <g
                  className={`ox-mythos-apis-mark-highlight ${activeMark === 1 ? 'is-active' : ''}`}
                  onClick={() => setActiveMark(1)}
                >
                  <path
                    d="M 285 185
                       C 275 195, 260 198, 252 205
                       C 265 208, 280 202, 292 195
                       Z"
                    fill="#d4af37"
                    opacity={activeMark === 1 ? '1' : '0.6'}
                  />
                </g>

                <g
                  className={`ox-mythos-apis-mark-highlight ${activeMark === 2 ? 'is-active' : ''}`}
                  onClick={() => setActiveMark(2)}
                >
                  <ellipse
                    cx="430"
                    cy="210"
                    rx="6"
                    ry="4"
                    fill="#a32c25"
                    stroke="#d4af37"
                    strokeWidth="1"
                    opacity={activeMark === 2 ? '1' : '0.7'}
                  />
                </g>
              </svg>
            </div>
          </div>

          <aside className="ox-mythos-apis-aside">
            <div className="ox-mythos-apis-card">
              <h2 className="ox-mythos-apis-card-title">
                <span>SACRED MARKS OF PTAH</span>
                <span>0{activeMark + 1} / 03</span>
              </h2>
              <div className="ox-mythos-apis-pills" role="tablist">
                {marks.map((m) => (
                  <button
                    key={m.id}
                    className={`ox-mythos-apis-pill-btn ${activeMark === m.id ? 'is-active' : ''}`}
                    onClick={() => setActiveMark(m.id)}
                    role="tab"
                    aria-selected={activeMark === m.id}
                  >
                    <span className="ox-mythos-apis-pill-num">0{m.id + 1}</span>
                    <div className="ox-mythos-apis-pill-content">
                      <strong>{m.name}</strong>
                      <span>{m.location} · {m.meaning}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <div className="ox-mythos-apis-card">
              <h3 className="ox-mythos-apis-card-title">SERAPEUM NECROPOLIS</h3>
              <div className="ox-mythos-apis-serapeum-grid">
                <div className="ox-mythos-apis-stat">
                  <span className="ox-mythos-apis-stat-val">24</span>
                  <span className="ox-mythos-apis-stat-label">Basalt Sarcophagi</span>
                </div>
                <div className="ox-mythos-apis-stat">
                  <span className="ox-mythos-apis-stat-val">70 t</span>
                  <span className="ox-mythos-apis-stat-label">Vessel Weight</span>
                </div>
                <div className="ox-mythos-apis-stat">
                  <span className="ox-mythos-apis-stat-val">70 d</span>
                  <span className="ox-mythos-apis-stat-label">Embalming Rite</span>
                </div>
              </div>
            </div>
          </aside>
        </div>

        <section className="ox-mythos-apis-lore">
          <article className="ox-mythos-apis-lore-col">
            <h3>I. The Incarnation of Ptah</h3>
            <p>
              Apis served as the living intermediary between humanity and Ptah, the creator deity of crafts and architecture. His movements in the temple court delivered oracles: if the bull ate offered grain from an inquirer&apos;s hand, the omen was auspicious; if he turned his massive head away, doom was sealed.
            </p>
          </article>
          <article className="ox-mythos-apis-lore-col">
            <h3>II. The Crown of the Two Horizons</h3>
            <p>
              Between his lyre-shaped horns, priests affixed a burnished electrum disk representing Ra, fronted by the royal rearing Uraeus cobra. The horns formed the hieroglyphic horizon, lifting the solar deity into the heavens upon the beast&apos;s brow.
            </p>
          </article>
          <article className="ox-mythos-apis-lore-col">
            <h3>III. Osirapis &amp; Eternity</h3>
            <p>
              Upon his death, mourning engulfed Egypt. The deceased bull underwent seventy days of mummification identical to Pharaohs, entombed within monolithic black granite crypts beneath the desert plateau of Saqqara, resurrecting as Osirapis.
            </p>
          </article>
        </section>

        <footer className="ox-mythos-apis-footer">
          <div className="ox-mythos-apis-stele" aria-label="Set signature: SET XXI · DESIGNED BY GEMINI 3.8 FLASH">
            <svg className="ox-mythos-apis-stele-icon" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 2 L19 9 L19 21 L5 21 L5 9 Z" />
            </svg>
            <span className="ox-mythos-apis-sig">SET XXI · DESIGNED BY GEMINI 3.8 FLASH</span>
          </div>
        </footer>
      </div>
    </div>
  )
}
