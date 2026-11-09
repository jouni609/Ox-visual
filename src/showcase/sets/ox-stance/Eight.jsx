import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import './eight.css'

const RULES = [
  { h: 'One hand', p: 'on a flat braided rope. The free hand may not touch the bull, the rope or the rider. If it does, the ride scores nothing.' },
  { h: 'Eight seconds', p: 'from the moment the bull’s shoulder clears the gate. Most rides end well before the horn sounds.' },
  { h: 'One hundred points', p: 'split evenly. Judges mark the rider out of fifty and the bull out of fifty. A bull that will not buck earns a re-ride.' },
]

const CARD = [
  { n: '900 kg', l: 'the weight of a big bucking bull, close to a ton of muscle on four small hooves' },
  { n: '309', l: 'outs without one qualified ride for Red Rock, the 1987 champion bucking bull' },
  { n: '42', l: 'riders in a row thrown by Bushwacker before one stayed on, in 2013' },
]

const DUST = [
  { x: 520, y: 668, r: 26, d: 0 },
  { x: 584, y: 676, r: 34, d: -0.3 },
  { x: 640, y: 664, r: 22, d: -0.6 },
  { x: 470, y: 680, r: 18, d: -0.2 },
  { x: 690, y: 682, r: 16, d: -0.8 },
]

function Bull() {
  return (
    <svg className="ox-stance-eight-svg" viewBox="0 0 860 740" aria-hidden="true">
      <path className="ox-stance-eight-burst" d="M 430 60 L 468 250 L 640 120 L 548 300 L 800 260 L 590 380 L 820 500 L 580 470 L 660 700 L 480 540 L 400 730 L 380 540 L 180 690 L 300 480 L 40 520 L 260 390 L 50 250 L 290 300 L 220 90 L 390 260 Z" />
      <path className="ox-stance-eight-floor" d="M 40 700 L 820 700" />

      {DUST.map((c) => (
        <circle key={c.x} className="ox-stance-eight-dust" cx={c.x} cy={c.y} r={c.r} style={{ animationDelay: `${c.d}s` }} />
      ))}

      <g className="ox-stance-eight-buck">
        <g transform="translate(310 262) rotate(24)">
          <path className="ox-stance-eight-ink" d="M 44 110 C 4 132 -30 150 -58 160 L -140 172 L -142 204 L -50 196 C -6 190 44 178 80 152 Z" />
          <path className="ox-stance-eight-ink" d="M -140 172 L -142 204 L -166 202 L -164 170 Z" />
          <path className="ox-stance-eight-ink" d="M 262 170 L 312 178 L 336 240 L 348 292 L 316 298 L 304 246 L 258 204 Z" />
          <path className="ox-stance-eight-ink" d="M 348 292 L 316 298 L 312 318 L 356 310 Z" />
          <path className="ox-stance-eight-ink" d="M 8 40 C -12 4 -32 -28 -26 -60 C -22 -82 -40 -94 -56 -86 L -70 -64 C -52 -68 -44 -60 -46 -46 C -50 -14 -30 16 -8 48 Z" />
          <path className="ox-stance-eight-ink" d="M -40 -112 C -64 -108 -80 -88 -76 -62 C -60 -62 -46 -74 -40 -92 Z" />
          <path className="ox-stance-eight-hornfar" d="M 404 44 C 412 14 436 -2 470 2 C 450 14 440 30 436 56 Z" />

          <path className="ox-stance-eight-ink" d="M 6 36 C 50 6 150 10 222 12 C 240 -34 300 -44 330 -4 C 356 12 384 30 400 50 L 392 128 C 378 160 356 182 332 190 C 290 200 170 196 100 176 C 52 162 4 130 0 82 C -2 58 0 44 6 36 Z" />
          <path className="ox-stance-eight-ink" d="M 384 120 C 388 168 368 206 336 222 C 326 200 326 172 338 150 Z" />
          <path className="ox-stance-eight-ink" d="M 60 168 C 54 196 70 214 86 202 C 94 188 88 174 78 166 Z" />

          <path className="ox-stance-eight-ink" d="M 36 40 C -14 52 -56 84 -80 104 L -160 92 L -168 126 L -78 146 C -30 156 30 150 64 124 Z" />
          <path className="ox-stance-eight-ink" d="M -160 92 L -168 126 L -192 120 L -184 84 Z" />
          <path className="ox-stance-eight-ink" d="M 296 150 L 356 160 L 378 226 L 392 286 L 356 294 L 344 236 L 292 196 Z" />
          <path className="ox-stance-eight-ink" d="M 392 286 L 356 294 L 352 316 L 402 306 Z" />

          <path className="ox-stance-eight-ink" d="M 392 40 C 426 44 458 70 470 104 C 478 126 472 150 452 156 C 432 162 414 154 402 142 C 388 140 376 130 372 112 C 366 82 372 54 392 40 Z" />
          <path className="ox-stance-eight-horn" d="M 380 52 C 372 14 396 -24 440 -30 C 420 -10 412 16 414 50 Z" />

          <circle className="ox-stance-eight-cut" cx="424" cy="88" r="6" />
          <path className="ox-stance-eight-cutline" d="M 456 134 C 462 134 466 138 464 144 M 250 22 C 268 70 266 120 252 176 M 112 22 C 98 60 94 110 104 160 M 20 70 C 36 86 54 94 74 96 M 372 96 C 360 86 344 88 334 100 M 372 190 L 362 304 M -176 96 L -180 120" />
          <path className="ox-stance-eight-strap" d="M 98 16 C 86 60 84 120 98 176" />
          <path className="ox-stance-eight-snort" d="M 482 142 L 514 150 M 478 152 L 506 172 M 470 160 L 488 186" />
        </g>
      </g>

      <g className="ox-stance-eight-hat">
        <path className="ox-stance-eight-hatink" d="M 600 160 C 630 132 700 130 730 156 C 760 150 782 158 790 172 C 730 196 640 198 580 180 C 574 168 584 160 600 160 Z" />
        <path className="ox-stance-eight-hatink" d="M 622 158 C 624 118 648 104 664 112 C 682 100 706 116 708 154 Z" />
        <path className="ox-stance-eight-hatband" d="M 622 150 C 650 158 684 158 708 150" />
      </g>

      <path className="ox-stance-eight-star" d="M 96 120 l 9 26 l 28 0 l -22 17 l 8 27 l -23 -16 l -23 16 l 8 -27 l -22 -17 l 28 0 Z" />
      <path className="ox-stance-eight-star" d="M 770 580 l 7 20 l 21 0 l -17 13 l 6 20 l -17 -12 l -17 12 l 6 -20 l -17 -13 l 21 0 Z" />
    </svg>
  )
}

