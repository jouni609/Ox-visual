import { motion } from 'framer-motion'
import './design.css'

function BellOx() {
  return (
    <svg className="ox-apparatus-bell-figure" viewBox="0 0 1300 680" aria-hidden="true">
      <path className="ox-apparatus-bell-ground" d="M36 591c260-31 509-26 746 15 156 27 315 26 476-3" />
      <path className="ox-apparatus-bell-grass" d="M96 580c26-47 48-80 67-98M186 578c10-48 28-85 56-111M1142 590c-6-50-20-91-43-123M1220 592c8-49 26-87 55-115" />

      <motion.g
        initial={{ opacity: 0, x: 70 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.95, ease: [0.16, 1, 0.3, 1] }}
      >
        <path className="ox-apparatus-bell-tail" d="M264 269c-56 3-94 36-115 99-10 30-11 61-1 93l28-7c-9-36-5-67 13-92 16-24 41-36 75-37Z" />
        <path className="ox-apparatus-bell-tail-tuft" d="M178 343c-26 14-36 40-30 78 33-10 51-36 53-78Z" />
        <path className="ox-apparatus-bell-leg ox-apparatus-bell-leg-far" d="M414 416c24 3 40 20 44 49l15 124h-50l-22-121Z" />
        <path className="ox-apparatus-bell-hoof" d="M422 581h53l9 27h-72Z" />
        <path className="ox-apparatus-bell-leg ox-apparatus-bell-leg-far" d="M797 414c29 2 47 20 50 51l11 121h-51l-22-118Z" />
        <path className="ox-apparatus-bell-hoof" d="M804 579h55l12 29h-77Z" />
        <path className="ox-apparatus-bell-body" d="M278 237c79-45 178-56 296-32 99 20 188 22 267 6 72-14 131 3 177 51 42 44 57 99 43 166-14 66-59 104-134 114-91 11-191 10-300-3l-257-9c-73-3-120-29-142-79-22-51-20-103 7-155 11-21 22-43 43-59Z" />
        <path className="ox-apparatus-bell-leg" d="M388 417c30-1 50 18 53 49l14 122h-54l-24-121Z" />
        <path className="ox-apparatus-bell-hoof" d="M397 580h60l11 28h-81Z" />
        <path className="ox-apparatus-bell-leg" d="M769 418c30-1 50 18 53 49l14 120h-54l-24-119Z" />
        <path className="ox-apparatus-bell-hoof" d="M777 580h60l11 28h-81Z" />
        <path className="ox-apparatus-bell-neck" d="M821 223c73 2 125 38 153 107 17 42 23 92 18 149l-139 8c-6-55-24-99-55-132-30-33-30-73 0-119 5-8 12-13 23-13Z" />
        <path className="ox-apparatus-bell-head" d="M872 253c47-11 96 0 146 32 53 33 83 78 90 134 5 40-14 72-58 95-42 23-91 28-147 15-46-11-70-39-72-85-1-37 13-70 41-99 25-26 26-60 0-92Z" />
        <path className="ox-apparatus-bell-ear" d="M906 274c-13-49-43-79-91-89 5 47 34 79 86 96Z" />
        <path className="ox-apparatus-bell-horn" d="M937 249c-5-50 11-86 48-108 24 35 20 70-13 104Z" />
        <path className="ox-apparatus-bell-horn" d="M979 238c21-40 52-57 93-48-9 37-37 61-83 70Z" />
        <path className="ox-apparatus-bell-eye" d="M971 333c20-14 40-12 61 7-21 17-42 15-63-6Z" />
        <path className="ox-apparatus-bell-eye-far" d="M1040 337c14-10 28-9 42 3-14 12-29 12-44 0Z" />
        <path className="ox-apparatus-bell-muzzle" d="M1016 447c37-16 77-14 120 6 18 17 17 39-3 64-24 30-55 43-93 38-41-5-64-30-69-73-3-18 11-29 45-35Z" />
        <path className="ox-apparatus-bell-nostril" d="M1037 485c13-8 26-7 39 3-13 10-26 9-39-3ZM1084 491c13-7 25-5 37 5-13 9-26 8-37-5Z" />
        <path className="ox-apparatus-bell-line" d="M281 305c106-62 229-70 371-24 96 31 184 29 264-6M464 270c-7 50-5 95 7 135M744 272c-15 48-15 92 0 134M840 323c44 7 80 25 107 53" />

        <motion.g
          className="ox-apparatus-bell-bell"
          animate={{ rotate: [-8, 8, -8] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
          style={{ transformOrigin: '902px 321px' }}
        >
          <path className="ox-apparatus-bell-strap" d="M876 295c14 30 26 60 36 91" />
          <path className="ox-apparatus-bell-bell-body" d="M878 374c30-8 56 2 77 30l14 60c-49 20-98 14-147-17l18-53c8-10 20-17 38-20Z" />
          <path className="ox-apparatus-bell-bell-line" d="M833 421c36 18 73 21 113 8M860 384c1 24-3 46-13 66M904 380c5 24 5 47 0 70M943 395c11 17 17 34 18 52" />
        </motion.g>

        {[0, 1, 2].map((ring) => (
          <motion.path
            key={ring}
            className="ox-apparatus-bell-wave"
            d="M936 425c76-38 153-39 232-3 76 35 151 35 225 1"
            animate={{ opacity: [0, 0.7, 0], scale: [0.65, 1.18, 1.4] }}
            transition={{ duration: 2.4, delay: ring * 0.8, repeat: Infinity, ease: 'easeOut' }}
            style={{ transformOrigin: '936px 425px' }}
          />
        ))}
      </motion.g>
    </svg>
  )
}

export default function Bell() {
  return (
    <main className="th-ox-apparatus-bell ox-apparatus-bell">
      <div className="ox-apparatus-bell-sun" aria-hidden="true" />
      <header className="ox-apparatus-bell-heading">
        <p>SYSTEM 04 / HERD SIGNAL</p>
        <h1>BELL</h1>
        <div>
          <strong>LOW</strong>
          <strong>MID</strong>
          <strong>HIGH</strong>
        </div>
      </header>

      <div className="ox-apparatus-bell-stage">
        <BellOx />
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7, duration: 0.7 }}>
          A clapper cuts through grass noise. The herd answers a familiar pitch, and the cow keeps moving.
        </motion.p>
      </div>

      <aside className="ox-apparatus-bell-signature">
        <span>Herd mark / 04</span>
        <strong>SET 4 · DESIGNED BY SPACE BUNNY</strong>
      </aside>
    </main>
  )
}
