import { motion } from 'framer-motion'
import './sakia.css'

function Cartouche() {
  return (
    <svg className="ox-yoke-sakia-cartouche" viewBox="0 0 380 64" aria-hidden="true">
      <path
        d="M30,6 L344,6 C356,6 366,18 366,32 C366,46 356,58 344,58 L30,58 C22,58 16,52 16,44 L16,20 C16,12 22,6 30,6 Z"
        fill="none"
        stroke="var(--s-gold)"
        strokeWidth="2.4"
      />
      <path d="M6,14 L6,50 M11,10 L11,54" stroke="var(--s-gold)" strokeWidth="2.4" strokeLinecap="round" />
      <text x="192" y="39" textAnchor="middle" fontSize="13.5" letterSpacing="2.6" fill="var(--s-gold)" fontFamily="'Space Grotesk', sans-serif" fontWeight="500">
        SET 3 · DESIGNED BY OMEN ALPHA
      </text>
    </svg>
  )
}

function Stars() {
  const stars = [
    [70, 60, 2], [150, 110, 1.6], [240, 50, 2.2], [330, 96, 1.5], [420, 44, 1.8],
    [500, 84, 1.4], [590, 40, 2], [680, 100, 1.6], [760, 56, 2.2], [840, 92, 1.5],
    [110, 160, 1.4], [300, 140, 1.5], [470, 128, 1.4], [640, 150, 1.6], [820, 150, 1.4],
  ]
  return (
    <g fill="var(--s-gold)" className="ox-yoke-sakia-stars">
      {stars.map(([x, y, r], i) => (
        <circle key={i} cx={x} cy={y} r={r} opacity={i % 3 === 0 ? 0.9 : 0.55} />
      ))}
    </g>
  )
}

function Buffalo() {
  return (
    <g>
      <path d="M652,318 C648,294 664,276 692,270 C724,263 764,264 786,274 C804,282 812,300 810,326 C808,352 798,372 774,378 L692,378 C670,378 656,366 654,344 Z" fill="var(--s-buffalo)" />
      <path d="M658,326 C656,352 662,372 684,378" fill="none" stroke="var(--s-gold)" strokeWidth="2" opacity="0.5" />
      <path d="M700,274 C690,258 694,238 712,228 C722,222 736,222 744,228 C736,238 732,250 734,262 Z" fill="var(--s-buffalo)" />
      <path d="M626,318 C610,314 596,320 588,332 L566,356 C558,366 562,378 574,382 L600,386 C614,388 626,380 630,368 L636,344 Z" fill="var(--s-buffalo)" />
      <path d="M672,314 C648,300 642,264 664,240 C648,266 650,296 672,318 Z" fill="var(--s-gold)" />
      <path d="M690,318 C672,300 668,268 686,246 C676,270 678,298 694,318 Z" fill="var(--s-gold)" opacity="0.85" />
      <path d="M634,340 C642,332 654,332 660,338 C652,344 642,346 634,340 Z" fill="var(--s-buffalo)" />
      <circle cx="618" cy="336" r="3.4" fill="var(--s-gold)" />
      <path d="M608,352 C602,368 604,384 612,394 C608,382 610,368 616,356 Z" fill="var(--s-buffalo)" />
      <g fill="var(--s-buffalo)">
        <path d="M676,376 L670,420 L688,420 L694,378 Z" />
        <path d="M702,376 L700,420 L718,420 L720,378 Z" />
        <path d="M760,374 L758,420 L776,420 L780,376 Z" />
        <path d="M786,372 L786,420 L804,420 L806,374 Z" />
      </g>
      <path d="M806,290 C816,306 818,336 812,366 L806,382" fill="none" stroke="var(--s-buffalo)" strokeWidth="6" strokeLinecap="round" />
      <path d="M800,378 C794,388 792,402 796,412 C800,404 804,392 808,384 Z" fill="var(--s-buffalo)" />
      <path d="M604,318 C640,300 690,290 740,290" fill="none" stroke="var(--s-gold)" strokeWidth="2" opacity="0.35" />
    </g>
  )
}

