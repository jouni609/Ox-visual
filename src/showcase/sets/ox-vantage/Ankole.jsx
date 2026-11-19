import { useState } from 'react'
import { motion } from 'framer-motion'
import './ankole.css'

const METRICS = [
  {
    value: '2.4 m',
    label: 'Tip-to-tip horn span',
    detail: 'Measured across mature Sanga bulls bred in the Ankole highlands.',
  },
  {
    value: '45 kg',
    label: 'Honeycomb keratin crown',
    detail: 'Porous vascular bone core stays hollow enough to carry all day.',
  },
  {
    value: '−4.2 °C',
    label: 'Venous cooling drop',
    detail: 'Warm arterial blood radiates savanna heat before returning to the brain.',
  },
]

const THERMAL_NODES = [
  { id: 'crown', label: 'Frontal Sinus', note: 'Air-filled cranial chambers anchor the horn pedicles against torque.' },
  { id: 'core', label: 'Vascular Honeycomb', note: 'Dense capillary beds run through spongy bone inside the keratin sheath.' },
  { id: 'dewlap', label: 'Ventral Dewlap', note: 'Folded throat skin increases surface area for passive convective cooling.' },
]

export default function Ankole() {
  const [thermalView, setThermalView] = useState(false)
  const [activeNode, setActiveNode] = useState('core')

  return (
    <div className="th-vantage-ankole ox-vantage-ank-root">
      <div className="ox-vantage-ank-sunband" aria-hidden="true" />
      <div className="ox-vantage-ank-grain" aria-hidden="true" />

      <header className="ox-vantage-ank-topbar">
        <span className="ox-vantage-ank-folio">PLATE I · BREED &amp; THERMOREGULATION</span>
        <span className="ox-vantage-ank-origin">
          <span lang="rw">INYAMBO</span> · GREAT LAKES SAVANNA
        </span>
      </header>

      <main className="ox-vantage-ank-main">
        <section className="ox-vantage-ank-hero">
          <div className="ox-vantage-ank-title-wrap">
            <p className="ox-vantage-ank-kicker">BOS TAURUS SANGA · CATTLE OF KINGS</p>
            <h1 className="ox-vantage-ank-h1">ANKOLE</h1>
          </div>

          <div className="ox-vantage-ank-stage">
            <motion.svg
              className="ox-vantage-ank-svg"
              viewBox="0 0 960 640"
              role="img"
              aria-label="Full standing Ankole-Watusi bull in three-quarter frontal view with enormous sweeping ivory lyre horns, chestnut coat, braided royal collar, deep dewlap, and four cloven-hoofed legs"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <defs>
                <radialGradient id="ox-vantage-ank-sun" cx="50%" cy="46%" r="48%">
                  <stop offset="0%" stopColor="#E6B87A" stopOpacity="0.85" />
                  <stop offset="55%" stopColor="#D78E54" stopOpacity="0.32" />
                  <stop offset="100%" stopColor="#F4E6CE" stopOpacity="0" />
                </radialGradient>
                <linearGradient id="ox-vantage-ank-coat" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#9A361C" />
                  <stop offset="48%" stopColor="#7C2612" />
                  <stop offset="100%" stopColor="#4A150B" />
                </linearGradient>
                <linearGradient id="ox-vantage-ank-coat-dark" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#5D1B0D" />
                  <stop offset="100%" stopColor="#320E07" />
                </linearGradient>
                <linearGradient id="ox-vantage-ank-horn-l" x1="100%" y1="90%" x2="10%" y2="5%">
                  <stop offset="0%" stopColor="#D8C39C" />
                  <stop offset="45%" stopColor="#F7EEDB" />
                  <stop offset="86%" stopColor="#EFE0C2" />
                  <stop offset="100%" stopColor="#6D5742" />
                </linearGradient>
                <linearGradient id="ox-vantage-ank-horn-r" x1="0%" y1="90%" x2="90%" y2="5%">
                  <stop offset="0%" stopColor="#D8C39C" />
                  <stop offset="45%" stopColor="#FAF3E4" />
                  <stop offset="86%" stopColor="#ECE0C5" />
                  <stop offset="100%" stopColor="#6D5742" />
                </linearGradient>
                <linearGradient id="ox-vantage-ank-thermal" x1="0%" y1="100%" x2="0%" y2="0%">
                  <stop offset="0%" stopColor="#E63928" />
                  <stop offset="55%" stopColor="#F58C2A" />
                  <stop offset="100%" stopColor="#2B74D9" />
                </linearGradient>
              </defs>

              <circle cx="480" cy="272" r="248" fill="url(#ox-vantage-ank-sun)" />
              <circle
                cx="480"
                cy="272"
                r="230"
                fill="none"
                stroke="#1C4587"
                strokeWidth="1.2"
                strokeDasharray="4 8"
                opacity="0.32"
              />
              <path
                d="M 110 594 L 850 594"
                stroke="#8E4E30"
                strokeWidth="1.5"
                opacity="0.45"
              />
              <ellipse cx="525" cy="594" rx="260" ry="18" fill="#5A2815" opacity="0.22" />

              <g className="ox-vantage-ank-heat-waves" opacity={thermalView ? 0.95 : 0.35}>
                <motion.path
                  d="M 118 118 Q 106 94 118 70 Q 130 46 118 22"
                  fill="none"
                  stroke={thermalView ? '#D93B22' : '#A8381E'}
                  strokeWidth="2"
                  strokeLinecap="round"
                  animate={{ y: [0, -10, 0], opacity: [0.25, 0.75, 0.25] }}
                  transition={{ duration: 3.4, repeat: Infinity, ease: 'easeInOut' }}
                />
                <motion.path
                  d="M 164 156 Q 152 132 164 108 Q 176 84 164 60"
                  fill="none"
                  stroke={thermalView ? '#D93B22' : '#A8381E'}
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  animate={{ y: [0, -12, 0], opacity: [0.2, 0.65, 0.2] }}
                  transition={{ duration: 4.1, delay: 0.6, repeat: Infinity, ease: 'easeInOut' }}
                />
                <motion.path
                  d="M 738 112 Q 750 88 738 64 Q 726 40 738 16"
                  fill="none"
                  stroke={thermalView ? '#D93B22' : '#A8381E'}
                  strokeWidth="2"
                  strokeLinecap="round"
                  animate={{ y: [0, -10, 0], opacity: [0.25, 0.75, 0.25] }}
                  transition={{ duration: 3.7, delay: 0.3, repeat: Infinity, ease: 'easeInOut' }}
                />
                <motion.path
                  d="M 686 150 Q 698 126 686 102 Q 674 78 686 54"
                  fill="none"
                  stroke={thermalView ? '#D93B22' : '#A8381E'}
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  animate={{ y: [0, -12, 0], opacity: [0.2, 0.65, 0.2] }}
                  transition={{ duration: 4.3, delay: 0.9, repeat: Infinity, ease: 'easeInOut' }}
                />
              </g>

              <motion.g
                style={{ originX: '746px', originY: '306px' }}
                animate={{ rotate: [0, 4.5, -2.5, 0] }}
                transition={{ duration: 5.4, repeat: Infinity, ease: 'easeInOut' }}
              >
                <path
                  d="M 744 306 C 776 326 786 382 782 446 C 780 468 776 488 774 504"
                  fill="none"
                  stroke="#4B160B"
                  strokeWidth="8"
                  strokeLinecap="round"
                />
                <path
                  d="M 774 494 C 760 510 756 534 768 552 C 779 540 788 518 784 494 Z"
                  fill="#240D07"
                />
              </motion.g>

              <path
                d="M 628 424 L 634 484 L 642 512 L 632 562 L 626 576 L 650 576 L 654 554 L 664 504 L 668 430 Z"
                fill="url(#ox-vantage-ank-coat-dark)"
              />
              <path d="M 623 574 L 640 574 L 643 589 L 619 589 Z" fill="#1F120E" />
              <path d="M 642 574 L 654 574 L 656 588 L 644 588 Z" fill="#2C1913" />

              <path
                d="M 358 424 L 352 486 L 348 516 L 344 568 L 339 580 L 364 580 L 369 556 L 376 512 L 392 436 Z"
                fill="url(#ox-vantage-ank-coat-dark)"
              />
              <path d="M 335 578 L 352 578 L 354 593 L 331 593 Z" fill="#1F120E" />
              <path d="M 354 578 L 367 578 L 368 592 L 355 592 Z" fill="#2D1A14" />

              <motion.g
                animate={{ y: [0, -2.5, 0] }}
                transition={{ duration: 4.8, repeat: Infinity, ease: 'easeInOut' }}
              >
                <path
                  d="M 380 318 C 414 272 456 238 498 222 C 532 210 562 246 604 256 C 652 268 708 264 742 288 C 768 308 770 364 756 416 C 744 456 734 484 744 516 L 732 574 L 704 574 L 712 518 L 696 476 C 682 448 666 438 640 444 C 588 456 534 468 486 462 L 478 518 L 478 576 L 448 576 L 448 516 L 434 466 C 414 474 396 466 382 446 C 368 428 356 412 356 388 C 356 364 364 340 380 318 Z"
                  fill="url(#ox-vantage-ank-coat)"
                  stroke="#2B140C"
                  strokeWidth="2.5"
                  strokeLinejoin="round"
                />

                <path
                  d="M 488 232 C 522 224 548 256 594 268 C 646 280 698 278 730 298"
                  fill="none"
                  stroke="#B85334"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  opacity="0.55"
                />
                <path
                  d="M 484 328 C 510 344 534 388 530 434"
                  fill="none"
                  stroke="#4B150A"
                  strokeWidth="3"
                  strokeLinecap="round"
                  opacity="0.5"
                />
                <path
                  d="M 656 324 C 676 354 684 394 676 432"
                  fill="none"
                  stroke="#4B150A"
                  strokeWidth="2.8"
                  strokeLinecap="round"
                  opacity="0.45"
                />

                <path
                  d="M 404 428 C 412 452 426 464 446 464"
                  fill="none"
                  stroke="#4A150B"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  opacity="0.7"
                />

                <path d="M 444 574 L 463 574 L 465 594 L 440 594 Z" fill="#1D110D" />
                <path d="M 465 574 L 482 574 L 484 593 L 466 593 Z" fill="#2E1B15" />
                <path d="M 700 572 L 718 572 L 720 592 L 696 592 Z" fill="#1D110D" />
                <path d="M 720 572 L 736 572 L 738 591 L 721 591 Z" fill="#2E1B15" />

                <path
                  d="M 372 414 C 402 444 452 438 486 392"
                  fill="none"
                  stroke="#1C4587"
                  strokeWidth="11"
                  strokeLinecap="round"
                />
                <path
                  d="M 378 418 C 406 444 450 438 482 396"
                  fill="none"
                  stroke="#F4E6CE"
                  strokeWidth="3.2"
                  strokeDasharray="4 7"
                  strokeLinecap="round"
                />
                <circle cx="432" cy="431" r="6.5" fill="#E3A73B" stroke="#2B140C" strokeWidth="1.8" />
                <path d="M 432 438 L 432 452" stroke="#E3A73B" strokeWidth="2.4" strokeLinecap="round" />

                <g>
                  <path
                    d="M 354 276 C 300 264 214 238 148 178 C 94 128 84 64 122 26 C 110 68 128 118 178 156 C 234 198 308 220 364 240 Z"
                    fill="url(#ox-vantage-ank-horn-l)"
                    stroke="#2B140C"
                    strokeWidth="2.6"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M 436 276 C 492 264 590 234 662 174 C 722 124 734 58 692 20 C 706 64 686 116 630 154 C 566 196 488 220 426 240 Z"
                    fill="url(#ox-vantage-ank-horn-r)"
                    stroke="#2B140C"
                    strokeWidth="2.6"
                    strokeLinejoin="round"
                  />

                  <path
                    d="M 340 242 C 334 256 334 268 338 278 M 322 238 C 316 252 316 264 320 274 M 304 232 C 298 246 298 258 302 268"
                    fill="none"
                    stroke="#9F8665"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    opacity="0.7"
                  />
                  <path
                    d="M 450 242 C 456 256 456 268 452 278 M 468 238 C 474 252 474 264 470 274 M 486 232 C 492 246 492 258 488 268"
                    fill="none"
                    stroke="#9F8665"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    opacity="0.7"
                  />

                  {thermalView && (
                    <g opacity="0.92">
                      <motion.path
                        d="M 350 258 C 290 242 208 212 156 164 C 122 132 108 92 118 52"
                        fill="none"
                        stroke="url(#ox-vantage-ank-thermal)"
                        strokeWidth="6"
                        strokeLinecap="round"
                        strokeDasharray="10 6"
                        animate={{ strokeDashoffset: [32, 0] }}
                        transition={{ duration: 2.2, repeat: Infinity, ease: 'linear' }}
                      />
                      <motion.path
                        d="M 440 258 C 504 242 592 208 652 160 C 692 128 708 86 696 46"
                        fill="none"
                        stroke="url(#ox-vantage-ank-thermal)"
                        strokeWidth="6"
                        strokeLinecap="round"
                        strokeDasharray="10 6"
                        animate={{ strokeDashoffset: [32, 0] }}
                        transition={{ duration: 2.2, repeat: Infinity, ease: 'linear' }}
                      />
                      <path
                        d="M 320 246 L 288 220 M 266 226 L 236 196 M 212 198 L 184 172 M 472 246 L 504 220 M 530 224 L 560 194 M 586 196 L 616 168"
                        stroke="#F58C2A"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                      />
                    </g>
                  )}

                  <motion.path
                    d="M 340 290 C 314 290 282 300 264 318 C 284 328 316 326 340 312 Z"
                    fill="#7C2612"
                    stroke="#2B140C"
                    strokeWidth="2.4"
                    style={{ originX: '340px', originY: '300px' }}
                    animate={{ rotate: [0, -4, 0] }}
                    transition={{ duration: 4.4, repeat: Infinity, ease: 'easeInOut' }}
                  />
                  <path d="M 332 298 C 312 300 292 306 278 315 C 296 318 316 315 332 306 Z" fill="#C97F5A" />

                  <motion.path
                    d="M 450 290 C 476 290 508 300 526 318 C 506 328 474 326 450 312 Z"
                    fill="#7C2612"
                    stroke="#2B140C"
                    strokeWidth="2.4"
                    style={{ originX: '450px', originY: '300px' }}
                    animate={{ rotate: [0, 3.5, 0] }}
                    transition={{ duration: 4.8, delay: 0.5, repeat: Infinity, ease: 'easeInOut' }}
                  />
                  <path d="M 458 298 C 478 300 498 306 512 315 C 494 318 474 315 458 306 Z" fill="#C97F5A" />

                  <path
                    d="M 352 252 C 372 240 418 240 438 252 C 454 270 462 304 452 340 C 446 364 434 388 426 408 C 414 422 376 422 364 408 C 356 388 344 364 338 340 C 328 304 336 270 352 252 Z"
                    fill="#8A2D16"
                    stroke="#2B140C"
                    strokeWidth="2.6"
                  />

                  <path
                    d="M 384 264 C 392 258 402 258 408 266 L 403 364 C 398 370 390 370 385 364 Z"
                    fill="#F5EADB"
                    opacity="0.92"
                  />

                  <path d="M 346 318 C 356 312 368 314 374 322" fill="none" stroke="#2B140C" strokeWidth="2.5" strokeLinecap="round" />
                  <ellipse cx="360" cy="326" rx="8.5" ry="6" fill="#1C0E0A" />
                  <circle cx="358" cy="324" r="2.2" fill="#FAF3E4" />

                  <path d="M 444 318 C 434 312 422 314 416 322" fill="none" stroke="#2B140C" strokeWidth="2.5" strokeLinecap="round" />
                  <ellipse cx="430" cy="326" rx="8.5" ry="6" fill="#1C0E0A" />
                  <circle cx="428" cy="324" r="2.2" fill="#FAF3E4" />

                  <path
                    d="M 362 384 C 376 376 414 376 428 384 C 436 396 434 416 422 426 C 408 434 382 434 368 426 C 356 416 354 396 362 384 Z"
                    fill="#2A1814"
                    stroke="#1A0D0A"
                    strokeWidth="2.2"
                  />
                  <path
                    d="M 372 402 C 374 394 384 394 386 403 C 383 409 374 409 372 402 Z"
                    fill="#0E0706"
                  />
                  <path
                    d="M 418 402 C 416 394 406 394 404 403 C 407 409 416 409 418 402 Z"
                    fill="#0E0706"
                  />
                  <path
                    d="M 378 420 Q 395 426 412 420"
                    fill="none"
                    stroke="#5B3930"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </g>
              </motion.g>
            </motion.svg>

            <div className="ox-vantage-ank-controls">
              <button
                type="button"
                className={`ox-vantage-ank-toggle ${thermalView ? 'is-active' : ''}`}
                onClick={() => setThermalView((v) => !v)}
                aria-pressed={thermalView}
              >
                <span className="ox-vantage-ank-dot" aria-hidden="true" />
                {thermalView ? 'Hide Horn Vascular Core' : 'Inspect Horn Thermoregulation'}
              </button>
            </div>
          </div>
        </section>

        <section className="ox-vantage-ank-frieze" aria-label="Ankole physiological specifications">
          {METRICS.map((item) => (
            <article key={item.label} className="ox-vantage-ank-card">
              <p className="ox-vantage-ank-val">{item.value}</p>
              <h2 className="ox-vantage-ank-card-title">{item.label}</h2>
              <p className="ox-vantage-ank-card-body">{item.detail}</p>
            </article>
          ))}
        </section>

        <section className="ox-vantage-ank-notes">
          <div className="ox-vantage-ank-essay">
            <h2 className="ox-vantage-ank-subhead">Radiators Crowned in Bone</h2>
            <p>
              Selected for centuries by Bahima and Tutsi pastoralists across Uganda, Rwanda, and Burundi,
              the Ankole-Watusi carries the widest horn span in the bovine world. Rather than solid dead weight,
              each horn houses a honeycomb of spongy bone threaded with fine blood vessels that circulate
              arterial heat upward into the breeze before returning cooled blood toward the skull.
            </p>
          </div>

          <div className="ox-vantage-ank-anatomy">
            <div className="ox-vantage-ank-pills" role="tablist" aria-label="Thermal anatomy regions">
              {THERMAL_NODES.map((node) => (
                <button
                  key={node.id}
                  type="button"
                  role="tab"
                  aria-selected={activeNode === node.id}
                  className={`ox-vantage-ank-pill ${activeNode === node.id ? 'is-selected' : ''}`}
                  onClick={() => setActiveNode(node.id)}
                >
                  {node.label}
                </button>
              ))}
            </div>
            <p className="ox-vantage-ank-node-copy">
              {THERMAL_NODES.find((n) => n.id === activeNode)?.note}
            </p>
          </div>
        </section>

        <footer className="ox-vantage-ank-footer">
          <div className="ox-vantage-ank-waxseal" aria-label="Author signature seal">
            <span className="ox-vantage-ank-wax-ring" aria-hidden="true" />
            <span className="ox-vantage-ank-wax-text">SET XXXVI · DESIGNED BY GEMINI 4 NEON</span>
          </div>
        </footer>
      </main>
    </div>
  )
}
