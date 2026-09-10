import { motion } from 'framer-motion'
import './pecus.css'
import { hornPath } from './forms.js'

const silver = 'url(#ox-lexicon-pecus-silver)'

function Medallion() {
  return (
    <svg
      className="ox-lexicon-pecus-medallion"
      viewBox="0 0 720 720"
      role="img"
      aria-label="Silver relief of a bull inside a Roman medallion"
    >
      <defs>
        <linearGradient id="ox-lexicon-pecus-silver" gradientUnits="userSpaceOnUse" x1="120" y1="120" x2="600" y2="660">
          <stop offset="0" stopColor="#f3f5f7" />
          <stop offset="0.2" stopColor="#c3c9cf" />
          <stop offset="0.42" stopColor="#828a94" />
          <stop offset="0.58" stopColor="#dde1e5" />
          <stop offset="0.76" stopColor="#6a7079" />
          <stop offset="1" stopColor="#aab0b8" />
        </linearGradient>
        <linearGradient id="ox-lexicon-pecus-coin" gradientUnits="userSpaceOnUse" x1="0" y1="-62" x2="0" y2="62">
          <stop offset="0" stopColor="#e8ebee" />
          <stop offset="0.55" stopColor="#9aa1a9" />
          <stop offset="1" stopColor="#727982" />
        </linearGradient>
        <linearGradient id="ox-lexicon-pecus-sheen" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#ffffff" stopOpacity="0" />
          <stop offset="0.5" stopColor="#ffffff" stopOpacity="0.34" />
          <stop offset="1" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>
        <clipPath id="ox-lexicon-pecus-disc">
          <circle cx="360" cy="360" r="338" />
        </clipPath>
        <path id="ox-lexicon-pecus-arc-top" d="M 120 360 A 240 240 0 0 1 600 360" fill="none" />
        <path id="ox-lexicon-pecus-arc-bottom" d="M 600 360 A 240 240 0 0 1 120 360" fill="none" />
      </defs>

      <circle cx="360" cy="360" r="352" fill="#191f1c" />
      <circle cx="360" cy="360" r="338" fill="#101512" stroke="#2c332e" strokeWidth="2" />
      <circle cx="360" cy="360" r="322" fill="none" stroke="#5b636b" strokeWidth="1.2" />
      <circle cx="360" cy="360" r="312" fill="none" stroke="#7c848c" strokeWidth="2.6" strokeDasharray="2.5 9" strokeLinecap="round" />
      <circle cx="360" cy="360" r="286" fill="none" stroke="#39413b" strokeWidth="1" />

      <g clipPath="url(#ox-lexicon-pecus-disc)">
        <g fill={silver}>
          <path d="M180 580 C 190 496, 250 456, 360 454 C 470 456, 530 496, 540 580 L 540 604 L 180 604 Z" />
          <path d="M360 230 C 300 230, 262 260, 250 310 C 240 350, 240 400, 248 440 C 256 480, 300 512, 360 512 C 420 512, 464 480, 472 440 C 480 400, 480 350, 470 310 C 458 260, 420 230, 360 230 Z" />
          <path d="M336 248 C 344 230, 376 230, 384 248 C 389 260, 381 272, 368 272 C 354 274, 338 264, 336 248 Z" />
          <path d={hornPath(300, 260, 162, 174, 72, 26, -75)} />
          <path d="M284 322 C 254 320, 218 332, 192 350 C 174 364, 166 382, 180 388 C 200 396, 240 382, 266 362 C 282 350, 292 332, 284 322 Z" />
          <path d="M310 430 C 330 420, 390 420, 410 430 C 420 450, 418 490, 404 505 C 392 518, 328 518, 316 505 C 302 490, 300 450, 310 430 Z" fill="#b9bfc7" />
          <path d={hornPath(420, 260, 558, 174, 72, 26, 75)} />
          <path d="M436 322 C 466 320, 502 332, 528 350 C 546 364, 554 382, 540 388 C 520 396, 480 382, 454 362 C 438 350, 428 332, 436 322 Z" />
        </g>

        <g fill="none" stroke="#f6f8fa" strokeLinecap="round" opacity="0.88">
          <path d="M330 240 C 348 236, 372 236, 390 240" strokeWidth="6" />
          <path d="M310 256 C 270 236, 206 216, 176 186" strokeWidth="5" />
          <path d="M410 256 C 450 236, 514 216, 544 186" strokeWidth="5" />
          <path d="M318 436 C 336 428, 384 428, 402 436" strokeWidth="5" />
          <path d="M268 320 C 262 350, 262 384, 268 414" strokeWidth="4" />
          <path d="M220 520 C 280 486, 440 486, 500 520" strokeWidth="6" />
        </g>
        <g fill="none" stroke="#3c434a" strokeLinecap="round" opacity="0.55">
          <path d="M262 430 C 300 462, 420 462, 458 430" strokeWidth="6" />
          <path d="M298 276 C 250 276, 204 246, 182 206" strokeWidth="4" />
          <path d="M422 276 C 470 276, 516 246, 538 206" strokeWidth="4" />
        </g>

        <circle cx="300" cy="354" r="9" fill="#3c434a" />
        <circle cx="298" cy="352" r="3" fill="#eef1f3" />
        <circle cx="420" cy="354" r="9" fill="#3c434a" />
        <circle cx="418" cy="352" r="3" fill="#eef1f3" />
        <ellipse cx="334" cy="478" rx="8" ry="11" fill="#3c434a" />
        <ellipse cx="386" cy="478" rx="8" ry="11" fill="#3c434a" />
        <path d="M322 502 C 340 510, 380 510, 398 502" stroke="#3c434a" strokeWidth="4" fill="none" strokeLinecap="round" />
        <circle cx="360" cy="500" r="20" fill="none" stroke="#c9a227" strokeWidth="7" />

        <motion.g
          initial={{ x: -900 }}
          animate={{ x: 900 }}
          transition={{ duration: 7, repeat: Infinity, ease: 'linear', delay: 1.2 }}
        >
          <rect x="-40" y="-500" width="150" height="1800" fill="url(#ox-lexicon-pecus-sheen)" transform="rotate(18)" />
        </motion.g>
      </g>

      <text className="ox-lexicon-pecus-rimtext">
        <textPath href="#ox-lexicon-pecus-arc-top" startOffset="50%" textAnchor="middle">
          PECVS · MONETA · PECVS · MONETA
        </textPath>
      </text>
      <text className="ox-lexicon-pecus-rimtext ox-lexicon-pecus-rimtext-small">
        <textPath href="#ox-lexicon-pecus-arc-bottom" startOffset="50%" textAnchor="middle">
          EX PECORE PECVNIA
        </textPath>
      </text>
    </svg>
  )
}

