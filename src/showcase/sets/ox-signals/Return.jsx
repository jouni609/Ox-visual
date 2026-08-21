import { motion } from 'framer-motion'
import './return.css'

function AurochsPlate() {
  return (
    <svg className="ore-plate-art" viewBox="0 0 880 560" aria-hidden="true" focusable="false">
      <path d="M0 444C108 427 173 448 273 436C383 422 473 450 590 432C692 416 764 435 880 421V560H0Z" fill="#BCD9B8" />
      <path d="M0 484C131 470 240 497 358 474C511 445 625 488 880 462" fill="none" stroke="#56B99B" strokeWidth="2" strokeDasharray="4 9" />
      <g className="ore-aurochs" transform="translate(89 92)">
        <path d="M172 211C204 124 330 97 465 133C534 151 588 190 620 252L653 347C664 380 642 405 599 397L516 377L468 419L230 406C177 402 142 369 139 320Z" fill="#21364A" />
        <path d="M173 218C124 193 76 203 31 236L0 260L61 280C104 291 140 274 177 246Z" fill="#21364A" />
        <path d="M5 236C-17 219 -21 187 -2 164C17 141 48 149 68 172L51 215Z" fill="#21364A" />
        <path d="M-1 165C-22 138 -21 102 -2 78C17 54 49 69 63 98L47 144Z" fill="#21364A" />
        <path d="M42 85C12 59 -8 35 -16 3C31 4 75 30 99 71" fill="none" stroke="#21364A" strokeWidth="15" strokeLinecap="round" />
        <path d="M15 100C-7 78 -26 71 -47 75C-26 100 -3 114 34 118" fill="none" stroke="#21364A" strokeWidth="13" strokeLinecap="round" />
        <path d="M613 244C660 219 699 218 735 239L696 268C671 279 643 274 619 261Z" fill="#21364A" />
        <path d="M728 240C753 222 777 224 793 242C805 256 794 275 772 279L740 266Z" fill="#21364A" />
        <circle cx="35" cy="192" r="8" fill="#F4775D" /><circle cx="35" cy="192" r="3" fill="#21364A" />
        <path d="M6 254C25 267 47 267 68 256" fill="none" stroke="#F4775D" strokeWidth="5" strokeLinecap="round" />
        <path d="M242 391L231 500H272L293 402M471 405L492 501H534L516 380M559 380L624 472L656 450L604 338M177 371L119 459L152 481L212 398" fill="#21364A" />
        <path d="M227 500H275M487 501H537M618 472L657 450M118 459L152 481" stroke="#F4775D" strokeWidth="10" strokeLinecap="round" />
        <path d="M257 153C330 120 422 128 501 158" fill="none" stroke="#F4775D" strokeWidth="8" strokeLinecap="round" />
        <path d="M214 196C285 179 414 181 515 224" fill="none" stroke="#56B99B" strokeWidth="3" strokeDasharray="6 8" opacity=".9" />
      </g>
      <g className="ore-grass" fill="none" stroke="#21364A" strokeWidth="3" strokeLinecap="round">
        <path d="M92 449L83 422M92 449L99 418M116 449L113 425M116 449L128 427M745 447L734 415M745 447L753 411M774 447L773 421M774 447L785 423" />
      </g>
      <path d="M54 55H295M54 72H198" stroke="#21364A" strokeWidth="2" />
      <text x="54" y="108" fill="#21364A" fontFamily="Work Sans, sans-serif" fontSize="13" fontWeight="700" letterSpacing="2">BOS PRIMIGENIUS</text>
      <text x="54" y="128" fill="#3155D6" fontFamily="Work Sans, sans-serif" fontSize="11" letterSpacing="1">THE WILD LINE / STILL LEGIBLE</text>
      <circle cx="778" cy="76" r="28" fill="#F4775D" /><path d="M778 57V95M759 76H797" stroke="#21364A" strokeWidth="3" />
    </svg>
  )
}

const facts = [
  ['Aurochs', 'BOS PRIMIGENIUS', 'The large wild ancestor carried a high shoulder and a long, forward horn.'],
  ['Bison', 'BISON BONASUS', 'Europe’s bison survived in fragments, then returned to the forest.'],
  ['Corridor', 'NORTH SEA / 2026', 'A wild herd needs room to move, calve, and meet another herd.'],
]

export default function Return() {
  return (
    <div className="th-ore">
      <header className="ore-header"><span className="ore-brand">OX SIGNALS / REWILDING OFFICE</span><span>05 / FIELD LETTER</span><span className="ore-date">ISSUED 21 AUG 2026</span></header>
      <main>
        <section className="ore-hero">
          <motion.div className="ore-copy" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7 }}>
            <p className="ore-kicker">A CONSERVATION QUESTION</p>
            <h1>The shape<br /><em>we left.</em></h1>
            <p className="ore-lede">Remove the fence and the ox does not become an idea. It becomes an animal again: shoulder first, horn forward, looking for a place wide enough to turn.</p>
            <div className="ore-callout"><span>FIELD PRINCIPLE</span><strong>Make room for the old body.</strong></div>
          </motion.div>
          <motion.div className="ore-art-wrap" initial={{ opacity: 0, x: 26 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: .8, delay: .12 }}><AurochsPlate /><div className="ore-art-index"><span>ARCHIVE DRAWING 05</span><span>REWILDING / SPECIES MEMORY</span></div></motion.div>
        </section>
        <section className="ore-facts" aria-label="Rewilding field notes"><div className="ore-facts-head"><span>THE RETURN FILE</span><p>The animal is the measure of the land.</p></div><div className="ore-fact-grid">{facts.map(([title, latin, detail], index) => <motion.article className="ore-fact" key={title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * .11 }}><span className="ore-fact-index">0{index + 1}</span><h2>{title}</h2><span className="ore-latin" lang="la">{latin}</span><p>{detail}</p><div className="ore-fact-bar" aria-hidden="true" /></motion.article>)}</div></section>
      </main>
      <footer className="ore-footer"><span className="ore-envelope">FIELD LETTER / RETURN TO SENDER: THE LAND</span><span className="ore-signature">SET X · DESIGNED BY GTP 5.6 LUNA</span><span>KEEP THE CORRIDOR OPEN.</span></footer>
    </div>
  )
}
