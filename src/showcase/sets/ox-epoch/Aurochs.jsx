import './aurochs.css'

import { motion } from 'framer-motion'

const speckles = [
  [70, 90, 2], [130, 60, 1.5], [250, 46, 2], [420, 30, 1.5], [600, 52, 2],
  [760, 40, 1.5], [840, 120, 2], [810, 300, 1.5], [850, 430, 2], [90, 300, 1.5],
  [60, 460, 2], [320, 500, 1.5], [520, 486, 2], [700, 500, 1.5], [180, 130, 1],
  [660, 90, 1], [400, 60, 1],
]

const bodyPath = `M88,240
C82,226 86,212 96,206
C108,198 128,193 148,192
C166,180 184,172 204,168
C238,156 272,146 300,140
C324,134 348,134 364,144
C396,150 432,158 468,162
C518,166 562,164 600,168
C624,170 642,176 654,182
C666,188 670,198 668,210
C666,232 656,250 642,264
C624,276 604,282 584,284
C540,290 484,290 436,286
C388,282 340,274 300,266
C266,258 240,248 224,238
C214,232 206,228 200,226
C198,246 184,260 166,262
C142,264 106,254 88,240 Z`

const hornPath = 'M200,172 C166,172 130,166 98,148 C104,160 124,168 146,172 C168,176 188,182 200,192 Z'
const hornFarPath = 'M214,156 C186,150 154,140 124,122 C130,134 150,144 172,152 C188,157 202,157 214,160 Z'

function Hand({ x, y, rot, tone }) {
  return (
    <g transform={`translate(${x} ${y}) rotate(${rot})`}>
      <path
        d="M0,-10 C-7,-10 -11,-4 -11,4 L-11,16 C-11,24 -7,30 0,31 C7,30 11,24 11,16 L11,4 C11,-4 7,-10 0,-10 Z"
        fill={tone}
      />
      <rect x="-11" y="-26" width="4.6" height="16" rx="2.3" fill={tone} />
      <rect x="-5.4" y="-30" width="4.6" height="20" rx="2.3" fill={tone} />
      <rect x="0.6" y="-29" width="4.6" height="19" rx="2.3" fill={tone} />
      <rect x="6.6" y="-23" width="4.6" height="13" rx="2.3" fill={tone} />
      <path d="M11,4 C17,2 21,4 22,9 C22,13 19,16 13,17 L11,17 Z" fill={tone} />
    </g>
  )
}

