import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import './monsoon.css'

const seasons = [
  { tag: 'AMIHAN', span: 'Nov – May', latin: 'Northeast monsoon', note: 'Dry weeks, cracked paddies, carabao tethered under the mango.' },
  { tag: 'TAG-ULAN', span: 'Jun – Oct', latin: 'Southwest monsoon', note: 'Six months of rain, soil turning to soup, planting in mud to the hock.' },
]

const crops = [
  { name: 'PALAY', latin: 'Oryza sativa', use: 'Staple grain', detail: 'Two crops a year in the lowland paddy. The carabao walks the bund to level the mud between harvests.' },
  { name: 'TABAKO', latin: 'Nicotiana tabacum', use: 'Curing leaf', detail: 'Hung in the bahay kubu to yellow under monsoon cloud. The carabao hauls it down the path to market.' },
  { name: 'NIYOG', latin: 'Cocos nucifera', use: 'Every part', detail: 'Copra, oil, leaf, husk, trunk. The carabao cannot climb, but it carries every fruit the tree lets fall.' },
]

function CountUp({ value, duration = 1600 }) {
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
    <span className="mon-num" ref={ref}>
      {display.toLocaleString('en-US')}
    </span>
  )
}

function PaddyScene() {
  return (
    <svg className="mon-scene" viewBox="0 0 900 600" aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id="mon-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#F6F1E5" />
          <stop offset="1" stopColor="#DDE6DB" />
        </linearGradient>
        <linearGradient id="mon-water" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#9CB6BB" />
          <stop offset="1" stopColor="#5A7783" />
        </linearGradient>
        <pattern id="mon-ripple" width="60" height="20" patternUnits="userSpaceOnUse">
          <path d="M0,12 Q15,4 30,12 T60,12" stroke="#F6F1E5" strokeWidth="1" fill="none" opacity="0.5" />
        </pattern>
        <pattern id="mon-leaves" width="120" height="120" patternUnits="userSpaceOnUse">
          <path d="M60,12 Q44,40 60,68 Q76,40 60,12 Z" fill="#3D7A4E" opacity="0.18" />
          <path d="M60,12 Q44,40 60,68 Q76,40 60,12 Z" fill="none" stroke="#3D7A4E" strokeWidth="0.6" opacity="0.4" />
        </pattern>
      </defs>

      <rect x="0" y="0" width="900" height="320" fill="url(#mon-sky)" />

      <g className="mon-clouds" aria-hidden="true">
        <ellipse cx="180" cy="100" rx="90" ry="22" fill="#FFFFFF" opacity="0.7" />
        <ellipse cx="240" cy="92" rx="60" ry="18" fill="#FFFFFF" opacity="0.65" />
        <ellipse cx="660" cy="76" rx="110" ry="22" fill="#FFFFFF" opacity="0.65" />
        <ellipse cx="720" cy="86" rx="60" ry="16" fill="#FFFFFF" opacity="0.6" />
        <ellipse cx="120" cy="180" rx="70" ry="14" fill="#FFFFFF" opacity="0.4" />
        <ellipse cx="780" cy="200" rx="80" ry="16" fill="#FFFFFF" opacity="0.4" />
      </g>

      <g className="mon-mountain">
        <path d="M0,320 L0,260 L120,200 L260,250 L380,180 L520,240 L660,210 L820,250 L900,220 L900,320 Z" fill="#7DA294" opacity="0.55" />
        <path d="M0,320 L0,290 L100,260 L220,290 L360,250 L500,290 L640,260 L800,290 L900,270 L900,320 Z" fill="#5A7783" opacity="0.4" />
      </g>

      <g className="mon-rain" aria-hidden="true">
        {Array.from({ length: 22 }, (_, i) => (
          <line
            key={i}
            className={`mon-rain-line mon-rain-${i % 6}`}
            x1={40 + i * 38}
            y1={150 + (i % 4) * 18}
            x2={36 + i * 38}
            y2={170 + (i % 4) * 18}
            stroke="#1E3A5F"
            strokeWidth="1.4"
            strokeLinecap="round"
            opacity="0.6"
          />
        ))}
      </g>

      <rect x="0" y="320" width="900" height="280" fill="url(#mon-water)" />
      <rect x="0" y="320" width="900" height="280" fill="url(#mon-ripple)" opacity="0.55" />

      <g className="mon-bund">
        <path d="M0,348 Q220,344 460,350 Q700,344 900,352 L900,360 Q700,352 460,358 Q220,352 0,358 Z" fill="#5A4530" />
        <path d="M0,358 Q220,352 460,358 Q700,352 900,358 L900,366 Q700,360 460,366 Q220,360 0,366 Z" fill="#3F2F20" />
      </g>

      <g className="mon-bund-bund">
        <path d="M180,440 Q220,438 260,440 L262,452 Q220,450 178,452 Z" fill="#3F2F20" opacity="0.7" />
        <path d="M580,468 Q640,464 700,468 L702,478 Q640,476 578,478 Z" fill="#3F2F20" opacity="0.7" />
      </g>

      <rect x="0" y="320" width="900" height="280" fill="url(#mon-leaves)" opacity="0.45" />

      <g transform="translate(390, 380)">
        <ellipse cx="64" cy="100" rx="76" ry="10" fill="#000" opacity="0.22" />
        <path
          d="M-4,72 C-2,46 14,28 46,22 C66,8 102,4 132,12 C164,8 192,24 196,52 C214,60 222,82 210,98 C222,108 218,128 200,134 C200,150 184,158 164,156 L162,184 L138,184 L138,162 C116,166 92,162 72,156 L72,184 L48,184 L46,156 C26,156 10,148 2,134 C-14,128 -16,108 -6,98 C-14,86 -10,72 -4,72 Z"
          fill="#3A2820"
        />
        <path d="M44,44 C56,28 80,18 110,22 C102,32 92,42 84,52 C74,58 56,58 44,44 Z" fill="#241710" />
        <ellipse cx="142" cy="40" rx="5" ry="3" fill="#F6F1E5" />

        <path d="M-12,30 C-44,18 -76,18 -102,30 C-118,34 -124,46 -118,56 C-100,50 -76,52 -58,58 C-40,60 -22,64 -8,76 Z" fill="#241710" />
        <path d="M204,30 C236,18 268,18 294,30 C310,34 316,46 310,56 C292,50 268,52 250,58 C232,60 214,64 200,76 Z" fill="#241710" />

        <path d="M30,98 C18,128 8,160 14,200 L46,200 C40,168 50,138 60,108 Z" fill="#3A2820" />
        <path d="M152,98 C164,128 174,160 168,200 L136,200 C142,168 132,138 122,108 Z" fill="#3A2820" />

        <ellipse cx="200" cy="76" rx="20" ry="6" fill="#3A2820" opacity="0.5" />
      </g>

      <g className="mon-dragonfly mon-dragonfly-1" aria-hidden="true">
        <line x1="0" y1="0" x2="14" y2="0" stroke="#1E3A5F" strokeWidth="2" strokeLinecap="round" />
        <ellipse cx="-3" cy="-3" rx="6" ry="2" fill="#1E3A5F" opacity="0.5" />
        <ellipse cx="-3" cy="3" rx="6" ry="2" fill="#1E3A5F" opacity="0.5" />
        <ellipse cx="6" cy="-3" rx="6" ry="2" fill="#1E3A5F" opacity="0.5" />
        <ellipse cx="6" cy="3" rx="6" ry="2" fill="#1E3A5F" opacity="0.5" />
      </g>

      <g className="mon-dragonfly mon-dragonfly-2" aria-hidden="true">
        <line x1="0" y1="0" x2="12" y2="0" stroke="#C2412A" strokeWidth="2" strokeLinecap="round" />
        <ellipse cx="-2" cy="-2" rx="5" ry="2" fill="#C2412A" opacity="0.55" />
        <ellipse cx="-2" cy="2" rx="5" ry="2" fill="#C2412A" opacity="0.55" />
        <ellipse cx="5" cy="-2" rx="5" ry="2" fill="#C2412A" opacity="0.55" />
        <ellipse cx="5" cy="2" rx="5" ry="2" fill="#C2412A" opacity="0.55" />
      </g>

      <g className="mon-grass" aria-hidden="true">
        {Array.from({ length: 18 }, (_, i) => {
          const x = 30 + i * 50
          const h = 14 + (i % 4) * 6
          return (
            <g key={i} transform={`translate(${x} ${580 - h})`}>
              <path d={`M0,${h} Q-4,${h / 2} 0,0`} stroke="#3D7A4E" strokeWidth="2" fill="none" strokeLinecap="round" />
            </g>
          )
        })}
      </g>
    </svg>
  )
}

