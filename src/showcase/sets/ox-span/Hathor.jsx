import { motion } from 'framer-motion'
import './hathor.css'

export default function Hathor() {
  return (
    <article className="th-span-hathor">
      <div className="ox-span-hathor-sky" aria-hidden="true" />
      <motion.header
        className="ox-span-hathor-head"
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <p className="ox-span-hathor-cartouche">SET 4 · DESIGNED BY GROK 4.7</p>
        <p className="ox-span-hathor-kicker">Myth · the celestial cow</p>
        <h1>Hathor</h1>
      </motion.header>

      <svg className="ox-span-hathor-ox" viewBox="0 0 1440 860" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
        <path d="M1180 340 C 1260 420, 1280 540, 1220 650" stroke="#F4EFE4" strokeWidth="16" fill="none" strokeLinecap="round" className="ox-span-hathor-tail" />
        <path d="M1220 620 C 1260 670, 1266 730, 1216 752 C 1180 718, 1176 666, 1200 628 Z" fill="#2A3338" />

        <path d="M980 500 L 1032 500 L 1048 700 L 1012 700 L 1024 778 L 976 782 L 966 700 L 990 700 Z" fill="#E4D9C8" />
        <path d="M972 766 L 986 812 L 1028 812 L 1018 766 Z" fill="#1A1A1A" />

        <path d="M620 490 L 672 490 L 658 690 L 622 690 L 634 776 L 586 780 L 596 690 L 628 690 Z" fill="#E4D9C8" />
        <path d="M582 764 L 596 810 L 638 810 L 628 764 Z" fill="#1A1A1A" />

        <path
          d="M1140 320 C 1020 260, 820 250, 640 290 C 500 322, 420 400, 430 500 C 442 600, 560 680, 760 700 L 1060 660 C 1200 620, 1280 520, 1240 410 C 1216 350, 1180 320, 1140 320 Z"
          fill="url(#ox-span-hathor-hide)"
          stroke="#1FA7A0"
          strokeWidth="3"
        />
        <path d="M560 560 C 760 680, 1100 650, 1240 520 L 1180 600 C 980 700, 680 700, 540 610 Z" fill="#E4D9C8" opacity="0.7" />

        <ellipse cx="1000" cy="640" rx="52" ry="40" fill="#F3C9C4" stroke="#1FA7A0" strokeWidth="2.5" />
        <ellipse cx="978" cy="676" rx="7" ry="14" fill="#E7A8A4" />
        <ellipse cx="996" cy="684" rx="7" ry="14" fill="#E7A8A4" />
        <ellipse cx="1014" cy="682" rx="7" ry="14" fill="#E7A8A4" />
        <ellipse cx="1032" cy="672" rx="7" ry="14" fill="#E7A8A4" />

        <path d="M1060 500 L 1140 488 L 1168 660 L 1224 692 L 1206 778 L 1150 772 L 1170 696 L 1120 666 L 1092 520 Z" fill="#F7F3EB" stroke="#1FA7A0" strokeWidth="3" />
        <path d="M1146 760 L 1160 808 L 1204 808 L 1194 760 Z" fill="#1A1A1A" />
        <path d="M1172 768 V 802" stroke="#F7F3EB" strokeWidth="2" />

        <path d="M500 500 L 572 484 L 520 660 L 448 700 L 400 776 L 346 768 L 388 688 L 452 650 L 478 520 Z" fill="#F7F3EB" stroke="#1FA7A0" strokeWidth="3" />
        <path d="M344 760 L 358 808 L 402 808 L 392 760 Z" fill="#1A1A1A" />
        <path d="M370 768 V 802" stroke="#F7F3EB" strokeWidth="2" />

        <path d="M480 340 L 360 270 L 320 340 L 430 470 L 530 420 Z" fill="#F7F3EB" stroke="#1FA7A0" strokeWidth="3" />
        <path d="M400 400 L 460 530 L 360 570 L 290 430 Z" fill="#E4D9C8" />

        <path d="M300 470 H 470" stroke="#1FA7A0" strokeWidth="10" />
        <path d="M300 470 H 470" stroke="#F0D48A" strokeWidth="4" />
        <path d="M320 494 H 450" stroke="#F0D48A" strokeWidth="6" />
        <path d="M340 516 H 430" stroke="#1FA7A0" strokeWidth="5" />

        <path d="M340 280 L 150 340 C 100 384, 110 470, 180 512 L 340 460 L 380 330 Z" fill="#F7F3EB" stroke="#1FA7A0" strokeWidth="3" />
        <path d="M190 370 L 118 416 L 144 500 L 230 456 Z" fill="#2C3338" />
        <ellipse cx="148" cy="450" rx="10" ry="7" fill="#0e1114" />
        <path d="M200 492 C 168 508, 140 498, 150 482" stroke="#1A1A1A" strokeWidth="2.4" fill="none" strokeLinecap="round" />
        <ellipse cx="250" cy="360" rx="15" ry="12" fill="#1A140F" />
        <ellipse cx="245" cy="356" rx="3.6" ry="2.8" fill="#F7F3EB" />
        <path d="M340 300 L 410 268 L 394 348 Z" fill="#F7F3EB" stroke="#1FA7A0" strokeWidth="3" />
        <path d="M348 308 L 394 286 L 384 336 Z" fill="#E4B8AE" />

        <path d="M360 270 C 280 160, 170 70, 210 28 C 260 70, 320 150, 375 255 Z" fill="#1A1A1A" />
        <path d="M410 255 C 520 140, 680 50, 630 18 C 560 60, 480 150, 425 250 Z" fill="#1A1A1A" />
        <motion.g
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 4.8, repeat: Infinity, ease: 'easeInOut' }}
          style={{ transformOrigin: '430px 175px' }}
        >
          <circle cx="430" cy="175" r="58" fill="url(#ox-span-hathor-sun)" stroke="#F0D48A" strokeWidth="4" />
          <circle cx="430" cy="175" r="36" fill="none" stroke="#8A5A18" strokeWidth="3" />
          <circle cx="430" cy="175" r="8" fill="#FFF6D8" />
        </motion.g>

        <path d="M700 640 L 710 626 L 720 640 L 734 648 L 720 656 L 710 670 L 700 656 L 686 648 Z" fill="#F0D48A" />
        <path d="M840 660 L 848 648 L 856 660 L 868 668 L 856 676 L 848 688 L 840 676 L 828 668 Z" fill="#F0D48A" />
        <path d="M980 640 L 988 628 L 996 640 L 1008 648 L 996 656 L 988 668 L 980 656 L 968 648 Z" fill="#F0D48A" />
        <motion.circle
          cy="680"
          r="4"
          fill="#F0D48A"
          initial={{ cx: 620 }}
          animate={{ cx: [620, 1080, 620] }}
          transition={{ duration: 16, repeat: Infinity, ease: 'linear' }}
        />

        <defs>
          <linearGradient id="ox-span-hathor-hide" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#FFFcf7" />
            <stop offset="0.65" stopColor="#F4EFE4" />
            <stop offset="1" stopColor="#E4D8C8" />
          </linearGradient>
          <radialGradient id="ox-span-hathor-sun" cx="40%" cy="35%" r="70%">
            <stop offset="0" stopColor="#FFF6D0" />
            <stop offset="0.55" stopColor="#F0D48A" />
            <stop offset="1" stopColor="#C4892E" />
          </radialGradient>
        </defs>
      </svg>

      <motion.footer
        className="ox-span-hathor-foot"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <p className="ox-span-hathor-lead">
          Hathor carries the disk of the sun between her horns. As a cow she is the sky: stars set along the belly, the dying sun taken in at dusk and given back at dawn. Mistress of the west, of music, and of the sycamore — and under the gold, still a cow, with dewlap, udder, and four cloven hooves.
        </p>
      </motion.footer>
    </article>
  )
}
