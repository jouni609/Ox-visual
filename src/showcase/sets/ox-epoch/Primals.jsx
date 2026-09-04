import './primals.css'

import { useState } from 'react'

const cuts = [
  { n: 1, name: 'Chuck', use: 'pot roast, ground', cx: 274, cy: 215, d: 'M236,182 L312,182 L312,250 L236,250 Z' },
  { n: 2, name: 'Rib', use: 'rib roast, short rib', cx: 371, cy: 215, d: 'M312,182 L430,182 L430,250 L312,250 Z' },
  { n: 3, name: 'Loin', use: 'T-bone, porterhouse', cx: 495, cy: 215, d: 'M430,182 L560,182 L560,250 L430,250 Z' },
  { n: 4, name: 'Sirloin', use: 'steaks, kebabs', cx: 600, cy: 215, d: 'M560,182 L640,182 L640,250 L560,250 Z' },
  { n: 5, name: 'Round', use: 'rump, eye of round', cx: 684, cy: 245, d: 'M640,182 L720,182 L720,300 L640,250 Z' },
  { n: 6, name: 'Brisket', use: 'corned, barbecued', cx: 286, cy: 282, d: 'M236,250 L312,250 L312,306 L264,308 L236,276 Z' },
  { n: 7, name: 'Short Plate', use: 'short ribs, pastrami', cx: 371, cy: 283, d: 'M312,250 L430,250 L430,318 L312,318 Z' },
  { n: 8, name: 'Flank', use: 'flank steak, lardo', cx: 495, cy: 283, d: 'M430,250 L560,250 L560,318 L430,318 Z' },
  { n: 9, name: 'Shank', use: 'osso buco, stock', cx: 278, cy: 400, d: 'M264,318 L292,318 L292,462 L266,462 Z' },
]

const dividers = [
  'M312,182 L312,318',
  'M430,182 L430,318',
  'M560,182 L560,318',
  'M640,182 L640,300',
  'M236,250 L700,250',
]

export default function Primals() {
  const [active, setActive] = useState(null)

  return (
    <div className="th-ox-epoch ox-epoch-p-page">
      <main className="ox-epoch-p-sheet">
        <header className="ox-epoch-p-head">
          <p className="ox-epoch-p-kicker">Butcher&rsquo;s Chart · Bos taurus · Household Edition</p>
          <h1 className="ox-epoch-p-h1">The Beast, Divided</h1>
          <p className="ox-epoch-p-sub">
            Every part answers a different hunger. Touch a region, or its name below.
          </p>
        </header>

        <div className="ox-epoch-p-body">
          <svg
            className="ox-epoch-p-art"
            viewBox="0 0 920 600"
            aria-hidden="true"
            onMouseLeave={() => setActive(null)}
          >
            <path
              d="M294,302 C300,336 302,366 310,396 C312,406 322,406 324,396 C328,366 326,336 320,304 Z"
              fill="#2B211B"
            />
            <path
              d="M118,232 C112,220 116,208 126,202 C136,196 152,192 166,191 C180,182 196,182 210,182 C224,180 240,178 250,178 C340,172 480,172 560,176 C610,179 650,182 676,188 C690,190 700,192 696,192 C712,198 720,212 720,232 C720,258 712,282 700,300 L692,300 L694,462 L670,462 L668,316 L640,308 L636,308 L634,462 L612,462 L610,310 C560,318 480,320 420,316 L416,316 L414,462 L392,462 L390,318 C360,314 320,310 296,306 L292,306 L290,462 L266,462 L264,308 C250,300 240,288 236,276 C224,268 212,262 204,258 C200,246 188,240 174,242 C160,244 142,246 130,242 C122,240 116,238 118,232 Z"
              fill="#2B211B"
            />
            <path
              d="M212,184 C194,158 170,148 144,148 C166,160 184,176 196,194 Z"
              fill="#2B211B"
            />
            <path
              d="M222,192 C236,186 250,188 258,196 C248,204 232,206 222,200 Z"
              fill="#2B211B"
            />
            <circle cx="176" cy="208" r="4.5" fill="#F3E7CE" />
            <circle cx="132" cy="222" r="3.5" fill="#F3E7CE" />
            <path
              d="M700,198 C712,248 710,300 702,342"
              fill="none"
              stroke="#2B211B"
              strokeWidth="7"
              strokeLinecap="round"
            />
            <path
              d="M702,340 C694,356 694,374 700,388 C708,374 710,356 706,342 Z"
              fill="#2B211B"
            />
            {cuts.map((c) => (
              <path
                key={`f${c.n}`}
                d={c.d}
                className="ox-epoch-p-region"
                fill={active === c.n ? 'rgba(126,36,28,0.32)' : 'rgba(126,36,28,0)'}
                stroke={active === c.n ? '#7E241C' : 'rgba(126,36,28,0)'}
                strokeWidth="2.5"
                onMouseEnter={() => setActive(c.n)}
                onFocus={() => setActive(c.n)}
              />
            ))}
            <g stroke="#7E241C" strokeWidth="2" strokeDasharray="5 6" opacity="0.8">
              {dividers.map((d, i) => (
                <path key={i} d={d} fill="none" />
              ))}
            </g>
            {cuts.map((c) => (
              <g key={`n${c.n}`}>
                <circle
                  cx={c.cx}
                  cy={c.cy}
                  r="13"
                  fill={active === c.n ? '#7E241C' : '#F3E7CE'}
                  stroke="#7E241C"
                  strokeWidth="2.5"
                />
                <text
                  x={c.cx}
                  y={c.cy + 4.5}
                  textAnchor="middle"
                  className="ox-epoch-p-num"
                  fill={active === c.n ? '#F3E7CE' : '#7E241C'}
                >
                  {c.n}
                </text>
              </g>
            ))}
            <path d="M180,480 L780,480" stroke="#2B211B" strokeWidth="2" opacity="0.35" />
          </svg>

          <ol className="ox-epoch-p-legend">
            {cuts.map((c) => (
              <li key={c.n}>
                <button
                  type="button"
                  className={active === c.n ? 'is-active' : ''}
                  onMouseEnter={() => setActive(c.n)}
                  onMouseLeave={() => setActive(null)}
                  onFocus={() => setActive(c.n)}
                  onBlur={() => setActive(null)}
                >
                  <span className="ox-epoch-p-key">{c.n}</span>
                  <span className="ox-epoch-p-name">{c.name}</span>
                  <span className="ox-epoch-p-use">{c.use}</span>
                </button>
              </li>
            ))}
          </ol>
        </div>

        <div className="ox-epoch-p-stamp" role="note" aria-label="Signature">
          <span>SET 04 · DESIGNED BY OMEN ALPHA</span>
        </div>
      </main>
    </div>
  )
}
