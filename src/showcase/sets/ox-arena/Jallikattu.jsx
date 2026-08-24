import { motion } from 'framer-motion'
import './jallikattu.css'

const GOPURAM_X = [90, 330, 570, 810, 1050]
const GOPURAM_H = [84, 104, 128, 98, 80]

function NeckGarland() {
  const beads = []
  for (let i = 0; i <= 10; i += 1) {
    const t = i / 10
    const x = 500 + 140 * t
    const y = 296 + 12 * t + 2 * (1 - t) * t * 24
    beads.push([x, y, i % 3])
  }
  return (
    <g>
      {beads.map(([x, y, k], i) => (
        <circle key={i} cx={x} cy={y} r={6.5} fill={k === 0 ? '#C23B22' : k === 1 ? '#F2A93B' : '#FBF0D8'} />
      ))}
      <circle cx="640" cy="312" r="12" fill="#F2A93B" />
      <circle cx="631" cy="304" r="4.5" fill="#E8951D" />
      <circle cx="649" cy="304" r="4.5" fill="#E8951D" />
      <circle cx="640" cy="320" r="4.5" fill="#E8951D" />
    </g>
  )
}

function ZebuArt() {
  return (
    <svg className="ox-arena-jallikattu-art" viewBox="0 0 1000 640" aria-hidden="true" focusable="false">
      <defs>
        <g id="ox-arena-jallikattu-zebu">
          <path d="M556 186 C520 236 490 262 462 274 C420 292 380 304 342 312 C306 320 286 326 280 340 C274 354 284 364 300 366 C346 376 396 384 446 392 C506 402 562 410 610 416 C650 420 676 414 690 398 C702 384 700 366 688 354 C668 338 644 330 616 326 C566 320 520 310 486 298 C470 292 460 286 458 278 C476 258 500 228 520 202 C534 186 544 178 556 186 Z" />
          <path d="M470 240 C520 226 570 224 616 234 C656 242 682 258 700 278 C716 296 720 312 712 322 C700 330 682 330 664 324 C654 316 648 306 646 294 C640 300 632 310 622 316 C596 336 560 346 520 344 C488 342 470 332 462 318 C462 292 464 266 470 240 Z" />
          <path d="M636 326 C650 356 648 386 630 404 C618 414 604 410 600 394 C594 370 600 344 614 328 Z" />
          <path d="M672 264 C722 238 780 210 836 188 C846 210 816 230 770 248 C730 262 694 270 672 270 Z" />
          <path d="M678 250 C730 220 790 192 848 172 C856 194 828 212 780 230 C742 244 700 254 678 258 Z" />
          <path d="M660 252 C664 276 660 296 650 310 C644 316 636 314 638 304 C644 284 648 266 660 252 Z" />
          <path d="M430 380 C470 406 512 432 552 456 C562 462 570 458 566 448 C528 424 486 398 448 374 Z" />
          <path d="M380 384 C414 416 446 448 474 478 C480 488 490 486 488 476 C460 448 428 416 398 388 Z" />
          <path d="M600 400 C566 430 534 462 506 490 C500 500 490 498 492 488 C520 458 552 428 582 402 Z" />
          <path d="M640 396 C612 430 586 464 564 494 C558 504 548 502 550 492 C572 462 598 428 624 398 Z" />
          <path d="M648 322 C620 340 592 364 572 392 C562 408 548 404 552 390 C572 362 596 338 630 316 Z" />
          <path d="M556 394 C544 414 536 430 534 444 C532 452 540 454 544 446 C550 432 556 412 562 396 Z" />
        </g>
      </defs>

      <rect x="0" y="0" width="1000" height="640" fill="#FBF0D8" />

      <g>
        <rect x="150" y="190" width="18" height="400" fill="#7A4A28" />
        <rect x="232" y="190" width="18" height="400" fill="#7A4A28" />
        <rect x="110" y="170" width="260" height="26" fill="#7A4A28" />
        <rect x="110" y="170" width="260" height="8" fill="#5C1F1F" />
        {Array.from({ length: 13 }, (_, i) => (
          <circle key={i} cx={118 + i * 21} cy={204} r={5} fill={i % 2 === 0 ? '#E8951D' : '#C23B22'} />
        ))}
        <rect x="140" y="196" width="10" height="120" fill="#8A5630" />
        <rect x="242" y="196" width="10" height="120" fill="#8A5630" />
      </g>

      <motion.g
        style={{ transformBox: 'fill-box', transformOrigin: 'center' }}
        animate={{ y: [0, -7, 0], rotate: [0, 1.4, 0] }}
        transition={{ duration: 1.7, repeat: Infinity, ease: 'easeInOut' }}
      >
        <use href="#ox-arena-jallikattu-zebu" transform="translate(560 330) scale(1.05) translate(-560 -330)" fill="#5C1F1F" />
        <use href="#ox-arena-jallikattu-zebu" fill="#E8951D" />
        <circle cx="838" cy="190" r="7" fill="#C23B22" />
        <circle cx="850" cy="174" r="6" fill="#C23B22" />
        <ellipse cx="559" cy="455" rx="14" ry="6" fill="#5C1F1F" transform="rotate(24 559 455)" />
        <ellipse cx="481" cy="482" rx="13" ry="6" fill="#5C1F1F" transform="rotate(20 481 482)" />
        <ellipse cx="499" cy="494" rx="12" ry="5.5" fill="#5C1F1F" transform="rotate(-16 499 494)" />
        <ellipse cx="557" cy="498" rx="12" ry="5.5" fill="#5C1F1F" transform="rotate(-14 557 498)" />
        <path d="M686 292 Q678 284 670 288 Q678 296 686 292 Z" fill="#5C1F1F" />
        <circle cx="708" cy="316" r="3.5" fill="#5C1F1F" />
        <path d="M708 326 C686 332 664 330 648 322" fill="none" stroke="#5C1F1F" strokeWidth="3" strokeLinecap="round" />
        <path d="M516 208 C528 196 542 192 552 198" fill="none" stroke="#C23B22" strokeWidth="3.5" strokeLinecap="round" />
        <path d="M506 224 C518 212 532 208 542 214" fill="none" stroke="#C23B22" strokeWidth="3.5" strokeLinecap="round" />
        <circle cx="420" cy="300" r="5" fill="#FBF0D8" />
        <circle cx="480" cy="306" r="4" fill="#FBF0D8" />
        <circle cx="560" cy="310" r="5" fill="#FBF0D8" />
        <circle cx="620" cy="308" r="4" fill="#FBF0D8" />
        <circle cx="350" cy="330" r="4" fill="#FBF0D8" />
        <path d="M640 340 l 10 8 l -10 8 l -10 -8 Z" fill="#FBF0D8" />
        <NeckGarland />
      </motion.g>

      <motion.circle cx="580" cy="470" r="16" fill="#F7C948" opacity="0.85" style={{ transformBox: 'fill-box', transformOrigin: 'center' }} animate={{ opacity: [0.85, 0.35, 0.85], scale: [1, 1.25, 1] }} transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }} />
      <motion.circle cx="490" cy="505" r="13" fill="#FBF0D8" opacity="0.9" style={{ transformBox: 'fill-box', transformOrigin: 'center' }} animate={{ opacity: [0.9, 0.4, 0.9], scale: [1, 1.3, 1] }} transition={{ duration: 2.6, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }} />
      <motion.circle cx="640" cy="495" r="12" fill="#F7C948" opacity="0.8" style={{ transformBox: 'fill-box', transformOrigin: 'center' }} animate={{ opacity: [0.8, 0.3, 0.8], scale: [1, 1.3, 1] }} transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut', delay: 0.9 }} />
      <motion.circle cx="520" cy="520" r="11" fill="#FBF0D8" opacity="0.85" style={{ transformBox: 'fill-box', transformOrigin: 'center' }} animate={{ opacity: [0.85, 0.35, 0.85], scale: [1, 1.28, 1] }} transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut', delay: 1.3 }} />
    </svg>
  )
}

