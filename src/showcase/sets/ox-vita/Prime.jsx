import { useState } from 'react'
import { motion } from 'framer-motion'
import './prime.css'

export default function Prime() {
  const [resting, setResting] = useState(false)
  return (
    <div className="ox-vita-prime th-ox-vita-prime">
      <div className="ox-vita-prime-hazard" aria-hidden="true">
        <div className="ox-vita-prime-hazard-track">
          <span>DRAUGHT PRIME · 680 KG · PULL 1.1 T · DRAUGHT PRIME · 680 KG · PULL 1.1 T ·&nbsp;</span>
          <span>DRAUGHT PRIME · 680 KG · PULL 1.1 T · DRAUGHT PRIME · 680 KG · PULL 1.1 T ·&nbsp;</span>
        </div>
      </div>

      <div className="ox-vita-prime-inner">
        <p className="ox-vita-prime-eyebrow">Set XX · Vita III — Age: six years · The working prime</p>
        <h1 className="ox-vita-prime-title">Prime</h1>
        <p className="ox-vita-prime-lede">
          Six years old, six hundred and eighty kilos, and at the exact peak of his
          pulling curve. The yoke has polished the hair off his withers. The furrow
          behind him runs straighter than the surveyor’s string.
        </p>

        <div className="ox-vita-prime-stage">
          <div className="ox-vita-prime-gauges">
            <div className="ox-vita-prime-gauge">
              <p>Pull force</p>
              <strong>{resting ? '0.0 kN' : '9.4 kN'}</strong>
              <span className="ox-vita-prime-bar"><span className={resting ? 'is-rest' : ''} /></span>
            </div>
            <div className="ox-vita-prime-gauge">
              <p>Shift</p>
              <strong>{resting ? 'Rest · water' : 'Work · furrow 41'}</strong>
              <span className="ox-vita-prime-bar"><span className={resting ? 'is-rest short' : 'long'} /></span>
            </div>
            <div className="ox-vita-prime-gauge">
              <p>Yoke fit</p>
              <strong>Ash · 8 seasons</strong>
              <span className="ox-vita-prime-bar"><span className="mid" /></span>
            </div>
          </div>

          <motion.svg
            className={resting ? 'ox-vita-prime-ox is-rest' : 'ox-vita-prime-ox'}
            viewBox="0 0 720 430"
            role="img"
            aria-label="Massive draught ox in a wooden yoke pulling a plough"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <defs>
              <linearGradient id="ox-vita-prime-hide" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stopColor="#6E4A2E" />
                <stop offset="1" stopColor="#3E2716" />
              </linearGradient>
              <linearGradient id="ox-vita-prime-steel" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0" stopColor="#8A93A0" />
                <stop offset="1" stopColor="#3A4048" />
              </linearGradient>
            </defs>
            <ellipse cx="360" cy="384" rx="300" ry="24" fill="#000000" opacity="0.4" />
            <g stroke="#8A5A2E" strokeWidth="10" strokeLinecap="round" fill="none" opacity="0.85">
              <path d="M40 390 C180 372 320 368 470 376" />
              <path d="M60 404 C220 388 380 384 560 394" />
              <path d="M120 418 C280 404 430 402 620 412" />
            </g>
            <g>
              <path d="M150 320 L120 392 L60 392 L96 312 Z" fill="url(#ox-vita-prime-steel)" stroke="#F2EAD8" strokeWidth="4" strokeLinejoin="round" />
              <circle cx="52" cy="392" r="26" fill="#22262B" stroke="#F2EAD8" strokeWidth="4" />
              <circle cx="52" cy="392" r="9" fill="#8A93A0" />
              <path d="M150 320 L260 300" stroke="#D8C39A" strokeWidth="8" strokeLinecap="round" />
            </g>
            <g>
              <path d="M236 252 L226 368 L254 368 L262 252 Z" fill="#2E1D10" />
              <path d="M312 258 L306 372 L334 372 L340 258 Z" fill="#3E2716" />
              <path d="M486 256 L482 370 L510 370 L514 254 Z" fill="#2E1D10" />
              <path d="M556 250 L566 366 L594 364 L582 246 Z" fill="#3E2716" />
              <g fill="#1A1E22" stroke="#F2EAD8" strokeWidth="3">
                <path d="M222 364 L258 364 L256 384 L220 384 Z" />
                <path d="M302 368 L338 368 L336 388 L300 388 Z" />
                <path d="M478 366 L514 366 L512 386 L476 386 Z" />
                <path d="M562 362 L598 360 L599 380 L563 382 Z" />
              </g>
            </g>
            <path d="M238 188 C290 138 390 120 486 142 C556 158 596 204 594 258 C592 294 562 314 514 316 C420 320 300 314 252 292 C230 281 226 214 238 188 Z" fill="url(#ox-vita-prime-hide)" stroke="#F2EAD8" strokeWidth="6" strokeLinejoin="round" />
            <path d="M330 132 C344 108 372 98 396 106 C414 112 422 130 416 148 L372 156 Z" fill="#5D3A20" stroke="#F2EAD8" strokeWidth="5" strokeLinejoin="round" />
            <path d="M470 250 C500 244 528 248 544 264" fill="none" stroke="#F2EAD8" strokeWidth="4" opacity="0.5" strokeLinecap="round" />
            <rect x="252" y="158" width="300" height="26" rx="13" fill="#C98F3D" stroke="#1A1E22" strokeWidth="5" transform="rotate(-3 252 158)" />
            <rect x="290" y="150" width="18" height="42" rx="6" fill="#1A1E22" transform="rotate(-3 290 150)" />
            <rect x="508" y="143" width="18" height="42" rx="6" fill="#1A1E22" transform="rotate(-3 508 143)" />
            <path d="M590 210 C616 200 632 184 634 162 C635 150 628 143 620 147 C612 151 614 164 608 176 C602 188 594 195 588 199 Z" fill="#3E2716" stroke="#F2EAD8" strokeWidth="5" strokeLinejoin="round" />
            <path d="M268 178 C244 164 218 162 202 174 C190 183 192 197 206 202 C224 209 248 201 262 190 Z" fill="#4A2E17" stroke="#F2EAD8" strokeWidth="5" strokeLinejoin="round" />
            <path d="M556 140 C574 128 598 128 612 140 L600 162 C588 154 572 154 560 162 Z" fill="#4A2E17" stroke="#F2EAD8" strokeWidth="5" strokeLinejoin="round" />
            <path d="M380 190 C330 178 300 150 296 118 C295 106 303 98 312 102 C321 106 321 120 326 132 C333 150 348 164 364 172 Z" fill="#E8D9BE" stroke="#1A1E22" strokeWidth="5" strokeLinejoin="round" />
            <path d="M640 142 C668 128 694 130 706 146 C714 158 708 170 694 172 L676 172 Z" fill="#E8D9BE" stroke="#1A1E22" strokeWidth="5" strokeLinejoin="round" />
            <path d="M556 150 C580 142 612 150 630 174 C645 195 647 224 638 248 C631 268 613 278 594 273 C582 270 576 260 579 248 L556 190 Z" fill="#5D3A20" stroke="#F2EAD8" strokeWidth="6" strokeLinejoin="round" />
            <circle cx="606" cy="198" r="9" fill="#F2EAD8" />
            <circle cx="607" cy="199" r="4" fill="#1A1E22" />
            <path d="M579 248 C589 254 604 255 616 250 C626 246 632 238 633 228 L641 244 C638 260 624 272 607 273 C593 274 581 266 576 254 Z" fill="#140D07" />
            <path d="M430 296 C452 288 482 288 504 298" fill="none" stroke="#1A1E22" strokeWidth="5" strokeLinecap="round" opacity="0.6" />
            <path d="M260 300 L150 320" stroke="#D8C39A" strokeWidth="7" strokeLinecap="round" />
            <path d="M540 316 C560 322 576 334 582 350" fill="none" stroke="#FFC42E" strokeWidth="4" strokeLinecap="round" strokeDasharray="6 8" opacity="0.9" />
          </motion.svg>

          <div className="ox-vita-prime-row">
            <button type="button" className="ox-vita-prime-btn" onClick={() => setResting((v) => !v)} aria-pressed={resting}>
              {resting ? 'Yoke up — back to work' : 'Water break — rest him'}
            </button>
            <p className="ox-vita-prime-note">Eight furrows, then water. The rule is older than the yoke.</p>
          </div>
        </div>

        <div className="ox-vita-prime-cards">
          <article>
            <h2>Furrow 41</h2>
            <p>412 metres, one pass, no stop. The ploughshare sings when the line is true.</p>
          </article>
          <article>
            <h2>The withers</h2>
            <p>Two polished patches where ash meets hide. The herder rubs them with tallow every dusk.</p>
          </article>
          <article>
            <h2>Retirement plan</h2>
            <p>Two more prime seasons, then light carting, then the temple pasture. No ox here ends at market.</p>
          </article>
        </div>

        <div className="ox-vita-prime-plate">
          <span className="ox-vita-prime-rivet" aria-hidden="true" />
          <span className="ox-vita-prime-rivet r2" aria-hidden="true" />
          <span className="ox-vita-prime-rivet r3" aria-hidden="true" />
          <span className="ox-vita-prime-rivet r4" aria-hidden="true" />
          <p>SET XX · DESIGNED BY MUSE SPARK — shift plate 41, riveted at the forge</p>
        </div>
      </div>
    </div>
  )
}
