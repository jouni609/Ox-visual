import { useEffect, useState } from 'react'
import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from 'framer-motion'
import './reines.css'

const C = {
  board: '#173b2d',
  boardDeep: '#0f2a20',
  paper: '#f3ede0',
  paperWarm: '#e8dcc0',
  sky: '#d6e3df',
  slate: '#8d99a2',
  slateDeep: '#56626b',
  larch: '#d9702b',
  chestnut: '#6e3222',
  ink: '#1b1a19',
  gold: '#e5b84b',
  gentian: '#2f5fa8',
}

const SCALLOPS_X = Array.from({ length: 57 }, (_, i) => 116 + i * 28)
const SCALLOPS_Y = Array.from({ length: 26 }, (_, i) => 84 + i * 28)
const STARS_X = Array.from({ length: 42 }, (_, i) => 80 + i * 40)
const STARS_Y = Array.from({ length: 21 }, (_, i) => 40 + i * 40)
const HEADS = Array.from({ length: 47 }, (_, i) => 118 + i * 34)
const POSTS = Array.from({ length: 17 }, (_, i) => 124 + i * 96)
const FLAGS = Array.from({ length: 9 }, (_, i) => 200 + i * 180)
const FLOWERS = Array.from({ length: 23 }, (_, i) => 130 + i * 71)
const SNOW = Array.from({ length: 14 }, (_, i) => ({ x: 150 + ((i * 271) % 1500), d: 11 + (i % 5) * 2.2, t: 9 + (i % 6) * 1.7, s: 2 + (i % 3) }))

function Cow({ tone, push, still }) {
  const cut = { fill: 'none', stroke: C.paper, strokeWidth: 5, strokeLinecap: 'round', strokeLinejoin: 'round' }
  return (
    <motion.g
      fill={tone}
      {...(still ? {} : { animate: { x: push }, transition: { duration: 3.6, ease: 'easeInOut', repeat: Infinity } })}
    >
      <path d="M566 384L560 428C558 452 555 470 554 486L551 518L553 563L548 569L541 598L490 598L497 569L502 557L504 518L502 486C501 470 498 452 496 428L490 384Z" />
      <path d="M266 388C240 412 218 438 206 468L200 504L194 566C192 584 188 596 180 598L130 598C124 594 126 582 130 568L134 504C128 496 122 486 126 476C132 450 122 422 110 386C104 356 94 302 90 256C94 230 102 212 112 202L250 202Z" />
      <path d="M112 212C92 192 64 178 40 184C30 186 26 196 30 204C48 204 70 216 88 234Z" />
      <path d="M40 180C20 204 14 238 26 270C44 284 60 270 60 246C60 222 52 196 50 180Z" />
      <path {...cut} d="M150 206C140 232 138 262 142 292" />
      <path fill="#b39a6c" stroke={C.boardDeep} strokeWidth="6" d="M782 218C806 204 838 192 872 185C888 182 900 182 907 184C898 194 884 206 868 218C842 230 816 240 794 246Z" />
      <path d="M154 203C142 187 158 171 192 167C220 163 246 161 276 162C340 159 400 173 460 174C520 175 590 163 640 157C680 166 740 196 790 226C802 230 816 238 827 249C860 276 890 310 918 347C924 364 928 384 929 401C920 412 906 416 893 417C880 414 866 411 855 407C838 396 820 384 808 372C800 362 794 352 790 342C786 330 784 318 784 309C752 330 712 384 676 420C660 424 640 420 626 412C622 446 620 480 618 530L616 598L610 600L552 600L554 596L554 530C556 496 560 452 562 416C530 384 480 388 430 388C380 388 330 384 310 374C290 392 262 420 245 462L240 505L234 569C232 585 226 597 218 600L178 600C174 595 176 583 180 569L182 496C170 488 164 476 170 464L165 448C140 412 128 374 130 329C132 279 142 241 166 209C158 207 154 205 154 203Z" />
      <path fill={C.paper} stroke={C.boardDeep} strokeWidth="6" d="M802 224C826 210 858 198 892 191C908 188 920 188 927 190C918 200 904 212 888 224C862 236 836 246 814 252Z" />
      <path d="M800 240C778 236 752 248 736 272C760 290 792 280 804 258Z" />
      <path {...cut} d="M794 252C778 252 762 260 752 270" />
      <path fill={C.paper} d="M300 380C304 410 330 426 356 418C378 412 386 392 380 378Z" />
      <g {...cut}>
        <path d="M586 572L586 598M526 572L526 598M206 573L206 598M158 573L158 598" />
        <path d="M736 192L750 198L724 372L710 368Z" />
        <path d="M440 236C456 270 466 310 470 340" />
        <path d="M250 232C262 266 272 300 276 330" />
      </g>
      <path fill={C.paper} d="M704 410L730 404L742 454L696 460Z" />
      <path fill={C.paper} d="M694 456L744 448L754 510L684 516Z" />
      <path d="M716 486C722 484 726 490 722 498C716 502 710 494 716 486Z" fill={tone} />
      <ellipse cx="840" cy="301" rx="11" ry="8" fill={C.paper} transform="rotate(22 840 301)" />
      <path fill={C.paper} d="M905 394C913 392 919 398 917 406C911 410 903 406 905 394Z" />
      <path {...cut} strokeWidth="4" d="M914 412C902 416 890 414 880 410" />
    </motion.g>
  )
}

