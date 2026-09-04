import { motion } from 'framer-motion'
import './furrow.css'

function Fleuron({ className }) {
  return (
    <svg className={className} viewBox="0 0 90 18" aria-hidden="true">
      <path d="M4,9 C14,2 24,2 32,9 C24,16 14,16 4,9 Z" fill="none" stroke="currentColor" strokeWidth="1.4" />
      <path d="M45,9 L45,3 M45,9 L45,15 M41,9 L49,9" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <circle cx="45" cy="9" r="2.4" fill="currentColor" />
      <path d="M86,9 C76,2 66,2 58,9 C66,16 76,16 86,9 Z" fill="none" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  )
}

function Drollery() {
  return (
    <svg className="ox-yoke-furrow-hare" viewBox="0 0 70 80" aria-hidden="true">
      <path
        d="M38,74 C30,74 26,68 28,60 C22,58 20,50 26,44 C20,40 20,30 28,26 L30,10 C31,5 36,4 38,9 C40,3 46,3 47,9 L46,26 C56,28 62,36 60,46 C58,56 52,64 44,68 C46,72 44,74 38,74 Z"
        fill="var(--f-parchment-deep)"
        stroke="var(--f-ink)"
        strokeWidth="2"
      />
      <circle cx="36" cy="16" r="1.8" fill="var(--f-ink)" />
      <path d="M44,38 C50,40 52,46 48,50" fill="none" stroke="var(--f-rubric)" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

function PloughScene() {
  return (
    <g>
      <path d="M60,84 C40,70 24,72 10,86 L4,96 C0,102 2,110 10,112 L28,114 C38,115 48,110 52,100 L60,92 Z" fill="var(--f-hill)" opacity="0.5" />
      <path d="M640,96 C620,80 600,82 586,96 L580,106 C576,112 578,120 586,122 L606,124 C616,125 626,120 630,110 L640,100 Z" fill="var(--f-hill)" opacity="0.5" />

      <path d="M0,306 L120,306 C140,302 160,302 180,306 L720,306 L720,360 L0,360 Z" fill="var(--f-sod)" />
      <g stroke="var(--f-furrow)" strokeWidth="2.4" strokeLinecap="round" opacity="0.7">
        <path d="M20,324 L90,324" />
        <path d="M130,338 L210,338" />
        <path d="M250,328 L330,328" />
        <path d="M370,340 L440,340" />
        <path d="M500,332 L560,332" />
        <path d="M600,342 L680,342" />
        <path d="M80,350 L150,350" />
        <path d="M300,354 L370,354" />
      </g>

      <g>
        <path
          d="M204,196 C198,172 206,150 228,142 C252,133 296,131 320,139 C342,147 352,166 350,192 C348,220 338,242 314,247 L232,247 C210,247 198,232 198,214 Z"
          fill="var(--f-ox)"
        />
        <path d="M234,142 C258,133 298,132 320,140 C300,148 258,150 236,152 Z" fill="var(--f-patch)" opacity="0.7" />
        <path d="M212,226 C224,240 244,246 268,245 C248,250 224,246 212,234 Z" fill="var(--f-ox-deep)" opacity="0.6" />

        <g fill="var(--f-ox)">
          <path d="M222,244 L214,294 L232,294 L240,246 Z" />
          <path d="M252,246 L248,294 L266,294 L270,248 Z" />
          <path d="M312,244 L310,294 L328,294 L330,246 Z" />
          <path d="M342,242 L344,294 L362,294 L364,244 Z" />
        </g>
        <g fill="var(--f-ink)">
          <rect x="214" y="292" width="20" height="12" />
          <rect x="248" y="292" width="20" height="12" />
          <rect x="310" y="292" width="20" height="12" />
          <rect x="344" y="292" width="20" height="12" />
        </g>

        <path
          d="M212,178 C192,170 172,176 158,192 L128,224 C120,233 124,246 137,249 L166,254 C182,256 196,248 202,234 L210,208 Z"
          fill="var(--f-ox)"
        />
        <path d="M134,226 C126,232 128,243 138,247 L162,251 C171,252 175,245 170,239 L148,228 Z" fill="var(--f-muzzle)" />
        <circle cx="146" cy="238" r="2.2" fill="var(--f-ink)" />
        <circle cx="176" cy="214" r="3.4" fill="var(--f-parchment)" />

        <path d="M164,190 C152,170 158,146 178,136 C170,152 168,168 178,184 Z" fill="var(--f-horn)" />
        <path d="M180,194 C172,174 180,154 200,146 C190,160 188,176 196,192 Z" fill="var(--f-horn)" />
        <path d="M196,206 C204,198 216,198 222,204 C214,210 204,212 196,208 Z" fill="var(--f-ox-deep)" />

        <path d="M348,160 C360,180 362,214 354,246 L348,264" fill="none" stroke="var(--f-ox)" strokeWidth="7" strokeLinecap="round" />
        <path d="M344,260 C336,270 334,284 340,294 C344,286 348,274 352,266 Z" fill="var(--f-ox-deep)" />
      </g>

      <g>
        <path d="M186,140 L324,150 L322,162 L184,152 Z" fill="var(--f-wood)" />
        <path d="M198,148 C198,170 210,184 228,184" fill="none" stroke="var(--f-wood)" strokeWidth="10" strokeLinecap="round" />
        <path d="M322,158 C356,172 390,190 420,208" fill="none" stroke="var(--f-rope)" strokeWidth="4" strokeLinecap="round" />
      </g>

      <g>
        <path d="M408,198 L470,282" fill="none" stroke="var(--f-wood)" strokeWidth="9" strokeLinecap="round" />
        <path d="M452,276 L512,276 L524,306 L446,306 Z" fill="var(--f-blade)" />
        <path d="M470,282 C492,262 512,252 534,250 L542,266 C520,268 502,278 490,294 Z" fill="var(--f-wood)" />
        <path d="M506,252 L560,214" fill="none" stroke="var(--f-wood)" strokeWidth="7" strokeLinecap="round" />
        <path d="M520,262 L572,226" fill="none" stroke="var(--f-wood)" strokeWidth="7" strokeLinecap="round" />
        <path d="M524,296 C538,288 548,292 550,300 C542,304 530,302 524,298 Z" fill="var(--f-furrow)" />
      </g>

      <g>
        <path d="M576,296 L574,258 L586,258 L588,296 Z" fill="var(--f-hood)" />
        <path d="M594,296 L594,258 L606,258 L604,296 Z" fill="var(--f-hood)" />
        <rect x="570" y="292" width="20" height="12" fill="var(--f-ink)" />
        <rect x="592" y="292" width="20" height="12" fill="var(--f-ink)" />
        <path d="M570,206 C566,220 568,240 576,252 L604,252 C612,240 614,218 608,204 C600,196 580,196 570,206 Z" fill="var(--f-tunic)" />
        <circle cx="590" cy="186" r="13" fill="var(--f-muzzle)" />
        <path d="M578,186 C576,172 586,162 598,164 C608,166 612,176 610,186 C602,180 588,180 578,186 Z" fill="var(--f-hood)" />
        <path d="M612,182 C622,188 626,198 622,208 C620,198 616,190 610,186 Z" fill="var(--f-hood)" />
        <path d="M578,212 L562,216" fill="none" stroke="var(--f-tunic)" strokeWidth="8" strokeLinecap="round" />
        <path d="M606,220 L588,228" fill="none" stroke="var(--f-tunic)" strokeWidth="8" strokeLinecap="round" />
      </g>
    </g>
  )
}

const VERSE = 'Hic bos terram aperit, et sulcus primus annum incipit. The winter field is iron until the yoke comes down. Steady at the collar, the ox leans into the beam and the first furrow opens. The ploughman walks behind all day and says little; gee and haw do the talking. What the ox breaks open, the year fills with bread.'

export default function Furrow() {
  return (
    <div className="ox-yoke-furrow th-ox-yoke-furrow">
      <motion.article
        className="ox-yoke-furrow-leaf"
        initial={{ opacity: 0, y: 34, rotate: -0.6 }}
        animate={{ opacity: 1, y: 0, rotate: 0 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      >
        <header className="ox-yoke-furrow-head">
          <p className="ox-yoke-furrow-kicker">COMMUNES HORAE · LABOR MENSIS</p>
          <h1 className="ox-yoke-furrow-title">
            Marcius<span className="ox-yoke-furrow-title-comma">,</span> the Month of the Plough
          </h1>
          <Fleuron className="ox-yoke-furrow-fleuron" />
        </header>

        <motion.figure
          className="ox-yoke-furrow-plate"
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.9, ease: 'easeOut' }}
        >
          <svg className="ox-yoke-furrow-art" viewBox="0 0 720 360" aria-hidden="true" preserveAspectRatio="xMidYMid meet">
            <PloughScene />
          </svg>
          <figcaption className="ox-yoke-furrow-caption">
            HIC ARAT BOS · HERE THE OX OPENS THE EARTH
          </figcaption>
        </motion.figure>

        <div className="ox-yoke-furrow-body">
          <p className="ox-yoke-furrow-text ox-yoke-furrow-text-drop">{VERSE}</p>
          <p className="ox-yoke-furrow-text">
            The ox is chosen over the horse for the same reason the field is ploughed slow. It pulls
            steady at the collar from grey dawn to dusk, forgives a clumsy turn, and stands still
            when the row goes crooked. Speed is a horse&rsquo;s gift. Bread is the ox&rsquo;s.
          </p>
          <Drollery />
        </div>

        <motion.footer
          className="ox-yoke-furrow-colophon"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.8 }}
        >
          <Fleuron className="ox-yoke-furrow-fleuron-small" />
          <span className="ox-yoke-furrow-sign">SET 1 · DESIGNED BY OMEN ALPHA</span>
          <Fleuron className="ox-yoke-furrow-fleuron-small" />
        </motion.footer>
      </motion.article>
    </div>
  )
}
