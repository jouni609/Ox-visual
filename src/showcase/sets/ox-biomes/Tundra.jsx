import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import './tundra.css'

const auroraBands = [
  { y: 80, h: 60, color: '#5E3B8A', opacity: 0.45 },
  { y: 130, h: 50, color: '#2B8C8E', opacity: 0.4 },
  { y: 180, h: 70, color: '#3F5BB1', opacity: 0.35 },
  { y: 240, h: 55, color: '#5E3B8A', opacity: 0.3 },
]

const coldStats = [
  { value: -58, prefix: '−', suffix: ' °C', label: 'Windchill a muskox herd faces in polar night' },
  { value: 9, suffix: ' cm', label: 'Qiviut underwool — finer than cashmere' },
  { value: 320, suffix: ' kg', label: 'Bull weight at autumn peak · cows ~250 kg' },
]

function CountUp({ value, prefix = '', suffix = '', duration = 1600 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!inView) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setDisplay(value)
      return
    }
    let raf
    const start = performance.now()
    const tick = (now) => {
      const t = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - t, 3)
      setDisplay(Math.round(eased * value))
      if (t < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, value, duration])

  return (
    <span className="td-num" ref={ref}>
      {prefix ? <span className="td-affix">{prefix}</span> : null}
      {Math.abs(display).toLocaleString('en-US')}
      {suffix ? <span className="td-affix">{suffix}</span> : null}
    </span>
  )
}

