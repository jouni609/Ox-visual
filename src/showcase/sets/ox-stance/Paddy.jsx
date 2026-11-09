import { motion } from 'framer-motion'
import './paddy.css'

const TERRACES = [
  {
    t: 'Flood',
    d: 'The bunds are closed and the field takes a hand of water. The clay softens for a week. A tractor would sink to its axles; a buffalo walks in.',
  },
  {
    t: 'Plough',
    d: 'One animal, one wooden plough, one person behind. The share turns the mud a hand deep, and each furrow fills behind it as it is cut.',
  },
  {
    t: 'Harrow',
    d: 'A wooden comb is dragged back and forth until the field is a level slurry. The hooves do half the work, puddling the clay so it holds water.',
  },
  {
    t: 'Plant',
    d: 'The seedlings go in by hand, in rows. The buffalo is unyoked and led to the pond, where it lies down to the nostrils until evening.',
  },
]

const FACTS = [
  { n: '200 M', l: 'water buffalo in the world, nearly all in Asia' },
  { n: '5,000 yr', l: 'or so under the yoke, since the first paddies were dug' },
  { n: '2 types', l: 'swamp buffalo pull, river buffalo give milk' },
]

const ROWS = [
  { y: 492, s: 46, o: 14, h: 15 },
  { y: 534, s: 58, o: 30, h: 20 },
  { y: 584, s: 72, o: 8, h: 26 },
]

const RIPPLES = [468, 512, 674, 716]

function seedlings({ y, s, o, h }) {
  let d = ''
  for (let x = o; x < 1200; x += s) {
    d += `M ${x} ${y} l ${-h * 0.4} ${-h * 0.8} M ${x} ${y} l 0 ${-h} M ${x} ${y} l ${h * 0.45} ${-h * 0.75} `
  }
  return d
}

function Buffalo() {
  return (
    <g>
      <path className="ox-stance-paddy-far" d="M 668 380 L 664 470 L 692 470 L 700 384 Z" />
      <path className="ox-stance-paddy-far" d="M 458 380 C 464 410 470 440 464 470 L 492 470 C 500 440 500 410 498 384 Z" />
      <path className="ox-stance-paddy-hornfar" d="M 840 262 C 802 258 752 228 734 152 C 732 138 742 136 748 148 C 762 204 800 234 858 244 Z" />

      <path className="ox-stance-paddy-tail" d="M 398 262 C 372 300 372 370 380 416" />
      <path className="ox-stance-paddy-tuft" d="M 372 408 C 366 430 372 448 382 456 C 392 444 394 426 388 408 Z" />

      <path className="ox-stance-paddy-hide" d="M 420 238 C 480 216 580 224 640 230 C 668 214 700 212 722 224 C 760 234 796 250 822 262 L 806 322 C 776 348 750 374 734 394 C 680 420 530 424 460 404 C 420 398 396 352 392 302 C 390 270 400 248 420 238 Z" />
      <path className="ox-stance-paddy-shade" d="M 440 374 C 520 400 660 398 734 372 L 734 394 C 680 420 530 424 460 404 C 448 400 440 390 440 374 Z" />
      <path className="ox-stance-paddy-chevron" d="M 772 330 C 780 346 792 352 806 350 M 756 348 C 764 364 776 370 790 368" />

      <path className="ox-stance-paddy-hide" d="M 700 372 L 704 470 L 734 470 L 742 380 Z" />
      <path className="ox-stance-paddy-hide" d="M 412 360 C 420 400 432 436 426 470 L 458 470 C 466 430 468 396 466 372 Z" />

      <path className="ox-stance-paddy-ear" d="M 814 276 C 796 262 772 266 758 282 C 776 296 800 294 816 288 Z" />
      <path className="ox-stance-paddy-hide" d="M 810 256 C 852 258 902 276 934 292 C 952 300 958 316 950 326 C 932 336 902 336 878 330 C 852 334 824 332 806 322 C 796 302 798 272 810 256 Z" />
      <path className="ox-stance-paddy-nose" d="M 926 290 C 950 296 960 314 950 326 C 940 332 928 332 918 328 C 914 312 916 298 926 290 Z" />
      <path className="ox-stance-paddy-horn" d="M 808 274 C 758 270 702 238 684 160 C 680 140 694 136 700 152 C 716 216 764 248 830 254 Z" />
      <path className="ox-stance-paddy-ridge" d="M 792 250 L 786 268 M 766 242 L 756 258 M 742 228 L 730 242 M 722 208 L 708 218" />
      <circle className="ox-stance-paddy-eye" cx="862" cy="284" r="6" />
      <circle className="ox-stance-paddy-pupil" cx="863" cy="284" r="3" />
      <path className="ox-stance-paddy-nostril" d="M 938 304 C 944 304 948 308 946 314" />
      <circle className="ox-stance-paddy-ring" cx="944" cy="324" r="7" />

      <path className="ox-stance-paddy-yoke" d="M 758 224 C 772 256 776 300 764 340" />
      <path className="ox-stance-paddy-rope" d="M 766 300 C 660 330 520 368 448 394 M 944 331 C 900 362 820 336 768 300" />
    </g>
  )
}