function ChargeBull() {
  return (
    <g fill="#6f7680">
      <path d="M-30 22 L -24 38 L -18 22 Z" opacity="0.7" />
      <path d="M2 22 L 8 38 L 14 22 Z" opacity="0.7" />
      <path d="M-20 22 L -12 42 L -4 22 Z" />
      <path d="M10 22 L 18 42 L 26 22 Z" />
      <path d="M-36 -2 C -16 -16, 18 -14, 34 -4 C 44 2, 42 14, 32 18 C 12 26, -16 26, -28 18 C -38 12, -42 4, -36 -2 Z" />
      <path d="M-30 2 C -42 6, -52 14, -58 24 C -61 29, -56 33, -50 31 C -44 27, -36 20, -28 14 Z" />
      <path d="M-50 16 C -60 8, -64 -4, -58 -14 C -55 -20, -48 -19, -48 -12 C -48 -5, -45 2, -40 8 Z" />
      <path d="M32 -6 C 42 -12, 48 -22, 46 -30 C 45 -35, 40 -35, 39 -29 C 38 -20, 34 -13, 28 -9 Z" />
    </g>
  )
}

function StandBull() {
  return (
    <g fill="#6f7680">
      <path d="M-26 22 L -20 38 L -14 22 Z" opacity="0.7" />
      <path d="M6 22 L 12 38 L 18 22 Z" opacity="0.7" />
      <path d="M-16 22 L -10 42 L -2 22 Z" />
      <path d="M14 22 L 20 42 L 28 22 Z" />
      <path d="M-36 -2 C -16 -16, 18 -14, 34 -4 C 44 2, 42 14, 32 18 C 12 26, -16 26, -28 18 C -38 12, -44 2, -36 -2 Z" />
      <path d="M-28 2 C -42 -4, -52 -16, -54 -30 C -55 -38, -48 -42, -42 -36 C -36 -28, -30 -20, -22 -12 Z" />
      <path d="M-52 -28 C -62 -34, -64 -48, -56 -54 C -51 -58, -44 -54, -46 -47 C -48 -40, -46 -34, -42 -30 Z" />
      <path d="M34 -2 C 42 8, 46 18, 44 28 C 43 33, 38 33, 37 27 C 36 18, 32 10, 28 4 Z" />
    </g>
  )
}

