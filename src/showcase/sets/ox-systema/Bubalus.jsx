import { motion } from 'framer-motion'
import './bubalus.css'

const BUFFALO_BODY =
  'M120 340 C112 316 116 290 132 274 C124 254 128 230 142 216 ' +
  'C134 196 140 170 158 158 C172 149 188 148 200 155 ' +
  'C202 140 213 128 227 127 C241 126 251 135 254 149 ' +
  'C258 141 267 139 273 145 C279 151 279 161 274 168 ' +
  'C262 186 246 200 231 211 C258 221 281 239 296 263 ' +
  'C307 281 311 302 306 323 C323 324 338 331 348 342 ' +
  'C338 347 327 350 316 350 C317 371 314 392 307 412 ' +
  'L321 416 L312 452 C308 470 303 487 298 502 ' +
  'L281 496 C286 481 290 465 292 448 C293 436 293 424 291 413 ' +
  'C275 422 256 426 237 424 C235 443 231 461 225 478 ' +
  'L235 483 L224 514 C221 522 218 529 215 535 ' +
  'L200 528 C206 516 210 502 212 488 C213 477 213 466 211 456 ' +
  'C190 449 172 437 160 421 C150 408 146 392 149 377 ' +
  'C141 372 137 364 137 356 C137 348 142 342 120 340 Z'

const BUFFALO_HORN =
  'M254 149 C252 128 240 110 222 102 C204 94 184 97 170 109 ' +
  'C154 122 148 142 152 162 C158 142 170 128 186 122 ' +
  'C200 117 214 120 224 130 C234 140 238 152 238 164 ' +
  'C244 160 250 155 254 149 Z'

const RIPPLES = [
  { y: 470, w: 0.95, dur: 5.5 },
  { y: 505, w: 1.15, dur: 6.5 },
  { y: 545, w: 0.8, dur: 4.8 },
  { y: 585, w: 1.05, dur: 7 },
]

const RAIN = Array.from({ length: 26 }, (_, i) => ({
  left: (i * 37) % 100,
  delay: (i % 13) * 0.32,
  dur: 1.6 + (i % 7) * 0.22,
}))

export default function Bubalus() {
  return (
    <section className="ox-systema-bub th-ox-systema-bub" lang="en">
      <div className="ox-systema-bub-rain" aria-hidden="true">
        {RAIN.map((d, i) => (
          <motion.span
            key={i}
            className="ox-systema-bub-drop"
            style={{ left: `${d.left}%` }}
            animate={{ y: ['-12vh', '112vh'] }}
            transition={{ duration: d.dur, repeat: Infinity, delay: d.delay, ease: 'linear' }}
          />
        ))}
      </div>

      <header className="ox-systema-bub-head">
        <p className="ox-systema-bub-kicker">Branch four · Bubalus bubalis</p>
        <h1 className="ox-systema-bub-title">
          Water<br />Buffalo
        </h1>
        <p className="ox-systema-bub-lede">
          Rivers remember the buffalo longer than farmers do. Half the world's
          milk is drawn from river mud and paddy warmth — a broad-horned
          patience that thrives where cattle merely survive.
        </p>
        <ul className="ox-systema-bub-facts">
          <li>Wild ancestor: the arni, still swimming the Assam rivers</li>
          <li>Horns swept back in a crescent that can span two metres</li>
          <li>Fewer sweat glands than any ox — water is its weather</li>
        </ul>
      </header>

      <figure className="ox-systema-bub-figure">
        <div className="ox-systema-bub-moon" aria-hidden="true" />
        <svg
          className="ox-systema-bub-svg"
          viewBox="0 0 460 640"
          role="img"
          aria-label="Dark silhouette of a water buffalo with swept crescent horns, wading in a river at night"
        >
          <motion.g
            initial={{ y: 26, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.g
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
            >
              <path d={BUFFALO_BODY} className="ox-systema-bub-body" />
              <path d={BUFFALO_HORN} className="ox-systema-bub-horn" />
              <circle cx="230" cy="180" r="5" className="ox-systema-bub-eye" />
              <path
                d="M178 236 C202 246 228 249 250 243"
                fill="none"
                className="ox-systema-bub-line"
              />
              <path d="M136 330 C190 358 258 364 308 342" fill="none" className="ox-systema-bub-line" />
            </motion.g>
          </motion.g>
          <g className="ox-systema-bub-water">
            <rect x="0" y="470" width="460" height="170" className="ox-systema-bub-water-fill" />
            {RIPPLES.map((r, i) => (
              <motion.path
                key={i}
                d={`M${230 - r.w * 200} ${r.y} q ${r.w * 100} -8 ${r.w * 200} 0 t ${r.w * 200} 0 t ${r.w * 200} 0`}
                className="ox-systema-bub-ripple"
                animate={{ x: [0, 26, 0], opacity: [0.35, 0.7, 0.35] }}
                transition={{ duration: r.dur, repeat: Infinity, ease: 'easeInOut' }}
              />
            ))}
          </g>
        </svg>
        <figcaption className="ox-systema-bub-caption">
          THE ARNI'S DESCENDANT · BRANCH IV OF V
        </figcaption>
      </figure>

      <motion.div
        className="ox-systema-bub-sign"
        role="note"
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.8, duration: 0.7 }}
      >
        <span className="ox-systema-bub-sign-bell" aria-hidden="true" />
        SET 4 · DESIGNED BY GLM 5.3
      </motion.div>
    </section>
  )
}
