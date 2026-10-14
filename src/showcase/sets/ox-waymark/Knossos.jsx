import { motion } from 'framer-motion'
import './knossos.css'

const BODY =
  'M 152 262 C 136 254 134 232 146 218 C 160 200 182 186 204 172 C 222 160 236 150 252 146 C 280 120 320 104 370 104 C 440 104 500 126 560 130 C 610 132 650 128 680 140 C 712 152 724 182 716 210 C 708 236 690 252 664 258 C 620 268 580 262 540 262 C 500 262 460 280 420 290 C 380 300 340 302 310 292 C 290 286 270 278 250 274 C 226 272 200 274 180 272 C 168 270 160 268 152 262 Z'

const FORE =
  'M 360 250 C 320 270 280 296 236 308 L 170 322 L 146 326 L 132 334 L 150 340 L 174 336 L 240 326 C 290 316 336 300 372 286 Z'
const HIND =
  'M 640 214 C 690 220 730 244 768 262 L 830 272 L 850 274 L 862 282 L 846 288 L 826 286 L 762 282 C 720 276 680 266 630 262 Z'

const SPIRALS = Array.from({ length: 26 }, (_, i) => i * 60)

const PLATES = [
  {
    t: 'The leap',
    b: 'Three figures and one bull. One grips the horns, one is upside-down over the spine, one waits behind with open arms. Red skin marks a man, white skin a woman — the old painters’ convention.',
  },
  {
    t: 'The bull',
    b: 'Its gallop is impossible — all four legs flung out at once — and that is the point. Minoan painters drew speed, not anatomy. Long lyre horns, a pale hide blotched dark, head driven low.',
  },
  {
    t: 'The myth',
    b: 'Crete was the island of bulls: Zeus came to Europa as a white bull, Poseidon’s bull fathered the Minotaur, and Theseus walked the labyrinth under Knossos to kill it.',
  },
]

function Spiral({ x }) {
  return (
    <g transform={`translate(${x} 0)`}>
      <path
        d="M 0 20 C 0 6 22 6 22 18 C 22 26 10 26 10 19 C 10 14 16 14 16 18 M 22 18 C 30 30 50 30 60 20"
        fill="none"
        stroke="#1d2b3d"
        strokeWidth="2.6"
        strokeLinecap="round"
      />
      <circle cx="40" cy="16" r="3" fill="#b23a26" />
    </g>
  )
}

function Leaper({ skin, hair }) {
  return (
    <g>
      <path d="M -3 -16 L -6 -40 M 3 -16 L 6 -40" stroke={skin} strokeWidth="5" strokeLinecap="round" />
      <path d="M -6 -14 C -8 -4 -6 4 -4 10 L 4 10 C 6 4 8 -4 6 -14 Z" fill={skin} />
      <circle cx="0" cy="-19" r="6.5" fill={skin} />
      <path d="M -6 -22 C -10 -18 -14 -10 -16 -2" stroke={hair} strokeWidth="2.6" fill="none" strokeLinecap="round" />
      <path d="M -6 8 L 6 8 L 7 16 L -7 16 Z" fill="#f4ecdc" stroke="#2a1a10" strokeWidth="1" />
      <path d="M -4 16 L -6 40 M 4 16 L 6 40" stroke={skin} strokeWidth="5" strokeLinecap="round" />
    </g>
  )
}

