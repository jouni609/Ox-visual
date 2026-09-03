import { useState } from 'react'
import { motion } from 'framer-motion'
import './first-light.css'

const fade = {
  hidden: { opacity: 0, y: 26 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] } }),
}

export default function FirstLight() {
  const [rocking, setRocking] = useState(true)
  return (
    <div className="ox-vita-first th-ox-vita-first">
      <svg className="ox-vita-first-sky" viewBox="0 0 1440 320" aria-hidden="true" preserveAspectRatio="none">
        <defs>
          <linearGradient id="ox-vita-first-dawn" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#9ACFE8" />
            <stop offset="0.62" stopColor="#F6D9C4" />
            <stop offset="1" stopColor="#FFF6E9" />
          </linearGradient>
        </defs>
        <rect width="1440" height="320" fill="url(#ox-vita-first-dawn)" />
        <g fill="#ffffff" opacity="0.85">
          <ellipse cx="210" cy="120" rx="86" ry="26" />
          <ellipse cx="280" cy="104" rx="60" ry="22" />
          <ellipse cx="1150" cy="86" rx="92" ry="24" />
          <ellipse cx="1225" cy="104" rx="58" ry="18" />
        </g>
        <circle cx="720" cy="235" r="64" fill="#E86A7A" />
        <circle cx="720" cy="235" r="84" fill="#E86A7A" opacity="0.18" />
      </svg>

      <div className="ox-vita-first-inner">
        <p className="ox-vita-first-eyebrow">Set XX · Vita I — Age: one hour</p>
        <h1 className="ox-vita-first-title">First Light</h1>
        <p className="ox-vita-first-lede">
          She arrives before the sun finishes rising: wet flanks, folded ears, a bell
          still too big for her neck. Every draught ox in this set begins here, on
          straw, learning how legs work.
        </p>
        <div className="ox-vita-first-chips" role="list">
          <span role="listitem">Birth weight 32 kg</span>
          <span role="listitem">Stands in 47 minutes</span>
          <span role="listitem">First bell: elm wood</span>
        </div>

        <div className="ox-vita-first-stage">
          <div className={rocking ? 'ox-vita-first-mobile is-rocking' : 'ox-vita-first-mobile'} aria-hidden="true">
            <span className="ox-vita-first-string" />
            <span className="ox-vita-first-star ox-vita-first-s1" />
            <span className="ox-vita-first-star ox-vita-first-s2" />
            <span className="ox-vita-first-cloud ox-vita-first-c1" />
            <span className="ox-vita-first-cloud ox-vita-first-c2" />
          </div>

          <motion.div
            className="ox-vita-first-oxwrap"
            variants={fade}
            initial="hidden"
            animate="show"
            custom={1}
          >
            <svg className="ox-vita-first-ox" viewBox="0 0 640 470" role="img" aria-label="Newborn calf standing in straw at dawn">
              <defs>
                <linearGradient id="ox-vita-first-hide" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0" stopColor="#F7E3C2" />
                  <stop offset="1" stopColor="#E4B98A" />
                </linearGradient>
              </defs>
              <ellipse cx="320" cy="424" rx="212" ry="26" fill="#4A322A" opacity="0.14" />
              <g stroke="#C98F3D" strokeWidth="7" strokeLinecap="round" fill="none" opacity="0.9">
                <path d="M118 418 C170 396 230 392 300 398" />
                <path d="M340 400 C410 392 470 396 528 414" />
                <path d="M150 428 C230 412 400 410 505 426" />
                <path d="M196 406 C250 388 330 386 396 394" />
              </g>
              <g>
                <path d="M176 300 L164 404 C164 412 170 417 179 417 L192 417 C200 417 205 411 205 403 L214 306 Z" fill="#D9A05E" />
                <path d="M252 308 L246 406 C246 414 252 419 261 419 L274 419 C282 419 287 413 286 405 L292 308 Z" fill="#E4B98A" />
                <path d="M418 306 L412 404 C412 412 418 417 427 417 L440 417 C448 417 453 411 452 403 L458 302 Z" fill="#D9A05E" />
                <path d="M478 296 L486 398 C487 407 493 412 501 411 L513 410 C521 409 525 403 524 395 L514 290 Z" fill="#E4B98A" />
                <g fill="#4A322A">
                  <path d="M162 402 L207 402 L205 419 L164 419 Z" />
                  <path d="M244 404 L289 404 L287 421 L246 421 Z" />
                  <path d="M410 402 L455 402 L453 419 L412 419 Z" />
                  <path d="M484 396 L527 394 L528 411 L486 413 Z" />
                </g>
              </g>
              <path d="M196 250 C210 188 280 150 372 158 C448 165 500 210 508 272 C512 310 488 336 440 342 C370 351 260 348 216 322 C196 310 190 280 196 250 Z" fill="url(#ox-vita-first-hide)" stroke="#4A322A" strokeWidth="7" strokeLinejoin="round" />
              <path d="M282 208 C296 190 326 186 340 202 C350 215 344 238 326 246 C308 254 286 244 280 226 Z" fill="#B4504E" opacity="0.85" />
              <path d="M392 268 C410 258 434 264 438 282 C441 298 428 312 410 310 C394 308 384 282 392 268 Z" fill="#B4504E" opacity="0.8" />
              <path d="M508 240 C534 228 548 208 544 184 C542 172 534 164 526 168 C518 172 520 186 514 200 C508 214 498 224 490 230 Z" fill="#E4B98A" stroke="#4A322A" strokeWidth="6" strokeLinejoin="round" />
              <path d="M514 196 C522 210 534 222 546 230" fill="none" stroke="#4A322A" strokeWidth="4" strokeLinecap="round" />
              <circle cx="540" cy="232" r="12" fill="#4A322A" />
              <path d="M470 148 C452 132 428 126 410 132 L418 156 C434 152 452 157 464 168 Z" fill="#F3D3A6" stroke="#4A322A" strokeWidth="6" strokeLinejoin="round" />
              <path d="M196 236 C172 226 150 228 136 244 C126 256 130 270 144 274 C162 280 184 268 196 256 Z" fill="#F3D3A6" stroke="#4A322A" strokeWidth="6" strokeLinejoin="round" />
              <path d="M146 240 C168 238 186 244 196 254" fill="none" stroke="#4A322A" strokeWidth="4" strokeLinecap="round" />
              <path d="M452 176 C486 168 522 178 544 204 C562 226 566 256 556 282 C548 304 528 316 506 312 C492 309 484 298 486 284 L452 240 Z" fill="#F7E3C2" stroke="#4A322A" strokeWidth="7" strokeLinejoin="round" />
              <path d="M556 176 C562 162 576 156 588 162 C596 167 596 179 588 188 L576 200 Z" fill="#F3D3A6" stroke="#4A322A" strokeWidth="6" strokeLinejoin="round" />
              <path d="M448 186 C438 176 424 174 416 182 C410 189 414 199 424 203 L436 208 Z" fill="#F3D3A6" stroke="#4A322A" strokeWidth="6" strokeLinejoin="round" />
              <circle cx="520" cy="238" r="13" fill="#2A201A" />
              <circle cx="524" cy="234" r="4" fill="#ffffff" />
              <path d="M486 284 C496 292 512 296 528 292 C540 289 548 280 550 268 L556 282 C554 300 540 314 520 315 C504 316 490 306 484 292 Z" fill="#8A4A3A" />
              <ellipse cx="512" cy="296" rx="7" ry="9" fill="#2A201A" />
              <ellipse cx="530" cy="295" rx="6" ry="8" fill="#2A201A" />
              <path d="M556 282 C566 290 572 300 572 312" fill="none" stroke="#4A322A" strokeWidth="4" strokeLinecap="round" />
            </svg>
          </motion.div>

          <div className="ox-vita-first-controls">
            <button type="button" className="ox-vita-first-btn" onClick={() => setRocking((v) => !v)} aria-pressed={rocking}>
              {rocking ? 'Still the mobile' : 'Rock the mobile'}
            </button>
            <p className="ox-vita-first-hint">The mobile slows when she sleeps. It never fully stops.</p>
          </div>
        </div>

        <div className="ox-vita-first-grid">
          {[
            ['0 h', 'Born in straw', 'The herder clears the muzzle, the dam licks the coat dry, and the shed door is left open to the dawn.'],
            ['1 h', 'First standing', 'Knees buckle twice. On the third try the calf locks her forelegs and stays up for eleven seconds.'],
            ['6 h', 'First walk', 'She follows the bell, not the dam. Elm wood sounds lower than wind, and she already knows it.'],
            ['24 h', 'Named', 'Chalk on the byre beam: weight, hour, weather. A name only after the first full day.'],
          ].map((row, i) => (
            <motion.article key={row[0]} className="ox-vita-first-card" variants={fade} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-60px' }} custom={i}>
              <p className="ox-vita-first-hour">{row[0]}</p>
              <h2 className="ox-vita-first-cardtitle">{row[1]}</h2>
              <p className="ox-vita-first-cardtext">{row[2]}</p>
            </motion.article>
          ))}
        </div>

        <div className="ox-vita-first-quilt">
          <span className="ox-vita-first-stitch" aria-hidden="true" />
          <p className="ox-vita-first-sign">SET XX · DESIGNED BY MUSE SPARK</p>
          <p className="ox-vita-first-signsub">stitched into the birth blanket · wash cold, keep straw out of the seams</p>
        </div>
      </div>
    </div>
  )
}
