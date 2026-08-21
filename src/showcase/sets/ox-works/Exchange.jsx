import { motion } from 'framer-motion'
import './exchange.css'

const ticker = ['OX 1 = 12 SHEEP', 'OX 1 = 3.2 T BARLEY', 'WEIGHT 540 KG AVG', 'PRICE STABLE · MARKET DAY TUESDAY', 'CERTIFIED WEIGHBRIDGE', 'OX 1 = 12 SHEEP']

function ScaleArt() {
  return (
    <svg className="ex-scale" viewBox="0 0 520 360" aria-hidden="true" focusable="false">
      <line x1="260" y1="38" x2="260" y2="280" stroke="#102030" strokeWidth="3" />
      <path d="M 182 38 L 338 38" stroke="#102030" strokeWidth="4" strokeLinecap="round" />
      <circle cx="260" cy="38" r="8" fill="#6B0F0F" stroke="#102030" strokeWidth="2" />
      <g className="ex-beam">
        <line x1="86" y1="110" x2="434" y2="110" stroke="#102030" strokeWidth="4" strokeLinecap="round" />
        <circle cx="260" cy="110" r="10" fill="#FFC857" stroke="#102030" strokeWidth="2.5" />
        <g transform="translate(86,110)">
          <path d="M -62 0 L 62 0 L 44 78 L -44 78 Z" fill="#FFFFFF" stroke="#102030" strokeWidth="2.5" />
          <path d="M -44 78 L 44 78 L 36 92 L -36 92 Z" fill="#6B0F0F" />
          <g transform="translate(0,24)">
            <path d="M -28 8 C -22 -2 -12 -6 0 -6 C 12 -6 22 -2 28 8 L 22 18 C 14 10 8 8 0 10 C -8 8 -14 10 -22 18 Z" fill="#FFFFFF" stroke="#102030" strokeWidth="2" />
            <circle cx="-10" cy="2" r="2.8" fill="#102030" />
            <circle cx="10" cy="2" r="2.8" fill="#102030" />
            <path d="M -32 6 C -36 -2 -32 -10 -24 -12" stroke="#102030" strokeWidth="2.2" fill="none" strokeLinecap="round" />
            <path d="M 32 6 C 36 -2 32 -10 24 -12" stroke="#102030" strokeWidth="2.2" fill="none" strokeLinecap="round" />
          </g>
          <text x="0" y="66" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontWeight="700" fontSize="10" letterSpacing="1" fill="#102030">OX · 540 KG</text>
        </g>
        <g transform="translate(434,110)">
          <path d="M -62 0 L 62 0 L 44 78 L -44 78 Z" fill="#FFFFFF" stroke="#102030" strokeWidth="2.5" />
          <path d="M -44 78 L 44 78 L 36 92 L -36 92 Z" fill="#102030" />
          <text x="0" y="34" textAnchor="middle" fontFamily="Space Grotesk, sans-serif" fontWeight="700" fontSize="22" fill="#6B0F0F">120</text>
          <text x="0" y="50" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontWeight="600" fontSize="9" letterSpacing="1.5" fill="#102030">SACKS GRAIN</text>
          <text x="0" y="66" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="9" fill="#6B7A90">3.2 TONNES</text>
        </g>
        <line x1="86" y1="110" x2="86" y2="30" stroke="#102030" strokeWidth="1.6" strokeDasharray="4 4" opacity="0.4" />
        <line x1="434" y1="110" x2="434" y2="30" stroke="#102030" strokeWidth="1.6" strokeDasharray="4 4" opacity="0.4" />
      </g>
      <ellipse cx="260" cy="302" rx="110" ry="10" fill="#102030" opacity="0.08" />
    </svg>
  )
}

function Abacus() {
  return (
    <div className="ex-abacus" aria-hidden="true">
      <div className="ex-abacus-rail">
        {[0, 1, 2, 3].map((row) => (
          <div key={row} className="ex-abacus-row">
            <span className="ex-abacus-label">{['THOUSANDS', 'HUNDREDS', 'TENS', 'ONES'][row]}</span>
            <div className="ex-abacus-track">
              <span className="ex-abacus-wire" />
              {Array.from({ length: 10 }, (_, i) => (
                <span key={i} className={`ex-bead ${i < [4, 2, 7, 5][row] ? 'ex-bead-on' : ''}`} style={{ left: `${6 + i * 8.2}%` }} />
              ))}
            </div>
          </div>
        ))}
      </div>
      <span className="ex-abacus-total">TOTAL HEAD COUNT · 4 275</span>
    </div>
  )
}

