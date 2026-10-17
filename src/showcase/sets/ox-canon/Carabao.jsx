import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './carabao.css'

const TERRACE_TIERS = [
  {
    id: 'payoh',
    elevation: '1,120m ASL',
    ifugao: 'Payoh · Flooded Pond-Field',
    title: 'Monsoon Puddling & Mud Traction',
    waterY: 446,
    rainOpacity: 0.55,
    depthLabel: '18 cm Flooded Clay Horizon',
    summary:
      'Where wheeled tractors sink axle-deep into saturated montane clay, the low-slung Carabao wades effortlessly. Its flexible fetlock joints and wide, splayed cloven hooves double their bearing surface on impact—puddling the volcanic soil into an impermeable pan that holds mountain spring water for six months.',
  },
  {
    id: 'muyong',
    elevation: '1,480m ASL',
    ifugao: 'Muyong · Cloud-Forest Watershed',
    title: 'Upper Spring Weir & Timber Haul',
    waterY: 478,
    rainOpacity: 0.85,
    depthLabel: '8 cm Mountain Run-Off Sheet',
    summary:
      'Above the highest stone terrace walls sits the communal cloud-forest ring that feeds the bamboo irrigation flumes. Built with a massive thoracic ribcage and wide-swept crescent horns, the swamp buffalo hauls felled dipterocarp timber and river boulders along narrow mist-drenched contour trails.',
  },
  {
    id: 'banong',
    elevation: '820m ASL',
    ifugao: 'Banong · Stone Retaining Crown',
    title: 'Dry-Season Wall Consolidation',
    waterY: 504,
    rainOpacity: 0.15,
    depthLabel: '3 cm Drained Silt Bed',
    summary:
      'Because Bubalus bubalis possesses only one-tenth the sweat glands of domestic cattle, the Carabao regulates body heat by wallowing in terrace mud pools. Dried grey clay forms an armoured crust across its slate hide, shielding it from biting midges and equatorial glare.',
  },
]

const ADAPTATIONS = [
  {
    id: 'horns',
    code: '01 · CRESCENT ARC',
    name: 'Ribbed Backward-Swept Horns',
    detail:
      'Growing up to 110 cm across in a single sweeping plane parallel to the skull, triangular transverse ridges (annuli) mark each monsoon cycle of the buffalo’s life.',
  },
  {
    id: 'chevrons',
    code: '02 · THROAT CHEVRONS',
    name: 'Twin Pale Brisket Collars',
    detail:
      'Two unmistakable crescent bands of cream hair cross the underside of the neck and brisket—the diagnostic field mark of the Southeast Asian swamp carabao (2n = 48 chromosomes).',
  },
  {
    id: 'hooves',
    code: '03 · SPLAYED HOOVES',
    name: 'Articulated Mud-Shoe Fetlocks',
    detail:
      'Broad, widely cleft hooves and elastic pastern ligaments spread wide when stepping into knee-deep paddy mire, then contract cleanly on the upward pull to prevent suction lock.',
  },
  {
    id: 'symbiosis',
    code: '04 · MUTUALISM',
    name: 'Cattle Egret Sentinel (Tagak)',
    detail:
      'Perching atop the broad thoracic withers, Bubulcus ibis gleans ticks and amphibians stirred up by the buffalo’s four wading hooves.',
  },
]

