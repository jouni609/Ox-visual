import { motion } from 'framer-motion'
import './browse.css'

export default function Browse() {
  return (
    <main className="th-ox-attention-browse ox-attention-browse">
      <header className="ox-attention-browse-top"><span>FIELD MENU / 05</span><span>WATER MEADOW · FIRST CUT</span><span>GRAZE / CHEW / RETURN</span></header>
      <section className="ox-attention-browse-intro">
        <div><p>THE MEADOW BECOMES A BODY</p><h1>Grass to grass.</h1></div>
        <p>A water buffalo crops the sweet new growth low. Chewed twice, each blade enters a slow partnership between animal and field.</p>
      </section>
      <figure className="ox-attention-browse-land" aria-label="A water buffalo bends to graze a meadow beside shallow water">
        <svg viewBox="0 0 900 570" role="img" aria-label="Broadside water buffalo grazing, with crescent horns and four legs on meadow ground">
          <circle cx="720" cy="128" r="62" className="ox-attention-browse-sun" />
          <path d="M0 353C171 324 280 363 418 345C597 320 742 344 900 319V570H0Z" className="ox-attention-browse-hill" />
          <path d="M0 414C152 389 286 418 428 403C616 382 753 411 900 387V570H0Z" className="ox-attention-browse-water" />
          <path d="M26 458C175 439 302 462 450 442M91 489C218 474 330 493 433 480M566 441C690 423 795 439 877 426" className="ox-attention-browse-ripple" />
          <path d="M223 270C249 219 312 194 391 202C476 185 550 211 596 258L584 337L524 361L301 353L237 325Z" className="ox-attention-browse-body" />
          <path d="M288 328L278 432L310 432L340 342M382 340L390 444L420 444L428 339M510 336L506 438L538 438L548 324M565 321L590 424L621 424L592 286" className="ox-attention-browse-legs" />
          <path d="M242 303C263 339 253 365 276 390L263 431L292 437L307 412L324 439L354 438L353 410L375 443L403 441L404 412L428 445L455 443L462 412L485 440L511 437L514 406L537 433L563 431L560 401L584 423L612 418L601 387L616 357L596 333L591 293L563 319L540 350L515 324L488 356L460 322L431 357L403 321L376 355L346 318L320 352L294 315L271 339Z" className="ox-attention-browse-dewlap" />
          <path d="M289 251C257 255 228 273 207 301L181 327L204 346L247 332L288 306Z" className="ox-attention-browse-neck" />
          <path d="M216 293C185 286 156 300 145 325C151 348 178 359 207 346L234 321Z" className="ox-attention-browse-head" />
          <path d="M154 333C124 332 108 349 111 370C128 383 151 377 169 360Z" className="ox-attention-browse-muzzle" />
          <ellipse cx="128" cy="352" rx="4" ry="6" className="ox-attention-browse-nostril" />
          <path d="M178 295C153 287 130 273 115 252C103 235 108 216 124 208C120 228 135 246 150 258C165 270 180 278 192 281Z" className="ox-attention-browse-horn" />
          <path d="M207 294C214 269 229 247 247 239C264 235 273 247 266 262C252 255 236 270 227 294Z" className="ox-attention-browse-horn ox-attention-browse-horn-far" />
          <path d="M176 314L154 307L164 329Z" className="ox-attention-browse-ear" />
          <circle cx="177" cy="316" r="4" className="ox-attention-browse-eye" />
          <path d="M580 271C616 273 637 258 645 241C659 230 669 239 661 254C647 278 620 291 587 292" className="ox-attention-browse-tail" />
          <motion.path d="M31 361L24 320M73 368L77 322M842 352L851 310M877 353L883 321M681 367L676 333" className="ox-attention-browse-reed" animate={{ rotate: [-3, 3, -3] }} transition={{ duration: 4.2, repeat: Infinity, ease: 'easeInOut' }} />
          <path d="M48 374l-10 9 11-2 8 9 2-12 10-7-13 1ZM799 367l-8 9 11-2 7 10 2-12 11-7-13 1ZM681 392l-9 8 11-1 6 9 3-12 9-6-12 1Z" className="ox-attention-browse-grass" />
        </svg>
        <figcaption>ONE MEAL / MANY RETURNS — WET MEADOW NOTES</figcaption>
      </figure>
      <div className="ox-attention-browse-stamp"><span>FIELD PRESS / 05</span><strong>SET XXX · DESIGNED BY GPT Luna 6</strong></div>
    </main>
  )
}
