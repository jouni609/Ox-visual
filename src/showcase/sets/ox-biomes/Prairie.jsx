import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import './prairie.css'

const data = [
  { key: 'Range', val: '4 200 km²', note: 'Current free-roaming range in Yellowstone · 2024 census' },
  { key: 'Mass', val: '900 kg', note: 'Bull bison at autumn peak · cow average 450 kg' },
  { key: 'Speed', val: '56 km/h', note: 'Sustained gallop · faster than any saddle horse' },
  { key: 'Wallows', val: '2–4 m', note: 'Diameter of a bull wallow, kept bare for a generation' },
]

function CountUp({ value, duration = 1500 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!inView) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setDisplay(parseFloat(value))
      return
    }
    const num = parseFloat(value)
    const suffix = value.replace(/[\d.\s,]/g, '')
    let raf
    const start = performance.now()
    const tick = (now) => {
      const t = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - t, 3)
      setDisplay(`${(eased * num).toFixed(num % 1 === 0 ? 0 : 1)}${suffix}`)
      if (t < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, value, duration])

  return <span className="pr-num" ref={ref}>{display}</span>
}

function PrairieScene() {
  return (
    <svg className="pr-scene" viewBox="0 0 1000 480" aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id="pr-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#D6C29C" />
          <stop offset="0.6" stopColor="#E2C99A" />
          <stop offset="1" stopColor="#C99849" />
        </linearGradient>
        <pattern id="pr-grain" width="6" height="6" patternUnits="userSpaceOnUse">
          <circle cx="3" cy="3" r="0.6" fill="#6B4A28" opacity="0.18" />
        </pattern>
      </defs>

      <rect x="0" y="0" width="1000" height="300" fill="url(#pr-sky)" />
      <rect x="0" y="0" width="1000" height="300" fill="url(#pr-grain)" />

      <motion.g
        className="pr-sun"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.6 }}
      >
        <circle cx="780" cy="160" r="58" fill="#E89B2A" opacity="0.3" />
        <circle cx="780" cy="160" r="38" fill="#E89B2A" />
      </motion.g>

      <g className="pr-contour" aria-hidden="true">
        <path d="M0,250 Q160,230 320,250 T640,250 T960,250" fill="none" stroke="#6B4A28" strokeWidth="1.2" opacity="0.5" />
        <path d="M0,260 Q180,238 340,260 T660,260 T1000,260" fill="none" stroke="#6B4A28" strokeWidth="1" opacity="0.35" />
        <path d="M0,268 Q200,250 360,270 T680,270 T1000,270" fill="none" stroke="#6B4A28" strokeWidth="0.9" opacity="0.25" />
      </g>

      <g className="pr-far">
        <path d="M0,300 L120,265 L260,290 L420,260 L560,285 L720,265 L880,290 L1000,275 L1000,300 Z" fill="#9C7849" opacity="0.75" />
      </g>

      <g className="pr-ground">
        <path d="M0,300 L1000,300 L1000,360 Q820,344 640,356 Q420,344 200,358 Q80,348 0,360 Z" fill="#A6814B" />
        <path d="M0,360 Q200,348 420,358 Q620,348 820,360 Q920,354 1000,360 L1000,400 Q820,392 640,402 Q420,392 200,402 Q80,394 0,400 Z" fill="#6B4A28" />
        <path d="M0,400 Q200,392 420,402 Q620,392 820,402 Q920,396 1000,400 L1000,440 Q820,434 640,440 Q420,434 200,440 Q80,436 0,440 Z" fill="#4A2F18" />
        <rect x="0" y="440" width="1000" height="40" fill="#2E1F0F" />
      </g>

      <g transform="translate(330, 290)">
        <ellipse cx="80" cy="56" rx="80" ry="6" fill="#000" opacity="0.4" />

        <path d="M22,42 C26,30 36,22 50,20 L52,8 L60,8 L58,20 C70,22 78,30 82,40 L94,30 L98,38 L86,46 C88,52 88,58 86,62 L100,68 L94,76 L80,68 C72,76 60,80 50,80 L48,92 L40,92 L42,80 C30,78 22,70 20,60 L6,64 L2,56 L18,52 C20,48 20,44 22,42 Z" fill="#2E1F0F" />

        <path d="M14,30 C8,18 -2,12 -16,16 C-22,18 -22,24 -18,28 C-8,24 4,24 14,28 Z" fill="#2E1F0F" />

        <path d="M88,32 C96,18 110,12 124,16 C130,18 130,24 126,28 C114,24 102,26 92,30 Z" fill="#2E1F0F" />

        <path d="M14,52 C8,52 4,50 0,46 C2,42 6,42 12,46 Z" fill="#1A120A" />
        <ellipse cx="120" cy="40" rx="3" ry="2" fill="#D6C29C" />

        <path d="M16,70 C8,80 4,90 8,100 L18,100 C16,90 18,80 24,72 Z" fill="#2E1F0F" />
        <path d="M82,70 C90,80 94,90 90,100 L80,100 C82,90 80,80 74,72 Z" fill="#2E1F0F" />

        <path d="M108,16 C112,4 124,-2 138,2 C128,8 120,18 116,28 Z" fill="#2E1F0F" />
        <path d="M-8,18 C-12,8 -22,2 -34,4 C-26,10 -18,18 -14,28 Z" fill="#2E1F0F" />

        <path d="M120,76 C140,74 154,80 160,92 C150,86 138,84 124,86 Z" fill="#1A120A" opacity="0.6" />
      </g>

      <g transform="translate(640, 314)">
        <ellipse cx="60" cy="34" rx="48" ry="4" fill="#000" opacity="0.35" />
        <path d="M14,28 C16,20 22,14 30,12 L30,4 L36,4 L36,12 C44,14 50,20 52,28 L58,22 L60,28 L52,32 C54,38 52,42 50,46 L58,50 L54,56 L46,52 C42,58 36,60 30,60 L28,68 L24,68 L26,60 C20,58 14,52 12,46 L4,48 L2,42 L10,40 C12,36 12,32 14,28 Z" fill="#1A120A" />
        <path d="M-4,20 C-8,12 -16,8 -24,10 C-18,14 -12,20 -8,26 Z" fill="#1A120A" />
        <path d="M64,20 C68,12 76,8 84,10 C78,14 72,20 68,26 Z" fill="#1A120A" />
        <ellipse cx="78" cy="22" rx="2" ry="1.5" fill="#D6C29C" />
      </g>

      <g className="pr-grass" aria-hidden="true">
        {Array.from({ length: 28 }, (_, i) => {
          const x = 20 + i * 36
          const h = 8 + (i * 7) % 14
          return (
            <g key={i} transform={`translate(${x} ${460 - h})`}>
              <path d={`M0,${h} Q-3,${h * 0.5} 0,0`} stroke="#6B4A28" strokeWidth="1.4" fill="none" strokeLinecap="round" />
              <path d={`M2,${h} Q5,${h * 0.5} 2,0`} stroke="#6B4A28" strokeWidth="1.4" fill="none" strokeLinecap="round" />
            </g>
          )
        })}
      </g>

      <g className="pr-dust" aria-hidden="true">
        <circle cx="240" cy="350" r="2" fill="#C99849" opacity="0.4" />
        <circle cx="246" cy="346" r="1.5" fill="#C99849" opacity="0.4" />
        <circle cx="252" cy="354" r="1.8" fill="#C99849" opacity="0.35" />
        <circle cx="260" cy="350" r="1.2" fill="#C99849" opacity="0.3" />
      </g>
    </svg>
  )
}

