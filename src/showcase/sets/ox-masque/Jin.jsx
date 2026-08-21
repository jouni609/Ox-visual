import { motion } from 'framer-motion';
import './jin.css';

function OxFaceHalf({ flip }) {
  const t = flip ? 'translate(360,0) scale(-1,1)' : undefined;
  return (
    <g transform={t}>
      <path
        className="jin-horn"
        d="M150 96 C 110 70 70 48 52 14 C 46 0 64 4 70 18 C 86 52 116 80 156 102 Z"
      />
      <path
        className="jin-ruyi"
        d="M150 150 C 120 150 104 168 110 192 C 122 184 138 184 150 196 Z"
      />
      <circle className="jin-eye" cx="138" cy="200" r="20" />
      <circle className="jin-pupil" cx="138" cy="200" r="9" />
      <path className="jin-brow" d="M118 170 C 134 158 156 162 168 178 C 150 168 132 168 116 176 Z" />
      <path className="jin-nostril" d="M150 300 C 142 294 132 298 134 308 C 136 318 148 318 152 310 Z" />
      <path className="jin-ear" d="M250 230 C 286 218 306 238 298 264 C 282 250 264 248 250 254 Z" />
    </g>
  );
}

const petals = [0, 1, 2, 3];

export default function Jin() {
  return (
    <div className="th-jin">
      <div className="jin-frame" aria-hidden="true">
        <span className="jin-corner jin-corner-tl" />
        <span className="jin-corner jin-corner-tr" />
        <span className="jin-corner jin-corner-bl" />
        <span className="jin-corner jin-corner-br" />
      </div>

      <motion.header
        className="jin-head"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
      >
        <p className="jin-kicker" lang="zh">牛 舞 · NEW YEAR OX</p>
        <h1 className="jin-title" lang="zh">金牛迎春</h1>
        <p className="jin-sub">The golden ox welcomes the spring</p>
      </motion.header>

      <motion.div
        className="jin-stage"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 70, damping: 15 }}
      >
        <div className="jin-petals jin-petals-l" aria-hidden="true">
          {petals.map((i) => (
            <motion.span
              key={i}
              className="jin-petal"
              initial={{ scaleY: 0.1, opacity: 0 }}
              animate={{ scaleY: 1, opacity: 1 }}
              transition={{ delay: 0.4 + i * 0.18, duration: 0.7, ease: 'easeOut' }}
            />
          ))}
        </div>

        <svg className="jin-mask" viewBox="0 0 360 380" aria-hidden="true" focusable="false">
          <defs>
            <radialGradient id="jin-medallion" cx="50%" cy="42%" r="62%">
              <stop offset="0%" stopColor="#b8231f" />
              <stop offset="100%" stopColor="#7c0f0f" />
            </radialGradient>
            <linearGradient id="jin-gold" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#f6d784" />
              <stop offset="100%" stopColor="#c8941f" />
            </linearGradient>
          </defs>

          <circle className="jin-disc" cx="180" cy="190" r="176" fill="url(#jin-medallion)" />
          <circle className="jin-disc-ring" cx="180" cy="190" r="164" />

          <path className="jin-flame" d="M180 44 C 168 70 168 86 180 104 C 192 86 192 70 180 44 Z" />

          <OxFaceHalf />
          <OxFaceHalf flip />

          <path
            className="jin-face"
            d="M180 110 C 244 110 276 156 276 214 C 276 296 240 340 180 340 C 120 340 84 296 84 214 C 84 156 116 110 180 110 Z"
          />

          <circle className="jin-eye" cx="138" cy="200" r="20" />
          <circle className="jin-eye" transform="translate(360,0) scale(-1,1)" cx="138" cy="200" r="20" />
          <circle className="jin-pupil" cx="138" cy="200" r="9" />
          <circle className="jin-pupil" transform="translate(360,0) scale(-1,1)" cx="138" cy="200" r="9" />

          <ellipse className="jin-snout" cx="180" cy="288" rx="66" ry="50" />
          <path className="jin-nostril" d="M150 284 C 142 278 132 282 134 292 C 136 302 148 302 152 294 Z" />
          <path className="jin-nostril" transform="translate(360,0) scale(-1,1)" d="M150 284 C 142 278 132 282 134 292 C 136 302 148 302 152 294 Z" />
          <path className="jin-mouth" d="M150 314 Q180 330 210 314" />
        </svg>

        <div className="jin-petals jin-petals-r" aria-hidden="true">
          {petals.map((i) => (
            <motion.span
              key={i}
              className="jin-petal"
              initial={{ scaleY: 0.1, opacity: 0 }}
              animate={{ scaleY: 1, opacity: 1 }}
              transition={{ delay: 0.4 + i * 0.18, duration: 0.7, ease: 'easeOut' }}
            />
          ))}
        </div>
      </motion.div>

      <motion.p
        className="jin-lede"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.9 }}
      >
        When the lunar new year turns to the ox, the lion-and-ox dance rolls from door to door. Drums
        answer the horns; red paper and gold leaf crown the beast as a bringer of steady, patient
        fortune. To wear the ox-head is to carry the year's good labour through the street.
      </motion.p>

      <div className="jin-seal" aria-hidden="true">
        <svg viewBox="0 0 100 100" focusable="false">
          <rect className="jin-seal-box" x="8" y="8" width="84" height="84" rx="6" />
          <text className="jin-seal-l1" x="50" y="38">SET</text>
          <text className="jin-seal-l2" x="50" y="58">XIII</text>
          <text className="jin-seal-l3" x="50" y="82">HY3</text>
        </svg>
      </div>
    </div>
  );
}
