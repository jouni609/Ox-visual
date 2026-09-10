import { motion } from 'framer-motion'
import './grex.css'
import { hornPath } from './forms.js'

const soot = '#17130e'
const bone = '#ece3cd'

function Bust({ x, y, s, horn, bell, flip }) {
  const k = horn
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`}>
      <ellipse cx="0" cy="362" rx="100" ry="10" fill={soot} opacity="0.12" />
      <g className="ox-lexicon-grex-bob" style={{ '--bob-delay': `${(x % 7) * 0.14}s` }}>
        <path d="M-70 210 C -90 260, -100 310, -104 358 L 104 358 C 100 310, 90 260, 70 210 C 40 226, -40 226, -70 210 Z" fill={soot} />
        <path d="M-56 104 C -84 102, -108 112, -118 128 C -112 142, -88 144, -68 134 C -56 128, -50 114, -56 104 Z" fill={soot} />
        <path d="M56 104 C 84 102, 108 112, 118 128 C 112 142, 88 144, 68 134 C 56 128, 50 114, 56 104 Z" fill={soot} />
        <path d={hornPath(-44, 76, -96 * k, 16 * k, 30, 10, -50 * k)} fill={soot} />
        <path d={hornPath(44, 76, 96 * k, 16 * k, 30, 10, 50 * k)} fill={soot} />
        <path d="M0 70 C -30 70, -54 92, -58 130 C -62 166, -58 196, -46 212 C -30 232, 30 232, 46 212 C 58 196, 62 166, 58 130 C 54 92, 30 70, 0 70 Z" fill={soot} />
        <path d="M-26 162 C -8 154, 8 154, 26 162 C 30 178, 28 202, 20 216 C 10 230, -10 230, -20 216 C -28 202, -30 178, -26 162 Z" fill={soot} stroke={bone} strokeWidth="4" />
        <circle cx="-30" cy="114" r="7" fill={bone} />
        <circle cx="-31" cy="114" r="3.2" fill={soot} />
        <circle cx="30" cy="114" r="7" fill={bone} />
        <circle cx="31" cy="114" r="3.2" fill={soot} />
        <circle cx="-12" cy="186" r="3.5" fill={bone} />
        <circle cx="12" cy="186" r="3.5" fill={bone} />
        {bell ? (
          <g>
            <path d="M-40 224 C -14 212, 14 212, 40 224" fill="none" stroke={soot} strokeWidth="6" strokeLinecap="round" />
            <path d="M-10 238 C 0 235, 8 238, 11 246 C 14 255, 7 265, -4 265 C -15 265, -22 255, -19 246 C -18 242, -14 239, -10 238 Z" fill="#8d3b22" />
            <circle cx="-5" cy="260" r="2.5" fill={soot} />
          </g>
        ) : null}
        <g stroke={bone} strokeWidth="4" strokeLinecap="round" fill="none" opacity="0.9">
          <path d="M-58 136 C -54 162, -50 188, -46 208" />
          <path d="M58 136 C 54 162, 50 188, 46 208" />
          <path d={flip ? 'M-84 260 C -74 276, -60 286, -42 292' : 'M-70 250 C -78 280, -82 312, -84 340'} />
          <path d="M70 250 C 78 280, 82 312, 84 340" />
          <path d="M-30 88 C -18 82, 18 82, 30 88" />
        </g>
      </g>
    </g>
  )
}

function Herd() {
  return (
    <g>
      <Bust x={110} y={35} s={0.92} horn={1.05} bell />
      <Bust x={350} y={113} s={0.7} horn={0.7} flip />
      <Bust x={580} y={6} s={1} horn={1.2} />
      <Bust x={820} y={78} s={0.8} horn={0.9} flip />
      <Bust x={1050} y={56} s={0.86} horn={0.95} />
      <path d="M0 366 L 1200 366 L 1200 374 L 0 374 Z" fill={soot} />
    </g>
  )
}

const register = [
  { n: 'I', name: 'The lead cow, belled', note: 'Picks the line and keeps it. The others follow her shoulder, not the path.' },
  { n: 'II', name: 'The yearling, second', note: 'Watches the gate more than the grass. Learning the order of things.' },
  { n: 'III', name: 'The heifer, third', note: 'Grazes with her eyes up. First to notice a strange dog.' },
  { n: 'IV', name: 'The bull, at the rear', note: 'Has never hurried in his life. The calves keep his pace.' },
  { n: 'V', name: 'The old one, last', note: 'Has not looked up all morning. Does not need to.' },
]

function Tally({ count }) {
  return (
    <svg className="ox-lexicon-grex-tally" viewBox="0 0 72 24" aria-hidden="true">
      {Array.from({ length: Math.min(count, 5) }, (_, i) => (
        <line key={i} x1={8 + i * 12} y1="3" x2={8 + i * 12} y2="21" stroke={soot} strokeWidth="3.4" strokeLinecap="round" />
      ))}
      {count >= 5 ? <line x1="2" y1="20" x2="64" y2="6" stroke="#8d3b22" strokeWidth="3.4" strokeLinecap="round" /> : null}
    </svg>
  )
}

const lexicon = [
  { word: 'gregarious', gloss: 'fond of company, from grex' },
  { word: 'egregious', gloss: 'ex grex, out of the herd. Once praise for standing apart. Now the opposite.' },
  { word: 'segregate', gloss: 'set apart from the herd' },
  { word: 'congregate', gloss: 'gathered into one flock' },
]

export default function Grex() {
  return (
    <section className="ox-lexicon-grex">
      <div className="ox-lexicon-grex-board">
        <header className="ox-lexicon-grex-head">
          <div className="ox-lexicon-grex-head-left">
            <span className="ox-lexicon-grex-kicker">Ethology · Bos taurus</span>
            <h1 className="ox-lexicon-grex-title">Grex</h1>
            <p className="ox-lexicon-grex-sub">
              Latin, gregis, a herd. The root of gregarious, and of egregious, which once meant standing outside the
              herd.
            </p>
          </div>
          <motion.div
            className="ox-lexicon-grex-brand"
            initial={{ opacity: 0, rotate: -3, scale: 1.2 }}
            animate={{ opacity: 1, rotate: -1.5, scale: 1 }}
            transition={{ delay: 0.5, type: 'spring', stiffness: 140, damping: 14 }}
          >
            <span className="ox-lexicon-grex-brand-line">SET 5 · DESIGNED BY DEEPSEEK FLASH</span>
            <span className="ox-lexicon-grex-brand-sub">carved at the byre</span>
          </motion.div>
        </header>

        <div className="ox-lexicon-grex-frieze">
          <svg viewBox="0 0 2400 400" preserveAspectRatio="xMidYMid slice" role="img" aria-label="Woodcut frieze of oxen walking in a line">
            <g className="ox-lexicon-grex-march">
              <Herd />
              <g transform="translate(1200 0)">
                <Herd />
              </g>
              <g transform="translate(2400 0)">
                <Herd />
              </g>
            </g>
          </svg>
        </div>

        <div className="ox-lexicon-grex-cols">
          <motion.article
            className="ox-lexicon-grex-entry"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="ox-lexicon-grex-minihead">Entry</h2>
            <p>
              Cattle do not do well alone. A calf separated from the group calls until it is hoarse and its heart
              rate climbs; put a familiar animal beside it and both settle. Ethologists call it social buffering.
              Allogrooming, licking a herdmate&apos;s neck and shoulders, lowers the heart rate of the licker and
              the licked. Dominance settles most disputes before they become fights, and a cow remembers who stood
              where.
            </p>
            <p>
              The herd is not a crowd the ox happens to be in. It is equipment the ox carries around, for warmth,
              for warning, for company. The old image of the docile solitary animal is backwards. The ox stands
              calmly because it knows exactly who is standing next to it.
            </p>
            <div className="ox-lexicon-grex-lexicon">
              <h3 className="ox-lexicon-grex-minihead">One root, four words</h3>
              <ul>
                {lexicon.map((l) => (
                  <li key={l.word}>
                    <span className="ox-lexicon-grex-word">{l.word}</span>
                    <span className="ox-lexicon-grex-gloss">{l.gloss}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.article>

          <motion.aside
            className="ox-lexicon-grex-register"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.32, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="ox-lexicon-grex-minihead">Herd register, walking order</h2>
            <ol className="ox-lexicon-grex-list">
              {register.map((r, i) => (
                <li key={r.n}>
                  <Tally count={i + 1} />
                  <div className="ox-lexicon-grex-member">
                    <span className="ox-lexicon-grex-member-name">
                      {r.n} · {r.name}
                    </span>
                    <span className="ox-lexicon-grex-member-note">{r.note}</span>
                  </div>
                </li>
              ))}
            </ol>
          </motion.aside>
        </div>
      </div>
    </section>
  )
}