function GopuramStrip() {
  return (
    <svg className="ox-arena-jallikattu-gopuram" viewBox="0 0 1200 300" aria-hidden="true" focusable="false">
      <rect width="1200" height="300" fill="#F2A93B" />
      {GOPURAM_X.map((x, i) => {
        const h = GOPURAM_H[i]
        const tier2 = 196 - h
        return (
          <g key={x} transform={`translate(${x} 0)`}>
            <rect x="-96" y="222" width="192" height="78" fill="#5C1F1F" />
            <rect x="-74" y="196" width="148" height="26" fill="#5C1F1F" />
            <rect x="-52" y={tier2} width="104" height="24" fill="#5C1F1F" />
            <rect x="-30" y={tier2 - 20} width="60" height="20" fill="#5C1F1F" />
            <circle cx="0" cy={tier2 - 28} r="7" fill="#FBF0D8" />
            <circle cx="-66" cy="248" r="4" fill="#FBF0D8" opacity="0.85" />
            <circle cx="0" cy="260" r="5" fill="#FBF0D8" opacity="0.85" />
            <circle cx="66" cy="248" r="4" fill="#FBF0D8" opacity="0.85" />
            <rect x="-10" y="182" width="20" height="34" fill="#5C1F1F" />
          </g>
        )
      })}
    </svg>
  )
}