function AuroraScene() {
  return (
    <svg className="td-scene" viewBox="0 0 1000 600" aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id="td-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#0D1B2A" />
          <stop offset="0.55" stopColor="#14253E" />
          <stop offset="1" stopColor="#1F334E" />
        </linearGradient>
        <linearGradient id="td-aurora" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#5E3B8A" stopOpacity="0" />
          <stop offset="0.3" stopColor="#5E3B8A" stopOpacity="0.6" />
          <stop offset="0.5" stopColor="#2B8C8E" stopOpacity="0.7" />
          <stop offset="0.7" stopColor="#3F5BB1" stopOpacity="0.6" />
          <stop offset="1" stopColor="#3F5BB1" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="td-ice" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#D9E8F0" />
          <stop offset="1" stopColor="#5A7E94" />
        </linearGradient>
        <radialGradient id="td-moon" cx="50%" cy="50%" r="50%">
          <stop offset="0" stopColor="#F4F9FB" />
          <stop offset="0.6" stopColor="#D9E8F0" />
          <stop offset="1" stopColor="#5A7E94" stopOpacity="0" />
        </radialGradient>
      </defs>

      <rect x="0" y="0" width="1000" height="600" fill="url(#td-sky)" />

      <g className="td-stars" aria-hidden="true">
        {Array.from({ length: 60 }, (_, i) => {
          const cx = (i * 73) % 1000
          const cy = (i * 41) % 240
          const r = (i % 5) * 0.3 + 0.4
          return <circle key={i} cx={cx} cy={cy} r={r} fill="#F4F9FB" opacity={0.5 + ((i % 4) * 0.1)} className={`td-star td-star-${i % 4}`} />
        })}
      </g>

      <motion.g
        className="td-moon-g"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
      >
        <circle cx="800" cy="120" r="80" fill="url(#td-moon)" />
        <circle cx="800" cy="120" r="36" fill="#F4F9FB" opacity="0.95" />
        <circle cx="790" cy="112" r="6" fill="#D9E8F0" opacity="0.7" />
        <circle cx="812" cy="128" r="4" fill="#D9E8F0" opacity="0.6" />
      </motion.g>

      {auroraBands.map((b, i) => (
        <motion.path
          key={i}
          className={`td-aurora td-aurora-${i}`}
          d={`M0,${b.y} Q250,${b.y - 30} 500,${b.y} T1000,${b.y} L1000,${b.y + b.h} Q750,${b.y + b.h - 25} 500,${b.y + b.h} T0,${b.y + b.h} Z`}
          fill={b.color}
          opacity={b.opacity}
          initial={{ opacity: 0 }}
          animate={{ opacity: b.opacity }}
          transition={{ delay: 0.4 + i * 0.3, duration: 2 }}
        />
      ))}

      <g className="td-distant">
        <path d="M0,360 L120,310 L240,340 L380,290 L500,330 L640,300 L780,330 L900,310 L1000,340 L1000,400 L0,400 Z" fill="#2A3E5C" opacity="0.85" />
      </g>

      <g className="td-snow">
        <path d="M0,420 Q200,400 400,420 Q600,400 800,420 Q920,410 1000,420 L1000,460 Q800,448 600,460 Q400,448 200,460 Q80,452 0,460 Z" fill="#3F5A78" />
        <path d="M0,460 Q200,452 400,460 Q600,452 800,460 Q920,456 1000,460 L1000,500 Q800,494 600,500 Q400,494 200,500 Q80,496 0,500 Z" fill="#2A3E5C" />
        <rect x="0" y="500" width="1000" height="100" fill="#152538" />
      </g>

      <g transform="translate(360, 360)">
        <ellipse cx="120" cy="150" rx="160" ry="12" fill="#000" opacity="0.4" />

        <path d="M-10,80 C-8,40 30,16 80,12 L82,-4 L92,-4 L90,12 C140,16 168,40 172,80 C200,86 220,108 218,138 C232,152 224,180 200,188 L196,210 L168,210 L172,190 C140,210 90,212 60,206 L62,224 L34,224 L36,206 C12,202 -10,182 -14,156 C-30,148 -32,124 -16,112 C-22,98 -16,84 -10,80 Z" fill="#3A2418" />

        <path d="M-10,200 C-30,232 -42,266 -38,302 L-8,302 C-12,272 -6,238 8,212 Z" fill="#3A2418" />
        <path d="M194,200 C214,232 226,266 222,302 L192,302 C196,272 190,238 176,212 Z" fill="#3A2418" />

        <path d="M-22,180 C-58,168 -90,168 -120,180 C-138,186 -144,200 -136,212 C-114,202 -86,202 -64,210 C-42,214 -26,220 -16,232 Z" fill="#5E3B22" />
        <path d="M204,180 C240,168 272,168 302,180 C320,186 326,200 318,212 C296,202 268,202 246,210 C224,214 208,220 198,232 Z" fill="#5E3B22" />

        <path d="M30,68 C40,40 70,22 110,20 L108,4 L122,4 L120,20 C148,24 168,40 176,62 C188,40 168,16 130,12 C100,8 60,18 36,42 Z" fill="#5E3B22" />
        <path d="M58,42 C68,28 86,18 108,18 C98,32 86,46 76,58 C66,62 60,54 58,42 Z" fill="#3A2418" />

        <g className="td-boss">
          <path
            d="M-6,40 C0,16 28,4 78,4 C140,4 192,18 222,38 C240,52 232,72 214,80 C232,90 240,108 222,124 C218,142 196,158 160,166 C124,170 70,168 36,158 C8,148 -8,128 -2,108 C-22,98 -28,76 -16,60 C-22,52 -18,42 -6,40 Z"
            fill="#3A2418"
          />
          <path d="M-2,40 C8,16 36,8 78,8 C132,8 178,22 206,40 C222,52 216,68 200,76 C218,86 222,108 206,118 C200,134 178,148 150,154 C124,156 78,156 50,148 C24,140 8,124 14,108 C-4,100 -8,80 4,68 C-2,58 0,46 -2,40 Z" fill="#5E3B22" />
          <path d="M10,40 C20,24 44,18 78,18 C124,18 164,28 188,42 C200,52 196,62 184,68 C194,80 194,96 180,104 C176,116 158,128 134,134 C108,136 70,134 46,128 C26,122 14,108 18,96 C4,90 2,76 12,66 C8,58 6,48 10,40 Z" fill="#D9E8F0" />
          <path d="M28,46 C36,32 56,26 80,26 C120,26 156,36 174,48 C184,56 178,62 170,66 C176,76 174,88 162,94 C158,104 142,112 122,116 C100,118 70,116 52,110 C36,106 26,94 30,84 C18,80 16,68 26,60 C22,54 22,50 28,46 Z" fill="#F4F9FB" />
          <path d="M52,58 C58,50 74,46 92,46 C118,46 144,52 156,62 C162,68 158,72 152,74 C156,82 154,90 144,94 C140,102 124,108 108,110 C92,112 70,110 56,104 C44,100 38,90 42,82 C32,78 30,70 38,64 C36,60 42,58 52,58 Z" fill="#5E3B22" opacity="0.5" />
          <ellipse cx="86" cy="62" rx="8" ry="5" fill="#3A2418" />
          <ellipse cx="106" cy="58" rx="6" ry="4" fill="#3A2418" />
          <path d="M76,80 Q92,86 108,80" stroke="#3A2418" strokeWidth="2" fill="none" strokeLinecap="round" />
        </g>

        <g className="td-frost" aria-hidden="true">
          <circle cx="60" cy="86" r="2" fill="#D9E8F0" opacity="0.7" />
          <circle cx="142" cy="86" r="2" fill="#D9E8F0" opacity="0.7" />
          <path d="M90,100 L94,94 L98,100 L94,106 Z" fill="#D9E8F0" opacity="0.8" />
        </g>
      </g>

      <g className="td-snowflakes" aria-hidden="true">
        {Array.from({ length: 20 }, (_, i) => {
          const x = (i * 53) % 1000
          const y = 80 + ((i * 73) % 400)
          const s = 0.6 + (i % 5) * 0.2
          return (
            <g key={i} transform={`translate(${x} ${y})`} className={`td-flake td-flake-${i % 5}`}>
              <path d={`M0,${-4 * s} L0,${4 * s} M${-4 * s},0 L${4 * s},0 M${-2.8 * s},${-2.8 * s} L${2.8 * s},${2.8 * s} M${-2.8 * s},${2.8 * s} L${2.8 * s},${-2.8 * s}`} stroke="#F4F9FB" strokeWidth="0.8" strokeLinecap="round" />
            </g>
          )
        })}
      </g>
    </svg>
  )
}

