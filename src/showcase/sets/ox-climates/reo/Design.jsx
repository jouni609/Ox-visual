import { motion } from 'framer-motion'
import './design.css'

const SPARKLES = [
  [180, 200, 7], [320, 130, 5], [470, 210, 8], [620, 120, 6], [760, 190, 7],
  [900, 120, 5], [1040, 210, 8], [120, 330, 5], [1080, 330, 6], [540, 90, 6],
  [250, 420, 5], [950, 430, 5], [60, 120, 6], [1140, 130, 6],
]

const GRASS = [
  [150, 668], [210, 676], [980, 672], [1050, 664], [880, 680], [320, 682],
]

export default function Reo() {
  return (
    <div className="th-reo ox-climates-stage">
      <header className="ox-climates-head">
        <p className="ox-climates-kicker">
          <span>SET 03 · FIRST LIGHT FROST · <span lang="gd">Reò</span></span>
        </p>
        <h1 className="ox-climates-h1">REÒ</h1>
        <p className="ox-climates-sub">The Highland cow was bred by distance — a hill that learned to be patient.</p>
      </header>

      <aside className="ox-climates-data" aria-label="Weather data">
        <div><dt>TEMP</dt><dd>−3°C</dd></div>
        <div><dt>FROST</dt><dd>8 MM</dd></div>
        <div><dt>WIND</dt><dd>STILL</dd></div>
        <div><dt>DAWN</dt><dd>07:42</dd></div>
      </aside>

      <figure className="ox-climates-hero">
        <svg viewBox="0 0 1200 800" role="img" aria-label="A Highland cow with long horns and a fringe over its eyes, standing in a frost field">
          <defs>
            <linearGradient id="ox-climates-reo-sky" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#EAF2EC" />
              <stop offset="60%" stopColor="#DCE8E2" />
              <stop offset="100%" stopColor="#C9D8CF" />
            </linearGradient>
            <radialGradient id="ox-climates-reo-glow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.75" />
              <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
            </radialGradient>
          </defs>

          <rect width="1200" height="800" fill="url(#ox-climates-reo-sky)" />
          <circle cx="600" cy="330" r="260" fill="url(#ox-climates-reo-glow)" />

          <g aria-hidden="true">
            {SPARKLES.map(([x, y, s], i) => (
              <path
                key={i}
                d={`M ${x} ${y - s} L ${x} ${y + s} M ${x - s} ${y} L ${x + s} ${y}`}
                stroke="#FFFFFF"
                strokeWidth="2.5"
                strokeLinecap="round"
                className="ox-climates-sparkle"
                style={{ animationDelay: `${(i % 7) * 0.45}s` }}
              />
            ))}
          </g>

          <path d="M 280 700 L 280 340 A 320 320 0 0 1 920 340 L 920 700 Z" fill="#E4EEE8" stroke="#1E2A26" strokeWidth="3" />
          <path d="M 302 700 L 302 350 A 298 298 0 0 1 898 350 L 898 700" fill="none" stroke="#1E2A26" strokeWidth="1.4" opacity="0.6" />

          <path d="M0 600 L1200 594 L1200 648 L0 648 Z" fill="#B9C8BE" />
          <path d="M120 600 L118 648 M300 599 L302 648 M480 598 L480 648 M660 597 L662 648 M840 596 L842 648 M1020 595 L1020 648" stroke="#A4B8AC" strokeWidth="2" />

          <path d="M0 648 C 240 632 480 652 720 640 C 900 632 1060 646 1200 640 L1200 800 L0 800 Z" fill="#C9D8CF" />
          <path d="M0 692 C 260 678 520 698 780 686 C 960 678 1100 690 1200 684 L1200 800 L0 800 Z" fill="#E4EEE8" />

          <ellipse cx="560" cy="656" rx="280" ry="18" fill="#8FA39A" opacity="0.45" />

          <g aria-hidden="true">
            {GRASS.map(([x, y], i) => (
              <path
                key={i}
                d={`M ${x} ${y} q 4 -20 9 -1 M ${x + 9} ${y + 2} q 4 -15 8 0 M ${x - 8} ${y + 3} q 3 -12 7 0`}
                fill="none"
                stroke="#5A6B5F"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
            ))}
          </g>

          <motion.g
            animate={{ y: [0, -3.5, 0] }}
            transition={{ duration: 4.2, repeat: Infinity, ease: 'easeInOut' }}
            style={{ transformBox: 'fill-box' }}
          >
            <path d="M792 330 C 806 380 812 440 806 505 C 803 522 796 534 786 542 C 796 514 798 472 790 430 C 784 392 776 358 770 336 Z" fill="#3A2E22" />
            <path d="M796 512 L 786 544 L 800 548 L 810 538 L 806 510 Z" fill="#241B12" />

            <path d="M480 495 L 474 620 Q 473 630 482 632 L 508 632 Q 516 630 515 620 L 510 495 Z" fill="#3A2E22" />
            <path d="M745 492 C 752 540 762 575 758 620 L 756 632 L 784 632 L 788 618 C 794 565 786 530 776 492 Z" fill="#3A2E22" />

            <path d="M420 330 C 520 312 660 310 758 322 C 795 328 808 360 802 400 C 796 448 772 486 726 500 C 620 522 480 522 415 505 C 382 496 368 468 370 435 C 372 392 388 352 420 330 Z" fill="#4A3B2C" />
            <path d="M424 326 C 520 310 656 308 752 320" fill="none" stroke="#8A7460" strokeWidth="5" strokeLinecap="round" opacity="0.5" />

            <path d="M415 500 C 410 545 408 590 410 622 L 408 640 Q 408 648 418 648 L 452 648 Q 462 648 461 639 L 458 618 C 462 572 466 536 460 500 Z" fill="#4A3B2C" />
            <path d="M408 612 L 420 626 L 432 614 L 444 628 L 456 616 L 458 606 L 408 606 Z" fill="#3A2E22" />
            <path d="M412 640 L 458 640 L 458 650 Q 435 656 412 650 Z" fill="#241B12" />
            <path d="M434 640 L 436 649" stroke="#4A3B2C" strokeWidth="2.5" />
            <path d="M690 502 C 698 548 710 590 706 624 L 704 640 Q 704 648 714 648 L 748 648 Q 758 648 757 639 L 754 616 C 758 570 750 534 736 502 Z" fill="#4A3B2C" />
            <path d="M702 614 L 714 628 L 726 616 L 738 630 L 750 618 L 754 608 L 702 608 Z" fill="#3A2E22" />
            <path d="M708 640 L 754 640 L 754 650 Q 731 656 708 650 Z" fill="#241B12" />
            <path d="M730 640 L 732 649" stroke="#4A3B2C" strokeWidth="2.5" />

            <path d="M688 508 C 698 520 716 522 726 512 C 732 504 728 494 716 490 C 704 486 692 494 688 508 Z" fill="#3A2E22" />

            <path d="M418 332 C 376 320 336 310 306 298 C 288 291 276 284 266 274 C 246 262 224 264 212 278 C 202 290 200 306 208 318 C 216 332 232 340 248 342 C 256 354 272 362 290 364 C 302 374 320 380 340 382 C 366 384 392 370 406 348 C 414 340 418 336 418 332 Z" fill="#4A3B2C" />

            <path d="M288 262 C 266 252 240 254 218 266 C 200 274 188 288 184 304 C 182 314 187 322 195 324 C 204 314 216 302 232 292 C 252 278 272 274 290 278 C 296 270 294 264 288 262 Z" fill="#B9A98F" />

            <path d="M270 268 C 244 256 212 256 184 270 C 162 280 148 298 144 318 C 142 330 148 340 158 342 C 168 332 182 318 200 306 C 226 288 254 282 276 286 C 282 278 278 270 270 268 Z" fill="#E3D9C8" />
            <path d="M262 276 C 240 266 214 266 192 278" fill="none" stroke="#B9A98F" strokeWidth="3" strokeLinecap="round" />

            <path d="M278 278 C 290 270 306 268 316 274 C 322 279 321 287 313 290 C 302 295 288 292 278 286 Z" fill="#3A2E22" />

            <path d="M256 270 C 242 268 228 272 220 282 L 226 292 L 216 298 L 224 308 L 214 314 C 224 320 238 318 250 308 C 257 300 259 284 256 270 Z" fill="#3A2E22" />

            <circle cx="238" cy="318" r="2.8" fill="#E3D9C8" />
            <ellipse cx="206" cy="326" rx="16" ry="10" fill="#8A7460" />
            <circle cx="199" cy="323" r="3.2" fill="#241B12" />
            <path d="M212 337 Q 222 342 232 337" fill="none" stroke="#241B12" strokeWidth="2" strokeLinecap="round" />

            <motion.circle
              cx="196" cy="338" r="8" fill="#FFFFFF"
              animate={{ scale: [0.4, 1.9], opacity: [0.55, 0], x: [0, -26] }}
              transition={{ duration: 3.2, repeat: Infinity, ease: 'easeOut' }}
              style={{ transformBox: 'fill-box', transformOrigin: 'center' }}
            />
            <motion.circle
              cx="196" cy="338" r="6" fill="#FFFFFF"
              animate={{ scale: [0.4, 1.6], opacity: [0.45, 0], x: [0, -20] }}
              transition={{ duration: 3.2, repeat: Infinity, ease: 'easeOut', delay: 1.6 }}
              style={{ transformBox: 'fill-box', transformOrigin: 'center' }}
            />
          </motion.g>
        </svg>
      </figure>

      <div className="ox-climates-foot">
        <p className="ox-climates-copy">
          The Highland cow was bred by distance. Its fringe is a thatch roof turned over the eyes, its
          horns are cranes for lifting snow, and under the double coat runs a furnace that has never
          heard of winter. At first light it stands in the frost like a hill that has decided to be patient.
        </p>
        <div className="ox-climates-sign" aria-label="Signature">
          <span>SET 3 · DESIGNED BY NORDVIK</span>
        </div>
      </div>
    </div>
  )
}
