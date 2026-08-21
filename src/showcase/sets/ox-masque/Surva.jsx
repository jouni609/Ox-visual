import { motion } from 'framer-motion';
import './surva.css';

const sparks = Array.from({ length: 18 }, (_, i) => {
  const seed = (i * 9301 + 49297) % 233280;
  const rnd = seed / 233280;
  return {
    x: 8 + rnd * 84,
    delay: (i % 9) * 0.4 + rnd * 0.6,
    dur: 2.4 + rnd * 2.6,
    size: 2 + (rnd * 4),
  };
});

function MaskHalf({ flip }) {
  const transform = flip ? 'translate(420,0) scale(-1,1)' : undefined;
  return (
    <g transform={transform}>
      <path
        className="surva-horn"
        d="M250 122 C 300 102 352 82 362 38 C 366 20 357 9 344 18 C 340 62 312 96 266 114 Z"
      />
      <path
        className="surva-horn-tip"
        d="M344 18 C 357 9 366 20 362 38 C 358 46 350 46 348 40 C 350 30 348 24 344 18 Z"
      />
      <path
        className="surva-eye"
        d="M236 190 C 246 178 270 178 280 192 C 270 206 246 206 236 190 Z"
      />
      <circle className="surva-ember" cx="258" cy="192" r="6" />
      <path
        className="surva-brow"
        d="M232 168 C 250 156 278 158 292 174 C 276 166 250 164 232 172 Z"
      />
      <path
        className="surva-ear"
        d="M300 210 C 336 200 356 218 350 244 C 332 232 312 230 298 236 Z"
      />
    </g>
  );
}

export default function Surva() {
  return (
    <div className="th-surva">
      <div className="surva-glow" aria-hidden="true" />
      <div className="surva-sparks" aria-hidden="true">
        {sparks.map((s, i) => (
          <motion.span
            key={i}
            className="surva-spark"
            style={{ left: `${s.x}%`, width: s.size, height: s.size }}
            initial={{ y: 0, opacity: 0 }}
            animate={{ y: -340, opacity: [0, 1, 0] }}
            transition={{ duration: s.dur, delay: s.delay, repeat: Infinity, ease: 'easeOut' }}
          />
        ))}
      </div>

      <motion.header
        className="surva-head"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <p className="surva-kicker" lang="bg">СУРВАКИ · KUKERI</p>
        <h1 className="surva-title" lang="bg">Огън и рог</h1>
        <p className="surva-sub">Fire and horn — the mummers' ox</p>
      </motion.header>

      <motion.div
        className="surva-stage"
        initial={{ scale: 0.86, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 60, damping: 14 }}
      >
        <svg className="surva-mask" viewBox="0 0 420 420" aria-hidden="true" focusable="false">
          <defs>
            <radialGradient id="surva-face-grad" cx="50%" cy="40%" r="70%">
              <stop offset="0%" stopColor="#2A201A" />
              <stop offset="100%" stopColor="#0E0B09" />
            </radialGradient>
            <radialGradient id="surva-eye-glow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#FFD08A" />
              <stop offset="40%" stopColor="#FF5A1F" />
              <stop offset="100%" stopColor="#FF5A1F" stopOpacity="0" />
            </radialGradient>
          </defs>

          <path
            className="surva-fur"
            d="M210 36 L228 70 L264 54 L270 92 L312 90 L302 128 L342 148 L318 178 L348 208 L314 228 L332 266 L294 268 L300 306 L260 292 L254 330 L222 308 L210 344 L198 308 L166 330 L160 292 L120 306 L126 268 L88 266 L106 228 L72 208 L102 178 L78 148 L118 128 L108 90 L150 92 L156 54 L192 70 Z"
          />

          <MaskHalf />
          <MaskHalf flip />

          <path
            className="surva-face"
            d="M210 92 C 282 92 322 142 322 212 C 322 302 272 362 210 362 C 148 362 98 302 98 212 C 98 142 138 92 210 92 Z"
            fill="url(#surva-face-grad)"
          />

          <ellipse className="surva-snout" cx="210" cy="296" rx="74" ry="56" />
          <path className="surva-nostril" d="M186 292 C 178 286 168 290 170 300 C 172 310 184 310 188 302 Z" />
          <path className="surva-nostril" d="M234 292 C 242 286 252 290 250 300 C 248 310 236 310 232 302 Z" />
          <path className="surva-mouth" d="M178 330 Q210 346 242 330" />

          <g className="surva-fangs">
            <path d="M196 340 L202 356 L208 340 Z" />
            <path d="M212 340 L218 356 L224 340 Z" />
          </g>

          <g className="surva-eye-glows" aria-hidden="true">
            <circle cx="258" cy="192" r="22" fill="url(#surva-eye-glow)" />
            <circle cx="162" cy="192" r="22" fill="url(#surva-eye-glow)" />
          </g>
        </svg>
      </motion.div>

      <motion.p
        className="surva-lede"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.9 }}
      >
        At the turning of the year, Bulgarian <em>survakari</em> pull on the furred, horned masks of
        the Kukeri and ring the villages with bells and fire. The ox is not prey here — it is the
        beast worn to frighten winter back into the ground and wake the seed.
      </motion.p>

      <div className="surva-brand" aria-hidden="true">
        <svg viewBox="0 0 120 120" focusable="false">
          <defs>
            <path id="surva-brand-arc" d="M60 60 m-44 0 a44 44 0 1 1 88 0 a44 44 0 1 1 -88 0" />
          </defs>
          <circle className="surva-brand-ring" cx="60" cy="60" r="52" />
          <circle className="surva-brand-ring" cx="60" cy="60" r="40" />
          <text className="surva-brand-text">
            <textPath href="#surva-brand-arc" startOffset="0%">
              SET XIII · DESIGNED BY HY3 · SET XIII · DESIGNED BY HY3 ·
            </textPath>
          </text>
          <text className="surva-brand-mark" x="60" y="68">H</text>
        </svg>
      </div>
    </div>
  );
}
