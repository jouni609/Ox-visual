import { motion } from 'framer-motion';
import './sext.css';

const OX_BODY =
  'M318 232 C300 244 284 260 270 280 C256 300 244 322 236 344 C228 362 222 378 220 390 ' +
  'C218 400 222 406 232 406 C244 406 254 400 260 392 C268 380 274 366 278 354 ' +
  'C284 364 290 372 298 376 C306 366 310 352 312 340 C320 352 330 360 342 364 ' +
  'C346 380 348 396 348 412 L348 442 L364 442 L366 410 C368 394 372 380 380 368 ' +
  'C404 376 434 380 464 380 C524 384 584 380 630 370 C640 384 646 400 648 416 ' +
  'L648 442 L664 442 L666 414 C668 396 672 380 680 366 C692 352 700 334 704 314 ' +
  'C692 296 678 282 656 272 C612 256 532 250 462 252 C412 254 372 254 342 250 ' +
  'C330 248 322 240 318 232 Z';

function NoonScene() {
  return (
    <svg
      className="sext-stage-svg"
      viewBox="0 0 1000 560"
      preserveAspectRatio="xMidYMax slice"
      aria-hidden="true"
      focusable="false"
    >
      <rect x="0" y="0" width="1000" height="560" fill="#FAF4E6" />
      <circle cx="790" cy="92" r="58" fill="#F3E3B2" />
      <circle cx="790" cy="92" r="86" fill="none" stroke="#EBD48F" strokeWidth="2" opacity="0.8" />
      <circle cx="790" cy="92" r="120" fill="none" stroke="#EBD48F" strokeWidth="1" opacity="0.45" />

      <rect x="0" y="372" width="1000" height="30" fill="#D9C49A" />
      <path d="M60 372 L66 356 L72 372 Z" fill="#8F8A4E" />
      <path d="M84 372 L89 360 L94 372 Z" fill="#8F8A4E" />
      <path d="M904 372 L910 354 L916 372 Z" fill="#8F8A4E" />
      <path d="M926 372 L931 361 L936 372 Z" fill="#8F8A4E" />
      <rect x="0" y="400" width="1000" height="160" fill="#2E8A93" />
      <rect x="0" y="400" width="1000" height="10" fill="#3D9BA3" />

      <g transform="translate(0 800) scale(1 -1)" opacity="0.16">
        <path d={OX_BODY} fill="#0E2E33" />
      </g>

      <motion.g
        animate={{ y: [0, 3, 0] }}
        transition={{ duration: 3.4, repeat: Infinity, ease: 'easeInOut' }}
      >
        <path d="M388 368 L392 442 L406 442 L408 366 Z" fill="#573D2C" />
        <path d="M604 368 L606 442 L620 442 L622 366 Z" fill="#573D2C" />
        <path d={OX_BODY} fill="#6E4F3A" />
        <path
          d="M704 314 C718 322 724 342 722 366 C720 390 714 412 704 428 C700 432 694 432 692 426 C700 410 704 392 704 370 C704 350 700 334 694 322 Z"
          fill="#6E4F3A"
        />
        <ellipse cx="698" cy="432" rx="10" ry="8" fill="#573D2C" />
        <path
          d="M312 230 C296 218 276 214 260 220 C254 224 252 230 254 236 C266 230 282 231 296 238 C304 241 310 237 312 232 Z"
          fill="#E8DCC0"
        />
        <path d="M324 224 C318 210 320 196 330 188 C336 196 336 210 332 220 C330 224 326 226 324 224 Z" fill="#D8CAAA" />
        <path d="M330 228 C340 220 354 220 362 228 C354 236 338 236 330 228 Z" fill="#6E4F3A" />
        <circle cx="296" cy="276" r="4" fill="#F4EEDC" />
      </motion.g>

      <circle className="sext-ripple" cx="232" cy="406" r="14" style={{ animationDelay: '0s' }} />
      <circle className="sext-ripple" cx="232" cy="406" r="14" style={{ animationDelay: '1.6s' }} />
      <circle className="sext-ripple" cx="232" cy="406" r="14" style={{ animationDelay: '3.2s' }} />

      <rect className="sext-glint" x="120" y="432" width="150" height="5" rx="2.5" style={{ animationDelay: '0.4s' }} />
      <rect className="sext-glint" x="420" y="470" width="190" height="5" rx="2.5" style={{ animationDelay: '1.7s' }} />
      <rect className="sext-glint" x="700" y="440" width="140" height="5" rx="2.5" style={{ animationDelay: '2.9s' }} />
      <rect className="sext-glint" x="540" y="510" width="170" height="5" rx="2.5" style={{ animationDelay: '0.9s' }} />

      <g>
        <path d="M846 400 L846 330" stroke="#1E3438" strokeWidth="5" strokeLinecap="round" />
        <path d="M862 400 L862 336" stroke="#1E3438" strokeWidth="5" strokeLinecap="round" />
        <path d="M854 336 C846 300 852 278 866 268 C872 264 878 266 880 272 C874 272 870 276 868 282 C864 292 866 314 868 336 Z" fill="#3E5C60" />
        <path d="M866 268 L896 260 L868 278 Z" fill="#D9A63C" />
        <circle cx="872" cy="270" r="2.4" fill="#0E2E33" />
      </g>
    </svg>
  );
}