function IceCrystal({ cx, cy, r, opacity = 1, fill = '#D9E8F0' }) {
  return (
    <g transform={`translate(${cx} ${cy})`} opacity={opacity}>
      <path d={`M0,${-r} L${r * 0.3},${-r * 0.3} L${r},0 L${r * 0.3},${r * 0.3} L0,${r} L${-r * 0.3},${r * 0.3} L${-r},0 L${-r * 0.3},${-r * 0.3} Z`} fill={fill} />
      <path d={`M0,${-r} L0,${r} M${-r},0 L${r},0`} stroke="#F4F9FB" strokeWidth="1" />
    </g>
  )
}

function IceStamp() {
  return (
    <motion.div
      className="td-stamp"
      initial={{ rotate: 12, opacity: 0 }}
      whileInView={{ rotate: 4, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ type: 'spring', stiffness: 130, damping: 16, delay: 0.3 }}
    >
      <svg viewBox="0 0 200 140" aria-hidden="true" focusable="false">
        <defs>
          <linearGradient id="td-stamp-bg" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#D9E8F0" />
            <stop offset="1" stopColor="#5A7E94" />
          </linearGradient>
        </defs>
        <path d="M100,4 L184,30 L168,90 L184,134 L100,118 L16,134 L32,90 L16,30 Z" fill="url(#td-stamp-bg)" stroke="#0D1B2A" strokeWidth="2.5" />
        <path d="M100,12 L176,34 L162,86 L176,124 L100,112 L24,124 L38,86 L24,34 Z" fill="none" stroke="#0D1B2A" strokeWidth="1" strokeDasharray="3 3" />
        <g transform="translate(100 56)">
          <path d="M0,-22 L7,-7 L22,0 L7,7 L0,22 L-7,7 L-22,0 L-7,-7 Z" fill="#0D1B2A" />
          <path d="M0,-14 L5,-5 L14,0 L5,5 L0,14 L-5,5 L-14,0 L-5,-5 Z" fill="#D9E8F0" />
        </g>
        <text x="100" y="92" textAnchor="middle" fontFamily="Cinzel, serif" fontWeight="700" fontSize="14" letterSpacing="0.18em" fill="#0D1B2A">
          UMINGMAK
        </text>
        <text x="100" y="106" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontWeight="700" fontSize="7" letterSpacing="2" fill="#0D1B2A">
          SET IV · MOOR-RUNNER
        </text>
      </svg>
    </motion.div>
  )
}