function KolamStrip({ uid }) {
  return (
    <svg className="ox-arena-jallikattu-kolam" viewBox="0 0 1200 28" aria-hidden="true" focusable="false">
      <defs>
        <pattern id={`ox-arena-jallikattu-kolam-${uid}`} width="22" height="28" patternUnits="userSpaceOnUse">
          <circle cx="4" cy="4" r="2.6" fill="#5C1F1F" opacity="0.4" />
          <circle cx="15" cy="18" r="2.6" fill="#5C1F1F" opacity="0.4" />
        </pattern>
      </defs>
      <rect width="1200" height="28" fill={`url(#ox-arena-jallikattu-kolam-${uid})`} />
    </svg>
  )
}

function GarlandStrand({ delay, height }) {
  return (
    <motion.div
      className="ox-arena-jallikattu-strand"
      style={{ height, transformOrigin: 'top center' }}
      animate={{ rotate: [-4, 3.5, -4] }}
      transition={{ duration: 4.4, repeat: Infinity, ease: 'easeInOut', delay }}
      aria-hidden="true"
    >
      <svg viewBox="0 0 60 260" preserveAspectRatio="xMidYMin meet">
        {Array.from({ length: 11 }, (_, i) => (
          <circle key={i} cx="30" cy={16 + i * 22} r="7" fill={i % 3 === 0 ? '#E8951D' : i % 3 === 1 ? '#C23B22' : '#F7C948'} />
        ))}
        <ellipse cx="20" cy="8" rx="6" ry="10" fill="#2E6B4F" transform="rotate(24 20 8)" />
        <ellipse cx="40" cy="8" rx="6" ry="10" fill="#2E6B4F" transform="rotate(-24 40 8)" />
        <g transform="translate(30 250)">
          <circle cx="-10" cy="0" r="6" fill="#E8951D" />
          <circle cx="10" cy="0" r="6" fill="#E8951D" />
          <circle cx="0" cy="-10" r="6" fill="#E8951D" />
          <circle cx="0" cy="10" r="6" fill="#E8951D" />
          <circle cx="0" cy="0" r="6.5" fill="#C23B22" />
        </g>
      </svg>
    </motion.div>
  )
}

