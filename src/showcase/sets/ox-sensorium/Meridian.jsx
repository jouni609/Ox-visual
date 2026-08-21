import { useState } from 'react'
import { motion } from 'framer-motion'
import './meridian.css'

const FACTS = [
  { n: '330°', l: 'Horizontal field — a ring of day with a slit of stereo in front' },
  { n: '25–50°', l: 'Binocular overlap. Depth is a narrow door, not a room' },
  { n: '2', l: 'Cone types. Blue-green and yellow. Red is a dimming, not a colour' },
  { n: '~30°', l: 'Rear blind cone, right behind the withers. The only place to vanish' },
]

function OxPortrait() {
  return (
    <svg className="meridian-portrait" viewBox="0 0 460 540" aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id="meridian-hide" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#c4a06a" />
          <stop offset="55%" stopColor="#8a6236" />
          <stop offset="100%" stopColor="#5a3c20" />
        </linearGradient>
        <linearGradient id="meridian-horn" x1="0" y1="0" x2="0.3" y2="1">
          <stop offset="0%" stopColor="#f7efd6" />
          <stop offset="100%" stopColor="#c4ae7a" />
        </linearGradient>
      </defs>
      <path
        d="M162 152 C72 148 -8 92 22 28 C52 2 96 36 112 78 C124 108 148 136 170 154 Z"
        fill="url(#meridian-horn)"
        stroke="#3a2c18"
        strokeWidth="3.5"
      />
      <path
        d="M298 152 C388 148 468 92 438 28 C408 2 364 36 348 78 C336 108 312 136 290 154 Z"
        fill="url(#meridian-horn)"
        stroke="#3a2c18"
        strokeWidth="3.5"
      />
      <ellipse cx="168" cy="148" rx="16" ry="10" fill="#d8c49a" stroke="#3a2c18" strokeWidth="2" />
      <ellipse cx="292" cy="148" rx="16" ry="10" fill="#d8c49a" stroke="#3a2c18" strokeWidth="2" />
      <path d="M118 168 C52 188 28 248 78 268 C118 250 148 214 156 188 Z" fill="#6a4a2a" stroke="#3a2c18" strokeWidth="3" />
      <path d="M342 168 C408 188 432 248 382 268 C342 250 312 214 304 188 Z" fill="#6a4a2a" stroke="#3a2c18" strokeWidth="3" />
      <path d="M128 198 C108 208 98 228 118 238" fill="#e8b2a4" />
      <path d="M332 198 C352 208 362 228 342 238" fill="#e8b2a4" />
      <path
        d="M230 108 C150 112 112 176 118 258 C122 328 150 392 188 448 C206 476 222 498 230 498 C238 498 254 476 272 448 C310 392 338 328 342 258 C348 176 310 112 230 108 Z"
        fill="url(#meridian-hide)"
        stroke="#3a2c18"
        strokeWidth="3.5"
      />
      <path d="M168 142 Q230 122 292 142 Q274 186 230 192 Q186 186 168 142 Z" fill="#d8b888" opacity="0.45" />
      <ellipse cx="148" cy="236" rx="26" ry="16" fill="#14343c" transform="rotate(-18 148 236)" />
      <ellipse cx="312" cy="236" rx="26" ry="16" fill="#14343c" transform="rotate(18 312 236)" />
      <ellipse cx="142" cy="234" rx="8" ry="8" fill="#0a1618" />
      <ellipse cx="318" cy="234" rx="8" ry="8" fill="#0a1618" />
      <circle className="meridian-glint" cx="138" cy="230" r="2.8" fill="#e7f7f4" />
      <circle className="meridian-glint" cx="314" cy="230" r="2.8" fill="#e7f7f4" />
      <path d="M176 318 C198 352 262 352 284 318 C270 392 190 392 176 318 Z" fill="#c49a68" />
      <ellipse cx="198" cy="372" rx="18" ry="12" fill="#2a1810" />
      <ellipse cx="262" cy="372" rx="18" ry="12" fill="#2a1810" />
      <ellipse cx="202" cy="370" rx="6" ry="4" fill="#6a4a32" />
      <ellipse cx="258" cy="370" rx="6" ry="4" fill="#6a4a32" />
      <path d="M204 418 Q230 432 256 418" fill="none" stroke="#3a2c18" strokeWidth="3" strokeLinecap="round" />
      <path d="M186 470 Q230 528 274 470 Q252 498 230 502 Q208 498 186 470 Z" fill="#6a4a2a" stroke="#3a2c18" strokeWidth="3" />
    </svg>
  )
}

