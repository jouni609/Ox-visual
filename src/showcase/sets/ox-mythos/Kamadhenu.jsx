import { useState } from 'react'
import { motion } from 'framer-motion'
import './kamadhenu.css'

export default function Kamadhenu() {
  const [offering, setOffering] = useState(0)

  const offerings = [
    {
      id: 0,
      name: 'Kshira',
      sanskrit: 'क्षीर',
      translation: 'Pure Milk',
      element: 'Nourishment & Sattva',
      desc: 'The primordial white nectar of existence, embodying pure maternal nourishment and divine tranquility.',
    },
    {
      id: 1,
      name: 'Dadhi',
      sanskrit: 'दधि',
      translation: 'Sacred Curd',
      element: 'Auspiciousness & Cohesion',
      desc: 'Symbol of transformative patience, stability of mind, and wholesome abundance within the domestic hearth.',
    },
    {
      id: 2,
      name: 'Ghrta',
      sanskrit: 'घृत',
      translation: 'Clarified Ghee',
      element: 'Sacrificial Fire (Agni)',
      desc: 'Golden fuel of the Vedic yajna fire altars, carrying invocations across the dimensions to the celestial devas.',
    },
    {
      id: 3,
      name: 'Gomaya',
      sanskrit: 'गोमय',
      translation: 'Bovine Soil / Dung',
      element: 'Purification of the Earth',
      desc: 'A naturally antiseptic gift that plasters the threshold, purifies sacred grounds, and enriches crops with fertile vitality.',
    },
    {
      id: 4,
      name: 'Gomutra',
      sanskrit: 'गोमूत्र',
      translation: 'Alchemical Water',
      element: 'Vedic Healing & Prana',
      desc: 'Revered in classical Ayurveda as an elixir of medicinal vigor, dispelling bodily impurities and revitalizing inner fire.',
    },
  ]

  return (
    <div className="ox-mythos-kam-root th-ox-mythos-kamadhenu">
      <div className="ox-mythos-kam-container">
        <header className="ox-mythos-kam-header">
          <div className="ox-mythos-kam-eyebrow">
            <span className="ox-mythos-kam-mandala-dot" aria-hidden="true" />
            <span>Kshirasagara · Samudra Manthana · Vedic Purana</span>
            <span className="ox-mythos-kam-mandala-dot" aria-hidden="true" />
          </div>
          <h1 className="ox-mythos-kam-title">
            KAMADHENU <span className="ox-mythos-kam-title-highlight">· COW OF PLENTY</span>
          </h1>
          <p className="ox-mythos-kam-subtitle">
            Born of the cosmic churning of the Milk-Ocean when devas and asuras stirred the depths. Mother of all bovines and wish-granting sanctuary: her horns hold the sacred trinity, her four limbs are the Vedas, her heart is dharma, and from her flow the five holy nectars.
          </p>
        </header>

        <div className="ox-mythos-kam-stage">
          <div className="ox-mythos-kam-canvas-frame">
            <div className="ox-mythos-kam-svg-wrapper">
              <svg
                className="ox-mythos-kam-svg"
                viewBox="0 0 600 420"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label="Graceful white sacred Zebu cow Kamadhenu crowned in gold garlands, standing upon a giant floating lotus in the Milk Ocean"
              >
                <defs>
                  <linearGradient id="ox-mythos-kam-gold-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#fefcbf" />
                    <stop offset="50%" stopColor="#d4af37" />
                    <stop offset="100%" stopColor="#b7791f" />
                  </linearGradient>
                  <linearGradient id="ox-mythos-kam-body-grad" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#ffffff" />
                    <stop offset="60%" stopColor="#edf2f7" />
                    <stop offset="100%" stopColor="#cbd5e0" />
                  </linearGradient>
                  <radialGradient id="ox-mythos-kam-aura" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#fefcbf" stopOpacity="0.7" />
                    <stop offset="50%" stopColor="#d97706" stopOpacity="0.2" />
                    <stop offset="100%" stopColor="#d97706" stopOpacity="0" />
                  </radialGradient>
                </defs>

                <g className="ox-mythos-kam-ocean-wave" opacity="0.6">
                  <path
                    d="M 20 380 Q 90 365 160 380 T 300 380 T 440 380 T 580 380 L 590 415 L 10 415 Z"
                    fill="#102a33"
                  />
                  <path
                    d="M 40 390 Q 110 375 180 390 T 320 390 T 460 390 T 600 390 L 600 415 L 20 415 Z"
                    fill="#153e4d"
                  />
                </g>

                <g id="ox-mythos-kam-lotus">
                  <path
                    d="M 120 370 C 180 395, 420 395, 480 370 C 440 405, 160 405, 120 370 Z"
                    fill="url(#ox-mythos-kam-gold-grad)"
                  />
                  <path d="M 140 375 Q 180 355 220 375" stroke="#c53030" strokeWidth="2" fill="none" />
                  <path d="M 220 375 Q 260 355 300 375" stroke="#c53030" strokeWidth="2" fill="none" />
                  <path d="M 300 375 Q 340 355 380 375" stroke="#c53030" strokeWidth="2" fill="none" />
                  <path d="M 380 375 Q 420 355 460 375" stroke="#c53030" strokeWidth="2" fill="none" />
                </g>

                <circle cx="395" cy="115" r="60" fill="url(#ox-mythos-kam-aura)" />

                <g>
                  <path
                    d="M 345 365 L 358 365 L 362 295 L 375 260 L 360 255 L 342 300 Z"
                    fill="#cbd5e0"
                  />
                  <polygon points="342,365 360,365 358,356 342,356" fill="#c53030" />

                  <path
                    d="M 240 365 L 252 365 L 258 295 L 265 245 L 248 245 L 232 290 Z"
                    fill="#cbd5e0"
                  />
                  <polygon points="238,365 254,365 252,356 238,356" fill="#c53030" />
                </g>

                <g id="ox-mythos-kam-cow-body">
                  <path
                    d="M 190 200
                       C 200 185, 230 180, 265 182
                       C 295 184, 315 170, 335 142
                       C 345 130, 358 132, 368 145
                       C 385 148, 410 162, 425 178
                       C 440 195, 455 212, 448 225
                       C 440 234, 425 232, 412 222
                       C 400 240, 380 262, 355 272
                       C 328 282, 288 285, 252 280
                       C 220 275, 200 265, 185 245
                       C 172 228, 178 210, 190 200
                       Z"
                    fill="url(#ox-mythos-kam-body-grad)"
                    stroke="#d4af37"
                    strokeWidth="1.5"
                  />

                  <circle cx="348" cy="140" r="4" fill="#c53030" />

                  <path
                    d="M 338 265
                       C 342 295, 338 330, 336 365
                       L 322 365
                       C 320 325, 324 295, 330 265
                       Z"
                    fill="url(#ox-mythos-kam-body-grad)"
                    stroke="#d4af37"
                    strokeWidth="1.5"
                  />
                  <polygon points="320,365 338,365 336,356 320,356" fill="#c53030" />

                  <path
                    d="M 225 262
                       C 215 290, 205 325, 200 365
                       L 186 365
                       C 188 328, 198 290, 210 258
                       Z"
                    fill="url(#ox-mythos-kam-body-grad)"
                    stroke="#d4af37"
                    strokeWidth="1.5"
                  />
                  <polygon points="184,365 202,365 200,356 184,356" fill="#c53030" />

                  <path
                    d="M 368 145
                       C 385 148, 410 162, 425 178
                       C 440 195, 455 212, 448 225
                       C 438 235, 415 228, 405 212
                       C 392 195, 380 170, 368 145
                       Z"
                    fill="#ffffff"
                    stroke="#d4af37"
                    strokeWidth="1.5"
                  />

                  <circle cx="420" cy="184" r="3.5" fill="#141a1f" />
                  <circle cx="421" cy="183" r="1" fill="#ffffff" />
                  <circle cx="432" cy="174" r="2.5" fill="#c53030" />

                  <g id="ox-mythos-kam-dewlap">
                    <path
                      d="M 405 212
                         C 395 235, 375 255, 355 268
                         C 368 250, 385 230, 395 215
                         Z"
                      fill="#edf2f7"
                      stroke="#d4af37"
                      strokeWidth="1"
                    />
                  </g>

                  <g className="ox-mythos-kam-bell-swing">
                    <path
                      d="M 408 190 Q 380 230 362 255"
                      stroke="#d97706"
                      strokeWidth="2.5"
                      strokeDasharray="4,3"
                      fill="none"
                    />
                    <circle cx="375" cy="242" r="5" fill="url(#ox-mythos-kam-gold-grad)" stroke="#c53030" strokeWidth="1" />
                  </g>

                  <g id="ox-mythos-kam-tail">
                    <path
                      d="M 190 202
                         C 178 225, 175 265, 178 305
                         C 180 325, 176 345, 172 358"
                      stroke="#d4af37"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <path
                      d="M 172 354
                         C 166 364, 164 376, 170 380
                         C 176 378, 178 368, 174 356
                         Z"
                      fill="url(#ox-mythos-kam-gold-grad)"
                    />
                  </g>
                </g>

                <g id="ox-mythos-kam-calf">
                  <path
                    d="M 235 295
                       C 245 285, 265 285, 280 288
                       C 290 282, 300 285, 308 295
                       C 315 305, 318 318, 312 325
                       C 305 330, 290 335, 275 338
                       C 255 340, 240 335, 230 320
                       Z"
                    fill="#edf2f7"
                    stroke="#d4af37"
                    strokeWidth="1"
                  />
                  <line x1="285" y1="335" x2="285" y2="365" stroke="#edf2f7" strokeWidth="3" />
                  <line x1="245" y1="330" x2="245" y2="365" stroke="#edf2f7" strokeWidth="3" />
                  <polygon points="282,365 288,365 287,360 283,360" fill="#c53030" />
                  <polygon points="242,365 248,365 247,360 243,360" fill="#c53030" />
                  <circle cx="304" cy="298" r="2" fill="#141a1f" />
                </g>

                <g id="ox-mythos-kam-horns">
                  <path
                    d="M 388 148
                       C 410 130, 428 100, 424 65
                       C 420 50, 412 45, 408 48
                       C 406 55, 412 85, 378 138
                       Z"
                    fill="url(#ox-mythos-kam-gold-grad)"
                    stroke="#b7791f"
                    strokeWidth="1"
                  />
                  <path
                    d="M 374 142
                       C 365 118, 355 90, 342 70
                       C 338 58, 330 52, 326 56
                       C 324 64, 332 95, 364 138
                       Z"
                    fill="url(#ox-mythos-kam-gold-grad)"
                    stroke="#b7791f"
                    strokeWidth="1"
                  />
                  <path d="M 380 95 Q 395 105 410 95" stroke="#c53030" strokeWidth="2.5" fill="none" />
                </g>
              </svg>
            </div>
          </div>

          <aside className="ox-mythos-kam-aside">
            <div className="ox-mythos-kam-card">
              <h2 className="ox-mythos-kam-card-title">
                <span>PANCHAGAVYA · FIVE NECTARS</span>
                <span>0{offering + 1} / 05</span>
              </h2>
              <div className="ox-mythos-kam-offering-selector" role="tablist">
                {offerings.map((o) => (
                  <button
                    key={o.id}
                    className={`ox-mythos-kam-offering-btn ${offering === o.id ? 'is-active' : ''}`}
                    onClick={() => setOffering(o.id)}
                    role="tab"
                    aria-selected={offering === o.id}
                  >
                    <span className="ox-mythos-kam-offering-btn-name">{o.name} ({o.sanskrit})</span>
                    <span className="ox-mythos-kam-offering-btn-trans">{o.translation}</span>
                  </button>
                ))}
              </div>
              <div className="ox-mythos-kam-offering-panel">
                <div className="ox-mythos-kam-offering-header">
                  <span>{offerings[offering].element}</span>
                </div>
                <p className="ox-mythos-kam-offering-desc">{offerings[offering].desc}</p>
              </div>
            </div>

            <div className="ox-mythos-kam-card">
              <h3 className="ox-mythos-kam-card-title">VEDIC SANCTUARY</h3>
              <div className="ox-mythos-kam-mandala-grid">
                <div className="ox-mythos-kam-stat">
                  <span className="ox-mythos-kam-stat-val">4</span>
                  <span className="ox-mythos-kam-stat-lbl">Veda Legs</span>
                </div>
                <div className="ox-mythos-kam-stat">
                  <span className="ox-mythos-kam-stat-val">3</span>
                  <span className="ox-mythos-kam-stat-lbl">Trinity Horns</span>
                </div>
                <div className="ox-mythos-kam-stat">
                  <span className="ox-mythos-kam-stat-val">∞</span>
                  <span className="ox-mythos-kam-stat-lbl">Desires Granted</span>
                </div>
              </div>
            </div>
          </aside>
        </div>

        <section className="ox-mythos-kam-scripture">
          <article className="ox-mythos-kam-scripture-card">
            <h3>I. Churning the Milk-Ocean</h3>
            <p>
              When Mount Mandara was used as the churning rod and the serpent Vasuki as the cord, the ocean yielded fourteen divine treasures. Foremost among them arose Surabhi, shining like the white snows of the Himalayas, who was entrusted to the seven holy rishis.
            </p>
          </article>
          <article className="ox-mythos-kam-scripture-card">
            <h3>II. Anatomy of the Cosmos</h3>
            <p>
              Vedic commentators declare that all deities reside within the bovine frame: Brahma in her horns, Vishnu in her throat, Shiva in her forehead, Agni in her mouth, the sun and moon in her eyes, and the Himalaya mountains in her bones.
            </p>
          </article>
          <article className="ox-mythos-kam-scripture-card">
            <h3>III. The Unfailing Hearth</h3>
            <p>
              When Sage Vashistha hosted royal armies in the forest, Kamadhenu spontaneously yielded mountains of savory grains, spiced milk, and jewel-bright offerings. The bovine body remains the timeless symbol of selfless abundance that asks only for grass and gives life to all.
            </p>
          </article>
        </section>

        <footer className="ox-mythos-kam-footer">
          <div className="ox-mythos-kam-plaque" aria-label="Set signature: SET XXI · DESIGNED BY GEMINI 3.8 FLASH">
            <svg className="ox-mythos-kam-plaque-lotus" viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
              <path d="M12 2 C10 7, 6 10, 6 15 C6 18.3, 8.7 21, 12 21 C15.3 21, 18 18.3, 18 15 C18 10, 14 7, 12 2 Z" />
            </svg>
            <span className="ox-mythos-kam-sig">SET XXI · DESIGNED BY GEMINI 3.8 FLASH</span>
          </div>
        </footer>
      </div>
    </div>
  )
}
