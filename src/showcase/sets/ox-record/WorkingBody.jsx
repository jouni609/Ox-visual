import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import './working-body.css'

const structures = [
  {
    name: 'Shoulder',
    heading: 'A muscular sling',
    note: 'Muscles suspend the trunk between the forelegs. As a foreleg swings, the shoulder blade glides against the rib cage.',
    point: [305, 178],
    leader: 'M305 178 332 53H438',
  },
  {
    name: 'Dewlap',
    heading: 'The fold under the throat',
    note: 'Loose skin falls from the lower neck toward the brisket. The fold deepens as the ox lifts its muzzle.',
    point: [219, 236],
    leader: 'M219 236 158 292H73',
  },
  {
    name: 'Cloven hoof',
    heading: 'Two weight-bearing toes',
    note: 'Each hoof splits into two digits. The halves can spread slightly under load as the ox steps onto uneven ground.',
    point: [302, 352],
    leader: 'M302 352 333 392H434',
  },
]

function OxPlate({ structure }) {
  return (
    <svg viewBox="0 0 790 415" role="img" aria-label="Left-facing domestic ox, with two horns, a heavy dewlap and four planted hooves">
      <defs>
        <linearGradient id="ox-record-plate-hide" x2=".22" y2="1">
          <stop stopColor="#f1f5ff" />
          <stop offset=".57" stopColor="#c8d7ff" />
          <stop offset="1" stopColor="#899ff1" />
        </linearGradient>
        <pattern id="ox-record-plate-hatch" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(35)">
          <path d="M0 0V6" stroke="#253aa6" strokeOpacity=".34" strokeWidth="1" />
        </pattern>
      </defs>
      <g fill="none" stroke="#657cf5" strokeWidth="1" opacity=".65">
        <path d="M44 44H746V370H44ZM44 112H746M44 229H746M44 353H746M177 44V370M313 44V370M444 44V370M580 44V370" strokeDasharray="3 6" />
        <path d="M38 44h12m-6-6v12m696-6h12m-6-6v12M38 370h12m-6-6v12m696-6h12m-6-6v12" />
      </g>
      <ellipse cx="405" cy="359" rx="294" ry="14" fill="#172d96" opacity=".6" />
      <g stroke="#142775" strokeWidth="3" strokeLinejoin="round" strokeLinecap="round">
        <path d="M610 155C663 131 678 167 681 207c4 47-2 79 28 101" fill="none" stroke="#a9baff" strokeWidth="10" />
        <path d="M703 296q15 1 24 25l-17-6 3 14q-20-10-17-25Z" fill="#4b5aaa" />
        <path d="M293 222c20 15 29 45 31 76l14 36 17 8 3 11h-47l-6-20-21-37-27-60Z" fill="#8197e6" />
        <path d="M559 222c30 12 40 33 34 55l-25 34 1 20 17 10 1 11h-43l-4-19-1-22 13-38-41-20Z" fill="#8197e6" />
        <path d="M311 342q24-5 44 0l3 11h-47Zm232-1q21-6 42 0l2 11h-43Z" fill="#253881" />
        <path d="M175 137c-7-27-1-49 31-62-11 12-13 25-7 42l5 20Z" fill="#9badf9" />
        <path d="M215 145c28 4 48-10 80-23 40-17 81-11 131-6 57 6 112-5 162 3 52 8 72 38 70 74-1 35-11 57-28 75-11 12-15 32-13 62l12 13 5 13h-45l-3-18-1-28 10-36c-11-6-25-13-42-17-47 27-110 25-159 20-26-3-47-9-71-10-13 14-18 28-20 49l2 23 14 7 2 11h-49l3-25 1-43-9-27c-28 1-63-3-71-24-11-28-16-64 19-93Z" fill="url(#ox-record-plate-hide)" />
        <path d="M192 179c20 6 44 11 69-7-17 24-16 47-9 67 7 16 1 23-10 25-21 1-36-12-47-25l-26-41Z" fill="#a0b1ef" />
        <path d="M218 153c20-19 30-19 46-16-10 14-23 24-41 25Z" fill="#a6b7f5" />
        <path d="M198 136c-18-9-34-12-51-2-10 6-19 17-28 30l-25 22c-10 9-15 19-8 28 10 13 36 15 49 8l29-19c12 0 25-5 31-15l23-30Z" fill="#dce6ff" />
        <path d="M172 147c-16-7-24-18-31-29-13-19-39-25-53-19 22-17 56-13 71 4l26 27Z" fill="#e7efff" />
        <path d="M181 153c20-9 46-12 59-6-6 17-29 23-54 17Z" fill="#869be9" />
        <path d="M190 157c16-5 28-7 39-7" fill="none" stroke="#d0ddff" />
        <path d="M99 182c8 1 12 5 16 10l20 3 5 10c-12 15-41 27-53 11-9-11 1-24 12-34Z" fill="#7190df" />
        <path d="M91 208q19 7 36-1m-24-13 5 2" fill="none" />
        <path d="M272 343q19-4 36-1l11 5 2 11h-49Zm317-1q22-4 33-2l9 6 3 11h-45Z" fill="#2b3b83" />
        <path d="M292 345v11m323-13 3 12m-284-12 4 8m232-8 2 8" fill="none" stroke="#a9bbff" strokeWidth="1.5" />
        <path d="M147 161q9-8 19-3-6 9-16 7Z" fill="#15265f" strokeWidth="1.5" />
      </g>
      <g fill="none" stroke="#425ab6" strokeWidth="1.5" strokeLinecap="round">
        <path d="M152 146q9-4 17-1m-34 26q5 11-1 20m35-18q-6 16-21 21m41-22q5 14-7 23m16 9q5 17 27 25m-22-38q13 19 29 23m-20 13q10 12 20 15m27-79q30-28 58-31 37-5 76 1m-112 24q21-15 51-14m-43 133q14-40 4-82m6-14q13 27 11 51m-1 30q15-29 16-54m13-35q20-14 51-15m-42 21q-10 35-3 63m23-73q-11 36-4 70m19-70q-7 47 3 78m17-81q-5 48 8 78m20-83q2 48 12 72m11-76q-1 38 13 67m25-97q45-16 82 1m-71 103q-11-28-1-52 16-41 50-35m-21 17q-24 25-7 61m22-47q11 25-2 64m-3 15q-9 18-8 32m-302-2q-4 14-2 31" />
        <path d="M355 247q72 24 164 2m-181-2q54 25 119 20m80-136q37-5 69 9m-283 12q-41 6-56 30m-14 63q9 18 24 23m305-1q-22-12-37-37" />
      </g>
      <path d="M268 184c13-25 48-38 75-42-22 35-15 72-39 107-7 9-17 14-28 12 16-26 8-51-8-77Zm282 28c-12 11-11 34 7 46l39 20-8 22 20-26c-21-18-34-33-37-61Z" fill="url(#ox-record-plate-hatch)" />
      <circle cx="156" cy="160" r="1.5" fill="#fff4c5" />
      <AnimatePresence mode="wait">
        <motion.g key={structure.name} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: .18 }}>
          <circle cx={structure.point[0]} cy={structure.point[1]} r="20" fill="#f4ee8b" fillOpacity=".28" stroke="#f4ee8b" strokeWidth="1.4" />
          <motion.path d={structure.leader} fill="none" stroke="#f4ee8b" strokeWidth="1.5" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: .4 }} />
          <circle cx={structure.point[0]} cy={structure.point[1]} r="4" fill="#f4ee8b" stroke="#263b9f" strokeWidth="1.5" />
        </motion.g>
      </AnimatePresence>
    </svg>
  )
}

