import { motion } from 'framer-motion'
import './verdure.css'

export default function Verdure() {
  return (
    <div
      className="th-ox-vesper ox-vesper-verdure"
      style={{ minHeight: '100vh', position: 'relative', overflowX: 'hidden' }}
    >
      <div className="ox-vesper-verdure-container">
        <header className="ox-vesper-verdure-header">
          <motion.div
            className="ox-vesper-verdure-kicker-wrap"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <span className="ox-vesper-verdure-kicker-line" aria-hidden="true" />
            <p className="ox-vesper-verdure-kicker">BOS INDICUS</p>
            <span className="ox-vesper-verdure-kicker-line" aria-hidden="true" />
          </motion.div>

          <motion.h1
            className="ox-vesper-verdure-title"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: 'easeOut' }}
          >
            Verdure
          </motion.h1>

          <motion.p
            className="ox-vesper-verdure-subtitle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
          >
            Plate IV · The Grazing Zebu of the Indus Valley · Morning Pasture
          </motion.p>
        </header>

        <motion.div
          className="ox-vesper-verdure-stage"
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
        >
          <motion.div
            className="ox-vesper-verdure-butterfly ox-vesper-verdure-butterfly-1"
            aria-hidden="true"
            animate={{
              x: [0, 70, 150, 85, 0],
              y: [0, -40, -18, -55, 0],
              rotate: [0, 10, -6, 5, 0]
            }}
            transition={{
              duration: 13,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          >
            <svg
              viewBox="0 0 44 36"
              className="ox-vesper-verdure-butterfly-svg"
              focusable="false"
            >
              <path
                d="M 22 18 C 16 10 6 6 2 12 C -2 18 6 26 22 20 Z"
                fill="#D4A256"
                stroke="#2C3E2D"
                strokeWidth="1.2"
              />
              <path
                d="M 22 18 C 28 10 38 6 42 12 C 46 18 38 26 22 20 Z"
                fill="#D4A256"
                stroke="#2C3E2D"
                strokeWidth="1.2"
              />
              <path
                d="M 22 20 C 18 24 10 26 8 32 C 6 36 14 38 22 24 Z"
                fill="#E8BA78"
                stroke="#2C3E2D"
                strokeWidth="1"
              />
              <path
                d="M 22 20 C 26 24 34 26 36 32 C 38 36 30 38 22 24 Z"
                fill="#E8BA78"
                stroke="#2C3E2D"
                strokeWidth="1"
              />
              <ellipse cx="22" cy="19" rx="2" ry="7" fill="#2C3E2D" />
              <path
                d="M 21 12 C 18 7 14 6 12 7"
                stroke="#2C3E2D"
                strokeWidth="1"
                fill="none"
              />
              <path
                d="M 23 12 C 26 7 30 6 32 7"
                stroke="#2C3E2D"
                strokeWidth="1"
                fill="none"
              />
            </svg>
          </motion.div>

          <motion.div
            className="ox-vesper-verdure-butterfly ox-vesper-verdure-butterfly-2"
            aria-hidden="true"
            animate={{
              x: [0, -80, -155, -65, 0],
              y: [0, -45, -12, -65, 0],
              rotate: [0, -12, 8, -4, 0]
            }}
            transition={{
              duration: 16,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 1.8
            }}
          >
            <svg
              viewBox="0 0 38 32"
              className="ox-vesper-verdure-butterfly-svg"
              focusable="false"
            >
              <path
                d="M 19 16 C 14 9 5 5 2 10 C -1 15 5 22 19 18 Z"
                fill="#F7F5EE"
                stroke="#2C3E2D"
                strokeWidth="1.1"
              />
              <path
                d="M 19 16 C 24 9 33 5 36 10 C 39 15 33 22 19 18 Z"
                fill="#F7F5EE"
                stroke="#2C3E2D"
                strokeWidth="1.1"
              />
              <path
                d="M 19 18 C 15 21 8 23 7 28 C 5 31 12 33 19 21 Z"
                fill="#D4A256"
                stroke="#2C3E2D"
                strokeWidth="0.9"
              />
              <path
                d="M 19 18 C 23 21 30 23 31 28 C 33 31 26 33 19 21 Z"
                fill="#D4A256"
                stroke="#2C3E2D"
                strokeWidth="0.9"
              />
              <ellipse cx="19" cy="17" rx="1.8" ry="6" fill="#2C3E2D" />
              <path
                d="M 18 11 C 15 7 12 6 10 7"
                stroke="#2C3E2D"
                strokeWidth="0.9"
                fill="none"
              />
              <path
                d="M 20 11 C 23 7 26 6 28 7"
                stroke="#2C3E2D"
                strokeWidth="0.9"
                fill="none"
              />
            </svg>
          </motion.div>

          <div className="ox-vesper-verdure-svg-wrap">
            <svg
              viewBox="0 0 1000 540"
              className="ox-vesper-verdure-pasture-svg"
              aria-hidden="true"
              focusable="false"
            >
              <defs>
                <linearGradient
                  id="ox-vesper-verdure-grad-sky"
                  x1="0%"
                  y1="0%"
                  x2="0%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#F7F5EE" stopOpacity="0" />
                  <stop offset="100%" stopColor="#E9F0E6" stopOpacity="0.45" />
                </linearGradient>
                <linearGradient
                  id="ox-vesper-verdure-grad-ground"
                  x1="0%"
                  y1="0%"
                  x2="0%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#8FB996" stopOpacity="0.35" />
                  <stop offset="100%" stopColor="#4A7C59" stopOpacity="0.12" />
                </linearGradient>
                <linearGradient
                  id="ox-vesper-verdure-grad-zebu"
                  x1="20%"
                  y1="10%"
                  x2="80%"
                  y2="90%"
                >
                  <stop offset="0%" stopColor="#E5BA6E" />
                  <stop offset="45%" stopColor="#D4A256" />
                  <stop offset="100%" stopColor="#BE893F" />
                </linearGradient>
                <linearGradient
                  id="ox-vesper-verdure-grad-shadow-leg"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#B37D35" />
                  <stop offset="100%" stopColor="#9C6B2B" />
                </linearGradient>
              </defs>

              <rect
                x="10"
                y="10"
                width="980"
                height="520"
                rx="8"
                fill="none"
                stroke="#8FB996"
                strokeWidth="1"
                strokeOpacity="0.35"
              />
              <rect
                x="16"
                y="16"
                width="968"
                height="508"
                rx="6"
                fill="none"
                stroke="#4A7C59"
                strokeWidth="0.5"
                strokeOpacity="0.2"
              />

              <path
                d="M 16 460 Q 260 435 520 450 T 984 445 L 984 524 L 16 524 Z"
                fill="url(#ox-vesper-verdure-grad-ground)"
              />
              <path
                d="M 16 480 Q 380 460 720 475 T 984 465 L 984 524 L 16 524 Z"
                fill="rgba(74, 124, 89, 0.08)"
              />

              <g className="ox-vesper-verdure-sway-1">
                <path
                  d="M 75 510 C 70 410 55 330 45 250"
                  stroke="#4A7C59"
                  strokeWidth="1.8"
                  fill="none"
                  strokeLinecap="round"
                />
                <ellipse
                  cx="48"
                  cy="260"
                  rx="3.5"
                  ry="7"
                  transform="rotate(-20 48 260)"
                  fill="#D4A256"
                  stroke="#4A7C59"
                  strokeWidth="0.8"
                />
                <ellipse
                  cx="53"
                  cy="274"
                  rx="3.5"
                  ry="7"
                  transform="rotate(22 53 274)"
                  fill="#D4A256"
                  stroke="#4A7C59"
                  strokeWidth="0.8"
                />
                <ellipse
                  cx="52"
                  cy="290"
                  rx="3.5"
                  ry="7"
                  transform="rotate(-18 52 290)"
                  fill="#D4A256"
                  stroke="#4A7C59"
                  strokeWidth="0.8"
                />
                <ellipse
                  cx="58"
                  cy="305"
                  rx="3.5"
                  ry="7"
                  transform="rotate(20 58 305)"
                  fill="#D4A256"
                  stroke="#4A7C59"
                  strokeWidth="0.8"
                />
                <ellipse
                  cx="58"
                  cy="322"
                  rx="3.5"
                  ry="7"
                  transform="rotate(-15 58 322)"
                  fill="#D4A256"
                  stroke="#4A7C59"
                  strokeWidth="0.8"
                />
                <ellipse
                  cx="64"
                  cy="338"
                  rx="3.5"
                  ry="7"
                  transform="rotate(18 64 338)"
                  fill="#D4A256"
                  stroke="#4A7C59"
                  strokeWidth="0.8"
                />
              </g>

              <g className="ox-vesper-verdure-sway-3">
                <path
                  d="M 125 510 C 120 425 110 350 95 285"
                  stroke="#4A7C59"
                  strokeWidth="1.6"
                  fill="none"
                  strokeLinecap="round"
                />
                <ellipse
                  cx="98"
                  cy="295"
                  rx="3.2"
                  ry="6.5"
                  transform="rotate(-22 98 295)"
                  fill="#E8BA78"
                  stroke="#4A7C59"
                  strokeWidth="0.8"
                />
                <ellipse
                  cx="103"
                  cy="310"
                  rx="3.2"
                  ry="6.5"
                  transform="rotate(18 103 310)"
                  fill="#E8BA78"
                  stroke="#4A7C59"
                  strokeWidth="0.8"
                />
                <ellipse
                  cx="104"
                  cy="326"
                  rx="3.2"
                  ry="6.5"
                  transform="rotate(-20 104 326)"
                  fill="#E8BA78"
                  stroke="#4A7C59"
                  strokeWidth="0.8"
                />
                <ellipse
                  cx="110"
                  cy="342"
                  rx="3.2"
                  ry="6.5"
                  transform="rotate(15 110 342)"
                  fill="#E8BA78"
                  stroke="#4A7C59"
                  strokeWidth="0.8"
                />
              </g>

              <path
                className="ox-vesper-verdure-sway-2"
                d="M 160 510 Q 185 410 170 330 Q 155 425 145 510 Z"
                fill="#4A7C59"
                opacity="0.75"
              />
              <path
                className="ox-vesper-verdure-sway-4"
                d="M 185 510 Q 215 420 235 340 Q 205 430 195 510 Z"
                fill="#8FB996"
                opacity="0.8"
              />
              <path
                className="ox-vesper-verdure-sway-1"
                d="M 640 510 Q 620 420 595 350 Q 630 425 650 510 Z"
                fill="#4A7C59"
                opacity="0.65"
              />
              <path
                className="ox-vesper-verdure-sway-3"
                d="M 700 510 Q 725 430 750 360 Q 720 435 710 510 Z"
                fill="#8FB996"
                opacity="0.75"
              />

              <g className="ox-vesper-verdure-sway-2">
                <path
                  d="M 915 510 C 925 415 940 335 955 255"
                  stroke="#4A7C59"
                  strokeWidth="1.8"
                  fill="none"
                  strokeLinecap="round"
                />
                <ellipse
                  cx="950"
                  cy="265"
                  rx="3.5"
                  ry="7"
                  transform="rotate(22 950 265)"
                  fill="#D4A256"
                  stroke="#4A7C59"
                  strokeWidth="0.8"
                />
                <ellipse
                  cx="944"
                  cy="280"
                  rx="3.5"
                  ry="7"
                  transform="rotate(-20 944 280)"
                  fill="#D4A256"
                  stroke="#4A7C59"
                  strokeWidth="0.8"
                />
                <ellipse
                  cx="942"
                  cy="296"
                  rx="3.5"
                  ry="7"
                  transform="rotate(18 942 296)"
                  fill="#D4A256"
                  stroke="#4A7C59"
                  strokeWidth="0.8"
                />
                <ellipse
                  cx="936"
                  cy="312"
                  rx="3.5"
                  ry="7"
                  transform="rotate(-22 936 312)"
                  fill="#D4A256"
                  stroke="#4A7C59"
                  strokeWidth="0.8"
                />
                <ellipse
                  cx="932"
                  cy="328"
                  rx="3.5"
                  ry="7"
                  transform="rotate(16 932 328)"
                  fill="#D4A256"
                  stroke="#4A7C59"
                  strokeWidth="0.8"
                />
              </g>

              <g className="ox-vesper-verdure-sway-4">
                <path
                  d="M 870 510 C 875 425 890 350 905 280"
                  stroke="#4A7C59"
                  strokeWidth="1.6"
                  fill="none"
                  strokeLinecap="round"
                />
                <ellipse
                  cx="900"
                  cy="290"
                  rx="3.2"
                  ry="6.5"
                  transform="rotate(20 900 290)"
                  fill="#E8BA78"
                  stroke="#4A7C59"
                  strokeWidth="0.8"
                />
                <ellipse
                  cx="894"
                  cy="305"
                  rx="3.2"
                  ry="6.5"
                  transform="rotate(-18 894 305)"
                  fill="#E8BA78"
                  stroke="#4A7C59"
                  strokeWidth="0.8"
                />
                <ellipse
                  cx="892"
                  cy="322"
                  rx="3.2"
                  ry="6.5"
                  transform="rotate(16 892 322)"
                  fill="#E8BA78"
                  stroke="#4A7C59"
                  strokeWidth="0.8"
                />
              </g>

              <path
                d="M 285 270 L 300 360 L 305 440 L 300 465 L 320 465 L 325 440 L 328 360 L 340 310 Z"
                fill="url(#ox-vesper-verdure-grad-shadow-leg)"
                stroke="#2C3E2D"
                strokeWidth="1.6"
                strokeLinejoin="round"
              />
              <path
                d="M 300 452 L 320 452 L 320 465 L 300 465 Z"
                fill="#2C3E2D"
              />

              <path
                d="M 550 280 L 562 365 L 568 440 L 564 465 L 584 465 L 588 440 L 582 365 L 570 310 Z"
                fill="url(#ox-vesper-verdure-grad-shadow-leg)"
                stroke="#2C3E2D"
                strokeWidth="1.6"
                strokeLinejoin="round"
              />
              <path
                d="M 564 452 L 584 452 L 584 465 L 564 465 Z"
                fill="#2C3E2D"
              />

              <path
                d="M 688 296 C 690 268 680 244 668 236 C 665 240 666 248 672 258 C 678 270 682 284 682 298 Z"
                fill="#8A6E48"
                stroke="#2C3E2D"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />

              <path
                d="M 692 312 C 708 335 710 370 700 395 C 695 390 690 368 688 340 Z"
                fill="#B37D35"
                stroke="#2C3E2D"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />

              <path
                d="M 195 242 C 190 252 192 285 205 315 C 220 350 245 362 255 365 L 250 440 L 244 465 L 268 465 L 274 440 C 280 380 292 340 320 332 C 370 344 430 338 500 322 L 504 440 L 498 465 L 522 465 L 526 440 C 532 380 544 345 565 328 C 595 340 628 372 668 412 C 698 438 738 454 782 448 C 798 442 806 430 802 414 C 790 398 765 358 734 328 C 708 302 670 278 628 248 C 592 222 570 208 554 202 C 544 158 522 110 475 106 C 428 102 396 148 376 214 C 326 220 258 214 195 242 Z"
                fill="url(#ox-vesper-verdure-grad-zebu)"
                stroke="#2C3E2D"
                strokeWidth="2"
                strokeLinejoin="round"
              />

              <path
                d="M 244 452 L 268 452 L 268 465 L 244 465 Z"
                fill="#2C3E2D"
              />
              <path
                d="M 498 452 L 522 452 L 522 465 L 498 465 Z"
                fill="#2C3E2D"
              />

              <path
                d="M 425 185 C 450 138 485 138 518 185"
                stroke="#E8BA78"
                strokeWidth="2.5"
                fill="none"
                strokeLinecap="round"
              />
              <path
                d="M 445 155 C 465 125 488 125 505 155"
                stroke="#F5D89F"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
              />

              <path
                d="M 490 255 C 508 290 502 328 490 355"
                stroke="#B58137"
                strokeWidth="1.6"
                fill="none"
                strokeLinecap="round"
              />
              <path
                d="M 430 250 C 426 280 432 308 446 326"
                stroke="#B58137"
                strokeWidth="1.2"
                strokeDasharray="3 4"
                fill="none"
              />
              <path
                d="M 395 248 C 392 276 398 302 410 320"
                stroke="#B58137"
                strokeWidth="1.2"
                strokeDasharray="3 4"
                fill="none"
              />
              <path
                d="M 248 238 C 238 260 244 282 260 292"
                stroke="#B58137"
                strokeWidth="1.6"
                fill="none"
                strokeLinecap="round"
              />

              <path
                d="M 742 426 C 718 454 684 466 648 446"
                stroke="#9B6C2A"
                strokeWidth="1.8"
                fill="none"
                strokeLinecap="round"
              />
              <path
                d="M 696 412 C 668 440 634 440 602 412"
                stroke="#9B6C2A"
                strokeWidth="1.8"
                fill="none"
                strokeLinecap="round"
              />
              <path
                d="M 645 385 C 618 408 590 404 562 376"
                stroke="#9B6C2A"
                strokeWidth="1.8"
                fill="none"
                strokeLinecap="round"
              />
              <path
                d="M 598 358 C 576 376 558 372 540 350"
                stroke="#9B6C2A"
                strokeWidth="1.6"
                fill="none"
                strokeLinecap="round"
              />

              <path
                d="M 668 310 C 665 272 648 240 632 230 C 628 234 631 242 639 256 C 650 272 655 292 658 316 Z"
                fill="#EFE4D0"
                stroke="#2C3E2D"
                strokeWidth="1.8"
                strokeLinejoin="round"
              />
              <path
                d="M 648 276 C 654 278 658 282 662 286"
                stroke="#8A6E48"
                strokeWidth="1.2"
                strokeLinecap="round"
              />
              <path
                d="M 642 262 C 646 264 650 268 654 272"
                stroke="#8A6E48"
                strokeWidth="1.2"
                strokeLinecap="round"
              />

              <path
                d="M 672 326 C 690 350 686 398 664 435 C 650 456 640 450 644 428 C 648 390 652 352 660 324 Z"
                fill="#D4A256"
                stroke="#2C3E2D"
                strokeWidth="1.8"
                strokeLinejoin="round"
              />
              <path
                d="M 668 344 C 678 368 676 405 660 430 C 654 418 654 388 658 350 Z"
                fill="#E8BA78"
                stroke="#A87532"
                strokeWidth="1"
              />

              <path
                d="M 742 360 C 748 354 756 354 762 360 C 756 366 748 366 742 360 Z"
                fill="#2C3E2D"
              />
              <circle cx="752" cy="358" r="1.5" fill="#F7F5EE" />
              <path
                d="M 738 356 C 750 348 762 350 768 358"
                stroke="#2C3E2D"
                strokeWidth="1.3"
                fill="none"
              />
              <path
                d="M 790 424 C 794 420 798 422 796 428 C 794 431 790 430 790 424 Z"
                fill="#2C3E2D"
              />
              <path
                d="M 780 442 C 792 443 800 438 802 430"
                stroke="#2C3E2D"
                strokeWidth="1.5"
                fill="none"
              />
              <path
                d="M 788 438 Q 820 452 850 445"
                stroke="#4A7C59"
                strokeWidth="2.5"
                strokeLinecap="round"
                fill="none"
              />

              <g className="ox-vesper-verdure-tail">
                <path
                  d="M 195 242 C 182 275 178 320 180 375 C 181 405 178 425 175 440"
                  stroke="#2C3E2D"
                  strokeWidth="3"
                  fill="none"
                  strokeLinecap="round"
                />
                <path
                  d="M 175 425 C 160 448 165 482 184 492 C 190 480 188 456 180 432 Z"
                  fill="#2C3E2D"
                  stroke="#2C3E2D"
                  strokeWidth="1"
                />
              </g>

              <g>
                <path
                  className="ox-vesper-verdure-sway-1"
                  d="M 215 510 Q 220 430 205 365 Q 235 435 230 510 Z"
                  fill="#4A7C59"
                />
                <path
                  className="ox-vesper-verdure-sway-2"
                  d="M 245 510 Q 268 410 298 345 Q 278 425 260 510 Z"
                  fill="#8FB996"
                />
                <path
                  className="ox-vesper-verdure-sway-3"
                  d="M 475 510 Q 465 420 435 355 Q 480 425 490 510 Z"
                  fill="#4A7C59"
                />
                <path
                  className="ox-vesper-verdure-sway-4"
                  d="M 520 510 Q 542 415 578 340 Q 552 420 535 510 Z"
                  fill="#8FB996"
                />
                <path
                  className="ox-vesper-verdure-sway-5"
                  d="M 755 510 Q 770 440 805 375 Q 790 445 775 510 Z"
                  fill="#4A7C59"
                />
                <path
                  className="ox-vesper-verdure-sway-1"
                  d="M 805 510 Q 835 430 870 360 Q 840 435 825 510 Z"
                  fill="#8FB996"
                />
                <path
                  className="ox-vesper-verdure-sway-2"
                  d="M 845 510 Q 860 410 885 325 Q 875 415 862 510 Z"
                  fill="#4A7C59"
                />
                <path
                  className="ox-vesper-verdure-sway-3"
                  d="M 135 510 Q 150 420 175 345 Q 160 425 148 510 Z"
                  fill="#8FB996"
                />
                <path
                  className="ox-vesper-verdure-sway-4"
                  d="M 365 510 Q 355 430 330 370 Q 370 435 380 510 Z"
                  fill="#4A7C59"
                />
                <path
                  className="ox-vesper-verdure-sway-5"
                  d="M 635 510 Q 655 430 685 365 Q 665 435 650 510 Z"
                  fill="#8FB996"
                />
              </g>

              <g>
                <circle cx="210" cy="485" r="3" fill="#D4A256" />
                <circle cx="206" cy="482" r="2.5" fill="#F7F5EE" />
                <circle cx="214" cy="482" r="2.5" fill="#F7F5EE" />
                <circle cx="210" cy="478" r="2.5" fill="#F7F5EE" />
                <circle cx="210" cy="488" r="2.5" fill="#F7F5EE" />

                <circle cx="780" cy="485" r="3" fill="#D4A256" />
                <circle cx="776" cy="482" r="2.5" fill="#F7F5EE" />
                <circle cx="784" cy="482" r="2.5" fill="#F7F5EE" />
                <circle cx="780" cy="478" r="2.5" fill="#F7F5EE" />
                <circle cx="780" cy="488" r="2.5" fill="#F7F5EE" />

                <circle cx="890" cy="478" r="3" fill="#D4A256" />
                <circle cx="886" cy="475" r="2.5" fill="#F7F5EE" />
                <circle cx="894" cy="475" r="2.5" fill="#F7F5EE" />
                <circle cx="890" cy="471" r="2.5" fill="#F7F5EE" />
                <circle cx="890" cy="481" r="2.5" fill="#F7F5EE" />
              </g>

              <line
                x1="20"
                y1="510"
                x2="980"
                y2="510"
                stroke="#4A7C59"
                strokeWidth="1.2"
                strokeOpacity="0.4"
              />
            </svg>
          </div>
        </motion.div>

        <motion.div
          className="ox-vesper-verdure-content"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35, ease: 'easeOut' }}
        >
          <p className="ox-vesper-verdure-lede">
            Domesticated in the Indus Valley over eight thousand years ago, the
            zebu is the ancient humped cattle of the tropics. Its prominent
            shoulder hump serves as a dense reservoir of energy, while wide
            pendulous dewlaps and generous ears dissipate heat across sweltering
            plains. Enriched with natural insect-repelling oils, this serene
            grazer remains the most resilient and populous cattle lineage on
            Earth.
          </p>
        </motion.div>

        <motion.div
          className="ox-vesper-verdure-cards"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }}
        >
          <div className="ox-vesper-verdure-card">
            <span className="ox-vesper-verdure-card-value">800 MILLION</span>
            <span className="ox-vesper-verdure-card-label">Zebu Worldwide</span>
            <p className="ox-vesper-verdure-card-desc">
              The predominant cattle lineage on Earth, thriving across tropical
              Asia, Africa, and South America.
            </p>
          </div>

          <div className="ox-vesper-verdure-card">
            <span className="ox-vesper-verdure-card-value">8,000 YRS</span>
            <span className="ox-vesper-verdure-card-label">Domestication Age</span>
            <p className="ox-vesper-verdure-card-desc">
              First pastoralized at Mehrgarh and throughout the fertile Indus river
              basin during the early agricultural era.
            </p>
          </div>

          <div className="ox-vesper-verdure-card">
            <span className="ox-vesper-verdure-card-value">42°C</span>
            <span className="ox-vesper-verdure-card-label">Heat Tolerance</span>
            <p className="ox-vesper-verdure-card-desc">
              Exceptional thermal endurance facilitated by specialized sweat
              glands, pendulous dewlaps, and thoracic fat reserves.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="ox-vesper-verdure-signature-wrap"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.65, ease: 'easeOut' }}
        >
          <svg
            viewBox="0 0 420 110"
            className="ox-vesper-verdure-specimen-svg"
            aria-label="SET XVI · DESIGNED BY CLAUDE OPUS"
            role="img"
          >
            <rect
              x="2"
              y="2"
              width="416"
              height="106"
              rx="2"
              fill="#F5F0E1"
              stroke="#4A7C59"
              strokeWidth="1.5"
            />
            <rect
              x="6"
              y="6"
              width="408"
              height="98"
              rx="1"
              fill="none"
              stroke="#8FB996"
              strokeWidth="0.75"
              strokeDasharray="4 2"
            />
            <g transform="translate(22, 24)" aria-hidden="true" focusable="false">
              <path
                d="M 0 55 C 10 35 25 20 45 0"
                stroke="#4A7C59"
                strokeWidth="1.5"
                fill="none"
                strokeLinecap="round"
              />
              <path
                d="M 12 42 C 6 36 10 26 20 32 C 22 38 18 44 12 42 Z"
                fill="#8FB996"
                stroke="#4A7C59"
                strokeWidth="0.8"
              />
              <path
                d="M 25 28 C 22 18 32 14 36 22 C 36 28 30 32 25 28 Z"
                fill="#8FB996"
                stroke="#4A7C59"
                strokeWidth="0.8"
              />
              <path
                d="M 38 12 C 40 2 50 4 48 14 C 44 18 38 18 38 12 Z"
                fill="#8FB996"
                stroke="#4A7C59"
                strokeWidth="0.8"
              />
            </g>
            <text
              x="86"
              y="32"
              fontFamily="'Josefin Sans', sans-serif"
              fontSize="9"
              fontWeight="700"
              letterSpacing="0.2em"
              fill="#4A7C59"
            >
              HERBARIUM ZOOLOGICUM · TABULA XVI
            </text>
            <text
              x="86"
              y="54"
              fontFamily="'Literata', Georgia, serif"
              fontStyle="italic"
              fontSize="13"
              fontWeight="600"
              fill="#2C3E2D"
            >
              Bos taurus indicus · Specimen No. 4
            </text>
            <line
              x1="86"
              y1="64"
              x2="395"
              y2="64"
              stroke="#D4A256"
              strokeWidth="0.8"
            />
            <text
              x="86"
              y="85"
              fontFamily="'Literata', Georgia, serif"
              fontSize="10.5"
              fontWeight="600"
              letterSpacing="0.12em"
              fill="#2C3E2D"
            >
              SET XVI · DESIGNED BY CLAUDE OPUS
            </text>
          </svg>
        </motion.div>
      </div>
    </div>
  )
}
