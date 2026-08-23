import { motion } from 'framer-motion'
import './numen.css'

const GARLAND_1 = [
  [480, 320],
  [490, 328],
  [502, 338],
  [514, 350],
  [524, 364],
]

const GARLAND_2 = [
  [464, 350],
  [476, 364],
  [490, 380],
  [506, 396],
  [520, 416],
]

const GARLAND_3 = [
  [454, 382],
  [468, 404],
  [484, 426],
  [500, 450],
  [510, 474],
]

const LOTUS_PETALS = Array.from({ length: 8 }, (_, i) => {
  const angle = (i * 45 * Math.PI) / 180
  const x = 365 + Math.cos(angle) * 12
  const y = 406 + Math.sin(angle) * 12
  return { x, y, rot: i * 45 }
})

const PLINTH_PETALS = Array.from({ length: 18 }, (_, i) => ({
  x: 130 + i * 29.5,
  y: 558,
}))

const ARCH_ROSETTES = Array.from({ length: 13 }, (_, i) => {
  const t = (i + 1) / 14
  const angle = Math.PI * (1 - t)
  const cx = 400 + Math.cos(angle) * 255
  const cy = 295 - Math.sin(angle) * 220
  return { cx, cy }
})

const FACETS = [
  {
    icon: '✦',
    title: 'Dharma & Adoration',
    desc: 'Vāhana of Mahādeva, embodying steadfast righteousness, patient stillness, and eternal adoration.',
  },
  {
    icon: '❖',
    title: 'Monolithic Craft',
    desc: 'Hewn from solitary blocks of granite, polished to a deep mirror sheen with sacred unguents and centuries of devotion.',
  },
  {
    icon: '✧',
    title: 'The Listening Ear',
    desc: 'Devotees whisper unuttered prayers into his ear, trusting the joyful guardian to carry them to Shiva.',
  },
]

