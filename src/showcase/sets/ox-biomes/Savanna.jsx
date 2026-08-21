import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import './savanna.css'

const breeds = [
  { tag: 'BORORO', latin: 'Bos indicus', origin: 'Ethiopia', note: 'Hump the size of a saddle; ears that fling flies a body length away.' },
  { tag: 'ANKOLE', latin: 'Bos taurus africanus', origin: 'Uganda', note: 'The lyre-horned giant; Ankole kings measured wealth in living cattle, not coin.' },
  { tag: "N'DAMA", latin: 'Bos taurus', origin: 'Guinea-Bissau', note: "The small, patient, trypano-tolerant one — West Africa's working backbone for nine centuries." },
]

function CountUp({ value, prefix = '', suffix = '', duration = 1500 }) {
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
    <span className="sv-num" ref={ref}>
      {prefix ? <span className="sv-affix">{prefix}</span> : null}
      {display.toLocaleString('en-US')}
      {suffix ? <span className="sv-affix">{suffix}</span> : null}
    </span>
  )
}

function SavannaScene() {
  return (
    <svg className="sv-scene" viewBox="0 0 900 600" aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id="sv-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#E8B844" />
          <stop offset="0.5" stopColor="#D9933A" />
          <stop offset="1" stopColor="#B86A26" />
        </linearGradient>
        <radialGradient id="sv-sun" cx="50%" cy="50%" r="50%">
          <stop offset="0" stopColor="#FFE4A0" />
          <stop offset="0.7" stopColor="#E89B2A" />
          <stop offset="1" stopColor="#D9933A" stopOpacity="0" />
        </radialGradient>
        <pattern id="sv-cloth" width="60" height="60" patternUnits="userSpaceOnUse">
          <rect width="60" height="60" fill="#E8DCC2" />
          <rect x="6" y="6" width="48" height="48" fill="none" stroke="#1F2A52" strokeWidth="2" />
          <path d="M14,14 L46,46 M46,14 L14,46" stroke="#A63A1E" strokeWidth="1.5" />
        </pattern>
      </defs>

      <rect x="0" y="0" width="900" height="420" fill="url(#sv-sky)" />

      <motion.g
        className="sv-sun-g"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.6 }}
      >
        <circle cx="450" cy="240" r="160" fill="url(#sv-sun)" />
        <circle cx="450" cy="240" r="96" fill="#FFE4A0" />
        <g className="sv-rays" aria-hidden="true">
          {Array.from({ length: 16 }, (_, i) => {
            const a = (i * 22.5 * Math.PI) / 180
            const x1 = 450 + Math.cos(a) * 110
            const y1 = 240 + Math.sin(a) * 110
            const x2 = 450 + Math.cos(a) * 168
            const y2 = 240 + Math.sin(a) * 168
            return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#A63A1E" strokeWidth="3" strokeLinecap="round" />
          })}
        </g>
      </motion.g>

      <g className="sv-distant">
        <path d="M0,400 L80,360 L160,390 L260,340 L360,380 L460,330 L560,370 L660,340 L760,380 L840,360 L900,390 L900,420 L0,420 Z" fill="#6B3A1A" opacity="0.6" />
      </g>

      <g className="sv-ground">
        <path d="M0,420 Q200,400 400,420 Q600,400 800,420 Q900,412 900,420 L900,460 Q700,450 500,460 Q300,450 100,460 Q40,456 0,460 Z" fill="#7A4422" />
        <path d="M0,460 Q200,452 400,460 Q600,452 800,460 Q900,456 900,460 L900,510 Q700,502 500,510 Q300,502 100,510 Q40,506 0,510 Z" fill="#3A2010" />
        <rect x="0" y="510" width="900" height="90" fill="#1A1208" />
      </g>

      <g className="sv-acacia" transform="translate(720, 360)">
        <ellipse cx="0" cy="60" rx="24" ry="4" fill="#000" opacity="0.4" />
        <path d="M0,60 C-4,40 -4,20 -2,0 L-2,-30" stroke="#1A1208" strokeWidth="6" strokeLinecap="round" fill="none" />
        <path d="M-2,-30 C-2,-40 2,-44 6,-44" stroke="#1A1208" strokeWidth="3" fill="none" strokeLinecap="round" />
        <path d="M-2,-30 C-2,-40 -6,-44 -10,-44" stroke="#1A1208" strokeWidth="3" fill="none" strokeLinecap="round" />
        <ellipse cx="-3" cy="-50" rx="34" ry="14" fill="#3A2010" />
        <ellipse cx="3" cy="-58" rx="20" ry="10" fill="#5A3A1A" />
      </g>

      <g className="sv-acacia-sm" transform="translate(160, 412) scale(0.45)">
        <path d="M0,30 C-2,10 -2,-10 0,-30" stroke="#1A1208" strokeWidth="6" strokeLinecap="round" fill="none" />
        <ellipse cx="-2" cy="-40" rx="30" ry="12" fill="#3A2010" />
      </g>

      <g transform="translate(280, 380)">
        <ellipse cx="160" cy="120" rx="180" ry="10" fill="#000" opacity="0.35" />

        <path d="M14,80 C16,52 28,32 60,24 L62,8 L74,8 L72,24 C108,30 134,52 138,84 C168,90 184,114 178,144 C198,154 198,184 178,196 L172,224 L138,224 L142,200 C108,210 64,212 36,206 L40,224 L8,224 L10,206 C-12,200 -28,182 -28,158 C-46,150 -48,124 -32,114 C-38,98 -32,84 -14,80 C-12,68 -8,58 0,52 C4,40 8,30 14,24 Z" fill="#5A3A1A" />

        <path d="M68,30 C86,30 102,38 110,52 C100,46 86,46 76,52 C66,58 60,68 56,80 C50,72 50,58 56,46 C60,38 64,32 68,30 Z" fill="#3A2010" />

        <path d="M22,40 C2,30 -16,28 -38,40 C-50,46 -54,58 -48,68 C-30,60 -10,60 8,66 C20,68 28,72 32,82 C28,72 26,60 22,40 Z" fill="#3A2010" />

        <path d="M14,90 C4,90 -4,88 -10,82 C-6,76 -2,76 4,82 Z" fill="#1A1208" />

        <ellipse cx="146" cy="44" rx="5" ry="3" fill="#FFE4A0" />

        <path d="M-2,12 C-12,-2 -22,-12 -32,-2 C-22,8 -14,18 -8,30 Z" fill="#3A2010" />
        <path d="M22,-4 C32,-18 46,-22 54,-12 C42,-6 32,4 28,18 Z" fill="#3A2010" />

        <path d="M16,90 C8,108 -4,134 -10,156 L18,156 C16,134 22,108 30,90 Z" fill="#5A3A1A" />
        <path d="M180,90 C188,108 200,134 196,156 L168,156 C170,134 164,108 156,90 Z" fill="#5A3A1A" />

        <path d="M180,46 C220,40 248,52 254,68 C236,58 214,58 196,68 C186,72 178,80 174,92 C168,82 168,68 174,56 C176,52 178,48 180,46 Z" fill="#3A2010" />

        <g className="sv-dewlap">
          <path d="M52,110 C44,124 38,140 44,156 L58,156 C56,140 60,124 64,112 Z" fill="#3A2010" />
        </g>
      </g>

      <g className="sv-pattern-band" aria-hidden="true">
        <rect x="0" y="498" width="900" height="12" fill="url(#sv-cloth)" />
      </g>

      <g className="sv-heat" aria-hidden="true">
        <path d="M0,360 Q200,348 400,358 Q600,348 800,360 Q900,352 900,360" stroke="#FFE4A0" strokeWidth="1" fill="none" opacity="0.3" />
        <path d="M0,380 Q220,368 420,378 Q620,368 820,380 Q900,372 900,380" stroke="#FFE4A0" strokeWidth="1" fill="none" opacity="0.25" />
      </g>

      <g className="sv-bird" aria-hidden="true">
        <path d="M180,80 q4,-3 8,0 q4,-3 8,0" stroke="#1A1208" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <path d="M680,100 q3,-2 6,0 q3,-2 6,0" stroke="#1A1208" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      </g>
    </svg>
  )
}

