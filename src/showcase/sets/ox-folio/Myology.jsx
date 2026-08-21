import { useState } from 'react'
import { motion } from 'framer-motion'
import './myology.css'

const OX_BODY =
  'M252,150 C300,138 360,138 420,150 C452,156 470,168 478,182 ' +
  'C496,178 514,182 524,198 C532,210 530,224 520,232 ' +
  'C548,244 566,268 566,300 C566,330 552,352 528,364 ' +
  'C532,388 528,410 514,426 C504,438 488,444 472,440 ' +
  'C476,460 470,478 456,486 C442,492 428,488 422,476 ' +
  'C414,486 402,490 390,486 C378,482 372,470 372,458 ' +
  'L372,440 C320,438 268,422 232,392 C208,372 196,346 196,318 ' +
  'C196,286 212,258 238,238 C214,238 196,222 196,200 ' +
  'C196,176 220,158 252,150 Z'

const HEAD =
  'M238,238 C206,224 176,214 150,210 C122,206 100,214 86,230 ' +
  'C74,244 72,262 82,276 C92,290 112,296 134,292 C128,310 130,330 142,344 ' +
  'C152,356 168,360 182,356 C196,352 206,340 210,326 C232,336 252,332 266,318 ' +
  'C272,300 268,282 256,268 C262,256 262,244 258,232 Z'

const HORN_L =
  'M96,236 C84,212 78,186 86,164 C92,148 106,138 122,140 ' +
  'C116,156 116,176 124,194 C130,208 140,218 152,222'

const HORN_R =
  'M150,210 C150,186 158,164 174,152 C188,142 204,140 216,148 ' +
  'C204,158 196,174 192,192 C190,202 190,212 192,220'

const EAR =
  'M150,210 C140,196 124,190 108,194 C100,196 96,202 98,210 ' +
  'C110,206 126,206 140,212 C146,214 148,212 150,210 Z'

const EYE = 'M120,250 C128,248 136,250 140,256'
const NOSTRIL = 'M96,272 C102,274 106,278 106,282'

const LEG_FL = 'M214,330 C210,360 208,398 212,432 L196,436 C192,400 196,364 206,334 Z'
const LEG_FL_FAR = 'M236,334 C234,366 232,402 236,434 L222,438 C218,404 222,368 230,338 Z'
const LEG_BL = 'M524,232 C536,270 540,320 536,366 L520,370 C524,326 522,280 512,244 Z'
const LEG_BL_FAR = 'M506,238 C520,278 524,322 520,364 L504,368 C508,326 506,282 498,244 Z'

const TAIL =
  'M566,300 C586,310 596,330 596,356 C596,380 588,398 576,406 ' +
  'C582,388 582,366 574,348 C568,336 560,330 552,328'

const MUSCLE_TRAP = 'M252,150 C300,138 360,138 420,150 C420,166 414,180 402,188 C360,176 300,176 262,182 C254,172 250,160 252,150 Z'
const MUSCLE_NECK = 'M150,210 C176,214 206,224 238,238 C252,250 256,268 250,286 C226,272 200,262 176,258 C162,256 152,252 146,248 Z'
const MUSCLE_SHOULDER = 'M210,326 C232,336 252,332 266,318 C268,308 266,298 262,290 C244,300 224,306 206,308 C200,316 202,322 210,326 Z'
const MUSCLE_GLUTE = 'M478,182 C496,178 514,182 524,198 C532,210 530,224 520,232 C504,224 488,216 472,206 C470,196 472,188 478,182 Z'
const MUSCLE_BICEP = 'M566,300 C566,330 552,352 528,364 C518,356 510,344 508,330 C526,322 540,312 548,300 Z'
const MUSCLE_LAT = 'M372,440 C408,432 442,418 466,396 C470,386 470,374 466,364 C432,388 396,404 360,414 C364,424 368,432 372,440 Z'

const SKELETON_SPINE = 'M262,182 C320,172 380,172 432,182 C470,190 496,200 504,214'
const RIB1 = 'M300,200 C296,230 296,262 300,290'
const RIB2 = 'M330,200 C326,232 326,266 330,296'
const RIB3 = 'M360,202 C356,236 356,270 360,304'
const RIB4 = 'M390,204 C386,238 386,274 390,308'
const SCAPULA = 'M214,200 C236,196 262,200 282,214 C272,226 256,232 238,230 C222,228 214,216 214,200 Z'
const PELVIS = 'M470,200 C492,206 510,220 516,240 C506,248 490,248 478,242 C466,236 460,222 466,210 Z'

