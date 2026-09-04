import { motion } from 'framer-motion'
import './caravan.css'

function MiniYak({ x, s = 1, flip = false }) {
  return (
    <g transform={`translate(${x},0) scale(${flip ? -s : s},${s})`} fill="var(--c-ridge-ink)">
      <path d="M0,26 C-2,16 6,8 18,8 C30,8 38,14 40,24 C42,32 36,38 26,38 L10,38 C2,38 -2,34 0,26 Z" />
      <path d="M36,14 C42,10 50,10 54,14 L60,22 C62,26 60,30 54,30 L44,30 C38,30 36,26 36,22 Z" />
      <path d="M48,12 C46,4 52,-2 58,-2 C52,2 50,6 52,12 Z" fill="var(--c-horn-pale)" />
      <path d="M2,38 L0,52 L6,52 L8,38 Z M14,38 L14,52 L20,52 L20,38 Z M30,38 L30,52 L36,52 L36,38 Z" />
      <path d="M40,20 C46,24 46,32 42,38" fill="none" stroke="var(--c-ridge-ink)" strokeWidth="3" strokeLinecap="round" />
    </g>
  )
}

function HeroYak() {
  return (
    <g>
      <g className="ox-yoke-caravan-breath">
        <path d="M520,600 C500,594 484,596 470,606 M524,616 C506,614 492,620 482,630" fill="none" stroke="var(--c-breath)" strokeWidth="7" strokeLinecap="round" />
      </g>

      <path
        d="M690,470 C688,448 704,432 732,426 C768,418 836,416 876,424 C916,432 940,452 942,484 C944,516 936,552 912,572 L868,572 L868,586 C860,596 846,600 832,596 L826,572 L760,572 L758,590 C750,600 736,602 726,594 L724,572 L706,568 C690,556 686,530 688,502 Z"
        fill="var(--c-yak)"
      />
      <path
        d="M700,540 L706,560 L720,552 L730,572 L744,562 L754,580 L770,570 L780,588 L796,578 L808,594 L820,580 L834,594 L846,578 L860,590 L870,574 L884,584 L896,568"
        fill="none"
        stroke="var(--c-yak)"
        strokeWidth="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <g fill="var(--c-yak)">
        <path d="M730,570 L724,660 L746,660 L752,572 Z" />
        <path d="M760,572 L758,662 L780,662 L782,574 Z" />
        <path d="M866,572 L862,660 L884,660 L888,574 Z" />
        <path d="M896,570 L896,660 L918,660 L920,572 Z" />
      </g>
      <g fill="var(--c-hoof)">
        <rect x="722" y="654" width="28" height="14" rx="3" />
        <rect x="756" y="656" width="28" height="14" rx="3" />
        <rect x="860" y="654" width="28" height="14" rx="3" />
        <rect x="894" y="656" width="28" height="14" rx="3" />
      </g>

      <path
        d="M700,498 C678,494 658,502 644,518 L612,556 C600,570 606,588 624,592 L664,598 C684,601 700,592 706,576 L712,548 Z"
        fill="var(--c-yak)"
      />
      <path d="M622,566 C612,570 606,580 610,590 C618,594 630,592 636,584 Z" fill="var(--c-muzzle)" />
      <circle cx="656" cy="548" r="4" fill="var(--c-horn-pale)" />
      <path d="M656,516 C646,498 652,476 672,466 C662,482 660,500 670,514 Z" fill="var(--c-horn)" />
      <path d="M678,522 C672,504 680,488 698,482 C688,496 686,510 694,524 Z" fill="var(--c-horn)" />
      <path d="M682,536 C690,528 702,528 708,534 C700,540 690,542 682,538 Z" fill="var(--c-yak)" />

      <path d="M940,462 C952,480 954,516 946,556 L940,580 C936,592 926,590 928,578 L934,548 C938,518 936,488 928,470 Z" fill="var(--c-yak)" />
      <path d="M932,578 C924,594 922,616 928,634 C934,620 938,600 942,588 Z" fill="var(--c-tail)" />

      <path d="M712,436 C724,416 746,406 768,412" fill="none" stroke="var(--c-rope)" strokeWidth="6" strokeLinecap="round" />
      <path d="M918,440 C906,422 884,414 862,418" fill="none" stroke="var(--c-rope)" strokeWidth="6" strokeLinecap="round" />
      <path d="M770,412 L770,548 M858,414 L858,548" stroke="var(--c-rope)" strokeWidth="5" />
      <path d="M746,456 L884,452 M744,492 L886,488" stroke="var(--c-strap)" strokeWidth="4" />
      <g fill="var(--c-tea)" stroke="var(--c-tea-deep)" strokeWidth="2">
        <rect x="744" y="452" width="56" height="26" rx="4" />
        <rect x="742" y="484" width="60" height="26" rx="4" />
        <rect x="826" y="450" width="58" height="26" rx="4" />
        <rect x="824" y="482" width="62" height="26" rx="4" />
      </g>
      <rect x="806" y="440" width="12" height="96" rx="5" fill="var(--c-strap)" />
      <path d="M700,510 C690,506 680,506 672,510" fill="none" stroke="var(--c-yak-deep)" strokeWidth="3" opacity="0.6" />
      <g stroke="var(--c-yak-shine)" strokeWidth="2.4" strokeLinecap="round" opacity="0.5" fill="none">
        <path d="M760,470 C758,500 760,530 766,554" />
        <path d="M820,466 C818,498 820,530 826,556" />
        <path d="M892,468 C892,500 892,532 890,556" />
      </g>
    </g>
  )
}

