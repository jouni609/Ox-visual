import { motion } from 'framer-motion'
import './changthang.css'

export default function Changthang() {
  return (
    <article className="th-span-chang">
      <motion.div
        className="ox-span-chang-board"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <span className="ox-span-chang-rivet" aria-hidden="true" />
        <header className="ox-span-chang-copy">
          <p className="ox-span-chang-sign">SET 5 · DESIGNED BY GROK 4.7</p>
          <p className="ox-span-chang-kicker">Region · the northern plateau</p>
          <h1>Changthang</h1>
          <p className="ox-span-chang-lead">
            North of the Trans-Himalaya the herd that can stay is the yak, <em lang="la">Bos grunniens</em>. It winters above four thousand metres in three coats: a skirt of guard hair, a mid layer, and a down combed out in spring. The horns are short and black. The face runs pale against a dark body. In Tibetan the male is <span lang="bo">གཡག</span>.
          </p>
        </header>

        <div className="ox-span-chang-swatches">
          <div>
            <svg viewBox="0 0 80 90" aria-hidden="true">
              <path d="M40 8 C 30 30, 22 50, 18 82" stroke="#1a1614" strokeWidth="3" fill="none" />
              <path d="M40 8 C 40 34, 42 56, 44 84" stroke="#2a2420" strokeWidth="3" fill="none" />
              <path d="M40 8 C 52 32, 60 54, 66 80" stroke="#1a1614" strokeWidth="3" fill="none" />
            </svg>
            <strong>Guard</strong>
            <span>Sheds the snow</span>
          </div>
          <div>
            <svg viewBox="0 0 80 90" aria-hidden="true">
              <path d="M28 10 C 24 36, 22 58, 20 78" stroke="#4a4038" strokeWidth="2" fill="none" />
              <path d="M40 8 C 38 34, 40 58, 42 80" stroke="#3a322c" strokeWidth="2" fill="none" />
              <path d="M52 10 C 56 36, 58 58, 60 76" stroke="#4a4038" strokeWidth="2" fill="none" />
            </svg>
            <strong>Mid</strong>
            <span>The dense coat</span>
          </div>
          <div>
            <svg viewBox="0 0 80 90" aria-hidden="true">
              <path d="M32 16 C 30 40, 28 60, 26 78" stroke="#d7cfc4" strokeWidth="4" fill="none" />
              <path d="M44 14 C 46 40, 48 62, 50 80" stroke="#efe8de" strokeWidth="4" fill="none" />
              <path d="M38 12 C 36 36, 34 58, 36 76" stroke="#c9bfb2" strokeWidth="3" fill="none" />
            </svg>
            <strong>Down</strong>
            <span>Combed in spring</span>
          </div>
        </div>
      </motion.div>

      <div className="ox-span-chang-figure">
        <svg className="ox-span-chang-ox" viewBox="0 0 920 1040" preserveAspectRatio="xMidYMax meet" aria-hidden="true">
          <ellipse cx="460" cy="990" rx="250" ry="18" fill="#1a1614" opacity="0.14" />

          <path d="M720 560 C 820 600, 870 730, 820 820 C 780 880, 720 850, 740 790 C 770 710, 760 620, 710 580 Z" fill="#241C18" />

          <path d="M640 760 L 720 750 L 748 940 L 668 948 Z" fill="#1A1614" />
          <path d="M668 928 L 682 990 L 740 986 L 728 924 Z" fill="#11100E" />
          <path d="M700 936 V 980" stroke="#C4B5A4" strokeWidth="2" />

          <path d="M300 800 L 390 790 L 378 960 L 312 966 Z" fill="#1A1614" />
          <path d="M310 948 L 324 1008 L 376 1004 L 364 944 Z" fill="#11100E" />
          <path d="M342 956 V 998" stroke="#C4B5A4" strokeWidth="2" />

          <path d="M450 810 L 540 800 L 556 970 L 478 978 Z" fill="#221C18" />
          <path d="M478 958 L 492 1012 L 548 1008 L 536 954 Z" fill="#11100E" />
          <path d="M510 966 V 1004" stroke="#C4B5A4" strokeWidth="2" />

          <path d="M230 520 C 250 400, 400 360, 540 390 C 710 426, 800 530, 780 660 C 760 800, 640 860, 460 870 C 280 880, 190 760, 200 620 C 206 540, 214 530, 230 520 Z" fill="#1C1816" />
          <path d="M300 520 C 360 370, 520 330, 620 400 C 700 460, 680 580, 560 590 C 430 570, 320 560, 300 520 Z" fill="#2A221C" />

          <g className="ox-span-chang-skirt">
            <path d="M190 700 L 160 880 L 220 840 L 280 930 L 350 850 L 430 940 L 510 860 L 590 930 L 660 850 L 730 900 L 760 760 C 620 840, 360 850, 190 700 Z" fill="#14110F" />
          </g>
          <g className="ox-span-chang-skirt ox-span-chang-skirt-b">
            <path d="M230 780 C 220 840, 210 880, 200 910" stroke="#3A322C" strokeWidth="5" fill="none" strokeLinecap="round" />
            <path d="M360 800 C 350 860, 355 900, 348 930" stroke="#2A2420" strokeWidth="4" fill="none" />
            <path d="M520 790 C 530 850, 540 900, 530 940" stroke="#3A322C" strokeWidth="4" fill="none" />
            <path d="M650 770 C 670 830, 680 870, 668 910" stroke="#2A2420" strokeWidth="4" fill="none" />
          </g>

          <path d="M280 460 C 260 540, 300 640, 390 680 C 490 724, 620 700, 680 630 C 730 560, 700 460, 620 420 C 520 368, 340 380, 280 460 Z" fill="#C4B5A4" />
          <ellipse cx="470" cy="620" rx="86" ry="46" fill="#1A120E" />
          <ellipse cx="430" cy="616" rx="15" ry="10" fill="#0C0A08" />
          <ellipse cx="520" cy="618" rx="15" ry="10" fill="#0C0A08" />
          <ellipse cx="434" cy="612" rx="4" ry="2" fill="#5A4E46" />
          <path d="M440 658 H 520" stroke="#3A2A24" strokeWidth="4" strokeLinecap="round" />
          <path d="M450 670 C 430 710, 490 730, 530 700 C 500 716, 460 700, 450 670 Z" fill="#6A5C52" />

          <ellipse cx="360" cy="500" rx="18" ry="15" fill="#1A120E" />
          <ellipse cx="354" cy="495" rx="4.5" ry="3.5" fill="#F4EFE6" />
          <ellipse cx="590" cy="490" rx="17" ry="14" fill="#1A120E" />
          <ellipse cx="595" cy="485" rx="4" ry="3" fill="#F4EFE6" />

          <ellipse cx="250" cy="500" rx="46" ry="26" fill="#2A221C" />
          <ellipse cx="690" cy="485" rx="48" ry="26" fill="#2A221C" />

          <path d="M340 450 C 270 350, 160 280, 120 210 C 170 240, 250 310, 320 400 Z" fill="#14110F" />
          <path d="M120 210 C 104 180, 130 162, 156 186 C 142 198, 126 208, 120 210 Z" fill="#0E0C0A" />
          <path d="M560 440 C 650 330, 780 250, 850 190 C 800 220, 680 300, 590 400 Z" fill="#14110F" />
          <path d="M850 190 C 872 168, 860 150, 832 168 C 846 180, 854 190, 850 190 Z" fill="#0E0C0A" />

          <motion.ellipse
            cx="390"
            cy="620"
            rx="16"
            ry="9"
            fill="#d5dee2"
            animate={{ opacity: [0, 0.65, 0], x: [0, -24] }}
            transition={{ duration: 4.4, repeat: Infinity, ease: 'easeOut' }}
          />
        </svg>
      </div>
    </article>
  )
}
