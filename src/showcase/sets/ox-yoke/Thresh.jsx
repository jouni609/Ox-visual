import { motion } from 'framer-motion'
import './thresh.css'

function WheatCorner({ className }) {
  return (
    <svg className={className} viewBox="0 0 60 120" aria-hidden="true">
      <path d="M30,116 L30,20" stroke="var(--t-ink)" strokeWidth="3" strokeLinecap="round" />
      <g fill="var(--t-ochre)" stroke="var(--t-ink)" strokeWidth="2">
        <path d="M30,26 C18,20 14,8 22,4 C30,10 34,20 30,26 Z" />
        <path d="M30,26 C42,20 46,8 38,4 C30,10 26,20 30,26 Z" />
        <path d="M30,44 C16,40 12,30 20,24 C30,28 34,36 30,44 Z" />
        <path d="M30,44 C44,40 48,30 40,24 C30,28 26,36 30,44 Z" />
        <path d="M30,62 C18,58 14,48 22,44 C30,48 34,54 30,62 Z" />
        <path d="M30,62 C42,58 46,48 38,44 C30,48 26,54 30,62 Z" />
      </g>
    </svg>
  )
}

function Diagram() {
  return (
    <svg className="ox-yoke-thresh-diagram" viewBox="0 0 120 120" aria-hidden="true">
      <circle cx="60" cy="60" r="44" fill="none" stroke="var(--t-ink)" strokeWidth="2" strokeDasharray="5 7" />
      <g className="ox-yoke-thresh-diagram-spin">
        <circle cx="60" cy="16" r="7" fill="var(--t-red)" />
        <path d="M53,16 L47,10 M67,16 L73,10" stroke="var(--t-ink)" strokeWidth="2.4" strokeLinecap="round" />
      </g>
      <circle cx="60" cy="60" r="5" fill="var(--t-ink)" />
      <path d="M56,60 L34,60 M60,56 L60,38" stroke="var(--t-ink)" strokeWidth="1.6" />
      <text x="60" y="112" textAnchor="middle" fontSize="11" letterSpacing="2" fill="var(--t-ink)" fontFamily="'Work Sans', sans-serif">
        THE WALK
      </text>
    </svg>
  )
}

function Zebu() {
  return (
    <g transform="translate(756 0) scale(-1 1)">
      <path d="M266,168 C262,146 276,132 300,126 C332,118 372,118 398,126 C422,133 434,150 436,174 C438,204 432,230 410,242 C380,254 318,254 292,246 C270,240 264,222 264,198 Z" fill="var(--t-ink)" />
      <path d="M352,128 C352,100 374,86 396,94 C412,100 416,120 408,132 C390,124 370,124 352,128 Z" fill="var(--t-ink)" />
      <path d="M420,152 C436,142 456,146 468,162 L484,188 C488,198 482,210 470,212 L448,214 C436,214 428,206 426,196 Z" fill="var(--t-ink)" />
      <path d="M474,192 C472,202 474,210 480,212 L488,210 C488,202 486,194 482,190 Z" fill="var(--t-paper)" />
      <g fill="none" stroke="var(--t-paper)" strokeWidth="4" strokeLinecap="round" opacity="0.5">
        <path d="M300,150 C296,180 298,212 306,238" />
        <path d="M340,146 C338,178 340,212 348,240" />
      </g>
      <g fill="var(--t-paper)">
        <path d="M444,150 C442,122 458,100 482,96 C468,108 460,128 460,152 Z" />
        <path d="M458,154 C458,128 472,108 494,104 C482,116 474,134 472,158 Z" opacity="0.9" />
      </g>
      <path d="M434,160 C442,154 452,154 456,160 C450,164 440,166 434,162 Z" fill="var(--t-paper)" opacity="0.7" />
      <circle cx="458" cy="176" r="4.4" fill="var(--t-paper)" />
      <path d="M452,210 C442,228 440,248 450,262 C446,246 448,228 458,216 Z" fill="var(--t-ink)" />
      <g fill="var(--t-ink)">
        <path d="M398,240 L412,286 L430,286 L420,242 Z" />
        <path d="M368,242 L362,286 L380,286 L384,244 Z" />
        <path d="M292,244 L284,286 L302,286 L308,246 Z" />
        <path d="M318,246 L316,286 L334,286 L336,248 Z" />
      </g>
      <g fill="var(--t-ink)">
        <rect x="412" y="282" width="24" height="10" />
        <rect x="362" y="282" width="24" height="10" />
        <rect x="284" y="282" width="24" height="10" />
        <rect x="316" y="282" width="24" height="10" />
      </g>
      <path d="M268,160 C258,180 256,210 262,238 L268,256" fill="none" stroke="var(--t-ink)" strokeWidth="7" strokeLinecap="round" />
      <path d="M264,254 C258,264 256,278 262,290 C266,280 270,266 274,258 Z" fill="var(--t-ink)" />
    </g>
  )
}

