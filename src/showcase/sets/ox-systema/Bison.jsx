import { motion } from 'framer-motion'
import './bison.css'

const BISON_BODY =
  'M104 330 C100 306 108 282 124 268 C114 248 118 222 134 208 ' +
  'C122 178 132 140 162 120 C190 101 226 100 252 116 ' +
  'C258 102 270 94 283 96 C296 98 304 109 305 122 ' +
  'C312 117 320 118 325 125 C330 132 328 141 322 147 ' +
  'C308 162 291 174 275 183 C288 202 295 226 293 252 ' +
  'C320 262 342 282 355 308 C364 326 367 347 362 368 ' +
  'C378 369 392 376 402 387 C392 392 380 395 369 395 ' +
  'C369 416 366 438 359 458 L372 462 L363 498 ' +
  'C359 516 354 533 349 548 L332 542 C337 527 341 511 343 494 ' +
  'C344 482 344 470 342 460 C326 469 307 473 288 471 ' +
  'C286 490 282 508 276 524 L285 529 L275 558 ' +
  'C272 566 269 573 266 579 L251 572 C257 560 261 546 263 532 ' +
  'C264 521 264 510 262 500 C241 493 223 481 211 465 ' +
  'C201 452 197 436 200 421 C192 416 188 408 188 400 ' +
  'C188 388 194 376 204 366 C196 350 192 332 194 314 ' +
  'C160 306 126 320 104 330 Z'

const BISON_HUMP =
  'M162 120 C190 101 226 100 252 116 C270 127 279 145 278 163 ' +
  'C252 136 220 126 190 132 C179 134 169 139 160 146 Z'

const BISON_BEARD =
  'M282 200 C296 216 302 238 300 262 C298 282 290 300 277 312 ' +
  'C284 316 290 314 295 306 C306 288 310 262 305 238 ' +
  'C302 224 295 212 286 204 Z'

const BISON_HORN =
  'M305 122 C308 108 318 97 331 96 C344 95 354 103 357 115 ' +
  'C360 128 355 141 346 150 C346 137 340 127 330 123 ' +
  'C322 120 313 121 307 126 Z'

const DRIFT = Array.from({ length: 5 }, (_, i) => ({
  top: 18 + i * 16,
  dur: 9 + i * 2.5,
  delay: i * 1.3,
}))

const rise = {
  hidden: { opacity: 0, y: 30 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.15 + i * 0.1, duration: 0.6, ease: 'easeOut' },
  }),
}

export default function Bison() {
  return (
    <section className="ox-systema-bis th-ox-systema-bis" lang="en">
      <div className="ox-systema-bis-drift" aria-hidden="true">
        {DRIFT.map((d, i) => (
          <motion.span
            key={i}
            className="ox-systema-bis-drift-line"
            style={{ top: `${d.top}%` }}
            animate={{ x: ['-30vw', '115vw'] }}
            transition={{ duration: d.dur, repeat: Infinity, delay: d.delay, ease: 'linear' }}
          />
        ))}
      </div>

      <div className="ox-systema-bis-poster">
        <motion.p className="ox-systema-bis-kicker" variants={rise} custom={0} initial="hidden" animate="show">
          Branch five · Bison bison · the American plains
        </motion.p>
        <motion.h1 className="ox-systema-bis-title" variants={rise} custom={1} initial="hidden" animate="show">
          THUNDER<span>HEAD</span>
        </motion.h1>
        <motion.p className="ox-systema-bis-lede" variants={rise} custom={2} initial="hidden" animate="show">
          Thirty million strong before the railroads; under a thousand by 1889;
          half a million again today. The bison is the bovine family's survival
          story — a hump of muscle built to plough snow.
        </motion.p>

        <motion.ul className="ox-systema-bis-herd" variants={rise} custom={3} initial="hidden" animate="show">
          <li><strong>30,000,000</strong><em>plains bison, 1500</em></li>
          <li><strong>325</strong><em>left alive, 1884</em></li>
          <li><strong>2 m</strong><em>of horn to hump</em></li>
        </motion.ul>

        <div className="ox-systema-bis-art">
          <svg
            viewBox="0 0 460 620"
            role="img"
            aria-label="Silhouette of a bison bull with a massive shoulder hump, beard and short horns, facing into snow"
          >
            <ellipse cx="240" cy="580" rx="190" ry="16" className="ox-systema-bis-snowshadow" />
            <motion.g
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
            >
              <path d={BISON_BODY} className="ox-systema-bis-body" />
              <path d={BISON_HUMP} className="ox-systema-bis-hump" />
              <path d={BISON_BEARD} className="ox-systema-bis-beard" />
              <path d={BISON_HORN} className="ox-systema-bis-horn" />
              <circle cx="288" cy="150" r="5" className="ox-systema-bis-eye" />
              <path d="M230 216 C252 226 274 229 293 224" fill="none" className="ox-systema-bis-line" />
              <path d="M140 330 C195 360 262 366 312 344" fill="none" className="ox-systema-bis-line" />
            </motion.g>
            <motion.path
              d="M300 118 q 10 -16 4 -30 q -8 -12 -2 -24"
              fill="none"
              className="ox-systema-bis-breath"
              animate={{ opacity: [0, 0.7, 0], y: [0, -18] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeOut' }}
            />
          </svg>
        </div>

        <div className="ox-systema-bis-bottom">
          <p className="ox-systema-bis-count">5 of 5 branches · the family complete</p>
          <div className="ox-systema-bis-tag" role="note">
            <span className="ox-systema-bis-tag-hole" aria-hidden="true" />
            <span className="ox-systema-bis-tag-text">
              SET 5 · DESIGNED BY GLM 5.3
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
