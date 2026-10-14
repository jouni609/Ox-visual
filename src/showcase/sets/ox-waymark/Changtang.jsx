import { motion } from 'framer-motion'
import './changtang.css'

function fringe() {
  const pts = []
  let i = 0
  for (let x = 694; x >= 214; x -= 15) {
    const y = i % 2 ? 430 + ((i * 7) % 6) : 448 + ((i * 5) % 7)
    pts.push(`L ${x} ${y}`)
    i += 1
  }
  return pts.join(' ')
}

const YAK =
  'M 150 330 C 146 312 152 292 164 278 C 176 262 190 250 206 244 C 220 238 236 236 248 232 C 268 200 300 160 340 146 C 372 136 404 140 432 152 C 480 170 560 186 620 196 C 660 202 690 216 700 240 C 708 262 706 290 700 318 L 708 352 L 696 366 L 706 394 L 692 404 L 700 428 ' +
  fringe() +
  ' L 214 424 L 206 404 L 196 410 L 202 384 L 188 380 L 196 358 C 186 352 176 346 168 342 C 160 340 154 336 150 330 Z'

const STRANDS = Array.from({ length: 24 }, (_, i) => {
  const x = 236 + i * 19
  const top = 290 + Math.sin(i * 1.7) * 18
  return `M ${x} ${top} C ${x - 6} ${top + 50} ${x + 6} ${top + 90} ${x - 4} ${438}`
})

const FLAG_COLORS = ['#2459a6', '#f4f6f8', '#c9302c', '#2e8b57', '#f2c230']
const FLAGS = Array.from({ length: 15 }, (_, i) => i)

const TICKS = [6000, 5500, 5000, 4500, 4000, 3500, 3000]

const FACTS = [
  {
    alt: '5,000 m',
    h: 'A coat for the thin air',
    b: 'Long guard hair falls in a skirt almost to the snow; beneath it a down so fine it is spun like cashmere. Big lungs and a big heart do the rest. A yak suffers in a lowland summer the way a cow suffers in a blizzard.',
  },
  {
    alt: '4,500 m',
    h: 'A whole household on four legs',
    b: 'Milk from the female, the dri, becomes butter for tea and lamps. Hair is woven into the black tents of the nomads. On a treeless plateau, dried dung is the only fire there is.',
  },
  {
    alt: '3,500 m',
    h: 'Where the yak hands over',
    b: 'Lower down, herders cross yak with cattle. The dzo is calmer and bears heat better, and it pulls the plough in the barley terraces the yak would never come down to.',
  },
]

