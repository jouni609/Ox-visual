import { useEffect, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import './zubr.css'

const BODY =
  'M198 322C204 270 214 218 228 186C218 172 222 160 238 158C258 154 282 160 294 176C318 160 352 150 392 148C450 146 520 176 592 214C640 228 674 244 688 290C696 330 702 380 704 420C706 450 700 480 692 500C690 520 700 528 704 540L700 640L708 644L712 656L644 656L650 644L654 556C648 532 638 516 624 506C604 488 584 478 560 474C520 482 470 486 420 482C380 478 346 470 322 462L316 480L314 540L314 640L322 644L326 656L262 656L268 644L274 640L272 540L270 480C266 452 270 424 282 396C294 380 306 366 312 350C300 352 290 356 282 364C268 376 250 378 234 372C216 364 204 348 198 322Z'

const FAR_BIRCHES = [
  [470, 16],
  [548, 22],
  [612, 14],
  [700, 20],
  [1140, 24],
]
const NEAR_BIRCHES = [
  [396, 34, 3],
  [486, 26, 7],
]
const LENTICELS = Array.from({ length: 26 }, (_, i) => ({ y: 30 + i * 26 + ((i * 17) % 11), w: 6 + ((i * 7) % 13), o: (i * 13) % 18 }))
const SNOW = Array.from({ length: 22 }, (_, i) => ({ x: 20 + ((i * 173) % 1160), s: 1.6 + (i % 4) * 0.9, d: 12 + (i % 7) * 3, delay: (i % 9) * 1.7, drift: i % 2 ? 26 : -22 }))

function Birch({ x, w, seed, tone, mark, blur }) {
  return (
    <g filter={blur ? 'url(#ox-heft-zubr-blur)' : undefined}>
      <rect x={x} y={-20} width={w} height={730} rx={w / 2} fill={tone} />
      <rect x={x + w * 0.62} y={-20} width={w * 0.38} height={730} fill="#c9d0cc" opacity="0.55" />
      {LENTICELS.filter((_, i) => (i + seed) % 2 === 0).map((l, i) => (
        <rect key={i} x={x + 3 + ((l.o + seed * 5) % Math.max(4, w - l.w - 6))} y={l.y} width={l.w} height={3.2} rx={1.6} fill={mark} />
      ))}
      <path d={`M${x + w / 2} 40C${x + w / 2 - 30} 14 ${x + w / 2 - 70} 4 ${x + w / 2 - 110} -6M${x + w / 2} 90C${x + w / 2 + 34} 60 ${x + w / 2 + 70} 46 ${x + w / 2 + 120} 30`} fill="none" stroke={tone} strokeWidth="5" strokeLinecap="round" />
      <path d={`M${x + w / 2 - 110} -6L${x + w / 2 - 150} -30M${x + w / 2 + 120} 30L${x + w / 2 + 168} 8`} fill="none" stroke={tone} strokeWidth="3" strokeLinecap="round" />
    </g>
  )
}

function Wisent({ still }) {
  const loop = (animate, transition) => (still ? {} : { animate, transition })
  return (
    <g transform="translate(380 40)">
      <ellipse cx="450" cy="664" rx="290" ry="15" fill="#aeb9b6" opacity="0.55" />
      <g stroke="#120d0a" strokeWidth="3" strokeLinejoin="round" strokeLinecap="round">
        <path fill="#3a2e27" d="M364 440L360 540L356 640L364 644L368 656L306 656L312 644L316 640L312 540L306 440Z" />
        <path fill="#6b4d3b" d="M308 570L360 570L358 640L310 640Z" stroke="none" />
        <path fill="#4a352a" d="M560 466C584 484 600 500 606 548L598 640L594 644L590 656L648 656L650 644L646 640L640 560C650 548 654 536 648 522C640 502 640 480 640 450Z" />
        <path fill="#6b4d3b" d="M596 572L644 572L644 640L596 640Z" stroke="none" />
        <path fill="#4a352a" d="M636 236C650 300 668 380 676 450C680 480 674 500 668 516C660 508 656 480 654 450C648 380 638 300 628 250Z" />
        <path fill="#120d0a" d="M664 470C654 496 654 540 664 568C676 580 690 572 692 550C694 520 684 490 676 470Z" />
        <path fill="#4a3c33" d="M224 168C210 142 204 110 214 84C219 70 230 63 240 68C238 94 244 130 256 166Z" />
        <path fill="#bdb2a6" d="M214 86C217 77 223 70 230 67C228 77 230 88 233 100Z" />
        <path fill="#5c4b40" d="M236 170C226 142 226 110 236 84C241 70 252 63 262 68C259 94 262 130 272 168Z" />
        <path fill="#d9d0c6" d="M236 88C239 78 245 71 253 68C251 79 251 90 253 102Z" />
        <path fill="#4a3d36" d="M268 184C292 178 314 194 318 218C294 224 272 210 264 192Z" />
        <motion.path
          fill="#3a2e27"
          {...loop({ scale: [1, 1.012, 1] }, { duration: 6.5, ease: 'easeInOut', repeat: Infinity })}
          style={{ transformBox: 'fill-box', transformOrigin: '50% 100%' }}
          d={BODY}
        />
      </g>

      <clipPath id="ox-heft-zubr-body">
        <path d={BODY} />
      </clipPath>
      <g clipPath="url(#ox-heft-zubr-body)">
        <path fill="#6b4a38" d="M540 196C590 208 640 224 682 248C698 280 704 340 706 400C708 440 702 480 694 502C680 490 650 480 620 476C590 470 560 462 548 446C534 400 530 300 540 196Z" />
        <path fill="#5a4032" d="M300 400C360 430 470 440 560 452C600 458 640 468 670 482L680 560L280 560Z" opacity="0.6" />
        <path fill="#241d19" d="M198 322C204 270 214 218 228 186C218 172 222 160 238 158C258 154 282 160 294 176C302 184 306 196 304 210C296 250 290 300 286 340C284 356 290 364 284 372C270 384 250 384 234 376C216 366 204 348 198 322Z" />
        <path fill="#1a1411" d="M294 176C318 160 352 150 392 148C450 146 520 176 592 214C560 222 526 224 496 216C482 232 470 248 456 262L446 240L434 266L420 242L408 270L394 244L382 274L368 246L356 278L342 248L330 282L316 252L304 288L292 256C288 292 284 322 284 344C276 340 272 328 272 314C272 280 280 236 294 196Z" />
        <path fill="#7a6456" d="M224 182C232 174 242 172 248 178C244 200 238 222 232 244C224 248 218 246 216 240C216 220 219 200 224 182Z" opacity="0.85" />
      </g>
      <g stroke="#120d0a" strokeWidth="3" strokeLinejoin="round" strokeLinecap="round">
        <path fill="#120d0a" d="M226 362C246 378 268 384 286 372C302 360 312 348 318 336C330 356 332 382 322 404C314 418 304 430 294 442L280 426L268 456L254 430L240 450L226 404Z" />
        <path fill="#7f7168" d="M200 322C210 318 220 324 224 336L226 350C222 360 214 366 204 362C198 354 196 336 200 322Z" />
        <path fill="none" strokeWidth="2.4" d="M206 362C218 368 230 368 240 362" />
        <path fill="#120d0a" d="M270 630L274 640L268 644L264 656L326 656L320 644L316 640L316 630Z" />
        <path fill="#120d0a" d="M630 630L628 644L626 656L710 656L706 644L702 630Z" />
        <path fill="#120d0a" d="M356 630L364 644L368 656L306 656L312 644L316 640L316 630Z" />
        <path fill="#120d0a" d="M598 630L594 644L592 656L648 656L648 644L646 630Z" />
      </g>
      <ellipse cx="220" cy="240" rx="15" ry="12" fill="none" stroke="#8a776a" strokeWidth="2.4" />
      <ellipse cx="220" cy="240" rx="10" ry="8" fill="#070504" />
      <circle cx="216" cy="237" r="2.8" fill="#f3efe6" />
      <g fill="none" stroke="#0e0a08" strokeWidth="2" strokeLinecap="round" opacity="0.5">
        <path d="M500 180L512 198M532 192L546 210M564 206L578 224" />
        <path d="M472 230L484 252M488 222L500 246M456 240L468 262" />
        <path d="M600 490L598 506M566 486L566 502M530 486L530 500" />
        <path d="M640 290L632 312M614 270L608 294" />
        <path d="M262 470L264 500M272 460L274 492M322 480L320 512" />
      </g>
      {!still
        ? [0, 1].map((k) => (
            <motion.ellipse
              key={k}
              cx="170"
              cy="350"
              rx="30"
              ry="16"
              fill="#ffffff"
              initial={{ opacity: 0, scale: 0.4, x: 0, y: 0 }}
              animate={{ opacity: [0, 0.72, 0], scale: [0.4, 1.9], x: [0, -70], y: [0, -34] }}
              transition={{ duration: 4.2, times: [0, 0.35, 1], ease: 'easeOut', repeat: Infinity, delay: k * 2.1 }}
              style={{ transformBox: 'fill-box', transformOrigin: '50% 50%' }}
            />
          ))
        : null}
    </g>
  )
}

function useCompact() {
  const [compact, setCompact] = useState(() => typeof window !== 'undefined' && window.matchMedia('(max-width: 820px)').matches)
  useEffect(() => {
    const mq = window.matchMedia('(max-width: 820px)')
    const onChange = () => setCompact(mq.matches)
    onChange()
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])
  return compact
}

export default function Zubr() {
  const still = useReducedMotion()
  const compact = useCompact()
  const loop = (animate, transition) => (still ? {} : { animate, transition })

  return (
    <main className="th-ox-heft ox-heft-zubr">
      <svg
        className={`ox-heft-zubr-scene${compact ? ' is-compact' : ''}`}
        viewBox={compact ? '430 70 760 700' : '0 0 1200 760'}
        preserveAspectRatio="xMidYMax meet"
        role="img"
        aria-label="A wisent, the European bison, standing in winter fog among birch trunks: dark shaggy shoulders, a high hump, a beard, and short horns that curve upward"
      >
        <defs>
          <filter id="ox-heft-zubr-blur" x="-10%" y="-10%" width="120%" height="120%">
            <feGaussianBlur stdDeviation="3" />
          </filter>
          <linearGradient id="ox-heft-zubr-fog" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#ffffff" stopOpacity="0" />
            <stop offset="0.5" stopColor="#ffffff" stopOpacity="0.82" />
            <stop offset="1" stopColor="#ffffff" stopOpacity="0" />
          </linearGradient>
        </defs>

        {FAR_BIRCHES.map(([x, w]) => (
          <Birch key={x} x={x} w={w} seed={x} tone="#dfe5e1" mark="#b3bcb8" blur />
        ))}
        <motion.rect
          x="-200"
          y="120"
          width="1600"
          height="150"
          fill="url(#ox-heft-zubr-fog)"
          {...loop({ x: [0, 46, 0] }, { duration: 19, ease: 'easeInOut', repeat: Infinity })}
        />
        <motion.rect
          x="-200"
          y="330"
          width="1600"
          height="170"
          fill="url(#ox-heft-zubr-fog)"
          opacity="0.9"
          {...loop({ x: [0, -62, 0] }, { duration: 27, ease: 'easeInOut', repeat: Infinity })}
        />
        <path d="M-20 700C200 684 420 694 640 692C860 690 1040 680 1220 692V780H-20Z" fill="#eef1ee" />
        <path d="M-20 704C220 692 460 700 700 698C900 696 1060 688 1220 698" fill="none" stroke="#cdd5d2" strokeWidth="5" opacity="0.7" />

        <Wisent still={still} />

        {NEAR_BIRCHES.map(([x, w, seed]) => (
          <Birch key={x} x={x} w={w} seed={seed} tone="#f7f4ed" mark="#3a3f3e" />
        ))}
        <motion.rect
          x="-200"
          y="560"
          width="1600"
          height="120"
          fill="url(#ox-heft-zubr-fog)"
          opacity="0.55"
          {...loop({ x: [0, 34, 0] }, { duration: 15, ease: 'easeInOut', repeat: Infinity })}
        />
        <g stroke="#8c9a63" strokeWidth="3.4" strokeLinecap="round" fill="none">
          <path d="M520 704C516 690 510 682 500 676M528 704C530 690 536 682 544 678M1120 702C1116 690 1110 682 1102 678M1128 702C1130 690 1136 684 1144 680" />
        </g>
        {!still
          ? SNOW.map((f, i) => (
              <motion.circle
                key={i}
                cx={f.x}
                cy="-10"
                r={f.s}
                fill="#ffffff"
                initial={{ y: 0, x: 0, opacity: 0 }}
                animate={{ y: [0, 820], x: [0, f.drift, 0], opacity: [0, 0.9, 0.9, 0] }}
                transition={{ duration: f.d, ease: 'linear', repeat: Infinity, delay: f.delay }}
              />
            ))
          : null}
      </svg>

      <div className="ox-heft-zubr-copy">
        <p className="ox-heft-zubr-kicker">
          <span lang="pl">Puszcza Białowieska</span> · Poland and Belarus
        </p>
        <h1 className="ox-heft-zubr-title" lang="pl">
          Żubr
        </h1>
        <p className="ox-heft-zubr-sub">Back from twelve</p>

        <p className="ox-heft-zubr-count">
          <span className="ox-heft-zubr-count-from">12</span>
          <span className="ox-heft-zubr-count-arrow" aria-hidden="true">
            →
          </span>
          <span className="ox-heft-zubr-count-to">12,209</span>
        </p>
        <p className="ox-heft-zubr-lede">
          Every wisent alive descends from twelve animals. The species was extinct in the wild by 1927. Fifty-four
          survived in parks and menageries, and a pedigree book kept at Białowieża since 1932 has followed every birth
          since.
        </p>

        <ol className="ox-heft-zubr-line" aria-label="The wisent's return, year by year">
          <li>
            <b>1919</b>
            <span>The last wild wisent in Białowieża falls to poachers.</span>
          </li>
          <li>
            <b>1924</b>
            <span>Fifty-four remain alive, every one of them in captivity.</span>
          </li>
          <li>
            <b>1932</b>
            <span>
              The first <span lang="pl">Księga Rodowodowa Żubrów</span>, the European Bison Pedigree Book, is published.
            </span>
          </li>
          <li>
            <b>1952</b>
            <span>Captive-bred wisent walk back into the Białowieża forest.</span>
          </li>
          <li>
            <b>2024</b>
            <span>12,209 wisent are recorded; 9,762 of them live free.</span>
          </li>
        </ol>

        <p className="ox-heft-zubr-note">
          In the pure lowland line, roughly 80 per cent of today&rsquo;s genes come from just two of those founders.
        </p>
      </div>

      <p className="ox-heft-zubr-badge">
        <svg className="ox-heft-zubr-badge-shield" viewBox="0 0 96 112" aria-hidden="true">
          <path d="M48 4L90 16V58C90 84 72 100 48 108C24 100 6 84 6 58V16Z" fill="#f6f3ec" stroke="#b8482c" strokeWidth="6" strokeLinejoin="round" />
          <path d="M48 14L80 23V58C80 78 66 90 48 97C30 90 16 78 16 58V23Z" fill="#26302f" />
          <path d="M30 44C30 32 38 26 48 26C58 26 66 32 66 44L62 70C60 80 54 86 48 86C42 86 36 80 34 70Z" fill="#a4432a" />
          <path d="M32 38C22 36 16 28 18 18C26 20 32 26 34 34ZM64 38C74 36 80 28 78 18C70 20 64 26 62 34Z" fill="#f6f3ec" />
          <circle cx="39" cy="48" r="3.2" fill="#f6f3ec" />
          <circle cx="57" cy="48" r="3.2" fill="#f6f3ec" />
          <path d="M42 74H54" stroke="#f6f3ec" strokeWidth="2.6" strokeLinecap="round" />
        </svg>
        <span className="ox-heft-zubr-badge-text">SET 4 · DESIGNED BY GLM 5.4</span>
      </p>
    </main>
  )
}
