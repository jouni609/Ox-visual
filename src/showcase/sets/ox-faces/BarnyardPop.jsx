import { useEffect, useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import './barnyardpop.css'

const STAR_CLIP =
  'polygon(50% 0%, 59% 12%, 73% 6%, 76% 21%, 91% 21%, 86% 35%, 100% 41%, 89% 51%, 97% 64%, 82% 67%, 83% 83%, 68% 78%, 61% 93%, 50% 82%, 39% 93%, 32% 78%, 17% 83%, 18% 67%, 3% 64%, 11% 51%, 0% 41%, 14% 35%, 9% 21%, 24% 21%, 27% 6%, 41% 12%)'

function Wave({ color, flip = false }) {
  return (
    <svg
      className="pop-wave"
      viewBox="0 0 1440 90"
      preserveAspectRatio="none"
      aria-hidden="true"
      style={flip ? { transform: 'scaleY(-1)' } : undefined}
    >
      <path
        d="M0,48 C120,90 240,6 360,34 C480,62 600,90 720,62 C840,34 960,6 1080,26 C1200,46 1320,82 1440,48 L1440,90 L0,90 Z"
        fill={color}
      />
    </svg>
  )
}

function CartoonOx() {
  const ref = useRef(null)
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const px = useSpring(mx, { stiffness: 180, damping: 14 })
  const py = useSpring(my, { stiffness: 180, damping: 14 })

  useEffect(() => {
    const onMove = (e) => {
      const el = ref.current
      if (!el) return
      const r = el.getBoundingClientRect()
      const dx = (e.clientX - (r.left + r.width / 2)) / r.width
      const dy = (e.clientY - (r.top + r.height / 2)) / r.height
      mx.set(Math.max(-1, Math.min(1, dx)) * 7)
      my.set(Math.max(-1, Math.min(1, dy)) * 6)
    }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [mx, my])

  return (
    <svg ref={ref} className="mascot" viewBox="0 0 380 360" aria-hidden="true">
      <g className="mascot-bob">
        <g className="tail-group">
          <path
            d="M296,208 C330,196 344,164 336,132"
            fill="none"
            stroke="#2b2440"
            strokeWidth="7"
            strokeLinecap="round"
          />
          <circle cx="336" cy="128" r="12" fill="#f2a93b" stroke="#2b2440" strokeWidth="5" />
        </g>
        <g>
          <rect x="104" y="262" width="36" height="56" rx="16" fill="#ffffff" stroke="#2b2440" strokeWidth="6" />
          <rect x="148" y="264" width="36" height="54" rx="16" fill="#ffffff" stroke="#2b2440" strokeWidth="6" />
          <rect x="216" y="264" width="36" height="54" rx="16" fill="#ffffff" stroke="#2b2440" strokeWidth="6" />
          <rect x="260" y="262" width="36" height="56" rx="16" fill="#ffffff" stroke="#2b2440" strokeWidth="6" />
          <rect x="104" y="298" width="36" height="20" rx="10" fill="#f2a93b" stroke="#2b2440" strokeWidth="5" />
          <rect x="148" y="298" width="36" height="20" rx="10" fill="#f2a93b" stroke="#2b2440" strokeWidth="5" />
          <rect x="216" y="298" width="36" height="20" rx="10" fill="#f2a93b" stroke="#2b2440" strokeWidth="5" />
          <rect x="260" y="298" width="36" height="20" rx="10" fill="#f2a93b" stroke="#2b2440" strokeWidth="5" />
        </g>
        <rect x="86" y="150" width="208" height="128" rx="58" fill="#ffffff" stroke="#2b2440" strokeWidth="6" />
        <ellipse cx="150" cy="222" rx="30" ry="22" fill="#f2a93b" opacity="0.85" />
        <ellipse cx="244" cy="192" rx="22" ry="16" fill="#f2a93b" opacity="0.85" />
        <g className="head">
          <g className="ear ear-l">
            <ellipse cx="96" cy="74" rx="26" ry="16" fill="#ffffff" stroke="#2b2440" strokeWidth="5" transform="rotate(-24 96 74)" />
            <ellipse cx="92" cy="76" rx="12" ry="7" fill="#f6bfd3" transform="rotate(-24 92 76)" />
          </g>
          <g className="ear ear-r">
            <ellipse cx="284" cy="74" rx="26" ry="16" fill="#ffffff" stroke="#2b2440" strokeWidth="5" transform="rotate(24 284 74)" />
            <ellipse cx="288" cy="76" rx="12" ry="7" fill="#f6bfd3" transform="rotate(24 288 76)" />
          </g>
          <path d="M112,44 C104,20 122,8 140,14" fill="none" stroke="#2b2440" strokeWidth="6" strokeLinecap="round" />
          <path d="M268,44 C276,20 258,8 240,14" fill="none" stroke="#2b2440" strokeWidth="6" strokeLinecap="round" />
          <circle cx="190" cy="118" r="80" fill="#ffffff" stroke="#2b2440" strokeWidth="6" />
          <path d="M132,74 C150,52 230,52 248,74 C236,88 144,88 132,74 Z" fill="#f2a93b" stroke="#2b2440" strokeWidth="5" />
          <ellipse cx="190" cy="152" rx="48" ry="34" fill="#f6bfd3" stroke="#2b2440" strokeWidth="5" />
          <ellipse cx="172" cy="150" rx="6" ry="8" fill="#2b2440" />
          <ellipse cx="208" cy="150" rx="6" ry="8" fill="#2b2440" />
          <path d="M176,168 Q190,178 204,168" fill="none" stroke="#2b2440" strokeWidth="5" strokeLinecap="round" />
          <circle cx="158" cy="104" r="17" fill="#ffffff" stroke="#2b2440" strokeWidth="4" />
          <circle cx="222" cy="104" r="17" fill="#ffffff" stroke="#2b2440" strokeWidth="4" />
          <motion.g style={{ x: px, y: py }}>
            <circle cx="158" cy="106" r="7" fill="#2b2440" />
            <circle cx="222" cy="106" r="7" fill="#2b2440" />
          </motion.g>
          <ellipse cx="136" cy="132" rx="12" ry="7" fill="#f6bfd3" opacity="0.8" />
          <ellipse cx="244" cy="132" rx="12" ry="7" fill="#f6bfd3" opacity="0.8" />
        </g>
      </g>
    </svg>
  )
}

function IconSun() {
  return (
    <svg viewBox="0 0 54 54" aria-hidden="true">
      <circle cx="27" cy="27" r="11" fill="#ffb703" stroke="#2b2440" strokeWidth="4" />
      <g stroke="#2b2440" strokeWidth="4" strokeLinecap="round">
        <line x1="27" y1="4" x2="27" y2="10" />
        <line x1="27" y1="44" x2="27" y2="50" />
        <line x1="4" y1="27" x2="10" y2="27" />
        <line x1="44" y1="27" x2="50" y2="27" />
        <line x1="11" y1="11" x2="15" y2="15" />
        <line x1="39" y1="39" x2="43" y2="43" />
        <line x1="43" y1="11" x2="39" y2="15" />
        <line x1="15" y1="39" x2="11" y2="43" />
      </g>
    </svg>
  )
}

function IconApple() {
  return (
    <svg viewBox="0 0 54 54" aria-hidden="true">
      <circle cx="27" cy="32" r="15" fill="#ff6b6b" stroke="#2b2440" strokeWidth="4" />
      <path d="M27,17 C27,12 30,9 34,8" fill="none" stroke="#2b2440" strokeWidth="4" strokeLinecap="round" />
      <ellipse cx="36" cy="14" rx="7" ry="4" fill="#79c141" stroke="#2b2440" strokeWidth="3" transform="rotate(-24 36 14)" />
    </svg>
  )
}

function IconBox() {
  return (
    <svg viewBox="0 0 54 54" aria-hidden="true">
      <path d="M10,20 L27,10 L44,20 L44,38 L27,48 L10,38 Z" fill="#79c141" stroke="#2b2440" strokeWidth="4" strokeLinejoin="round" />
      <path d="M10,20 L27,30 L44,20 M27,30 L27,48" fill="none" stroke="#2b2440" strokeWidth="4" strokeLinejoin="round" />
    </svg>
  )
}

const BADGES = [
  { text: 'TEAM OX!', style: { top: '-4%', left: '2%', background: '#ff6b6b' }, rot: -12, star: true },
  { text: '#1 HELPER', style: { top: '32%', right: '-2%', background: '#4dabf7' }, rot: 8 },
  { text: 'GOOD VIBES', style: { bottom: '16%', left: '-2%', background: '#06d6a0' }, rot: -8 },
]

const CARDS = [
  {
    icon: <IconSun />,
    title: 'Up Before the Rooster',
    text: 'While everyone else hits snooze, Ox is already on field number three. Sunrise shift? Say less.',
  },
  {
    icon: <IconApple />,
    title: 'Zero Complaints, Infinite Snacks',
    text: 'Runs entirely on grass, hay and the occasional apple. Team morale stays impossibly high.',
  },
  {
    icon: <IconBox />,
    title: 'Carries the Whole Team',
    text: 'Heavy load? Steep hill? Long day? Ox says “no problem” — and means it every single time.',
  },
]

export default function BarnyardPop() {
  return (
    <div className="th-pop">
      <header className="pop-header">
        <p className="pop-kicker">THE OX &amp; FRIENDS SHOW</p>
        <h1 className="pop-title">
          Hard workin’. <span className="sticker">Happy</span> about it.
        </h1>
        <p className="pop-sub">Meet Ox — the hardest worker in the pasture and everyone’s favourite colleague.</p>
        <Wave color="#fff8e7" />
      </header>

      <section className="pop-stage">
        <div className="stage-inner">
          <div className="grass" aria-hidden="true" />
          <motion.div
            className="mascot-wrap"
            initial={{ opacity: 0, y: 60, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ type: 'spring', stiffness: 70, damping: 12, delay: 0.2 }}
          >
            <CartoonOx />
          </motion.div>
          {BADGES.map((b, i) => (
            <motion.div
              key={b.text}
              className={`badge${b.star ? ' badge-star' : ''}`}
              style={{ ...b.style, '--rot': `${b.rot}deg` }}
              initial={{ scale: 0, rotate: b.rot + 30 }}
              animate={{ scale: 1, rotate: b.rot }}
              transition={{ type: 'spring', stiffness: 260, damping: 13, delay: 0.55 + i * 0.18 }}
            >
              <span>{b.text}</span>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="pop-cards">
        {CARDS.map((c, i) => (
          <motion.div
            key={c.title}
            className="pop-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ type: 'spring', stiffness: 120, damping: 16, delay: i * 0.12 }}
            whileHover={{ y: -8, rotate: -1 }}
          >
            <div className="pop-card-icon">{c.icon}</div>
            <h3>{c.title}</h3>
            <p>{c.text}</p>
          </motion.div>
        ))}
      </section>

      <Wave color="#2b2440" />
      <footer className="pop-footer">
        <p className="pop-footer-big">Moo-ve mountains. Nicely.</p>
        <p className="pop-footer-small">© OX &amp; FRIENDS — A FRONTEND FARM PRODUCTION</p>
      </footer>
    </div>
  )
}
