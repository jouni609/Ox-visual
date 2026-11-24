import { motion, useReducedMotion } from 'framer-motion'
import './durham.css'

const PATCHES = [
  'M560 150C610 146 660 150 690 158C720 170 745 190 762 208C740 246 716 296 690 360C676 396 660 420 640 436C600 444 560 448 520 450C520 400 540 320 556 250Z',
  'M350 250C410 236 470 246 510 280C540 316 544 372 524 420C480 440 420 446 370 444C340 420 330 370 334 320C336 292 340 268 350 250Z',
  'M170 280C210 268 250 280 276 312C296 346 306 390 310 424C290 450 260 480 240 500L200 500C180 470 160 430 150 390C146 350 152 310 170 280Z',
  'M770 196C790 188 812 196 826 214C836 232 840 258 834 284C826 300 812 308 800 300C790 280 780 250 770 224Z',
]

const SPECKLES = [
  [440, 190, 2.6],
  [470, 214, 2.2],
  [500, 186, 2.8],
  [420, 232, 2],
  [540, 200, 2.4],
  [330, 200, 2.4],
  [300, 236, 2],
  [460, 250, 1.8],
  [380, 180, 2],
  [250, 250, 2.2],
  [220, 200, 1.8],
  [600, 200, 2],
  [640, 236, 1.8],
  [280, 170, 2],
  [520, 232, 1.8],
]

const LEAVES = [
  [110, 150, 96, 70],
  [210, 110, 110, 78],
  [300, 150, 92, 66],
  [70, 240, 84, 64],
  [190, 210, 104, 72],
  [290, 236, 78, 56],
  [150, 290, 70, 48],
]

const MOTES = Array.from({ length: 14 }, (_, i) => ({
  left: 6 + ((i * 37) % 88),
  top: 8 + ((i * 53) % 70),
  s: 2 + (i % 3),
  d: 9 + (i % 6) * 2.4,
  delay: (i % 7) * 1.6,
}))

