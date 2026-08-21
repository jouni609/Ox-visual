import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import './mist.css'

const facts = [
  { value: 4500, suffix: ' M', label: 'Altitude of summer pasture' },
  { value: -40, prefix: '−', suffix: ' °C', label: 'Cold the long hair survives' },
  { value: 14, suffix: ' YR', label: 'Years a yak may work a thresh' },
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
    <span className="mist-num" ref={ref}>
      {prefix ? <span className="mist-affix">{prefix}</span> : null}
      {display.toLocaleString('en-US')}
      {suffix ? <span className="mist-affix">{suffix}</span> : null}
    </span>
  )
}

function PrayerFlags() {
  const flags = [
    { color: '#E89B2A', glyph: '༄' },
    { color: '#C2412A', glyph: '༅' },
    { color: '#1F6E5C', glyph: '༆' },
    { color: '#2B3A6B', glyph: '༇' },
    { color: '#E8DCC2', glyph: '༈' },
  ]
  return (
    <svg className="mist-flags" viewBox="0 0 1200 130" aria-hidden="true" focusable="false">
      <line x1="0" y1="22" x2="1200" y2="22" stroke="#2B2418" strokeWidth="2" />
      {Array.from({ length: 12 }, (_, i) => {
        const x = 30 + i * 96
        const f = flags[i % flags.length]
        const sway = Math.sin((i + 1) * 0.7) * 4
        return (
          <g key={i} className={`mist-flag mist-flag-${i % 5}`} transform={`translate(${x} 22)`}>
            <path d={`M0,0 L0,72 Q20,${68 + sway} 40,72 L40,0 Z`} fill={f.color} />
            <text x="20" y="46" textAnchor="middle" fontFamily="Noto Serif Tibetan, serif" fontSize="34" fill="#F4EFE3">
              {f.glyph}
            </text>
            <line x1="0" y1="0" x2="0" y2="74" stroke="#2B2418" strokeWidth="1" />
          </g>
        )
      })}
      <circle cx="6" cy="22" r="6" fill="#E89B2A" stroke="#2B2418" strokeWidth="1.5" />
      <circle cx="1194" cy="22" r="6" fill="#E89B2A" stroke="#2B2418" strokeWidth="1.5" />
    </svg>
  )
}