export default function WorkingBody() {
  const [selected, setSelected] = useState(0)
  const structure = structures[selected]

  return (
    <article className="th-ox-record-body">
      <div className="ox-record-body-frame">
        <header className="ox-record-body-mast">
          <span>The Bovine Record</span>
          <span>Register 01 / Anatomy</span>
        </header>
        <div className="ox-record-body-grid">
          <div className="ox-record-body-intro">
            <p className="ox-record-body-index">Plate 01 · Domestic ox</p>
            <h1>The working body</h1>
            <p>Follow the weight from shoulder to soil in the body of a draught ox.</p>
          </div>
          <figure className="ox-record-body-plate">
            <OxPlate structure={structure} />
            <figcaption><span>Fig. A · Lateral view</span><span lang="la">Bos taurus</span></figcaption>
          </figure>
        </div>
        <div className="ox-record-body-reader">
          <div className="ox-record-body-controls" role="group" aria-label="Anatomical callouts">
            {structures.map(({ name }, index) => (
              <button key={name} type="button" aria-pressed={selected === index} onClick={() => setSelected(index)}>
                <span aria-hidden="true">0{index + 1}</span>{name}
              </button>
            ))}
          </div>
          <div className="ox-record-body-reading" aria-live="polite">
            <h2>{structure.heading}</h2>
            <p>{structure.note}</p>
          </div>
          <div className="ox-record-body-imprint">
            <span>Record drawing · A/01</span>
            <strong>SET XXXVII · DESIGNED BY GPT 6.2 SOL</strong>
          </div>
        </div>
      </div>
    </article>
  )
}
