import { motion } from 'framer-motion'
import './Sokha.css'

export default function Sokha() {
  return (
    <div className="oxm-page th-oxm oxm-sokha">
      <div className="oxm-sk-wedge" aria-hidden="true" />
      <div className="oxm-sk-mast">
        <span>Field poster · No. 7</span>
        <span>The draught year</span>
        <span>Printed in two inks</span>
      </div>
      <main className="oxm-sk-grid">
        <header className="oxm-sk-head">
          <motion.h1
            initial={{ opacity: 0, x: -56 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: 'spring', stiffness: 110, damping: 15 }}
          >
            Sokha
          </motion.h1>
          <motion.p
            className="oxm-sk-sub"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.22, duration: 0.7 }}
          >
            One pair. One plough. One field. An ox pulls at a walking pace from dawn to dusk and never asks for grain.
          </motion.p>
          <motion.p
            className="oxm-sk-ru"
            lang="ru"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.7 }}
          >
            Пахать землю
          </motion.p>
        </header>
        <motion.div
          className="oxm-sk-stage"
          initial={{ x: -140, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 80, damping: 16, delay: 0.15 }}
        >
          <svg className="oxm-sk-ox" viewBox="0 0 1000 700" role="img" aria-label="A bold ink ox straining in its yoke, pulling to the right with hind legs braced">
            <path fill="#1C1712" d="M 150 272 C 112 274 84 290 70 318 L 94 332 C 104 310 124 294 152 292 Z" />
            <path fill="#1C1712" d="M 66 314 C 56 334 54 356 60 378 C 72 364 80 344 84 326 Z" />
            <path fill="#1C1712" d="M 245 330 C 228 362 214 395 206 428 L 242 438 C 250 405 262 370 276 338 Z" />
            <path fill="#1C1712" d="M 200 426 L 165 555 L 190 564 L 224 436 Z" />
            <path fill="#1C1712" d="M 163 553 L 152 592 L 176 600 L 187 561 Z" />
            <path fill="#C33424" d="M 140 590 L 130 648 L 168 648 L 163 590 Z" />
            <path fill="#1C1712" d="M 205 320 C 185 355 168 392 158 428 L 196 440 C 205 405 218 368 234 335 Z" />
            <path fill="#1C1712" d="M 152 428 L 112 560 L 138 570 L 176 440 Z" />
            <path fill="#1C1712" d="M 110 558 L 98 596 L 122 604 L 134 566 Z" />
            <path fill="#C33424" d="M 92 600 L 80 648 L 122 648 L 116 606 Z" />
            <path fill="#1C1712" d="M 636 168 L 872 238 L 864 270 L 628 200 Z" />
            <path fill="#C33424" d="M 700 186 L 716 234 L 736 228 L 720 180 Z" />
            <path fill="#C33424" d="M 760 200 L 768 238 L 786 234 L 778 196 Z" />
            <path fill="none" stroke="#C33424" strokeWidth="8" d="M 858 252 C 868 262 874 274 872 288" />
            <path fill="#1C1712" d="M 752 288 C 752 254 758 222 772 198 C 782 182 796 172 812 166 C 800 174 788 186 778 204 C 764 228 756 258 754 290 Z" />
            <path fill="#1C1712" d="M 770 286 C 776 250 786 218 806 196 C 820 182 838 174 856 172 C 864 171 870 172 874 176 C 866 180 854 184 842 190 C 822 200 806 220 796 248 C 790 266 786 280 784 292 Z" />
            <path fill="#1C1712" d="M 930 396 C 908 380 878 362 850 348 C 832 338 818 330 806 322 C 794 310 784 300 776 292 C 738 272 702 240 668 216 C 648 198 620 184 590 176 C 556 168 528 172 508 184 C 472 196 424 206 378 216 C 318 228 258 238 212 248 C 178 256 154 268 146 286 C 138 308 142 332 156 350 C 174 382 192 414 202 444 C 208 472 218 494 238 502 C 302 510 380 510 450 506 C 500 504 546 504 586 506 C 632 510 682 504 722 490 C 756 476 782 460 802 448 C 818 458 834 464 848 462 C 864 460 878 450 890 438 C 902 430 912 424 918 428 Z" />
            <path fill="#1C1712" d="M 566 450 C 560 490 556 528 556 558 L 594 562 C 598 528 602 490 606 452 Z" />
            <path fill="#1C1712" d="M 558 556 L 552 630 L 580 632 L 588 560 Z" />
            <path fill="#C33424" d="M 548 626 L 546 648 L 584 648 L 583 626 Z" />
            <path fill="#1C1712" d="M 618 455 C 614 495 612 530 613 560 L 648 562 C 651 530 653 495 654 458 Z" />
            <path fill="#1C1712" d="M 614 558 L 610 630 L 637 632 L 643 560 Z" />
            <path fill="#C33424" d="M 605 626 L 603 648 L 640 648 L 639 626 Z" />
            <path fill="#1C1712" stroke="#F2E8D5" strokeWidth="3.5" d="M 752 268 C 738 262 722 262 708 270 C 718 278 732 280 744 278 C 750 276 753 272 752 268 Z" />
            <circle cx="852" cy="388" r="9" fill="#C33424" />
            <ellipse cx="902" cy="416" rx="5" ry="8" fill="#F2E8D5" />
            <circle cx="920" cy="446" r="14" fill="none" stroke="#C33424" strokeWidth="6" />
          </svg>
        </motion.div>
      </main>
      <div className="oxm-sk-band" aria-hidden="true">
        <div className="oxm-sk-track">
          <div className="oxm-sk-half">
            <span>ONE PAIR · ONE PLOUGH · ONE FIELD ·&nbsp;</span>
            <span>ONE PAIR · ONE PLOUGH · ONE FIELD ·&nbsp;</span>
            <span>ONE PAIR · ONE PLOUGH · ONE FIELD ·&nbsp;</span>
          </div>
          <div className="oxm-sk-half">
            <span>ONE PAIR · ONE PLOUGH · ONE FIELD ·&nbsp;</span>
            <span>ONE PAIR · ONE PLOUGH · ONE FIELD ·&nbsp;</span>
            <span>ONE PAIR · ONE PLOUGH · ONE FIELD ·&nbsp;</span>
          </div>
        </div>
      </div>
      <section className="oxm-sk-stats">
        <div><strong>3 km/h</strong><span>working pace, kept all day</span></div>
        <div><strong>1.5×</strong><span>its own weight in a short pull</span></div>
        <div><strong>Straw</strong><span>fuel the field itself provides</span></div>
      </section>
      <footer className="oxm-sk-sig">
        <span>SET 2 · DESIGNED BY GLM FLASH</span>
      </footer>
    </div>
  )
}
