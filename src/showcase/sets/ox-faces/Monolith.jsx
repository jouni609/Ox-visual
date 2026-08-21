import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import './monolith.css'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
}

const rise = {
  hidden: { y: 90, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 110, damping: 17 } },
}

const MARQUEE_ITEMS = ['NO SHORTCUTS', '900 KG OF PULL', 'HEART OF A TRACTOR', 'RUNNING SINCE 8000 BC', 'ZERO EXCUSES']

function Stat({ value, suffix, label }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [n, setN] = useState(0)

  useEffect(() => {
    if (!inView) return undefined
    const duration = 1400
    const t0 = performance.now()
    let raf
    const tick = (t) => {
      const p = Math.min(1, (t - t0) / duration)
      const eased = 1 - Math.pow(1 - p, 3)
      setN(Math.round(value * eased))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, value])

  return (
    <div className="mono-stat" ref={ref}>
      <div className="mono-stat-num">
        {n.toLocaleString()}
        {suffix}
      </div>
      <div className="mono-stat-label">{label}</div>
    </div>
  )
}

function GeometricOx() {
  return (
    <svg className="mono-ox" viewBox="0 0 420 470" aria-hidden="true">
      <g transform="translate(18,18)" fill="#ff4d00">
        <polygon points="36,150 128,96 156,150 96,192" />
        <polygon points="384,150 292,96 264,150 324,192" />
        <polygon points="128,120 292,120 336,268 210,428 84,268" />
      </g>
      <g fill="#f2ede4">
        <polygon points="36,150 128,96 156,150 96,192" />
        <polygon points="384,150 292,96 264,150 324,192" />
        <polygon points="128,120 292,120 336,268 210,428 84,268" />
      </g>
      <polygon points="128,120 292,120 266,180 154,180" fill="#111111" />
      <rect x="150" y="212" width="34" height="34" fill="#ff4d00" />
      <rect x="236" y="212" width="34" height="34" fill="#ff4d00" />
      <polygon points="154,266 266,266 210,336" fill="#d8cdb8" />
      <rect x="176" y="356" width="20" height="20" fill="#111111" />
      <rect x="224" y="356" width="20" height="20" fill="#111111" />
    </svg>
  )
}

function MarqueeHalf() {
  return (
    <div className="mono-marquee-half">
      {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
        <span key={i}>
          {item}
          <em>✕</em>
        </span>
      ))}
    </div>
  )
}

export default function Monolith() {
  return (
    <div className="th-monolith">
      <header className="mono-nav">
        <span className="mono-logo">
          OX<sup>™</sup>
        </span>
        <nav className="mono-links">
          <button type="button">STRENGTH</button>
          <button type="button">STAMINA</button>
          <button type="button">STEEL</button>
        </nav>
      </header>

      <section className="mono-hero">
        <motion.div className="mono-hero-copy" variants={container} initial="hidden" animate="show">
          <motion.p className="mono-kicker" variants={rise}>
            INDUSTRIAL STRENGTH DIVISION — EST. 8000 BC
          </motion.p>
          <motion.h1 className="mono-title" variants={rise}>
            <span>RAW</span>
            <span className="mono-outline">POWER</span>
          </motion.h1>
          <motion.p className="mono-sub" variants={rise}>
            The oldest engine ever built. Fuel: grass. Maintenance: none. Torque: yes.
          </motion.p>
        </motion.div>
        <motion.div
          className="mono-hero-art"
          initial={{ opacity: 0, x: 70 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, type: 'spring', stiffness: 60, damping: 14 }}
        >
          <GeometricOx />
        </motion.div>
      </section>

      <div className="mono-marquee" aria-hidden="true">
        <div className="mono-marquee-track">
          <MarqueeHalf />
          <MarqueeHalf />
        </div>
      </div>

      <section className="mono-stats">
        <Stat value={900} suffix=" KG" label="MAX PULL FORCE" />
        <Stat value={8} suffix=" HR" label="SHIFT LENGTH — NO BREAKS" />
        <Stat value={100} suffix="%" label="SHOW-UP RATE, FOREVER" />
      </section>

      <section className="mono-manifesto">
        <motion.h2 initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }}>
          THE
          <br />
          MANIFESTO
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ delay: 0.15 }}
        >
          The ox does not chase trends. The ox <mark>pulls</mark>. Through mud, heat, dust and ten thousand years of
          history — the original machine still runs on <mark>patience and grass</mark>. No updates. No subscriptions.
          Just <mark>forward</mark>.
        </motion.p>
      </section>

      <footer className="mono-footer" aria-hidden="true">
        <span>OX</span>
      </footer>
    </div>
  )
}
