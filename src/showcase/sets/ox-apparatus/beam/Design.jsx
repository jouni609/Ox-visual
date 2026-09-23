import { motion } from 'framer-motion'
import './design.css'

function BeamOx() {
  return (
    <svg className="ox-apparatus-beam-figure" viewBox="0 0 1300 720" aria-hidden="true">
      <defs>
        <pattern id="ox-apparatus-beam-stripe" width="24" height="24" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
          <path d="M0 0v24" fill="none" stroke="currentColor" strokeWidth="7" />
        </pattern>
      </defs>

      <path className="ox-apparatus-beam-ground" d="M48 648H1252" />
      <motion.g
        className="ox-apparatus-beam-strain"
        animate={{ x: [0, -6, 0, -2, 0], rotate: [0, -0.5, 0, 0.2, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        style={{ transformOrigin: '840px 450px' }}
      >
        <path className="ox-apparatus-beam-tail" d="M335 284c-42 12-68 51-70 108-1 31 7 60 23 88l28-16c-15-31-20-58-14-82 6-25 21-43 45-55Z" />
        <path className="ox-apparatus-beam-leg ox-apparatus-beam-leg-far" d="M438 421c28 4 46 23 47 55l10 164h-53l-19-145Z" />
        <path className="ox-apparatus-beam-hoof" d="M440 632h59l8 35h-74Z" />
        <path className="ox-apparatus-beam-leg ox-apparatus-beam-leg-far" d="M822 414c32 3 51 22 53 55l9 160h-55l-18-142Z" />
        <path className="ox-apparatus-beam-hoof" d="M827 622h60l11 42h-80Z" />

        <path className="ox-apparatus-beam-body" d="M370 269c69-37 149-48 239-32 83 15 166 22 248 23 69 1 117 17 145 49 27 31 30 78 9 119-24 45-69 72-134 81-71 10-148 12-230 8l-211-3c-76-1-127-21-151-61-22-37-21-84 3-126 13-23 40-44 82-58Z" />
        <path className="ox-apparatus-beam-leg" d="M410 417c34-2 57 19 60 52l9 169h-57l-18-153Z" />
        <path className="ox-apparatus-beam-hoof" d="M421 630h61l9 37h-79Z" />
        <path className="ox-apparatus-beam-leg" d="M793 417c35-2 58 20 60 54l6 165h-57l-16-154Z" />
        <path className="ox-apparatus-beam-hoof" d="M801 629h61l11 38h-81Z" />
        <path className="ox-apparatus-beam-neck" d="M919 249c60 3 103 36 127 98 14 37 21 81 19 133l-135 16c-4-61-20-111-47-151-25-37-4-79 36-96Z" />
        <path className="ox-apparatus-beam-head" d="M973 281c51 1 99 18 142 51 45 34 70 78 76 132 5 41-18 71-68 88-32 11-72 13-120 5-44-7-68-30-72-68-4-40 3-79 21-117 15-32 12-62-9-90Z" />
        <path className="ox-apparatus-beam-ear" d="M989 298c14-42 43-65 88-68-4 38-30 64-78 79Z" />
        <path className="ox-apparatus-beam-horn" d="M1025 294c-12-48 16-82 75-96 24 42 10 80-40 111Z" />
        <path className="ox-apparatus-beam-horn" d="M1082 284c50-38 105-39 150-8-49 28-100 33-157 18Z" />
        <path className="ox-apparatus-beam-eye" d="M1063 367c18-13 37-11 56 6-20 16-39 14-58-5Z" />
        <path className="ox-apparatus-beam-nostril" d="M1153 468c13-8 26-6 38 6-12 9-25 7-38-5Z" />
        <path className="ox-apparatus-beam-line" d="M405 281c114-38 231-40 352-6M559 340c19 45 20 90 4 134M806 278c-15 55-11 105 13 150M904 291c-16 58-14 111 6 159M1090 344c30 9 56 23 79 43" />

        <path className="ox-apparatus-beam-yoke" d="M285 206h453l25 65-15 66H282l-17-73Z" />
        <path className="ox-apparatus-beam-yoke-line" d="M319 229h377M306 260h396M294 315h422" />
        <path className="ox-apparatus-beam-strap" d="M350 216h65l25 143h-68ZM551 216h66l-7 143h-66Z" />
        <path className="ox-apparatus-beam-ring" d="M395 373c0 26 20 47 45 47s45-21 45-47-20-47-45-47-45 21-45 47Z" />
        <path className="ox-apparatus-beam-yoke-stripe" d="M282 206h456v63H282Z" />

        <path className="ox-apparatus-beam-pull" d="M730 250h550" />
        <path className="ox-apparatus-beam-pull-arrow" d="m1230 225 48 25-48 27" />
      </motion.g>

      <motion.path
        className="ox-apparatus-beam-force"
        d="M120 175h390"
        animate={{ scaleX: [0.12, 1, 0.12], opacity: [0.25, 1, 0.25] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        style={{ transformOrigin: '120px 175px' }}
      />
      <path className="ox-apparatus-beam-force-arrow" d="m475 150 45 25-45 25" />
    </svg>
  )
}

export default function Beam() {
  return (
    <main className="th-ox-apparatus-beam ox-apparatus-beam">
      <div className="ox-apparatus-beam-rail">
        <span>LOAD TEST / 03</span>
        <span>STATIC DRAW · 4.2 kN</span>
        <span>FRAME 04 / 09</span>
      </div>

      <header className="ox-apparatus-beam-heading">
        <h1>BEAM</h1>
        <p>Before the motor, a team turned muscle into traction. The yoke spreads force across the shoulders; four hooves keep it on the ground.</p>
      </header>

      <div className="ox-apparatus-beam-stage">
        <BeamOx />
        <div className="ox-apparatus-beam-load">
          <span>MEASURED PULL</span>
          <strong>4.2</strong>
          <small>kN</small>
        </div>
        <div className="ox-apparatus-beam-note">
          <span>01</span>
          <p>Yoke</p>
          <span>02</span>
          <p>Shoulder</p>
          <span>03</span>
          <p>Hoof</p>
        </div>
      </div>

      <div className="ox-apparatus-beam-signature">
        <span>LOAD CELL 03</span>
        <strong>SET 3 · DESIGNED BY SPACE BUNNY</strong>
        <i aria-hidden="true" />
        <i aria-hidden="true" />
      </div>
    </main>
  )
}