function Willow() {
  return (
    <motion.svg
      className="sext-willow"
      viewBox="0 0 220 260"
      aria-hidden="true"
      focusable="false"
      style={{ originX: '100%', originY: '0%' }}
      animate={{ rotate: [-2.5, 2, -2.5] }}
      transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
    >
      <path d="M210 8 C170 40 130 78 106 128 C96 150 92 172 92 196" fill="none" stroke="#7A7C46" strokeWidth="7" strokeLinecap="round" />
      <path d="M160 46 C150 82 146 116 148 150" fill="none" stroke="#7A7C46" strokeWidth="5" strokeLinecap="round" />
      <path d="M120 96 C112 128 110 158 114 190" fill="none" stroke="#7A7C46" strokeWidth="5" strokeLinecap="round" />
      <path d="M176 34 L168 74 L160 36 Z" fill="#8F8A4E" />
      <path d="M150 78 L142 118 L134 80 Z" fill="#8F8A4E" />
      <path d="M128 122 L120 162 L112 124 Z" fill="#8F8A4E" />
      <path d="M104 168 L96 208 L88 170 Z" fill="#8F8A4E" />
    </motion.svg>
  );
}

function Chop() {
  return (
    <motion.div
      className="sext-chop"
      initial={{ opacity: 0, scale: 0.8, rotate: 6 }}
      animate={{ opacity: 1, scale: 1, rotate: -4 }}
      transition={{ duration: 0.5, delay: 0.9, ease: 'easeOut' }}
      aria-hidden="true"
    >
      <svg viewBox="0 0 110 110" focusable="false">
        <rect x="4" y="4" width="102" height="102" rx="10" fill="none" stroke="currentColor" strokeWidth="3" />
        <path d="M38 34 C30 22 30 12 40 8 C44 14 44 24 42 30 Z" fill="currentColor" />
        <path d="M72 34 C80 22 80 12 70 8 C66 14 66 24 68 30 Z" fill="currentColor" />
        <path d="M40 30 C46 24 64 24 70 30 C74 40 74 52 68 60 C62 68 48 68 42 60 C36 52 36 40 40 30 Z" fill="currentColor" />
        <circle cx="49" cy="44" r="2.6" fill="#FAF4E6" />
        <circle cx="61" cy="44" r="2.6" fill="#FAF4E6" />
        <text x="55" y="84" textAnchor="middle" fontSize="10.5" fontWeight="800" letterSpacing="1" fill="currentColor">
          SET XIV
        </text>
        <text x="55" y="97" textAnchor="middle" fontSize="6.4" fontWeight="700" letterSpacing="0.6" fill="currentColor">
          QWEN 3.8 MAX
        </text>
      </svg>
    </motion.div>
  );
}

export default function Sext() {
  return (
    <div className="th-sext">
      <header className="sext-top">
        <div className="sext-top-copy">
          <p className="sext-kicker">THE BOOK OF HOURS OF THE OX · FOLIO III</p>
          <h1 className="sext-title">Sext</h1>
          <p className="sext-sub">12:00 — water at noon</p>
        </div>
        <div className="sext-temp" aria-hidden="true">
          <span className="sext-temp-num">34°</span>
          <span className="sext-temp-label">IN THE SHADE</span>
        </div>
      </header>

      <div className="sext-stage">
        <NoonScene />
        <Willow />
      </div>

      <motion.section
        className="sext-card"
        initial={{ opacity: 0, y: 34 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="sext-card-copy">
          <p className="sext-rubric" lang="la">Ad fontem, in meridie.</p>
          <p className="sext-lede">
            The plough stands unploughed at the headland while the heat owns the field. Down at the
            ford the ox wades in to its knees, lowers its great head, and drinks the sky out of the
            water. Rings run out from its muzzle and come to nothing on the far bank. A heron keeps
            the only appointment that matters — standing still, and waiting for the cool of the day.
          </p>
        </div>
        <Chop />
      </motion.section>

      <footer className="sext-foot">SEXT KEEPS THE HERD AT WATER UNTIL THE SHADOWS LENGTHEN</footer>
    </div>
  );
}