export default function Aurochs() {
  return (
    <div className="th-ox-epoch ox-epoch-a-page">
      <div className="ox-epoch-a-stage">
        <svg
          className="ox-epoch-a-art"
          viewBox="0 0 880 540"
          aria-hidden="true"
          preserveAspectRatio="xMidYMid meet"
        >
          <defs>
            <radialGradient id="ox-epoch-torch" cx="38%" cy="42%" r="58%">
              <stop offset="0%" stopColor="#E8A25E" stopOpacity="0.42" />
              <stop offset="52%" stopColor="#B4551D" stopOpacity="0.10" />
              <stop offset="100%" stopColor="#1E0E06" stopOpacity="0" />
            </radialGradient>
          </defs>

          <rect x="0" y="0" width="880" height="540" fill="#241107" />
          <g className="ox-epoch-a-cracks" stroke="#160A04" strokeWidth="2" fill="none">
            <path d="M60,30 L118,110 L104,180 L150,250" />
            <path d="M820,20 L790,120 L830,190" />
            <path d="M40,480 L110,430 L170,450" />
            <path d="M700,510 L740,440 L810,470" />
          </g>
          {speckles.map(([x, y, r], i) => (
            <circle key={i} cx={x} cy={y} r={r} fill="#170903" opacity="0.7" />
          ))}
          <Hand x={790} y={110} rot={-14} tone="rgba(20,9,4,0.85)" />
          <Hand x={110} y={452} rot={18} tone="rgba(20,9,4,0.7)" />
          <motion.rect
            x="0"
            y="0"
            width="880"
            height="540"
            fill="url(#ox-epoch-torch)"
            className="ox-epoch-a-torch"
          />

          <g transform="translate(636 322) scale(0.28)">
            <g className="ox-epoch-a-herd">
              <path
                d={`${bodyPath}
                ${hornPath}
                M262,266 C256,300 248,340 246,374 C245,392 246,406 248,416 L266,416 C265,400 265,378 266,354 C267,326 270,296 276,272 Z
                M636,272 C644,300 650,336 650,366 C650,388 648,404 646,416 L630,416 C632,398 632,376 630,352 C628,324 626,296 622,276 Z`}
                fill="#8E4517"
                stroke="#3A1B09"
                strokeWidth="12"
                strokeLinejoin="round"
              />
            </g>
          </g>

          <g>
            <path
              d="M304,268 C308,306 312,352 310,414 L326,414 C328,360 324,310 318,274 Z"
              fill="#A94E19"
              stroke="#3A1B09"
              strokeWidth="7"
              strokeLinejoin="round"
            />
            <path
              d="M594,280 C588,320 584,368 588,414 L604,414 C602,372 606,326 612,288 Z"
              fill="#A94E19"
              stroke="#3A1B09"
              strokeWidth="7"
              strokeLinejoin="round"
            />
            <motion.path
              d={bodyPath}
              fill="#B4551D"
              stroke="#3A1B09"
              strokeWidth="9"
              strokeLinejoin="round"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.4, delay: 0.3 }}
            />
            <motion.path
              d={hornPath}
              fill="#B4551D"
              stroke="#3A1B09"
              strokeWidth="7"
              strokeLinejoin="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.9, delay: 1.2 }}
            />
            <motion.path
              d={hornFarPath}
              fill="#9E4817"
              stroke="#3A1B09"
              strokeWidth="7"
              strokeLinejoin="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.9, delay: 1.5 }}
            />
            <path
              d="M222,190 C234,184 246,182 254,187 C247,195 234,198 224,195 Z"
              fill="#B4551D"
              stroke="#3A1B09"
              strokeWidth="6"
              strokeLinejoin="round"
            />
            <motion.path
              d="M262,266 C256,300 248,340 246,374 C245,392 246,406 248,416 L266,416 C265,400 265,378 266,354 C267,326 270,296 276,272 Z"
              fill="#B4551D"
              stroke="#3A1B09"
              strokeWidth="7"
              strokeLinejoin="round"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.7 }}
            />
            <motion.path
              d="M636,272 C644,300 650,336 650,366 C650,388 648,404 646,416 L630,416 C632,398 632,376 630,352 C628,324 626,296 622,276 Z"
              fill="#B4551D"
              stroke="#3A1B09"
              strokeWidth="7"
              strokeLinejoin="round"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.9 }}
            />
            <path
              d="M664,196 C678,240 676,290 664,328"
              fill="none"
              stroke="#B4551D"
              strokeWidth="9"
              strokeLinecap="round"
            />
            <path
              d="M664,324 L676,342 L664,360 L652,342 Z"
              fill="#B4551D"
              stroke="#3A1B09"
              strokeWidth="6"
              strokeLinejoin="round"
            />
            <circle cx="162" cy="208" r="6" fill="#2A1206" />
            <path d="M100,226 C96,232 98,238 104,240" stroke="#2A1206" strokeWidth="4" fill="none" strokeLinecap="round" />
            <g stroke="#7A3512" strokeWidth="5" fill="none" opacity="0.4" strokeLinecap="round">
              <path d="M320,158 C356,152 392,152 424,156" />
              <path d="M560,206 C596,212 626,220 646,228" />
              <path d="M470,248 C510,252 550,252 586,250" />
              <path d="M606,236 C620,254 628,272 630,288" />
            </g>
            <g className="ox-epoch-a-breath">
              <circle cx="84" cy="230" r="10" fill="#E8A25E" opacity="0.25" />
              <circle cx="64" cy="222" r="7" fill="#E8A25E" opacity="0.18" />
              <circle cx="48" cy="214" r="5" fill="#E8A25E" opacity="0.12" />
            </g>
          </g>
        </svg>

        <div className="ox-epoch-a-copy">
          <p className="ox-epoch-a-kicker">Hall of the Bulls · c. 17,000 BP</p>
          <h1 className="ox-epoch-a-h1">
            Bos <span>primigenius</span>
          </h1>
          <p className="ox-epoch-a-lede">
            Before it was ever ours, the ox was the largest animal humans looked at and decided
            to follow. Painters of the Ice Age climbed into the dark to fix its hump and its
            forward horns on limestone — the first portrait we ever made of an animal we could
            not tame.
          </p>
          <dl className="ox-epoch-a-facts">
            <div>
              <dt>Shoulder height, bull</dt>
              <dd>1.8 m</dd>
            </div>
            <div>
              <dt>Horn span, core to core</dt>
              <dd>0.8 m</dd>
            </div>
            <div>
              <dt>Last of the wild line</dt>
              <dd>1627 CE</dd>
            </div>
          </dl>
          <p className="ox-epoch-a-note">
            In 1627 the last aurochs died on a game reserve near Jaktorów, Poland. Every ox
            alive today is its descendant — the wildness bred out, the silhouette kept.
          </p>
        </div>

        <div className="ox-epoch-a-sig" role="note" aria-label="Signature">
          <svg viewBox="0 0 44 44" aria-hidden="true">
            <g fill="#B4551D" opacity="0.85">
              <rect x="19" y="4" width="6" height="9" rx="3" />
              <rect x="10" y="7" width="6" height="8" rx="3" />
              <rect x="28" y="6" width="6" height="7" rx="3" />
              <path d="M14,18 L30,18 C33,24 33,32 30,38 L14,38 C11,32 11,24 14,18 Z" />
            </g>
          </svg>
          <span>SET 01 · DESIGNED BY OMEN ALPHA</span>
        </div>
      </div>
    </div>
  )
}