function Yak() {
  return (
    <svg
      className="ox-waymark-ct-yak"
      viewBox="90 120 720 380"
      role="img"
      aria-label="A shaggy yak standing in profile, its hair hanging to the snow and its breath steaming"
    >
      <defs>
        <linearGradient id="ox-waymark-ct-coat" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#3b2a20" />
          <stop offset="0.6" stopColor="#2a1d17" />
          <stop offset="1" stopColor="#1c130f" />
        </linearGradient>
        <linearGradient id="ox-waymark-ct-horn" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0" stopColor="#e6ddcf" />
          <stop offset="1" stopColor="#7d7266" />
        </linearGradient>
      </defs>
      <ellipse cx="450" cy="486" rx="320" ry="16" fill="#9fb8c9" opacity="0.5" />
      <g fill="#1c130f">
        <path d="M 258 420 L 292 420 L 290 476 L 296 486 L 260 486 L 264 476 Z" />
        <path d="M 306 420 L 334 420 L 330 470 L 334 480 L 304 480 L 308 470 Z" opacity="0.8" />
        <path d="M 600 420 L 634 420 L 630 476 L 638 486 L 600 486 L 604 476 Z" />
        <path d="M 556 420 L 584 420 L 580 470 L 586 480 L 554 480 L 558 470 Z" opacity="0.8" />
      </g>
      <path
        d="M 248 232 C 260 214 268 196 266 176 C 264 166 258 158 250 152 C 262 168 256 190 242 210 Z"
        fill="url(#ox-waymark-ct-horn)"
      />
      <path
        className="ox-waymark-ct-tail"
        d="M 696 238 C 724 252 736 300 742 350 C 748 390 760 420 774 442 L 758 448 L 752 436 L 738 450 L 732 434 L 722 444 C 716 400 710 340 700 286 Z"
        fill="#241914"
      />
      <path d={YAK} fill="url(#ox-waymark-ct-coat)" />
      <g fill="none" stroke="#4d382b" strokeWidth="2.4" strokeLinecap="round" opacity="0.8">
        {STRANDS.map((d) => (
          <path key={d} d={d} />
        ))}
      </g>
      <path d="M 300 160 C 330 140 380 134 432 150 C 410 154 380 152 350 158 C 330 162 312 168 300 160 Z" fill="#f4f6f8" />
      <path d="M 486 176 C 520 182 560 188 600 194 C 570 198 530 194 500 186 Z" fill="#f4f6f8" opacity="0.9" />
      <path d="M 150 330 C 146 312 152 296 162 284 C 172 292 178 310 176 330 C 170 338 158 338 150 330 Z" fill="#6b5a50" />
      <path d="M 196 252 C 206 246 218 246 226 252 C 222 262 210 268 200 264 Z" fill="#efe9df" />
      <path
        d="M 230 244 C 210 236 196 220 192 200 C 190 186 196 172 208 164 C 204 178 206 194 214 206 C 222 218 234 228 246 234 Z"
        fill="url(#ox-waymark-ct-horn)"
      />
      <path d="M 238 252 C 254 254 268 262 276 272 C 260 276 244 270 234 262 Z" fill="#3b2a20" />
      <circle cx="206" cy="278" r="5" fill="#0c0806" />
      <circle cx="207.5" cy="276.5" r="1.4" fill="#efe9df" />
      <path d="M 156 316 C 160 314 164 316 164 320" fill="none" stroke="#0c0806" strokeWidth="2.4" />
      {[0, 1, 2].map((i) => (
        <circle
          key={i}
          className="ox-waymark-ct-breath"
          style={{ animationDelay: `${i}s` }}
          cx="136"
          cy="324"
          r="10"
          fill="#ffffff"
        />
      ))}
    </svg>
  )
}

function Flags() {
  return (
    <svg className="ox-waymark-ct-flags" viewBox="0 0 1440 170" preserveAspectRatio="xMidYMin slice" aria-hidden="true">
      <path d="M -20 20 Q 720 150 1460 30" fill="none" stroke="#4b5866" strokeWidth="2" />
      {FLAGS.map((i) => {
        const t = (i + 0.5) / FLAGS.length
        const x = -20 + 1480 * t
        const y = (1 - t) * (1 - t) * 20 + 2 * (1 - t) * t * 150 + t * t * 30
        return (
          <g key={i} transform={`translate(${x - 34} ${y - 4})`}>
            <g className="ox-waymark-ct-flag" style={{ animationDelay: `${-(i % 5) * 0.22}s` }}>
              <rect width="68" height="78" fill={FLAG_COLORS[i % 5]} stroke="#b9c6d1" strokeWidth="1" />
              <g stroke={i % 5 === 1 ? '#7d8a96' : 'rgba(255,255,255,0.55)'} strokeWidth="2" strokeLinecap="round">
                <path d="M 14 22 L 54 22 M 14 34 L 48 34 M 14 46 L 54 46 M 14 58 L 42 58" />
              </g>
            </g>
          </g>
        )
      })}
    </svg>
  )
}

