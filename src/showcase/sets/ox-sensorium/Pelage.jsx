import { useState } from 'react'
import { motion } from 'framer-motion'
import './pelage.css'

const WEATHERS = [
  {
    id: 'rain',
    name: 'Rain',
    copy: 'Water beads on the guard hairs and runs the parting. The undercoat stays a private climate.',
  },
  {
    id: 'wind',
    name: 'Wind',
    copy: 'A front combs the flank and the skin reads direction before the eye does. Hair is a map of air.',
  },
  {
    id: 'groom',
    name: 'Tongue',
    copy: 'Allogrooming: a companion’s rasp at the withers. Touch as census, as peace, as itch answered.',
  },
]

function Rain() {
  return (
    <div className="pelage-rain" aria-hidden="true">
      {Array.from({ length: 28 }).map((_, i) => (
        <span key={i} style={{ left: `${(i * 13.7) % 100}%`, animationDelay: `${(i % 9) * 0.18}s` }} />
      ))}
    </div>
  )
}

function OxHide() {
  return (
    <svg className="pelage-ox" viewBox="-40 40 960 500" aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id="pelage-coat" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#6a3218" />
          <stop offset="40%" stopColor="#c45c26" />
          <stop offset="100%" stopColor="#2a160e" />
        </linearGradient>
        <linearGradient id="pelage-wet" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#d8c4a8" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#1b3a4b" stopOpacity="0.15" />
        </linearGradient>
        <pattern id="pelage-hair" width="18" height="28" patternUnits="userSpaceOnUse">
          <path d="M9 2 C11 12 7 18 10 26" fill="none" stroke="#2a160e" strokeWidth="1.1" opacity="0.55" />
          <path d="M3 4 C4 14 1 20 4 27" fill="none" stroke="#8a4020" strokeWidth="0.9" opacity="0.45" />
          <path d="M15 1 C16 11 13 19 16 27" fill="none" stroke="#4a2412" strokeWidth="0.9" opacity="0.4" />
        </pattern>
      </defs>
      <path d="M300 250 C250 170 360 130 460 168 C590 140 710 180 740 250 C770 320 720 380 600 400 C450 430 300 400 270 330 C250 290 270 270 300 250 Z" fill="url(#pelage-coat)" stroke="#1a0e08" strokeWidth="3" />
      <path d="M300 250 C250 170 360 130 460 168 C590 140 710 180 740 250 C770 320 720 380 600 400 C450 430 300 400 270 330 C250 290 270 270 300 250 Z" fill="url(#pelage-hair)" />
      <path d="M220 270 C180 190 250 150 310 198 C350 228 340 280 300 310 C250 340 210 320 220 270 Z" fill="url(#pelage-coat)" stroke="#1a0e08" strokeWidth="3" />
      <path d="M220 270 C180 190 250 150 310 198 C350 228 340 280 300 310 C250 340 210 320 220 270 Z" fill="url(#pelage-hair)" />
      <path d="M148 248 C78 200 48 148 72 108 C128 92 176 136 208 186 C228 220 228 250 214 272 Z" fill="url(#pelage-coat)" stroke="#1a0e08" strokeWidth="3" />
      <path d="M148 248 C78 200 48 148 72 108 C128 92 176 136 208 186 C228 220 228 250 214 272 Z" fill="url(#pelage-hair)" />
      <path d="M92 136 C8 70 -48 108 8 178 C28 204 78 190 118 154 Z" fill="#e8d5b5" stroke="#1a0e08" strokeWidth="3" />
      <ellipse cx="108" cy="148" rx="14" ry="9" fill="#d4c09a" stroke="#1a0e08" strokeWidth="2" />
      <ellipse cx="126" cy="186" rx="13" ry="9" fill="#1a0e08" />
      <circle cx="122" cy="184" r="2.4" fill="#f2f6f7" />
      <path d="M96 214 Q128 244 104 262" fill="none" stroke="#1a0e08" strokeWidth="3" />
      <path className="pelage-ear" d="M196 168 C230 118 286 128 268 186 C248 228 206 214 196 168 Z" fill="#8a4020" stroke="#1a0e08" strokeWidth="3" />
      <path d="M210 172 C236 138 268 148 256 186 C242 214 214 204 210 172 Z" fill="#e0a090" />
      <path d="M188 300 Q228 370 196 398 Q150 348 188 300" fill="#4a2412" />
      <path d="M390 388 L390 468 L362 500 L418 500 L414 468 L414 388 Z" fill="#3a1e12" />
      <path d="M470 398 L470 472 L442 504 L498 504 L494 472 L494 398 Z" fill="#3a1e12" />
      <path d="M580 388 L580 468 L552 500 L608 500 L604 468 L604 388 Z" fill="#3a1e12" />
      <path d="M656 398 L656 472 L628 504 L684 504 L680 472 L680 398 Z" fill="#3a1e12" />
      <path d="M362 500 L390 514 L418 500 M442 504 L470 518 L498 504 M552 500 L580 514 L608 500 M628 504 L656 518 L684 504" fill="none" stroke="#1a0e08" strokeWidth="4" strokeLinecap="round" />
      <path className="pelage-tail" d="M730 210 C820 140 870 200 840 250 C780 268 750 240 736 228 Z" fill="#3a1e12" stroke="#1a0e08" strokeWidth="3" />
      <path d="M824 244 C846 270 838 288 812 280" fill="#2a160e" />
      <path d="M210 220 Q470 150 720 230 Q470 200 210 220 Z" fill="url(#pelage-wet)" />
      <g className="pelage-companion">
        <path d="M70 410 C50 372 90 350 140 360 C200 348 250 368 246 400 C242 432 180 448 110 440 C80 436 70 424 70 410 Z" fill="#5a2c16" stroke="#1a0e08" strokeWidth="2.5" />
        <path d="M70 410 C50 372 90 350 140 360 C200 348 250 368 246 400 C242 432 180 448 110 440 C80 436 70 424 70 410 Z" fill="url(#pelage-hair)" />
        <path d="M52 392 C18 368 8 386 40 408 C52 400 56 394 52 392 Z" fill="#e8d5b5" stroke="#1a0e08" strokeWidth="2" />
        <path d="M118 356 C138 332 168 340 158 368 Z" fill="#8a4020" stroke="#1a0e08" strokeWidth="2" />
        <ellipse cx="62" cy="396" rx="5" ry="3.5" fill="#1a0e08" />
        <path className="pelage-lick" d="M230 392 Q300 300 390 250" fill="none" stroke="#e0a090" strokeWidth="8" strokeLinecap="round" />
      </g>
    </svg>
  )
}

