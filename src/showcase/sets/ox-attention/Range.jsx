import { motion } from 'framer-motion'
import './range.css'

export default function Range() {
  return (
    <main className="th-ox-attention-range ox-attention-range">
      <header className="ox-attention-range-header"><span>OPTIC FIELD / 03</span><span>THE DISTANCE BETWEEN WATCHING AND BEING SEEN</span></header>
      <div className="ox-attention-range-layout">
        <section className="ox-attention-range-copy">
          <p className="ox-attention-range-label">SIGHT / PRAIRIE</p>
          <h1>Where the eye rests.</h1>
          <p>Before the herd moves, the bison measures the plain. Its dark eye holds the horizon in a wide, unhurried frame.</p>
          <div className="ox-attention-range-focus"><span>FOCUS DISTANCE</span><strong>∞</strong><span>OPEN RANGE</span></div>
        </section>
        <figure className="ox-attention-range-lens" aria-label="A bison stands looking across an open range">
          <svg viewBox="0 0 700 620" role="img" aria-label="Three-quarter bison with a tall shoulder hump, shaggy beard, short curved horns and four legs">
            <circle cx="350" cy="310" r="273" className="ox-attention-range-disc" />
            <circle cx="350" cy="310" r="231" className="ox-attention-range-ring" />
            <circle cx="350" cy="310" r="198" className="ox-attention-range-ring ox-attention-range-ring-inner" />
            <path d="M90 445H610M350 35V585" className="ox-attention-range-crosshair" />
            <path d="M132 448L173 401L204 415L236 385M474 411L514 433L552 403L592 425" className="ox-attention-range-terrain" />
            <path d="M177 298C194 250 238 221 290 215C307 153 354 112 408 124C452 133 471 172 464 223C518 234 558 265 578 314L568 372L519 396L281 392L211 367Z" className="ox-attention-range-body" />
            <path d="M279 358L272 481L305 481L330 374M361 370L374 486L407 486L414 366M482 370L485 478L518 478L522 357M535 350L561 467L591 467L570 322" className="ox-attention-range-legs" />
            <path d="M210 319C237 346 223 385 247 421L238 473L265 481L283 456L299 482L329 480L326 450C342 469 352 486 354 493L391 491L399 461L416 487L447 485L449 456C467 472 480 485 483 493L519 491L526 463L547 483L576 480L574 449L595 428L581 395L579 351L552 372L527 407L498 382L470 416L439 383L407 415L373 380L344 412L312 375L283 405L257 362L232 378Z" className="ox-attention-range-mane" />
            <path d="M233 267C207 250 182 251 160 269L143 298L164 322L205 317L246 337L289 315Z" className="ox-attention-range-head" />
            <path d="M151 287C129 282 110 294 105 312C118 330 138 332 157 321L175 304Z" className="ox-attention-range-muzzle" />
            <ellipse cx="126" cy="310" rx="4" ry="6" className="ox-attention-range-nostril" />
            <ellipse cx="146" cy="305" rx="3" ry="5" className="ox-attention-range-nostril" />
            <path d="M190 260C171 254 153 244 141 230C130 217 133 201 146 196C144 211 156 223 170 232C182 239 194 244 204 246Z" className="ox-attention-range-horn" />
            <path d="M224 261C232 243 245 230 260 228C274 231 276 243 267 253C256 247 243 261 235 275Z" className="ox-attention-range-horn ox-attention-range-horn-far" />
            <path d="M184 280L163 271L171 292Z" className="ox-attention-range-ear" />
            <ellipse cx="183" cy="294" rx="5" ry="4" className="ox-attention-range-eye" />
            <ellipse cx="218" cy="283" rx="4" ry="3" className="ox-attention-range-eye" />
            <path d="M442 235C476 240 494 230 505 211C516 200 527 210 519 225C506 250 480 262 449 258" className="ox-attention-range-tail" />
            <motion.path d="M130 123H193M475 145H548M86 353H130M558 326H614" className="ox-attention-range-tick" animate={{ opacity: [.35, 1, .35] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }} />
          </svg>
          <figcaption><span>SPECIES: BISON BISON</span><span>SUBJECT IN RANGE</span></figcaption>
        </figure>
      </div>
      <div className="ox-attention-range-seal"><span>VIEWFINDER / RANGE 03</span><strong>SET XXX · DESIGNED BY CODEX</strong></div>
      <div className="ox-attention-range-mark">N 46° / SIGHTLINE OPEN</div>
    </main>
  )
}
