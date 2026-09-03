import { useState } from 'react'
import { motion } from 'framer-motion'
import './audhumbla.css'

export default function Audhumbla() {
  const [day, setDay] = useState(2)

  const days = [
    {
      id: 0,
      name: 'Day I',
      tag: 'First Evening',
      reveal: 'Man’s Hair',
      desc: 'As the great cow licked the bitter rime-stone by twilight, there sprang from the salt on the first evening a man’s hair, gold as winter reed.',
    },
    {
      id: 1,
      name: 'Day II',
      tag: 'Second Dawn',
      reveal: 'A Man’s Head',
      desc: 'On the second day her warm tongue thawed deeper through the rime, and the head and brow of a man emerged, his cold eyes beholding the void.',
    },
    {
      id: 2,
      name: 'Day III',
      tag: 'Third Midday',
      reveal: 'Búri Progenitor',
      desc: 'On the third day the whole man strode forth from the broken stone: Búri, fair of stature, mighty and strong, father of Borr, ancestor of Odin.',
    },
  ]

  return (
    <div className="ox-mythos-aud-root th-ox-mythos-audhumbla">
      <div className="ox-mythos-aud-container">
        <header className="ox-mythos-aud-header">
          <div className="ox-mythos-aud-eyebrow">
            <span className="ox-mythos-aud-runic" aria-hidden="true">ᚢ ᚱ ᚢ ᛉ</span>
            <span>Ginnungagap · Prose Edda · Gylfaginning</span>
          </div>
          <h1 className="ox-mythos-aud-title">
            AUÐUMBLA <span className="ox-mythos-aud-title-highlight">· THE RIME-COW</span>
          </h1>
          <p className="ox-mythos-aud-subtitle">
            Before earth, sea, or overarching sky was shaped, when venom-frost from Élivágar met the warm sparks of Muspelheim, the primeval cow Auðumbla calved into being. From her teats ran four rivers of milk that nourished the giant Ymir; by her warm salt-tongue, she licked the progenitor of the gods into flesh.
          </p>
        </header>

        <div className="ox-mythos-aud-stage">
          <div className="ox-mythos-aud-canvas-frame">
            <div className="ox-mythos-aud-chasm-grid" aria-hidden="true" />
            <div className="ox-mythos-aud-svg-wrapper">
              <svg
                className="ox-mythos-aud-svg"
                viewBox="0 0 600 420"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label="Auðumbla the colossal Norse rime-cow licking the salt-stone, four cosmic milk rivers cascading from her udder"
              >
                <defs>
                  <linearGradient id="ox-mythos-aud-ice-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#ffffff" />
                    <stop offset="40%" stopColor="#c5e4f3" />
                    <stop offset="100%" stopColor="#38b2ac" />
                  </linearGradient>
                  <linearGradient id="ox-mythos-aud-body-grad" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#1a2d42" />
                    <stop offset="40%" stopColor="#0f1e2e" />
                    <stop offset="100%" stopColor="#08111a" />
                  </linearGradient>
                  <linearGradient id="ox-mythos-aud-stone-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#2c3e50" />
                    <stop offset="50%" stopColor="#1a2530" />
                    <stop offset="100%" stopColor="#0d151c" />
                  </linearGradient>
                  <radialGradient id="ox-mythos-aud-breath-glow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#ffffff" stopOpacity="0.7" />
                    <stop offset="60%" stopColor="#4fd1c5" stopOpacity="0.25" />
                    <stop offset="100%" stopColor="#4fd1c5" stopOpacity="0" />
                  </radialGradient>
                </defs>

                <path
                  d="M 40 370 Q 180 365 300 370 T 560 365 L 580 410 L 20 410 Z"
                  fill="#08101a"
                  stroke="#1a2c3f"
                  strokeWidth="1.5"
                />
                <line x1="60" y1="375" x2="540" y2="375" stroke="#38b2ac" strokeWidth="1" strokeOpacity="0.3" />

                <g id="ox-mythos-aud-rimestone">
                  <path
                    d="M 470 365 L 485 220 L 530 205 L 555 240 L 545 365 Z"
                    fill="url(#ox-mythos-aud-stone-grad)"
                    stroke="#38b2ac"
                    strokeWidth="1.5"
                  />
                  <polygon points="485,220 530,205 520,240 480,250" fill="#243444" opacity="0.6" />
                  
                  {day >= 0 && (
                    <g opacity={day === 0 ? 0.9 : 0.6}>
                      <path d="M 498 245 Q 508 235 518 248 Q 506 255 498 245 Z" fill="#d4af37" />
                      <path d="M 502 248 Q 512 242 516 254" stroke="#fcedaa" strokeWidth="1" />
                    </g>
                  )}

                  {day >= 1 && (
                    <g opacity={day === 1 ? 0.95 : 0.7}>
                      <circle cx="510" cy="265" r="14" fill="#cbd5e0" stroke="#38b2ac" strokeWidth="1" />
                      <circle cx="505" cy="262" r="1.5" fill="#050a10" />
                      <circle cx="515" cy="262" r="1.5" fill="#050a10" />
                      <path d="M 506 272 Q 510 275 514 272" stroke="#38b2ac" strokeWidth="1" fill="none" />
                    </g>
                  )}

                  {day === 2 && (
                    <g>
                      <path
                        d="M 495 280 L 525 280 L 532 350 L 488 350 Z"
                        fill="#cbd5e0"
                        stroke="#4fd1c5"
                        strokeWidth="1.5"
                      />
                      <line x1="500" y1="290" x2="520" y2="290" stroke="#38b2ac" strokeWidth="2" />
                      <line x1="510" y1="280" x2="510" y2="340" stroke="#38b2ac" strokeWidth="1.5" />
                    </g>
                  )}
                </g>

                <g className="ox-mythos-aud-breath-cloud">
                  <ellipse cx="445" cy="215" rx="35" ry="18" fill="url(#ox-mythos-aud-breath-glow)" />
                  <ellipse cx="465" cy="205" rx="22" ry="12" fill="url(#ox-mythos-aud-breath-glow)" />
                </g>

                <g>
                  <path
                    d="M 330 365 L 342 365 L 348 290 L 362 255 L 346 250 L 328 295 Z"
                    fill="#0a1420"
                  />
                  <polygon points="328,365 344,365 342,358 328,358" fill="#38b2ac" />

                  <path
                    d="M 225 365 L 238 365 L 244 290 L 252 240 L 232 240 L 218 285 Z"
                    fill="#0a1420"
                  />
                  <polygon points="224,365 240,365 238,358 224,358" fill="#38b2ac" />
                </g>

                <g id="ox-mythos-aud-cow-body">
                  <path
                    d="M 165 195
                       C 175 180, 205 170, 240 172
                       C 275 174, 305 168, 330 152
                       C 348 140, 368 135, 388 136
                       C 405 138, 420 154, 432 172
                       C 445 192, 458 210, 450 224
                       C 442 232, 425 230, 412 222
                       C 400 240, 380 265, 355 278
                       C 330 290, 290 292, 250 286
                       C 215 280, 195 272, 178 255
                       C 160 235, 155 212, 165 195
                       Z"
                    fill="url(#ox-mythos-aud-body-grad)"
                    stroke="#1e344a"
                    strokeWidth="2"
                  />

                  <path
                    d="M 325 265
                       C 328 295, 322 330, 320 365
                       L 305 365
                       C 304 325, 308 295, 316 265
                       Z"
                    fill="url(#ox-mythos-aud-body-grad)"
                    stroke="#1e344a"
                    strokeWidth="1.5"
                  />
                  <polygon points="304,365 322,365 320,356 304,356" fill="#4fd1c5" />

                  <path
                    d="M 210 265
                       C 200 292, 188 325, 185 365
                       L 170 365
                       C 172 328, 184 290, 195 258
                       Z"
                    fill="url(#ox-mythos-aud-body-grad)"
                    stroke="#1e344a"
                    strokeWidth="1.5"
                  />
                  <polygon points="168,365 187,365 185,356 168,356" fill="#4fd1c5" />

                  <path
                    d="M 388 136
                       C 405 138, 420 154, 432 172
                       C 445 192, 458 210, 450 224
                       C 438 234, 415 228, 405 214
                       C 392 195, 385 168, 388 136
                       Z"
                    fill="#102235"
                    stroke="#23425f"
                    strokeWidth="1.5"
                  />
                  <circle cx="425" cy="180" r="3" fill="#4fd1c5" />

                  <path
                    d="M 445 220 C 455 224, 465 228, 478 226 C 472 232, 458 232, 442 226 Z"
                    fill="#e2f1f8"
                  />

                  <path
                    d="M 165 200
                       C 152 225, 148 265, 152 305
                       C 154 325, 150 345, 146 358"
                    stroke="#15273b"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M 146 354
                       C 140 364, 138 376, 144 380
                       C 150 378, 152 368, 148 356
                       Z"
                    fill="#38b2ac"
                  />

                  <g id="ox-mythos-aud-udder">
                    <path
                      d="M 245 285 Q 262 315 282 288 Z"
                      fill="#1e344a"
                      stroke="#4fd1c5"
                      strokeWidth="1.5"
                    />
                    
                    <line x1="250" y1="305" x2="250" y2="370" stroke="#e2f1f8" strokeWidth="2.5" className="ox-mythos-aud-milk-river" />
                    <line x1="258" y1="310" x2="260" y2="370" stroke="#e2f1f8" strokeWidth="2" className="ox-mythos-aud-milk-river" />
                    <line x1="268" y1="310" x2="272" y2="370" stroke="#e2f1f8" strokeWidth="2" className="ox-mythos-aud-milk-river" />
                    <line x1="276" y1="305" x2="284" y2="370" stroke="#e2f1f8" strokeWidth="2.5" className="ox-mythos-aud-milk-river" />
                  </g>
                </g>

                <g id="ox-mythos-aud-horns">
                  <path
                    d="M 400 145
                       C 425 125, 450 90, 442 55
                       C 438 40, 428 35, 424 38
                       C 422 45, 430 75, 390 135
                       Z"
                    fill="url(#ox-mythos-aud-ice-grad)"
                    stroke="#4fd1c5"
                    strokeWidth="1"
                  />
                  <path
                    d="M 382 140
                       C 370 110, 360 80, 345 58
                       C 340 45, 330 40, 326 44
                       C 324 52, 335 85, 372 135
                       Z"
                    fill="url(#ox-mythos-aud-ice-grad)"
                    stroke="#4fd1c5"
                    strokeWidth="1"
                  />
                </g>
              </svg>
            </div>
          </div>

          <aside className="ox-mythos-aud-aside">
            <div className="ox-mythos-aud-card">
              <div className="ox-mythos-aud-card-header">
                <h2 className="ox-mythos-aud-card-title">SÆTT STEINR · RIME REVEAL</h2>
                <span className="ox-mythos-aud-runic" aria-hidden="true">ᛒ ᚢ ᚱ ᛁ</span>
              </div>
              <div className="ox-mythos-aud-day-selector" role="tablist">
                {days.map((d) => (
                  <button
                    key={d.id}
                    className={`ox-mythos-aud-day-btn ${day === d.id ? 'is-active' : ''}`}
                    onClick={() => setDay(d.id)}
                    role="tab"
                    aria-selected={day === d.id}
                  >
                    <span className="ox-mythos-aud-day-tag">{d.tag}</span>
                    <span className="ox-mythos-aud-day-name">{d.name}</span>
                  </button>
                ))}
              </div>
              <div className="ox-mythos-aud-reveal-panel">
                <span className="ox-mythos-aud-reveal-tag">Unveiled: {days[day].reveal}</span>
                <p className="ox-mythos-aud-reveal-desc">{days[day].desc}</p>
              </div>
            </div>

            <div className="ox-mythos-aud-card">
              <h3 className="ox-mythos-aud-card-title">COSMIC VERNACULAR</h3>
              <div className="ox-mythos-aud-metric-grid">
                <div className="ox-mythos-aud-metric">
                  <span className="ox-mythos-aud-metric-val">4</span>
                  <span className="ox-mythos-aud-metric-lbl">Milk Rivers</span>
                </div>
                <div className="ox-mythos-aud-metric">
                  <span className="ox-mythos-aud-metric-val">3</span>
                  <span className="ox-mythos-aud-metric-lbl">Days of Licking</span>
                </div>
                <div className="ox-mythos-aud-metric">
                  <span className="ox-mythos-aud-metric-val">0</span>
                  <span className="ox-mythos-aud-metric-lbl">Prior Gods</span>
                </div>
              </div>
            </div>
          </aside>
        </div>

        <section className="ox-mythos-aud-chronicle">
          <article className="ox-mythos-aud-chronicle-card">
            <h3>I. The Thawing of Élivágar</h3>
            <p>
              The eleven venomous rivers flowed so far from Hvergelmir that their bitter yeast froze into rime. When south breezes from Muspelheim warmed the void, drops of thawed moisture formed the giant Ymir and the primordial cow Auðumbla.
            </p>
          </article>
          <article className="ox-mythos-aud-chronicle-card">
            <h3>II. Fjórar Mjólkár</h3>
            <p>
              From Auðumbla&apos;s udder flowed four roaring torrents of pure milk across the frost abyss, feeding the primeval giant as he slept. The bovine body served as the cosmic sustenance engine that powered the initial stirring of conscious life.
            </p>
          </article>
          <article className="ox-mythos-aud-chronicle-card">
            <h3>III. The Salt-Stone Genesis</h3>
            <p>
              Lacking grass or grain in the void of Ginnungagap, Auðumbla nourished herself by licking the salty frost-blocks. Through three consecutive days of warm bovine breath and tongue, she uncovered the ancestor Búri, father of Borr, grandfather of Odin, Vili, and Vé.
            </p>
          </article>
        </section>

        <footer className="ox-mythos-aud-footer">
          <div className="ox-mythos-aud-stone" aria-label="Set signature: SET XXI · DESIGNED BY GEMINI 3.8 FLASH">
            <span className="ox-mythos-aud-stone-rune" aria-hidden="true">ᛟ</span>
            <span className="ox-mythos-aud-sig">SET XXI · DESIGNED BY GEMINI 3.8 FLASH</span>
          </div>
        </footer>
      </div>
    </div>
  )
}
