import { motion } from 'framer-motion'
import './Nandi.css'

const rise = {
  hidden: { opacity: 0, y: 26 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.14 * i, duration: 0.85, ease: [0.22, 1, 0.36, 1] },
  }),
}

function BellString() {
  return (
    <svg className="oxm-nd-bells" viewBox="0 0 40 120" aria-hidden="true">
      <line x1="20" y1="0" x2="20" y2="68" stroke="#3A2213" strokeWidth="2" />
      <circle cx="20" cy="76" r="7" fill="#C9972B" stroke="#3A2213" strokeWidth="2" />
      <circle cx="20" cy="92" r="7" fill="#C9972B" stroke="#3A2213" strokeWidth="2" />
      <circle cx="20" cy="108" r="8" fill="#C9972B" stroke="#3A2213" strokeWidth="2" />
    </svg>
  )
}

function Flame({ className }) {
  return (
    <span className={className}>
      <svg viewBox="0 0 40 66" aria-hidden="true">
        <path d="M20 4 C 27 16 31 26 31 36 C 31 47 26 54 20 56 C 14 54 9 47 9 36 C 9 26 13 16 20 4 Z" fill="#C9972B" />
        <path d="M20 26 C 23 32 25 38 25 43 C 25 49 23 52 20 53 C 17 52 15 49 15 43 C 15 38 17 32 20 26 Z" fill="#5A1420" />
        <path d="M6 58 L 34 58 L 30 65 L 10 65 Z" fill="#5A1420" />
      </svg>
    </span>
  )
}

