import { motion } from 'framer-motion'
import './taurus.css'

const STARS = [
  { id: 'aldebaran', x: 350, y: 412, r: 11, name: 'Aldebaran', lx: 276, ly: 404, end: true, hot: true },
  { id: 'ain', x: 392, y: 372, r: 5.5, name: 'Ain', lx: 440, ly: 318 },
  { id: 'gamma', x: 290, y: 468, r: 5, name: 'Prima Hyadum', lx: 256, ly: 520, end: true },
  { id: 'elnath', x: 374, y: 152, r: 8, name: 'Elnath', lx: 394, ly: 150 },
  { id: 'zeta', x: 250, y: 214, r: 6, name: 'Tianguan', lx: 234, ly: 212, end: true },
  { id: 'lambda', x: 476, y: 524, r: 5, name: 'λ', lx: 490, ly: 516 },
  { id: 'xi', x: 420, y: 668, r: 4.5, name: 'ξ', lx: 460, ly: 690 },
]

const LINES =
  'M 290 468 L 350 412 L 250 214 M 290 468 L 392 372 L 374 152 M 290 468 L 476 524 L 420 668'

const PLEIADES = [
  [598, 318, 4.5], [612, 326, 3], [588, 330, 3], [604, 338, 3.5], [620, 314, 2.5], [592, 312, 2.5], [614, 342, 2.5],
]

const FIELD = [
  [120, 360, 2], [160, 520, 1.5], [230, 610, 2], [330, 110, 1.5], [450, 90, 2], [560, 120, 1.5], [640, 190, 2],
  [690, 250, 1.5], [660, 620, 2], [560, 680, 1.5], [320, 690, 2], [140, 280, 1.5], [500, 200, 1.5], [90, 440, 1.5],
  [250, 330, 1.5], [700, 640, 2], [400, 720, 1.5],
]

const RINGS = [120, 240, 360]
const SPOKES = [0, 30, 60, 90, 120, 150]
const TICKS = Array.from({ length: 72 }, (_, i) => i * 5)

const TABLE = [
  { g: 'α', n: 'Aldebaran', m: '0.9', d: '65', note: 'The follower. An orange giant, and the bull’s eye.' },
  { g: 'β', n: 'Elnath', m: '1.7', d: '134', note: 'The butting one. Tip of the northern horn.' },
  { g: 'η', n: 'Alcyone', m: '2.9', d: '440', note: 'Brightest of the Pleiades, on the shoulder.' },
  { g: 'ζ', n: 'Tianguan', m: '3.0', d: '440', note: 'Tip of the southern horn. The Crab Nebula lies beside it.' },
  { g: 'ε', n: 'Ain', m: '3.5', d: '147', note: 'The eye, in Arabic. The other one.' },
  { g: 'γ', n: 'Prima Hyadum', m: '3.7', d: '154', note: 'First of the Hyades, at the muzzle.' },
]

