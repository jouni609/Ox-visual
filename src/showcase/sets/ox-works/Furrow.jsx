import { motion } from 'framer-motion'
import './furrow.css'

const packets = [
  {
    crop: 'WHEAT',
    latin: 'Triticum aestivum',
    detail: 'Bearded heads bend under summer. One ox-day clears a half acre; the combine needs diesel, the ox needs water.',
    stat: '6.2',
    unit: 'TONNES / HA',
    time: 'Sown October · Cut July',
  },
  {
    crop: 'BARLEY',
    latin: 'Hordeum vulgare',
    detail: 'Six rows to a head, malt for the winter. The Highland ox still threshes where tractors bog in peat.',
    stat: '4.8',
    unit: 'TONNES / HA',
    time: 'Sown March · Cut August',
  },
  {
    crop: 'MILLET',
    latin: 'Panicum miliaceum',
    detail: 'The dryland grain. Ten thousand years from China to Sahel, pulled behind the same humped shoulder.',
    stat: '2.1',
    unit: 'TONNES / HA',
    time: 'Sown June · Cut September',
  },
]

function FieldArt() {
  return (
    <svg className="fw-field" viewBox="0 0 800 460" aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id="fw-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#FFFBF0" />
          <stop offset="1" stopColor="#E8D9B8" />
        </linearGradient>
        <pattern id="fw-hatch" width="10" height="10" patternUnits="userSpaceOnUse" patternTransform="rotate(35)">
          <path d="M0 5 L10 5" stroke="#C45A1A" strokeWidth="1.1" opacity="0.18" />
        </pattern>
      </defs>
      <rect x="0" y="0" width="800" height="220" fill="url(#fw-sky)" />
      <path d="M0 220 L 82 148 L 718 148 L 800 220 Z" fill="#E8D9B8" stroke="#1A120B" strokeWidth="3" />
      <path d="M82 148 C 240 132 320 128 400 142 C 480 128 560 132 718 148" fill="#FFFBF0" stroke="#1A120B" strokeWidth="2" />
      <path d="M122 218 L 148 154" stroke="#1A120B" strokeWidth="2.2" strokeLinecap="round" className="fw-furrow" />
      <path d="M212 218 L 224 152" stroke="#1A120B" strokeWidth="2.2" strokeLinecap="round" className="fw-furrow fw-furrow-d2" />
      <path d="M302 218 L 302 150" stroke="#C45A1A" strokeWidth="3" strokeLinecap="round" className="fw-furrow fw-furrow-d3" />
      <path d="M398 218 L 380 142" stroke="#1A120B" strokeWidth="2.6" strokeLinecap="round" />
      <path d="M498 218 L 476 150" stroke="#1A120B" strokeWidth="2.2" strokeLinecap="round" className="fw-furrow fw-furrow-d2" />
      <path d="M588 218 L 580 152" stroke="#1A120B" strokeWidth="2.2" strokeLinecap="round" className="fw-furrow" />
      <path d="M678 218 L 658 154" stroke="#1A120B" strokeWidth="2.2" strokeLinecap="round" className="fw-furrow fw-furrow-d3" />
      <g transform="translate(338,116)">
        <path d="M 0 30 L 64 30 L 70 54 L 56 64 L 14 64 L 2 54 Z" fill="#1A120B" />
        <path d="M 14 64 L 14 78 L 24 78 L 24 64 M 46 64 L 46 78 L 56 78 L 56 64" stroke="#1A120B" strokeWidth="4" strokeLinecap="round" />
        <path d="M 64 32 C 78 18 92 16 102 24 L 96 38 C 88 32 76 34 64 44 Z" fill="#4A2310" stroke="#1A120B" strokeWidth="2" />
        <path d="M -32 34 L 6 34 L 6 30 L 14 34 L 6 38 L 6 34" fill="none" stroke="#C45A1A" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M -32 34 L -42 58 L 2 58" fill="none" stroke="#C45A1A" strokeWidth="3.5" strokeLinecap="round" />
        <circle cx="74" cy="46" r="3.5" fill="#FFFBF0" />
        <path d="M70 54 L 58 62 L 70 62 Z" fill="#C45A1A" />
      </g>
      <g opacity="0.9">
        <path d="M 0 284 L 800 284" stroke="#1A120B" strokeWidth="2" strokeDasharray="8 8" />
        <text x="18" y="272" fontFamily="IBM Plex Sans, sans-serif" fontSize="10" fontWeight="700" letterSpacing="3" fill="#4A2310">FIELD ELEVATION — 1 : 120</text>
      </g>
      <g className="fw-cloud">
        <ellipse cx="160" cy="66" rx="34" ry="12" fill="#1A120B" opacity="0.07" />
        <ellipse cx="640" cy="88" rx="42" ry="14" fill="#1A120B" opacity="0.07" />
      </g>
    </svg>
  )
}