function Strata() {
  return (
    <svg className="pr-strata" viewBox="0 0 900 240" aria-hidden="true" focusable="false">
      <rect x="20" y="14" width="860" height="212" fill="none" stroke="#2E1F0F" strokeWidth="2.5" />
      <rect x="20" y="14" width="860" height="48" fill="#C99849" />
      <rect x="20" y="62" width="860" height="60" fill="#9C7849" />
      <rect x="20" y="122" width="860" height="44" fill="#6B4A28" />
      <rect x="20" y="166" width="860" height="60" fill="#3F2A14" />
      <line x1="20" y1="62" x2="880" y2="62" stroke="#2E1F0F" strokeWidth="1.5" strokeDasharray="6 6" opacity="0.6" />
      <line x1="20" y1="122" x2="880" y2="122" stroke="#2E1F0F" strokeWidth="1.5" strokeDasharray="6 6" opacity="0.6" />
      <line x1="20" y1="166" x2="880" y2="166" stroke="#2E1F0F" strokeWidth="1.5" strokeDasharray="6 6" opacity="0.6" />

      <g stroke="#2E1F0F" strokeWidth="1" fill="none" opacity="0.55">
        <path d="M120,32 C140,40 152,52 134,58" />
        <path d="M260,42 C280,50 296,62 278,70" />
        <path d="M520,32 C540,40 552,52 534,58" />
        <path d="M700,32 C720,40 736,52 718,58" />
        <path d="M340,86 C360,96 376,110 358,118" />
        <path d="M580,86 C600,96 616,108 598,116" />
        <path d="M180,138 C200,148 212,158 194,166" />
        <path d="M520,138 C540,148 552,158 534,166" />
        <path d="M280,190 C300,200 316,212 298,220" />
        <path d="M620,190 C640,200 656,212 638,220" />
      </g>

      <text x="36" y="44" fill="#2E1F0F" fontFamily="Anton, sans-serif" fontWeight="700" fontSize="22" letterSpacing="0.04em">
        A · ROOTS
      </text>
      <text x="36" y="58" fill="#2E1F0F" fontFamily="Space Mono, monospace" fontSize="9" letterSpacing="2" opacity="0.85">
        0–18 cm · buffalo grass + bluestem
      </text>

      <text x="36" y="92" fill="#F4EFE3" fontFamily="Anton, sans-serif" fontWeight="700" fontSize="22" letterSpacing="0.04em">
        B · TOPSOIL
      </text>
      <text x="36" y="106" fill="#F4EFE3" fontFamily="Space Mono, monospace" fontSize="9" letterSpacing="2" opacity="0.85">
        18–48 cm · humus, root mat, fire-charred
      </text>

      <text x="36" y="148" fill="#F4EFE3" fontFamily="Anton, sans-serif" fontWeight="700" fontSize="22" letterSpacing="0.04em">
        C · CLAY
      </text>
      <text x="36" y="162" fill="#F4EFE3" fontFamily="Space Mono, monospace" fontSize="9" letterSpacing="2" opacity="0.85">
        48–66 cm · weathered loess, tight
      </text>

      <text x="36" y="196" fill="#F4EFE3" fontFamily="Anton, sans-serif" fontWeight="700" fontSize="22" letterSpacing="0.04em">
        D · BEDROCK
      </text>
      <text x="36" y="210" fill="#F4EFE3" fontFamily="Space Mono, monospace" fontSize="9" letterSpacing="2" opacity="0.85">
        66 cm ↓ · shale &amp; sandstone · the deep quiet
      </text>

      <g fill="#F4EFE3">
        <circle cx="780" cy="38" r="3" />
        <circle cx="820" cy="38" r="3" />
        <circle cx="800" cy="52" r="3" />
      </g>
      <text x="780" y="20" fill="#2E1F0F" fontFamily="Space Mono, monospace" fontSize="8" letterSpacing="1.5">
        SITE B-09 · FIRE ECOLOGY MARKER
      </text>
    </svg>
  )
}

