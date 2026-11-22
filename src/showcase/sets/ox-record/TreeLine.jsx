import { motion, useReducedMotion } from 'framer-motion'
import './tree-line.css'

function Ridge() {
  const reduceMotion = useReducedMotion()

  return (
    <svg className="ox-record-yak-ridge" viewBox="0 0 1440 660" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs>
        <linearGradient id="ox-record-yak-sky" x2="0" y2="1">
          <stop stopColor="#d7eae0" />
          <stop offset="1" stopColor="#89ada6" />
        </linearGradient>
        <linearGradient id="ox-record-yak-stone" x2=".2" y2="1">
          <stop stopColor="#6b918b" />
          <stop offset="1" stopColor="#294d47" />
        </linearGradient>
      </defs>
      <path d="M0 0h1440v660H0Z" fill="url(#ox-record-yak-sky)" />
      <circle cx="1102" cy="113" r="69" fill="#eef2d2" />
      <path d="m0 365 151-105 103 41 106-97 94-38 108 98 59-35 143-41 172-139 89 76 101 25 41 47 100-37 173 61v439H0Z" fill="#afcbc4" />
      <path d="m0 402 159-74 64 17 156-141 73-38-15 62 65-5 126 89 143-98 162-161-8 64 117 30 80 4 45 46 101-37 40 48 132 36v416H0Z" fill="#92b5ae" />
      <path d="m709 256 75-77 153-130 89 76 101 25-98 3-52-17-41-54-27 101-15-30-47 32-17-8Zm-454 53 104-104 94-39 42 38-58-14-20 36-40-6-45 51Z" fill="#e4efe0" />
      <path d="m0 411 103-39 93 16 179-63 82 45 138-44 61 7 161-85 140-21 111 15 203-39 169 19v438H0Z" fill="#81a8a0" />
      <path d="m0 497 132-61 84-8 130-46 105 58 139-25 106-75 103-47 92 64 97-20 89 49 145 24 218-43v293H0Z" fill="url(#ox-record-yak-stone)" />
      <path d="m0 504 131-68 84-7 129-46-64 49-33 49-86-12-69 29Zm530-38 65-53 101-74 103-47 60 43-66-17-34 29-67 9-58 54-60 17Zm514-74 41-7 143 25 212-43-81 47-162 33Z" fill="#b3c9b9" opacity=".43" />
      <g fill="none" stroke="#d7e5d7" strokeWidth="2" opacity=".4">
        <path d="m51 463 125-44 111-34m145 60 101-16 137-81m-123 111 151-78 69-60m-30 76 58-41 78 19m269 52 130 7 167-37m-418-156 36-6 128 13 154-40m-623 61 136-69 65-10" />
      </g>
      <motion.g
        fill="none"
        stroke="#e5eee0"
        strokeWidth="2"
        strokeLinecap="round"
        animate={reduceMotion ? undefined : { x: [-30, 45, 120], opacity: [0, .7, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
      >
        <path d="M613 252h44m-70 9h26m471-7h98m-65 11h37m-32-34h54M360 366h69m-116 12h97m751-23h76m21 0h19m-186 15h104" />
      </motion.g>
      <path d="M0 546q190-33 363 1 138 34 322 12 170-32 353-16 193 13 402-37v154H0Z" fill="#315952" />
      <path d="M0 592q215-46 441-9 135 23 337-23 123-34 280-4 174 22 382-23v127H0Z" fill="#244742" />
      <g fill="none" stroke="#91aa86" strokeWidth="2.2" opacity=".54">
        <path d="M38 604q112-21 154-18m-64 30 78-16m200 16 88 4m-69 15 124-4m37 5 99-19m34 6 138-29m229 20 68-7m46 17 152-26m-33 20 121-27m-604-1 46-9m287 58 86-13" />
      </g>
    </svg>
  )
}

function Yak() {
  return (
    <svg viewBox="30 24 555 340" role="img" aria-label="A dark, long-haired Himalayan yak with two upturned horns and four short legs on a mountain ridge">
      <defs>
        <linearGradient id="ox-record-yak-coat" x2=".65" y2="1">
          <stop stopColor="#685044" />
          <stop offset=".55" stopColor="#423a31" />
          <stop offset="1" stopColor="#232e2a" />
        </linearGradient>
      </defs>
      <ellipse cx="314" cy="337" rx="238" ry="17" fill="#132e2b" opacity=".53" />
      <g stroke="#242f2a" strokeWidth="4" strokeLinejoin="round">
        <path d="M176 177c-24-32-44-19-55 3-17 34-25 59-71 61 11 13 32 14 43 9l-15 11c25 7 50-7 62-27l-2 15c18-10 27-27 38-42Z" fill="#524538" />
        <path d="M204 230c30 15 30 53 26 74l-11 10 13 7 2 10h-37l-5-14 3-25-26-39Zm202-8c24 9 31 28 28 54l-4 37 12 6 3 10h-35l-6-12-7-32-24-35Z" fill="#443d31" />
        <path d="M189 222c14-4 34 12 36 33l-19 32-18 32 15 8 1 11-44 1-4-16 10-39 6-42Zm178 7c26-12 49 6 53 28l-16 42-2 21 17 8 3 11h-43l-7-15 2-51-17-24Z" fill="#534536" />
        <path d="M161 327q23-5 42 0l1 11-44 1Zm218 1q23-6 40 0l3 11h-43Zm-181-8 32 1 4 10h-37Zm213-1h30l4 10h-35Z" fill="#1b2d2a" />
        <path d="M153 165c30-35 96-30 155-32 33-2 51-32 91-36 39-5 67 19 77 54 8 23 5 49-4 75l-19 36-13-16-6 34-14-15-12 39-14-25-10 21-11-26-10 32-14-16-8 18-16-30-14 22-14-16-14 12-11-21-14 16-21-24-5 26-19-21-7 17-20-22-16 8 1-31-15 14-5-27-17 19-5-28-10 9c-19-59-14-103 5-126Z" fill="url(#ox-record-yak-coat)" />
        <path d="M472 167c16-15 29-54 24-89 17 13 27 38 20 64-5 19-14 29-31 39Z" fill="#a49773" />
        <path d="M448 172c-26-7-56-40-65-71-6-21-4-43 7-58-3 42 28 74 56 88l28 10Z" fill="#e7dbb3" />
        <path d="M463 163c-18-17-36-19-53-14 3 20 18 31 38 32Zm41-4c20-14 33-15 48-9-2 17-19 26-39 27Z" fill="#71533a" />
        <path d="M453 154c15-15 36-17 54-8 15 8 23 25 21 44l16 21c9 16-4 34-24 36-14 2-30 1-42-10l-9 26-8-11-9 18-10-30c-14-14-19-43-8-62Z" fill="#41372b" />
        <path d="M442 165q28-32 65-18-5 19-21 30l-11 24-6-20-14 10 3-15-16 7Z" fill="#6d533c" />
        <path d="M508 207c11-4 23-4 35 4 10 12 1 32-19 35-22 2-37-4-43-17 6-13 17-18 27-22Z" fill="#9b8c70" />
        <path d="M497 228q18 8 38-2m-13-10 5-2" fill="none" strokeWidth="2.6" strokeLinecap="round" />
        <path d="M491 188q9-9 17-4-2 8-13 10Z" fill="#e3c382" strokeWidth="2" />
      </g>
      <g fill="none" stroke="#ab8b68" strokeWidth="2" strokeLinecap="round" opacity=".63">
        <path d="M167 187q44-42 108-28m-99 44q25-32 61-22m-76 62q15-35 42-47m-33 61q24-29 39-35m-3 41 25-46m2 57q23-22 34-49m-9 63q27-38 37-68m-8 54q20-19 29-40m-.5 44q18-33 17-52m-4-41q19-51 65-65m-36 57q25-46 52-49m-26 55q9-15 24-25m-26 42q-4 40-30 75m53-75q-3 24-10 40m26-42q-5 29-11 51m-30 9 8-26m-39 33 14-39m109-30q-12 12-7 27m21-4q-3 12 4 24m-332 10-8 20m93-2 13-20m94 52 6-15" />
        <path d="M106 234q22-19 35-45m-30 48 20-13m325-45-6 26m50-27 8-3m-39 43 6 14" />
      </g>
      <path d="M401 119q22 26 49 34m49-59q6 25-3 53" fill="none" stroke="#75654e" strokeWidth="2.1" />
      <circle cx="500" cy="186" r="2" fill="#212b26" />
      <path d="M91 343q110-4 185-3m-124 10h116m178-9 93-8m-73 15 77-3" stroke="#a7b890" strokeWidth="3" fill="none" strokeLinecap="round" opacity=".63" />
    </svg>
  )
}

export default function TreeLine() {
  return (
    <article className="th-ox-record-yak">
      <div className="ox-record-yak-scene">
        <Ridge />
        <div className="ox-record-yak-content">
          <header className="ox-record-yak-mast">
            <span>The Bovine Record</span>
            <span>Qinghai–Tibetan Plateau</span>
          </header>
          <div className="ox-record-yak-intro">
            <p className="ox-record-yak-kicker">Altitude · The domestic yak</p>
            <h1>Above the<br />tree line</h1>
            <p>A shaggy grazer of cold, high country.</p>
          </div>
          <figure className="ox-record-yak-figure">
            <Yak />
            <figcaption><i lang="la">Bos grunniens</i><span>Alpine pasture</span></figcaption>
          </figure>
        </div>
      </div>
      <div className="ox-record-yak-notes">
        <section><h2>Long outer hair</h2><p>Coarse hairs form a skirt along the flanks and trap still air close to the body.</p></section>
        <section><h2>Fine winter down</h2><p>A dense, soft undercoat grows before winter. Together the two layers insulate the yak in cold upland pastures.</p></section>
        <div className="ox-record-yak-tag">
          <span>Transect 03 · Yak country</span>
          <strong>SET XXXVII · DESIGNED BY CODEX</strong>
        </div>
      </div>
    </article>
  )
}
