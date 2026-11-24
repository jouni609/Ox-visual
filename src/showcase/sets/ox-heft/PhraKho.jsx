import { useEffect, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import './phrakho.css'

const HEAD_FILL =
  'M402 296C394 300 386 304 378 311C352 328 326 346 303 364C292 368 280 370 270 376C262 382 258 392 259 402C260 414 264 424 270 430C278 436 290 440 302 440C318 440 346 438 366 430C382 424 394 412 398 402C402 392 405 380 406 370L395 372A46 46 0 0 0 402 296Z'
const HEAD_LINE =
  'M414 296C402 300 390 304 378 311C352 328 326 346 303 364C292 368 280 370 270 376C262 382 258 392 259 402C260 414 264 424 270 430C278 436 290 440 302 440C318 440 346 438 366 430C382 424 394 412 398 402C402 392 405 380 406 370'
const BODY =
  'M930 258C912 246 880 242 850 246C780 254 660 254 610 244C590 230 570 220 545 224C520 228 500 240 480 256C452 276 430 290 414 296A42 42 0 0 0 408 372C430 396 456 430 480 456C466 464 458 470 456 476C456 486 458 500 460 516L456 590L450 600L534 600L528 590L526 514C528 494 532 478 534 470C590 480 650 482 710 470C760 476 820 486 856 510L862 590L856 600L930 600L926 590L924 528C932 514 934 502 928 492C934 460 942 434 942 410C948 360 942 312 926 284C924 274 926 264 930 258Z'

const BOWLS = [
  { id: 'rice', en: 'Rice', th: 'ข้าว', heap: '#f4efe2', omen: 0, x: 222, y: 402, angle: -8 },
  { id: 'maize', en: 'Maize', th: 'ข้าวโพด', heap: '#e9b93b', omen: 0, x: 275, y: 402, angle: -8 },
  { id: 'beans', en: 'Green beans', th: 'ถั่วเขียว', heap: '#5f8f4a', omen: 1, x: 328, y: 402, angle: -8 },
  { id: 'sesame', en: 'Sesame', th: 'งา', heap: '#d9c39a', omen: 1, x: 195, y: 438, angle: -3 },
  { id: 'liquor', en: 'Liquor', th: 'เหล้า', heap: '#d7e9ee', omen: 2, x: 248, y: 438, angle: -3 },
  { id: 'water', en: 'Water', th: 'น้ำ', heap: '#9cc7dd', omen: 3, x: 301, y: 438, angle: -3 },
  { id: 'grass', en: 'Grass', th: 'หญ้า', heap: '#6ea24f', omen: 3, x: 354, y: 438, angle: -3 },
]

const OMENS = [
  {
    en: 'Grain and fruit will be plentiful.',
    th: 'ธัญญาหาร ผลาหาร จะบริบูรณ์ดี',
  },
  {
    en: 'Fruit and food will be abundant.',
    th: 'ผลาหาร ภักษาหาร จะอุดมสมบูรณ์ดี',
  },
  {
    en: 'Transport will be easier and trade with other countries better, so the economy will prosper.',
    th: 'การคมนาคมจะสะดวกขึ้น การค้าขายกับต่างประเทศดีขึ้น ทำให้เศรษฐกิจรุ่งเรือง',
  },
  {
    en: 'Water will be plentiful enough; grain, fruit, food and meat will be abundant.',
    th: 'น้ำท่าจะบริบูรณ์พอสมควร ธัญญาหาร ผลาหาร ภักษาหาร มังสาหาร จะอุดมสมบูรณ์',
  },
]

const MUZZLE_X = 281
const TASSELS = Array.from({ length: 17 }, (_, i) => 24 + i * 52)
const MARIGOLDS = Array.from({ length: 9 }, (_, i) => i)

function Bowl({ x, y, heap, active }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      {active ? <ellipse cx="0" cy="-18" rx="32" ry="24" fill="#f1d98a" opacity="0.26" /> : null}
      <ellipse cx="0" cy="-12" rx="20" ry="6.6" fill={heap} />
      <path d="M-23 -12C-20 6 -10 13 0 13C10 13 20 6 23 -12Z" fill={active ? '#f1d98a' : '#d8b24a'} stroke="#7a4f12" strokeWidth="1.8" />
      <ellipse cx="0" cy="-12" rx="23" ry="7" fill="none" stroke="#7a4f12" strokeWidth="1.8" />
      <path d="M-12 -3C-9 4 -5 6 0 7" fill="none" stroke="#fff3c9" strokeWidth="2" strokeLinecap="round" />
    </g>
  )
}

