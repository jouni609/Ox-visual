import { useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import './taurus-sky.css'

const chartStars = [
  { x: 245, y: 100, size: 4 },
  { x: 328, y: 168, size: 3 },
  { x: 389, y: 217, size: 3.5 },
  { x: 446, y: 185, size: 4.5 },
  { x: 491, y: 132, size: 3 },
  { x: 518, y: 63, size: 4 },
  { x: 264, y: 209, size: 3 },
  { x: 208, y: 237, size: 3 },
]

function SkyDome({ chart }) {
  const reduceMotion = useReducedMotion()

  return (
    <svg viewBox="35 15 706 428" role="img" aria-label="Taurus as a gold bull with long rising horns, a square muzzle and two curled forelegs">
      <defs>
        <radialGradient id="ox-record-taurus-dome">
          <stop stopColor="#303850" />
          <stop offset=".85" stopColor="#171f33" />
          <stop offset="1" stopColor="#11182a" />
        </radialGradient>
        <linearGradient id="ox-record-taurus-relief" x1="0" x2=".68" y2="1">
          <stop stopColor="#f6d692" />
          <stop offset=".53" stopColor="#bc8047" />
          <stop offset="1" stopColor="#774936" />
        </linearGradient>
        <linearGradient id="ox-record-taurus-horn" x1="0" x2="0" y2="1">
          <stop stopColor="#fff0b7" />
          <stop offset="1" stopColor="#c79559" />
        </linearGradient>
        <pattern id="ox-record-taurus-engrave" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(-30)">
          <path d="M0 0V6" stroke="#533a37" strokeWidth="1.1" opacity=".52" />
        </pattern>
      </defs>
      <ellipse cx="388" cy="224" rx="331" ry="205" fill="url(#ox-record-taurus-dome)" stroke="#ac845c" strokeWidth="1" />
      <g fill="none" stroke="#8f775e" opacity=".59">
        <ellipse cx="388" cy="224" rx="317" ry="194" />
        <ellipse cx="388" cy="224" rx="300" ry="181" strokeDasharray="1 7" strokeLinecap="round" />
        <ellipse cx="388" cy="224" rx="232" ry="191" opacity=".5" />
        <ellipse cx="388" cy="224" rx="114" ry="191" opacity=".5" />
        <path d="M71 224h634m-595-71q277-122 556 0M111 295q277 121 555 0M388 30v388" opacity=".65" />
      </g>
      <g fill="#e6c58e">
        <path d="M96 214v20m-10-10h20m573-10v20m-10-10h20M388 37v21m-10-11h20m-10 351v20m-10-10h20" stroke="#b9956d" />
        <circle cx="124" cy="184" r="2" opacity=".7" /><circle cx="138" cy="257" r="1.8" /><circle cx="190" cy="187" r="2" />
        <circle cx="182" cy="309" r="1.5" /><circle cx="211" cy="137" r="1.9" /><circle cx="252" cy="340" r="2" />
        <circle cx="262" cy="77" r="1.4" /><circle cx="325" cy="63" r="2" /><circle cx="334" cy="374" r="1.4" />
        <circle cx="573" cy="146" r="2" /><circle cx="549" cy="341" r="2.1" /><circle cx="599" cy="300" r="1.9" />
        <circle cx="598" cy="222" r="2" /><circle cx="650" cy="180" r="1.8" /><circle cx="647" cy="257" r="1.5" />
        <circle cx="490" cy="377" r="1.4" /><circle cx="541" cy="94" r="1.5" />
        <path d="M142 219v12m-6-6h12m476-7v12m-6-6h12m-75 71v14m-7-7h14m-264-184v12m-6-6h12" fill="none" stroke="#e6c58e" />
      </g>
      <g stroke="#5b3c36" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M169 281c21-22 30-63 60-89 30-27 57-40 95-41 31-2 83 7 117 25 51 28 71 83 49 129-16 31-60 48-104 41-26-4-49-16-73-22-43-11-75-11-119-6 21-9 29-19 33-33-20 13-41 10-58 4l13-8Z" fill="url(#ox-record-taurus-relief)" />
        <path d="M427 271c31 6 51 30 54 54 3 23-15 36-35 44l-26 13-11-3-10-21 21-10 19-16-19-20Z" fill="#aa7048" />
        <path d="M337 263c29-4 51 9 62 27 11 16 6 35-9 47l-29 18-23 21-24-2-12-17 23-18 15-18-28-15Z" fill="url(#ox-record-taurus-relief)" />
        <path d="M306 355q19 3 31 20l-22 5-13-23Zm95 4q10 3 19 23l-15 4-14-20Z" fill="#5b3c36" stroke="#e0ae66" strokeWidth="2" />
        <path d="M351 256c25 5 44 24 53 41 24-12 27-43 25-74-15-47-88-60-123-37-32 22-30 49-43 66-13 16-31 29-59 34 70 0 87-46 147-30Z" fill="url(#ox-record-taurus-engrave)" stroke="none" />
        <path d="M374 177c-45 6-76-3-103-31-24-26-30-57-17-85 5 40 33 67 58 78 21 9 36 8 73 6Z" fill="url(#ox-record-taurus-horn)" />
        <path d="M460 161c34 6 70-9 87-44 10-21 7-45-4-63-1 44-20 63-44 74-16 8-31 8-48 7Z" fill="url(#ox-record-taurus-horn)" />
        <path d="M374 177c-26-9-49-5-72 8 21 20 42 25 73 14Zm92-3c27-11 56-7 75 6-16 19-43 29-70 20Z" fill="#b87e4f" />
        <path d="M368 164c17-21 38-28 67-27 29 0 54 15 60 38 7 20-2 37-10 56l-10 22c-8 21-23 34-49 36-28 1-51-8-62-30-8-17-9-33-15-55-4-15 6-31 19-40Z" fill="url(#ox-record-taurus-relief)" />
        <path d="M381 160c24-13 63-11 89 7l-18 21-13-12-17 22-15-15-18 5-10-18Z" fill="#e4b56f" stroke="none" />
        <path d="M382 239c10-10 30-12 44-10 16-2 35-5 50 6 11 8 10 25 1 34-17 19-69 21-92 6-11-7-16-25-3-36Z" fill="#d8a779" />
        <path d="M392 265c19 9 51 10 75-2m-73-13 10-3m49 1 10 2" fill="none" />
        <path d="M369 199q12-12 28-5-4 12-21 13Zm82-7q16-8 29 2-8 11-23 8Z" fill="#2f2930" strokeWidth="2.2" />
      </g>
      <g fill="none" stroke="#f4d092" strokeWidth="1.65" strokeLinecap="round" opacity=".87">
        <path d="M189 304c34-10 61-34 78-68 15-33 47-55 81-56m-132 111q43-18 62-53 22-39 54-44m-95 103q43-18 58-46m-40 44q34-14 56-42m-22 44q34-29 64-24m-30 34q33-5 45 12m-16 7-35 34m111-54q19 11 12 21m-14 10-15 9m-26-139q5 17 1 24m42-24q1 18 6 23m-61-65q20-8 40-4m-52 43q8 9 6 25m91-27q-9 10-12 20" />
        <path d="M273 135q31 31 69 29m158-17q27-4 49-29m-232 70q21-3 34-1m141 0q15-5 33-4" />
      </g>
      <g fill="#f8d996"><circle cx="381" cy="199" r="1.6" /><circle cx="468" cy="195" r="1.6" /></g>
      <AnimatePresence>
        {chart && (
          <motion.g key="chart" exit={{ opacity: 0 }} transition={{ duration: .2 }}>
            <motion.path
              d="m245 100 83 68 61 49 57-32 45-53 27-69M328 168l-64 41-56 28"
              fill="none"
              stroke="#e2ddff"
              strokeWidth="1.25"
              strokeDasharray="4 6"
              initial={{ opacity: reduceMotion ? 1 : 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: reduceMotion ? 0 : .35, delay: reduceMotion ? 0 : .28 }}
            />
            {chartStars.map(({ x, y, size }, index) => (
              <g key={x}>
                <motion.circle
                  cx={x}
                  cy={y}
                  r={size * 2.25}
                  fill="#d9d4ff"
                  opacity=".21"
                  animate={reduceMotion ? undefined : { opacity: [0, .8, .21] }}
                  transition={{ duration: .5, delay: index * .055 }}
                />
                <motion.circle
                  cx={x}
                  cy={y}
                  r={size}
                  fill={size === 4.5 ? '#ffdf9a' : '#fcf1ff'}
                  stroke="#373252"
                  strokeWidth="1"
                  initial={{ opacity: reduceMotion ? 1 : 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: reduceMotion ? 0 : .18, delay: reduceMotion ? 0 : index * .055 }}
                />
              </g>
            ))}
          </motion.g>
        )}
      </AnimatePresence>
    </svg>
  )
}

export default function TaurusSky() {
  const [chart, setChart] = useState(true)

  return (
    <article className="th-ox-record-sky">
      <div className="ox-record-sky-room">
        <header className="ox-record-sky-mast">
          <span>The Bovine Record</span>
          <span>Planetarium · 05</span>
        </header>
        <h1>The bull in the sky</h1>
        <div className="ox-record-sky-stage">
          <figure className="ox-record-sky-dome">
            <SkyDome chart={chart} />
            <figcaption>Taurus · An artist’s star chart</figcaption>
          </figure>
          <div className="ox-record-sky-story">
            <h2>The sea crossing</h2>
            <p>In one Greek telling, Zeus takes the shape of a bull and carries Europa across the sea to Crete. The sky keeps the bull’s head and forequarters.</p>
          </div>
          <div className="ox-record-sky-console">
            <button type="button" aria-pressed={chart} onClick={() => setChart(!chart)}>
              <span aria-hidden="true" />
              Star overlay
            </button>
            <p>Find the bull’s eye near the V of the Hyades.</p>
          </div>
        </div>
        <div className="ox-record-sky-ticket">
          <span>Admit one</span>
          <strong>SET XXXVII · DESIGNED BY CODEX</strong>
          <span>TAURUS</span>
        </div>
      </div>
    </article>
  )
}
