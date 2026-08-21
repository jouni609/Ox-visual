import { motion } from 'framer-motion'
import './hush.css'

const calls = [
  { name: 'Mother / calf', distance: 'close', detail: 'A low pulse that keeps one pair together in tall grass.' },
  { name: 'Grazing line', distance: 'near', detail: 'Soft contact calls hold a moving group in one loose shape.' },
  { name: 'Water point', distance: 'far', detail: 'The sound carries across the herd when heads are down.' },
]

function HushMap() {
  return (
    <svg className="osh-map" viewBox="0 0 720 650" aria-hidden="true" focusable="false">
      <circle cx="360" cy="320" r="248" fill="#E6E0F5" stroke="#332D4D" strokeWidth="2" />
      <circle cx="360" cy="320" r="192" fill="none" stroke="#A49AC9" strokeWidth="1" strokeDasharray="3 9" />
      <circle cx="360" cy="320" r="130" fill="none" stroke="#A49AC9" strokeWidth="1" strokeDasharray="2 8" />
      <path d="M106 320H614M360 70V570" stroke="#A49AC9" strokeWidth="1" opacity="0.65" />
      <path d="M174 149C287 252 436 396 550 491M548 149C438 254 280 394 172 490" fill="none" stroke="#A49AC9" strokeWidth="1" opacity="0.55" />
      <g className="osh-pulse osh-pulse-one"><circle cx="360" cy="320" r="88" fill="none" stroke="#6C579E" strokeWidth="2" /><circle cx="360" cy="320" r="103" fill="none" stroke="#6C579E" strokeWidth="1" /></g>
      <g className="osh-ox" transform="translate(258 198)">
        <path d="M104 99C113 57 151 27 201 27C252 27 290 59 299 104L313 194C317 221 298 244 270 246L91 246C61 244 43 221 47 192Z" fill="#332D4D" />
        <path d="M111 97C71 80 32 88 5 117C-12 135 -7 157 14 165L54 176L83 148Z" fill="#332D4D" />
        <path d="M8 118C-13 104 -25 75 -9 55C5 37 28 45 46 64L36 105Z" fill="#332D4D" />
        <path d="M32 73C18 47 22 21 43 7C58 -3 75 7 78 28L65 62Z" fill="#B6A6DB" />
        <path d="M246 77C274 58 295 49 326 57C348 63 357 83 340 95L299 120Z" fill="#332D4D" />
        <path d="M328 58C348 33 371 27 387 44C400 58 391 79 371 91L342 88Z" fill="#B6A6DB" />
        <ellipse cx="152" cy="122" rx="10" ry="15" fill="#F8F5EE" />
        <ellipse cx="249" cy="122" rx="10" ry="15" fill="#F8F5EE" />
        <circle cx="151" cy="126" r="4" fill="#332D4D" />
        <circle cx="249" cy="126" r="4" fill="#332D4D" />
        <path d="M128 174C163 151 235 151 273 174L264 214C226 231 170 230 136 213Z" fill="#6C579E" stroke="#332D4D" strokeWidth="5" />
        <path d="M157 190C177 199 224 200 247 190" fill="none" stroke="#E6E0F5" strokeWidth="3" strokeLinecap="round" />
        <path d="M153 246L149 301H179L186 248M237 248L243 301H273L266 245" fill="#332D4D" />
        <path d="M145 301H181M239 301H277" stroke="#332D4D" strokeWidth="7" strokeLinecap="round" />
      </g>
      <g className="osh-node osh-node-a"><circle cx="160" cy="177" r="13" fill="#F28E78" stroke="#332D4D" strokeWidth="3" /><circle cx="160" cy="177" r="4" fill="#332D4D" /></g>
      <g className="osh-node osh-node-b"><circle cx="570" cy="211" r="13" fill="#F28E78" stroke="#332D4D" strokeWidth="3" /><circle cx="570" cy="211" r="4" fill="#332D4D" /></g>
      <g className="osh-node osh-node-c"><circle cx="132" cy="442" r="13" fill="#F28E78" stroke="#332D4D" strokeWidth="3" /><circle cx="132" cy="442" r="4" fill="#332D4D" /></g>
      <g className="osh-node osh-node-d"><circle cx="566" cy="465" r="13" fill="#F28E78" stroke="#332D4D" strokeWidth="3" /><circle cx="566" cy="465" r="4" fill="#332D4D" /></g>
      <text x="360" y="46" textAnchor="middle" fill="#4F3E78" fontFamily="Sora, sans-serif" fontSize="10" fontWeight="700" letterSpacing="3">QUIET ZONE / 38 HZ</text>
      <text x="360" y="612" textAnchor="middle" fill="#4F3E78" fontFamily="Sora, sans-serif" fontSize="10" fontWeight="700" letterSpacing="3">DISTANCE FROM THE LISTENER</text>
    </svg>
  )
}

export default function Hush() {
  return (
    <div className="th-osh">
      <header className="osh-header"><span className="osh-mark">OX SIGNALS</span><span>02 / LOW-FREQUENCY HERD MAP</span><span className="osh-status"><i /> LISTENING</span></header>
      <main className="osh-shell">
        <section className="osh-intro">
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <p className="osh-kicker">A SOCIAL FIELD NOTE</p>
            <h1>Hush<span>.</span></h1>
            <p className="osh-lede">The herd does not need a shout. A calf finds its mother by a low pulse, and a grazing line keeps contact through sound we barely notice.</p>
            <div className="osh-caption"><span>HEARD IN THE SHADE</span><strong>38-112 Hz</strong><small>Most bovine contact calls sit below the human speaking voice.</small></div>
          </motion.div>
          <motion.div className="osh-map-wrap" initial={{ opacity: 0, rotate: 4 }} animate={{ opacity: 1, rotate: 0 }} transition={{ duration: 1, delay: .1 }}><HushMap /><span className="osh-map-label">FIG. 02 / ONE OX, FOUR LISTENERS</span></motion.div>
        </section>
        <section className="osh-calls" aria-label="Herd call notes">
          <div className="osh-calls-heading"><span>CALL LOG</span><p>One sound changes meaning with distance.</p></div>
          <div className="osh-call-grid">{calls.map((call, index) => <motion.article className="osh-call" key={call.name} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * .1 }}><span className="osh-call-dot" aria-hidden="true" /><div><h2>{call.name}</h2><p>{call.detail}</p></div><span className="osh-distance">{call.distance}</span></motion.article>)}</div>
        </section>
      </main>
      <footer className="osh-footer"><span className="osh-woven">FIELD RECORD / KEEP YOUR VOICE LOW</span><span className="osh-signature">SET X · DESIGNED BY GTP 5.6 LUNA</span><span>THE HERD HOLDS ITS SHAPE BY LISTENING.</span></footer>
    </div>
  )
}
