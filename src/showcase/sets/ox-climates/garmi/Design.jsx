import { motion } from 'framer-motion'
import './design.css'

const MOTES = Array.from({ length: 9 }, (_, i) => ({
  cx: 120 + ((i * 173) % 980),
  cy: 480 + ((i * 97) % 160),
  r: 2 + ((i * 5) % 4),
  dur: 5 + ((i * 7) % 40) / 10,
  delay: -((i * 13) % 50) / 10,
  drift: 14 + ((i * 11) % 22),
}))

const WAVES = [
  { y: 556, dur: 3.4, o: 0.32 },
  { y: 588, dur: 2.7, o: 0.26 },
  { y: 618, dur: 4.1, o: 0.2 },
]

function ShimmerWave({ y, dur, o }) {
  const d = `M -140 ${y} ` + Array.from({ length: 14 }, () => 'q 30 -13 60 0 t 60 0').join(' ')
  return (
    <path
      d={d}
      fill="none"
      stroke="#F6E7C8"
      strokeWidth="5"
      strokeLinecap="round"
      opacity={o}
      className="ox-climates-shimmer"
      style={{ animationDuration: `${dur}s` }}
    />
  )
}

export default function Garmi() {
  return (
    <div className="th-garmi ox-climates-stage">
      <header className="ox-climates-head">
        <p className="ox-climates-kicker">
          <span>SET 02 · NOON DUST · <span lang="hi">गर्मी</span></span>
        </p>
        <h1 className="ox-climates-h1">GARMI</h1>
        <p className="ox-climates-sub">At noon the zebu does not fight the heat. It banks it, the way a camel banks water.</p>
      </header>

      <aside className="ox-climates-data" aria-label="Weather data">
        <div><dt>TEMP</dt><dd>41°C</dd></div>
        <div><dt>HUMIDITY</dt><dd>18%</dd></div>
        <div><dt>WIND</dt><dd>CALM</dd></div>
        <div><dt>DUST</dt><dd>STORM WATCH</dd></div>
      </aside>

      <figure className="ox-climates-hero">
        <svg viewBox="0 0 1200 800" role="img" aria-label="A zebu drinking from a wooden trough in the noon heat">
          <defs>
            <linearGradient id="ox-climates-garmi-sky" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#F0C060" />
              <stop offset="55%" stopColor="#D98A35" />
              <stop offset="100%" stopColor="#B06A28" />
            </linearGradient>
          </defs>

          <rect width="1200" height="800" fill="url(#ox-climates-garmi-sky)" />

          <motion.circle
            cx="950" cy="150" r="118" fill="none" stroke="#F6E7C8" strokeWidth="3"
            animate={{ scale: [1, 1.14, 1], opacity: [0.45, 0.12, 0.45] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
            style={{ transformBox: 'fill-box', transformOrigin: 'center' }}
          />
          <circle cx="950" cy="150" r="68" fill="#F6E7C8" />
          <circle cx="950" cy="150" r="68" fill="none" stroke="#E8B45A" strokeWidth="2" opacity="0.6" />

          <path d="M0 520 C 180 492 340 516 520 500 C 720 482 900 512 1200 492 L1200 800 L0 800 Z" fill="#9A5A20" opacity="0.75" />
          <path d="M0 580 C 220 556 460 584 700 566 C 900 552 1060 576 1200 562 L1200 800 L0 800 Z" fill="#7A4A1E" />

          <g aria-hidden="true">
            {WAVES.map((w, i) => <ShimmerWave key={i} {...w} />)}
          </g>

          <rect x="0" y="640" width="1200" height="160" fill="#6E3A16" />
          <path d="M0 668 C 240 656 480 676 760 662 C 940 654 1080 668 1200 660" fill="none" stroke="#5A2E10" strokeWidth="4" opacity="0.7" />
          <path d="M0 712 C 260 700 520 720 800 706 C 980 698 1100 710 1200 704" fill="none" stroke="#5A2E10" strokeWidth="3" opacity="0.5" />

          <ellipse cx="520" cy="656" rx="270" ry="18" fill="#3A2412" opacity="0.5" />

          <g>
            <path d="M748 372 C 762 420 770 480 764 548 C 761 566 754 578 744 586 C 754 556 756 512 748 468 C 742 432 736 400 732 376 Z" fill="#3A2412" />
            <path d="M748 556 L 738 590 L 752 594 L 762 584 L 758 556 Z" fill="#1A0F06" />

            <path d="M455 470 L 448 630 Q 447 642 458 644 L 488 644 Q 498 642 497 630 L 492 470 Z" fill="#33200E" />
            <path d="M660 470 C 668 520 680 560 674 630 L 672 644 L 706 644 L 710 628 C 716 560 706 516 696 470 Z" fill="#33200E" />

            <path d="M400 330 C 400 290 420 262 462 254 C 500 247 540 252 575 268 C 640 296 690 316 726 344 C 752 364 762 396 756 430 C 750 462 730 486 696 496 C 620 514 520 518 452 506 C 410 499 388 470 390 436 C 392 396 394 356 400 330 Z" fill="#4A2E14" />
            <path d="M404 326 C 406 288 426 262 464 255 C 502 249 540 254 574 270 C 638 298 688 318 722 344" fill="none" stroke="#F6E7C8" strokeWidth="5" strokeLinecap="round" opacity="0.45" />

            <path d="M352 384 C 344 420 344 458 354 488 C 360 502 374 504 382 494 C 390 462 388 420 376 388 Z" fill="#3A2412" />

            <path d="M415 480 C 410 530 406 580 408 628 L 406 646 Q 406 654 416 654 L 452 654 Q 462 654 461 645 L 458 626 C 462 576 466 528 462 480 Z" fill="#4A2E14" />
            <path d="M410 646 L 458 646 L 458 656 Q 434 662 410 656 Z" fill="#2A1A0B" />
            <path d="M432 646 L 434 655" stroke="#4A2E14" strokeWidth="2.5" />
            <path d="M620 486 C 630 536 644 580 640 628 L 638 646 Q 638 654 648 654 L 684 654 Q 694 654 693 645 L 690 624 C 692 572 684 528 672 486 Z" fill="#4A2E14" />
            <path d="M642 646 L 690 646 L 690 656 Q 666 662 642 656 Z" fill="#2A1A0B" />
            <path d="M664 646 L 666 655" stroke="#4A2E14" strokeWidth="2.5" />

            <path d="M640 500 C 650 512 668 514 678 504 C 684 496 680 486 668 482 C 656 478 644 486 640 500 Z" fill="#3A2412" />

            <path d="M402 336 C 356 352 316 376 286 404 C 268 420 254 438 246 456 C 240 468 240 478 248 482 C 262 488 280 484 292 474 C 300 486 316 494 334 496 C 356 498 376 490 388 476 C 398 440 404 388 402 336 Z" fill="#4A2E14" />

            <path d="M284 398 C 272 392 256 394 246 404 C 238 412 238 422 246 426 C 258 432 274 426 282 414 Z" fill="#C9B48C" />

            <path d="M270 402 C 258 380 254 354 260 332 C 263 321 271 316 278 320 C 274 338 278 360 290 380 C 296 390 302 398 308 404 C 294 408 280 408 270 402 Z" fill="#E8D9B8" />

            <motion.path
              d="M290 396 C 278 390 262 392 252 402 C 244 410 244 420 252 424 C 264 430 280 424 288 412 Z"
              fill="#3A2412"
              animate={{ rotate: [0, 0, -16, 0, 0] }}
              transition={{ duration: 5.2, repeat: Infinity, times: [0, 0.72, 0.8, 0.88, 1], ease: 'easeInOut' }}
              style={{ transformBox: 'fill-box', transformOrigin: 'top right' }}
            />

            <ellipse cx="268" cy="430" rx="5" ry="3.2" fill="#1A0F06" />
            <circle cx="269.8" cy="428.8" r="1.3" fill="#F6E7C8" />
            <ellipse cx="240" cy="462" rx="5" ry="3" fill="#1A0F06" />

            <motion.g
              animate={{ rotate: [0, 0, 9, 0, 0] }}
              transition={{ duration: 6.4, repeat: Infinity, times: [0, 0.7, 0.78, 0.86, 1], ease: 'easeInOut' }}
              style={{ transformBox: 'fill-box', transformOrigin: 'top left' }}
            >
              <path d="M748 372 C 762 420 770 480 764 548 C 761 566 754 578 744 586 C 754 556 756 512 748 468 C 742 432 736 400 732 376 Z" fill="#3A2412" />
              <path d="M748 556 L 738 590 L 752 594 L 762 584 L 758 556 Z" fill="#1A0F06" />
            </motion.g>

            <path d="M92 470 L 328 470 L 306 548 L 114 548 Z" fill="#7A4A22" />
            <path d="M100 492 L 322 492" stroke="#5A3414" strokeWidth="4" />
            <path d="M130 548 L 122 582 L 142 582 L 148 548 Z" fill="#5A3414" />
            <path d="M278 548 L 274 582 L 294 582 L 298 548 Z" fill="#5A3414" />
            <path d="M104 478 L 324 478 L 320 494 L 108 494 Z" fill="#F0C060" />

            <motion.ellipse
              cx="246" cy="482" rx="8" ry="3" fill="none" stroke="#F6E7C8" strokeWidth="2.5"
              animate={{ scale: [1, 5.5], opacity: [0.55, 0] }}
              transition={{ duration: 2.6, repeat: Infinity, ease: 'easeOut' }}
              style={{ transformBox: 'fill-box', transformOrigin: 'center' }}
            />
          </g>

          <g aria-hidden="true">
            {MOTES.map((m, i) => (
              <motion.circle
                key={i}
                cx={m.cx} cy={m.cy} r={m.r} fill="#F6E7C8" opacity="0.35"
                animate={{ y: [0, -34, 0], x: [0, m.drift, 0] }}
                transition={{ duration: m.dur, repeat: Infinity, ease: 'easeInOut', delay: m.delay }}
              />
            ))}
          </g>
        </svg>
      </figure>

      <div className="ox-climates-foot">
        <p className="ox-climates-copy">
          By noon the Deccan belongs to the sun, and the zebu belongs to the shade. Its hump is a pantry
          of fat, its dewlap a hanging sail of skin — two instruments for spending heat instead of fighting
          it. It drinks, and lets the dust settle around it like a coat.
        </p>
        <div className="ox-climates-sign" aria-label="Signature">
          <span>SET 2 · DESIGNED BY NORDVIK</span>
        </div>
      </div>
    </div>
  )
}