export default function Numen() {
  return (
    <main
      className="th-ox-vesper ox-vesper-numen"
      style={{ minHeight: '100vh', position: 'relative', overflowX: 'hidden' }}
    >
      <div className="ox-vesper-numen-bg-frame" aria-hidden="true" />

      <div className="ox-vesper-numen-inner">
        <header className="ox-vesper-numen-header">
          <motion.p
            className="ox-vesper-numen-kicker"
            lang="sa"
            initial={{ y: 25, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            वाहन · VĀHANA
          </motion.p>
          <motion.h1
            className="ox-vesper-numen-title"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            NUMEN
          </motion.h1>
          <motion.p
            className="ox-vesper-numen-subtitle"
            initial={{ y: 25, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            THE SACRED BULL NANDI · GUARDIAN OF KAILASA
          </motion.p>
        </header>

        <section
          className="ox-vesper-numen-sanctuary"
          aria-label="Sculptural shrine depicting Nandi the sacred bull within a temple arch"
        >
          <svg
            className="ox-vesper-numen-svg"
            viewBox="0 0 800 640"
            role="img"
            aria-label="Monumental South Indian temple sculpture of Nandi the seated bull adorned with garlands and temple bell under an ornate pointed arch"
            focusable="false"
          >
            <defs>
              <linearGradient
                id="ox-vesper-numen-gold-bull"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#F5DC92" />
                <stop offset="30%" stopColor="#D4AF37" />
                <stop offset="70%" stopColor="#B8860B" />
                <stop offset="100%" stopColor="#7A5605" />
              </linearGradient>

              <linearGradient
                id="ox-vesper-numen-dark-bronze"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#966F1C" />
                <stop offset="50%" stopColor="#694C0D" />
                <stop offset="100%" stopColor="#3D2B05" />
              </linearGradient>

              <linearGradient
                id="ox-vesper-numen-sandstone-soft"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#FFF4DE" />
                <stop offset="60%" stopColor="#E8D5B0" />
                <stop offset="100%" stopColor="#C2AD83" />
              </linearGradient>

              <linearGradient
                id="ox-vesper-numen-vermillion-accent"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#872626" />
                <stop offset="100%" stopColor="#5C1A1A" />
              </linearGradient>

              <radialGradient
                id="ox-vesper-numen-sanctum-glow"
                cx="50%"
                cy="46%"
                r="48%"
              >
                <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.22" />
                <stop offset="50%" stopColor="#D4AF37" stopOpacity="0.06" />
                <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
              </radialGradient>

              <linearGradient
                id="ox-vesper-numen-arch-stroke"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop offset="0%" stopColor="#E8D5B0" />
                <stop offset="25%" stopColor="#D4AF37" />
                <stop offset="50%" stopColor="#FFF4DE" />
                <stop offset="75%" stopColor="#D4AF37" />
                <stop offset="100%" stopColor="#E8D5B0" />
              </linearGradient>

              <linearGradient
                id="ox-vesper-numen-flame-outer"
                x1="0%"
                y1="100%"
                x2="0%"
                y2="0%"
              >
                <stop offset="0%" stopColor="#5C1A1A" />
                <stop offset="30%" stopColor="#D44000" />
                <stop offset="70%" stopColor="#FFA000" />
                <stop offset="100%" stopColor="#FFF275" />
              </linearGradient>

              <linearGradient
                id="ox-vesper-numen-flame-inner"
                x1="0%"
                y1="100%"
                x2="0%"
                y2="0%"
              >
                <stop offset="0%" stopColor="#FFB300" />
                <stop offset="55%" stopColor="#FFF9C4" />
                <stop offset="100%" stopColor="#FFFFFF" />
              </linearGradient>
            </defs>

            <ellipse
              cx="400"
              cy="360"
              rx="310"
              ry="240"
              fill="url(#ox-vesper-numen-sanctum-glow)"
              aria-hidden="true"
            />

            <g className="ox-vesper-numen-pillars" aria-hidden="true">
              <g className="ox-vesper-numen-pillar-left">
                <path
                  d="M85 275 L155 275 L150 295 L90 295 Z"
                  fill="#2A241A"
                  stroke="#B8860B"
                  strokeWidth="1.5"
                />
                <rect
                  x="95"
                  y="295"
                  width="50"
                  height="240"
                  fill="#221E18"
                  stroke="#B8860B"
                  strokeWidth="1.5"
                />
                <line
                  x1="107"
                  y1="305"
                  x2="107"
                  y2="525"
                  stroke="#D4AF37"
                  strokeWidth="1"
                  opacity="0.35"
                />
                <line
                  x1="120"
                  y1="305"
                  x2="120"
                  y2="525"
                  stroke="#D4AF37"
                  strokeWidth="1.5"
                  opacity="0.55"
                />
                <line
                  x1="133"
                  y1="305"
                  x2="133"
                  y2="525"
                  stroke="#D4AF37"
                  strokeWidth="1"
                  opacity="0.35"
                />
                <path
                  d="M88 535 L152 535 L156 555 L84 555 Z"
                  fill="#2A241A"
                  stroke="#B8860B"
                  strokeWidth="1.5"
                />
              </g>

              <g className="ox-vesper-numen-pillar-right">
                <path
                  d="M645 275 L715 275 L710 295 L650 295 Z"
                  fill="#2A241A"
                  stroke="#B8860B"
                  strokeWidth="1.5"
                />
                <rect
                  x="655"
                  y="295"
                  width="50"
                  height="240"
                  fill="#221E18"
                  stroke="#B8860B"
                  strokeWidth="1.5"
                />
                <line
                  x1="667"
                  y1="305"
                  x2="667"
                  y2="525"
                  stroke="#D4AF37"
                  strokeWidth="1"
                  opacity="0.35"
                />
                <line
                  x1="680"
                  y1="305"
                  x2="680"
                  y2="525"
                  stroke="#D4AF37"
                  strokeWidth="1.5"
                  opacity="0.55"
                />
                <line
                  x1="693"
                  y1="305"
                  x2="693"
                  y2="525"
                  stroke="#D4AF37"
                  strokeWidth="1"
                  opacity="0.35"
                />
                <path
                  d="M648 535 L712 535 L716 555 L644 555 Z"
                  fill="#2A241A"
                  stroke="#B8860B"
                  strokeWidth="1.5"
                />
              </g>
            </g>

            <g className="ox-vesper-numen-arch" aria-hidden="true">
              <motion.path
                d="M120 295 C120 185 190 105 320 62 C360 48 385 36 400 22 C415 36 440 48 480 62 C610 105 680 185 680 295"
                fill="none"
                stroke="url(#ox-vesper-numen-arch-stroke)"
                strokeWidth="4"
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
              />

              <motion.path
                d="M150 295 C150 205 210 135 330 95 C365 82 385 72 400 58 C415 72 435 82 470 95 C590 135 650 205 650 295"
                fill="none"
                stroke="url(#ox-vesper-numen-gold-bull)"
                strokeWidth="2"
                strokeDasharray="6 4"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{
                  duration: 1.6,
                  delay: 0.2,
                  ease: [0.22, 1, 0.36, 1],
                }}
              />

              {ARCH_ROSETTES.map((pos, idx) => (
                <circle
                  key={idx}
                  cx={pos.cx}
                  cy={pos.cy}
                  r="3.5"
                  fill="#D4AF37"
                  stroke="#5C1A1A"
                  strokeWidth="1"
                />
              ))}

              <g className="ox-vesper-numen-kalasa">
                <path
                  d="M385 60 L415 60 L410 42 L390 42 Z"
                  fill="url(#ox-vesper-numen-gold-bull)"
                  stroke="#8A6508"
                  strokeWidth="1"
                />
                <circle
                  cx="400"
                  cy="35"
                  r="9"
                  fill="url(#ox-vesper-numen-gold-bull)"
                  stroke="#8A6508"
                  strokeWidth="1"
                />
                <path
                  d="M394 28 L400 12 L406 28 Z"
                  fill="#E8D5B0"
                  stroke="#8A6508"
                  strokeWidth="1"
                />
              </g>
            </g>

            <g className="ox-vesper-numen-plinth" aria-hidden="true">
              <rect
                x="130"
                y="535"
                width="540"
                height="20"
                rx="3"
                fill="#2A241A"
                stroke="#B8860B"
                strokeWidth="1.5"
              />
              <rect
                x="100"
                y="555"
                width="600"
                height="28"
                fill="#1C1813"
                stroke="#D4AF37"
                strokeWidth="1"
              />

              {PLINTH_PETALS.map((petal, idx) => (
                <path
                  key={idx}
                  d={`M${petal.x} ${petal.y} Q${petal.x + 12} ${petal.y - 12} ${petal.x + 24} ${petal.y} Q${petal.x + 12} ${petal.y + 12} ${petal.x} ${petal.y} Z`}
                  fill="url(#ox-vesper-numen-gold-bull)"
                  opacity="0.8"
                />
              ))}

              <rect
                x="70"
                y="583"
                width="660"
                height="25"
                rx="2"
                fill="#171512"
                stroke="#8A6508"
                strokeWidth="1.5"
              />
              <line
                x1="80"
                y1="595"
                x2="720"
                y2="595"
                stroke="#D4AF37"
                strokeWidth="1"
                opacity="0.6"
              />
            </g>

            <motion.g
              className="ox-vesper-numen-nandi-bull"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              <g className="ox-vesper-numen-hind-quarter">
                <path
                  d="M225 455 C225 410 250 370 295 360 C335 350 365 365 375 390 C360 425 330 465 295 500 C270 528 245 536 230 535 C222 515 225 480 225 455 Z"
                  fill="url(#ox-vesper-numen-gold-bull)"
                  stroke="#8A6508"
                  strokeWidth="2"
                />
                <path
                  d="M235 524 C248 524 260 528 268 535 L232 535 Z"
                  fill="#E8D5B0"
                  stroke="#8A6508"
                  strokeWidth="1.2"
                />
              </g>

              <g className="ox-vesper-numen-tail">
                <path
                  d="M228 425 C208 455 206 495 218 522 C225 532 236 535 242 530 C246 524 243 514 236 504 C228 486 228 456 238 434 Z"
                  fill="url(#ox-vesper-numen-dark-bronze)"
                  stroke="#8A6508"
                  strokeWidth="1.5"
                />
                <path
                  d="M232 510 C244 516 250 526 247 534 C240 540 230 536 224 526 Z"
                  fill="#E8D5B0"
                  stroke="#8A6508"
                  strokeWidth="1"
                />
              </g>

              <g className="ox-vesper-numen-torso">
                <path
                  d="M285 365 C325 355 375 355 420 368 C445 376 470 400 482 430 C468 470 435 512 390 528 C340 535 290 532 265 515 C288 475 305 420 285 365 Z"
                  fill="url(#ox-vesper-numen-gold-bull)"
                  stroke="#8A6508"
                  strokeWidth="2"
                />
              </g>

              <g className="ox-vesper-numen-hump">
                <path
                  d="M370 355 C360 305 382 250 420 250 C452 250 466 295 460 342 C435 358 402 362 370 355 Z"
                  fill="url(#ox-vesper-numen-gold-bull)"
                  stroke="#8A6508"
                  strokeWidth="2"
                />
                <path
                  d="M420 256 C440 262 452 292 448 328"
                  fill="none"
                  stroke="#FFF4DE"
                  strokeWidth="2"
                  strokeLinecap="round"
                  opacity="0.75"
                />
              </g>

              <g className="ox-vesper-numen-dewlap">
                <path
                  d="M505 350 C488 385 476 430 480 472 C485 505 510 526 535 530 C512 520 496 492 496 455 C496 415 512 375 528 345 Z"
                  fill="url(#ox-vesper-numen-gold-bull)"
                  stroke="#8A6508"
                  strokeWidth="2"
                />
                <path
                  d="M515 370 C505 395 502 425 506 455"
                  fill="none"
                  stroke="#8A6508"
                  strokeWidth="1.5"
                  opacity="0.6"
                />
              </g>

              <g className="ox-vesper-numen-forelegs">
                <path
                  d="M440 480 C455 475 478 482 492 500 L482 534 C466 534 450 526 440 510 Z"
                  fill="url(#ox-vesper-numen-dark-bronze)"
                  stroke="#8A6508"
                  strokeWidth="1.5"
                />
                <path
                  d="M472 470 C495 462 528 468 558 490 C572 502 575 518 565 530 C552 538 530 538 508 535 C485 532 466 520 456 505 C460 488 464 476 472 470 Z"
                  fill="url(#ox-vesper-numen-gold-bull)"
                  stroke="#8A6508"
                  strokeWidth="2"
                />
                <ellipse
                  cx="545"
                  cy="502"
                  rx="10"
                  ry="14"
                  fill="url(#ox-vesper-numen-sandstone-soft)"
                  opacity="0.25"
                  transform="rotate(25 545 502)"
                />
                <path
                  d="M542 522 L562 522 C566 528 560 536 550 538 L534 538 C537 528 540 524 542 522 Z"
                  fill="#E8D5B0"
                  stroke="#8A6508"
                  strokeWidth="1.5"
                />
                <rect
                  x="536"
                  y="515"
                  width="28"
                  height="5"
                  rx="2"
                  fill="#D4AF37"
                  stroke="#8A6508"
                  strokeWidth="1"
                />
              </g>

              <g className="ox-vesper-numen-horns">
                <path
                  d="M478 248 C482 222 476 188 458 158 C452 149 445 145 442 147 C440 151 444 160 451 175 C462 202 466 228 465 250 Z"
                  fill="url(#ox-vesper-numen-dark-bronze)"
                  stroke="#8A6508"
                  strokeWidth="1.5"
                />
                <path
                  d="M468 215 L477 219 L475 225 L466 221 Z"
                  fill="#E8D5B0"
                  stroke="#8A6508"
                  strokeWidth="1"
                />
                <circle cx="471" cy="220" r="1.2" fill="#D4AF37" />
                <path
                  d="M459 182 L467 186 L465 191 L457 187 Z"
                  fill="#E8D5B0"
                  stroke="#8A6508"
                  strokeWidth="1"
                />
                <circle cx="462" cy="186" r="1.2" fill="#D4AF37" />

                <path
                  d="M500 256 C505 226 498 190 478 158 C472 148 464 144 460 146 C458 150 463 160 470 176 C482 205 487 232 486 258 Z"
                  fill="url(#ox-vesper-numen-gold-bull)"
                  stroke="#8A6508"
                  strokeWidth="2"
                />
                <path
                  d="M488 222 L498 226 L496 233 L486 229 Z"
                  fill="#E8D5B0"
                  stroke="#8A6508"
                  strokeWidth="1"
                />
                <circle cx="492" cy="227" r="1.5" fill="#D4AF37" />
                <path
                  d="M479 188 L488 192 L486 198 L477 194 Z"
                  fill="#E8D5B0"
                  stroke="#8A6508"
                  strokeWidth="1"
                />
                <circle cx="482" cy="193" r="1.5" fill="#D4AF37" />
                <path
                  d="M468 158 L475 162 L473 167 L466 163 Z"
                  fill="#E8D5B0"
                  stroke="#8A6508"
                  strokeWidth="0.8"
                />
                <circle cx="471" cy="162" r="1.2" fill="#D4AF37" />
              </g>

              <g className="ox-vesper-numen-head">
                <path
                  d="M472 265 C495 258 522 260 545 278 C562 292 582 305 604 318 C614 326 610 340 598 346 C582 353 562 356 545 350 C530 345 520 332 512 316 C496 296 480 282 472 265 Z"
                  fill="url(#ox-vesper-numen-gold-bull)"
                  stroke="#8A6508"
                  strokeWidth="2"
                />

                <path
                  d="M485 280 C468 288 445 312 448 330 C456 333 472 320 488 302 Z"
                  fill="url(#ox-vesper-numen-gold-bull)"
                  stroke="#8A6508"
                  strokeWidth="1.5"
                />
                <path
                  d="M480 288 C468 296 455 315 456 324 C462 322 472 310 480 298 Z"
                  fill="url(#ox-vesper-numen-vermillion-accent)"
                  opacity="0.85"
                />

                <path
                  d="M536 290 C546 284 556 288 560 294 C556 300 544 302 536 294 Z"
                  fill="#FFF3DC"
                  stroke="#8A6508"
                  strokeWidth="1"
                />
                <ellipse
                  cx="548"
                  cy="292"
                  rx="4"
                  ry="4"
                  fill="#1E1E1E"
                  stroke="#D4AF37"
                  strokeWidth="1"
                />
                <circle cx="549" cy="291" r="1.2" fill="#FFFFFF" />
                <path
                  d="M534 286 C544 280 558 282 562 290"
                  fill="none"
                  stroke="#8A6508"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />

                <path
                  d="M592 328 C596 328 600 332 598 336 C596 340 590 340 588 336 C587 332 589 328 592 328 Z"
                  fill="#1E1E1E"
                />
                <path
                  d="M578 342 C590 342 602 338 606 333"
                  fill="none"
                  stroke="#8A6508"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  d="M572 348 C585 350 595 345 600 340"
                  fill="none"
                  stroke="#8A6508"
                  strokeWidth="1"
                  opacity="0.7"
                />

                <path
                  d="M520 266 C515 273 515 281 520 288 C517 283 517 271 520 266 Z"
                  fill="#D4AF37"
                  stroke="#8A6508"
                  strokeWidth="0.8"
                />
                <circle
                  cx="524"
                  cy="277"
                  r="3.2"
                  fill="#5C1A1A"
                  stroke="#D4AF37"
                  strokeWidth="1"
                />
                <circle cx="524" cy="277" r="1" fill="#FFF3DC" />
              </g>

              <g className="ox-vesper-numen-saddle">
                <path
                  d="M312 365 C345 356 385 356 425 365 L420 445 C385 460 348 460 305 446 Z"
                  fill="#5C1A1A"
                  stroke="#D4AF37"
                  strokeWidth="2"
                />
                <path
                  d="M316 372 C346 364 382 364 418 372 L414 438 C382 452 348 452 310 439 Z"
                  fill="none"
                  stroke="#D4AF37"
                  strokeWidth="1.2"
                  strokeDasharray="4 2"
                />
                <circle
                  cx="365"
                  cy="406"
                  r="18"
                  fill="#1E1E1E"
                  stroke="#D4AF37"
                  strokeWidth="1.5"
                />
                <circle cx="365" cy="406" r="6" fill="#D4AF37" />

                {LOTUS_PETALS.map((petal, idx) => (
                  <path
                    key={idx}
                    d={`M${petal.x} ${petal.y} l3 5 l-3 5 l-3 -5 Z`}
                    fill="#E8D5B0"
                    transform={`rotate(${petal.rot} ${petal.x} ${petal.y})`}
                  />
                ))}

                <path
                  d="M305 446 Q315 452 325 448 Q335 454 345 450 Q355 456 365 452 Q375 458 385 453 Q395 459 405 454 Q413 458 420 445"
                  fill="none"
                  stroke="#D4AF37"
                  strokeWidth="2"
                />
              </g>

              <g className="ox-vesper-numen-garlands ox-vesper-numen-shimmer">
                <path
                  d="M475 318 C490 326 508 340 522 362"
                  fill="none"
                  stroke="#8A6508"
                  strokeWidth="2"
                />
                {GARLAND_1.map(([x, y], idx) => (
                  <g key={`g1-${idx}`}>
                    <circle
                      cx={x}
                      cy={y}
                      r="4.5"
                      fill="#D4AF37"
                      stroke="#8A6508"
                      strokeWidth="1"
                    />
                    <circle cx={x} cy={y} r="2" fill="#FFF4DE" />
                  </g>
                ))}

                <path
                  d="M460 348 C480 366 505 388 518 414"
                  fill="none"
                  stroke="#8A6508"
                  strokeWidth="2"
                />
                {GARLAND_2.map(([x, y], idx) => (
                  <g key={`g2-${idx}`}>
                    <circle
                      cx={x}
                      cy={y}
                      r="5"
                      fill="#E8D5B0"
                      stroke="#8A6508"
                      strokeWidth="1"
                    />
                    <circle cx={x} cy={y} r="2.2" fill="#D4AF37" />
                  </g>
                ))}

                <path
                  d="M450 380 C472 406 492 436 508 472"
                  fill="none"
                  stroke="#8A6508"
                  strokeWidth="2.5"
                />
                {GARLAND_3.map(([x, y], idx) => (
                  <g key={`g3-${idx}`}>
                    <circle
                      cx={x}
                      cy={y}
                      r="5.5"
                      fill="#D4AF37"
                      stroke="#8A6508"
                      strokeWidth="1.2"
                    />
                    <circle cx={x} cy={y} r="2.5" fill="#5C1A1A" />
                  </g>
                ))}

                <g className="ox-vesper-numen-bell">
                  <line
                    x1="486"
                    y1="392"
                    x2="486"
                    y2="422"
                    stroke="#D4AF37"
                    strokeWidth="3"
                    strokeDasharray="2 3"
                  />
                  <path
                    d="M474 424 C474 412 498 412 498 424 L504 446 C504 450 468 450 468 446 Z"
                    fill="url(#ox-vesper-numen-gold-bull)"
                    stroke="#8A6508"
                    strokeWidth="1.5"
                  />
                  <rect
                    x="465"
                    y="446"
                    width="42"
                    height="4"
                    rx="1.5"
                    fill="#E8D5B0"
                    stroke="#8A6508"
                    strokeWidth="1"
                  />
                  <circle
                    cx="486"
                    cy="453"
                    r="4"
                    fill="#D4AF37"
                    stroke="#8A6508"
                    strokeWidth="1"
                  />
                </g>
              </g>
            </motion.g>

            <g className="ox-vesper-numen-diyas" aria-hidden="true">
              <g className="ox-vesper-numen-diya-left">
                <path
                  d="M116 535 L124 535 L122 522 L118 522 Z"
                  fill="#B8860B"
                  stroke="#8A6508"
                  strokeWidth="1"
                />
                <path
                  d="M108 522 C108 514 132 514 132 522 Z"
                  fill="#D4AF37"
                  stroke="#8A6508"
                  strokeWidth="1"
                />
                <ellipse
                  cx="120"
                  cy="522"
                  rx="12"
                  ry="2"
                  fill="#5C1A1A"
                />
                <motion.g
                  className="ox-vesper-numen-flame-left"
                  animate={{
                    scaleY: [1, 1.15, 0.94, 1.1, 0.98, 1],
                    scaleX: [1, 0.92, 1.08, 0.95, 1.04, 1],
                    opacity: [0.9, 1, 0.85, 0.98, 0.88, 0.9],
                  }}
                  transition={{
                    duration: 1.8,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  style={{ transformOrigin: '120px 520px' }}
                >
                  <path
                    d="M120 490 C124 502 129 508 129 515 C129 520 125 523 120 523 C115 523 111 520 111 515 C111 508 116 502 120 490 Z"
                    fill="url(#ox-vesper-numen-flame-outer)"
                  />
                  <path
                    d="M120 498 C122 506 125 510 125 516 C125 519 122 521 120 521 C118 521 115 519 115 516 C115 510 118 506 120 498 Z"
                    fill="url(#ox-vesper-numen-flame-inner)"
                  />
                  <circle cx="120" cy="516" r="2.2" fill="#FFFBE6" />
                </motion.g>
              </g>

              <g className="ox-vesper-numen-diya-right">
                <path
                  d="M676 535 L684 535 L682 522 L678 522 Z"
                  fill="#B8860B"
                  stroke="#8A6508"
                  strokeWidth="1"
                />
                <path
                  d="M668 522 C668 514 692 514 692 522 Z"
                  fill="#D4AF37"
                  stroke="#8A6508"
                  strokeWidth="1"
                />
                <ellipse
                  cx="680"
                  cy="522"
                  rx="12"
                  ry="2"
                  fill="#5C1A1A"
                />
                <motion.g
                  className="ox-vesper-numen-flame-right"
                  animate={{
                    scaleY: [1, 0.94, 1.16, 0.92, 1.08, 1],
                    scaleX: [1, 1.06, 0.92, 1.07, 0.95, 1],
                    opacity: [0.88, 0.98, 0.85, 1, 0.9, 0.88],
                  }}
                  transition={{
                    duration: 2.2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: 0.25,
                  }}
                  style={{ transformOrigin: '680px 520px' }}
                >
                  <path
                    d="M680 490 C684 502 689 508 689 515 C689 520 685 523 680 523 C675 523 671 520 671 515 C671 508 676 502 680 490 Z"
                    fill="url(#ox-vesper-numen-flame-outer)"
                  />
                  <path
                    d="M680 498 C682 506 685 510 685 516 C685 519 682 521 680 521 C678 521 675 519 675 516 C675 510 678 506 680 498 Z"
                    fill="url(#ox-vesper-numen-flame-inner)"
                  />
                  <circle cx="680" cy="516" r="2.2" fill="#FFFBE6" />
                </motion.g>
              </g>
            </g>
          </svg>
        </section>

        <section className="ox-vesper-numen-content">
          <div className="ox-vesper-numen-divider" aria-hidden="true">
            <span className="ox-vesper-numen-divider-line" />
            <span className="ox-vesper-numen-divider-symbol">ॐ · 卐 · ॐ</span>
            <span className="ox-vesper-numen-divider-line" />
          </div>

          <motion.div
            className="ox-vesper-numen-prose"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="ox-vesper-numen-lead">
              Shiva&apos;s divine bull, the guardian and gatekeeper of Kailasa. In every Shiva temple across India, a sculpted Nandi sits facing the sanctum, eternally watchful. The word &apos;Nandi&apos; means &apos;the joyful one,&apos; and devotees whisper their prayers into his ear, believing he carries them to Shiva.
            </p>
            <p className="ox-vesper-numen-tradition">
              Carved from single blocks of granite, temple Nandi sculptures range from intimate palm-sized icons to the twelve-foot monolith at Chamundi Hill.
            </p>
          </motion.div>

          <motion.div
            className="ox-vesper-numen-facets"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            {FACETS.map((facet, idx) => (
              <div key={idx} className="ox-vesper-numen-facet-card">
                <span className="ox-vesper-numen-facet-icon" aria-hidden="true">
                  {facet.icon}
                </span>
                <h2 className="ox-vesper-numen-facet-title">{facet.title}</h2>
                <p className="ox-vesper-numen-facet-desc">{facet.desc}</p>
              </div>
            ))}
          </motion.div>
        </section>

        <footer className="ox-vesper-numen-plaque-wrap">
          <svg
            className="ox-vesper-numen-plaque-svg"
            viewBox="0 0 380 48"
            role="img"
            aria-label="Set XVI Designed by Claude Opus"
            focusable="false"
          >
            <defs>
              <linearGradient
                id="ox-vesper-numen-plaque-grad"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#FFF4DE" />
                <stop offset="30%" stopColor="#D4AF37" />
                <stop offset="75%" stopColor="#B8860B" />
                <stop offset="100%" stopColor="#7A5605" />
              </linearGradient>
            </defs>
            <rect
              x="3"
              y="3"
              width="374"
              height="42"
              rx="4"
              fill="url(#ox-vesper-numen-plaque-grad)"
              stroke="#8A6508"
              strokeWidth="1.5"
            />
            <rect
              x="7"
              y="7"
              width="366"
              height="34"
              rx="3"
              fill="none"
              stroke="#1E1E1E"
              strokeWidth="1"
              strokeOpacity="0.5"
              strokeDasharray="4 2"
            />
            <circle cx="12" cy="12" r="1.6" fill="#1E1E1E" opacity="0.75" />
            <circle cx="368" cy="12" r="1.6" fill="#1E1E1E" opacity="0.75" />
            <circle cx="12" cy="36" r="1.6" fill="#1E1E1E" opacity="0.75" />
            <circle cx="368" cy="36" r="1.6" fill="#1E1E1E" opacity="0.75" />
            <text
              x="190"
              y="28.5"
              textAnchor="middle"
              fill="#1E1E1E"
              fontFamily="'Cinzel', serif"
              fontSize="11"
              fontWeight="700"
              letterSpacing="2.2"
            >
              SET XVI · DESIGNED BY CLAUDE OPUS
            </text>
          </svg>
        </footer>
      </div>
    </main>
  )
}
