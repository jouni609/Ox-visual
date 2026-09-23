import { motion } from 'framer-motion'
import './design.css'

const paintVariants = {
  hidden: { opacity: 0, y: 100, rotate: -2 },
  visible: { opacity: 1, y: 0, rotate: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } },
}

function WhorlOx() {
  return (
    <svg className="ox-apparatus-whorl-figure" viewBox="0 0 1200 760" aria-hidden="true">
      <motion.g variants={paintVariants} initial="hidden" animate="visible">
        <path className="ox-apparatus-whorl-leg ox-apparatus-whorl-leg-rear" d="M299 470c24-7 48 1 61 20l14 167-69 3-18-125Z" />
        <path className="ox-apparatus-whorl-hoof" d="M306 648h70l11 39h-96Z" />
        <path className="ox-apparatus-whorl-leg ox-apparatus-whorl-leg-left" d="M427 487c27-4 49 8 59 32l15 148-72 3-18-118Z" />
        <path className="ox-apparatus-whorl-hoof" d="M429 659h73l12 34h-99Z" />
        <path className="ox-apparatus-whorl-body" d="M280 353c54-88 147-137 270-137 40 0 77 20 103 58 27-46 65-70 116-70 137 0 230 73 230 201 0 89-42 147-132 163-107 19-227 25-355 6-93-14-151-51-173-111-17-46-15-82 6-110Z" />
        <path className="ox-apparatus-whorl-hump" d="M492 265c10-65 56-112 125-126 51-10 91 18 102 70-80-20-152-4-215 49Z" />
        <path className="ox-apparatus-whorl-leg" d="M807 492c32-2 56 13 65 42l11 135-73 2-20-119Z" />
        <path className="ox-apparatus-whorl-hoof" d="M809 659h77l14 35h-102Z" />
        <path className="ox-apparatus-whorl-leg" d="M615 496c30-4 55 11 64 39l15 136-74 3-19-118Z" />
        <path className="ox-apparatus-whorl-hoof" d="M620 660h77l12 35h-100Z" />
        <path className="ox-apparatus-whorl-neck" d="M511 307c-53 28-80 80-80 157 0 61 25 111 75 149l232-13c55-36 82-88 82-155 0-91-54-149-135-153-69-4-128 1-174 15Z" />
        <path className="ox-apparatus-whorl-head" d="M527 303c-15-39-5-76 30-109 35 23 53 56 54 98 38-17 76-15 114 6 40 23 63 62 68 116 6 62-21 113-81 152-27 18-60 27-99 27-65 0-115-31-150-93-18-32-25-66-20-101 7-46 38-78 84-96Z" />
        <path className="ox-apparatus-whorl-ear ox-apparatus-whorl-ear-left" d="M552 316c-58-25-111-13-159 35 54 3 100 20 139 51Z" />
        <path className="ox-apparatus-whorl-ear ox-apparatus-whorl-ear-right" d="M687 305c61-22 116-5 162 46-57-1-106 12-147 40Z" />
        <path className="ox-apparatus-whorl-horn" d="M568 241c-34-64-88-92-162-83 18 50 71 86 137 108Z" />
        <path className="ox-apparatus-whorl-horn" d="M682 228c39-62 94-85 166-69-23 48-78 80-145 98Z" />
        <path className="ox-apparatus-whorl-face" d="M501 417c18-47 61-72 119-74 60-2 105 22 134 71 11 19 13 42 6 67-15 53-64 83-138 88-70 5-121-21-144-77-9-24-5-51 23-75Z" />
        <path className="ox-apparatus-whorl-nose" d="M546 451c37-19 77-19 120 0 18 8 27 24 25 46-3 29-34 48-85 56-50-8-81-27-85-56-2-22 7-38 25-46Z" />
        <path className="ox-apparatus-whorl-eye" d="M527 401c17-13 35-13 53 0-17 14-35 14-53 0ZM691 401c18-13 36-13 54 0-18 14-36 14-54 0Z" />
        <path className="ox-apparatus-whorl-nostril" d="M565 477c11-8 23-8 34 0-10 9-22 9-34 0ZM676 477c11-8 23-8 34 0-10 9-22 9-34 0Z" />
        <path className="ox-apparatus-whorl-spot" d="M348 369c26-41 61-48 105-21 27 17 29 47 5 72-32 33-77 36-111 6-20-17-20-37 1-57Z" />
        <path className="ox-apparatus-whorl-spot" d="M819 312c45-12 82 7 111 57-46 12-87-3-123-45Z" />
        <path className="ox-apparatus-whorl-spot" d="M782 405c27-24 58-21 93 8 20 30 7 56-39 77-48-14-69-45-64-91Z" />
        <path className="ox-apparatus-whorl-spot" d="M372 476c24-18 52-12 84 18 14 32-4 53-55 64-40-19-51-47-29-82Z" />
        <path className="ox-apparatus-whorl-spot" d="M519 285c18-18 41-17 69 4 5 30-14 47-58 50-24-16-29-35-11-54Z" />
        <path className="ox-apparatus-whorl-spot" d="M891 402c19-17 40-13 63 11-5 27-26 38-63 32-14-15-14-30 0-43Z" />
      </motion.g>
    </svg>
  )
}

export default function Whorl() {
  return (
    <main className="th-ox-apparatus-whorl ox-apparatus-whorl">
      <div className="ox-apparatus-whorl-marquee" aria-hidden="true">
        <span>COAT / COLOUR / CHANGE</span>
        <span>COAT / COLOUR / CHANGE</span>
      </div>

      <header className="ox-apparatus-whorl-heading">
        <p>SYSTEM 02 / INHERITED MARK</p>
        <h1>WHORL</h1>
        <span className="ox-apparatus-whorl-index">02—25</span>
      </header>

      <div className="ox-apparatus-whorl-board">
        <WhorlOx />
        <motion.p className="ox-apparatus-whorl-copy" initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.75, duration: 0.7 }}>
          A coat is written across generations. Dark points, pale ground, and every irregular mark arrive in a new pattern.
        </motion.p>
        <div className="ox-apparatus-whorl-swatches" aria-label="Coat colours">
          <span style={{ background: '#ff5b35' }} />
          <span style={{ background: '#f7e66b' }} />
          <span style={{ background: '#2d2845' }} />
        </div>
        <div className="ox-apparatus-whorl-swatch-labels" aria-hidden="true">
          <span>eumelanin</span>
          <span>low pigment</span>
          <span>pattern</span>
        </div>
      </div>

      <div className="ox-apparatus-whorl-signature">
        <span>PAINT CARD 02</span>
        <strong>SET 2 · DESIGNED BY SPACE BUNNY</strong>
      </div>
    </main>
  )
}
