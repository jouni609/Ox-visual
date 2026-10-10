import { motion } from 'framer-motion'
import './nandi.css'

export default function Nandi() {
  const petals = [
    { id: 1, left: '8%', delay: 0.2, duration: 8.5, size: 12 },
    { id: 2, left: '18%', delay: 3.1, duration: 9.8, size: 15 },
    { id: 3, left: '27%', delay: 1.5, duration: 7.9, size: 10 },
    { id: 4, left: '42%', delay: 4.4, duration: 8.8, size: 14 },
    { id: 5, left: '55%', delay: 0.8, duration: 9.2, size: 11 },
    { id: 6, left: '68%', delay: 2.6, duration: 8.1, size: 16 },
    { id: 7, left: '79%', delay: 5.0, duration: 7.5, size: 13 },
    { id: 8, left: '91%', delay: 1.9, duration: 9.6, size: 12 }
  ]

  return (
    <div className="th-nan ox-prism-nan">
      <div className="ox-prism-nan-grain" aria-hidden="true" />

      <div className="ox-prism-nan-petals-field" aria-hidden="true">
        {petals.map((p) => (
          <motion.div
            key={p.id}
            style={{
              position: 'absolute',
              top: '-30px',
              left: p.left,
              width: `${p.size}px`,
              height: `${p.size * 0.75}px`,
              borderRadius: '50% 50% 50% 10%',
              backgroundColor: '#FFB627',
              boxShadow: '0 0 8px rgba(242,165,22,0.6)',
              opacity: 0.75
            }}
            animate={{
              y: ['0vh', '110vh'],
              x: ['0px', '25px', '-20px', '15px'],
              rotate: [0, 180, 360, 540]
            }}
            transition={{
              duration: p.duration,
              delay: p.delay,
              repeat: Infinity,
              ease: 'linear'
            }}
          />
        ))}
      </div>

      <header className="ox-prism-nan-header">
        <div className="ox-prism-nan-invocation">
          <span lang="sa">॥ श्री नन्दिने नमः ॥</span> · PRADOSHA VAHANA
        </div>
        <h1 className="ox-prism-nan-title">Nandi, Who Waits at the Door</h1>
        <p className="ox-prism-nan-lede">
          The eternal guardian of Mount Kailash, seated in perpetual meditation before the sanctum sanctorum. In every Shaivite shrine across the Indian subcontinent, his unblinking gaze remains fixed upon the Shiva Lingam—the foremost devotee whose silent vigilance bridges the pilgrim to the silence of the inner chamber.
        </p>
      </header>

      <section className="ox-prism-nan-shrine-stage">
        <div className="ox-prism-nan-svg-wrapper">
          <svg
            className="ox-prism-nan-svg"
            viewBox="0 0 1000 520"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="ox-prism-nan-sky-grad" x1="500" y1="0" x2="500" y2="520" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#1B1640" />
                <stop offset="65%" stopColor="#221C4E" />
                <stop offset="100%" stopColor="#130E2E" />
              </linearGradient>

              <radialGradient id="ox-prism-nan-sanctum-glow" cx="95" cy="290" r="240" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#FFC83B" stopOpacity="0.88" />
                <stop offset="25%" stopColor="#F2A516" stopOpacity="0.65" />
                <stop offset="60%" stopColor="#C85A17" stopOpacity="0.28" />
                <stop offset="100%" stopColor="#1B1640" stopOpacity="0" />
              </radialGradient>

              <linearGradient id="ox-prism-nan-stone-arch" x1="0" y1="0" x2="1000" y2="0" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#352954" />
                <stop offset="20%" stopColor="#46386C" />
                <stop offset="50%" stopColor="#2E244B" />
                <stop offset="80%" stopColor="#46386C" />
                <stop offset="100%" stopColor="#352954" />
              </linearGradient>

              <linearGradient id="ox-prism-nan-plinth-grad" x1="500" y1="398" x2="500" y2="510" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#433663" />
                <stop offset="18%" stopColor="#30264A" />
                <stop offset="65%" stopColor="#241B38" />
                <stop offset="100%" stopColor="#181226" />
              </linearGradient>

              <linearGradient id="ox-prism-nan-granite-body" x1="260" y1="100" x2="720" y2="400" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#342846" />
                <stop offset="35%" stopColor="#271E36" />
                <stop offset="70%" stopColor="#1D1628" />
                <stop offset="100%" stopColor="#140F1E" />
              </linearGradient>

              <linearGradient id="ox-prism-nan-leg-grad" x1="240" y1="280" x2="340" y2="400" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#54446C" />
                <stop offset="50%" stopColor="#463C58" />
                <stop offset="100%" stopColor="#362D46" />
              </linearGradient>

              <linearGradient id="ox-prism-nan-hind-grad" x1="620" y1="230" x2="720" y2="398" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#52426A" />
                <stop offset="55%" stopColor="#463C58" />
                <stop offset="100%" stopColor="#342B44" />
              </linearGradient>

              <linearGradient id="ox-prism-nan-hump-grad" x1="360" y1="80" x2="450" y2="210" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#463760" />
                <stop offset="50%" stopColor="#302544" />
                <stop offset="100%" stopColor="#1C1628" />
              </linearGradient>

              <linearGradient id="ox-prism-nan-horn-near-grad" x1="280" y1="140" x2="215" y2="28" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#2A2138" />
                <stop offset="20%" stopColor="#5E4C75" />
                <stop offset="55%" stopColor="#E5D6BA" />
                <stop offset="82%" stopColor="#F7EBD3" />
                <stop offset="100%" stopColor="#FFD269" />
              </linearGradient>

              <linearGradient id="ox-prism-nan-horn-far-grad" x1="320" y1="125" x2="375" y2="18" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#1E1729" />
                <stop offset="28%" stopColor="#403252" />
                <stop offset="60%" stopColor="#C8B898" />
                <stop offset="85%" stopColor="#E5D8BC" />
                <stop offset="100%" stopColor="#E2B358" />
              </linearGradient>

              <linearGradient id="ox-prism-nan-jhul-grad" x1="465" y1="208" x2="670" y2="310" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#E63946" />
                <stop offset="50%" stopColor="#D7263D" />
                <stop offset="100%" stopColor="#9E1527" />
              </linearGradient>

              <linearGradient id="ox-prism-nan-brass-grad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#F7EBD3" />
                <stop offset="30%" stopColor="#F2A516" />
                <stop offset="70%" stopColor="#C9963B" />
                <stop offset="100%" stopColor="#7E5616" />
              </linearGradient>

              <linearGradient id="ox-prism-nan-flame-grad" x1="0" y1="1" x2="0" y2="0">
                <stop offset="0%" stopColor="#D7263D" />
                <stop offset="25%" stopColor="#F2A516" />
                <stop offset="70%" stopColor="#FFD269" />
                <stop offset="100%" stopColor="#FFFFFF" />
              </linearGradient>

              <radialGradient id="ox-prism-nan-lamp-aura" cx="0.5" cy="0.5" r="0.5">
                <stop offset="0%" stopColor="#FFC83B" stopOpacity="0.8" />
                <stop offset="40%" stopColor="#F2A516" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#1B1640" stopOpacity="0" />
              </radialGradient>
            </defs>

            <rect width="1000" height="520" fill="url(#ox-prism-nan-sky-grad)" />

            <g id="ox-prism-nan-gopuram-arch">
              <path
                d="M 40,510 L 40,140 L 90,140 L 90,105 L 140,105 L 140,70 L 220,70 L 220,40 L 500,12 L 780,40 L 780,70 L 860,70 L 860,105 L 910,105 L 910,140 L 960,140 L 960,510 L 920,510 L 920,155 L 870,155 L 870,120 L 790,120 L 790,90 L 500,60 L 210,90 L 210,120 L 130,120 L 130,155 L 80,155 L 80,510 Z"
                fill="url(#ox-prism-nan-stone-arch)"
                stroke="#C9963B"
                strokeWidth="2"
                strokeOpacity="0.45"
              />
              <path d="M 500,2 L 512,12 L 488,12 Z" fill="#F2A516" />
              <circle cx="500" cy="2" r="3.5" fill="#FFD269" />
              <line x1="80" y1="155" x2="920" y2="155" stroke="#C9963B" strokeWidth="2" strokeOpacity="0.3" />
              <line x1="130" y1="120" x2="870" y2="120" stroke="#C9963B" strokeWidth="1.5" strokeOpacity="0.3" />
              <line x1="210" y1="90" x2="790" y2="90" stroke="#C9963B" strokeWidth="1" strokeOpacity="0.3" />

              <g id="ox-prism-nan-arch-details">
                <path d="M 460,60 Q 500,42 540,60" stroke="#F2A516" strokeWidth="2" fill="none" strokeOpacity="0.6" />
                <path d="M 380,75 Q 500,28 620,75" stroke="#F2A516" strokeWidth="1.5" fill="none" strokeOpacity="0.4" />
                <circle cx="500" cy="46" r="5" fill="#F2A516" />
                <circle cx="470" cy="54" r="3.5" fill="#C9963B" />
                <circle cx="530" cy="54" r="3.5" fill="#C9963B" />
              </g>
            </g>

            <g id="ox-prism-nan-sanctum-doorway">
              <rect x="48" y="180" width="102" height="220" rx="4" fill="#0D0A1C" />
              <circle cx="98" cy="290" r="130" fill="url(#ox-prism-nan-sanctum-glow)" />

              <rect x="44" y="176" width="110" height="228" rx="6" stroke="#C9963B" strokeWidth="2.5" fill="none" strokeOpacity="0.6" />
              <path d="M 40,176 L 158,176 L 148,166 L 50,166 Z" fill="#3D3059" stroke="#C9963B" strokeWidth="1.5" strokeOpacity="0.7" />

              <g id="ox-prism-nan-lingam-silhouette">
                <ellipse cx="98" cy="336" rx="32" ry="9" fill="#241B33" stroke="#F2A516" strokeWidth="1" strokeOpacity="0.7" />
                <path d="M 70,334 L 52,332 L 52,340 L 70,338 Z" fill="#241B33" stroke="#F2A516" strokeWidth="1" strokeOpacity="0.7" />
                <rect x="85" y="280" width="26" height="56" rx="13" fill="#150F21" stroke="#F2A516" strokeWidth="1.5" strokeOpacity="0.85" />
                <path d="M 89,298 L 107,298" stroke="#F7EBD3" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.9" />
                <path d="M 89,302 L 107,302" stroke="#F7EBD3" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.9" />
                <path d="M 89,306 L 107,306" stroke="#F7EBD3" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.9" />
                <circle cx="98" cy="302" r="1.6" fill="#D7263D" />
                <ellipse cx="98" cy="280" rx="7" ry="3.5" fill="#FFB627" fillOpacity="0.7" />
              </g>
            </g>

            <g id="ox-prism-nan-standing-lamp-left">
              <path d="M 142,400 L 180,400 L 170,390 L 152,390 Z" fill="url(#ox-prism-nan-brass-grad)" />
              <rect x="159" y="240" width="4" height="150" fill="url(#ox-prism-nan-brass-grad)" />
              <ellipse cx="161" cy="360" rx="11" ry="3.5" fill="url(#ox-prism-nan-brass-grad)" />
              <ellipse cx="161" cy="305" rx="14" ry="4.5" fill="url(#ox-prism-nan-brass-grad)" />
              <ellipse cx="161" cy="250" rx="17" ry="5.5" fill="url(#ox-prism-nan-brass-grad)" />
              <circle cx="161" cy="240" r="3.5" fill="#FFD269" />

              <circle cx="161" cy="235" r="30" fill="url(#ox-prism-nan-lamp-aura)" />

              <motion.path
                d="M 161,238 C 168,233 167,227 161,219 C 155,227 154,233 161,238 Z"
                fill="url(#ox-prism-nan-flame-grad)"
                animate={{
                  scaleY: [1, 1.15, 0.92, 1.1, 1],
                  opacity: [0.85, 1, 0.8, 0.95, 0.85]
                }}
                transition={{ duration: 0.85, repeat: Infinity, ease: 'easeInOut' }}
                style={{ transformOrigin: '161px 238px' }}
              />
              <motion.path
                d="M 148,248 C 151,244 150,239 148,233 C 145,239 146,244 148,248 Z"
                fill="url(#ox-prism-nan-flame-grad)"
                animate={{
                  scaleY: [1, 1.2, 0.9, 1.12, 1],
                  opacity: [0.8, 1, 0.75, 0.95, 0.8]
                }}
                transition={{ duration: 0.7, delay: 0.15, repeat: Infinity, ease: 'easeInOut' }}
                style={{ transformOrigin: '148px 248px' }}
              />
              <motion.path
                d="M 174,248 C 177,244 176,239 174,233 C 171,239 172,244 174,248 Z"
                fill="url(#ox-prism-nan-flame-grad)"
                animate={{
                  scaleY: [1, 1.18, 0.94, 1.08, 1],
                  opacity: [0.8, 0.95, 0.82, 1, 0.8]
                }}
                transition={{ duration: 0.9, delay: 0.3, repeat: Infinity, ease: 'easeInOut' }}
                style={{ transformOrigin: '174px 248px' }}
              />
            </g>

            <g id="ox-prism-nan-standing-lamp-right">
              <path d="M 870,400 L 908,400 L 898,390 L 880,390 Z" fill="url(#ox-prism-nan-brass-grad)" />
              <rect x="887" y="240" width="4" height="150" fill="url(#ox-prism-nan-brass-grad)" />
              <ellipse cx="889" cy="360" rx="11" ry="3.5" fill="url(#ox-prism-nan-brass-grad)" />
              <ellipse cx="889" cy="305" rx="14" ry="4.5" fill="url(#ox-prism-nan-brass-grad)" />
              <ellipse cx="889" cy="250" rx="17" ry="5.5" fill="url(#ox-prism-nan-brass-grad)" />
              <circle cx="889" cy="240" r="3.5" fill="#FFD269" />

              <circle cx="889" cy="235" r="30" fill="url(#ox-prism-nan-lamp-aura)" />

              <motion.path
                d="M 889,238 C 896,233 895,227 889,219 C 883,227 882,233 889,238 Z"
                fill="url(#ox-prism-nan-flame-grad)"
                animate={{
                  scaleY: [1, 1.14, 0.95, 1.12, 1],
                  opacity: [0.88, 1, 0.82, 0.98, 0.88]
                }}
                transition={{ duration: 0.8, delay: 0.2, repeat: Infinity, ease: 'easeInOut' }}
                style={{ transformOrigin: '889px 238px' }}
              />
              <motion.path
                d="M 876,248 C 879,244 878,239 876,233 C 873,239 874,244 876,248 Z"
                fill="url(#ox-prism-nan-flame-grad)"
                animate={{
                  scaleY: [1, 1.18, 0.92, 1.08, 1],
                  opacity: [0.82, 0.95, 0.78, 1, 0.82]
                }}
                transition={{ duration: 0.95, delay: 0.05, repeat: Infinity, ease: 'easeInOut' }}
                style={{ transformOrigin: '876px 248px' }}
              />
              <motion.path
                d="M 902,248 C 905,244 904,239 902,233 C 899,239 900,244 902,248 Z"
                fill="url(#ox-prism-nan-flame-grad)"
                animate={{
                  scaleY: [1, 1.15, 0.88, 1.14, 1],
                  opacity: [0.8, 1, 0.85, 0.92, 0.8]
                }}
                transition={{ duration: 0.75, delay: 0.35, repeat: Infinity, ease: 'easeInOut' }}
                style={{ transformOrigin: '902px 248px' }}
              />
            </g>

            <g id="ox-prism-nan-stepped-plinth">
              <path
                d="M 195,398 L 855,398 L 845,418 L 205,418 Z"
                fill="#4D3F6D"
                stroke="#C9963B"
                strokeWidth="1.5"
                strokeOpacity="0.6"
              />

              <path
                d="M 205,418 L 845,418 L 835,442 L 215,442 Z"
                fill="#352952"
                stroke="#C9963B"
                strokeWidth="1"
                strokeOpacity="0.4"
              />
              <g id="ox-prism-nan-lotus-frieze" stroke="#F2A516" strokeWidth="1" strokeOpacity="0.5" fill="none">
                {[...Array(26)].map((_, i) => {
                  const cx = 230 + i * 24
                  return (
                    <path key={i} d={`M ${cx - 9},439 Q ${cx},422 ${cx + 9},439 Z`} />
                  )
                })}
              </g>

              <rect
                x="215"
                y="442"
                width="620"
                height="45"
                fill="url(#ox-prism-nan-plinth-grad)"
                stroke="#C9963B"
                strokeWidth="1.5"
                strokeOpacity="0.5"
              />

              <path
                d="M 185,487 L 865,487 L 875,510 L 175,510 Z"
                fill="#1B142B"
                stroke="#C9963B"
                strokeWidth="2"
                strokeOpacity="0.4"
              />
              <line x1="175" y1="510" x2="875" y2="510" stroke="#F2A516" strokeWidth="2" strokeOpacity="0.5" />
            </g>

            <g id="ox-prism-nan-the-ox-nandi">
              <ellipse cx="530" cy="398" rx="290" ry="12" fill="#0C0817" fillOpacity="0.85" />

              <g id="ox-prism-nan-far-horn">
                <path
                  d="M 314,126 C 322,85 342,48 375,18 C 358,45 345,80 342,120 Z"
                  fill="url(#ox-prism-nan-horn-far-grad)"
                  stroke="#C9963B"
                  strokeWidth="1.6"
                />
                <path d="M 370,24 L 375,18 L 368,26 Z" fill="#FFB627" />
                <line x1="324" y1="110" x2="338" y2="106" stroke="#22182E" strokeWidth="1.5" />
                <line x1="330" y1="92" x2="344" y2="86" stroke="#22182E" strokeWidth="1.5" />
              </g>

              <motion.g
                id="ox-prism-nan-body-barrel"
                animate={{
                  scaleY: [1, 1.012, 1],
                  scaleX: [1, 1.004, 1]
                }}
                transition={{
                  duration: 4.6,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
                style={{ transformOrigin: '520px 390px' }}
              >
                <path
                  d="M 310,396 C 310,325 330,250 355,195 C 365,150 380,90 408,90 C 440,90 455,145 465,205 C 540,218 615,222 670,210 C 725,200 762,226 764,258 C 766,295 755,340 735,375 C 635,402 415,402 310,396 Z"
                  fill="url(#ox-prism-nan-granite-body)"
                  stroke="#3A2E50"
                  strokeWidth="2"
                />

                <path
                  d="M 355,195 C 365,150 380,90 408,90 C 440,90 455,145 465,205 Z"
                  fill="url(#ox-prism-nan-hump-grad)"
                />

                <path
                  d="M 355,195 C 365,150 380,90 408,90 C 440,90 455,145 465,205 C 540,218 615,222 670,210 C 725,200 762,226 764,258"
                  stroke="#F2A516"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeOpacity="0.9"
                  fill="none"
                />

                <g id="ox-prism-nan-caparison">
                  <path
                    d="M 465,208 C 535,218 605,222 665,212 L 668,295 C 615,310 530,310 468,295 Z"
                    fill="url(#ox-prism-nan-jhul-grad)"
                    stroke="#F2A516"
                    strokeWidth="3"
                  />
                  <path
                    d="M 475,220 C 535,228 600,230 655,222 L 658,285 C 608,298 535,298 478,285 Z"
                    fill="none"
                    stroke="#FFD269"
                    strokeWidth="1.5"
                    strokeDasharray="4 3"
                  />
                  <g id="ox-prism-nan-jhul-medallion" transform="translate(568, 258)">
                    <circle cx="0" cy="0" r="16" fill="#F2A516" />
                    <circle cx="0" cy="0" r="12" fill="#D7263D" />
                    <circle cx="0" cy="0" r="5" fill="#FFD269" />
                    {[...Array(8)].map((_, i) => (
                      <circle
                        key={i}
                        cx={Math.cos((i * Math.PI) / 4) * 9.5}
                        cy={Math.sin((i * Math.PI) / 4) * 9.5}
                        r="2"
                        fill="#FFD269"
                      />
                    ))}
                  </g>
                  {[...Array(9)].map((_, i) => {
                    const tx = 485 + i * 20
                    return (
                      <path
                        key={i}
                        d={`M ${tx},298 L ${tx - 3},312 L ${tx + 3},312 Z`}
                        fill="#F2A516"
                      />
                    )
                  })}
                </g>
              </motion.g>

              <g id="ox-prism-nan-tail">
                <path
                  d="M 762,252 C 780,288 782,335 775,372 C 768,394 742,396 705,396"
                  stroke="#1E172B"
                  strokeWidth="12"
                  strokeLinecap="round"
                  fill="none"
                />
                <path
                  d="M 762,252 C 780,288 782,335 775,372 C 768,394 742,396 705,396"
                  stroke="#F2A516"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeOpacity="0.75"
                  fill="none"
                />
                <path
                  d="M 708,396 C 680,396 648,398 630,397 C 648,390 675,388 708,390 Z"
                  fill="#140F1E"
                  stroke="#F2A516"
                  strokeWidth="1.2"
                />
                <path d="M 672,393 L 632,397" stroke="#FFD269" strokeWidth="1" strokeOpacity="0.5" />
                <path d="M 686,395 L 638,399" stroke="#FFD269" strokeWidth="1" strokeOpacity="0.4" />
              </g>

              <g id="ox-prism-nan-hind-leg-folded">
                <path
                  d="M 620,240 C 670,252 730,285 738,322 C 746,345 732,368 695,384 C 655,396 575,398 522,396 C 506,394 502,382 516,375 C 555,362 615,350 648,325 C 672,305 668,272 630,248 Z"
                  fill="url(#ox-prism-nan-hind-grad)"
                  stroke="#F2A516"
                  strokeWidth="2.5"
                  strokeLinejoin="round"
                />
                <path
                  d="M 655,246 C 695,270 728,298 738,330 C 742,346 728,368 692,382 C 650,396 570,398 522,396"
                  stroke="#FFD269"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeOpacity="0.85"
                  fill="none"
                />
                <g id="ox-prism-nan-hind-hoof">
                  <path
                    d="M 498,380 L 530,380 L 526,398 L 494,398 Z"
                    fill="#0D0914"
                    stroke="#C9963B"
                    strokeWidth="1.5"
                  />
                  <line x1="512" y1="380" x2="510" y2="398" stroke="#000000" strokeWidth="2.5" />
                  <rect x="496" y="376" width="32" height="4.5" rx="1.5" fill="#C9963B" stroke="#FFD269" strokeWidth="0.8" />
                </g>
              </g>

              <g id="ox-prism-nan-dewlap-folds">
                <path
                  d="M 175,296 C 200,320 225,348 260,345 C 242,330 226,308 215,285 Z"
                  fill="#221A30"
                  stroke="#3E3054"
                  strokeWidth="1"
                />
                <path
                  d="M 175,296 C 210,332 235,350 260,345"
                  stroke="#F2A516"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeOpacity="0.85"
                  fill="none"
                />

                <path
                  d="M 235,325 C 255,360 280,380 305,370 C 290,352 272,335 258,318 Z"
                  fill="#1E172B"
                  stroke="#3E3054"
                  strokeWidth="1"
                />
                <path
                  d="M 235,325 C 260,366 282,382 305,370"
                  stroke="#F2A516"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeOpacity="0.8"
                  fill="none"
                />

                <path
                  d="M 275,355 C 295,385 315,398 332,396 C 322,382 308,365 295,348 Z"
                  fill="#1B1426"
                  stroke="#3E3054"
                  strokeWidth="1"
                />
                <path
                  d="M 275,355 C 295,388 316,398 332,396"
                  stroke="#F2A516"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeOpacity="0.8"
                  fill="none"
                />
              </g>

              <g id="ox-prism-nan-neck-head">
                <path
                  d="M 292,136 C 310,165 338,212 355,240 C 362,255 352,286 320,318 C 288,350 262,328 232,272 C 215,272 175,280 155,258 C 146,242 155,224 185,212 C 228,170 265,140 292,136 Z"
                  fill="url(#ox-prism-nan-granite-body)"
                  stroke="#3A2D50"
                  strokeWidth="1.5"
                />

                <path
                  d="M 155,252 C 150,238 162,224 188,214 L 242,170 C 265,146 282,140 292,136"
                  stroke="#F2A516"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeOpacity="0.9"
                  fill="none"
                />
                <path
                  d="M 172,226 L 212,188"
                  stroke="#FFF2D6"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  fill="none"
                />

                <g id="ox-prism-nan-muzzle">
                  <path
                    d="M 152,250 C 145,236 156,224 178,220 C 194,218 204,228 202,246 C 200,264 190,274 172,272 C 158,270 152,262 152,250 Z"
                    fill="#130E1C"
                    stroke="#C9963B"
                    strokeWidth="1.2"
                    strokeOpacity="0.85"
                  />
                  <ellipse cx="166" cy="244" rx="4.5" ry="7" transform="rotate(-25 166 244)" fill="#08050E" stroke="#2D223B" strokeWidth="0.8" />
                  <path d="M 160,262 C 168,267 180,266 186,260" stroke="#F2A516" strokeWidth="1.2" strokeLinecap="round" fill="none" strokeOpacity="0.8" />
                  <path d="M 172,272 C 176,285 186,288 195,286" stroke="#C9963B" strokeWidth="1" strokeLinecap="round" fill="none" strokeOpacity="0.6" />
                </g>

                <g id="ox-prism-nan-eye">
                  <ellipse cx="242" cy="178" rx="10" ry="7" transform="rotate(-15 242 178)" fill="#0C0816" stroke="#C9963B" strokeWidth="1.5" />
                  <ellipse cx="242" cy="178" rx="6" ry="5" transform="rotate(-15 242 178)" fill="#8A5E18" />
                  <ellipse cx="242" cy="178" rx="3.5" ry="3" fill="#08050E" />
                  <circle cx="244" cy="176" r="1.5" fill="#FFF2D6" />
                  <path d="M 230,172 Q 242,166 254,171" stroke="#F2A516" strokeWidth="1.5" fill="none" strokeOpacity="0.9" />
                </g>

                <g id="ox-prism-nan-vibhuti">
                  <path d="M 230,158 L 258,152" stroke="#F7EBD3" strokeWidth="2" strokeLinecap="round" strokeOpacity="0.9" />
                  <path d="M 232,162 L 260,156" stroke="#F7EBD3" strokeWidth="2" strokeLinecap="round" strokeOpacity="0.9" />
                  <path d="M 234,166 L 262,160" stroke="#F7EBD3" strokeWidth="2" strokeLinecap="round" strokeOpacity="0.9" />
                  <circle cx="246" cy="159" r="2.5" fill="#D7263D" />
                </g>

                <g id="ox-prism-nan-ear">
                  <path
                    d="M 305,160 C 322,160 344,163 355,168 C 344,174 322,174 305,170 Z"
                    fill="#1F182C"
                    stroke="#F2A516"
                    strokeWidth="1.5"
                    strokeOpacity="0.9"
                  />
                  <path
                    d="M 310,163 C 324,163 340,165 348,168 C 340,172 324,172 310,168 Z"
                    fill="#382844"
                  />
                </g>

                <g id="ox-prism-nan-near-horn">
                  <path
                    d="M 272,140 C 270,95 248,55 215,28 C 240,55 285,92 306,134 Z"
                    fill="url(#ox-prism-nan-horn-near-grad)"
                    stroke="#F2A516"
                    strokeWidth="2"
                  />
                  <path d="M 218,34 L 215,28 L 222,34 Z" fill="#FFD269" />
                  <rect x="274" y="132" width="34" height="6.5" rx="2" transform="rotate(-12 274 132)" fill="#C9963B" stroke="#FFD269" strokeWidth="1" />
                  <line x1="268" y1="112" x2="288" y2="108" stroke="#251E33" strokeWidth="1.6" />
                  <line x1="254" y1="90" x2="274" y2="86" stroke="#251E33" strokeWidth="1.6" />
                </g>
              </g>

              <g id="ox-prism-nan-foreleg-folded">
                <path
                  d="M 315,295 C 290,325 260,358 232,384 C 224,391 224,398 238,398 L 325,398 C 335,398 340,392 338,382 C 332,364 328,342 338,320 Z"
                  fill="url(#ox-prism-nan-leg-grad)"
                  stroke="#F2A516"
                  strokeWidth="2.5"
                  strokeLinejoin="round"
                />
                <path
                  d="M 305,305 C 280,335 252,368 232,388 C 228,392 232,398 244,398"
                  stroke="#FFD269"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeOpacity="0.85"
                  fill="none"
                />
                <g id="ox-prism-nan-front-hoof">
                  <path
                    d="M 295,380 L 325,380 L 322,398 L 292,398 Z"
                    fill="#0D0914"
                    stroke="#C9963B"
                    strokeWidth="1.5"
                  />
                  <line x1="308" y1="380" x2="306" y2="398" stroke="#000000" strokeWidth="2.5" />
                  <rect x="293" y="376" width="31" height="4.5" rx="1.5" fill="#C9963B" stroke="#FFD269" strokeWidth="0.8" />
                </g>
              </g>

              <g id="ox-prism-nan-garland">
                {[
                  { cx: 236, cy: 202 },
                  { cx: 246, cy: 218 },
                  { cx: 258, cy: 236 },
                  { cx: 272, cy: 254 },
                  { cx: 288, cy: 274 },
                  { cx: 308, cy: 295 },
                  { cx: 330, cy: 312 },
                  { cx: 354, cy: 326 },
                  { cx: 378, cy: 322 },
                  { cx: 396, cy: 308 }
                ].map((pos, idx) => (
                  <g key={idx} transform={`translate(${pos.cx}, ${pos.cy})`}>
                    <circle cx="0" cy="0" r="9" fill="#F2A516" />
                    <circle cx="0" cy="0" r="6.5" fill="#FFB627" />
                    <circle cx="0" cy="0" r="2.8" fill="#D7263D" />
                  </g>
                ))}
              </g>

              <motion.g
                id="ox-prism-nan-temple-bell"
                animate={{ rotate: [-4, 4, -4] }}
                transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
                style={{ transformOrigin: '320px 305px' }}
              >
                <line x1="320" y1="305" x2="320" y2="325" stroke="#C9963B" strokeWidth="3" />
                <circle cx="320" cy="306" r="3.5" fill="#FFD269" />
                <path
                  d="M 312,325 C 312,318 328,318 328,325 L 332,342 C 335,348 305,348 308,342 Z"
                  fill="url(#ox-prism-nan-brass-grad)"
                  stroke="#FFD269"
                  strokeWidth="1"
                />
                <circle cx="320" cy="346" r="2.8" fill="#C9963B" />
                <line x1="320" y1="342" x2="320" y2="350" stroke="#7E5616" strokeWidth="2" />
              </motion.g>
            </g>
          </svg>
        </div>

        <div className="ox-prism-nan-plaque-container">
          <div className="ox-prism-nan-donor-plaque" aria-label="Donor inscription">
            <span className="ox-prism-nan-plaque-accent">⬥</span>
            <span className="ox-prism-nan-plaque-text">SET XXXII · DESIGNED BY ANTIGRAVITY</span>
            <span className="ox-prism-nan-plaque-accent">⬥</span>
          </div>
        </div>
      </section>

      <main className="ox-prism-nan-content">
        <section className="ox-prism-nan-panel ox-prism-nan-panel-vahana">
          <div className="ox-prism-nan-panel-header">
            <span className="ox-prism-nan-sanskrit-tag" lang="sa">॥ वृषभध्वजाय नमः · प्रथमगणेशाय ॥</span>
            <h2 className="ox-prism-nan-panel-title">The Vahana & Gatekeeper of Kailash</h2>
            <p className="ox-prism-nan-panel-sub">
              Neither passive mount nor beast of burden, Nandi is the commander of thirty-two divine sciences and the threshold between the seeker and the supreme silence.
            </p>
          </div>

          <div className="ox-prism-nan-text-grid">
            <article className="ox-prism-nan-card">
              <span className="ox-prism-nan-card-kicker">Cosmic Office</span>
              <h3 className="ox-prism-nan-card-title">Adhikara-Nandi</h3>
              <p className="ox-prism-nan-card-body">
                In the Shaiva Agamas, Nandi holds the golden staff of cosmic jurisdiction as chief of all Ganas. When the sage Sanatkumara sought instruction on ultimate reality, it was Nandi who revealed the mysteries of Tantra and yoga. No god, sage, or celestial entity may enter the inner presence of Shiva on Mount Kailash without Nandi’s direct permission.
              </p>
            </article>

            <article className="ox-prism-nan-card">
              <span className="ox-prism-nan-card-kicker">Temple Geometry</span>
              <h3 className="ox-prism-nan-card-title">The Unbroken Axis of Darshana</h3>
              <p className="ox-prism-nan-card-body">
                In classical Vastu Shastra, the line connecting Nandi’s forehead to the center of the Shiva Lingam is known as the Brahmasutra. Temple pilgrims are strictly forbidden from passing between Nandi and the sanctum door. The recumbent bull represents continuous, unbroken meditation (ananya bhakti)—his open eyes absorb the divine vibration and radiate it outward across the temple courtyard.
              </p>
            </article>

            <article className="ox-prism-nan-card">
              <span className="ox-prism-nan-card-kicker">Living Devotion</span>
              <h3 className="ox-prism-nan-card-title">Karnanivedana: The Whispered Wish</h3>
              <p className="ox-prism-nan-card-body">
                At dusk, pilgrims approach Nandi from behind, gently cupping his left ear while closing his right ear with their fingers. Into this ear, they whisper their deepest prayers and worldly griefs. The tradition teaches that while Mahadeva remains absorbed in cosmic samadhi, his faithful bull remains alert to every mortal sorrow, faithfully conveying each whisper directly to the Lord.
              </p>
            </article>
          </div>
        </section>

        <section className="ox-prism-nan-panel ox-prism-nan-panel-colossi">
          <div className="ox-prism-nan-panel-header">
            <span className="ox-prism-nan-sanskrit-tag" lang="sa">॥ महाशिला वृषभ मूर्तयः ॥</span>
            <h2 className="ox-prism-nan-panel-title">Great Monoliths of the Deccan</h2>
            <p className="ox-prism-nan-panel-sub">
              Across south India, medieval emperors and master sculptors carved titanic bulls directly from single outcrops of living granite, creating monuments of enduring majesty.
            </p>
          </div>

          <div className="ox-prism-nan-colossi-grid">
            <article className="ox-prism-nan-colossus-card">
              <span className="ox-prism-nan-colossus-badge">Vijayanagara · c. 1538 CE</span>
              <h3 className="ox-prism-nan-colossus-name">Lepakshi Monolith</h3>
              <div className="ox-prism-nan-colossus-meta">
                <span className="ox-prism-nan-meta-item"><strong>Height:</strong> 4.5 m (15 ft)</span>
                <span className="ox-prism-nan-meta-item"><strong>Length:</strong> 8.2 m (27 ft)</span>
                <span className="ox-prism-nan-meta-item"><strong>Site:</strong> Anantapur, Andhra Pradesh</span>
              </div>
              <p className="ox-prism-nan-colossus-desc">
                Widely celebrated as the crowning masterpiece of recumbent bovine sculpture in Asia. Carved from a single massive hillock of granite, the Lepakshi Nandi gazes northwest toward the Veerabhadra temple sanctum. It is distinguished by its proud head carried high, multi-strand pearl garlands, cascades of brass bells incised into stone, and perfectly proportioned zebu hump.
              </p>
            </article>

            <article className="ox-prism-nan-colossus-card">
              <span className="ox-prism-nan-colossus-badge">Chola & Nayaka · 11th–16th c.</span>
              <h3 className="ox-prism-nan-colossus-name">Brihadeeswarar Monolith</h3>
              <div className="ox-prism-nan-colossus-meta">
                <span className="ox-prism-nan-meta-item"><strong>Height:</strong> 3.7 m (12 ft)</span>
                <span className="ox-prism-nan-meta-item"><strong>Length:</strong> 6.0 m (20 ft)</span>
                <span className="ox-prism-nan-meta-item"><strong>Site:</strong> Thanjavur, Tamil Nadu</span>
              </div>
              <p className="ox-prism-nan-colossus-desc">
                Weighing an estimated 25 tonnes, this titanic bull occupies an ornate open-pillared mandapam in the vast outer courtyard of the Great Living Chola Temple. Chiseled from a dense black trap stone brought from distant quarries, its mirror-smooth surface is sustained by centuries of daily herbal oil and ghee anointing (thailabhishekam).
              </p>
            </article>

            <article className="ox-prism-nan-colossus-card">
              <span className="ox-prism-nan-colossus-badge">Wodeyar Dynasty · 1659 CE</span>
              <h3 className="ox-prism-nan-colossus-name">Chamundi Hill Monolith</h3>
              <div className="ox-prism-nan-colossus-meta">
                <span className="ox-prism-nan-meta-item"><strong>Height:</strong> 4.9 m (16 ft)</span>
                <span className="ox-prism-nan-meta-item"><strong>Length:</strong> 7.6 m (25 ft)</span>
                <span className="ox-prism-nan-meta-item"><strong>Site:</strong> Mysuru, Karnataka</span>
              </div>
              <p className="ox-prism-nan-colossus-desc">
                Commissioned by Maharaja Dodda Devaraja Wodeyar halfway up the 1,000 steps of Chamundi Hill, this monolithic colossus was sculpted directly out of the bedrock on which it rests. It is famed for its monumental bells, decorative hoof anklets, and the steady offering of flowers placed between its soaring curved horns.
              </p>
            </article>
          </div>
        </section>

        <section className="ox-prism-nan-panel ox-prism-nan-panel-pradosha">
          <div className="ox-prism-nan-panel-header">
            <span className="ox-prism-nan-sanskrit-tag" lang="sa">॥ प्रदोषकाले शङ्करपूजा ॥</span>
            <h2 className="ox-prism-nan-panel-title">Pradosha · Twilight of the Thirteenth Lunar Day</h2>
            <p className="ox-prism-nan-panel-sub">
              During the auspicious twilight hour of Trayodashi, the primary liturgy of the temple transfers from the sanctum sanctorum directly to the great stone bull.
            </p>
          </div>

          <div className="ox-prism-nan-pradosha-layout">
            <div className="ox-prism-nan-pradosha-ritual">
              <div className="ox-prism-nan-ritual-step">
                <div className="ox-prism-nan-step-num">01</div>
                <div className="ox-prism-nan-step-content">
                  <h4>The Sandhya Window</h4>
                  <p>Pradosha kalam occurs between 4:30 PM and 6:00 PM on the thirteenth day of each lunar fortnight. It marks the legendary twilight when Shiva swallowed the Halahala venom churned from the cosmic ocean, rescuing the three realms from annihilation.</p>
                </div>
              </div>

              <div className="ox-prism-nan-ritual-step">
                <div className="ox-prism-nan-step-num">02</div>
                <div className="ox-prism-nan-step-content">
                  <h4>The Dance Between the Horns</h4>
                  <p>Overjoyed at creation’s deliverance, Mahadeva is said to dance the ecstatic Ananda Tandava on the sacred ridge between Nandi’s two horns, accompanied by Saraswati on the veena, Indra on the flute, and Brahma keeping cosmic rhythm.</p>
                </div>
              </div>

              <div className="ox-prism-nan-ritual-step">
                <div className="ox-prism-nan-step-num">03</div>
                <div className="ox-prism-nan-step-content">
                  <h4>The Maha Abhisheka</h4>
                  <p>Priests bathe the monolithic stone bull in milk, curd, tender coconut water, honey, sugarcane juice, turmeric, and pure sandalwood paste, before crowning his horns with sacred Dharba grass and illuminating the twilight with brass deepams.</p>
                </div>
              </div>
            </div>

            <div className="ox-prism-nan-pradosha-dharshan">
              <p className="ox-prism-nan-quote" lang="sa">
                प्रदोषकाले सकलाः सुराद्याः<br />
                नन्दिस्थितं शूलिनमानमन्ति।<br />
                शृङ्गेक्षणं सर्वविपद्विनाशं<br />
                कैवल्यदं मुक्तिपदं च नित्यम्॥
              </p>
              <p className="ox-prism-nan-quote-trans">
                “At the hour of Pradosha, all celestial beings bow before the Trident-bearer seated upon Nandi. Sighting the divine Lord framed between the horns of the bull destroys all misfortunes and bestows eternal liberation.”
              </p>
            </div>
          </div>
        </section>

        <section className="ox-prism-nan-panel ox-prism-nan-panel-anatomy">
          <div className="ox-prism-nan-panel-header">
            <span className="ox-prism-nan-sanskrit-tag" lang="sa">॥ वृषभ लक्षणानि ॥</span>
            <h2 className="ox-prism-nan-panel-title">Iconography of the Recumbent Bull</h2>
            <p className="ox-prism-nan-panel-sub">
              Every curve of the stone bull adheres to ancient Agamic proportions, encoding metaphysical attributes in physical bovine anatomy.
            </p>
          </div>

          <div className="ox-prism-nan-anatomy-strip">
            <div className="ox-prism-nan-anatomy-item">
              <span className="ox-prism-nan-anatomy-sanskrit" lang="sa">ककुद्</span>
              <h4 className="ox-prism-nan-anatomy-title">The Zebu Hump</h4>
              <p className="ox-prism-nan-anatomy-desc">The thoracic hump represents Mount Meru, the cosmic axis, and the boundless spiritual endurance of pure Dharma.</p>
            </div>

            <div className="ox-prism-nan-anatomy-item">
              <span className="ox-prism-nan-anatomy-sanskrit" lang="sa">शृङ्ग</span>
              <h4 className="ox-prism-nan-anatomy-title">The Upward Horns</h4>
              <p className="ox-prism-nan-anatomy-desc">Framing the sacred sightline (Shringa Darshanam); the horns channel divine energy into the devotee gazing toward the sanctum.</p>
            </div>

            <div className="ox-prism-nan-anatomy-item">
              <span className="ox-prism-nan-anatomy-sanskrit" lang="sa">गलकम्बल</span>
              <h4 className="ox-prism-nan-anatomy-title">The Deep Dewlap</h4>
              <p className="ox-prism-nan-anatomy-desc">Deep folds cascading under the throat carry the sacred brass bell whose resonant chime dispels ignorance and evil spirits.</p>
            </div>

            <div className="ox-prism-nan-anatomy-item">
              <span className="ox-prism-nan-anatomy-sanskrit" lang="sa">स्थिरता</span>
              <h4 className="ox-prism-nan-anatomy-title">Folded Limbs</h4>
              <p className="ox-prism-nan-anatomy-desc">The recumbent posture signifies Sthirata—unwavering mental stillness and restraint before the boundless presence of the infinite.</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="ox-prism-nan-temple-footer">
        <p className="ox-prism-nan-footer-mantra" lang="sa">॥ ॐ तत्पुरुषाय विद्महे नन्दिकेश्वराय धीमहि तन्नो वृषभः प्रचोदयात् ॥</p>
        <p className="ox-prism-nan-footer-note">Nandi Gayatri Mantra · Consecrated in granite at the temple threshold</p>
      </footer>
    </div>
  )
}
