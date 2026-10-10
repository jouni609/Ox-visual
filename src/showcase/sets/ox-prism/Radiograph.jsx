import { motion } from 'framer-motion'
import './radiograph.css'

export default function Radiograph() {
  return (
    <div className="th-rad ox-prism-rad">
      <div className="ox-prism-rad-container">
        <header className="ox-prism-rad-header">
          <div className="ox-prism-rad-header-meta">
            <span className="ox-prism-rad-tag">
              <span className="ox-prism-rad-pulse-dot" />
              CASE REF: RAD-0382-OX
            </span>
            <span>VETERINARY RADIOLOGY SUITE IV</span>
            <span>PROJECTION: RIGHT LATERAL WHOLE BODY</span>
          </div>
          <h1 className="ox-prism-rad-title">Radiograph of an Ox</h1>
          <p className="ox-prism-rad-lead">
            Dual-exposure lateral survey of mature working bovine (Bos taurus). High-kilovoltage penetration illuminates complete axial osteology, lyre horn cores, and polyvisceral contours against illuminated emulsion.
          </p>
        </header>

        <section className="ox-prism-rad-lightbox-stage" aria-label="Radiographic Lightbox Viewer">
          <div className="ox-prism-rad-clips" aria-hidden="true">
            <div className="ox-prism-rad-clip" />
            <div className="ox-prism-rad-clip" />
          </div>

          <div className="ox-prism-rad-lightbox-grid">
            <div className="ox-prism-rad-film-col">
              <div className="ox-prism-rad-film-frame">
                <div className="ox-prism-rad-film-topbar">
                  <span>STUDY ID: BT-840-LAT</span>
                  <span>COLLIMATION: FULL FIELD 800×520</span>
                  <span>DENSITY: 2.85 OD</span>
                </div>

                <div className="ox-prism-rad-film-svg-wrapper">
                  <motion.div
                    className="ox-prism-rad-scanbar"
                    aria-hidden="true"
                    animate={{ x: ['-20%', '820%'] }}
                    transition={{
                      duration: 8,
                      ease: 'easeInOut',
                      repeat: Infinity,
                      repeatType: 'reverse',
                    }}
                  />

                  <svg
                    className="ox-prism-rad-ox-svg"
                    viewBox="0 0 800 520"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    aria-label="Lateral radiograph illustration of an ox"
                  >
                    <defs>
                      <filter id="ox-prism-rad-glow" x="-20%" y="-20%" width="140%" height="140%">
                        <feGaussianBlur stdDeviation="3.5" result="blur" />
                        <feComposite in="SourceGraphic" in2="blur" operator="over" />
                      </filter>
                      <linearGradient id="ox-prism-rad-tgrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#5FD3E6" stopOpacity="0.32" />
                        <stop offset="60%" stopColor="#5FD3E6" stopOpacity="0.22" />
                        <stop offset="100%" stopColor="#13303F" stopOpacity="0.4" />
                      </linearGradient>
                      <pattern id="ox-prism-rad-retic-pat" width="10" height="10" patternUnits="userSpaceOnUse">
                        <path d="M 5 0 L 10 2.8 L 10 8.5 L 5 10 L 0 8.5 L 0 2.8 Z" fill="none" stroke="#5FD3E6" strokeWidth="0.6" strokeOpacity="0.35" />
                      </pattern>
                    </defs>

                    <rect x="0" y="0" width="800" height="520" fill="#0B1A24" fillOpacity="0.3" />

                    <g className="ox-prism-rad-reticle" stroke="#5FD3E6" strokeOpacity="0.12" strokeWidth="0.75" strokeDasharray="3 4">
                      <line x1="40" y1="260" x2="760" y2="260" />
                      <line x1="400" y1="30" x2="400" y2="490" />
                      <circle cx="400" cy="260" r="140" fill="none" />
                      <circle cx="400" cy="260" r="240" fill="none" />
                      <circle cx="70" cy="60" r="16" fill="none" />
                      <text x="64" y="66" fill="#5FD3E6" fillOpacity="0.3" fontFamily="var(--rad-font-display)" fontSize="16" fontWeight="700">L</text>
                    </g>

                    <g className="ox-prism-rad-far-horn">
                      <path
                        d="M 150 182 C 170 172 186 152 186 128 C 186 116 180 106 172 100 C 175 116 172 138 162 156 Z"
                        fill="#9EC0C7"
                        fillOpacity="0.75"
                        stroke="#3D758C"
                        strokeWidth="1.8"
                      />
                    </g>

                    <g className="ox-prism-rad-far-legs-tissue" fill="#0E2837" fillOpacity="0.85" stroke="#3D758C" strokeWidth="2">
                      <path d="M 242 335 L 248 400 L 252 448 L 246 466 L 282 466 L 278 448 L 284 400 L 288 335 Z" />
                      <path d="M 527 325 C 527 350 530 375 542 390 L 572 410 L 574 448 L 568 466 L 604 466 L 598 448 L 596 416 L 604 405 C 610 375 614 345 614 325 Z" />
                      <polygon points="246,466 282,466 280,458 248,458" fill="#06121B" stroke="#3D758C" strokeWidth="1.5" />
                      <line x1="264" y1="458" x2="264" y2="466" stroke="#3D758C" strokeWidth="1.5" />
                      <polygon points="568,466 604,466 602,458 570,458" fill="#06121B" stroke="#3D758C" strokeWidth="1.5" />
                      <line x1="586" y1="458" x2="586" y2="466" stroke="#3D758C" strokeWidth="1.5" />
                    </g>

                    <g className="ox-prism-rad-far-skeleton" stroke="#688F9B" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.45">
                      <path d="M 256 268 L 274 335 L 264 395 L 264 448 L 260 464" />
                      <path d="M 548 245 L 542 336 L 588 405 L 586 448 L 584 464" />
                    </g>

                    <g className="ox-prism-rad-tissue-group" filter="url(#ox-prism-rad-glow)">
                      <path
                        className="ox-prism-rad-body-tissue"
                        d="M 140 182 C 114 196 82 245 72 275 C 66 295 66 318 72 325 C 78 327 96 327 108 325 C 124 320 140 298 142 282 C 138 295 144 335 178 375 C 196 368 204 350 206 335 C 240 335 252 335 252 335 C 310 366 410 372 490 360 C 530 354 560 338 565 325 C 630 325 652 325 652 325 C 664 260 662 230 646 185 C 620 175 580 164 490 172 C 410 176 330 168 255 150 C 205 162 170 178 140 182 Z"
                        fill="url(#ox-prism-rad-tgrad)"
                        stroke="#5FD3E6"
                        strokeWidth="2.5"
                      />

                      <path
                        className="ox-prism-rad-foreleg-tissue"
                        d="M 206 335 L 212 400 L 216 450 L 208 474 L 246 474 L 242 450 L 248 400 L 252 335 Z"
                        fill="url(#ox-prism-rad-tgrad)"
                        stroke="#5FD3E6"
                        strokeWidth="2.5"
                      />

                      <path
                        className="ox-prism-rad-hindleg-tissue"
                        d="M 565 325 C 565 350 568 375 580 390 L 610 410 L 612 450 L 604 474 L 642 474 L 636 450 L 634 416 L 642 405 C 648 375 652 345 652 325 Z"
                        fill="url(#ox-prism-rad-tgrad)"
                        stroke="#5FD3E6"
                        strokeWidth="2.5"
                      />

                      <path
                        className="ox-prism-rad-near-horn"
                        d="M 128 190 C 106 186 86 170 82 146 C 80 130 88 116 100 106 C 97 122 99 142 112 158 C 121 168 134 174 148 178 Z"
                        fill="#EAF6F8"
                        fillOpacity="0.9"
                        stroke="#5FD3E6"
                        strokeWidth="2.2"
                      />

                      <path
                        className="ox-prism-rad-near-ear-tissue"
                        d="M 150 206 C 170 196 198 200 214 212 C 198 224 168 224 150 214 Z"
                        fill="url(#ox-prism-rad-tgrad)"
                        stroke="#5FD3E6"
                        strokeWidth="2"
                      />

                      <path
                        className="ox-prism-rad-tail-tissue"
                        d="M 646 186 C 654 240 662 310 664 380 C 665 400 666 422 666 430 C 660 442 658 456 664 472 C 670 472 674 456 668 430 C 667 420 666 400 664 380 Z"
                        fill="url(#ox-prism-rad-tgrad)"
                        stroke="#5FD3E6"
                        strokeWidth="2"
                      />

                      <g className="ox-prism-rad-hooves-tissue">
                        <polygon points="208,474 246,474 244,464 210,464" fill="#081822" stroke="#5FD3E6" strokeWidth="2" />
                        <line x1="227" y1="464" x2="227" y2="474" stroke="#5FD3E6" strokeWidth="2" />
                        <polygon points="604,474 642,474 640,464 606,464" fill="#081822" stroke="#5FD3E6" strokeWidth="2" />
                        <line x1="623" y1="464" x2="623" y2="474" stroke="#5FD3E6" strokeWidth="2" />
                      </g>
                    </g>

                    <line x1="126" y1="188" x2="154" y2="182" stroke="#EAF6F8" strokeWidth="4.5" strokeLinecap="round" />
                    <ellipse cx="78" cy="296" rx="5" ry="9" transform="rotate(-15 78 296)" fill="#0B1A24" stroke="#5FD3E6" strokeWidth="2" />
                    <line x1="156" y1="210" x2="204" y2="212" stroke="#5FD3E6" strokeWidth="1.5" strokeOpacity="0.8" />

                    <g className="ox-prism-rad-viscera">
                      <path
                        d="M 410 215 C 470 205 540 210 580 225 C 600 245 595 285 580 315 C 550 340 480 355 420 340 C 390 320 395 240 410 215 Z"
                        fill="#0E2D3E"
                        fillOpacity="0.45"
                        stroke="#5FD3E6"
                        strokeWidth="1.25"
                        strokeDasharray="4 3"
                      />
                      <line x1="412" y1="245" x2="578" y2="245" stroke="#5FD3E6" strokeWidth="1" strokeOpacity="0.6" strokeDasharray="3 2" />
                      <path
                        d="M 330 265 C 375 260 395 285 390 325 C 365 345 335 342 320 320 C 315 295 320 275 330 265 Z"
                        fill="url(#ox-prism-rad-retic-pat)"
                        stroke="#5FD3E6"
                        strokeWidth="1.2"
                        strokeOpacity="0.7"
                      />
                      <path
                        d="M 265 280 C 278 280 286 295 282 320 C 270 330 258 325 260 305 Z"
                        fill="#5FD3E6"
                        fillOpacity="0.18"
                        stroke="#5FD3E6"
                        strokeWidth="1"
                        strokeOpacity="0.5"
                      />
                      <path
                        d="M 140 235 Q 190 220 246 220"
                        fill="none"
                        stroke="#5FD3E6"
                        strokeWidth="4"
                        strokeOpacity="0.25"
                        strokeDasharray="2 3"
                      />
                    </g>

                    <g className="ox-prism-rad-skeleton" stroke="#EAF6F8" strokeLinecap="round" strokeLinejoin="round">
                      <g className="ox-prism-rad-skull">
                        <path
                          d="M 140 186 C 128 188 116 196 110 206 C 104 214 102 226 108 236 C 116 242 130 242 138 236 C 144 226 146 205 140 186 Z"
                          fill="#EAF6F8"
                          fillOpacity="0.32"
                          strokeWidth="2.2"
                        />
                        <circle cx="114" cy="220" r="5.5" fill="#0B1A24" strokeWidth="2" />
                        <path
                          d="M 110 208 L 84 265 L 72 278 C 74 290 84 292 88 284 L 118 238 Z"
                          fill="#EAF6F8"
                          fillOpacity="0.32"
                          strokeWidth="2"
                        />
                        <path
                          d="M 68 288 Q 66 304 70 320"
                          stroke="#EAF6F8"
                          strokeWidth="4.5"
                          strokeLinecap="round"
                          fill="none"
                        />
                        <path
                          d="M 136 240 C 138 258 136 276 132 280 C 120 286 102 305 76 322 L 72 322 C 88 316 104 295 116 250 Z"
                          fill="#EAF6F8"
                          fillOpacity="0.28"
                          strokeWidth="2"
                        />
                        <line x1="112" y1="292" x2="132" y2="272" strokeWidth="4" stroke="#EAF6F8" />
                        <line x1="74" y1="322" x2="98" y2="324" strokeWidth="2.8" stroke="#EAF6F8" />
                      </g>

                      <g className="ox-prism-rad-horn-cores">
                        <path
                          d="M 130 188 C 112 184 94 170 90 148 C 88 134 94 122 104 114 C 102 128 104 144 116 158 C 124 168 134 172 144 176 Z"
                          fill="#EAF6F8"
                          fillOpacity="0.95"
                          strokeWidth="1.8"
                        />
                      </g>

                      <g className="ox-prism-rad-cervical" strokeWidth="2.2" fill="#EAF6F8" fillOpacity="0.32">
                        <polygon points="152,198 162,192 166,204 156,208" />
                        <polygon points="166,192 178,188 182,200 170,204" />
                        <polygon points="182,188 194,184 198,196 186,200" />
                        <polygon points="198,184 210,180 214,192 202,196" />
                        <polygon points="214,180 226,176 230,188 218,192" />
                        <polygon points="230,176 242,170 246,182 234,188" />
                        <polygon points="246,170 256,166 260,178 250,182" />
                      </g>

                      <g className="ox-prism-rad-thoracic-lumbar">
                        <path d="M 248 172 Q 330 176 430 178 Q 480 176 535 175" fill="none" strokeWidth="4.5" stroke="#EAF6F8" />
                        <g strokeWidth="2.2">
                          <line x1="252" y1="168" x2="250" y2="136" strokeWidth="2.5" />
                          <line x1="264" y1="168" x2="260" y2="128" strokeWidth="3" />
                          <line x1="276" y1="168" x2="272" y2="130" strokeWidth="3" />
                          <line x1="288" y1="169" x2="286" y2="138" strokeWidth="2.5" />
                          <line x1="300" y1="170" x2="300" y2="144" />
                          <line x1="314" y1="171" x2="316" y2="150" />
                          <line x1="328" y1="172" x2="332" y2="154" />
                          <line x1="342" y1="173" x2="348" y2="158" />
                          <line x1="358" y1="174" x2="366" y2="160" />
                          <line x1="374" y1="174" x2="384" y2="162" />
                          <line x1="390" y1="175" x2="402" y2="164" />
                          <line x1="406" y1="175" x2="420" y2="166" />
                          <line x1="422" y1="176" x2="436" y2="168" />
                          <line x1="446" y1="176" x2="456" y2="170" strokeWidth="1.8" />
                          <line x1="462" y1="176" x2="472" y2="170" strokeWidth="1.8" />
                          <line x1="478" y1="176" x2="488" y2="170" strokeWidth="1.8" />
                          <line x1="494" y1="176" x2="504" y2="170" strokeWidth="1.8" />
                          <line x1="510" y1="175" x2="520" y2="170" strokeWidth="1.8" />
                          <line x1="526" y1="175" x2="534" y2="170" strokeWidth="1.8" />
                        </g>
                      </g>

                      <g className="ox-prism-rad-ribs" fill="none" strokeWidth="2.2">
                        <path d="M 252 174 C 260 200 256 245 244 310" />
                        <path d="M 266 174 C 278 205 274 255 258 318" />
                        <path d="M 280 174 C 296 210 292 265 272 326" />
                        <path d="M 294 175 C 314 215 310 275 286 332" />
                        <path d="M 308 175 C 332 218 328 282 302 336" />
                        <path d="M 324 176 C 350 220 346 288 318 338" />
                        <path d="M 340 176 C 368 222 364 292 334 340" />
                        <path d="M 356 177 C 386 225 382 295 352 340" />
                        <path d="M 372 177 C 404 225 400 295 370 338" />
                        <path d="M 388 178 C 420 228 416 292 388 334" />
                        <path d="M 404 178 C 434 228 430 288 406 328" />
                        <path d="M 420 178 C 448 226 444 280 422 320" />
                        <path d="M 436 178 C 460 222 456 270 438 308" />
                        <path d="M 230 318 L 332 342" strokeWidth="4.5" stroke="#EAF6F8" strokeLinecap="square" />
                      </g>

                      <g className="ox-prism-rad-forelimb-near">
                        <polygon points="248,186 214,258 236,264" fill="#EAF6F8" fillOpacity="0.32" strokeWidth="2" />
                        <line x1="238" y1="196" x2="220" y2="256" strokeWidth="1.8" />
                        <path d="M 220 260 L 244 332" strokeWidth="4" stroke="#EAF6F8" />
                        <path d="M 248 320 L 244 336 L 226 396" strokeWidth="3.5" stroke="#EAF6F8" />
                        <circle cx="226" cy="396" r="4.5" fill="#EAF6F8" strokeWidth="1.5" />
                        <line x1="226" y1="402" x2="226" y2="448" strokeWidth="3.8" stroke="#EAF6F8" />
                        <circle cx="226" cy="452" r="3" fill="#EAF6F8" strokeWidth="1" />
                        <line x1="224" y1="454" x2="220" y2="466" strokeWidth="2.5" />
                        <line x1="228" y1="454" x2="232" y2="466" strokeWidth="2.5" />
                      </g>

                      <g className="ox-prism-rad-pelvis-caudal">
                        <path
                          d="M 536 175 L 576 170 L 646 230 L 610 248 L 580 240 Z"
                          fill="#EAF6F8"
                          fillOpacity="0.35"
                          strokeWidth="2.2"
                        />
                        <ellipse cx="604" cy="242" rx="6" ry="4" fill="#0B1A24" strokeWidth="1.5" />
                        <path d="M 536 175 L 590 176" strokeWidth="4.5" stroke="#EAF6F8" />
                        <g strokeWidth="2" fill="#EAF6F8" fillOpacity="0.6">
                          <circle cx="646" cy="188" r="2.5" />
                          <circle cx="650" cy="210" r="2.3" />
                          <circle cx="653" cy="235" r="2.2" />
                          <circle cx="656" cy="260" r="2.1" />
                          <circle cx="658" cy="285" r="2.0" />
                          <circle cx="660" cy="310" r="1.9" />
                          <circle cx="662" cy="335" r="1.8" />
                          <circle cx="663" cy="360" r="1.7" />
                          <circle cx="664" cy="380" r="1.6" />
                          <circle cx="665" cy="400" r="1.5" />
                          <circle cx="665" cy="415" r="1.4" />
                        </g>
                      </g>

                      <g className="ox-prism-rad-hindlimb-near">
                        <path d="M 580 240 L 572 336" strokeWidth="4.2" stroke="#EAF6F8" />
                        <circle cx="566" cy="334" r="3.5" fill="#EAF6F8" strokeWidth="1.5" />
                        <path d="M 574 342 L 624 406" strokeWidth="3.8" stroke="#EAF6F8" />
                        <path d="M 620 406 L 636 398 L 634 412 Z" fill="#EAF6F8" strokeWidth="1.8" />
                        <line x1="624" y1="412" x2="616" y2="448" strokeWidth="3.6" stroke="#EAF6F8" />
                        <circle cx="616" cy="452" r="3" fill="#EAF6F8" strokeWidth="1" />
                        <line x1="614" y1="454" x2="610" y2="466" strokeWidth="2.5" />
                        <line x1="618" y1="454" x2="622" y2="466" strokeWidth="2.5" />
                      </g>
                    </g>

                    <g className="ox-prism-rad-callouts">
                      <g className="ox-prism-rad-callout">
                        <motion.path
                          d="M 570 95 L 515 145 L 485 240"
                          fill="none"
                          stroke="#FF8A3D"
                          strokeWidth="1.5"
                          strokeDasharray="4 2"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ duration: 1.2, delay: 0.2 }}
                        />
                        <circle cx="485" cy="240" r="4.5" fill="#FF8A3D" />
                        <rect x="560" y="80" width="30" height="24" rx="2" fill="#FF8A3D" />
                        <text x="568" y="97" fill="#0B1A24" fontFamily="var(--rad-font-display)" fontSize="14" fontWeight="700">01</text>
                      </g>

                      <g className="ox-prism-rad-callout">
                        <motion.path
                          d="M 45 42 L 65 72 L 95 126"
                          fill="none"
                          stroke="#FF8A3D"
                          strokeWidth="1.5"
                          strokeDasharray="4 2"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ duration: 1.2, delay: 0.4 }}
                        />
                        <circle cx="95" cy="126" r="4.5" fill="#FF8A3D" />
                        <rect x="25" y="28" width="30" height="24" rx="2" fill="#FF8A3D" />
                        <text x="33" y="45" fill="#0B1A24" fontFamily="var(--rad-font-display)" fontSize="14" fontWeight="700">02</text>
                      </g>

                      <g className="ox-prism-rad-callout">
                        <motion.path
                          d="M 720 370 L 675 395 L 636 402"
                          fill="none"
                          stroke="#FF8A3D"
                          strokeWidth="1.5"
                          strokeDasharray="4 2"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ duration: 1.2, delay: 0.6 }}
                        />
                        <circle cx="636" cy="402" r="4.5" fill="#FF8A3D" />
                        <rect x="710" y="358" width="30" height="24" rx="2" fill="#FF8A3D" />
                        <text x="718" y="375" fill="#0B1A24" fontFamily="var(--rad-font-display)" fontSize="14" fontWeight="700">03</text>
                      </g>

                      <g className="ox-prism-rad-callout">
                        <motion.path
                          d="M 115 425 L 148 395 L 175 365"
                          fill="none"
                          stroke="#FF8A3D"
                          strokeWidth="1.5"
                          strokeDasharray="4 2"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ duration: 1.2, delay: 0.8 }}
                        />
                        <circle cx="175" cy="365" r="4.5" fill="#FF8A3D" />
                        <rect x="95" y="412" width="30" height="24" rx="2" fill="#FF8A3D" />
                        <text x="103" y="429" fill="#0B1A24" fontFamily="var(--rad-font-display)" fontSize="14" fontWeight="700">04</text>
                      </g>
                    </g>
                  </svg>
                </div>

                <div className="ox-prism-rad-film-edge">
                  <div className="ox-prism-rad-sprockets" aria-hidden="true">
                    <span className="ox-prism-rad-sprocket" />
                    <span className="ox-prism-rad-sprocket" />
                    <span className="ox-prism-rad-sprocket" />
                  </div>
                  <div className="ox-prism-rad-signature">
                    SET XXXII · DESIGNED BY ANTIGRAVITY
                  </div>
                  <div className="ox-prism-rad-film-brand">ESTAR SAFETY FILM 842-A</div>
                  <div className="ox-prism-rad-film-meta">EXP. 90kVp / 32mAs · GRID 8:1</div>
                  <div className="ox-prism-rad-sprockets" aria-hidden="true">
                    <span className="ox-prism-rad-sprocket" />
                    <span className="ox-prism-rad-sprocket" />
                  </div>
                </div>
              </div>
            </div>

            <div className="ox-prism-rad-panel-col">
              <div className="ox-prism-rad-panel-card">
                <div className="ox-prism-rad-panel-title">
                  <span>CLINICAL FINDINGS</span>
                  <span className="ox-prism-rad-pulse-dot" />
                </div>
                <ul className="ox-prism-rad-findings-list">
                  <li className="ox-prism-rad-finding-item">
                    <div className="ox-prism-rad-finding-head">
                      <span>01 · RETICULORUMEN COMPARTMENT</span>
                      <span className="ox-prism-rad-finding-num">185 L</span>
                    </div>
                    <p className="ox-prism-rad-finding-desc">
                      Sublumbar gas-fluid interface sharply delineated. Massive primary fermentation chamber displays uniform wall density with physiological gas cap occupying dorsal third.
                    </p>
                  </li>

                  <li className="ox-prism-rad-finding-item">
                    <div className="ox-prism-rad-finding-head">
                      <span>02 · CORNUAL PROCESSES</span>
                      <span className="ox-prism-rad-finding-num">BILATERAL</span>
                    </div>
                    <p className="ox-prism-rad-finding-desc">
                      Frontal bone bony cores show intact trabecular architecture extending into forward-curving lyre sheaths. Extensive pneumatization continuous with frontal sinus.
                    </p>
                  </li>

                  <li className="ox-prism-rad-finding-item">
                    <div className="ox-prism-rad-finding-head">
                      <span>03 · CALCANEAL TUBER / TARSUS</span>
                      <span className="ox-prism-rad-finding-num">LEVER ARM</span>
                    </div>
                    <p className="ox-prism-rad-finding-desc">
                      Pronounced backward projection of calcaneus provides mechanical lever for common calcanean tendon. Tarsal joint spaces symmetrical; cortical margins intact.
                    </p>
                  </li>

                  <li className="ox-prism-rad-finding-item">
                    <div className="ox-prism-rad-finding-head">
                      <span>04 · CERVICAL CUTIS &amp; STERNEBRAE</span>
                      <span className="ox-prism-rad-finding-num">DEWLAP</span>
                    </div>
                    <p className="ox-prism-rad-finding-desc">
                      Extensive pendulous skin fold along ventral cervical margin. Complete synchondrosis of seven sternebral segments; normal sternal cushion radiopacity.
                    </p>
                  </li>
                </ul>
              </div>

              <div className="ox-prism-rad-panel-card">
                <div className="ox-prism-rad-panel-title">
                  <span>SUBJECT DATA SHEET</span>
                  <span>MALE CASTRATE</span>
                </div>
                <div className="ox-prism-rad-specs-grid">
                  <div className="ox-prism-rad-spec-cell">
                    <span className="ox-prism-rad-spec-label">SPECIES</span>
                    <span className="ox-prism-rad-spec-val">Bos taurus</span>
                  </div>
                  <div className="ox-prism-rad-spec-cell">
                    <span className="ox-prism-rad-spec-label">BODY MASS</span>
                    <span className="ox-prism-rad-spec-val">840 kg</span>
                  </div>
                  <div className="ox-prism-rad-spec-cell">
                    <span className="ox-prism-rad-spec-label">ESTIMATED AGE</span>
                    <span className="ox-prism-rad-spec-val">6.5 Years</span>
                  </div>
                  <div className="ox-prism-rad-spec-cell">
                    <span className="ox-prism-rad-spec-label">GRID RATIO</span>
                    <span className="ox-prism-rad-spec-val">8:1 Linear</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="ox-prism-rad-section ox-prism-rad-skeletal" aria-labelledby="ox-prism-rad-skel-title">
          <div className="ox-prism-rad-section-header">
            <span className="ox-prism-rad-section-kicker">OSTEOLOGICAL CENSUS</span>
            <h2 id="ox-prism-rad-skel-title" className="ox-prism-rad-section-h2">Skeletal Count &amp; Architecture</h2>
            <p className="ox-prism-rad-section-p">
              The adult bovine skeleton comprises approximately 207 bones, engineered to anchor immense forequarter muscularity and support an expansive polyvisceral digestion apparatus.
            </p>
          </div>

          <div className="ox-prism-rad-stats-grid">
            <div className="ox-prism-rad-stat-card">
              <span className="ox-prism-rad-stat-number">207</span>
              <span className="ox-prism-rad-stat-title">Total Skeletal Elements</span>
              <p className="ox-prism-rad-stat-body">
                Complete adult bovine osteological framework excluding variable sesamoids and cornual ossicles.
              </p>
            </div>

            <div className="ox-prism-rad-stat-card">
              <span className="ox-prism-rad-stat-number">13</span>
              <span className="ox-prism-rad-stat-title">Rib Pairs (Costae)</span>
              <p className="ox-prism-rad-stat-body">
                8 sternal (true) pairs directly articulating with sternebrae; 5 asternal (false) pairs forming costal arch.
              </p>
            </div>

            <div className="ox-prism-rad-stat-card">
              <span className="ox-prism-rad-stat-number">7</span>
              <span className="ox-prism-rad-stat-title">Cervical Vertebrae</span>
              <p className="ox-prism-rad-stat-body">
                C1 atlas with broad lateral wings and C2 axis with odontoid process, adapted for heavy head carriage.
              </p>
            </div>

            <div className="ox-prism-rad-stat-card">
              <span className="ox-prism-rad-stat-number">13</span>
              <span className="ox-prism-rad-stat-title">Thoracic Vertebrae</span>
              <p className="ox-prism-rad-stat-body">
                Bear elongated dorsal spinous processes (T2–T4) forming the prominent skeletal crest of the withers.
              </p>
            </div>

            <div className="ox-prism-rad-stat-card">
              <span className="ox-prism-rad-stat-number">6</span>
              <span className="ox-prism-rad-stat-title">Lumbar Vertebrae</span>
              <p className="ox-prism-rad-stat-body">
                Broad, horizontal transverse processes provide structural attachment for sublumbar abdominal wall muscles.
              </p>
            </div>

            <div className="ox-prism-rad-stat-card">
              <span className="ox-prism-rad-stat-number">5</span>
              <span className="ox-prism-rad-stat-title">Fused Sacral Vertebrae</span>
              <p className="ox-prism-rad-stat-body">
                Consolidated into a rigid bony wedge transmitting propulsive locomotor thrust from hindlimbs to the spine.
              </p>
            </div>

            <div className="ox-prism-rad-stat-card">
              <span className="ox-prism-rad-stat-number">18–20</span>
              <span className="ox-prism-rad-stat-title">Coccygeal Vertebrae</span>
              <p className="ox-prism-rad-stat-body">
                Progressively tapering caudal chain providing mobility to the tail ending in the terminal hair switch.
              </p>
            </div>

            <div className="ox-prism-rad-stat-card">
              <span className="ox-prism-rad-stat-number">III &amp; IV</span>
              <span className="ox-prism-rad-stat-title">Primary Cloven Digits</span>
              <p className="ox-prism-rad-stat-body">
                Even-toed ungulate architecture: weight bearing concentrates symmetrically on third and fourth digital rays.
              </p>
            </div>

            <div className="ox-prism-rad-stat-card">
              <span className="ox-prism-rad-stat-number">0 / 8</span>
              <span className="ox-prism-rad-stat-title">Dental Pad vs Incisors</span>
              <p className="ox-prism-rad-stat-body">
                Absence of upper incisors; a tough fibrocartilaginous dental pad opposes eight spatulate lower incisors.
              </p>
            </div>
          </div>
        </section>

        <section className="ox-prism-rad-section ox-prism-rad-stomach" aria-labelledby="ox-prism-rad-stom-title">
          <div className="ox-prism-rad-section-header">
            <span className="ox-prism-rad-section-kicker">POLYGASTRIC SPECIALIZATION</span>
            <h2 id="ox-prism-rad-stom-title" className="ox-prism-rad-section-h2">The Four-Chambered Stomach</h2>
            <p className="ox-prism-rad-section-p">
              The ruminant forestomach complex occupies over 70% of the abdominal cavity. Microbial fermentation converts fibrous forage into volatile fatty acids and microbial protein.
            </p>
          </div>

          <div className="ox-prism-rad-stomach-wrapper">
            <div className="ox-prism-rad-stomach-diagram">
              <svg
                className="ox-prism-rad-stomach-svg"
                viewBox="0 0 760 360"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label="Anatomical diagram of the four-chambered bovine stomach"
              >
                <rect x="0" y="0" width="760" height="360" rx="4" fill="#0A1822" />

                <path
                  d="M 60 70 L 170 120"
                  stroke="#5FD3E6"
                  strokeWidth="8"
                  strokeOpacity="0.4"
                  strokeLinecap="round"
                />
                <text x="50" y="52" fill="#5FD3E6" fontFamily="var(--rad-font-display)" fontSize="13" letterSpacing="0.1em">OESOPHAGUS</text>

                <g className="ox-prism-rad-ch-rumen">
                  <path
                    d="M 170 120 C 230 70 470 60 560 110 C 620 150 630 250 560 300 C 460 340 260 330 200 270 C 180 250 160 210 170 120 Z"
                    fill="#103042"
                    stroke="#5FD3E6"
                    strokeWidth="2.5"
                  />
                  <path
                    d="M 210 210 Q 380 215 570 205"
                    stroke="#5FD3E6"
                    strokeWidth="1.5"
                    strokeDasharray="4 4"
                    strokeOpacity="0.6"
                  />
                  <text x="330" y="155" textAnchor="middle" fill="#EAF6F8" fontFamily="var(--rad-font-display)" fontSize="17" fontWeight="700">RUMEN (PAUNCH)</text>
                  <text x="330" y="178" textAnchor="middle" fill="#FF8A3D" fontFamily="var(--rad-font-display)" fontSize="12">150–200 L · ANAEROBIC FERMENTATION</text>
                  <text x="330" y="240" textAnchor="middle" fill="#8AA2AD" fontFamily="var(--rad-font-body)" fontSize="12">Ventral microbial mat &amp; protozoal flora</text>
                </g>

                <g className="ox-prism-rad-ch-reticulum">
                  <path
                    d="M 170 120 C 140 135 110 170 115 220 C 120 260 160 280 195 265 C 200 240 190 180 170 120 Z"
                    fill="#153D52"
                    stroke="#5FD3E6"
                    strokeWidth="2.2"
                  />
                  <path
                    d="M 130 180 L 180 230 M 140 160 L 185 205 M 125 210 L 165 250"
                    stroke="#5FD3E6"
                    strokeWidth="1"
                    strokeOpacity="0.4"
                  />
                  <text x="150" y="315" textAnchor="middle" fill="#EAF6F8" fontFamily="var(--rad-font-display)" fontSize="13" fontWeight="700">RETICULUM</text>
                  <text x="150" y="332" textAnchor="middle" fill="#FF8A3D" fontFamily="var(--rad-font-display)" fontSize="11">12 L · HONEYCOMB</text>
                </g>

                <g className="ox-prism-rad-ch-omasum">
                  <circle cx="530" cy="180" r="46" fill="#184860" stroke="#5FD3E6" strokeWidth="2.2" />
                  <line x1="510" y1="145" x2="510" y2="215" stroke="#5FD3E6" strokeWidth="1" strokeOpacity="0.5" />
                  <line x1="522" y1="140" x2="522" y2="220" stroke="#5FD3E6" strokeWidth="1" strokeOpacity="0.5" />
                  <line x1="534" y1="138" x2="534" y2="222" stroke="#5FD3E6" strokeWidth="1" strokeOpacity="0.5" />
                  <line x1="546" y1="142" x2="546" y2="218" stroke="#5FD3E6" strokeWidth="1" strokeOpacity="0.5" />
                  <text x="530" y="105" textAnchor="middle" fill="#EAF6F8" fontFamily="var(--rad-font-display)" fontSize="13" fontWeight="700">OMASUM</text>
                  <text x="530" y="122" textAnchor="middle" fill="#FF8A3D" fontFamily="var(--rad-font-display)" fontSize="11">16 L · MANYPLIES</text>
                </g>

                <g className="ox-prism-rad-ch-abomasum">
                  <path
                    d="M 540 226 C 560 255 580 290 640 295 C 685 295 710 270 705 240 C 700 225 675 220 635 230 C 590 240 555 225 540 226 Z"
                    fill="#1A516C"
                    stroke="#5FD3E6"
                    strokeWidth="2.2"
                  />
                  <path d="M 705 240 L 750 235" stroke="#5FD3E6" strokeWidth="6" strokeOpacity="0.4" strokeLinecap="round" />
                  <text x="635" y="325" textAnchor="middle" fill="#EAF6F8" fontFamily="var(--rad-font-display)" fontSize="13" fontWeight="700">ABOMASUM</text>
                  <text x="635" y="342" textAnchor="middle" fill="#FF8A3D" fontFamily="var(--rad-font-display)" fontSize="11">20 L · ACID STOMACH</text>
                </g>

                <g className="ox-prism-rad-flow-arrows" stroke="#FF8A3D" strokeWidth="1.8" fill="none">
                  <path d="M 120 95 L 145 125" />
                  <path d="M 180 180 Q 220 180 260 170" />
                  <path d="M 490 200 L 515 190" />
                  <path d="M 545 225 Q 565 255 595 260" />
                </g>
              </svg>
            </div>

            <div className="ox-prism-rad-chambers-list">
              <div className="ox-prism-rad-chamber-item">
                <div className="ox-prism-rad-chamber-title">
                  <span>1. Rumen (Paunch)</span>
                  <span className="ox-prism-rad-chamber-cap">150–200 Litres</span>
                </div>
                <p className="ox-prism-rad-chamber-text">
                  Anaerobic fermentation vat harbouring dense populations of cellulolytic bacteria, protozoa, and fungi. Produces massive volumes of volatile fatty acids (acetate, propionate, butyrate) which supply over 70% of bovine energy requirements.
                </p>
              </div>

              <div className="ox-prism-rad-chamber-item">
                <div className="ox-prism-rad-chamber-title">
                  <span>2. Reticulum (Honeycomb)</span>
                  <span className="ox-prism-rad-chamber-cap">10–14 Litres</span>
                </div>
                <p className="ox-prism-rad-chamber-text">
                  Features raised polygonal mucosal ridges forming a distinctive honeycomb lattice. Traps heavy ingested debris (preventing hardware disease) and coordinates periodic biphasic contractions that initiate regurgitation for rumination.
                </p>
              </div>

              <div className="ox-prism-rad-chamber-item">
                <div className="ox-prism-rad-chamber-title">
                  <span>3. Omasum (Manyplies)</span>
                  <span className="ox-prism-rad-chamber-cap">14–18 Litres</span>
                </div>
                <p className="ox-prism-rad-chamber-text">
                  Spherical organ packed with more than one hundred parallel longitudinal muscular laminae resembling book leaves. Squeezes fluid from digesta, reabsorbing up to 65% of water and electrolytes before transit into the glandular stomach.
                </p>
              </div>

              <div className="ox-prism-rad-chamber-item">
                <div className="ox-prism-rad-chamber-title">
                  <span>4. Abomasum (True Stomach)</span>
                  <span className="ox-prism-rad-chamber-cap">18–24 Litres</span>
                </div>
                <p className="ox-prism-rad-chamber-text">
                  The solitary acid-secreting glandular compartment. Gastric glands produce hydrochloric acid, pepsinogen, and abundant lysozyme specifically adapted to digest bacterial cell walls, releasing high-quality microbial protein for intestinal absorption.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="ox-prism-rad-section ox-prism-rad-technique" aria-labelledby="ox-prism-rad-tech-title">
          <div className="ox-prism-rad-section-header">
            <span className="ox-prism-rad-section-kicker">TECHNICAL SPECIFICATION</span>
            <h2 id="ox-prism-rad-tech-title" className="ox-prism-rad-section-h2">Radiographic Acquisition &amp; Densitometry</h2>
            <p className="ox-prism-rad-section-p">
              Large-animal diagnostic imaging requires high beam kilovoltage to penetrate dense muscular shoulder and pelvic girdles, coupled with secondary radiation suppression grids.
            </p>
          </div>

          <div className="ox-prism-rad-densitometry-grid">
            <div className="ox-prism-rad-wedge-card">
              <div className="ox-prism-rad-wedge-bar" style={{ background: '#EAF6F8' }} />
              <span className="ox-prism-rad-wedge-level">ZONE V · RADIOPAQUE</span>
              <span className="ox-prism-rad-wedge-name">Mineral &amp; Enamel</span>
              <p className="ox-prism-rad-wedge-desc">
                Dense compact bone cortex, horn core ossification, dental enamel of mandibular molars. Maximum attenuation.
              </p>
            </div>

            <div className="ox-prism-rad-wedge-card">
              <div className="ox-prism-rad-wedge-bar" style={{ background: '#9EC0C7' }} />
              <span className="ox-prism-rad-wedge-level">ZONE IV · HIGH DENSITY</span>
              <span className="ox-prism-rad-wedge-name">Cancellous Bone</span>
              <p className="ox-prism-rad-wedge-desc">
                Trabecular bone patterns inside vertebral bodies, scapular fossa, iliac wing, and calcaneal spongeous core.
              </p>
            </div>

            <div className="ox-prism-rad-wedge-card">
              <div className="ox-prism-rad-wedge-bar" style={{ background: '#5FD3E6' }} />
              <span className="ox-prism-rad-wedge-level">ZONE III · INTERMEDIATE</span>
              <span className="ox-prism-rad-wedge-name">Fluid &amp; Muscle</span>
              <p className="ox-prism-rad-wedge-desc">
                Ingesta-filled ventral ruminal fluid, cardiac silhouette, pendulous dewlap dermis, heavy gluteobiceps muscle bellies.
              </p>
            </div>

            <div className="ox-prism-rad-wedge-card">
              <div className="ox-prism-rad-wedge-bar" style={{ background: '#1D4556' }} />
              <span className="ox-prism-rad-wedge-level">ZONE II · RADIOLUCENT</span>
              <span className="ox-prism-rad-wedge-name">Adipose Tissue</span>
              <p className="ox-prism-rad-wedge-desc">
                Retroperitoneal sublumbar fat pads and pericardial fat deposits offering natural organ silhouette contrast.
              </p>
            </div>

            <div className="ox-prism-rad-wedge-card">
              <div className="ox-prism-rad-wedge-bar" style={{ background: '#0B1A24' }} />
              <span className="ox-prism-rad-wedge-level">ZONE I · RADIOLUCENT MAX</span>
              <span className="ox-prism-rad-wedge-name">Free Air &amp; Gas</span>
              <p className="ox-prism-rad-wedge-desc">
                Dorsal ruminal fermentation gas cap, tracheal air column, and lung field radiolucency. Minimal photon absorption.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