function FieldMap() {
  return (
    <svg className="meridian-map" viewBox="0 0 400 400" aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id="meridian-field" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#1fb5c7" />
          <stop offset="50%" stopColor="#7fd6c4" />
          <stop offset="100%" stopColor="#f0c418" />
        </linearGradient>
      </defs>
      <circle cx="200" cy="200" r="188" fill="none" stroke="#12343c" strokeWidth="1.2" opacity="0.25" />
      <path
        d="M200 200 L158.6 354.5 A160 160 0 1 0 241.4 354.5 Z"
        fill="url(#meridian-field)"
        opacity="0.38"
      />
      <path
        d="M200 200 L158.6 354.5 A160 160 0 1 0 241.4 354.5"
        fill="none"
        stroke="#12343c"
        strokeWidth="2"
      />
      <path d="M200 200 L170 360" stroke="#d4533a" strokeWidth="2" />
      <path d="M200 200 L230 360" stroke="#d4533a" strokeWidth="2" />
      <path d="M170 360 A42 42 0 0 0 230 360" fill="#d4533a" opacity="0.35" />
      <g fill="#8b6a3f" stroke="#3a2c18" strokeWidth="1.6">
        <path d="M200 92 C176 92 162 110 164 128 L168 148 C176 156 224 156 232 148 L236 128 C238 110 224 92 200 92 Z" />
        <path d="M170 116 C118 112 78 92 70 70 C90 52 128 78 168 108 Z" fill="#e8d9b0" />
        <path d="M230 116 C282 112 322 92 330 70 C310 52 272 78 232 108 Z" fill="#e8d9b0" />
        <path d="M176 130 C154 138 148 150 156 158 L176 148 Z" />
        <path d="M224 130 C246 138 252 150 244 158 L224 148 Z" />
        <ellipse cx="200" cy="214" rx="52" ry="74" />
        <ellipse cx="172" cy="168" rx="10" ry="16" />
        <ellipse cx="228" cy="168" rx="10" ry="16" />
        <ellipse cx="174" cy="276" rx="10" ry="16" />
        <ellipse cx="226" cy="276" rx="10" ry="16" />
        <path d="M200 286 Q206 332 200 348 Q194 332 200 286" fill="#5c4324" />
      </g>
      <ellipse cx="186" cy="118" rx="4" ry="3" fill="#12343c" />
      <ellipse cx="214" cy="118" rx="4" ry="3" fill="#12343c" />
      <text x="200" y="28" textAnchor="middle" fill="#12343c" fontSize="11" fontFamily="Outfit, sans-serif" letterSpacing="2">
        BINOCULAR 25–50°
      </text>
      <text x="200" y="392" textAnchor="middle" fill="#d4533a" fontSize="11" fontFamily="Outfit, sans-serif" letterSpacing="2">
        BLIND CONE ~30°
      </text>
      <g className="meridian-scan">
        <path d="M200 200 L200 48" stroke="#12343c" strokeWidth="1.5" strokeDasharray="4 5" />
      </g>
    </svg>
  )
}

export default function Meridian() {
  const [oxVision, setOxVision] = useState(true)

  return (
    <div className={`th-meridian${oxVision ? ' is-ox' : ' is-human'}`}>
      <div className="meridian-split" aria-hidden="true">
        <div className="meridian-lobe meridian-lobe-c" />
        <div className="meridian-lobe meridian-lobe-y" />
      </div>
      <motion.div
        className="meridian-scanline"
        aria-hidden="true"
        animate={{ rotate: 360 }}
        transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
      />
      <div className="meridian-wrap">
        <div className="meridian-art">
          <OxPortrait />
          <p className="meridian-eyes-cap">Lateral eyes. The world arrives from the sides first.</p>
        </div>
        <main className="meridian-main">
          <p className="meridian-kicker">
            Vision · <span lang="la">Bos taurus</span> · 330°
          </p>
          <h1 className="meridian-h1">
            The day in
            <span> two hues</span>
          </h1>
          <p className="meridian-lead">
            An ox does not see a pastoral postcard. The skull hangs the eyes on the flanks, so the
            field is a nearly closed ring — about three hundred and thirty degrees — with a thin
            binocular door in front and a blind cone behind the withers. Two cone types paint the
            ring in blue-green and yellow. Red is not a colour here. It is a dimming.
          </p>
          <button
            type="button"
            className="meridian-toggle"
            aria-pressed={oxVision}
            onClick={() => setOxVision((v) => !v)}
          >
            {oxVision ? 'Viewing as the ox' : 'Viewing as a human'}
            <span>{oxVision ? 'Dichromatic field on' : 'Trichromatic overlay'}</span>
          </button>
          <ul className="meridian-facts">
            {FACTS.map((f) => (
              <li key={f.n}>
                <strong>{f.n}</strong>
                <span>{f.l}</span>
              </li>
            ))}
          </ul>
          <div className="meridian-seal" role="note">
            <svg viewBox="0 0 72 72" aria-hidden="true" focusable="false">
              <circle cx="36" cy="36" r="34" fill="none" stroke="currentColor" strokeWidth="2" />
              <circle cx="36" cy="36" r="18" fill="none" stroke="currentColor" strokeWidth="2" />
              <circle cx="36" cy="36" r="6" fill="currentColor" />
              <path d="M36 2 V14 M36 58 V70 M2 36 H14 M58 36 H70" stroke="currentColor" strokeWidth="2" />
            </svg>
            <p>
              Trial lens 07
              <b>SET VII · DESIGNED BY GROK 4.6</b>
            </p>
          </div>
        </main>
        <aside className="meridian-aside">
          <p className="meridian-aside-k">Dorsal field</p>
          <FieldMap />
          <p className="meridian-aside-n">
            Head to the north. The missing wedge is the only corridor a wolf can own.
          </p>
        </aside>
      </div>
    </div>
  )
}
