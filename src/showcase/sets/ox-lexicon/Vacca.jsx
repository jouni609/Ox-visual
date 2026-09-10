import { motion } from 'framer-motion'
import './vacca.css'
import { hornPath } from './forms.js'

const reveal = {
  duration: 1.5,
  ease: [0.22, 1, 0.36, 1],
  delay: 0.15,
}

function Cow() {
  return (
    <svg
      className="ox-lexicon-vacca-cow"
      viewBox="0 0 960 660"
      role="img"
      aria-label="Engraving of a cow standing in left-facing profile"
    >
      <defs>
        <clipPath id="ox-lexicon-vacca-reveal" clipPathUnits="userSpaceOnUse">
          <motion.rect
            x="0"
            y="-6"
            width="960"
            height="672"
            initial={{ y: -672 }}
            animate={{ y: -6 }}
            transition={reveal}
          />
        </clipPath>
      </defs>

      <g clipPath="url(#ox-lexicon-vacca-reveal)">
        <ellipse cx="552" cy="584" rx="310" ry="11" fill="var(--vacca-ink)" opacity="0.09" />

        <g opacity="0.6" fill="var(--vacca-ink)">
          <path d="M406 380 C 410 440, 414 500, 416 534 L 452 534 C 450 498, 442 438, 432 380 Z" />
          <path d="M722 376 C 728 436, 734 496, 736 532 L 768 532 C 764 494, 752 436, 740 378 Z" />
          <path d="M408 528 L 456 528 L 460 558 L 404 558 Z" />
          <path d="M730 526 L 772 526 L 776 556 L 726 556 Z" />
        </g>

        <g fill="var(--vacca-ink)">
          <path d="M566 430 C 596 422, 626 430, 634 450 C 642 470, 630 492, 604 498 C 580 504, 562 492, 556 472 C 552 458, 558 438, 566 430 Z" />
          <path d="M574 492 C 572 504, 572 514, 577 521 C 583 528, 591 524, 591 514 L 590 494 Z" />
          <path d="M598 496 C 596 508, 596 518, 601 525 C 607 532, 615 528, 615 518 L 614 496 Z" />
          <path d="M622 496 C 620 508, 620 518, 625 525 C 631 532, 639 528, 639 518 L 638 496 Z" />

          <path d="M348 376 C 344 444, 342 508, 346 544 L 392 544 C 396 506, 394 442, 386 376 Z" />
          <path d="M646 372 C 638 440, 634 504, 638 544 L 686 544 C 690 504, 688 438, 680 374 Z" />
          <path d="M342 538 L 398 538 L 404 572 L 338 572 Z" />
          <path d="M632 538 L 692 538 L 698 572 L 628 572 Z" />

          <path d="M768 264 C 800 300, 816 360, 814 424 C 813 452, 808 476, 800 492 L 788 486 C 794 468, 798 444, 796 418 C 792 362, 782 314, 760 282 Z" />
          <path d="M780 480 C 804 484, 816 506, 806 528 C 794 548, 768 546, 760 528 C 752 510, 764 484, 780 480 Z" />

          <path d="M334 254 C 420 228, 600 230, 700 250 C 742 260, 762 298, 758 352 C 754 406, 730 436, 682 446 C 596 462, 452 462, 402 452 C 364 444, 340 416, 336 374 C 332 328, 328 280, 334 254 Z" />
        </g>

        <g fill="var(--vacca-ink)">
          <path d={hornPath(330, 240, 262, 96, 46, 14, 75)} />
          <path d="M330 250 C 358 254, 384 272, 396 296 C 384 310, 356 306, 340 288 C 328 274, 324 258, 330 250 Z" />
        </g>

        <path
          d="M296 232 C 268 234, 240 244, 218 258 C 188 278, 152 298, 128 316 C 110 326, 106 340, 108 352 C 110 366, 118 374, 132 378 C 148 382, 162 378, 176 370 C 196 360, 224 352, 244 346 C 256 341, 266 342, 272 350 C 280 360, 286 372, 292 388 C 300 414, 308 446, 320 466 C 330 482, 346 484, 354 474 C 362 462, 362 438, 358 412 C 354 378, 350 340, 352 306 C 354 274, 356 250, 358 240 C 356 228, 330 224, 296 232 Z"
          fill="var(--vacca-paper)"
          stroke="var(--vacca-paper)"
          strokeWidth="8"
          strokeLinejoin="round"
        />
        <path
          d="M296 232 C 268 234, 240 244, 218 258 C 188 278, 152 298, 128 316 C 110 326, 106 340, 108 352 C 110 366, 118 374, 132 378 C 148 382, 162 378, 176 370 C 196 360, 224 352, 244 346 C 256 341, 266 342, 272 350 C 280 360, 286 372, 292 388 C 300 414, 308 446, 320 466 C 330 482, 346 484, 354 474 C 362 462, 362 438, 358 412 C 354 378, 350 340, 352 306 C 354 274, 356 250, 358 240 C 356 228, 330 224, 296 232 Z"
          fill="var(--vacca-ink)"
        />

        <g fill="var(--vacca-ink)">
          <path d={hornPath(296, 246, 148, 178, 62, 20, 85)} />
          <path d="M300 252 C 332 258, 360 278, 374 304 C 360 318, 330 314, 312 294 C 300 280, 294 262, 300 252 Z" />
        </g>

        <g fill="none" stroke="var(--vacca-paper)" strokeLinecap="round">
          <path d="M306 264 C 278 288, 244 318, 214 346" strokeWidth="3.5" />
          <path d="M288 380 C 300 408, 310 438, 322 460" strokeWidth="3.5" />
          <path d="M124 358 C 140 366, 158 369, 176 366" strokeWidth="3" />
          <path d="M470 280 C 464 320, 462 368, 466 414" strokeWidth="3" />
          <path d="M518 278 C 512 318, 510 366, 514 412" strokeWidth="3" />
          <path d="M564 280 C 558 318, 556 364, 560 408" strokeWidth="3" />
          <path d="M410 272 C 400 312, 396 362, 400 414" strokeWidth="3.5" />
          <path d="M694 282 C 684 322, 680 374, 684 430" strokeWidth="3.5" />
          <path d="M592 452 C 618 444, 640 446, 654 454" strokeWidth="3" />
          <path d="M376 548 L 378 570" strokeWidth="2.5" />
          <path d="M668 548 L 670 570" strokeWidth="2.5" />
          <path d="M430 540 L 432 556" strokeWidth="2.5" />
          <path d="M756 538 L 758 554" strokeWidth="2.5" />
        </g>

        <ellipse cx="142" cy="340" rx="7" ry="5" transform="rotate(-24 142 340)" fill="var(--vacca-paper)" />
        <circle cx="230" cy="278" r="8" fill="var(--vacca-paper)" />
        <circle cx="228" cy="279" r="3.6" fill="var(--vacca-ink)" />

        <path d="M96 580 L 872 580" stroke="var(--vacca-ink)" strokeWidth="2.5" fill="none" />
        <g stroke="var(--vacca-ink)" strokeWidth="2" fill="none" opacity="0.7">
          <path d="M150 580 L 142 592" />
          <path d="M270 580 L 262 592" />
          <path d="M430 580 L 422 592" />
          <path d="M700 580 L 692 592" />
          <path d="M820 580 L 812 592" />
        </g>
      </g>

      <g className="ox-lexicon-vacca-leaders" fill="none" stroke="var(--vacca-ink)" strokeWidth="1.4">
        <path d="M300 228 L 392 148" />
        <path d="M316 450 L 404 512" />
        <path d="M622 484 L 548 544" />
        <path d="M376 566 L 298 614" />
      </g>
      <g className="ox-lexicon-vacca-leaders-dots" fill="var(--vacca-ink)">
        <circle cx="300" cy="228" r="4" />
        <circle cx="316" cy="450" r="4" />
        <circle cx="622" cy="484" r="4" />
        <circle cx="376" cy="566" r="4" />
      </g>
      <g className="ox-lexicon-vacca-labels">
        <text x="398" y="144">poll</text>
        <text x="410" y="516">dewlap</text>
        <text x="542" y="548" textAnchor="end">udder, four teats</text>
        <text x="292" y="618" textAnchor="end">cloven hoof</text>
      </g>

      <motion.g
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.9, 0] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: 'easeOut', delay: 1.6 }}
        style={{ transformBox: 'fill-box', transformOrigin: 'center' }}
      >
        <circle cx="350" cy="330" r="10" fill="none" stroke="var(--vacca-carmine)" strokeWidth="2.5" />
        <motion.circle
          cx="350"
          cy="330"
          r="5"
          fill="var(--vacca-carmine)"
          animate={{ scale: [1, 2.6], opacity: [0.9, 0] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: 'easeOut', delay: 1.6 }}
          style={{ transformBox: 'fill-box', transformOrigin: 'center' }}
        />
      </motion.g>
    </svg>
  )
}