function WaterStamp() {
  return (
    <motion.svg
      className="mon-stamp"
      viewBox="0 0 200 80"
      aria-hidden="true"
      focusable="false"
      initial={{ rotate: -10, opacity: 0 }}
      whileInView={{ rotate: -2, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ type: 'spring', stiffness: 140, damping: 14, delay: 0.4 }}
    >
      <rect x="2" y="2" width="196" height="76" fill="none" stroke="#C2412A" strokeWidth="2.5" />
      <rect x="8" y="8" width="184" height="64" fill="none" stroke="#C2412A" strokeWidth="1" strokeDasharray="3 3" />
      <text x="100" y="34" textAnchor="middle" fontFamily="Fraunces, serif" fontWeight="800" fontStyle="italic" fontSize="22" fill="#C2412A">
        KALABAW
      </text>
      <text x="100" y="56" textAnchor="middle" fontFamily="Karla, sans-serif" fontWeight="700" fontSize="9" letterSpacing="3" fill="#C2412A">
        SET IV · MINIMAX M3
      </text>
    </motion.svg>
  )
}

export default function Monsoon() {
  return (
    <div className="th-monsoon">
      <div className="mon-paper-edge" aria-hidden="true" />

      <header className="mon-topline">
        <span className="mon-topline-tag">FIELD STUDY № 02 · LUZON</span>
        <span className="mon-topline-rule" aria-hidden="true" />
        <span className="mon-topline-climate">TROPICAL MONSOON · 27 °C · HUMIDITY 88 %</span>
      </header>

      <section className="mon-hero">
        <motion.div
          className="mon-hero-copy"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <p className="mon-kicker" lang="tl">KALABAW · BUBALUS BUBALIS CARABANESIS</p>
          <h1 className="mon-headline">
            <span className="mon-headline-script">monsoon</span>
            <span className="mon-headline-cap">A mud-brown shoulder<br />in a green-blue field.</span>
          </h1>
          <p className="mon-lede">
            Where the rice grows wet, the carabao belongs. Philippine farmers have leaned on its
            shoulders for four centuries of puddling — that slow, slow walk that turns a freshly
            flooded field into a level sheet of mud ready for seedlings. Cool by nature, tireless by
            training, the carabao takes the heat that would lay a man flat, and at dusk bathes in the
            same water it ploughed by morning.
          </p>

          <div className="mon-counts">
            <div className="mon-count">
              <CountUp value={12} />
              <span className="mon-count-unit">hr</span>
              <span className="mon-count-label">Of puddling a single carabao can do in one cool shift</span>
            </div>
            <div className="mon-count">
              <CountUp value={2700} />
              <span className="mon-count-unit">mm</span>
              <span className="mon-count-label">Annual rain the paddies depend on — and the carabao, too</span>
            </div>
            <div className="mon-count">
              <CountUp value={3} />
              <span className="mon-count-unit">ha</span>
              <span className="mon-count-label">Of lowland a small herd can keep in rice for a season</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="mon-hero-art"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: 'easeOut' }}
        >
          <div className="mon-tape mon-tape-1" aria-hidden="true" />
          <div className="mon-tape mon-tape-2" aria-hidden="true" />
          <PaddyScene />
          <span className="mon-art-caption">
            <em>Fig. 1.</em> Carabao at the bund of a freshly puddled paddy, Batac plain, late
            habagat. Note the half-sunk stance and the yoke mark across the horn.
          </span>
        </motion.div>
      </section>

      <section className="mon-seasons" aria-label="The two monsoons">
        <div className="mon-seasons-head">
          <span className="mon-seasons-head-glyph">☂</span>
          <span className="mon-seasons-head-text">Two seasons. One animal in the middle.</span>
        </div>
        <div className="mon-seasons-body">
          {seasons.map((s, i) => (
            <motion.article
              key={s.tag}
              className="mon-season"
              initial={{ opacity: 0, x: i === 0 ? -16 : 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <h3 className="mon-season-tag">{s.tag}</h3>
              <p className="mon-season-span">{s.span}</p>
              <p className="mon-season-latin">{s.latin}</p>
              <p className="mon-season-note">{s.note}</p>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="mon-crops" aria-label="Crops of the wet field">
        <h2 className="mon-section-h">CROPS · 三作</h2>
        <div className="mon-crops-grid">
          {crops.map((c, i) => (
            <motion.article
              key={c.name}
              className="mon-crop"
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.55, delay: i * 0.12 }}
            >
              <div className="mon-crop-mark">
                <svg viewBox="0 0 80 80" aria-hidden="true" focusable="false">
                  <circle cx="40" cy="40" r="36" fill="#F6F1E5" stroke="#1E3A5F" strokeWidth="2" />
                  <text x="40" y="48" textAnchor="middle" fontFamily="Fraunces, serif" fontWeight="900" fontStyle="italic" fontSize="26" fill="#1E3A5F">
                    {c.name[0]}
                  </text>
                </svg>
              </div>
              <h3>{c.name}</h3>
              <p className="mon-crop-latin" lang="la">{c.latin}</p>
              <p className="mon-crop-use">{c.use}</p>
              <p className="mon-crop-detail">{c.detail}</p>
            </motion.article>
          ))}
        </div>
      </section>

      <motion.blockquote
        className="mon-quote"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.7 }}
      >
        <p lang="tl">“Ang kalabaw ay kaibigan ng magsasaka — hindi alipin, hindi hayop, kundi kasama sa putikan.”</p>
        <p>“The carabao is the farmer's friend — neither slave nor beast, but a companion in the mud.”</p>
        <cite>— Batac farmer, recalled by Nida Tomeldan, 1987</cite>
      </motion.blockquote>

      <footer className="mon-foot">
        <WaterStamp />
        <div className="mon-foot-meta">
          <span className="mon-foot-line-1">OX BIOMES — MONSOON · ISLA NG LUZON</span>
          <span className="mon-foot-line-2">Hand-drafted after the 1929 Bureau of Plant Industry monograph on carabao husbandry.</span>
        </div>
      </footer>
    </div>
  )
}