function MistScene() {
  return (
    <svg className="mist-scene" viewBox="0 0 900 640" aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id="mist-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#D9E3EE" />
          <stop offset="0.55" stopColor="#EEEFE9" />
          <stop offset="1" stopColor="#F4EFE3" />
        </linearGradient>
        <linearGradient id="mist-snow" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#A8B4C4" />
          <stop offset="1" stopColor="#5D6B7E" />
        </linearGradient>
      </defs>
      <rect x="0" y="0" width="900" height="640" fill="url(#mist-sky)" />

      <motion.g
        className="mist-sun"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ duration: 2 }}
      >
        <circle cx="640" cy="150" r="78" fill="#E89B2A" opacity="0.18" />
        <circle cx="640" cy="150" r="46" fill="#E89B2A" opacity="0.6" />
        <circle cx="640" cy="150" r="22" fill="#E89B2A" />
      </motion.g>

      <g className="mist-far mist-far-a">
        <path d="M0,420 L90,340 L150,290 L210,330 L280,260 L360,310 L430,250 L520,300 L600,240 L680,290 L760,260 L840,310 L900,280 L900,440 L0,440 Z" fill="url(#mist-snow)" opacity="0.55" />
      </g>

      <g className="mist-mid mist-mid-a">
        <path d="M0,470 L80,400 L160,360 L240,400 L330,330 L420,380 L510,340 L610,400 L700,350 L800,410 L900,370 L900,500 L0,500 Z" fill="url(#mist-snow)" opacity="0.78" />
      </g>

      <g className="mist-mid mist-mid-b">
        <path d="M0,510 L70,460 L150,430 L230,460 L310,420 L400,450 L490,420 L580,460 L670,430 L760,470 L850,440 L900,460 L900,560 L0,560 Z" fill="#3F4A60" opacity="0.7" />
      </g>

      <g className="mist-mistband">
        <ellipse cx="200" cy="500" rx="320" ry="22" fill="#F4EFE3" opacity="0.6" />
        <ellipse cx="640" cy="490" rx="280" ry="18" fill="#F4EFE3" opacity="0.5" />
        <ellipse cx="420" cy="540" rx="380" ry="26" fill="#F4EFE3" opacity="0.4" />
      </g>

      <g className="mist-mistdrift">
        <ellipse cx="180" cy="430" rx="80" ry="14" fill="#F4EFE3" opacity="0.45" />
        <ellipse cx="380" cy="416" rx="120" ry="12" fill="#F4EFE3" opacity="0.4" />
        <ellipse cx="600" cy="424" rx="100" ry="13" fill="#F4EFE3" opacity="0.45" />
        <ellipse cx="760" cy="430" rx="70" ry="11" fill="#F4EFE3" opacity="0.4" />
      </g>

      <g transform="translate(300, 388)">
        <path
          d="M0,80 C-2,52 8,30 38,20 C58,4 96,-4 138,4 C172,8 198,28 202,60 C220,72 232,90 226,116 C240,128 240,150 226,162 C228,178 218,194 196,200 L188,236 L160,236 L162,210 C140,224 100,228 70,224 L74,256 L46,256 L42,224 C20,224 -4,210 -10,184 C-26,184 -36,164 -28,148 C-34,134 -28,116 -14,108 C-12,92 -6,82 0,80 Z"
          fill="#1F1A12"
        />
        <path
          d="M28,52 C42,28 70,16 100,18 C92,28 80,42 72,52 C62,60 46,62 28,52 Z"
          fill="#0E0B07"
        />
        <ellipse cx="146" cy="44" rx="6" ry="4" fill="#F4EFE3" />
        <ellipse cx="160" cy="46" rx="5" ry="3" fill="#F4EFE3" />

        <path d="M-6,30 C-30,18 -54,16 -78,28 C-92,32 -98,42 -94,52 C-78,46 -56,46 -38,52 C-22,56 -10,60 0,72 Z" fill="#0E0B07" />
        <path d="M204,30 C228,18 252,16 276,28 C290,32 296,42 292,52 C276,46 254,46 236,52 C220,56 208,60 198,72 Z" fill="#0E0B07" />

        <path d="M28,200 C18,228 12,256 16,288 L46,288 C42,260 50,232 60,210 Z" fill="#1F1A12" />
        <path d="M152,200 C162,228 168,256 164,288 L134,288 C138,260 130,232 120,210 Z" fill="#1F1A12" />

        <g className="mist-snowdrift">
          <path d="M-40,288 Q60,260 130,278 Q200,260 280,290 L280,320 L-40,320 Z" fill="#F4EFE3" />
        </g>
      </g>

      <g className="mist-birds" aria-hidden="true">
        <path d="M120,170 q8,-6 16,0 q8,-6 16,0" stroke="#2B2418" strokeWidth="2" fill="none" strokeLinecap="round" />
        <path d="M180,140 q6,-5 12,0 q6,-5 12,0" stroke="#2B2418" strokeWidth="2" fill="none" strokeLinecap="round" />
        <path d="M740,200 q6,-5 12,0 q6,-5 12,0" stroke="#2B2418" strokeWidth="2" fill="none" strokeLinecap="round" />
      </g>
    </svg>
  )
}

function TibetanTag() {
  return (
    <div className="mist-tibetan-tag" aria-hidden="true">
      <span className="mist-tibetan-glyph">༄༅༆</span>
      <span className="mist-tibetan-line">བོད་ཀྱི་ནོར་གནག</span>
      <span className="mist-tibetan-line">མཐོ་སྒང་གི་གཟིགས་བརྗོད</span>
    </div>
  )
}

