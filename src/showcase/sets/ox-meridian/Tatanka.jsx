import { motion } from 'framer-motion'
import './Tatanka.css'

const rows = [
  { year: '1870', fact: 'the herds still darken the plains' },
  { year: '1884', fact: 'a few hundred wild bison left' },
  { year: '1902', fact: 'Yellowstone holds the last twenty-three' },
  { year: 'today', fact: 'about half a million, most in managed herds' },
]

export default function Tatanka() {
  return (
    <div className="oxm-page th-oxm oxm-tatanka">
      <div className="oxm-tk-rule" aria-hidden="true" />
      <motion.header
        className="oxm-tk-head"
        initial={{ opacity: 0, y: 22 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.85 }}
      >
        <p className="oxm-tk-eyebrow">Field ledger · northern plains district</p>
        <h1>Tatanka</h1>
        <p className="oxm-tk-script" lang="lkt">Tatanka, the buffalo</p>
      </motion.header>
      <main className="oxm-tk-grid">
        <motion.section
          className="oxm-tk-ledger"
          initial="hidden"
          animate="show"
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } } }}
        >
          {rows.map((row) => (
            <motion.div
              key={row.year}
              className="oxm-tk-row"
              variants={{ hidden: { opacity: 0, x: -20 }, show: { opacity: 1, x: 0, transition: { duration: 0.6 } } }}
            >
              <span className="oxm-tk-year">{row.year}</span>
              <span className="oxm-tk-fact">{row.fact}</span>
            </motion.div>
          ))}
          <motion.p
            className="oxm-tk-note"
            variants={{ hidden: { opacity: 0, rotate: 0 }, show: { opacity: 1, rotate: -1.6, transition: { duration: 0.6 } } }}
          >
            thirty million, more or less, when the counting began
          </motion.p>
        </motion.section>
        <motion.div
          className="oxm-tk-stage"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.45 }}
        >
          <svg className="oxm-tk-ox" viewBox="0 0 1000 700" role="img" aria-label="A ledger-style drawing of a plains bison bull, huge hump ending in a low massive head">
            <g className="oxm-tk-breath">
              <path fill="#4A2C17" stroke="#4A2C17" strokeWidth="6" strokeLinejoin="round" d="M 62 405 C 106 358 153 308 196 266 C 209 252 220 242 228 234 C 252 218 282 190 312 160 C 332 142 350 132 368 130 C 398 130 426 146 446 174 C 466 206 478 238 482 260 C 500 300 518 352 534 400 C 546 436 550 464 544 482 C 496 496 450 499 409 494 L 419 506 L 401 509 L 411 521 C 364 516 310 506 256 490 C 226 476 202 458 184 440 C 164 444 144 444 128 438 C 114 448 106 462 102 470 C 92 466 82 456 76 444 C 68 430 60 418 62 405 Z" />
              <path fill="#4A2C17" d="M 300 420 C 290 456 284 492 284 522 L 280 532 L 286 538 L 314 540 C 320 506 326 468 330 428 Z" />
              <path fill="#4A2C17" d="M 288 536 C 285 570 284 606 286 638 L 314 638 C 316 606 318 572 320 540 Z" />
              <path fill="#4C5F73" d="M 282 634 L 281 648 L 316 648 L 316 634 Z" />
              <path fill="#4A2C17" d="M 376 428 C 372 460 370 494 371 524 L 395 526 C 398 494 400 460 401 430 Z" />
              <path fill="#4A2C17" d="M 372 524 L 371 638 L 395 638 L 397 528 Z" />
              <path fill="#4C5F73" d="M 368 634 L 367 648 L 398 648 L 398 634 Z" />
              <path fill="#E9D6A8" stroke="#4A2C17" strokeWidth="5" d="M 756 502 C 766 530 774 554 778 576 L 802 572 C 798 548 792 522 784 496 Z" />
              <path fill="#E9D6A8" stroke="#4A2C17" strokeWidth="5" d="M 778 574 C 778 598 778 620 780 638 L 804 638 C 806 616 807 594 807 572 Z" />
              <path fill="#4A2C17" d="M 775 634 L 774 648 L 807 648 L 807 634 Z" />
              <path fill="#E9D6A8" stroke="#4A2C17" strokeWidth="5" d="M 698 506 C 704 530 710 552 714 572 L 736 568 C 732 546 726 522 720 500 Z" />
              <path fill="#E9D6A8" stroke="#4A2C17" strokeWidth="5" d="M 712 570 L 712 638 L 734 638 L 737 568 Z" />
              <path fill="#4A2C17" d="M 709 634 L 708 648 L 737 648 L 737 634 Z" />
              <path fill="#E9D6A8" stroke="#4A2C17" strokeWidth="5" d="M 838 362 C 852 382 858 402 858 424 L 840 426 C 840 406 834 386 824 368 Z" />
              <path fill="#E9D6A8" stroke="#4A2C17" strokeWidth="6" strokeLinejoin="round" d="M 500 258 C 570 262 660 272 730 292 C 782 308 818 334 834 366 C 850 398 852 432 844 460 C 836 490 818 512 794 524 C 734 534 674 532 619 522 C 598 516 580 508 566 498 C 556 472 562 442 570 412 C 576 384 574 352 568 324 C 564 306 568 292 578 280 Z" />
              <g fill="none" stroke="#4A2C17" strokeWidth="3" strokeLinecap="round">
                <path d="M 584 336 L 616 330" />
                <path d="M 580 384 L 614 378" />
                <path d="M 584 432 L 618 426" />
                <path d="M 590 474 L 622 468" />
              </g>
              <path fill="#4C5F73" d="M 752 302 C 798 320 826 350 838 392 C 846 424 842 456 828 482 C 812 490 798 490 786 484 C 800 442 796 390 770 346 C 764 328 756 312 752 302 Z" />
              <path fill="#B5442A" d="M 840 422 C 838 446 842 468 852 486 C 860 466 862 442 858 420 Z" />
              <path fill="#E9D6A8" stroke="#4A2C17" strokeWidth="5" strokeLinejoin="round" d="M 266 240 C 262 212 248 190 226 176 C 240 168 262 176 276 194 C 288 212 290 228 288 242 Z" />
              <path fill="#E9D6A8" stroke="#4A2C17" strokeWidth="5" strokeLinejoin="round" d="M 244 246 C 238 216 222 192 196 180 C 210 170 234 176 250 192 C 264 208 268 228 264 248 Z" />
              <path fill="#4A2C17" stroke="#E9D6A8" strokeWidth="3" transform="translate(6 22)" d="M 244 250 C 262 260 278 276 286 294 C 270 294 254 284 244 270 C 240 262 240 254 242 250 Z" />
              <path fill="#B5442A" d="M 252 258 C 262 266 270 276 274 284 C 264 282 256 274 250 264 Z" />
              <circle cx="140" cy="340" r="7" fill="#E9D6A8" />
              <circle cx="141" cy="341" r="3" fill="#4A2C17" />
              <path fill="#4A2C17" d="M 102 468 C 96 492 98 516 108 538 C 122 518 128 492 124 468 C 118 460 108 460 102 468 Z" />
              <ellipse cx="92" cy="422" rx="6" ry="8" fill="#B5442A" />
              <g fill="none" stroke="#E9D6A8" strokeWidth="4" strokeLinecap="round">
                <path d="M 308 208 C 348 198 388 202 424 220" />
                <path d="M 250 460 C 288 478 330 490 372 492" />
                <path d="M 200 300 C 224 280 250 262 276 248" />
              </g>
            </g>
          </svg>
        </motion.div>
      </main>
      <motion.section
        className="oxm-tk-facts"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.9 }}
      >
        <p>
          Between thirty and sixty million bison ranged the grass sea. Within one lifetime the hide stacks at the rail depots stood taller than the depots themselves. The largest land animal in North America clears snow with its head to reach winter grass, and can run at fifty-five kilometres an hour.
        </p>
      </motion.section>
      <motion.footer
        className="oxm-tk-sig"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.9 }}
      >
        <svg viewBox="0 0 64 64" aria-hidden="true">
          <circle cx="28" cy="28" r="16" fill="none" stroke="#7A3A1A" strokeWidth="4.5" />
          <path d="M12 28 L 44 28" stroke="#7A3A1A" strokeWidth="4.5" strokeLinecap="round" />
          <path d="M39 39 L 54 54" stroke="#7A3A1A" strokeWidth="4.5" strokeLinecap="round" />
        </svg>
        <span>SET 5 · DESIGNED BY GLM FLASH</span>
      </motion.footer>
    </div>
  )
}
