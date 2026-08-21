import { Suspense, useEffect, useState } from 'react'
import { AnimatePresence, MotionConfig, motion } from 'framer-motion'
import { ShowcaseProvider, useShowcase } from './showcase/ShowcaseContext.jsx'
import ThemeDock from './components/ThemeDock.jsx'
import SetBar from './components/SetBar.jsx'
import SetModal from './components/SetModal.jsx'

function findDesign(activeSet, designId) {
  return activeSet?.designs.find((d) => d.id === designId) || activeSet?.designs[0]
}

function Loader() {
  return (
    <div className="design-loader" role="status">
      <span>LOADING…</span>
    </div>
  )
}

function Shell() {
  const { activeSet, designId, setDesign, cycleSet } = useShowcase()
  const [modalOpen, setModalOpen] = useState(false)

  const design = findDesign(activeSet, designId)

  useEffect(() => {
    const onKey = (e) => {
      if (e.metaKey || e.ctrlKey || e.altKey) return
      if (e.key === 'Escape') {
        setModalOpen(false)
        return
      }
      if (modalOpen) return
      if (e.code === 'BracketLeft') {
        cycleSet(-1)
        return
      }
      if (e.code === 'BracketRight') {
        cycleSet(1)
        return
      }
      const i = parseInt(e.key, 10)
      if (i >= 1 && i <= 5 && activeSet) {
        const target = activeSet.designs[i - 1]
        if (target) setDesign(target.id)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [activeSet, setDesign, cycleSet, modalOpen])

  useEffect(() => {
    if (activeSet && design) document.title = `OX — ${activeSet.name} · ${design.name}`
  }, [activeSet, design])

  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [activeSet?.id, designId])

  const Current = design?.Component

  return (
    <MotionConfig reducedMotion="user">
      <AnimatePresence mode="wait">
        <motion.div
          className="theme-stage"
          key={`${activeSet?.id}:${designId}`}
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          <Suspense fallback={<Loader />}>
            {Current ? <Current /> : null}
          </Suspense>
        </motion.div>
      </AnimatePresence>
      <div className="ui-cluster">
        <SetBar onOpen={() => setModalOpen(true)} />
        <ThemeDock />
      </div>
      <AnimatePresence>
        {modalOpen ? <SetModal onClose={() => setModalOpen(false)} /> : null}
      </AnimatePresence>
    </MotionConfig>
  )
}

export default function App() {
  return (
    <ShowcaseProvider>
      <Shell />
    </ShowcaseProvider>
  )
}