export default function Mist() {
  return (
    <div className="th-mist">
      <header className="mist-flags-wrap" aria-label="Prayer flags above the high plateau">
        <PrayerFlags />
      </header>

      <section className="mist-hero">
        <motion.div
          className="mist-hero-text"
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
        >
          <p className="mist-kicker">ཨ་རི · BOS GRUNNIENS · THE TIBETAN YAK</p>
          <h1 className="mist-headline">
            <span lang="bo" className="mist-tibetan-mist">སྨུག་པ</span>
            <span className="mist-headline-en">MIST</span>
          </h1>
          <p className="mist-subline">A long-hair coat, a slow breath, a four-thousand-metre patience.</p>
          <p className="mist-lede">
            The yak does not live below the clouds — it lives <em>in</em> them. Bred on the Chang Tang for
            ten thousand years, it carries salt, pulls the plough, gives milk richer than a Jersey cow's
            and hair that Himalayan weavers still comb into winter cloth. When the monsoon fails, the
            yak walks. When the snow falls, the yak stands. It is the animal the plateau was built
            around.
          </p>
        </motion.div>

        <motion.div
          className="mist-hero-art"
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, delay: 0.2, ease: 'easeOut' }}
        >
          <MistScene />
        </motion.div>
      </section>

      <section className="mist-strip" aria-label="Yak field notes">
        <div className="mist-strip-rule" aria-hidden="true" />
        <div className="mist-strip-inner">
          {facts.map((fact) => (
            <div className="mist-stat" key={fact.label}>
              <CountUp value={fact.value} prefix={fact.prefix} suffix={fact.suffix} />
              <span className="mist-label">{fact.label}</span>
            </div>
          ))}
        </div>
        <div className="mist-strip-rule" aria-hidden="true" />
      </section>

      <motion.blockquote
        className="mist-quote"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.7 }}
      >
        <p lang="bo" className="mist-quote-tib">ནོར་གནག་ནི་མཐོ་སྒང་གི་སྙིང་པོ་རེད།</p>
        <p>“The yak is the heartbeat of the high land.”</p>
        <cite>— Herder saying, eastern Chang Tang</cite>
      </motion.blockquote>

      <section className="mist-monastic" aria-label="Field ledger">
        <div className="mist-monastic-head">
          <span>ཐོ་འགོད · LEDGER OF ONE HERD</span>
        </div>
        <div className="mist-monastic-body">
          <div className="mist-monastic-row">
            <span className="mist-monastic-key">Stock</span>
            <span className="mist-monastic-val">37 head — 9 milch, 4 working, 24 young</span>
          </div>
          <div className="mist-monastic-row">
            <span className="mist-monastic-key">Summer camp</span>
            <span className="mist-monastic-val">4 480 m · west face of Nyenchen Tanglha</span>
          </div>
          <div className="mist-monastic-row">
            <span className="mist-monastic-key">Hair cut</span>
            <span className="mist-monastic-val">once a year, June · ~ 1.8 kg / animal</span>
          </div>
          <div className="mist-monastic-row">
            <span className="mist-monastic-key">Butter yield</span>
            <span className="mist-monastic-val">3.6 kg / week per milch cow in monsoon</span>
          </div>
          <div className="mist-monastic-row mist-monastic-row-last">
            <span className="mist-monastic-key">Name of herd</span>
            <span className="mist-monastic-val" lang="bo">སྤྲིན་གཟེར</span>
          </div>
        </div>
      </section>

      <footer className="mist-foot">
        <div className="mist-tag-wrap">
          <TibetanTag />
        </div>
        <div className="mist-signature">
          <span className="mist-signature-mark">SET IV · DESIGNED BY MOOR-RUNNER</span>
          <span className="mist-signature-sub">OX BIOMES — MIST · STRUCK INTO PRINTED PAPER</span>
        </div>
      </footer>
    </div>
  )
}
