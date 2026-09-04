import './osteology.css'

import { motion } from 'framer-motion'

const cervicals = Array.from({ length: 7 }, (_, i) => ({
  x: 298 + i * 7,
  y: 214 + i * 6,
  rot: 62 - i * 3,
}))

const thX = (i) => 350 + i * 18.2
const bow = [2, 8, 16, 24, 30, 34, 36, 34, 30, 24, 16, 8, 2]
const thY = (i) => 250 - bow[i]
const procH = [30, 44, 58, 70, 80, 86, 88, 84, 76, 64, 50, 38, 28]

const ribs = Array.from({ length: 13 }, (_, i) => {
  const sx = thX(i) - 2
  const sy = thY(i) + 10
  const ex = sx + 6 + i * 1.5
  const ey = 348 + i * 4
  return `M${sx},${sy} C${sx + 20},${sy + 45} ${ex + 18},${ey - 48} ${ex},${ey}`
})

const lumbars = Array.from({ length: 6 }, (_, i) => 584 + i * 16)

const caudals = Array.from({ length: 8 }, (_, i) => ({
  x: 706 + i * 4,
  y: 262 + i * 10,
}))

const labels = [
  { text: 'Os cornu · horn core', line: 'M238,140 L150,60 L100,60', tx: 24, ty: 64 },
  { text: 'Mandibula', line: 'M150,262 L70,262', tx: 16, ty: 266 },
  { text: 'Costae · 13 pairs', line: 'M392,382 L180,420 L120,420', tx: 40, ty: 424 },
  { text: 'Processus spinosus', line: 'M440,170 L440,110 L480,110', tx: 486, ty: 114 },
  { text: 'Scapula', line: 'M372,290 L452,320', tx: 458, ty: 324 },
  { text: 'Femur', line: 'M692,320 L756,300', tx: 762, ty: 304 },
  { text: 'Metatarsus', line: 'M716,486 L762,486', tx: 768, ty: 490 },
]

const bone = '#EDE7D3'
const ink = '#20263A'

