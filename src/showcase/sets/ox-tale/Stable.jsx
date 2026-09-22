import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import './stable.css'

export default function Stable() {
  const [narrow, setNarrow] = useState(
    () => typeof window !== 'undefined' && window.matchMedia('(max-width: 760px)').matches,
  )

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 760px)')
    const onChange = () => setNarrow(mq.matches)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  return (
    <div className="th-ox-tale-stable ox-tale-s ox-tale-page">
      <div className="s-glow" aria-hidden="true" />

      <div className="s-scene" aria-hidden="true">
        <svg
          viewBox="0 0 1400 700"
          className="s-svg"
          preserveAspectRatio={narrow ? 'xMaxYMax slice' : 'xMidYMax slice'}
        >
          <defs>
            <pattern id="ox-tale-s-hatch" width="14" height="14" patternUnits="userSpaceOnUse" patternTransform="rotate(28)">
              <line x1="0" y1="0" x2="0" y2="14" stroke="#3A2E22" strokeWidth="3" />
            </pattern>
            <radialGradient id="ox-tale-s-candle" cx="0.5" cy="0.5" r="0.5">
              <stop offset="0" stopColor="#E8B84B" stopOpacity="0.55" />
              <stop offset="1" stopColor="#E8B84B" stopOpacity="0" />
            </radialGradient>
          </defs>

          <rect width="1400" height="700" fill="#120E0A" />
          <rect width="1400" height="470" fill="url(#ox-tale-s-hatch)" opacity="0.55" />
          <g stroke="#2C241A" strokeWidth="8" opacity="0.8">
            <line x1="0" y1="470" x2="1400" y2="470" />
            <path d="M180 0 L180 470 M560 0 L560 470 M940 0 L940 470 M1320 0 L1320 470" />
            <path d="M0 120 L1400 120" strokeWidth="5" />
          </g>

          <circle className="s-candle-halo" cx="210" cy="300" r="170" fill="url(#ox-tale-s-candle)" />
          <g className="s-candle">
            <rect x="198" y="330" width="26" height="90" fill="#E8DCC0" />
            <path d="M211 300 C222 314 222 330 211 340 C200 330 200 314 211 300 Z" fill="#F5D76E" />
            <path d="M211 312 C217 320 217 330 211 336 C205 330 205 320 211 312 Z" fill="#FFF6D8" />
            <rect x="184" y="416" width="54" height="16" rx="3" fill="#5A4630" />
          </g>

          <g className="s-straw">
            <path d="M0 470 Q350 448 700 462 T1400 456 L1400 700 L0 700 Z" fill="#8A6528" />
            <path d="M0 470 Q350 448 700 462 T1400 456 L1400 500 L0 512 Z" fill="#C9973F" />
            <g stroke="#E0B45C" strokeWidth="3" strokeLinecap="round" opacity="0.75">
              <path d="M60 500 l40 -8 M130 520 l46 -10 M240 496 l38 -6 M330 530 l52 -12 M470 508 l44 -8 M590 526 l48 -10 M720 500 l42 -8 M850 524 l50 -12 M980 504 l44 -8 M1110 528 l48 -10 M1240 502 l44 -8 M1330 522 l40 -8" />
              <path d="M90 548 l44 -8 M210 560 l50 -10 M360 552 l46 -8 M510 568 l52 -12 M660 550 l44 -8 M800 566 l48 -10 M940 552 l46 -8 M1080 568 l50 -10 M1220 550 l44 -8" />
            </g>
          </g>

          <g className="s-ox-wrap">
            <g fill="#0A0705" opacity="0.55">
              <ellipse cx="640" cy="576" rx="420" ry="16" />
            </g>
            <g className="s-ox">
              <path
                fill="#C9973F"
                d="M1178 396
                   C1168 370 1146 350 1118 344
                   C1090 338 1064 342 1046 354
                   C1010 378 970 400 930 416
                   C910 424 894 428 880 430
                   C800 424 720 416 640 412
                   C580 410 520 412 470 420
                   C430 426 396 444 368 474
                   C344 500 334 532 344 556
                   C420 570 540 574 660 574
                   C740 574 820 570 870 564
                   C894 556 912 552 924 546
                   C950 528 978 512 1008 496
                   C1040 478 1074 464 1110 450
                   C1140 438 1164 424 1176 412
                   C1180 406 1180 400 1178 396 Z"
              />
              <path
                fill="#C9973F"
                d="M880 556
                   C930 566 1000 572 1060 576
                   C1086 578 1096 594 1078 602
                   C1010 606 930 600 874 588
                   C852 582 856 560 880 556 Z"
              />
              <path fill="#8A6528" d="M1046 578 C1066 580 1084 584 1094 590 C1098 596 1092 602 1078 603 C1064 604 1052 601 1044 596 C1040 590 1041 583 1046 578 Z" />
              <g fill="#E8DCC0">
                <path d="M1058 356 C1064 322 1084 292 1116 270 C1106 304 1100 338 1102 372 C1086 378 1066 372 1058 356 Z" />
                <path d="M1044 352 C1034 318 1040 282 1062 252 C1064 288 1076 322 1098 354 C1084 368 1058 368 1044 352 Z" />
              </g>
              <path fill="#A87C32" d="M1032 368 C1000 364 974 372 958 390 C988 406 1020 400 1046 382 Z" />
              <g fill="#1A120C">
                <ellipse cx="1102" cy="374" rx="9" ry="10" />
                <ellipse cx="1164" cy="404" rx="7" ry="9" />
              </g>
              <path d="M1144 424 C1156 430 1170 430 1180 424" stroke="#1A120C" strokeWidth="5" fill="none" strokeLinecap="round" />
              <path d="M1064 368 C1080 378 1110 384 1144 380" stroke="#8A6528" strokeWidth="5" fill="none" strokeLinecap="round" opacity="0.7" />
              <path d="M870 440 C760 434 640 432 520 438" stroke="#8A6528" strokeWidth="5" fill="none" opacity="0.5" />
              <path d="M470 450 C500 490 508 540 496 574" stroke="#8A6528" strokeWidth="5" fill="none" opacity="0.5" />
              <path d="M700 430 C720 480 726 530 718 572" stroke="#8A6528" strokeWidth="5" fill="none" opacity="0.4" />
              <path
                fill="#C9973F"
                d="M344 470 C320 500 312 536 322 566 C334 556 350 542 362 524 C376 502 378 478 370 458 Z"
              />
              <ellipse cx="336" cy="568" rx="15" ry="10" fill="#1A120C" transform="rotate(-12 336 568)" />
            </g>
            <g className="s-breath" fill="#F0E4C8">
              <circle cx="1188" cy="416" r="13" />
              <circle cx="1188" cy="416" r="13" />
              <circle cx="1188" cy="416" r="13" />
            </g>
          </g>

          <g className="s-motes" fill="#E8B84B">
            <circle cx="320" cy="220" r="3" />
            <circle cx="480" cy="180" r="2.5" />
            <circle cx="700" cy="260" r="3" />
            <circle cx="880" cy="200" r="2.5" />
            <circle cx="1080" cy="240" r="3" />
            <circle cx="1200" cy="180" r="2.5" />
            <circle cx="560" cy="300" r="2" />
            <circle cx="980" cy="320" r="2" />
          </g>
        </svg>
      </div>

      <header className="s-head">
        <motion.p
          className="s-kicker"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Apocrypha · the midnight speech
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          The Stable Ox
        </motion.h1>
        <motion.p
          className="s-body"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.48 }}
        >
          In the old telling, at midnight the ox in the Bethlehem shed rose on its forelegs and spoke
          the birth aloud in a human tongue. The ass, in the same story, said nothing and kept
          chewing. Somebody put those words in the animal’s mouth because the ox was already the
          nearest thing in the shed to a witness.
        </motion.p>
        <motion.dl
          className="s-data"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.62 }}
        >
          <div>
            <dt>Hour</dt>
            <dd>Midnight, after the birth</dd>
          </div>
          <div>
            <dt>Speaker</dt>
            <dd>The ox; the ass abstains</dd>
          </div>
          <div>
            <dt>Source</dt>
            <dd>Infancy gospel traditions</dd>
          </div>
        </motion.dl>
      </header>

      <motion.aside
        className="s-colophon"
        aria-label="Signature"
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.8 }}
      >
        <span className="s-colophon-rule" aria-hidden="true" />
        <span className="s-colophon-text">SET 03 · DESIGNED BY MIMO</span>
        <span className="s-colophon-rule" aria-hidden="true" />
      </motion.aside>
    </div>
  )
}
