import { motion } from 'framer-motion'
import './primigenius.css'

const AUROCHS_BODY =
  'M186 296 C176 278 172 258 178 240 C186 216 204 200 228 194 ' +
  'C222 172 226 148 240 130 C252 114 270 106 286 112 ' +
  'C290 96 300 84 314 82 C330 80 344 90 350 104 ' +
  'C356 96 366 94 374 100 C382 106 384 118 380 128 ' +
  'C368 152 352 172 336 188 C368 196 396 214 414 240 ' +
  'C428 260 434 284 430 308 C448 306 468 310 482 322 ' +
  'C472 330 460 336 448 338 C452 362 450 388 442 410 ' +
  'L458 410 L452 448 C448 470 444 492 440 512 ' +
  'L420 508 C424 486 428 464 430 442 C431 428 431 414 430 400 ' +
  'C412 408 390 412 368 410 C366 432 362 454 356 474 ' +
  'L368 478 L358 514 C354 528 350 540 346 550 ' +
  'L328 544 C334 528 338 510 340 492 C342 478 342 464 340 452 ' +
  'C316 458 290 458 266 450 C262 472 256 492 248 510 ' +
  'L258 516 L244 548 C240 556 236 562 232 566 ' +
  'L216 556 C224 542 230 524 232 506 C234 492 234 478 232 466 ' +
  'C210 456 192 440 182 420 C172 400 172 380 178 362 ' +
  'C170 356 166 348 166 340 C166 324 174 308 186 296 Z'

const AUROCHS_HORN_L =
  'M350 104 C356 96 366 94 374 100 C384 108 386 122 382 134 ' +
  'C374 162 356 188 334 206 C350 176 358 148 356 124 ' +
  'C355 114 353 108 350 104 Z'

const AUROCHS_HORN_R =
  'M286 112 C288 100 296 90 308 86 C320 82 332 86 338 96 ' +
  'C348 112 348 132 342 150 C338 130 330 114 318 106 ' +
  'C310 100 300 100 294 104 C291 106 288 109 286 112 Z'

const HAND_PRINTS = [
  { x: 62, y: 70, r: 14, rot: -18 },
  { x: 74, y: 56, r: 11, rot: 24 },
  { x: 56, y: 48, r: 10, rot: 8 },
]

const dot = (i) => ({
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { delay: 0.5 + i * 0.07, duration: 0.5 } },
})

function HandStencil({ x, y, r, rot }) {
  return (
    <g transform={`translate(${x} ${y}) rotate(${rot})`} className="ox-systema-hand">
      <circle r={r * 1.9} className="ox-systema-hand-halo" />
      <circle r={r * 0.42} className="ox-systema-hand-core" />
      {[-2, -1, 0, 1, 2].map((f) => (
        <rect
          key={f}
          x={f * r * 0.34 - r * 0.12}
          y={-r * 1.75 + Math.abs(f) * r * 0.22}
          width={r * 0.24}
          height={r * (0.95 - Math.abs(f) * 0.16)}
          rx={r * 0.12}
          className="ox-systema-hand-core"
        />
      ))}
    </g>
  )
}

export default function Primigenius() {
  return (
    <section className="ox-systema-prim th-ox-systema-prim" lang="en">
      <div className="ox-systema-prim-wall" aria-hidden="true" />
      <motion.div
        className="ox-systema-prim-torch"
        aria-hidden="true"
        animate={{ opacity: [0.5, 0.8, 0.6, 0.85, 0.5] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
      />
      <header className="ox-systema-prim-head">
        <p className="ox-systema-prim-kicker">Bos primigenius · extinct 1627</p>
        <h1 className="ox-systema-prim-title">
          The Aurochs
          <span>Primeval Ox</span>
        </h1>
        <p className="ox-systema-prim-lede">
          Painted on limestone sixteen thousand years ago, the aurochs stood two
          metres at the shoulder — the wild ancestor every cow, ox and bull in
          this family descends from. Branch one of five.
        </p>
      </header>

      <figure className="ox-systema-prim-figure">
        <svg
          className="ox-systema-prim-svg"
          viewBox="0 0 520 620"
          role="img"
          aria-label="Ochre cave painting of an aurochs, a huge long-horned wild ox"
        >
          <defs>
            <filter id="ox-systema-prim-rough">
              <feTurbulence type="fractalNoise" baseFrequency="0.045" numOctaves="3" seed="7" result="n" />
              <feDisplacementMap in="SourceGraphic" in2="n" scale="7" />
            </filter>
            <radialGradient id="ox-systema-prim-ochre" cx="40%" cy="30%" r="90%">
              <stop offset="0%" stopColor="#C97B3D" />
              <stop offset="55%" stopColor="#A0522D" />
              <stop offset="100%" stopColor="#6E3418" />
            </radialGradient>
          </defs>
          <g filter="url(#ox-systema-prim-rough)">
            <motion.path
              d={AUROCHS_BODY}
              fill="url(#ox-systema-prim-ochre)"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 2.4, ease: 'easeOut' }}
            />
            <motion.path
              d={AUROCHS_HORN_L}
              fill="#E8D9BE"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.1, delay: 1.6, ease: 'easeOut' }}
            />
            <motion.path
              d={AUROCHS_HORN_R}
              fill="#E8D9BE"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.1, delay: 1.9, ease: 'easeOut' }}
            />
            <motion.circle cx="330" cy="128" r="7" className="ox-systema-prim-eye" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 2.6, type: 'spring' }} />
            <motion.path
              d="M262 200 C280 208 300 210 318 206"
              fill="none"
              strokeWidth="7"
              strokeLinecap="round"
              className="ox-systema-prim-stroke"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.7, delay: 2.3 }}
            />
            <motion.path
              d="M198 300 C240 330 300 344 360 334 C392 328 416 314 428 296"
              fill="none"
              strokeWidth="6"
              strokeLinecap="round"
              className="ox-systema-prim-stroke"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.9, delay: 2.5 }}
            />
            <motion.g initial={{ opacity: 0 }} animate={{ opacity: 0.85 }} transition={{ delay: 3.1, duration: 1.2 }}>
              {HAND_PRINTS.map((h, i) => (
                <HandStencil key={i} {...h} />
              ))}
            </motion.g>
          </g>
        </svg>
        <figcaption className="ox-systema-prim-caption">
          <span>Lascaux sector IV</span>
          <span>ochre and charcoal</span>
        </figcaption>
      </figure>

      <aside className="ox-systema-prim-side">
        <ol className="ox-systema-prim-strata">
          {['Upper Palaeolithic', 'domesticated 8,500 BCE', 'Jaktorów forest, Poland', 'last cow died 1627'].map(
            (s, i) => (
              <motion.li key={s} variants={dot(i)} initial="hidden" animate="show">
                {s}
              </motion.li>
            )
          )}
        </ol>
      </aside>

      <motion.div
        className="ox-systema-prim-seal"
        role="note"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 3.4, type: 'spring' }}
      >
        <span className="ox-systema-prim-seal-ring" aria-hidden="true" />
        SET 1 · DESIGNED BY GLM 5.3
      </motion.div>
    </section>
  )
}