export default function Carabao() {
  const [tierId, setTierId] = useState('payoh')
  const [activeAdapt, setActiveAdapt] = useState('horns')

  const activeTier = TERRACE_TIERS.find((t) => t.id === tierId) || TERRACE_TIERS[0]

  return (
    <main className="ox-canon-car-root th-ox-canon-car">
      <header className="ox-canon-car-header">
        <div className="ox-canon-car-survey-bar">
          <span className="ox-canon-car-badge">
            CORDILLERA HYDROLOGICAL SURVEY · IFUGAO, LUZON (16°55′N 121°03′E)
          </span>
          <span className="ox-canon-car-species">SPECIES: BUBALUS BUBALIS CARABANESES</span>
        </div>

        <div className="ox-canon-car-hero-row">
          <div>
            <p className="ox-canon-car-eyebrow">FACET 05 · REGION &amp; AMPHIBIOUS ECOLOGY</p>
            <h1 className="ox-canon-car-h1">Carabao of the Sky Terraces</h1>
          </div>
          <p className="ox-canon-car-lead">
            Carved by hand into the steep granite spine of northern Luzon two millennia ago, the
            high-altitude rice terraces cannot be ploughed by machine. Only the swamp water buffalo—with
            its wide crescent horns and splayed mud hooves—can walk the flooded contour shelves.
          </p>
        </div>

        <div className="ox-canon-car-tier-bar" role="group" aria-label="Terrace elevation tier">
          <span className="ox-canon-car-tier-caption">WATERSHED ELEVATION TIER:</span>
          {TERRACE_TIERS.map((tier) => (
            <button
              key={tier.id}
              type="button"
              className={`ox-canon-car-tier-btn ${tierId === tier.id ? 'is-active' : ''}`}
              onClick={() => setTierId(tier.id)}
            >
              <span className="ox-canon-car-tier-elev">{tier.elevation}</span>
              <strong>{tier.ifugao}</strong>
            </button>
          ))}
        </div>
      </header>

      <section className="ox-canon-car-atlas-grid">
        <div className="ox-canon-car-terrace-plate">
          <div className="ox-canon-car-plate-head">
            <span>CONTOUR SECTION — FLOODED PAYOH POND-FIELD &amp; STONE WALL</span>
            <span>WATER HORIZON: {activeTier.depthLabel}</span>
          </div>

          <div className="ox-canon-car-svg-wrap">
            <svg
              viewBox="0 0 960 600"
              className="ox-canon-car-svg"
              role="img"
              aria-label="Three-quarter right-facing profile of a heavy slate-black Carabao swamp water buffalo wading through a stepped emerald rice terrace, showing wide ribbed crescent horns, twin pale throat chevrons, a white egret perched on its withers, and all four legs ending in wide splayed cloven hooves visible in the paddy water."
            >
              <defs>
                <linearGradient id="ox-canon-car-sky" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#DCECE4" />
                  <stop offset="60%" stopColor="#EAF4EE" />
                  <stop offset="100%" stopColor="#C8E2D2" />
                </linearGradient>
                <linearGradient id="ox-canon-car-hide" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#465955" />
                  <stop offset="30%" stopColor="#263330" />
                  <stop offset="75%" stopColor="#17201E" />
                  <stop offset="100%" stopColor="#0E1413" />
                </linearGradient>
                <linearGradient id="ox-canon-car-far-leg" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#182220" />
                  <stop offset="100%" stopColor="#0A0F0E" />
                </linearGradient>
                <linearGradient id="ox-canon-car-horn" x1="0%" y1="100%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#3B4744" />
                  <stop offset="50%" stopColor="#60706C" />
                  <stop offset="100%" stopColor="#1B2220" />
                </linearGradient>
                <linearGradient id="ox-canon-car-water" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="rgba(68, 152, 132, 0.52)" />
                  <stop offset="100%" stopColor="rgba(19, 54, 46, 0.68)" />
                </linearGradient>
              </defs>

              <rect x="0" y="0" width="960" height="600" fill="url(#ox-canon-car-sky)" />

              <g id="ox-canon-car-terraces">
                <path
                  d="M 0 190 Q 240 165, 520 185 T 960 165 L 960 265 L 0 265 Z"
                  fill="#5A9E4B"
                />
                <path
                  d="M 0 245 Q 280 230, 560 248 T 960 235 L 960 330 L 0 330 Z"
                  fill="#74B843"
                />
                <path
                  d="M 0 252 Q 280 237, 560 255 T 960 242"
                  fill="none"
                  stroke="#364A3E"
                  strokeWidth="8"
                />
                <path
                  d="M 0 315 Q 310 302, 640 318 T 960 308 L 960 420 L 0 420 Z"
                  fill="#84C341"
                />
                <path
                  d="M 0 322 Q 310 309, 640 325 T 960 315"
                  fill="none"
                  stroke="#4A5E52"
                  strokeWidth="10"
                  strokeDasharray="16 3"
                />
                <rect x="0" y="405" width="960" height="195" fill="#639E5C" />
                <rect x="0" y="528" width="960" height="72" fill="#2A3A32" />
              </g>

              <g id="ox-canon-car-rice-shoots">
                {[85, 135, 835, 885].map((rx) => (
                  <g key={rx} stroke="#235E28" strokeWidth="2.5" fill="none">
                    <path d={`M ${rx} 465 C ${rx - 10} 435, ${rx - 18} 415, ${rx - 24} 398`} />
                    <path d={`M ${rx} 465 C ${rx} 432, ${rx + 2} 410, ${rx + 4} 392`} />
                    <path d={`M ${rx} 465 C ${rx + 12} 435, ${rx + 20} 415, ${rx + 28} 400`} />
                  </g>
                ))}
              </g>

              <g id="ox-canon-car-far-legs">
                <path
                  d="M 622 372 L 642 438 L 654 494 L 678 518 L 674 528 L 626 528 L 624 496 L 608 438 L 588 378 Z"
                  fill="url(#ox-canon-car-far-leg)"
                  stroke="#0A0F0E"
                  strokeWidth="2.5"
                />
                <path
                  d="M 628 516 L 652 510 L 654 528 L 626 528 Z M 656 510 L 678 518 L 674 528 L 656 528 Z"
                  fill="#3B4A46"
                />

                <path
                  d="M 304 358 L 328 432 L 342 494 L 366 518 L 362 528 L 314 528 L 312 496 L 294 434 L 270 364 Z"
                  fill="url(#ox-canon-car-far-leg)"
                  stroke="#0A0F0E"
                  strokeWidth="2.5"
                />
                <path
                  d="M 316 516 L 340 510 L 342 528 L 314 528 Z M 344 510 L 366 518 L 362 528 L 344 528 Z"
                  fill="#3B4A46"
                />
              </g>

              <path
                d="M 218 202
                   C 192 224, 176 286, 174 362
                   C 172 406, 176 442, 182 464
                   C 168 480, 170 506, 186 516
                   C 202 508, 204 482, 196 462
                   C 190 434, 188 398, 192 354
                   C 196 290, 210 232, 230 212 Z"
                fill="#141C1A"
                stroke="#0A0F0E"
                strokeWidth="2"
              />

              <path
                d="M 692 184
                   C 654 176, 616 150, 568 148
                   C 525 146, 488 164, 434 166
                   C 368 168, 298 162, 248 176
                   C 218 184, 204 206, 204 242
                   C 204 282, 214 326, 224 364
                   C 234 402, 224 434, 212 462
                   L 210 508
                   L 202 528
                   L 254 528
                   L 258 520
                   L 242 500
                   L 254 438
                   C 272 410, 294 388, 318 378
                   C 366 408, 438 426, 514 422
                   C 554 420, 578 410, 594 398
                   L 602 454
                   L 608 502
                   L 626 520
                   L 622 528
                   L 570 528
                   L 572 512
                   L 566 456
                   L 560 398
                   C 608 404, 654 386, 682 350
                   C 702 324, 712 292, 722 272
                   C 748 274, 784 272, 808 258
                   C 824 248, 826 230, 814 218
                   C 796 204, 764 198, 736 190
                   C 722 186, 706 184, 692 184 Z"
                fill="url(#ox-canon-car-hide)"
                stroke="#0A0F0E"
                strokeWidth="3.2"
              />

              <path
                d="M 562 156 C 515 168, 425 174, 265 182"
                stroke="#85A39B"
                strokeWidth="4"
                strokeLinecap="round"
                fill="none"
                opacity="0.55"
              />

              <path
                d="M 652 298 C 668 326, 692 332, 712 308
                   M 634 328 C 656 362, 686 366, 706 338"
                stroke="#E8E2CE"
                strokeWidth="6.5"
                strokeLinecap="round"
                fill="none"
                opacity="0.88"
              />

              <path
                d="M 204 516 L 230 510 L 232 528 L 202 528 Z M 235 510 L 258 520 L 254 528 L 235 528 Z"
                fill="#4F635E"
                stroke="#0A0F0E"
                strokeWidth="1.2"
              />
              <path
                d="M 572 516 L 598 510 L 600 528 L 570 528 Z M 603 510 L 626 520 L 622 528 L 603 528 Z"
                fill="#4F635E"
                stroke="#0A0F0E"
                strokeWidth="1.2"
              />

              <g id="ox-canon-car-head-horns">
                <path
                  d="M 786 220 C 798 212, 818 216, 822 230 C 826 246, 812 260, 794 260 C 780 258, 778 234, 786 220 Z"
                  fill="#2E3D3A"
                  stroke="#0A0F0E"
                  strokeWidth="2"
                />
                <ellipse cx="804" cy="232" rx="7" ry="4.5" transform="rotate(15 804 232)" fill="#0A0F0E" />

                <ellipse cx="728" cy="212" rx="7" ry="5" fill="#0A0F0E" stroke="#7A948D" strokeWidth="1.5" />
                <circle cx="730" cy="210" r="2" fill="#FFFFFF" />

                <path
                  d="M 664 206 C 638 202, 612 208, 608 220 C 614 232, 640 232, 666 220 Z"
                  fill="#263330"
                  stroke="#0A0F0E"
                  strokeWidth="2.2"
                />

                <path
                  d="M 702 186
                     C 748 164, 798 134, 804 94
                     C 806 80, 792 78, 784 90
                     C 768 118, 732 148, 684 174 Z"
                  fill="#2E3B38"
                  stroke="#0A0F0E"
                  strokeWidth="2.5"
                />

                <path
                  d="M 678 192
                     C 618 190, 542 168, 514 114
                     C 504 94, 518 82, 532 98
                     C 562 136, 622 158, 686 168 Z"
                  fill="url(#ox-canon-car-horn)"
                  stroke="#0A0F0E"
                  strokeWidth="3"
                />
                {[650, 628, 606, 584, 562].map((hx, idx) => (
                  <line
                    key={hx}
                    x1={hx}
                    y1={164 - idx * 7}
                    x2={hx - 6}
                    y2={184 - idx * 7}
                    stroke="#141C1A"
                    strokeWidth="2.2"
                  />
                ))}
              </g>

              <g id="ox-canon-car-egret">
                <line x1="548" y1="126" x2="544" y2="152" stroke="#D98A36" strokeWidth="2.2" />
                <line x1="556" y1="126" x2="558" y2="152" stroke="#D98A36" strokeWidth="2.2" />
                <path
                  d="M 526 122 C 534 104, 558 104, 568 116 C 574 102, 572 84, 580 78 C 586 74, 592 80, 586 88 C 580 96, 582 114, 574 124 C 560 132, 536 130, 526 122 Z"
                  fill="#FFFFFF"
                  stroke="#1C2926"
                  strokeWidth="1.8"
                />
                <polygon points="588,79 606,82 588,85" fill="#E59B28" />
              </g>

              <motion.g
                id="ox-canon-car-water-layer"
                animate={{ y: activeTier.waterY - 446 }}
                transition={{ duration: 0.45, ease: 'easeOut' }}
              >
                <rect
                  x="0"
                  y="446"
                  width="960"
                  height="110"
                  fill="url(#ox-canon-car-water)"
                />
                <line x1="0" y1="446" x2="960" y2="446" stroke="#B8F2DC" strokeWidth="2.5" />
                <ellipse
                  cx="435"
                  cy="454"
                  rx="275"
                  ry="12"
                  fill="none"
                  stroke="#DDFCF0"
                  strokeWidth="2"
                  strokeDasharray="14 8"
                />
                <ellipse
                  cx="595"
                  cy="486"
                  rx="62"
                  ry="8"
                  fill="none"
                  stroke="#B8F2DC"
                  strokeWidth="1.5"
                />
                <ellipse
                  cx="235"
                  cy="486"
                  rx="62"
                  ry="8"
                  fill="none"
                  stroke="#B8F2DC"
                  strokeWidth="1.5"
                />
              </motion.g>

              <g opacity={activeTier.rainOpacity} stroke="#FFFFFF" strokeWidth="1.4">
                {[110, 210, 310, 410, 510, 610, 710, 810, 900].map((rx, idx) => (
                  <line
                    key={rx}
                    x1={rx}
                    y1={35 + (idx % 3) * 45}
                    x2={rx - 28}
                    y2={95 + (idx % 3) * 45}
                    strokeDasharray="12 8"
                  />
                ))}
              </g>
            </svg>
          </div>

          <div className="ox-canon-car-plate-foot">
            <span>NOTE THE SPLAYED CLOVEN HOOVES VISIBLE BENEATH THE TRANSLUCENT PADDY WATERLINE</span>
            <span>UNESCO LIVING CULTURAL LANDSCAPE · BANAUE &amp; HUNGDUAN</span>
          </div>
        </div>

        <aside className="ox-canon-car-fieldnotes">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTier.id}
              className="ox-canon-car-tier-card"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
            >
              <div className="ox-canon-car-tier-head">
                <span className="ox-canon-car-elev-chip">{activeTier.elevation}</span>
                <span className="ox-canon-car-ifugao-name">{activeTier.ifugao}</span>
              </div>
              <h2 className="ox-canon-car-h2">{activeTier.title}</h2>
              <p className="ox-canon-car-tier-body">{activeTier.summary}</p>
            </motion.div>
          </AnimatePresence>

          <div className="ox-canon-car-adapt-list">
            <h3 className="ox-canon-car-adapt-heading">AMPHIBIOUS MORPHOLOGY NOTES</h3>
            {ADAPTATIONS.map((item) => (
              <button
                key={item.id}
                type="button"
                className={`ox-canon-car-adapt-btn ${activeAdapt === item.id ? 'is-active' : ''}`}
                onClick={() => setActiveAdapt(item.id)}
              >
                <div className="ox-canon-car-adapt-top">
                  <span className="ox-canon-car-adapt-code">{item.code}</span>
                  <strong>{item.name}</strong>
                </div>
                {activeAdapt === item.id && (
                  <p className="ox-canon-car-adapt-detail">{item.detail}</p>
                )}
              </button>
            ))}
          </div>
        </aside>
      </section>

      <footer className="ox-canon-car-footer">
        <div className="ox-canon-car-bamboo-plaque">
          <span className="ox-canon-car-lashing" aria-hidden="true">╬</span>
          <div className="ox-canon-car-plaque-center">
            <span className="ox-canon-car-plaque-sub">CORDILLERA FIELD SURVEY · BAMBOO TALLY</span>
            <span className="ox-canon-car-signature">SET XXXV · DESIGNED BY GEMINI 4 ARGON</span>
          </div>
          <span className="ox-canon-car-lashing" aria-hidden="true">╬</span>
        </div>
      </footer>
    </main>
  )
}
