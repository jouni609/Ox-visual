import { motion } from 'framer-motion'
import './fold.css'

const LOCKS = [
  { x: 366, l: 118, w: 26, c: 'b' },
  { x: 394, l: 138, w: 30, c: 'a' },
  { x: 422, l: 186, w: 30, c: 'c' },
  { x: 450, l: 204, w: 34, c: 'a' },
  { x: 478, l: 188, w: 30, c: 'b' },
  { x: 506, l: 138, w: 30, c: 'c' },
  { x: 534, l: 118, w: 26, c: 'a' },
]

const SKIRT = [236, 268, 300, 332, 364, 396, 428, 460, 492, 524, 556, 588, 620, 652]

const COATS = [
  { n: 'Red', c: '#b5531f' },
  { n: 'Yellow', c: '#d9a857' },
  { n: 'Dun', c: '#a68a6d' },
  { n: 'Black', c: '#2a2224' },
  { n: 'White', c: '#f0e9da' },
  { n: 'Brindle', c: '#7a4a26' },
  { n: 'Silver', c: '#c9c7c4' },
]

const HEATHER = [30, 110, 180, 250, 640, 710, 790, 860]

function lock({ x, l, w }) {
  const t = 214
  return `M ${x - w / 2} ${t} C ${x - w} ${t + l * 0.4} ${x - w * 0.7} ${t + l * 0.8} ${x + 4} ${t + l} C ${x + w * 0.8} ${t + l * 0.75} ${x + w} ${t + l * 0.4} ${x + w / 2} ${t} Z`
}

function Highlander() {
  return (
    <svg className="ox-stance-fold-svg" viewBox="0 0 900 720" aria-hidden="true">
      <path className="ox-stance-fold-leg" d="M 322 560 L 328 668 L 398 668 L 402 560 Z" />
      <path className="ox-stance-fold-leg" d="M 498 560 L 502 668 L 572 668 L 578 560 Z" />
      <path className="ox-stance-fold-hoof" d="M 324 660 L 402 660 L 406 694 L 366 694 L 363 676 L 360 694 L 320 694 Z" />
      <path className="ox-stance-fold-hoof" d="M 498 660 L 576 660 L 580 694 L 540 694 L 537 676 L 534 694 L 494 694 Z" />

      <path className="ox-stance-fold-body" d="M 220 590 C 186 470 226 330 330 288 C 400 262 500 262 570 288 C 674 330 714 470 680 590 Z" />
      {SKIRT.map((x, i) => (
        <path
          key={x}
          className={`ox-stance-fold-skirt ox-stance-fold-sway${i % 3}`}
          d={`M ${x - 22} 560 C ${x - 24} 600 ${x - 12} 628 ${x + 2} 650 C ${x + 14} 626 ${x + 24} 600 ${x + 22} 560 Z`}
        />
      ))}
      <path className="ox-stance-fold-strand" d="M 262 420 C 256 470 262 520 276 560 M 300 380 C 290 440 296 510 312 566 M 638 420 C 644 470 638 520 624 560 M 600 380 C 610 440 604 510 588 566 M 350 560 C 356 590 352 616 346 636 M 550 560 C 544 590 548 616 554 636" />

      <path className="ox-stance-fold-horn" d="M 378 262 C 306 246 214 262 152 208 C 120 178 108 138 116 100 C 140 156 184 196 244 212 C 304 226 352 220 384 232 Z" />
      <path className="ox-stance-fold-horn" d="M 522 262 C 594 246 686 262 748 208 C 780 178 792 138 784 100 C 760 156 716 196 656 212 C 596 226 548 220 516 232 Z" />
      <path className="ox-stance-fold-tip" d="M 152 208 C 120 178 108 138 116 100 C 128 132 148 158 176 180 Z" />
      <path className="ox-stance-fold-tip" d="M 748 208 C 780 178 792 138 784 100 C 772 132 752 158 724 180 Z" />

      <g className="ox-stance-fold-ear ox-stance-fold-earl">
        <path className="ox-stance-fold-head" d="M 352 300 C 312 284 264 290 232 314 C 264 338 316 340 354 328 Z" />
        <path className="ox-stance-fold-earin" d="M 336 306 C 308 298 276 302 256 314 C 280 324 312 324 338 318 Z" />
        <path className="ox-stance-fold-lockb" d="M 250 318 L 256 352 L 270 326 L 280 362 L 294 330 L 306 364 L 318 330 Z" />
      </g>
      <g className="ox-stance-fold-ear ox-stance-fold-earr">
        <path className="ox-stance-fold-head" d="M 548 300 C 588 284 636 290 668 314 C 636 338 584 340 546 328 Z" />
        <path className="ox-stance-fold-earin" d="M 564 306 C 592 298 624 302 644 314 C 620 324 588 324 562 318 Z" />
        <path className="ox-stance-fold-lockb" d="M 650 318 L 644 352 L 630 326 L 620 362 L 606 330 L 594 364 L 582 330 Z" />
      </g>

      <path className="ox-stance-fold-head" d="M 370 240 C 400 204 500 204 530 240 C 562 272 578 332 566 392 C 560 442 536 500 520 522 C 490 548 410 548 380 522 C 364 500 340 442 334 392 C 322 332 338 272 370 240 Z" />
      <path className="ox-stance-fold-lockb" d="M 340 330 C 326 372 330 420 346 458 C 354 420 356 376 360 336 Z" />
      <path className="ox-stance-fold-lockb" d="M 560 330 C 574 372 570 420 554 458 C 546 420 544 376 540 336 Z" />
      <path className="ox-stance-fold-lockc" d="M 352 400 C 346 440 354 478 372 506 C 372 470 370 434 372 404 Z" />
      <path className="ox-stance-fold-lockc" d="M 548 400 C 554 440 546 478 528 506 C 528 470 530 434 528 404 Z" />

      <ellipse className="ox-stance-fold-socket" cx="394" cy="374" rx="20" ry="15" />
      <ellipse className="ox-stance-fold-socket" cx="506" cy="374" rx="20" ry="15" />
      <g className="ox-stance-fold-eyes">
        <circle className="ox-stance-fold-eye" cx="394" cy="376" r="10" />
        <circle className="ox-stance-fold-eye" cx="506" cy="376" r="10" />
        <circle className="ox-stance-fold-glint" cx="390" cy="372" r="3" />
        <circle className="ox-stance-fold-glint" cx="502" cy="372" r="3" />
      </g>

      <path className="ox-stance-fold-muzzle" d="M 378 470 C 384 434 516 434 522 470 C 532 510 508 548 450 550 C 392 548 368 510 378 470 Z" />
      <path className="ox-stance-fold-nostril" d="M 404 476 C 416 466 432 472 430 488 C 426 500 410 500 404 490 Z" />
      <path className="ox-stance-fold-nostril" d="M 496 476 C 484 466 468 472 470 488 C 474 500 490 500 496 490 Z" />
      <path className="ox-stance-fold-mouth" d="M 450 496 L 450 520 M 414 524 C 436 536 464 536 486 524" />

      {LOCKS.map((k, i) => (
        <path key={k.x} className={`ox-stance-fold-lock${k.c} ox-stance-fold-sway${i % 3}`} d={lock(k)} />
      ))}
      <path className="ox-stance-fold-crown" d="M 372 238 C 392 196 424 188 440 206 C 452 184 488 188 500 208 C 520 196 534 216 530 240 C 500 222 400 222 372 238 Z" />
    </svg>
  )
}

