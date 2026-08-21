import { motion } from 'framer-motion'
import './niu.css'

const evo = [
  { id: 'bone', name: '甲骨文', en: 'oracle bone', note: 'c. 1250 BC · horns, then a body on a cross' },
  { id: 'bronze', name: '金文', en: 'bronze writing', note: 'c. 1000 BC · the head sits squarely' },
  { id: 'seal', name: '篆书', en: 'seal script', note: 'c. 200 BC · curved like wet leather' },
  { id: 'clerical', name: '隶书', en: 'clerical script', note: 'c. 200 AD · flattened to the touch' },
]

function OracleOx({ className }) {
  return (
    <svg className={className} viewBox="0 0 200 260" aria-hidden="true" focusable="false">
      <g stroke="currentColor" strokeWidth="9" strokeLinecap="round" strokeLinejoin="round" fill="none">
        <path d="M100 158 L100 34" />
        <path d="M32 26 C 50 66 62 82 88 84 M168 26 C 150 66 138 82 112 84" />
        <path d="M36 130 L76 130 M164 130 L124 130" />
        <path d="M76 108 L100 92 M124 108 L100 92" />
        <path d="M52 158 L148 158" />
        <path d="M52 190 L100 158 M148 190 L100 158" />
      </g>
    </svg>
  )
}

function ScriptGlyph({ id, name, en, note }) {
  return (
    <motion.article
      className="niu-evo"
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.65, ease: 'easeOut' }}
    >
      <div className="niu-evo-glyph">
        {id === 'bone' ? <OracleOx className="niu-evo-bone" /> : null}
        {id !== 'bone' ? <span className={`niu-evo-char niu-char-${id}`} lang="zh">牛</span> : null}
      </div>
      <p className="niu-evo-name">
        {name}
        <span className="niu-evo-en">{en}</span>
      </p>
      <p className="niu-evo-note">{note}</p>
    </motion.article>
  )
}

export default function Niu() {
  return (
    <div className="th-niu">
      <header className="niu-head">
        <span className="niu-head-left">字 · ON THE SCRIPT</span>
        <span className="niu-head-title">THE OX IN ONE STROKE</span>
        <span className="niu-head-right">牛 NIÚ · the word</span>
      </header>

      <main className="niu-main">
        <section className="niu-hanger">
          <motion.div
            className="niu-scroll"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, ease: 'easeOut' }}
          >
            <div className="niu-rod niu-rod-top" aria-hidden="true" />
            <div className="niu-rod-knot" aria-hidden="true" />
            <div className="niu-paper">
              <div className="niu-paper-wrinkle" style={{ fontSize: 0 }} aria-hidden="true">
                <span />
                <span />
                <span />
              </div>
              <div className="niu-stamp" lang="zh">牛</div>
              <p className="niu-audio" lang="zh">niú</p>
              <div className="niu-oracle-row">
                <OracleOx className="niu-oracle" />
                <span className="niu-oracle-label" lang="zh">甲骨文</span>
              </div>
              <h1 className="niu-title">
                One ox,
                <br />
                <em lang="zh">three thousand years</em>
              </h1>
              <p className="niu-lede">
                The earliest Chinese writing was questions carved on bone. At An-yang the
                diviner drew the ox as two horns on the top of a slab of a head: the horns
                were the animal, and the head was enough. The character <strong lang="zh">牛</strong>
                has kept its horns for thirty-two centuries.
              </p>
              <div className="niu-script-row" lang="zh">
                <span className="niu-script-char">牛</span>
                <span className="niu-script-note">niú · ox. Also: stubborn.</span>
              </div>
            </div>
            <div className="niu-rod niu-rod-bottom" aria-hidden="true" />
          </motion.div>

          <div className="niu-hanger-copy">
            <p className="niu-kicker">AN·YANG · SHANG HIGH · c. 1250 BC</p>
            <p className="niu-side-note">
              The bones were shoulder blades of oxen. Fire was walked along the questions and
              the crack was read. The diviner's answer was one ox, or none: enough to plan a
              harvest by.
            </p>

            <div className="niu-idiom">
              <span className="niu-idiom-char" lang="zh">犇</span>
              <p className="niu-idiom-text">
                three oxes in one character, <em lang="zh">bēn</em>:
                <br />
                a herd in flight, a run.
              </p>
            </div>

            <div className="niu-bestiary">
              <p className="niu-bestiary-title">THE OX AND ITS KIN</p>
              <ul className="niu-bestiary-list">
                <li><span lang="zh">牛</span><i>niú</i> — the ox. Steady and useful.</li>
                <li><span lang="zh">牦牛</span><i>máo niú</i> — the yak.</li>
                <li><span lang="zh">水牛</span><i>shuǐ niú</i> — the water buffalo.</li>
                <li><span lang="zh">黄牛</span><i>huáng niú</i> — the yellow cattle.</li>
              </ul>
            </div>

            <div className="niu-radical">
              <span className="niu-radical-char" lang="zh">物</span>
              <p className="niu-radical-text">
                <em>wù</em>, 'thing': made of the sign <span lang="zh">勿</span> 'boundaries'
                and the ox on the left. The oldest sense of the character is a speckled
                hide. Every thing begins as the skin of an ox.
              </p>
            </div>
          </div>
        </section>

        <section className="niu-evolution" aria-label="Evolution of the character">
          <h2 className="niu-h2">Four dresses for one animal</h2>
          <div className="niu-evo-grid">
            {evo.map((s) => (
              <ScriptGlyph key={s.id} {...s} />
            ))}
          </div>
        </section>

        <section className="niu-extra">
          <p className="niu-extra-line">
            In the zodiac the ox comes <strong>second</strong> of twelve, and the Year of the Ox
            last fell in 2021. Twenty-four hours on an ox is not a day: it is a furrow.
          </p>
        </section>

        <footer className="niu-footer">
          <div className="niu-seal-row">
            <svg className="niu-seal" viewBox="0 0 150 150" aria-hidden="true" focusable="false">
              <rect x="8" y="8" width="134" height="134" fill="#b13227" rx="8" />
              <rect x="15" y="15" width="120" height="18" fill="none" stroke="#f4e9d2" strokeWidth="3" />
              <rect x="15" y="117" width="120" height="18" fill="none" stroke="#f4e9d2" strokeWidth="3" />
              <text x="75" y="96" textAnchor="middle" fontSize="52" fill="#f4e9d2" fontWeight="700" fontFamily="ZCOOL XiaoWei, serif">牛</text>
            </svg>
            <div className="niu-colophon">
              <span className="niu-colophon-line">SET XI · DESIGNED BY DEEPSEEK V4</span>
              <span className="niu-colophon-sub">SEAL PRESSED IN THE MARGIN · AN·YANG PRESS</span>
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}