const STATS = [
  ['4,900 M', 'highest pass on the road'],
  ['90 KG', 'pressed tea, yak for yak'],
  ['100 DAYS', 'out and home again'],
]

export default function Caravan() {
  return (
    <div className="ox-yoke-caravan th-ox-yoke-caravan">
      <header className="ox-yoke-caravan-head">
        <p className="ox-yoke-caravan-kicker">
          <span lang="bo" className="ox-yoke-caravan-tibetan">ཇ་རྟའི་གནའ་ལམ</span>
          <span className="ox-yoke-caravan-kicker-sub">THE TEA-HORSE ROAD</span>
        </p>
        <h1 className="ox-yoke-caravan-title">Caravan over the Passes</h1>
        <p className="ox-yoke-caravan-lede">
          Tea grew in Yunnan. Salt sat in Tibet. Between them stand passes no porter could cross
          carrying both, so the road belonged to the yak.
        </p>
      </header>

      <motion.figure
        className="ox-yoke-caravan-scene"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.1 }}
      >
        <svg className="ox-yoke-caravan-art" viewBox="0 0 1200 760" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
          <defs>
            <linearGradient id="ox-yoke-caravan-sky" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="var(--c-sky-top)" />
              <stop offset="0.65" stopColor="var(--c-sky-mid)" />
              <stop offset="1" stopColor="var(--c-sky-low)" />
            </linearGradient>
          </defs>
          <rect x="0" y="0" width="1200" height="760" fill="url(#ox-yoke-caravan-sky)" />

          <path d="M0,300 L140,220 L300,300 L460,236 L620,300 L780,250 L940,300 L1090,260 L1200,300 L1200,420 L0,420 Z" fill="var(--c-far)" opacity="0.7" />
          <g fill="var(--c-snowcap)" opacity="0.8">
            <path d="M140,220 L200,250 L120,250 Z" />
            <path d="M460,236 L520,266 L440,266 Z" />
            <path d="M780,250 L840,282 L760,280 Z" />
          </g>

          <g className="ox-yoke-caravan-mist ox-yoke-caravan-mist-a" opacity="0.75">
            <path d="M-100,380 C60,352 220,368 380,384 C560,400 760,392 940,368 C1040,356 1140,362 1240,380 L1240,470 L-100,470 Z" fill="var(--c-mist)" />
          </g>

          <path d="M0,470 L180,400 L360,470 L540,412 L720,470 L900,420 L1080,470 L1200,440 L1200,560 L0,560 Z" fill="var(--c-ridge)" />
          <g className="ox-yoke-caravan-file">
            <g transform="translate(420,392)">
              <MiniYak x={0} s={0.9} />
              <MiniYak x={70} s={0.9} />
              <MiniYak x={140} s={0.9} />
              <MiniYak x={210} s={0.9} />
              <MiniYak x={280} s={0.9} />
            </g>
          </g>
          <g className="ox-yoke-caravan-mist ox-yoke-caravan-mist-b" opacity="0.85">
            <path d="M-140,500 C80,478 300,496 520,512 C720,526 940,516 1140,492 L1240,486 L1240,600 L-140,600 Z" fill="var(--c-mist)" />
          </g>

          <path d="M0,620 C160,588 320,596 480,612 C660,630 860,624 1040,604 C1100,598 1160,600 1200,606 L1200,760 L0,760 Z" fill="var(--c-fore)" />
          <g stroke="var(--c-fore-deep)" strokeWidth="2" opacity="0.5">
            <path d="M40,660 L180,660 M260,690 L420,690 M520,652 L680,652 M760,700 L920,700 M980,662 L1140,662" />
          </g>

          <g className="ox-yoke-caravan-yak">
            <HeroYak />
          </g>

          <g className="ox-yoke-caravan-mist ox-yoke-caravan-mist-c" opacity="0.6">
            <path d="M-160,700 C100,678 360,694 620,710 C840,722 1060,712 1240,696 L1240,780 L-160,780 Z" fill="var(--c-mist)" />
          </g>
        </svg>

        <motion.aside
          className="ox-yoke-caravan-waybill"
          initial={{ opacity: 0, y: 18, rotate: 3 }}
          animate={{ opacity: 1, y: 0, rotate: -2 }}
          transition={{ delay: 0.8, duration: 0.7, ease: 'easeOut' }}
        >
          <span className="ox-yoke-caravan-waybill-hole" aria-hidden="true" />
          <span className="ox-yoke-caravan-waybill-line">SET 4 · DESIGNED BY OMEN ALPHA</span>
          <span className="ox-yoke-caravan-waybill-meta">MANIFEST 04 · TEA WEST, SALT EAST</span>
        </motion.aside>
      </motion.figure>

      <div className="ox-yoke-caravan-foot">
        <p className="ox-yoke-caravan-body">
          Ninety kilos a side, pressed into bricks and roped high, the load rides above the weather
          while the animal walks below it. The air is thin and the yak was made for it: wide
          nostrils, a coat that shrugs off sleet, hooves that hold scree. The road stayed open this
          way for thirteen centuries, one steady head after another.
        </p>
        <dl className="ox-yoke-caravan-stats">
          {STATS.map(([n, label]) => (
            <div className="ox-yoke-caravan-stat" key={label}>
              <dt>{n}</dt>
              <dd>{label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  )
}
