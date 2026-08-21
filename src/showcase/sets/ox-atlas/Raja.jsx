import { motion } from 'framer-motion'
import './raja.css'

const FACTS = [
  {
    h: 'Fat, not water',
    t: "The hump stores energy for lean days — it is not a camel's reservoir.",
  },
  {
    h: 'Dressed for festival',
    t: 'Horns painted and garlands tied during Pongal and Gopashtami.',
  },
  {
    h: 'Gentle giant',
    t: 'Patient with children; famously stubborn with strangers.',
  },
]

const GARLAND = [
  [96, 282],
  [84, 300],
  [80, 318],
  [84, 336],
  [94, 350],
  [112, 362],
  [134, 370],
  [158, 374],
]

function Mandala() {
  return (
    <svg className="raja-mandala" viewBox="0 0 400 400" aria-hidden="true">
      <g className="raja-mandala-spin">
        {Array.from({ length: 24 }, (_, i) => (
          <ellipse key={i} cx="200" cy="118" rx="13" ry="44" fill="#C9A227" opacity="0.18" transform={`rotate(${i * 15} 200 200)`} />
        ))}
      </g>
      <circle cx="200" cy="200" r="88" fill="none" stroke="#C9A227" strokeOpacity="0.4" strokeDasharray="4 10" />
    </svg>
  )
}

function Zebu() {
  return (
    <svg className="raja-zebu" viewBox="0 0 380 470" aria-hidden="true">
      <ellipse cx="190" cy="452" rx="130" ry="12" fill="#3B2314" opacity="0.08" />
      <path d="M295,288 C315,300 320,340 310,382 C307,392 300,396 294,392" fill="none" stroke="#3B2314" strokeWidth="5" strokeLinecap="round" className="raja-tail" />
      <ellipse cx="308" cy="398" rx="9" ry="14" fill="#3B2314" transform="rotate(18 308 398)" />
      <g>
        <rect x="128" y="352" width="15" height="92" rx="7" fill="#FDFBF5" stroke="#3B2314" strokeWidth="3" />
        <rect x="162" y="356" width="15" height="90" rx="7" fill="#FDFBF5" stroke="#3B2314" strokeWidth="3" />
        <rect x="216" y="356" width="15" height="90" rx="7" fill="#FDFBF5" stroke="#3B2314" strokeWidth="3" />
        <rect x="250" y="352" width="15" height="92" rx="7" fill="#FDFBF5" stroke="#3B2314" strokeWidth="3" />
        <rect x="126" y="424" width="19" height="8" rx="3" fill="#C9A227" />
        <rect x="160" y="426" width="19" height="8" rx="3" fill="#C9A227" />
        <rect x="214" y="426" width="19" height="8" rx="3" fill="#C9A227" />
        <rect x="248" y="424" width="19" height="8" rx="3" fill="#C9A227" />
        <rect x="128" y="436" width="15" height="10" rx="4" fill="#3B2314" />
        <rect x="162" y="438" width="15" height="10" rx="4" fill="#3B2314" />
        <rect x="216" y="438" width="15" height="10" rx="4" fill="#3B2314" />
        <rect x="250" y="436" width="15" height="10" rx="4" fill="#3B2314" />
      </g>
      <ellipse cx="192" cy="300" rx="106" ry="62" fill="#FDFBF5" stroke="#3B2314" strokeWidth="3" />
      <path d="M120,258 C116,226 150,214 166,238 C174,250 168,262 156,266 C142,270 126,268 120,258 Z" fill="#FDFBF5" stroke="#3B2314" strokeWidth="3" />
      <path d="M96,282 C74,272 58,252 56,232 C55,222 60,216 68,218 C64,234 76,254 96,264 C104,268 110,272 112,278 Z" fill="#FDFBF5" stroke="#3B2314" strokeWidth="3" />
      <path d="M68,220 C50,206 42,186 52,168 C56,160 64,158 70,164 C60,180 66,198 82,210 C88,215 90,222 86,228 Z" fill="#FDFBF5" stroke="#3B2314" strokeWidth="3" />
      <path d="M84,196 L74,182" stroke="#C9A227" strokeWidth="5" strokeLinecap="round" />
      <path d="M72,178 L60,170" stroke="#C9A227" strokeWidth="5" strokeLinecap="round" />
      <path d="M108,240 C116,230 128,228 136,236 C130,244 118,246 108,240 Z" fill="#FDFBF5" stroke="#3B2314" strokeWidth="3" />
      <circle cx="98" cy="248" r="4" fill="#3B2314" />
      <path d="M92,260 C98,264 106,264 112,260" fill="none" stroke="#3B2314" strokeWidth="2.5" strokeLinecap="round" />
      <rect x="150" y="242" width="112" height="50" rx="10" fill="#0F7B6C" stroke="#3B2314" strokeWidth="3" />
      {Array.from({ length: 8 }, (_, i) => (
        <circle key={i} cx={163 + (i % 4) * 32} cy={i < 4 ? 258 : 278} r="4" fill="#C9A227" />
      ))}
      {[158, 190, 222, 254].map((x) => (
        <path key={x} d={`M${x},292 l6,10 l-6,10 l-6,-10 Z`} fill="#D6336C" />
      ))}
      <g className="raja-garland">
        {GARLAND.map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r="8" fill={i % 2 ? '#D6336C' : '#F2A007'} stroke="#3B2314" strokeWidth="2" />
        ))}
      </g>
    </svg>
  )
}