function Chart() {
  return (
    <svg className="ox-stance-taurus-svg" viewBox="0 0 800 800" aria-hidden="true">
      <defs>
        <path id="ox-stance-taurus-rim" d="M 400 400 m -352 0 a 352 352 0 1 1 704 0 a 352 352 0 1 1 -704 0" />
        <clipPath id="ox-stance-taurus-disc">
          <circle cx="400" cy="400" r="330" />
        </clipPath>
        <linearGradient id="ox-stance-taurus-dissolve" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#1b3f72" stopOpacity="0" />
          <stop offset="0.75" stopColor="#173763" />
          <stop offset="1" stopColor="#173763" />
        </linearGradient>
        <radialGradient id="ox-stance-taurus-glow" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor="#24518a" />
          <stop offset="1" stopColor="#122c52" />
        </radialGradient>
      </defs>

      <circle className="ox-stance-taurus-plate" cx="400" cy="400" r="392" />
      <circle cx="400" cy="400" r="330" fill="url(#ox-stance-taurus-glow)" />

      <g className="ox-stance-taurus-ring">
        {TICKS.map((a) => (
          <path key={a} className="ox-stance-taurus-tick" d={a % 15 === 0 ? 'M 400 12 L 400 27' : 'M 400 19 L 400 27'} transform={`rotate(${a} 400 400)`} />
        ))}
      </g>

      <text className="ox-stance-taurus-rimtext">
        <textPath href="#ox-stance-taurus-rim" startOffset="2%">
          SET XXXV · DESIGNED BY CLAUDE FABLE 5.2 ✦ TAURUS ✦ THE BULL OF HEAVEN ✦ GU.AN.NA ✦ RIGHT ASCENSION 4h ✦ DECLINATION +15° ✦
        </textPath>
      </text>

      <g clipPath="url(#ox-stance-taurus-disc)">
        {RINGS.map((r) => (
          <circle key={r} className="ox-stance-taurus-grid" cx="400" cy="400" r={r} />
        ))}
        {SPOKES.map((a) => (
          <path key={a} className="ox-stance-taurus-grid" d="M 70 400 L 730 400" transform={`rotate(${a} 400 400)`} />
        ))}
        <path className="ox-stance-taurus-ecliptic" d="M 60 330 C 260 250 520 250 760 360" />

        {FIELD.map(([x, y, r], i) => (
          <circle key={`${x}-${y}`} className="ox-stance-taurus-faint" cx={x} cy={y} r={r} style={{ animationDelay: `${(i % 7) * -0.6}s` }} />
        ))}

        <g className="ox-stance-taurus-bull">
          <path className="ox-stance-taurus-legfar" d="M 500 548 C 508 584 516 612 512 640 L 590 690 L 606 664 L 556 630 C 562 600 560 572 552 546 Z" />
          <path className="ox-stance-taurus-hoof" d="M 606 664 L 590 690 L 566 676 L 582 650 Z" />
          <path className="ox-stance-taurus-hornfar" d="M 398 350 C 366 306 346 236 374 152 C 382 232 402 296 430 340 Z" />

          <path className="ox-stance-taurus-hide" d="M 760 330 C 680 282 560 262 486 290 C 440 306 408 330 392 352 L 414 458 C 424 500 436 536 460 560 C 480 580 530 584 566 572 C 630 574 700 562 760 540 Z" />
          <path className="ox-stance-taurus-shade" d="M 414 458 C 424 500 436 536 460 560 C 480 580 530 584 566 572 C 520 560 476 520 452 450 Z" />
          <path className="ox-stance-taurus-hatch" d="M 440 334 C 434 370 438 406 450 440 M 548 300 C 516 340 510 400 528 460 M 432 480 C 440 500 446 516 456 530 M 448 496 C 456 514 464 528 476 540" />

          <path className="ox-stance-taurus-hide" d="M 436 520 C 412 548 382 566 360 580 C 350 594 356 608 368 610 L 390 674 L 444 664 L 422 606 C 452 594 488 572 508 548 Z" />
          <path className="ox-stance-taurus-hoof" d="M 390 674 L 444 664 L 450 690 L 398 700 Z" />
          <path className="ox-stance-taurus-cleft" d="M 420 670 L 424 694" />

          <path className="ox-stance-taurus-ear" d="M 404 372 C 426 350 458 350 474 364 C 458 384 430 390 408 386 Z" />
          <path className="ox-stance-taurus-hide" d="M 396 346 C 360 356 316 388 286 426 C 270 446 262 470 272 490 C 282 506 312 508 334 498 C 356 500 392 486 414 458 C 428 420 420 374 396 346 Z" />
          <path className="ox-stance-taurus-muzzle" d="M 282 432 C 268 452 262 472 272 490 C 282 506 312 508 334 498 C 326 470 306 444 282 432 Z" />
          <path className="ox-stance-taurus-nostril" d="M 280 462 C 286 458 292 462 290 470" />
          <path className="ox-stance-taurus-hatch" d="M 300 496 C 314 492 326 488 336 480 M 372 452 C 388 446 400 436 406 420" />
          <path className="ox-stance-taurus-horn" d="M 372 370 C 318 352 262 300 250 214 C 280 282 332 322 394 342 Z" />
          <path className="ox-stance-taurus-brow" d="M 326 402 C 340 392 360 392 374 402" />
        </g>

        <rect className="ox-stance-taurus-fade" x="620" y="240" width="160" height="360" fill="url(#ox-stance-taurus-dissolve)" />

        <path className="ox-stance-taurus-lines" d={LINES} pathLength="1" />

        {PLEIADES.map(([x, y, r], i) => (
          <circle key={`${x}-${y}`} className="ox-stance-taurus-star" cx={x} cy={y} r={r} style={{ animationDelay: `${i * -0.4}s` }} />
        ))}
        <circle className="ox-stance-taurus-halo" cx="602" cy="328" r="30" />
        <text className="ox-stance-taurus-label" x="560" y="286">Pleiades</text>

        {STARS.map((s, i) => (
          <g key={s.id}>
            <path
              className={`ox-stance-taurus-star${s.hot ? ' is-hot' : ''}`}
              style={{ animationDelay: `${i * -0.7}s` }}
              d={`M ${s.x} ${s.y - s.r * 2} L ${s.x + s.r * 0.45} ${s.y - s.r * 0.45} L ${s.x + s.r * 2} ${s.y} L ${s.x + s.r * 0.45} ${s.y + s.r * 0.45} L ${s.x} ${s.y + s.r * 2} L ${s.x - s.r * 0.45} ${s.y + s.r * 0.45} L ${s.x - s.r * 2} ${s.y} L ${s.x - s.r * 0.45} ${s.y - s.r * 0.45} Z`}
            />
            <text className="ox-stance-taurus-label" x={s.lx} y={s.ly} textAnchor={s.end ? 'end' : 'start'}>{s.name}</text>
          </g>
        ))}
        <text className="ox-stance-taurus-label ox-stance-taurus-ecl" x="96" y="304" transform="rotate(-20 96 304)">ecliptic</text>
      </g>
    </svg>
  )
}

