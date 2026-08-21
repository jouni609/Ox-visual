import { motion } from 'framer-motion';
import './compline.css';

const NIGHT_STARS = [
  { l: 6, t: 12, s: 2, d: 0 },
  { l: 14, t: 28, s: 1.4, d: 1.4 },
  { l: 22, t: 8, s: 2.2, d: 2.6 },
  { l: 31, t: 20, s: 1.2, d: 0.8 },
  { l: 39, t: 10, s: 1.8, d: 3.2 },
  { l: 47, t: 26, s: 1.3, d: 1.9 },
  { l: 55, t: 7, s: 1.6, d: 2.2 },
  { l: 63, t: 18, s: 1.2, d: 0.4 },
  { l: 88, t: 30, s: 1.5, d: 2.8 },
  { l: 94, t: 12, s: 1.8, d: 1.1 },
  { l: 35, t: 36, s: 1.1, d: 3.6 },
  { l: 9, t: 42, s: 1.3, d: 2.0 },
];

function SleepingOx() {
  return (
    <svg className="compline-scene-svg" viewBox="0 0 900 460" aria-hidden="true" focusable="false">
      <path d="M0 380 C200 360 420 356 560 362 C720 368 820 366 900 358 L900 460 L0 460 Z" fill="#10152A" />
      <path d="M700 362 C712 340 736 328 764 330 C792 332 812 348 818 368 L812 372 Z" fill="#0E1326" />
      <motion.g
        style={{ originX: '450px', originY: '380px' }}
        animate={{ scale: [1, 1.014, 1] }}
        transition={{ duration: 5.2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <g transform="translate(100 26)">
          <path
            d="M666 320 C676 332 676 344 664 350 C620 360 560 360 520 354 C516 350 518 344 524 344 C562 350 618 350 656 340 C662 336 664 328 662 322 Z"
            fill="#0F1524"
          />
          <path
            d="M252 322 C236 316 222 306 214 292 C204 276 200 258 204 242 C208 226 218 214 232 208 C252 200 274 202 290 212 C316 190 344 178 376 172 C428 162 492 160 544 170 C596 180 636 202 656 236 C672 262 676 292 668 316 C662 336 648 350 628 356 L300 356 C280 352 262 340 252 322 Z"
            fill="#1A2138"
          />
          <path
            d="M252 322 C238 318 224 308 216 294 C208 280 206 264 212 250 C218 238 230 232 244 234 C260 236 272 246 278 260 C284 274 282 292 272 306 C266 314 258 320 252 322 Z"
            fill="#161C32"
          />
          <path d="M238 236 C228 224 214 218 200 220 C196 224 196 230 200 234 C212 230 224 232 232 240 C235 239 237 238 238 236 Z" fill="#5A628C" />
          <path d="M258 238 C266 230 278 228 286 234 C280 242 268 244 258 238 Z" fill="#161C32" />
          <path d="M234 266 Q243 273 252 266" fill="none" stroke="#8B93BC" strokeWidth="2.4" strokeLinecap="round" />
          <circle cx="216" cy="290" r="2.6" fill="#0B0F1D" />
          <path d="M268 322 C284 330 304 334 324 332" fill="none" stroke="#0F1524" strokeWidth="4" strokeLinecap="round" />
        </g>
      </motion.g>
    </svg>
  );
}

function Moon() {
  return (
    <svg className="compline-moon" viewBox="0 0 200 200" aria-hidden="true" focusable="false">
      <circle cx="100" cy="100" r="60" fill="#E9E4D2" />
      <circle cx="82" cy="84" r="10" fill="#D8D2BC" />
      <circle cx="118" cy="112" r="14" fill="#D8D2BC" />
      <circle cx="112" cy="78" r="6" fill="#D8D2BC" />
      <circle cx="100" cy="100" r="78" fill="none" stroke="#E9E4D2" strokeWidth="1" opacity="0.4" />
      <circle cx="100" cy="100" r="94" fill="none" stroke="#E9E4D2" strokeWidth="0.75" opacity="0.2" />
    </svg>
  );
}

function WatchMark() {
  return (
    <motion.div
      className="compline-watch"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 1.2 }}
      aria-hidden="true"
    >
      <svg viewBox="0 0 150 150" focusable="false">
        <defs>
          <path id="compline-watch-arc" d="M24 75 A51 51 0 0 1 126 75" fill="none" />
          <path id="compline-watch-arc-b" d="M30 86 A45 45 0 0 0 120 86" fill="none" />
        </defs>
        <circle cx="75" cy="75" r="71" fill="none" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="75" cy="75" r="58" fill="none" stroke="currentColor" strokeWidth="0.9" opacity="0.7" />
        <path d="M84 52 A20 20 0 1 0 84 92 A16 16 0 1 1 84 52 Z" fill="currentColor" />
        <text fontSize="10" fontWeight="700" letterSpacing="2" fill="currentColor">
          <textPath href="#compline-watch-arc" startOffset="50%" textAnchor="middle">
            SET XIV · OX HOURS
          </textPath>
        </text>
        <text fontSize="8.2" fontWeight="700" letterSpacing="1.4" fill="currentColor">
          <textPath href="#compline-watch-arc-b" startOffset="50%" textAnchor="middle">
            DESIGNED BY QWEN 3.8 MAX
          </textPath>
        </text>
      </svg>
    </motion.div>
  );
}

export default function Compline() {
  return (
    <div className="th-compline">
      <div className="compline-sky" aria-hidden="true">
        {NIGHT_STARS.map((s, i) => (
          <span
            key={i}
            className="compline-star"
            style={{ left: `${s.l}%`, top: `${s.t}%`, width: s.s, height: s.s, animationDelay: `${s.d}s` }}
          />
        ))}
        <Moon />
        {[0, 1, 2].map((i) => (
          <motion.span
            key={i}
            className="compline-firefly"
            style={{ left: `${18 + i * 26}%` }}
            animate={{ y: [0, -46 - i * 10], opacity: [0, 0.85, 0] }}
            transition={{ duration: 7.5 + i * 1.3, repeat: Infinity, delay: i * 2.4, ease: 'easeInOut' }}
          />
        ))}
      </div>

      <main className="compline-main">
        <motion.header
          className="compline-head"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <p className="compline-kicker">THE BOOK OF HOURS OF THE OX · FOLIO V</p>
          <h1 className="compline-title">Compline</h1>
          <p className="compline-rubric">21:00 — the night office, when the work is done</p>
        </motion.header>

        <motion.div
          className="compline-scene"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.4, delay: 0.3 }}
        >
          <SleepingOx />
          <motion.span
            className="compline-breath"
            aria-hidden="true"
            animate={{ opacity: [0, 0.4, 0], x: [0, -18], y: [0, -9], scale: [0.6, 1.35] }}
            transition={{ duration: 5.2, repeat: Infinity, ease: 'easeOut' }}
          />
        </motion.div>

        <motion.section
          className="compline-words"
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="compline-verse" lang="la">
            In pace in idipsum dormiam, et requiescam.
          </p>
          <p className="compline-verse-en">I will lie down and sleep in peace.</p>
          <p className="compline-lede">
            The yard is shut, the yoke hangs on its peg, and the day's long arithmetic is settled.
            The ox lies over on the good side, folds its head back to its flank, and breathes slow
            and deep, the way bellows breathe when nobody is asking anything of them. The moon keeps
            the only watch that is kept. Whatever tomorrow will pull, tonight pulls nothing.
          </p>
          <WatchMark />
        </motion.section>
      </main>
    </div>
  );
}