function HeadBull() {
  return (
    <g fill="#6f7680">
      <path d="M-18 -28 C -30 -32, -42 -42, -48 -54 C -51 -60, -44 -64, -40 -58 C -32 -46, -24 -36, -14 -30 C -10 -28, -14 -24, -18 -28 Z" />
      <path d="M18 -28 C 30 -32, 42 -42, 48 -54 C 51 -60, 44 -64, 40 -58 C 32 -46, 24 -36, 14 -30 C 10 -28, 14 -24, 18 -28 Z" />
      <path d="M-22 -6 C -36 -8, -48 -4, -54 4 C -56 8, -52 12, -46 9 C -40 5, -32 1, -24 0 Z" />
      <path d="M22 -6 C 36 -8, 48 -4, 54 4 C 56 8, 52 12, 46 9 C 40 5, 32 1, 24 0 Z" />
      <path d="M0 -30 C -14 -30, -21 -22, -23 -10 C -25 0, -25 12, -22 20 C -18 30, -8 36, 0 36 C 8 36, 18 30, 22 20 C 25 12, 25 0, 23 -10 C 21 -22, 14 -30, 0 -30 Z" />
      <path d="M-12 12 C -5 8, 5 8, 12 12 C 15 20, 14 30, 9 35 C 4 39, -4 39, -9 35 C -14 30, -15 20, -12 12 Z" fill="#4d545c" />
      <circle cx="-9" cy="-6" r="2.4" fill="#e8ebee" />
      <circle cx="9" cy="-6" r="2.4" fill="#e8ebee" />
      <circle cx="0" cy="26" r="6" fill="none" stroke="#4d545c" strokeWidth="2.4" />
    </g>
  )
}

const coins = [
  { name: 'As', value: 'the bronze unit', Variant: StandBull },
  { name: 'Sestertius', value: '2½ asses', Variant: HeadBull },
  { name: 'Quinarius', value: '5 asses', Variant: ChargeBull },
  { name: 'Denarius', value: '10 asses', Variant: StandBull },
  { name: 'Aureus', value: '25 denarii', Variant: ChargeBull },
  { name: 'Peculium', value: "a son's savings, from the herd", Variant: HeadBull },
]

const accounts = [
  { unit: 'I as', note: 'bronze, the base unit' },
  { unit: 'I sestertius', note: '2½ asses' },
  { unit: 'I quinarius', note: '5 asses' },
  { unit: 'I denarius', note: "10 asses, a soldier's day" },
  { unit: 'I aureus', note: '25 denarii, gold' },
]