function Fresco() {
  return (
    <svg
      className="ox-waymark-kn-svg"
      viewBox="0 -40 900 480"
      role="img"
      aria-label="A white bull with dark patches galloping, horns lowered, while an acrobat somersaults over its back"
    >
      <defs>
        <clipPath id="ox-waymark-kn-clip">
          <path d={BODY} />
        </clipPath>
        <clipPath id="ox-waymark-kn-panel">
          <rect x="0" y="-40" width="900" height="480" />
        </clipPath>
      </defs>
      <g clipPath="url(#ox-waymark-kn-panel)">
        <rect x="0" y="-40" width="900" height="480" fill="#2f5f8f" />
        <path d="M 0 -40 L 120 -40 C 100 -10 70 4 40 12 C 24 16 10 30 0 44 Z" fill="#e3d2b0" />
        <path d="M 900 440 L 760 440 C 780 410 820 396 850 392 C 870 388 890 370 900 352 Z" fill="#e3d2b0" />
        <path d="M 820 -40 L 900 -40 L 900 40 C 880 20 852 6 820 -40 Z" fill="#e3d2b0" />
        <path d="M 0 440 L 0 380 C 20 400 40 430 64 440 Z" fill="#e3d2b0" />
        <path d="M 120 -40 C 100 -10 70 4 40 12 C 24 16 10 30 0 44" fill="none" stroke="#b49a70" strokeWidth="2" />
        <path d="M 380 -40 L 392 0 L 386 30 M 520 440 L 530 410 L 548 398" fill="none" stroke="#1d3c5c" strokeWidth="1.5" />

        <g className="ox-waymark-kn-bob">
          <path d={FORE} fill="#cfc4b0" transform="translate(-26 -22)" stroke="#2a1a10" strokeWidth="2.5" strokeLinejoin="round" />
          <path d={HIND} fill="#cfc4b0" transform="translate(16 -24)" stroke="#2a1a10" strokeWidth="2.5" strokeLinejoin="round" />
          <path
            d="M 712 168 C 750 140 780 110 790 80 C 796 62 786 50 772 56"
            fill="none"
            stroke="#2a1a10"
            strokeWidth="5"
            strokeLinecap="round"
          />
          <path d="M 772 56 C 758 48 754 66 764 74 C 768 66 774 62 772 56 Z" fill="#2a1a10" />
          <path d={BODY} fill="#f4ecdc" />
          <g clipPath="url(#ox-waymark-kn-clip)" fill="#3a2418">
            <path d="M 330 120 C 370 104 420 120 424 156 C 428 196 380 214 348 200 C 318 186 306 140 330 120 Z" />
            <path d="M 480 170 C 512 156 560 168 564 196 C 568 226 520 240 494 226 C 470 214 462 184 480 170 Z" />
            <path d="M 630 140 C 660 132 700 150 704 178 C 690 196 656 196 640 184 C 622 170 618 150 630 140 Z" />
            <path d="M 262 160 C 284 150 306 160 304 184 C 294 206 266 206 254 192 C 244 178 250 166 262 160 Z" />
          </g>
          <path d={BODY} fill="none" stroke="#2a1a10" strokeWidth="3.5" strokeLinejoin="round" />
          <path d={FORE} fill="#f4ecdc" stroke="#2a1a10" strokeWidth="3" strokeLinejoin="round" />
          <path d={HIND} fill="#f4ecdc" stroke="#2a1a10" strokeWidth="3" strokeLinejoin="round" />
          <path d="M 146 326 L 132 334 L 150 340 L 158 330 Z M 850 274 L 862 282 L 846 288 L 842 278 Z" fill="#2a1a10" />
          <path d="M 236 308 C 232 314 232 322 240 326" fill="none" stroke="#2a1a10" strokeWidth="2" />
          <path d="M 768 262 C 774 268 772 276 762 282" fill="none" stroke="#2a1a10" strokeWidth="2" />
          <path
            d="M 232 160 C 200 146 172 124 160 96 C 152 78 154 60 164 46 C 166 66 170 84 182 104 C 196 126 218 142 250 152 Z"
            fill="#e8dcc0"
            stroke="#2a1a10"
            strokeWidth="2.5"
          />
          <path
            d="M 252 150 C 236 124 226 98 230 72 C 232 60 240 50 250 44 C 246 62 248 84 256 106 C 262 122 268 136 270 148 Z"
            fill="#e8dcc0"
            stroke="#2a1a10"
            strokeWidth="2.5"
          />
          <path d="M 262 168 C 278 160 296 160 308 166 C 296 178 278 180 264 176 Z" fill="#f4ecdc" stroke="#2a1a10" strokeWidth="2" />
          <path d="M 200 196 C 206 188 218 188 224 196 C 216 202 206 202 200 196 Z" fill="#2a1a10" />
          <ellipse cx="148" cy="236" rx="4" ry="3" fill="#2a1a10" />
          <path d="M 142 252 C 150 256 160 258 168 256" fill="none" stroke="#2a1a10" strokeWidth="2" />
          <path d="M 250 274 C 262 290 284 300 310 292" fill="none" stroke="#2a1a10" strokeWidth="2" />
        </g>

        <g transform="translate(868 330) scale(1.3)">
          <Leaper skin="#f1e3cc" hair="#1d1410" />
        </g>

        <g className="ox-waymark-kn-vault">
          <g transform="scale(1.35)">
            <Leaper skin="#a8432a" hair="#1d1410" />
          </g>
        </g>
      </g>
    </svg>
  )
}

