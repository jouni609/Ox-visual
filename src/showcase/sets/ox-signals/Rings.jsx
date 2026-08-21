import { motion } from 'framer-motion'
import './rings.css'

const years = [
  ['01', 'First winter', 'A tight new groove near the base.'],
  ['03', 'First calving', 'The horn records a season of change.'],
  ['06', 'Full pull', 'Dense growth follows a working rhythm.'],
  ['09', 'Old field', 'The tip carries the newest year.'],
]

function HornStudy() {
  return (
    <svg className="orn-study" viewBox="0 0 760 700" aria-hidden="true" focusable="false">
      <defs>
        <radialGradient id="orn-paper" cx="50%" cy="42%" r="65%">
          <stop offset="0" stopColor="#F5EEDC" />
          <stop offset="1" stopColor="#D5E1F1" />
        </radialGradient>
      </defs>
      <circle cx="380" cy="350" r="317" fill="url(#orn-paper)" stroke="#172744" strokeWidth="3" />
      <circle className="orn-orbit orn-orbit-a" cx="380" cy="350" r="278" fill="none" stroke="#EC6A51" strokeWidth="2" strokeDasharray="4 13" />
      <circle className="orn-orbit orn-orbit-b" cx="380" cy="350" r="245" fill="none" stroke="#A6BBD6" strokeWidth="2" strokeDasharray="1 9" />
      <path d="M380 33V667M63 350H697" stroke="#A6BBD6" strokeWidth="1" strokeDasharray="3 12" />
      <g className="orn-head" transform="translate(210 160)">
        <path d="M170 123C178 73 218 43 280 43C343 43 383 75 390 124L408 323C411 370 382 409 337 414L223 414C178 409 149 370 152 323Z" fill="#172744" />
        <path d="M170 130C128 113 79 119 47 145C28 160 31 184 55 192L107 202L155 176Z" fill="#172744" />
        <path d="M48 146C16 132 -6 104 5 76C16 47 45 46 67 69L81 112Z" fill="#EC6A51" stroke="#172744" strokeWidth="7" />
        <path d="M390 130C431 112 480 118 513 145C532 160 528 183 505 192L452 201L405 175Z" fill="#172744" />
        <path d="M513 146C546 131 566 102 555 75C543 46 515 46 493 69L479 112Z" fill="#EC6A51" stroke="#172744" strokeWidth="7" />
        <path d="M81 112C48 96 22 77 4 44C50 36 98 62 132 105" fill="none" stroke="#172744" strokeWidth="11" strokeLinecap="round" />
        <path d="M479 112C512 96 538 77 556 44C510 36 462 62 428 105" fill="none" stroke="#172744" strokeWidth="11" strokeLinecap="round" />
        <ellipse cx="226" cy="174" rx="12" ry="17" fill="#F5EEDC" /><ellipse cx="334" cy="174" rx="12" ry="17" fill="#F5EEDC" />
        <circle cx="227" cy="177" r="4" fill="#172744" /><circle cx="333" cy="177" r="4" fill="#172744" />
        <path d="M207 238C239 218 321 218 353 238L344 317C312 347 249 347 216 317Z" fill="#EC6A51" stroke="#172744" strokeWidth="6" />
        <path d="M236 272C263 287 298 287 325 272" fill="none" stroke="#F5EEDC" strokeWidth="4" strokeLinecap="round" />
        <path d="M220 318C246 342 315 342 340 318" fill="none" stroke="#172744" strokeWidth="5" strokeLinecap="round" />
        <path d="M212 411L207 485H251L260 415M347 415L357 485H400L394 411" fill="#172744" />
        <path d="M205 486H253M355 486H403" stroke="#EC6A51" strokeWidth="10" strokeLinecap="round" />
      </g>
      <g className="orn-ring-labels" fill="#172744" fontFamily="Manrope, sans-serif" fontSize="11" fontWeight="700" letterSpacing="2">
        <text x="90" y="212">HORN BASE</text><text x="558" y="212">YEAR 01</text><text x="574" y="498">TIP / NEWEST</text>
      </g>
      <path d="M169 220L224 282M548 220L480 279M549 505L476 459" stroke="#EC6A51" strokeWidth="2" strokeDasharray="4 6" />
    </svg>
  )
}

export default function Rings() {
  return (
    <div className="th-orn">
      <header className="orn-header"><span className="orn-title">OX SIGNALS / GROWTH STUDY</span><span>04 / HORN SECTION</span><span className="orn-year">ARCHIVE 1894-2026</span></header>
      <main>
        <section className="orn-hero">
          <motion.div className="orn-copy" initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7 }}>
            <p className="orn-kicker">A FIELD CALENDAR IN KERATIN</p>
            <h1>Rings</h1>
            <p className="orn-lede">A horn grows outward, one season at a time. Its ridges are not a perfect birthday cake, but they keep the broad weather of an ox’s life close to the surface.</p>
            <div className="orn-note"><span className="orn-note-mark">◎</span><p>Count the valleys at the base first. Read the tip last.</p></div>
          </motion.div>
          <motion.div className="orn-figure-wrap" initial={{ opacity: 0, scale: .93 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .85, delay: .12 }}><HornStudy /><span className="orn-figure-caption">Fig. 04 / Frontal study, mature ox / the horn is a record, not a clock.</span></motion.div>
        </section>
        <section className="orn-timeline" aria-label="Horn growth notes"><div className="orn-timeline-heading"><span>GROWTH NOTES</span><strong>One horn, four readings.</strong></div><div className="orn-years">{years.map(([number, title, detail], index) => <motion.article className="orn-year-card" key={number} initial={{ opacity: 0, x: index % 2 ? 12 : -12 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: index * .1 }}><span className="orn-year-number">{number}</span><h2>{title}</h2><p>{detail}</p><i aria-hidden="true" /></motion.article>)}</div></section>
      </main>
      <footer className="orn-footer"><span className="orn-patent">PATENTED FIELD METHOD / HORN-04</span><span className="orn-signature">SET X · DESIGNED BY GTP 5.6 LUNA</span><span>THE BODY KEEPS ITS OWN CALENDAR.</span></footer>
    </div>
  )
}
