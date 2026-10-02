import { motion } from 'framer-motion'
import './windward.css'

export default function Windward() {
  return (
    <main className="th-ox-attention-windward ox-attention-windward">
      <header className="ox-attention-windward-head">
        <div className="ox-attention-windward-kicker"><span>FIELD STUDY 01</span><span>OLFACTION / WINDWARD</span></div>
        <div className="ox-attention-windward-copy">
          <p className="ox-attention-windward-index">THE AIR ARRIVES FIRST</p>
          <h1>Read the wind.</h1>
          <p className="ox-attention-windward-deck">A yak lifts its muzzle into the high pasture. Cold air carries the herd, the weather and the scent of grass still hidden beyond the ridge.</p>
          <div className="ox-attention-windward-altitude"><strong>4,800 M</strong><span>UPWIND OF THE VALLEY</span></div>
        </div>
        <figure className="ox-attention-windward-art" aria-label="A long-haired yak stands in profile with its muzzle raised into the wind">
          <svg viewBox="0 0 760 620" role="img" aria-label="Long-haired yak, raised muzzle, broad upturned horns and four legs">
            <path d="M0 500H760" className="ox-attention-windward-ground" />
            <motion.path d="M7 210C123 164 187 181 268 205M9 253C94 222 145 229 201 244M24 289C93 273 126 277 166 286" className="ox-attention-windward-wind" animate={{ x: [0, 18, 0], opacity: [.4, .9, .4] }} transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }} />
            <path d="M91 494C157 462 208 467 249 493M526 495C600 465 667 470 726 494" className="ox-attention-windward-scree" />
            <path d="M127 325C155 277 197 247 272 238C327 207 372 202 427 228C492 237 545 265 581 311L569 378L521 400L191 393L141 367Z" className="ox-attention-windward-body" />
            <path d="M187 345L181 471L214 471L248 362M287 370L290 489L321 489L339 378M455 369L448 489L480 489L504 363M526 352L545 473L577 473L570 328" className="ox-attention-windward-legs" />
            <path d="M153 351C169 385 163 416 184 450L175 470L212 472L222 447L236 474L266 472L260 444C278 464 288 479 288 497L325 496L331 470L347 495L379 493L381 465C398 482 410 490 414 498L452 496L460 473L478 494L506 493L513 459C527 473 542 483 546 495L580 492L579 465L596 483L619 481L602 451L609 421L590 398L586 355L556 373L533 401L498 389L475 418L444 397L416 425L384 398L354 429L323 394L292 424L260 390L225 414L197 377L167 383Z" className="ox-attention-windward-fringe" />
            <path d="M185 293C153 278 133 252 131 216C128 187 142 163 167 147C189 137 220 153 235 177L226 232L204 276Z" className="ox-attention-windward-neck" />
            <path d="M153 176C118 168 95 183 87 209C79 233 93 260 115 270L158 260L184 220Z" className="ox-attention-windward-face" />
            <path d="M95 238C72 242 57 256 55 274C60 293 86 302 111 290L126 264Z" className="ox-attention-windward-muzzle" />
            <ellipse cx="78" cy="271" rx="5" ry="7" className="ox-attention-windward-nostril" />
            <path d="M139 177C116 169 98 155 88 136C79 118 85 96 102 84C96 105 107 127 123 141C137 152 151 159 165 164Z" className="ox-attention-windward-horn" />
            <path d="M170 173C178 151 190 130 207 119C222 109 238 117 240 132C225 125 212 136 203 151C196 165 191 180 185 190Z" className="ox-attention-windward-horn ox-attention-windward-horn-far" />
            <path d="M126 211L103 203L120 224Z" className="ox-attention-windward-ear" />
            <circle cx="127" cy="211" r="4" className="ox-attention-windward-eye" />
            <path d="M582 300C623 309 640 296 653 275C663 262 675 270 668 285C657 313 632 329 589 324" className="ox-attention-windward-tail" />
            <path d="M37 190C55 184 69 185 82 192M33 218C51 212 64 214 76 220M40 247C55 243 67 245 76 249" className="ox-attention-windward-wisp" />
          </svg>
          <figcaption className="ox-attention-windward-caption">BOS GRUNNIENS · AIR-SCENTING / 04:16</figcaption>
        </figure>
        <div className="ox-attention-windward-tag"><span>WOOL / RIDGE / WEATHER</span><strong>SET XXX · DESIGNED BY GPT Luna 6</strong></div>
      </header>
    </main>
  )
}
