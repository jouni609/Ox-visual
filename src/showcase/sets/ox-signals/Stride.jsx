import { motion } from 'framer-motion'
import './stride.css'

function StrideFigure() {
  return (
    <svg className="osg-figure" viewBox="0 0 900 520" aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id="osg-skin" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#182746" />
          <stop offset="1" stopColor="#3155D6" />
        </linearGradient>
        <pattern id="osg-grain" width="18" height="18" patternUnits="userSpaceOnUse" patternTransform="rotate(18)">
          <path d="M0 2H18" stroke="#F7F2E8" strokeWidth="1" opacity="0.13" />
        </pattern>
      </defs>
      <path className="osg-ground" d="M45 427H855" />
      <path className="osg-speed osg-speed-a" d="M80 362H245" />
      <path className="osg-speed osg-speed-b" d="M642 318H805" />
      <path className="osg-speed osg-speed-c" d="M110 401H200" />
      <g className="osg-ox" transform="translate(116 64)">
        <path d="M156 161C205 102 331 88 462 120C528 136 579 181 598 239L622 309C632 341 607 363 568 354L502 338L458 373L216 366C170 364 134 336 129 288L121 218Z" fill="url(#osg-skin)" stroke="#182746" strokeWidth="7" strokeLinejoin="round" />
        <path d="M156 161C205 102 331 88 462 120C528 136 579 181 598 239L622 309C632 341 607 363 568 354L502 338L458 373L216 366C170 364 134 336 129 288L121 218Z" fill="url(#osg-grain)" opacity="0.9" />
        <path d="M153 195C105 180 64 193 32 226L4 254L67 268C99 274 131 261 159 235Z" fill="#3155D6" stroke="#182746" strokeWidth="7" />
        <path d="M12 249C-8 227 -5 201 18 185C39 171 69 178 87 198L66 226Z" fill="#182746" stroke="#182746" strokeWidth="7" />
        <path d="M13 186C-4 170 -12 143 2 123C20 99 48 111 62 135L48 172Z" fill="#F4AE28" stroke="#182746" strokeWidth="7" strokeLinejoin="round" />
        <path d="M90 191C64 169 44 154 18 151C52 133 92 144 123 177" fill="none" stroke="#F7F2E8" strokeWidth="9" strokeLinecap="round" />
        <circle cx="31" cy="211" r="8" fill="#F7F2E8" />
        <circle cx="32" cy="211" r="3.5" fill="#182746" />
        <path d="M7 268C24 279 43 279 60 270" fill="none" stroke="#F4AE28" strokeWidth="5" strokeLinecap="round" />
        <path d="M225 350L218 447L258 447L273 356" fill="#182746" stroke="#182746" strokeWidth="7" strokeLinejoin="round" />
        <path d="M454 354L473 451L513 451L503 339" fill="#182746" stroke="#182746" strokeWidth="7" strokeLinejoin="round" />
        <path d="M520 342L574 421L607 403L564 316" fill="#3155D6" stroke="#182746" strokeWidth="7" strokeLinejoin="round" />
        <path d="M169 337L117 403L147 425L206 365" fill="#3155D6" stroke="#182746" strokeWidth="7" strokeLinejoin="round" />
        <path d="M213 449H263M468 453H518M566 423L609 402M114 404L148 425" stroke="#F4AE28" strokeWidth="9" strokeLinecap="round" />
        <path d="M271 130C332 108 407 111 478 135" fill="none" stroke="#F4AE28" strokeWidth="8" strokeLinecap="round" />
        <path d="M311 122C328 145 341 166 344 190" fill="none" stroke="#F7F2E8" strokeWidth="4" opacity="0.75" />
        <path d="M402 118C415 143 420 160 420 184" fill="none" stroke="#F7F2E8" strokeWidth="4" opacity="0.75" />
      </g>
      <g className="osg-annotation">
        <path d="M280 177L280 74H356" fill="none" stroke="#182746" strokeWidth="2" strokeDasharray="5 6" />
        <circle cx="280" cy="177" r="6" fill="#F4AE28" stroke="#182746" strokeWidth="2" />
        <text x="370" y="72" fill="#182746" fontFamily="Space Grotesk, sans-serif" fontSize="14" fontWeight="700" letterSpacing="2">CENTER OF MASS</text>
        <text x="370" y="94" fill="#3155D6" fontFamily="Space Grotesk, sans-serif" fontSize="12" letterSpacing="1">LOW · FORWARD · STEADY</text>
        <path d="M664 373L735 448H837" fill="none" stroke="#182746" strokeWidth="2" strokeDasharray="5 6" />
        <circle cx="664" cy="373" r="6" fill="#F4AE28" stroke="#182746" strokeWidth="2" />
        <text x="712" y="468" fill="#182746" fontFamily="Space Grotesk, sans-serif" fontSize="14" fontWeight="700" letterSpacing="2">PUSH PHASE</text>
      </g>
    </svg>
  )
}

const phases = [
  ['01', 'Load', 'The back foot takes the ground.'],
  ['02', 'Float', 'The body passes over the planted pair.'],
  ['03', 'Push', 'The shoulder gives the next metre away.'],
]

export default function Stride() {
  return (
    <div className="th-osg">
      <header className="osg-header">
        <span className="osg-brand">OX SIGNALS / KINETIC STUDY</span>
        <span className="osg-issue">PLATE 01 / 05</span>
      </header>
      <main>
        <section className="osg-hero">
          <motion.div className="osg-copy" initial={{ opacity: 0, x: -24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.65 }}>
            <p className="osg-kicker">LOCOMOTION / WORKING OX</p>
            <h1><span>The</span> stride</h1>
            <p className="osg-lede">A working ox spends its strength in a quiet sequence. Four hooves trade the load, the shoulder leans into the next step, and the whole animal keeps moving.</p>
            <div className="osg-readout">
              <div><strong>0.8 m</strong><span>average stride</span></div>
              <div><strong>4</strong><span>hooves in sequence</span></div>
              <div><strong>7 km/h</strong><span>working pace</span></div>
            </div>
          </motion.div>
          <motion.div className="osg-plate" initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.12 }}>
            <StrideFigure />
            <div className="osg-plate-note"><span>Fig. 01</span><span>Left lateral phase / not to scale</span></div>
          </motion.div>
        </section>
        <section className="osg-phases" aria-label="Three phases of an ox stride">
          <div className="osg-phases-intro"><span className="osg-big-mark">03</span><p>Momentum is not speed. It is the body agreeing with itself.</p></div>
          <div className="osg-phase-list">
            {phases.map(([number, title, text], index) => (
              <motion.article className="osg-phase" key={title} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}>
                <span className="osg-phase-number">{number}</span><div><h2>{title}</h2><p>{text}</p></div><span className="osg-phase-line" aria-hidden="true" />
              </motion.article>
            ))}
          </div>
        </section>
      </main>
      <footer className="osg-footer"><span className="osg-calibration">CALIBRATION MARK / 46 DEG 12 MIN N</span><span className="osg-signature">SET X · DESIGNED BY GTP 5.6 LUNA</span><span className="osg-footer-note">The ox saves energy by making every step count.</span></footer>
    </div>
  )
}
