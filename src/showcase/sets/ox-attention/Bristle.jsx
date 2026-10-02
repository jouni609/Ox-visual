import { motion } from 'framer-motion'
import './bristle.css'

export default function Bristle() {
  return (
    <main className="th-ox-attention-bristle ox-attention-bristle">
      <div className="ox-attention-bristle-rule"><span>TEXTURE INDEX 04</span><span>HAND / HIDE / HAIR</span></div>
      <header className="ox-attention-bristle-heading">
        <p>TOUCH IS A WEATHER REPORT</p>
        <h1>Feel the season.</h1>
        <span>Highland coat, late winter.</span>
      </header>
      <div className="ox-attention-bristle-loom">
        <div className="ox-attention-bristle-vertical">FIBRE STUDY — 57° 27′ N</div>
        <figure className="ox-attention-bristle-figure" aria-label="A shaggy Highland cow stands broadside, its long winter coat covering the legs">
          <svg viewBox="0 0 800 530" role="img" aria-label="Broadside Highland cow with a long shaggy coat, fringe, outward-swept horns and four legs">
            <path d="M44 451H754" className="ox-attention-bristle-ground" />
            <path d="M124 327C140 257 207 219 291 216C378 187 482 202 548 238C594 244 631 262 658 300L650 363L604 388L194 383L133 359Z" className="ox-attention-bristle-body" />
            <path d="M201 352L195 444L226 444L251 362M316 362L318 448L348 448L365 358M487 355L478 446L510 446L527 347M590 337L612 438L642 438L623 310" className="ox-attention-bristle-legs" />
            <path d="M141 346C158 371 148 400 167 422L157 444L189 447L202 426L220 449L247 448L245 423L263 451L291 450L295 423L316 450L349 449L349 421L368 449L399 447L408 420L430 449L460 447L465 418L487 449L514 447L519 412L539 444L567 442L566 409L587 439L615 436L610 406L630 427L657 425L648 392L662 359L648 331L627 354L604 382L579 348L555 386L531 352L504 387L478 354L450 390L422 352L395 388L367 351L340 388L312 349L282 387L255 349L227 385L202 348L178 380L153 348Z" className="ox-attention-bristle-locks" />
            <path d="M577 293C602 269 635 258 664 270C683 279 691 308 679 329C665 351 636 353 606 339L573 322Z" className="ox-attention-bristle-head" />
            <path d="M663 315C684 310 706 320 711 338C699 356 680 360 660 350L647 333Z" className="ox-attention-bristle-muzzle" />
            <path d="M605 279C585 273 567 263 554 248C543 233 549 215 565 208C561 226 574 241 589 251C601 259 611 263 621 265Z" className="ox-attention-bristle-horn" />
            <path d="M633 274C641 252 653 234 670 227C686 223 696 232 691 246C678 240 663 253 655 269Z" className="ox-attention-bristle-horn ox-attention-bristle-horn-far" />
            <path d="M597 296L575 290L587 312Z" className="ox-attention-bristle-ear" />
            <path d="M594 288C614 288 624 304 621 326C606 333 590 324 583 312Z" className="ox-attention-bristle-fringe" />
            <ellipse cx="631" cy="307" rx="4" ry="3" className="ox-attention-bristle-eye" />
            <path d="M132 299C103 292 89 272 97 256C110 246 121 264 119 278" className="ox-attention-bristle-tail" />
            <motion.path d="M192 257C255 233 313 234 371 249M199 280C267 259 326 262 385 276M220 307C276 292 339 295 404 309M305 330C364 315 426 321 485 336M386 365C429 351 473 354 515 368" className="ox-attention-bristle-fibre" animate={{ x: [0, 3, 0] }} transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }} />
            <path d="M668 399C682 402 695 400 705 394M105 454l-13 8m78 0-12 7m466-9-11 8m72-9-13 8" className="ox-attention-bristle-stitch" />
          </svg>
          <figcaption>OUTER FIBRE / WIND-SHED / WATER-RESISTANT</figcaption>
        </figure>
        <aside className="ox-attention-bristle-weave"><span>01 SOFT</span><span>02 DENSE</span><span>03 DOUBLE COAT</span></aside>
      </div>
      <div className="ox-attention-bristle-label"><span>LOOM TAG · WINTER SAMPLE</span><strong>SET XXX · DESIGNED BY CODEX</strong></div>
    </main>
  )
}
