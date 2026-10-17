import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './buchis.css'

const SACRED_MARKS = [
  {
    id: 'crown',
    num: 'I',
    hieroglyph: '𓇳 𓆗 𓆄',
    title: 'Solar Disk, Twin Uraei & Double Plumes',
    egyptian: 'Shuti-aten en Montu',
    cx: 745,
    cy: 118,
    summary:
      'Between the bull’s natural crescent horns sits a hammered electrum crown: the solar disk of Ra-Horakhty embraced by two rearing cobra goddesses (Wadjet and Nekhbet) and surmounted by the tall twin ostrich feathers of Montu, Lord of Armant.',
    rite: 'Crowned in gilded bronze during the river procession from Hermonthis to Karnak.',
  },
  {
    id: 'pelage',
    num: 'II',
    hieroglyph: '𓃒 km 𓌉',
    title: 'Jet-Black Head & Alabaster Corpus',
    egyptian: 'Hadj-khem Bakh',
    cx: 748,
    cy: 238,
    summary:
      'Where Apis of Memphis was black with white markings, Buchis was sought across Upper Egypt for the inverse miracle: a body pure as desert alabaster joined to a coal-black head and throat dewlap—uniting the blinding noon sun with the fertile black silt of the Nile.',
    rite: 'Verified by the lector-priests of Hermonthis using the Sacred Book of the Bull Marks.',
  },
  {
    id: 'vestment',
    num: 'III',
    hieroglyph: '𓋲 𓅃 𓋞',
    title: 'Lapis Winged Cloth & Reversed Bristle',
    egyptian: 'Hebes-nesu Khaw',
    cx: 455,
    cy: 225,
    summary:
      'Classical accounts by Macrobius record that the hair of Buchis grew forward toward the shoulders rather than backward toward the tail, changing hue with every hour of the sun. Across his spine rests a woven faience-and-gold saddle cloth flanked by protective falcon wings.',
    rite: 'Anointed thrice daily with myrrh, lotus oil, and crushed lapis pigment.',
  },
  {
    id: 'plinth',
    num: 'IV',
    hieroglyph: '𓉐 𓊭 𓆼',
    title: 'The Bucheum Crypt & Cleopatra Stela',
    egyptian: 'Per-Bakh Iunu-Montu',
    cx: 632,
    cy: 495,
    summary:
      'Upon his death after twenty years in the sun-court, Buchis was mummified in natron and linen on a massive bronze-clamped bed and interred inside a monolithic granite sarcophagus in the subterranean Bucheum—attended in 51 BCE by Queen Cleopatra VII.',
    rite: 'Thirty-seven monolithic bull burials excavated at Armant (340 BCE – 305 CE).',
  },
]