function Wheel() {
  const spokes = Array.from({ length: 8 }, (_, i) => i * 45)
  const pots = Array.from({ length: 9 }, (_, i) => 130 + i * 40)
  return (
    <g>
      <rect x="512" y="240" width="16" height="200" fill="var(--s-post)" />
      <path d="M484,444 L556,444 L562,456 L478,456 Z" fill="var(--s-post)" />

      <g className="ox-yoke-sakia-wheel" style={{ transformOrigin: '520px 246px' }}>
        <circle cx="520" cy="246" r="94" fill="none" stroke="var(--s-wood)" strokeWidth="7" />
        <circle cx="520" cy="246" r="80" fill="none" stroke="var(--s-wood)" strokeWidth="3" />
        {spokes.map((a) => (
          <line
            key={a}
            x1="520"
            y1="246"
            x2={520 + 92 * Math.cos((a * Math.PI) / 180)}
            y2={246 + 92 * Math.sin((a * Math.PI) / 180)}
            stroke="var(--s-wood)"
            strokeWidth="5"
          />
        ))}
        <circle cx="520" cy="246" r="10" fill="var(--s-gold)" />
      </g>

      <g className="ox-yoke-sakia-chain">
        {pots.map((y, i) => (
          <g key={i}>
            <path d={`M394,${y - 14} L394,${y}`} stroke="var(--s-rope)" strokeWidth="2" />
            <path
              d={`M382,${y} C380,${y + 16} 386,${y + 26} 394,${y + 26} C402,${y + 26} 408,${y + 16} 406,${y} Z`}
              fill="var(--s-terra)"
            />
            <ellipse cx={394} cy={y} rx="12" ry="4" fill="var(--s-terra-deep)" />
          </g>
        ))}
      </g>

      <path d="M382,152 L500,130 L508,150 L390,176 Z" fill="var(--s-wood)" />
      <path d="M388,172 C340,220 306,290 290,366" fill="none" stroke="var(--s-wood)" strokeWidth="9" strokeLinecap="round" />
      <path d="M378,184 C340,240 312,300 296,368" fill="none" stroke="var(--s-water-light)" strokeWidth="5" strokeLinecap="round" strokeDasharray="8 7" className="ox-yoke-sakia-stream" />
      <path d="M286,392 C230,402 170,408 120,412" fill="none" stroke="var(--s-water)" strokeWidth="6" strokeLinecap="round" />
      <ellipse cx="92" cy="424" rx="44" ry="10" fill="var(--s-water-light)" opacity="0.55" />

      <path d="M604,330 L560,300" stroke="var(--s-beam)" strokeWidth="7" strokeLinecap="round" />
      <path d="M562,304 C540,300 524,296 512,292" stroke="var(--s-beam)" strokeWidth="5" strokeLinecap="round" fill="none" />
    </g>
  )
}

const FACTS = [
  ['48', 'clay pots ride the chain'],
  ['4', 'cubits the water climbs'],
  ['1', 'ox keeps the wheel honest'],
]

export default function Sakia() {
  return (
    <div className="ox-yoke-sakia th-ox-yoke-sakia">
      <div className="ox-yoke-sakia-grid">
        <motion.div
          className="ox-yoke-sakia-text"
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="ox-yoke-sakia-kicker">SAQIYA · THE WATER NIGHT</p>
          <h1 className="ox-yoke-sakia-title">
            The Wheel That Drinks the River
          </h1>
          <p className="ox-yoke-sakia-lede">
            Every night the field calls for the river, and every night an ox walks the circle that
            answers. Pots of baked clay ride the wooden wheel down into the water and up again,
            spilling into the trough that feeds the field channel.
          </p>
          <p className="ox-yoke-sakia-body">
            No one remembers who first hitched a bull to a wheel. The fields remember every night
            since. Thirst is patient; the ox is more patient, and the wheel between them turns until
            the basins are full and the silt settles gold in the morning light.
          </p>
          <dl className="ox-yoke-sakia-facts">
            {FACTS.map(([n, label]) => (
              <div className="ox-yoke-sakia-fact" key={label}>
                <dt>{n}</dt>
                <dd>{label}</dd>
              </div>
            ))}
          </dl>
          <Cartouche />
        </motion.div>

        <motion.figure
          className="ox-yoke-sakia-plate"
          initial={{ opacity: 0, y: 34 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <svg className="ox-yoke-sakia-art" viewBox="0 0 900 560" aria-hidden="true">
            <rect x="0" y="0" width="900" height="560" fill="var(--s-night)" />
            <rect x="0" y="0" width="900" height="250" fill="var(--s-deep)" opacity="0.6" />
            <Stars />

            <circle cx="140" cy="120" r="46" fill="var(--s-moon)" opacity="0.9" />
            <circle cx="126" cy="112" r="40" fill="var(--s-night)" opacity="0.55" />

            <path d="M20,300 C60,286 100,286 140,300 L150,318 L20,318 Z" fill="var(--s-wall)" />
            <path d="M770,290 C800,280 830,280 856,292 L864,310 L770,310 Z" fill="var(--s-wall)" />
            <g fill="var(--s-palm)" opacity="0.9">
              <path d="M60,318 L64,240 M64,240 C48,234 40,220 42,206 C54,218 62,226 66,240 M64,240 C80,232 94,220 98,204 C86,218 76,228 68,240 M64,240 C64,222 68,206 78,196 C74,214 70,228 66,240" fill="none" stroke="var(--s-palm)" strokeWidth="4" strokeLinecap="round" />
            </g>

            <rect x="0" y="416" width="900" height="52" fill="var(--s-sand)" />
            <g stroke="var(--s-sand-deep)" strokeWidth="1.6" opacity="0.6">
              <path d="M30,436 L120,436 M210,448 L330,448 M420,438 L540,438 M640,450 L760,450 M790,436 L880,436" />
            </g>
            <rect x="0" y="468" width="900" height="92" fill="var(--s-water)" />
            <rect x="0" y="464" width="900" height="6" fill="var(--s-gold)" opacity="0.5" />
            <g stroke="var(--s-water-light)" strokeWidth="2" opacity="0.6">
              <path d="M60,500 L60,540 M140,492 L140,548 M300,502 L300,540 M470,494 L470,548 M640,502 L640,540 M810,494 L810,548" strokeDasharray="10 8" />
            </g>
            <rect x="478" y="468" width="84" height="92" fill="var(--s-gold)" opacity="0.14" />

            <Wheel />
            <g className="ox-yoke-sakia-buffalo">
              <Buffalo />
            </g>
          </svg>
        </motion.figure>
      </div>
    </div>
  )
}