export default function Jallikattu() {
  return (
    <div className="th-ox-arena ox-arena-jallikattu">
      <div className="ox-arena-jallikattu-skyband">
        <GopuramStrip />
      </div>

      <div className="ox-arena-jallikattu-strand-layer" aria-hidden="true">
        <GarlandStrand delay={0} height={230} />
        <GarlandStrand delay={0.8} height={270} />
        <GarlandStrand delay={1.5} height={200} />
      </div>

      <KolamStrip uid="top" />

      <header className="ox-arena-jallikattu-head">
        <p className="ox-arena-jallikattu-ta-kicker" lang="ta">பொங்கல் திருநாள் · அலங்காநல்லூர் · மதுரை</p>
        <p className="ox-arena-jallikattu-en-kicker">PONGAL FESTIVAL · ALANGANALLUR · MADURAI</p>
        <h1 className="ox-arena-jallikattu-h1">
          <span className="ox-arena-jallikattu-h1-ta" lang="ta">ஜல்லிக்கட்டு</span>
          <span className="ox-arena-jallikattu-h1-en">JALLIKATTU</span>
        </h1>
        <p className="ox-arena-jallikattu-standfirst">
          On Pongal morning the village opens the vaadi vaasal — the narrow gate — and lets the
          bull out. On the far side, men with nothing but nerve and the rules of the game wait to
          grip its hump and hold on.
        </p>
      </header>

      <section className="ox-arena-jallikattu-stage" aria-label="A painted zebu charges through the vaadi vaasal gate, garlanded and dust-kicked">
        <ZebuArt />
      </section>

      <section className="ox-arena-jallikattu-cards" aria-label="The gate, the bull and the tamer">
        <article className="ox-arena-jallikattu-card">
          <p className="ox-arena-jallikattu-card-ta" lang="ta">வாடி வாசல்</p>
          <p className="ox-arena-jallikattu-card-name">THE GATE</p>
          <p className="ox-arena-jallikattu-card-text">
            Vaadi vaasal, the village gate. The bull is released through it at dawn and the tamers
            wait on the far side. Nothing else about the arena is fixed — the gate is sacred.
          </p>
        </article>
        <article className="ox-arena-jallikattu-card">
          <p className="ox-arena-jallikattu-card-ta" lang="ta">காளை</p>
          <p className="ox-arena-jallikattu-card-name">THE BULL</p>
          <p className="ox-arena-jallikattu-card-text">
            A fighting bull of the Pulikulam or Kangayam lines, reared free in scrub pasture:
            short, dense, hot-tempered, with horns you do not argue with.
          </p>
        </article>
        <article className="ox-arena-jallikattu-card">
          <p className="ox-arena-jallikattu-card-ta" lang="ta">பிடிப்பவர்</p>
          <p className="ox-arena-jallikattu-card-name">THE TAMER</p>
          <p className="ox-arena-jallikattu-card-text">
            To win, a man must grip the hump and travel with the bull — fifteen metres, some say
            thirty — without falling, or the bull takes the prize.
          </p>
        </article>
      </section>

      <KolamStrip uid="bottom" />

      <footer className="ox-arena-jallikattu-banner">
        <div className="ox-arena-jallikattu-greeting">
          <span className="ox-arena-jallikattu-greeting-ta" lang="ta">பொங்கல் வாழ்த்துக்கள்</span>
          <span className="ox-arena-jallikattu-greeting-en">HAPPY PONGAL · 14–17 JANUARY · MADURAI</span>
        </div>
        <div className="ox-arena-jallikattu-stamp" aria-label="Set signature: SET XVII · DESIGNED BY DEEPSEEK V4 PRO">
          <span className="ox-arena-jallikattu-stamp-ta" lang="ta">அங்கீகரிக்கப்பட்டது</span>
          <span className="ox-arena-jallikattu-stamp-sig">SET XVII · DESIGNED BY DEEPSEEK V4 PRO</span>
        </div>
      </footer>
    </div>
  )
}