export default function Raja() {
  return (
    <div className="th-raja">
      <header className="raja-head">
        <motion.p
          className="raja-eyebrow"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          OX ATLAS · INDIA
        </motion.p>
        <motion.h1
          className="raja-title"
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: 'spring', stiffness: 90, damping: 14 }}
        >
          RAJA
        </motion.h1>
        <p className="raja-sub">the decorated one</p>
      </header>

      <div className="raja-stage">
        <Mandala />
        <motion.svg
          className="raja-arch"
          viewBox="0 0 520 560"
          aria-hidden="true"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
        >
          <path
            d="M70,560 L70,300 Q70,268 102,264 A29,29 0 0 1 160,264 A29,29 0 0 1 218,264 A29,29 0 0 1 276,264 A29,29 0 0 1 334,264 A29,29 0 0 1 392,264 Q424,268 424,300 L424,560"
            fill="none"
            stroke="#0F7B6C"
            strokeWidth="3"
          />
          <path
            d="M70,560 L70,300 Q70,268 102,264 A29,29 0 0 1 160,264 A29,29 0 0 1 218,264 A29,29 0 0 1 276,264 A29,29 0 0 1 334,264 A29,29 0 0 1 392,264 Q424,268 424,300 L424,560"
            fill="none"
            stroke="#C9A227"
            strokeWidth="1.5"
            transform="translate(247,280) scale(0.93) translate(-247,-280)"
          />
          <rect x="46" y="540" width="402" height="10" rx="5" fill="#0F7B6C" />
        </motion.svg>
        <Zebu />
      </div>

      <div className="raja-cards">
        {FACTS.map((f, i) => (
          <motion.article
            key={f.h}
            className="raja-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ type: 'spring', stiffness: 120, damping: 16, delay: i * 0.12 }}
          >
            <h3>{f.h}</h3>
            <p>{f.t}</p>
          </motion.article>
        ))}
      </div>

      <svg className="raja-divider" viewBox="0 0 720 26" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
        {Array.from({ length: 18 }, (_, i) => (
          <g key={i} transform={`translate(${20 + i * 40} 13)`}>
            <circle r="7" fill={i % 2 ? '#D6336C' : '#F2A007'} />
            <circle r="2.5" fill="#FFF6E3" />
          </g>
        ))}
      </svg>

      <footer className="raja-foot">
        <span className="raja-stamp">OX ALPHA · SET II</span>
        <span className="raja-dispatch">Jaipur dispatch · OX ATLAS</span>
      </footer>
    </div>
  )
}