function Scene() {
  return (
    <svg className="ox-stance-paddy-svg" viewBox="0 0 1200 620" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs>
        <linearGradient id="ox-stance-paddy-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#9bd3c4" />
          <stop offset="0.55" stopColor="#ffe3ae" />
          <stop offset="1" stopColor="#ffb877" />
        </linearGradient>
        <linearGradient id="ox-stance-paddy-water" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#f6c98a" />
          <stop offset="0.25" stopColor="#58b3a0" />
          <stop offset="1" stopColor="#12635c" />
        </linearGradient>
        <clipPath id="ox-stance-paddy-pond">
          <rect x="0" y="470" width="1200" height="150" />
        </clipPath>
      </defs>

      <rect width="1200" height="470" fill="url(#ox-stance-paddy-sky)" />
      <circle className="ox-stance-paddy-sun" cx="1010" cy="300" r="62" />
      <path className="ox-stance-paddy-karst2" d="M 0 360 C 40 300 70 230 110 250 C 140 190 190 200 210 280 C 250 240 290 300 330 330 C 420 310 470 350 560 352 L 560 400 L 0 400 Z" />
      <path className="ox-stance-paddy-karst2" d="M 760 380 C 800 300 840 270 870 300 C 900 220 960 230 990 300 C 1040 250 1090 290 1120 330 C 1150 320 1180 340 1200 350 L 1200 400 L 760 400 Z" />
      <path className="ox-stance-paddy-karst1" d="M 0 400 C 120 360 260 372 400 384 C 600 366 800 376 1200 372 L 1200 432 L 0 432 Z" />
      <path className="ox-stance-paddy-bund" d="M 0 424 C 300 414 800 414 1200 424 L 1200 474 L 0 474 Z" />
      <path className="ox-stance-paddy-palm" d="M 110 428 C 112 380 118 340 126 310 M 126 310 C 104 296 84 300 70 316 M 126 310 C 110 282 90 276 74 280 M 126 310 C 128 280 144 266 162 266 M 126 310 C 150 294 172 298 184 314 M 126 310 C 146 310 160 322 166 338" />

      <rect y="470" width="1200" height="150" fill="url(#ox-stance-paddy-water)" />

      <g clipPath="url(#ox-stance-paddy-pond)">
        <g className="ox-stance-paddy-mirror" transform="translate(0 940) scale(1 -1)">
          <Buffalo />
          <Farmer />
        </g>
        <path className="ox-stance-paddy-glint" d="M 80 500 L 300 500 M 560 520 L 640 520 M 820 506 L 1120 506 M 200 560 L 380 560 M 900 566 L 1060 566 M 520 600 L 760 600" />
      </g>

      <Farmer />
      <g className="ox-stance-paddy-walk">
        <Buffalo />
        <g className="ox-stance-paddy-egret">
          <path className="ox-stance-paddy-egretleg" d="M 556 226 L 554 204 M 566 226 L 566 204" />
          <path className="ox-stance-paddy-egretbody" d="M 536 196 C 544 180 570 178 582 190 C 580 204 562 210 544 206 Z" />
          <path className="ox-stance-paddy-egretbody" d="M 576 190 C 588 176 584 162 592 150 C 598 142 608 144 608 152 C 602 162 600 178 590 196 Z" />
          <path className="ox-stance-paddy-beak" d="M 606 148 L 628 152 L 606 156 Z" />
        </g>
      </g>

      {RIPPLES.map((x, i) => (
        <g key={x} className="ox-stance-paddy-ripples">
          <ellipse className="ox-stance-paddy-ripple" cx={x} cy="472" rx="26" ry="5" style={{ animationDelay: `${i * -0.9}s` }} />
          <ellipse className="ox-stance-paddy-ripple" cx={x} cy="472" rx="26" ry="5" style={{ animationDelay: `${i * -0.9 - 1.8}s` }} />
        </g>
      ))}

      {ROWS.map((r, i) => (
        <path key={r.y} className={`ox-stance-paddy-rice ox-stance-paddy-rice${i}`} d={seedlings(r)} />
      ))}
    </svg>
  )
}