function Painting({ still }) {
  const loop = (animate, transition) => (still ? {} : { animate, transition })
  return (
    <svg
      className="ox-heft-durham-svg"
      viewBox="0 0 1000 660"
      role="img"
      aria-label="An oil portrait of an enormously fat white ox with dark brown patches, standing in profile on a grassy rise beneath an oak tree"
    >
      <defs>
        <linearGradient id="ox-heft-durham-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#a9bcc4" />
          <stop offset="0.55" stopColor="#d9d9c6" />
          <stop offset="1" stopColor="#f0e2c0" />
        </linearGradient>
        <linearGradient id="ox-heft-durham-ground" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#a7ad78" />
          <stop offset="0.4" stopColor="#7d8b57" />
          <stop offset="1" stopColor="#4c5a35" />
        </linearGradient>
        <linearGradient id="ox-heft-durham-coat" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#fdf9ef" />
          <stop offset="0.5" stopColor="#f1e7d3" />
          <stop offset="1" stopColor="#d3c3a4" />
        </linearGradient>
        <linearGradient id="ox-heft-durham-leg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#f1e7d3" />
          <stop offset="0.62" stopColor="#dccfb6" />
          <stop offset="0.84" stopColor="#6a5547" />
          <stop offset="1" stopColor="#3b2c24" />
        </linearGradient>
        <linearGradient id="ox-heft-durham-patch" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#523c30" />
          <stop offset="1" stopColor="#2a1c17" />
        </linearGradient>
        <radialGradient id="ox-heft-durham-glow" cx="0.72" cy="0.2" r="0.6">
          <stop offset="0" stopColor="#fff4d0" stopOpacity="0.85" />
          <stop offset="1" stopColor="#fff4d0" stopOpacity="0" />
        </radialGradient>
        <filter id="ox-heft-durham-soft" x="-10%" y="-10%" width="120%" height="120%">
          <feGaussianBlur stdDeviation="3.4" />
        </filter>
        <filter id="ox-heft-durham-softer" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="10" />
        </filter>
        <filter id="ox-heft-durham-leaf" x="-10%" y="-10%" width="120%" height="120%">
          <feTurbulence type="fractalNoise" baseFrequency="0.05" numOctaves="3" seed="7" result="n" />
          <feDisplacementMap in="SourceGraphic" in2="n" scale="26" />
          <feGaussianBlur stdDeviation="1.6" />
        </filter>
        <filter id="ox-heft-durham-grain" x="0" y="0" width="100%" height="100%">
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" seed="3" />
          <feColorMatrix values="0 0 0 0 0.2  0 0 0 0 0.15  0 0 0 0 0.1  0 0 0 0.5 0" />
        </filter>
        <clipPath id="ox-heft-durham-clip">
          <rect width="1000" height="660" />
        </clipPath>
      </defs>

      <g clipPath="url(#ox-heft-durham-clip)">
        <rect width="1000" height="660" fill="url(#ox-heft-durham-sky)" />
        <rect width="1000" height="660" fill="url(#ox-heft-durham-glow)" />
        <g fill="#fbf4e2" opacity="0.7" filter="url(#ox-heft-durham-softer)">
          <ellipse cx="620" cy="110" rx="150" ry="34" />
          <ellipse cx="760" cy="150" rx="190" ry="30" />
          <ellipse cx="520" cy="170" rx="110" ry="22" />
          <ellipse cx="860" cy="70" rx="120" ry="26" />
        </g>
        <path d="M0 410C120 392 250 386 400 396C560 406 720 392 1000 372V470H0Z" fill="#9aa58a" opacity="0.8" />
        <path d="M0 430C160 418 330 428 520 426C720 424 860 412 1000 420V660H0Z" fill="url(#ox-heft-durham-ground)" />
        <path d="M0 470C220 452 470 462 700 456C820 452 920 446 1000 448" fill="none" stroke="#b9bd86" strokeWidth="10" opacity="0.35" filter="url(#ox-heft-durham-softer)" />

        <g filter="url(#ox-heft-durham-leaf)">
          <path d="M20 420C40 330 36 220 60 120L110 110C96 220 104 330 130 420Z" fill="#3d2e20" />
          <path d="M60 250C120 210 180 180 240 170M70 190C110 150 150 120 200 100" fill="none" stroke="#3d2e20" strokeWidth="16" strokeLinecap="round" />
          {LEAVES.map(([x, y, rx, ry], i) => (
            <ellipse key={i} cx={x} cy={y} rx={rx} ry={ry} fill={i % 2 ? '#3f5a34' : '#2f4629'} />
          ))}
          {LEAVES.filter((_, i) => i % 2 === 0).map(([x, y, rx], i) => (
            <ellipse key={`h${i}`} cx={x + 12} cy={y - 16} rx={rx * 0.55} ry="22" fill="#6d8248" opacity="0.8" />
          ))}
        </g>

        <ellipse cx="520" cy="612" rx="410" ry="20" fill="#2c3a22" opacity="0.5" filter="url(#ox-heft-durham-softer)" />

        <g stroke="#3b2c24" strokeWidth="1.6" strokeLinejoin="round">
          <path fill="url(#ox-heft-durham-leg)" d="M660 424L648 480L642 512L636 596L644 608L568 608L574 596L578 512L586 470L592 424Z" />
          <path fill="url(#ox-heft-durham-leg)" d="M430 400L394 436C370 450 340 470 318 496L312 520L310 596L318 608L242 608L254 596L256 520C252 512 248 502 244 494C230 476 216 458 206 432L200 400Z" />
          <motion.g
            {...loop({ rotate: [0, 7, 0, -3, 0] }, { duration: 6.5, ease: 'easeInOut', repeat: Infinity })}
            style={{ transformBox: 'view-box', transformOrigin: '120px 170px' }}
          >
            <path fill="url(#ox-heft-durham-leg)" d="M120 168C102 224 96 300 102 366C105 410 108 460 108 510C100 500 94 450 94 390C92 310 100 224 108 174Z" />
            <path fill="#2a1c17" d="M108 486C96 512 94 556 104 586C118 600 132 590 134 566C136 536 122 504 114 486Z" />
          </motion.g>
          <path fill="url(#ox-heft-durham-patch)" d="M760 216C742 218 724 230 712 248C730 260 754 254 766 238Z" />
          <g transform="translate(14 0)">
            <path fill="#bfa874" d="M748 202C746 174 756 144 776 124C785 115 798 112 810 115C805 124 798 133 790 143C780 157 772 178 774 208Z" />
            <path fill="#3a2a20" d="M802 117C805 115 808 115 810 115C808 119 806 123 803 127L791 122C795 120 798 118 802 117Z" />
          </g>
          <path fill="url(#ox-heft-durham-coat)" strokeWidth="1.8" d="M120 166C136 152 160 146 192 148C270 146 350 150 430 150C520 150 600 148 668 154C706 158 740 176 760 205C772 200 788 198 802 200C842 204 882 212 915 221C932 222 946 220 953 222C966 226 974 234 972 241C978 254 980 266 978 273C972 286 966 294 962 296C950 304 940 308 928 310C908 314 888 316 869 318C856 318 840 314 829 310C818 306 808 296 801 282C784 320 750 380 714 424C710 430 706 434 704 436C698 452 694 466 692 480L686 512L680 596L688 608L612 608L618 596L622 512C624 496 628 482 630 470L636 434C580 446 500 450 430 448C400 446 372 442 350 436C330 446 314 454 302 462C288 474 278 486 274 496L268 520L266 596L274 608L198 608L210 596L212 520L206 500C202 496 200 494 200 492C186 480 170 468 176 460C150 436 124 400 112 360C98 320 94 270 100 220C104 196 110 178 120 166Z" />
          <g filter="url(#ox-heft-durham-soft)" stroke="none">
            {PATCHES.map((d) => (
              <path key={d} fill="url(#ox-heft-durham-patch)" d={d} />
            ))}
          </g>
          <g fill="#2a1c17" opacity="0.45" stroke="none">
            {SPECKLES.map(([x, y, r]) => (
              <circle key={`${x}${y}`} cx={x} cy={y} r={r} />
            ))}
          </g>
          <g fill="#2a1c17" opacity="0.16" filter="url(#ox-heft-durham-soft)" stroke="none">
            <path d="M380 452C460 452 540 450 640 436L646 458C560 470 460 472 384 468Z" />
            <path d="M690 162C620 156 540 156 470 158L470 166C540 164 620 164 690 170Z" />
            <path d="M830 314C800 352 770 392 736 428L716 420C752 378 786 336 812 292Z" />
          </g>
          <path fill="#4a3a32" d="M958 238C966 240 970 250 970 262C970 274 966 284 958 288C954 280 952 270 952 262C952 252 954 244 958 238Z" stroke="none" />
          <path fill="#1c130f" d="M960 256C965 254 967 260 964 266C959 269 956 264 960 256Z" stroke="none" />
          <path fill="none" strokeWidth="2" strokeLinecap="round" d="M968 286C958 296 950 300 946 300" />
          <ellipse cx="846" cy="246" rx="13" ry="10" fill="#0f0906" stroke="none" />
          <circle cx="850" cy="243" r="3.2" fill="#fffaf0" stroke="none" />
          <path fill="none" strokeWidth="2.4" strokeLinecap="round" d="M832 238C840 232 856 232 862 240" />
          <g transform="translate(14 0)">
            <path fill="#dcc894" d="M762 206C760 178 770 150 790 131C799 122 812 119 824 123C819 132 812 141 804 151C794 165 788 184 790 212Z" />
            <path fill="#3a2a20" d="M816 124C819 122 822 122 824 123C822 127 820 131 817 135L805 130C809 128 812 126 816 124Z" />
          </g>
          <g fill="#241812" stroke="none">
            <path d="M678 590L686 596L688 608L612 608L618 596Z" />
            <path d="M264 590L266 596L274 608L198 608L210 596Z" />
            <path d="M636 590L644 608L568 608L574 596Z" />
            <path d="M310 590L318 608L242 608L254 596Z" />
          </g>
        </g>

        {!still ? (
          <motion.g
            animate={{ x: [0, 70, 0, -70, 0], y: [0, -16, 0, -16, 0] }}
            transition={{ duration: 5.5, ease: 'easeInOut', repeat: Infinity }}
          >
            <motion.g
              animate={{ x: [0, 3, -3, 0], y: [0, -2, 2, 0] }}
              transition={{ duration: 0.22, ease: 'linear', repeat: Infinity }}
            >
              <ellipse cx="520" cy="128" rx="5" ry="3.4" fill="#17100c" />
            </motion.g>
          </motion.g>
        ) : null}

        <rect width="1000" height="660" filter="url(#ox-heft-durham-grain)" opacity="0.5" style={{ mixBlendMode: 'multiply' }} />
        <rect x="6" y="6" width="988" height="648" fill="none" stroke="#2a1d16" strokeWidth="12" opacity="0.16" />

        <text x="430" y="641" textAnchor="middle" className="ox-heft-durham-inscription" fontFamily="'IM Fell English SC', 'IM Fell English', serif" fontSize="21" letterSpacing="3.5" fill="#2f231b" opacity="0.82">
          THE DURHAM OX · SIX YEARS OLD · 1802
        </text>
        <text
          x="972"
          y="638"
          textAnchor="end"
          className="ox-heft-durham-signature"
          transform="rotate(-2.5 972 628)"
          fontFamily="'IM Fell English', serif"
          fontStyle="italic"
          fontSize="19.5"
          fill="#1f1510"
          opacity="0.9"
        >
          SET 3 · DESIGNED BY GLM 5.4
        </text>
      </g>
    </svg>
  )
}

