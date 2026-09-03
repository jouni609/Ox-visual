import { useState } from 'react'
import { motion } from 'framer-motion'
import './breaking.css'

const COMMANDS = {
  ho: { label: 'Ho', note: 'Stand. Weight settles back, ears come forward, the rope goes slack.', ear: '0deg' },
  gee: { label: 'Gee', note: 'Turn right. Left ear tips out, the lead lifts two fingers high.', ear: '14deg' },
  haw: { label: 'Haw', note: 'Turn left. The yearling looks to the herder’s shoulder, not the rope.', ear: '-14deg' },
}

export default function Breaking() {
  const [cmd, setCmd] = useState('ho')
  const active = COMMANDS[cmd]
  return (
    <div className="ox-vita-break th-ox-vita-break">
      <div className="ox-vita-break-frame">
        <p className="ox-vita-break-eyebrow">Set XX · Vita II — Age: fourteen months · Training ground</p>
        <h1 className="ox-vita-break-title">Breaking</h1>
        <p className="ox-vita-break-lede">
          Nobody breaks an ox the way you break a horse. You school it the way you
          teach a language: halter first, then lead, then voice, and only then the
          light training yoke. This is month three of that conversation.
        </p>

        <div className="ox-vita-break-board">
          <svg className="ox-vita-break-dust" viewBox="0 0 800 120" aria-hidden="true" preserveAspectRatio="none">
            <g fill="#F4F1E6" opacity="0.5">
              <circle cx="80" cy="40" r="2.5" />
              <circle cx="200" cy="70" r="1.8" />
              <circle cx="340" cy="34" r="2.2" />
              <circle cx="520" cy="60" r="1.6" />
              <circle cx="660" cy="36" r="2.4" />
              <circle cx="740" cy="74" r="1.7" />
            </g>
          </svg>

          <div className="ox-vita-break-ring" aria-hidden="true" />

          <motion.svg
            className="ox-vita-break-ox"
            viewBox="0 0 680 420"
            role="img"
            aria-label="Yearling ox wearing a halter and light training yoke"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <defs>
              <linearGradient id="ox-vita-break-hide" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stopColor="#8A6B4A" />
                <stop offset="1" stopColor="#5D4227" />
              </linearGradient>
            </defs>
            <ellipse cx="330" cy="372" rx="240" ry="22" fill="#000000" opacity="0.35" />
            <ellipse cx="330" cy="360" rx="252" ry="66" fill="none" stroke="#F4F1E6" strokeWidth="3" strokeDasharray="12 14" opacity="0.55" />
            <g strokeLinecap="round" fill="none">
              <path d="M120 360 L120 200" stroke="#C9A86A" strokeWidth="10" />
              <circle cx="120" cy="192" r="10" fill="#C9A86A" />
              <path d="M120 240 C190 250 260 268 330 292" stroke="#C9A86A" strokeWidth="5" />
            </g>
            <g>
              <path d="M210 250 L198 356 L222 356 L232 252 Z" fill="#4A3421" />
              <path d="M272 256 L266 360 L290 360 L296 256 Z" fill="#5D4227" />
              <path d="M448 254 L444 358 L468 358 L472 252 Z" fill="#4A3421" />
              <path d="M506 248 L514 352 L538 350 L528 244 Z" fill="#5D4227" />
              <g fill="#F4F1E6">
                <path d="M196 352 L224 352 L223 368 L195 368 Z" />
                <path d="M264 356 L292 356 L291 372 L263 372 Z" />
                <path d="M442 354 L470 354 L469 370 L441 370 Z" />
                <path d="M512 348 L540 346 L541 362 L513 364 Z" />
              </g>
            </g>
            <path d="M216 196 C260 150 350 136 440 152 C500 163 534 200 536 244 C537 276 512 296 470 298 C390 302 280 296 232 276 C212 266 206 222 216 196 Z" fill="url(#ox-vita-break-hide)" stroke="#F4F1E6" strokeWidth="5" strokeLinejoin="round" />
            <rect x="228" y="168" width="252" height="20" rx="10" fill="#C9A86A" stroke="#1E2A26" strokeWidth="4" transform="rotate(-4 228 168)" />
            <rect x="246" y="162" width="14" height="32" rx="4" fill="#1E2A26" transform="rotate(-4 246 162)" />
            <rect x="446" y="154" width="14" height="32" rx="4" fill="#1E2A26" transform="rotate(-4 446 154)" />
            <path d="M536 220 C560 212 576 198 578 178 C579 168 573 161 566 164 C559 167 560 179 555 190 C550 201 542 208 536 212 Z" fill="#5D4227" stroke="#F4F1E6" strokeWidth="4" strokeLinejoin="round" />
            <g style={{ transformOrigin: '176px 190px', transform: `rotate(${active.ear})` }}>
              <path d="M238 184 C214 170 190 168 174 180 C162 189 164 202 178 207 C196 214 218 206 232 196 Z" fill="#6B4E30" stroke="#F4F1E6" strokeWidth="4" strokeLinejoin="round" />
            </g>
            <path d="M500 148 C516 138 536 138 548 148 L538 168 C526 162 512 162 502 168 Z" fill="#6B4E30" stroke="#F4F1E6" strokeWidth="4" strokeLinejoin="round" />
            <path d="M492 152 C514 142 548 148 566 172 C580 190 582 216 574 238 C567 257 551 266 534 262 C522 259 516 249 518 237 L492 190 Z" fill="#7A5A38" stroke="#F4F1E6" strokeWidth="5" strokeLinejoin="round" />
            <path d="M524 192 L556 184" stroke="#1E2A26" strokeWidth="4" strokeLinecap="round" />
            <path d="M522 196 C514 188 502 186 494 192" fill="none" stroke="#F4F1E6" strokeWidth="3" strokeLinecap="round" />
            <circle cx="544" cy="202" r="8" fill="#F4F1E6" />
            <circle cx="545" cy="203" r="3.5" fill="#1E2A26" />
            <path d="M518 237 C526 243 540 245 552 241 C560 238 565 232 566 224 L574 238 C571 252 559 262 544 263 C532 264 521 257 516 247 Z" fill="#2A1F14" />
            <path d="M492 190 C480 200 462 208 444 212" fill="none" stroke="#F2C14E" strokeWidth="5" strokeLinecap="round" />
            <path d="M444 212 C430 215 420 224 420 234" fill="none" stroke="#F2C14E" strokeWidth="5" strokeLinecap="round" />
            <circle cx="420" cy="238" r="7" fill="none" stroke="#F2C14E" strokeWidth="4" />
            <path d="M420 238 C340 250 220 244 122 240" fill="none" stroke="#C9A86A" strokeWidth="4" strokeDasharray="8 8" opacity="0.9" />
            <path d="M232 276 C250 270 274 270 290 280" fill="none" stroke="#F4F1E6" strokeWidth="3" opacity="0.6" strokeLinecap="round" />
          </motion.svg>

          <div className="ox-vita-break-lessons">
            <p className="ox-vita-break-kicker">Field commands — tap to try one</p>
            <div className="ox-vita-break-btns">
              {Object.entries(COMMANDS).map(([key, c]) => (
                <button
                  key={key}
                  type="button"
                  className={cmd === key ? 'ox-vita-break-cmd is-on' : 'ox-vita-break-cmd'}
                  onClick={() => setCmd(key)}
                  aria-pressed={cmd === key}
                >
                  {c.label}
                </button>
              ))}
            </div>
            <p className="ox-vita-break-note" aria-live="polite">{active.note}</p>
            <ul className="ox-vita-break-list">
              <li><span>I — Halter</span><span>ten days, no pulling</span></li>
              <li><span>II — Lead</span><span>follows the shoulder</span></li>
              <li><span>III — Voice</span><span>three words before reins</span></li>
              <li><span>IV — Yoke</span><span>light ash beam, empty sledge</span></li>
            </ul>
          </div>
        </div>

        <div className="ox-vita-break-stamp">
          <p className="ox-vita-break-stamptext">SET XX · DESIGNED BY MUSE SPARK</p>
          <p className="ox-vita-break-stampsub">passed · training ground chalk inspection</p>
        </div>
      </div>
    </div>
  )
}
