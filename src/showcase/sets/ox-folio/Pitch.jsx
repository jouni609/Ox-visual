import { motion } from 'framer-motion'
import './pitch.css'

const OX_HEAD =
  'M70,150 C58,142 50,124 52,104 C54,82 66,64 86,56 ' +
  'C76,36 86,16 110,12 C132,10 150,24 152,46 ' +
  'C168,44 184,52 192,66 C200,80 198,96 188,104 ' +
  'C206,108 214,118 212,130 C210,140 202,144 192,142 ' +
  'L192,158 C196,170 190,182 178,184 C164,184 154,174 154,162 ' +
  'C134,170 108,170 88,164 C82,176 70,180 60,172 ' +
  'C52,166 54,156 60,150 Z'

const OX_HORN_TOP =
  'M110,12 C96,2 78,-2 64,4 C70,14 84,22 98,26 C104,22 108,18 110,12 Z'

const OX_HORN_BACK =
  'M150,46 C166,38 182,42 190,54 C182,58 170,58 160,54 C156,52 152,50 150,46 Z'

const OX_MOUTH =
  'M196,108 C208,112 216,122 214,134 C212,140 206,142 200,138 ' +
  'C196,130 196,120 196,108 Z'

const OX_EYE = 'M104,74 C112,72 118,74 120,80'
const OX_NOSTRIL = 'M200,98 C206,100 208,104 206,108'
const OX_EAR = 'M86,56 C72,54 60,62 58,74 C68,68 80,66 88,68'

const WAVE =
  'M0,90 ' +
  'C20,70 40,110 60,90 C80,70 100,110 120,90 ' +
  'C140,68 160,112 180,90 C200,72 220,108 240,90 ' +
  'C250,60 262,120 276,96 C288,76 300,104 312,90 ' +
  'C324,72 336,108 348,90 C360,70 372,110 384,90 ' +
  'C396,72 408,108 420,90 C432,70 444,110 456,90 ' +
  'C468,72 480,108 492,90 C504,72 516,108 528,90 ' +
  'C540,70 552,110 564,90 C576,72 588,108 600,90 ' +
  'C612,72 624,108 636,90 C648,70 660,110 672,90 ' +
  'C684,72 696,108 708,90 C712,86 716,88 720,90'

const BANDS = [
  { hz: '400 Hz', y: 26 },
  { hz: '200 Hz', y: 62 },
  { hz: '100 Hz', y: 98 },
  { hz: '50 Hz', y: 134 },
]

const TICKS = ['0.0', '0.4', '0.8', '1.2', '1.6', '2.0']

function SpliceLabel() {
  return (
    <span className="pit-splice" aria-hidden="true">
      <span className="pit-splice-tape pit-splice-tape-l" />
      <span className="pit-splice-body">
        <span className="pit-splice-line">DESIGNED BY</span>
        <span className="pit-splice-line pit-splice-line-sub">GLM 5.2 · SET V</span>
      </span>
      <span className="pit-splice-tape pit-splice-tape-r" />
    </span>
  )
}