function Strata() {
  return (
    <svg className="fw-strata" viewBox="0 0 900 260" aria-hidden="true" focusable="false">
      <rect x="22" y="18" width="856" height="222" fill="none" stroke="#1A120B" strokeWidth="2.5" />
      <rect x="22" y="18" width="856" height="74" fill="#4A2310" />
      <rect x="22" y="92" width="856" height="62" fill="#C45A1A" />
      <rect x="22" y="154" width="856" height="86" fill="url(#fw-hatch)" stroke="#1A120B" strokeWidth="1.2" />
      <line x1="22" y1="92" x2="878" y2="92" stroke="#FFFBF0" strokeWidth="2" strokeDasharray="6 6" opacity="0.7" />
      <line x1="22" y1="154" x2="878" y2="154" stroke="#1A120B" strokeWidth="1.8" strokeDasharray="6 6" />
      <text x="36" y="52" fill="#FFFBF0" fontFamily="Fraunces, serif" fontWeight="800" fontSize="18">A — TOPSOIL</text>
      <text x="36" y="70" fill="#E8D9B8" fontFamily="IBM Plex Sans, sans-serif" fontSize="11" letterSpacing="2">0–28 cm · humus, worm cast, root hair</text>
      <text x="36" y="122" fill="#FFFBF0" fontFamily="Fraunces, serif" fontWeight="800" fontSize="18">B — PLOW PAN</text>
      <text x="36" y="140" fill="#FFFBF0" fontFamily="IBM Plex Sans, sans-serif" fontSize="11" letterSpacing="2">28–52 cm · compacted by ten thousand passes</text>
      <text x="36" y="190" fill="#1A120B" fontFamily="Fraunces, serif" fontWeight="800" fontSize="18">C — PARENT ROCK</text>
      <text x="36" y="208" fill="#4A2310" fontFamily="IBM Plex Sans, sans-serif" fontSize="11" letterSpacing="2">52 cm ↓ · limestone, patience, time</text>
      <g stroke="#1A120B" strokeWidth="1.2" fill="none" opacity="0.5">
        <path d="M 520 46 C 534 52 538 68 524 76" />
        <path d="M 620 118 C 632 124 634 138 620 146" />
        <path d="M 560 186 C 570 196 572 210 556 218" />
      </g>
      <circle cx="524" cy="46" r="3" fill="#5A9E0F" stroke="#1A120B" strokeWidth="1.2" />
      <circle cx="622" cy="118" r="3" fill="#FFFBF0" stroke="#1A120B" strokeWidth="1.2" />
      <circle cx="560" cy="186" r="3" fill="#E8D9B8" stroke="#1A120B" strokeWidth="1.2" />
    </svg>
  )
}

