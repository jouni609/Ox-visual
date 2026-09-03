import { useState } from 'react'
import { motion } from 'framer-motion'
import './relic.css'

export default function Relic() {
  const [lit, setLit] = useState(true)
  return (
    <div className="ox-vita-relic th-ox-vita-relic">
      <svg className="ox-vita-relic-stars" viewBox="0 0 1440 420" aria-hidden="true" preserveAspectRatio="xMidYMin slice">
        <defs>
          <radialGradient id="ox-vita-relic-glow" cx="0.5" cy="0.4" r="0.8">
            <stop offset="0" stopColor="#26325E" />
            <stop offset="1" stopColor="#0D1326" />
          </radialGradient>
        </defs>
        <rect width="1440" height="420" fill="url(#ox-vita-relic-glow)" />
        <g fill="#FFF6D6">
          <circle cx="120" cy="80" r="2.6" className="ox-vita-relic-tw t1" />
          <circle cx="260" cy="150" r="1.8" className="ox-vita-relic-tw t2" />
          <circle cx="420" cy="70" r="2.2" className="ox-vita-relic-tw t3" />
          <circle cx="590" cy="130" r="1.6" className="ox-vita-relic-tw t1" />
          <circle cx="760" cy="60" r="2.8" className="ox-vita-relic-tw t2" />
          <circle cx="920" cy="140" r="1.7" className="ox-vita-relic-tw t3" />
          <circle cx="1080" cy="70" r="2.4" className="ox-vita-relic-tw t1" />
          <circle cx="1240" cy="160" r="1.9" className="ox-vita-relic-tw t2" />
          <circle cx="1350" cy="80" r="2.5" className="ox-vita-relic-tw t3" />
          <circle cx="340" cy="220" r="1.5" className="ox-vita-relic-tw t2" />
          <circle cx="850" cy="230" r="1.6" className="ox-vita-relic-tw t1" />
          <circle cx="1150" cy="240" r="1.4" className="ox-vita-relic-tw t3" />
        </g>
        <g stroke="#E2703A" strokeWidth="2" opacity="0.85" fill="none">
          <path d="M640 90 L700 130 L770 118 L830 170 L910 158" />
        </g>
        <g fill="#E2703A">
          <circle cx="640" cy="90" r="4" />
          <circle cx="700" cy="130" r="3" />
          <circle cx="770" cy="118" r="5" />
          <circle cx="830" cy="170" r="3" />
          <circle cx="910" cy="158" r="4" />
        </g>
        <circle cx="770" cy="118" r="11" fill="none" stroke="#FFF6D6" strokeWidth="1.5" opacity="0.8" />
      </svg>

      <div className="ox-vita-relic-inner">
        <p className="ox-vita-relic-eyebrow">Set XX · Vita V — Age: fourteen years · The elder</p>
        <h1 className="ox-vita-relic-title">Relic</h1>
        <p className="ox-vita-relic-lede">
          He no longer pulls. He lies at the pasture gate, breathes with the whole
          field, and teaches the young ones where the shade falls. When he goes, his
          bell will hang in the byre — and the herd will still turn toward its sound.
        </p>

        <div className="ox-vita-relic-stage">
          <motion.svg
            className="ox-vita-relic-ox"
            viewBox="0 0 700 400"
            role="img"
            aria-label="Elder ox lying recumbent under the night sky"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <defs>
              <linearGradient id="ox-vita-relic-hide" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stopColor="#5A5A68" />
                <stop offset="1" stopColor="#33333E" />
              </linearGradient>
            </defs>
            <ellipse cx="350" cy="348" rx="260" ry="24" fill="#000000" opacity="0.55" />
            <path d="M120 320 C140 300 190 290 250 292 L520 292 C580 292 610 306 614 326 C616 342 600 352 570 352 L160 352 C132 352 116 338 120 320 Z" fill="#23232E" stroke="#E8E0C8" strokeWidth="4" />
            <path d="M168 292 C180 250 230 220 310 216 C400 211 480 232 510 272 C522 290 514 302 492 304 L210 306 C188 306 172 302 168 292 Z" fill="url(#ox-vita-relic-hide)" stroke="#E8E0C8" strokeWidth="5" strokeLinejoin="round" />
            <g stroke="#E8E0C8" strokeWidth="3" opacity="0.4" fill="none" strokeLinecap="round">
              <path d="M300 232 C296 252 296 272 300 292" />
              <path d="M336 228 C332 250 332 272 336 294" />
              <path d="M372 228 C368 250 368 272 372 294" />
              <path d="M408 230 C404 252 404 274 408 294" />
            </g>
            <path d="M170 296 C200 288 240 286 280 288 L276 306 C240 306 204 306 176 308 Z" fill="#2C2C38" stroke="#E8E0C8" strokeWidth="4" strokeLinejoin="round" />
            <path d="M470 296 C500 290 534 290 560 298 L554 314 C528 310 498 310 474 312 Z" fill="#2C2C38" stroke="#E8E0C8" strokeWidth="4" strokeLinejoin="round" />
            <path d="M492 250 C470 236 452 216 448 190 C446 176 454 166 464 170 C474 174 474 190 480 202 C488 218 500 230 512 238 Z" fill="#3A3A48" stroke="#E8E0C8" strokeWidth="4" strokeLinejoin="round" />
            <path d="M336 214 C306 200 288 176 286 148 C285 136 293 128 301 132 C309 136 309 150 314 162 C321 178 334 190 348 198 Z" fill="#D8CFB4" stroke="#0D1326" strokeWidth="4" strokeLinejoin="round" />
            <path d="M560 168 C584 152 612 150 626 162 C636 172 630 184 616 187 L600 188 Z" fill="#D8CFB4" stroke="#0D1326" strokeWidth="4" strokeLinejoin="round" />
            <path d="M500 170 C524 160 556 166 574 188 C589 207 591 234 583 256 C576 274 560 282 544 277 C532 273 527 263 530 251 L500 200 Z" fill="#4A4A58" stroke="#E8E0C8" strokeWidth="5" strokeLinejoin="round" />
            <path d="M528 214 C536 212 544 214 550 220" fill="none" stroke="#E8E0C8" strokeWidth="3" strokeLinecap="round" />
            <circle cx="556" cy="208" r="7" fill="#E8E0C8" />
            <circle cx="557" cy="209" r="3" fill="#0D1326" />
            <path d="M530 251 C538 256 551 257 561 253 C569 250 574 244 575 236 L582 250 C579 263 567 272 553 272 C541 272 531 265 528 255 Z" fill="#101018" />
            <path d="M196 250 C210 240 232 236 252 240" fill="none" stroke="#7A8B6F" strokeWidth="4" strokeLinecap="round" />
            <g fill="#7A8B6F" opacity="0.9">
              <ellipse cx="212" cy="238" rx="9" ry="5" transform="rotate(-20 212 238)" />
              <ellipse cx="238" cy="234" rx="9" ry="5" transform="rotate(10 238 234)" />
            </g>
          </motion.svg>

          <div className={lit ? 'ox-vita-relic-ember is-lit' : 'ox-vita-relic-ember'} aria-hidden="true">
            <span />
          </div>

          <div className="ox-vita-relic-row">
            <button type="button" className="ox-vita-relic-btn" onClick={() => setLit((v) => !v)} aria-pressed={lit}>
              {lit ? 'Bank the ember' : 'Light the ember'}
            </button>
            <p className="ox-vita-relic-note">One ember stays lit by the gate until the herd settles. Then dark.</p>
          </div>
        </div>

        <div className="ox-vita-relic-grid">
          <article>
            <p>14</p>
            <h2>Years</h2>
            <p>Forty thousand furrows. Eleven herdmates outlived. Zero market days.</p>
          </article>
          <article>
            <p>11</p>
            <h2>Herdmates</h2>
            <p>He walked first through every new gate so the young ones would follow.</p>
          </article>
          <article>
            <p>1</p>
            <h2>Bell</h2>
            <p>Elm wood, iron clapper, worn smooth. It hangs in the byre after him.</p>
          </article>
        </div>

        <div className="ox-vita-relic-stone">
          <span className="ox-vita-relic-pebble" aria-hidden="true" />
          <div>
            <p className="ox-vita-relic-sign">SET XX · DESIGNED BY MUSE SPARK</p>
            <p className="ox-vita-relic-signsub">cut into the gate stone · the herd still turns toward his corner at dusk</p>
          </div>
        </div>
      </div>
    </div>
  )
}
