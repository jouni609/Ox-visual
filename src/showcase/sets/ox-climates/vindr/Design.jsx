import { motion } from 'framer-motion'
import './design.css'

const RAIN = Array.from({ length: 26 }, (_, i) => ({
  x: (i * 47 + 13) % 1260,
  len: 46 + ((i * 13) % 52),
  dur: 0.85 + (i % 5) * 0.16,
  delay: -((i * 0.13) % 1.6),
  o: 0.18 + ((i * 7) % 20) / 100,
}))

const GRASS = [
  [80, 706], [180, 716], [300, 700], [430, 718], [560, 704],
  [700, 716], [830, 702], [960, 714], [1080, 706], [1160, 718],
]

const STREAKS = [
  { d: 'M -200 240 C 200 210 500 250 800 220 C 950 208 1080 226 1300 200', dur: 5.2, o: 0.5 },
  { d: 'M -200 330 C 250 305 550 345 850 318 C 1000 306 1120 322 1300 296', dur: 6.6, o: 0.35 },
  { d: 'M -200 160 C 220 135 520 172 820 148 C 980 136 1100 152 1300 128', dur: 4.4, o: 0.4 },
]

export default function Vindr() {
  return (
    <div className="th-vindr ox-climates-stage">
      <div className="ox-climates-flash" aria-hidden="true" />

      <header className="ox-climates-head">
        <p className="ox-climates-kicker">
          <span>SET 05 · OPEN-PLAIN STORM · <span lang="non">vindr</span></span>
        </p>
        <h1 className="ox-climates-h1">VINDR</h1>
        <p className="ox-climates-sub">On the open plain there is no lee side — only the animal, the weather, and the argument between them.</p>
      </header>

      <aside className="ox-climates-data" aria-label="Weather data">
        <div><dt>WIND</dt><dd>NW 95 KM/H</dd></div>
        <div><dt>GUSTS</dt><dd>120 KM/H</dd></div>
        <div><dt>PRESSURE</dt><dd>982 HPA</dd></div>
        <div><dt>STORM</dt><dd>CLASS 3</dd></div>
      </aside>

      <figure className="ox-climates-hero">
        <svg viewBox="0 0 1200 800" role="img" aria-label="A bull with head lowered, straining into a storm with slanting rain and lightning">
          <defs>
            <linearGradient id="ox-climates-vindr-sky" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#0A140F" />
              <stop offset="55%" stopColor="#12211A" />
              <stop offset="100%" stopColor="#0F1D15" />
            </linearGradient>
          </defs>

          <rect width="1200" height="800" fill="url(#ox-climates-vindr-sky)" />

          <g aria-hidden="true">
            {STREAKS.map((s, i) => (
              <path
                key={i}
                d={s.d}
                fill="none"
                stroke="#3E5A48"
                strokeWidth="3"
                strokeLinecap="round"
                opacity={s.o}
                className="ox-climates-streak"
                style={{ animationDuration: `${s.dur}s`, animationDelay: `${-i * 1.7}s` }}
              />
            ))}
          </g>

          <path
            d="M 985 40 L 938 185 L 978 185 L 915 335 L 1015 160 L 968 160 L 1025 40 Z"
            fill="#E8D44D"
            className="ox-climates-bolt"
          />
          <path
            d="M 320 90 L 292 180 L 316 180 L 276 275 L 340 165 L 312 165 L 348 90 Z"
            fill="#E8D44D"
            opacity="0.7"
            className="ox-climates-bolt ox-climates-bolt-late"
          />

          <path d="M0 660 L1200 660 L1200 800 L0 800 Z" fill="#0F1D15" />
          <ellipse cx="300" cy="700" rx="150" ry="14" fill="#274536" opacity="0.7" />
          <ellipse cx="880" cy="726" rx="190" ry="16" fill="#274536" opacity="0.6" />
          <ellipse cx="300" cy="700" rx="90" ry="7" fill="#E8D44D" opacity="0.12" />

          <g aria-hidden="true">
            {GRASS.map(([x, y], i) => (
              <path
                key={i}
                d={`M ${x} ${y} q ${i % 2 === 0 ? 14 : -10} ${-34} ${i % 2 === 0 ? 26 : -18} ${-46}`}
                fill="none"
                stroke="#1E3328"
                strokeWidth="5"
                strokeLinecap="round"
                className={i % 3 === 0 ? 'ox-climates-sway' : undefined}
                style={i % 3 === 0 ? { animationDelay: `${-i * 0.4}s` } : undefined}
              />
            ))}
          </g>

          <ellipse cx="540" cy="674" rx="300" ry="18" fill="#0A140F" opacity="0.55" />

          <motion.g
            animate={{ y: [0, -2.5, 0] }}
            transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
            style={{ transformBox: 'fill-box' }}
          >
            <motion.g
              animate={{ rotate: [0, 0, 7, 0, 0] }}
              transition={{ duration: 5.6, repeat: Infinity, times: [0, 0.74, 0.82, 0.9, 1], ease: 'easeInOut' }}
              style={{ transformBox: 'fill-box', transformOrigin: 'left center' }}
            >
              <path d="M 790 380 C 830 400 872 400 906 384 C 916 379 923 383 919 391 C 881 416 830 421 788 405 Z" fill="#1C3327" />
              <path d="M 906 384 C 919 377 931 379 935 387 C 929 398 915 400 905 393 Z" fill="#0A140F" />
            </motion.g>

            <path d="M 470 480 L 455 640 Q 453 654 466 656 L 500 656 Q 511 654 510 640 L 505 480 Z" fill="#1C3327" />
            <path d="M 720 480 C 728 535 742 580 736 640 L 734 656 L 772 656 L 776 638 C 782 575 772 530 758 480 Z" fill="#1C3327" />

            <path d="M 420 350 C 400 300 420 255 480 245 C 540 236 620 240 690 262 C 760 284 800 320 806 366 C 812 420 788 470 740 492 C 650 520 530 524 455 508 C 410 499 392 468 394 430 C 396 395 405 368 420 350 Z" fill="#274536" />
            <path d="M 426 344 C 408 300 426 260 480 250 C 538 241 616 245 686 266" fill="none" stroke="#6E8F76" strokeWidth="6" strokeLinecap="round" opacity="0.85" />

            <path d="M 420 490 C 408 545 392 595 396 645 L 394 662 Q 394 670 404 670 L 440 670 Q 450 670 449 661 L 446 640 C 452 588 458 538 452 490 Z" fill="#274536" />
            <path d="M 398 662 L 446 662 L 446 672 Q 422 678 398 672 Z" fill="#0A140F" />
            <path d="M 420 662 L 422 671" stroke="#1E3328" strokeWidth="2.5" />
            <path d="M 680 492 C 688 545 702 592 698 642 L 696 662 Q 696 670 706 670 L 742 670 Q 752 670 751 661 L 748 638 C 754 585 744 538 728 492 Z" fill="#274536" />
            <path d="M 700 662 L 748 662 L 748 672 Q 724 678 700 672 Z" fill="#0A140F" />
            <path d="M 722 662 L 724 671" stroke="#1E3328" strokeWidth="2.5" />

            <path d="M 424 350 C 380 368 336 392 300 418 C 284 430 274 444 270 458 C 267 470 272 480 282 484 C 296 490 314 486 326 476 C 336 488 352 496 370 498 C 394 500 412 490 422 474 C 430 430 432 388 424 350 Z" fill="#274536" />
            <path d="M 282 484 C 296 490 314 486 326 476" fill="none" stroke="#0F1D15" strokeWidth="5" strokeLinecap="round" />

            <path d="M 310 404 C 292 390 276 368 268 344 C 263 331 266 320 275 316 C 286 327 300 347 312 365 C 322 380 332 392 342 400 C 332 408 320 408 310 404 Z" fill="#B9B294" />

            <path d="M 290 414 C 266 398 246 372 238 342 C 234 328 238 316 248 312 C 260 324 276 346 290 366 C 302 382 312 394 322 402 C 312 410 300 415 290 414 Z" fill="#D8D2B8" />

            <path d="M 306 416 C 320 406 340 404 352 412 C 358 418 356 428 346 430 C 332 434 316 428 306 424 Z" fill="#1C3327" />

            <ellipse cx="296" cy="440" rx="5" ry="3.2" fill="#0A140F" />
            <circle cx="297.8" cy="438.8" r="1.4" fill="#E8D44D" />
            <ellipse cx="264" cy="470" rx="5" ry="3" fill="#0A140F" />

            <motion.circle
              cx="258" cy="480" r="8" fill="#C9CDB8"
              animate={{ scale: [0.4, 2], opacity: [0.5, 0], x: [0, -28] }}
              transition={{ duration: 2.6, repeat: Infinity, ease: 'easeOut' }}
              style={{ transformBox: 'fill-box', transformOrigin: 'center' }}
            />
            <motion.circle
              cx="258" cy="480" r="6" fill="#C9CDB8"
              animate={{ scale: [0.4, 1.7], opacity: [0.4, 0], x: [0, -20] }}
              transition={{ duration: 2.6, repeat: Infinity, ease: 'easeOut', delay: 1.3 }}
              style={{ transformBox: 'fill-box', transformOrigin: 'center' }}
            />
          </motion.g>

          <g aria-hidden="true">
            {RAIN.map((r, i) => (
              <line
                key={i}
                x1={r.x} y1={-120} x2={r.x - 18} y2={-120 + r.len}
                stroke="#9FB8A8"
                strokeWidth="2"
                opacity={r.o}
                className="ox-climates-rain"
                style={{ animationDuration: `${r.dur}s`, animationDelay: `${r.delay}s` }}
              />
            ))}
          </g>
        </svg>
      </figure>

      <div className="ox-climates-foot">
        <p className="ox-climates-copy">
          The bull does not shelter from the storm; it files itself into it. Head down, feet planted
          wide, it turns its mass into a wall the wind must walk around. On the open plain there is
          no lee side — there is only the animal, and the weather, and the argument between them.
        </p>
        <div className="ox-climates-sign" aria-label="Signature">
          <span>SET 5 · DESIGNED BY NORDVIK</span>
        </div>
      </div>
    </div>
  )
}
