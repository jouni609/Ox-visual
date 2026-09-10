import { motion } from 'framer-motion'
import './bucolic.css'
import { hornPath } from './forms.js'

const ink = '#1f3049'
const cream = '#f3e3bd'

function Cloud({ className, y }) {
  return (
    <g className={className}>
      <g transform={`translate(0 ${y})`}>
        <path
          d="M0 40 C 0 20, 16 8, 36 8 C 44 -8, 68 -14, 84 -4 C 96 -16, 124 -14, 132 2 C 152 0, 166 14, 164 30 C 162 44, 148 52, 130 52 L 18 52 C 6 52, 0 48, 0 40 Z"
          fill="#f6ecd2"
        />
      </g>
    </g>
  )
}

function DistantOx() {
  return (
    <g transform="translate(150 455) scale(0.42)" fill="#3f6a31" stroke="#3f6a31" strokeWidth="10" strokeLinejoin="round">
      <path d="M0 60 C 10 30, 70 20, 130 22 C 186 24, 220 38, 226 62 C 232 86, 214 112, 178 118 C 130 126, 56 124, 26 114 C 2 106, -8 84, 0 60 Z" />
      <path d="M196 58 C 214 40, 240 34, 262 40 C 278 45, 286 58, 280 70 C 274 82, 250 84, 230 78 C 214 73, 202 66, 196 58 Z" />
      <path d="M244 36 C 252 16, 266 2, 284 -2 C 292 -4, 296 4, 288 10 C 274 20, 262 32, 256 42 Z" />
      <path d="M226 34 C 226 18, 232 4, 244 -6 C 250 -11, 258 -6, 252 2 C 244 12, 238 24, 236 36 Z" />
      <path d="M30 110 L 40 170 L 58 170 L 52 110 Z" />
      <path d="M70 114 L 76 166 L 90 166 L 86 112 Z" />
      <path d="M136 114 L 142 164 L 156 164 L 152 112 Z" />
      <path d="M170 112 L 178 168 L 196 168 L 190 110 Z" />
      <path d="M0 62 C -12 74, -18 92, -14 112" fill="none" strokeWidth="8" strokeLinecap="round" />
    </g>
  )
}

const grassBlades = [
  { x: 90, h: 52, lean: -14, d: 5.2, delay: 0 },
  { x: 170, h: 74, lean: 10, d: 6.1, delay: 0.6 },
  { x: 260, h: 46, lean: -8, d: 4.8, delay: 1.1 },
  { x: 340, h: 68, lean: 14, d: 5.7, delay: 0.3 },
  { x: 440, h: 56, lean: -12, d: 6.3, delay: 1.5 },
  { x: 540, h: 80, lean: 8, d: 5.1, delay: 0.9 },
  { x: 640, h: 50, lean: -10, d: 5.9, delay: 1.8 },
  { x: 720, h: 72, lean: 12, d: 4.9, delay: 0.4 },
  { x: 820, h: 58, lean: -14, d: 6.2, delay: 1.3 },
  { x: 1140, h: 76, lean: -9, d: 5.6, delay: 0.7 },
  { x: 1176, h: 54, lean: 13, d: 6.0, delay: 1.6 },
]

