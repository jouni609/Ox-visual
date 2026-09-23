import { motion } from 'framer-motion'
import './design.css'

function HoofYak() {
  return (
    <svg className="ox-apparatus-hoof-figure" viewBox="0 0 1300 850" aria-hidden="true">
      <defs>
        <linearGradient id="ox-apparatus-hoof-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#d9f2eb" />
          <stop offset="1" stopColor="#8ccfc0" />
        </linearGradient>
      </defs>
      <path d="M0 0h1300v850H0Z" fill="url('#ox-apparatus-hoof-sky)" />
      <motion.g animate={{ x: [-10, 10, -10] }} transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}>
        <path className="ox-apparatus-hoof-mountain ox-apparatus-hoof-mountain-back" d="m0 424 184-177 121 117 183-236 150 241 141-153 221 241 300-258v651H0Z" />
        <path className="ox-apparatus-hoof-contour" d="M0 492c181-78 317-79 408-3 108 90 224 84 348-18 173-142 353-130 544 36" />
        <path className="ox-apparatus-hoof-contour" d="M0 558c183-72 321-65 414 21 110 101 230 101 361 0 160-124 333-113 525 33" />
      </motion.g>
      <path className="ox-apparatus-hoof-snow" d="M0 607c208-32 385-17 530 46 181 79 374 76 581-8 93-38 175-48 246-30v235H0Z" />

      <g className="ox-apparatus-hoof-tracks" aria-hidden="true">
        {[
          [50, 710, -0.34],
          [170, 746, -0.28],
          [1110, 704, 0.28],
          [1210, 754, 0.34],
        ].map(([x, y, rotation], index) => (
          <motion.path
            key={`${x}-${y}`}
            d="M0 0c-11-16-12-31-3-45 8-13 20-13 28 0 9 14 8 29-2 45-6 10-16 10-23 0Z"
            animate={{ opacity: [0.25, 0.7, 0.25] }}
            transition={{ delay: index * 0.35, duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
            transform={`translate(${x} ${y}) rotate(${rotation * 57.2958}) scale(1.8)`}
          />
        ))}
      </g>

      <motion.g
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: [0, -3, 0] }}
        transition={{ opacity: { duration: 0.9 }, y: { duration: 4.6, repeat: Infinity, ease: 'easeInOut' } }}
      >
        <path className="ox-apparatus-hoof-tail" d="M211 338c-56 23-89 68-98 134-4 30 1 58 16 84l31-15c-16-37-17-72-2-104 13-29 36-50 69-62Z" />
        <path className="ox-apparatus-hoof-tail-tuft" d="M126 435c-28 14-39 42-33 83 37-11 56-39 58-82Z" />
        <path className="ox-apparatus-hoof-leg ox-apparatus-hoof-leg-far" d="M292 559c33 0 54 18 58 54l15 161h-69l-25-154Z" />
        <path className="ox-apparatus-hoof-hoof" d="M294 760h72l11 38h-94Z" />
        <path className="ox-apparatus-hoof-leg ox-apparatus-hoof-leg-far" d="M837 567c34-2 56 16 61 52l18 157h-70l-29-151Z" />
        <path className="ox-apparatus-hoof-hoof" d="M844 766h73l14 33h-98Z" />

        <path className="ox-apparatus-hoof-body" d="M217 356c30-75 78-125 144-151 66-26 143-31 231-15 71 13 135 39 192 77 24 16 56 29 96 38l-27 86-59 14 21 43-65 37-50-8 8 61-72 12-24-47-15 88-72 6-12-66-23 71-70-4 3-92-38 47-51-28 35-71-75 10-24-48 51-52-72-23 3-56Z" />
        <path className="ox-apparatus-hoof-hump" d="M341 264c55-114 148-177 280-189 78-7 146 14 203 64-99-11-195 14-289 74-48 31-104 54-167 68Z" />
        <path className="ox-apparatus-hoof-leg" d="M414 568c39-2 63 17 68 55l17 144h-74l-29-142Z" />
        <path className="ox-apparatus-hoof-hoof" d="M424 755h76l13 43h-101Z" />
        <path className="ox-apparatus-hoof-leg" d="M701 567c39-2 63 17 68 55l17 145h-74l-29-143Z" />
        <path className="ox-apparatus-hoof-hoof" d="M711 755h76l13 43h-101Z" />
        <path className="ox-apparatus-hoof-neck" d="M779 335c80 2 141 43 184 123 21 40 31 86 31 138l-124 31c-9-66-34-113-76-141-41-27-60-72-54-135 5-12 18-18 39-16Z" />
        <path className="ox-apparatus-hoof-head" d="M835 386c62-12 124 10 186 67 58 53 88 111 89 176 1 46-25 76-77 89-52 12-109 6-172-18-50-19-75-57-74-113 2-55 25-97 70-126 30-20 31-49 2-87Z" />
        <path className="ox-apparatus-hoof-face" d="M919 440c43-7 90 10 142 52 32 26 53 55 64 89 6 20-5 41-33 64-54 8-101-1-141-27-30-20-46-48-48-83-2-36 4-67 16-95Z" />
        <path className="ox-apparatus-hoof-ear" d="M857 407c-28-48-67-72-116-72 19 48 57 72 113 73Z" />
        <path className="ox-apparatus-hoof-horn" d="M848 410c-28-71-80-108-155-110 16 67 68 104 155 110Z" />
        <path className="ox-apparatus-hoof-horn" d="M973 404c45-61 98-81 159-59-31 57-84 77-159 59Z" />
        <path className="ox-apparatus-hoof-eye" d="M960 509c21-16 43-14 65 5-22 20-45 18-67-4Z" />
        <path className="ox-apparatus-hoof-nostril" d="M1062 593c14-9 28-7 42 6-14 11-28 9-42-5Z" />
        <path className="ox-apparatus-hoof-line" d="M238 397c145-97 299-111 462-43 84 35 160 55 229 60M350 312c12 54 6 105-18 154M513 239c-1 56 11 106 35 149M673 252c-19 47-20 95-3 145M786 414c43 32 71 73 85 124" />
        <path className="ox-apparatus-hoof-fringe" d="M258 415c-10 83 4 145 42 187 7-69 1-130-18-183ZM332 397c-5 84 11 147 47 190 5-74-1-137-19-189ZM412 381c-1 78 16 135 51 171 2-70-6-129-24-176ZM493 381c4 75 24 128 59 159-3-66-13-120-30-162ZM575 398c11 68 33 116 66 142-6-60-18-110-37-148" />
      </motion.g>
    </svg>
  )
}

export default function Hoof() {
  return (
    <main className="th-ox-apparatus-hoof ox-apparatus-hoof">
      <div className="ox-apparatus-hoof-heading">
        <p>SYSTEM 05 / GROUND CONTACT</p>
        <h1>HOOF</h1>
        <span>HIGH / 4,800 M</span>
      </div>

      <div className="ox-apparatus-hoof-stage">
        <HoofYak />
        <div className="ox-apparatus-hoof-path">
          <span>PAD</span>
          <span>WALL</span>
          <span>BONE</span>
        </div>
        <motion.p initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.65, duration: 0.7 }}>
          Each foot is a split weight-bearing pair. It spreads a yak’s weight over rock, then grips for the next step.
        </motion.p>
      </div>

      <div className="ox-apparatus-hoof-signature">
        <span>PLATE 05 / ROCK</span>
        <strong>SET 5 · DESIGNED BY SPACE BUNNY</strong>
      </div>
    </main>
  )
}