export default function Taurus() {
  return (
    <div className="th-ox-stance-taurus ox-stance-taurus">
      <div className="ox-stance-taurus-layout">
        <motion.div
          className="ox-stance-taurus-chart"
          initial={{ opacity: 0, rotate: -8, scale: 0.94 }}
          animate={{ opacity: 1, rotate: 0, scale: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <Chart />
        </motion.div>

        <main className="ox-stance-taurus-text">
          <p className="ox-stance-taurus-kicker">Mythology · Plate IV · Tauri constellatio</p>
          <h1 className="ox-stance-taurus-title">
            Taurus<span>the bull that never finishes its charge</span>
          </h1>

          <p className="ox-stance-taurus-lede">
            Look south on a winter evening. A sharp V of stars, one of them orange, hangs above Orion. People have
            called it a bull&rsquo;s face for longer than they have written anything down.
          </p>

          <section className="ox-stance-taurus-myths">
            <article>
              <h2>
                <span>i.</span> Sumer
              </h2>
              <p>
                The astronomers of Mesopotamia wrote it <span lang="sux">GU.AN.NA</span>, the Bull of Heaven. In the
                Epic of Gilgamesh the goddess Ishtar, refused by the king, sends the bull down to trample Uruk.
                Gilgamesh and Enkidu kill it, and Enkidu dies for the offence.
              </p>
            </article>
            <article>
              <h2>
                <span>ii.</span> The calendar
              </h2>
              <p>
                From about 4000 to 1700 BCE the sun stood in these stars at the spring equinox. The bull opened the
                year, and its return told the first farmers when to yoke the ones on earth.
              </p>
            </article>
            <article>
              <h2>
                <span>iii.</span> Greece
              </h2>
              <p>
                Zeus becomes a white bull, kneels for the princess Europa, and swims with her to Crete. The Greeks
                said this is why the sky shows only the front half. The rest is still under the sea.
              </p>
            </article>
          </section>

          <section className="ox-stance-taurus-tablewrap">
            <h2>The stars of the bull</h2>
            <table className="ox-stance-taurus-table">
              <thead>
                <tr>
                  <th scope="col">Star</th>
                  <th scope="col">Mag.</th>
                  <th scope="col">Light-years</th>
                  <th scope="col">Where on the bull</th>
                </tr>
              </thead>
              <tbody>
                {TABLE.map((r) => (
                  <tr key={r.n}>
                    <th scope="row">
                      <i>{r.g}</i> {r.n}
                    </th>
                    <td>{r.m}</td>
                    <td>{r.d}</td>
                    <td>{r.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>

          <p className="ox-stance-taurus-coda">
            In 1054 a new star blazed beside the southern horn, bright enough to see by day. Chinese astronomers
            recorded it. Its wreckage, the Crab Nebula, is still spreading there.
          </p>
        </main>
      </div>
    </div>
  )
}