function Ox({ angle, still, shade }) {
  const paper = shade ? '#d9cdb8' : '#f4ecdc'
  const line = '#5a1a0e'
  return (
    <g stroke={line} strokeWidth="3" strokeLinejoin="round" strokeLinecap="round">
      <path fill={paper} d="M546 470L540 520L534 590L540 600L626 600L620 590L614 520L608 470Z" />
      <path fill={paper} d="M700 462C740 470 780 498 814 520L820 590L816 600L884 600L888 590L884 530C892 516 894 504 888 494C896 462 902 436 902 404L760 404Z" />
      <path fill={line} d="M536 586L622 586L626 600L534 600Z" />
      <path fill={line} d="M818 586L886 586L888 600L816 600Z" />
      <path fill="#7a2a18" d="M928 260C942 300 950 350 950 400C950 430 944 456 936 476C928 468 924 440 924 410C922 360 918 310 912 272Z" />
      <path fill="#4a1208" d="M940 430C932 456 932 500 942 528C954 540 968 532 970 510C972 480 958 450 950 430Z" />
      <motion.path
        fill={paper}
        animate={{ scale: still ? 1 : [1, 1.012, 1] }}
        transition={{ duration: 6.8, ease: 'easeInOut', repeat: Infinity }}
        style={{ transformBox: 'fill-box', transformOrigin: '50% 100%' }}
        d={BODY}
      />
      <path fill={line} d="M454 586L536 586L534 600L450 600Z" />
      <path fill={line} d="M860 586L928 586L930 600L856 600Z" />
      <g fill="none" stroke="#f4ecdc" strokeWidth="2.4">
        <path d="M494 588L494 599M582 588L582 599M846 588L846 599M894 588L894 599" />
      </g>
      <path fill="#e8b933" d="M636 244L886 244L900 396L654 402Z" />
      <path fill="#b5342a" d="M654 376L898 370L900 396L654 402Z" />
      <path fill="#b5342a" d="M636 244L662 244L676 402L654 402Z" />
      <g fill="#d8b24a">
        {TASSELS.slice(0, 9).map((_, i) => {
          const x = 668 + i * 26
          return <path key={i} d={`M${x} ${400 - i}L${x + 8} ${400 - i}L${x + 6} ${421 - i}L${x + 2} ${421 - i}Z`} />
        })}
      </g>
      <path fill="#b5342a" d="M482 250L508 254L500 470L476 466Z" />
      <g fill="#d8b24a">
        <path d="M488 262L500 264L499 286L487 284Z" />
        <path d="M484 318L498 320L497 342L483 340Z" />
        <path d="M480 374L496 376L495 398L479 396Z" />
        <path d="M478 430L494 432L493 454L477 452Z" />
      </g>

      <g transform="translate(424 336) scale(1.3) translate(-424 -336)">
        <motion.g
          animate={{ rotate: angle }}
          transition={{ type: 'spring', stiffness: 70, damping: 11 }}
          style={{ transformBox: 'fill-box', transformOrigin: '50% 50%' }}
        >
          <circle cx="424" cy="336" r="186" fill="none" stroke="none" />
          <g>
            <path fill="url(#ox-heft-phrakho-horn)" d="M358 314C352 288 356 260 372 238C382 224 398 216 416 218C418 236 412 256 402 274C394 288 388 300 386 306Z" />
            <path fill="#3a2416" opacity="0.34" d="M358 314C352 288 356 260 372 238C382 224 398 216 416 218C418 236 412 256 402 274C394 288 388 300 386 306Z" />
          </g>
          <path fill="url(#ox-heft-phrakho-horn)" d="M378 308C372 282 376 254 392 232C402 218 418 210 436 212C438 230 432 250 422 268C414 282 408 296 406 300Z" />
          <path fill={paper} d={HEAD_FILL} stroke="none" />
          <path fill="none" d={HEAD_LINE} />
          <path fill={paper} d="M412 310C436 302 462 310 474 330C476 336 472 344 464 346C446 350 424 346 412 332Z" />
          <path fill="#b5342a" d="M420 318C434 314 450 319 460 330C450 340 432 338 420 326Z" stroke="none" />
          <path fill="#b5342a" d="M416 296C404 290 392 296 382 308L394 316C400 308 408 304 420 304Z" />
          <path fill="#d8b24a" d="M394 298L390 272L400 257L410 274L406 300Z" />
          <path fill="none" stroke="#b5342a" strokeWidth="9" d="M284 370L296 434" />
          <path fill="#5a1a0e" d="M276 400C282 397 288 402 286 410C280 414 273 408 276 400Z" stroke="none" />
          <ellipse cx="362" cy="359" rx="11" ry="9" fill="#1a0d06" stroke="none" />
          <circle cx="359" cy="356" r="3" fill="#fff8e6" stroke="none" />
          <path fill="none" strokeWidth="2.4" d="M282 434C292 438 304 438 314 434" />
        </motion.g>
      </g>
    </g>
  )
}