function MudclothChop() {
  return (
    <motion.div
      className="sv-chop"
      initial={{ rotate: -8, opacity: 0 }}
      whileInView={{ rotate: 2, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ type: 'spring', stiffness: 130, damping: 14, delay: 0.3 }}
    >
      <svg viewBox="0 0 180 180" aria-hidden="true" focusable="false">
        <rect x="6" y="6" width="168" height="168" fill="#E8DCC2" stroke="#1F2A52" strokeWidth="3" />
        <rect x="14" y="14" width="152" height="152" fill="none" stroke="#1F2A52" strokeWidth="1" strokeDasharray="4 4" />
        <g transform="translate(90 90)" fill="#1F2A52">
          <path d="M-34,-22 L34,-22 L34,-6 L18,-6 L18,2 L-18,2 L-18,-6 L-34,-6 Z" />
          <path d="M-34,22 L34,22 L34,6 L18,6 L18,-2 L-18,-2 L-18,6 L-34,6 Z" />
          <circle cx="-30" cy="0" r="4" />
          <circle cx="30" cy="0" r="4" />
        </g>
        <g transform="translate(90 76)" fill="#A63A1E">
          <path d="M-18,0 C-18,-12 -8,-18 0,-18 C8,-18 18,-12 18,0 C18,12 8,18 0,18 C-8,18 -18,12 -18,0 Z" />
          <path d="M-12,0 C-12,-7 -6,-10 0,-10 C6,-10 12,-7 12,0 C12,7 6,10 0,10 C-6,10 -12,7 -12,0 Z" fill="#E8DCC2" />
        </g>
        <text x="90" y="118" textAnchor="middle" fontFamily="Big Shoulders Display, sans-serif" fontWeight="800" fontSize="12" letterSpacing="0.18em" fill="#1F2A52">
          SET IV · MOOR-RUNNER
        </text>
        <text x="90" y="138" textAnchor="middle" fontFamily="Karla, sans-serif" fontWeight="700" fontSize="8" letterSpacing="0.32em" fill="#A63A1E">
          NG'OMBE · HORN OF AFRICA
        </text>
      </svg>
    </motion.div>
  )
}

