import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import './headcount.css'

const OX =
  'M 9 11 L 44 11 C 46 11 48 9 50 7 L 54 6 L 60 13 L 61 17 L 56 19 L 51 18 L 47 23 L 47 36 L 44 36 L 44 26 L 42 26 L 42 36 L 39 36 L 39 26 L 19 26 L 19 36 L 16 36 L 16 27 L 14 27 L 14 36 L 11 36 L 11 26 C 9 25 8 22 8 18 L 8 13 C 8 12 8.5 11 9 11 Z'
const HORNS = 'M 50 7 C 49 3 52 0.5 56 0.5 C 54 2 53 4 53 6.5 Z M 54 6.5 C 55 3.5 58 1.5 62 2.5 C 59 3.5 57.5 5 56.5 7.5 Z'
const TAIL = 'M 8.5 13 C 5 15 3.8 20 4 27 L 6.2 27 C 6.2 21 7 17 9.5 15 Z'

const HERDS = [
  { place: 'Brazil', n: 23.4, label: '234 million' },
  { place: 'India', n: 19.3, label: '193 million' },
  { place: 'United States', n: 9.2, label: '92 million' },
  { place: 'Ethiopia', n: 7.0, label: '70 million' },
  { place: 'Argentina', n: 5.3, label: '53 million' },
]

const PER = [
  { place: 'Uruguay', n: 3.5, label: '35 per 10 people' },
  { place: 'Argentina', n: 1.2, label: '12 per 10 people' },
  { place: 'Brazil', n: 1.1, label: '11 per 10 people' },
  { place: 'Ethiopia', n: 0.6, label: '6 per 10 people' },
  { place: 'United States', n: 0.3, label: '3 per 10 people' },
  { place: 'India', n: 0.14, label: '1.4 per 10 people' },
]

const VIEWS = {
  herds: {
    title: 'Five great herds',
    key: '1 symbol = 10 million head of cattle',
    rows: HERDS,
    scale: 1,
  },
  share: {
    title: 'Cattle for every ten people',
    key: '1 symbol = 1 head of cattle per 10 people',
    rows: PER,
    scale: 10,
  },
}

function Pict({ color, frac = 1, className }) {
  const w = 64 * frac
  return (
    <svg
      className={className}
      viewBox={`0 0 ${w} 37`}
      style={frac < 1 ? { width: `calc(var(--hc-icon) * ${frac})` } : undefined}
      aria-hidden="true"
    >
      <path d={TAIL} fill={color} />
      <path d={OX} fill={color} />
      <path d={HORNS} fill={color} />
      <circle cx="55" cy="10.5" r="1.3" fill="var(--hc-paper)" />
    </svg>
  )
}

function Row({ row, scale, color, index }) {
  const total = row.n * scale
  const whole = Math.floor(total + 1e-6)
  const part = Math.round((total - whole) * 10) / 10
  const icons = Array.from({ length: whole }, (_, i) => i)
  return (
    <li className="ox-waymark-hc-row">
      <span className="ox-waymark-hc-place">{row.place}</span>
      <span className="ox-waymark-hc-icons">
        {icons.map((i) => (
          <motion.span
            key={i}
            className="ox-waymark-hc-stamp"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 520, damping: 22, delay: index * 0.12 + i * 0.03 }}
          >
            <Pict color={color} />
          </motion.span>
        ))}
        {part > 0 ? (
          <motion.span
            className="ox-waymark-hc-stamp"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 520, damping: 22, delay: index * 0.12 + whole * 0.03 }}
          >
            <Pict color={color} frac={part} />
          </motion.span>
        ) : null}
      </span>
      <span className="ox-waymark-hc-num">{row.label}</span>
    </li>
  )
}

