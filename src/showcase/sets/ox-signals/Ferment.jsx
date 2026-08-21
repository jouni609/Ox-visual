import { motion } from 'framer-motion'
import './ferment.css'

const chambers = [
  ['Rumen', 'The vat', 'Grass meets microbes here. The ox turns rough stems into fuel.'],
  ['Reticulum', 'The sorter', 'Small particles move on. Heavy surprises settle out.'],
  ['Omasum', 'The press', 'Folds squeeze water from the chewed feed.'],
  ['Abomasum', 'The acid', 'The familiar stomach comes last, not first.'],
]

function FermentDiagram() {
  return (
    <svg className="ofm-diagram" viewBox="0 0 800 600" aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id="ofm-body" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#4E3A82" />
          <stop offset="1" stopColor="#2B204B" />
        </linearGradient>
        <linearGradient id="ofm-rumen" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#B7E64B" />
          <stop offset="1" stopColor="#78C796" />
        </linearGradient>
      </defs>
      <path d="M64 522H740" stroke="#2B204B" strokeWidth="3" strokeDasharray="2 13" strokeLinecap="round" />
      <g className="ofm-ox" transform="translate(80 70)">
        <path d="M159 187C190 105 287 76 415 105C493 123 549 173 574 244L601 343C611 380 583 404 536 394L458 375L409 409L197 392C150 388 120 352 122 302Z" fill="url(#ofm-body)" stroke="#2B204B" strokeWidth="7" />
        <path d="M158 195C113 177 74 188 37 222L4 251L65 267C101 276 132 260 165 231Z" fill="#4E3A82" stroke="#2B204B" strokeWidth="7" />
        <path d="M15 252C-5 232 -8 204 12 185C34 164 65 178 84 202L68 233Z" fill="#2B204B" />
        <path d="M5 185C-11 165 -11 140 4 120C20 98 48 109 62 135L50 171Z" fill="#B7E64B" stroke="#2B204B" strokeWidth="7" />
        <path d="M76 201C52 179 33 162 10 158C44 141 88 151 122 181" fill="none" stroke="#D7E5FF" strokeWidth="8" strokeLinecap="round" />
        <circle cx="34" cy="211" r="7" fill="#B7E64B" /><circle cx="34" cy="211" r="3" fill="#2B204B" />
        <path d="M11 267C28 277 46 276 63 266" fill="none" stroke="#B7E64B" strokeWidth="5" strokeLinecap="round" />
        <path d="M195 376L184 479H223L245 384M424 383L443 481H482L465 370" fill="#2B204B" stroke="#2B204B" strokeWidth="8" />
        <path d="M181 480H228M439 482H488" stroke="#B7E64B" strokeWidth="9" strokeLinecap="round" />
        <path d="M240 130C313 103 402 112 475 145" fill="none" stroke="#B7E64B" strokeWidth="7" strokeLinecap="round" />
        <path d="M266 163C310 140 400 147 478 195C515 220 523 301 476 343C419 394 276 360 232 290C209 254 218 190 266 163Z" fill="url(#ofm-rumen)" stroke="#2B204B" strokeWidth="5" />
        <path d="M293 204C344 172 416 187 455 224C478 247 470 299 439 319C394 349 302 325 275 278C259 250 270 218 293 204Z" fill="#D7E5FF" stroke="#2B204B" strokeWidth="4" />
        <path d="M322 229C347 214 386 219 405 241C420 257 412 286 388 293C358 302 325 285 315 263C310 250 312 236 322 229Z" fill="#F08D64" stroke="#2B204B" strokeWidth="4" />
        <path d="M346 248C367 243 385 252 386 267C385 282 366 286 351 278C339 271 338 254 346 248Z" fill="#4E3A82" stroke="#2B204B" strokeWidth="3" />
        <path d="M248 315C279 349 332 366 392 360" fill="none" stroke="#2B204B" strokeWidth="4" strokeDasharray="7 8" />
      </g>
      <path d="M350 221C277 197 216 156 188 99" fill="none" stroke="#B7E64B" strokeWidth="3" strokeDasharray="6 8" />
      <path d="M187 99L180 115M187 99L202 103" fill="none" stroke="#B7E64B" strokeWidth="3" strokeLinecap="round" />
      <text x="150" y="76" fill="#2B204B" fontFamily="JetBrains Mono, monospace" fontSize="13" fontWeight="700" letterSpacing="1">CHEWED FIBRE</text>
      <text x="518" y="198" fill="#2B204B" fontFamily="JetBrains Mono, monospace" fontSize="13" fontWeight="700" letterSpacing="1">RUMEN WALL</text>
      <path d="M490 204L464 244" stroke="#2B204B" strokeWidth="2" strokeDasharray="4 5" />
      <g className="ofm-bubbles">
        {[{ x: 363, y: 240, r: 8, d: 0 }, { x: 402, y: 216, r: 5, d: .4 }, { x: 427, y: 249, r: 11, d: .8 }, { x: 445, y: 286, r: 6, d: 1.2 }, { x: 397, y: 309, r: 4, d: 1.5 }].map((bubble) => <motion.circle key={`${bubble.x}-${bubble.y}`} cx={bubble.x} cy={bubble.y} r={bubble.r} fill="#B7E64B" stroke="#2B204B" strokeWidth="2" animate={{ y: [bubble.y, bubble.y - 18, bubble.y], opacity: [0.35, 1, 0.35] }} transition={{ duration: 2.8, delay: bubble.d, repeat: Infinity, ease: 'easeInOut' }} />)}
      </g>
    </svg>
  )
}

