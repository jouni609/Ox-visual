import { motion } from 'framer-motion'
import './frog.css'

const BODY =
  'M150 508 C158 486 180 462 214 434 C250 404 292 372 330 344 ' +
  'C346 332 358 324 368 320 C396 300 428 278 458 264 ' +
  'C474 256 490 252 506 252 C574 250 646 252 714 258 ' +
  'C776 264 838 276 878 296 C908 312 926 338 932 372 ' +
  'C938 408 934 446 920 478 C910 500 894 516 874 526 ' +
  'C800 542 700 550 610 548 C556 546 510 540 478 530 ' +
  'C440 548 370 556 296 552 C232 548 184 536 158 522 ' +
  'C150 518 148 514 150 508 Z'

const DEWLAP =
  'M470 528 C430 546 370 556 310 554 C250 552 200 542 170 526 C186 566 240 588 310 590 C380 592 440 574 476 548 Z'

const NEAR_FORE =
  'M500 500 C536 494 574 502 594 520 C588 548 578 574 576 596 C575 610 578 624 580 636 L548 636 C546 622 546 606 550 590 C556 564 560 538 556 518 C540 512 518 506 500 500 Z'

const FAR_FORE =
  'M610 498 C644 494 678 504 694 522 C688 550 680 576 678 598 C677 612 680 624 682 636 L650 636 C648 622 648 606 652 590 C658 564 662 540 658 520 C642 514 624 506 610 498 Z'

const NEAR_HIND =
  'M820 500 C858 508 886 530 894 564 C900 594 890 620 876 644 C870 656 868 664 870 674 L832 674 C832 660 838 644 850 626 C864 600 868 574 856 550 C846 532 826 522 820 500 Z'

const FAR_HIND =
  'M720 512 C756 522 780 546 786 578 C790 606 780 630 766 650 C760 662 758 668 760 674 L722 674 C722 662 728 648 740 632 C754 608 758 584 746 562 C736 544 722 534 720 512 Z'

const HORN_A =
  'M360 328 C384 276 430 234 488 210 C470 254 442 300 408 342 C388 364 364 354 360 328 Z'

const HORN_B =
  'M375 340 C404 308 444 286 490 276 C470 310 442 344 410 370 C392 384 376 366 375 340 Z'

const EAR =
  'M382 344 C420 348 458 364 484 390 C448 398 410 388 380 366 Z'

const TAIL =
  'M930 380 C944 418 948 464 940 506 C934 538 922 566 912 586 C924 570 934 544 940 510 C948 466 944 420 932 386 Z'

