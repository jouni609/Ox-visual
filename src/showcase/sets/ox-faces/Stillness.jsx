import { motion } from 'framer-motion'
import './stillness.css'

const STROKES = [
  { d: 'M150,190 C200,120 330,105 420,150', w: 18, o: 1 },
  { d: 'M420,150 C450,170 452,210 440,240', w: 14, o: 1 },
  { d: 'M445,235 C465,255 460,285 448,300', w: 8, o: 1 },
  { d: 'M170,230 C240,258 340,256 415,225', w: 12, o: 1 },
  { d: 'M215,245 L208,315', w: 13, o: 1 },
  { d: 'M196,318 L228,318', w: 9, o: 1 },
  { d: 'M390,240 L398,315', w: 13, o: 1 },
  { d: 'M382,318 L414,318', w: 9, o: 1 },
  { d: 'M245,250 L240,308', w: 8, o: 0.45 },
  { d: 'M365,248 L372,306', w: 8, o: 0.45 },
  { d: 'M165,185 C130,200 105,225 92,258', w: 16, o: 1 },
  { d: 'M92,258 C86,272 88,284 98,290', w: 12, o: 1 },
  { d: 'M98,290 C120,296 138,288 148,272', w: 9, o: 1 },
  { d: 'M108,232 C96,214 96,198 108,186', w: 8, o: 1 },
  { d: 'M132,236 C142,228 152,228 158,236', w: 7, o: 1 },
]

function Enso() {
  return (
    <svg viewBox="0 0 200 200" aria-hidden="true">
      <path
        d="M100,20 A80,80 0 1 1 30,58"
        fill="none"
        stroke="#1c1a17"
        strokeWidth="10"
        strokeLinecap="round"
        opacity="0.92"
      />
      <path
        d="M100,20 A80,80 0 1 1 30,58"
        fill="none"
        stroke="#1c1a17"
        strokeWidth="5"
        strokeLinecap="round"
        opacity="0.3"
        transform="rotate(3 100 100)"
      />
    </svg>
  )
}

function InkOx() {
  return (
    <svg className="ink-ox" viewBox="0 0 600 360" aria-hidden="true">
      {STROKES.map((s, i) => (
        <motion.path
          key={s.d}
          d={s.d}
          fill="none"
          stroke="#1c1a17"
          strokeWidth={s.w}
          strokeLinecap="round"
          opacity={s.o}
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.9, delay: i * 0.22, ease: 'easeInOut' }}
        />
      ))}
      <motion.circle
        cx="118"
        cy="252"
        r="4"
        fill="#1c1a17"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ delay: 2.7, duration: 0.6 }}
      />
    </svg>
  )
}

export default function Stillness() {
  return (
    <div className="th-stillness">
      <section className="zen-one">
        <span className="zen-vertical">patience is a form of power</span>
        <div className="zen-center">
          <motion.div
            className="enso-wrap"
            animate={{ scale: [1, 1.035, 1] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          >
            <Enso />
            <span className="seal" aria-hidden="true">
              牛
            </span>
          </motion.div>
          <p className="zen-caption">OX — A STUDY IN STILLNESS</p>
        </div>
      </section>

      <section className="zen-two">
        <InkOx />
        <div className="zen-haiku">
          <motion.p
            className="zen-line"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 1.2 }}
          >
            the field is wide,
          </motion.p>
          <motion.p
            className="zen-line"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 1, duration: 1.2 }}
          >
            the ox is unhurried —
          </motion.p>
          <motion.p
            className="zen-line"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 1.6, duration: 1.2 }}
          >
            and nothing arrives late.
          </motion.p>
        </div>
        <motion.p
          className="zen-note"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 2.2, duration: 1.4 }}
        >
          Strength without hurry. The ox stands with its whole weight in the present moment — and moves the world
          precisely because it is never in a rush.
        </motion.p>
      </section>

      <footer className="zen-foot">stillness · endurance · grace</footer>
    </div>
  )
}
