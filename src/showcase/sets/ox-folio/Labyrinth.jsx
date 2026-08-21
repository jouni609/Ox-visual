import { motion } from 'framer-motion'
import './labyrinth.css'

const ARCH_PATH =
  'M86,748 L86,300 C86,178 184,96 290,56 L300,46 L310,56 C416,96 514,178 514,300 L514,748 Z'

const MINOTAUR_BODY =
  'M150,96 C140,86 128,80 122,72 C116,80 108,86 100,96 C96,108 96,118 100,124 ' +
  'C94,128 92,134 92,142 C92,150 96,156 102,158 C98,168 96,178 96,190 ' +
  'C96,206 102,216 112,222 C108,232 106,244 106,256 C106,266 110,274 116,278 ' +
  'L114,300 C114,306 118,310 122,310 C126,310 130,306 130,300 L128,278 ' +
  'C134,276 138,270 138,262 L150,262 C150,270 154,276 160,278 L158,300 ' +
  'C158,306 162,310 166,310 C170,310 174,306 174,300 L172,278 ' +
  'C180,274 184,266 184,256 C184,244 182,232 178,222 C188,216 194,206 194,190 ' +
  'C194,178 192,168 188,158 C194,156 198,150 198,142 C198,134 196,128 190,124 ' +
  'C194,118 194,108 190,96 C182,86 174,80 168,72 C162,80 150,86 140,96 Z'

const MINOTAUR_HORN_L =
  'M126,70 C112,58 96,52 80,52 C72,52 66,54 60,58 C70,60 80,64 88,70 C96,76 100,82 102,88'

const MINOTAUR_HORN_R =
  'M174,70 C188,58 204,52 220,52 C228,52 234,54 240,58 C230,60 220,64 212,70 C204,76 200,82 198,88'

const MINOTAUR_TAIL =
  'M196,168 C214,176 226,194 224,214 C222,224 216,228 210,224 C216,218 218,208 212,200 C206,192 198,188 192,186'

const LABYRINTH_RINGS = [128, 104, 80, 56, 32]
const LABYRINTH_GAPS = [18, 70, 130, 200, 280]

function arcPath(cx, cy, r, startDeg, endDeg) {
  const toRad = (d) => (d * Math.PI) / 180
  const large = endDeg - startDeg > 180 ? 1 : 0
  const x1 = cx + r * Math.cos(toRad(startDeg))
  const y1 = cy + r * Math.sin(toRad(startDeg))
  const x2 = cx + r * Math.cos(toRad(endDeg))
  const y2 = cy + r * Math.sin(toRad(endDeg))
  return `M${x1.toFixed(1)},${y1.toFixed(1)} A${r},${r} 0 ${large} 1 ${x2.toFixed(1)},${y2.toFixed(1)}`
}

const PANE_COLS = [86, 184, 300, 416, 514]
const PANE_ROWS = [60, 168, 286, 404, 522, 640, 748]

function paneColor(c, r) {
  if (c === 2) return 'gold'
  const d = Math.abs(c - 2) + Math.abs(r - 3)
  if (d === 2 || d === 3) return 'crimson'
  return 'cobalt'
}

const PANES = []
for (let r = 0; r < PANE_ROWS.length - 1; r++) {
  for (let c = 0; c < PANE_COLS.length - 1; c++) {
    PANES.push({ x: PANE_COLS[c], y: PANE_ROWS[r], w: PANE_COLS[c + 1] - PANE_COLS[c], h: PANE_ROWS[r + 1] - PANE_ROWS[r], color: paneColor(c, r), key: `${c}-${r}`, delay: 0.2 + (c + r) * 0.06 })
  }
}

function LeadStamp() {
  return (
    <span className="lab-stamp" aria-hidden="true">
      <span className="lab-stamp-strip" />
      <span className="lab-stamp-text">SET V · DESIGNED BY GLM 5.2</span>
      <span className="lab-stamp-strip" />
    </span>
  )
}