function RangerBadge() {
  return (
    <motion.div
      className="pr-badge"
      initial={{ rotate: -16, opacity: 0 }}
      whileInView={{ rotate: -4, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ type: 'spring', stiffness: 140, damping: 14, delay: 0.3 }}
    >
      <svg viewBox="0 0 200 140" aria-hidden="true" focusable="false">
        <path d="M100,4 L172,28 L172,84 C172,108 144,128 100,136 C56,128 28,108 28,84 L28,28 Z" fill="#9C7849" stroke="#2E1F0F" strokeWidth="3" />
        <path d="M100,12 L164,32 L164,82 C164,102 140,120 100,128 C60,120 36,102 36,82 L36,32 Z" fill="none" stroke="#2E1F0F" strokeWidth="1" strokeDasharray="3 3" />
        <circle cx="100" cy="60" r="22" fill="#2E1F0F" />
        <path d="M82,60 C82,52 90,46 100,46 C110,46 118,52 118,60 C118,68 110,74 100,74 C90,74 82,68 82,60 Z" fill="#9C7849" />
        <text x="100" y="65" textAnchor="middle" fontFamily="Anton, sans-serif" fontSize="16" fill="#2E1F0F">
          OX
        </text>
        <text x="100" y="100" textAnchor="middle" fontFamily="Anton, sans-serif" fontSize="9" letterSpacing="2" fill="#2E1F0F">
          PRAIRIE FIELD · 1884
        </text>
        <text x="100" y="116" textAnchor="middle" fontFamily="Space Mono, monospace" fontSize="7" letterSpacing="2" fill="#2E1F0F">
          SET IV · MOOR-RUNNER
        </text>
      </svg>
    </motion.div>
  )
}

