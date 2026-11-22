import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import './wallow.css'

function Bison() {
  return (
    <svg viewBox="34 32 628 357" role="img" aria-label="American bison with a high shaggy shoulder, a tucked beard, two short horns and four hooves beside a wallow">
      <defs>
        <pattern id="ox-record-bison-curls" width="18" height="15" patternUnits="userSpaceOnUse">
          <path d="M1 10q3-7 9-5m2 8q2-6 5-7" fill="none" stroke="#ba7e85" strokeWidth="1.4" strokeLinecap="round" opacity=".38" />
        </pattern>
        <clipPath id="ox-record-bison-mane">
          <path d="M300 125c29-37 44-52 103-56 49-3 96 36 111 79l35 77-41 70-67 8-15-23-12 16-16-20-19 7-12-22-19 11-11-20-17 6-9-18-16 7c-28-33-28-80 5-122Z" />
        </clipPath>
      </defs>
      <circle cx="403" cy="164" r="126" fill="#d9e679" />
      <path d="M44 309q137-23 235-12t182 7q109-12 190 8v64H44Z" fill="#b7cb5a" />
      <path d="M132 343q90-47 286-19c103 12 128 32-22 41-78 8-199 6-245-2q-41-5-19-20Z" fill="#9ba840" />
      <path d="M142 351q93-36 269-18 135 14-14 23-150 14-255-5Z" fill="#879238" />
      <g fill="none" stroke="#65732c" strokeWidth="2.4" strokeLinecap="round">
        <path d="M57 325q1-17-12-29m12 29q7-19 15-25m22 20q0-16-8-22m476 46q0-19-11-33m10 33q6-21 16-27m29 2q-4-21-14-29m14 29q4-14 13-20m-531 55 37-4m404 17 50-1m-105 9 36-2" />
      </g>
      <g stroke="#321d32" strokeWidth="4" strokeLinejoin="round" strokeLinecap="round">
        <path d="M154 169c-24-5-43 14-37 39 4 16 10 34-3 57" fill="none" strokeWidth="9" />
        <path d="M116 251q9 18-7 33-9-12-7-30Z" fill="#563044" />
        <path d="M204 232c19 11 38 29 35 44l-9 33 5 12 14 8-2 12h-43l-4-20 2-29-26-42Zm237-8 25 12 17 34-11 37 13 13 11 2 3 12-49 2-9-36-11-24Z" fill="#68405a" />
        <path d="M250 140c69-4 77-68 152-71 44-2 76 21 95 50 32 43 38 103 10 138-28 35-80 40-152 23-50-8-90-35-127-23-54 18-80-4-89-43-7-44 21-69 52-72 22-2 42-1 59-2Z" fill="#75455a" />
        <path d="M164 226c20-13 54-7 64 14 5 14-8 32-20 50l-21 33 14 10 1 13h-48l-3-13 11-39 9-25-11-22Z" fill="#75455a" />
        <path d="M300 125c29-37 44-52 103-56 49-3 96 36 111 79l35 77-41 70-67 8-15-23-12 16-16-20-19 7-12-22-19 11-11-20-17 6-9-18-16 7c-28-33-28-80 5-122Z" fill="#502b45" />
        <path d="M391 252c21-12 58-5 69 20l-9 25-10 29 19 9 2 13h-51l-8-19-1-33-17-24Z" fill="#593147" />
        <path d="M154 334q23-5 46 0l2 12h-48Zm51-5 40 1 2 11h-43Zm207 6q25-7 48 0l2 13h-51Zm39-12 45-1 3 12-49 2Z" fill="#321d32" />
        <path d="M539 175c-34 0-55-26-52-63 10 23 31 30 51 33l19 16Z" fill="#e8d7a2" />
        <path d="M588 174c24-3 37-21 39-44 15 28 2 51-27 65l-17-10Z" fill="#e8d7a2" />
        <path d="M526 169q-23-11-45 10 14 13 43 9Zm72 6q25-13 42 8-14 12-38 12Z" fill="#96596f" />
        <path d="M510 169c14-20 51-23 77-10 19 9 21 32 22 57 3 18 25 34 22 53-1 22-33 31-69 27l-11 20-10-10-14 18-9-22-15 8c5-18-6-35-10-55-7-31-1-65 17-86Z" fill="#58334c" />
        <path d="M518 168q33-24 69-10l8 19-17-4 2 15-22-8-6 16-12-11-15 10 2-15-20 8Z" fill="#91556d" />
        <path d="M580 236c14-2 35 4 48 17 9 17-3 38-26 42-20 5-44 1-53-13-7-13 12-42 31-46Z" fill="#a76d79" />
        <path d="M562 278q24 11 56-7m-49-12 7 3m33-5 6-3" fill="none" strokeWidth="2.8" />
      </g>
      <g clipPath="url(#ox-record-bison-mane)">
        <path d="M282 60h256v245H282Z" fill="url(#ox-record-bison-curls)" />
        <path d="M295 178q31-90 112-91 53 2 77 46-40-25-71-14-70 12-111 80m45-26q53-49 112-32-58 0-109 61Z" fill="#956078" opacity=".55" />
      </g>
      <g fill="none" stroke="#bd8390" strokeWidth="2" strokeLinecap="round" opacity=".75">
        <path d="M160 192q29-36 83-30m-62 15q27-20 70-12m-70 59q17-10 37-4m5 20q25-13 63-4m-115 32q16-16 21-30m176-81q10-19 33-30m-56 65 22-23m3 41q16-22 40-31m-48 66 18-18m-2 45q14-11 18-23m112-93q21-14 49-13m-42 56q-10 33 15 60m-11-27 9 12m20-62q7 14 8 24m-134 68 2 16" />
        <path d="M538 167q20-8 31-3m-12 30q3-6 9-10m-51 20q11-9 24-7m46-7q10-2 14 9" />
      </g>
      <path d="M520 211q10-9 24-4-3 10-18 10Zm69-4q10-6 16 2-4 7-13 3Z" fill="#fbe3a9" />
      <path d="M528 212h9m57-2h5" fill="none" stroke="#321d32" strokeWidth="3" strokeLinecap="round" />
      <path d="M105 353q87 15 193 7m-24 12q118-2 198-22m-230 7 52-5" fill="none" stroke="#d8e77d" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  )
}