function Scene() {
  const grain = Array.from({ length: 26 }, (_, i) => 8 + i * 26)
  const stalks = Array.from({ length: 15 }, (_, i) => 4 + i * 44)
  return (
    <svg className="ox-yoke-thresh-art" viewBox="0 0 640 320" aria-hidden="true">
      <g fill="var(--t-ink)" opacity="0.25">
        {stalks.map((x) => (
          <path key={x} d={`M${x},318 L${x + 8},288`} stroke="var(--t-ink)" strokeWidth="2" fill="none" />
        ))}
      </g>

      <rect x="0" y="262" width="640" height="58" fill="var(--t-ochre)" opacity="0.5" />
      <rect x="0" y="262" width="640" height="4" fill="var(--t-ink)" />

      <g className="ox-yoke-thresh-chaff" fill="var(--t-ink)" opacity="0.7">
        {grain.map((x) => (
          <ellipse key={x} cx={x} cy={272 + (x % 3) * 6} rx="4" ry="2.4" />
        ))}
      </g>

      <g>
        <rect x="96" y="70" width="14" height="192" fill="var(--t-ink)" />
        <rect x="60" y="70" width="86" height="12" fill="var(--t-ink)" />
        <path d="M110,86 C200,122 280,158 336,176" fill="none" stroke="var(--t-ink)" strokeWidth="4" />
        <circle cx="60" cy="76" r="7" fill="var(--t-red)" />
        <circle cx="146" cy="76" r="7" fill="var(--t-red)" />
      </g>

      <Zebu />

      <g fill="var(--t-paper)" opacity="0.35">
        <path d="M180,60 C200,50 220,50 236,60" fill="none" stroke="var(--t-ink)" strokeWidth="2" />
        <path d="M420,52 C440,44 460,44 476,52" fill="none" stroke="var(--t-ink)" strokeWidth="2" />
      </g>
    </svg>
  )
}

export default function Thresh() {
  return (
    <div className="ox-yoke-thresh th-ox-yoke-thresh">
      <motion.div
        className="ox-yoke-thresh-poster"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <header className="ox-yoke-thresh-mast">
          <span>HARVEST PRESS · FLOOR Nº 7</span>
          <span>DEUT. 25:4</span>
        </header>

        <div className="ox-yoke-thresh-titleblock">
          <WheatCorner className="ox-yoke-thresh-wheat ox-yoke-thresh-wheat-left" />
          <WheatCorner className="ox-yoke-thresh-wheat ox-yoke-thresh-wheat-right" />
          <motion.h1
            className="ox-yoke-thresh-title"
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7, ease: 'easeOut' }}
          >
            The
            <span className="ox-yoke-thresh-title-reverse">Threshing</span>
            Floor
          </motion.h1>
          <p className="ox-yoke-thresh-quote">
            &ldquo;Thou shalt not muzzle the ox that treadeth out the grain.&rdquo;
            <span className="ox-yoke-thresh-quote-attr">DEUTERONOMY 25:4</span>
          </p>
        </div>

        <motion.div
          className="ox-yoke-thresh-plate"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.45, duration: 0.8 }}
        >
          <Scene />
          <div className="ox-yoke-thresh-side">
            <Diagram />
            <p className="ox-yoke-thresh-note">
              One pole, one rope, one circle. The ox walks it all afternoon while the kernels drop.
            </p>
          </div>
        </motion.div>

        <div className="ox-yoke-thresh-copy">
          <p>
            Cut stalks go down, the floor is swept, and the rest is given to the ox. Tethered to the
            pole it walks the same ring for hours, hooves pressing loose straw until the grain falls
            free and the chaff lifts on the evening wind. The rule is old and plain: the worker eats
            from the floor he works. The muzzle stays off.
          </p>
        </div>

        <footer className="ox-yoke-thresh-foot">
          <div className="ox-yoke-thresh-stamp">
            <span className="ox-yoke-thresh-stamp-sign">SET 2 · DESIGNED BY OMEN ALPHA</span>
            <span className="ox-yoke-thresh-stamp-edition">LINOCUT · CUT Nº 2 OF 5</span>
          </div>
          <p className="ox-yoke-thresh-colophon">
            PULLED BY HAND FROM THE FLOOR BLOCK · OCHRE AND UMBER INK
          </p>
        </footer>
      </motion.div>
    </div>
  )
}
