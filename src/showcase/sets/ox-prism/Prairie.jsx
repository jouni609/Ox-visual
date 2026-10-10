import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import './prairie.css'

export default function Prairie() {
  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.innerWidth <= 768
    }
    return false
  })

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const contourPathsDesktop = [
    "M -60 460 C 180 435 420 465 660 440 C 900 420 1140 450 1380 435 C 1460 430 1510 438 1560 430",
    "M -60 495 C 160 470 380 500 620 475 C 860 455 1100 485 1340 470 C 1440 465 1500 472 1560 465",
    "M -60 535 C 140 510 360 540 600 515 C 840 495 1080 525 1320 510 C 1420 505 1500 512 1560 505",
    "M -60 580 C 160 555 400 585 640 560 C 880 540 1120 570 1360 555 C 1440 550 1500 558 1560 550",
    "M -60 630 C 180 605 420 635 660 610 C 900 590 1140 620 1380 605 C 1460 600 1510 608 1560 600",
    "M -60 685 C 200 660 440 690 680 665 C 920 645 1160 675 1400 660 C 1470 655 1520 662 1560 655",
    "M -60 740 C 220 715 460 745 700 720 C 940 700 1180 730 1420 715 C 1480 710 1530 718 1560 710"
  ]

  const contourPathsMobile = [
    "M -40 440 C 140 420 320 445 500 425 C 680 410 820 430 920 420",
    "M -40 470 C 120 450 300 475 480 455 C 660 440 800 460 920 450",
    "M -40 505 C 110 485 290 510 470 490 C 650 475 790 495 920 485",
    "M -40 540 C 130 520 310 545 490 525 C 670 510 810 530 920 520",
    "M -40 575 C 150 555 330 580 510 560 C 690 545 830 565 920 555"
  ]

  const distantBisonDesktop = [
    { x: 130, y: 432, s: 0.65 },
    { x: 190, y: 430, s: 0.55 },
    { x: 250, y: 433, s: 0.70 },
    { x: 315, y: 431, s: 0.60 },
    { x: 380, y: 434, s: 0.75 },
    { x: 445, y: 429, s: 0.58 },
    { x: 515, y: 433, s: 0.68 },
    { x: 585, y: 431, s: 0.62 }
  ]

  const distantBisonMobile = [
    { x: 90, y: 410, s: 0.45 },
    { x: 140, y: 408, s: 0.40 },
    { x: 190, y: 411, s: 0.50 },
    { x: 245, y: 409, s: 0.42 },
    { x: 300, y: 412, s: 0.52 },
    { x: 360, y: 407, s: 0.40 }
  ]

  return (
    <div className="th-pra ox-prism-pra">
      <header className="ox-prism-pra-collar">
        <div className="ox-prism-pra-collar-inner">
          <div className="ox-prism-pra-collar-item">
            <span>U.S. TOPOGRAPHICAL SURVEY</span>
            <span className="ox-prism-pra-collar-bullet">✦</span>
            <span>POWDER RIVER TRANSECT</span>
          </div>
          <div className="ox-prism-pra-collar-item">
            <span>LAT. 44°32'N</span>
            <span className="ox-prism-pra-collar-bullet">·</span>
            <span>LONG. 104°18'W</span>
            <span className="ox-prism-pra-collar-bullet">·</span>
            <span>ELEV. 2,840 FT</span>
          </div>
          <div className="ox-prism-pra-collar-item">
            <span>DATUM: CLARKE 1866</span>
            <span className="ox-prism-pra-collar-bullet">✦</span>
            <span>QUADRANGLE 44-A</span>
          </div>
        </div>
      </header>

      <section className="ox-prism-pra-hero">
        <div className="ox-prism-pra-hero-overlay">
          <div className="ox-prism-pra-hero-header">
            <span className="ox-prism-pra-hero-tag">FIELD RECONNAISSANCE · AMERICAN BISON</span>
            <h1 className="ox-prism-pra-h1">Where the Herd Moved</h1>
            <p className="ox-prism-pra-hero-deck">
              A cartographic census of the North American bison across thirty degrees of latitude —
              from tens of millions grazing the shortgrass steppe to the surviving seed of Yellowstone.
            </p>
            <div className="ox-prism-pra-telemetry">
              <div className="ox-prism-pra-telem-card">
                <span className="ox-prism-pra-telem-label">Historic Range</span>
                <span className="ox-prism-pra-telem-val">3,000,000 SQ MI</span>
              </div>
              <div className="ox-prism-pra-telem-card">
                <span className="ox-prism-pra-telem-label">Pre-1800 Census</span>
                <span className="ox-prism-pra-telem-val">30–60 MILLION</span>
              </div>
              <div className="ox-prism-pra-telem-card">
                <span className="ox-prism-pra-telem-label">1889 Bottleneck</span>
                <span className="ox-prism-pra-telem-val">&lt; 1,000 HEAD</span>
              </div>
              <div className="ox-prism-pra-telem-card">
                <span className="ox-prism-pra-telem-label">Current Population</span>
                <span className="ox-prism-pra-telem-val">~525,000 HEAD</span>
              </div>
            </div>
          </div>
        </div>

        <div className="ox-prism-pra-svg-wrap">
          <svg
            className="ox-prism-pra-landscape-svg"
            viewBox={isMobile ? "0 0 880 580" : "0 0 1440 760"}
            preserveAspectRatio={isMobile ? "xMidYMid meet" : "xMidYMax slice"}
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="ox-prism-pra-sky-grad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#25183E" />
                <stop offset="28%" stopColor="#3D2C5E" />
                <stop offset="55%" stopColor="#5E3D7A" />
                <stop offset="78%" stopColor="#8A5FA8" />
                <stop offset="92%" stopColor="#F4A672" />
                <stop offset="100%" stopColor="#FCD59A" />
              </linearGradient>

              <linearGradient id="ox-prism-pra-hill-grad1" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#67477D" />
                <stop offset="100%" stopColor="#4D3360" />
              </linearGradient>

              <linearGradient id="ox-prism-pra-hill-grad2" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#86628E" />
                <stop offset="100%" stopColor="#5B3E69" />
              </linearGradient>

              <linearGradient id="ox-prism-pra-land-grad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#8FA37A" />
                <stop offset="35%" stopColor="#A89A60" />
                <stop offset="70%" stopColor="#C9A04A" />
                <stop offset="100%" stopColor="#6E5028" />
              </linearGradient>

              <linearGradient id="ox-prism-pra-bison-hump-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#5A3A22" />
                <stop offset="45%" stopColor="#3D2517" />
                <stop offset="100%" stopColor="#2A1B14" />
              </linearGradient>

              <linearGradient id="ox-prism-pra-horn-grad" x1="0%" y1="100%" x2="0%" y2="0%">
                <stop offset="0%" stopColor="#38363D" />
                <stop offset="60%" stopColor="#222126" />
                <stop offset="100%" stopColor="#100F12" />
              </linearGradient>
            </defs>

            <rect width={isMobile ? 880 : 1440} height={isMobile ? 580 : 760} fill="url(#ox-prism-pra-sky-grad)" />

            <g opacity="0.22" stroke="#F4A672" strokeWidth="0.75" strokeDasharray="3 6">
              <line x1="0" y1="90" x2={isMobile ? 880 : 1440} y2="90" />
              <line x1="0" y1="210" x2={isMobile ? 880 : 1440} y2="210" />
              <line x1="0" y1="330" x2={isMobile ? 880 : 1440} y2="330" />
              <line x1="220" y1="0" x2="220" y2="440" />
              <line x1="560" y1="0" x2="560" y2="440" />
              {!isMobile && (
                <>
                  <line x1="900" y1="0" x2="900" y2="440" />
                  <line x1="1240" y1="0" x2="1240" y2="440" />
                </>
              )}
            </g>

            <g transform={isMobile ? "translate(800, 75) scale(0.65)" : "translate(1320, 130)"}>
              <circle r="46" fill="none" stroke="#F4A672" strokeWidth="1" opacity="0.6" />
              <circle r="36" fill="none" stroke="#FFF4E6" strokeWidth="0.7" opacity="0.4" />
              <circle r="4" fill="#F4A672" />
              <polygon points="0,-44 6,-10 0,0" fill="#FFF4E6" />
              <polygon points="0,-44 -6,-10 0,0" fill="#2B1E3A" />
              <polygon points="0,44 6,10 0,0" fill="#2B1E3A" />
              <polygon points="0,44 -6,10 0,0" fill="#FFF4E6" />
              <polygon points="44,0 10,6 0,0" fill="#2B1E3A" />
              <polygon points="44,0 10,-6 0,0" fill="#FFF4E6" />
              <polygon points="-44,0 -10,6 0,0" fill="#FFF4E6" />
              <polygon points="-44,0 -10,-6 0,0" fill="#2B1E3A" />
              <polygon points="26,-26 8,-4 0,0" fill="#F4A672" opacity="0.8" />
              <polygon points="-26,-26 -4,-8 0,0" fill="#F4A672" opacity="0.8" />
              <polygon points="26,26 4,8 0,0" fill="#F4A672" opacity="0.8" />
              <polygon points="-26,26 -8,4 0,0" fill="#F4A672" opacity="0.8" />
              <text x="0" y="-50" textAnchor="middle" fill="#FFF4E6" fontSize="13" fontFamily="'Zilla Slab', serif" fontWeight="700">N</text>
              <text x="54" y="4" textAnchor="middle" fill="#FFF4E6" fontSize="10" fontFamily="'Zilla Slab', serif">E</text>
              <text x="0" y="58" textAnchor="middle" fill="#FFF4E6" fontSize="10" fontFamily="'Zilla Slab', serif">S</text>
              <text x="-54" y="4" textAnchor="middle" fill="#FFF4E6" fontSize="10" fontFamily="'Zilla Slab', serif">W</text>
            </g>

            <path
              d={
                isMobile
                  ? "M 0 405 Q 220 375 440 395 T 880 385 L 880 580 L 0 580 Z"
                  : "M 0 425 Q 360 395 720 420 T 1440 405 L 1440 760 L 0 760 Z"
              }
              fill="url(#ox-prism-pra-hill-grad1)"
              opacity="0.85"
            />

            <path
              d={
                isMobile
                  ? "M 0 430 Q 220 405 440 420 T 880 410 L 880 580 L 0 580 Z"
                  : "M 0 450 Q 320 425 680 445 T 1440 435 L 1440 760 L 0 760 Z"
              }
              fill="url(#ox-prism-pra-hill-grad2)"
              opacity="0.9"
            />

            <motion.g
              animate={{ x: [-25, 25, -25] }}
              transition={{ repeat: Infinity, duration: 28, ease: "easeInOut" }}
            >
              {(isMobile ? distantBisonMobile : distantBisonDesktop).map((b, i) => (
                <g key={i} transform={`translate(${b.x}, ${b.y}) scale(${b.s})`}>
                  <path
                    d="M 24 6 C 21 6 17 11 13 17 C 11 19 9 22 6 25 C 4 27 3 29 4 30 C 5 31 6 31 7 31 C 7 34 8 37 8 39 C 9 37 10 35 10 33 C 12 33 14 35 15 33 C 16 32 17 31 18 29 L 18 39 L 20 39 L 20 29 C 21 29 22 29 23 39 L 25 39 L 25 28 C 29 27 33 27 37 28 C 40 28 42 39 44 39 L 46 39 L 45 29 C 47 39 49 39 51 39 L 53 39 L 50 26 C 52 24 53 22 53 19 C 53 18 52 18 51 18 C 51 24 50 26 50 28 L 48 21 C 43 18 37 14 32 10 C 28 7 26 6 24 6 Z"
                    fill="#231710"
                    opacity="0.9"
                  />
                  <path d="M 12 18 Q 10 14 11 11" stroke="#160E0A" strokeWidth="1.2" fill="none" />
                </g>
              ))}
            </motion.g>

            <path
              d={
                isMobile
                  ? "M 0 465 Q 220 435 440 450 T 880 440 L 880 580 L 0 580 Z"
                  : "M 0 495 Q 360 460 720 480 T 1440 468 L 1440 760 L 0 760 Z"
              }
              fill="url(#ox-prism-pra-land-grad)"
            />

            <g fill="none" stroke="#2B1E3A" strokeWidth="1.2" opacity="0.48">
              {(isMobile ? contourPathsMobile : contourPathsDesktop).map((p, i) => (
                <motion.path
                  key={i}
                  d={p}
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2.2 + i * 0.2, ease: "easeOut" }}
                />
              ))}
            </g>

            <g fill="#2B1E3A" opacity="0.75" fontSize="11" fontFamily="'Zilla Slab', serif" fontStyle="italic">
              <text x={isMobile ? "60" : "140"} y={isMobile ? "485" : "525"}>2,880 FT</text>
              <text x={isMobile ? "160" : "240"} y={isMobile ? "520" : "570"}>2,840 FT</text>
              <text x={isMobile ? "260" : "350"} y={isMobile ? "555" : "618"}>2,800 FT</text>
              {!isMobile && (
                <>
                  <text x="460" y="670">2,760 FT</text>
                  <text x="580" y="725">2,720 FT</text>
                  <text x="1080" y="505">2,840 FT</text>
                  <text x="1190" y="548">2,800 FT</text>
                  <text x="1300" y="595">2,760 FT</text>
                </>
              )}
            </g>

            <g transform={isMobile ? "translate(30, 80) scale(1.04)" : "translate(480, 150) scale(1.15)"}>
              <g className="ox-prism-pra-far-legs">
                <path
                  d="M 510 250 C 490 290 510 340 535 365 L 590 400 L 580 455 L 562 455 L 570 405 C 550 375 520 340 505 270 Z"
                  fill="#352216"
                />
                <polygon points="562,455 580,455 578,470 560,470" fill="#160F0A" />

                <path
                  d="M 255 280 C 250 320 240 370 235 410 L 255 418 L 275 410 L 272 455 L 254 455 L 256 415 L 245 415 L 250 280 Z"
                  fill="#160F0A"
                />
                <polygon points="254,455 272,455 270,470 252,470" fill="#100A07" />
              </g>

              <g className="ox-prism-pra-hindquarters">
                <path
                  d="M 380 180 C 430 200 490 215 560 220 C 600 224 625 228 635 235 C 655 255 660 290 655 325 C 648 355 638 380 628 400 L 620 455 L 602 455 L 610 405 C 595 380 565 355 535 345 C 500 330 450 335 380 350 Z"
                  fill="#8B6A48"
                />
                <path
                  d="M 410 195 C 470 212 535 224 580 228 C 555 260 510 295 420 315 Z"
                  fill="#A27E58"
                  opacity="0.55"
                />
                <polygon points="602,455 620,455 618,470 611,470 610,466 609,470 600,470" fill="#1E1612" />
              </g>

              <motion.g
                animate={{ rotate: [0, -7, 4, -5, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 5.5,
                  ease: "easeInOut",
                  times: [0, 0.2, 0.4, 0.6, 1]
                }}
                style={{ transformOrigin: "635px 235px" }}
              >
                <path
                  d="M 635 235 C 650 270 653 325 648 385"
                  stroke="#6E4D30"
                  strokeWidth="5"
                  fill="none"
                  strokeLinecap="round"
                />
                <path
                  d="M 648 385 C 658 405 655 435 647 445 C 639 435 637 405 648 385 Z"
                  fill="#1F140D"
                />
              </motion.g>

              <g className="ox-prism-pra-front-body">
                <path
                  d="M 380 180 C 330 135 295 110 260 110 C 220 115 185 155 155 220 C 140 240 120 280 100 330 C 90 350 82 360 88 375 C 95 382 108 380 118 375 C 122 395 130 405 142 382 C 160 395 180 400 205 385 C 215 375 210 345 220 335 L 185 410 L 205 422 L 225 415 L 245 425 L 260 412 L 255 365 C 290 370 340 365 380 350 Z"
                  fill="url(#ox-prism-pra-bison-hump-grad)"
                />

                <polygon points="378,195 398,206 376,212" fill="#3D2517" />
                <polygon points="376,225 399,236 375,242" fill="#3D2517" />
                <polygon points="375,255 397,266 373,272" fill="#3D2517" />
                <polygon points="374,285 398,296 372,302" fill="#3D2517" />
                <polygon points="372,315 395,326 370,332" fill="#3D2517" />
                <polygon points="370,338 390,345 368,348" fill="#3D2517" />

                <path
                  d="M 260 110 C 295 115 335 140 360 170 C 335 205 325 240 330 275 C 290 270 250 245 220 215 C 195 185 185 150 195 125 C 215 115 238 110 260 110 Z"
                  fill="#5A3A22"
                  opacity="0.85"
                />
                <path
                  d="M 250 125 C 275 132 310 155 330 178 C 320 190 305 195 290 185 C 265 170 252 150 250 125 Z"
                  fill="#785133"
                  opacity="0.75"
                />

                <path
                  d="M 195 345 C 190 375 182 405 185 418 L 205 426 L 225 418 L 245 428 L 260 415 C 255 385 245 355 240 345 Z"
                  fill="#22160E"
                />
                <path d="M 188 412 L 202 426 L 195 408" fill="#352014" />
                <path d="M 218 412 L 235 428 L 225 408" fill="#352014" />
                <rect x="210" y="418" width="18" height="37" fill="#241710" />
                <polygon points="204,455 226,455 224,470 216,470 215,466 214,470 202,470" fill="#18110C" />

                <motion.g
                  animate={{ rotate: [0, 2, 0], y: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
                  style={{ transformOrigin: "170px 215px" }}
                >
                  <path
                    d="M 165 205 C 180 195 190 180 185 160 C 180 145 170 138 162 135 C 166 145 168 158 165 168 C 160 180 152 195 165 205 Z"
                    fill="#141316"
                  />

                  <path
                    d="M 155 235 C 178 238 192 245 186 252 C 178 258 160 252 150 245 Z"
                    fill="#352216"
                  />

                  <g transform="translate(55, -20)">
                    <path
                      d="M 165 210 C 135 220 110 240 85 270 C 70 292 55 320 45 350 C 32 356 26 366 28 382 C 32 390 45 392 55 390 C 60 405 72 410 80 395 C 95 405 110 395 120 365 C 135 325 145 275 165 210 Z"
                      fill="#2A1B14"
                    />

                    <path
                      d="M 165 210 C 140 215 110 230 85 258 C 70 278 78 298 104 302 C 131 306 154 288 164 255 C 168 235 170 220 165 210 Z"
                      fill="#1C110A"
                    />
                    <path d="M 90 250 Q 105 240 120 252 Q 135 242 150 256 Q 130 268 110 262 Z" fill="#3F2718" opacity="0.9" />

                    <path d="M 45 350 C 32 356 26 366 28 382 C 32 390 45 392 55 390 C 50 378 48 365 45 350 Z" fill="#18100A" />
                    <ellipse cx="38" cy="372" rx="3.5" ry="2.2" fill="#0D0805" />
                    <line x1="30" y1="382" x2="48" y2="384" stroke="#0D0805" strokeWidth="1.5" />

                    <path
                      d="M 50 390 L 44 425 L 52 415 L 48 448 L 58 430 L 56 462 L 68 440 L 68 452 L 76 425 L 75 400 Z"
                      fill="#140D08"
                    />
                    <path d="M 52 415 L 48 448 L 56 425" fill="#241710" />
                    <path d="M 58 430 L 56 462 L 65 435" fill="#241710" />

                    <path
                      d="M 90 245 C 63 240 53 225 59 195 C 63 178 73 162 80 158 C 75 172 75 190 83 208 C 91 226 103 238 90 245 Z"
                      fill="url(#ox-prism-pra-horn-grad)"
                    />
                    <path d="M 80 158 Q 77 172 79 192" stroke="#55525C" strokeWidth="0.8" fill="none" />

                    <circle cx="73" cy="275" r="5.5" fill="#0D0805" />
                    <circle cx="73" cy="275" r="3.4" fill="#A86A36" />
                    <circle cx="73" cy="275" r="1.8" fill="#0D0805" />
                    <circle cx="74" cy="274" r="0.8" fill="#FFF5E6" />
                  </g>
                </motion.g>
              </g>
            </g>

            <g fill="#C9A04A">
              <motion.path
                d={isMobile ? "M 480 560 Q 475 510 465 480 Q 478 515 485 560 Z" : "M 780 730 Q 775 660 765 620 Q 778 665 785 730 Z"}
                animate={{ rotate: [-3, 3, -3] }}
                transition={{ repeat: Infinity, duration: 4.2, ease: "easeInOut" }}
                style={{ transformOrigin: isMobile ? "480px 560px" : "780px 730px" }}
              />
              <motion.path
                d={isMobile ? "M 490 560 Q 495 500 505 470 Q 500 510 496 560 Z" : "M 790 730 Q 795 650 805 605 Q 800 660 796 730 Z"}
                animate={{ rotate: [3, -3, 3] }}
                transition={{ repeat: Infinity, duration: 3.6, ease: "easeInOut" }}
                style={{ transformOrigin: isMobile ? "490px 560px" : "790px 730px" }}
              />
              <motion.path
                d={isMobile ? "M 720 565 Q 715 515 705 485 Q 718 520 725 565 Z" : "M 1120 740 Q 1115 670 1105 630 Q 1118 675 1125 740 Z"}
                animate={{ rotate: [-4, 3, -4] }}
                transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut" }}
                style={{ transformOrigin: isMobile ? "720px 565px" : "1120px 740px" }}
              />
              <motion.path
                d={isMobile ? "M 200 565 Q 195 520 185 490 Q 198 525 205 565 Z" : "M 380 740 Q 375 680 365 640 Q 378 685 385 740 Z"}
                animate={{ rotate: [-3, 3, -3] }}
                transition={{ repeat: Infinity, duration: 4.1, ease: "easeInOut" }}
                style={{ transformOrigin: isMobile ? "200px 565px" : "380px 740px" }}
              />
            </g>
          </svg>
        </div>
      </section>

      <main className="ox-prism-pra-body-content">
        <div className="ox-prism-pra-mobile-telemetry">
          <div className="ox-prism-pra-telem-card">
            <span className="ox-prism-pra-telem-label">Historic Range</span>
            <span className="ox-prism-pra-telem-val">3,000,000 SQ MI</span>
          </div>
          <div className="ox-prism-pra-telem-card">
            <span className="ox-prism-pra-telem-label">Pre-1800 Census</span>
            <span className="ox-prism-pra-telem-val">30–60 MILLION</span>
          </div>
          <div className="ox-prism-pra-telem-card">
            <span className="ox-prism-pra-telem-label">1889 Bottleneck</span>
            <span className="ox-prism-pra-telem-val">&lt; 1,000 HEAD</span>
          </div>
          <div className="ox-prism-pra-telem-card">
            <span className="ox-prism-pra-telem-label">Current Population</span>
            <span className="ox-prism-pra-telem-val">~525,000 HEAD</span>
          </div>
        </div>

        <section className="ox-prism-pra-dossier">
          <div className="ox-prism-pra-section-head">
            <span className="ox-prism-pra-section-num">SURVEY SECTION 01</span>
            <h2 className="ox-prism-pra-section-title">Field Dossier &amp; Historical Trajectory</h2>
          </div>

          <div className="ox-prism-pra-dossier-grid">
            <article className="ox-prism-pra-panel">
              <div>
                <span className="ox-prism-pra-panel-badge">GEOGRAPHIC ARCHIVE · 1500–1889</span>
                <h3 className="ox-prism-pra-panel-h2">Range &amp; Bottleneck</h3>
                <p className="ox-prism-pra-panel-copy">
                  The American bison once commanded a biome spanning from the subarctic forests of Alaska
                  to the arid plateaus of northern Mexico, and from eastern Oregon across the plains to
                  western Pennsylvania. An estimated 30 to 60 million animals moved in immense migratory
                  herds before the 1800s, their mass movements carving deeply entrenched trace trails
                  into the prairie sod that later formed the roadbeds of transcontinental railways.
                  By the winter of 1889, commercial slaughter and military expansion had collapsed this
                  continental titan to fewer than 1,000 surviving individuals.
                </p>
              </div>
              <ul className="ox-prism-pra-data-list">
                <li className="ox-prism-pra-data-row">
                  <span className="ox-prism-pra-data-key">Continental Range</span>
                  <span className="ox-prism-pra-data-val">Alaska to Northern Mexico</span>
                </li>
                <li className="ox-prism-pra-data-row">
                  <span className="ox-prism-pra-data-key">Pre-1800 Density</span>
                  <span className="ox-prism-pra-data-val">30–60 Million Head</span>
                </li>
                <li className="ox-prism-pra-data-row">
                  <span className="ox-prism-pra-data-key">1889 Population Low</span>
                  <span className="ox-prism-pra-data-val">Fewer than 1,000 Head</span>
                </li>
                <li className="ox-prism-pra-data-row">
                  <span className="ox-prism-pra-data-key">Bottleneck Survivors</span>
                  <span className="ox-prism-pra-data-val">856 Wild &amp; Captive Beasts</span>
                </li>
              </ul>
            </article>

            <article className="ox-prism-pra-panel">
              <div>
                <span className="ox-prism-pra-panel-badge">CONSERVATION CHRONOLOGY · 1902–2016</span>
                <h3 className="ox-prism-pra-panel-h2">The Yellowstone Return</h3>
                <p className="ox-prism-pra-panel-copy">
                  The wild seed of the species found sanctuary in the volcanic caldera of
                  Yellowstone National Park, the single place in North America continuously occupied
                  by wild bison since prehistoric times. From a remnant herd of just over two dozen
                  free-ranging survivors in Pelican Valley, intensive stewardship, tribal reintroductions,
                  and rancher conservation rescued the lineage. Today approximately 500,000 bison thrive
                  in commercial production herds, while 20,000 to 30,000 roam within public reserves
                  and tribal conservation sanctuaries. In 2016, the American bison was officially named
                  the National Mammal of the United States.
                </p>
              </div>
              <ul className="ox-prism-pra-data-list">
                <li className="ox-prism-pra-data-row">
                  <span className="ox-prism-pra-data-key">Yellowstone Herd</span>
                  <span className="ox-prism-pra-data-val">Continuously Occupied Since Prehistory</span>
                </li>
                <li className="ox-prism-pra-data-row">
                  <span className="ox-prism-pra-data-key">Commercial Herds</span>
                  <span className="ox-prism-pra-data-val">~500,000 Head Managed</span>
                </li>
                <li className="ox-prism-pra-data-row">
                  <span className="ox-prism-pra-data-key">Conservation Herds</span>
                  <span className="ox-prism-pra-data-val">20,000–30,000 in Public Herds</span>
                </li>
                <li className="ox-prism-pra-data-row">
                  <span className="ox-prism-pra-data-key">Federal Status</span>
                  <span className="ox-prism-pra-data-val">U.S. National Mammal (2016)</span>
                </li>
              </ul>
            </article>

            <article className="ox-prism-pra-panel">
              <div>
                <span className="ox-prism-pra-panel-badge">BIOMECHANICAL MARKERS · BISON BISON</span>
                <h3 className="ox-prism-pra-panel-h2">Anatomical Field Marks</h3>
                <p className="ox-prism-pra-panel-copy">
                  The unmistakable silhouette of Bison bison is an engineering marvel honed for sub-zero
                  blizzards on the northern plains. Mature bulls scale up to 900 kilograms and stand 1.8
                  meters at the shoulder. The defining shoulder hump consists of dense muscle anchored
                  to greatly elongated dorsal vertebral spines up to 50 centimeters long. This muscular
                  cantilever drives the low-slung head as a sweeping snow-plow through heavy winter crusts.
                  Despite their massive bulk, bison can sprint at 55 kilometers per hour, leap over
                  six-foot obstacles, and engage in ritual dust wallowing that reshapes the hydrology of the prairie.
                </p>
              </div>
              <ul className="ox-prism-pra-data-list">
                <li className="ox-prism-pra-data-row">
                  <span className="ox-prism-pra-data-key">Shoulder Hump</span>
                  <span className="ox-prism-pra-data-val">Vertebral Spines for Snow-Sweeping</span>
                </li>
                <li className="ox-prism-pra-data-row">
                  <span className="ox-prism-pra-data-key">Bull Mass &amp; Stature</span>
                  <span className="ox-prism-pra-data-val">Up to ~900 kg · ~1.8 m at Shoulder</span>
                </li>
                <li className="ox-prism-pra-data-row">
                  <span className="ox-prism-pra-data-key">Top Sprint Speed</span>
                  <span className="ox-prism-pra-data-val">Can Run ~55 km/h</span>
                </li>
                <li className="ox-prism-pra-data-row">
                  <span className="ox-prism-pra-data-key">Dust Wallows</span>
                  <span className="ox-prism-pra-data-val">Excavates Micro-Wetland Depressions</span>
                </li>
              </ul>
            </article>
          </div>
        </section>

        <section className="ox-prism-pra-anatomy-banner">
          <div className="ox-prism-pra-banner-col">
            <h3>The Keystone of the Great Plains</h3>
            <p>
              Bison are keystone ecosystem engineers. Their selective grazing on dominant warm-season
              C4 grasses prevents monocultures, allowing hundreds of flowering forbs to flourish.
              Their hooves scarify the dense prairie turf, facilitating seed incorporation, while their
              hair coats disperse seeds across vast distances.
            </p>
            <div className="ox-prism-pra-field-pills">
              <span className="ox-prism-pra-pill">Andropogon gerardi (Big Bluestem)</span>
              <span className="ox-prism-pra-pill">Bouteloua gracilis (Blue Grama)</span>
              <span className="ox-prism-pra-pill">Buchloe dactyloides (Buffalo Grass)</span>
            </div>
          </div>
          <div className="ox-prism-pra-banner-col">
            <h3>Wallow Hydrology &amp; Micro-Habitats</h3>
            <p>
              By dropping to their sides and rotating aggressively against the earth, bison excavate
              circular depressions up to five meters across. The compacted, clay-sealed soil of these
              wallows holds seasonal rainwater for weeks, creating ephemeral vernal pools that sustain
              endangered prairie amphibians, dragonflies, and migratory shorebirds.
            </p>
            <div className="ox-prism-pra-field-pills">
              <span className="ox-prism-pra-pill">Vernal Pool Catchment</span>
              <span className="ox-prism-pra-pill">Fly Repellent Fur-Shedding</span>
              <span className="ox-prism-pra-pill">Perennial Clay Hardpan</span>
            </div>
          </div>
        </section>

        <div className="ox-prism-pra-cartouche-container">
          <div className="ox-prism-pra-cartouche">
            <div className="ox-prism-pra-cartouche-corner ox-prism-pra-cartouche-corner-tl" />
            <div className="ox-prism-pra-cartouche-corner ox-prism-pra-cartouche-corner-tr" />
            <div className="ox-prism-pra-cartouche-corner ox-prism-pra-cartouche-corner-bl" />
            <div className="ox-prism-pra-cartouche-corner ox-prism-pra-cartouche-corner-br" />

            <div className="ox-prism-pra-cartouche-agency">
              DEPARTMENT OF THE INTERIOR · GENERAL LAND OFFICE
            </div>
            <div className="ox-prism-pra-cartouche-title">
              TOPOGRAPHICAL SURVEY OF THE GREAT PLAINS BISON RANGE
            </div>
            <div className="ox-prism-pra-cartouche-rule" />

            <div className="ox-prism-pra-cartouche-scalebar">
              <div className="ox-prism-pra-scalebar-graphic">
                <div className="ox-prism-pra-scalebar-seg" />
                <div className="ox-prism-pra-scalebar-seg" />
                <div className="ox-prism-pra-scalebar-seg" />
                <div className="ox-prism-pra-scalebar-seg" />
              </div>
              <div className="ox-prism-pra-scalebar-legend">
                SCALE: 1 INCH = 12 STATUTE MILES · CONTOUR INTERVAL 40 FEET
              </div>
            </div>

            <div className="ox-prism-pra-signature">
              SET XXXII · DESIGNED BY ANTIGRAVITY
            </div>

            <p className="ox-prism-pra-cartouche-datum">
              NORTH AMERICAN DATUM · SHEET NO. 05 OF 05 · REVISED CARTO-CHRONICLE
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}
