import { useState } from 'react'
import { motion } from 'framer-motion'
import './cud.css'

const CHAMBERS = [
  {
    id: 'rumen',
    name: 'Rumen',
    alias: 'the vat',
    body: 'Holds well over a hundred litres in a grown ox and is never empty. Microbes by the billion ferment the cellulose no mammal can break down alone. The ox lives on what they leave behind.',
  },
  {
    id: 'reticulum',
    name: 'Reticulum',
    alias: 'the honeycomb',
    body: 'A pouch lined with six-sided cells. It sorts the mash by size, traps the stones and wire an ox swallows without noticing, and presses coarse stems into a bolus to send back up the throat.',
  },
  {
    id: 'omasum',
    name: 'Omasum',
    alias: 'the book',
    body: 'Dozens of muscular leaves packed like pages. Butchers call it the bible. The leaves wring the water out of the mash and grind whatever the second chewing missed.',
  },
  {
    id: 'abomasum',
    name: 'Abomasum',
    alias: 'the true stomach',
    body: 'The only chamber that works like yours, with acid and enzymes. Here the ox finally digests the grass, and with it the microbes that grew fat on the grass first.',
  },
]

const STEPS = [
  {
    t: 'Tear',
    d: 'An ox has no upper front teeth. It wraps its tongue round the grass, pins it against a hard gum pad and pulls. The mouthful goes down barely chewed.',
  },
  {
    t: 'Steep',
    d: 'In the rumen the grass floats in a warm, airless broth and begins to ferment. The walls churn it about once a minute, all day and all night.',
  },
  {
    t: 'Return',
    d: 'Later, at rest, a wad of the coarsest stems rises back to the mouth. This is the cud. It is chewed forty to seventy times and swallowed again.',
  },
  {
    t: 'Digest',
    d: 'Fine enough at last, the mash slips through the book into the true stomach, and onward through some forty metres of gut.',
  },
]

const FIGURES = [
  { n: '8 h', l: 'of every day spent chewing cud' },
  { n: '100 L', l: 'of saliva made daily, and more' },
  { n: '1 min', l: 'between one rumen contraction and the next' },
  { n: '4', l: 'chambers, and still only one stomach' },
]

const BOLUS =
  'M 128 428 C 165 385 215 310 290 245 C 325 222 365 222 395 240 C 450 200 560 195 590 235 C 610 275 540 300 470 285 C 430 276 405 262 384 276 C 372 262 380 244 395 240 C 365 222 325 222 290 245 C 215 310 165 385 128 428 C 165 385 215 310 290 245 C 325 222 365 222 395 240 C 392 262 384 270 384 276 C 398 300 420 310 438 312 C 470 330 520 334 562 328 C 600 322 630 310 648 296'

const COMB = [
  [366, 262], [384, 262], [357, 277], [375, 277], [393, 277], [366, 292], [384, 292],
]

const TUFTS = [40, 92, 150, 232, 410, 470, 540, 720, 770]

