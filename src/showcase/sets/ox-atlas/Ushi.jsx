import { motion } from 'framer-motion'
import './ushi.css'

const HAIKU = ['black ox wading—', 'the river carries the sky', 'without complaint']

function WaveBack() {
  return (
    <path
      d="M-220,400 Q-130,350 -40,400 Q50,350 140,400 Q230,350 320,400 Q410,350 500,400 Q590,350 680,400 Q770,350 860,400 Q950,350 1040,400 Q1130,350 1220,400 L1220,600 L-220,600 Z"
      fill="#163A5C"
      opacity="0.55"
    />
  )
}

function WaveFront() {
  const crests = [50, 230, 410, 590, 770, 950]
  return (
    <g>
      <path
        d="M-220,470 Q-130,380 -40,430 Q50,380 140,430 Q230,380 320,430 Q410,380 500,430 Q590,380 680,430 Q770,380 860,430 Q950,380 1040,430 Q1130,380 1220,430 L1220,600 L-220,600 Z"
        fill="#163A5C"
      />
      {crests.map((x) => (
        <g key={x} fill="#F3EBDD">
          <circle cx={x} cy={405} r="9" />
          <circle cx={x + 17} cy={415} r="6" />
          <circle cx={x - 16} cy={416} r="5" />
        </g>
      ))}
    </g>
  )
}

function Ox() {
  return (
    <g>
      <path
        d="M336,432 C326,420 328,404 340,396 C350,390 362,388 372,392 C378,372 398,358 428,355 C470,351 512,364 526,386 C536,400 534,414 522,424 L518,444 C494,452 458,455 428,455 C398,455 366,450 348,442 Z"
        fill="#2B2B2B"
      />
      <path d="M346,392 C336,378 338,364 350,356" stroke="#2B2B2B" strokeWidth="8" fill="none" strokeLinecap="round" />
      <path d="M362,388 C356,372 360,358 372,350" stroke="#2B2B2B" strokeWidth="7" fill="none" strokeLinecap="round" />
      <path d="M378,384 C386,378 394,378 400,384 C394,390 386,390 378,384 Z" fill="#2B2B2B" />
      <path d="M352,398 C348,406 350,414 356,418 C362,414 364,404 360,396 Z" fill="#F3EBDD" />
      <path d="M524,392 C540,388 550,398 548,412" stroke="#2B2B2B" strokeWidth="6" fill="none" strokeLinecap="round" />
    </g>
  )
}

export default function Ushi() {
  return (
    <div className="th-ushi">
      <div className="ushi-sheet">
        <motion.aside
          className="ushi-cartouche"
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8, ease: 'easeOut' }}
        >
          <h1 className="ushi-cartouche-title" lang="ja">牛の川</h1>
          <span className="ushi-cartouche-sub">The River of Oxen · OX ATLAS II</span>
        </motion.aside>

        <div className="ushi-scene">
          <svg className="ushi-art" viewBox="0 0 900 600" aria-hidden="true">
            <defs>
              <linearGradient id="ushi-sky" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stopColor="#F3EBDD" />
                <stop offset="1" stopColor="#D8E4EE" />
              </linearGradient>
            </defs>
            <rect x="0" y="0" width="900" height="600" fill="url(#ushi-sky)" />
            <motion.g initial={{ y: 46, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1.6, ease: 'easeOut' }}>
              <circle cx="212" cy="152" r="112" fill="#C73E2D" opacity="0.22" />
              <circle cx="212" cy="152" r="95" fill="#C73E2D" />
            </motion.g>
            <path d="M0,322 L150,238 L280,322 L420,248 L560,322 L700,262 L830,322 L900,300 L900,340 L0,340 Z" fill="#163A5C" opacity="0.18" />
            <rect x="0" y="318" width="900" height="3" fill="#163A5C" opacity="0.3" />
            <g className="ushi-waves-back">
              <WaveBack />
            </g>
            <Ox />
            <g className="ushi-waves-front">
              <WaveFront />
            </g>
          </svg>

          <div className="ushi-haiku">
            {HAIKU.map((line, i) => (
              <motion.p
                key={line}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.5, duration: 1 }}
              >
                {line}
              </motion.p>
            ))}
          </div>

          <motion.div
            className="ushi-hanko"
            initial={{ opacity: 0, scale: 1.4, rotate: 4 }}
            animate={{ opacity: 1, scale: 1, rotate: -2 }}
            transition={{ delay: 1.4, duration: 0.5, ease: 'easeOut' }}
          >
            <span className="ushi-hanko-mark">牛</span>
            <span className="ushi-hanko-caption">OX-ALPHA · SET II</span>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
