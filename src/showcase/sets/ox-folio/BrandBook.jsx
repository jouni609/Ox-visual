import { motion } from 'framer-motion'
import './brandbook.css'

const MASTER_OX_BODY =
  'M58,150 C58,120 70,82 102,78 L196,78 C218,78 230,98 230,122 L230,150 ' +
  'C230,157 224,161 216,161 L74,161 C66,161 58,157 58,150 Z'

const MASTER_OX_HEAD =
  'M212,100 C212,84 224,74 240,76 C252,78 258,90 255,102 ' +
  'C260,106 262,116 257,123 C252,129 243,129 237,124 ' +
  'L228,128 C232,137 232,148 225,154 C217,158 208,153 206,144 ' +
  'C204,133 207,121 211,113 C209,109 210,104 212,100 Z'

const MASTER_OX_HORN_TOP =
  'M242,80 C255,64 266,62 274,69 C266,75 259,84 253,92'
const MASTER_OX_HORN_LOW =
  'M236,86 C247,72 256,70 262,77 C254,81 247,90 243,96'

const MASTER_OX_TAIL =
  'M58,96 C42,92 28,98 24,112 C30,107 37,107 43,112 C49,105 56,100 62,98'

const MASTER_OX_LEGS = [
  'M92,161 L88,201 L102,201 L106,161 Z',
  'M180,161 L176,201 L190,201 L194,161 Z',
  'M74,161 L70,201 L84,201 L88,161 Z',
  'M162,161 L158,201 L172,201 L176,161 Z',
]

const BRANDS = [
  { id: 'B-01', name: 'Bar OX', owner: 'S. Hollis', year: '1873', county: 'Cibola', letters: 'OX', mod: 'bar' },
  { id: 'B-02', name: 'Rocking O', owner: 'M. Verra', year: '1881', county: 'San Pedro', letters: 'O', mod: 'rocking' },
  { id: 'B-03', name: 'Diamond Bull', owner: 'R. Tate', year: '1879', county: 'Mora', letters: 'B', mod: 'diamond' },
  { id: 'B-04', name: 'Lazy OX', owner: 'J. Creed', year: '1866', county: 'Pecos', letters: 'OX', mod: 'lazy' },
  { id: 'B-05', name: 'Circle Horn', owner: 'A. Lund', year: '1888', county: 'Dolores', letters: 'H', mod: 'circle' },
  { id: 'B-06', name: 'Reversed OX', owner: 'P. Soto', year: '1875', county: 'Bernal', letters: 'OX', mod: 'reverse' },
]

function Modifier({ mod }) {
  switch (mod) {
    case 'bar':
      return <line x1="20" y1="18" x2="60" y2="18" stroke="#2A1A12" strokeWidth="3.5" strokeLinecap="round" />
    case 'rocking':
      return <path d="M18,62 Q40,76 62,62" fill="none" stroke="#2A1A12" strokeWidth="3.5" strokeLinecap="round" />
    case 'triangle':
      return <path d="M40,14 L62,58 L18,58 Z" fill="none" stroke="#2A1A12" strokeWidth="3" strokeLinejoin="round" />
    case 'diamond':
      return <path d="M40,12 L64,40 L40,68 L16,40 Z" fill="none" stroke="#2A1A12" strokeWidth="3" strokeLinejoin="round" />
    case 'circle':
      return <circle cx="40" cy="40" r="27" fill="none" stroke="#2A1A12" strokeWidth="3" />
    case 'lazy':
      return null
    case 'reverse':
      return null
    default:
      return null
  }
}

function BrandMark({ letters, mod, delay }) {
  const lazy = mod === 'lazy'
  const reverse = mod === 'reverse'
  return (
    <motion.div
      className="brd-mark-wrap"
      initial={{ opacity: 0, scale: 0.6 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay, ease: [0.2, 0.8, 0.2, 1] }}
    >
      <svg className="brd-mark" viewBox="0 0 80 80" aria-hidden="true">
        <defs>
          <radialGradient id="brd-scorch" cx="50%" cy="46%" r="55%">
            <stop offset="0%" stopColor="#7A3F1C" />
            <stop offset="70%" stopColor="#5A2E14" />
            <stop offset="100%" stopColor="#3A1C0E" />
          </radialGradient>
        </defs>
        <circle cx="40" cy="40" r="38" fill="url(#brd-scorch)" />
        <circle cx="40" cy="40" r="38" fill="none" stroke="#2A1A12" strokeWidth="2" opacity="0.6" />
        <circle cx="40" cy="40" r="33" fill="none" stroke="#C99849" strokeWidth="0.8" opacity="0.4" />
        <g
          transform={lazy ? 'rotate(-48 40 40)' : reverse ? 'translate(80 0) scale(-1 1)' : ''}
          style={{ transformOrigin: '40px 40px' }}
        >
          <text
            x="40"
            y="50"
            textAnchor="middle"
            fontFamily="'Alfa Slab One', serif"
            fontSize={letters.length > 1 ? 24 : 30}
            fill="#1E120A"
            stroke="#3A2418"
            strokeWidth="0.6"
          >
            {letters}
          </text>
          <Modifier mod={mod} />
        </g>
      </svg>
    </motion.div>
  )
}

