import { motion } from 'framer-motion'
import './sarchi.css'

const OX_BODY =
  'M 520 230 C 540 210 590 204 640 204 C 670 204 690 196 706 178 C 716 166 734 162 746 172 C 756 182 768 196 784 202 C 800 206 812 204 822 206 C 834 210 842 222 848 238 C 856 258 866 278 870 292 C 872 304 862 312 850 310 C 836 308 822 300 812 290 C 800 300 790 318 784 336 C 778 352 768 362 756 364 C 720 368 660 366 610 364 C 580 362 550 356 534 340 C 516 320 510 290 512 260 C 514 248 516 238 520 230 Z'

const FORE_LEG = 'M 724 328 L 760 328 C 760 370 754 400 754 432 L 756 446 L 732 446 L 734 432 C 734 400 726 370 724 328 Z'
const HIND_LEG = 'M 522 300 L 582 318 C 580 350 572 372 574 392 C 576 412 576 428 578 446 L 556 446 C 554 428 550 410 546 396 C 540 376 526 350 522 300 Z'

const PETALS = Array.from({ length: 16 }, (_, i) => i * 22.5)
const DOTS = Array.from({ length: 32 }, (_, i) => i * 11.25)
const SPOKES = Array.from({ length: 12 }, (_, i) => i * 30)

const STOPS = [
  { es: 'El yugo', en: 'The yoke', b: 'A carved beam lashed across the forehead and tied to both horns with leather. Costa Rican oxen push with the head, not the shoulder.' },
  { es: 'La pareja', en: 'The pair', b: 'Two oxen, often humped zebu crosses, trained together from calves. They learn the boyero’s voice and the touch of his goad, and are rarely split.' },
  { es: 'La rueda', en: 'The wheel', b: 'Solid, spokeless at first; later built from wedges of wood and banded with iron. The painted star came after, and each region once had its own pattern, turning as the oxen walked.' },
  { es: 'El canto', en: 'The song', b: 'A loose iron ring at the hub knocked against the axle on every turn. Families tuned it on purpose, and people said they could name a cart by its song.' },
]

function Ox({ tone, shade, far }) {
  return (
    <g>
      <g transform={far ? 'translate(-22 0)' : undefined}>
        <path
          className={far ? 'ox-waymark-sa-leg ox-waymark-sa-leg--b' : 'ox-waymark-sa-leg'}
          d={FORE_LEG}
          fill={far ? shade : tone}
          stroke="#2b2420"
          strokeWidth="2"
        />
      </g>
      <g transform={far ? 'translate(34 0)' : undefined}>
        <path
          className={far ? 'ox-waymark-sa-leg' : 'ox-waymark-sa-leg ox-waymark-sa-leg--b'}
          d={HIND_LEG}
          fill={far ? shade : tone}
          stroke="#2b2420"
          strokeWidth="2"
        />
      </g>
      <path d="M 516 240 C 498 270 496 320 500 384" fill="none" stroke={shade} strokeWidth="5" strokeLinecap="round" />
      <path d="M 494 378 C 490 398 500 410 508 404 C 510 392 506 382 500 374 Z" fill="#2b2420" />
      <path d={OX_BODY} fill={tone} stroke="#2b2420" strokeWidth="3" strokeLinejoin="round" />
      <path d="M 700 186 C 716 172 736 168 748 176 C 730 186 716 200 708 214 C 702 206 700 196 700 186 Z" fill={shade} opacity="0.35" />
      <path d="M 790 300 C 784 322 776 342 760 356" fill="none" stroke={shade} strokeWidth="3" opacity="0.5" />
      <path d="M 818 222 C 804 232 794 250 792 268 C 806 264 818 250 826 232 Z" fill={shade} stroke="#2b2420" strokeWidth="2" />
      <path d="M 810 214 C 800 196 802 174 816 156 C 826 172 832 194 830 214 Z" fill="#e9dcc4" stroke="#2b2420" strokeWidth="2" />
      <path d="M 848 284 C 858 280 870 286 871 296 C 870 306 860 311 850 309 C 844 300 844 290 848 284 Z" fill="#5d5048" />
      <ellipse cx="862" cy="293" rx="3" ry="2.2" fill="#1e1814" />
      <ellipse cx="838" cy="242" rx="6" ry="5" fill="#2b2420" />
      <circle cx="840" cy="240" r="1.6" fill="#fff6e5" />
      <path d="M 826 228 C 834 222 846 224 850 232" fill="none" stroke="#2b2420" strokeWidth="2" opacity="0.6" />
    </g>
  )
}

