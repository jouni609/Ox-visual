import { motion } from 'framer-motion'
import './Trau.css'

export default function Trau() {
  return (
    <div className="oxm-page th-oxm oxm-trau">
      <svg
        className="oxm-tr-scene"
        viewBox="0 0 1000 700"
        preserveAspectRatio="xMidYMax slice"
        role="img"
        aria-label="A water buffalo with wide crescent horns drinking from a flooded rice terrace under monsoon rain"
      >
        <path d="M0 336 C 160 318 340 350 520 336 C 700 322 860 346 1000 334 L 1000 560 L 0 560 Z" fill="#3E5F45" />
        <path d="M0 414 C 180 394 380 430 560 412 C 720 398 880 422 1000 410 L 1000 580 L 0 580 Z" fill="#527A4A" />
        <path d="M0 480 C 200 462 420 496 620 480 C 780 466 920 488 1000 476 L 1000 600 L 0 600 Z" fill="#6E8F5E" />
        <rect x="0" y="530" width="1000" height="170" fill="#101B24" />
        <path stroke="#D8E1E4" strokeWidth="3" fill="none" d="M 0 531 L 1000 531" />
        <g fill="none" stroke="#6E8F5E" strokeLinecap="round">
          <path strokeWidth="6" d="M 46 530 C 42 480 46 436 58 404" />
          <path strokeWidth="5" d="M 62 530 C 64 486 74 450 92 424" />
          <path strokeWidth="4" d="M 30 530 C 28 494 34 462 46 440" />
          <path strokeWidth="4" d="M 58 404 C 48 380 50 358 64 340" />
          <path strokeWidth="6" d="M 952 530 C 956 486 950 448 936 420" />
          <path strokeWidth="4" d="M 966 530 C 970 492 962 458 948 434" />
        </g>
        <g fill="none" stroke="#D8E1E4" strokeWidth="3" strokeLinecap="round">
          <path d="M 80 562 C 140 558 200 562 250 566" />
          <path d="M 560 592 C 620 588 680 592 740 596" />
          <path d="M 120 632 C 180 628 240 632 300 636" />
          <path d="M 660 652 C 720 648 780 652 840 656" />
          <path d="M 380 562 L 430 564" />
          <path d="M 840 582 L 900 584" />
        </g>
        <g fill="#6E8F5E">
          <ellipse cx="180" cy="576" rx="20" ry="5" />
          <ellipse cx="300" cy="612" rx="16" ry="4" />
          <ellipse cx="700" cy="624" rx="22" ry="5" />
          <ellipse cx="850" cy="592" rx="14" ry="4" />
          <ellipse cx="520" cy="560" rx="12" ry="4" />
        </g>
        <g transform="translate(0 1060) scale(1 -1)" opacity="0.15">
          <path fill="#2E5168" d="M 882 490 C 874 460 864 430 848 406 C 828 376 796 354 758 350 C 722 336 682 318 646 298 C 620 286 592 278 566 274 C 524 266 480 260 440 260 C 358 254 276 246 206 242 C 166 242 132 248 112 260 C 92 272 84 294 84 318 C 84 350 92 386 106 416 C 118 444 136 462 158 470 C 228 482 308 486 388 484 C 448 482 508 478 548 470 C 578 462 594 446 598 428 C 624 436 652 442 678 444 C 700 444 722 450 744 460 C 770 472 794 488 816 504 C 836 518 856 528 874 528 C 882 520 884 504 882 490 Z" />
        </g>
        <motion.g
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.35 }}
        >
          <path fill="#2E5168" stroke="#D8E1E4" strokeWidth="3" d="M 108 268 C 100 310 98 356 104 406 L 124 404 C 118 356 120 312 128 272 Z" />
          <path fill="#D8E1E4" d="M 100 402 C 96 432 98 460 108 484 C 118 462 120 432 116 408 Z" />
          <g fill="#2E5168" stroke="#D8E1E4" strokeWidth="3">
            <path d="M 316 456 C 313 472 312 488 314 502 L 310 508 L 315 514 L 317 534 L 343 534 C 345 510 347 484 349 458 Z" />
            <path d="M 622 458 C 617 476 615 496 616 512 L 612 518 L 617 524 L 619 534 L 645 534 C 647 514 649 490 651 460 Z" />
          </g>
          <path fill="#2E5168" stroke="#D8E1E4" strokeWidth="4" d="M 882 490 C 874 460 864 430 848 406 C 828 376 796 354 758 350 C 722 336 682 318 646 298 C 620 286 592 278 566 274 C 524 266 480 260 440 260 C 358 254 276 246 206 242 C 166 242 132 248 112 260 C 92 272 84 294 84 318 C 84 350 92 386 106 416 C 118 444 136 462 158 470 C 228 482 308 486 388 484 C 448 482 508 478 548 470 C 578 462 594 446 598 428 C 624 436 652 442 678 444 C 700 444 722 450 744 460 C 770 472 794 488 816 504 C 836 518 856 528 874 528 C 882 520 884 504 882 490 Z" />
          <g fill="#2E5168" stroke="#D8E1E4" strokeWidth="3">
            <path d="M 258 458 C 253 472 251 482 254 490 L 249 496 L 255 502 L 257 534 L 285 534 C 288 512 290 488 292 462 Z" />
            <path d="M 560 456 C 552 474 548 494 549 508 L 543 514 L 550 520 L 552 534 L 582 534 C 584 516 586 496 588 478 C 589 470 589 462 588 456 Z" />
          </g>
          <ellipse cx="748" cy="336" rx="18" ry="14" fill="#24384A" />
          <path transform="translate(-16 -20)" fill="#24384A" stroke="#D8E1E4" strokeWidth="2.5" d="M 748 315 C 700 270 620 240 540 232 C 500 228 470 226 452 230 C 446 232 446 238 452 242 C 480 244 530 246 590 264 C 650 282 706 316 744 358 C 752 346 752 330 748 315 Z" />
          <path fill="#D8E1E4" d="M 748 315 C 700 270 620 240 540 232 C 500 228 470 226 452 230 C 446 232 446 238 452 242 C 480 244 530 246 590 264 C 650 282 706 316 744 358 C 752 346 752 330 748 315 Z" />
          <g fill="none" stroke="#1E3242" strokeWidth="2.5">
            <path d="M 690 266 L 691 288" />
            <path d="M 600 242 L 601 260" />
            <path d="M 520 234 L 521 248" />
          </g>
          <path fill="#D8E1E4" d="M 846 478 C 862 486 874 498 880 512 C 882 518 880 524 874 528 C 856 528 840 520 828 508 C 832 494 838 484 846 478 Z" />
          <ellipse cx="866" cy="498" rx="6" ry="9" fill="#2E5168" />
          <circle cx="790" cy="394" r="8" fill="#D8E1E4" />
          <circle cx="791" cy="395" r="4" fill="#2E5168" />
          <path fill="#2E5168" stroke="#D8E1E4" strokeWidth="3" d="M 712 360 C 698 366 686 376 678 388 C 690 388 702 382 710 372 Z" />
          <path fill="#2E5168" stroke="#D8E1E4" strokeWidth="3" d="M 726 366 C 710 378 698 394 692 410 C 706 408 720 398 730 384 C 732 376 730 370 728 366 Z" />
          <ellipse cx="874" cy="540" rx="55" ry="11" fill="none" stroke="#D8E1E4" strokeWidth="4" />
          <ellipse cx="874" cy="546" rx="95" ry="17" fill="none" stroke="#D8E1E4" strokeWidth="3" />
        </motion.g>
        <g fill="none" stroke="#D8E1E4" strokeWidth="2.5" strokeLinecap="round" opacity="0.55" className="oxm-tr-rain oxm-tr-rain1">
          <path d="M 90 40 l -6 34" />
          <path d="M 250 90 l -6 34" />
          <path d="M 410 30 l -6 34" />
          <path d="M 560 100 l -6 34" />
          <path d="M 700 50 l -6 34" />
          <path d="M 850 120 l -6 34" />
          <path d="M 160 180 l -6 34" />
          <path d="M 640 200 l -6 34" />
        </g>
        <g fill="none" stroke="#D8E1E4" strokeWidth="2.5" strokeLinecap="round" opacity="0.4" className="oxm-tr-rain oxm-tr-rain2">
          <path d="M 40 140 l -6 34" />
          <path d="M 200 240 l -6 34" />
          <path d="M 340 170 l -6 34" />
          <path d="M 500 250 l -6 34" />
          <path d="M 660 160 l -6 34" />
          <path d="M 820 230 l -6 34" />
          <path d="M 940 90 l -6 34" />
        </g>
      </svg>
      <div className="oxm-tr-copy">
        <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }}>
          Trau
        </motion.h1>
        <motion.p className="oxm-tr-thai" lang="th" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.25, duration: 0.9 }}>
          ควาย · the buffalo
        </motion.p>
        <motion.p className="oxm-tr-lede" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35, duration: 0.9 }}>
          The living tractor of the paddy. Where a tractor sinks to its axles, the buffalo walks.
        </motion.p>
        <motion.div className="oxm-tr-stat" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.9 }}>
          <strong>95%</strong>
          <span>of the world's buffalo are Asian, most of them working wet fields</span>
        </motion.div>
        <motion.p className="oxm-tr-fact" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.65, duration: 0.9 }}>
          They wallow because they have almost no sweat glands, and a bull's horns can sweep back more than a metre from skull to tip.
        </motion.p>
      </div>
      <motion.footer
        className="oxm-tr-sig"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.9 }}
      >
        <svg viewBox="0 0 64 64" aria-hidden="true">
          <rect x="3" y="3" width="58" height="58" fill="none" stroke="#C9A85C" strokeWidth="2.5" />
          <path d="M32 9 L37 16 L32 23 L27 16 Z" fill="#C9A85C" />
          <path d="M55 32 L48 37 L41 32 L48 27 Z" fill="#C9A85C" />
          <path d="M32 55 L27 48 L32 41 L37 48 Z" fill="#C9A85C" />
          <path d="M9 32 L16 27 L23 32 L16 37 Z" fill="#C9A85C" />
          <circle cx="32" cy="32" r="4" fill="#C9A85C" />
          <circle cx="14" cy="14" r="1.6" fill="#C9A85C" />
          <circle cx="50" cy="14" r="1.6" fill="#C9A85C" />
          <circle cx="14" cy="50" r="1.6" fill="#C9A85C" />
          <circle cx="50" cy="50" r="1.6" fill="#C9A85C" />
        </svg>
        <span>SET 4 · DESIGNED BY GLM FLASH</span>
      </motion.footer>
    </div>
  )
}
