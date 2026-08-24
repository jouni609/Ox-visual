import { motion } from 'framer-motion'
import './rodeo.css'

const RAYS = Array.from({ length: 24 }, (_, i) => {
  const a0 = (i * 15 * Math.PI) / 180
  const a1 = ((i + 1) * 15 * Math.PI) / 180
  const cx = 480
  const cy = 335
  const rIn = 74
  const rOut = 345
  const x0 = cx + rIn * Math.cos(a0)
  const y0 = cy + rIn * Math.sin(a0)
  const x1 = cx + rIn * Math.cos(a1)
  const y1 = cy + rIn * Math.sin(a1)
  const x2 = cx + rOut * Math.cos(a1)
  const y2 = cy + rOut * Math.sin(a1)
  const x3 = cx + rOut * Math.cos(a0)
  const y3 = cy + rOut * Math.sin(a0)
  return `M ${x0.toFixed(1)} ${y0.toFixed(1)} L ${x3.toFixed(1)} ${y3.toFixed(1)} A ${rOut} ${rOut} 0 0 1 ${x2.toFixed(1)} ${y2.toFixed(1)} L ${x1.toFixed(1)} ${y1.toFixed(1)} A ${rIn} ${rIn} 0 0 0 ${x0.toFixed(1)} ${y0.toFixed(1)} Z`
})

const DUST = [
  { cx: 190, cy: 498, r: 15 },
  { cx: 310, cy: 514, r: 12 },
  { cx: 400, cy: 522, r: 17 },
  { cx: 742, cy: 522, r: 14 },
  { cx: 846, cy: 502, r: 12 },
  { cx: 560, cy: 530, r: 10 },
]

function RodeoArt() {
  return (
    <svg className="ox-arena-rodeo-art" viewBox="0 0 1000 620" aria-hidden="true" focusable="false">
      <defs>
        <g id="ox-arena-rodeo-bull">
          <path d="M270 350 C290 270 390 240 480 258 C560 274 616 302 648 340 C670 368 674 402 654 424 C590 442 430 440 360 420 C314 406 286 384 270 350 Z" />
          <path d="M268 346 C220 352 180 368 158 392 C146 408 150 420 162 420 C200 420 240 412 268 400 C272 378 274 362 268 346 Z" />
          <path d="M246 342 C200 322 150 316 108 326 C112 344 148 350 192 354 C216 356 236 354 246 348 Z" />
          <path d="M238 352 C196 344 152 344 116 356 C124 374 162 376 202 370 C220 366 232 362 238 358 Z" />
          <path d="M262 336 C274 328 284 330 286 340 C278 346 268 344 262 336 Z" />
          <path d="M300 400 C288 428 292 452 310 464 C322 472 336 470 338 458 C328 440 324 420 324 404 Z" />
          <path d="M344 408 C340 434 348 454 366 462 C378 468 390 462 388 450 C378 430 370 416 366 406 Z" />
          <path d="M636 356 C700 306 772 244 842 196 C862 182 886 186 888 202 C826 254 758 316 682 380 Z" />
          <path d="M654 370 C724 336 798 296 866 260 C884 250 904 258 902 274 C834 318 758 366 690 402 Z" />
          <path d="M662 344 C742 322 832 280 902 248 C922 238 940 250 926 262 C858 300 780 334 700 358 Z" />
        </g>
        <g id="ox-arena-rodeo-rider">
          <path d="M470 266 C452 246 430 226 418 208 C412 200 424 196 432 204 C446 220 458 238 466 254 L482 254 Z" />
          <circle cx="416" cy="192" r="12" />
          <path d="M388 180 C398 172 432 170 444 180 C442 184 390 186 388 180 Z" />
          <path d="M404 172 C404 152 420 148 426 162 C428 170 420 176 404 172 Z" />
          <path d="M434 214 C420 188 402 166 388 150 C382 142 396 136 402 146 C414 166 426 190 438 212 Z" />
          <path d="M452 246 C468 254 484 262 498 272 C506 278 498 288 490 282 C474 272 458 262 446 256 Z" />
          <path d="M478 256 C498 274 520 292 538 310 C546 318 538 328 530 320 C512 304 492 284 474 266 Z" />
        </g>
      </defs>

      <g className="ox-arena-rodeo-rays">
        {RAYS.map((d, i) => (
          <path key={i} d={d} fill={i % 2 === 0 ? '#A93226' : '#E7D3A6'} />
        ))}
      </g>

      <motion.g
        style={{ transformBox: 'fill-box', transformOrigin: 'center' }}
        animate={{ rotate: [-2.5, 3, -2.5], y: [0, -8, 0] }}
        transition={{ duration: 1.9, repeat: Infinity, ease: 'easeInOut' }}
      >
        <use href="#ox-arena-rodeo-bull" transform="translate(500 360) scale(1.045) translate(-500 -360)" fill="#F4EBD7" />
        <use href="#ox-arena-rodeo-bull" fill="#211C18" />
        <circle cx="240" cy="362" r="4" fill="#F4EBD7" />
        <circle cx="166" cy="396" r="3.5" fill="#F4EBD7" />
        <path d="M158 408 C180 414 200 412 216 406" fill="none" stroke="#F4EBD7" strokeWidth="3" strokeLinecap="round" />
        <ellipse cx="316" cy="460" rx="15" ry="6" fill="#F4EBD7" />
        <ellipse cx="374" cy="460" rx="14" ry="6" fill="#F4EBD7" />
        <ellipse cx="868" cy="196" rx="14" ry="6" fill="#F4EBD7" />
        <ellipse cx="898" cy="266" rx="13" ry="6" fill="#F4EBD7" />
        <path d="M492 278 C420 340 330 380 262 398" fill="none" stroke="#F4EBD7" strokeWidth="4" strokeLinecap="round" />
      </motion.g>

      <motion.g
        style={{ transformBox: 'fill-box', transformOrigin: 'center' }}
        animate={{ rotate: [2.5, -3.5, 2.5] }}
        transition={{ duration: 1.9, repeat: Infinity, ease: 'easeInOut' }}
      >
        <use href="#ox-arena-rodeo-rider" transform="translate(480 268) scale(1.05) translate(-480 -268)" fill="#211C18" />
        <use href="#ox-arena-rodeo-rider" fill="#F4EBD7" />
      </motion.g>

      {DUST.map((p, i) => (
        <motion.circle
          key={i}
          cx={p.cx}
          cy={p.cy}
          r={p.r}
          fill="#F4EBD7"
          style={{ transformBox: 'fill-box', transformOrigin: 'center' }}
          animate={{ opacity: [0.55, 0.15, 0.55], scale: [1, 1.22, 1] }}
          transition={{ duration: 2.4 + (i % 3) * 0.7, repeat: Infinity, ease: 'easeInOut', delay: i * 0.35 }}
        />
      ))}

      <rect x="0" y="556" width="1000" height="5" fill="#211C18" />
      <rect x="0" y="561" width="1000" height="59" fill="#E7D3A6" />
      <path d="M140 576 L940 576" stroke="#A93226" strokeWidth="2" opacity="0.6" />
    </svg>
  )
}

