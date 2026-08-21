import { motion } from 'framer-motion';
import './gelede.css';

export default function Gelede() {
  return (
    <div className="th-gelede">
      <div className="gelede-weave" aria-hidden="true" />

      <motion.header
        className="gelede-head"
        initial={{ opacity: 0, y: 22 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
      >
        <p className="gelede-kicker">YORUBA · GÈLÈDÈ HEADDRESS</p>
        <h1 className="gelede-title">The Horned Mother</h1>
        <p className="gelede-sub">A carved face that honours the power beneath the earth</p>
      </motion.header>

      <motion.div
        className="gelede-stage"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ type: 'spring', stiffness: 60, damping: 14 }}
      >
        <motion.svg
          className="gelede-mask"
          viewBox="0 0 340 400"
          aria-hidden="true"
          focusable="false"
          animate={{ rotate: [-1.6, 1.6, -1.6] }}
          transition={{ duration: 7, ease: 'easeInOut', repeat: Infinity }}
          style={{ transformOrigin: '50% 90%' }}
        >
          <defs>
            <linearGradient id="gelede-horn-g" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#e9a93b" />
              <stop offset="100%" stopColor="#c9772b" />
            </linearGradient>
          </defs>

          <path
            className="gelede-crown"
            d="M170 40 C 150 18 190 18 170 40 M120 64 C 170 30 170 30 220 64 C 240 50 100 50 120 64 Z"
          />
          <path className="gelede-crown-band" d="M96 70 C 150 44 190 44 244 70 L236 92 C 188 70 152 70 104 92 Z" />

          <path
            className="gelede-horn"
            d="M118 118 C 70 96 44 70 52 36 C 58 18 78 26 76 46 C 72 74 100 96 132 112 Z"
          />
          <path
            className="gelede-horn"
            transform="translate(340,0) scale(-1,1)"
            d="M118 118 C 70 96 44 70 52 36 C 58 18 78 26 76 46 C 72 74 100 96 132 112 Z"
          />

          <path
            className="gelede-face"
            d="M170 96 C 236 96 268 142 268 206 C 268 296 232 348 170 348 C 108 348 72 296 72 206 C 72 142 104 96 170 96 Z"
          />

          <path className="gelede-mark" d="M170 104 L158 138 L182 138 Z" />
          <path className="gelede-mark" d="M132 150 L120 178 L144 178 Z" />
          <path className="gelede-mark" transform="translate(340,0) scale(-1,1)" d="M132 150 L120 178 L144 178 Z" />

          <ellipse className="gelede-eye" cx="134" cy="196" rx="22" ry="14" />
          <ellipse className="gelede-eye" transform="translate(340,0) scale(-1,1)" cx="134" cy="196" rx="22" ry="14" />
          <circle className="gelede-pupil" cx="134" cy="196" r="7" />
          <circle className="gelede-pupil" transform="translate(340,0) scale(-1,1)" cx="134" cy="196" r="7" />

          <path className="gelede-cheek" d="M104 236 C 124 252 130 274 120 296" />
          <path className="gelede-cheek" transform="translate(340,0) scale(-1,1)" d="M104 236 C 124 252 130 274 120 296" />

          <ellipse className="gelede-snout" cx="170" cy="284" rx="56" ry="44" />
          <path className="gelede-nostril" d="M150 280 C 142 274 132 278 134 288 C 136 298 148 298 152 290 Z" />
          <path className="gelede-nostril" transform="translate(340,0) scale(-1,1)" d="M150 280 C 142 274 132 278 134 288 C 136 298 148 298 152 290 Z" />
          <path className="gelede-mouth" d="M142 312 Q170 326 198 312" />

          <g className="gelede-collar" aria-hidden="true">
            <path d="M70 348 L170 372 L270 348 L262 388 L170 410 L78 388 Z" />
          </g>
        </motion.svg>
      </motion.div>

      <motion.p
        className="gelede-lede"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.9 }}
      >
        Among the Yorùbá and their neighbours, the Gèlèdè headdress lifts a carved face above the
        dancer's own — and the horned mother in the wood is no trophy but a force to be appeased.
        Colour, rhythm and a calm ox-visage ask the old powers for harvest, health and peace.
      </motion.p>

      <div className="gelede-cloth" aria-hidden="true">
        <svg viewBox="0 0 150 110" focusable="false">
          <rect className="gelede-cloth-bg" x="6" y="6" width="138" height="98" rx="4" />
          <path className="gelede-cloth-stripe" d="M6 30 H144 M6 54 H144 M6 80 H144" />
          <text className="gelede-cloth-l1" x="75" y="44">SET XIII</text>
          <text className="gelede-cloth-l2" x="75" y="68">HY3</text>
        </svg>
      </div>
    </div>
  );
}
