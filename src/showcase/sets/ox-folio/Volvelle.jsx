import { motion } from 'framer-motion'
import './volvelle.css'

const BULL_BODY =
  'M210,212 C200,182 188,152 168,142 C156,130 138,124 120,126 ' +
  'C104,128 92,140 88,156 C84,166 90,178 102,182 C100,192 104,202 114,206 ' +
  'C124,210 136,208 142,200 C150,208 160,212 170,212 ' +
  'L172,246 C172,254 178,260 186,260 C194,260 200,254 200,246 ' +
  'L198,212 C206,214 210,214 210,212 Z'

const BULL_HORN_U =
  'M168,142 C150,120 124,106 100,106 C112,118 128,130 144,144 C152,146 160,146 168,142 Z'

const BULL_HORN_L =
  'M142,140 C124,114 98,100 74,100 C86,114 102,126 118,142 C126,144 134,144 142,140 Z'

const BULL_EYE = 'M138,162 C142,160 146,160 148,164'
const BULL_NOSTRIL = 'M88,156 C92,158 94,161 93,164'

const TAURUS_STARS = [
  { x: 148, y: 164, r: 4.6, name: 'Aldebaran' },
  { x: 168, y: 144, r: 2.4, name: '' },
  { x: 132, y: 150, r: 2.2, name: '' },
  { x: 158, y: 178, r: 2, name: '' },
  { x: 124, y: 176, r: 1.8, name: '' },
  { x: 96, y: 132, r: 2.2, name: '' },
  { x: 72, y: 112, r: 2.6, name: 'Elnath' },
  { x: 196, y: 214, r: 2, name: '' },
]

const PLEIADES = [
  { x: 88, y: 168 }, { x: 96, y: 162 }, { x: 92, y: 172 },
  { x: 100, y: 170 }, { x: 86, y: 176 }, { x: 98, y: 178 },
]

const TAURUS_LINES = [
  'M72,112 L96,132 L132,150 L148,164 L168,144 L100,106',
  'M148,164 L158,178 L124,176 L132,150',
  'M148,164 L196,214',
]

const BG_STARS = [
  [60, 70, 1.2], [110, 60, 0.9], [180, 80, 1.4], [250, 100, 1.1], [300, 70, 0.8],
  [340, 130, 1.2], [40, 150, 1], [70, 230, 1.3], [300, 200, 1], [330, 250, 1.1],
  [40, 290, 0.9], [100, 300, 1.4], [180, 300, 1], [250, 300, 1.2], [330, 320, 0.9],
  [60, 360, 1.1], [200, 360, 1], [280, 380, 1.3], [360, 360, 0.8], [120, 380, 1],
  [260, 60, 0.9], [150, 110, 0.7], [220, 140, 0.8], [380, 180, 1], [20, 240, 0.8],
]

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

function monthPos(i) {
  const ang = (i / 12) * 360 - 90
  const rad = (ang * Math.PI) / 180
  return {
    x: 220 + 188 * Math.cos(rad),
    y: 220 + 188 * Math.sin(rad),
    rot: ang + 90,
  }
}

function Cartouche() {
  return (
    <span className="volv-cartouche" aria-hidden="true">
      <svg viewBox="0 0 160 56" focusable="false">
        <path d="M28,28 a82,28 0 0 1 104,0 a82,28 0 0 1 -104,0 Z" fill="#1F4E80" stroke="#D4A24A" strokeWidth="1.6" />
        <path d="M34,28 a76,24 0 0 1 92,0 a76,24 0 0 1 -92,0 Z" fill="none" stroke="#D4A24A" strokeWidth="0.6" opacity="0.6" />
        <text x="80" y="25" textAnchor="middle" fontFamily="'Space Grotesk', sans-serif" fontWeight="700" fontSize="9" fill="#F4ECDB" letterSpacing="1.4">SET V</text>
        <text x="80" y="37" textAnchor="middle" fontFamily="'Space Grotesk', sans-serif" fontSize="6.6" fill="#D4A24A" letterSpacing="1.2">DESIGNED BY FOLIO-PRESS</text>
      </svg>
    </span>
  )
}

