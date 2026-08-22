import { motion } from 'framer-motion'
import './taurusplate.css'

const OX_BODY =
  'M96 250 C104 226 124 210 150 204 C146 182 152 158 168 144 ' +
  'C180 133 196 131 208 138 C214 124 226 116 239 118 C252 120 261 131 263 144 ' +
  'C268 137 276 136 282 141 C288 147 288 156 284 164 ' +
  'C272 186 256 202 240 214 C268 222 292 238 308 260 ' +
  'C320 277 326 297 324 318 C340 318 356 324 368 334 ' +
  'C358 340 346 344 334 344 C336 366 334 389 327 410 ' +
  'L342 412 L336 450 C332 472 328 492 323 511 L305 506 ' +
  'C310 486 314 465 316 444 C317 431 317 418 315 406 ' +
  'C298 415 277 419 256 417 C254 439 250 460 243 480 ' +
  'L254 485 L244 520 C241 530 238 539 234 547 L218 540 ' +
  'C224 526 228 510 230 494 C231 481 231 468 229 456 ' +
  'C208 450 189 437 176 419 C165 403 161 385 165 368 ' +
  'C157 363 153 355 153 347 C153 334 159 321 169 311 ' +
  'C163 292 164 270 172 252 C140 246 112 250 96 250 Z'

const OX_HORN_FAR =
  'M263 144 C268 137 276 136 282 141 C290 149 291 161 287 171 ' +
  'C279 194 264 214 245 229 C259 203 266 176 265 156 Z'

const OX_HORN_NEAR =
  'M208 138 C212 126 221 117 232 115 C243 113 253 119 258 129 ' +
  'C266 145 265 164 258 181 C255 161 248 146 237 140 ' +
  'C230 136 222 137 216 141 Z'

const HATCH_ROWS = Array.from({ length: 14 }, (_, i) => 214 + i * 16)

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.2 + i * 0.12, duration: 0.6, ease: 'easeOut' },
  }),
}

export default function TaurusPlate() {
  return (
    <section className="ox-systema-tau th-ox-systema-tau" lang="en">
      <div className="ox-systema-tau-plate">
        <motion.div
          className="ox-systema-tau-frame"
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <div className="ox-systema-tau-rulebox">
            <p className="ox-systema-tau-over">TABULA II · FAMILIA BOVIDAE</p>
            <h1 className="ox-systema-tau-title">Bos taurus</h1>
            <p className="ox-systema-tau-sub" lang="la">
              <em>Domestic Ox — the draught female, four years, in working condition</em>
            </p>
          </div>

          <svg
            className="ox-systema-tau-svg"
            viewBox="0 0 460 580"
            role="img"
            aria-label="Engraved naturalist plate of a domestic ox in side profile"
          >
            <defs>
              <clipPath id="ox-systema-tau-clip">
                <path d={OX_BODY} />
              </clipPath>
            </defs>
            <g className="ox-systema-tau-engrave">
              <path d={OX_BODY} className="ox-systema-tau-fill" />
              <g clipPath="url(#ox-systema-tau-clip)">
                {HATCH_ROWS.map((y) => (
                  <motion.line
                    key={y}
                    x1="60"
                    y1={y}
                    x2="400"
                    y2={y}
                    className="ox-systema-tau-hatch"
                    strokeWidth="1.6"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.5, delay: 0.7 + (y - 214) / 224 }}
                  />
                ))}
                <motion.line
                  x1="150" y1="210" x2="330" y2="330"
                  className="ox-systema-tau-hatch-heavy" strokeWidth="10"
                  initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
                  transition={{ duration: 0.8, delay: 1.4 }}
                />
              </g>
              <path d={OX_BODY} className="ox-systema-tau-outline" fill="none" strokeWidth="3" />
              <path d={OX_HORN_FAR} className="ox-systema-tau-horn" />
              <path d={OX_HORN_NEAR} className="ox-systema-tau-horn" />
              <circle cx="238" cy="156" r="4.5" className="ox-systema-tau-eye" />
              <path
                d="M186 196 C204 203 224 205 241 201"
                className="ox-systema-tau-outline"
                fill="none"
                strokeWidth="2.4"
              />
              <path
                d="M100 252 C140 288 200 302 260 294 C292 289 314 276 324 258"
                className="ox-systema-tau-outline"
                fill="none"
                strokeWidth="2.4"
              />
              <path d="M120 480 C170 502 230 508 290 496" className="ox-systema-tau-ground" fill="none" strokeWidth="2" />
              <path d="M132 500 C180 520 240 524 300 512" className="ox-systema-tau-ground" fill="none" strokeWidth="1.4" />
            </g>
          </svg>

          <dl className="ox-systema-tau-measures">
            <div>
              <dt>Height at shoulder</dt>
              <dd>1.45 m</dd>
            </div>
            <div>
              <dt>Live weight</dt>
              <dd>680 kg</dd>
            </div>
            <div>
              <dt>Drawn from</dt>
              <dd>the Sussex marshes</dd>
            </div>
          </dl>

          <motion.p
            className="ox-systema-tau-desc"
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0}
          >
            Branch two: the taurine branch, compact and patient, bred not for speed
            nor sport but for the pull. Where the aurochs was storm, the ox is
            weather — the same animal, negotiated with over nine thousand years.
          </motion.p>

          <p className="ox-systema-tau-colophon">
            DEL. ET SCULP. — SET 2 · DESIGNED BY GLM 5.3 — LONDINI, ANNO MMXXVI
          </p>
        </motion.div>
      </div>
    </section>
  )
}
