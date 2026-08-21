import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import './menhir.css'

function CountUp({ value, suffix = '', duration = 1600 }) {
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
    <span className="menhir-num" ref={ref}>
      {display.toLocaleString('en-US')}
      {suffix ? <span className="menhir-affix">{suffix}</span> : null}
    </span>
  )
}

export default function Menhir() {
  return (
    <div className="th-menhir">
      <div className="menhir-mist" aria-hidden="true">
        <svg className="menhir-mist-svg" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
          <defs>
            <linearGradient id="menhir-mist-grad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#C5C5C5" stopOpacity="0.35" />
              <stop offset="50%" stopColor="#C5C5C5" stopOpacity="0.1" />
              <stop offset="100%" stopColor="#C5C5C5" stopOpacity="0" />
            </linearGradient>
          </defs>
          <rect width="1200" height="800" fill="url(#menhir-mist-grad)" />
          <ellipse cx="300" cy="200" rx="400" ry="120" fill="#C5C5C5" opacity="0.2" />
          <ellipse cx="900" cy="350" rx="350" ry="100" fill="#C5C5C5" opacity="0.15" />
          <ellipse cx="500" cy="550" rx="450" ry="140" fill="#C5C5C5" opacity="0.12" />
        </svg>
      </div>

      <main className="menhir-main">
        <motion.div
          className="menhir-stone-wrap"
          initial={{ y: 60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 55, damping: 18 }}
        >
          <svg className="menhir-stone" viewBox="0 0 420 760" aria-hidden="true">
            <defs>
              <linearGradient id="menhir-stone-grad" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#6B6B6B" />
                <stop offset="30%" stopColor="#8A8A8A" />
                <stop offset="70%" stopColor="#7A7A7A" />
                <stop offset="100%" stopColor="#555555" />
              </linearGradient>
              <filter id="menhir-stone-rough">
                <feTurbulence type="fractalNoise" baseFrequency="0.035" numOctaves="4" result="noise" />
                <feDiffuseLighting in="noise" lightingColor="#E8E0D4" surfaceScale="1.5">
                  <feDistantLight azimuth="45" elevation="60" />
                </feDiffuseLighting>
                <feComposite operator="in" in2="SourceGraphic" />
                <feBlend in="SourceGraphic" mode="multiply" />
              </filter>
            </defs>

            <path
              d="M50 80 Q80 30 150 15 Q220 5 290 20 Q350 35 370 85 Q385 200 380 400 Q375 600 365 720 Q260 735 150 730 Q45 720 40 600 Q35 400 42 200 Q45 120 50 80 Z"
              fill="url(#menhir-stone-grad)"
              filter="url(#menhir-stone-rough)"
            />

            <path
              d="M140 310 Q135 290 145 280 L160 275 Q150 245 145 225 Q155 220 165 240 L175 270 Q195 240 205 220 Q215 225 208 245 L190 280 Q230 290 270 315 Q310 340 320 380 L315 430 Q325 460 335 470 Q320 465 310 435 L305 440 Q295 490 285 490 L290 445 Q250 450 220 445 L215 495 Q210 505 205 495 L210 440 Q170 435 150 410 Q135 380 138 340 Q140 320 140 310 Z"
              fill="none"
              stroke="#4A4A4A"
              strokeWidth="2.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path d="M160 275 L175 270" fill="none" stroke="#4A4A4A" strokeWidth="2.5" />
            <circle cx="152" cy="298" r="2.8" fill="#4A4A4A" />
            <path d="M315 430 Q300 435 285 430" fill="none" stroke="#4A4A4A" strokeWidth="2" />

            <circle cx="300" cy="160" r="14" fill="none" stroke="#7B5E8B" strokeWidth="2" opacity="0.55" />
            <circle cx="300" cy="160" r="7" fill="#7B5E8B" opacity="0.35" />
            <circle cx="95" cy="520" r="11" fill="none" stroke="#7B5E8B" strokeWidth="2" opacity="0.45" />
            <circle cx="95" cy="520" r="5" fill="#7B5E8B" opacity="0.3" />
            <circle cx="320" cy="580" r="15" fill="none" stroke="#8FA68E" strokeWidth="2" opacity="0.45" />
            <circle cx="320" cy="580" r="8" fill="#8FA68E" opacity="0.3" />

            <path d="M55 220 Q80 205 95 225 Q90 250 65 245 Q45 235 55 220 Z" fill="#8FA68E" opacity="0.3" />
            <path d="M330 320 Q355 305 365 330 Q360 355 335 350 Q315 340 330 320 Z" fill="#7B5E8B" opacity="0.22" />
            <path d="M70 580 Q95 565 110 585 Q105 610 80 605 Q60 595 70 580 Z" fill="#8FA68E" opacity="0.28" />
            <path d="M340 650 Q360 640 370 660 Q365 680 345 675 Q330 665 340 650 Z" fill="#7B5E8B" opacity="0.18" />
          </svg>
        </motion.div>

        <motion.section
          className="menhir-text"
          initial={{ x: 55, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.18, type: 'spring', stiffness: 65, damping: 16 }}
        >
          <p className="menhir-kicker">MEGALITHIC FRANCE, C. 3500 BCE</p>
          <h1 className="menhir-headline">The aurochs of Morbihan</h1>
          <p className="menhir-lede">
            Before iron, before bronze, before the first walled city, there was the aurochs.
            The wild ox of Europe stood two metres at the shoulder and carried horns that could span a man&apos;s arms.
            Hunters carved its likeness into granite menhirs along the Breton coast, not as decoration but as record.
            This was the animal they feared, respected, and eventually tamed.
          </p>

          <div className="menhir-stats">
            <div className="menhir-stat">
              <CountUp value={1000} suffix=" KG" />
              <span className="menhir-label">Bull mass at maturity</span>
            </div>
            <div className="menhir-stat">
              <CountUp value={1627} />
              <span className="menhir-label">Year the last aurochs died in Poland</span>
            </div>
          </div>
        </motion.section>
      </main>

      <footer className="menhir-footer">
        <div className="menhir-signature">
          <svg viewBox="0 0 260 48" aria-hidden="true">
            <path d="M10 24 L30 24" stroke="#7B5E8B" strokeWidth="2" opacity="0.5" />
            <path d="M230 24 L250 24" stroke="#7B5E8B" strokeWidth="2" opacity="0.5" />
            <text x="130" y="30" textAnchor="middle" fontFamily="'Cinzel', serif" fontSize="11" fill="#5A5A5A" letterSpacing="3">
              SET VIII · DESIGNED BY OPENCODE
            </text>
          </svg>
        </div>
      </footer>
    </div>
  )
}