export default function Volvelle() {
  return (
    <div className="th-volv">
      <div className="volv-haze" aria-hidden="true" />

      <header className="volv-head">
        <p className="volv-eyebrow" lang="la">Folio V · Coeli Tabula</p>
        <h1 className="volv-title">Volvelle</h1>
        <p className="volv-subtitle">A paper wheel that turns the sky — set the month, read the bull. Taurus rising through horns of light.</p>
      </header>

      <div className="volv-stage">
        <div className="volv-wheel" aria-hidden="true">
          <svg viewBox="0 0 440 440" focusable="false">
            <defs>
              <radialGradient id="volv-sky-grad" cx="50%" cy="44%" r="62%">
                <stop offset="0%" stopColor="#3E84C6" />
                <stop offset="100%" stopColor="#1F4E80" />
              </radialGradient>
              <radialGradient id="volv-ivory-grad" cx="40%" cy="38%" r="72%">
                <stop offset="0%" stopColor="#FBF5E6" />
                <stop offset="100%" stopColor="#E6D8B6" />
              </radialGradient>
              <radialGradient id="volv-star-glow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
              </radialGradient>
              <linearGradient id="volv-gold-grad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#E8C46A" />
                <stop offset="100%" stopColor="#B07A14" />
              </linearGradient>
              <clipPath id="volv-disc-clip">
                <circle cx="220" cy="220" r="150" />
              </clipPath>
            </defs>

            <circle cx="220" cy="220" r="210" fill="url(#volv-sky-grad)" />
            <circle cx="220" cy="220" r="210" fill="none" stroke="#D4A24A" strokeWidth="2" />
            <circle cx="220" cy="220" r="184" fill="none" stroke="#D4A24A" strokeWidth="0.8" opacity="0.5" />

            {MONTHS.map((m, i) => {
              const p = monthPos(i)
              return (
                <text
                  key={m}
                  x={p.x}
                  y={p.y}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  transform={`rotate(${p.rot} ${p.x} ${p.y})`}
                  fontFamily="'Space Grotesk', sans-serif"
                  fontWeight="500"
                  fontSize="13"
                  fill="#F4ECDB"
                  letterSpacing="1"
                >{m}</text>
              )
            })}

            {['N', 'E', 'S', 'W'].map((d, i) => {
              const ang = (i * 90 - 90) * Math.PI / 180
              const x = 220 + 205 * Math.cos(ang)
              const y = 220 + 205 * Math.sin(ang)
              return (
                <text key={d} x={x} y={y} textAnchor="middle" dominantBaseline="middle" fontFamily="'Space Grotesk', sans-serif" fontWeight="700" fontSize="13" fill="#D4A24A">{d}</text>
              )
            })}

            <path d="M220,8 L228,30 L220,24 L212,30 Z" fill="#D4A24A" />

            <circle cx="220" cy="220" r="150" fill="url(#volv-ivory-grad)" />
            <circle cx="220" cy="220" r="150" fill="none" stroke="#1A2A40" strokeWidth="1" opacity="0.3" />

            <motion.g
              className="volv-disc"
              style={{ transformOrigin: '220px 220px' }}
              animate={{ rotate: 360 }}
              transition={{ duration: 180, repeat: Infinity, ease: 'linear' }}
            >
              <g clipPath="url(#volv-disc-clip)">
                {BG_STARS.map((s, i) => (
                  <circle key={'bg' + i} cx={s[0]} cy={s[1]} r={s[2]} fill="#1A2A40" opacity="0.5" />
                ))}

                <path d={BULL_BODY} fill="url(#volv-gold-grad)" opacity="0.16" />
                <path d={BULL_HORN_U} fill="url(#volv-gold-grad)" opacity="0.16" />
                <path d={BULL_HORN_L} fill="url(#volv-gold-grad)" opacity="0.16" />

                <g stroke="#B07A14" strokeWidth="0.8" fill="none" opacity="0.55">
                  {TAURUS_LINES.map((d, i) => <path key={i} d={d} />)}
                </g>

                {PLEIADES.map((s, i) => (
                  <circle key={'pl' + i} cx={s.x} cy={s.y} r="1.1" fill="#1A2A40" />
                ))}

                {TAURUS_STARS.map((s, i) => (
                  <g key={'t' + i}>
                    <circle cx={s.x} cy={s.y} r={s.r * 2.4} fill="url(#volv-star-glow)" />
                    <motion.circle
                      cx={s.x}
                      cy={s.y}
                      r={s.r}
                      fill="#FBF5E6"
                      stroke="#B07A14"
                      strokeWidth="0.4"
                      animate={{ opacity: [0.7, 1, 0.7] }}
                      transition={{ duration: 3 + i * 0.4, repeat: Infinity, ease: 'easeInOut' }}
                    />
                  </g>
                ))}

                <path d={BULL_BODY} fill="none" stroke="#B07A14" strokeWidth="1.2" opacity="0.7" strokeLinejoin="round" />
                <path d={BULL_HORN_U} fill="none" stroke="#B07A14" strokeWidth="1.2" opacity="0.7" strokeLinejoin="round" />
                <path d={BULL_HORN_L} fill="none" stroke="#B07A14" strokeWidth="1.2" opacity="0.7" strokeLinejoin="round" />
                <path d={BULL_EYE} fill="none" stroke="#1A2A40" strokeWidth="1.4" strokeLinecap="round" />
                <path d={BULL_NOSTRIL} fill="none" stroke="#1A2A40" strokeWidth="1.2" strokeLinecap="round" />

                <text x="200" y="282" fontFamily="'EB Garamond', serif" fontStyle="italic" fontSize="14" fill="#1A2A40" letterSpacing="2">TAURUS</text>
              </g>
            </motion.g>

            <circle cx="220" cy="220" r="150" fill="none" stroke="#B07A14" strokeWidth="1.4" opacity="0.8" />
            <circle cx="220" cy="220" r="6" fill="#1A2A40" />
            <circle cx="220" cy="220" r="2.4" fill="#D4A24A" />
          </svg>
        </div>

        <aside className="volv-panel">
          <div className="volv-panel-block">
            <p className="volv-key">Alpha Tauri</p>
            <p className="volv-val"><span className="volv-num">Aldebaran</span></p>
            <p className="volv-note">The follower — a red giant pursuing the Pleiades across the winter sky. Magnitude 0.86, the bull's eye.</p>
          </div>
          <div className="volv-panel-block">
            <p className="volv-key">Right ascension</p>
            <p className="volv-val"><span className="volv-num">04h 35m</span></p>
            <p className="volv-note">Where the bull stands on the celestial equator, east of Orion's belt.</p>
          </div>
          <div className="volv-panel-block">
            <p className="volv-key">Best seen</p>
            <p className="volv-val"><span className="volv-num">January</span></p>
            <p className="volv-note">Set the volvelle's index to midwinter and the horns rise due east at sundown.</p>
          </div>
          <ul className="volv-cluster-list">
            <li><span className="volv-cluster-dot" />Hyades — the V-shaped face, six naked-eye stars</li>
            <li><span className="volv-cluster-dot" />Pleiades — the seven sisters, on the shoulder</li>
          </ul>
        </aside>
      </div>

      <footer className="volv-foot">
        <Cartouche />
        <p className="volv-foot-line" lang="la">Revolvit caelum, revolvitur bos — Tab. V</p>
      </footer>
    </div>
  )
}
