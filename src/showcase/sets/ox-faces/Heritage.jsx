import { motion } from 'framer-motion'
import './heritage.css'

const TIMELINE = [
  {
    year: 'c. 8000 BCE',
    title: 'The First Partnership',
    text: 'On the floodplains of the Indus, wild aurochs are coaxed into harness. The ox becomes humanity’s first engine — patient, powerful, uncomplaining.',
  },
  {
    year: 'c. 2500 BCE',
    title: 'Stone & Silt',
    text: 'Ox teams drag the stones of early monuments and pull ploughs through river mud from the Nile to the Yellow River.',
  },
  {
    year: 'Medieval',
    title: 'The Great Clearings',
    text: 'Behind ox teams, Europe’s forests become farmland. Their unhurried pace gives us the phrase “ox-slow” — a compliment disguised as an insult.',
  },
  {
    year: '1627',
    title: 'The Last Aurochs',
    text: 'The wild ancestor of the ox dies in Poland’s Jaktorów Forest. The lineage survives in the animal that stood beside us all along.',
  },
  {
    year: '1840s',
    title: 'The Long Road West',
    text: 'Where horses faltered, oxen walked on — crossing deserts and mountain passes to settle a continent, one slow mile at a time.',
  },
  {
    year: 'Today',
    title: 'Living Heritage',
    text: 'From terraced paddies to heritage farms, the ox still works beside us: proof that the steadiest technology ever invented never needed an upgrade.',
  },
]

function Reveal({ children, delay = 0, className }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.9, ease: 'easeOut', delay }}
    >
      {children}
    </motion.div>
  )
}

function EngravedOx() {
  const body = [
    'M96,182 C120,128 210,102 292,104 C368,106 428,132 446,178',
    'M446,178 C454,198 452,216 444,232',
    'M446,186 C462,214 464,248 452,278',
    'M448,276 q10,4 8,18 q-10,2 -12,-8',
    'M120,218 C200,242 340,240 428,206',
    'M138,222 L132,300',
    'M120,302 L146,302',
    'M166,226 L164,300',
    'M154,302 L178,302',
    'M392,214 L400,300',
    'M388,302 L414,302',
    'M362,218 L366,300',
    'M356,302 L380,302',
    'M96,182 C74,196 58,214 52,236',
    'M52,236 C48,248 50,258 58,264',
    'M58,264 C68,272 82,272 92,264',
    'M92,264 C100,252 102,240 98,230',
    'M98,230 C100,218 100,206 98,196',
    'M64,224 C54,208 56,192 70,182',
    'M76,220 C70,206 72,194 82,186',
    'M92,224 C100,216 110,216 116,224',
  ]
  const hatch = [
    'M150,232 l-6,14',
    'M170,236 l-6,14',
    'M190,240 l-6,14',
    'M210,242 l-6,14',
    'M230,243 l-6,14',
    'M120,196 l-10,10',
    'M126,204 l-10,10',
    'M420,196 l10,12',
    'M414,206 l10,12',
    'M408,216 l10,12',
    'M60,318 L480,318',
    'M100,318 l-4,-10',
    'M110,318 l2,-9',
    'M440,318 l-3,-10',
  ]

  return (
    <svg className="engraving" viewBox="0 0 560 340" aria-hidden="true">
      <g stroke="#2b2118" strokeWidth="2" fill="none" strokeLinecap="round">
        {body.map((d) => (
          <path key={d} d={d} />
        ))}
      </g>
      <g stroke="#2b2118" strokeWidth="1" fill="none" opacity="0.5" strokeLinecap="round">
        {hatch.map((d) => (
          <path key={d} d={d} />
        ))}
      </g>
      <circle cx="76" cy="240" r="2.5" fill="#2b2118" />
    </svg>
  )
}

export default function Heritage() {
  return (
    <div className="th-heritage">
      <header className="plaque">GALLERY IV — THE NATURAL HISTORY OF THE OX</header>

      <section className="hero">
        <Reveal>
          <p className="eyebrow">EXHIBIT Nº 01 — PERMANENT COLLECTION</p>
        </Reveal>
        <Reveal delay={0.1}>
          <h1>
            The animal that <em>outlasted</em> empires.
          </h1>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="lede">
            Before the engine, before the wheel found its axle, there was the ox — humanity’s first partner in heavy
            work, and its most faithful. This gallery honours twelve thousand years of showing up.
          </p>
        </Reveal>
        <Reveal delay={0.25}>
          <figure className="plate">
            <EngravedOx />
            <figcaption>PLATE I — BOS TAURUS, THE DOMESTIC OX. ENGRAVED FROM LIFE, MORE OR LESS.</figcaption>
          </figure>
        </Reveal>
      </section>

      <div className="ornament" aria-hidden="true">
        ❦
      </div>

      <section className="timeline">
        <Reveal>
          <h2>A Chronology of Quiet Strength</h2>
        </Reveal>
        <ol>
          {TIMELINE.map((t) => (
            <li key={t.year}>
              <span className="tl-year">{t.year}</span>
              <Reveal>
                <h3>{t.title}</h3>
                <p>{t.text}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </section>

      <section className="quote">
        <Reveal>
          <blockquote>“The ox is slow, the ox is sure — and what the ox has ploughed, endures.”</blockquote>
          <cite>— The Farmer’s Almanac, 1892</cite>
        </Reveal>
      </section>

      <footer className="heritage-footer">END OF EXHIBIT — PLEASE MIND THE HAY</footer>
    </div>
  )
}
