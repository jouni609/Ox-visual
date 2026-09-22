import { motion } from 'framer-motion'
import './cowherd.css'

const STARS = [
  [4, 8, 1.4], [9, 22, 1], [14, 5, 1.8], [18, 34, 0.9], [23, 12, 1.3],
  [27, 41, 1.1], [31, 7, 1.5], [36, 26, 0.8], [41, 15, 1.2], [45, 38, 1.6],
  [50, 9, 1], [55, 30, 1.3], [60, 4, 1.7], [64, 21, 0.9], [69, 36, 1.2],
  [73, 11, 1.4], [78, 28, 1], [83, 6, 1.9], [87, 43, 1.1], [92, 18, 1.3],
  [96, 33, 0.8], [7, 47, 1.2], [21, 49, 0.9], [38, 46, 1.4], [57, 48, 1],
  [76, 47, 1.3], [94, 49, 1.1], [12, 15, 0.7], [47, 24, 0.7], [66, 42, 0.8],
  [29, 18, 0.7], [81, 35, 0.9], [3, 31, 1], [99, 12, 1.2],
]

const WAY = [
  [8, 58, 1.2], [14, 54, 1.6], [19, 51, 1], [24, 47, 1.8], [28, 44, 1.1],
  [33, 41, 1.5], [38, 38, 1.2], [43, 36, 1.7], [48, 33, 1], [53, 31, 1.4],
  [58, 29, 1.2], [63, 27, 1.6], [68, 25, 1], [73, 23, 1.5], [78, 21, 1.3],
  [83, 19, 1.7], [88, 17, 1.1], [11, 60, 0.9], [16, 56, 1.1], [22, 50, 1.3],
  [27, 46, 0.9], [35, 43, 1.4], [41, 39, 0.8], [46, 35, 1.2], [51, 33, 1],
  [56, 31, 1.5], [61, 28, 0.9], [66, 26, 1.3], [71, 24, 1], [76, 22, 1.4],
  [81, 20, 0.9], [86, 18, 1.2],
]

