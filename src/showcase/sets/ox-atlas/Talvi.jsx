import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import './talvi.css';

const stats = [
  { value: 3500, suffix: ' YRS', label: 'Years of cattle in Finland' },
  { value: 4, label: 'Regional lines — Northern, Eastern, Western, Åland' },
  { value: 30, prefix: '−', suffix: ' °C', label: 'Winters the breed calls home' },
];

function CountUp({ value, prefix = '', suffix = '', duration = 1600 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setDisplay(value);
      return;
    }
    let raf;
    const start = performance.now();
    const tick = (now) => {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setDisplay(Math.round(eased * value));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value, duration]);

  return (
    <span className="talvi-num" ref={ref}>
      {prefix ? <span className="talvi-affix">{prefix}</span> : null}
      {display.toLocaleString('en-US')}
      {suffix ? <span className="talvi-affix">{suffix}</span> : null}
    </span>
  );
}

function BandSvg({ uid }) {
  const tileId = `talvi-tile-${uid}`;
  return (
    <svg className="talvi-band-svg" viewBox="0 0 1200 480" aria-hidden="true" focusable="false">
      <defs>
        <pattern id={tileId} width="240" height="120" patternUnits="userSpaceOnUse">
          <path d="M60 12 L67 21 L60 30 L53 21 Z" fill="#E8DCC8" />
          <path d="M39 45 Q29 39 11 31 Q13 52 32 58 Z" fill="#9FC1D9" />
          <path d="M81 45 Q91 39 109 31 Q107 52 88 58 Z" fill="#9FC1D9" />
          <path d="M60 30 L88 54 L80 99 Q60 111 40 99 L32 54 Z" fill="#B5442A" />
          <circle cx="49" cy="65" r="4" fill="#22262A" />
          <circle cx="71" cy="65" r="4" fill="#22262A" />
          <path d="M47 83 Q60 75 73 83 L69 101 Q60 107 51 101 Z" fill="#E8DCC8" />
          <circle cx="55" cy="93" r="2.5" fill="#22262A" />
          <circle cx="65" cy="93" r="2.5" fill="#22262A" />
          <path d="M60 108 L66 113 L60 118 L54 113 Z" fill="#9FC1D9" />
          <path d="M180 100 Q175 80 180 60" fill="none" stroke="#22262A" strokeWidth="4" strokeLinecap="round" />
          <path d="M178 86 Q165 82 161 71 Q173 74 179 80 Z" fill="#9FC1D9" />
          <path d="M182 86 Q195 82 199 71 Q187 74 181 80 Z" fill="#9FC1D9" />
          <path d="M166 36 L173 45 L180 33 L187 45 L194 36 L194 57 Q180 73 166 57 Z" fill="#B5442A" />
          <path d="M180 46 L184 51 L180 56 L176 51 Z" fill="#E8DCC8" />
          <circle cx="157" cy="43" r="4.5" fill="#9FC1D9" />
          <circle cx="203" cy="43" r="4.5" fill="#9FC1D9" />
          <path d="M180 106 L185 112 L180 118 L175 112 Z" fill="#E8DCC8" />
        </pattern>
      </defs>
      <rect width="1200" height="480" fill={`url(#${tileId})`} />
    </svg>
  );
}

export default function Talvi() {
  return (
    <div className="th-talvi">
      <header className="talvi-band" aria-label="Folk print pattern of ox heads and kurbits tulips">
        <div className="talvi-band-track">
          <BandSvg uid="a" />
          <BandSvg uid="b" />
        </div>
      </header>

      <motion.section
        className="talvi-card"
        initial={{ y: 60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 70, damping: 15 }}
      >
        <p className="talvi-kicker">SUOMENKARJA · THE FINNCATTLE</p>
        <h1 className="talvi-headline" lang="fi">
          Lämmin veri,
          <br />
          kylmä ilma.
        </h1>
        <p className="talvi-subline">Warm blood, cold air.</p>
        <p className="talvi-lede">
          Small, curved-horned and unbothered, the Finncattle carried Finnish farms through centuries
          of frozen fields and lean harvests. By the 1960s the native cow had nearly vanished,
          outcompeted by imported stock. Today a few thousand remain — protected, celebrated, and
          still grazing the same meadows their great-grandmothers knew.
        </p>

        <div className="talvi-divider" aria-hidden="true">
          <svg viewBox="0 0 132 16" focusable="false">
            <path d="M10 8 L17 1 L24 8 L17 15 Z" fill="#B5442A" />
            <path d="M60 8 L67 1 L74 8 L67 15 Z" fill="#22262A" />
            <path d="M108 8 L115 1 L122 8 L115 15 Z" fill="#9FC1D9" />
          </svg>
        </div>

        <div className="talvi-stats">
          {stats.map((stat) => (
            <div className="talvi-stat" key={stat.label}>
              <CountUp value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
              <span className="talvi-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </motion.section>

      <motion.blockquote
        className="talvi-quote"
        initial={{ y: 28, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <p>
          “Sisu is what the ox teaches: the strength to keep going when stopping would be easier.”
        </p>
        <cite>— Finnish proverb, more or less</cite>
      </motion.blockquote>

      <footer className="talvi-footer">
        <span className="talvi-signature">SET II · DESIGNED BY OX-ALPHA</span>
        <span className="talvi-footer-brand">OX ATLAS — POHJOINEN SIVU</span>
      </footer>
    </div>
  );
}
