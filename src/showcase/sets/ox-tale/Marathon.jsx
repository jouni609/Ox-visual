import { motion } from 'framer-motion'
import './marathon.css'

const MEANDER = 'M0 20 H10 V4 H26 V20 H36 V4 H52 V20 H62 V4 H78 V20 H88 V4 H104 V20 H114 V4 H130 V20 H140 V4 H156 V20 H166 V4 H182 V20 H192 V4 H208 V20 H218 V4 H234 V20 H244 V4 H260 V20 H270 V4 H286 V20 H296 V4 H312 V20 H322 V4 H338 V20 H348 V4 H364 V20 H374 V4 H390 V20 H400 V4 H416 V20 H426 V4 H442 V20 H452 V4 H468 V20 H478 V4 H494 V20 H504 V4 H520 V20 H530 V4 H546 V20 H556 V4 H572 V20 H582 V4 H598 V20 H608 V4 H624 V20 H634 V4 H650 V20 H660 V4 H676 V20 H686 V4 H702 V20 H712 V4 H728 V20 H738 V4 H754 V20 H764 V4 H780 V20 H790 V4 H806 V20 H816 V4 H832 V20 H842 V4 H858 V20 H868 V4 H884 V20 H894 V4 H910 V20 H920 V4 H936 V20 H946 V4 H962 V20 H972 V4 H988 V20 H998 V4 H1014 V20 H1024 V4 H1040 V20 H1050 V4 H1066 V20 H1076 V4 H1092 V20 H1102 V4 H1118 V20 H1128 V4 H1144 V20 H1154 V4 H1170 V20 H1180 V4 H1196 V20 H1200'