const LEADERS = [
  { id: 'trap', label: 'Trapezius', d: 'M402,188 L402,140 L300,140', cx: 300, cy: 140, tx: 300, ty: 132 },
  { id: 'brachio', label: 'Brachiocephalicus', d: 'M150,210 L150,150 L96,150', cx: 96, cy: 150, tx: 96, ty: 142 },
  { id: 'mass', label: 'Masseter', d: 'M120,252 L120,300 L60,300', cx: 60, cy: 300, tx: 60, ty: 292 },
  { id: 'lat', label: 'Latissimus dorsi', d: 'M466,396 L466,440 L380,440', cx: 380, cy: 440, tx: 380, ty: 452 },
  { id: 'glut', label: 'Gluteus medius', d: 'M478,182 L478,120 L560,120', cx: 560, cy: 120, tx: 540, ty: 112 },
  { id: 'bicep', label: 'Biceps femoris', d: 'M548,300 L600,300 L600,360', cx: 600, cy: 360, tx: 540, ty: 368 },
]

const STOMACHS = [
  { id: 'rumen', label: 'Rumen', d: 'M250,312 C290,302 340,302 380,312 C388,338 388,366 380,388 C340,396 290,396 250,388 C242,366 242,338 250,312 Z', tx: 268, ty: 356 },
  { id: 'retic', label: 'Reticulum', d: 'M250,312 C246,328 246,344 250,360 C238,360 228,354 228,344 C228,330 238,318 250,312 Z', tx: 192, ty: 350 },
  { id: 'omas', label: 'Omasum', d: 'M380,312 C404,320 418,334 418,352 C418,368 404,380 380,384 C376,366 376,338 380,312 Z', tx: 430, ty: 340 },
  { id: 'abom', label: 'Abomasum', d: 'M380,384 C404,392 418,400 418,412 C418,422 404,428 388,426 C380,416 376,400 380,384 Z', tx: 430, ty: 416 },
]

function Leader({ d, label, cx, cy, tx, ty, delay }) {
  return (
    <motion.g
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <path d={d} fill="none" stroke="var(--myo-bone)" strokeWidth="0.8" opacity="0.6" />
      <circle cx={cx} cy={cy} r="2.4" fill="var(--myo-muscle)" />
      <text x={tx} y={ty} fill="var(--myo-bone)" fontFamily="'Cinzel', serif" fontSize="11" letterSpacing="1.4" lang="la">{label.toUpperCase()}</text>
    </motion.g>
  )
}

function WaxSeal() {
  return (
    <span className="myo-seal" aria-hidden="true">
      <svg viewBox="0 0 90 90" focusable="false">
        <defs>
          <path id="myo-rim" d="M45,45 m-34,0 a34,34 0 1,1 68,0 a34,34 0 1,1 -68,0" />
        </defs>
        <circle cx="45" cy="45" r="42" fill="var(--myo-muscle)" />
        <circle cx="45" cy="45" r="42" fill="none" stroke="#5E1A12" strokeWidth="2" opacity="0.5" />
        <circle cx="45" cy="45" r="36" fill="none" stroke="#F1E7D2" strokeWidth="0.6" opacity="0.6" />
        <path d="M45,18 C58,18 66,28 66,40 C66,54 56,64 45,68 C34,64 24,54 24,40 C24,28 32,18 45,18 Z" fill="none" stroke="#F1E7D2" strokeWidth="1" opacity="0.5" />
        <text fill="#F1E7D2" fontFamily="'Cinzel', serif" fontSize="6.4" letterSpacing="1.6">
          <textPath href="#myo-rim" startOffset="50%" textAnchor="middle">SET V · DESIGNED BY FOLIO-PRESS</textPath>
        </text>
        <text x="45" y="44" textAnchor="middle" fill="#F1E7D2" fontFamily="'Cinzel', serif" fontSize="6" letterSpacing="1.4">OX</text>
        <text x="45" y="56" textAnchor="middle" fill="#F1E7D2" fontFamily="'Cinzel', serif" fontSize="13" fontWeight="700">V</text>
      </svg>
    </span>
  )
}

