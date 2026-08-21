import { motion } from 'framer-motion'
import './jianzhi.css'

function HalfSolid() {
  return (
    <g>
      <path d="M348,86 C392,64 436,66 452,92 C458,102 454,112 444,114 C448,96 420,84 388,92 C368,97 356,104 350,112 Z" />
      <ellipse cx="372" cy="128" rx="26" ry="12" transform="rotate(24 372 128)" />
      <circle cx="340" cy="150" r="46" />
      <rect x="330" y="150" width="60" height="40" rx="18" />
      <path d="M330,180 C380,178 420,196 444,226 L420,258 C398,232 366,220 330,220 Z" />
      <path d="M330,214 C400,214 452,248 468,306 C478,342 472,372 458,392 L330,392 Z" />
      <rect x="356" y="380" width="34" height="90" rx="8" />
      <rect x="428" y="372" width="30" height="82" rx="8" />
    </g>
  )
}

function HalfCuts() {
  return (
    <g>
      <path d="M362,98 C392,84 420,84 438,96" stroke="#000" strokeWidth="6" fill="none" strokeLinecap="round" />
      <circle cx="372" cy="128" r="6" />
      <circle cx="338" cy="142" r="9" />
      <circle cx="338" cy="142" r="4" fill="#fff" />
      <circle cx="416" cy="300" r="26" />
      <circle cx="416" cy="300" r="17" fill="#fff" />
      <circle cx="416" cy="300" r="8" />
      <circle cx="368" cy="268" r="5" />
      <circle cx="368" cy="256" r="5" />
      <circle cx="379" cy="264" r="5" />
      <circle cx="375" cy="278" r="5" />
      <circle cx="361" cy="278" r="5" />
      <circle cx="357" cy="264" r="5" />
      <path d="M444,332 l10,10 l-10,10 l-10,-10 Z" />
      <path d="M428,360 l8,8 l-8,8 l-8,-8 Z" />
      <rect x="362" y="440" width="4" height="20" />
      <rect x="371" y="440" width="4" height="20" />
      <rect x="380" y="440" width="4" height="20" />
      <rect x="434" y="424" width="4" height="18" />
      <rect x="444" y="424" width="4" height="18" />
      <path d="M366,470 L373,458 L380,470 Z" />
      <path d="M436,454 L443,444 L450,454 Z" />
    </g>
  )
}

function CenterSolid() {
  return (
    <g>
      <rect x="286" y="96" width="28" height="84" rx="14" />
      <ellipse cx="300" cy="196" rx="34" ry="22" />
      <rect x="262" y="210" width="76" height="182" rx="24" />
      <rect x="297" y="392" width="6" height="52" rx="3" />
      <path d="M300,440 l17,19 l-17,19 l-17,-19 Z" />
      <path d="M288,478 L288,494 M296,481 L296,497 M304,481 L304,497 M312,478 L312,494" stroke="#fff" strokeWidth="3" strokeLinecap="round" />
    </g>
  )
}

function CenterCuts() {
  return (
    <g>
      <circle cx="288" cy="196" r="4" />
      <circle cx="312" cy="196" r="4" />
      <circle cx="300" cy="120" r="6" />
      <circle cx="300" cy="107" r="5" />
      <circle cx="312" cy="116" r="5" />
      <circle cx="308" cy="130" r="5" />
      <circle cx="292" cy="130" r="5" />
      <circle cx="288" cy="116" r="5" />
    </g>
  )
}

function Tassel({ x, delay }) {
  return (
    <motion.g
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ type: 'spring', stiffness: 260, damping: 14, delay }}
      style={{ transformOrigin: `${x}px 460px` }}
    >
      <line x1={x} y1="460" x2={x} y2="486" stroke="#C8102E" strokeWidth="2" />
      <path d={`M${x},484 l9,10 l-9,10 l-9,-10 Z`} fill="#C8102E" />
    </motion.g>
  )
}

export default function Jianzhi() {
  return (
    <div className="th-jianzhi">
      <header className="jz-head">
        <h1 className="jz-title" lang="zh">剪纸牛</h1>
        <p className="jz-subtitle">JIANZHI — THE PAPER-CUT OX</p>
        <p className="jz-intro">Cut from one sheet, folded once, opened into blessing.</p>
      </header>

      <div className="jz-stage">
        <span className="jz-strip jz-strip-l">纸变成祝福 · paper becomes blessing</span>
        <span className="jz-strip jz-strip-r">cut by hand, kept by heart</span>

        <div className="jz-unfold">
          <motion.div
            className="jz-unfold-inner"
            initial={{ rotateX: 82, opacity: 0 }}
            whileInView={{ rotateX: 0, opacity: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 1.15, ease: 'easeOut' }}
            style={{ transformOrigin: 'top center' }}
          >
            <svg className="jz-art" viewBox="0 0 600 500" aria-hidden="true">
              <defs>
                <mask id="jz-cut">
                  <rect x="-320" y="-160" width="1240" height="840" fill="#000" />
                  <g fill="#fff">
                    <HalfSolid />
                    <g transform="translate(600,0) scale(-1,1)">
                      <HalfSolid />
                    </g>
                    <CenterSolid />
                  </g>
                  <g fill="#000">
                    <HalfCuts />
                    <g transform="translate(600,0) scale(-1,1)">
                      <HalfCuts />
                    </g>
                    <CenterCuts />
                  </g>
                </mask>
              </defs>
              <motion.g
                className="jz-shadow"
                mask="url(#jz-cut)"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.9, duration: 0.6 }}
              >
                <rect x="0" y="0" width="600" height="500" fill="#A00E23" />
              </motion.g>
              <g mask="url(#jz-cut)">
                <rect x="0" y="0" width="600" height="500" fill="#C8102E" />
              </g>
              <g fill="none" stroke="#C8102E">
                <rect x="40" y="30" width="520" height="440" strokeWidth="3" />
                <rect x="56" y="46" width="488" height="408" strokeWidth="1.5" />
              </g>
              <g fill="#C8102E">
                <path d="M40,21 h18 v18 h-18 Z M40,30 l9,-0 l0,9 Z" />
                <rect x="31" y="21" width="18" height="18" />
                <rect x="551" y="21" width="18" height="18" />
                <rect x="31" y="461" width="18" height="18" />
                <rect x="551" y="461" width="18" height="18" />
              </g>
              <g fill="#FAF6EF">
                <path d="M40,30 m-5,0 l5,-5 l5,5 l-5,5 Z" />
                <path d="M560,30 m-5,0 l5,-5 l5,5 l-5,5 Z" />
                <path d="M40,470 m-5,0 l5,-5 l5,5 l-5,5 Z" />
                <path d="M560,470 m-5,0 l5,-5 l5,5 l-5,5 Z" />
              </g>
              <Tassel x={88} delay={0.7} />
              <Tassel x={512} delay={0.85} />
            </svg>
          </motion.div>
        </div>
      </div>

      <footer className="jz-foot">
        <span className="jz-chop">
          <span className="jz-chop-mark">牛</span>
          <span className="jz-chop-latin">OX</span>
        </span>
        <span className="jz-caption">SET II · DESIGNED BY OX-ALPHA</span>
      </footer>
    </div>
  )
}