export default function Nandi() {
  return (
    <div className="oxm-page th-oxm oxm-nandi">
      <motion.header custom={0} variants={rise} initial="hidden" animate="show" className="oxm-nd-head">
        <p className="oxm-nd-eyebrow"><span lang="sa">नंदी</span> · Shiva's doorkeeper</p>
        <h1>Nandi</h1>
        <p className="oxm-nd-sub">
          Every Shaiva temple seats a bull before the sanctum, facing his lord. In Sanskrit, nandī is the joyful one.
        </p>
      </motion.header>
      <section className="oxm-nd-shrine">
        <div className="oxm-nd-col" aria-hidden="true">
          <div className="oxm-nd-cap" />
          <div className="oxm-nd-shaft" />
          <BellString />
        </div>
        <motion.div
          className="oxm-nd-arch"
          custom={1}
          variants={rise}
          initial="hidden"
          animate="show"
        >
          <svg className="oxm-nd-ox" viewBox="0 0 1000 700" role="img" aria-label="A seated Nandi bull in maroon and gold, with crescent horns, a hump, a bell garland and folded legs">
            <ellipse cx="500" cy="638" rx="340" ry="14" fill="#3A2213" />
            <path fill="#3A2213" d="M 788 332 C 736 400 660 480 570 545 C 520 578 470 600 430 610 L 438 634 C 490 622 545 596 595 562 C 680 505 748 425 800 352 Z" />
            <path fill="#C9972B" d="M 428 606 C 412 616 402 630 398 646 C 414 644 428 636 438 624 C 436 616 433 610 430 606 Z" />
            <path fill="#5A1420" stroke="#3A2213" strokeWidth="3" d="M 634 602 C 594 612 554 620 517 622 L 514 646 C 557 646 602 642 644 634 Z" />
            <path fill="#3A2213" d="M 476 620 L 514 618 L 518 646 L 480 646 Z" />
            <path fill="#C9972B" stroke="#3A2213" strokeWidth="3" d="M 226 156 C 208 120 202 82 216 48 C 226 26 244 12 266 8 C 258 20 250 36 246 54 C 240 84 246 116 258 148 Z" />
            <path fill="#C9972B" stroke="#3A2213" strokeWidth="3" transform="rotate(16 258 150)" d="M 250 150 C 240 110 248 70 280 46 C 305 28 340 24 368 38 C 380 44 388 54 392 66 C 380 62 364 60 348 64 C 322 70 300 88 288 114 C 282 128 278 142 276 152 Z" />
            <path fill="#5A1420" d="M 252 612 C 218 556 200 508 200 462 C 188 425 176 388 165 350 C 158 336 152 330 148 328 C 200 260 235 200 275 162 C 322 172 372 192 417 208 C 492 232 572 262 647 285 C 722 308 782 322 814 342 C 850 368 876 424 872 474 C 868 530 852 576 826 600 C 748 630 624 640 502 638 C 402 636 312 626 252 612 Z" />
            <path fill="#3A2213" d="M 700 330 C 760 350 800 390 812 445 C 818 500 806 550 782 585 C 760 592 740 592 724 586 C 752 540 760 470 736 400 C 728 372 716 348 700 330 Z" />
            <path fill="#3A2213" d="M 310 622 C 410 632 530 636 640 632 L 636 614 C 528 618 412 614 318 606 Z" />
            <path fill="#3A2213" d="M 348 244 C 396 254 444 278 482 306 C 442 302 394 286 356 264 C 352 256 348 250 346 244 Z" />
            <path fill="none" stroke="#3A2213" strokeWidth="7" strokeLinecap="round" d="M 178 356 C 198 416 224 464 256 500" />
            <path fill="#5A1420" stroke="#3A2213" strokeWidth="3" d="M 208 468 C 200 520 202 570 210 612 L 252 616 C 248 570 248 520 252 472 Z" />
            <path fill="#5A1420" stroke="#3A2213" strokeWidth="3" d="M 216 608 C 246 600 288 592 328 590 L 334 626 C 296 628 254 634 222 640 Z" />
            <path fill="#3A2213" d="M 328 590 L 370 592 L 374 632 L 332 630 Z" />
            <path fill="#5A1420" d="M 258 152 C 230 170 195 198 160 222 C 130 242 100 254 78 260 C 68 274 66 292 74 306 C 88 318 108 322 126 318 C 158 334 195 342 225 336 C 252 330 272 310 282 282 C 288 240 280 190 266 156 Z" />
            <path fill="#3A2213" d="M 240 200 C 260 230 272 268 272 300 C 260 316 244 326 226 330 C 240 296 246 250 238 208 Z" />
            <path fill="#EFE3C8" d="M 78 262 C 68 276 66 294 74 306 C 88 318 108 322 126 318 C 128 300 124 282 114 266 C 100 260 86 258 78 262 Z" />
            <ellipse cx="95" cy="290" rx="6" ry="9" fill="#3A2213" />
            <circle cx="185" cy="242" r="11" fill="#C9972B" />
            <circle cx="185" cy="242" r="6" fill="#3A2213" />
            <circle cx="232" cy="232" r="5" fill="#3A2213" />
            <path fill="#3A2213" d="M 224 158 C 206 164 190 176 180 192 C 194 194 208 188 218 176 Z" />
            <path fill="#3A2213" d="M 282 162 C 306 168 330 182 344 202 C 328 206 308 200 294 188 C 286 180 282 170 282 162 Z" />
            <path fill="#EFE3C8" d="M 292 172 C 306 178 318 188 326 198 C 314 198 302 192 294 184 Z" />
            <path fill="none" stroke="#3A2213" strokeWidth="9" d="M 300 380 C 330 460 390 520 460 520 C 520 518 565 470 580 410" />
            <g fill="#C9972B" stroke="#3A2213" strokeWidth="2.5">
              <circle cx="322" cy="428" r="13" />
              <circle cx="356" cy="482" r="13" />
              <circle cx="412" cy="514" r="13" />
              <circle cx="472" cy="512" r="13" />
              <circle cx="528" cy="482" r="13" />
              <circle cx="562" cy="440" r="13" />
            </g>
            <g fill="#3A2213">
              <circle cx="322" cy="436" r="3.5" />
              <circle cx="356" cy="490" r="3.5" />
              <circle cx="412" cy="522" r="3.5" />
              <circle cx="472" cy="520" r="3.5" />
              <circle cx="528" cy="490" r="3.5" />
              <circle cx="562" cy="448" r="3.5" />
            </g>
          </svg>
        </motion.div>
        <div className="oxm-nd-col" aria-hidden="true">
          <div className="oxm-nd-cap" />
          <div className="oxm-nd-shaft" />
          <BellString />
        </div>
      </section>
      <div className="oxm-nd-flames" aria-hidden="true">
        <Flame className="oxm-nd-flame oxm-nd-f1" />
        <Flame className="oxm-nd-flame oxm-nd-f2" />
        <Flame className="oxm-nd-flame oxm-nd-f3" />
      </div>
      <motion.section custom={2} variants={rise} initial="hidden" animate="show" className="oxm-nd-inscribe">
        <p>
          Stone Nandis are always seated and always face the garbhagriha, the room that holds the god. The largest, at Lepakshi in Andhra Pradesh, is carved from a single boulder of granite and stretches more than eight metres.
        </p>
        <p>
          He is painted white, garlanded with bells, and fed on the temple grounds. To whisper a wish into the ear of Nandi, the belief goes, is to place it directly before Shiva.
        </p>
      </motion.section>
      <motion.footer custom={3} variants={rise} initial="hidden" animate="show" className="oxm-nd-sigwrap">
        <div className="oxm-nd-seal">
          <span>SET 3 · DESIGNED BY GLM FLASH</span>
        </div>
      </motion.footer>
    </div>
  )
}