export default function Tundra() {
  return (
    <div className="th-tundra">
      <header className="td-topline">
        <span className="td-topline-l">FIELD 04 · HIGH ARCTIC</span>
        <span className="td-topline-c">72°30′ N · 78° W · BANKS ISLAND</span>
        <span className="td-topline-r">POLAR NIGHT · CLEAR</span>
      </header>

      <section className="td-hero">
        <motion.div
          className="td-hero-copy"
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <p className="td-kicker" lang="iu">UMINGMAK · OVIBOS MOSCHATUS</p>
          <h1 className="td-headline">
            <span className="td-headline-mark">VI</span>
            <span className="td-headline-word">TUNDRA</span>
          </h1>
          <p className="td-lede">
            The muskox <em>iŋmiaq</em> in Inuktitut — “the one with the beard like a man” — has walked
            this ice for ten thousand winters. Its qiviut wool is finer than cashmere; its horn boss
            meets a wolf's jaw with bone that bends nothing. When the herd forms a ring, the calves
            inside and the horns outside, the cold does not get in. There is no faster thinker on the
            tundra. There is, in fact, no other.
          </p>
        </motion.div>

        <motion.div
          className="td-hero-art"
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, delay: 0.2, ease: 'easeOut' }}
        >
          <AuroraScene />
          <div className="td-art-foot">
            <span>
              <strong>Plate IV.</strong> Muskox bull at the edge of an aurora band. Light at
              1/30 s, lens open to the indigo horizon. The herd at this season ranges 8 to 14.
            </span>
            <span className="td-art-scale">N 72° 30′ · 0 °C, FEELS −38</span>
          </div>
        </motion.div>
      </section>

      <section className="td-crystals" aria-label="Aurora frequencies">
        <div className="td-crystals-head">
          <span>AURORA FREQUENCY · 0.7–1.3 Hz</span>
        </div>
        <div className="td-crystals-body">
          {coldStats.map((s) => (
            <motion.div
              key={s.label}
              className="td-stat"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <CountUp value={s.value} prefix={s.prefix} suffix={s.suffix} />
              <span className="td-label">{s.label}</span>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="td-defense" aria-label="Defense behaviour">
        <div className="td-defense-grid">
          <motion.div
            className="td-defense-card"
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
          >
            <h2>DEFENSE RING</h2>
            <p>
              When wolves come within 200 paces, the herd contracts. Calves inside the circle,
              adults facing out, horns lowered in a continuous wall of bone. A bull will charge a
              wolf across 30 metres in 2.4 seconds — and the boss hits at the height of the spine.
            </p>
            <svg viewBox="0 0 240 200" aria-hidden="true" focusable="false">
              <defs>
                <radialGradient id="td-ring" cx="50%" cy="50%" r="50%">
                  <stop offset="0" stopColor="#2B8C8E" stopOpacity="0.4" />
                  <stop offset="1" stopColor="#2B8C8E" stopOpacity="0" />
                </radialGradient>
              </defs>
              <circle cx="120" cy="100" r="86" fill="url(#td-ring)" />
              {[0, 60, 120, 180, 240, 300].map((a, i) => (
                <g key={i} transform={`rotate(${a} 120 100)`}>
                  <g transform="translate(120 30)">
                    <ellipse cx="0" cy="0" rx="14" ry="6" fill="#3A2418" />
                    <path d="M-14,-2 C-18,-8 -16,-14 -10,-14 C-6,-12 -6,-8 -10,-4 Z" fill="#3A2418" />
                    <path d="M14,-2 C18,-8 16,-14 10,-14 C6,-12 6,-8 10,-4 Z" fill="#3A2418" />
                    <circle cx="-10" cy="-14" r="4" fill="#D9E8F0" />
                    <circle cx="10" cy="-14" r="4" fill="#D9E8F0" />
                  </g>
                </g>
              ))}
              <circle cx="120" cy="100" r="20" fill="#F4F9FB" opacity="0.6" />
              <circle cx="112" cy="96" r="6" fill="#3A2418" />
              <circle cx="128" cy="96" r="6" fill="#3A2418" />
              <circle cx="120" cy="106" r="4" fill="#5E3B22" />
            </svg>
          </motion.div>

          <motion.div
            className="td-defense-card"
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h2>QIVIUT, THE GOLDEN DOWN</h2>
            <p>
              Eight times warmer by weight than sheep's wool, and it does not shrink in water. The
              Inuvialuit comb it from the muskox in spring as the animal rubs against boulders;
              each adult yields enough for one sweater a year. Yarn sells from Iqaluit to Kyoto.
            </p>
            <svg viewBox="0 0 240 200" aria-hidden="true" focusable="false">
              <defs>
                <pattern id="td-weave" width="20" height="20" patternUnits="userSpaceOnUse">
                  <rect width="20" height="20" fill="#5A7E94" />
                  <rect x="0" y="0" width="10" height="10" fill="#D9E8F0" />
                  <rect x="10" y="10" width="10" height="10" fill="#D9E8F0" />
                </pattern>
              </defs>
              <rect x="20" y="20" width="200" height="160" fill="url(#td-weave)" stroke="#0D1B2A" strokeWidth="2" />
              <line x1="20" y1="20" x2="220" y2="180" stroke="#F4F9FB" strokeWidth="0.6" opacity="0.5" />
              <line x1="220" y1="20" x2="20" y2="180" stroke="#F4F9FB" strokeWidth="0.6" opacity="0.5" />
              <g transform="translate(120 100)" fill="#5E3B8A">
                <path d="M-26,0 Q-26,-26 0,-26 Q26,-26 26,0 Q26,26 0,26 Q-26,26 -26,0 Z" />
                <path d="M-16,0 Q-16,-16 0,-16 Q16,-16 16,0 Q16,16 0,16 Q-16,16 -16,0 Z" fill="#F4F9FB" />
                <text x="0" y="4" textAnchor="middle" fontFamily="Cinzel, serif" fontWeight="700" fontSize="10" fill="#5E3B8A">
                  Q
                </text>
              </g>
            </svg>
          </motion.div>
        </div>
      </section>

      <motion.blockquote
        className="td-quote"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.7 }}
      >
        <p lang="iu">“Umingmak nunamiuqtuq — nuna uqausiqanngittuq, umingmak oqausimmat.”</p>
        <p>“Where the muskox lives, the land is still speaking.”</p>
        <cite>— Igloolik elder, Nunavut</cite>
      </motion.blockquote>

      <footer className="td-foot">
        <IceStamp />
        <div className="td-foot-meta">
          <span className="td-foot-line-1">CRYSTAL ARCHIVE · ARCTIC SERIES</span>
          <span className="td-foot-line-2">
            <strong>SET IV · DESIGNED BY MOOR-RUNNER</strong><br />
            OX BIOMES — TUNDRA · FROZEN INTO THE BUNDLE
          </span>
        </div>
      </footer>
    </div>
  )
}