function Crown({ x, y }) {
  return (
    <g transform={`translate(${x} ${y}) rotate(-6)`}>
      <path d="M-70 0L-84 -74L-44 -36L0 -92L44 -36L84 -74L70 0Z" fill={C.larch} stroke={C.boardDeep} strokeWidth="4" strokeLinejoin="round" />
      <path d="M-52 -8L-60 -50L-32 -26L0 -62L32 -26L60 -50L52 -8Z" fill={C.paper} />
      <path d="M-52 -8L-60 -50L-32 -26L0 -62L32 -26L60 -50L52 -8Z" fill={C.larch} fillOpacity="0.25" />
      <circle cx="-44" cy="-36" r="6" fill={C.gold} />
      <circle cx="0" cy="-92" r="6" fill={C.gold} />
      <circle cx="44" cy="-36" r="6" fill={C.gold} />
      <rect x="-74" y="0" width="148" height="16" rx="8" fill={C.paper} stroke={C.boardDeep} strokeWidth="4" />
    </g>
  )
}

function Placard({ x, number, losses, wins, out, queen }) {
  return (
    <g transform={`translate(${x} 92)`}>
      <path d="M0 0H420V104H0Z" fill={C.paper} stroke={C.boardDeep} strokeWidth="5" strokeLinejoin="round" />
      <path d="M12 12H408V92H12Z" fill="none" stroke={C.larch} strokeWidth="3" strokeDasharray="10 7" />
      <text x="28" y="70" fontFamily="Vollkorn, serif" fontWeight="900" fontSize="50" fill={C.boardDeep}>
        <tspan>Nº</tspan>
        <tspan dx="12" fontFamily="'Caveat', cursive" fontWeight="700" fontSize="72" fill={C.chestnut}>
          {number}
        </tspan>
      </text>
      <g transform="translate(216 28)">
        {[0, 1, 2].map((i) => (
          <circle key={i} cx={i * 56} cy="8" r="13" fill={i < losses ? C.larch : C.paper} stroke={C.boardDeep} strokeWidth="3.5" />
        ))}
        <text x="0" y="52" fontFamily="'Figtree', sans-serif" fontWeight="600" fontSize="17" fill={C.boardDeep}>
          <tspan x="-8" textAnchor="middle">
            {losses} perte{losses > 1 ? 's' : ''}
          </tspan>
          <tspan x="112" textAnchor="middle">
            {wins} gagné{wins > 1 ? 's' : ''}
          </tspan>
        </text>
      </g>
      {out ? <path d="M14 58L406 52" fill="none" stroke={C.larch} strokeWidth="7" strokeLinecap="round" /> : null}
      {queen ? (
        <g transform="translate(372 70)">
          <path d="M-28 10L-32 -20L-15 -9L0 -28L15 -9L32 -20L28 10Z" fill={C.gold} stroke={C.boardDeep} strokeWidth="3.5" strokeLinejoin="round" />
        </g>
      ) : null}
    </g>
  )
}

function useLayer(sx, sy, k, still) {
  const x = useTransform(sx, (v) => (still ? 0 : v * k))
  const y = useTransform(sy, (v) => (still ? 0 : v * k))
  return { x, y }
}

