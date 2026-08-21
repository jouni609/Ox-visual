import { motion } from 'framer-motion'
import './stele.css'

export default function Stele() {
  return (
    <div className="th-stele">
      <div className="stele-ground" aria-hidden="true" />

      <main className="stele-main">
        <motion.div
          className="stele-plinth"
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 50, damping: 20 }}
        >
          <div className="stele-pedestal" aria-hidden="true">
            <svg viewBox="0 0 520 80" aria-hidden="true">
              <rect x="20" y="20" width="480" height="40" rx="2" fill="#D4C4A8" />
              <rect x="10" y="55" width="500" height="18" rx="1" fill="#C4B498" />
              <line x1="20" y1="30" x2="500" y2="30" stroke="#B8A88C" strokeWidth="1" />
              <line x1="20" y1="45" x2="500" y2="45" stroke="#B8A88C" strokeWidth="1" />
            </svg>
          </div>

          <div className="stele-slab">
            <svg className="stele-slab-svg" viewBox="0 0 440 640" aria-hidden="true">
              <defs>
                <linearGradient id="stele-slab-grad" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#E8DDD0" />
                  <stop offset="50%" stopColor="#F0E8DC" />
                  <stop offset="100%" stopColor="#DDD0C0" />
                </linearGradient>
                <pattern id="stele-rosette" width="40" height="40" patternUnits="userSpaceOnUse">
                  <circle cx="20" cy="20" r="6" fill="none" stroke="#B8A88C" strokeWidth="1" />
                  <circle cx="20" cy="20" r="2" fill="#B8A88C" />
                  <path d="M20 8 L20 14 M20 26 L20 32 M8 20 L14 20 M26 20 L32 20" stroke="#B8A88C" strokeWidth="1" />
                </pattern>
              </defs>

              <rect x="10" y="10" width="420" height="620" rx="3" fill="url(#stele-slab-grad)" />
              <rect x="18" y="18" width="404" height="604" rx="2" fill="none" stroke="#C4B498" strokeWidth="2" />
              <rect x="26" y="26" width="388" height="588" rx="1" fill="none" stroke="#B8A88C" strokeWidth="1" />

              <rect x="30" y="30" width="40" height="580" fill="url(#stele-rosette)" opacity="0.35" />
              <rect x="370" y="30" width="40" height="580" fill="url(#stele-rosette)" opacity="0.35" />

              <rect x="80" y="50" width="280" height="50" rx="2" fill="#1E3A5F" opacity="0.08" />
              <text x="220" y="82" textAnchor="middle" fontFamily="'Cinzel Decorative', serif" fontSize="18" fill="#1E3A5F" letterSpacing="4">TRIBUTE OF THE INDUS</text>

              <g transform="translate(70, 140)">
                <path d="M40 80 Q35 60 45 50 Q55 40 70 45 Q85 50 90 65 Q95 80 85 95 Q75 110 60 105 Q45 100 40 80 Z" fill="#A0522D" opacity="0.85" />
                <path d="M70 45 Q75 25 85 15 Q95 10 100 25 Q105 40 95 50 Q85 55 80 48" fill="#A0522D" opacity="0.85" />
                <path d="M90 65 Q110 55 130 60 Q150 65 160 80 Q165 95 155 105 Q140 110 125 100 Q110 90 100 85" fill="#A0522D" opacity="0.85" />
                <path d="M85 95 Q100 110 110 130 Q115 150 105 165 Q95 175 80 170 Q65 160 60 140 Q55 120 65 105" fill="#A0522D" opacity="0.85" />
                <path d="M60 140 Q50 155 45 175 Q40 195 50 210 Q60 220 75 215 Q90 210 95 195 Q100 180 95 165" fill="#A0522D" opacity="0.85" />
                <path d="M75 215 Q85 230 90 250 Q95 270 85 285 Q75 295 60 290 Q45 280 40 260 Q35 240 45 220" fill="#A0522D" opacity="0.85" />
                <path d="M60 290 Q55 310 50 330 Q48 350 55 365 Q62 375 75 370 Q88 365 92 350 Q96 335 90 315 Q85 300 78 290" fill="#A0522D" opacity="0.85" />
                <path d="M75 370 Q80 385 82 400 Q84 415 78 425 Q72 432 62 428 Q52 422 48 408 Q45 395 50 380 Q55 368 62 365" fill="#A0522D" opacity="0.85" />
                <path d="M62 428 L58 445 Q55 452 62 455 Q70 458 75 450 L78 432" fill="#A0522D" opacity="0.85" />
                <path d="M105 165 Q120 175 135 190 Q150 205 155 225 Q158 245 148 260 Q135 270 118 265 Q102 258 95 240 Q90 222 95 205" fill="#A0522D" opacity="0.85" />
                <path d="M118 265 Q130 280 138 300 Q145 320 138 340 Q130 355 112 358 Q95 360 82 348 Q70 335 68 315 Q67 295 78 280" fill="#A0522D" opacity="0.85" />
                <path d="M112 358 Q120 375 125 395 Q128 415 118 430 Q108 442 90 440 Q72 438 62 422 Q55 405 58 385 Q62 365 75 355" fill="#A0522D" opacity="0.85" />
                <path d="M90 440 Q95 455 98 470 Q100 485 92 495 Q85 502 72 498 Q60 492 55 478 Q52 465 55 450 Q58 438 65 432" fill="#A0522D" opacity="0.85" />
                <path d="M72 498 L68 515 Q65 522 72 525 Q80 528 85 520 L88 502" fill="#A0522D" opacity="0.85" />
                <circle cx="75" cy="70" r="5" fill="#2A1F18" opacity="0.7" />
                <path d="M85 55 Q95 45 110 48 Q125 52 130 65" fill="none" stroke="#A0522D" strokeWidth="3" opacity="0.7" />
                <path d="M95 85 Q115 90 130 105" fill="none" stroke="#A0522D" strokeWidth="2.5" opacity="0.6" />

                <path d="M140 80 Q180 60 220 75 Q250 90 260 120 Q265 150 250 175 Q230 195 200 190 Q170 185 150 165 Q130 145 125 115 Q122 95 140 80 Z" fill="#1E3A5F" opacity="0.15" />
                <path d="M145 90 Q175 75 205 85 Q230 95 240 120 Q245 145 232 165 Q215 180 190 176 Q165 172 148 155 Q132 138 130 115 Q128 100 145 90 Z" fill="none" stroke="#1E3A5F" strokeWidth="2" opacity="0.35" strokeDasharray="4 3" />
              </g>

              <g transform="translate(80, 520)">
                <rect x="0" y="0" width="280" height="60" rx="2" fill="#1E3A5F" opacity="0.06" />
                <path d="M20 30 L25 20 L30 30 L35 20 L40 30" fill="none" stroke="#1E3A5F" strokeWidth="2" opacity="0.4" />
                <path d="M60 30 L65 18 L70 30 L75 18 L80 30 L85 18 L90 30" fill="none" stroke="#1E3A5F" strokeWidth="2" opacity="0.4" />
                <path d="M110 30 L115 22 L120 30 L125 22 L130 30" fill="none" stroke="#1E3A5F" strokeWidth="2" opacity="0.4" />
                <path d="M160 30 L165 18 L170 30 L175 18 L180 30 L185 18 L190 30" fill="none" stroke="#1E3A5F" strokeWidth="2" opacity="0.4" />
                <path d="M210 30 L215 22 L220 30 L225 22 L230 30" fill="none" stroke="#1E3A5F" strokeWidth="2" opacity="0.4" />
                <path d="M250 30 L255 20 L260 30" fill="none" stroke="#1E3A5F" strokeWidth="2" opacity="0.4" />
              </g>
            </svg>
          </div>
        </motion.div>

        <motion.section
          className="stele-text"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.25, type: 'spring', stiffness: 60, damping: 16 }}
        >
          <p className="stele-kicker">GYPSUM RELIEF, NINEVEH, C. 730 BCE</p>
          <h1 className="stele-headline">Tribute of the Indus</h1>
          <p className="stele-lede">
            In the ninth century BCE, Assyrian scribes recorded tribute from every corner of the known world.
            Among the gifts listed on gypsum steles were herds of humped zebu, brought from the Indus valley across mountains and deserts.
            The royal artists carved the foreign beast with the same care they gave to lions and winged genies.
            Every hoof was placed with precision, the hump drawn high and proud.
            The stele was both invoice and warning.
          </p>

          <div className="stele-facts">
            <div className="stele-fact">
              <span className="stele-fact-label">Origin</span>
              <span className="stele-fact-value">Indus Valley</span>
            </div>
            <div className="stele-fact">
              <span className="stele-fact-label">Medium</span>
              <span className="stele-fact-value">Gypsum alabaster</span>
            </div>
            <div className="stele-fact">
              <span className="stele-fact-label">Height</span>
              <span className="stele-fact-value">2.3 metres</span>
            </div>
          </div>
        </motion.section>
      </main>

      <footer className="stele-footer">
        <div className="stele-signature">
          <svg viewBox="0 0 280 52" aria-hidden="true">
            <rect x="2" y="2" width="276" height="48" rx="4" fill="none" stroke="#1E3A5F" strokeWidth="1.5" opacity="0.35" />
            <path d="M20 26 L28 18 L32 26 L36 18 L40 26" fill="none" stroke="#1E3A5F" strokeWidth="2" opacity="0.5" />
            <path d="M48 26 L52 18 L56 26 L60 18 L64 26 L68 18 L72 26" fill="none" stroke="#1E3A5F" strokeWidth="2" opacity="0.5" />
            <path d="M80 26 L84 20 L88 26" fill="none" stroke="#1E3A5F" strokeWidth="2" opacity="0.5" />
            <text x="140" y="32" textAnchor="middle" fontFamily="'Cinzel Decorative', serif" fontSize="12" fill="#2A1F18" letterSpacing="2" opacity="0.8">SET VIII · DESIGNED BY OPENCODE</text>
            <path d="M200 26 L204 20 L208 26" fill="none" stroke="#1E3A5F" strokeWidth="2" opacity="0.5" />
            <path d="M216 26 L220 18 L224 26 L228 18 L232 26 L236 18 L240 26" fill="none" stroke="#1E3A5F" strokeWidth="2" opacity="0.5" />
            <path d="M248 26 L256 18 L260 26" fill="none" stroke="#1E3A5F" strokeWidth="2" opacity="0.5" />
          </svg>
        </div>
      </footer>
    </div>
  )
}
