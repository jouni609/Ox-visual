import { motion } from 'framer-motion'
import './sarsen.css'

function Ox({ dark = false }) {
  return (
    <g>
      <path
        d="M64,214 C58,188 72,166 100,158 C134,148 196,144 232,152 C262,158 278,176 282,202 C286,232 280,262 258,276 L118,280 C92,280 70,262 66,238 Z"
        fill={dark ? 'var(--n-ox-deep)' : 'var(--n-ox)'}
      />
      <path d="M104,158 C136,146 190,144 226,152 C204,160 150,164 118,166 Z" fill="var(--n-ox-shine)" opacity={dark ? 0.4 : 0.65} />
      <path d="M96,258 C130,268 190,268 226,258 C210,272 128,274 100,268 Z" fill="var(--n-ox-deep)" opacity={dark ? 0.7 : 0.5} />

      <g fill={dark ? 'var(--n-ox-deep)' : 'var(--n-ox)'}>
        <path d="M112,278 L100,330 L124,330 L134,280 Z" />
        <path d="M146,280 L142,330 L166,330 L170,282 Z" />
        <path d="M228,276 L230,330 L254,330 L256,278 Z" />
        <path d="M256,274 L262,330 L286,330 L288,278 Z" />
      </g>
      <g fill="var(--n-hoof)">
        <rect x="98" y="326" width="30" height="14" rx="2" />
        <rect x="140" y="326" width="30" height="14" rx="2" />
        <rect x="228" y="326" width="30" height="14" rx="2" />
        <rect x="260" y="326" width="30" height="14" rx="2" />
      </g>

      <path
        d="M270,196 C296,196 320,212 334,238 L348,266 C352,278 346,290 332,292 L300,294 C284,294 274,284 272,270 Z"
        fill={dark ? 'var(--n-ox-deep)' : 'var(--n-ox)'}
      />
      <path d="M344,268 C352,268 358,274 358,282 C358,290 350,294 342,292 L326,290 L330,270 Z" fill="var(--n-muzzle)" />
      <circle cx="330" cy="252" r="4" fill="var(--n-chalk)" />
      <path d="M312,206 C326,188 350,182 368,190 C350,196 336,208 330,226 Z" fill="var(--n-horn)" />
      <path d="M326,214 C340,198 360,194 376,202 C360,206 346,216 340,230 Z" fill="var(--n-horn)" opacity="0.85" />
      <path d="M310,222 C318,216 328,216 334,222 C326,228 316,228 310,224 Z" fill="var(--n-ox-deep)" />

      <path d="M262,214 C250,232 248,258 258,278" fill="none" stroke="var(--n-strap)" strokeWidth="9" strokeLinecap="round" />
      <path d="M256,224 L246,232 M254,244 L244,250" stroke="var(--n-strap)" strokeWidth="5" strokeLinecap="round" />

      <path d="M70,182 C56,198 52,226 60,252 L68,272" fill="none" stroke={dark ? 'var(--n-ox-deep)' : 'var(--n-ox)'} strokeWidth="9" strokeLinecap="round" />
      <path d="M62,268 C54,280 52,296 58,310 C64,298 68,282 72,272 Z" fill="var(--n-tail)" />
    </g>
  )
}