function useCompact() {
  const [compact, setCompact] = useState(() => typeof window !== 'undefined' && window.matchMedia('(max-width: 620px)').matches)
  useEffect(() => {
    const mq = window.matchMedia('(max-width: 620px)')
    const onChange = () => setCompact(mq.matches)
    onChange()
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])
  return compact
}

export default function Reines() {
  const still = useReducedMotion()
  const compact = useCompact()
  const [score, setScore] = useState({ a: { w: 0, l: 0 }, b: { w: 0, l: 0 } })
  const [jolt, setJolt] = useState(0)
  const [dir, setDir] = useState(1)

  const queen = score.a.l >= 3 ? 'b' : score.b.l >= 3 ? 'a' : null
  const px = useMotionValue(0)
  const py = useMotionValue(0)
  const sx = useSpring(px, { stiffness: 40, damping: 14 })
  const sy = useSpring(py, { stiffness: 40, damping: 14 })
  const l0 = useLayer(sx, sy, 4, still)
  const l1 = useLayer(sx, sy, 8, still)
  const l2 = useLayer(sx, sy, 13, still)
  const l3 = useLayer(sx, sy, 18, still)
  const l4 = useLayer(sx, sy, 24, still)
  const l5 = useLayer(sx, sy, 36, still)

  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect()
    px.set(((e.clientX - r.left) / r.width - 0.5) * 2)
    py.set(((e.clientY - r.top) / r.height - 0.5) * 2)
  }
  const onLeave = () => {
    px.set(0)
    py.set(0)
  }

  const shove = (who) => {
    if (queen) return
    setDir(who === 'a' ? 1 : -1)
    setJolt((n) => n + 1)
    setScore((s) => (who === 'a' ? { a: { w: s.a.w + 1, l: s.a.l }, b: { w: s.b.w, l: s.b.l + 1 } } : { a: { w: s.a.w, l: s.a.l + 1 }, b: { w: s.b.w + 1, l: s.b.l } }))
  }
  const reset = () => {
    setScore({ a: { w: 0, l: 0 }, b: { w: 0, l: 0 } })
  }

  return (
    <main className="th-ox-heft ox-heft-reines" onPointerMove={onMove} onPointerLeave={onLeave}>
      <header className="ox-heft-reines-head">
        <div>
          <p className="ox-heft-reines-kicker">
            <span className="ox-heft-reines-cross" aria-hidden="true">
              <i />
            </span>
            Valais, Switzerland · organised since 1922
          </p>
          <h1 className="ox-heft-reines-title">Reines</h1>
        </div>
        <p className="ox-heft-reines-deck">
          The cows of the Hérens breed that fight, head against head, to be queen of the herd. Click a cow to make her
          push.
        </p>
      </header>

      <div className={`ox-heft-reines-panel${compact ? ' is-compact' : ''}`}>
        <svg
          className="ox-heft-reines-svg"
          viewBox={compact ? '330 196 1040 712' : '40 0 1700 900'}
          role="img"
          aria-label="A paper-cut scene of two horned cows pushing head to head in an arena below snowy mountains, each with a number painted on her flank"
        >
          <rect x="40" y="0" width="1700" height="900" rx="18" fill={C.paper} />
          <g fill={C.board}>
            {STARS_X.map((x) => (
              <path key={`t${x}`} transform={`translate(${x} 36)`} d="M0 -9L2.6 -2.6L9 0L2.6 2.6L0 9L-2.6 2.6L-9 0L-2.6 -2.6Z" />
            ))}
            {STARS_X.map((x) => (
              <path key={`b${x}`} transform={`translate(${x} 864)`} d="M0 -9L2.6 -2.6L9 0L2.6 2.6L0 9L-2.6 2.6L-9 0L-2.6 -2.6Z" />
            ))}
            {STARS_Y.map((y) => (
              <circle key={`l${y}`} cx="74" cy={y} r="5" />
            ))}
            {STARS_Y.map((y) => (
              <circle key={`r${y}`} cx="1706" cy={y} r="5" />
            ))}
          </g>

          <path d="M100 70H1680V770H100Z" fill={C.sky} />
          <g fill={C.board}>
            {SCALLOPS_X.map((x) => (
              <circle key={`t${x}`} cx={x} cy="70" r="11" />
            ))}
            {SCALLOPS_X.map((x) => (
              <circle key={`b${x}`} cx={x} cy="770" r="11" />
            ))}
            {SCALLOPS_Y.map((y) => (
              <circle key={`l${y}`} cx="100" cy={y} r="11" />
            ))}
            {SCALLOPS_Y.map((y) => (
              <circle key={`r${y}`} cx="1680" cy={y} r="11" />
            ))}
          </g>

          <clipPath id="ox-heft-reines-window">
            <rect x="100" y="70" width="1580" height="700" />
          </clipPath>
          <g clipPath="url(#ox-heft-reines-window)">
            <motion.g style={l0}>
              <circle cx="1470" cy="170" r="62" fill={C.larch} />
              <circle cx="1470" cy="170" r="40" fill={C.paper} />
              <circle cx="1470" cy="170" r="40" fill={C.larch} fillOpacity="0.35" />
              <g fill={C.paper}>
                <path d="M260 150C300 120 360 120 396 150C430 128 480 132 506 158H236C240 152 250 150 260 150Z" />
                <path d="M760 200C790 178 834 178 860 200C888 184 926 188 946 208H742C746 204 752 200 760 200Z" />
              </g>
            </motion.g>
            <motion.g style={l1}>
              <path d="M60 470L180 322L262 402L352 286L442 384L542 300L632 404L722 316L822 412L922 296L1022 392L1122 306L1222 404L1322 284L1422 380L1522 306L1622 400L1722 326L1780 470Z" fill={C.slate} />
              <g fill={C.paper}>
                <path d="M180 322L210 356L196 350L184 362L170 348L158 354Z" />
                <path d="M352 286L384 322L368 314L356 330L340 316L328 322Z" />
                <path d="M542 300L572 334L558 328L546 344L532 330L520 334Z" />
                <path d="M722 316L752 350L738 344L726 360L712 346L700 350Z" />
                <path d="M922 296L954 332L938 324L926 340L910 326L898 332Z" />
                <path d="M1122 306L1152 340L1138 334L1126 350L1112 336L1100 340Z" />
                <path d="M1322 284L1354 320L1338 312L1326 328L1310 314L1298 320Z" />
                <path d="M1522 306L1552 340L1538 334L1526 350L1512 336L1500 340Z" />
              </g>
            </motion.g>
            <motion.g style={l2}>
              <path d="M60 520L140 424L218 476L318 392L398 464L488 412L578 484L668 402L758 474L848 422L938 492L1028 412L1118 484L1218 402L1308 474L1398 422L1488 492L1578 412L1668 484L1760 432L1780 530L60 530Z" fill={C.slateDeep} />
              <g fill={C.paper}>
                <path d="M318 392L348 424L334 418L322 434L306 420L294 426Z" />
                <path d="M668 402L698 434L684 428L672 444L656 430L644 436Z" />
                <path d="M1028 412L1058 444L1044 438L1032 454L1016 440L1004 446Z" />
                <path d="M1398 422L1428 454L1414 448L1402 464L1386 450L1374 456Z" />
                <path d="M1668 484L1698 516L1684 510L1672 526L1656 512L1644 518Z" />
              </g>
            </motion.g>
            <motion.g style={l3}>
              <rect x="100" y="504" width="1580" height="60" fill={C.boardDeep} />
              {HEADS.map((x, i) => (
                <circle key={x} cx={x} cy={i % 2 ? 500 : 492} r={i % 3 ? 14 : 16} fill={C.boardDeep} />
              ))}
              {FLAGS.map((x, i) => (
                <g key={x} transform={`translate(${x} ${i % 2 ? 470 : 452})`}>
                  <path d="M0 0V54" stroke={C.boardDeep} strokeWidth="5" strokeLinecap="round" />
                  <path d="M0 0L46 12L0 26Z" fill={i % 2 ? C.larch : C.paper} />
                </g>
              ))}
              <g fill={C.paper}>
                <path d="M100 548H1680V560H100Z" />
                <path d="M100 574H1680V582H1680L100 582Z" />
                {POSTS.map((x) => (
                  <rect key={x} x={x} y="540" width="10" height="46" />
                ))}
              </g>
            </motion.g>
            <motion.g style={l4}>
              <path d="M100 586H1680V770H100Z" fill={C.paperWarm} />
              <ellipse cx="890" cy="712" rx="620" ry="58" fill="none" stroke={C.paper} strokeWidth="5" strokeDasharray="26 18" />
              <motion.g
                key={`a${jolt}`}
                initial={jolt ? { x: dir * 22 } : false}
                animate={{ x: 0 }}
                transition={{ type: 'spring', stiffness: 90, damping: 4.5, mass: 1.6 }}
                style={{ transformBox: 'view-box', transformOrigin: '890px 700px' }}
              >
                <g transform="translate(890 700) scale(0.72) translate(-885 -600)">
                  <Cow tone={C.ink} still={still} push={[0, -10, 0, 12, 0]} />
                </g>
              </motion.g>
              <motion.g
                key={`b${jolt}`}
                initial={jolt ? { x: -dir * 22 } : false}
                animate={{ x: 0 }}
                transition={{ type: 'spring', stiffness: 90, damping: 4.5, mass: 1.6 }}
                style={{ transformBox: 'view-box', transformOrigin: '890px 700px' }}
              >
                <g transform="translate(890 700) scale(0.72) translate(-885 -600) translate(1775 -10) scale(-1 1)">
                  <Cow tone={C.chestnut} still={still} push={[0, 12, 0, -10, 0]} />
                </g>
              </motion.g>
              <g fontFamily="'Caveat', cursive" fontWeight="700" fontSize="58" fill={C.paper} textAnchor="middle">
                <text transform="translate(500 494) rotate(-8)">144</text>
                <text transform="translate(1282 486) rotate(8)">12</text>
              </g>
              {queen === 'a' ? <Crown x={700} y={466} /> : null}
              {queen === 'b' ? <Crown x={1084} y={456} /> : null}
            </motion.g>
            <motion.g style={l5} fill={C.boardDeep}>
              {FLOWERS.map((x, i) => (
                <g key={x} transform={`translate(${x} ${i % 2 ? 748 : 736})`}>
                  <path d="M0 0C-6 -30 -10 -54 -4 -84M0 0C10 -26 20 -40 34 -52M0 0C-12 -22 -24 -32 -38 -40" fill="none" stroke={C.boardDeep} strokeWidth="6" strokeLinecap="round" />
                  {i % 3 === 0 ? (
                    <g transform="translate(-4 -92)">
                      <path d="M0 -26L7 -9L24 -12L12 2L24 16L7 13L0 30L-7 13L-24 16L-12 2L-24 -12L-7 -9Z" fill={C.paper} stroke={C.boardDeep} strokeWidth="3" strokeLinejoin="round" />
                      <circle r="9" fill={C.gold} />
                    </g>
                  ) : null}
                  {i % 3 === 1 ? (
                    <g transform="translate(36 -58)">
                      <circle cx="0" cy="-14" r="12" fill={C.gentian} />
                      <circle cx="13" cy="-4" r="12" fill={C.gentian} />
                      <circle cx="8" cy="11" r="12" fill={C.gentian} />
                      <circle cx="-8" cy="11" r="12" fill={C.gentian} />
                      <circle cx="-13" cy="-4" r="12" fill={C.gentian} />
                      <circle r="7" fill={C.paper} />
                    </g>
                  ) : null}
                  {i % 3 === 2 ? (
                    <g transform="translate(-40 -46)">
                      <circle r="13" fill={C.larch} />
                      <circle r="5" fill={C.boardDeep} />
                    </g>
                  ) : null}
                </g>
              ))}
            </motion.g>
            {!still
              ? SNOW.map((f, i) => (
                  <motion.circle
                    key={i}
                    cx={f.x}
                    r={f.s}
                    fill={C.paper}
                    initial={{ y: 80, opacity: 0 }}
                    animate={{ y: [80, 420, 700], opacity: [0, 0.9, 0] }}
                    transition={{ duration: f.t, ease: 'linear', repeat: Infinity, delay: f.d }}
                  />
                ))
              : null}
          </g>

          {!compact ? (
            <>
              <Placard x="124" number="144" losses={score.a.l} wins={score.a.w} out={score.a.l >= 3} queen={queen === 'a'} />
              <Placard x="1236" number="12" losses={score.b.l} wins={score.b.w} out={score.b.l >= 3} queen={queen === 'b'} />
            </>
          ) : null}

          <g transform="translate(890 836)">
            <path d="M-560 -30H560V30H-560Z" fill={C.paper} stroke={C.larch} strokeWidth="3" />
            <path d="M-520 0H-318M318 0H520" fill="none" stroke={C.boardDeep} strokeWidth="4" strokeLinecap="round" strokeDasharray="2 14" />
            <text
              x="0"
              y="12"
              textAnchor="middle"
              fontFamily="'Vollkorn', serif"
              fontWeight="900"
              fontSize={compact ? 26 : 30}
              letterSpacing="4"
              fill={C.board}
            >
              SET 2 · DESIGNED BY GLM 5.4
            </text>
          </g>
        </svg>

        <button
          type="button"
          className="ox-heft-reines-hit ox-heft-reines-hit-a"
          onClick={() => shove('a')}
          disabled={!!queen}
          aria-label="Make cow number 144 push"
        >
          <span className="ox-heft-reines-hit-label">La 144 pousse</span>
        </button>
        <button
          type="button"
          className="ox-heft-reines-hit ox-heft-reines-hit-b"
          onClick={() => shove('b')}
          disabled={!!queen}
          aria-label="Make cow number 12 push"
        >
          <span className="ox-heft-reines-hit-label">La 12 pousse</span>
        </button>
      </div>

      <p className="ox-heft-reines-verdict" aria-live="polite">
        {compact ? (
          <span className="ox-heft-reines-tally" lang="fr">
            <b>144</b> {score.a.l} perte{score.a.l > 1 ? 's' : ''}, {score.a.w} gagné{score.a.w > 1 ? 's' : ''}
            <span aria-hidden="true"> · </span>
            <b>12</b> {score.b.l} perte{score.b.l > 1 ? 's' : ''}, {score.b.w} gagné{score.b.w > 1 ? 's' : ''}
          </span>
        ) : null}
        {queen ? (
          <>
            <b>Reine.</b> Number {queen === 'a' ? '144' : '12'} holds the ring.
            <button type="button" className="ox-heft-reines-reset" onClick={reset}>
              Rejouer
            </button>
          </>
        ) : (
          <>
            <span lang="fr">Trois défaites et elle est retirée.</span> Three losses and she leaves the ring.
          </>
        )}
      </p>

      <section className="ox-heft-reines-notes" aria-label="How the contest works">
        <div className="ox-heft-reines-note ox-heft-reines-note-lede">
          <h2>Nobody teaches them</h2>
          <p>
            Hérens cows settle their own hierarchy, forehead against forehead, on the way up to the alp. In Valais they
            have made a contest of it: five categories by weight and age, a jury of five, and a bell on an embroidered
            strap for the one who is left standing.
          </p>
        </div>
        <div className="ox-heft-reines-note">
          <h2>The rules of the ring</h2>
          <ol>
            <li>The heaviest third of cows, usually over 600 kg, forms the first category.</li>
            <li>They push head to head. The one who turns away has lost that bout.</li>
            <li>Three losses, or three refusals, and the jury has her led out.</li>
            <li>The last cow standing in each category is crowned <i lang="fr">reine</i>.</li>
          </ol>
        </div>
        <div className="ox-heft-reines-note">
          <h2>Words from the valley</h2>
          <dl>
            <dt lang="fr">sénalèré</dt>
            <dd>In the Vionnaz dialect, the queen of the herd: the cow that wears the biggest bell.</dd>
            <dt lang="fr">rabatteur</dt>
            <dd>The handlers who guide the cows in the ring and keep the pairs apart.</dd>
            <dt lang="fr">kapâna</dt>
            <dd>The bell itself, hung from the cow&rsquo;s neck.</dd>
          </dl>
        </div>
        <div className="ox-heft-reines-note ox-heft-reines-figures">
          <h2>The final at Aproz</h2>
          <dl>
            <div>
              <dt>Cows at the national final</dt>
              <dd>160</dd>
            </div>
            <div>
              <dt>Spectators on the hillside</dt>
              <dd>12,000</dd>
            </div>
            <div>
              <dt>A bout can last</dt>
              <dd>
                seconds <span aria-hidden="true">→</span> 40 min
              </dd>
            </div>
          </dl>
        </div>
      </section>
    </main>
  )
}