function Scene() {
  return (
    <svg className="ox-lexicon-bucolic-scene" viewBox="0 0 1200 760" role="img" aria-label="Flat-colour pasture with a grazing ox under a coral sun">
      <circle cx="992" cy="142" r="74" fill="#f6ecd2" />
      <circle className="ox-lexicon-bucolic-sun" cx="976" cy="152" r="72" fill="#e4572e" />

      <Cloud className="ox-lexicon-bucolic-cloud ox-lexicon-bucolic-cloud-a" y="60" />
      <Cloud className="ox-lexicon-bucolic-cloud ox-lexicon-bucolic-cloud-b" y="170" />
      <Cloud className="ox-lexicon-bucolic-cloud ox-lexicon-bucolic-cloud-c" y="360" />

      <path d="M0 470 C 200 380, 420 430, 640 400 C 860 370, 1050 420, 1200 380 L 1200 760 L 0 760 Z" fill="#6c9a4f" />
      <DistantOx />
      <path d="M0 540 C 240 470, 520 500, 760 520 C 980 538, 1100 560, 1200 540 L 1200 760 L 0 760 Z" fill="#5c8a45" />
      <path d="M0 620 C 300 590, 700 600, 1200 610 L 1200 760 L 0 760 Z" fill="#4f7c3c" />

      <g className="ox-lexicon-bucolic-grass" stroke="#3f6a31" strokeLinecap="round" fill="none">
        {grassBlades.map((b) => (
          <path
            key={`${b.x}-${b.h}`}
            className="ox-lexicon-bucolic-blade"
            d={`M${b.x} 620 C ${b.x + b.lean * 0.3} ${620 - b.h * 0.6}, ${b.x + b.lean} ${620 - b.h}, ${b.x + b.lean * 1.6} ${620 - b.h - 8}`}
            strokeWidth="5"
            style={{ '--blade-delay': `${b.delay}s`, '--blade-duration': `${b.d}s`, transformOrigin: `${b.x}px 620px` }}
          />
        ))}
      </g>

      <g stroke={ink} strokeWidth="5" strokeLinejoin="round">
        <g fill={cream} opacity="0.85">
          <path d="M898 542 C 900 564, 902 586, 904 600 L 934 600 C 932 584, 928 562, 922 540 Z" />
          <path d="M1028 542 C 1032 564, 1034 586, 1036 600 L 1064 600 C 1062 584, 1056 562, 1050 540 Z" />
        </g>
        <g className="ox-lexicon-bucolic-tail">
          <path d="M800 442 C 782 470, 774 510, 780 552" fill="none" strokeWidth="9" strokeLinecap="round" />
          <path d="M772 544 C 756 550, 750 572, 762 588 C 774 602, 796 598, 800 582 C 804 564, 790 542, 772 544 Z" fill={cream} />
        </g>
        <g fill={cream}>
          <path d={hornPath(1000, 402, 1046, 305, 40, 13, 50)} />
          <path d="M1034 426 C 1058 428, 1080 440, 1094 454 C 1084 464, 1062 460, 1048 448 C 1038 440, 1032 430, 1034 426 Z" />
        </g>
        <g transform="translate(0 14) rotate(40 1020 460)">
          <path d="M984 402 C 1018 396, 1056 396, 1088 406 C 1124 416, 1152 436, 1166 458 C 1180 470, 1182 484, 1174 496 C 1164 508, 1144 508, 1128 498 C 1110 488, 1096 480, 1088 476 C 1066 465, 1046 464, 1028 470 C 1008 477, 996 494, 990 516 C 984 538, 978 556, 964 562 C 952 567, 940 558, 940 542 C 940 518, 946 488, 944 464 C 942 440, 946 422, 954 412 C 962 405, 972 404, 984 402 Z" fill={cream} />
        </g>
        <path d="M800 470 C 812 432, 872 414, 946 416 C 1014 418, 1052 434, 1062 468 C 1072 502, 1052 538, 1008 548 C 952 560, 856 560, 820 548 C 790 538, 788 502, 800 470 Z" fill={cream} />
        <path d="M1040 470 C 1056 494, 1062 524, 1052 546 C 1040 566, 1016 566, 1006 550 C 996 532, 1002 496, 1018 476 C 1026 466, 1034 464, 1040 470 Z" fill={cream} stroke="none" />
        <path d="M812 452 C 848 434, 890 452, 898 492 C 904 524, 888 548, 856 550 C 826 552, 806 530, 804 500 C 802 480, 804 462, 812 452 Z" fill={cream} stroke="none" />
        <g fill={cream}>
          <path d="M832 540 C 826 564, 824 586, 826 602 L 862 602 C 864 584, 862 560, 856 538 Z" />
          <path d="M976 540 C 970 566, 968 588, 970 604 L 1006 604 C 1008 586, 1006 562, 1000 540 Z" />
        </g>
        <g fill={cream}>
          <path d={hornPath(1028, 420, 1090, 325, 54, 18, 55)} />
          <path d="M1056 438 C 1082 444, 1106 458, 1118 474 C 1106 484, 1082 480, 1066 466 C 1054 456, 1050 444, 1056 438 Z" />
        </g>
        <path d="M1004 496 C 1024 484, 1048 486, 1062 498" fill="none" strokeWidth="8" />
        <path d="M1004 522 C 1016 518, 1026 522, 1030 531 C 1034 541, 1026 553, 1012 553 C 998 553, 990 541, 994 531 C 996 526, 1000 524, 1004 522 Z" fill="#e4572e" strokeWidth="4" />
        <circle cx="1012" cy="548" r="3.5" fill={ink} stroke="none" />
        <circle cx="1104" cy="535" r="7" fill={cream} stroke="none" />
        <circle cx="1106" cy="536" r="4" fill={ink} stroke="none" />
      </g>

      <g stroke="#3f6a31" strokeWidth="5" strokeLinecap="round" fill="none">
        <path d="M1080 618 C 1076 594, 1068 580, 1064 572" />
        <path d="M1090 620 C 1092 596, 1098 582, 1104 574" />
      </g>
    </svg>
  )
}