export default function Exchange() {
  return (
    <div className="th-exchange">
      <div className="ex-ticker" aria-hidden="true">
        <div className="ex-ticker-track">
          <div className="ex-ticker-half">
            {ticker.map((t, i) => (
              <span key={i}>{t}<em>·</em></span>
            ))}
          </div>
          <div className="ex-ticker-half" aria-hidden="true">
            {ticker.map((t, i) => (
              <span key={`b-${i}`}>{t}<em>·</em></span>
            ))}
          </div>
        </div>
      </div>

      <header className="ex-head">
        <div className="ex-head-top">
          <span>OX WORKS — 05</span>
          <span>MARKET LEDGER · TUESDAY ISSUE</span>
          <span>WEIGHBRIDGE CERTIFIED</span>
        </div>
        <motion.h1
          className="ex-title"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          EXCHANGE
        </motion.h1>
        <p className="ex-subtitle">The animal that was money before there was money.</p>
        <p className="ex-lede">
          <span lang="la">Pecus</span> is cattle, <span lang="la">pecunia</span> is money — the words share a hide. Before coin, wealth was counted in heads that breathed, ate, and could pull a plow tomorrow.
        </p>
      </header>

      <section className="ex-board">
        <div className="ex-board-left">
          <div className="ex-ledger">
            <div className="ex-ledger-head">
              <span>COMMODITY TABLE · SPRING MARKET 1926 (RECONSTRUCTED)</span>
              <span>SRCE: FAO ARCHIVE · BAHIR DAR</span>
            </div>
            <div className="ex-row ex-row-head">
              <span>UNIT</span>
              <span>EQUIVALENT</span>
              <span>RATE</span>
            </div>
            <div className="ex-row">
              <span>1 OX (trained)</span>
              <span>12 sheep / 3.2 t barley</span>
              <span className="ex-rate">— base —</span>
            </div>
            <div className="ex-row">
              <span>1 COW (milk)</span>
              <span>8 sheep / 1.8 t barley</span>
              <span>0.66 × OX</span>
            </div>
            <div className="ex-row">
              <span>1 YEARLING</span>
              <span>5 sheep / 900 kg barley</span>
              <span>0.40 × OX</span>
            </div>
            <div className="ex-row">
              <span>1 PLOW DAY</span>
              <span>hired ox + handler</span>
              <span>2.5 kg grain</span>
            </div>
            <div className="ex-ledger-foot">All rates variable by season, condition, and the stubbornness of the individual animal.</div>
          </div>

          <div className="ex-tickets">
            <div className="ex-ticket">
              <span className="ex-ticket-kicker">WEIGH SLIP № 1147</span>
              <span className="ex-ticket-val">548<em>KG</em></span>
              <span className="ex-ticket-label">WHITE OX · 4 YR · YOKE TRAINED</span>
              <span className="ex-ticket-stamp">PAID</span>
            </div>
            <div className="ex-ticket ex-ticket-alt">
              <span className="ex-ticket-kicker">WEIGH SLIP № 1148</span>
              <span className="ex-ticket-val">512<em>KG</em></span>
              <span className="ex-ticket-label">RED OX · 3 YR · PLOW READY</span>
              <span className="ex-ticket-stamp">PAID</span>
            </div>
          </div>

          <Abacus />
        </div>

        <motion.div
          className="ex-board-right"
          initial={{ opacity: 0, x: 18 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
        >
          <ScaleArt />
          <p className="ex-scale-caption">Fig. 5 — Beam scale, Addis Ababa market. The market master keeps a stone for the ox and a stone for the grain; both are called <span lang="am">mizan</span> — balance.</p>
          <div className="ex-note">
            <span className="ex-note-kicker">MARKET NOTE</span>
            <p>An ox that pulls straight is worth two that pull strong. Buyers walk the animal in a circle and watch the hind feet — they should land in the prints of the front feet.</p>
          </div>
        </motion.div>
      </section>

      <blockquote className="ex-quote">
        <p>“We do not own the ox. We keep the ox, and the ox keeps us.”</p>
        <cite>— Amharic proverb, recorded Bahir Dar, 1974</cite>
      </blockquote>

      <footer className="ex-foot">
        <div className="ex-stamp">
          <span className="ex-stamp-mark">✦ MIZAN</span>
          <span className="ex-stamp-main">SET III · DESIGNED BY MUSE-SPARK</span>
          <span className="ex-stamp-sub">OX WORKS — EXCHANGE · CERTIFIED CORRECT · MARKET MASTER COPY</span>
        </div>
        <span className="ex-foot-brand">OX WORKS — EXCHANGE · WEALTH ON FOUR FEET</span>
      </footer>
    </div>
  )
}