export default function Rodeo() {
  return (
    <div className="th-ox-arena ox-arena-rodeo">
      <header className="ox-arena-rodeo-topbar">
        <span className="ox-arena-rodeo-top-left">PENDLETON ROUND-UP PRESENTS</span>
        <span className="ox-arena-rodeo-top-right">SEPT 9–13 · FIVE PERFORMANCES · ARENA GROUNDS</span>
      </header>

      <h1 className="ox-arena-rodeo-h1">
        <span className="ox-arena-rodeo-line">EIGHT</span>
        <span className="ox-arena-rodeo-line">SECONDS</span>
      </h1>
      <p className="ox-arena-rodeo-sub">
        BULL RIDING — THE TIGHTEST CLOCK IN SPORT · SANCTIONED BY THE PRCA
      </p>

      <RodeoArt />

      <section className="ox-arena-rodeo-facts" aria-label="Bull riding facts">
        <div className="ox-arena-rodeo-fact">
          <span className="ox-arena-rodeo-fact-num">8 SEC</span>
          <p className="ox-arena-rodeo-fact-text">
            The clock. The rider must cover the bull eight full seconds — the buzzer ends the
            ride, and the dirt ends the argument.
          </p>
        </div>
        <div className="ox-arena-rodeo-fact">
          <span className="ox-arena-rodeo-fact-num">0–100</span>
          <p className="ox-arena-rodeo-fact-text">
            The score. Two judges mark the bull out of fifty and the rider out of fifty. A
            hundred is perfection; nobody rides perfection.
          </p>
        </div>
        <div className="ox-arena-rodeo-fact">
          <span className="ox-arena-rodeo-fact-num">50 / 50</span>
          <p className="ox-arena-rodeo-fact-text">
            The split. A rider only scores on a qualified ride — the bull, unbothered, is judged
            on every single out.
          </p>
        </div>
      </section>

      <section className="ox-arena-rodeo-ticketbar">
        <p className="ox-arena-rodeo-ticket-text">
          TICKETS AT THE GATE — GATES 5 PM · GRAND ENTRY 7 PM · ADULTS $12 · UNDER 12 FREE
        </p>
        <div className="ox-arena-rodeo-stamp" aria-label="Set signature: SET XVII · DESIGNED BY DEEPSEEK V4 PRO">
          <span className="ox-arena-rodeo-stamp-small">SANCTIONED BY</span>
          <span className="ox-arena-rodeo-stamp-sig">SET XVII · DESIGNED BY DEEPSEEK V4 PRO</span>
        </div>
      </section>

      <footer className="ox-arena-rodeo-footer">
        <span>OX ARENA — GAME II OF V</span>
        <span>PRINTED IN THE BARNYARD · KRAFT &amp; VERMILION INK</span>
      </footer>
    </div>
  )
}