export default function HeadCount() {
  const [view, setView] = useState('herds')
  const v = VIEWS[view]

  return (
    <div className="th-ox-waymark-hc">
      <div className="ox-waymark-hc-ticker" aria-hidden="true">
        <div className="ox-waymark-hc-ticker-track">
          {Array.from({ length: 40 }, (_, i) => (
            <Pict key={i} color={i % 5 === 3 ? 'var(--hc-red)' : 'var(--hc-ink)'} className="ox-waymark-hc-tick" />
          ))}
        </div>
      </div>

      <header className="ox-waymark-hc-hero">
        <div className="ox-waymark-hc-hero-text">
          <p className="ox-waymark-hc-sheet">Sheet 5 · Livestock of the world</p>
          <h1 className="ox-waymark-hc-title">
            <span className="ox-waymark-hc-big">1.5</span> billion cattle
          </h1>
          <p className="ox-waymark-hc-lede">
            Roughly one for every five people alive. The figures below count them the Isotype way: more
            cattle means more symbols, never a bigger one.
          </p>
        </div>
        <motion.div
          className="ox-waymark-hc-hero-ox"
          initial={{ x: '-30%', opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 60, damping: 14 }}
        >
          <svg viewBox="-8 -12 86 62" role="img" aria-label="A flat pictogram of an ox in profile, horns, tail and four legs">
            <path d={TAIL} fill="var(--hc-red)" />
            <path d={OX} fill="var(--hc-red)" />
            <path d={HORNS} fill="var(--hc-red)" />
            <circle cx="55" cy="10.5" r="1.3" fill="var(--hc-paper)" />
            <g className="ox-waymark-hc-callouts" fill="none" stroke="var(--hc-ink)" strokeWidth="0.35">
              <path d="M 57 1 L 66 -6" />
              <path d="M 3.5 24 L -3 32" />
              <path d="M 45 36.5 L 50 44" />
              <path d="M 49 20 L 62 30" />
            </g>
            <g className="ox-waymark-hc-callout-text" fill="var(--hc-ink)">
              <text x="62" y="-8">two horns</text>
              <text x="-6" y="35.5">one tail</text>
              <text x="42" y="47.5">four legs</text>
              <text x="58" y="33">dewlap</text>
            </g>
          </svg>
        </motion.div>
      </header>

      <section className="ox-waymark-hc-chart" aria-labelledby="ox-waymark-hc-chart-h">
        <div className="ox-waymark-hc-chart-head">
          <h2 id="ox-waymark-hc-chart-h">{v.title}</h2>
          <div className="ox-waymark-hc-switch" role="group" aria-label="Choose chart">
            <button
              type="button"
              className="ox-waymark-hc-btn"
              aria-pressed={view === 'herds'}
              onClick={() => setView('herds')}
            >
              By herd
            </button>
            <button
              type="button"
              className="ox-waymark-hc-btn"
              aria-pressed={view === 'share'}
              onClick={() => setView('share')}
            >
              Per person
            </button>
          </div>
        </div>
        <AnimatePresence mode="wait">
          <motion.ol
            key={view}
            className="ox-waymark-hc-rows"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.2 } }}
          >
            {v.rows.map((row, i) => (
              <Row
                key={row.place}
                row={row}
                scale={v.scale}
                index={i}
                color={view === 'herds' ? 'var(--hc-red)' : 'var(--hc-blue)'}
              />
            ))}
          </motion.ol>
        </AnimatePresence>
        <p className="ox-waymark-hc-key">
          <Pict color="var(--hc-ink)" className="ox-waymark-hc-key-ox" /> {v.key}. Approximate national counts
          for 2022, rounded; a cut symbol is a fraction.
        </p>
      </section>

      <section className="ox-waymark-hc-method">
        <div>
          <h2>Count, don’t enlarge</h2>
          <p>
            In 1920s Vienna, Otto Neurath, Marie Reidemeister and the artist Gerd Arntz built Isotype, a picture
            language for statistics. Their rule: a symbol is a fixed unit, and a larger quantity is shown by
            repeating it. Draw a twice-as-tall cow and the eye reads it as four times the cattle.
          </p>
        </div>
        <div className="ox-waymark-hc-compare" aria-hidden="true">
          <div className="ox-waymark-hc-wrong">
            <Pict color="var(--hc-ink)" className="ox-waymark-hc-small" />
            <Pict color="var(--hc-ink)" className="ox-waymark-hc-large" />
            <span>wrong</span>
          </div>
          <div className="ox-waymark-hc-right">
            <Pict color="var(--hc-red)" className="ox-waymark-hc-small" />
            <span className="ox-waymark-hc-pair">
              <Pict color="var(--hc-red)" className="ox-waymark-hc-small" />
              <Pict color="var(--hc-red)" className="ox-waymark-hc-small" />
            </span>
            <span>right</span>
          </div>
        </div>
      </section>

      <footer className="ox-waymark-hc-foot">
        <div className="ox-waymark-hc-colophon">
          <span className="ox-waymark-hc-colophon-label">Key &amp; credit</span>
          <span className="ox-waymark-hc-colophon-icons" aria-hidden="true">
            <Pict color="var(--hc-red)" />
            <Pict color="var(--hc-blue)" />
            <Pict color="var(--hc-ink)" />
          </span>
          <p className="ox-waymark-hc-colophon-sig">SET XXXIV · DESIGNED BY CLAUDE OPUS 5.5</p>
        </div>
      </footer>
    </div>
  )
}
