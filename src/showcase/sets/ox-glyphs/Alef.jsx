import { useState } from 'react'
import { motion } from 'framer-motion'
import './alef.css'

const stages = [
  { yr: 'c. 1900 BC', name: 'mine', note: 'Proto-Sinaitic workers, Serabit el-Khadem' },
  { yr: 'c. 1000 BC', name: 'aleph', note: 'the turned head, Phoenicia to Israel' },
  { yr: 'c. 800 BC', name: 'alpha', note: 'the Greeks, a vowel for the first time' },
  { yr: 'today', name: 'a', note: 'your fingertips, three millennia later' },
]

function OxHead({ flip = false }) {
  const paths = [
    ['face', 'M170 50 C122 56 94 100 94 150 C94 198 122 232 170 240 C218 232 246 198 246 150 C246 100 218 56 170 50 Z'],
    ['brow', 'M118 118 C140 104 200 104 222 118'],
    ['muzzle', 'M136 196 Q170 210 204 196'],
    ['nostrilL', 'M143 210 Q150 202 158 209'],
    ['nostrilR', 'M182 209 Q190 202 197 210'],
    ['eyeL', 'M138 146 L148 136 L158 146 L148 157 Z'],
    ['eyeR', 'M182 146 L192 136 L202 146 L192 157 Z'],
    ['earL', 'M97 130 C70 112 44 114 36 132 C60 145 82 144 102 138 Z'],
    ['earR', 'M243 130 C270 112 296 114 304 132 C280 145 258 144 238 138 Z'],
    ['hornL', 'M118 72 C92 40 50 30 20 62 C50 58 86 62 110 92 Z'],
    ['hornR', 'M222 72 C248 40 290 30 320 62 C290 58 254 62 230 92 Z'],
  ]
  return (
    <svg className="alef-ox" viewBox="0 0 340 300" aria-hidden="true" focusable="false">
      <g className={`alef-ox-group${flip ? ' is-flipped' : ''}`}>
        {paths.map(([k, d], i) => (
          <motion.path
            key={k}
            d={d}
            pathLength="1"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 1.4, delay: 0.14 * i, ease: 'easeInOut' }}
          />
        ))}
      </g>
    </svg>
  )
}

function MiniOx({ flip }) {
  return (
    <svg className="alef-mini" viewBox="0 0 340 300" aria-hidden="true" focusable="false">
      <g className={`alef-ox-group${flip ? ' is-flipped' : ''}`}>
        <path className="alef-mini-path" d="M170 52 C120 58 92 102 92 152 C92 200 120 232 170 240 C220 232 248 200 248 152 C248 102 220 58 170 52 Z" />
        <path className="alef-mini-path" d="M132 146 L142 136 L152 146 L142 156 Z" />
        <path className="alef-mini-path" d="M188 146 L198 136 L208 146 L198 156 Z" />
        <path className="alef-mini-path" d="M118 72 C92 40 50 30 20 62 C50 58 86 62 110 92 Z" />
        <path className="alef-mini-path" d="M222 72 C248 40 290 30 320 62 C290 58 254 62 230 92 Z" />
      </g>
    </svg>
  )
}

function GlyphStage({ stage }) {
  return (
    <motion.div
      className="alef-stage"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="alef-stage-glyph">
        {stage.name === 'mine' ? <MiniOx /> : null}
        {stage.name === 'aleph' ? <MiniOx flip /> : null}
        {stage.name === 'alpha' ? <span className="alef-stage-letter" lang="el">Α</span> : null}
        {stage.name === 'a' ? <span className="alef-stage-letter">A</span> : null}
      </div>
      <div className="alef-stage-cep">
        <span className="alef-stage-year">{stage.yr}</span>
        <span className="alef-stage-note">{stage.note}</span>
      </div>
    </motion.div>
  )
}