const stanzas = [
  ['Sing the slow one, herdsman.', 'The hill is patient, and so is the shadow', 'that walks it down to stubble.'],
  ['Theocritus kept goats and a good ear.', 'Virgil kept a farm he hardly visited.', 'The ox keeps the honest part:', 'the step that turns a meadow into a road.'],
  ['So sit by the spring. Let the stream do the talking.', "The song was never the singer's."],
]

const facts = [
  { k: 'Idylls', v: 'Theocritus, 3rd century BC' },
  { k: 'Eclogues', v: 'Virgil, about 39 BC' },
  { k: 'boukolos', v: 'bous, ox, plus a keeper' },
]

export default function Bucolic() {
  return (
    <section className="ox-lexicon-bucolic">
      <div className="ox-lexicon-bucolic-sheet">
        <header className="ox-lexicon-bucolic-head">
          <div className="ox-lexicon-bucolic-head-left">
            <span className="ox-lexicon-bucolic-kicker">A city word for a country scene</span>
            <h1 className="ox-lexicon-bucolic-title">Bucolic</h1>
            <p className="ox-lexicon-bucolic-sub">
              Greek boukolos, a cowherd. The word for the countryside came with an animal inside it.
            </p>
          </div>
          <motion.div
            className="ox-lexicon-bucolic-colophon"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <span className="ox-lexicon-bucolic-colophon-offset" aria-hidden="true">
              SET 3 · DESIGNED BY DEEPSEEK FLASH
            </span>
            <span className="ox-lexicon-bucolic-colophon-text">SET 3 · DESIGNED BY DEEPSEEK FLASH</span>
            <span className="ox-lexicon-bucolic-colophon-sub">two passes, deliberately misregistered</span>
          </motion.div>
        </header>

        <Scene />

        <div className="ox-lexicon-bucolic-cols">
          <motion.blockquote
            className="ox-lexicon-bucolic-poem"
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            {stanzas.map((stanza, i) => (
              <p key={i} className="ox-lexicon-bucolic-stanza">
                {stanza.map((line) => (
                  <span key={line}>{line}</span>
                ))}
              </p>
            ))}
            <footer>new pastoral, after Theocritus</footer>
          </motion.blockquote>

          <motion.div
            className="ox-lexicon-bucolic-entry"
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="ox-lexicon-bucolic-minihead">Entry</h2>
            <p>
              Theocritus wrote his Idylls on Kos in the third century BC: herdsmen in the shade trading songs and
              insults while the animals ate. Virgil took the form to Latin and called his book Eclogues, selections.
              The countryside in the word was never neutral ground; it was somewhere a city poet could visit and
              leave. The ox stayed. Two thousand years later the adjective still promises green shade, running
              water, and a herd moving at eating speed.
            </p>
            <ul className="ox-lexicon-bucolic-facts">
              {facts.map((f) => (
                <li key={f.k}>
                  <span className="ox-lexicon-bucolic-fact-key">{f.k}</span>
                  <span className="ox-lexicon-bucolic-fact-val">{f.v}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