function Wheel({ cx, cy, r }) {
  return (
    <g className="ox-waymark-sa-wheel">
      <circle cx={cx} cy={cy} r={r} fill="#2b2420" />
      <circle cx={cx} cy={cy} r={r - 8} fill="#e2452b" />
      {DOTS.map((a) => (
        <circle
          key={a}
          cx={cx + Math.cos((a * Math.PI) / 180) * (r - 18)}
          cy={cy + Math.sin((a * Math.PI) / 180) * (r - 18)}
          r="4"
          fill="#fff6e5"
        />
      ))}
      <circle cx={cx} cy={cy} r={r - 28} fill="#f6c343" />
      {PETALS.map((a) => (
        <path
          key={a}
          d={`M ${cx} ${cy} L ${cx - 9} ${cy - (r - 44)} L ${cx} ${cy - (r - 30)} L ${cx + 9} ${cy - (r - 44)} Z`}
          fill={a % 45 === 0 ? '#11624a' : '#36b5a5'}
          transform={`rotate(${a} ${cx} ${cy})`}
        />
      ))}
      <circle cx={cx} cy={cy} r={r * 0.42} fill="#e2452b" />
      {SPOKES.map((a) => (
        <path
          key={a}
          d={`M ${cx} ${cy - r * 0.42} C ${cx + 10} ${cy - r * 0.3} ${cx + 10} ${cy - r * 0.2} ${cx} ${cy - r * 0.14} C ${cx - 10} ${cy - r * 0.2} ${cx - 10} ${cy - r * 0.3} ${cx} ${cy - r * 0.42} Z`}
          fill="#fff6e5"
          transform={`rotate(${a} ${cx} ${cy})`}
        />
      ))}
      <circle cx={cx} cy={cy} r={r * 0.13} fill="#2b2420" />
      <circle cx={cx} cy={cy} r={r * 0.06} fill="#f6c343" />
    </g>
  )
}

function Procession() {
  return (
    <svg
      className="ox-waymark-sa-svg"
      viewBox="40 120 900 360"
      role="img"
      aria-label="Two humped oxen yoked at the horns, walking and pulling a painted cart with a large star-patterned wheel"
    >
      <g className="ox-waymark-sa-bob">
        <g transform="translate(34 -22)">
          <Ox tone="#9b8a78" shade="#6d5e50" far />
        </g>
        <path d="M 836 196 L 430 296" stroke="#5a3d22" strokeWidth="9" strokeLinecap="round" />
        <Ox tone="#f3ece0" shade="#b9ad9c" />
        <rect x="806" y="186" width="70" height="20" rx="6" fill="#e2452b" stroke="#2b2420" strokeWidth="2.5" transform="rotate(-8 840 196)" />
        <path d="M 816 192 L 828 200 L 840 192 L 852 200 L 864 192" fill="none" stroke="#f6c343" strokeWidth="2.5" transform="rotate(-8 840 196)" />
        <path d="M 820 208 C 816 216 822 224 832 222 M 846 204 C 848 214 840 222 832 222" fill="none" stroke="#2b2420" strokeWidth="2.5" />
      </g>

      <g>
        <path d="M 100 214 L 446 214 L 440 300 L 108 300 Z" fill="#e2452b" stroke="#2b2420" strokeWidth="3" />
        <path d="M 100 214 L 446 214 L 450 200 L 96 200 Z" fill="#f6c343" stroke="#2b2420" strokeWidth="3" />
        {[0, 1, 2, 3, 4, 5, 6].map((i) => (
          <path
            key={i}
            d={`M ${124 + i * 46} 290 L ${146 + i * 46} 226 L ${168 + i * 46} 290 Z`}
            fill={i % 2 ? '#36b5a5' : '#fff6e5'}
            stroke="#2b2420"
            strokeWidth="1.5"
          />
        ))}
        <path d="M 120 200 L 120 150 M 426 200 L 426 150" stroke="#5a3d22" strokeWidth="7" strokeLinecap="round" />
        <path d="M 112 150 C 200 132 350 132 434 150" fill="none" stroke="#5a3d22" strokeWidth="6" />
        <path d="M 130 162 C 210 150 340 150 418 162 L 418 196 L 130 196 Z" fill="#7a5032" />
        <path d="M 150 170 C 160 160 176 160 186 172 M 220 168 C 232 158 248 158 258 170 M 300 168 C 312 158 328 158 338 170" fill="none" stroke="#c99a5a" strokeWidth="5" strokeLinecap="round" />
        <Wheel cx={274} cy={344} r={106} />
      </g>
    </svg>
  )
}

