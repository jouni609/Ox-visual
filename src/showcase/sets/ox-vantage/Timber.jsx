import { useState } from 'react'
import { motion } from 'framer-motion'
import './timber.css'

const GRADES = [
  {
    id: 'ice',
    label: 'Iced Skid Road',
    pull: '1,420 lbf',
    speed: '2.4 mph',
    load: '3,800 bd ft',
    cycle: 2.8,
    note: 'Water-glazed hardwood skids cut sliding friction in half so one seasoned ox holds steady momentum.',
  },
  {
    id: 'snow',
    label: '3% Snow Grade',
    pull: '2,180 lbf',
    speed: '1.7 mph',
    load: '2,950 bd ft',
    cycle: 2.1,
    note: 'Packed snow grips the split cloven hooves as the animal leans its full shoulder mass into the ash bow.',
  },
  {
    id: 'mud',
    label: 'Spring Thaw Mud',
    pull: '2,940 lbf',
    speed: '1.1 mph',
    load: '1,900 bd ft',
    cycle: 1.5,
    note: 'At dead-pull breakaway, an ox applies slow deadweight torque where a nervous draught horse stalls.',
  },
]

const TALLY = [
  { key: 'YOKE', val: 'Hand-carved yellow birch · 52 in' },
  { key: 'HORN KNOBS', val: 'Cast brass tips · prevents timber gouge' },
  { key: 'VOICE CALLS', val: 'Haw (left) · Gee (right) · Whoa-hish' },
  { key: 'DAILY HAUL', val: '14–18 tons green spruce per team' },
]