function Ridges() {
  return (
    <svg className="ox-waymark-ct-ridges" viewBox="0 0 1440 500" preserveAspectRatio="xMidYMax slice" aria-hidden="true">
      <path d="M 0 300 L 140 190 L 220 240 L 380 120 L 470 200 L 560 150 L 700 260 L 820 140 L 960 230 L 1080 110 L 1220 220 L 1320 170 L 1440 240 L 1440 500 L 0 500 Z" fill="#b9cddb" />
      <path d="M 380 120 L 420 152 L 400 150 L 384 170 L 360 140 Z M 820 140 L 858 172 L 836 168 L 818 188 L 796 162 Z M 1080 110 L 1120 146 L 1096 142 L 1080 160 L 1056 134 Z" fill="#f4f6f8" />
      <path d="M 0 360 L 200 280 L 340 330 L 520 260 L 700 330 L 900 270 L 1100 340 L 1300 290 L 1440 330 L 1440 500 L 0 500 Z" fill="#8fb1c9" />
      <path d="M 0 420 C 300 380 600 400 900 390 C 1150 382 1300 400 1440 396 L 1440 500 L 0 500 Z" fill="#eef3f6" />
    </svg>
  )
}

export default function Changtang() {
  return (
    <div className="th-ox-waymark-ct">
      <aside className="ox-waymark-ct-gauge" aria-hidden="true">
        {TICKS.map((t) => (
          <span key={t} className={t === 5000 ? 'ox-waymark-ct-tick is-here' : 'ox-waymark-ct-tick'}>
            {t.toLocaleString('en-US')}
          </span>
        ))}
      </aside>

      <section className="ox-waymark-ct-hero">
        <Ridges />
        <Flags />
        <div className="ox-waymark-ct-snow" aria-hidden="true" />
        <div className="ox-waymark-ct-hero-inner">
          <div className="ox-waymark-ct-copy">
            <p className="ox-waymark-ct-word">
              <span lang="bo">གཡག</span> · yak · <span lang="bo">འབྲོང</span> · drong
            </p>
            <h1 className="ox-waymark-ct-title">
              Yak country
              <span>above the last tree</span>
            </h1>
          </div>
          <motion.div
            className="ox-waymark-ct-figure"
            initial={{ x: 60, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <Yak />
          </motion.div>
        </div>
      </section>

      <section className="ox-waymark-ct-body">
        <p className="ox-waymark-ct-intro">
          The Changtang, the northern plain of the Tibetan Plateau, lies mostly above four and a half thousand
          metres. Trees gave up long before this height. The yak did not — <i lang="la">Bos grunniens</i>, the
          grunting ox, which never lows like a cow and carries the whole high economy on its back.
        </p>
        <ol className="ox-waymark-ct-steps">
          {FACTS.map((f, i) => (
            <motion.li
              key={f.h}
              className="ox-waymark-ct-step"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: 'easeOut' }}
            >
              <span className="ox-waymark-ct-alt">{f.alt}</span>
              <h2>{f.h}</h2>
              <p>{f.b}</p>
            </motion.li>
          ))}
        </ol>
        <div className="ox-waymark-ct-wild">
          <p className="ox-waymark-ct-wild-big">
            <span lang="bo">འབྲོང</span>
          </p>
          <p>
            The wild yak, the <em>drong</em>, still roams the far Changtang — larger than any domestic yak,
            black to the hoof, perhaps ten thousand left. Every herd of domestic yak on the
            plateau began with it.
          </p>
        </div>
      </section>

      <footer className="ox-waymark-ct-foot">
        <motion.div
          className="ox-waymark-ct-sigflag"
          style={{ originX: 0.5, originY: 0 }}
          animate={{ rotate: [-2, 2, -2] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        >
          <span className="ox-waymark-ct-sigflag-cord" aria-hidden="true" />
          <p className="ox-waymark-ct-sigflag-text">SET XXXIV · DESIGNED BY CLAUDE OPUS 5.5</p>
          <p className="ox-waymark-ct-sigflag-sub">woodblock-printed and hung where the wind can read it</p>
        </motion.div>
      </footer>
    </div>
  )
}