export default function Buchis() {
  const [activeMarkId, setActiveMarkId] = useState('crown')
  const [sanctuaryLight, setSanctuaryLight] = useState('crypt')

  const activeMark = SACRED_MARKS.find((m) => m.id === activeMarkId) || SACRED_MARKS[0]

  return (
    <main
      className={`ox-canon-buc-root th-ox-canon-buc ${
        sanctuaryLight === 'solar' ? 'is-solar' : 'is-crypt'
      }`}
    >
      <div className="ox-canon-buc-frieze-top" aria-hidden="true" />

      <header className="ox-canon-buc-header">
        <div className="ox-canon-buc-inscript-bar">
          <span>SANCTUARY OF HERMONTHIS (ARMANT) · THEBES SOUTH</span>
          <span>STELA INV. BM EA 1697 · PTOLEMAIC CANON</span>
        </div>

        <div className="ox-canon-buc-title-grid">
          <div>
            <p className="ox-canon-buc-eyebrow">FACET 04 · MYTHOLOGY &amp; SACRED INCARNATION</p>
            <h1 className="ox-canon-buc-h1">Buchis: The Solar Bull of Armant</h1>
          </div>
          <p className="ox-canon-buc-lead">
            Revered as the living <em>ba</em> of the war-god Montu and the visible twin of Ra, the
            sacred bull Buchis was enthroned in Upper Egypt for his stark alabaster hide, coal-black
            countenance, and crescent horns bearing the solar disk and twin ostrich plumes.
          </p>
        </div>

        <div className="ox-canon-buc-controls">
          <div className="ox-canon-buc-light-toggle" role="group" aria-label="Sanctuary lighting">
            <span className="ox-canon-buc-ctrl-label">SANCTUARY ILLUMINATION:</span>
            <button
              type="button"
              className={`ox-canon-buc-light-btn ${sanctuaryLight === 'crypt' ? 'is-active' : ''}`}
              onClick={() => setSanctuaryLight('crypt')}
            >
              Bucheum Torchlight (Porphyry Night)
            </button>
            <button
              type="button"
              className={`ox-canon-buc-light-btn ${sanctuaryLight === 'solar' ? 'is-active' : ''}`}
              onClick={() => setSanctuaryLight('solar')}
            >
              Hermonthis Sun-Court (Sandstone Noon)
            </button>
          </div>
        </div>
      </header>

      <section className="ox-canon-buc-sanctuary">
        <div className="ox-canon-buc-pylon-frame">
          <div className="ox-canon-buc-cavetto-bar">
            <span>𓇳 LIVING IMAGE OF MONTU, LORD OF THEBES · BULL OF THE WHITE BODY &amp; BLACK FACE 𓇳</span>
          </div>

          <div className="ox-canon-buc-svg-wrap">
            <svg
              viewBox="0 0 940 600"
              className="ox-canon-buc-svg"
              role="img"
              aria-label="Sacred Egyptian bull Buchis standing in right-facing profile on a carved temple plinth, featuring four striding legs with cloven hooves, a stark white body with a jet-black head and dewlap, a lapis and gold ceremonial back cloth, and crescent horns cradling a gold solar disk, twin uraeus cobras, and tall double ostrich plumes."
            >
              <defs>
                <linearGradient id="ox-canon-buc-white-hide" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#FFFDF7" />
                  <stop offset="65%" stopColor="#EFE5CE" />
                  <stop offset="100%" stopColor="#CDC0A2" />
                </linearGradient>
                <linearGradient id="ox-canon-buc-far-leg" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#C9BA9B" />
                  <stop offset="100%" stopColor="#9E8E6E" />
                </linearGradient>
                <linearGradient id="ox-canon-buc-black-head" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#2E2532" />
                  <stop offset="50%" stopColor="#18121B" />
                  <stop offset="100%" stopColor="#0B080D" />
                </linearGradient>
                <linearGradient id="ox-canon-buc-gold-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FFE89E" />
                  <stop offset="50%" stopColor="#E6B84D" />
                  <stop offset="100%" stopColor="#A6761B" />
                </linearGradient>
                <radialGradient id="ox-canon-buc-sun-disk" cx="50%" cy="45%" r="55%">
                  <stop offset="0%" stopColor="#FFF0B8" />
                  <stop offset="55%" stopColor="#E6A832" />
                  <stop offset="100%" stopColor="#C93B2B" />
                </radialGradient>
              </defs>

              <rect
                x="18"
                y="18"
                width="904"
                height="564"
                rx="6"
                fill={sanctuaryLight === 'solar' ? '#EFE1C6' : '#18101A'}
                stroke="#E6B84D"
                strokeWidth="3"
              />

              <g opacity={sanctuaryLight === 'solar' ? '0.28' : '0.2'}>
                <rect x="42" y="42" width="54" height="460" fill="none" stroke="#E6B84D" strokeWidth="1.5" />
                <rect x="844" y="42" width="54" height="460" fill="none" stroke="#E6B84D" strokeWidth="1.5" />
                {[85, 145, 205, 265, 325, 385, 445].map((hy, idx) => (
                  <g key={hy} fill="#E6B84D" fontSize="22" textAnchor="middle">
                    <text x="69" y={hy}>{idx % 2 === 0 ? '𓇳' : '𓃒'}</text>
                    <text x="871" y={hy}>{idx % 2 === 0 ? '𓆄' : '𓋹'}</text>
                  </g>
                ))}
              </g>

              <motion.circle
                cx="744"
                cy="142"
                r="86"
                fill="url(#ox-canon-buc-sun-disk)"
                opacity="0.18"
                animate={{ scale: [0.96, 1.06, 0.96], opacity: [0.14, 0.26, 0.14] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              />

              <g id="ox-canon-buc-plinth">
                <path
                  d="M 105 510 L 835 510 L 822 528 L 830 562 L 110 562 L 118 528 Z"
                  fill="#D4BC94"
                  stroke="#3B2914"
                  strokeWidth="2.5"
                />
                <rect x="115" y="516" width="710" height="8" fill="#1CA392" />
                <path
                  d="M 135 544 L 805 544"
                  stroke="#C93B2B"
                  strokeWidth="3"
                  strokeDasharray="18 8"
                />
              </g>

              <g id="ox-canon-buc-far-legs">
                <path
                  d="M 656 372 L 682 436 L 702 486 L 722 502 L 718 510 L 682 510 L 674 486 L 650 438 L 622 378 Z"
                  fill="url(#ox-canon-buc-far-leg)"
                  stroke="#2B2118"
                  strokeWidth="2.5"
                />
                <path
                  d="M 682 500 L 702 496 L 702 510 L 682 510 Z M 705 496 L 722 502 L 718 510 L 705 510 Z"
                  fill="#1A151B"
                />

                <path
                  d="M 294 348 L 324 418 L 344 484 L 364 502 L 360 510 L 324 510 L 316 484 L 290 422 L 262 356 Z"
                  fill="url(#ox-canon-buc-far-leg)"
                  stroke="#2B2118"
                  strokeWidth="2.5"
                />
                <path
                  d="M 324 500 L 344 496 L 344 510 L 324 510 Z M 347 496 L 364 502 L 360 510 L 347 510 Z"
                  fill="#1A151B"
                />
              </g>

              <path
                d="M 212 182
                   C 188 202, 174 268, 174 352
                   C 174 402, 178 438, 184 462
                   C 170 478, 170 502, 186 510
                   C 202 502, 204 478, 196 458
                   C 190 430, 188 392, 190 345
                   C 192 275, 204 212, 224 192 Z"
                fill="#18121B"
                stroke="#E6B84D"
                strokeWidth="1.8"
              />

              <path
                d="M 684 192
                   C 656 154, 618 134, 578 136
                   C 542 138, 512 156, 464 158
                   C 396 160, 322 152, 264 152
                   C 228 152, 206 164, 198 188
                   C 190 214, 198 258, 214 302
                   C 228 342, 218 384, 204 416
                   L 210 486
                   L 206 510
                   L 244 510
                   L 248 502
                   L 236 482
                   L 246 418
                   C 264 392, 286 374, 310 366
                   C 352 384, 412 402, 484 402
                   C 542 402, 582 392, 604 378
                   L 614 438
                   L 622 486
                   L 636 502
                   L 632 510
                   L 594 510
                   L 592 492
                   L 584 438
                   L 578 380
                   C 625 388, 668 378, 694 348
                   Z"
                fill="url(#ox-canon-buc-white-hide)"
                stroke="#2B2118"
                strokeWidth="3"
              />

              <path
                d="M 206 500 L 226 496 L 226 510 L 206 510 Z M 229 496 L 248 502 L 244 510 L 229 510 Z"
                fill="#18121B"
              />
              <path
                d="M 594 500 L 614 496 L 614 510 L 594 510 Z M 617 496 L 636 502 L 632 510 L 617 510 Z"
                fill="#18121B"
              />

              <g id="ox-canon-buc-saddle-cloth">
                <path
                  d="M 348 158
                     L 538 158
                     L 524 296
                     L 362 296 Z"
                  fill="#1CA392"
                  stroke="#E6B84D"
                  strokeWidth="3"
                />
                <rect x="364" y="170" width="158" height="110" fill="#162A4A" stroke="#E6B84D" strokeWidth="2" />
                <path
                  d="M 376 192 L 510 192 M 376 225 L 510 225 M 376 258 L 510 258"
                  stroke="#E6B84D"
                  strokeWidth="2"
                  strokeDasharray="10 6"
                />
                <circle cx="443" cy="225" r="20" fill="#C93B2B" stroke="#E6B84D" strokeWidth="2.5" />
              </g>

              <g id="ox-canon-buc-black-forequarters">
                <path
                  d="M 628 154
                     C 662 158, 692 174, 718 184
                     C 742 180, 766 184, 782 198
                     C 798 212, 816 228, 826 244
                     C 832 256, 826 274, 810 278
                     C 790 282, 768 280, 752 276
                     C 762 308, 758 348, 738 374
                     C 716 402, 682 406, 654 388
                     C 638 352, 626 245, 628 154 Z"
                  fill="url(#ox-canon-buc-black-head)"
                  stroke="#E6B84D"
                  strokeWidth="2.2"
                />
                <path
                  d="M 738 282 C 744 318, 732 354, 704 376 M 718 284 C 722 316, 712 346, 688 366"
                  stroke="#E6B84D"
                  strokeWidth="1.5"
                  fill="none"
                  opacity="0.65"
                />

                <path
                  d="M 604 146
                     C 626 198, 646 292, 668 388
                     L 642 388
                     C 618 294, 598 202, 582 142 Z"
                  fill="url(#ox-canon-buc-gold-grad)"
                  stroke="#3B2914"
                  strokeWidth="2"
                />
                <path
                  d="M 594 144
                     C 616 198, 636 292, 656 388"
                  stroke="#C93B2B"
                  strokeWidth="4"
                  strokeDasharray="8 6"
                  fill="none"
                />
              </g>

              <g id="ox-canon-buc-head-details">
                <path
                  d="M 792 244 C 804 236, 822 238, 826 250 C 830 264, 818 276, 800 276 C 788 274, 786 256, 792 244 Z"
                  fill="#2C2230"
                  stroke="#E6B84D"
                  strokeWidth="1.5"
                />
                <ellipse cx="810" cy="254" rx="6" ry="4" transform="rotate(18 810 254)" fill="#E6B84D" />

                <path
                  d="M 724 214 C 736 204, 752 204, 762 214 C 752 224, 736 224, 724 214 Z"
                  fill="#FFFDF7"
                  stroke="#E6B84D"
                  strokeWidth="2"
                />
                <circle cx="744" cy="214" r="5" fill="#18121B" />
                <path
                  d="M 724 214 L 702 218 M 738 222 L 732 238 L 722 242"
                  stroke="#E6B84D"
                  strokeWidth="2.2"
                  fill="none"
                />

                <path
                  d="M 704 190 C 680 184, 658 188, 654 200 C 660 212, 682 214, 704 204 Z"
                  fill="#231B26"
                  stroke="#E6B84D"
                  strokeWidth="1.8"
                />
              </g>

              <g id="ox-canon-buc-solar-crown">
                <path
                  d="M 726 42
                     C 716 42, 712 78, 716 118
                     L 742 118
                     L 742 42 Z"
                  fill="url(#ox-canon-buc-gold-grad)"
                  stroke="#3B2914"
                  strokeWidth="2"
                />
                <path
                  d="M 762 42
                     C 772 42, 776 78, 772 118
                     L 746 118
                     L 746 42 Z"
                  fill="url(#ox-canon-buc-gold-grad)"
                  stroke="#3B2914"
                  strokeWidth="2"
                />
                <line x1="744" y1="38" x2="744" y2="122" stroke="#C93B2B" strokeWidth="3" />

                <circle
                  cx="744"
                  cy="142"
                  r="30"
                  fill="url(#ox-canon-buc-sun-disk)"
                  stroke="#FFF0B8"
                  strokeWidth="2.5"
                />

                <path
                  d="M 712 152 C 700 138, 702 118, 714 114 C 720 112, 722 120, 716 126"
                  stroke="#E6B84D"
                  strokeWidth="4"
                  fill="none"
                />
                <path
                  d="M 776 152 C 788 138, 786 118, 774 114 C 768 112, 766 120, 772 126"
                  stroke="#E6B84D"
                  strokeWidth="4"
                  fill="none"
                />

                <path
                  d="M 718 186
                     C 686 164, 678 124, 704 94
                     C 712 86, 720 94, 714 104
                     C 696 128, 704 158, 734 176 Z"
                  fill="url(#ox-canon-buc-gold-grad)"
                  stroke="#2B2118"
                  strokeWidth="2.2"
                />
                <path
                  d="M 744 186
                     C 782 168, 804 128, 784 94
                     C 778 84, 768 92, 772 104
                     C 786 130, 770 160, 734 178 Z"
                  fill="url(#ox-canon-buc-gold-grad)"
                  stroke="#2B2118"
                  strokeWidth="2.2"
                />
              </g>

              {SACRED_MARKS.map((mark) => {
                const isSelected = activeMarkId === mark.id
                return (
                  <g
                    key={mark.id}
                    onClick={() => setActiveMarkId(mark.id)}
                    style={{ cursor: 'pointer' }}
                  >
                    <circle
                      cx={mark.cx}
                      cy={mark.cy}
                      r={isSelected ? 16 : 12}
                      fill={isSelected ? '#C93B2B' : '#18101A'}
                      stroke="#E6B84D"
                      strokeWidth="2.5"
                    />
                    <text
                      x={mark.cx}
                      y={mark.cy + 4}
                      textAnchor="middle"
                      fill="#FFE89E"
                      fontSize="11"
                      fontFamily="Cinzel Decorative, serif"
                      fontWeight="700"
                    >
                      {mark.num}
                    </text>
                  </g>
                )
              })}
            </svg>
          </div>

          <div className="ox-canon-buc-pedestal-foot">
            <span>SELECT ANY ROMAN SEAL (I–IV) ON THE BULL OR STELA TABLETS TO READ THE CANON OF ARMANT</span>
            <span>DYNASTY XXX – PTOLEMAIC PERIOD</span>
          </div>
        </div>

        <aside className="ox-canon-buc-stela-column">
          <div className="ox-canon-buc-stela-tabs" role="tablist" aria-label="Sacred marks of Buchis">
            {SACRED_MARKS.map((mark) => (
              <button
                key={mark.id}
                role="tab"
                aria-selected={activeMarkId === mark.id}
                type="button"
                className={`ox-canon-buc-stela-tab ${activeMarkId === mark.id ? 'is-active' : ''}`}
                onClick={() => setActiveMarkId(mark.id)}
              >
                <span className="ox-canon-buc-tab-num">{mark.num}</span>
                <span className="ox-canon-buc-tab-title">{mark.title}</span>
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeMark.id}
              className="ox-canon-buc-tablet"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.22 }}
            >
              <div className="ox-canon-buc-tablet-arch">
                <span className="ox-canon-buc-glyphs" aria-hidden="true">
                  {activeMark.hieroglyph}
                </span>
                <span className="ox-canon-buc-translit">{activeMark.egyptian}</span>
              </div>

              <h2 className="ox-canon-buc-h2">{activeMark.title}</h2>
              <p className="ox-canon-buc-tablet-body">{activeMark.summary}</p>
              <div className="ox-canon-buc-rite-box">
                <span>TEMPLE LITURGY</span>
                <strong>{activeMark.rite}</strong>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="ox-canon-buc-concordance">
            <h3 className="ox-canon-buc-conc-title">THE THREE SACRED BULLS OF EGYPT</h3>
            <div className="ox-canon-buc-conc-row is-current">
              <strong>BUCHIS (Armant)</strong>
              <span>Montu · White body, black face, plumes</span>
            </div>
            <div className="ox-canon-buc-conc-row">
              <strong>APIS (Memphis)</strong>
              <span>Ptah · Black body, white brow triangle</span>
            </div>
            <div className="ox-canon-buc-conc-row">
              <strong>MNEVIS (Heliopolis)</strong>
              <span>Ra-Atum · Unblemished coal-black hide</span>
            </div>
          </div>
        </aside>
      </section>

      <footer className="ox-canon-buc-footer">
        <div className="ox-canon-buc-cartouche">
          <span className="ox-canon-buc-cart-glyph" aria-hidden="true">𓍹</span>
          <div className="ox-canon-buc-cart-inner">
            <span className="ox-canon-buc-cart-top">ROYAL SANDSTONE CARTOUCHE · HERMONTHIS</span>
            <span className="ox-canon-buc-signature">SET XXXV · DESIGNED BY GEMINI 4 ARGON</span>
          </div>
          <span className="ox-canon-buc-cart-glyph" aria-hidden="true">𓍺</span>
          <div className="ox-canon-buc-cart-knot" aria-hidden="true" />
        </div>
      </footer>
    </main>
  )
}
