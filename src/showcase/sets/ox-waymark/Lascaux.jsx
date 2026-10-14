import { motion, useMotionTemplate, useMotionValue, useSpring } from 'framer-motion'
import './lascaux.css'

const BODY =
  'M 160 200 C 175 170 240 168 300 170 C 360 172 400 160 440 140 C 470 125 520 122 560 138 C 575 144 590 150 600 158 L 612 172 C 625 195 640 220 646 240 C 650 252 640 262 625 262 C 605 262 590 255 575 248 C 560 260 545 285 530 300 C 520 318 515 330 512 340 L 520 418 L 494 420 L 486 350 C 470 345 440 350 400 352 C 350 354 300 350 262 340 C 255 360 245 385 248 418 L 222 420 C 214 390 205 360 190 330 C 170 300 155 250 160 200 Z'

const TIMELINE = [
  {
    when: 'c. 17,000 BP',
    what: 'Painters in the Hall of the Bulls outline four great aurochs on the white calcite. The largest runs more than five metres along the rock.',
  },
  {
    when: 'c. 10,500 BP',
    what: 'Farmers on the upper Euphrates and Tigris capture the wild ox. Genetic studies trace every humpless taurine cow to as few as eighty of those first wild cows.',
  },
  {
    when: 'c. 8,000 BP',
    what: 'In the Indus basin a second, humped line is tamed from the Indian aurochs, Bos primigenius namadicus — the root of every zebu alive today.',
  },
  {
    when: '1627',
    what: 'The last recorded aurochs, an old cow, dies in the Jaktorów forest of Mazovia. The wild ox now survives only in its descendants and on cave walls.',
  },
]

const NOTES = [
  {
    k: 'Horns',
    v: 'Drawn as if seen from the front while the body stands side-on — twisted perspective. Real aurochs horns curved forward and up and could pass eighty centimetres.',
  },
  {
    k: 'Colour',
    v: 'Bulls were near-black with a pale stripe down the spine; cows ran red-brown. The painters had both colours to hand: charcoal and burnt iron ochre.',
  },
  {
    k: 'Scale',
    v: 'A grown bull stood up to 1.8 metres at the shoulder, taller than most cattle bred since. Caesar wrote that it was little smaller than an elephant.',
  },
]

function Bull() {
  return (
    <svg
      className="ox-waymark-lx-bull"
      viewBox="0 0 800 460"
      role="img"
      aria-label="An aurochs bull painted in charcoal and red ochre, its horns sweeping forward"
    >
      <defs>
        <radialGradient id="ox-waymark-lx-hide" cx="40%" cy="55%" r="70%">
          <stop offset="0" stopColor="#D58A44" />
          <stop offset="0.55" stopColor="#B0502A" />
          <stop offset="1" stopColor="#7A2E16" />
        </radialGradient>
        <filter id="ox-waymark-lx-rough" x="-5%" y="-5%" width="110%" height="110%">
          <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="2" seed="7" />
          <feDisplacementMap in="SourceGraphic" scale="6" />
        </filter>
        <clipPath id="ox-waymark-lx-clip">
          <path d={BODY} />
        </clipPath>
      </defs>
      <g filter="url(#ox-waymark-lx-rough)">
        <path d="M 462 330 L 472 414 L 448 418 L 442 336 Z" fill="#5E2412" />
        <path d="M 284 330 C 288 360 292 390 294 412 L 270 416 C 268 390 262 360 258 334 Z" fill="#5E2412" />
        <path
          d="M 164 192 C 142 220 132 270 138 326"
          fill="none"
          stroke="#16100C"
          strokeWidth="6"
          strokeLinecap="round"
        />
        <path d="M 130 318 C 124 344 138 366 152 356 C 156 340 148 324 138 314 Z" fill="#16100C" />
        <path d={BODY} fill="url(#ox-waymark-lx-hide)" />
        <g clipPath="url(#ox-waymark-lx-clip)">
          <path d="M 446 100 C 476 160 486 220 478 280 C 474 320 476 370 484 440 L 700 440 L 700 90 Z" fill="#16100C" />
          <path d="M 196 186 C 290 178 380 172 438 148" fill="none" stroke="#E9D6B0" strokeWidth="5" opacity="0.55" />
          <circle cx="330" cy="248" r="11" fill="#16100C" opacity="0.85" />
          <circle cx="384" cy="286" r="8" fill="#16100C" opacity="0.8" />
          <circle cx="296" cy="298" r="7" fill="#16100C" opacity="0.8" />
          <circle cx="246" cy="236" r="9" fill="#16100C" opacity="0.85" />
          <circle cx="418" cy="232" r="6" fill="#16100C" opacity="0.75" />
        </g>
        <path d={BODY} fill="none" stroke="#16100C" strokeWidth="7" strokeLinejoin="round" />
        <path
          d="M 584 154 C 610 136 640 124 660 104 C 672 92 678 78 676 60 C 692 80 686 106 668 124 C 648 146 624 158 606 166 Z"
          fill="#16100C"
        />
        <path
          d="M 566 150 C 562 120 572 96 592 80 C 606 70 622 64 640 62 C 620 74 606 90 598 108 C 592 122 590 138 588 152 Z"
          fill="#16100C"
        />
        <ellipse cx="610" cy="192" rx="8" ry="5" fill="#E9D6B0" transform="rotate(20 610 192)" />
        <circle cx="612" cy="193" r="2.6" fill="#16100C" />
        <path d="M 628 238 C 634 242 638 246 640 250" stroke="#E9D6B0" strokeWidth="2.5" fill="none" opacity="0.7" />
      </g>
      <g fill="#16100C" opacity="0.85">
        <circle cx="690" cy="330" r="6" />
        <circle cx="712" cy="326" r="6" />
        <circle cx="734" cy="330" r="6" />
        <circle cx="756" cy="326" r="6" />
      </g>
      <g fill="none" stroke="#9C3A1C" strokeWidth="4" opacity="0.8">
        <path d="M 680 380 L 760 380 L 760 420 L 680 420 Z" />
        <path d="M 707 380 L 707 420 M 734 380 L 734 420 M 680 400 L 760 400" />
      </g>
    </svg>
  )
}

