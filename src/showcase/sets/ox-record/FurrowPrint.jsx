import { motion, useReducedMotion } from 'framer-motion'
import './furrow-print.css'

const ripples = [
  'M32 413c129 4 182-11 272-6m494 14 149-7',
  'M16 454q64-16 184-6m574 10q88-9 176-6',
  'M110 494q133-13 289-5m237-5q141 5 227-9',
  'M46 516q139 8 266-6m156 8 193-9m45 9 198-12',
]

function PaddyPrint() {
  const reduceMotion = useReducedMotion()

  return (
    <svg viewBox="35 49 908 485" role="img" aria-label="Relief-print illustration of a broad-horned swamp buffalo pulling a wooden plough through a flooded paddy">
      <defs>
        <pattern id="ox-record-furrow-grain" width="13" height="11" patternUnits="userSpaceOnUse">
          <path d="M0 2h4m4 6h2m-8 2h1m8-7h1" stroke="#843626" strokeWidth=".8" opacity=".55" />
        </pattern>
        <pattern id="ox-record-furrow-gouge" width="9" height="9" patternUnits="userSpaceOnUse" patternTransform="rotate(-29)">
          <path d="M0 1h9m-4 4h4" fill="none" stroke="#f7c568" strokeWidth="1" opacity=".32" />
        </pattern>
      </defs>
      <path d="M47 68h882v447H47Z" fill="#e9ad55" />
      <circle cx="739" cy="178" r="99" fill="#b64f32" />
      <path d="M47 68h882v447H47Z" fill="url(#ox-record-furrow-grain)" />
      <g fill="#a3482d">
        <path d="M47 319c125-3 96-37 193-44 77-6 160 10 226 4 81-9 114-42 193-47 95-5 104 30 270 10v20c-145 18-191-11-265-5-76 6-117 44-197 45-99 0-162-12-233-3-83 10-73 33-187 36Z" />
        <path d="M47 350c155-14 162-35 256-27 89 8 128 10 211 1 89-10 110-49 198-49 94 0 144 16 217 8v17c-75 8-141-7-214-3-81 4-113 42-199 50-94 10-150-13-223-9-116 7-148 33-246 32Z" />
        <path d="M47 383q124-12 197-21c114-14 183 18 320 5 128-12 174-58 365-46v24c-178-9-240 36-363 48-142 13-232-22-336-6-78 12-142 16-183 15Z" />
        <path d="M47 468q196-15 361 1 209 17 521-14v60H47Z" opacity=".65" />
      </g>
      <path d="M70 412c115 1 154-18 230-11m455 13 156-15M82 433c93 1 130-12 203-13m453 11 149-10M88 481q232-21 402-2m229 2 170-11M91 505l195-9m361 5 226-10" fill="none" stroke="#ffdb88" strokeWidth="2.5" opacity=".78" />
      <g fill="none" stroke="#fce7a5" strokeWidth="2.8" strokeLinecap="round">
        {ripples.map((ripple, index) => (
          <motion.path key={ripple} d={ripple} animate={reduceMotion ? undefined : { x: [-8, 10, -8], opacity: [.2, .75, .2] }} transition={{ duration: 5 + index, repeat: Infinity, ease: 'easeInOut' }} />
        ))}
      </g>
      <path d="M92 457c46 2 90-13 137-24m-123 30 80-7" fill="none" stroke="#853929" strokeWidth="3" />
      <g stroke="#4c211a" strokeLinecap="round" strokeLinejoin="round">
        <path d="M95 451c63-11 73-43 113-83l380-138m-463 212-25-70 25 13m-6 67-22 16 53-10 26-32" fill="none" strokeWidth="12" />
        <path d="M100 447c65-14 70-43 112-78l369-135m-460 200-20-56m14 69 33-9" fill="none" stroke="#ce7c44" strokeWidth="3.5" />
        <path d="M292 259c-27-21-38-12-46 9-7 17-10 51-37 68" fill="none" strokeWidth="9" />
        <path d="M217 325q-22-1-36 24 24-2 37-13Z" fill="#54241c" />
        <path d="M335 333c16 7 39 26 39 42l-18 36 19 18-7 12-36-9-13-31 17-43-31-14Z" fill="#6e352a" strokeWidth="4" />
        <path d="M543 329c21 17 26 29 14 52l-32 35 13 12-6 12-46-5 5-20 25-41-19-30Z" fill="#6e352a" strokeWidth="4" />
        <path d="M585 224c-12-28-36-39-67-42-63-7-134 8-193 16-53 7-82 40-84 75-2 37 26 70 58 75 14 4 34 2 43-3 65 35 148 21 211-7 28 8 57-3 80-26 32-29 37-67 8-87-17-12-38-9-56-1Z" fill="#4c211a" strokeWidth="5" />
        <path d="M311 304c33 3 52 33 43 56l-39 45-35 34 8 12-45 7 3-21 35-48 6-32-23-30Z" fill="#57261e" strokeWidth="5" />
        <path d="M564 304c36-11 62 2 73 27 14 32 2 60 19 94l28 11 4 15-50 1c-14-12-29-30-36-56-8-30-32-36-55-61Z" fill="#59271f" strokeWidth="5" />
        <path d="M640 238c-11-11-28-23-44-22l-26 29 18 54c16 26 43 49 103 47l35-55c-15-29-41-48-86-53Z" fill="#54241c" strokeWidth="5" />
        <path d="M684 260c-29-5-61-20-91-43-37-29-60-56-62-85 31 50 88 70 139 79l30 14Z" fill="#e0a559" strokeWidth="5" />
        <path d="M712 241c53 4 98-17 136-62-6 35-29 64-58 83-25 16-48 21-78 22l-12-21Z" fill="#e0a559" strokeWidth="5" />
        <path d="M671 252c-23 1-47 8-62 28 26 9 54 4 70-12Zm70 5c21 1 39 13 46 31-26 1-40-10-51-23Z" fill="#813b2a" strokeWidth="4" />
        <path d="M668 242c16-15 39-14 60-3 26 14 28 35 28 53l19 29c7 16-9 32-40 36-27 5-46-6-52-18l-16-44c-8-15-11-40 1-53Z" fill="#632b20" strokeWidth="5" />
        <path d="M696 313c13-6 22-4 30-3 13-2 27-8 41-2l10 16c3 14-13 30-44 33-24 2-43-5-45-21Z" fill="#a85436" strokeWidth="4" />
        <path d="M699 340q35 10 65-8m-56-10 8-3m35 1 7-5" fill="none" strokeWidth="4" />
        <path d="M663 239c-12-12-56-19-78-15l-13 23c35-4 75 4 88 14l13-10Z" fill="#bd6740" strokeWidth="5" />
        <path d="M585 241c13 31 30 56 57 65l30-39m-82-31c19-2 46 3 65 11" fill="none" stroke="#f0b56c" strokeWidth="5" />
      </g>
      <path d="M255 281c4-67 78-66 154-72 80-6 109-19 163 7-19 9-17 36-36 46-66 38-214 8-275 42Zm93 37q101 30 202-34-6 35-40 50-67 28-162 8Zm226 18q44-17 58 47l10 39c-19-2-28-23-34-45-10-26-20-31-34-41Zm103-84q25-20 55 6-30 1-48 27Z" fill="url(#ox-record-furrow-gouge)" />
      <g fill="none" stroke="#df9756" strokeWidth="2.2" strokeLinecap="round">
        <path d="M274 250q32-30 92-26m-104 52q17-23 52-32m40 54q130 22 190-47m-114 67q42-5 72-20m-179 51-26 41m289-55q29 6 36 31m-72-191q50 35 98 41m121 37q45-14 66-43" />
        <path d="M678 274q10-9 24-8m30 0q11 3 14 10m-52 14q8 10 9 18m38-20 4 12" />
      </g>
      <path d="M678 281q11-9 23-4-6 9-16 9Zm58-4q7-4 12 5-7 4-11 1Z" fill="#efc477" />
      <path d="M684 281h8m48-1h4" stroke="#4c211a" strokeWidth="3" strokeLinecap="round" />
      <g fill="none" stroke="#ffde8e" strokeLinecap="round" strokeWidth="3">
        <path d="M229 454q34 9 77-1m-90 11 49 4m368-14q29 6 68-4m-71 17 57 1m-378-35q21 8 57 5m107-1q27 5 68-1" />
        <path d="M648 453q-12-5-14-15m60 13q15-8 17-18m-463 22q-17-4-19-19" />
      </g>
    </svg>
  )
}

export default function FurrowPrint() {
  return (
    <article className="th-ox-record-furrow">
      <div className="ox-record-furrow-sheet">
        <header className="ox-record-furrow-mast">
          <span>The Bovine Record</span>
          <span>Labor in the rice paddy</span>
        </header>
        <h1>In the Furrow</h1>
        <figure className="ox-record-furrow-print">
          <PaddyPrint />
          <figcaption><i lang="la">Bubalus bubalis</i><span>Swamp buffalo under yoke</span></figcaption>
        </figure>
        <div className="ox-record-furrow-notes">
          <h2>Before a seedling meets the mud</h2>
          <p>In wet rice cultivation, a swamp buffalo can pull the plough through a flooded field. Working the wet soil breaks up clods and leaves a soft bed for transplanting rice.</p>
          <div className="ox-record-furrow-stamp">
            <span>Field print 02</span>
            <strong>SET XXXVII · DESIGNED BY GPT 6.2 SOL</strong>
          </div>
        </div>
      </div>
    </article>
  )
}
