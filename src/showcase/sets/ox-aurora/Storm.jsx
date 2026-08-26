import { motion } from 'framer-motion'
import './storm.css'

function BisonSvg() {
  return (
    <svg className="storm-bison-svg" viewBox="0 0 520 320" aria-hidden="true" focusable="false">
      {/* Storm diagonal bands */}
      <polygon points="0,0 520,0 520,80 0,160" fill="#3D3D4A" opacity="0.35" />
      <polygon points="0,120 520,20 520,140 0,260" fill="#F5E85A" opacity="0.08" />
      {/* Bison body */}
      <ellipse cx="240" cy="210" rx="110" ry="60" fill="#2A2A2E" stroke="#F5E85A" strokeWidth="2" />
      {/* Hump / shoulder */}
      <path d="M150,180 Q200,120 280,140 Q310,180 270,200 Z" fill="#3D3D4A" stroke="#2A2A2E" strokeWidth="2.5" />
      {/* Head - lowered, charging */}
      <ellipse cx="360" cy="190" rx="40" ry="30" fill="#2A2A2E" stroke="#F5E85A" strokeWidth="2" transform="rotate(10 360 190)" />
      {/* Horns - thick, curved back */}
      <path d="M345,180 Q300,140 290,110 Q300,100 320,120 Q330,150 350,175 Z" fill="#B8A060" stroke="#2A2A2E" strokeWidth="2" strokeLinecap="round" />
      <path d="M375,185 Q410,150 420,120 Q410,110 390,130 Q380,160 370,180 Z" fill="#B8A060" stroke="#2A2A2E" strokeWidth="2" strokeLinecap="round" />
      {/* Eye - fierce */}
      <ellipse cx="355" cy="180" rx="6" ry="4" fill="#F5E85A" stroke="#2A2A2E" strokeWidth="1" transform="rotate(8 355 180)" />
      <circle cx="356" cy="180" r="1.5" fill="#2A2A2E" />
      {/* Nose */}
      <rect x="370" y="195" width="16" height="10" rx="3" fill="#B8A060" stroke="#2A2A2E" strokeWidth="1" transform="rotate(10 378 200)" />
      <circle cx="376" cy="199" r="1.5" fill="#2A2A2E" />
      <circle cx="382" cy="199" r="1.5" fill="#2A2A2E" />
      {/* Legs - strong */}
      <path d="M180,240 L170,290 L185,288 L195,245 Z" fill="#2A2A2E" stroke="#F5E85A" strokeWidth="1.5" />
      <path d="M300,245 L310,300 L325,298 L315,250 Z" fill="#2A2A2E" stroke="#F5E85A" strokeWidth="1.5" />
      <path d="M140,230 L130,280 L145,278 L155,235 Z" fill="#2A2A2E" stroke="#F5E85A" strokeWidth="1.5" />
      <path d="M340,235 L350,290 L365,288 L355,240 Z" fill="#2A2A2E" stroke="#F5E85A" strokeWidth="1.5" />
      {/* Tail */}
      <path d="M120,200 Q80,220 70,240 Q85,230 100,210 Z" fill="#2A2A2E" stroke="#F5E85A" strokeWidth="1.5" />
      {/* Lightning accent lines */}
      <polyline points="520,20 420,180 480,260 360,300 440,310" fill="none" stroke="#F5E85A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.9" />
      <polyline points="400,60 300,160 340,220 260,180 300,260" fill="none" stroke="#F5E85A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.6" />
    </svg>
  )
}

export default function Storm() {
  return (
    <div className="th-aurora-storm">
      <main className="storm-main">
        <section className="storm-hero" aria-label="Thunder bison charging">
          <div className="storm-art">
            <motion.div
              initial={{ x: -40, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1.0, ease: 'easeOut' }}
            >
              <BisonSvg />
            </motion.div>
          </div>
          <article className="storm-copy">
            <motion.p
              className="storm-kicker"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
            >
              OX AURORA · SET 05
            </motion.p>
            <motion.h1
              className="storm-headline"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.9, ease: 'easeOut' }}
            >
              Thunder Charge
            </motion.h1>
            <motion.p
              className="storm-subline"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.65, duration: 1 }}
            >
              The bison does not ask for the storm. It is the storm.
            </motion.p>
            <motion.div
              className="storm-lede"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.85, duration: 0.8 }}
            >
              <p>
                Once, millions of bison covered the American prairie — not a herd but a weather system made of muscle and horn. When the storm came, they turned into it. When drought came, they endured it. The bison is not a survivor; it is a force that survives by existing.
              </p>
              <p>
                This is the charging form: dark mass, lowered horns, lightning traced across the body like scars. Not gentle. Not pastoral. The ox as weather.
              </p>
            </motion.div>
          </article>
        </section>
      </main>

      <footer className="storm-footer">
        <div className="storm-signature" aria-label="Signature seal">
          <span className="storm-signature-mark">SET 05 · DESIGNED BY INKLING</span>
          <span className="storm-signature-sub">OX AURORA · STORM</span>
        </div>
      </footer>
    </div>
  )
}