function MakerPunch() {
  return (
    <span className="brd-punch" aria-hidden="true">
      <svg viewBox="0 0 120 80" focusable="false">
        <path d="M60,4 L116,40 L60,76 L4,40 Z" fill="#2A1A12" stroke="#C99849" strokeWidth="1.4" />
        <path d="M60,14 L104,40 L60,66 L16,40 Z" fill="none" stroke="#9C5A2C" strokeWidth="0.8" opacity="0.6" />
        <text x="60" y="34" textAnchor="middle" fontFamily="'Alfa Slab One', serif" fontSize="11" fill="#F4E9D2">SET V</text>
        <text x="60" y="50" textAnchor="middle" fontFamily="'Alfa Slab One', serif" fontSize="6.4" fill="#D6A85A" letterSpacing="0.8">DESIGNED BY FOLIO-PRESS</text>
      </svg>
    </span>
  )
}

export default function BrandBook() {
  return (
    <div className="th-brd">
      <div className="brd-hide-grain" aria-hidden="true" />

      <header className="brd-head">
        <p className="brd-eyebrow">Folio IV · Liber Signorum</p>
        <h1 className="brd-title">Brand Book</h1>
        <p className="brd-subtitle">A frontier registry of iron marks read off the hide — every glyph a hand-forged claim on a living ox.</p>
      </header>

      <section className="brd-master">
        <div className="brd-master-art" aria-hidden="true">
          <svg viewBox="0 0 300 210" focusable="false">
            <defs>
              <radialGradient id="brd-burn" cx="42%" cy="40%" r="70%">
                <stop offset="0%" stopColor="#3A1C0E" />
                <stop offset="100%" stopColor="#1E120A" />
              </radialGradient>
            </defs>
            <motion.g
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              style={{ transformOrigin: '150px 140px', transformBox: 'fill-box' }}
            >
              <g fill="url(#brd-burn)" stroke="#1E120A" strokeWidth="1.5">
                <path d={MASTER_OX_TAIL} />
                {MASTER_OX_LEGS.map((d) => <path key={d} d={d} />)}
                <path d={MASTER_OX_BODY} />
                <path d={MASTER_OX_HEAD} />
                <path d={MASTER_OX_HORN_TOP} fill="none" strokeWidth="6" strokeLinecap="round" />
                <path d={MASTER_OX_HORN_LOW} fill="none" strokeWidth="6" strokeLinecap="round" />
                <path d="M244,100 C248,98 252,98 254,102" fill="none" stroke="#C99849" strokeWidth="2" strokeLinecap="round" />
                <path d="M250,118 C254,120 256,123 255,126" fill="none" stroke="#9C5A2C" strokeWidth="2" strokeLinecap="round" />
              </g>
              <g className="brd-burn-flicker" stroke="#C99849" strokeWidth="0.6" fill="none" opacity="0.45">
                <path d="M70,120 L220,120" />
                <path d="M90,96 L210,96" />
              </g>
            </motion.g>
          </svg>
        </div>
        <div className="brd-master-cap">
          <p className="brd-master-id">MOTHER BRAND · M-00</p>
          <p className="brd-master-name">The Running Ox</p>
          <p className="brd-master-note">The registry's own mark, struck once on the near shoulder of every animal before it leaves the range. Read left to right: a single ox, iron-set, never two.</p>
        </div>
      </section>

      <section className="brd-grid">
        {BRANDS.map((b, i) => (
          <article className="brd-card" key={b.id}>
            <BrandMark letters={b.letters} mod={b.mod} delay={0.2 + i * 0.08} />
            <div className="brd-card-meta">
              <p className="brd-card-id">{b.id}</p>
              <p className="brd-card-name">{b.name}</p>
              <p className="brd-card-line"><span>Owner</span>{b.owner}</p>
              <p className="brd-card-line"><span>First struck</span>{b.year}</p>
              <p className="brd-card-line"><span>County</span>{b.county}</p>
            </div>
          </article>
        ))}
      </section>

      <aside className="brd-legend">
        <p className="brd-legend-title">How an iron reads</p>
        <ul className="brd-legend-list">
          <li><b lang="en">Bar</b> — a horizontal line above the letter, read first.</li>
          <li><b lang="en">Rocking</b> — the letter sits in a curved cradle, read before the letter.</li>
          <li><b lang="en">Lazy</b> — the letter lies on its side; turn the page to read it.</li>
          <li><b lang="en">Reversed</b> — the letter is mirrored, read from the iron's face, not the hide.</li>
        </ul>
      </aside>

      <footer className="brd-foot">
        <MakerPunch />
        <p className="brd-foot-line">Struck at the Folio-Press ironworks, county of OX — every brand forged cold, never twice alike.</p>
      </footer>
    </div>
  )
}
