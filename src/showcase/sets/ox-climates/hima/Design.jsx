import { motion } from 'framer-motion'
import './design.css'

const FLAKES = Array.from({ length: 34 }, (_, i) => {
  const seed = (i * 137.508) % 100
  return {
    cx: 40 + ((seed * 2.11) % 1120),
    r: 1.6 + ((i * 7) % 10) / 6,
    dur: 7 + ((i * 13) % 40) / 5,
    delay: -(((i * 17) % 120) / 10),
    drift: 10 + ((i * 11) % 16),
    o: 0.3 + ((i * 29) % 50) / 100,
  }
})

const STARS = [
  [120, 90], [260, 150], [420, 70], [560, 130], [700, 60], [980, 110],
  [1080, 200], [60, 220], [340, 210], [780, 170], [920, 60], [180, 300],
]

export default function Hima() {
  return (
    <div className="th-hima ox-climates-stage">
      <div className="ox-climates-sky" aria-hidden="true" />

      <header className="ox-climates-head">
        <p className="ox-climates-kicker">
          <span>SET 01 · NIGHT SNOWFALL · <span lang="sa">हिम</span></span>
        </p>
        <h1 className="ox-climates-h1">HIMA</h1>
        <p className="ox-climates-sub">The yak walks out of the storm the way a mountain walks — slowly, and last.</p>
      </header>

      <aside className="ox-climates-data" aria-label="Weather data">
        <div><dt>TEMP</dt><dd>−24°C</dd></div>
        <div><dt>ALTITUDE</dt><dd>5,100 M</dd></div>
        <div><dt>WIND</dt><dd>NW 40 KM/H</dd></div>
        <div><dt>SNOWFALL</dt><dd>12 CM/H</dd></div>
      </aside>

      <figure className="ox-climates-hero">
        <svg viewBox="0 0 1200 800" role="img" aria-label="A yak walking through falling snow under a full moon">
          <defs>
            <radialGradient id="ox-climates-moon" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#EAF6FB" stopOpacity="0.9" />
              <stop offset="55%" stopColor="#EAF6FB" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#EAF6FB" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="ox-climates-snowbed" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#EAF6FB" />
              <stop offset="100%" stopColor="#C4DCEA" />
            </linearGradient>
          </defs>

          <circle cx="890" cy="185" r="150" fill="url(#ox-climates-moon)" />
          <circle cx="890" cy="185" r="92" fill="#EAF6FB" />
          <circle cx="862" cy="160" r="14" fill="#D5E7F0" opacity="0.7" />
          <circle cx="915" cy="205" r="9" fill="#D5E7F0" opacity="0.6" />

          {STARS.map(([x, y], i) => (
            <circle key={i} cx={x} cy={y} r={i % 3 === 0 ? 2.4 : 1.5} fill="#EAF6FB" opacity={0.35 + (i % 4) * 0.12} />
          ))}

          <path d="M0 470 L150 380 L300 450 L470 350 L640 440 L820 370 L1000 450 L1200 400 L1200 800 L0 800 Z" fill="#152A40" opacity="0.85" />
          <path d="M0 540 L220 470 L430 530 L660 460 L900 540 L1200 490 L1200 800 L0 800 Z" fill="#0F2133" />

          <path d="M0 622 C 200 600 420 630 640 616 C 860 602 1020 628 1200 612 L1200 800 L0 800 Z" fill="url(#ox-climates-snowbed)" />
          <path d="M0 660 C 260 644 520 668 780 652 C 960 642 1100 660 1200 652 L1200 800 L0 800 Z" fill="#EFF7FB" opacity="0.85" />

          <ellipse cx="580" cy="672" rx="310" ry="24" fill="#0A141F" opacity="0.4" />

          <motion.g
            animate={{ y: [0, -4, 0] }}
            transition={{ duration: 3.4, repeat: Infinity, ease: 'easeInOut' }}
            style={{ transformBox: 'fill-box' }}
          >
            <path d="M826 396 C 846 432 858 486 850 548 C 846 572 838 588 826 598 C 838 566 842 520 834 478 C 828 448 820 420 816 400 Z" fill="#16263A" />
            <path d="M838 560 L 852 548 L 858 580 L 846 596 L 834 588 Z" fill="#0F1C2B" />

            <path d="M452 508 L 442 638 Q 440 656 456 660 L 494 660 Q 508 656 507 640 L 501 508 Z" fill="#14222F" />
            <path d="M742 502 C 752 556 768 588 760 638 L 756 660 L 796 660 L 801 636 C 808 578 796 542 784 502 Z" fill="#14222F" />

            <path d="M420 400 C 390 355 400 308 462 299 C 562 284 682 290 762 316 C 812 331 836 362 839 402 C 843 448 826 488 795 506 C 700 531 560 536 468 520 C 420 512 395 480 398 445 C 400 425 408 410 420 400 Z" fill="#1C2E44" />
            <path d="M425 396 C 396 354 406 312 464 303 C 560 289 676 294 754 318" fill="none" stroke="#3E5A78" strokeWidth="6" strokeLinecap="round" opacity="0.85" />

            <path d="M448 494 C 442 544 438 590 440 636 L 438 662 Q 438 670 448 670 L 488 670 Q 498 670 497 661 L 494 632 C 498 584 502 538 498 494 Z" fill="#1C2E44" />
            <path d="M444 662 L 492 662 L 492 672 Q 468 678 444 672 Z" fill="#0A141F" />
            <path d="M466 662 L 468 671" stroke="#1C2E44" strokeWidth="2.5" />
            <path d="M718 490 C 734 546 752 586 748 636 L 746 662 Q 746 670 756 670 L 796 670 Q 806 670 805 661 L 802 630 C 804 580 794 538 778 490 Z" fill="#1C2E44" />
            <path d="M752 662 L 800 662 L 800 672 Q 776 678 752 672 Z" fill="#0A141F" />
            <path d="M774 662 L 776 671" stroke="#1C2E44" strokeWidth="2.5" />

            <path d="M425 498 C 540 526 690 526 795 498 L 788 542 L 752 528 L 716 554 L 676 530 L 638 556 L 596 532 L 556 556 L 514 533 L 474 554 L 438 534 L 414 550 Z" fill="#16263A" />

            <path d="M306 308 C 286 293 262 294 248 307 C 228 323 212 344 204 367 C 200 377 202 385 211 389 C 225 395 241 393 253 385 C 263 397 277 409 293 415 C 301 425 307 437 311 449 C 343 441 375 421 395 397 C 383 360 347 322 306 308 Z" fill="#1C2E44" />

            <path d="M246 299 C 238 309 231 317 223 323 L 219 311 L 209 319 L 201 307 L 193 317 L 185 307 C 197 295 218 291 246 299 Z" fill="#16263A" />

            <path d="M292 296 C 268 276 244 250 230 218 C 224 204 224 190 232 178 C 236 174 241 175 244 179 C 240 193 246 209 258 223 C 276 245 296 261 316 267 C 310 277 302 287 292 296 Z" fill="#C7D6E2" />
            <path d="M288 288 C 268 270 248 248 236 222" fill="none" stroke="#8FA6B8" strokeWidth="3" strokeLinecap="round" />

            <path d="M310 288 C 292 272 272 250 260 222 C 255 210 255 198 261 188 C 265 184 270 185 273 189 C 269 201 274 215 284 227 C 298 245 314 259 330 264 C 325 273 318 281 310 288 Z" fill="#8FA6B8" />

            <path d="M306 296 C 318 288 334 286 346 292 C 352 296 352 304 344 308 C 332 314 316 312 306 306 Z" fill="#16263A" />

            <ellipse cx="254" cy="330" rx="5.5" ry="3.6" fill="#0A141F" />
            <circle cx="256" cy="328.6" r="1.4" fill="#DFF3F8" />
            <ellipse cx="213" cy="361" rx="7" ry="4.2" fill="#0A141F" />
            <ellipse cx="216" cy="366" rx="16" ry="9" fill="#24394F" opacity="0.8" />

            <path d="M212 392 L 204 402 L 214 404 L 208 414 L 220 408 L 228 398 Z" fill="#16263A" />

            <motion.circle
              cx="196" cy="374" r="9" fill="#DFF3F8"
              animate={{ scale: [0.4, 2.1], opacity: [0.5, 0], x: [0, -30] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeOut' }}
              style={{ transformBox: 'fill-box', transformOrigin: 'center' }}
            />
            <motion.circle
              cx="196" cy="374" r="7" fill="#DFF3F8"
              animate={{ scale: [0.4, 1.8], opacity: [0.4, 0], x: [0, -22] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeOut', delay: 1.5 }}
              style={{ transformBox: 'fill-box', transformOrigin: 'center' }}
            />
          </motion.g>

          <g aria-hidden="true">
            {FLAKES.map((f, i) => (
              <motion.circle
                key={i}
                cx={f.cx} cy={0} r={f.r} fill="#EAF6FB" opacity={f.o}
                animate={{ y: [-40, 860], x: [0, f.drift, -f.drift / 2, 0] }}
                transition={{ duration: f.dur, repeat: Infinity, ease: 'linear', delay: f.delay }}
              />
            ))}
          </g>
        </svg>
      </figure>

      <div className="ox-climates-foot">
        <p className="ox-climates-copy">
          The yak is the only bovine that wears its winter on the outside. Beneath a double coat — coarse
          guard hairs over a dense undercoat — it carries the cold of the high plateau as casually as a
          pack load, and keeps walking long after the storm has stopped being weather and become the world.
        </p>
        <div className="ox-climates-sign" aria-label="Signature">
          <span>SET 1 · DESIGNED BY NORDVIK</span>
        </div>
      </div>
    </div>
  )
}