export default function Osteology() {
  return (
    <div className="th-ox-epoch ox-epoch-o-page">
      <header className="ox-epoch-o-head">
        <p className="ox-epoch-o-kicker">Comparative Anatomy · Bos taurus</p>
        <h1 className="ox-epoch-o-h1">The Frame Beneath the Hide</h1>
      </header>

      <figure className="ox-epoch-o-plate">
        <svg
          className="ox-epoch-o-art"
          viewBox="0 0 920 600"
          aria-hidden="true"
          preserveAspectRatio="xMidYMid meet"
        >
          <motion.path
            d="M108,238 C100,224 102,212 112,206 C126,198 142,194 156,193 C168,180 186,172 206,166 C244,156 300,150 344,150 C420,150 500,154 560,162 C604,168 642,176 666,186 C688,194 704,206 710,222 C714,242 710,264 700,282 L700,470 L676,470 L676,318 C660,312 640,310 620,310 L620,470 L596,470 L596,310 C520,304 440,302 400,304 L406,304 L406,470 L382,470 L382,306 C350,302 320,298 300,290 L326,290 L326,470 L302,470 L302,288 C280,280 258,268 244,256 C232,262 216,266 200,264 C184,262 168,258 154,252 C140,248 124,244 112,240 C106,240 106,239 108,238 Z"
            fill="rgba(122,135,168,0.06)"
            stroke="#5A6688"
            strokeWidth="2"
            strokeDasharray="7 8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.6, delay: 0.2 }}
          />

          <motion.g
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.5 }}
          >
            <path
              d="M100,240 C94,232 96,222 106,218 C122,212 140,209 158,208 C166,194 180,184 198,180 C222,175 246,175 262,180 C276,184 284,194 286,206 C288,222 282,236 270,244 C256,252 240,254 224,252 C202,254 180,256 160,257 C140,258 122,258 112,256 C104,254 98,248 100,240 Z"
              fill={bone}
              stroke={ink}
              strokeWidth="2.5"
            />
            <g transform="translate(16,4)" opacity="0.9">
              <path
                d="M256,186 C238,166 226,142 224,118 C223,109 232,107 235,117 C240,143 254,166 278,184 Z"
                fill="#D9D2BD"
                stroke={ink}
                strokeWidth="2.5"
                strokeLinejoin="round"
              />
            </g>
            <path
              d="M256,186 C238,166 226,142 224,118 C223,109 232,107 235,117 C240,143 254,166 278,184 Z"
              fill={bone}
              stroke={ink}
              strokeWidth="2.5"
              strokeLinejoin="round"
            />
            <g fill="none" stroke={ink} strokeWidth="1.6" strokeLinecap="round">
              <path d="M234,150 Q241,146 248,144" />
              <path d="M243,166 Q251,161 258,159" />
              <path d="M252,178 Q260,173 268,171" />
            </g>
            <circle cx="234" cy="224" r="8" fill="none" stroke={ink} strokeWidth="6" />
            <path
              d="M104,258 C126,252 150,252 174,256 C196,260 218,262 238,260 L240,272 C218,274 194,272 172,268 C152,264 130,264 114,268 C108,270 102,266 104,258 Z"
              fill={bone}
              stroke={ink}
              strokeWidth="2.5"
            />

            {cervicals.map((c, i) => (
              <rect
                key={i}
                x={c.x - 9}
                y={c.y - 5}
                width="18"
                height="10"
                rx="4"
                transform={`rotate(${c.rot} ${c.x} ${c.y})`}
                fill={bone}
                stroke={ink}
                strokeWidth="2"
              />
            ))}

            {Array.from({ length: 13 }, (_, i) => (
              <g key={i}>
                <path
                  d={`M${thX(i) - 4},${thY(i)} L${thX(i) - 1},${thY(i) - procH[i]} L${thX(i) + 4},${thY(i) - procH[i] - 2} L${thX(i) + 6},${thY(i)} Z`}
                  fill={bone}
                  stroke={ink}
                  strokeWidth="1.6"
                />
                <rect
                  x={thX(i) - 8}
                  y={thY(i) - 5}
                  width="16"
                  height="11"
                  rx="3"
                  fill={bone}
                  stroke={ink}
                  strokeWidth="2"
                />
                <path d={ribs[i]} fill="none" stroke={bone} strokeWidth="5.5" strokeLinecap="round" />
              </g>
            ))}

            {lumbars.map((lx, i) => (
              <g key={i}>
                <rect x={lx - 9} y="236" width="18" height="12" rx="3" fill={bone} stroke={ink} strokeWidth="2" />
                <rect x={lx - 14} y="238" width="28" height="6" rx="3" fill={bone} stroke={ink} strokeWidth="1.6" />
              </g>
            ))}

            <path d="M668,238 L700,236 L706,258 L678,264 Z" fill={bone} stroke={ink} strokeWidth="2.5" strokeLinejoin="round" />
            <path
              d="M642,228 C650,206 668,192 690,188 C704,188 710,198 704,212 C696,230 682,248 666,262 C658,250 648,238 642,228 Z"
              fill={bone}
              stroke={ink}
              strokeWidth="2.5"
            />
            <path d="M690,280 L716,292 L708,312 L682,298 Z" fill={bone} stroke={ink} strokeWidth="2.5" strokeLinejoin="round" />
            <circle cx="682" cy="272" r="8" fill="none" stroke={ink} strokeWidth="6" />

            {caudals.map((c, i) => (
              <circle key={i} cx={c.x} cy={c.y} r={4.5} fill={bone} stroke={ink} strokeWidth="1.6" />
            ))}

            <path d="M342,238 C366,246 380,272 374,304 C370,326 360,338 350,334 C354,304 348,268 336,244 Z" fill={bone} stroke={ink} strokeWidth="2.5" strokeLinejoin="round" />
            <path d="M362,330 L378,386" stroke={bone} strokeWidth="12" strokeLinecap="round" />
            <path d="M378,386 L366,444" stroke={bone} strokeWidth="10" strokeLinecap="round" />
            <circle cx="366" cy="450" r="7" fill={bone} stroke={ink} strokeWidth="2" />
            <path d="M366,458 L362,520" stroke={bone} strokeWidth="8" strokeLinecap="round" />
            <path d="M352,520 L376,520 L372,540 L356,540 Z" fill={bone} stroke={ink} strokeWidth="2" strokeLinejoin="round" />

            <g opacity="0.62">
              <path d="M410,320 L398,386" stroke={bone} strokeWidth="10" strokeLinecap="round" />
              <path d="M398,386 L390,448" stroke={bone} strokeWidth="8" strokeLinecap="round" />
              <path d="M390,456 L386,518" stroke={bone} strokeWidth="7" strokeLinecap="round" />
              <path d="M376,518 L398,518 L394,536 L380,536 Z" fill={bone} stroke={ink} strokeWidth="2" strokeLinejoin="round" />
            </g>

            <path d="M682,274 L698,358" stroke={bone} strokeWidth="13" strokeLinecap="round" />
            <path d="M700,364 L710,432" stroke={bone} strokeWidth="10" strokeLinecap="round" />
            <circle cx="712" cy="438" r="7" fill={bone} stroke={ink} strokeWidth="2" />
            <path d="M714,446 L718,518" stroke={bone} strokeWidth="8" strokeLinecap="round" />
            <path d="M708,518 L732,518 L728,538 L712,538 Z" fill={bone} stroke={ink} strokeWidth="2" strokeLinejoin="round" />

            <g opacity="0.62">
              <path d="M706,320 L730,400" stroke={bone} strokeWidth="10" strokeLinecap="round" />
              <path d="M730,400 L738,452" stroke={bone} strokeWidth="8" strokeLinecap="round" />
              <path d="M740,460 L744,516" stroke={bone} strokeWidth="7" strokeLinecap="round" />
              <path d="M734,516 L756,516 L752,534 L738,534 Z" fill={bone} stroke={ink} strokeWidth="2" strokeLinejoin="round" />
            </g>

            <path d="M334,326 L346,412" stroke={bone} strokeWidth="13" strokeLinecap="round" />
          </motion.g>

          {labels.map((l, i) => {
            const [mx, my] = l.line.replace('M', '').split(' ')[0].split(',').map(Number)
            return (
              <motion.g
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 1.4 + i * 0.22 }}
              >
                <motion.path
                  d={l.line}
                  fill="none"
                  stroke="#7A87A8"
                  strokeWidth="1.4"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.8, delay: 1.4 + i * 0.22 }}
                />
                <circle cx={mx} cy={my} r="3" fill="#7A87A8" />
                <text x={l.tx} y={l.ty} className="ox-epoch-o-lbl">
                  {l.text}
                </text>
              </motion.g>
            )
          })}
        </svg>

        <div className="ox-epoch-o-tag" role="note" aria-label="Signature">
          <span className="ox-epoch-o-tagpin" aria-hidden="true" />
          <span className="ox-epoch-o-tagno">Spec. 1897 · Bovidae</span>
          <span className="ox-epoch-o-tagsig">SET 02 · DESIGNED BY OMEN ALPHA</span>
        </div>

        <figcaption className="ox-epoch-o-cap">
          Lateral view, adult draught ox · c. 650 kg live weight
        </figcaption>
      </figure>

      <footer className="ox-epoch-o-facts">
        <div><span>13</span>pairs of ribs</div>
        <div><span>7</span>cervical vertebrae</div>
        <div><span>≈ 90</span>kilograms of bone</div>
      </footer>
    </div>
  )
}