function Cow({ active }) {
  const on = (i) => (active === i ? ' is-on' : '')
  return (
    <svg className="ox-stance-cud-svg" viewBox="70 66 664 430" aria-hidden="true">
      <defs>
        <clipPath id="ox-stance-cud-body">
          <path d="M 300 168 C 360 150 470 152 560 160 C 610 162 648 172 660 200 C 672 235 668 275 650 305 L 640 322 C 590 356 450 362 340 334 C 310 338 285 334 270 318 C 250 345 225 372 205 388 L 160 318 C 190 250 240 185 300 168 Z" />
        </clipPath>
      </defs>

      <path className="ox-stance-cud-ground" d="M 20 446 C 200 438 600 438 780 446 L 780 470 C 600 462 200 462 20 470 Z" />

      <path className="ox-stance-cud-far" d="M 322 300 L 334 388 C 330 410 336 426 334 440 L 362 440 C 358 424 362 404 364 388 L 372 304 Z" />
      <path className="ox-stance-cud-far" d="M 556 300 C 566 340 592 362 588 388 L 580 440 L 608 440 L 618 390 C 626 362 628 322 622 290 Z" />
      <path className="ox-stance-cud-hoof" d="M 332 428 L 364 428 L 366 444 L 330 444 Z" />
      <path className="ox-stance-cud-hoof" d="M 578 428 L 610 428 L 612 444 L 576 444 Z" />

      <g className="ox-stance-cud-tail">
        <path className="ox-stance-cud-tailline" d="M 656 192 C 690 214 694 296 684 352" />
        <path className="ox-stance-cud-tuft" d="M 676 346 C 670 372 676 396 688 408 C 698 392 700 368 692 346 Z" />
      </g>

      <path className="ox-stance-cud-coat" d="M 300 168 C 360 150 470 152 560 160 C 610 162 648 172 660 200 C 672 235 668 275 650 305 L 640 322 C 590 356 450 362 340 334 C 310 338 285 334 270 318 C 250 345 225 372 205 388 L 160 318 C 190 250 240 185 300 168 Z" />

      <g clipPath="url(#ox-stance-cud-body)">
        <path className="ox-stance-cud-patch" d="M 232 232 C 262 196 316 188 330 214 C 340 246 306 262 300 296 C 282 318 248 316 236 294 C 214 280 214 252 232 232 Z" />
        <path className="ox-stance-cud-patch" d="M 628 150 C 660 160 684 196 676 236 C 664 262 640 252 632 226 C 612 208 608 172 628 150 Z" />

        <path className="ox-stance-cud-cavity" d="M 348 204 C 420 176 580 178 636 208 C 652 250 640 298 612 326 C 540 350 420 352 352 322 C 336 282 336 238 348 204 Z" />

        <path className="ox-stance-cud-gullet" d="M 200 372 C 232 320 262 270 300 244 C 332 224 366 224 396 240" />
        <path className="ox-stance-cud-gut" d="M 566 330 C 600 328 622 316 632 298 C 640 282 628 268 616 276 C 606 284 612 298 624 300" />

        <g className={`ox-stance-cud-organ ox-stance-cud-o1${on(0)}`}>
          <path d="M 412 240 C 420 198 520 186 572 202 C 616 216 624 268 594 290 C 556 312 474 304 440 286 C 416 274 406 258 412 240 Z" />
          <path className="ox-stance-cud-fold" d="M 440 222 C 480 240 540 238 590 222 M 432 264 C 480 280 550 278 600 262" />
        </g>
        <g className={`ox-stance-cud-organ ox-stance-cud-o2${on(1)}`}>
          <circle cx="378" cy="277" r="28" />
          {COMB.map(([x, y]) => (
            <path key={`${x}-${y}`} className="ox-stance-cud-fold" d={`M ${x} ${y - 8} l 7 4 v 8 l -7 4 l -7 -4 v -8 Z`} />
          ))}
        </g>
        <g className={`ox-stance-cud-organ ox-stance-cud-o3${on(2)}`}>
          <circle cx="438" cy="314" r="21" />
          <path className="ox-stance-cud-fold" d="M 424 302 C 432 310 432 320 426 328 M 434 296 C 442 308 442 322 436 332 M 446 298 C 452 308 452 320 448 330" />
        </g>
        <g className={`ox-stance-cud-organ ox-stance-cud-o4${on(3)}`}>
          <path d="M 462 318 C 490 304 540 308 566 318 C 580 326 576 342 560 346 C 530 352 490 350 468 342 C 456 336 454 324 462 318 Z" />
          <path className="ox-stance-cud-fold" d="M 480 322 C 486 330 486 338 482 344 M 508 318 C 514 328 514 338 510 346 M 538 318 C 544 328 544 338 540 346" />
        </g>

        <path className="ox-stance-cud-route" d={BOLUS} />
        <circle className="ox-stance-cud-bolus" r="8" />
      </g>

      <path className="ox-stance-cud-outline" d="M 300 168 C 360 150 470 152 560 160 C 610 162 648 172 660 200 C 672 235 668 275 650 305 L 640 322 C 590 356 450 362 340 334 C 310 338 285 334 270 318 C 250 345 225 372 205 388 L 160 318 C 190 250 240 185 300 168 Z" />

      <path className="ox-stance-cud-coat ox-stance-cud-inked" d="M 276 296 L 284 384 C 280 404 286 424 282 440 L 314 440 C 310 422 314 402 318 384 L 332 318 C 318 328 296 320 276 296 Z" />
      <path className="ox-stance-cud-coat ox-stance-cud-inked" d="M 598 304 C 606 344 634 362 630 388 L 622 440 L 652 440 L 662 390 C 672 360 672 318 660 282 C 648 312 624 322 598 304 Z" />
      <path className="ox-stance-cud-hoof" d="M 280 428 L 316 428 L 318 444 L 278 444 Z" />
      <path className="ox-stance-cud-hoof" d="M 620 428 L 654 428 L 656 444 L 618 444 Z" />
      <path className="ox-stance-cud-cleft" d="M 298 430 L 298 444 M 637 430 L 637 444" />

      <g className="ox-stance-cud-head">
        <path className="ox-stance-cud-horn" d="M 176 304 C 172 276 152 262 130 268 C 146 274 156 290 162 314 Z" />
        <path className="ox-stance-cud-coat ox-stance-cud-inked" d="M 182 320 C 198 298 226 294 242 304 C 230 324 208 334 186 334 Z" />
        <path className="ox-stance-cud-coat ox-stance-cud-inked" d="M 158 310 C 140 340 118 375 104 404 C 96 420 102 438 122 440 C 138 442 150 434 158 422 C 178 412 202 400 214 382 C 220 350 196 316 158 310 Z" />
        <path className="ox-stance-cud-patch" d="M 160 316 C 146 338 134 360 128 378 C 150 378 172 362 178 340 C 180 328 172 318 160 316 Z" />
        <path className="ox-stance-cud-muzzle" d="M 110 396 C 98 414 100 438 122 440 C 138 442 150 434 158 422 C 148 404 128 394 110 396 Z" />
        <path className="ox-stance-cud-horn" d="M 164 312 C 152 286 130 276 108 286 C 126 290 140 302 152 322 Z" />
        <circle className="ox-stance-cud-eye" cx="164" cy="352" r="6" />
        <path className="ox-stance-cud-cleft" d="M 112 420 C 114 416 118 416 120 420 M 126 438 C 138 436 148 430 154 422" />
        <path className="ox-stance-cud-blade" d="M 118 440 C 110 452 100 456 92 452 M 124 441 C 122 454 114 462 106 462" />
      </g>

      {TUFTS.map((x, i) => (
        <path
          key={x}
          className="ox-stance-cud-grass"
          style={{ animationDelay: `${i * -0.7}s` }}
          d={`M ${x} 452 l -8 -22 M ${x + 4} 452 l 0 -28 M ${x + 8} 452 l 9 -20`}
        />
      ))}

      <g className="ox-stance-cud-pins">
        <path d="M 520 196 L 520 96 L 600 96" />
        <path d="M 360 268 L 250 120 L 220 120" />
        <path d="M 432 330 L 400 474 L 372 474" />
        <path d="M 540 340 L 580 474 L 610 474" />
        <circle cx="520" cy="196" r="5" />
        <circle cx="360" cy="268" r="5" />
        <circle cx="432" cy="330" r="5" />
        <circle cx="540" cy="340" r="5" />
      </g>
      <g className="ox-stance-cud-tags">
        <g className={`ox-stance-cud-tag ox-stance-cud-t1${on(0)}`}>
          <circle cx="622" cy="96" r="20" />
          <text x="622" y="104">1</text>
        </g>
        <g className={`ox-stance-cud-tag ox-stance-cud-t2${on(1)}`}>
          <circle cx="198" cy="120" r="20" />
          <text x="198" y="128">2</text>
        </g>
        <g className={`ox-stance-cud-tag ox-stance-cud-t3${on(2)}`}>
          <circle cx="350" cy="474" r="20" />
          <text x="350" y="482">3</text>
        </g>
        <g className={`ox-stance-cud-tag ox-stance-cud-t4${on(3)}`}>
          <circle cx="632" cy="474" r="20" />
          <text x="632" y="482">4</text>
        </g>
      </g>
    </svg>
  )
}