function Farmer() {
  return (
    <g>
      <path className="ox-stance-paddy-plough" d="M 366 312 C 384 356 392 420 410 470 M 396 400 L 452 394" />
      <path className="ox-stance-paddy-trouser" d="M 296 372 L 292 470 L 310 470 L 314 372 Z M 316 372 L 322 470 L 340 470 L 336 372 Z" />
      <path className="ox-stance-paddy-shirt" d="M 300 292 C 316 284 334 288 342 298 L 340 376 L 292 376 Z" />
      <path className="ox-stance-paddy-arm" d="M 330 304 C 346 314 358 316 370 316" />
      <circle className="ox-stance-paddy-skin" cx="322" cy="276" r="12" />
      <path className="ox-stance-paddy-hat" d="M 280 274 L 324 238 L 368 274 C 340 282 308 282 280 274 Z" />
    </g>
  )
}

export default function Paddy() {
  return (
    <div className="th-ox-stance-paddy ox-stance-paddy">
      <header className="ox-stance-paddy-hero">
        <motion.div
          className="ox-stance-paddy-heading"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="ox-stance-paddy-kicker">Labour · water buffalo · first light</p>
          <h1 className="ox-stance-paddy-title">Paddy</h1>
          <p className="ox-stance-paddy-lede">Half the world eats rice. For five thousand years this animal made the field ready for it.</p>
        </motion.div>
        <div className="ox-stance-paddy-scene">
          <Scene />
        </div>
      </header>

      <main className="ox-stance-paddy-main">
        <section className="ox-stance-paddy-why">
          <h2>Built for mud</h2>
          <div className="ox-stance-paddy-whycols">
            <p>
              A buffalo&rsquo;s hooves are broad and splay under load, and the joints above them bend further than
              those of cattle. It can pull one leg out of knee-deep clay while the other three hold. It will eat rice
              straw, reeds and whatever grows on the bund, and it asks for no diesel.
            </p>
            <p>
              It has one weakness. Its dark hide has few sweat glands, so it overheats in the sun and must wallow to
              cool down. The working day therefore starts in the dark and ends before noon, and the rest belongs to
              the pond.
            </p>
          </div>
        </section>

        <section className="ox-stance-paddy-season" aria-label="Preparing a rice field">
          <ol>
            {TERRACES.map((t, i) => (
              <motion.li
                key={t.t}
                className={`ox-stance-paddy-step ox-stance-paddy-step${i}`}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
              >
                <span className="ox-stance-paddy-stepnum">{i + 1}</span>
                <div>
                  <h3>{t.t}</h3>
                  <p>{t.d}</p>
                </div>
              </motion.li>
            ))}
          </ol>
        </section>

        <section className="ox-stance-paddy-saying">
          <blockquote>
            <p lang="vi">Con trâu là đầu cơ nghiệp.</p>
            <footer>&ldquo;The buffalo is the head of the family fortune.&rdquo; Vietnamese proverb</footer>
          </blockquote>
          <ul className="ox-stance-paddy-facts">
            {FACTS.map((f) => (
              <li key={f.n}>
                <strong>{f.n}</strong>
                <span>{f.l}</span>
              </li>
            ))}
          </ul>
        </section>

        <div className="ox-stance-paddy-sack">
          <div className="ox-stance-paddy-stencil">
            <span>Paddy rice · 50 kg net</span>
            <p>SET XXXV · DESIGNED BY CLAUDE FABLE 5.2</p>
            <span>Ploughed by buffalo · planted by hand</span>
          </div>
        </div>
      </main>
    </div>
  )
}