export default function Pelage() {
  const [wx, setWx] = useState(WEATHERS[0])

  return (
    <div className={`th-pelage is-${wx.id}`}>
      {wx.id === 'rain' ? <Rain /> : null}
      <div className="pelage-ground" aria-hidden="true" />
      <div className="pelage-frame">
        <p className="pelage-kicker">
          Touch · <span lang="la">Integumentum</span> · <span lang="la">Panniculus</span>
        </p>
        <h1 className="pelage-h1">A weather station in hair</h1>
        <OxHide />
        <p className="pelage-lead">
          Rain finds the hide first. Wind parts the guard hairs. A companion’s tongue maps the
          withers in slow strokes — allogrooming, the social sense. A fly lands and the skin
          twitches in a panniculus snap no thought has to order. The ox is not wearing a coat.
          The ox is a coat that thinks.
        </p>
        <div className="pelage-wx">
          {WEATHERS.map((w) => (
            <button
              key={w.id}
              type="button"
              className={w.id === wx.id ? 'is-on' : ''}
              aria-pressed={w.id === wx.id}
              onClick={() => setWx(w)}
            >
              {w.name}
            </button>
          ))}
        </div>
        <motion.p className="pelage-copy" key={wx.id} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}>
          {wx.copy}
        </motion.p>
        <div className="pelage-tag" role="note">
          <span>Ear tag · rain-smeared</span>
          <b>SET VII · DESIGNED BY GROK 4.6</b>
        </div>
      </div>
    </div>
  )
}
