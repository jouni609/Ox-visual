import { useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import './kuyutha.css'

const wave = (y) => `M-80 ${y} ${Array.from({ length: 18 }, () => 'q20 -9 40 0 q20 9 40 0').join('')}`

const SEA = `${wave(858)} L1120 1000 L-80 1000 Z`

const STARS = Array.from({ length: 30 }, (_, i) => {
  const a = (i / 30) * Math.PI * 2
  return { x: Math.cos(a) * 148, y: Math.sin(a) * 148, r: i % 5 === 0 ? 3.4 : 1.9 }
})

const CLIMES = [86, 66, 46, 26]
const FLAMES = [-72, -54, -36, -18, 0, 18, 36, 54, 72]
const HOLES = [
  [386, 324, 3.4],
  [422, 332, 2.6],
  [458, 318, 3.2],
  [496, 334, 2.8],
  [532, 320, 3.4],
  [568, 332, 2.4],
]

const BULL_BODY =
  'M215 404C226 394 250 390 282 392C360 396 440 400 520 394C560 390 592 384 612 378C636 346 680 328 712 338C732 346 744 356 756 334C764 319 774 310 782 304C812 284 843 267 871 247C884 237 896 228 898 224C911 215 929 217 938 228C946 240 951 254 952 265C952 273 951 278 950 280C948 288 944 299 938 306C934 310 928 314 921 319C914 324 907 332 900 342C893 353 889 362 884 366C880 370 878 371 874 373C870 375 867 376 864 376C859 378 854 379 851 379C846 378 841 378 837 377C834 375 830 373 828 372C822 394 816 414 810 438C798 470 782 508 760 544C750 562 728 578 712 574C708 594 704 618 702 636C698 656 694 672 692 690L686 780L692 784L696 790L638 790L642 784L648 780L654 690C658 672 662 652 666 634L672 574C632 590 560 600 480 598C440 596 412 596 395 590C366 610 346 636 338 672L332 690L326 780L332 784L338 790L274 790L280 784L286 780L294 690L302 670C292 662 288 650 296 640C276 602 262 574 250 536C240 502 236 470 242 448C238 424 232 412 215 404Z'

function Stack({ still, jolt }) {
  const loop = (animate, transition) => (still ? {} : { animate, transition })
  return (
    <svg
      className="ox-heft-kuyutha-svg"
      viewBox="0 -24 1040 1024"
      role="img"
      aria-label="A great horned bull carries a green slab on its back; a small angel stands on the slab and holds up the disc of the earth; the bull stands on a giant fish in dark water"
    >
      <defs>
        <linearGradient id="ox-heft-kuyutha-sea" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#27497f" stopOpacity="0" />
          <stop offset="0.14" stopColor="#27497f" stopOpacity="0.78" />
          <stop offset="0.86" stopColor="#27497f" stopOpacity="0.78" />
          <stop offset="1" stopColor="#27497f" stopOpacity="0" />
        </linearGradient>
        <radialGradient id="ox-heft-kuyutha-earth" cx="0.42" cy="0.38" r="0.7">
          <stop offset="0" stopColor="#7db6d8" />
          <stop offset="0.65" stopColor="#3a78b8" />
          <stop offset="1" stopColor="#24508f" />
        </radialGradient>
        <linearGradient id="ox-heft-kuyutha-jade" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#8fd0b4" />
          <stop offset="0.5" stopColor="#3f9a78" />
          <stop offset="1" stopColor="#236b52" />
        </linearGradient>
        <linearGradient id="ox-heft-kuyutha-fish" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#c4d8ec" />
          <stop offset="0.6" stopColor="#809fc6" />
          <stop offset="1" stopColor="#4f6f9c" />
        </linearGradient>
        <linearGradient id="ox-heft-kuyutha-hide" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#f3e2ae" />
          <stop offset="1" stopColor="#dfba6c" />
        </linearGradient>
        <linearGradient id="ox-heft-kuyutha-horn" x1="0" y1="1" x2="0.6" y2="0">
          <stop offset="0" stopColor="#8a5426" />
          <stop offset="0.55" stopColor="#b98245" />
          <stop offset="1" stopColor="#ecd9a8" />
        </linearGradient>
      </defs>

      <motion.g
        key={jolt}
        initial={jolt ? { rotate: -1.1 } : false}
        animate={{ rotate: 0 }}
        transition={{ type: 'spring', stiffness: 34, damping: 2.6, mass: 3 }}
        style={{ transformBox: 'view-box', transformOrigin: '480px 880px' }}
      >
        <g fill="#f3df9a">
          {STARS.map((s, i) => (
            <circle key={i} cx={480 + s.x} cy={172 + s.y} r={s.r} />
          ))}
        </g>
        <motion.g
          {...loop({ rotate: 360 }, { duration: 180, ease: 'linear', repeat: Infinity })}
          style={{ transformBox: 'view-box', transformOrigin: '480px 172px' }}
        >
          {STARS.filter((_, i) => i % 2 === 1).map((s, i) => (
            <circle key={i} cx={480 + s.x} cy={172 + s.y} r={1.2} fill="#fff6d6" />
          ))}
        </motion.g>

        <g fill="#b8505a" opacity="0.88">
          {FLAMES.map((a) => (
            <path key={a} transform={`rotate(${a} 480 172)`} d="M480 66C470 48 470 32 480 20C490 32 490 48 480 66Z" />
          ))}
        </g>
        <circle cx="480" cy="172" r="112" fill="none" stroke="#c4963a" strokeWidth="5" />
        <circle cx="480" cy="172" r="120" fill="none" stroke="#c4963a" strokeWidth="9" strokeLinecap="round" strokeDasharray="0.1 21.5" />
        <circle cx="480" cy="172" r="100" fill="url(#ox-heft-kuyutha-earth)" />
        <g fill="none" stroke="#e3c069" strokeWidth="1.6" opacity="0.9">
          {CLIMES.map((r) => (
            <circle key={r} cx="480" cy="172" r={r} />
          ))}
        </g>
        <g fill="#3f9a78" opacity="0.92">
          <path d="M406 136C426 120 456 116 478 128C492 138 488 156 470 162C448 168 424 160 406 136Z" />
          <path d="M500 166C522 158 550 166 560 188C566 206 548 220 526 214C506 206 496 184 500 166Z" />
          <path d="M434 202C454 196 474 206 478 224C480 240 462 248 444 240C428 232 424 214 434 202Z" />
        </g>
        <circle cx="480" cy="172" r="100" fill="none" stroke="#15294f" strokeWidth="2.5" />

        <g stroke="#5a2a18" strokeWidth="2.2" strokeLinejoin="round" strokeLinecap="round" transform="translate(30 18)">
          <path fill="#3f9a78" d="M433 280C402 256 368 246 334 250C348 268 354 290 350 312C370 298 398 290 430 292Z" />
          <path fill="#3f9a78" d="M467 280C498 256 532 246 566 250C552 268 546 290 550 312C530 298 502 290 470 292Z" />
          <path fill="none" stroke="#e3c069" strokeWidth="1.4" d="M428 284C400 266 372 258 344 258M424 290C398 280 374 276 352 278M472 284C500 266 528 258 556 258M476 290C502 280 526 276 548 278" />
          <path fill="none" stroke="#c98d5a" strokeWidth="7" d="M404 300L432 282M496 300L468 282" />
          <path fill="#f3df9a" d="M400 292C396 286 398 280 404 278C410 280 412 288 408 294Z" />
          <path fill="#f3df9a" d="M500 292C504 286 502 280 496 278C490 280 488 288 492 294Z" />
          <path fill="#b5342a" d="M430 338L424 296C422 282 432 272 450 270C468 272 478 282 476 296L470 338Z" />
          <path fill="#e3c069" d="M450 274L436 336L464 336Z" fillOpacity="0.35" />
          <circle cx="450" cy="258" r="15" fill="none" stroke="#e3c069" strokeWidth="3.5" />
          <circle cx="450" cy="258" r="9" fill="#c98d5a" />
          <path fill="#3a2416" d="M441 256C442 248 458 248 459 256C458 252 456 250 450 250C444 250 442 252 441 256Z" />
          <path fill="#c98d5a" d="M436 334C432 340 440 342 446 338Z" />
          <path fill="#c98d5a" d="M464 334C468 340 460 342 454 338Z" />
        </g>

        <g stroke="#5a2a18" strokeWidth="2.2" strokeLinejoin="round" strokeLinecap="round" transform="translate(480 790) scale(1.1) translate(-490 -790)">
          <path fill="#d2ad60" d="M692 572L684 634L674 690L668 780L674 784L678 790L620 790L624 784L630 780L636 690L646 634L654 572Z" />
          <path fill="#d2ad60" d="M470 576C442 608 420 642 410 676L404 692L398 780L404 784L408 790L346 790L350 784L354 780L348 692C338 684 332 674 338 664L332 632L352 576Z" />
          <path fill="#8a4a24" d="M220 404C206 460 204 530 212 590C216 620 214 646 208 668C198 660 194 636 198 604C196 540 202 464 210 410Z" />
          <path fill="#5a2a18" d="M210 600C198 624 198 662 208 688C220 700 234 692 236 672C238 644 228 618 222 600Z" />
          <g>
            <path fill="url(#ox-heft-kuyutha-horn)" d="M732 352C716 302 708 248 722 220C736 198 762 190 784 196C776 214 768 230 760 244C750 260 746 276 750 290C754 314 760 340 764 370Z" />
            <path fill="#3a2416" opacity="0.34" d="M732 352C716 302 708 248 722 220C736 198 762 190 784 196C776 214 768 230 760 244C750 260 746 276 750 290C754 314 760 340 764 370Z" />
            <path fill="#e3cfa0" d="M766 202C772 199 778 196 784 196C780 204 776 212 772 220L758 212C761 208 763 205 766 202Z" />
          </g>
          <motion.path
            fill="url(#ox-heft-kuyutha-hide)"
            {...loop({ scale: [1, 1.014, 1] }, { duration: 7, ease: 'easeInOut', repeat: Infinity })}
            style={{ transformBox: 'fill-box', transformOrigin: '50% 100%' }}
            d={BULL_BODY}
          />
          <path fill="#f7ebc6" d="M656 700L652 780L692 780L698 690L692 676C682 684 666 694 656 700Z" opacity="0.8" />
          <path fill="#f7ebc6" d="M828 372C822 394 816 414 810 438C798 470 782 508 760 544C750 562 728 578 712 574C736 532 754 496 766 458C778 422 796 400 812 356Z" opacity="0.7" />
          <path fill="#f7ebc6" d="M672 574C632 590 560 600 480 598C440 596 412 596 395 590C450 592 550 584 628 560Z" opacity="0.6" />
          <path fill="url(#ox-heft-kuyutha-horn)" d="M750 340C742 294 744 250 762 220C776 200 798 192 820 196C812 212 804 226 796 240C786 258 778 272 776 284C776 300 780 316 784 332Z" />
          <path fill="#f6e6bc" d="M802 202C808 199 814 196 820 196C816 204 812 212 808 220L794 212C797 208 799 205 802 202Z" />
          <path fill="#c98a3e" d="M908 226C925 220 941 230 947 250C951 266 948 279 941 289C938 280 934 267 931 254C924 238 916 230 908 226Z" />
          <path fill="#3a1c0c" d="M929 234C935 232 939 238 936 245C930 248 925 242 929 234Z" />
          <path fill="none" strokeWidth="2.4" d="M946 278C943 290 940 296 933 303" />
          <path fill="#1a0d06" d="M825 310C831 302 845 302 853 310C847 320 833 322 825 310Z" />
          <circle cx="839" cy="307" r="3.2" fill="#fff8e6" />
          <path fill="none" strokeWidth="2" d="M823 304C831 296 847 296 855 306" />
          <path fill="#b07a3a" d="M774 348C754 348 732 360 718 380C740 394 768 384 780 364Z" />
          <path fill="none" stroke="#5a2a18" strokeWidth="1.6" d="M770 358C756 358 744 364 736 372" />
          <path fill="#4a2410" d="M646 780L692 780L698 784L702 790L644 790L648 784Z" />
          <path fill="#4a2410" d="M326 780L332 784L338 790L274 790L280 784L286 780Z" />
          <path fill="#4a2410" d="M690 780L734 780L738 784L742 790L684 790L688 784Z" />
          <path fill="#4a2410" d="M398 780L404 784L408 790L346 790L350 784L354 780Z" />
        </g>

        <g stroke="#5a2a18" strokeWidth="2.4" strokeLinejoin="round">
          <path fill="url(#ox-heft-kuyutha-jade)" d="M368 292H580C589 292 594 297 594 306V344C594 353 589 358 580 358H368C359 358 354 353 354 344V306C354 297 359 292 368 292Z" />
          <path fill="none" stroke="#e3c069" strokeWidth="2.6" d="M366 302H582" />
          <g fill="#f3df9a">
            {HOLES.map(([x, y, r]) => (
              <circle key={x} cx={x} cy={y} r={r} />
            ))}
          </g>
        </g>

        <g stroke="#15294f" strokeWidth="2.4" strokeLinejoin="round" strokeLinecap="round">
          <path fill="#809fc6" d="M790 850C826 822 856 802 890 790C880 814 876 834 876 850C876 866 880 886 890 912C856 900 826 880 790 850Z" />
          <path fill="url(#ox-heft-kuyutha-fish)" d="M132 852C200 804 330 790 480 794C630 798 734 820 806 852C734 884 630 904 480 906C330 910 200 900 132 852Z" />
          <path fill="#5c7dad" d="M296 868C328 864 356 872 372 894C346 900 316 892 296 868Z" />
          <path fill="none" d="M254 812C272 836 272 868 254 892" />
          <path fill="none" d="M260 836L272 852L260 868" />
          <g fill="none" stroke="#eef4fb" strokeWidth="1.3" opacity="0.7">
            <path d="M310 828C326 842 342 842 358 828M358 828C374 842 390 842 406 828M406 828C422 842 438 842 454 828M454 828C470 842 486 842 502 828M502 828C518 842 534 842 550 828M550 828C566 842 582 842 598 828M598 828C614 842 630 842 646 828" />
            <path d="M334 858C350 872 366 872 382 858M382 858C398 872 414 872 430 858M430 858C446 872 462 872 478 858M478 858C494 872 510 872 526 858M526 858C542 872 558 872 574 858M574 858C590 872 606 872 622 858" />
          </g>
          <circle cx="192" cy="840" r="11" fill="#f6f2e4" />
          <circle cx="195" cy="842" r="5.5" fill="#15294f" />
          <path fill="none" d="M138 858C148 864 158 866 168 864" />
        </g>

        <path d={SEA} fill="url(#ox-heft-kuyutha-sea)" />
        <g fill="none" stroke="#e3c069" strokeWidth="1.8" strokeLinecap="round">
          {[866, 892, 920, 950, 980].map((y, i) => (
            <motion.path
              key={y}
              {...loop({ x: [0, -80] }, { duration: 9 + i * 2.4, ease: 'linear', repeat: Infinity })}
              d={wave(y)}
              opacity={0.9 - i * 0.14}
            />
          ))}
        </g>
      </motion.g>
    </svg>
  )
}

export default function Kuyutha() {
  const still = useReducedMotion()
  const [jolt, setJolt] = useState(0)

  return (
    <main className="th-ox-heft ox-heft-kuyutha">
      <div className="ox-heft-kuyutha-leaf">
        <Corner className="ox-heft-kuyutha-corner ox-heft-kuyutha-corner-tl" />
        <Corner className="ox-heft-kuyutha-corner ox-heft-kuyutha-corner-tr" />
        <Corner className="ox-heft-kuyutha-corner ox-heft-kuyutha-corner-bl" />
        <Corner className="ox-heft-kuyutha-corner ox-heft-kuyutha-corner-br" />

        <p className="ox-heft-kuyutha-kicker" lang="ar" dir="rtl">
          عجائب المخلوقات وغرائب الموجودات · القزويني
        </p>

        <div className="ox-heft-kuyutha-body">
          <div className="ox-heft-kuyutha-stage">
            <figure className="ox-heft-kuyutha-stack">
              <Stack still={still} jolt={jolt} />
            </figure>
            <button type="button" className="ox-heft-kuyutha-stir" onClick={() => setJolt((n) => n + 1)}>
              <span className="ox-heft-kuyutha-stir-mark" aria-hidden="true">
                ~
              </span>
              Stir the fish
            </button>
          </div>

          <div className="ox-heft-kuyutha-text">
            <h1 className="ox-heft-kuyutha-title">
              <span lang="ar">كيوثاء</span>
              <span className="ox-heft-kuyutha-title-latin">Kuyūthā</span>
            </h1>
            <p className="ox-heft-kuyutha-sub">The bull beneath the earth</p>
            <p className="ox-heft-kuyutha-lede">
              The earth would not keep still. So God set an angel beneath it, a slab of green jacinth beneath the
              angel, and a great bull beneath the slab to carry it on its back and on its horns.
            </p>
            <p>
              The bull is named Kuyūthā. Beneath it stands the fish Bahamūt, beneath the fish the water, beneath the
              water the darkness. Al-Qazwīnī wrote it down around 1280 in his <cite>Wonders of Creation</cite>, on the
              authority of a telling credited to Ibn ʿAbbās five centuries earlier.
            </p>

            <ol className="ox-heft-kuyutha-layers" aria-label="The order of the stack, from the earth downward">
              <li>
                <span className="ox-heft-kuyutha-layer-num" aria-hidden="true">
                  1
                </span>
                <span>
                  <b>Earth</b> on an <b>angel</b>&rsquo;s shoulders
                </span>
              </li>
              <li>
                <span className="ox-heft-kuyutha-layer-num" aria-hidden="true">
                  2
                </span>
                <span>
                  A <b>jacinth</b> slab
                </span>
              </li>
              <li>
                <span className="ox-heft-kuyutha-layer-num" aria-hidden="true">
                  3
                </span>
                <span>
                  The <b>bull</b>, with 40,000 limbs
                </span>
              </li>
              <li>
                <span className="ox-heft-kuyutha-layer-num" aria-hidden="true">
                  4
                </span>
                <span>
                  The <b>fish</b> Bahamūt
                </span>
              </li>
              <li>
                <span className="ox-heft-kuyutha-layer-num" aria-hidden="true">
                  5
                </span>
                <span>
                  <b>Water</b>, then darkness
                </span>
              </li>
            </ol>

            <blockquote className="ox-heft-kuyutha-quote">
              <p>&ldquo;The weight of the world and what is on it was as two letters from the book of God.&rdquo;</p>
              <cite>
                al-Thaʿlabī, <span lang="ar">عرائس المجالس</span> (Lives of the Prophets), d. 1038
              </cite>
            </blockquote>
          </div>
        </div>

        <footer className="ox-heft-kuyutha-foot">
          <p className="ox-heft-kuyutha-caption" lang="ar" dir="rtl">
            الثور كيوثاء تحت الصخرة، والحوت بهموت تحت الثور
          </p>
          <p className="ox-heft-kuyutha-seal">SET 1 · DESIGNED BY GLM 5.4</p>
        </footer>
      </div>
    </main>
  )
}

function Corner({ className }) {
  return (
    <svg className={className} viewBox="0 0 120 120" aria-hidden="true">
      <path d="M2 118V2H118" fill="none" stroke="var(--ox-heft-kuyutha-gold)" strokeWidth="3" />
      <path d="M14 118V14H118" fill="none" stroke="var(--ox-heft-kuyutha-lapis)" strokeWidth="2" />
      <path d="M22 62C22 40 40 22 62 22C84 22 102 40 102 62" fill="none" stroke="var(--ox-heft-kuyutha-gold)" strokeWidth="2.5" />
      <path d="M62 30L72 50L92 60L72 70L62 90L52 70L32 60L52 50Z" fill="var(--ox-heft-kuyutha-lapis)" />
      <circle cx="62" cy="60" r="6" fill="var(--ox-heft-kuyutha-gold)" />
      <circle cx="22" cy="22" r="5" fill="var(--ox-heft-kuyutha-madder)" />
    </svg>
  )
}