export default function Myology() {
  const [open, setOpen] = useState(false)

  return (
    <div className="th-myo">
      <header className="myo-head">
        <p className="myo-eyebrow">FOLIO I · TABULA MYOLOGICA</p>
        <h1 className="myo-title" lang="la">Myologia Bos</h1>
        <p className="myo-subtitle">Of the flesh of the ox — a plate lifted from the anatomical folio</p>
      </header>

      <div className="myo-stage">
        <div className="myo-frame">
          <span className="myo-corner myo-corner-tl" />
          <span className="myo-corner myo-corner-tr" />
          <span className="myo-corner myo-corner-bl" />
          <span className="myo-corner myo-corner-br" />
          <p className="myo-plate-num" lang="la">Tab. I</p>

          <svg className="myo-art" viewBox="0 0 660 500" aria-hidden="true">
            <defs>
              <linearGradient id="myo-muscle-grad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#C0392B" stopOpacity="0.72" />
                <stop offset="100%" stopColor="#8E2A20" stopOpacity="0.85" />
              </linearGradient>
              <radialGradient id="myo-vignette" cx="50%" cy="42%" r="68%">
                <stop offset="60%" stopColor="#0E4A47" stopOpacity="0" />
                <stop offset="100%" stopColor="#05201F" stopOpacity="0.55" />
              </radialGradient>
            </defs>

            <rect x="0" y="0" width="660" height="500" fill="url(#myo-vignette)" />

            <motion.g
              className="myo-figure"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            >
              <g stroke="var(--myo-bone)" strokeWidth="1.1" fill="var(--myo-bone)" opacity="0.92">
                <path d={TAIL} />
                <path d={LEG_BL_FAR} opacity="0.45" />
                <path d={LEG_FL_FAR} opacity="0.45" />
                <path d={LEG_BL} />
                <path d={LEG_FL} />
                <path d={OX_BODY} />
                <path d={EAR} opacity="0.7" />
                <path d={HEAD} />
                <path d={HORN_L} fill="none" strokeWidth="3.2" />
                <path d={HORN_R} fill="none" strokeWidth="3.2" />
                <path d={EYE} fill="none" strokeWidth="1.6" />
                <path d={NOSTRIL} fill="none" strokeWidth="1.4" />
              </g>

              <g fill="url(#myo-muscle-grad)" stroke="#7A2418" strokeWidth="0.6">
                <path d={MUSCLE_TRAP} />
                <path d={MUSCLE_NECK} />
                <path d={MUSCLE_SHOULDER} />
                <path d={MUSCLE_GLUTE} />
                <path d={MUSCLE_BICEP} />
                <path d={MUSCLE_LAT} />
              </g>

              <g stroke="var(--myo-bone)" fill="none" strokeWidth="0.7" opacity="0.55">
                <path d={SKELETON_SPINE} strokeWidth="1.4" opacity="0.7" />
                <path d={RIB1} />
                <path d={RIB2} />
                <path d={RIB3} />
                <path d={RIB4} />
                <path d={SCAPULA} />
                <path d={PELVIS} />
              </g>
            </motion.g>

            {LEADERS.map((l, i) => (
              <Leader key={l.id} {...l} delay={0.9 + i * 0.12} />
            ))}

            <g className="myo-stomachs" style={{ opacity: open ? 1 : 0, transition: 'opacity 0.45s ease' }}>
              <g fill="none" stroke="var(--myo-bone)" strokeWidth="0.9" opacity="0.85">
                {STOMACHS.map((s) => <path key={s.id} d={s.d} />)}
              </g>
              {STOMACHS.map((s) => (
                <text key={s.id} x={s.tx} y={s.ty} fill="var(--myo-bone-dim)" fontFamily="'Cinzel', serif" fontSize="8.5" letterSpacing="1" lang="la">{s.label.toUpperCase()}</text>
              ))}
            </g>

            <motion.g
              className="myo-flap"
              style={{ transformOrigin: '210px 440px' }}
              animate={{ rotateX: open ? -118 : 0 }}
              transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            >
              <path
                d="M210,330 C250,332 320,334 372,340 L372,440 C320,438 250,436 210,432 Z"
                fill="#0A3936"
                stroke="var(--myo-bone)"
                strokeWidth="0.8"
                opacity="0.94"
              />
              <text x="291" y="390" textAnchor="middle" fill="var(--myo-bone-dim)" fontFamily="'Cinzel', serif" fontSize="9" letterSpacing="1.4" lang="la">Lift the flap — quattuor ventriculi</text>
              <line x1="240" y1="404" x2="342" y2="404" stroke="var(--myo-bone-dim)" strokeWidth="0.5" />
            </motion.g>
          </svg>

          <button
            type="button"
            className="myo-flap-btn"
            aria-expanded={open}
            aria-controls="myo-flap"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? 'Close the flap' : 'Lift the flap'}
            <span aria-hidden="true" className="myo-flap-btn-mark">▾</span>
          </button>
        </div>

        <aside className="myo-legend">
          <p className="myo-legend-title" lang="la">Index musculorum</p>
          <ul className="myo-legend-list">
            <li><span className="myo-dot myo-dot-muscle" />Trapezius — lifts the shoulder</li>
            <li><span className="myo-dot myo-dot-muscle" />Brachiocephalicus — swings the head</li>
            <li><span className="myo-dot myo-dot-muscle" />Latissimus dorsi — pulls the foreleg back</li>
            <li><span className="myo-dot myo-dot-muscle" />Gluteus medius — drives the hindlimb</li>
          </ul>
          <p className="myo-legend-note">The ox carries sixty percent of its weight on the forehand; the musculature answers that bias.</p>
          <p className="myo-scale" lang="la">Scala · 1 : 8</p>
        </aside>
      </div>

      <footer className="myo-foot">
        <WaxSeal />
        <p className="myo-colophon" lang="la">Sigillum anatomiae — Tab. I</p>
      </footer>
    </div>
  )
}