export default function Ferment() {
  return (
    <div className="th-ofm">
      <header className="ofm-header"><span className="ofm-logo">OX SIGNALS<span> / BIOPROCESS</span></span><span className="ofm-code">PLATE 03 / RUMEN 04</span></header>
      <main>
        <section className="ofm-hero">
          <motion.div className="ofm-copy" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: .7 }}>
            <p className="ofm-kicker">DIGESTION IS A PARTNERSHIP</p>
            <h1>Ferment<span>/</span></h1>
            <p className="ofm-lede">The ox cannot digest grass alone. Billions of microbes do the first work inside a warm, moving tank, and the animal feeds them back with every mouthful.</p>
            <div className="ofm-metrics"><div><strong>4</strong><span>chambers</span></div><div><strong>18 h</strong><span>chewing / day</span></div><div><strong>55 L</strong><span>rumen volume</span></div></div>
          </motion.div>
          <motion.div className="ofm-instrument" initial={{ opacity: 0, rotate: 2 }} animate={{ opacity: 1, rotate: 0 }} transition={{ duration: .8, delay: .15 }}><div className="ofm-instrument-top"><span>LIVE CUTAWAY</span><span className="ofm-live"><i /> ACTIVE</span></div><FermentDiagram /><div className="ofm-instrument-bottom"><span>Specimen: Bos taurus</span><span>Feed: meadow fibre</span></div></motion.div>
        </section>
        <section className="ofm-chambers" aria-label="The four chambers of the ox stomach"><div className="ofm-section-title"><span>THE PROCESS</span><p>Grass enters. A working ecosystem comes out.</p></div><div className="ofm-chamber-grid">{chambers.map(([name, label, detail], index) => <motion.article className={`ofm-chamber ofm-chamber-${index + 1}`} key={name} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * .08 }}><span className="ofm-chamber-no">0{index + 1}</span><h2>{name}</h2><span className="ofm-chamber-label">{label}</span><p>{detail}</p></motion.article>)}</div></section>
      </main>
      <footer className="ofm-footer"><span className="ofm-lab-label">BIOLOGY DEPT. / FEEDSTOCK 26-B</span><span className="ofm-signature">SET X · DESIGNED BY GTP 5.6 LUNA</span><span>THE OX RUNS ON A CROWD.</span></footer>
    </div>
  )
}