export default function Cowherd() {
  return (
    <div className="th-ox-tale-cowherd ox-tale-c ox-tale-page">
      <div className="c-sky" aria-hidden="true">
        <svg className="c-sky-svg" viewBox="0 0 100 60" preserveAspectRatio="xMidYMid slice">
          <g className="c-twinkle">
            {STARS.map(([x, y, r], i) => (
              <circle key={`s${i}`} cx={x} cy={y} r={r * 0.22} fill="#E9D8A6" opacity={0.35 + (i % 5) * 0.12} />
            ))}
          </g>
          <g className="c-way">
            {WAY.map(([x, y, r], i) => (
              <circle key={`w${i}`} cx={x} cy={y} r={r * 0.3} fill="#C89B3C" opacity={0.5 + (i % 4) * 0.12} />
            ))}
          </g>
        </svg>
      </div>

      <header className="c-head">
        <motion.p
          className="c-kicker"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          Folktale · Han China · <span lang="zh">牛郎</span>
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.22 }}
        >
          The Cowherd’s Ox
        </motion.h1>
        <motion.p
          className="c-zh"
          lang="zh"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          牛郎的牛
        </motion.p>
        <motion.p
          className="c-body"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.38 }}
        >
          An ox told his cowherd master to take the heavenly weaver’s robe while she bathed, and the
          two married under his roof. When the Queen of Heaven dragged a river of stars between
          them, the ox gave his hide so the cowherd could fly across. Old sky books keep him at
          work: the asterism <span lang="zh">牵牛</span>, the led ox, still stands on the far bank
          beside Altair.
        </motion.p>
        <motion.dl
          className="c-data"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.52 }}
        >
          <div>
            <dt>Star</dt>
            <dd>Altair · α Aquilae · 16.7 ly</dd>
          </div>
          <div>
            <dt>Night</dt>
            <dd>Seventh day, seventh moon</dd>
          </div>
          <div>
            <dt>Mansion</dt>
            <dd><span lang="zh">牵牛</span> — the led ox</dd>
          </div>
        </motion.dl>
      </header>

      <motion.figure
        className="c-ox"
        initial={{ opacity: 0, x: 70 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
      >
        <svg viewBox="0 0 1000 600" aria-hidden="true" className="c-ox-svg">
          <ellipse className="c-ox-shadow" cx="500" cy="552" rx="360" ry="14" />
          <g className="c-ox-breathe">
            <g fill="#B9A06E" className="c-leg-far">
              <path d="M530 402 C560 394 596 402 614 418 C608 448 598 478 596 504 C595 520 598 534 600 546 L574 546 C572 532 572 516 576 500 C582 474 586 450 582 426 C562 418 544 410 530 402 Z" />
              <path d="M380 376 C420 394 436 428 428 466 C422 498 434 522 442 546 L412 546 C406 522 396 502 402 470 C410 436 400 404 380 376 Z" />
            </g>
            <g fill="#C89B3C" opacity="0.55" className="c-tail">
              <path d="M302 278 C288 310 282 350 284 390 C276 404 272 422 276 440 C288 428 294 410 296 392 C298 356 304 318 316 290 Z" />
              <ellipse cx="278" cy="448" rx="11" ry="16" />
            </g>
            <path
              className="c-body"
              fill="#E9D8A6"
              d="M920 292
                 C912 268 896 248 872 236
                 C846 224 818 220 794 232
                 C782 238 774 242 766 244
                 C728 250 676 244 628 250
                 C560 256 496 260 434 256
                 C396 254 358 248 330 254
                 C304 260 288 280 284 308
                 C281 336 286 368 298 394
                 C310 420 334 434 362 436
                 C430 444 530 446 610 438
                 C650 434 676 424 690 410
                 C704 430 734 448 772 454
                 C814 460 850 446 874 418
                 C894 396 910 366 918 338
                 C924 320 924 304 920 292 Z"
            />
            <g fill="#E9D8A6">
              <path d="M600 398 C636 390 676 398 696 416 C690 446 680 476 678 502 C677 518 680 534 682 546 L656 546 C654 532 654 516 658 500 C664 474 668 448 664 424 C642 416 618 408 600 398 Z" />
              <path d="M330 372 C372 388 392 420 386 458 C380 492 364 516 350 532 C344 540 342 546 344 548 L314 548 C314 538 320 526 330 512 C348 486 358 458 352 430 C346 402 334 384 330 372 Z" />
            </g>
            <g fill="#F4E9C8">
              <path d="M776 248 C734 232 700 202 686 164 C728 176 770 208 798 248 C794 262 782 262 776 248 Z" />
              <path d="M798 244 C826 200 868 172 918 162 C896 204 866 238 830 260 C814 268 800 258 798 244 Z" />
            </g>
            <path fill="#D8C48E" d="M752 258 C720 252 692 258 672 276 C700 294 736 290 764 272 Z" />
            <g fill="#1A2344">
              <ellipse cx="802" cy="274" rx="8" ry="9" />
              <ellipse cx="902" cy="318" rx="6" ry="5" />
              <path d="M912 342 C900 348 886 350 874 348" stroke="#1A2344" strokeWidth="4" fill="none" strokeLinecap="round" />
              <path d="M654 536 L684 536 L688 550 L652 550 Z" opacity="0.6" />
              <path d="M572 536 L602 536 L606 550 L570 550 Z" opacity="0.6" />
              <path d="M312 538 L346 538 L350 552 L310 552 Z" opacity="0.6" />
              <path d="M410 536 L444 536 L448 550 L408 550 Z" opacity="0.6" />
            </g>
            <path
              d="M618 420 C640 448 652 484 650 520"
              stroke="#C8B07E"
              strokeWidth="4"
              fill="none"
              opacity="0.45"
            />
            <path
              d="M868 300 C850 330 846 368 858 404"
              stroke="#C8B07E"
              strokeWidth="4"
              fill="none"
              opacity="0.45"
            />
          </g>
          <g className="c-halper" stroke="#C89B3C" strokeWidth="3" fill="none" opacity="0.85">
            <path d="M930 344 C952 362 966 388 972 418" />
          </g>
        </svg>
        <figcaption className="c-fig">牵牛 — the ox who opened the river</figcaption>
      </motion.figure>

      <motion.aside
        className="c-mark"
        aria-label="Signature"
        initial={{ opacity: 0, y: -30, rotate: -6 }}
        animate={{ opacity: 1, y: 0, rotate: 0 }}
        transition={{ duration: 0.9, delay: 0.7, type: 'spring', stiffness: 90, damping: 12 }}
      >
        <span className="c-mark-seal" aria-hidden="true" lang="zh">牛</span>
        <span className="c-mark-text">SET 01 · DESIGNED BY MIMO</span>
      </motion.aside>

      <div className="c-ground" aria-hidden="true" />
    </div>
  )
}