function Scene() {
  const speckles = [
    [540, 200], [600, 230], [668, 190], [712, 250], [566, 262], [640, 272], [698, 210], [510, 246],
    [626, 208], [734, 196], [586, 244], [682, 262],
  ]
  return (
    <svg className="ox-yoke-sarsen-art" viewBox="0 0 1000 420" aria-hidden="true">
      <rect x="0" y="336" width="1000" height="84" fill="var(--n-chalk-ground)" />
      <g fill="var(--n-flint-fleck)">
        <circle cx="90" cy="376" r="3" />
        <circle cx="180" cy="396" r="2.4" />
        <circle cx="320" cy="380" r="2.8" />
        <circle cx="470" cy="400" r="2.2" />
        <circle cx="640" cy="382" r="3" />
        <circle cx="800" cy="398" r="2.4" />
        <circle cx="920" cy="374" r="2.8" />
      </g>
      <g stroke="var(--n-chalk-deep)" strokeWidth="2" opacity="0.8">
        <path d="M40,352 L160,352 M260,366 L400,366 M560,356 L700,356 M840,362 L980,362" />
      </g>

      <g opacity="0.5" fill="var(--n-moss)">
        <path d="M0,336 C80,328 180,328 260,336 L260,344 L0,344 Z" />
        <path d="M760,338 C860,330 940,332 1000,340 L1000,348 L760,348 Z" />
      </g>

      <g className="ox-yoke-sarsen-team">
        <g transform="translate(-52,6) scale(0.96)" opacity="0.88">
          <Ox dark />
        </g>
        <Ox />
      </g>

      <path d="M366,258 C400,262 436,266 470,266" fill="none" stroke="var(--n-rope)" strokeWidth="7" strokeLinecap="round" />
      <path d="M358,282 C394,286 430,288 466,286" fill="none" stroke="var(--n-rope)" strokeWidth="6" strokeLinecap="round" />
      <path d="M468,262 L488,258 L486,272 L466,274 Z" fill="var(--n-rope)" />

      <g>
        <rect x="470" y="308" width="320" height="14" fill="var(--n-oak)" />
        <rect x="486" y="290" width="290" height="10" fill="var(--n-oak-deep)" />
        <rect x="500" y="212" width="268" height="80" fill="var(--n-stone)" />
        <path d="M500,212 C540,196 740,196 768,212 L768,222 L500,222 Z" fill="var(--n-stone-light)" />
        <g fill="var(--n-stone-light)" opacity="0.7">
          {speckles.map(([x, y], i) => (
            <circle key={i} cx={x} cy={y} r="2.6" />
          ))}
        </g>
        <path d="M530,224 L544,260 M660,226 L650,268 M712,232 L724,262" stroke="var(--n-stone-deep)" strokeWidth="2" opacity="0.6" />
        <path d="M500,292 L768,292 L768,304 L500,304 Z" fill="var(--n-stone-deep)" opacity="0.5" />
      </g>

      <g className="ox-yoke-sarsen-rollers" fill="var(--n-oak-deep)" stroke="var(--n-oak)" strokeWidth="3">
        <circle cx="800" cy="316" r="15" />
        <circle cx="848" cy="316" r="15" />
      </g>

      <g fill="var(--n-moss-deep)">
        <path d="M880,262 C872,266 868,278 872,290 L872,318 L886,318 L886,290 C890,280 890,268 884,262 Z" />
        <circle cx="884" cy="248" r="13" />
      </g>
      <path d="M868,258 L846,278 M900,258 L876,282" stroke="var(--n-moss-deep)" strokeWidth="5" strokeLinecap="round" />
      <path d="M846,278 L800,300" stroke="var(--n-oak-deep)" strokeWidth="6" strokeLinecap="round" />
      <path d="M920,318 L940,340 M856,318 L846,340" stroke="var(--n-moss-deep)" strokeWidth="6" strokeLinecap="round" />

      <g className="ox-yoke-sarsen-dust" fill="var(--n-chalk-deep)">
        <circle cx="120" cy="336" r="5" opacity="0.7" />
        <circle cx="150" cy="330" r="3.4" opacity="0.5" />
        <circle cx="260" cy="334" r="4.4" opacity="0.6" />
        <circle cx="292" cy="330" r="3" opacity="0.45" />
      </g>
    </svg>
  )
}

const DATA = [
  ['24 T', 'one sarsen, ready or not'],
  ['25 KM', 'downs to the plain'],
  ['1:12', 'the grade that decides the day'],
]

export default function Sarsen() {
  return (
    <div className="ox-yoke-sarsen th-ox-yoke-sarsen">
      <motion.div
        initial={{ opacity: 0, y: 26 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
      >
        <header className="ox-yoke-sarsen-head">
          <p className="ox-yoke-sarsen-kicker">SARSEN · C. 2500 BC · THE OLD WAY</p>
          <h1 className="ox-yoke-sarsen-title">
            The<span className="ox-yoke-sarsen-title-accent">Haul</span>
          </h1>
          <p className="ox-yoke-sarsen-lede">
            Twenty-four tonnes of sandstone, twenty-five kilometres of chalk, and no wheel big
            enough to matter. The stone came the slow way: on a sledge, on rollers, on oxen.
          </p>
        </header>

        <motion.figure
          className="ox-yoke-sarsen-plate"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35, duration: 0.9 }}
        >
          <Scene />
          <figcaption className="ox-yoke-sarsen-caption">
            TANDEM YOKE AT THE COLLAR · ROLLERS FED FROM THE REAR, ONE BY ONE
          </figcaption>
        </motion.figure>

        <div className="ox-yoke-sarsen-lower">
          <p className="ox-yoke-sarsen-body">
            A yoke of oxen cannot hurry twenty-four tonnes, and nothing here hurries. Rollers feed
            under the runners one at a time while the team leans into the collars, breath steaming,
            hooves finding the chalk. The stone moves slower than a walking man. It still arrives,
            and five thousand years on it has not moved since.
          </p>
          <dl className="ox-yoke-sarsen-data">
            {DATA.map(([n, label]) => (
              <div className="ox-yoke-sarsen-row" key={label}>
                <dt>{n}</dt>
                <dd>{label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <footer className="ox-yoke-sarsen-sign-wrap">
          <span className="ox-yoke-sarsen-sign">SET 5 · DESIGNED BY OMEN ALPHA</span>
        </footer>
      </motion.div>
    </div>
  )
}