export default function Cud() {
  const [active, setActive] = useState(0)
  const current = CHAMBERS[active]

  return (
    <div className="th-ox-stance-cud ox-stance-cud">
      <div className="ox-stance-cud-cord" aria-hidden="true" />
      <div className="ox-stance-cud-rod" aria-hidden="true" />

      <main className="ox-stance-cud-sheet">
        <header className="ox-stance-cud-hero">
          <motion.div
            className="ox-stance-cud-intro"
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <p className="ox-stance-cud-kicker">Chart 01 · Physiology of the ox</p>
            <h1 className="ox-stance-cud-title">Cud</h1>
            <p className="ox-stance-cud-lede">
              Grass is mostly cellulose, and nothing with a backbone can digest cellulose. The ox does not try.
              It keeps a fermenting vat under its ribs, lets microbes do the work, and eats every mouthful twice.
            </p>

            <div className="ox-stance-cud-keys" role="group" aria-label="Choose a chamber">
              {CHAMBERS.map((c, i) => (
                <button
                  key={c.id}
                  type="button"
                  className={`ox-stance-cud-key ox-stance-cud-k${i + 1}${active === i ? ' is-on' : ''}`}
                  aria-pressed={active === i}
                  onClick={() => setActive(i)}
                >
                  <span className="ox-stance-cud-keynum">{i + 1}</span>
                  {c.name}
                </button>
              ))}
            </div>

            <div className={`ox-stance-cud-note ox-stance-cud-k${active + 1}`} aria-live="polite">
              <p className="ox-stance-cud-notehead">
                {current.name} <span>{current.alias}</span>
              </p>
              <p>{current.body}</p>
            </div>
          </motion.div>

          <motion.figure
            className="ox-stance-cud-figure"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
          >
            <Cow active={active} />
            <figcaption>Fig. 1. An ox at grass, left flank opened. The dot follows one mouthful.</figcaption>
          </motion.figure>
        </header>

        <section className="ox-stance-cud-steps" aria-label="The route of one mouthful">
          <h2>One mouthful, four moves</h2>
          <ol>
            {STEPS.map((s, i) => (
              <motion.li
                key={s.t}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
              >
                <span className="ox-stance-cud-stepnum">{String.fromCharCode(65 + i)}</span>
                <h3>{s.t}</h3>
                <p>{s.d}</p>
              </motion.li>
            ))}
          </ol>
        </section>

        <section className="ox-stance-cud-figures" aria-label="Rumination in numbers">
          {FIGURES.map((f) => (
            <div key={f.n} className="ox-stance-cud-stat">
              <strong>{f.n}</strong>
              <span>{f.l}</span>
            </div>
          ))}
        </section>

        <footer className="ox-stance-cud-imprint">
          <span className="ox-stance-cud-reg" aria-hidden="true" />
          <span className="ox-stance-cud-dots" aria-hidden="true">
            <i />
            <i />
            <i />
            <i />
          </span>
          <p>SET XXXV · DESIGNED BY CLAUDE FABLE 5.2</p>
          <span className="ox-stance-cud-plate">Classroom series · sheet 1 of 5</span>
          <span className="ox-stance-cud-reg" aria-hidden="true" />
        </footer>
      </main>

      <div className="ox-stance-cud-rod ox-stance-cud-rodlow" aria-hidden="true" />
    </div>
  )
}