function HandStencil() {
  return (
    <svg className="ox-waymark-lx-hand" viewBox="0 0 160 180" aria-hidden="true">
      <defs>
        <radialGradient id="ox-waymark-lx-spray" cx="50%" cy="52%" r="50%">
          <stop offset="0" stopColor="#B4471F" stopOpacity="0.95" />
          <stop offset="0.6" stopColor="#9C3A1C" stopOpacity="0.7" />
          <stop offset="1" stopColor="#9C3A1C" stopOpacity="0" />
        </radialGradient>
        <filter id="ox-waymark-lx-soft">
          <feGaussianBlur stdDeviation="1.6" />
        </filter>
      </defs>
      <ellipse cx="80" cy="92" rx="78" ry="88" fill="url(#ox-waymark-lx-spray)" />
      <g fill="#1B130D" filter="url(#ox-waymark-lx-soft)">
        <path d="M 52 176 C 50 150 46 130 50 112 C 54 98 62 92 80 92 C 98 92 108 98 112 110 C 116 124 112 150 108 176 Z" />
        <rect x="50" y="46" width="13" height="60" rx="6.5" transform="rotate(-8 56 100)" />
        <rect x="66" y="30" width="13" height="70" rx="6.5" transform="rotate(-2 72 100)" />
        <rect x="82" y="34" width="13" height="66" rx="6.5" transform="rotate(4 88 100)" />
        <rect x="97" y="50" width="12" height="54" rx="6" transform="rotate(10 103 104)" />
        <rect x="112" y="92" width="13" height="46" rx="6.5" transform="rotate(48 118 136)" />
      </g>
    </svg>
  )
}

export default function Lascaux() {
  const mx = useMotionValue(66)
  const my = useMotionValue(64)
  const sx = useSpring(mx, { stiffness: 50, damping: 16 })
  const sy = useSpring(my, { stiffness: 50, damping: 16 })
  const torch = useMotionTemplate`radial-gradient(circle at ${sx}% ${sy}%, rgba(10,6,3,0) 0, rgba(10,6,3,0.05) 16vmax, rgba(10,6,3,0.55) 40vmax, rgba(10,6,3,0.78) 75vmax)`

  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect()
    mx.set(((e.clientX - r.left) / r.width) * 100)
    my.set(((e.clientY - r.top) / r.height) * 100)
  }

  return (
    <div className="th-ox-waymark-lx">
      <section className="ox-waymark-lx-hall" onPointerMove={onMove}>
        <div className="ox-waymark-lx-wall" aria-hidden="true" />
        <motion.figure
          className="ox-waymark-lx-figure"
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2.2, ease: 'easeOut' }}
        >
          <Bull />
        </motion.figure>
        <motion.div className="ox-waymark-lx-torch" style={{ background: torch }} aria-hidden="true" />
        <motion.div
          className="ox-waymark-lx-flicker"
          aria-hidden="true"
          animate={{ opacity: [0.18, 0.28, 0.14, 0.24, 0.18] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
        />
        <header className="ox-waymark-lx-head">
          <p className="ox-waymark-lx-eyebrow">Dordogne · Hall of the Bulls · 17,000 years before present</p>
          <h1 className="ox-waymark-lx-title">
            The first ox <em>we ever drew</em>
          </h1>
          <p className="ox-waymark-lx-lede">
            Before anyone yoked it, milked it or named a breed, the ox was a wild bull close to a tonne, and the
            people who hunted it painted it by lamplight. Move your light across the rock.
          </p>
        </header>
      </section>

      <section className="ox-waymark-lx-notes" aria-labelledby="ox-waymark-lx-notes-h">
        <h2 id="ox-waymark-lx-notes-h" className="ox-waymark-lx-h2">
          Reading the wall
        </h2>
        <dl className="ox-waymark-lx-dl">
          {NOTES.map((n, i) => (
            <motion.div
              key={n.k}
              className="ox-waymark-lx-note"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.9, delay: i * 0.15 }}
            >
              <dt>{n.k}</dt>
              <dd>{n.v}</dd>
            </motion.div>
          ))}
        </dl>
      </section>

      <section className="ox-waymark-lx-strata" aria-labelledby="ox-waymark-lx-strata-h">
        <h2 id="ox-waymark-lx-strata-h" className="ox-waymark-lx-h2">
          From the wall to the byre
        </h2>
        <ol className="ox-waymark-lx-layers">
          {TIMELINE.map((t, i) => (
            <motion.li
              key={t.when}
              className="ox-waymark-lx-layer"
              style={{ '--d': i }}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8 }}
            >
              <span className="ox-waymark-lx-when">{t.when}</span>
              <p>{t.what}</p>
            </motion.li>
          ))}
        </ol>
      </section>

      <footer className="ox-waymark-lx-foot">
        <HandStencil />
        <div className="ox-waymark-lx-sign">
          <p className="ox-waymark-lx-sign-mark">SET XXXIV · DESIGNED BY CLAUDE OPUS 5.5</p>
          <p className="ox-waymark-lx-sign-note">
            Left on the rock the old way: a palm pressed flat, ochre blown around it.
          </p>
        </div>
      </footer>
    </div>
  )
}
