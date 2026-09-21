import { motion } from 'framer-motion'
import './paunch.css'

const chambers = [
  {
    num: '01',
    name: 'Rumen',
    text: 'The great vat, about 150 litres in a grown ox. Papillae carpet the wall and the broth inside ferments cellulose.',
  },
  {
    num: '02',
    name: 'Reticulum',
    text: 'The honeycomb, just forward of the rumen. It catches what should not be there and starts the cud back up the throat.',
  },
  {
    num: '03',
    name: 'Omasum',
    text: 'The manyplies. Leaves of tissue wring water out of the mash before it passes on.',
  },
  {
    num: '04',
    name: 'Abomasum',
    text: 'The true stomach, acid and enzyme. A newborn calf lives on this chamber alone until the rumen wakes.',
  },
]

export default function Paunch() {
  return (
    <article className="th-span-paunch">
      <motion.div
        className="ox-span-paunch-sheet"
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <span className="ox-span-paunch-screw ox-span-paunch-screw-a" aria-hidden="true" />
        <span className="ox-span-paunch-screw ox-span-paunch-screw-b" aria-hidden="true" />
        <span className="ox-span-paunch-screw ox-span-paunch-screw-c" aria-hidden="true" />
        <span className="ox-span-paunch-screw ox-span-paunch-screw-d" aria-hidden="true" />
        <p className="ox-span-paunch-sign">SET 2 · DESIGNED BY GROK 4.7</p>
        <svg className="ox-span-paunch-ox" viewBox="0 0 1100 740" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
          <ellipse cx="560" cy="700" rx="260" ry="14" fill="#1a120c" opacity="0.12" />

          <path d="M900 300 C 970 380, 990 490, 948 580" stroke="#6B442C" strokeWidth="16" fill="none" strokeLinecap="round" />
          <path d="M948 556 C 980 600, 986 650, 948 672 C 916 640, 912 596, 930 560 Z" fill="#1A120E" />

          <path d="M740 470 L 792 470 L 804 610 L 770 610 L 780 676 L 734 680 L 724 610 L 748 610 Z" fill="#4A2E1C" />
          <path d="M730 664 L 744 706 L 784 706 L 774 664 Z" fill="#1A120E" />

          <path d="M360 460 L 412 460 L 400 600 L 366 600 L 376 674 L 330 678 L 340 600 L 368 600 Z" fill="#4A2E1C" />
          <path d="M326 662 L 340 704 L 380 704 L 370 662 Z" fill="#1A120E" />

          <path
            d="M860 280 C 760 210, 560 200, 420 236 C 300 268, 230 350, 228 440 C 226 540, 320 610, 480 632 L 780 610 C 900 590, 990 500, 980 390 C 972 320, 930 286, 860 280 Z"
            fill="url(#ox-span-paunch-hide)"
          />
          <path d="M360 520 C 520 620, 800 590, 960 470 L 930 540 C 760 630, 480 640, 340 560 Z" fill="#8B5E40" opacity="0.45" />

          <path d="M800 480 L 870 470 L 888 590 L 940 620 L 928 688 L 874 682 L 888 616 L 848 590 L 830 500 Z" fill="#6B442C" />
          <path d="M870 670 L 884 714 L 926 714 L 916 670 Z" fill="#1A120E" />
          <path d="M896 678 V 708" stroke="#C6A484" strokeWidth="2" />

          <path d="M300 470 L 370 456 L 352 575 L 292 610 L 304 682 L 250 676 L 236 600 L 286 560 L 292 490 Z" fill="#6E4730" />
          <path d="M248 664 L 262 708 L 304 708 L 294 664 Z" fill="#1A120E" />
          <path d="M274 672 V 702" stroke="#C6A484" strokeWidth="2" />

          <path d="M250 300 L 160 210 L 118 258 L 200 390 L 292 360 Z" fill="#6B442C" />
          <path d="M210 330 L 250 450 L 170 490 L 120 360 Z" fill="#4A2E1C" />
          <path d="M240 250 C 180 190, 100 188, 78 230 C 140 236, 200 270, 248 310 Z" fill="#5A3A26" />

          <path d="M150 200 L 40 250 C 8 290, 16 360, 70 392 L 190 360 L 214 250 Z" fill="#6B442C" />
          <path d="M70 270 L 18 310 L 36 384 L 100 350 Z" fill="#C6A484" />
          <ellipse cx="40" cy="336" rx="9" ry="6" fill="#1A120E" />
          <path d="M78 372 C 52 386, 30 376, 38 362" stroke="#1A120E" strokeWidth="2.4" fill="none" strokeLinecap="round" />
          <ellipse cx="130" cy="268" rx="14" ry="11" fill="#1A120E" />
          <ellipse cx="125" cy="265" rx="3.2" ry="2.4" fill="#F3E6D4" />
          <path d="M190 230 L 250 200 L 236 268 Z" fill="#6B442C" />
          <path d="M196 234 L 236 214 L 228 256 Z" fill="#E4B8AE" />

          <path d="M175 195 C 130 120, 50 110, 28 168 C 80 150, 140 180, 176 230 Z" fill="#E6D2A4" />
          <path d="M36 128 C 12 118, 8 156, 36 168 C 48 148, 46 132, 36 128 Z" fill="#1A120E" />
          <path d="M200 188 C 180 110, 100 70, 64 118 C 120 108, 176 150, 206 210 Z" fill="#D9C090" />
          <path d="M70 78 C 46 68, 42 104, 70 116 C 84 96, 80 80, 70 78 Z" fill="#1A120E" />

          <g clipPath="url(#ox-span-paunch-win)">
            <rect x="470" y="340" width="210" height="170" fill="#6A341C" />
            <motion.ellipse
              cx="575"
              cy="424"
              rx="80"
              ry="50"
              fill="#E0A045"
              animate={{ scaleX: [1, 1.1, 0.94, 1] }}
              transition={{ duration: 5.6, repeat: Infinity, ease: 'easeInOut' }}
            />
            <ellipse cx="530" cy="400" rx="11" ry="18" fill="#C45C4A" />
            <ellipse cx="558" cy="384" rx="9" ry="16" fill="#A84838" />
            <ellipse cx="588" cy="398" rx="10" ry="17" fill="#C45C4A" />
            <ellipse cx="612" cy="422" rx="8" ry="14" fill="#9A3E32" />
            <ellipse cx="548" cy="440" rx="8" ry="13" fill="#B85040" />
            <ellipse cx="590" cy="448" rx="9" ry="12" fill="#C45C4A" />
          </g>
          <ellipse cx="575" cy="424" rx="88" ry="64" fill="none" stroke="#2A1A10" strokeWidth="8" />
          <ellipse cx="575" cy="424" rx="78" ry="54" fill="none" stroke="#E7D3B0" strokeWidth="3" />

          <defs>
            <linearGradient id="ox-span-paunch-hide" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#7A5136" />
              <stop offset="0.6" stopColor="#6B442C" />
              <stop offset="1" stopColor="#4E311F" />
            </linearGradient>
            <clipPath id="ox-span-paunch-win">
              <ellipse cx="575" cy="424" rx="78" ry="54" />
            </clipPath>
          </defs>
        </svg>
      </motion.div>

      <motion.aside
        className="ox-span-paunch-rail"
        initial={{ opacity: 0, x: 16 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
      >
        <p className="ox-span-paunch-kicker">Anatomy · the left flank</p>
        <h1>Paunch</h1>
        <p className="ox-span-paunch-lead">
          An ox does not live on grass. It lives on what the rumen ferments. This plate opens the left flank, where the vat sits behind the ribs and ahead of the hip. The animal chews the cud to cut the fibre and send it back down.
        </p>
        <ol className="ox-span-paunch-chambers">
          {chambers.map((item) => (
            <li key={item.num}>
              <span>{item.num}</span>
              <div>
                <h2>{item.name}</h2>
                <p>{item.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </motion.aside>
    </article>
  )
}
