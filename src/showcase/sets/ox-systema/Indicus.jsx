import { motion } from 'framer-motion'
import './indicus.css'

const ZEBU_BODY =
  'M110 320 C104 296 110 272 126 256 C118 236 120 212 134 196 ' +
  'C120 168 126 132 152 112 C168 100 190 98 206 108 ' +
  'C212 92 226 82 241 84 C256 86 266 98 267 112 ' +
  'C274 106 283 107 288 114 C293 121 291 131 285 137 ' +
  'C272 152 256 164 240 173 C250 190 256 210 255 232 ' +
  'C286 240 312 258 328 284 C339 302 343 323 339 344 ' +
  'C356 344 371 350 382 360 C372 366 360 370 348 370 ' +
  'C349 392 346 415 339 436 L353 439 L345 476 ' +
  'C341 496 336 515 331 532 L313 526 C318 508 322 489 324 469 ' +
  'C325 456 325 443 323 431 C306 441 286 445 265 443 ' +
  'C263 464 259 484 252 503 L262 508 L251 542 ' +
  'C248 551 245 559 241 566 L226 559 C232 546 236 531 238 516 ' +
  'C239 504 239 492 237 481 C214 473 194 459 181 441 ' +
  'C175 459 163 473 148 479 C130 486 112 480 102 466 ' +
  'C94 454 94 438 102 426 C112 412 128 406 143 410 ' +
  'C139 398 138 386 140 374 C124 366 112 350 108 332 ' +
  'C107 328 107 324 110 320 Z'

const ZEBU_HUMP =
  'M152 112 C158 88 176 70 200 66 C224 62 246 72 256 92 ' +
  'C262 104 263 118 258 130 C240 108 216 98 190 102 ' +
  'C176 104 163 108 152 118 Z'

const ZEBU_DEWLAP =
  'M150 210 C138 244 134 288 140 330 C144 360 152 388 164 410 ' +
  'C170 422 178 430 188 434 C178 438 166 434 158 424 ' +
  'C142 406 132 376 128 342 C124 306 128 266 140 234 Z'

const ZEBU_HORN =
  'M267 112 C270 96 282 84 297 82 C312 80 324 88 328 101 ' +
  'C333 117 329 134 320 147 C320 130 313 117 302 111 ' +
  'C293 106 283 107 276 112 Z'

const TICKER = 'गिर · नेलोर · साहिवाल · कांकरेज · ONGOLE · THARPARKAR · '

const stampIn = {
  hidden: { rotate: -14, scale: 1.6, opacity: 0 },
  show: { rotate: -8, scale: 1, opacity: 1, transition: { delay: 1.5, type: 'spring', stiffness: 200, damping: 14 } },
}

export default function Indicus() {
  return (
    <section className="ox-systema-ind th-ox-systema-ind" lang="en">
      <div className="ox-systema-ind-sun" aria-hidden="true" />
      <div className="ox-systema-ind-grid" aria-hidden="true" />

      <header className="ox-systema-ind-head">
        <p className="ox-systema-ind-kicker">Branch three · Bos indicus</p>
        <h1 className="ox-systema-ind-title">
          ZEBU
          <motion.span
            className="ox-systema-ind-title-hi"
            lang="hi"
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          >
            गोलोक
          </motion.span>
        </h1>
        <p className="ox-systema-ind-lede">
          The humped cattle of the subcontinent — heat-tolerant, tick-resistant,
          sacred to a billion people. Every zebu carries a shoulder hump, a
          hanging dewlap, and ears that read the monsoon before it arrives.
        </p>
      </header>

      <figure className="ox-systema-ind-figure">
        <svg
          className="ox-systema-ind-svg"
          viewBox="0 0 440 640"
          role="img"
          aria-label="Bold poster illustration of a zebu bull with shoulder hump, dewlap and lyre horns"
        >
          <ellipse cx="240" cy="580" rx="180" ry="18" className="ox-systema-ind-shadow" />
          <motion.g
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <path d={ZEBU_BODY} className="ox-systema-ind-body" />
            <path d={ZEBU_HUMP} className="ox-systema-ind-hump" />
            <path d={ZEBU_DEWLAP} className="ox-systema-ind-dewlap" />
            <path d={ZEBU_HORN} className="ox-systema-ind-horn" />
            <path
              d="M241 84 C254 86 264 98 265 112 L267 112"
              className="ox-systema-ind-horn"
            />
            <circle cx="245" cy="142" r="7" className="ox-systema-ind-eye" />
            <path
              d="M186 200 C210 212 240 216 265 208"
              className="ox-systema-ind-mark"
              fill="none"
            />
            <path
              d="M204 224 C224 232 246 233 264 227"
              className="ox-systema-ind-mark"
              fill="none"
            />
            <path d="M160 300 C210 330 280 338 330 316" className="ox-systema-ind-mark" fill="none" />
            <motion.ellipse
              cx="200"
              cy="170"
              rx="26"
              ry="16"
              className="ox-systema-ind-paint"
              animate={{ scaleY: [1, 0.6, 1] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            />
          </motion.g>
        </svg>

        <div className="ox-systema-ind-stats">
          <div><strong>45+</strong><span>recognized breeds</span></div>
          <div><strong>48°C</strong><span>heat tolerance</span></div>
          <div><strong>6,000</strong><span>years domesticated</span></div>
        </div>
      </figure>

      <motion.div className="ox-systema-ind-ticker" aria-hidden="true">
        <motion.span
          className="ox-systema-ind-ticker-track"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
        >
          {TICKER.repeat(4)}
        </motion.span>
      </motion.div>

      <motion.div className="ox-systema-ind-seal" variants={stampIn} initial="hidden" animate="show" role="note">
        SET 3 · DESIGNED BY GLM 5.3
      </motion.div>
    </section>
  )
}