export default function Frog() {
  return (
    <div className="th-ox-tale-frog ox-tale-f ox-tale-page">
      <div className="f-grain" aria-hidden="true" />

      <header className="f-head">
        <motion.p
          className="f-kicker"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Fable · Aesop, in two inks
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.2, type: 'spring', stiffness: 80, damping: 14 }}
        >
          The Frog
          <br />
          and the Ox
        </motion.h1>
      </header>

      <motion.figure
        className="f-art"
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.3 }}
      >
        <svg viewBox="0 0 1000 720" className="f-svg" aria-hidden="true">
          <rect x="0" y="0" width="1000" height="720" fill="#FBF6EE" />
          <rect x="0" y="548" width="1000" height="172" fill="#00A8C8" opacity="0.2" />
          <path
            d="M0 548 Q125 536 250 548 T500 548 T750 548 T1000 548 L1000 720 L0 720 Z"
            fill="#00A8C8"
            opacity="0.38"
          />
          <path
            d="M0 584 Q125 572 250 584 T500 584 T750 584 T1000 584 L1000 720 L0 720 Z"
            fill="#00A8C8"
            opacity="0.55"
          />
          <g className="f-ox-svg">
            <g className="f-layer f-layer-cyan">
              <path d={BODY} />
              <path d={DEWLAP} />
              <path d={FAR_FORE} />
              <path d={FAR_HIND} />
              <path d={NEAR_FORE} />
              <path d={NEAR_HIND} />
              <path d={TAIL} />
              <ellipse cx="916" cy="600" rx="13" ry="17" />
              <path d={HORN_A} />
              <path d={HORN_B} />
              <path d={EAR} />
            </g>
            <g className="f-layer f-layer-coral">
              <path d={BODY} />
              <path d={DEWLAP} />
              <path d={FAR_FORE} />
              <path d={FAR_HIND} />
              <path d={NEAR_FORE} />
              <path d={NEAR_HIND} />
              <path d={TAIL} />
              <ellipse cx="916" cy="600" rx="13" ry="17" />
              <path d={HORN_A} />
              <path d={HORN_B} />
              <path d={EAR} />
            </g>
            <g className="f-layer f-layer-ink" fill="#17181C">
              <path d={BODY} />
              <path d={FAR_FORE} opacity="0.8" />
              <path d={FAR_HIND} opacity="0.8" />
              <path d={NEAR_FORE} />
              <path d={NEAR_HIND} />
              <path d={TAIL} />
              <ellipse cx="916" cy="600" rx="13" ry="17" />
              <path d={DEWLAP} />
              <path d={EAR} />
              <path d={HORN_A} />
              <path d={HORN_B} />
              <g fill="#FBF6EE">
                <ellipse cx="392" cy="352" rx="9" ry="10" />
                <ellipse cx="170" cy="500" rx="8" ry="10" />
              </g>
              <g fill="#17181C">
                <ellipse cx="170" cy="500" rx="4.5" ry="5.5" />
              </g>
              <path d="M160 522 C176 532 198 536 220 534" stroke="#17181C" strokeWidth="5" fill="none" strokeLinecap="round" />
              <path d="M548 626 L582 626 L586 640 L546 640 Z" fill="#00A8C8" opacity="0.75" />
              <path d="M830 664 L872 664 L876 678 L828 678 Z" fill="#FF5B5E" opacity="0.85" />
              <path d="M512 540 C548 566 578 600 592 640" stroke="#FBF6EE" strokeWidth="5" fill="none" opacity="0.35" />
              <path d="M420 380 C450 420 470 470 476 526" stroke="#FBF6EE" strokeWidth="5" fill="none" opacity="0.3" />
            </g>
          </g>
          <g className="f-ripples" fill="none" stroke="#17181C" strokeWidth="4">
            <ellipse cx="168" cy="552" rx="64" ry="14" className="f-ring" />
            <ellipse cx="168" cy="552" rx="64" ry="14" className="f-ring" />
            <ellipse cx="168" cy="552" rx="64" ry="14" className="f-ring" />
          </g>
          <g className="f-frog">
            <path
              fill="#FF5B5E"
              d="M56 528 C56 506 74 492 96 492 C118 492 136 506 136 528 C136 546 122 560 96 560 C70 560 56 546 56 528 Z"
            />
            <circle cx="74" cy="490" r="12" fill="#FF5B5E" />
            <circle cx="114" cy="490" r="12" fill="#FF5B5E" />
            <circle cx="74" cy="488" r="5" fill="#17181C" />
            <circle cx="114" cy="488" r="5" fill="#17181C" />
            <path fill="#FF5B5E" d="M56 544 C40 548 30 560 34 572 C48 570 62 562 70 552 Z" />
            <path fill="#FF5B5E" d="M136 544 C152 548 162 560 158 572 C144 570 130 562 122 552 Z" />
            <path d="M78 526 Q96 536 114 526" stroke="#17181C" strokeWidth="4" fill="none" strokeLinecap="round" />
          </g>
          <g className="f-specks" fill="#00A8C8">
            <rect x="860" y="80" width="18" height="18" transform="rotate(18 869 89)" />
            <rect x="910" y="140" width="12" height="12" transform="rotate(-12 916 146)" />
            <rect x="820" y="160" width="10" height="10" transform="rotate(30 825 165)" />
            <rect x="940" y="60" width="14" height="14" transform="rotate(8 947 67)" />
          </g>
        </svg>
        <figcaption className="f-fig">Two animals at a pond, registered in cyan and coral</figcaption>
      </motion.figure>

      <section className="f-copy">
        <motion.p
          className="f-body"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.42 }}
        >
          A frog stood at the edge of the pond and envied the ox its bulk. She puffed, she swelled,
          she asked her own body how big a frog could get. The ox went on chewing and never noticed.
          The frog burst. Size, the fable says, is a contest you enter alone.
        </motion.p>
        <motion.dl
          className="f-data"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.55 }}
        >
          <div>
            <dt>Cast</dt>
            <dd>One ox, one frog, one pond</dd>
          </div>
          <div>
            <dt>Inks</dt>
            <dd>Cyan 021 · Coral 811</dd>
          </div>
          <div>
            <dt>Moral</dt>
            <dd>Do not race a bigger animal</dd>
          </div>
        </motion.dl>
      </section>

      <motion.aside
        className="f-stamp"
        aria-label="Signature"
        initial={{ opacity: 0, rotate: -14, scale: 1.3 }}
        animate={{ opacity: 1, rotate: -7, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.75, type: 'spring', stiffness: 200, damping: 12 }}
      >
        <span className="f-stamp-text">SET 04 · DESIGNED BY MIMO</span>
        <span className="f-stamp-sub">2-INK EDITION</span>
      </motion.aside>
    </div>
  )
}
