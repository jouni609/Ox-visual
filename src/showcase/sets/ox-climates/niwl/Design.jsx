import { motion } from 'framer-motion'
import './design.css'

const TUSSOCKS = [
  [90, 668, 1.2], [240, 686, 0.9], [420, 672, 1.1], [700, 684, 1.3],
  [900, 670, 1.0], [1080, 688, 1.2], [560, 692, 0.8], [160, 700, 0.7],
]

const POSTS = [
  { x: 770, y: 430, h: 108, w: 12 },
  { x: 900, y: 408, h: 92, w: 10 },
  { x: 1020, y: 390, h: 78, w: 9 },
  { x: 1128, y: 376, h: 64, w: 8 },
]

export default function Niwl() {
  return (
    <div className="th-niwl ox-climates-stage">
      <div className="ox-climates-fog ox-climates-fog-a" aria-hidden="true" />
      <div className="ox-climates-fog ox-climates-fog-b" aria-hidden="true" />
      <div className="ox-climates-fog ox-climates-fog-c" aria-hidden="true" />
      <div className="ox-climates-fog ox-climates-fog-d" aria-hidden="true" />

      <header className="ox-climates-head">
        <p className="ox-climates-kicker">
          <span>SET 04 · MOORLAND DRIZZLE · <span lang="cy">niwl</span></span>
        </p>
        <h1 className="ox-climates-h1">NIWL</h1>
        <p className="ox-climates-sub">The ox walks the fence line at dawn, and the mist takes the edges off the world.</p>
      </header>

      <aside className="ox-climates-data" aria-label="Weather data">
        <div><dt>VISIBILITY</dt><dd>40 M</dd></div>
        <div><dt>DRIZZLE</dt><dd>LIGHT</dd></div>
        <div><dt>WIND</dt><dd>SW 12 KM/H</dd></div>
        <div><dt>DEW</dt><dd>100%</dd></div>
      </aside>

      <figure className="ox-climates-hero">
        <p className="ox-climates-note">the ox walks on, unbothered by weather</p>
        <svg viewBox="0 0 1200 800" role="img" aria-label="An English longhorn ox with enormous curling horns walking along a fence line in the mist">
          <defs>
            <linearGradient id="ox-climates-niwl-sky" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#C9CFC2" />
              <stop offset="48%" stopColor="#A8B39C" />
              <stop offset="100%" stopColor="#8B967C" />
            </linearGradient>
          </defs>

          <rect width="1200" height="800" fill="url(#ox-climates-niwl-sky)" />

          <path d="M0 470 C 200 440 420 470 640 448 C 840 428 1020 462 1200 440 L1200 800 L0 800 Z" fill="#93A086" opacity="0.7" />

          <g fill="#5A5348">
            {POSTS.map((p, i) => (
              <rect key={i} x={p.x} y={p.y - p.h} width={p.w} height={p.h} rx="3" />
            ))}
          </g>
          <path d="M770 408 L900 388 L1020 370 L1128 358" fill="none" stroke="#6E675C" strokeWidth="2.5" />
          <path d="M770 424 L900 404 L1020 386 L1128 374" fill="none" stroke="#6E675C" strokeWidth="2" opacity="0.8" />

          <path d="M0 640 L1200 640 L1200 800 L0 800 Z" fill="#7C8770" />
          <path d="M0 668 C 260 656 520 676 780 662 C 960 654 1100 668 1200 660" fill="none" stroke="#6B7760" strokeWidth="4" opacity="0.6" />
          <path d="M0 600 C 300 580 700 612 1200 588 L1200 644 C 800 664 300 640 0 656 Z" fill="#98A284" opacity="0.55" />

          <g aria-hidden="true">
            {TUSSOCKS.map(([x, y, s], i) => (
              <path
                key={i}
                d={`M ${x} ${y} q ${6 * s} ${-26 * s} ${12 * s} ${-2 * s} M ${x + 12 * s} ${y + 3} q ${5 * s} ${-20 * s} ${10 * s} ${1 * s} M ${x - 10 * s} ${y + 4} q ${4 * s} ${-16 * s} ${8 * s} 0`}
                fill="none"
                stroke="#5F6B55"
                strokeWidth="3"
                strokeLinecap="round"
              />
            ))}
          </g>

          <ellipse cx="520" cy="654" rx="290" ry="16" fill="#4A5545" opacity="0.35" />

          <motion.g
            animate={{ y: [0, -3, 0] }}
            transition={{ duration: 3.8, repeat: Infinity, ease: 'easeInOut' }}
            style={{ transformBox: 'fill-box' }}
          >
            <path d="M770 380 C 786 430 794 490 788 555 C 785 574 778 588 766 596 C 778 566 780 520 772 478 C 766 442 758 408 752 384 Z" fill="#6B5B43" />
            <path d="M776 560 L 766 596 L 780 600 L 790 590 L 786 558 Z" fill="#4A3F30" />

            <path d="M480 480 L 470 620 Q 469 632 480 634 L 508 634 Q 517 632 516 620 L 512 480 Z" fill="#5A4C3A" />
            <path d="M700 480 C 708 530 720 568 714 622 L 712 634 L 744 634 L 748 620 C 754 562 744 524 732 480 Z" fill="#5A4C3A" />

            <path d="M432 332 C 520 318 650 316 748 330 C 786 338 800 370 794 410 C 788 458 762 496 716 510 C 620 532 500 532 436 516 C 398 506 380 476 382 442 C 384 396 400 352 432 332 Z" fill="#EDE6D6" />

            <path d="M440 350 C 470 340 510 344 530 366 C 540 390 530 420 500 432 C 468 442 440 420 438 392 C 437 376 437 360 440 350 Z" fill="#6B5B43" opacity="0.95" />
            <path d="M580 340 C 640 332 700 340 726 368 C 740 394 726 430 690 442 C 640 456 590 440 576 404 C 566 376 566 350 580 340 Z" fill="#6B5B43" opacity="0.95" />
            <path d="M730 360 C 756 366 770 392 762 424 C 754 452 728 464 706 452 C 688 440 684 410 694 384 C 700 368 714 356 730 360 Z" fill="#6B5B43" opacity="0.95" />

            <path d="M430 500 C 418 540 404 580 408 622 L 406 640 Q 406 648 416 648 L 450 648 Q 460 648 459 639 L 456 618 C 462 576 468 540 462 500 Z" fill="#EDE6D6" />
            <path d="M414 560 C 424 556 438 558 446 566 C 452 576 448 592 436 598 C 424 602 412 594 410 580 C 409 572 410 564 414 560 Z" fill="#6B5B43" opacity="0.9" />
            <path d="M410 640 L 456 640 L 456 650 Q 433 656 410 650 Z" fill="#3A332A" />
            <path d="M432 640 L 434 649" stroke="#EDE6D6" strokeWidth="2.5" />
            <path d="M660 502 C 668 550 682 590 678 626 L 676 640 Q 676 648 686 648 L 720 648 Q 730 648 729 639 L 726 618 C 730 572 720 536 704 502 Z" fill="#EDE6D6" />
            <path d="M680 640 L 726 640 L 726 650 Q 703 656 680 650 Z" fill="#3A332A" />
            <path d="M702 640 L 704 649" stroke="#EDE6D6" strokeWidth="2.5" />

            <path d="M428 336 C 390 352 348 372 312 396 C 296 406 284 418 278 430 C 272 442 274 452 282 456 C 296 462 314 458 326 448 C 336 460 352 468 370 470 C 394 472 412 462 422 446 C 428 408 432 368 428 336 Z" fill="#EDE6D6" />

            <path d="M322 368 C 276 356 226 358 190 382 C 158 403 144 440 160 472 C 172 496 192 510 214 508 C 232 490 236 472 226 458 C 208 438 212 412 234 394 C 258 374 290 366 330 372 C 329 369 328 367 322 368 Z" fill="#C9BCA4" />

            <path d="M296 384 C 246 370 190 372 150 398 C 114 421 98 462 116 498 C 130 526 152 542 176 540 C 196 520 200 500 188 484 C 168 462 172 434 196 414 C 222 392 258 384 300 390 C 299 387 298 385 296 384 Z" fill="#E3D9C8" />
            <path d="M286 392 C 238 380 192 384 158 408" fill="none" stroke="#B9A98F" strokeWidth="3" strokeLinecap="round" />

            <path d="M316 396 C 330 386 350 384 362 392 C 368 398 366 408 356 410 C 342 414 326 408 316 404 Z" fill="#6B5B43" />

            <path d="M296 400 C 280 408 268 420 264 436 C 262 446 266 454 274 456 C 286 452 296 440 300 424 Z" fill="#D8CFBC" opacity="0.85" />

            <ellipse cx="302" cy="420" rx="5" ry="3.2" fill="#2E2820" />
            <circle cx="303.8" cy="418.8" r="1.3" fill="#EDE6D6" />
            <ellipse cx="272" cy="444" rx="5" ry="3" fill="#2E2820" />

            <motion.circle
              cx="262" cy="452" r="7" fill="#FFFFFF"
              animate={{ scale: [0.4, 1.8], opacity: [0.5, 0], x: [0, -24] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeOut' }}
              style={{ transformBox: 'fill-box', transformOrigin: 'center' }}
            />
            <motion.circle
              cx="262" cy="452" r="5.5" fill="#FFFFFF"
              animate={{ scale: [0.4, 1.5], opacity: [0.4, 0], x: [0, -18] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeOut', delay: 1.5 }}
              style={{ transformBox: 'fill-box', transformOrigin: 'center' }}
            />
          </motion.g>

          <motion.path
            d="M120 690 q 3 -14 6 -2 M126 689 q 3 -10 6 -1"
            fill="none" stroke="#D8CFBC" strokeWidth="3" strokeLinecap="round"
            animate={{ scaleY: [1, 1.5, 1] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
            style={{ transformBox: 'fill-box', transformOrigin: 'bottom left' }}
          />
        </svg>
      </figure>

      <div className="ox-climates-foot">
        <p className="ox-climates-copy">
          The longhorn is the ox that forgot to stop growing its horns and its patience in equal
          measure. On the moor it walks the fence line at dawn, unhurried, its curling horns writing
          slow circles in the drizzle while the mist takes the edges off the world.
        </p>
        <div className="ox-climates-sign" aria-label="Signature">
          <span className="ox-climates-sign-hole" aria-hidden="true" />
          <span>SET 4 · DESIGNED BY NORDVIK</span>
        </div>
      </div>
    </div>
  )
}
