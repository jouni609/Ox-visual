import { motion } from 'framer-motion'
import './design.css'

const figureVariants = {
  hidden: { opacity: 0, x: -80 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } },
}

const titleVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
}

function RumenOx() {
  return (
    <svg className="ox-apparatus-rumen-figure" viewBox="0 0 1200 650" aria-hidden="true">
      <defs>
        <clipPath id="ox-apparatus-rumen-body-clip">
          <path d="M386 269c67-28 138-24 220-10 98 17 186 11 294 8 76-2 139 25 161 77 24 58-5 133-51 163-51 34-124 20-190 24-116 8-229 17-349-6-66-13-106-43-130-93-18-39-20-88-2-128 8-18 23-27 47-35Z" />
        </clipPath>
        <pattern id="ox-apparatus-rumen-hatch" width="18" height="18" patternUnits="userSpaceOnUse" patternTransform="rotate(20)">
          <path d="M0 0v18" fill="none" stroke="currentColor" strokeWidth="3" />
        </pattern>
      </defs>

      <motion.g variants={figureVariants} initial="hidden" animate="visible">
        <path className="ox-apparatus-rumen-tail" d="M1013 293c56 17 78 68 66 126-5 24-19 50-38 69l-17-12c22-29 30-58 23-86-6-26-20-43-44-51Z" />
        <path className="ox-apparatus-rumen-leg ox-apparatus-rumen-leg-far" d="M876 403c29 3 50 20 53 49l12 109-50 2-18-96Z" />
        <path className="ox-apparatus-rumen-hoof" d="M891 553h53l10 32-76 2Z" />
        <path className="ox-apparatus-rumen-leg ox-apparatus-rumen-leg-far" d="M468 397c26 8 39 27 38 56l-8 131-51 2 6-130Z" />
        <path className="ox-apparatus-rumen-hoof" d="M445 579h55l8 30h-74Z" />

        <path className="ox-apparatus-rumen-body" d="M386 269c67-28 138-24 220-10 98 17 186 11 294 8 76-2 139 25 161 77 24 58-5 133-51 163-51 34-124 20-190 24-116 8-229 17-349-6-66-13-106-43-130-93-18-39-20-88-2-128 8-18 23-27 47-35Z" />
        <path className="ox-apparatus-rumen-leg" d="M818 402c36-2 62 17 65 51l8 107-58 1-18-94Z" />
        <path className="ox-apparatus-rumen-hoof" d="M830 553h63l14 33h-85Z" />
        <path className="ox-apparatus-rumen-leg" d="M414 393c36-2 60 20 59 56l-10 137-58 1 9-128Z" />
        <path className="ox-apparatus-rumen-hoof" d="M404 579h60l8 32h-80Z" />

        <path className="ox-apparatus-rumen-neck" d="M425 244c-33 11-57 35-72 68-13 28-17 57-17 87l-67 12c-17-57-5-116 34-161 31-36 76-53 128-52Z" />
        <path className="ox-apparatus-rumen-head" d="M341 338c-17-18-43-32-71-37-35-6-66 4-91 26-25 21-43 54-57 83-9 20 5 43 27 45l102-2c37-2 66-13 88-34 24-24 32-59 2-81Z" />
        <path className="ox-apparatus-rumen-ear" d="M350 310c-10-39-2-67 24-84 27 29 31 57 12 84Z" />
        <path className="ox-apparatus-rumen-horn" d="M278 317c-39-15-61-45-66-89 31 2 55 18 72 47 8 14 10 29 7 44Z" />
        <path className="ox-apparatus-rumen-horn ox-apparatus-rumen-horn-far" d="M311 309c-25-20-36-43-32-69-4 28 0 53 12 75Z" />
        <path className="ox-apparatus-rumen-eye" d="M271 356c13-8 27-6 40 4-15 10-29 9-42-1Z" />
        <path className="ox-apparatus-rumen-nostril" d="M149 420c11-6 22-5 32 2-10 7-21 8-32 2Z" />
        <path className="ox-apparatus-rumen-line" d="M126 459c17 7 35 9 53 7M305 380c32 4 61 2 88-6M410 277c79 18 160 23 243 15M635 298c85 9 171 9 258-2M453 442c-13-26-15-53-7-81M947 321c17 23 20 49 10 78" />

        <g clipPath="url(#ox-apparatus-rumen-body-clip)">
          <motion.path
            className="ox-apparatus-rumen-organ"
            d="M526 314c79-39 211-36 313 8 43 19 66 57 48 92-17 34-72 55-129 56-77 1-158-18-224-54-48-26-66-76-8-102Z"
            animate={{ scale: [1, 1.025, 1] }}
            transition={{ duration: 3.8, repeat: Infinity, ease: 'easeInOut' }}
            style={{ transformOrigin: '700px 385px' }}
          />
          <path className="ox-apparatus-rumen-organ-line" d="M548 342c68 6 117 31 149 72 27 35 63 50 109 44M613 319c-9 42 3 78 36 108 28 25 67 39 115 40M754 315c-22 30-28 62-18 95 9 31 35 55 75 69M546 411c70 1 127 22 173 64" />
          <path className="ox-apparatus-rumen-scan" d="M510 240v252" animate={{ x: [-190, 430] }} transition={{ duration: 3.2, repeat: Infinity, ease: 'linear' }} />
          <path className="ox-apparatus-rumen-organ-hatch" d="M520 280h400v150H520Z" />
        </g>
      </motion.g>
    </svg>
  )
}

export default function Rumen() {
  return (
    <main className="th-ox-apparatus-rumen ox-apparatus-rumen">
      <div className="ox-apparatus-rumen-shell">
        <motion.div className="ox-apparatus-rumen-heading" variants={titleVariants} initial="hidden" animate="visible">
          <div className="ox-apparatus-rumen-kicker">SYSTEM 01 / FERMENTATION</div>
          <h1>RUMEN</h1>
          <p>A roomy fermentation chamber. Grass enters, microbes work, and the ox chews the meal a second time.</p>
        </motion.div>

        <div className="ox-apparatus-rumen-stage">
          <RumenOx />
          <div className="ox-apparatus-rumen-callout ox-apparatus-rumen-callout-one">
            <span>01</span>
            <strong>Grass mat</strong>
          </div>
          <div className="ox-apparatus-rumen-callout ox-apparatus-rumen-callout-two">
            <span>02</span>
            <strong>Microbial churn</strong>
          </div>
          <div className="ox-apparatus-rumen-callout ox-apparatus-rumen-callout-three">
            <span>03</span>
            <strong>Cud returns</strong>
          </div>
          <div className="ox-apparatus-rumen-axis" aria-hidden="true">
            <span>RETICULUM</span>
            <span>RUMEN</span>
            <span>OMASUM</span>
            <span>ABOMASUM</span>
          </div>
        </div>

        <aside className="ox-apparatus-rumen-signature">
          <span>Specimen 01</span>
          <strong>SET 1 · DESIGNED BY SPACE BUNNY</strong>
        </aside>
      </div>
    </main>
  )
}