export default function Savanna() {
  return (
    <div className="th-savanna">
      <header className="sv-topband" aria-label="Woven border">
        <div className="sv-topband-pattern" aria-hidden="true">
          {Array.from({ length: 20 }, (_, i) => (
            <span key={i} className={`sv-topband-cell sv-topband-cell-${i % 4}`} />
          ))}
        </div>
        <div className="sv-topband-text">
          <span>NG'OMBE · BOS INDICUS · HORN OF AFRICA</span>
          <span className="sv-topband-rule" aria-hidden="true" />
          <span>ESTABLISHED BY THE WALKING OF THE HERD</span>
        </div>
      </header>

      <section className="sv-hero">
        <motion.div
          className="sv-hero-copy"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <p className="sv-kicker">SUN, SAND, SHOULDER HUMP</p>
          <h1 className="sv-headline">
            <span className="sv-headline-1">SAVANNA</span>
            <span className="sv-headline-2">/ sə-ˈva-nə /</span>
          </h1>
          <p className="sv-lede">
            The zebu walks the dust of the dry season as if dust were a country in itself. Its
            shoulder hump — a fatty pillow of stored protein, not a structural bone — swells in the
            wet months and shrinks through the lean; its long ears never stop searching the wind for
            the next fly. Across the Sahel, the Ogaden, the Serengeti and Tamil Nadu, this is the
            animal that taught the dry tropics how to keep working when the grass turned to wire.
          </p>

          <div className="sv-counts">
            <div className="sv-count">
              <CountUp value={460} suffix=" M" />
              <span className="sv-count-unit">HEAD</span>
              <span className="sv-count-label">Of zebu on Earth today · 90 % of Africa's cattle are zebu or zebu-cross</span>
            </div>
            <div className="sv-count">
              <CountUp value={45} suffix=" °C" />
              <span className="sv-count-unit">SKIN TEMP</span>
 <span className="sv-count-label">A zebu stays 4–6 °C cooler than a taurus in midday heat</span>
            </div>
            <div className="sv-count">
              <CountUp value={400} suffix=" L" />
              <span className="sv-count-unit">A DAY</span>
              <span className="sv-count-label">Of water a working bull loses to sweat and breath</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="sv-hero-art"
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.0, delay: 0.2, ease: 'easeOut' }}
        >
          <SavannaScene />
          <div className="sv-art-foot">
            <span>
              <strong>Plate V.</strong> Zebu bull at the noon-water, edge of the acacia belt.
              Drooping ears, raised hump, dust suspended in still air.
            </span>
            <span className="sv-art-scale">DRAWN FROM LIFE · OGADEN, 1962</span>
          </div>
        </motion.div>
      </section>

      <section className="sv-breeds" aria-label="Three breeds of the savanna">
        <div className="sv-breeds-head">
          <span className="sv-breeds-head-h">THREE BREEDS · MOJA TATU</span>
          <span className="sv-breeds-head-sub">From the Sahel to the Serengeti</span>
        </div>
        <div className="sv-breeds-grid">
          {breeds.map((b, i) => (
            <motion.article
              key={b.tag}
              className="sv-breed"
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.55, delay: i * 0.12 }}
            >
              <span className="sv-breed-num">0{i + 1}</span>
              <h3>{b.tag}</h3>
              <p className="sv-breed-latin" lang={b.latin.startsWith('Bos') ? 'la' : 'sw'}>{b.latin}</p>
              <p className="sv-breed-origin">{b.origin}</p>
              <p className="sv-breed-note">{b.note}</p>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="sv-loom" aria-label="The woven tradition">
        <div className="sv-loom-grid">
          <motion.div
            className="sv-loom-text"
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
          >
            <h2>THE WOVEN BORDER</h2>
            <p>
              Across the dry belt, women weave the geometry of cattle into the cloth — Bororo
              blankets, Kente sash, Mudcloth panels. Each pattern names an animal trait: the hump
              becomes a pyramid, the horn becomes a chevron, the dewlap becomes a chevroned stripe.
              The cloth is the legend, the cattle are the source.
            </p>
            <p>
              In Bororo Fulani wedding tradition, the bride is given a blanket whose every diamond
              is a wish for the herd. When the herd grows, another diamond is added. When the
              herd fails, the diamond is left empty, but never removed.
            </p>
          </motion.div>

          <motion.div
            className="sv-loom-art"
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <svg viewBox="0 0 320 220" aria-hidden="true" focusable="false">
              <rect x="10" y="10" width="300" height="200" fill="#E8DCC2" stroke="#1F2A52" strokeWidth="3" />
              {Array.from({ length: 7 }, (_, c) =>
                Array.from({ length: 4 }, (_, r) => (
                  <g key={`${c}-${r}`} transform={`translate(${30 + c * 40} ${30 + r * 45})`}>
                    <rect x="-15" y="-15" width="30" height="30" fill="#1F2A52" />
                    <path d="M-10,-10 L10,10 M10,-10 L-10,10" stroke="#E8DCC2" strokeWidth="1.5" />
                    <circle cx="0" cy="0" r="6" fill="#A63A1E" />
                    <circle cx="0" cy="0" r="2" fill="#E8DCC2" />
                  </g>
                )),
              )}
              <g transform="translate(160 110)" fill="#1F2A52">
                <path d="M-22,-14 C-26,-22 -18,-28 -8,-28 L8,-28 C18,-28 26,-22 22,-14 C26,-6 26,4 22,12 C26,18 22,24 14,24 L-14,24 C-22,24 -26,18 -22,12 C-26,4 -26,-6 -22,-14 Z" />
                <ellipse cx="-8" cy="-10" rx="3" ry="2" fill="#E8DCC2" />
                <ellipse cx="8" cy="-10" rx="3" ry="2" fill="#E8DCC2" />
                <path d="M-22,-12 L-30,-22" stroke="#1F2A52" strokeWidth="3" strokeLinecap="round" fill="none" />
                <path d="M22,-12 L30,-22" stroke="#1F2A52" strokeWidth="3" strokeLinecap="round" fill="none" />
              </g>
              <rect x="20" y="194" width="280" height="2" fill="#A63A1E" />
              <rect x="20" y="200" width="280" height="2" fill="#A63A1E" />
              <rect x="20" y="22" width="280" height="2" fill="#A63A1E" />
            </svg>
          </motion.div>
        </div>
      </section>

      <motion.blockquote
        className="sv-quote"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.7 }}
      >
        <p lang="sw">“Ng'ombe ni utajiri wa mchunga — mkulima hufa, ng'ombe hushikilia ardhi.”</p>
        <p>“The cow is the herder's wealth — when the herder dies, the cow keeps the land.”</p>
        <cite>— Maasai saying, southern Kenya</cite>
      </motion.blockquote>

      <footer className="sv-foot">
        <MudclothChop />
        <div className="sv-foot-meta">
          <span className="sv-foot-line-1">OX BIOMES — SAVANNA · 05 / 05</span>
          <span className="sv-foot-line-2">
            <strong>SET IV · DESIGNED BY MOOR-RUNNER</strong><br />
            WOVEN FROM MEMORY · BORORO-BOZO TEXTILE TRADITION · MUDCLOTH-FROM-PRINT
          </span>
        </div>
      </footer>
    </div>
  )
}