export default function Eight() {
  const [tenths, setTenths] = useState(80)
  const [run, setRun] = useState(0)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined
    setTenths(0)
    const id = setInterval(() => {
      setTenths((t) => (t >= 80 ? 80 : t + 1))
    }, 100)
    return () => clearInterval(id)
  }, [run])

  const done = tenths >= 80

  return (
    <div className="th-ox-stance-eight ox-stance-eight">
      <div className="ox-stance-eight-frame">
        <header className="ox-stance-eight-top">
          <p className="ox-stance-eight-banner">
            <span aria-hidden="true">★</span> Temperament of the ox <span aria-hidden="true">★</span> the bucking bull{' '}
            <span aria-hidden="true">★</span>
          </p>

          <div className="ox-stance-eight-stage">
            <motion.h1
              className="ox-stance-eight-title"
              initial={{ opacity: 0, scale: 1.12 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            >
              <span>Eight</span>
              <span>Seconds</span>
            </motion.h1>
            <motion.div
              className="ox-stance-eight-figure"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Bull />
            </motion.div>
          </div>

          <div className="ox-stance-eight-clockrow">
            <div className={`ox-stance-eight-clock${done ? ' is-done' : ''}`} role="timer" aria-label="Ride clock">
              <strong>{(tenths / 10).toFixed(1)}</strong>
              <span>{done ? 'Qualified ride' : 'Hold on'}</span>
            </div>
            <button type="button" className="ox-stance-eight-gate" onClick={() => setRun((r) => r + 1)}>
              Open the gate
            </button>
            <p className="ox-stance-eight-pitch">
              No one trains a bull to buck. It is bred into him, the way speed is bred into a racehorse, and the best
              ones are worth more than the riders who draw them.
            </p>
          </div>
        </header>

        <main>
          <section className="ox-stance-eight-rules" aria-label="The rules of bull riding">
            {RULES.map((r, i) => (
              <motion.article
                key={r.h}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                <h2>{r.h}</h2>
                <p>{r.p}</p>
              </motion.article>
            ))}
          </section>

          <section className="ox-stance-eight-score" aria-label="How a ride is scored">
            <div className="ox-stance-eight-half ox-stance-eight-halfbull">
              <strong>50</strong>
              <span>for the bull: height of the kick, speed of the spin, changes of direction</span>
            </div>
            <div className="ox-stance-eight-half">
              <strong>50</strong>
              <span>for the rider: balance, control, staying square over the shoulders</span>
            </div>
          </section>

          <section className="ox-stance-eight-card" aria-label="Bulls on the record">
            {CARD.map((c) => (
              <div key={c.n}>
                <strong>{c.n}</strong>
                <span>{c.l}</span>
              </div>
            ))}
          </section>

          <div className="ox-stance-eight-ticket">
            <div className="ox-stance-eight-stub">
              <span>Admit</span>
              <strong>ONE</strong>
            </div>
            <div className="ox-stance-eight-ticketbody">
              <span>Chute No. 5 · Grandstand</span>
              <p>SET XXXV · DESIGNED BY CLAUDE FABLE 5.2</p>
              <span>No refunds after the gate opens</span>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
