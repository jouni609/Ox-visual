import { motion } from 'framer-motion';
import './percht.css';

const flakes = Array.from({ length: 22 }, (_, i) => {
  const seed = (i * 1103 + 7717) % 132017;
  const rnd = seed / 132017;
  return {
    x: rnd * 100,
    delay: rnd * 6,
    dur: 7 + rnd * 7,
    size: 2 + rnd * 5,
    drift: (rnd - 0.5) * 40,
  };
});

export default function Percht() {
  return (
    <div className="th-percht">
      <div className="percht-snow" aria-hidden="true">
        {flakes.map((f, i) => (
          <motion.span
            key={i}
            className="percht-flake"
            style={{ left: `${f.x}%`, width: f.size, height: f.size }}
            initial={{ y: -30, x: 0, opacity: 0 }}
            animate={{ y: '110vh', x: f.drift, opacity: [0, 0.9, 0.9, 0] }}
            transition={{ duration: f.dur, delay: f.delay, repeat: Infinity, ease: 'linear' }}
          />
        ))}
      </div>

      <motion.header
        className="percht-head"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <p className="percht-kicker">ALPINE PERCHTEN · THE HORNED ONE</p>
        <h1 className="percht-title">Der Taurische</h1>
        <p className="percht-sub">When the snow closes the pass, the bull-mask walks</p>
      </motion.header>

      <motion.div
        className="percht-stage"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ type: 'spring', stiffness: 65, damping: 15 }}
      >
        <svg className="percht-mask" viewBox="0 0 380 400" aria-hidden="true" focusable="false">
          <defs>
            <linearGradient id="percht-horn-g" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#f2ead4" />
              <stop offset="100%" stopColor="#cdb98a" />
            </linearGradient>
            <linearGradient id="percht-face-g" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#eef4f7" />
              <stop offset="100%" stopColor="#c2d2da" />
            </linearGradient>
          </defs>

          <path
            className="percht-horn"
            d="M132 120 C 96 78 84 24 110 -10 C 120 -22 138 -8 132 10 C 116 40 122 86 150 116 Z"
          />
          <path
            className="percht-horn"
            transform="translate(380,0) scale(-1,1)"
            d="M132 120 C 96 78 84 24 110 -10 C 120 -22 138 -8 132 10 C 116 40 122 86 150 116 Z"
          />

          <path
            className="percht-face"
            d="M190 100 C 258 100 292 148 292 214 C 292 300 254 352 190 352 C 126 352 88 300 88 214 C 88 148 122 100 190 100 Z"
            fill="url(#percht-face-g)"
          />

          <path className="percht-carve" d="M190 118 C 158 150 158 224 190 268 C 222 224 222 150 190 118 Z" />
          <path className="percht-carve" d="M120 196 C 142 206 142 248 120 264" />
          <path className="percht-carve" transform="translate(380,0) scale(-1,1)" d="M120 196 C 142 206 142 248 120 264" />

          <path className="percht-eye" d="M140 192 C 154 178 184 178 196 194 C 184 210 154 210 140 192 Z" />
          <path className="percht-eye" transform="translate(380,0) scale(-1,1)" d="M140 192 C 154 178 184 178 196 194 C 184 210 154 210 140 192 Z" />
          <circle className="percht-pupil" cx="168" cy="194" r="8" />
          <circle className="percht-pupil" transform="translate(380,0) scale(-1,1)" cx="168" cy="194" r="8" />

          <path className="percht-brow" d="M132 170 C 152 156 184 158 200 174 C 180 164 152 162 130 172 Z" />
          <path className="percht-brow" transform="translate(380,0) scale(-1,1)" d="M132 170 C 152 156 184 158 200 174 C 180 164 152 162 130 172 Z" />

          <ellipse className="percht-snout" cx="190" cy="288" rx="62" ry="48" />
          <path className="percht-nostril" d="M168 284 C 160 278 150 282 152 292 C 154 302 166 302 170 294 Z" />
          <path className="percht-nostril" transform="translate(380,0) scale(-1,1)" d="M168 284 C 160 278 150 282 152 292 C 154 302 166 302 170 294 Z" />
          <path className="percht-mouth" d="M160 314 Q190 330 220 314" />

          <path className="percht-ear" d="M270 226 C 308 214 330 234 322 262 C 304 248 282 246 268 252 Z" />
          <path className="percht-ear" transform="translate(380,0) scale(-1,1)" d="M270 226 C 308 214 330 234 322 262 C 304 248 282 246 268 252 Z" />
        </svg>
      </motion.div>

      <motion.p
        className="percht-lede"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.9 }}
      >
        In the long Alpine night the <em>Perchten</em> processions file down from the snow. The
        ugly, beautiful bull-masks — carved, painted, weighed with real horns — drive the winter
        spirits out and tramp the doorways clean for the returning light. To wear the bull is to
        stand between the dark and the seed-time.
      </motion.p>

      <div className="percht-plate" aria-hidden="true">
        <svg viewBox="0 0 170 92" focusable="false">
          <rect className="percht-plate-bg" x="6" y="6" width="158" height="80" rx="6" />
          <rect className="percht-plate-inner" x="14" y="14" width="142" height="64" rx="4" />
          <text className="percht-plate-l1" x="85" y="40">SET XIII</text>
          <text className="percht-plate-l2" x="85" y="64">DESIGNED BY HY3</text>
        </svg>
      </div>
    </div>
  );
}