export default function Pecus() {
  return (
    <section className="ox-lexicon-pecus">
      <div className="ox-lexicon-pecus-vault">
        <header className="ox-lexicon-pecus-head">
          <div className="ox-lexicon-pecus-head-left">
            <span className="ox-lexicon-pecus-kicker">Moneta · the mint holds cattle on its books</span>
            <h1 className="ox-lexicon-pecus-title">Pecus</h1>
            <p className="ox-lexicon-pecus-sub">
              Latin, noun, third declension. Cattle. Behind the word pecuniary, and behind the first treasury.
            </p>
          </div>
          <motion.div
            className="ox-lexicon-pecus-ingot"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, type: 'spring', stiffness: 120, damping: 16 }}
          >
            <span className="ox-lexicon-pecus-ingot-line">SET 2 · DESIGNED BY DEEPSEEK FLASH</span>
            <span className="ox-lexicon-pecus-ingot-sub">officina monetalis</span>
          </motion.div>
        </header>

        <div className="ox-lexicon-pecus-grid">
          <aside className="ox-lexicon-pecus-ledger">
            <h2 className="ox-lexicon-pecus-minihead">The account</h2>
            <ul className="ox-lexicon-pecus-account">
              {accounts.map((a) => (
                <li key={a.unit}>
                  <span className="ox-lexicon-pecus-account-unit">{a.unit}</span>
                  <span className="ox-lexicon-pecus-account-dots" aria-hidden="true" />
                  <span className="ox-lexicon-pecus-account-note">{a.note}</span>
                </li>
              ))}
            </ul>
            <p className="ox-lexicon-pecus-lede">
              Latin pecus means cattle, and Latin money is pecunia, the same word with a suffix. Rome counted its
              wealth in herds before it struck it in metal, and the vocabulary kept the habit. The root crossed into
              Old English as feoh, which became fee. Cattle were the currency, then cattle were the word for
              currency, and the herd is still in the invoice.
            </p>
            <p className="ox-lexicon-pecus-note">
              Varro derives pecunia from pecus without apology. Peculium was the savings a father let a son hold.
              Peculation is the crime of taking it.
            </p>
          </aside>

          <motion.figure
            className="ox-lexicon-pecus-medal-wrap"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          >
            <Medallion />
            <figcaption>
              Plate II. The bull of the mint, struck in silver. Greek and Roman cities both put bulls on their coins,
              the animal that underwrote the currency standing on the currency itself.
            </figcaption>
          </motion.figure>

          <aside className="ox-lexicon-pecus-coins">
            <h2 className="ox-lexicon-pecus-minihead">Struck this season</h2>
            <div className="ox-lexicon-pecus-coin-grid">
              {coins.map((c, i) => (
                <motion.div
                  className="ox-lexicon-pecus-coin"
                  key={c.name}
                  initial={{ opacity: 0, scale: 0.4, rotate: -26 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{ delay: 0.5 + i * 0.09, type: 'spring', stiffness: 170, damping: 15 }}
                >
                  <svg viewBox="-68 -68 136 136" aria-hidden="true">
                    <circle r="62" fill="url(#ox-lexicon-pecus-coin)" stroke="#4d545c" strokeWidth="2" />
                    <circle r="54" fill="none" stroke="#666d75" strokeWidth="1" strokeDasharray="2 6" strokeLinecap="round" />
                    <g transform="translate(0 2) scale(0.86)">
                      <c.Variant />
                    </g>
                    <text className="ox-lexicon-pecus-coin-legend" y="-40" textAnchor="middle">
                      {c.name.toUpperCase()}
                    </text>
                    <text className="ox-lexicon-pecus-coin-legend" y="52" textAnchor="middle">
                      ROMA
                    </text>
                  </svg>
                  <span className="ox-lexicon-pecus-coin-name">{c.name}</span>
                  <span className="ox-lexicon-pecus-coin-value">{c.value}</span>
                </motion.div>
              ))}
            </div>
          </aside>
        </div>

        <footer className="ox-lexicon-pecus-foot">
          <span>pecus → pecunia → pecuniary</span>
          <span className="ox-lexicon-pecus-foot-rule" aria-hidden="true" />
          <span>the herd becomes the purse</span>
        </footer>
      </div>
    </section>
  )
}