function CrossSection({ wet }) {
  return (
    <svg viewBox="0 24 320 114" role="img" aria-label={wet ? 'Rainwater gathered in the wallow' : 'A shallow bowl of bare soil left by wallowing'}>
      <path d="M0 57h44c36 1 61 41 115 42s83-42 116-42h45v81H0Z" fill="#744565" />
      <path d="M0 73h39c37 1 65 41 117 42s89-42 122-42h42m-320 16h36c37 0 68 40 121 41s88-40 120-41h43" fill="none" stroke="#a36f94" strokeWidth="1.5" />
      <path d="M0 57h44c36 1 61 41 115 42s83-42 116-42h45" fill="none" stroke="#e8f17f" strokeWidth="2" />
      <path d="M16 56q0-17-8-25m8 25q5-22 13-24m264 24q0-20-9-27m9 27q7-15 13-18" fill="none" stroke="#e8f17f" strokeWidth="2" strokeLinecap="round" />
      <AnimatePresence initial={false}>
        {wet ? (
          <motion.g key="wet" initial={{ opacity: 0, scaleY: .2 }} animate={{ opacity: 1, scaleY: 1 }} exit={{ opacity: 0, scaleY: .2 }} transition={{ type: 'spring', bounce: .22, duration: .55 }} style={{ originY: 1, transformBox: 'fill-box' }}>
            <path d="M78 69h166c-19 12-44 30-85 30s-67-20-81-30Z" fill="#bfb9f4" />
            <path d="M104 77h53m19 6h40" stroke="#fcf2ff" strokeWidth="1.5" strokeLinecap="round" />
          </motion.g>
        ) : (
          <motion.g key="dry" initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }} transition={{ duration: .24 }} fill="#e3ad91">
            <path d="M83 75h21v2H83Zm31 9h10v2h-10Zm14 7h22v2h-22Zm28 3h12v2h-12Zm34-7h16v2h-16Zm30-14h9v2h-9Z" />
          </motion.g>
        )}
      </AnimatePresence>
    </svg>
  )
}

export default function Wallow() {
  const [wet, setWet] = useState(false)

  return (
    <article className="th-ox-record-wallow">
      <div className="ox-record-wallow-page">
        <header className="ox-record-wallow-mast">
          <span>The Bovine Record</span>
          <span>Field guide <b>04</b></span>
        </header>
        <div className="ox-record-wallow-grid">
          <div className="ox-record-wallow-main">
            <p className="ox-record-wallow-label">Ecology · American bison</p>
            <h1>Make a wallow</h1>
            <p>When a bison rolls on dry ground, it loosens the turf and wears a shallow bowl into the prairie.</p>
            <figure>
              <Bison />
              <figcaption><i lang="la">Bison bison</i><span>Mixed-grass prairie</span></figcaption>
            </figure>
          </div>
          <aside className="ox-record-wallow-panel">
            <h2>Inside the wallow</h2>
            <div className="ox-record-wallow-switch" role="group" aria-label="Wallow conditions">
              <button type="button" aria-pressed={!wet} onClick={() => setWet(false)}>Dry ground</button>
              <button type="button" aria-pressed={wet} onClick={() => setWet(true)}>After rain</button>
            </div>
            <CrossSection wet={wet} />
            <p aria-live="polite">{wet
              ? 'Rain can pool in the bowl. Plants that need more moisture gain a foothold in the prairie.'
              : 'Rolling in dust may help ward off biting insects. Repeated use compacts the exposed soil.'}</p>
            <div className="ox-record-wallow-tag">
              <span>Prairie survey · W04</span>
              <strong>SET XXXVII · DESIGNED BY CODEX</strong>
            </div>
          </aside>
        </div>
      </div>
    </article>
  )
}
