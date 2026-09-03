import { useState } from 'react'
import { motion } from 'framer-motion'
import './dam.css'

const CALVES = {
  first: { name: 'First — Asha', year: '2019', note: 'Red poll calf, kept for milk. Now leads the herd to water and answers to a copper bell.', weight: '31 kg at birth' },
  second: { name: 'Second — Bhola', year: '2021', note: 'Training now. Halter-broke in nine days; the quickest learner this dam has raised.', weight: '34 kg at birth' },
  third: { name: 'Third — Chhaya', year: '2023', note: 'Still nursing. Sleeps with her chin on her mother’s foreleg through every storm.', weight: '29 kg at birth' },
}

export default function Dam() {
  const [calf, setCalf] = useState('third')
  const active = CALVES[calf]
  return (
    <div className="ox-vita-dam th-ox-vita-dam">
      <div className="ox-vita-dam-inner">
        <p className="ox-vita-dam-eyebrow">Set XX · Vita IV — Age: nine years · The dam</p>
        <h1 className="ox-vita-dam-title">Dam</h1>
        <p className="ox-vita-dam-lede" lang="en">
          Three calvings, three live calves, eleven thousand litres of milk. In the
          herd book she is only number 214, but every bloodline on this page runs
          through her. <span lang="sa">गौमाता</span> the herders call her — the cow-mother.
        </p>

        <div className="ox-vita-dam-sheet">
          <div className="ox-vita-dam-tree" aria-label="Maternal bloodline">
            <p className="ox-vita-dam-kicker">Maternal line · herd book 214</p>
            <ul>
              <li><strong>Granddam Tara</strong><span>2008 — 2019 · grey, long horn</span></li>
              <li className="is-you"><strong>Dam 214 — Ganga</strong><span>2016 — present · this page</span></li>
              <li><strong>Sire line — Kalu</strong><span>draught bull, temple pasture</span></li>
            </ul>
          </div>

          <motion.svg
            className="ox-vita-dam-ox"
            viewBox="0 0 700 460"
            role="img"
            aria-label="Mother cow standing while her calf nurses beneath her"
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <defs>
              <linearGradient id="ox-vita-dam-hide" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stopColor="#8A5A44" />
                <stop offset="1" stopColor="#5A3423" />
              </linearGradient>
              <linearGradient id="ox-vita-dam-calf" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stopColor="#D9A97E" />
                <stop offset="1" stopColor="#A9764E" />
              </linearGradient>
            </defs>
            <ellipse cx="350" cy="412" rx="272" ry="24" fill="#2A201A" opacity="0.16" />
            <g>
              <path d="M186 250 L176 392 L204 392 L212 250 Z" fill="#3E2716" />
              <path d="M268 258 L262 396 L290 396 L296 258 Z" fill="#4A2E17" />
              <path d="M500 256 L496 394 L524 394 L528 254 Z" fill="#3E2716" />
              <path d="M570 250 L580 390 L608 388 L596 246 Z" fill="#4A2E17" />
              <g fill="#2A201A">
                <path d="M172 388 L208 388 L206 406 L170 406 Z" />
                <path d="M258 392 L294 392 L292 410 L256 410 Z" />
                <path d="M492 390 L528 390 L526 408 L490 408 Z" />
                <path d="M576 386 L612 384 L613 402 L577 404 Z" />
              </g>
            </g>
            <path d="M190 180 C250 128 360 110 470 132 C544 147 586 192 588 252 C589 292 558 316 506 318 C410 322 280 316 224 292 C200 280 184 212 190 180 Z" fill="url(#ox-vita-dam-hide)" stroke="#2A201A" strokeWidth="6" strokeLinejoin="round" />
            <path d="M300 318 C310 340 330 350 352 348 C372 346 384 334 386 318 Z" fill="#C98F7A" stroke="#2A201A" strokeWidth="5" strokeLinejoin="round" />
            <path d="M322 346 L320 362 M342 348 L342 364 M362 346 L364 362" stroke="#2A201A" strokeWidth="5" strokeLinecap="round" />
            <path d="M196 176 C172 162 146 160 130 172 C118 181 120 195 134 200 C152 207 174 199 188 188 Z" fill="#6B4226" stroke="#2A201A" strokeWidth="5" strokeLinejoin="round" />
            <path d="M548 132 C566 120 590 120 602 132 L592 154 C580 146 564 146 552 154 Z" fill="#6B4226" stroke="#2A201A" strokeWidth="5" strokeLinejoin="round" />
            <path d="M412 168 C372 152 348 126 346 96 C345 84 354 77 362 82 C370 87 369 101 374 113 C381 130 396 143 410 150 Z" fill="#EFE0C2" stroke="#2A201A" strokeWidth="5" strokeLinejoin="round" />
            <path d="M606 128 C630 116 654 120 662 134 C668 146 660 156 646 157 L630 156 Z" fill="#EFE0C2" stroke="#2A201A" strokeWidth="5" strokeLinejoin="round" />
            <path d="M548 136 C572 128 604 136 622 160 C637 181 639 210 631 234 C624 254 606 264 588 259 C576 256 570 246 573 234 L548 176 Z" fill="#7A4E30" stroke="#2A201A" strokeWidth="6" strokeLinejoin="round" />
            <circle cx="600" cy="188" r="9" fill="#2A201A" />
            <circle cx="603" cy="185" r="3" fill="#F3EAD3" />
            <path d="M573 234 C583 240 597 241 609 236 C619 232 625 224 626 214 L634 230 C631 246 617 258 600 259 C586 260 575 252 570 240 Z" fill="#241610" />
            <path d="M246 276 C262 270 284 270 298 278" fill="none" stroke="#2A201A" strokeWidth="4" opacity="0.45" strokeLinecap="round" />
            <path d="M588 196 C596 206 604 220 608 234" fill="none" stroke="#B98A2F" strokeWidth="3" opacity="0.8" />
            <g>
              <path d="M392 330 C370 336 348 350 342 372 C338 386 344 398 358 400 L410 400 C424 400 430 390 426 378 C420 360 408 342 398 332 Z" fill="url(#ox-vita-dam-calf)" stroke="#2A201A" strokeWidth="5" strokeLinejoin="round" />
              <path d="M392 332 C404 318 420 310 436 310 L442 326 C430 328 418 334 410 342 Z" fill="url(#ox-vita-dam-calf)" stroke="#2A201A" strokeWidth="5" strokeLinejoin="round" />
              <circle cx="434" cy="318" r="6" fill="#2A201A" />
              <path d="M344 384 L338 404 L352 404 L356 386 Z" fill="#7A4E30" stroke="#2A201A" strokeWidth="4" />
              <path d="M410 396 L410 410 L424 410 L422 394 Z" fill="#7A4E30" stroke="#2A201A" strokeWidth="4" />
              <path d="M426 378 C432 372 436 364 436 356" fill="none" stroke="#2A201A" strokeWidth="4" strokeLinecap="round" />
            </g>
          </motion.svg>

          <div className="ox-vita-dam-calves">
            <p className="ox-vita-dam-kicker">Her three calves — choose one</p>
            <div className="ox-vita-dam-tabs">
              {Object.entries(CALVES).map(([key, c]) => (
                <button
                  key={key}
                  type="button"
                  className={calf === key ? 'ox-vita-dam-tab is-on' : 'ox-vita-dam-tab'}
                  onClick={() => setCalf(key)}
                  aria-pressed={calf === key}
                >
                  {c.year}
                </button>
              ))}
            </div>
            <h2 className="ox-vita-dam-calfname">{active.name}</h2>
            <p className="ox-vita-dam-calfnote" aria-live="polite">{active.note}</p>
            <p className="ox-vita-dam-weight">{active.weight}</p>
          </div>
        </div>

        <div className="ox-vita-dam-sealrow">
          <div className="ox-vita-dam-seal" aria-label="Wax seal signature">
            <span className="ox-vita-dam-sealinner">214</span>
          </div>
          <div>
            <p className="ox-vita-dam-sign">SET XX · DESIGNED BY MUSE SPARK</p>
            <p className="ox-vita-dam-signsub">pressed in sealing wax on herd book 214 · dam Ganga, three live calves</p>
          </div>
        </div>
      </div>
    </div>
  )
}
