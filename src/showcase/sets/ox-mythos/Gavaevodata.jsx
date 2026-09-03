import { useState } from 'react'
import { motion } from 'framer-motion'
import './gavaevodata.css'

export default function Gavaevodata() {
  const [trans, setTrans] = useState(0)

  const transmutations = [
    {
      id: 0,
      name: 'Fifty-Five Grains',
      realm: 'Marrow & Sinew',
      significance: 'Sprouted Cereals',
      desc: 'From the sacred bull’s marrow sprang fifty-five species of edible grains, foremost among them golden wheat, barley, sesame, and rye to sustain mortal life.',
    },
    {
      id: 1,
      name: 'Twelve Healing Herbs',
      realm: 'Flesh & Vital Fluids',
      significance: 'Medicinal Flora',
      desc: 'From his blood and flesh arose twelve species of restorative medicinal plants, including the immortal white Haoma, dispelling the hundred afflictions of mortal decay.',
    },
    {
      id: 2,
      name: 'The Herds of the Land',
      realm: 'Purified Lunar Seed',
      significance: 'Fauna of Ahura Mazda',
      desc: 'Carried to the lunar sphere by the angel Neryosang and purified in the moonlight, the cosmic seed gave birth to two hundred and eighty-two species of living beasts.',
    },
  ]

  return (
    <div className="ox-mythos-gav-root th-ox-mythos-gavaevodata">
      <div className="ox-mythos-gav-container">
        <header className="ox-mythos-gav-header">
          <div className="ox-mythos-gav-eyebrow">
            <span className="ox-mythos-gav-star-line" aria-hidden="true" />
            <span>Veh Daiti · Bundahishn · Zoroastrian Cosmology</span>
            <span className="ox-mythos-gav-star-line" aria-hidden="true" />
          </div>
          <h1 className="ox-mythos-gav-title">
            GAVAEVODATA <span className="ox-mythos-gav-title-highlight">· THE SOLE-CREATED</span>
          </h1>
          <p className="ox-mythos-gav-subtitle">
            The primeval white bovine created in Eranvej on the pleasant bank of the river Veh Daiti. Struck down in the first cosmic assault, his purified essence ascended into the sphere of the Moon. From his mortal frame germinated all edible grains, healing flora, and the warm-blooded herds of the earth.
          </p>
        </header>

        <div className="ox-mythos-gav-stage">
          <div className="ox-mythos-gav-canvas-frame">
            <div className="ox-mythos-gav-svg-wrapper">
              <svg
                className="ox-mythos-gav-svg"
                viewBox="0 0 600 420"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label="Luminous celestial bull Gavaevodata with botanical tendrils sprouting along his spine under the crescent moon"
              >
                <defs>
                  <linearGradient id="ox-mythos-gav-silver-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#ffffff" />
                    <stop offset="50%" stopColor="#cdd8e6" />
                    <stop offset="100%" stopColor="#7a93b2" />
                  </linearGradient>
                  <linearGradient id="ox-mythos-gav-body-grad" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#1e3252" />
                    <stop offset="40%" stopColor="#122036" />
                    <stop offset="100%" stopColor="#09111c" />
                  </linearGradient>
                  <radialGradient id="ox-mythos-gav-lunar-glow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#ffffff" stopOpacity="0.85" />
                    <stop offset="50%" stopColor="#7fc1ff" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#7fc1ff" stopOpacity="0" />
                  </radialGradient>
                </defs>

                <g className="ox-mythos-gav-lunar-orbit">
                  <circle cx="470" cy="140" r="45" stroke="#5fa8eb" strokeWidth="1" strokeDasharray="3,6" strokeOpacity="0.5" />
                  <circle cx="470" cy="140" r="70" stroke="#cdd8e6" strokeWidth="0.8" strokeDasharray="4,8" strokeOpacity="0.3" />
                </g>

                <g id="ox-mythos-gav-moon">
                  <circle cx="470" cy="140" r="30" fill="url(#ox-mythos-gav-lunar-glow)" />
                  <path
                    d="M 465 118
                       C 478 128, 478 152, 465 162
                       C 455 152, 455 128, 465 118
                       Z"
                    fill="#ffffff"
                  />
                </g>

                <g id="ox-mythos-gav-orbital-rings">
                  <ellipse cx="300" cy="375" rx="260" ry="25" stroke="#233759" strokeWidth="1.5" />
                  <ellipse cx="300" cy="375" rx="210" ry="18" stroke="#5fa8eb" strokeWidth="1" strokeOpacity="0.4" />
                </g>

                <g>
                  <path
                    d="M 335 365 L 348 365 L 352 295 L 365 260 L 348 255 L 332 300 Z"
                    fill="#0f1b2b"
                  />
                  <polygon points="332,365 348,365 346,358 332,358" fill="#5fa8eb" />

                  <path
                    d="M 230 365 L 242 365 L 248 295 L 255 245 L 235 245 L 222 290 Z"
                    fill="#0f1b2b"
                  />
                  <polygon points="228,365 243,365 241,358 228,358" fill="#5fa8eb" />
                </g>

                <g id="ox-mythos-gav-bull-body">
                  <path
                    d="M 180 190
                       C 190 178, 220 172, 250 174
                       C 280 176, 305 168, 330 152
                       C 345 142, 365 136, 385 138
                       C 402 140, 420 156, 432 172
                       C 445 190, 458 208, 450 220
                       C 442 228, 425 225, 412 216
                       C 400 234, 380 258, 355 268
                       C 330 278, 290 282, 255 278
                       C 220 274, 198 262, 182 245
                       C 170 228, 172 205, 180 190
                       Z"
                    fill="url(#ox-mythos-gav-body-grad)"
                    stroke="#5fa8eb"
                    strokeWidth="1.5"
                  />

                  <path
                    d="M 328 262
                       C 332 292, 326 328, 324 365
                       L 310 365
                       C 308 322, 312 292, 320 262
                       Z"
                    fill="url(#ox-mythos-gav-body-grad)"
                    stroke="#5fa8eb"
                    strokeWidth="1.5"
                  />
                  <polygon points="308,365 326,365 324,356 310,356" fill="#7fc1ff" />

                  <path
                    d="M 215 260
                       C 205 288, 195 322, 190 365
                       L 176 365
                       C 178 325, 188 288, 200 255
                       Z"
                    fill="url(#ox-mythos-gav-body-grad)"
                    stroke="#5fa8eb"
                    strokeWidth="1.5"
                  />
                  <polygon points="174,365 192,365 190,356 174,356" fill="#7fc1ff" />

                  <path
                    d="M 385 138
                       C 402 140, 420 156, 432 172
                       C 445 190, 458 208, 450 220
                       C 438 230, 415 224, 405 210
                       C 392 192, 385 168, 385 138
                       Z"
                    fill="#13243c"
                    stroke="#5fa8eb"
                    strokeWidth="1.5"
                  />

                  <circle cx="425" cy="178" r="3.5" fill="#ebb338" />
                  <circle cx="426" cy="177" r="1" fill="#ffffff" />

                  <g id="ox-mythos-gav-tail">
                    <path
                      d="M 180 192
                         C 168 215, 164 255, 168 295
                         C 170 315, 166 335, 162 348"
                      stroke="#5fa8eb"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <path
                      d="M 162 344
                         C 156 354, 154 366, 160 370
                         C 166 368, 168 358, 164 346
                         Z"
                      fill="#ebb338"
                    />
                  </g>
                </g>

                <g id="ox-mythos-gav-botanical" className="ox-mythos-gav-sprout-pulse">
                  <path d="M 230 172 Q 225 150 215 135" stroke="#3ba573" strokeWidth="2" fill="none" />
                  <ellipse cx="214" cy="133" rx="4" ry="7" fill={trans === 1 ? '#3ba573' : '#5fa8eb'} transform="rotate(-30 214 133)" />
                  <ellipse cx="225" cy="145" rx="3" ry="5" fill={trans === 1 ? '#3ba573' : '#5fa8eb'} transform="rotate(30 225 145)" />

                  <path d="M 270 175 Q 275 148 285 130" stroke="#ebb338" strokeWidth="2" fill="none" />
                  <ellipse cx="286" cy="128" rx="4" ry="8" fill={trans === 0 ? '#ebb338' : '#cdd8e6'} transform="rotate(20 286 128)" />
                  <ellipse cx="278" cy="140" rx="3.5" ry="6" fill={trans === 0 ? '#ebb338' : '#cdd8e6'} transform="rotate(-25 278 140)" />

                  <path d="M 315 162 Q 325 138 340 125" stroke="#3ba573" strokeWidth="2" fill="none" />
                  <ellipse cx="342" cy="123" rx="4" ry="7" fill={trans === 1 ? '#3ba573' : '#5fa8eb'} transform="rotate(35 342 123)" />

                  <circle cx="250" cy="210" r="3" fill="#ffffff" />
                  <circle cx="290" cy="205" r="3" fill="#ffffff" />
                  <circle cx="340" cy="195" r="3" fill="#ffffff" />
                  <line x1="250" y1="210" x2="290" y2="205" stroke="#7fc1ff" strokeWidth="1" strokeDasharray="2,3" />
                  <line x1="290" y1="205" x2="340" y2="195" stroke="#7fc1ff" strokeWidth="1" strokeDasharray="2,3" />
                </g>

                <g id="ox-mythos-gav-horns">
                  <path
                    d="M 405 140
                       C 425 120, 442 85, 438 52
                       C 434 40, 425 36, 420 40
                       C 418 48, 424 75, 395 130
                       Z"
                    fill="url(#ox-mythos-gav-silver-grad)"
                    stroke="#5fa8eb"
                    strokeWidth="1"
                  />
                  <path
                    d="M 388 135
                       C 380 110, 370 80, 355 60
                       C 350 48, 340 44, 336 48
                       C 334 56, 345 88, 376 132
                       Z"
                    fill="url(#ox-mythos-gav-silver-grad)"
                    stroke="#5fa8eb"
                    strokeWidth="1"
                  />
                </g>
              </svg>
            </div>
          </div>

          <aside className="ox-mythos-gav-aside">
            <div className="ox-mythos-gav-card">
              <h2 className="ox-mythos-gav-card-title">
                <span>AVESTAN TRANSMUTATION</span>
                <span>0{trans + 1} / 03</span>
              </h2>
              <div className="ox-mythos-gav-trans-selector" role="tablist">
                {transmutations.map((t) => (
                  <button
                    key={t.id}
                    className={`ox-mythos-gav-trans-btn ${trans === t.id ? 'is-active' : ''}`}
                    onClick={() => setTrans(t.id)}
                    role="tab"
                    aria-selected={trans === t.id}
                  >
                    <div>
                      <span className="ox-mythos-gav-trans-name">{t.name}</span>
                      <span className="ox-mythos-gav-trans-realm">{t.realm}</span>
                    </div>
                    <span className="ox-mythos-gav-trans-realm">{t.significance}</span>
                  </button>
                ))}
              </div>
              <div className="ox-mythos-gav-trans-panel">
                <div className="ox-mythos-gav-trans-header">
                  <span>Genesis: {transmutations[trans].significance}</span>
                </div>
                <p className="ox-mythos-gav-trans-desc">{transmutations[trans].desc}</p>
              </div>
            </div>

            <div className="ox-mythos-gav-card">
              <h3 className="ox-mythos-gav-card-title">LUNAR HERBARIUM</h3>
              <div className="ox-mythos-gav-astrolabe-grid">
                <div className="ox-mythos-gav-stat">
                  <span className="ox-mythos-gav-stat-val">55</span>
                  <span className="ox-mythos-gav-stat-lbl">Species of Grain</span>
                </div>
                <div className="ox-mythos-gav-stat">
                  <span className="ox-mythos-gav-stat-val">12</span>
                  <span className="ox-mythos-gav-stat-lbl">Healing Herbs</span>
                </div>
                <div className="ox-mythos-gav-stat">
                  <span className="ox-mythos-gav-stat-val">282</span>
                  <span className="ox-mythos-gav-stat-lbl">Fauna Genera</span>
                </div>
              </div>
            </div>
          </aside>
        </div>

        <section className="ox-mythos-gav-avesta">
          <article className="ox-mythos-gav-avesta-card">
            <h3>I. Eranvej on the River Veh</h3>
            <p>
              When Ahura Mazda brought forth the physical creation in seven stages, the fifth stage was the primeval bovine, shining white like the full moon on water. For three thousand years the beast dwelt peaceful and pure upon the northern stream.
            </p>
          </article>
          <article className="ox-mythos-gav-avesta-card">
            <h3>II. Ascent to the Moon Station</h3>
            <p>
              When mortality overtook the earthly bull, his spiritual soul (Geush Urvan) cried aloud to heaven. The holy divinity took the bull’s purified seed upward into the Moon station (Mah), purifying it in celestial light so death was answered with endless botanical rebirth.
            </p>
          </article>
          <article className="ox-mythos-gav-avesta-card">
            <h3>III. Goshurvan: Soul of the Herd</h3>
            <p>
              Ascended beyond mortality, Gavaevodata became the eternal guardian spirit of all domestic cattle and wild fauna. Ancient Zoroastrian prayers in the Yasna invoke the Soul of the Bull to bless agriculture, grant rain, and safeguard gentle herds.
            </p>
          </article>
        </section>

        <footer className="ox-mythos-gav-footer">
          <div className="ox-mythos-gav-coin" aria-label="Set signature: SET XXI · DESIGNED BY GEMINI 3.8 FLASH">
            <svg className="ox-mythos-gav-coin-crescent" viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
              <path d="M12 2 C6.48 2 2 6.48 2 12 C2 17.52 6.48 22 12 22 C14.15 22 16.14 21.32 17.78 20.17 C13.78 19.64 10.65 16.24 10.65 12 C10.65 7.76 13.78 4.36 17.78 3.83 C16.14 2.68 14.15 2 12 2 Z" />
            </svg>
            <span className="ox-mythos-gav-sig">SET XXI · DESIGNED BY GEMINI 3.8 FLASH</span>
          </div>
        </footer>
      </div>
    </div>
  )
}
