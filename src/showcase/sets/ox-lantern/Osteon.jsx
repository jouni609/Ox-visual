import './Osteon.css'
import { motion } from 'framer-motion'

export default function Osteon() {
  return (
    <div className="ox-lantern-osteon th-ox-lantern">
      <header className="ox-lantern-osteon-mast">
        <p className="ox-lantern-osteon-kicker">Set XXXIII · Anatomy</p>
        <h1 className="ox-lantern-osteon-title">Osteon</h1>
        <p className="ox-lantern-osteon-sub">The ox, laid open: bone by bone on the dissection table.</p>
      </header>

      <motion.svg
        className="ox-lantern-osteon-figure"
        viewBox="0 0 760 420"
        role="img"
        aria-labelledby="ox-lantern-osteon-title"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      >
        <title id="ox-lantern-osteon-title">Ox skeleton in profile</title>
        <g aria-hidden="true">
          <line x1="40" y1="360" x2="720" y2="360" className="ox-lantern-osteon-ground" />
          <ellipse cx="380" cy="200" rx="210" ry="95" className="ox-lantern-osteon-skin" />
          <circle cx="195" cy="135" r="46" className="ox-lantern-osteon-skull" />
          <path d="M165 108 Q130 95 118 122 Q128 150 160 148" className="ox-lantern-osteon-horn" />
          <path d="M225 100 Q260 85 272 118 Q262 148 230 146" className="ox-lantern-osteon-horn" />
          <path d="M195 180 Q170 210 150 260" className="ox-lantern-osteon-neck" />
          <path d="M235 175 Q270 210 290 270" className="ox-lantern-osteon-neck" />
          <path d="M150 260 Q140 310 150 355" className="ox-lantern-osteon-leg" />
          <path d="M200 275 Q195 315 205 360" className="ox-lantern-osteon-leg" />
          <path d="M290 270 Q300 315 305 360" className="ox-lantern-osteon-leg" />
          <path d="M340 285 Q355 320 365 360" className="ox-lantern-osteon-leg" />
          <path d="M210 150 Q300 115 420 135 Q470 170 480 205" className="ox-lantern-osteon-spine" />
          <g className="ox-lantern-osteon-ribs">
            {Array.from({ length: 9 }, (_, i) => {
              const x = 225 + i * 26
              return (
                <path
                  key={i}
                  d={`M${x} 155 Q${x + 14} ${185 + (i % 3) * 6} ${x + 6} ${205}`}
                  className="ox-lantern-osteon-rib"
                />
              )
            })}
          </g>
          <circle cx="485" cy="205" r="34" className="ox-lantern-osteon-pelvis" />
          <path d="M490 230 Q510 270 520 360" className="ox-lantern-osteon-leg" />
          <path d="M520 230 Q545 270 555 360" className="ox-lantern-osteon-leg" />
          <path d="M470 175 Q500 160 530 175" className="ox-lantern-osteon-tail" />
        </g>
      </motion.svg>

      <aside className="ox-lantern-osteon-specimen">
        <p className="ox-lantern-osteon-specimen-label">Specimen tag</p>
        <p className="ox-lantern-osteon-specimen-line">Bos taurus · adult ox</p>
        <p className="ox-lantern-osteon-specimen-line">Profile, right lateral</p>
        <p className="ox-lantern-osteon-specimen-line">206 bones counted</p>
      </aside>

      <div className="ox-lantern-osteon-signature">
        <span>SET 01 · DESIGNED BY CATJAM</span>
      </div>
    </div>
  )
}