import { useState } from 'react'
import { motion } from 'framer-motion'
import './bison.css'

const ECOLOGY = [
  {
    id: 'plow',
    title: 'Snow-Sweep Grazing',
    stat: '1.2 m drift depth',
    summary:
      'Unlike domestic cattle that paw at crusted snow with their hooves, a bison swings its massive low-slung skull side to side like a living plow, powered by towering shoulder-hump muscles to reach dormant grama grass below.',
  },
  {
    id: 'coat',
    title: 'Dual-Layer Winter Cape',
    stat: '−40 °C insulated',
    summary:
      'Guard hairs and dense woollen underfur trap body heat so completely that falling snow settles on a bull’s back without melting. When temperatures drop, the herd turns face-first directly into the blizzard.',
  },
  {
    id: 'wallow',
    title: 'Keystone Prairie Wallows',
    stat: '3–5 m dust basins',
    summary:
      'Bulls roll repeatedly in exposed prairie soil to shed winter fleece and deter flies. Those compacted basins catch spring snowmelt, creating ephemeral vernal pools for amphibians and native prairie sedges.',
  },
]

export default function Bison() {
  const [tab, setTab] = useState('plow')
  const current = ECOLOGY.find((e) => e.id === tab) || ECOLOGY[0]

  return (
    <div className="th-vantage-bison ox-vantage-bis-root">
      <div className="ox-vantage-bis-skywrap">
        <header className="ox-vantage-bis-topbar">
          <span>NORTHERN GREAT PLAINS · 47° N</span>
          <span lang="la">BISON BISON</span>
        </header>

        <div className="ox-vantage-bis-headline">
          <p className="ox-vantage-bis-sub">KEYSTONE GRAZER OF THE SHORTGRASS STEPPE</p>
          <h1 className="ox-vantage-bis-h1">PLAINS BISON</h1>
        </div>

        <div className="ox-vantage-bis-stage">
          <svg
            className="ox-vantage-bis-svg"
            viewBox="0 0 1120 520"
            role="img"
            aria-label="American Plains Bison bull striding left through winter snow in three-quarter profile, showing its towering shaggy dark-chocolate shoulder hump, curved black horns, bearded head held low, sleeker tawny hindquarters, and four cloven-hoofed legs"
          >
            <defs>
              <linearGradient id="ox-vantage-bis-horizon" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#101E2B" stopOpacity="0" />
                <stop offset="62%" stopColor="#1E3548" stopOpacity="0.65" />
                <stop offset="100%" stopColor="#C65D2E" stopOpacity="0.58" />
              </linearGradient>
              <linearGradient id="ox-vantage-bis-snow" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#EFF5F8" />
                <stop offset="55%" stopColor="#DCEAF2" />
                <stop offset="100%" stopColor="#C4D9E6" />
              </linearGradient>
              <linearGradient id="ox-vantage-bis-hind" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#75492F" />
                <stop offset="60%" stopColor="#593521" />
                <stop offset="100%" stopColor="#3B2114" />
              </linearGradient>
              <linearGradient id="ox-vantage-bis-cape" x1="20%" y1="0%" x2="80%" y2="100%">
                <stop offset="0%" stopColor="#3D261A" />
                <stop offset="50%" stopColor="#261710" />
                <stop offset="100%" stopColor="#160D09" />
              </linearGradient>
            </defs>

            <rect x="0" y="0" width="1120" height="360" fill="url(#ox-vantage-bis-horizon)" />

            <path
              d="M 0 342 L 140 318 L 260 326 L 350 296 L 470 302 L 540 330 L 710 312 L 820 288 L 930 294 L 1040 322 L 1120 314 L 1120 370 L 0 370 Z"
              fill="#192D3F"
              opacity="0.72"
            />

            <path
              d="M 0 356 Q 280 342 560 358 T 1120 350 L 1120 520 L 0 520 Z"
              fill="url(#ox-vantage-bis-snow)"
            />
            <path
              d="M 0 398 Q 310 384 620 404 T 1120 392"
              fill="none"
              stroke="#B5CFE0"
              strokeWidth="2.5"
              opacity="0.7"
            />
            <path
              d="M 120 456 Q 460 442 840 462"
              fill="none"
              stroke="#FFFFFF"
              strokeWidth="3"
              opacity="0.85"
            />

            {[
              { y: 120, w: 180, d: 3.1, delay: 0 },
              { y: 196, w: 240, d: 2.6, delay: 0.7 },
              { y: 268, w: 160, d: 3.4, delay: 1.3 },
              { y: 332, w: 210, d: 2.8, delay: 0.4 },
              { y: 422, w: 190, d: 2.5, delay: 1.0 },
            ].map((gust) => (
              <motion.line
                key={gust.y}
                x1="1150"
                y1={gust.y}
                x2={1150 + gust.w}
                y2={gust.y + 8}
                stroke="#ECF2F5"
                strokeWidth="2"
                strokeLinecap="round"
                opacity="0.4"
                animate={{ x: [0, -1380] }}
                transition={{ duration: gust.d, delay: gust.delay, repeat: Infinity, ease: 'linear' }}
              />
            ))}

            <ellipse cx="562" cy="466" rx="255" ry="18" fill="#183247" opacity="0.22" />

            <motion.g
              animate={{ y: [0, -2, 0] }}
              transition={{ duration: 4.4, repeat: Infinity, ease: 'easeInOut' }}
            >
              <path
                d="M 718 338 L 732 394 L 746 446 L 768 446 L 758 392 L 752 330 Z"
                fill="#3C2316"
              />
              <path d="M 744 444 L 762 444 L 766 462 L 740 462 Z" fill="#140D0B" />

              <path
                d="M 384 366 L 372 414 L 362 446 L 386 446 L 402 406 L 420 364 Z"
                fill="#1C110C"
              />
              <path d="M 358 444 L 378 444 L 382 462 L 352 462 Z" fill="#0F0908" />

              <motion.g
                style={{ originX: '812px', originY: '226px' }}
                animate={{ rotate: [0, 7, -3, 0] }}
                transition={{ duration: 3.8, repeat: Infinity, ease: 'easeInOut' }}
              >
                <path
                  d="M 810 226 C 842 238 854 274 854 312"
                  fill="none"
                  stroke="#4B2B1A"
                  strokeWidth="8"
                  strokeLinecap="round"
                />
                <path
                  d="M 852 304 C 840 318 842 338 856 350 C 866 336 868 318 860 304 Z"
                  fill="#1C110B"
                />
              </motion.g>

              <path
                d="M 520 144 C 578 164 624 196 688 198 C 756 200 806 210 822 246 C 836 278 824 328 794 366 L 802 410 L 792 452 L 766 452 L 774 402 L 752 362 C 712 342 652 348 564 366 L 520 356 Z"
                fill="url(#ox-vantage-bis-hind)"
                stroke="#140B07"
                strokeWidth="2.6"
                strokeLinejoin="round"
              />
              <path
                d="M 576 206 C 646 210 732 212 794 234"
                fill="none"
                stroke="#A56A43"
                strokeWidth="3.5"
                strokeLinecap="round"
                opacity="0.55"
              />
              <path d="M 762 450 L 780 450 L 786 468 L 758 468 Z" fill="#140D0B" />
              <path d="M 782 450 L 795 450 L 799 467 L 786 467 Z" fill="#271B16" />

              <path
                d="M 332 204 C 366 156 416 106 470 104 C 520 102 562 146 588 194 C 600 218 594 236 584 252 C 598 274 590 296 576 312 C 584 334 574 356 544 374 C 532 372 522 368 514 364 L 502 412 L 494 454 L 466 454 L 474 408 C 462 406 448 400 438 392 C 424 398 406 394 394 384 C 378 386 364 374 352 356 C 334 322 318 258 332 204 Z"
                fill="url(#ox-vantage-bis-cape)"
                stroke="#0F0906"
                strokeWidth="2.8"
                strokeLinejoin="round"
              />

              <path
                d="M 412 138 C 446 120 492 124 528 156 M 430 184 C 468 176 510 192 544 226 M 426 244 C 466 248 504 268 534 304 M 452 318 C 478 334 494 358 498 388"
                fill="none"
                stroke="#5A3926"
                strokeWidth="3"
                strokeLinecap="round"
                opacity="0.5"
              />
              <path d="M 462 452 L 480 452 L 485 470 L 458 470 Z" fill="#120B09" />
              <path d="M 482 452 L 496 452 L 500 469 L 486 469 Z" fill="#261A15" />

              <motion.g
                style={{ originX: '360px', originY: '266px' }}
                animate={{ rotate: [0, -2.5, 1.5, 0] }}
                transition={{ duration: 4.8, repeat: Infinity, ease: 'easeInOut' }}
              >
                <path
                  d="M 294 234 C 260 226 242 204 252 172 C 258 192 272 206 302 214 Z"
                  fill="#1C1A19"
                  stroke="#0A0908"
                  strokeWidth="2.2"
                />
                <path
                  d="M 366 238 C 402 228 422 202 406 164 C 402 188 388 206 356 214 Z"
                  fill="#23201E"
                  stroke="#0A0908"
                  strokeWidth="2.4"
                />
                <path
                  d="M 404 176 C 400 194 388 208 370 216"
                  fill="none"
                  stroke="#6A645F"
                  strokeWidth="2"
                  strokeLinecap="round"
                  opacity="0.7"
                />

                <path
                  d="M 378 248 C 396 244 416 250 422 264 C 408 272 392 270 378 262 Z"
                  fill="#2C1B12"
                  stroke="#0F0906"
                  strokeWidth="2"
                />

                <path
                  d="M 284 220 C 312 198 360 202 384 228 C 402 250 404 294 388 334 C 378 356 364 374 348 394 C 338 386 332 396 320 416 C 308 398 302 384 290 388 C 282 374 278 360 272 346 C 258 322 256 284 266 252 C 270 236 276 226 284 220 Z"
                  fill="#23150E"
                  stroke="#0E0805"
                  strokeWidth="2.6"
                  strokeLinejoin="round"
                />

                <path
                  d="M 294 234 Q 328 218 362 238 M 286 256 Q 326 244 366 260 M 342 308 C 350 332 348 358 338 382"
                  fill="none"
                  stroke="#4B3021"
                  strokeWidth="2.6"
                  strokeLinecap="round"
                  opacity="0.65"
                />

                <path
                  d="M 244 306 C 258 294 288 296 298 314 C 304 330 296 356 278 364 C 260 370 240 356 236 338 C 232 324 236 312 244 306 Z"
                  fill="#2B2421"
                  stroke="#0E0B0A"
                  strokeWidth="2.2"
                />
                <path d="M 246 314 Q 268 302 290 314" fill="none" stroke="#4D423D" strokeWidth="1.6" opacity="0.65" />
                <ellipse cx="255" cy="332" rx="6.2" ry="3.8" transform="rotate(20 255 332)" fill="#0C0908" />
                <ellipse cx="280" cy="334" rx="5.5" ry="3.6" transform="rotate(-16 280 334)" fill="#0C0908" />
                <path d="M 248 352 Q 266 358 284 352" fill="none" stroke="#5E5450" strokeWidth="2" strokeLinecap="round" />

                <path d="M 296 275 Q 312 267 328 275" fill="none" stroke="#4E3426" strokeWidth="3.2" strokeLinecap="round" />
                <ellipse cx="312" cy="282" rx="7.5" ry="4.2" fill="#0B0706" />
                <circle cx="310" cy="281" r="1.8" fill="#E89A68" />

                <motion.ellipse
                  cx="214"
                  cy="332"
                  rx="18"
                  ry="9"
                  fill="#ECF2F5"
                  animate={{ x: [0, -52], y: [0, -16], scale: [0.6, 1.8], opacity: [0, 0.55, 0] }}
                  transition={{ duration: 2.9, repeat: Infinity, ease: 'easeOut' }}
                />
              </motion.g>

              <g fill="#FFFFFF" opacity="0.85">
                <circle cx="344" cy="462" r="5" />
                <circle cx="332" cy="454" r="3.5" />
                <circle cx="322" cy="464" r="2.5" />
                <circle cx="450" cy="470" r="4" />
                <circle cx="750" cy="466" r="4.5" />
              </g>
            </motion.g>
          </svg>
        </div>
      </div>

      <section className="ox-vantage-bis-snowband">
        <div className="ox-vantage-bis-inner">
          <div className="ox-vantage-bis-tabs" role="tablist" aria-label="Plains bison winter ecology">
            {ECOLOGY.map((item) => (
              <button
                key={item.id}
                type="button"
                role="tab"
                aria-selected={tab === item.id}
                className={`ox-vantage-bis-tab ${tab === item.id ? 'is-active' : ''}`}
                onClick={() => setTab(item.id)}
              >
                <span className="ox-vantage-bis-tab-stat">{item.stat}</span>
                <span className="ox-vantage-bis-tab-name">{item.title}</span>
              </button>
            ))}
          </div>

          <article className="ox-vantage-bis-panel">
            <div>
              <h2 className="ox-vantage-bis-panel-title">{current.title}</h2>
              <p className="ox-vantage-bis-panel-body">{current.summary}</p>
            </div>
            <div className="ox-vantage-bis-facts">
              <div>
                <span className="ox-vantage-bis-fkey">BULL MASS</span>
                <strong className="ox-vantage-bis-fval">820 – 1,000 kg</strong>
              </div>
              <div>
                <span className="ox-vantage-bis-fkey">SHOULDER HEIGHT</span>
                <strong className="ox-vantage-bis-fval">1.85 m at hump</strong>
              </div>
              <div>
                <span className="ox-vantage-bis-fkey">SPRINT PACE</span>
                <strong className="ox-vantage-bis-fval">56 km/h over crust</strong>
              </div>
            </div>
          </article>

          <footer className="ox-vantage-bis-footer">
            <div className="ox-vantage-bis-tag" aria-label="Wildlife survey brass specimen tag">
              <span className="ox-vantage-bis-rivet" aria-hidden="true" />
              <span>SET XXXVI · DESIGNED BY GEMINI 4 NEON</span>
            </div>
          </footer>
        </div>
      </section>
    </div>
  )
}
