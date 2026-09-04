import './apis.css'

import { motion } from 'framer-motion'
const stars = [
  [120, 90], [220, 60], [320, 110], [560, 60], [640, 100], [840, 80],
  [90, 210], [880, 200], [180, 300], [820, 330],
]

const glyphs = [
  { d: 'M0,0 C-5,-8 5,-16 10,-8 C14,-2 10,6 0,8 M0,8 L0,26 M-7,14 L7,14' },
  { d: 'M-8,0 C-2,-6 8,-6 12,0 C8,4 2,6 -4,4 M2,4 L2,20' },
  { d: 'M0,18 L0,-2 M0,4 L8,-6 M0,4 L-8,-6 M0,12 L8,2 M0,12 L-8,2' },
  { d: 'M-10,0 L-4,6 L2,0 L8,6 L14,0' },
  { d: 'M0,-9 A9,9 0 1,1 -0.1,-9 M0,0 L0,10' },
  { d: 'M-6,-10 C-10,-2 -10,6 -4,12 M6,-10 C10,-2 10,6 4,12 M0,-10 L0,12' },
]

export default function Apis() {
  return (
    <div className="th-ox-epoch ox-epoch-y-page">
      <svg
        className="ox-epoch-y-art"
        viewBox="0 0 960 640"
        aria-hidden="true"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="ox-epoch-lapis" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#0D1F4E" />
            <stop offset="60%" stopColor="#152E63" />
            <stop offset="100%" stopColor="#1B3E7A" />
          </linearGradient>
          <radialGradient id="ox-epoch-disk" cx="50%" cy="42%" r="60%">
            <stop offset="0%" stopColor="#F4D374" />
            <stop offset="70%" stopColor="#D9AE45" />
            <stop offset="100%" stopColor="#B0832B" />
          </radialGradient>
        </defs>

        <rect width="960" height="640" fill="url(#ox-epoch-lapis)" />

        {stars.map(([x, y], i) => (
          <path
            key={i}
            className="ox-epoch-y-star"
            style={{ animationDelay: `${(i % 5) * 1.3}s` }}
            transform={`translate(${x} ${y})`}
            d="M0,-6 L1.6,-1.6 L6,0 L1.6,1.6 L0,6 L-1.6,1.6 L-6,0 L-1.6,-1.6 Z"
            fill="#E8C86A"
            opacity="0.7"
          />
        ))}

        <g className="ox-epoch-y-wingedsun" transform="translate(480 84)">
          <path d="M-26,0 C-58,-12 -96,-12 -128,2 C-96,4 -64,10 -40,12 C-46,8 -50,4 -50,2 C-38,4 -30,2 -26,0 Z" fill="#D9AE45" opacity="0.9" />
          <path d="M26,0 C58,-12 96,-12 128,2 C96,4 64,10 40,12 C46,8 50,4 50,2 C38,4 30,2 26,0 Z" fill="#D9AE45" opacity="0.9" />
          <circle r="24" fill="url(#ox-epoch-disk)" />
          <path d="M-22,10 C-12,16 12,16 22,10" stroke="#B0832B" strokeWidth="3" fill="none" />
        </g>

        <g className="ox-epoch-y-colonnade" stroke="#D9B36A" strokeWidth="3" fill="none" opacity="0.75">
          <g>
            <path d="M58,190 L58,470 M76,182 L76,470 M94,190 L94,470" />
            <path d="M58,190 C52,174 46,166 40,160 M76,182 C70,160 66,150 60,142 M76,182 C76,158 76,146 76,138 M76,182 C82,160 86,150 92,142 M94,190 C100,174 106,166 112,160" />
            <path d="M48,470 L104,470" />
          </g>
          <g>
            <path d="M866,190 L866,470 M884,182 L884,470 M902,190 L902,470" />
            <path d="M866,190 C860,174 854,166 848,160 M884,182 C878,160 874,150 868,142 M884,182 C884,158 884,146 884,138 M884,182 C890,160 894,150 900,142 M902,190 C908,174 914,166 920,160" />
            <path d="M856,470 L912,470" />
          </g>
        </g>

        <g className="ox-epoch-y-rays">
          {Array.from({ length: 12 }, (_, i) => (
            <path
              key={i}
              transform={`rotate(${i * 30} 700 148)`}
              d="M700,92 L700,78"
              stroke="#E8C86A"
              strokeWidth="3"
              strokeLinecap="round"
              opacity="0.55"
            />
          ))}
        </g>
        <circle cx="700" cy="148" r="42" fill="url(#ox-epoch-disk)" />

        <g className="ox-epoch-y-bull">
          <path
            d="M574,352 L570,468 L584,468 L588,352 Z"
            fill="#0B0B10"
            opacity="0.85"
          />
          <path
            d="M428,360 C440,396 452,436 456,468 L470,468 C466,434 452,392 442,358 Z"
            fill="#0B0B10"
            opacity="0.85"
          />
          <path
            d="M664,198 C668,210 676,222 688,230 C704,240 722,248 736,254 C746,258 750,264 746,270 C742,276 732,276 722,274 C706,278 690,276 678,268 C666,260 660,246 658,232 C656,218 658,206 664,198 Z"
            fill="#0B0B10"
          />
          <path
            d="M656,266 C648,290 640,312 638,336 C634,356 628,366 616,372 C580,384 500,390 440,388 C380,386 330,380 300,368 C282,360 274,344 276,322 C278,300 286,282 302,272 C340,254 400,250 470,252 C540,254 596,258 620,262 C636,264 650,264 656,266 Z"
            fill="#0B0B10"
          />
          <path
            d="M664,202 C640,196 622,182 616,160 C612,144 616,128 628,118 C624,136 628,152 640,164 C652,176 664,184 672,192 Z"
            fill="#0B0B10"
          />
          <path
            d="M736,202 C760,196 778,182 784,160 C788,144 784,128 772,118 C776,136 772,152 760,164 C748,176 736,184 728,192 Z"
            fill="#0B0B10"
          />
          <path d="M688,198 L712,198 L700,228 Z" fill="#F2E7CE" stroke="#D9AE45" strokeWidth="1.5" />
          <path
            d="M694,196 C692,188 698,182 704,186 C709,190 707,196 702,198"
            stroke="#D9AE45"
            strokeWidth="2.5"
            fill="none"
            strokeLinecap="round"
          />
          <ellipse cx="700" cy="242" rx="5" ry="3.5" transform="rotate(14 700 242)" fill="#D9AE45" />
          <path d="M728,262 C724,266 724,272 728,274" stroke="#D9AE45" strokeWidth="3" fill="none" strokeLinecap="round" />

          <path
            d="M604,346 C616,380 632,420 648,452 C652,460 654,466 654,470 L668,470 C666,462 662,452 656,440 C642,412 630,378 622,348 Z"
            fill="#0B0B10"
          />
          <path
            d="M380,362 C372,396 366,436 368,468 L382,468 C382,438 388,400 394,366 Z"
            fill="#0B0B10"
          />

          <g fill="#D9AE45">
            <path d="M648,470 L672,470 L668,482 L652,482 Z" />
            <path d="M566,468 L586,468 L582,480 L570,480 Z" opacity="0.85" />
            <path d="M364,468 L384,468 L380,480 L368,480 Z" />
            <path d="M454,468 L472,468 L468,480 L458,480 Z" opacity="0.85" />
          </g>

          <path
            d="M288,300 C276,350 280,392 292,424"
            stroke="#0B0B10"
            strokeWidth="6"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M292,420 C284,436 284,454 292,466 C300,454 302,436 298,424 Z"
            fill="#D9AE45"
          />

          <path d="M610,294 C628,318 652,324 672,312" stroke="#D9AE45" strokeWidth="7" fill="none" strokeLinecap="round" opacity="0.85" />
          <path d="M616,302 C630,320 650,324 664,316" stroke="#D9AE45" strokeWidth="4" fill="none" strokeLinecap="round" opacity="0.6" />

          <g transform="translate(462 316)" stroke="#D9AE45" fill="none" strokeWidth="2.5" opacity="0.9">
            <path d="M-22,4 C-16,-10 -6,-16 0,-12 C6,-16 16,-10 22,4" />
            <path d="M-22,4 C-14,0 -8,0 0,2 M22,4 C14,0 8,0 0,2" opacity="0.7" />
            <ellipse cx="0" cy="6" rx="12" ry="8" fill="#0B0B10" />
            <circle cx="0" cy="-6" r="4" fill="#0B0B10" />
          </g>
        </g>

        <path
          d="M0,486 C160,474 340,478 520,474 C680,470 820,474 960,468 L960,640 L0,640 Z"
          fill="#C79A52"
          opacity="0.92"
        />
        <path
          d="M0,486 C160,474 340,478 520,474 C680,470 820,474 960,468"
          stroke="#8A6428"
          strokeWidth="3"
          fill="none"
          opacity="0.6"
        />
        <ellipse cx="500" cy="492" rx="230" ry="14" fill="#5B3D12" opacity="0.35" />

        <g
          transform="translate(480 600)"
          stroke="#E8C86A"
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
          opacity="0.8"
        >
          {glyphs.map((g, i) => (
            <path key={i} d={g.d} transform={`translate(${(i - 2.5) * 52} 0)`} />
          ))}
        </g>
      </svg>

      <div className="ox-epoch-y-copy">
        <p className="ox-epoch-y-kicker">Memphis · The Temple of Ptah</p>
        <h1 className="ox-epoch-y-h1">Apis, Bull of Memphis</h1>
        <p className="ox-epoch-y-lede">
          When an Apis died, Egypt wept for seventy days. Priests then searched the herds
          for a black bull carrying a white triangle on its brow — the next life of the
          god&rsquo;s word made flesh: fed on the best of the granaries, consulted as an
          oracle, buried under granite in the dark of Saqqara.
        </p>
        <dl className="ox-epoch-y-facts">
          <div>
            <dt>The marks</dt>
            <dd>triangle on the brow, vulture on the back, twin hairs in the tail</dd>
          </div>
          <div>
            <dt>The tomb</dt>
            <dd>Serapeum — galleries of granite sarcophagi, many tonnes each</dd>
          </div>
          <div>
            <dt>The mourning</dt>
            <dd>seventy days of public grief at every death</dd>
          </div>
        </dl>
      </div>

      <div className="ox-epoch-y-sig" role="note" aria-label="Signature">
        <span className="ox-epoch-y-sigknot" aria-hidden="true" />
        <span>SET 05 · DESIGNED BY OMEN ALPHA</span>
      </div>
    </div>
  )
}
