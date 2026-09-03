import { useState } from 'react'
import { motion } from 'framer-motion'
import './gugalanna.css'

export default function Gugalanna() {
  const [snort, setSnort] = useState(1)
  const [tremor, setTremor] = useState(false)

  const snorts = [
    {
      id: 0,
      label: 'First Snort',
      title: 'The Great Chasm',
      depth: 'Depth: 100 Men Slain · Euphrates -1 Cubit',
      desc: 'At his very first bellowing snort, a chasm opened in the soil of Uruk into which fell a hundred warriors. The foundations of the clay ramparts shuddered.',
    },
    {
      id: 1,
      label: 'Second Snort',
      title: 'The Abyss of Two Hundred',
      depth: 'Depth: 200 Men Slain · Euphrates -3 Cubits',
      desc: 'With his second roar, another fissure tore through the market square, swallowing two hundred men of Uruk into the underworld silt.',
    },
    {
      id: 2,
      label: 'Third Snort',
      title: 'Enkidu’s Grapple',
      depth: 'Seismic Climax · Horns Seized by Enkidu',
      desc: 'With his third snort the celestial bull charged, spitting foam into Enkidu’s face. Enkidu sidestepped, gripped the thick horns, and planted his foot upon the thick rump.',
    },
  ]

  const handleSnortSelect = (index) => {
    setSnort(index)
    setTremor(true)
    setTimeout(() => setTremor(false), 500)
  }

  return (
    <div className="ox-mythos-gug-root th-ox-mythos-gugalanna">
      <div className="ox-mythos-gug-container">
        <header className="ox-mythos-gug-header">
          <div className="ox-mythos-gug-eyebrow">
            <span className="ox-mythos-gug-cunei-mark" aria-hidden="true">𒀭 𒄞 𒀭 𒈾</span>
            <span>Uruk · Epic of Gilgamesh · Tablet VI</span>
          </div>
          <h1 className="ox-mythos-gug-title">
            GUGALANNA <span className="ox-mythos-gug-title-highlight">· THE BULL OF HEAVEN</span>
          </h1>
          <p className="ox-mythos-gug-subtitle">
            Demanded of Anu by the goddess Inanna in her wounded wrath. Leashed with a halter of stars and led down to the clay plains of Uruk, his ferocious snorts tore open seismic chasms in the earth, dried the marshes, and drank the Euphrates down to mud.
          </p>
        </header>

        <div className="ox-mythos-gug-stage">
          <div className={`ox-mythos-gug-canvas-frame ${tremor ? 'is-tremoring' : ''}`}>
            <div className="ox-mythos-gug-svg-wrapper">
              <svg
                className="ox-mythos-gug-svg"
                viewBox="0 0 600 420"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label="Ferocious horned Mesopotamian Bull of Heaven tearing through cracked earth with dust exploding from his nostrils"
              >
                <defs>
                  <linearGradient id="ox-mythos-gug-copper-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#fed7aa" />
                    <stop offset="40%" stopColor="#dd6b20" />
                    <stop offset="100%" stopColor="#7b341e" />
                  </linearGradient>
                  <linearGradient id="ox-mythos-gug-body-grad" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#442314" />
                    <stop offset="40%" stopColor="#2b150c" />
                    <stop offset="100%" stopColor="#180b06" />
                  </linearGradient>
                  <radialGradient id="ox-mythos-gug-dust-glow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#fbd38d" stopOpacity="0.8" />
                    <stop offset="50%" stopColor="#dd6b20" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#dd6b20" stopOpacity="0" />
                  </radialGradient>
                </defs>

                <path
                  d="M 30 365 L 570 365 L 590 410 L 10 410 Z"
                  fill="#1a0d07"
                  stroke="#4d2b1a"
                  strokeWidth="2"
                />

                <g id="ox-mythos-gug-fissures">
                  <path
                    d="M 280 365 L 295 385 L 285 405 L 305 410"
                    stroke="#dd6b20"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M 360 365 L 380 390 L 370 410"
                    stroke="#dd6b20"
                    strokeWidth={snort >= 1 ? 3 : 1.5}
                    strokeLinecap="round"
                  />
                  {snort >= 1 && (
                    <path
                      d="M 420 365 L 435 380 L 415 395 L 440 410"
                      stroke="#f6ad55"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />
                  )}
                  {snort === 2 && (
                    <>
                      <path
                        d="M 190 365 L 210 388 L 195 408"
                        stroke="#f6ad55"
                        strokeWidth="3"
                        strokeLinecap="round"
                      />
                      <path
                        d="M 480 365 L 505 385 L 495 410"
                        stroke="#dd6b20"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                      />
                    </>
                  )}
                </g>

                <g className="ox-mythos-gug-snort-dust">
                  <ellipse cx="485" cy="225" rx="35" ry="18" fill="url(#ox-mythos-gug-dust-glow)" />
                  <ellipse cx="510" cy="215" rx="20" ry="12" fill="url(#ox-mythos-gug-dust-glow)" />
                  <circle cx="530" cy="210" r="4" fill="#fbd38d" />
                  <circle cx="515" cy="235" r="3" fill="#fbd38d" />
                </g>

                <g>
                  <path
                    d="M 320 340 L 305 342 L 315 280 L 335 255 L 345 260 Z"
                    fill="#1e0e07"
                  />
                  <polygon points="303,342 322,340 320,332 303,334" fill="#dd6b20" />

                  <path
                    d="M 160 330 L 148 332 L 158 275 L 180 240 L 195 245 Z"
                    fill="#1e0e07"
                  />
                  <polygon points="146,332 162,330 160,322 146,324" fill="#dd6b20" />
                </g>

                <g id="ox-mythos-gug-bull-body">
                  <path
                    d="M 180 215
                       C 185 190, 215 180, 255 182
                       C 290 184, 320 170, 350 150
                       C 375 135, 400 130, 425 142
                       C 445 152, 465 175, 475 200
                       C 480 212, 470 230, 452 235
                       C 438 238, 420 226, 408 242
                       C 395 260, 380 275, 350 282
                       C 315 288, 275 285, 235 278
                       C 205 272, 185 255, 175 235
                       Z"
                    fill="url(#ox-mythos-gug-body-grad)"
                    stroke="#4d2b1a"
                    strokeWidth="2.5"
                  />

                  <path
                    d="M 370 260
                       C 375 290, 378 325, 385 365
                       L 368 365
                       C 362 325, 358 290, 352 262
                       Z"
                    fill="url(#ox-mythos-gug-body-grad)"
                    stroke="#4d2b1a"
                    strokeWidth="2"
                  />
                  <polygon points="366,365 387,365 385,355 366,355" fill="#dd6b20" />

                  <path
                    d="M 215 260
                       C 205 290, 198 325, 195 365
                       L 178 365
                       C 182 325, 192 290, 202 258
                       Z"
                    fill="url(#ox-mythos-gug-body-grad)"
                    stroke="#4d2b1a"
                    strokeWidth="2"
                  />
                  <polygon points="176,365 197,365 195,355 176,355" fill="#dd6b20" />

                  <path
                    d="M 425 142
                       C 445 152, 465 175, 475 200
                       C 482 215, 468 232, 448 232
                       C 430 232, 412 215, 402 195
                       C 392 175, 405 148, 425 142
                       Z"
                    fill="#2a140b"
                    stroke="#663a24"
                    strokeWidth="2"
                  />

                  <path
                    d="M 458 208 L 472 218 L 452 224 Z"
                    fill="#180b06"
                    stroke="#dd6b20"
                    strokeWidth="1"
                  />

                  <circle cx="438" cy="178" r="4" fill="#fbd38d" stroke="#dd6b20" strokeWidth="1" />

                  <g id="ox-mythos-gug-braids">
                    <path d="M 410 195 Q 402 210 398 228" stroke="#dd6b20" strokeWidth="2.5" fill="none" />
                    <path d="M 395 210 Q 388 225 385 245" stroke="#dd6b20" strokeWidth="2.5" fill="none" />
                    <path d="M 380 225 Q 372 242 370 260" stroke="#dd6b20" strokeWidth="2.5" fill="none" />
                    <circle cx="400" cy="226" r="3" fill="#f6ad55" />
                    <circle cx="386" cy="242" r="3" fill="#f6ad55" />
                    <circle cx="372" cy="258" r="3" fill="#f6ad55" />
                  </g>

                  <g id="ox-mythos-gug-tail">
                    <path
                      d="M 180 215
                         C 160 195, 145 165, 140 135
                         C 138 120, 146 110, 155 118
                         C 162 125, 158 140, 150 152"
                      stroke="#dd6b20"
                      strokeWidth="3.5"
                      fill="none"
                      strokeLinecap="round"
                    />
                    <path
                      d="M 152 115
                         C 165 105, 175 110, 172 125
                         C 168 135, 155 130, 152 115
                         Z"
                      fill="#f6ad55"
                    />
                  </g>
                </g>

                <g id="ox-mythos-gug-horns">
                  <path
                    d="M 432 145
                       C 455 125, 485 105, 505 82
                       C 515 70, 510 60, 500 62
                       C 485 66, 465 95, 420 135
                       Z"
                    fill="url(#ox-mythos-gug-copper-grad)"
                    stroke="#dd6b20"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M 418 140
                       C 435 118, 460 92, 475 68
                       C 482 58, 476 50, 468 52
                       C 455 58, 435 85, 405 130
                       Z"
                    fill="url(#ox-mythos-gug-copper-grad)"
                    stroke="#dd6b20"
                    strokeWidth="1.5"
                  />
                  <line x1="440" y1="125" x2="455" y2="135" stroke="#2b6cb0" strokeWidth="2" />
                  <line x1="460" y1="105" x2="475" y2="115" stroke="#2b6cb0" strokeWidth="2" />
                  <line x1="480" y1="85" x2="495" y2="95" stroke="#2b6cb0" strokeWidth="2" />
                </g>
              </svg>
            </div>
          </div>

          <aside className="ox-mythos-gug-aside">
            <div className="ox-mythos-gug-card">
              <h2 className="ox-mythos-gug-card-title">
                <span>BELLOWS OF CATACLYSM</span>
                <span>TABLET VI</span>
              </h2>
              <div className="ox-mythos-gug-snort-selector" role="tablist">
                {snorts.map((s) => (
                  <button
                    key={s.id}
                    className={`ox-mythos-gug-snort-btn ${snort === s.id ? 'is-active' : ''}`}
                    onClick={() => handleSnortSelect(s.id)}
                    role="tab"
                    aria-selected={snort === s.id}
                  >
                    <span className="ox-mythos-gug-snort-tag">0{s.id + 1}</span>
                    <span className="ox-mythos-gug-snort-label">{s.label}</span>
                  </button>
                ))}
              </div>
              <div className="ox-mythos-gug-fissure-panel">
                <span className="ox-mythos-gug-fissure-depth">{snorts[snort].depth}</span>
                <p className="ox-mythos-gug-fissure-desc">{snorts[snort].desc}</p>
              </div>
            </div>

            <div className="ox-mythos-gug-card">
              <h3 className="ox-mythos-gug-card-title">CUNEIFORM SEISMOGRAPH</h3>
              <div className="ox-mythos-gug-tablet-grid">
                <div className="ox-mythos-gug-stat">
                  <span className="ox-mythos-gug-stat-val">300</span>
                  <span className="ox-mythos-gug-stat-lbl">Men Swallowed</span>
                </div>
                <div className="ox-mythos-gug-stat">
                  <span className="ox-mythos-gug-stat-val">7 yr</span>
                  <span className="ox-mythos-gug-stat-lbl">Famine Sown</span>
                </div>
                <div className="ox-mythos-gug-stat">
                  <span className="ox-mythos-gug-stat-val">30 m</span>
                  <span className="ox-mythos-gug-stat-lbl">Riverbed Dry</span>
                </div>
              </div>
            </div>
          </aside>
        </div>

        <section className="ox-mythos-gug-epic">
          <article className="ox-mythos-gug-epic-card">
            <h3>I. The Wrath of Inanna</h3>
            <p>
              Spurned by King Gilgamesh, Inanna mounted to heaven before her father Anu, weeping and threatening to break open the Netherworld gates unless the Bull of Heaven was unleashed to consume the living and crush Uruk.
            </p>
          </article>
          <article className="ox-mythos-gug-epic-card">
            <h3>II. Seismic Desiccation</h3>
            <p>
              When Gugalanna touched the mortal soil, the marshes withered in a day. With one dip of his horned muzzle, the Euphrates shrank; with his heavy hooves, he cracked the bedrock of Mesopotamia into yawning ravines.
            </p>
          </article>
          <article className="ox-mythos-gug-epic-card">
            <h3>III. The Fall of the Titan</h3>
            <p>
              Enkidu circled behind the roaring monster, seizing its heavy tail and thick horns while Gilgamesh drove his bronze blade into the nape of the neck. They butchered the celestial beast and offered its heart to Shamash the Sun.
            </p>
          </article>
        </section>

        <footer className="ox-mythos-gug-footer">
          <div className="ox-mythos-gug-seal" aria-label="Set signature: SET XXI · DESIGNED BY GEMINI 3.8 FLASH">
            <span className="ox-mythos-gug-seal-mark" aria-hidden="true">𒀭</span>
            <span className="ox-mythos-gug-sig">SET XXI · DESIGNED BY GEMINI 3.8 FLASH</span>
          </div>
        </footer>
      </div>
    </div>
  )
}