export default function Sarchi() {
  return (
    <div className="th-ox-waymark-sa">
      <section className="ox-waymark-sa-hero">
        <svg className="ox-waymark-sa-hills" viewBox="0 0 1440 600" preserveAspectRatio="xMidYMax slice" aria-hidden="true">
          <circle cx="1180" cy="150" r="90" fill="#f6c343" />
          <path d="M 860 360 L 1030 170 L 1080 200 L 1120 180 L 1300 360 Z" fill="#2a8a6e" />
          <path d="M 1010 192 L 1030 170 L 1080 200 L 1120 180 L 1140 200 C 1100 214 1050 206 1010 192 Z" fill="#cfe9df" />
          <path d="M 0 380 C 240 290 420 300 640 360 C 860 420 1120 300 1440 340 L 1440 600 L 0 600 Z" fill="#17795c" />
          <path d="M 0 460 C 300 400 520 420 760 450 C 1000 480 1220 410 1440 430 L 1440 600 L 0 600 Z" fill="#11624a" />
          {Array.from({ length: 9 }, (_, row) => (
            <path
              key={row}
              d={`M 0 ${400 + row * 24} C 300 ${360 + row * 26} 700 ${410 + row * 24} 1440 ${380 + row * 26}`}
              fill="none"
              stroke="#0b4a38"
              strokeWidth="5"
              strokeDasharray="2 16"
              strokeLinecap="round"
              opacity="0.7"
            />
          ))}
        </svg>
        <div className="ox-waymark-sa-copy">
          <p className="ox-waymark-sa-kicker">
            Sarchí · Alajuela · <span lang="es">la carreta típica</span>
          </p>
          <h1 className="ox-waymark-sa-title">Two oxen, one painted wheel</h1>
          <p className="ox-waymark-sa-lede">
            For a hundred years the coffee of Costa Rica’s Central Valley reached the sea behind a pair of
            oxen. Trucks took the coffee long ago; the oxen stayed, for every festival and on every wheel.
          </p>
        </div>
        <div className="ox-waymark-sa-road">
          <Procession />
          <div className="ox-waymark-sa-ground" aria-hidden="true" />
        </div>
      </section>

      <section className="ox-waymark-sa-stops" aria-label="Parts of the oxcart">
        {STOPS.map((s, i) => (
          <motion.article
            key={s.en}
            className="ox-waymark-sa-stop"
            initial={{ y: 40, opacity: 0, rotate: i % 2 ? 3 : -3 }}
            whileInView={{ y: 0, opacity: 1, rotate: i % 2 ? 1 : -1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ type: 'spring', stiffness: 120, damping: 14, delay: i * 0.08 }}
          >
            <h2>
              <span lang="es">{s.es}</span>
              <small>{s.en}</small>
            </h2>
            <p>{s.b}</p>
          </motion.article>
        ))}
      </section>

      <section className="ox-waymark-sa-road-note">
        <div className="ox-waymark-sa-route">
          <span>San José</span>
          <span className="ox-waymark-sa-dash" aria-hidden="true" />
          <span>Puntarenas</span>
        </div>
        <p>
          From the 1840s the carts hauled coffee over the mountains to the Pacific port, days each way, the
          oxen setting the pace of an entire economy. In 2005 UNESCO named Costa Rica’s oxherding and oxcart
          traditions a masterpiece of intangible heritage. On the second Sunday of March the{' '}
          <span lang="es">Día Nacional del Boyero</span> still fills San Antonio de Escazú with yoked pairs.
        </p>
      </section>

      <footer className="ox-waymark-sa-foot">
        <div className="ox-waymark-sa-board">
          <p className="ox-waymark-sa-board-text">SET XXXIV · DESIGNED BY CLAUDE OPUS 5.5</p>
          <p className="ox-waymark-sa-board-sub">
            lettered on the tailboard, <span lang="es">pintado a mano</span>
          </p>
        </div>
      </footer>
    </div>
  )
}