function HornCard({ bull }) {
  return (
    <svg viewBox="0 0 240 120" aria-hidden="true" className="ox-stance-fold-mini">
      <path className="ox-stance-fold-minihead" d="M 96 62 C 104 46 136 46 144 62 C 150 84 140 108 120 110 C 100 108 90 84 96 62 Z" />
      {bull ? (
        <>
          <path className="ox-stance-fold-minihorn" d="M 100 62 C 70 54 36 62 20 84 C 44 76 72 76 98 76 Z" />
          <path className="ox-stance-fold-minihorn" d="M 140 62 C 170 54 204 62 220 84 C 196 76 168 76 142 76 Z" />
        </>
      ) : (
        <>
          <path className="ox-stance-fold-minihorn" d="M 100 64 C 70 60 40 48 30 10 C 50 36 76 48 100 52 Z" />
          <path className="ox-stance-fold-minihorn" d="M 140 64 C 170 60 200 48 210 10 C 190 36 164 48 140 52 Z" />
        </>
      )}
    </svg>
  )
}

export default function Fold() {
  return (
    <div className="th-ox-stance-fold ox-stance-fold">
      <header className="ox-stance-fold-hero">
        <svg className="ox-stance-fold-hills" viewBox="0 0 1440 400" preserveAspectRatio="none" aria-hidden="true">
          <path className="ox-stance-fold-hill1" d="M 0 210 C 180 120 300 150 460 190 C 620 90 800 70 960 170 C 1120 110 1300 130 1440 200 L 1440 400 L 0 400 Z" />
          <path className="ox-stance-fold-hill2" d="M 0 280 C 220 210 420 250 620 270 C 820 210 1100 220 1440 290 L 1440 400 L 0 400 Z" />
          <path className="ox-stance-fold-hill3" d="M 0 340 C 300 300 700 320 1440 330 L 1440 400 L 0 400 Z" />
        </svg>
        <div className="ox-stance-fold-mist" aria-hidden="true" />

        <motion.div
          className="ox-stance-fold-heading"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="ox-stance-fold-kicker">
            Breed · <span lang="gd">Bò Ghàidhealach</span> · Highland cattle
          </p>
          <h1 className="ox-stance-fold-title">Fold</h1>
        </motion.div>

        <motion.div
          className="ox-stance-fold-figure"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
        >
          <Highlander />
          <svg className="ox-stance-fold-heather" viewBox="0 0 900 90" preserveAspectRatio="none" aria-hidden="true">
            {HEATHER.map((x, i) => (
              <g key={x} className={`ox-stance-fold-sway${i % 3}`}>
                <path className="ox-stance-fold-stem" d={`M ${x} 90 C ${x - 4} 60 ${x - 10} 40 ${x - 14} 14 M ${x + 6} 90 C ${x + 8} 62 ${x + 12} 44 ${x + 18} 22 M ${x - 10} 90 C ${x - 18} 70 ${x - 26} 56 ${x - 34} 40`} />
                <path className="ox-stance-fold-bloom" d={`M ${x - 14} 14 l -5 10 l 9 2 Z M ${x + 18} 22 l 6 9 l -9 3 Z M ${x - 34} 40 l -4 10 l 9 0 Z M ${x - 8} 40 l -6 8 l 9 3 Z M ${x + 12} 46 l 6 8 l -9 3 Z`} />
              </g>
            ))}
          </svg>
        </motion.div>

        <p className="ox-stance-fold-lede">
          Other cattle come in herds. A group of Highlanders is a <em>fold</em>, named for the open stone pens that
          sheltered them through the winter night. They needed little else.
        </p>
      </header>

      <div className="ox-stance-fold-tartan" aria-hidden="true" />

      <main className="ox-stance-fold-main">
        <motion.section
          className="ox-stance-fold-card ox-stance-fold-wide"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
        >
          <h2>Two coats and a fringe</h2>
          <p>
            The outer coat is long, coarse and oiled, and sheds rain like thatch. Under it lies a second coat, short
            and soft as down. With both, a Highlander carries less back-fat than any other beef breed and still grazes
            through a blizzard. The fringe over the eyes is the <span lang="gd">dossan</span>. It keeps off the sleet
            in January and the flies in July.
          </p>
          <svg className="ox-stance-fold-layers" viewBox="0 0 600 150" aria-hidden="true">
            <path className="ox-stance-fold-skinline" d="M 0 140 L 600 140" />
            <path className="ox-stance-fold-down" d="M 20 140 q 6 -30 14 0 M 50 140 q 8 -34 16 0 M 84 140 q 6 -28 14 0 M 116 140 q 8 -34 16 0 M 150 140 q 6 -30 14 0 M 182 140 q 8 -34 16 0 M 216 140 q 6 -28 14 0 M 248 140 q 8 -34 16 0 M 282 140 q 6 -30 14 0 M 314 140 q 8 -34 16 0 M 348 140 q 6 -28 14 0 M 380 140 q 8 -34 16 0 M 414 140 q 6 -30 14 0 M 446 140 q 8 -34 16 0 M 480 140 q 6 -28 14 0 M 512 140 q 8 -34 16 0 M 546 140 q 6 -30 14 0" />
            <path className="ox-stance-fold-guard" d="M 30 140 C 40 80 80 40 130 26 M 100 140 C 112 84 150 46 204 34 M 170 140 C 180 80 222 40 276 26 M 240 140 C 252 84 292 46 346 34 M 310 140 C 320 80 362 40 416 26 M 380 140 C 392 84 432 46 486 34 M 450 140 C 460 80 502 40 556 26" />
            <path className="ox-stance-fold-rain" d="M 90 0 l -10 22 M 230 4 l -10 22 M 370 0 l -10 22 M 500 6 l -10 22" />
          </svg>
        </motion.section>

        <motion.section
          className="ox-stance-fold-card"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, delay: 0.05 }}
        >
          <h2>Read the horns</h2>
          <div className="ox-stance-fold-horns">
            <figure>
              <HornCard bull />
              <figcaption>
                <strong>Bull</strong> Thick, level, pushed forward
              </figcaption>
            </figure>
            <figure>
              <HornCard />
              <figcaption>
                <strong>Cow</strong> Finer, longer, swept up and out
              </figcaption>
            </figure>
          </div>
        </motion.section>

        <motion.section
          className="ox-stance-fold-card"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h2>Seven colours on the hill</h2>
          <ul className="ox-stance-fold-coats">
            {COATS.map((c) => (
              <li key={c.n}>
                <i style={{ background: c.c }} />
                {c.n}
              </li>
            ))}
          </ul>
          <p>
            The island cattle, the Kyloes, were mostly small and black. Red came to rule the breed after the herd
            book opened in 1885. Queen Victoria, it is said, preferred the red ones, and breeders obliged.
          </p>
        </motion.section>

        <aside className="ox-stance-fold-label">
          <span className="ox-stance-fold-labelknot" aria-hidden="true" />
          <p className="ox-stance-fold-labelsmall">Pure new wool of the hill</p>
          <p className="ox-stance-fold-sig">SET XXXV · DESIGNED BY CLAUDE FABLE 5.2</p>
          <p className="ox-stance-fold-labelsmall">Do not shear · brush with the wind</p>
        </aside>
      </main>
    </div>
  )
}
