import { useState } from 'react'
import './boustro.css'

const rows = [
  { greek: 'ΘΕΟΙ', latin: 'gods' },
  { greek: 'ΒΟΥΣ', latin: 'ox' },
  { greek: 'ΝΟΜΟΣ', latin: 'law' },
  { greek: 'ΓΡΑΜΜΑ', latin: 'writing' },
  { greek: 'ΠΟΛΙΣ', latin: 'city' },
]

function RuneRow({ row, index, flipped, onFlip }) {
  return (
    <button
      type="button"
      className={`bous-line${flipped ? ' is-flipped' : ''}`}
      onClick={onFlip}
      aria-pressed={flipped}
      aria-label={`Line ${index + 1}: ${row.greek} ${row.latin}. Click to turn the ox.`}
    >
      <span className="bous-line-no">{index + 1}</span>
      <span className="bous-line-text" lang="el">{row.greek}</span>
      <span className="bous-line-lemma">{row.latin}</span>
      <span className="bous-line-end" aria-hidden="true" focusable="false" />
    </button>
  )
}

function MeanderPattern() {
  return (
    <svg className="bous-meander-svg" width="100%" height="30" aria-hidden="true" focusable="false">
      <defs>
        <pattern id="bous-meander" width="46" height="30" patternUnits="userSpaceOnUse">
          <path d="M2 26 V8 H26 V20 H18 V14" fill="none" stroke="#e6d3ac" strokeWidth="2.2" />
          <path d="M35 26 V8 H31" fill="none" stroke="#e6d3ac" strokeWidth="2.2" />
        </pattern>
      </defs>
      <rect width="100%" height="30" fill="url(#bous-meander)" />
    </svg>
  )
}

function AmphoraOx() {
  return (
    <svg className="bous-ox" viewBox="0 0 760 430" aria-hidden="true" focusable="false">
      <g className="bous-ox-figure">
        <path
          className="bous-ox-body"
          d="M150 168 C226 106 460 96 566 142 C652 180 676 252 634 296 L598 322 C520 354 258 352 204 318 C160 294 122 228 150 168 Z"
        />
        <path
          className="bous-ox-head"
          d="M560 148 C548 106 512 92 484 112 C456 132 460 170 492 178 C470 196 468 226 492 240 C516 254 550 242 566 216 C586 222 610 216 618 200 C600 178 580 178 560 148 Z"
        />
        <path className="bous-ox-horn" d="M560 122 C588 78 646 66 672 100 C690 128 674 164 642 178 C676 158 690 132 668 108 C646 86 592 98 560 122 Z" />
        <path className="bous-ox-insect" d="M508 176 C518 170 528 166 538 160" />
        <path className="bous-ox-insect" d="M470 214 C486 206 500 204 512 198" />
        <path className="bous-ox-insect" d="M212 260 C236 248 252 244 268 240" />
        <path className="bous-ox-insect" d="M330 268 C356 254 374 252 392 248" />
        <path className="bous-ox-insect" d="M470 266 C488 254 502 252 516 246" />
        <path className="bous-ox-insect" d="M560 246 C590 234 610 230 630 222" />
        <path className="bous-ox-insect" d="M290 148 C330 134 372 130 410 130" />
        <path className="bous-ox-insect" d="M430 130 C470 130 504 136 534 144" />
        <path className="bous-ox-insect" d="M470 128 C464 138 460 144 454 150" />
        <ellipse className="bous-ox-eye" cx="586" cy="150" rx="10" ry="5" />
        <path className="bous-ox-insect" d="M578 158 C584 164 592 166 600 162" />
        <path className="bous-ox-leg1" d="M226 314 L222 402 L250 402 L258 314" />
        <path className="bous-ox-leg2" d="M318 318 L316 402 L344 402 L350 316" />
        <path className="bous-ox-leg3" d="M470 316 L468 402 L496 402 L502 314" />
        <path className="bous-ox-leg4" d="M566 308 L564 400 L592 400 L596 306" />
        <path className="bous-ox-legcuts" d="M222 386 H250 M316 386 H344 M468 386 H496 M564 384 H592" />
        <path className="bous-ox-insect" d="M600 204 C612 218 616 232 612 248" />
        <path className="bous-ox-insect" d="M168 176 C190 152 226 140 268 134" />
        <path className="bous-ox-insect" d="M150 200 C160 184 166 178 168 176" />
      </g>
    </svg>
  )
}

function EtymologyCard({ term, sense, note }) {
  return (
    <article className="bous-etymo">
      <span className="bous-etymo-term" lang="el">{term}</span>
      <span className="bous-etymo-sense">{sense}</span>
      <span className="bous-etymo-note">{note}</span>
    </article>
  )
}

