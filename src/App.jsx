import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import ThemeDock from './components/ThemeDock.jsx'
import Monolith from './themes/Monolith.jsx'
import Heritage from './themes/Heritage.jsx'
import CircuitBeast from './themes/CircuitBeast.jsx'
import Stillness from './themes/Stillness.jsx'
import BarnyardPop from './themes/BarnyardPop.jsx'

const THEMES = [
  { id: 'monolith', num: '01', name: 'Monolith', tag: 'Raw Power', chip: '#ff4d00' },
  { id: 'heritage', num: '02', name: 'Heritage', tag: 'Endurance', chip: '#7a1f1f' },
  { id: 'beast', num: '03', name: 'Circuit Beast', tag: 'Relentless Drive', chip: '#00f0ff' },
  { id: 'stillness', num: '04', name: 'Stillness', tag: 'Patience', chip: '#6b7f5c' },
  { id: 'pop', num: '05', name: 'Barnyard Pop', tag: 'Friendly Diligence', chip: '#ffd93d' },
]

const THEME_MAP = {
  monolith: Monolith,
  heritage: Heritage,
  beast: CircuitBeast,
  stillness: Stillness,
  pop: BarnyardPop,
}

function getInitialTheme() {
  try {
    const saved = localStorage.getItem('ox-theme')
    if (saved && THEME_MAP[saved]) return saved
  } catch {
    /* storage unavailable */
  }
  return 'monolith'
}

export default function App() {
  const [active, setActive] = useState(getInitialTheme)

  useEffect(() => {
    const onKey = (e) => {
      const i = parseInt(e.key, 10)
      if (i >= 1 && i <= THEMES.length) setActive(THEMES[i - 1].id)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const meta = THEMES.find((t) => t.id === active)

  useEffect(() => {
    try {
      localStorage.setItem('ox-theme', active)
    } catch {
      /* storage unavailable */
    }
    document.title = `OX — ${meta.name}`
    window.scrollTo({ top: 0 })
  }, [active, meta])

  const Current = THEME_MAP[active]

  return (
    <>
      <AnimatePresence mode="wait">
        <motion.div
          className="theme-stage"
          key={active}
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          <Current />
        </motion.div>
      </AnimatePresence>
      <ThemeDock themes={THEMES} active={active} onChange={setActive} />
    </>
  )
}
