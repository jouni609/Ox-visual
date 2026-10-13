import './Yokepair.css'
import { motion } from 'framer-motion'

export default function Yokepair() {
  return (
    <div className="ox-lantern-yokepair th-ox-lantern">
      <header className="ox-lantern-yokepair-mast">
        <p className="ox-lantern-yokepair-kicker">Set XXXIII · Labour</p>
        <h1 className="ox-lantern-yokepair-title">Yokepair</h1>
        <p className="ox-lantern-yokepair-sub">Two in tandem under one beam, leaning into the same earth.</p>
      </header>

      <div className="ox-lantern-yokepair-field">
        <div className="ox-lantern-yokepair-furrows" aria-hidden="true" />
        <motion.svg
          className="ox-lantern-yokepair-figure"
          viewBox="0 0 820 460"
          role="img"
          aria-labelledby="ox-lantern-yokepair-title"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <title id="ox-lantern-yokepair-title">Yoked pair of oxen hauling a plough</title>
          <g aria-hidden="true">
            <rect x="0" y="360" width="820" height="100" fill="rgba(20,18,14,0.35)" />
            <path d="M60 330 Q120 300 200 305 Q260 310 300 335" fill="none" stroke="#F2E7CE" strokeWidth="6" strokeLinecap="round" />
            <path d="M80 345 Q140 318 220 322 Q280 326 320 350" fill="none" stroke="#F2E7CE" strokeWidth="4" strokeLinecap="round" opacity="0.6" />
            {[1, 2, 3].map((k, i) => {
              const x = 420 + i * 70
              return <rect key={i} x={x} y={352} width={48} height={8} fill="#B84A1B" rx="2" />
            })}
            <g transform="translate(40, 60)">
              <ellipse cx="180" cy="220" rx="110" ry="62" fill="#2B2620" stroke="#F2E7CE" strokeWidth="1.6" />
              <circle cx="95" cy="175" r="34" fill="#2B2620" stroke="#F2E7CE" strokeWidth="1.6" />
              <path d="M70 148 Q45 130 38 160 Q45 180 62 182" fill="none" stroke="#F2E7CE" strokeWidth="1.6" />
              <path d="M120 146 Q148 128 160 158 Q150 180 128 180" fill="none" stroke="#F2E7CE" strokeWidth="1.6" />
              <path d="M90 200 Q60 260 55 310" fill="none" stroke="#F2E7CE" strokeWidth="5" strokeLinecap="round" />
              <path d="M135 215 Q125 265 130 310" fill="none" stroke="#F2E7CE" strokeWidth="5" strokeLinecap="round" />
              <path d="M220 245 Q215 285 222 310" fill="none" stroke="#F2E7CE" strokeWidth="5" strokeLinecap="round" />
              <path d="M265 248 Q275 285 282 310" fill="none" stroke="#F2E7CE" strokeWidth="5" strokeLinecap="round" />
              <path d="M170 282 Q250 260 320 275" fill="none" stroke="#B84A1B" strokeWidth="8" strokeLinecap="round" />
              <ellipse cx="112" cy="188" rx="6" ry="4" fill="#F2E7CE" />
            </g>
            <g transform="translate(250, 40)">
              <ellipse cx="180" cy="230" rx="112" ry="64" fill="#38312A" stroke="#F2E7CE" strokeWidth="1.6" />
              <circle cx="95" cy="185" r="36" fill="#38312A" stroke="#F2E7CE" strokeWidth="1.6" />
              <path d="M70 158 Q48 140 40 170 Q48 192 66 194" fill="none" stroke="#F2E7CE" strokeWidth="1.6" />
              <path d="M122 156 Q152 138 164 168 Q154 192 130 192" fill="none" stroke="#F2E7CE" strokeWidth="1.6" />
              <path d="M95 212 Q68 272 62 320" fill="none" stroke="#F2E7CE" strokeWidth="5" strokeLinecap="round" />
              <path d="M142 226 Q132 278 138 320" fill="none" stroke="#F2E7CE" strokeWidth="5" strokeLinecap="round" />
              <path d="M232 258 Q226 302 234 320" fill="none" stroke="#F2E7CE" strokeWidth="5" strokeLinecap="round" />
              <path d="M275 260 Q288 302 296 320" fill="none" stroke="#F2E7CE" strokeWidth="5" strokeLinecap="round" />
              <ellipse cx="115" cy="198" rx="6" ry="4" fill="#F2E7CE" />
            </g>
            {Array.from({ length: 14 }, (_, i) => (
              <motion.circle
                key={i}
                cx={320 + i * 28}
                cy={348 + (i % 3) * 4}
                r={1.5 + (i % 2)}
                fill="#B84A1B"
                initial={{ opacity: 0.15 }}
                animate={{ opacity: [0.15, 0.6, 0.15], y: [0, -4, 0] }}
                transition={{ duration: 2.4, repeat: Infinity, delay: i * 0.12, ease: 'easeInOut' }}
              />
            ))}
          </g>
        </motion.svg>
      </div>

      <aside className="ox-lantern-yokepair-tag">
        <span className="ox-lantern-yokepair-tag-title">Pull tally</span>
        <span>2 head · yoke of green ash · 3 furrows deep</span>
      </aside>

      <div className="ox-lantern-yokepair-signature">
        <span>SET 03 · DESIGNED BY CATJAM</span>
      </div>
    </div>
  )
}