export default function Pitch() {
  return (
    <div className="th-pit">
      <header className="pit-head">
        <p className="pit-eyebrow">FOLIO II · CONSIGNA VOCIS</p>
        <h1 className="pit-title">Pitch</h1>
        <p className="pit-subtitle">The bellow of the ox, read off the moving tape — a low rumble charted at twenty-two hertz of fundamental.</p>
      </header>

      <div className="pit-console">
        <div className="pit-ox" aria-hidden="true">
          <svg viewBox="0 0 240 200" focusable="false">
            <path d={OX_HEAD} fill="var(--pit-ox)" />
            <path d={OX_HORN_TOP} fill="var(--pit-ox)" />
            <path d={OX_HORN_BACK} fill="var(--pit-ox)" />
            <path d={OX_EAR} fill="var(--pit-ox)" opacity="0.85" />
            <path d={OX_MOUTH} fill="var(--pit-bg2)" />
            <path d={OX_EYE} fill="none" stroke="var(--pit-amber)" strokeWidth="2.4" strokeLinecap="round" />
            <path d={OX_NOSTRIL} fill="none" stroke="var(--pit-bg2)" strokeWidth="2" strokeLinecap="round" />
            <line x1="214" y1="120" x2="252" y2="120" stroke="var(--pit-amber)" strokeWidth="1.4" strokeDasharray="3 4" opacity="0.7" />
          </svg>
        </div>

        <div className="pit-meter">
          <span className="pit-meter-label">dB</span>
          <div className="pit-meter-bar">
            <motion.span
              className="pit-meter-fill"
              animate={{ scaleY: [0.4, 0.92, 0.7, 0.95, 0.55, 0.4] }}
              transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
              style={{ transformOrigin: 'bottom' }}
            />
            <span className="pit-meter-peak" style={{ bottom: '78%' }} />
          </div>
          <ul className="pit-meter-ticks" aria-hidden="true">
            <li>0</li><li>-12</li><li>-24</li><li>-36</li>
          </ul>
        </div>

        <div className="pit-tape">
          <ul className="pit-bands" aria-hidden="true">
            {BANDS.map((b) => (
              <li key={b.hz} style={{ top: `${b.y}px` }}>{b.hz}</li>
            ))}
          </ul>

          <div className="pit-tape-viewport">
            <div className="pit-tape-track" aria-hidden="true">
              {[0, 1].map((copy) => (
                <svg className="pit-tape-svg" key={copy} viewBox="0 0 720 160" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="pit-wave-grad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#F0C26A" />
                      <stop offset="100%" stopColor="#E8A33D" />
                    </linearGradient>
                  </defs>
                  <g stroke="rgba(243,231,206,0.16)" strokeWidth="0.5">
                    {[26, 62, 98, 134].map((y) => <line key={y} x1="0" y1={y} x2="720" y2={y} />)}
                    {Array.from({ length: 25 }).map((_, i) => (
                      <line key={'v' + i} x1={i * 30} y1="0" x2={i * 30} y2="160" />
                    ))}
                  </g>
                  <path d={WAVE} fill="none" stroke="url(#pit-wave-grad)" strokeWidth="2.4" strokeLinecap="round" />
                  <path d={WAVE} fill="none" stroke="rgba(232,163,61,0.25)" strokeWidth="6" />
                </svg>
              ))}
            </div>

            <div className="pit-tape-pen" aria-hidden="true" />
            <SpliceLabel />
          </div>

          <ul className="pit-time" aria-hidden="true">
            {TICKS.map((t, i) => (
              <li key={t} style={{ left: `${(i / (TICKS.length - 1)) * 100}%` }}>{t}s</li>
            ))}
          </ul>
        </div>
      </div>

      <section className="pit-readout">
        <div className="pit-readout-cell">
          <p className="pit-readout-key">Fundamental</p>
          <p className="pit-readout-val"><span className="pit-readout-num">22</span><span className="pit-readout-unit">Hz</span></p>
          <p className="pit-readout-note">Below the lower bound of human pitch perception; felt as chest pressure before it is heard.</p>
        </div>
        <div className="pit-readout-cell">
          <p className="pit-readout-key">Duration</p>
          <p className="pit-readout-val"><span className="pit-readout-num">2.0</span><span className="pit-readout-unit">s</span></p>
          <p className="pit-readout-note">A single exhale, sustained across the full length of one tape pass.</p>
        </div>
        <div className="pit-readout-cell">
          <p className="pit-readout-key">Carrying range</p>
          <p className="pit-readout-val"><span className="pit-readout-num">5</span><span className="pit-readout-unit">km</span></p>
          <p className="pit-readout-note">The low fundamental travels flat over ground; one call can locate a herd across open pasture.</p>
        </div>
      </section>

      <footer className="pit-foot">
        <p className="pit-foot-line" lang="la">Consigna Vocis Bos — Tab. II</p>
        <p className="pit-foot-credit">GLM 5.2 · STUDIO TAPE · SET V</p>
      </footer>
    </div>
  )
}
