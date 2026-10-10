import { motion } from 'framer-motion'
import './rosette.css'

export default function Rosette() {
  const confettiList = [
    { id: 1, x: '10%', y: '26%', size: 6, dur: 5.4, delay: 0 },
    { id: 2, x: '22%', y: '16%', size: 4, dur: 4.8, delay: 1.2 },
    { id: 3, x: '38%', y: '32%', size: 5, dur: 6.2, delay: 0.6 },
    { id: 4, x: '56%', y: '20%', size: 7, dur: 5.6, delay: 1.9 },
    { id: 5, x: '70%', y: '28%', size: 5, dur: 5.1, delay: 0.9 },
    { id: 6, x: '86%', y: '16%', size: 6, dur: 5.7, delay: 2.1 },
    { id: 7, x: '16%', y: '62%', size: 4, dur: 4.9, delay: 1.5 },
    { id: 8, x: '82%', y: '58%', size: 5, dur: 5.2, delay: 0.4 }
  ]

  const scoreData = [
    {
      label: 'Hump Conformation & Masculine Crest',
      score: 99,
      note: 'Erect cervicothoracic dome centered over shoulder girdle; full volume with backward lean.'
    },
    {
      label: 'Body Depth, Heart Girth & Barrel Capacity',
      score: 97,
      note: 'Extraordinary rib spring with deep flank; level topline leading into square rumpline.'
    },
    {
      label: 'Dewlap Rippling & Sheath Conformation',
      score: 98,
      note: 'Four deep pendulous folds extending throat to brisket; clean, moderate sheath angle.'
    },
    {
      label: 'Structural Soundness & Cloven Hoof Substance',
      score: 96,
      note: 'Heavy, dense bone; ideal hock angulation; square stance with tight, dark cloven hooves.'
    },
    {
      label: 'Breed Character, Pendulous Ears & Pigmentation',
      score: 98,
      note: 'Drooping 32cm ears; dark muzzle and eye pigmentation; calm, commanding ring presence.'
    }
  ]

  return (
    <div className="th-ros ox-prism-ros">
      <div className="ox-prism-ros-grain" aria-hidden="true" />

      {confettiList.map((item) => (
        <motion.div
          key={item.id}
          className="ox-prism-ros-speck"
          style={{
            left: item.x,
            top: item.y,
            width: item.size,
            height: item.size
          }}
          animate={{
            y: [-10, 14, -10],
            x: [-6, 6, -6],
            opacity: [0.35, 0.85, 0.35],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: item.dur,
            delay: item.delay,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
          aria-hidden="true"
        />
      ))}

      <header className="ox-prism-ros-header">
        <div className="ox-prism-ros-eyebrow">
          <span>98TH ANNUAL GULF COAST LIVESTOCK EXPOSITION</span>
          <span className="ox-prism-ros-bullet">★</span>
          <span>ARENA RING 01 · ZEBU BREED DIVISION</span>
        </div>
        <h1 className="ox-prism-ros-title">Grand Champion Brahman</h1>
        <p className="ox-prism-ros-subtitle">
          Senior Herd Sire · Lot 104 · Bos indicus Supreme Conformation Standard
        </p>
      </header>

      <section className="ox-prism-ros-ring-stage" aria-label="Prize ring showcase">
        <div className="ox-prism-ros-arena-backdrop" aria-hidden="true" />

        <div className="ox-prism-ros-rosette-assembly">
          <div className="ox-prism-ros-rosette-disc-wrap">
            <motion.div
              className="ox-prism-ros-ribbon-tails"
              animate={{ rotate: [-2, 2.5, -2] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <div className="ox-prism-ros-tail ox-prism-ros-tail-left" />
              <div className="ox-prism-ros-tail ox-prism-ros-tail-right" />
            </motion.div>

            <div className="ox-prism-ros-rosette-disc">
              <motion.div
                className="ox-prism-ros-rosette-pleats"
                animate={{ rotate: 360 }}
                transition={{ duration: 36, repeat: Infinity, ease: 'linear' }}
              >
                <svg viewBox="0 0 160 160" className="ox-prism-ros-pleat-svg" aria-hidden="true">
                  <g transform="translate(80,80)">
                    {Array.from({ length: 24 }).map((_, i) => (
                      <polygon
                        key={i}
                        points="0,-76 11,-56 -11,-56"
                        transform={`rotate(${i * 15})`}
                        className={i % 2 === 0 ? 'ox-prism-ros-pleat-a' : 'ox-prism-ros-pleat-b'}
                      />
                    ))}
                    <circle r="56" className="ox-prism-ros-pleat-rim" />
                    {Array.from({ length: 24 }).map((_, i) => (
                      <polygon
                        key={`inner-${i}`}
                        points="0,-54 8,-40 -8,-40"
                        transform={`rotate(${i * 15 + 7.5})`}
                        className={i % 2 === 0 ? 'ox-prism-ros-pleat-gold-a' : 'ox-prism-ros-pleat-gold-b'}
                      />
                    ))}
                  </g>
                </svg>
              </motion.div>

              <div className="ox-prism-ros-rosette-center">
                <span className="ox-prism-ros-rosette-tier">SUPREME</span>
                <span className="ox-prism-ros-rosette-place">1ST</span>
                <span className="ox-prism-ros-rosette-cat">CHAMPION</span>
              </div>
            </div>
          </div>

          <div className="ox-prism-ros-judge-ribbon-tag">
            <div className="ox-prism-ros-tag-ribbon-notch" />
            <div className="ox-prism-ros-tag-head">OFFICIAL ARENA SEAL</div>
            <div className="ox-prism-ros-tag-sig">SET XXXII · DESIGNED BY ANTIGRAVITY</div>
          </div>
        </div>

        <div className="ox-prism-ros-stage-canvas">
          <svg
            viewBox="0 0 900 540"
            className="ox-prism-ros-bull-svg"
            role="img"
            aria-label="Hand-built SVG portrayal of a Grand Champion Brahman zebu bull standing square in side profile facing right, displaying large shoulder hump, drooping leaf ears, deep continuous folded dewlap, and cloven hooves"
          >
            <defs>
              <linearGradient id="ox-prism-ros-sawdust-grad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#ECD7B5" />
                <stop offset="50%" stopColor="#D9B98A" />
                <stop offset="100%" stopColor="#9E7948" />
              </linearGradient>

              <radialGradient id="ox-prism-ros-spotlight" cx="50%" cy="40%" r="50%">
                <stop offset="0%" stopColor="#F2C14E" stopOpacity="0.22" />
                <stop offset="65%" stopColor="#4A1F73" stopOpacity="0.04" />
                <stop offset="100%" stopColor="#2A0F45" stopOpacity="0" />
              </radialGradient>

              <linearGradient id="ox-prism-ros-body-grad" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#C4BFBA" />
                <stop offset="22%" stopColor="#DDD8D3" />
                <stop offset="55%" stopColor="#EBE8E3" />
                <stop offset="85%" stopColor="#D8D4CE" />
                <stop offset="100%" stopColor="#B8B2AA" />
              </linearGradient>

              <radialGradient id="ox-prism-ros-barrel-shade" cx="48%" cy="42%" r="48%">
                <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.25" />
                <stop offset="65%" stopColor="#D8D4CE" stopOpacity="0" />
                <stop offset="100%" stopColor="#9E9890" stopOpacity="0.35" />
              </radialGradient>

              <linearGradient id="ox-prism-ros-hump-crest" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#58544F" stopOpacity="0.45" />
                <stop offset="45%" stopColor="#75716C" stopOpacity="0.22" />
                <stop offset="100%" stopColor="#DCD8D3" stopOpacity="0" />
              </linearGradient>

              <linearGradient id="ox-prism-ros-horn-near" x1="0" y1="1" x2="0" y2="0">
                <stop offset="0%" stopColor="#201E22" />
                <stop offset="60%" stopColor="#38343C" />
                <stop offset="88%" stopColor="#5E5866" />
                <stop offset="100%" stopColor="#DDD5C6" />
              </linearGradient>

              <linearGradient id="ox-prism-ros-horn-far" x1="0" y1="1" x2="0" y2="0">
                <stop offset="0%" stopColor="#141215" />
                <stop offset="70%" stopColor="#222026" />
                <stop offset="100%" stopColor="#4A4550" />
              </linearGradient>

              <linearGradient id="ox-prism-ros-leather" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#6E2812" />
                <stop offset="100%" stopColor="#45180A" />
              </linearGradient>

              <linearGradient id="ox-prism-ros-ear-outer" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#9B9893" />
                <stop offset="100%" stopColor="#7E7B76" />
              </linearGradient>

              <linearGradient id="ox-prism-ros-ear-inner" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#C9A9A6" />
                <stop offset="100%" stopColor="#B59390" />
              </linearGradient>

              <linearGradient id="ox-prism-ros-dewlap-grad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#DDD8D3" />
                <stop offset="65%" stopColor="#C4BEB7" />
                <stop offset="100%" stopColor="#ABA49C" />
              </linearGradient>
            </defs>

            <ellipse cx="450" cy="470" rx="420" ry="36" fill="url(#ox-prism-ros-sawdust-grad)" />
            <ellipse cx="450" cy="470" rx="420" ry="36" stroke="#8A6432" strokeWidth="2" fill="none" opacity="0.6" />
            <ellipse cx="450" cy="440" rx="350" ry="120" fill="url(#ox-prism-ros-spotlight)" />

            <ellipse cx="420" cy="466" rx="330" ry="14" fill="#1C092C" opacity="0.65" />
            <ellipse cx="187" cy="468" rx="34" ry="7" fill="#140620" opacity="0.55" />
            <ellipse cx="236" cy="460" rx="28" ry="6" fill="#140620" opacity="0.45" />
            <ellipse cx="603" cy="468" rx="34" ry="7" fill="#140620" opacity="0.55" />
            <ellipse cx="539" cy="460" rx="28" ry="6" fill="#140620" opacity="0.45" />
            <ellipse cx="682" cy="460" rx="32" ry="7" fill="#140620" opacity="0.45" />

            <g id="ox-prism-ros-far-limbs">
              <path
                d="M 235 315 C 248 340, 245 370, 238 385 C 235 390, 230 395, 222 388 L 224 452 L 250 452 L 246 400 C 250 375, 252 345, 258 315 Z"
                fill="#A29D97"
              />
              <polygon points="224,452 250,452 247,464 221,464" fill="#282626" />
              <line x1="235" y1="452" x2="235" y2="464" stroke="#141313" strokeWidth="2" />

              <path
                d="M 545 320 C 552 350, 554 380, 552 400 L 554 452 L 528 452 L 528 400 C 530 375, 532 345, 538 320 Z"
                fill="#A29D97"
              />
              <polygon points="528,452 554,452 551,464 525,464" fill="#282626" />
              <line x1="539" y1="452" x2="539" y2="464" stroke="#141313" strokeWidth="2" />

              <path
                d="M 648 165 C 648 130, 640 100, 624 72 C 622 68, 627 67, 631 70 C 650 90, 664 128, 658 167 Z"
                fill="url(#ox-prism-ros-horn-far)"
              />
              <path
                d="M 624 72 C 640 100, 648 130, 648 165"
                stroke="#DDD5C6"
                strokeWidth="1.8"
                fill="none"
                opacity="0.8"
              />

              <path
                d="M 648 182 C 652 198, 654 220, 652 242 C 650 248, 644 248, 642 242 C 640 226, 642 206, 648 182 Z"
                fill="#6C6863"
              />
            </g>

            <g id="ox-prism-ros-tail-group">
              <path
                d="M 172 185 C 154 215, 142 260, 148 315 C 152 355, 158 385, 164 405"
                stroke="#84807C"
                strokeWidth="5.5"
                fill="none"
                strokeLinecap="round"
              />
              <path
                d="M 164 398 C 176 418, 178 440, 165 458 C 152 440, 154 418, 164 398 Z"
                fill="#161516"
              />
              <path
                d="M 164 408 C 171 424, 173 442, 164 454 C 157 442, 159 424, 164 408 Z"
                fill="#2A2729"
              />
            </g>

            <motion.g
              id="ox-prism-ros-barrel-group"
              animate={{ scaleY: [1, 1.014, 1], scaleX: [1, 1.008, 1] }}
              transition={{ duration: 4.2, repeat: Infinity, ease: 'easeInOut' }}
              style={{ transformOrigin: '420px 260px' }}
            >
              <path
                d="
                  M 510 168
                  C 450 176, 370 178, 300 174
                  C 260 170, 240 164, 222 165
                  C 195 168, 178 178, 170 185
                  C 146 205, 138 245, 146 285
                  C 152 320, 158 355, 160 380
                  C 160 388, 156 392, 158 396
                  L 168 442
                  L 172 460
                  L 206 460
                  L 202 442
                  L 198 402
                  C 205 375, 225 345, 235 325
                  C 255 330, 275 336, 310 338
                  C 345 342, 370 348, 400 350
                  C 415 358, 435 360, 455 352
                  C 485 344, 520 340, 545 338
                  C 560 338, 570 342, 578 348
                  L 584 390
                  L 586 442
                  L 588 460
                  L 622 460
                  L 618 442
                  L 616 390
                  L 614 345
                  C 625 335, 638 320, 642 300
                  C 646 270, 642 225, 634 185
                  C 624 170, 612 160, 595 152
                  C 575 110, 565 75, 545 75
                  C 525 75, 510 120, 510 168
                  Z
                "
                fill="url(#ox-prism-ros-body-grad)"
              />

              <path
                d="
                  M 510 168
                  C 450 176, 370 178, 300 174
                  C 260 170, 240 164, 222 165
                  C 195 168, 178 178, 170 185
                  C 146 205, 138 245, 146 285
                  C 152 320, 158 355, 160 380
                  C 160 388, 156 392, 158 396
                  L 168 442
                  L 172 460
                  L 206 460
                  L 202 442
                  L 198 402
                  C 205 375, 225 345, 235 325
                  C 255 330, 275 336, 310 338
                  C 345 342, 370 348, 400 350
                  C 415 358, 435 360, 455 352
                  C 485 344, 520 340, 545 338
                  C 560 338, 570 342, 578 348
                  L 584 390
                  L 586 442
                  L 588 460
                  L 622 460
                  L 618 442
                  L 616 390
                  L 614 345
                  C 625 335, 638 320, 642 300
                  C 646 270, 642 225, 634 185
                  C 624 170, 612 160, 595 152
                  C 575 110, 565 75, 545 75
                  C 525 75, 510 120, 510 168
                  Z
                "
                fill="url(#ox-prism-ros-barrel-shade)"
              />

              <polygon points="172,460 206,460 202,472 168,472" fill="#222020" />
              <line x1="187" y1="460" x2="187" y2="472" stroke="#121111" strokeWidth="2" />

              <polygon points="588,460 622,460 618,472 584,472" fill="#222020" />
              <line x1="603" y1="460" x2="603" y2="472" stroke="#121111" strokeWidth="2" />

              <path
                d="M 510 165 C 510 115, 525 75, 545 75 C 568 75, 588 112, 600 152 C 580 144, 552 140, 532 140 C 520 140, 512 148, 510 165 Z"
                fill="url(#ox-prism-ros-hump-crest)"
              />

              <g id="ox-prism-ros-dewlap-folds">
                <path
                  d="
                    M 672 265
                    C 690 295, 705 330, 688 355
                    C 672 375, 665 372, 655 388
                    C 642 405, 630 405, 618 418
                    C 602 425, 588 415, 574 412
                    C 560 405, 555 385, 560 365
                    C 565 345, 575 338, 580 338
                    C 610 335, 630 305, 642 275
                    Z
                  "
                  fill="url(#ox-prism-ros-dewlap-grad)"
                  stroke="#AEA8A0"
                  strokeWidth="1.2"
                />

                <path
                  d="M 688 355 C 674 372, 668 375, 656 388"
                  stroke="#FAF7F2"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  fill="none"
                />
                <path
                  d="M 655 388 C 642 405, 630 405, 618 418"
                  stroke="#FAF7F2"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  fill="none"
                />
                <path
                  d="M 618 418 C 602 425, 588 415, 574 412"
                  stroke="#FAF7F2"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  fill="none"
                />

                <path
                  d="M 670 275 C 672 315, 665 348, 656 385"
                  stroke="#AEA8A0"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  fill="none"
                />
                <path
                  d="M 668 280 C 670 315, 663 348, 654 382"
                  stroke="#FAF7F2"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  fill="none"
                />

                <path
                  d="M 640 295 C 638 335, 628 375, 616 414"
                  stroke="#AEA8A0"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  fill="none"
                />
                <path
                  d="M 638 300 C 636 335, 626 375, 614 410"
                  stroke="#FAF7F2"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  fill="none"
                />

                <path
                  d="M 612 320 C 605 352, 592 385, 574 410"
                  stroke="#AEA8A0"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  fill="none"
                />
                <path
                  d="M 610 325 C 603 352, 590 385, 572 406"
                  stroke="#FAF7F2"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  fill="none"
                />
              </g>

              <path
                d="M 698 284 C 712 332, 726 380, 722 418 C 718 444, 696 458, 672 458 C 650 458, 642 445, 654 434 C 668 422, 700 430, 706 446 C 710 457, 694 461, 680 461"
                stroke="#140620"
                strokeWidth="5.5"
                opacity="0.45"
                fill="none"
              />
              <path
                d="M 698 284 C 712 332, 726 380, 722 418 C 718 444, 696 458, 672 458 C 650 458, 642 445, 654 434 C 668 422, 700 430, 706 446 C 710 457, 694 461, 680 461"
                stroke="#F6F2E4"
                strokeWidth="4"
                strokeLinecap="round"
                fill="none"
              />
            </motion.g>

            <motion.g
              id="ox-prism-ros-head-group"
              style={{ transformOrigin: '635px 170px' }}
              animate={{ rotate: [-1.4, 1.4, -1.4] }}
              transition={{ duration: 4.8, repeat: Infinity, ease: 'easeInOut' }}
            >
              <path
                d="
                  M 630 168
                  C 650 185, 665 205, 688 232
                  C 715 262, 742 292, 755 305
                  C 768 316, 774 328, 768 336
                  C 758 344, 742 344, 732 338
                  C 705 328, 682 300, 668 272
                  C 654 245, 642 210, 634 168
                  Z
                "
                fill="#DAD6D1"
              />

              <path
                d="M 746 298 C 764 308, 774 318, 770 332 C 760 342, 744 342, 734 336 C 748 326, 750 310, 746 298 Z"
                fill="#282627"
              />
              <ellipse cx="758" cy="318" rx="4.5" ry="3" fill="#141314" />
              <path d="M 742 328 C 752 330, 762 326, 765 318" stroke="#484447" strokeWidth="1.5" fill="none" />

              <ellipse cx="678" cy="225" rx="7.5" ry="5.5" fill="#181617" />
              <ellipse cx="677" cy="224" rx="4" ry="3.5" fill="#3D2B1F" />
              <circle cx="680" cy="223" r="1.5" fill="#FFFFFF" />
              <path d="M 666 218 C 676 214, 686 216, 690 222" stroke="#54504E" strokeWidth="2.5" fill="none" />

              <path
                d="M 630 168 C 632 130, 622 95, 604 68 C 601 64, 607 63, 611 66 C 632 92, 648 130, 648 168 Z"
                fill="url(#ox-prism-ros-horn-near)"
              />
              <path
                d="M 604 68 C 622 95, 632 130, 630 168"
                stroke="#EDE7DB"
                strokeWidth="2.4"
                fill="none"
              />

              <path
                d="
                  M 634 186
                  C 622 216, 618 252, 618 274
                  C 620 278, 626 278, 630 272
                  C 642 250, 646 220, 642 190
                  Z
                "
                fill="url(#ox-prism-ros-ear-outer)"
                stroke="#6C6964"
                strokeWidth="1.2"
              />
              <path
                d="
                  M 633 200
                  C 625 224, 622 252, 623 268
                  C 625 270, 628 266, 630 260
                  C 635 244, 638 220, 637 200
                  Z
                "
                fill="url(#ox-prism-ros-ear-inner)"
              />

              <path
                d="M 634 168 L 698 282 L 744 296"
                stroke="url(#ox-prism-ros-leather)"
                strokeWidth="4"
                fill="none"
              />
              <path
                d="M 698 282 L 688 322"
                stroke="url(#ox-prism-ros-leather)"
                strokeWidth="3.5"
                fill="none"
              />
              <circle cx="698" cy="282" r="6.5" fill="#F2C14E" stroke="#8A6715" strokeWidth="2" />
              <circle cx="698" cy="282" r="3" fill="#FFEAA8" />
            </motion.g>
          </svg>
        </div>
      </section>

      <main className="ox-prism-ros-content">
        <article className="ox-prism-ros-catalogue-card">
          <div className="ox-prism-ros-card-ribbon-border" />
          <div className="ox-prism-ros-card-inner">
            <div className="ox-prism-ros-card-banner">
              <span className="ox-prism-ros-badge-lot">LOT NO. 104</span>
              <span className="ox-prism-ros-badge-status">HERD BOOK #924-ABBA · TATTOO: 04-TX</span>
              <span className="ox-prism-ros-badge-award">SUPREME CHAMPION</span>
            </div>

            <div className="ox-prism-ros-card-grid">
              <div className="ox-prism-ros-data-block">
                <span className="ox-prism-ros-data-label">EXHIBITOR & HERD</span>
                <span className="ox-prism-ros-data-val">Sugarland Brahman Ranch · Wharton County, Texas</span>
              </div>
              <div className="ox-prism-ros-data-block">
                <span className="ox-prism-ros-data-label">PEDIGREE LINEAGE</span>
                <span className="ox-prism-ros-data-val">Sire: Imp. Guzerat Valiant VII × Dam: Sugarland Nelore 42</span>
              </div>
              <div className="ox-prism-ros-data-block">
                <span className="ox-prism-ros-data-label">OFFICIAL WEIGH-IN</span>
                <span className="ox-prism-ros-data-val">2,410 lbs (1,093 kg) · Hip Height: 62.5 in · Calved: Mar 2021</span>
              </div>
              <div className="ox-prism-ros-data-block">
                <span className="ox-prism-ros-data-label">BREED CLASSIFICATION</span>
                <span className="ox-prism-ros-data-val">American Brahman (Bos indicus) Senior Herd Sire</span>
              </div>
            </div>

            <div className="ox-prism-ros-narrative">
              <h2 className="ox-prism-ros-section-heading">Official Breed Standard Inspection</h2>
              <p>
                The American Brahman is the definitive zebu breed of the Western Hemisphere, forged along the Gulf Coast of Texas and Louisiana between 1854 and 1926. Synthesized from 266 foundation animals imported directly from India—principally Guzerat, Nelore, Gir, and Krishna Valley strains—the breed was formally codified with the establishment of the American Brahman Breeders Association (ABBA) in Houston in 1924. Lot 104 exemplifies the absolute pinnacle of the standard: a commanding cervicothoracic muscular hump centered squarely over the shoulders, an expansive four-tier folded dewlap maximizing vascular heat dissipation, and long, pendulous 32-centimeter ears that drape smoothly beside the jaw to deflect rain, brush, and subtropical insects.
              </p>
              <p>
                Unlike European taurine cattle, the Brahman possesses a slick silver-grey hair coat overlaying jet-black dermal pigmentation that provides total deflection of solar ultraviolet radiation. Cutaneous apocrine sweat glands occur at more than five times the density of British breeds, enabling continuous evaporative cooling in ambient temperatures exceeding 42°C (108°F) without respiratory stress. Supported by clean, dense bone and sound, dark cloven hooves, this senior sire carries exceptional muscle mass across the loin, rump, and stifle while preserving the free, agile stride indispensable to rangeland thriftiness.
              </p>
            </div>
          </div>
        </article>

        <section className="ox-prism-ros-scorecard-section" aria-label="Official Judge's Scorecard">
          <div className="ox-prism-ros-scorecard-header">
            <div className="ox-prism-ros-card-badge">SECTION IV · OFFICIAL SCORECARD</div>
            <h2 className="ox-prism-ros-section-heading">Championship Judge's Scoring Index</h2>
            <p className="ox-prism-ros-scorecard-desc">
              Point evaluation adjudicated under the unified ABBA Conformation Appraisal System. Minimum championship qualification threshold: 92 points.
            </p>
          </div>

          <div className="ox-prism-ros-meters">
            {scoreData.map((item, index) => (
              <div key={index} className="ox-prism-ros-meter-row">
                <div className="ox-prism-ros-meter-info">
                  <span className="ox-prism-ros-meter-title">{item.label}</span>
                  <span className="ox-prism-ros-meter-val">{item.score} / 100</span>
                </div>
                <div className="ox-prism-ros-bar-track">
                  <motion.div
                    className="ox-prism-ros-bar-fill"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${item.score}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: index * 0.15, ease: 'easeOut' }}
                  />
                </div>
                <p className="ox-prism-ros-meter-note">{item.note}</p>
              </div>
            ))}
          </div>

          <div className="ox-prism-ros-score-summary">
            <div className="ox-prism-ros-composite-badge">
              <span className="ox-prism-ros-comp-num">97.6</span>
              <span className="ox-prism-ros-comp-label">COMPOSITE SCORE</span>
            </div>
            <div className="ox-prism-ros-verdict">
              <span className="ox-prism-ros-verdict-title">UNANIMOUS GRAND CHAMPION BULL</span>
              <p className="ox-prism-ros-verdict-text">
                Awarded the Purple Rosette and Golden Banner of the Gulf Coast Exposition. Qualified for entry into the National Herd Sire Hall of Fame.
              </p>
            </div>
          </div>
        </section>

        <section className="ox-prism-ros-comparative-section" aria-label="Comparative anatomy">
          <div className="ox-prism-ros-comp-head">
            <span className="ox-prism-ros-card-badge">BIOLOGICAL EVOLUTION</span>
            <h2 className="ox-prism-ros-section-heading">How the Zebu Differs from Taurine Cattle</h2>
            <p className="ox-prism-ros-scorecard-desc">
              Evolutionary divergence between humped Indian cattle (Bos indicus) and humpless European cattle (Bos taurus) across four key physiological axes.
            </p>
          </div>

          <div className="ox-prism-ros-comp-grid">
            <div className="ox-prism-ros-trait-card">
              <div className="ox-prism-ros-trait-num">01</div>
              <h3 className="ox-prism-ros-trait-title">Thermoregulation & Sweat Glands</h3>
              <p className="ox-prism-ros-trait-desc">
                European Bos taurus rely predominantly on panting and respiratory evaporation, suffering severe heat depression at temperatures above 24°C (75°F). Brahmans disperse excess metabolic heat through cutaneous sweating, boasting over 1,500 apocrine sweat glands per square centimeter—five times the density of Angus or Hereford stock.
              </p>
            </div>

            <div className="ox-prism-ros-trait-card">
              <div className="ox-prism-ros-trait-num">02</div>
              <h3 className="ox-prism-ros-trait-title">Dewlap & Heat Radiating Hide</h3>
              <p className="ox-prism-ros-trait-desc">
                The massive, pleated dewlap cascading from jaw to brisket, along with the pendulous sheath and flexible skin folds, expands the bull's total surface area by roughly 12% relative to body mass. This excess dermal vascularization acts as a biological radiator, circulating arterial blood close to the surface for instantaneous heat loss.
              </p>
            </div>

            <div className="ox-prism-ros-trait-card">
              <div className="ox-prism-ros-trait-num">03</div>
              <h3 className="ox-prism-ros-trait-title">Parasite & Tick Immunity</h3>
              <p className="ox-prism-ros-trait-desc">
                Brahmans possess an intensely responsive cutaneous trunci (twitch) muscle that dislodges biting insects with rapid localized tremors. Furthermore, specialized sebaceous glands secrete an oily sebum with a characteristic musky odor that acts as a natural biochemical repellent against cattle fever ticks (Rhipicephalus microplus) and horn flies.
              </p>
            </div>

            <div className="ox-prism-ros-trait-card">
              <div className="ox-prism-ros-trait-num">04</div>
              <h3 className="ox-prism-ros-trait-title">Rumen Thriftiness & Longevity</h3>
              <p className="ox-prism-ros-trait-desc">
                Adapted to the semi-arid pastures of India, the zebu digestive tract recycles endogenous nitrogen through saliva and the rumen wall with unmatched efficiency. Brahmans maintain robust body condition on coarse, high-fiber grasses where taurine cattle starve, while breeding females routinely calve soundly past 15 to 18 years of age.
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="ox-prism-ros-footer">
        <div className="ox-prism-ros-footer-inner">
          <div className="ox-prism-ros-seal-wrap">
            <div className="ox-prism-ros-seal-disc">
              <span className="ox-prism-ros-seal-yr">1924</span>
              <span className="ox-prism-ros-seal-txt">ABBA</span>
              <span className="ox-prism-ros-seal-yr">2024</span>
            </div>
            <div className="ox-prism-ros-seal-caption">
              CENTENNIAL BREED REGISTRY ARCHIVE
            </div>
          </div>

          <div className="ox-prism-ros-signature-colophon">
            <div className="ox-prism-ros-colophon-label">OFFICIAL EXHIBITION SIGNATURE</div>
            <div className="ox-prism-ros-signature-text">
              SET XXXII · DESIGNED BY ANTIGRAVITY
            </div>
            <div className="ox-prism-ros-colophon-sub">
              PRIZE RING DESIGN REGISTERED · WHARTON COUNTY LIVESTOCK PAVILION
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
