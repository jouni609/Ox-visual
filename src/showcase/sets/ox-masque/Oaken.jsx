import { motion } from 'framer-motion';
import './oaken.css';

const dancePairs = [0, 60, 120, 180, 240, 300];

export default function Oaken() {
  return (
    <div className="th-oaken">
      <div className="oaken-field" aria-hidden="true">
        <motion.svg
          className="oaken-ring"
          viewBox="0 0 400 400"
          animate={{ rotate: 360 }}
          transition={{ duration: 60, ease: 'linear', repeat: Infinity }}
        >
          {dancePairs.map((deg) => (
            <g key={deg} transform={`rotate(${deg} 200 200)`}>
              <g transform="translate(200 200)">
                <g transform="translate(0 -120)">
                  <path className="oaken-horn" d="M0 0 C -10 -34 -26 -58 -16 -96 C -12 -108 4 -104 0 -92 C -10 -62 8 -40 12 -8 Z" />
                  <path className="oaken-horn" transform="scale(-1,1)" d="M0 0 C -10 -34 -26 -58 -16 -96 C -12 -108 4 -104 0 -92 C -10 -62 8 -40 12 -8 Z" />
                  <path className="oaken-tie" d="M-14 4 L14 4 L10 16 L-10 16 Z" />
                </g>
              </g>
            </g>
          ))}
          <circle className="oaken-ring-line" cx="200" cy="200" r="132" />
        </motion.svg>
      </div>

      <motion.header
        className="oaken-head"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: 'easeOut' }}
      >
        <p className="oaken-kicker">ABBOTS BROMLEY · HORN DANCE</p>
        <h1 className="oaken-title">The Oak Beast</h1>
        <p className="oaken-sub">Six horns turn the year at the village edge</p>
      </motion.header>

      <motion.div
        className="oaken-maskwrap"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ type: 'spring', stiffness: 70, damping: 16 }}
      >
        <svg className="oaken-mask" viewBox="0 0 360 360" aria-hidden="true" focusable="false">
          <defs>
            <linearGradient id="oaken-wood" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#f4ecd8" />
              <stop offset="100%" stopColor="#e3d2ab" />
            </linearGradient>
          </defs>

          <g className="oaken-leaves" aria-hidden="true">
            <path d="M300 70 C 330 56 352 70 344 96 C 320 92 306 86 300 70 Z" />
            <path d="M60 70 C 30 56 8 70 16 96 C 40 92 54 86 60 70 Z" />
          </g>

          <path
            className="oaken-horn"
            d="M120 120 C 70 92 44 52 60 16 C 66 2 84 8 84 26 C 76 56 100 86 138 108 Z"
          />
          <path
            className="oaken-horn"
            transform="translate(360,0) scale(-1,1)"
            d="M120 120 C 70 92 44 52 60 16 C 54 0 84 8 84 26 C 76 56 100 86 138 108 Z"
          />

          <path
            className="oaken-face"
            d="M180 96 C 250 96 286 146 286 212 C 286 296 244 348 180 348 C 116 348 74 296 74 212 C 74 146 110 96 180 96 Z"
            fill="url(#oaken-wood)"
          />

          <path className="oaken-grain" d="M180 120 C 150 150 150 220 180 260 C 210 220 210 150 180 120 Z" />
          <path className="oaken-grain" d="M120 200 C 140 210 140 250 120 268" />
          <path className="oaken-grain" d="M240 200 C 220 210 220 250 240 268" />

          <path className="oaken-eye" d="M132 196 C 144 184 172 184 184 198 C 172 212 144 212 132 196 Z" />
          <path className="oaken-eye" transform="translate(360,0) scale(-1,1)" d="M132 196 C 144 184 172 184 184 198 C 172 212 144 212 132 196 Z" />
          <circle className="oaken-pupil" cx="158" cy="198" r="7" />
          <circle className="oaken-pupil" cx="202" cy="198" r="7" />

          <ellipse className="oaken-snout" cx="180" cy="286" rx="62" ry="46" />
          <path className="oaken-nostril" d="M158 282 C 150 276 140 280 142 290 C 144 300 156 300 160 292 Z" />
          <path className="oaken-nostril" transform="translate(360,0) scale(-1,1)" d="M158 282 C 150 276 140 280 142 290 C 144 300 156 300 160 292 Z" />
          <path className="oaken-mouth" d="M150 312 Q180 328 210 312" />
          <path className="oaken-ear" d="M268 224 C 304 214 324 232 318 258 C 300 246 280 244 266 250 Z" />
          <path className="oaken-ear" transform="translate(360,0) scale(-1,1)" d="M268 224 C 304 214 324 232 318 258 C 300 246 280 244 266 250 Z" />
        </svg>
      </motion.div>

      <motion.p
        className="oaken-lede"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.9 }}
      >
        In the Staffordshire woods each September the Horn Dance winds its slow ring — six pairs of
        ancient horns, a boy with a bow, and a fellow in a foxtail and a wooden ox-head. The beast is
        carried, not ridden: a survival of the forest god who blessed the harvest.
      </motion.p>

      <div className="oaken-tag" aria-hidden="true">
        <svg viewBox="0 0 160 96" focusable="false">
          <path className="oaken-tag-board" d="M14 18 L150 10 L146 84 L10 90 Z" />
          <path className="oaken-tag-hole" d="M22 30 a4 4 0 1 1 0.1 0" />
          <text className="oaken-tag-line1" x="80" y="44">SET XIII</text>
          <text className="oaken-tag-line2" x="80" y="62">DESIGNED</text>
          <text className="oaken-tag-line3" x="80" y="78">BY HY3</text>
        </svg>
      </div>
    </div>
  );
}