export default function Durham() {
  const still = useReducedMotion()

  return (
    <main className="th-ox-heft ox-heft-durham">
      {MOTES.map((m, i) => (
        <span
          key={i}
          className={still ? 'ox-heft-durham-mote' : 'ox-heft-durham-mote ox-heft-durham-mote-drift'}
          style={{ left: `${m.left}%`, top: `${m.top}%`, width: m.s, height: m.s, animationDuration: `${m.d}s, ${m.d / 2}s`, animationDelay: `${m.delay}s, ${m.delay}s` }}
          aria-hidden="true"
        />
      ))}

      <div className="ox-heft-durham-gallery">
        <figure className="ox-heft-durham-frame">
          <div className="ox-heft-durham-canvas">
            <Painting still={still} />
          </div>
          <Rosette className="ox-heft-durham-rosette ox-heft-durham-rosette-tl" />
          <Rosette className="ox-heft-durham-rosette ox-heft-durham-rosette-tr" />
          <Rosette className="ox-heft-durham-rosette ox-heft-durham-rosette-bl" />
          <Rosette className="ox-heft-durham-rosette ox-heft-durham-rosette-br" />
          <span className="ox-heft-durham-sheen" aria-hidden="true" />
        </figure>

        <div className="ox-heft-durham-side">
          <p className="ox-heft-durham-kicker">
            Ketton Hall, County Durham · <span className="ox-heft-durham-nowrap">1796–1807</span>
          </p>
          <h1 className="ox-heft-durham-title">The Durham Ox</h1>
          <p className="ox-heft-durham-sub">The first ox people paid to see</p>

          <div className="ox-heft-durham-label">
            <p className="ox-heft-durham-label-name">The Durham Ox</p>
            <p className="ox-heft-durham-label-meta">Shorthorn steer · oil on canvas, in the manner of the 1802 show portrait</p>
            <p>
              Bred by Charles Colling and first shown at Darlington in 1799 as the Ketton Ox. In 1801 he was sold for
              £250 to John Day of Harmston, who had a carriage built to carry him and exhibited him across England and
              Scotland for five years.
            </p>
            <p>
              Coming out of that carriage at Oxford in February 1807 he dislocated a hip. He was slaughtered that
              April, and his picture hung outside inns for another century.
            </p>
          </div>

          <dl className="ox-heft-durham-figures">
            <div>
              <dt>Takings at the gate, one London day</dt>
              <dd>£97</dd>
            </div>
            <div>
              <dt>Prints of him sold in 1802 alone</dt>
              <dd>2,000</dd>
            </div>
            <div>
              <dt>His weight, as computed under the portrait</dt>
              <dd>171 st</dd>
            </div>
          </dl>
        </div>
      </div>
    </main>
  )
}

function Rosette({ className }) {
  return (
    <svg className={className} viewBox="0 0 80 80" aria-hidden="true">
      <circle cx="40" cy="40" r="36" fill="#c9a24a" stroke="#7a5a1e" strokeWidth="2" />
      {Array.from({ length: 12 }, (_, i) => (
        <ellipse key={i} cx="40" cy="15" rx="6" ry="13" fill="#e3c878" stroke="#7a5a1e" strokeWidth="1.2" transform={`rotate(${i * 30} 40 40)`} />
      ))}
      <circle cx="40" cy="40" r="12" fill="#a8813a" stroke="#7a5a1e" strokeWidth="1.5" />
      <circle cx="37" cy="37" r="4" fill="#f3dd9c" />
    </svg>
  )
}