const cases = [
  {
    head: 'May 1796 · Gloucester',
    body: 'Sarah Nelmes, a milkmaid, milks a cow that has cowpox. The blister on her hand becomes the first vaccine stock in history.',
  },
  {
    head: '14 May 1796 · Berkeley',
    body: 'Edward Jenner scratches that matter into James Phipps, age 8. Seven weeks later he exposes the boy to smallpox. The boy stays well.',
  },
  {
    head: '1 in 3',
    body: 'Smallpox killed about a third of the people it infected. Survivors carried the scars for life, and some lost their sight.',
  },
  {
    head: '8 May 1980 · Geneva',
    body: 'The World Health Organization declares smallpox eradicated. The cow is inside the word for the thing that ended it.',
  },
]

const figures = [
  { value: '1977', label: 'last natural case, Merca, Somalia' },
  { value: '1978', label: 'last death, a laboratory release in Birmingham' },
  { value: '80%', label: 'of a herd must be immune to stop the chain' },
]

export default function Vacca() {
  return (
    <section className="ox-lexicon-vacca">
      <motion.div
        className="ox-lexicon-vacca-sheet"
        initial={{ opacity: 0, y: 22 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <header className="ox-lexicon-vacca-masthead">
          <div className="ox-lexicon-vacca-masthead-left">
            <span className="ox-lexicon-vacca-issue">Veterinary &amp; Sanitary Notice No. 1</span>
            <span className="ox-lexicon-vacca-issue-sub">Posted in every parish · read aloud where required</span>
          </div>
          <motion.div
            className="ox-lexicon-vacca-stamp"
            initial={{ scale: 1.7, opacity: 0, rotate: -16 }}
            animate={{ scale: 1, opacity: 1, rotate: -5 }}
            transition={{ delay: 0.55, type: 'spring', stiffness: 150, damping: 15 }}
          >
            <span className="ox-lexicon-vacca-stamp-line">SET 1 · DESIGNED BY DEEPSEEK FLASH</span>
            <span className="ox-lexicon-vacca-stamp-sub">Office of the Cow Doctor</span>
          </motion.div>
        </header>

        <div className="ox-lexicon-vacca-title-row">
          <h1 className="ox-lexicon-vacca-title">Vacca</h1>
          <div className="ox-lexicon-vacca-pron">
            <span className="ox-lexicon-vacca-ipa">/ˈwak.ka/</span>
            <span>Latin, noun, first declension</span>
            <span className="ox-lexicon-vacca-gloss">a cow. the root of vaccine.</span>
          </div>
        </div>

        <div className="ox-lexicon-vacca-body">
          <aside className="ox-lexicon-vacca-index">
            <h2 className="ox-lexicon-vacca-side-head">Entry</h2>
            <p>
              The word entered English around 1800 as vaccine, two years after Edward Jenner published his inquiry
              into cowpox. Country doctors already knew that milkmaids who caught cowpox from the herd did not take
              smallpox. Jenner put the knowledge to the test.
            </p>
            <p>
              Variolation had come first: scratching smallpox itself into the skin, carried from Constantinople to
              London in 1721. It worked, and it killed about one in a hundred. Cowpox was milder and just as
              protective. An animal&apos;s disease became the safer door into immunity.
            </p>
            <p className="ox-lexicon-vacca-note">
              The virus in the vials is vaccinia. Its origin is still argued over, probably cowpox or horsepox,
              possibly something that no longer exists in the wild. The word outlived the disease it named.
            </p>
          </aside>

          <figure className="ox-lexicon-vacca-plate">
            <Cow />
            <figcaption>
              Fig. 1. Bos taurus, the near-side cow, standing. Poll, dewlap, four teats and a cloven hoof, as the
              cow doctor drew her.
            </figcaption>
          </figure>

          <aside className="ox-lexicon-vacca-cases">
            <h2 className="ox-lexicon-vacca-side-head">Cases</h2>
            <ol className="ox-lexicon-vacca-case-list">
              {cases.map((c) => (
                <li key={c.head}>
                  <span className="ox-lexicon-vacca-case-head">{c.head}</span>
                  <span className="ox-lexicon-vacca-case-body">{c.body}</span>
                </li>
              ))}
            </ol>
          </aside>
        </div>

        <footer className="ox-lexicon-vacca-band">
          {figures.map((f) => (
            <div className="ox-lexicon-vacca-fig" key={f.value}>
              <span className="ox-lexicon-vacca-fig-value">{f.value}</span>
              <span className="ox-lexicon-vacca-fig-label">{f.label}</span>
            </div>
          ))}
        </footer>
      </motion.div>
    </section>
  )
}