export default function Marathon() {
  return (
    <div className="th-ox-tale-marathon ox-tale-m ox-tale-page">
      <div className="m-meander m-meander-top" aria-hidden="true">
        <svg viewBox="0 0 1200 24" preserveAspectRatio="none">
          <path d={MEANDER} fill="none" stroke="currentColor" strokeWidth="4" />
        </svg>
      </div>

      <header className="m-head">
        <motion.p
          className="m-kicker"
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.55, delay: 0.12 }}
        >
          Attica · black-figure register · Panathenaic prize amphora
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
        >
          The Bull of Marathon
        </motion.h1>
      </header>

      <figure className="m-art">
        <svg viewBox="0 0 1200 640" className="m-svg" aria-hidden="true">
          <rect width="1200" height="640" fill="#C4622D" />
          <g className="m-bull">
            <path
              fill="#1A1210"
              d="M1050 350
                 C1035 330 1010 318 982 316
                 C955 314 928 320 906 332
                 C860 292 790 258 720 250
                 C660 246 600 254 552 272
                 C510 288 478 316 458 352
                 C440 386 436 424 448 462
                 C460 486 490 502 532 510
                 C608 524 700 528 780 520
                 C826 514 858 498 878 478
                 C906 504 948 520 994 516
                 C1030 512 1054 486 1062 448
                 C1068 414 1060 382 1050 350 Z"
            />
            <path
              fill="#1A1210"
              d="M770 460
                 C820 474 880 506 930 546
                 C946 560 948 578 932 584
                 C908 574 878 554 850 532
                 C820 510 792 486 770 470 Z"
            />
            <path
              fill="#1A1210"
              d="M700 470
                 C688 512 686 552 696 584
                 L738 580
                 C734 548 740 512 754 478 Z"
            />
            <path
              fill="#1A1210"
              d="M480 460
                 C440 500 390 540 330 572
                 C314 580 310 596 328 600
                 C370 582 420 548 460 510
                 C490 486 506 468 508 458 Z"
            />
            <path
              fill="#1A1210"
              d="M530 470
                 C520 512 514 552 520 586
                 L562 582
                 C560 550 566 514 580 478 Z"
            />
            <path
              fill="#1A1210"
              d="M458 310
                 C410 280 360 250 310 232
                 C300 228 294 236 302 244
                 C348 268 396 300 440 336 Z"
            />
            <path
              fill="#1A1210"
              d="M318 226 C300 218 286 214 274 216 C282 232 296 244 312 250 Z"
            />
            <path
              fill="#F0E2C8"
              d="M900 320
                 C950 316 1000 330 1040 362
                 C1046 372 1046 384 1036 386
                 C1010 374 976 360 944 354
                 C920 350 902 338 900 320 Z"
            />
            <path
              fill="#F0E2C8"
              d="M886 314
                 C930 296 980 296 1020 314
                 C1030 320 1032 332 1022 336
                 C992 326 956 320 924 322
                 C904 324 888 322 886 314 Z"
            />
            <path fill="#1A1210" d="M874 344 C850 356 830 374 822 396 C848 396 874 384 890 364 Z" />
            <ellipse cx="944" cy="360" rx="11" ry="12" fill="#F0E2C8" />
            <ellipse cx="944" cy="360" rx="5" ry="7" fill="#1A1210" />
            <ellipse cx="1036" cy="404" rx="7" ry="9" fill="#F0E2C8" opacity="0.85" />
            <g fill="none" stroke="#9C2B1A" strokeWidth="5" strokeLinecap="round" opacity="0.85">
              <path d="M860 360 C820 386 796 430 800 476" />
              <path d="M700 420 C660 446 616 460 570 462" />
              <path d="M520 300 C486 340 470 390 474 442" />
              <path d="M1010 380 C1030 372 1044 360 1054 346" />
              <path d="M600 280 C560 300 530 330 510 368" />
              <path d="M880 470 C910 486 950 494 990 490" />
            </g>
            <g fill="#9C2B1A" opacity="0.9">
              <path d="M840 340 C856 334 872 340 880 352 C868 360 852 358 842 348 Z" />
            </g>
          </g>

          <g className="m-dust" fill="none" stroke="#1A1210" strokeWidth="6" strokeLinecap="round" opacity="0.55">
            <path className="m-puff" d="M260 600 q40 -20 90 -14" />
            <path className="m-puff" d="M180 622 q56 -24 120 -16" />
            <path className="m-puff" d="M420 618 q46 -18 96 -12" />
            <path className="m-puff" d="M980 606 q40 -16 84 -10" />
          </g>

          <g fill="#1A1210" opacity="0.9">
            <path d="M80 120 l24 -8 l0 16 Z" />
            <path d="M120 96 l18 -6 l0 12 Z" />
            <path d="M156 132 l20 -7 l0 14 Z" />
          </g>

          <g className="m-rosette" fill="#F0E2C8" opacity="0.9">
            <circle cx="100" cy="540" r="14" />
            <circle cx="100" cy="540" r="7" fill="#C4622D" />
            <circle cx="1120" cy="120" r="14" />
            <circle cx="1120" cy="120" r="7" fill="#C4622D" />
          </g>

          <text x="1020" y="560" className="m-graffiti" fill="#9C2B1A" fontSize="30" fontFamily="Cinzel, serif" letterSpacing="4">
            ΤΑΥΡΟΣ
          </text>
        </svg>
        <figcaption className="m-fig">Bull in the chase band, white slip on the horns</figcaption>
      </figure>

      <section className="m-copy">
        <motion.p
          className="m-body"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.4 }}
        >
          The Cretan Bull was turned loose at Tiryns and ran wild through the plain of Marathon
          until Theseus brought it in chains. The plain kept the fight in its name. Painters liked
          the animal best mid-stride: one flat silhouette, ground left the colour of fired clay,
          horns laid in white slip so they would read across a dim room.
        </motion.p>
        <motion.dl
          className="m-data"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.55 }}
        >
          <div>
            <dt>Vase</dt>
            <dd>Prize amphora, black-figure</dd>
          </div>
          <div>
            <dt>Plain</dt>
            <dd>Marathon, Attica</dd>
          </div>
          <div>
            <dt>Hunt</dt>
            <dd>Theseus and the Cretan Bull</dd>
          </div>
        </motion.dl>
      </section>

      <motion.aside
        className="m-tag"
        aria-label="Signature"
        initial={{ opacity: 0, y: 20, rotate: 4 }}
        animate={{ opacity: 1, y: 0, rotate: -2 }}
        transition={{ duration: 0.6, delay: 0.75, type: 'spring', stiffness: 120, damping: 13 }}
      >
        <span className="m-tag-hole" aria-hidden="true" />
        <span className="m-tag-text">SET 05 · DESIGNED BY MIMO</span>
        <span className="m-tag-sub">VASE PAINTER MIMO · ATTICA</span>
      </motion.aside>

      <div className="m-meander m-meander-bottom" aria-hidden="true">
        <svg viewBox="0 0 1200 24" preserveAspectRatio="none">
          <path d={MEANDER} fill="none" stroke="currentColor" strokeWidth="4" />
        </svg>
      </div>
    </div>
  )
}
