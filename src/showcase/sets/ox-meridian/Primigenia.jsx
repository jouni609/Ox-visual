import { motion } from 'framer-motion'
import './Primigenia.css'

const rise = {
  hidden: { opacity: 0, y: 26 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.14 * i, duration: 0.85, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function Primigenia() {
  return (
    <div className="oxm-page th-oxm oxm-primigenia">
      <div className="oxm-pg-torch" aria-hidden="true" />
      <svg className="oxm-pg-motes" viewBox="0 0 700 900" preserveAspectRatio="none" aria-hidden="true">
        <g className="oxm-pg-mote" style={{ animationDelay: '-2s' }}><circle cx="120" cy="820" r="2.4" /></g>
        <g className="oxm-pg-mote" style={{ animationDelay: '-6s' }}><circle cx="300" cy="880" r="1.8" /></g>
        <g className="oxm-pg-mote" style={{ animationDelay: '-10s' }}><circle cx="430" cy="840" r="2.8" /></g>
        <g className="oxm-pg-mote" style={{ animationDelay: '-14s' }}><circle cx="560" cy="900" r="1.6" /></g>
        <g className="oxm-pg-mote" style={{ animationDelay: '-4s' }}><circle cx="220" cy="900" r="2.2" /></g>
        <g className="oxm-pg-mote" style={{ animationDelay: '-12s' }}><circle cx="620" cy="850" r="2" /></g>
      </svg>
      <main className="oxm-pg-grid">
        <motion.header custom={0} variants={rise} initial="hidden" animate="show" className="oxm-pg-head">
          <p className="oxm-pg-eyebrow">Bos primigenius · the wild ancestor</p>
          <h1>Primigenia</h1>
        </motion.header>
        <motion.div custom={1} variants={rise} initial="hidden" animate="show" className="oxm-pg-stage">
          <svg className="oxm-pg-ox" viewBox="0 0 1000 700" role="img" aria-label="An ochre cave painting of an aurochs bull walking left, with long lyre horns and a pale stripe along its spine">
            <path fill="#C1702F" d="M 852 268 C 884 320 894 382 886 448 L 870 444 C 878 384 868 328 840 284 Z" />
            <path fill="#241B14" d="M 872 442 C 884 472 886 508 876 544 C 866 516 860 480 856 448 Z" />
            <path fill="#7A431F" d="M 358 330 C 375 375 385 425 388 458 L 384 470 C 388 474 393 474 397 469 C 399 505 401 550 402 594 L 425 594 C 424 550 423 505 421 466 C 418 428 408 378 396 332 Z" />
            <path fill="#241B14" d="M 398 594 L 396 648 L 428 648 L 427 594 Z" />
            <path fill="#7A431F" d="M 704 455 C 696 480 690 498 686 514 L 690 522 L 684 526 C 676 558 670 588 666 614 L 690 616 C 696 588 703 554 708 522 L 704 518 C 710 500 716 478 722 456 Z" />
            <path fill="#241B14" d="M 662 614 L 660 648 L 692 648 L 691 614 Z" />
            <path fill="#7A431F" d="M 196 152 C 204 122 206 94 196 70 C 190 56 178 48 162 46 C 174 50 182 58 186 70 C 192 92 190 120 184 146 Z" />
            <path fill="#7A431F" d="M 216 158 C 202 168 192 180 188 192 C 198 194 210 188 218 178 C 220 172 219 164 218 158 Z" />
            <path fill="#C1702F" d="M 292 470 C 270 440 258 395 262 345 C 252 320 242 285 231 248 C 228 220 224 185 222 152 C 262 144 322 146 380 158 C 448 186 505 206 568 212 C 643 220 730 232 795 246 C 830 254 852 268 862 292 C 872 330 868 380 852 420 C 842 452 822 468 800 470 C 720 462 640 458 560 458 C 480 458 400 462 340 468 Z" />
            <path fill="#241B14" d="M 340 468 C 400 462 480 458 560 458 C 640 458 720 462 800 470 L 796 452 C 720 446 640 444 560 444 C 480 444 400 448 344 452 Z" />
            <path fill="#241B14" d="M 788 258 C 828 276 850 312 852 362 C 853 402 843 440 824 462 C 808 466 794 466 786 462 C 806 420 810 350 784 268 Z" />
            <path fill="#241B14" d="M 231 248 C 240 276 252 312 262 344 L 288 356 C 276 320 262 284 248 254 Z" />
            <path fill="none" stroke="#E8DCC0" strokeWidth="6" strokeLinecap="round" d="M 240 154 C 320 146 380 156 448 184 C 508 204 572 214 642 222 C 716 230 782 242 832 258 C 846 263 856 272 860 282" />
            <g stroke="#7A431F" strokeWidth="3">
              <path fill="#C1702F" d="M 342 322 C 322 368 306 412 298 452 L 322 460 C 332 420 346 375 362 332 Z" />
              <path fill="#C1702F" d="M 299 454 C 291 495 284 540 279 586 L 303 589 C 308 545 315 500 322 458 Z" />
              <path fill="#C1702F" d="M 279 584 C 276 600 274 612 273 620 L 296 622 C 297 612 299 600 301 586 Z" />
              <path fill="#C1702F" d="M 772 360 C 796 395 818 432 832 468 L 856 456 C 840 420 818 382 794 350 Z" />
              <path fill="#C1702F" d="M 838 460 C 846 500 852 545 855 588 L 878 586 C 876 542 869 498 860 456 Z" />
              <path fill="#C1702F" d="M 855 586 L 858 620 L 881 619 L 879 585 Z" />
            </g>
            <path fill="#241B14" d="M 270 620 L 266 648 L 300 648 L 298 620 Z" />
            <path fill="#241B14" d="M 856 619 L 859 648 L 884 648 L 882 618 Z" />
            <path fill="#C1702F" d="M 224 150 C 195 180 150 225 112 258 C 100 268 92 280 90 292 C 88 310 94 326 108 336 L 132 342 C 158 338 186 322 208 300 C 234 282 252 254 252 222 C 252 194 244 170 230 152 Z" />
            <path fill="#7A431F" d="M 130 344 C 160 338 190 320 212 296 L 206 288 C 186 310 158 328 132 334 Z" />
            <path fill="#E8DCC0" d="M 112 258 C 100 268 92 280 90 292 C 88 310 94 326 108 336 L 132 342 C 136 328 138 310 136 292 C 133 276 126 264 118 254 Z" />
            <circle cx="162" cy="236" r="8" fill="#241B14" />
            <ellipse cx="106" cy="306" rx="6" ry="9" fill="#241B14" />
            <path fill="#E8DCC0" d="M 214 150 C 226 118 232 88 224 62 C 220 48 208 38 190 34 C 172 30 158 34 150 44 C 168 44 184 50 192 62 C 202 78 202 108 196 140 Z" />
            <path fill="#7A431F" d="M 238 160 C 258 168 278 182 288 198 C 276 202 258 198 246 188 C 240 180 237 170 236 162 Z" />
          </svg>
        </motion.div>
        <motion.section custom={2} variants={rise} initial="hidden" animate="show" className="oxm-pg-copy">
          <p className="oxm-pg-lede">
            Every ox at work in every field on earth descends from this animal. Wild aurochs bulls stood close to 180 centimetres at the shoulder, near-black, with a pale eel stripe along the spine and horns that curved forward from a skull the length of a man's arm.
          </p>
          <div className="oxm-pg-ledger">
            <div className="oxm-pg-row"><span>17,000 BC</span><span>painted on the walls of Lascaux</span></div>
            <div className="oxm-pg-row"><span>AD 1627</span><span>the last one dies in <span lang="pl">Puszcza Jaktorowska</span>, Poland</span></div>
            <div className="oxm-pg-row"><span>today</span><span>about a billion and a half cattle carry the line</span></div>
          </div>
        </motion.section>
      </main>
      <motion.footer custom={3} variants={rise} initial="hidden" animate="show" className="oxm-pg-sig">
        <span>SET 1 · DESIGNED BY GLM FLASH</span>
      </motion.footer>
    </div>
  )
}
