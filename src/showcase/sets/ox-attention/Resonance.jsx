import { motion } from 'framer-motion'
import './resonance.css'

export default function Resonance() {
  return (
    <main className="th-ox-attention-resonance ox-attention-resonance">
      <div className="ox-attention-resonance-frame">
        <div className="ox-attention-resonance-topline"><span>FIELD FREQUENCY / 02</span><span>GUJARAT · OPEN PASTURE</span></div>
        <header className="ox-attention-resonance-title">
          <p>THE SOUND HAS A BODY</p>
          <h1>Resonance!</h1>
          <span className="ox-attention-resonance-number">118 <small>HZ</small></span>
        </header>
        <p className="ox-attention-resonance-note">The zebu bull throws his call across the dry grass. A high hump catches the breath; the broad throat gives it back.</p>
        <figure className="ox-attention-resonance-scene" aria-label="A humped zebu bull bellows, its four legs planted on dry ground">
          <svg viewBox="0 0 760 590" role="img" aria-label="Left-facing zebu with a high shoulder hump, short horns, open mouth and four visible legs">
            <path d="M0 490H760" className="ox-attention-resonance-ground" />
            <motion.path d="M119 173C64 153 39 122 57 103M116 196C46 189 17 163 26 145M122 219C71 224 42 211 28 196" className="ox-attention-resonance-wave" animate={{ opacity: [.2, .95, .2], scale: [.96, 1.04, .96] }} transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }} />
            <path d="M236 291C243 235 273 198 327 183C349 121 394 99 440 124C477 145 477 193 467 218C524 221 583 247 621 294L602 365L544 387L275 377L223 348Z" className="ox-attention-resonance-body" />
            <path d="M286 354L276 475L309 475L341 365M374 369L386 475L418 475L426 351M511 359L509 479L543 479L553 345M575 345L598 468L630 468L610 319" className="ox-attention-resonance-legs" />
            <path d="M269 305C295 341 288 378 312 411L300 471L279 480L312 485L330 462L350 485L380 484L383 453L408 482L432 482L433 450C458 466 469 484 470 493L507 491L518 463L539 486L566 484L565 456L584 477L615 476L608 443L622 414L604 384L616 351L580 375L552 406L521 376L492 408L462 373L431 409L398 367L367 402L333 358L306 387L283 341Z" className="ox-attention-resonance-dewlap" />
            <path d="M267 266C228 248 183 244 146 261L119 287L143 313L190 309L230 329L274 321Z" className="ox-attention-resonance-neck" />
            <path d="M154 259C124 242 97 246 77 268L74 302C90 322 124 327 155 309L184 285Z" className="ox-attention-resonance-head" />
            <path d="M77 287C49 285 30 298 29 319C44 335 64 334 81 324L98 307Z" className="ox-attention-resonance-muzzle" />
            <path d="M43 323C54 317 67 319 76 326L72 339L49 340Z" className="ox-attention-resonance-mouth" />
            <ellipse cx="52" cy="307" rx="4" ry="6" className="ox-attention-resonance-nostril" />
            <path d="M101 255C79 249 59 236 47 219C35 202 39 182 54 173C48 193 59 210 73 221C86 231 100 237 112 239Z" className="ox-attention-resonance-horn" />
            <path d="M132 252C141 231 155 212 173 205C189 201 198 213 191 226C177 221 162 236 151 259Z" className="ox-attention-resonance-horn ox-attention-resonance-horn-far" />
            <path d="M96 275L77 265L85 287Z" className="ox-attention-resonance-ear" />
            <circle cx="101" cy="278" r="4" className="ox-attention-resonance-eye" />
            <path d="M603 291C644 289 666 274 673 254C683 242 695 250 689 266C677 298 650 314 610 315" className="ox-attention-resonance-tail" />
            <path d="M169 247C177 229 184 213 190 201M190 256C202 231 212 221 223 213" className="ox-attention-resonance-call" />
          </svg>
          <figcaption>CALL / AIR / GROUND — AN OPEN-COUNTRY INSTRUMENT</figcaption>
        </figure>
        <div className="ox-attention-resonance-stamp"><span>ARCHIVE OF ANIMAL VOICE</span><strong>SET XXX · DESIGNED BY GPT Luna 6</strong></div>
        <div className="ox-attention-resonance-side">LISTEN<br/>THROUGH<br/>THE LAND</div>
      </div>
    </main>
  )
}