export default function Boustro() {
  const [dirs, setDirs] = useState([false, true, false, true, false])
  const toggle = (i) => setDirs((d) => d.map((v, j) => (j === i ? !v : v)))

  return (
    <div className="th-bous">
      <MeanderPattern />

      <header className="bous-head">
        <span className="bous-head-left" lang="el">ΛΟΓΟΣ</span>
        <span className="bous-head-title">THE SCRIPT THAT PLOUGHS</span>
        <span className="bous-head-right">DIPYLON · c. 740 BC</span>
      </header>

      <main className="bous-main">
        <section className="bous-hero">
          <div className="bous-hero-copy">
            <p className="bous-kicker" lang="el">βουστροφηδόν</p>
            <h1 className="bous-title">
              The ox
              <br />
              <em>turns.</em>
            </h1>
            <p className="bous-lede">
              Take the word apart and it is arithmetic: βοῦς, the ox. στρέφειν, to turn.
              <br />
              Boustrophedon is the way ancient Greeks ploughed their sentences, one furrow
              right, the next left, the letters turning at the edge of the column like the ox
              turning at the edge of the field.
            </p>
            <p className="bous-fact">
              The Dipylon oinochoe, an Attic prize jug fired around 740 BC, carries the
              earliest Greek inscription known. Its verse runs the same way the ox does:
              out, and back.
            </p>
          </div>
          <div className="bous-hero-art">
            <div className="bous-frieze">
              <MeanderPattern />
              <div className="bous-frieze-scene" aria-label="Black-figure pastiche frieze of an ox turning">
                <div className="bous-frieze-tick bous-tick-a" />
                <div className="bous-frieze-tick bous-tick-b" />
                <AmphoraOx />
              </div>
              <MeanderPattern />
            </div>
            <span className="bous-hero-cap">FRIEZE SPECIMEN · HAND-DRAWN BLACK-FIGURE PASTICHE</span>
          </div>
        </section>

        <section className="bous-inscription" aria-label="Interactive boustrophedon inscription">
          <div className="bous-inscription-head">
            <h2 className="bous-h2">Plough it yourself.</h2>
            <p className="bous-inscription-sub">
              Press any line and the script does what the ox does. The letters turn at the line
              end, mirror image and all.
            </p>
          </div>
          <div className="bous-lines">
            {rows.map((row, i) => (
              <RuneRow
                key={row.greek + i}
                row={row}
                index={i}
                flipped={dirs[i]}
                onFlip={() => toggle(i)}
              />
            ))}
          </div>
          <p className="bous-inscription-note">
            boustrophedon from βοῦς <em lang="el">bous</em>, 'ox' + στρέφειν <em lang="el">strephein</em>, 'to turn'.
            The Gortyn law code in Crete still wrote itself this way in the fifth century BC.
          </p>
        </section>

        <section className="bous-etymos" aria-label="The two halves of the word">
          <EtymologyCard
            term="βοῦς"
            sense="the ox"
            note="The beast, the plough team, the pair in the yoke. From it English gets bovine, and the bull in the china shop."
          />
          <div className="bous-etymo-join" aria-hidden="true">
            <svg className="bous-join-svg" viewBox="0 0 80 60" focusable="false">
              <circle cx="40" cy="14" r="7" />
              <circle cx="14" cy="44" r="7" />
              <circle cx="66" cy="44" r="7" />
              <path d="M40 21 L17 39 M40 21 L63 39 M14 51 C30 63 50 63 66 51" fill="none" />
            </svg>
            <span className="bous-etymo-join-word" lang="el">+</span>
          </div>
          <EtymologyCard
            term="στρέφειν"
            sense="to turn"
            note="The pivot of the word: turning the yoke, turning the page, turning the sentence back with its own letters."
          />
          <p className="bous-etymo-result">
            Set them together and you have the name of a way of writing: <strong lang="el">βουστροφηδόν</strong>.
            <br />
            Read in a mouth: <strong>bous-tro-phe-don</strong>. The word itself walks a furrow.
          </p>
        </section>

        <footer className="bous-footer">
          <div className="bous-dipinto">
            <span className="bous-dipinto-title">DIPINTO</span>
            <span className="bous-dipinto-line">SET XI · DESIGNED BY DEEPSEEK V4</span>
            <span className="bous-dipinto-sub">WORN BY THE VASE-PAINTER, WASHED BY THE POTTERS' WATER</span>
          </div>
          <p className="bous-footer-note">
            Not a photograph of any real vase: a typographic pastiche. The letters are the
            point, not the glazes.
          </p>
        </footer>
      </main>
    </div>
  )
}