export default function Furrow() {
  return (
    <div className="th-furrow">
      <nav className="fw-top">
        <span className="fw-top-mark">OX WORKS — 01 / FIELD INSTITUTE</span>
        <span className="fw-top-year">EST. 8000 BCE · FIELD № 01</span>
      </nav>

      <header className="fw-hero">
        <motion.div
          className="fw-hero-copy"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <p className="fw-kicker">THE FIRST TECHNOLOGY WAS A LINE IN THE DIRT</p>
          <h1 className="fw-title">
            <span>THE</span>
            <span className="fw-title-accent">FURROW</span>
          </h1>
          <p className="fw-lede">
            Before the wheel, before writing, the ox taught the field to be straight. A yoke, a blade, a hand on the stilt — and wild ground becomes a sentence you can read in rows.
          </p>
          <div className="fw-meta">
            <div>
              <span className="fw-meta-num">10,000</span>
              <span className="fw-meta-label">YEARS OF PLOWING</span>
            </div>
            <div>
              <span className="fw-meta-num">0.4 HA</span>
              <span className="fw-meta-label">PER OX-DAY</span>
            </div>
            <div>
              <span className="fw-meta-num">28 CM</span>
              <span className="fw-meta-label">IDEAL CUT DEPTH</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="fw-hero-art"
          initial={{ opacity: 0, x: 28 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
        >
          <FieldArt />
          <div className="fw-art-caption">
            <span>Fig. 1 — Single-furrow ard pulled by paired oxen, alluvial plain, late summer. Note handler walking in furrow to keep blade true.</span>
          </div>
        </motion.div>
      </header>

      <section className="fw-strata-wrap" aria-label="Soil cross section">
        <Strata />
      </section>

      <section className="fw-packets" aria-label="Seed packets">
        {packets.map((p, i) => (
          <motion.article
            key={p.crop}
            className="fw-packet"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ delay: i * 0.12, duration: 0.6, ease: 'easeOut' }}
          >
            <div className="fw-packet-head">
              <span className="fw-packet-num">0{i + 1}</span>
              <span className="fw-packet-crop">{p.crop}</span>
            </div>
            <p className="fw-packet-latin" lang="la">{p.latin}</p>
            <svg className="fw-packet-grain" viewBox="0 0 200 90" aria-hidden="true" focusable="false">
              <line x1="20" y1="66" x2="180" y2="66" stroke="#4A2310" strokeWidth="1.4" strokeDasharray="4 4" />
              {Array.from({ length: 5 }, (_, k) => (
                <g key={k} transform={`translate(${34 + k * 32} 44)`}>
                  <ellipse cx="0" cy="0" rx="10" ry="22" fill="#E8D9B8" stroke="#1A120B" strokeWidth="1.6" />
                  <path d="M0 -20 C 3 -12 3 12 0 20 M -4 -8 C -1 -4 1 4 4 8 M -4 0 C 0 0 0 0 4 0" stroke="#1A120B" strokeWidth="1.2" fill="none" strokeLinecap="round" opacity="0.7" />
                  <circle cx="0" cy="16" r="1.6" fill="#5A9E0F" />
                </g>
              ))}
            </svg>
            <p className="fw-packet-detail">{p.detail}</p>
            <div className="fw-packet-foot">
              <span className="fw-packet-stat">{p.stat}</span>
              <span className="fw-packet-unit">{p.unit}</span>
            </div>
            <span className="fw-packet-time">{p.time}</span>
          </motion.article>
        ))}
      </section>

      <blockquote className="fw-quote">
        <p>“The field does not hurry. Neither does the ox. That is why both outlast empires.”</p>
        <cite>— Gujarat farmer, quoted in the 1962 FAO Yearbook</cite>
      </blockquote>

      <footer className="fw-foot">
        <div className="fw-foot-line" aria-hidden="true" />
        <div className="fw-foot-row">
          <div className="fw-seed-stamp">
            <span className="fw-seed-stamp-top">LOT № FW-26 · CERTIFIED SEED · 25 KG</span>
            <span className="fw-seed-stamp-main">SET III · DESIGNED BY MUSE-SPARK</span>
            <span className="fw-seed-stamp-sub">OX WORKS — FIELD INSTITUTE · PRINTED ON STRAW PAPER</span>
          </div>
          <span className="fw-foot-brand">OX WORKS — THE FURROW · PRECISION AGRONOMY SINCE 8000 BCE</span>
        </div>
      </footer>
    </div>
  )
}
