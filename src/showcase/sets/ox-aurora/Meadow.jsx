import { motion } from 'framer-motion'
import './meadow.css'

function ZebuSvg() {
  return (
    <svg className="meadow-zebu-svg" viewBox="0 0 520 340" aria-hidden="true" focusable="false">
      {/* Meadow grass layers */}
      <path d="M0,300 Q80,240 160,290 T340,270 T520,300 L520,340 L0,340 Z" fill="#6B7B5A" opacity="0.7" />
      <path d="M20,315 Q120,260 220,310 T420,290 T520,315 L520,340 L0,340 Z" fill="#8A9563" opacity="0.5" />
      {/* Flowers */}
      <circle cx="120" cy="260" r="5" fill="#C9A227" />
      <circle cx="180" cy="280" r="3.5" fill="#9E7D3A" />
      <circle cx="400" cy="250" r="4.5" fill="#C9A227" />
      <circle cx="460" cy="270" r="3" fill="#9E7D3A" />
      {/* Zebu body */}
      <ellipse cx="260" cy="200" rx="100" ry="55" fill="#B8A060" stroke="#3A2A18" strokeWidth="3" />
      {/* Hump */}
      <path d="M220,150 Q260,100 300,150 Q290,180 240,170 Z" fill="#9E7D3A" stroke="#3A2A18" strokeWidth="2.5" />
      {/* Head */}
      <ellipse cx="340" cy="190" rx="35" ry="30" fill="#B8A060" stroke="#3A2A18" strokeWidth="2.5" />
      {/* Dewlap */}
      <path d="M330,210 Q340,240 350,220 Q340,230 335,215 Z" fill="#C2A878" stroke="#3A2A18" strokeWidth="1.5" />
      {/* Horns - curved up */}
      <path d="M325,175 Q290,120 270,100 Q280,90 300,110 Q310,140 330,170 Z" fill="#F5E6C8" stroke="#3A2A18" strokeWidth="2" strokeLinecap="round" />
      <path d="M350,180 Q385,130 405,110 Q395,100 375,120 Q365,150 345,175 Z" fill="#F5E6C8" stroke="#3A2A18" strokeWidth="2" strokeLinecap="round" />
      {/* Eyes */}
      <ellipse cx="330" cy="180" rx="7" ry="5" fill="#F8F5E6" stroke="#3A2A18" strokeWidth="1" />
      <circle cx="331" cy="181" r="2" fill="#3A2A18" />
      <ellipse cx="355" cy="178" rx="7" ry="5" fill="#F8F5E6" stroke="#3A2A18" strokeWidth="1" />
      <circle cx="356" cy="179" r="2" fill="#3A2A18" />
      {/* Snout */}
      <rect x="340" y="195" width="22" height="14" rx="6" fill="#F8F5E6" stroke="#3A2A18" strokeWidth="1" />
      <circle cx="350" cy="202" r="2" fill="#3A2A18" />
      <circle cx="356" cy="202" r="2" fill="#3A2A18" />
      {/* Legs */}
      <path d="M210,240 L200,290 L215,292 L225,245 Z" fill="#B8A060" stroke="#3A2A18" strokeWidth="2" />
      <path d="M290,245 L300,300 L315,298 L305,250 Z" fill="#B8A060" stroke="#3A2A18" strokeWidth="2" />
      <path d="M170,230 L160,280 L175,282 L185,235 Z" fill="#B8A060" stroke="#3A2A18" strokeWidth="2" />
      <path d="M330,235 L340,290 L355,288 L345,240 Z" fill="#B8A060" stroke="#3A2A18" strokeWidth="2" />
      {/* Tail */}
      <path d="M160,210 Q120,220 110,260 Q125,250 140,230 Z" fill="#B8A060" stroke="#3A2A18" strokeWidth="2" />
      {/* Specimen label box */}
      <rect x="60" y="60" width="140" height="72" rx="4" fill="#F8F5E6" stroke="#3A2A18" strokeWidth="1.5" opacity="0.95" />
      <text x="130" y="82" textAnchor="middle" fontSize="8" fontFamily="Space Mono, monospace" fill="#3A2A18" letterSpacing="1">BOS INDICUS</text>
      <text x="130" y="98" textAnchor="middle" fontSize="7" fontFamily="Archivo, sans-serif" fill="#6B7B5A" letterSpacing="1">ZEBU · MEADOW FORM</text>
      <line x1="75" y1="108" x2="185" y2="108" stroke="#C9A227" strokeWidth="0.75" />
      <text x="130" y="122" textAnchor="middle" fontSize="6.5" fontFamily="Archivo, sans-serif" fill="#3A2A18" letterSpacing="0.5">LAT. 22° N · ALT. 120 M</text>
    </svg>
  )
}

export default function Meadow() {
  return (
    <div className="th-aurora-meadow">
      <main className="meadow-main">
        <section className="meadow-hero" aria-label="Grazing zebu in meadow">
          <div className="meadow-art">
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.1, ease: 'easeOut' }}
            >
              <ZebuSvg />
            </motion.div>
          </div>
          <article className="meadow-copy">
            <motion.p
              className="meadow-kicker"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
            >
              OX AURORA · SET 04
            </motion.p>
            <motion.h1
              className="meadow-headline"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.9, ease: 'easeOut' }}
            >
              Meadow Form
            </motion.h1>
            <motion.p
              className="meadow-subline"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.65, duration: 1 }}
            >
              The zebu does not rush. It grazes, and in grazing, it shapes the land.
            </motion.p>
            <motion.div
              className="meadow-lede"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.85, duration: 0.8 }}
            >
              <p>
                The zebu's hump is not vanity. It stores fat for drought, a reservoir the animal carries on its own shoulders. In the dry meadows of the Deccan or the savannas of East Africa, this shoulder-ridge is the difference between life and death.
              </p>
              <p>
                Here the form is specimen-like: a botanical plate, a field study. The zebu is measured, noted, and still — a creature whose body is a map of the land it feeds on.
              </p>
            </motion.div>
          </article>
        </section>
      </main>

      <footer className="meadow-footer">
        <div className="meadow-signature" aria-label="Signature seal">
          <span className="meadow-signature-mark">SET 04 · DESIGNED BY INKLING</span>
          <span className="meadow-signature-sub">OX AURORA · MEADOW</span>
        </div>
      </footer>
    </div>
  )
}