export default function Prairie() {
  return (
    <div className="th-prairie">
      <header className="pr-topline">
        <span className="pr-topline-l">RANGE 03 · WESTERN GRAZING</span>
        <span className="pr-topline-c">SURVEY № P-1884 · LAT 44°26′ N</span>
        <span className="pr-topline-r">ELEV 2 400 m · COMPASS NW</span>
      </header>

      <section className="pr-hero">
        <motion.div
          className="pr-hero-art"
          initial={{ opacity: 0, x: -18 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <PrairieScene />
          <div className="pr-art-foot">
            <span>
              <strong>Plate III.</strong> Two bison crossing the upper bench at sundown. Cow leading,
              bull bringing up the rear, head low to read the wind. Distance estimated 60 paces.
            </span>
            <span className="pr-art-scale">FIELD SKETCH · NOT TO SCALE</span>
          </div>
        </motion.div>

        <motion.div
          className="pr-hero-copy"
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: 'easeOut' }}
        >
          <p className="pr-kicker">BISON BISON · THE AMERICAN BISON</p>
          <h1 className="pr-headline">
            <span className="pr-headline-1">PRAIRIE</span>
            <span className="pr-headline-2">/ ˈprer-ē /</span>
          </h1>
          <p className="pr-lede">
            Before barbed wire, before the railroad, the prairie was a single animal moving — black,
            deliberate, two million strong. The bison ate the grass; the fire ate the bison's
            droppings; the grass came back. When the herd fell, the topsoil went with it. A century
            later, the few that remain still shape the land they walk on, wallowing the dust and
            dragging the seed.
          </p>
        </motion.div>
      </section>

      <section className="pr-data" aria-label="Field data">
        <div className="pr-data-head">
          <span>RANGE DATA</span>
          <span className="pr-data-rule" aria-hidden="true" />
          <span>OBSERVED AUTUMN 1884</span>
        </div>
        <div className="pr-data-grid">
          {data.map((d) => (
            <div className="pr-data-cell" key={d.key}>
              <span className="pr-data-key">{d.key}</span>
              <span className="pr-data-val"><CountUp value={d.val} /></span>
              <span className="pr-data-note">{d.note}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="pr-strata-wrap" aria-label="Soil cross-section">
        <Strata />
      </section>

      <motion.blockquote
        className="pr-quote"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.7 }}
      >
        <p lang="lkt" className="pr-quote-lak">“Waŋblí táku wíčhȟaŋ. Tatáŋka káğa.”</p>
        <p>“Everything that grows from the earth. So is the buffalo.”</p>
        <cite>— Standing Bear, <span>Ponca Chief</span>, 1879</cite>
      </motion.blockquote>

      <footer className="pr-foot">
        <RangerBadge />
        <div className="pr-foot-meta">
          <span className="pr-foot-line-1">FIELD OFFICE · OPEN UNTIL DUSK</span>
          <span className="pr-foot-line-2">
            <strong>SET IV · DESIGNED BY MOOR-RUNNER</strong><br />
            OX BIOMES — PRAIRIE · STAMPED INTO LEATHER STOCK
          </span>
        </div>
      </footer>
    </div>
  )
}