export default function Knossos() {
  return (
    <div className="th-ox-waymark-kn">
      <header className="ox-waymark-kn-head">
        <p className="ox-waymark-kn-place">
          Palace of Knossos · east wing · <span lang="grc">ταυροκαθάψια</span>
        </p>
        <h1 className="ox-waymark-kn-title">Over the horns, over the bull</h1>
      </header>

      <div className="ox-waymark-kn-stage">
        <span className="ox-waymark-kn-column" aria-hidden="true" />
        <figure className="ox-waymark-kn-frame">
          <div className="ox-waymark-kn-band" aria-hidden="true">
            <svg viewBox="0 0 1440 34" preserveAspectRatio="xMinYMid slice">
              <g className="ox-waymark-kn-scroll">
                {SPIRALS.map((x) => (
                  <Spiral key={x} x={x} />
                ))}
              </g>
            </svg>
          </div>
          <Fresco />
          <div className="ox-waymark-kn-band ox-waymark-kn-band--low" aria-hidden="true">
            <svg viewBox="0 0 1440 34" preserveAspectRatio="xMinYMid slice">
              <g className="ox-waymark-kn-scroll ox-waymark-kn-scroll--rev">
                {SPIRALS.map((x) => (
                  <Spiral key={x} x={x} />
                ))}
              </g>
            </svg>
          </div>
          <figcaption className="ox-waymark-kn-cap">
            After the Bull-Leaping Fresco, Knossos, c. 1450 BCE — pieced together from fragments; the pale
            patches are where the plaster never came back.
          </figcaption>
        </figure>
        <span className="ox-waymark-kn-column" aria-hidden="true" />
      </div>

      <p className="ox-waymark-kn-lede">
        Bronze-Age Crete painted its bulls mid-charge and its young people mid-air. The leap was sport, rite
        and dare at once — and the bull was always the larger figure on the wall.
      </p>

      <section className="ox-waymark-kn-plates" aria-label="Notes on the fresco">
        {PLATES.map((p, i) => (
          <motion.article
            key={p.t}
            className="ox-waymark-kn-plate"
            initial={{ opacity: 0, rotate: i % 2 ? 2 : -2, y: 30 }}
            whileInView={{ opacity: 1, rotate: 0, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, delay: i * 0.12, ease: [0.2, 0.8, 0.2, 1] }}
          >
            <span className="ox-waymark-kn-num">{['Α', 'Β', 'Γ'][i]}</span>
            <h2>{p.t}</h2>
            <p>{p.b}</p>
          </motion.article>
        ))}
      </section>

      <section className="ox-waymark-kn-quote">
        <p>
          The fresco hangs today in the Heraklion Archaeological Museum, reassembled under Arthur Evans
          from shards of a wall that fell when the palace burned. Most of the bull survived. That is the part
          everyone kept.
        </p>
      </section>

      <footer className="ox-waymark-kn-foot">
        <motion.div
          className="ox-waymark-kn-tablet"
          initial={{ rotate: -4 }}
          whileHover={{ rotate: 0, scale: 1.03 }}
        >
          <svg className="ox-waymark-kn-tablet-mark" viewBox="0 0 60 40" aria-hidden="true">
            <path
              d="M 8 30 L 8 16 C 8 12 12 10 16 10 L 40 10 C 44 10 46 6 50 6 L 56 12 L 54 18 L 46 18 L 44 30 M 16 22 L 16 32 M 38 22 L 38 32 M 50 6 C 52 0 58 0 58 0 M 48 6 C 46 0 40 0 40 0"
              fill="none"
              stroke="#4a2a16"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <p className="ox-waymark-kn-tablet-text">SET XXXIV · DESIGNED BY CLAUDE OPUS 5.5</p>
          <p className="ox-waymark-kn-tablet-sub">pressed into clay, as the palace scribes kept their cattle lists</p>
        </motion.div>
      </footer>
    </div>
  )
}