function useCompact() {
  const [compact, setCompact] = useState(() => typeof window !== 'undefined' && window.matchMedia('(max-width: 840px)').matches)
  useEffect(() => {
    const mq = window.matchMedia('(max-width: 840px)')
    const onChange = () => setCompact(mq.matches)
    onChange()
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])
  return compact
}

export default function PhraKho() {
  const still = useReducedMotion()
  const compact = useCompact()
  const [pick, setPick] = useState(2)
  const bowl = BOWLS[pick]
  const omen = OMENS[bowl.omen]
  const dx = (bowl.x - MUZZLE_X) * 0.8

  return (
    <main className="th-ox-heft ox-heft-phrakho">
      <p className="ox-heft-phrakho-kicker">
        <span lang="th">สนามหลวง</span> · Sanam Luang, Bangkok · each May before the rains
      </p>

      <div className="ox-heft-phrakho-leaf">
        <section className="ox-heft-phrakho-title-panel">
          <p className="ox-heft-phrakho-th" lang="th">
            พระโคแรกนา
          </p>
          <h1 className="ox-heft-phrakho-title">Phra Kho</h1>
          <p className="ox-heft-phrakho-sub">The royal oxen of the First Furrow</p>
          <p className="ox-heft-phrakho-intro">
            Two white oxen are chosen each year for their matched colour, their lucky whorls, the set of their horns
            and a body that reads as a rectangle from the side. Their task is not to pull. It is to choose.
          </p>
          <p className="ox-heft-phrakho-label">SET 5 · DESIGNED BY GLM 5.4</p>
        </section>

        <div className="ox-heft-phrakho-art">
          <svg
            className="ox-heft-phrakho-svg"
            viewBox={compact ? '150 196 700 424' : '0 0 900 620'}
            role="img"
            aria-label="Two white humped oxen in red and gold caparison stand before a golden tray of seven bowls; the near ox has lowered its muzzle to one of them"
          >
            <defs>
              <linearGradient id="ox-heft-phrakho-canopy" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stopColor="#a52a1f" />
                <stop offset="1" stopColor="#7a1a12" />
              </linearGradient>
              <linearGradient id="ox-heft-phrakho-horn" x1="0" y1="1" x2="0.6" y2="0">
                <stop offset="0" stopColor="#8a5426" />
                <stop offset="0.55" stopColor="#b98245" />
                <stop offset="1" stopColor="#ecd9a8" />
              </linearGradient>
            </defs>

            <path d="M0 0H900V44H0Z" fill="url(#ox-heft-phrakho-canopy)" />
            <path d="M0 44H900" stroke="#d8b24a" strokeWidth="3" />
            <g fill="url(#ox-heft-phrakho-canopy)" stroke="#d8b24a" strokeWidth="2.4">
              {TASSELS.map((x) => (
                <path key={x} d={`M${x} 44A26 26 0 0 0 ${x + 52} 44Z`} />
              ))}
            </g>
            <g fill="#e9a53b">
              {MARIGOLDS.map((i) => (
                <circle key={`l${i}`} cx="44" cy={76 + i * 17} r={i % 2 ? 6.4 : 8} fill={i % 2 ? '#f1c45a' : '#e9852f'} />
              ))}
              {MARIGOLDS.map((i) => (
                <circle key={`r${i}`} cx="862" cy={76 + i * 17} r={i % 2 ? 6.4 : 8} fill={i % 2 ? '#e9852f' : '#f1c45a'} />
              ))}
            </g>

            <rect x="0" y="526" width="900" height="94" fill="#6f1811" />
            <path d="M0 526H900" stroke="#d8b24a" strokeWidth="3" />
            <path d="M0 548H900M0 596H900" stroke="#d8b24a" strokeWidth="1.4" opacity="0.55" />

            <g transform="translate(367 201) scale(0.7) translate(-198 -236)" opacity="0.92">
              <Ox angle={0} still={still} shade />
            </g>

            <g stroke="#7a4f12" strokeWidth="2.4" strokeLinejoin="round">
              <path d="M166 436H366L352 526H182Z" fill="#8e1f17" />
              <path d="M190 466H344M196 498H336" fill="none" stroke="#d8b24a" strokeWidth="2" />
              <ellipse cx="266" cy="420" rx="126" ry="24" fill="#d8b24a" />
              <ellipse cx="266" cy="416" rx="114" ry="19" fill="#f1d98a" />
            </g>
            {BOWLS.map((b, i) => (
              <Bowl key={b.id} x={b.x} y={b.y} heap={b.heap} active={i === pick} />
            ))}

            <motion.g
              initial={false}
              animate={{ x: dx }}
              transition={{ type: 'spring', stiffness: 58, damping: 14 }}
            >
              <g transform="translate(262 265) scale(0.7) translate(-198 -236)">
                <Ox angle={bowl.angle} still={still} />
              </g>
            </motion.g>
          </svg>
        </div>
      </div>

      <section className="ox-heft-phrakho-oracle" aria-label="The seven bowls and the forecast">
        <div className="ox-heft-phrakho-bowls" role="group" aria-label="Set a bowl before the oxen">
          {BOWLS.map((b, i) => (
            <button
              key={b.id}
              type="button"
              className="ox-heft-phrakho-chip"
              aria-pressed={i === pick}
              onClick={() => setPick(i)}
            >
              {b.en}
              <span lang="th">{b.th}</span>
            </button>
          ))}
        </div>

        <div className="ox-heft-phrakho-omen" aria-live="polite">
          <p className="ox-heft-phrakho-omen-th" lang="th">
            {omen.th}
          </p>
          <p className="ox-heft-phrakho-omen-en">{omen.en}</p>
          <p className="ox-heft-phrakho-omen-src">
            The forecast when the oxen take <b>{bowl.en}</b> <span lang="th">{bowl.th}</span>.
          </p>
        </div>
      </section>

      <p className="ox-heft-phrakho-note">
        The Lord of the Plough sows the year&rsquo;s first rice seed on Sanam Luang, and the oxen are led to seven
        bowls. In May 2026 they took beans, water, grass and liquor.
      </p>
    </main>
  )
}
