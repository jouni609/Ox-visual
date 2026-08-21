import { motion } from 'framer-motion';
import './vespers.css';

const WALK_PATH =
  'M40 -118 C30 -112 20 -102 12 -90 C4 -78 -2 -64 -6 -52 C-9 -44 -9 -38 -5 -34 ' +
  'C1 -30 9 -32 13 -38 C19 -46 23 -54 26 -60 C30 -52 34 -46 39 -42 C44 -50 46 -58 47 -64 ' +
  'C52 -54 58 -48 66 -44 C70 -34 72 -22 72 -12 L70 0 L80 0 L83 -14 C85 -26 88 -36 93 -44 ' +
  'C110 -38 130 -36 150 -36 C190 -34 230 -36 258 -42 C264 -32 268 -22 269 -12 L270 0 L280 0 ' +
  'L281 -14 C282 -26 285 -36 290 -44 C298 -54 303 -66 305 -80 C297 -92 288 -100 274 -106 ' +
  'C246 -116 196 -120 152 -118 C118 -116 92 -118 72 -114 C60 -112 48 -116 40 -118 Z';

const TAIL_PATH =
  'M305 -80 C314 -74 318 -62 317 -46 C316 -30 312 -16 305 -6 C302 -2 296 -2 295 -8 ' +
  'C301 -20 305 -34 305 -50 C305 -62 302 -72 297 -78 Z';

const HORN_PATH =
  'M38 -120 C28 -128 16 -131 6 -128 C3 -125 3 -121 5 -118 C13 -121 24 -120 32 -116 C35 -117 37 -118 38 -120 Z';

function OxSilhouette() {
  return (
    <g>
      <path d="M96 -42 L100 0 L110 0 L112 -40 Z" fill="#151122" />
      <path d="M236 -40 L238 0 L248 0 L250 -38 Z" fill="#151122" />
      <path d={WALK_PATH} fill="#1C1728" />
      <path d={TAIL_PATH} fill="#1C1728" />
      <path d={HORN_PATH} fill="#1C1728" />
    </g>
  );
}

function Frieze() {
  return (
    <svg
      className="vespers-frieze-svg"
      viewBox="0 0 1400 520"
      preserveAspectRatio="xMidYMax slice"
      aria-hidden="true"
      focusable="false"
    >
      <rect x="0" y="0" width="1400" height="520" fill="#F2C879" />
      <rect x="0" y="0" width="1400" height="70" fill="#3B3155" />
      <rect x="0" y="70" width="1400" height="66" fill="#5C4468" />
      <rect x="0" y="136" width="1400" height="64" fill="#8E5A6B" />
      <rect x="0" y="200" width="1400" height="62" fill="#C97B63" />
      <rect x="0" y="262" width="1400" height="56" fill="#E3A05B" />
      <rect x="0" y="318" width="1400" height="54" fill="#F2C879" />

      <motion.circle
        cx="1064"
        cy="352"
        r="58"
        fill="#F6DFA0"
        animate={{ opacity: [1, 0.86, 1] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
      />
      <circle cx="1064" cy="352" r="86" fill="none" stroke="#F6DFA0" strokeWidth="2" opacity="0.5" />

      {[0, 1, 2].map((i) => (
        <motion.path
          key={i}
          d="M0 0 L10 5 L20 0"
          fill="none"
          stroke="#241E33"
          strokeWidth="2.6"
          strokeLinecap="round"
          style={{ x: 1180 - i * 90, y: 96 + i * 26 }}
          animate={{ x: [1180 - i * 90, 240 - i * 60], y: [96 + i * 26, 70 + i * 18], opacity: [0, 1, 1, 0] }}
          transition={{ duration: 24 + i * 4, repeat: Infinity, delay: i * 5, ease: 'linear' }}
        />
      ))}

      <path d="M0 372 C200 360 420 366 640 362 C900 358 1150 364 1400 356 L1400 520 L0 520 Z" fill="#241E33" />
      <path d="M120 366 L126 350 L132 366 Z" fill="#241E33" />
      <path d="M348 362 L353 348 L358 362 Z" fill="#241E33" />
      <path d="M924 358 L929 344 L934 358 Z" fill="#241E33" />
      <path d="M1256 356 L1261 342 L1266 356 Z" fill="#241E33" />

      <motion.rect
        className="vespers-dust"
        x="300"
        y="330"
        width="620"
        height="46"
        rx="23"
        fill="#F2C879"
        animate={{ x: [0, -70], opacity: [0.22, 0.34, 0.22] }}
        transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
      />

      <motion.g
        animate={{ x: [12, -16] }}
        transition={{ duration: 18, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' }}
      >
        <ellipse cx="360" cy="372" rx="150" ry="9" fill="#151122" opacity="0.4" />
        <ellipse cx="620" cy="374" rx="140" ry="8" fill="#151122" opacity="0.36" />
        <ellipse cx="806" cy="374" rx="86" ry="6" fill="#151122" opacity="0.34" />

        <motion.g
          style={{ x: 260, y: 372 }}
          animate={{ y: [372, 367, 372] }}
          transition={{ duration: 1.7, repeat: Infinity, ease: 'easeInOut' }}
        >
          <OxSilhouette />
        </motion.g>
        <motion.g
          style={{ x: 540, y: 374 }}
          animate={{ y: [374, 369, 374] }}
          transition={{ duration: 1.9, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
        >
          <OxSilhouette />
        </motion.g>
        <motion.g
          style={{ x: 760, y: 374 }}
          animate={{ y: [374, 370, 374] }}
          transition={{ duration: 1.35, repeat: Infinity, ease: 'easeInOut', delay: 0.9 }}
        >
          <g transform="scale(0.58)">
            <OxSilhouette />
          </g>
        </motion.g>
      </motion.g>

      <rect x="0" y="470" width="1400" height="50" fill="#1C1728" />
    </svg>
  );
}

export default function Vespers() {
  return (
    <div className="th-vespers">
      <header className="vespers-head">
        <div>
          <p className="vespers-kicker">THE BOOK OF HOURS OF THE OX · FOLIO IV</p>
          <h1 className="vespers-title">Vespers</h1>
          <p className="vespers-sub">18:30 — the way home, when the dust hangs gold</p>
        </div>
        <p className="vespers-folio" lang="la">AD VESPERAS</p>
      </header>

      <motion.div
        className="vespers-frieze"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Frieze />
      </motion.div>

      <motion.section
        className="vespers-panel"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
      >
        <p className="vespers-verse" lang="la">
          Mane nobiscum, quoniam advesperascit.
        </p>
        <p className="vespers-verse-en">Stay with us, for the evening is at hand.</p>
        <p className="vespers-lede">
          Nobody drives the team home; the team drives itself. The old ox turns at the corner stone
          the way water turns downhill, and the rest follow in the groove of every evening before
          this one. Dust hangs in the low light like something the day is unwilling to put away. At
          the gate the yoke comes off, and the neck that carried the world all morning carries
          nothing, steaming, into the yard.
        </p>

        <div className="vespers-colophon" aria-hidden="true">
          <span className="vespers-colophon-rule" />
          <p className="vespers-colophon-l1">SET XIV · DESIGNED BY QWEN 3.8 MAX</p>
          <p className="vespers-colophon-l2" lang="la">EX LIBRIS VESPERTINIS · OX HOURS</p>
          <span className="vespers-colophon-rule" />
        </div>
      </motion.section>
    </div>
  );
}
