import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import './terce.css';

const LEDGER = [
  { value: 214, suffix: '', label: 'furrows turned by the third bell' },
  { value: 310, suffix: ' KG', label: 'draught measured at the yoke-bow' },
  { value: 40, suffix: ' L', label: 'water drunk at the mid-morning slack' },
];

function CountUp({ value, suffix = '' }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setDisplay(value);
      return;
    }
    let raf;
    const start = performance.now();
    const tick = (now) => {
      const t = Math.min((now - start) / 1500, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setDisplay(Math.round(eased * value));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value]);

  return (
    <span className="terce-num" ref={ref}>
      {display.toLocaleString('en-US')}
      {suffix ? <span className="terce-num-affix">{suffix}</span> : null}
    </span>
  );
}

function FieldScene() {
  const furrows = [-360, -250, -140, -30, 80, 190, 300, 410];
  return (
    <svg className="terce-scene-svg" viewBox="0 0 900 620" aria-hidden="true" focusable="false">
      <circle cx="672" cy="128" r="62" fill="#D9A63C" />
      <motion.g
        style={{ originX: '672px', originY: '128px' }}
        animate={{ rotate: 360 }}
        transition={{ duration: 80, repeat: Infinity, ease: 'linear' }}
      >
        {Array.from({ length: 12 }).map((_, i) => (
          <line
            key={i}
            x1="672"
            y1="30"
            x2="672"
            y2="8"
            stroke="#D9A63C"
            strokeWidth="7"
            strokeLinecap="round"
            transform={`rotate(${i * 30} 672 128)`}
          />
        ))}
      </motion.g>
      <path d="M212 96 L228 104 L244 96" fill="none" stroke="#33291A" strokeWidth="3" strokeLinecap="round" />
      <path d="M262 122 L276 129 L290 122" fill="none" stroke="#33291A" strokeWidth="2.6" strokeLinecap="round" />

      <rect x="0" y="308" width="900" height="312" fill="#E3D2A4" />
      <rect x="0" y="300" width="900" height="10" fill="#6A6B3F" opacity="0.75" />
      {furrows.map((dx, i) => (
        <line
          key={i}
          className="terce-furrow"
          x1={450 + dx * 0.16}
          y1="312"
          x2={450 + dx}
          y2="620"
        />
      ))}
      <path d="M408 348 L690 420" stroke="#4A3826" strokeWidth="9" strokeLinecap="round" />

      <motion.g
        animate={{ y: [0, -7, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <path d="M394 466 L398 548 L413 548 L415 464 Z" fill="#241B0F" />
        <path d="M608 466 L612 548 L627 548 L629 464 Z" fill="#241B0F" />
        <path
          d="M306 356 C288 366 270 380 256 398 C244 412 234 428 228 442 C224 452 224 460 230 464 C240 470 252 468 260 460 C272 448 280 436 286 428 C292 438 298 448 306 454 C314 446 318 434 320 424 C326 440 334 452 344 460 L352 470 C354 486 354 502 352 518 L350 548 L366 548 L370 516 C374 498 378 482 386 468 C410 476 440 480 470 480 C530 484 590 480 636 470 C646 484 652 500 654 516 L656 548 L672 548 L674 514 C676 496 680 480 688 466 C700 452 708 434 712 414 C700 396 686 380 664 368 C620 352 540 346 470 348 C420 350 380 352 350 356 C334 358 318 358 306 356 Z"
          fill="#3A2E20"
        />
        <motion.path
          style={{ originX: '712px', originY: '414px' }}
          animate={{ rotate: [0, 9, 0] }}
          transition={{ duration: 2.6, repeat: Infinity, ease: 'easeInOut' }}
          d="M712 414 C726 422 732 440 730 462 C728 486 722 508 712 524 C708 528 702 528 700 522 C708 506 712 488 712 466 C712 446 708 430 702 420 Z"
          fill="#3A2E20"
        />
        <ellipse cx="706" cy="528" rx="10" ry="8" fill="#241B0F" />
        <path d="M300 356 C282 344 262 340 246 346 C240 350 238 356 240 362 C252 356 268 356 282 362 C290 365 296 362 300 358 Z" fill="#D9CBA8" />
        <path d="M312 350 C306 336 308 322 318 314 C324 322 324 336 320 346 C318 350 314 352 312 350 Z" fill="#C4B48C" />
        <path d="M318 354 C328 346 342 346 350 354 C342 362 326 362 318 354 Z" fill="#3A2E20" />
        <circle cx="282" cy="398" r="4" fill="#EFE3C2" />
        <path d="M330 342 C352 328 392 328 412 342 L406 358 C390 346 352 346 336 358 Z" fill="#7A4A22" />
        <path d="M318 366 C300 382 296 406 310 422" fill="none" stroke="#7A4A22" strokeWidth="10" strokeLinecap="round" />
        <path d="M402 350 L414 344 L418 356 L406 362 Z" fill="#4A3826" />
      </motion.g>

      <motion.g
        animate={{ y: [0, -4, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut', delay: 0.2 }}
      >
        <path d="M690 420 L742 448 L726 502 L686 468 Z" fill="#4A3826" />
        <path d="M686 468 L726 502 L716 522 L676 486 Z" fill="#8C8272" />
        <path d="M740 440 L792 348" stroke="#4A3826" strokeWidth="9" strokeLinecap="round" />
        <path d="M752 446 L808 360" stroke="#4A3826" strokeWidth="9" strokeLinecap="round" />
        <path d="M700 470 C720 490 750 502 790 506 L790 540 C740 536 700 518 676 496 Z" fill="#2E2416" opacity="0.85" />
      </motion.g>
    </svg>
  );
}

function ChalkStamp() {
  return (
    <motion.div
      className="terce-stamp"
      initial={{ opacity: 0, scale: 1.5, rotate: -16 }}
      animate={{ opacity: 1, scale: 1, rotate: -8 }}
      transition={{ duration: 0.5, delay: 1.1, ease: 'easeOut' }}
      aria-hidden="true"
    >
      <svg viewBox="0 0 150 150" focusable="false">
        <defs>
          <path id="terce-stamp-arc" d="M22 75 A53 53 0 0 1 128 75" fill="none" />
          <path id="terce-stamp-arc-b" d="M26 84 A49 49 0 0 0 124 84" fill="none" />
        </defs>
        <circle cx="75" cy="75" r="70" fill="none" stroke="currentColor" strokeWidth="3" />
        <circle cx="75" cy="75" r="61" fill="none" stroke="currentColor" strokeWidth="1.4" />
        <text fontSize="12.5" fontWeight="700" letterSpacing="2.4" fill="currentColor">
          <textPath href="#terce-stamp-arc" startOffset="50%" textAnchor="middle">
            SET XIV · OX HOURS
          </textPath>
        </text>
        <text fontSize="9.5" fontWeight="700" letterSpacing="1.8" fill="currentColor">
          <textPath href="#terce-stamp-arc-b" startOffset="50%" textAnchor="middle">
            DESIGNED BY QWEN 3.8 MAX
          </textPath>
        </text>
        <text x="75" y="70" textAnchor="middle" fontSize="15" fontWeight="800" letterSpacing="1" fill="currentColor">
          PASSED
        </text>
        <text x="75" y="88" textAnchor="middle" fontSize="9.5" fontWeight="700" letterSpacing="1.6" fill="currentColor">
          HORA TERTIA
        </text>
      </svg>
    </motion.div>
  );
}

export default function Terce() {
  return (
    <div className="th-terce">
      <header className="terce-masthead">
        <span className="terce-masthead-left">OX HOURS · A WORKING ALMANAC</span>
        <span className="terce-masthead-right" lang="la">FOLIO II — HORA TERTIA</span>
      </header>

      <main className="terce-main">
        <motion.div
          className="terce-scene"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <FieldScene />
        </motion.div>

        <div className="terce-copy">
          <motion.h1
            className="terce-title"
            initial={{ y: '60%', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            TERCE
          </motion.h1>
          <motion.p
            className="terce-hour"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
          >
            09:00 — THE YOKED HOURS
          </motion.p>
          <motion.p
            className="terce-lede"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            The bell has already rung twice. Now the team leans into the bow, the share finds the
            seam, and the field begins to be written — one furrow at a time, in a hand that takes
            all morning. The ox does not hurry. It simply does not stop, and by the third bell the
            acre has turned over in its sleep.
          </motion.p>

          <div className="terce-ledger">
            {LEDGER.map((row, i) => (
              <motion.div
                key={row.label}
                className="terce-row"
                initial={{ opacity: 0, x: 22 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.55, delay: 0.7 + i * 0.14 }}
              >
                <CountUp value={row.value} suffix={row.suffix} />
                <span className="terce-row-label">{row.label}</span>
              </motion.div>
            ))}
          </div>

          <ChalkStamp />
        </div>
      </main>

      <footer className="terce-foot">
        TERCE ENDS WHEN THE BELL SAYS SO · THE PLOUGH RESTS AT THE HEADLAND
      </footer>
    </div>
  );
}