export default function Labyrinth() {
  return (
    <div className="th-laby">
      <div className="lab-wall-texture" aria-hidden="true" />

      <header className="lab-head">
        <p className="lab-eyebrow" lang="fr">Folio III · Vitraux</p>
        <h1 className="lab-title" lang="fr">Le Labyrinthe</h1>
        <p className="lab-subtitle">A leaded window from the chapel of the Minotaur — the man-bull caged in seven rings of glass and lead.</p>
      </header>

      <div className="lab-window-wrap">
        <svg className="lab-window" viewBox="0 0 600 780" aria-hidden="true">
          <defs>
            <clipPath id="lab-arch-clip">
              <path d={ARCH_PATH} />
            </clipPath>
            <radialGradient id="lab-gold-grad" cx="42%" cy="36%" r="80%">
              <stop offset="0%" stopColor="#F4D24A" />
              <stop offset="100%" stopColor="#B07A14" />
            </radialGradient>
            <linearGradient id="lab-cobalt-grad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#2E5BB8" />
              <stop offset="100%" stopColor="#162E68" />
            </linearGradient>
            <linearGradient id="lab-crimson-grad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#B5232E" />
              <stop offset="100%" stopColor="#6E1218" />
            </linearGradient>
            <radialGradient id="lab-light" cx="50%" cy="28%" r="72%">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.22" />
              <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
            </radialGradient>
          </defs>

          <path d={ARCH_PATH} fill="#0E0A1A" />

          <g clipPath="url(#lab-arch-clip)">
            {PANES.map((p) => {
              const fill = p.color === 'gold' ? 'url(#lab-gold-grad)' : p.color === 'crimson' ? 'url(#lab-crimson-grad)' : 'url(#lab-cobalt-grad)'
              return (
                <motion.rect
                  key={p.key}
                  x={p.x} y={p.y} width={p.w} height={p.h}
                  fill={fill}
                  initial={{ opacity: 0, scale: 0.4 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.5, delay: p.delay, ease: 'easeOut' }}
                  style={{ transformOrigin: `${p.x + p.w / 2}px ${p.y + p.h / 2}px`, transformBox: 'fill-box' }}
                />
              )
            })}

            <g stroke="#070512" strokeWidth="4" fill="none">
              {PANE_COLS.map((x) => <line key={'c' + x} x1={x} y1="40" x2={x} y2="748" />)}
              {PANE_ROWS.map((y) => <line key={'r' + y} x1="80" y1={y} x2="520" y2={y} />)}
            </g>

            <rect x="80" y="40" width="440" height="708" fill="url(#lab-light)" />

            <circle cx="300" cy="404" r="146" fill="#070512" />
            <circle cx="300" cy="404" r="142" fill="url(#lab-gold-grad)" />
            <circle cx="300" cy="404" r="142" fill="none" stroke="#070512" strokeWidth="6" />

            <g fill="none" stroke="#6E1218" strokeWidth="3.4" strokeLinecap="round">
              {LABYRINTH_RINGS.map((r, i) => (
                <motion.path
                  key={r}
                  d={arcPath(300, 404, r, LABYRINTH_GAPS[i], LABYRINTH_GAPS[i] + 320)}
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.1, delay: 0.7 + i * 0.14, ease: 'easeInOut' }}
                />
              ))}
              <motion.path
                d="M300,404 L300,276"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 1.5 }}
              />
            </g>

            <motion.g
              style={{ transformOrigin: '300px 300px', transformBox: 'fill-box' }}
              animate={{ rotate: [-1.4, 1.4, -1.4] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            >
              <g transform="translate(200, 244)">
                <motion.path
                  d={MINOTAUR_BODY}
                  fill="#070512"
                  stroke="#070512"
                  strokeWidth="2"
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 1.6, ease: 'easeOut' }}
                />
                <path d={MINOTAUR_HORN_L} fill="none" stroke="#070512" strokeWidth="4.5" strokeLinecap="round" />
                <path d={MINOTAUR_HORN_R} fill="none" stroke="#070512" strokeWidth="4.5" strokeLinecap="round" />
                <path d={MINOTAUR_TAIL} fill="none" stroke="#070512" strokeWidth="3.4" strokeLinecap="round" />
                <path d="M132,78 C136,76 140,76 142,78" fill="none" stroke="#F4D24A" strokeWidth="2.6" strokeLinecap="round" />
                <path d="M168,78 C164,76 160,76 158,78" fill="none" stroke="#F4D24A" strokeWidth="2.6" strokeLinecap="round" />
              </g>
            </motion.g>

            <path d={ARCH_PATH} fill="none" stroke="#070512" strokeWidth="9" />
            <path d={ARCH_PATH} fill="none" stroke="#3A2E5A" strokeWidth="3" opacity="0.6" transform="translate(0,4)" />
          </g>
        </svg>

        <LeadStamp />
      </div>

      <footer className="lab-foot">
        <p className="lab-foot-line" lang="la">Haec figura ostendit taurum in sepse — Tab. III</p>
        <p className="lab-foot-credit">GLOSIERS DE GLM 5.2 · LEADWORK SET V</p>
      </footer>
    </div>
  )
}
