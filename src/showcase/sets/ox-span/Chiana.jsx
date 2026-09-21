import { motion } from 'framer-motion'
import './chiana.css'

export default function Chiana() {
  return (
    <article className="th-span-chiana">
      <motion.div
        className="ox-span-chiana-copy"
        initial={{ opacity: 0, y: 22 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <p className="ox-span-chiana-sign">SET 1 · DESIGNED BY GROK 4.7</p>
        <p className="ox-span-chiana-kicker">
          Breed · <span lang="it">Val di Chiana</span>
        </p>
        <h1>Chiana</h1>
        <p className="ox-span-chiana-lead">
          The Chianina is the tallest domestic ox on earth. A mature bull stands near 180 centimetres at the withers and carries an ivory coat from poll to coronet, with slate only on the muzzle, the horn tips, the hooves, and the switch of the tail. The horns are a short lyre. Roman ritual asked for a white ox; the herds of the valley still supply the draught animal of the Tuscan hills and the beef cut as <span lang="it">bistecca alla fiorentina</span>.
        </p>
        <ul className="ox-span-chiana-stats">
          <li>
            <span>Withers</span>
            <strong>178 cm</strong>
          </li>
          <li>
            <span>Horns</span>
            <strong>Black-tipped lyre</strong>
          </li>
          <li>
            <span>Coat</span>
            <strong>Unpigmented</strong>
          </li>
          <li>
            <span lang="la">Bos taurus</span>
            <strong>Chianina</strong>
          </li>
        </ul>
      </motion.div>

      <div className="ox-span-chiana-stage">
        <motion.svg
          className="ox-span-chiana-ox"
          viewBox="0 0 1200 710"
          preserveAspectRatio="xMidYMax meet"
          aria-hidden="true"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <ellipse cx="560" cy="662" rx="280" ry="14" fill="#1a1e24" opacity="0.16" />
          <path d="M70 150 V 640" stroke="#7A2430" strokeWidth="1.6" />
          <path d="M58 150 H 82 M 58 640 H 82" stroke="#7A2430" strokeWidth="1.6" />
          <text x="90" y="146" fill="#7A2430" fontFamily="Familjen Grotesk, sans-serif" fontSize="22" fontWeight="600">178 cm</text>

          <path d="M168 248 C 120 320, 100 440, 132 530" stroke="#F4EFE4" strokeWidth="16" fill="none" strokeLinecap="round" />
          <path d="M132 508 C 98 548, 92 600, 132 622 C 164 584, 158 540, 148 512 Z" fill="#2A3036" />

          <path d="M280 400 L 328 400 L 340 560 L 308 560 L 318 628 L 272 632 L 264 560 L 286 560 Z" fill="#E4D9C8" />
          <path d="M268 616 L 282 658 L 322 658 L 312 616 Z" fill="#1C2126" />
          <path d="M294 622 V 652" stroke="#F7F3EB" strokeWidth="2" />

          <path d="M640 388 L 688 388 L 704 548 L 672 548 L 682 626 L 636 630 L 628 548 L 650 548 Z" fill="#E4D9C8" />
          <path d="M632 614 L 646 656 L 686 656 L 676 614 Z" fill="#1C2126" />
          <path d="M658 620 V 650" stroke="#F7F3EB" strokeWidth="2" />

          <path
            d="M190 248 C 260 198, 420 186, 580 190 C 730 194, 840 220, 888 268 C 930 310, 944 370, 924 430 C 900 492, 820 524, 700 520 L 300 528 C 200 530, 136 468, 140 380 C 144 300, 156 258, 190 248 Z"
            fill="url(#ox-span-chiana-hide)"
          />
          <path d="M260 430 C 420 500, 700 490, 900 400 L 880 460 C 680 530, 400 530, 250 470 Z" fill="#E4D9C8" opacity="0.75" />

          <path d="M200 410 L 275 400 L 262 515 L 205 548 L 220 628 L 166 634 L 150 540 L 198 500 Z" fill="#F7F3EB" />
          <path d="M162 616 L 176 660 L 218 660 L 208 616 Z" fill="#1C2126" />
          <path d="M188 622 V 654" stroke="#F7F3EB" strokeWidth="2.2" />

          <path d="M720 400 L 788 386 L 830 500 L 862 522 L 878 618 L 822 626 L 808 534 L 774 512 L 742 430 Z" fill="#F7F3EB" />
          <path d="M818 606 L 832 652 L 874 652 L 864 606 Z" fill="#1C2126" />
          <path d="M846 614 V 646" stroke="#F7F3EB" strokeWidth="2.2" />

          <path d="M820 240 L 940 118 L 990 156 L 910 292 L 824 324 Z" fill="#F7F3EB" />
          <path d="M900 230 L 852 350 L 940 384 L 986 246 Z" fill="#E4D9C8" />
          <path d="M840 220 C 920 150, 1010 128, 1036 156 C 970 168, 890 200, 848 246 Z" fill="#E7DDD0" />

          <path d="M930 108 L 1088 148 C 1128 184, 1122 246, 1072 274 L 960 250 L 908 168 Z" fill="#F7F3EB" />
          <path d="M1048 160 L 1120 196 L 1104 266 L 1024 240 Z" fill="#2A3036" />
          <ellipse cx="1094" cy="220" rx="9" ry="6" fill="#0E1114" />
          <ellipse cx="1090" cy="218" rx="2.5" ry="1.5" fill="#9AA3AB" />
          <path d="M1048 258 C 1076 272, 1100 264, 1094 252" stroke="#0E1114" strokeWidth="2.4" fill="none" strokeLinecap="round" />
          <ellipse cx="990" cy="168" rx="14" ry="11" fill="#1A140F" />
          <ellipse cx="995" cy="165" rx="3.4" ry="2.6" fill="#F6F1E8" />
          <path d="M940 130 L 868 96 L 882 168 Z" fill="#F7F3EB" />
          <path d="M928 132 L 888 112 L 896 156 Z" fill="#E4B8AE" />

          <path d="M948 100 C 934 40, 1000 4, 1044 40 C 1000 34, 968 68, 974 108 Z" fill="#E7D3A8" />
          <path d="M1020 14 C 1048 0, 1064 32, 1040 46 C 1026 32, 1018 20, 1020 14 Z" fill="#1C2126" />
          <path d="M980 96 C 1024 28, 1120 0, 1152 42 C 1090 32, 1030 72, 1010 112 Z" fill="#E7D3A8" />
          <path d="M1128 8 C 1158 0, 1172 36, 1144 50 C 1130 34, 1124 18, 1128 8 Z" fill="#1C2126" />

          <defs>
            <linearGradient id="ox-span-chiana-hide" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#FFFcf6" />
              <stop offset="0.55" stopColor="#F3EEE4" />
              <stop offset="1" stopColor="#E3D8C8" />
            </linearGradient>
          </defs>
        </motion.svg>
        <motion.span
          className="ox-span-chiana-scan"
          aria-hidden="true"
          animate={{ top: ['8%', '88%', '8%'] }}
          transition={{ duration: 8.5, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>
    </article>
  )
}