export default function Alef() {
  const [turned, setTurned] = useState(false)
  return (
    <div className="th-alef">
      <svg className="alef-sky" viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice" aria-hidden="true" focusable="false">
        <defs>
          <linearGradient id="alef-skygrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#0e1330" />
            <stop offset="0.62" stopColor="#2a2f63" />
            <stop offset="1" stopColor="#7c6236" />
          </linearGradient>
        </defs>
        <rect width="1600" height="900" fill="url(#alef-skygrad)" />
        {[
          [140, 120], [300, 76], [470, 140], [640, 60], [830, 110], [1010, 52], [1180, 122], [1370, 70], [1510, 130], [220, 210], [560, 200], [900, 210], [1280, 204],
        ].map(([x, y]) => (
          <circle key={`${x}-${y}`} cx={x} cy={y} r={1.6} fill="#e8dcb8" opacity="0.75" />
        ))}
        <path d="M0 700 C300 660 560 680 800 660 C1060 636 1320 670 1600 646 L1600 900 L0 900 Z" fill="#191f42" />
        <path d="M0 780 C380 734 720 752 1040 726 C1290 704 1450 726 1600 714 L1600 900 L0 900 Z" fill="#131735" />
      </svg>

      <header className="alef-head">
        <span className="alef-plate">PLATE I</span>
        <span className="alef-plate-title">THE OX IN THE FIRST LETTER</span>
        <span className="alef-plate-id" aria-label="artifact number">CAT. XI.01</span>
      </header>

      <main className="alef-main">
        <section className="alef-hero">
          <div className="alef-hero-copy">
            <motion.p
              className="alef-kicker"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              SERABIT EL-KHADEM · SINAI · c. 1900 BC
            </motion.p>
            <motion.h1
              className="alef-title"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
            >
              The first letter
              <br />
              <em>was an ox.</em>
            </motion.h1>
            <motion.p
              className="alef-lede"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
            >
              Before the alphabet had letters it had animals. At the turquoise mines of Sinai,
              Semitic workers borrowed Egyptian pictograms and drew what they knew: a horned head,
              a snake, a fish. The head they called <em>aleph</em>: our word for ox, and the name
              of the first letter of every alphabet that followed.
            </motion.p>
            <motion.p
              className="alef-sub"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.68 }}
            >
              aleph → alpha → A. The chain has never been broken.
            </motion.p>
          </div>
          <motion.figure
            className="alef-stele"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1, delay: 0.5, ease: 'easeOut' }}
          >
            <OxHead />
            <figcaption className="alef-caption">
              <span className="alef-caption-head">THE HEAD AT SERABIT</span>
              <span className="alef-caption-line">Reconstructed from the rock steles of the mine</span>
            </figcaption>
          </motion.figure>
        </section>

        <section className="alef-turn">
          <div className="alef-turn-copy">
            <h2 className="alef-h2">Then the ox was turned.</h2>
            <p className="alef-turn-text">
              Scribes found it easier to write when every letter stood the same way. The horns came
              to face the ground, the muzzle to the pen. The letter looked like a beast standing on
              its head, and the ox walked out of the alphabet.
            </p>
          </div>
          <div className="alef-turn-control">
            <button
              type="button"
              className={`alef-turn-btn${turned ? ' is-on' : ''}`}
              onClick={() => setTurned(!turned)}
              aria-pressed={turned}
            >
              <span className="alef-turn-btn-label">
                {turned ? 'SET THE HEAD UPRIGHT' : 'TURN THE HEAD'}
              </span>
              <svg className="alef-turn-btn-arrow" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                <path d="M12 38 c-26 -12 -38 -34 -22 -50 c10 -10 24 -6 26 8 c2 -14 16 -18 26 -8 c16 16 4 38 -22 50 Z" />
              </svg>
            </button>
            <span className="alef-turn-note">
              As the ox turns, the letter you are
              <br />
              reading turns with it.
            </span>
          </div>
        </section>

        <section className="alef-timeline" aria-label="Evolution of the letter A">
          {stages.map((s) => (
            <GlyphStage key={s.name} stage={s} />
          ))}
        </section>

        <section className="alef-notes">
          <article className="alef-note-card">
            <span className="alef-note-tab">FIELD NOTES · GARDINER, 1916</span>
            <p className="alef-note-line">
              At Serabit El-Khadem the turquoise miners cut into an Egyptian temple and left their
              own graffiti at the workface. In 1916 the marks were read as a script: a consonant
              alphabet, the parents of the one you are using now.
            </p>
            <p className="alef-note-line">
              The signs were names: aleph the ox, bet the house, gimel the camel. When a sign is a
              noun and a sound at once, the written word becomes the animal again.
            </p>
          </article>
          <aside className="alef-note-side">
            <span className="alef-side-word" lang="he">שור</span>
            <span className="alef-side-glose">
              Similar ideas persist: modern Hebrew <em>shor</em>, 'ox', is read with the same
              root-sound the mines wrote in stone.
            </span>
          </aside>
        </section>

        <footer className="alef-footer">
          <span className="alef-footer-tag" aria-label="catalog tag">
            <span className="alef-footer-run">SET XI · DESIGNED BY DEEPSEEK V4</span>
            <span className="alef-footer-cat">EXCAVATION PLATE · SERABIT EL-KHADEM · VICINITY OF THE HATHOR TEMPLE</span>
          </span>
        </footer>
      </main>
    </div>
  )
}