export default function Timber() {
  const [gradeId, setGradeId] = useState('snow')
  const active = GRADES.find((g) => g.id === gradeId) || GRADES[1]

  return (
    <div className="th-vantage-timber ox-vantage-tim-root">
      <div className="ox-vantage-tim-gridbg" aria-hidden="true" />

      <div className="ox-vantage-tim-wrap">
        <header className="ox-vantage-tim-head">
          <div className="ox-vantage-tim-titleblock">
            <p className="ox-vantage-tim-eyebrow">CAMP NO. 04 · SKID ROAD HAULAGE LEDGER</p>
            <h1 className="ox-vantage-tim-h1">TIMBER</h1>
            <p className="ox-vantage-tim-lead">
              Before steam donkeys reached the hemlock ridges, heavy Devon and Durham oxen broke loose
              two-ton spruce trunks with low-geared bone, split hooves, and a single birch bow yoke.
            </p>
          </div>

          <aside className="ox-vantage-tim-gauge" aria-label="Live tractive pull readout">
            <div className="ox-vantage-tim-gauge-row">
              <span>TRACTIVE PULL</span>
              <strong>{active.pull}</strong>
            </div>
            <div className="ox-vantage-tim-gauge-row">
              <span>TIMBER SCALE</span>
              <strong>{active.load}</strong>
            </div>
            <div className="ox-vantage-tim-gauge-row">
              <span>GAIT PACE</span>
              <strong>{active.speed}</strong>
            </div>
            <div className="ox-vantage-tim-grades" role="group" aria-label="Select skid road condition">
              {GRADES.map((g) => (
                <button
                  key={g.id}
                  type="button"
                  className={`ox-vantage-tim-gbtn ${gradeId === g.id ? 'is-on' : ''}`}
                  onClick={() => setGradeId(g.id)}
                  aria-pressed={gradeId === g.id}
                >
                  {g.label}
                </button>
              ))}
            </div>
          </aside>
        </header>

        <section className="ox-vantage-tim-stage-card">
          <div className="ox-vantage-tim-stage-meta">
            <span>FIG. II — DEVON DRAUGHT OX IN BOW YOKE · RIGHT PROFILE</span>
            <span>CONDITION: {active.label.toUpperCase()}</span>
          </div>

          <svg
            className="ox-vantage-tim-svg"
            viewBox="0 0 1120 530"
            role="img"
            aria-label="Full right-facing side profile of a massive working logging ox wearing a carved wooden neck yoke and iron chain, hauling a felled spruce log across snowy timber skids with all four cloven-hoofed legs driving forward"
          >
            <defs>
              <linearGradient id="ox-vantage-tim-sky" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#0C2019" />
                <stop offset="72%" stopColor="#17382D" />
                <stop offset="100%" stopColor="#234C3E" />
              </linearGradient>
              <linearGradient id="ox-vantage-tim-coat" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#8E381E" />
                <stop offset="52%" stopColor="#6E2613" />
                <stop offset="100%" stopColor="#46160B" />
              </linearGradient>
              <linearGradient id="ox-vantage-tim-coat-far" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#4D1A0D" />
                <stop offset="100%" stopColor="#2C0E07" />
              </linearGradient>
              <linearGradient id="ox-vantage-tim-log" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#875630" />
                <stop offset="45%" stopColor="#5E381C" />
                <stop offset="100%" stopColor="#341D0D" />
              </linearGradient>
              <linearGradient id="ox-vantage-tim-horn" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#C9A875" />
                <stop offset="70%" stopColor="#F5EAD3" />
                <stop offset="100%" stopColor="#D6A954" />
              </linearGradient>
              <clipPath id="ox-vantage-tim-clip">
                <rect x="0" y="0" width="1120" height="530" rx="8" />
              </clipPath>
            </defs>

            <g clipPath="url(#ox-vantage-tim-clip)">
              <rect x="0" y="0" width="1120" height="530" fill="url(#ox-vantage-tim-sky)" />

              <g fill="#0E251D" opacity="0.72">
                <polygon points="40,420 82,210 124,420" />
                <polygon points="105,420 156,168 208,420" />
                <polygon points="212,420 250,248 290,420" />
                <polygon points="890,420 946,184 1002,420" />
                <polygon points="984,420 1034,230 1086,420" />
                <polygon points="1044,420 1094,195 1138,420" />
              </g>

              {[
                { cx: 140, cy: 90, r: 2.2, d: 4.5 },
                { cx: 310, cy: 130, r: 1.8, d: 5.2 },
                { cx: 520, cy: 76, r: 2.4, d: 4.8 },
                { cx: 690, cy: 112, r: 2, d: 5.6 },
                { cx: 880, cy: 84, r: 2.2, d: 4.2 },
                { cx: 1030, cy: 142, r: 1.8, d: 5.0 },
              ].map((flake) => (
                <motion.circle
                  key={`${flake.cx}-${flake.cy}`}
                  cx={flake.cx}
                  cy={flake.cy}
                  r={flake.r}
                  fill="#F2EFE6"
                  opacity="0.55"
                  animate={{ y: [0, 290], x: [0, -34], opacity: [0, 0.7, 0] }}
                  transition={{ duration: flake.d, repeat: Infinity, ease: 'linear' }}
                />
              ))}

              <rect x="0" y="420" width="1120" height="110" fill="#E6E1D3" />
              <rect x="0" y="420" width="1120" height="8" fill="#F6F3EB" />
              <rect x="0" y="458" width="1120" height="72" fill="#CFC7B5" />

              <motion.g
                animate={{ x: [0, -140] }}
                transition={{ duration: active.cycle, repeat: Infinity, ease: 'linear' }}
              >
                {Array.from({ length: 11 }, (_, idx) => {
                  const sx = idx * 140
                  return (
                    <g key={sx}>
                      <rect x={sx} y="466" width="96" height="14" rx="4" fill="#6F4C2D" stroke="#36210F" strokeWidth="1.5" />
                      <line x1={sx + 14} y1="473" x2={sx + 82} y2="473" stroke="#9B6E44" strokeWidth="2" opacity="0.6" />
                    </g>
                  )
                })}
              </motion.g>

              <ellipse cx="645" cy="462" rx="260" ry="15" fill="#1C3129" opacity="0.28" />
              <ellipse cx="195" cy="462" rx="160" ry="13" fill="#1C3129" opacity="0.32" />

              <g>
                <path
                  d="M 42 362 L 296 364 L 348 394 L 342 456 L 42 456 Z"
                  fill="url(#ox-vantage-tim-log)"
                  stroke="#1C0E06"
                  strokeWidth="2.6"
                  strokeLinejoin="round"
                />
                <ellipse cx="42" cy="409" rx="22" ry="47" fill="#D5A970" stroke="#3A2110" strokeWidth="2.4" />
                <ellipse cx="42" cy="409" rx="14" ry="32" fill="none" stroke="#9A6838" strokeWidth="1.6" />
                <ellipse cx="42" cy="409" rx="7" ry="16" fill="none" stroke="#855228" strokeWidth="1.4" />
                <path
                  d="M 86 382 L 268 384 M 76 408 L 288 410 M 94 432 L 254 434 M 156 368 L 210 376"
                  stroke="#2B1609"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  opacity="0.65"
                />
                <path
                  d="M 332 396 L 352 414 L 336 432"
                  fill="none"
                  stroke="#D94323"
                  strokeWidth="6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle cx="348" cy="414" r="7" fill="#2A3330" stroke="#F2EFE6" strokeWidth="1.8" />
              </g>

              <motion.g
                animate={{ x: [0, 2.5, 0], y: [0, -1.5, 0] }}
                transition={{ duration: active.cycle, repeat: Infinity, ease: 'easeInOut' }}
              >
                <path
                  d="M 548 338 L 534 396 L 552 444 L 578 444 L 564 398 L 584 344 Z"
                  fill="url(#ox-vantage-tim-coat-far)"
                />
                <path d="M 550 442 L 566 442 L 574 460 L 548 460 Z" fill="#1A120E" />
                <path d="M 568 442 L 582 442 L 586 458 L 573 458 Z" fill="#2A1E18" />

                <path
                  d="M 782 326 L 816 388 L 842 442 L 866 442 L 844 382 L 814 316 Z"
                  fill="url(#ox-vantage-tim-coat-far)"
                />
                <path d="M 840 440 L 856 440 L 866 458 L 838 458 Z" fill="#1A120E" />
                <path d="M 858 440 L 870 440 L 876 456 L 864 456 Z" fill="#2A1E18" />

                <motion.g
                  style={{ originX: '448px', originY: '198px' }}
                  animate={{ rotate: [0, 5, -2, 0] }}
                  transition={{ duration: active.cycle * 1.4, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <path
                    d="M 448 198 C 420 218 412 276 410 342"
                    fill="none"
                    stroke="#3C130A"
                    strokeWidth="8.5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M 410 336 C 396 352 396 378 410 396 C 422 380 424 354 416 336 Z"
                    fill="#1D0B07"
                  />
                </motion.g>

                <path
                  d="M 452 192 C 482 178 552 174 618 168 C 674 162 722 148 764 164 C 794 176 822 186 842 188 L 846 296 C 836 332 810 356 768 358 L 748 408 L 732 446 L 704 446 L 716 394 L 718 356 C 658 364 590 364 532 346 C 504 374 476 396 454 414 L 442 448 L 414 448 L 424 398 C 438 362 436 306 436 254 C 436 222 438 200 452 192 Z"
                  fill="url(#ox-vantage-tim-coat)"
                  stroke="#1C0B06"
                  strokeWidth="2.8"
                  strokeLinejoin="round"
                />

                <path
                  d="M 818 302 C 816 322 802 338 784 348"
                  fill="none"
                  stroke="#3E1208"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  opacity="0.65"
                />

                <path
                  d="M 464 202 C 534 190 644 186 734 170"
                  fill="none"
                  stroke="#B65B3A"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  opacity="0.55"
                />
                <path
                  d="M 702 224 C 736 254 748 302 738 344"
                  fill="none"
                  stroke="#3E1208"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  opacity="0.55"
                />
                <path
                  d="M 498 228 C 520 264 522 308 504 342"
                  fill="none"
                  stroke="#3E1208"
                  strokeWidth="3"
                  strokeLinecap="round"
                  opacity="0.45"
                />

                <path d="M 700 444 L 718 444 L 724 464 L 696 464 Z" fill="#17100C" />
                <path d="M 720 444 L 734 444 L 738 462 L 725 462 Z" fill="#2A1D16" />
                <path d="M 410 446 L 428 446 L 434 465 L 406 465 Z" fill="#17100C" />
                <path d="M 430 446 L 444 446 L 448 463 L 435 463 Z" fill="#2A1D16" />

                <path
                  d="M 354 414 L 792 300"
                  fill="none"
                  stroke="#141C19"
                  strokeWidth="8.5"
                  strokeLinecap="round"
                />
                <path
                  d="M 354 414 L 792 300"
                  fill="none"
                  stroke="#CBD5CF"
                  strokeWidth="3.5"
                  strokeDasharray="11 7"
                  strokeLinecap="round"
                />

                <g>
                  <path
                    d="M 764 180 C 756 244 768 296 794 298 C 820 298 830 248 820 186"
                    fill="none"
                    stroke="#C98E4B"
                    strokeWidth="12"
                    strokeLinecap="round"
                  />
                  <path
                    d="M 764 180 C 756 244 768 296 794 298 C 820 298 830 248 820 186"
                    fill="none"
                    stroke="#7C4D1E"
                    strokeWidth="2.4"
                  />
                  <path
                    d="M 744 150 L 826 168 L 818 198 L 736 180 Z"
                    fill="#D9A35F"
                    stroke="#2B1908"
                    strokeWidth="2.6"
                    strokeLinejoin="round"
                  />
                  <circle cx="792" cy="300" r="9" fill="none" stroke="#D94323" strokeWidth="4.5" />
                </g>

                <g>
                  <path
                    d="M 862 182 C 892 168 916 146 930 112 C 918 130 896 148 866 160 Z"
                    fill="#B99C73"
                    stroke="#1C0B06"
                    strokeWidth="2"
                  />
                  <circle cx="930" cy="111" r="4.8" fill="#E1A83A" stroke="#2B1908" strokeWidth="1.5" />

                  <path
                    d="M 824 186 C 846 172 872 176 894 196 L 948 256 C 958 268 958 288 946 300 C 930 314 898 312 874 300 C 844 286 822 268 814 238 C 810 218 814 198 824 186 Z"
                    fill="#7B2C16"
                    stroke="#1C0B06"
                    strokeWidth="2.6"
                    strokeLinejoin="round"
                  />

                  <path
                    d="M 852 192 C 896 188 932 170 956 138 C 934 156 900 168 858 170 Z"
                    fill="url(#ox-vantage-tim-horn)"
                    stroke="#1C0B06"
                    strokeWidth="2.4"
                    strokeLinejoin="round"
                  />
                  <circle cx="957" cy="136" r="5.2" fill="#E8B446" stroke="#2B1908" strokeWidth="1.6" />

                  <path
                    d="M 832 204 C 810 202 786 212 778 228 C 796 234 818 228 836 218 Z"
                    fill="#682210"
                    stroke="#1C0B06"
                    strokeWidth="2.2"
                  />
                  <path d="M 824 211 C 808 212 794 218 788 225 C 802 227 816 223 826 216 Z" fill="#BC7556" />

                  <path d="M 870 218 C 880 212 892 214 898 222" fill="none" stroke="#1C0B06" strokeWidth="2.4" strokeLinecap="round" />
                  <ellipse cx="884" cy="225" rx="7.5" ry="5.2" fill="#160A07" />
                  <circle cx="886" cy="223" r="2" fill="#F2EFE6" />

                  <path
                    d="M 922 252 C 938 250 956 260 960 278 C 962 294 948 308 932 308 C 918 308 912 292 914 274 C 915 262 918 254 922 252 Z"
                    fill="#261714"
                    stroke="#140B09"
                    strokeWidth="2"
                  />
                  <ellipse cx="944" cy="276" rx="6.5" ry="4" transform="rotate(-24 944 276)" fill="#0E0706" />
                  <path d="M 936 296 Q 948 294 956 286" fill="none" stroke="#5E4038" strokeWidth="2" strokeLinecap="round" />
                </g>

                <g>
                  <motion.ellipse
                    cx="982"
                    cy="274"
                    rx="16"
                    ry="9"
                    fill="#F2EFE6"
                    animate={{ x: [0, 48], y: [0, -18], scale: [0.6, 1.7], opacity: [0, 0.55, 0] }}
                    transition={{ duration: active.cycle, repeat: Infinity, ease: 'easeOut' }}
                  />
                  <motion.ellipse
                    cx="996"
                    cy="282"
                    rx="12"
                    ry="7"
                    fill="#F2EFE6"
                    animate={{ x: [0, 56], y: [0, -24], scale: [0.5, 1.9], opacity: [0, 0.42, 0] }}
                    transition={{ duration: active.cycle, delay: active.cycle * 0.45, repeat: Infinity, ease: 'easeOut' }}
                  />
                </g>
              </motion.g>
            </g>
          </svg>

          <p className="ox-vantage-tim-caption">{active.note}</p>
        </section>

        <section className="ox-vantage-tim-tally" aria-label="Logging camp specifications">
          {TALLY.map((row) => (
            <div key={row.key} className="ox-vantage-tim-titem">
              <span className="ox-vantage-tim-tkey">{row.key}</span>
              <span className="ox-vantage-tim-tval">{row.val}</span>
            </div>
          ))}
        </section>

        <footer className="ox-vantage-tim-footer">
          <div className="ox-vantage-tim-brand" aria-label="Burned log-hammer signature stamp">
            <span className="ox-vantage-tim-brand-ring" aria-hidden="true">✦</span>
            <span>SET XXXVI · DESIGNED BY GEMINI 4 NEON</span>
          </div>
        </footer>
      </div>
    </div>
  )
}
