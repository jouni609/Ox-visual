import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import { SETS } from './sets/index.js'

const STORAGE_KEY = 'ox-showcase-v2'

const ShowcaseContext = createContext(null)

function loadSaved() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {}
  } catch {
    return {}
  }
}

export function ShowcaseProvider({ children }) {
  const saved = useMemo(loadSaved, [])

  const [hidden, setHidden] = useState(() => {
    const valid = Array.isArray(saved.hidden)
      ? saved.hidden.filter((id) => SETS.some((s) => s.id === id))
      : []
    if (valid.length >= SETS.length) return []
    return valid
  })

  const [defaultSetId, setDefaultSetId] = useState(() => {
    const candidates = SETS.filter((s) => !saved.hidden?.includes(s.id))
    if (saved.default && candidates.some((s) => s.id === saved.default)) return saved.default
    return (candidates[0] || SETS[0]).id
  })

  const visibleSets = useMemo(() => SETS.filter((s) => !hidden.includes(s.id)), [hidden])

  const [setId, setSetIdState] = useState(() => {
    if (saved.set && !saved.hidden?.includes(saved.set) && SETS.some((s) => s.id === saved.set)) return saved.set
    return defaultSetId
  })

  const [lastDesign, setLastDesign] = useState(() =>
    saved.last && typeof saved.last === 'object' ? saved.last : {},
  )

  const activeSet = useMemo(
    () => visibleSets.find((s) => s.id === setId) || visibleSets[0],
    [visibleSets, setId],
  )

  const activeSetId = activeSet?.id

  const designId = useMemo(() => {
    if (!activeSet) return undefined
    const remembered = lastDesign[activeSetId]
    if (remembered && activeSet.designs.some((d) => d.id === remembered)) return remembered
    return activeSet.designs[0].id
  }, [activeSet, activeSetId, lastDesign])

  useEffect(() => {
    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({ set: setId, last: lastDesign, hidden, default: defaultSetId }),
      )
    } catch {
      /* storage unavailable */
    }
  }, [setId, lastDesign, hidden, defaultSetId])

  const setSet = useCallback(
    (nextId) => {
      if (!visibleSets.some((s) => s.id === nextId)) return
      setSetIdState(nextId)
    },
    [visibleSets],
  )

  const setDesign = useCallback(
    (nextDesignId) => {
      if (!activeSet?.designs.some((d) => d.id === nextDesignId)) return
      setLastDesign((prev) => ({ ...prev, [activeSetId]: nextDesignId }))
    },
    [activeSet, activeSetId],
  )

  const cycleSet = useCallback(
    (dir) => {
      if (visibleSets.length < 2) return
      const i = visibleSets.findIndex((s) => s.id === setId)
      setSet(visibleSets[(i + dir + visibleSets.length) % visibleSets.length].id)
    },
    [visibleSets, setId, setSet],
  )

  const toggleSetVisible = useCallback(
    (targetId) => {
      if (hidden.includes(targetId)) {
        setHidden(hidden.filter((id) => id !== targetId))
        return
      }
      if (targetId === setId) return
      if (SETS.length - hidden.length <= 1) return
      if (targetId === defaultSetId) {
        const remaining = SETS.filter((s) => s.id !== targetId && !hidden.includes(s.id))
        setDefaultSetId(remaining[0]?.id || SETS[0].id)
      }
      setHidden([...hidden, targetId])
    },
    [hidden, setId, defaultSetId],
  )

  const makeDefaultSet = useCallback((targetId) => {
    if (SETS.some((s) => s.id === targetId)) setDefaultSetId(targetId)
  }, [])

  const value = useMemo(
    () => ({
      sets: SETS,
      visibleSets,
      activeSet,
      setId: activeSetId,
      designId,
      setSet,
      setDesign,
      cycleSet,
      hidden,
      toggleSetVisible,
      defaultSetId,
      makeDefaultSet,
    }),
    [
      visibleSets,
      activeSet,
      activeSetId,
      designId,
      setSet,
      setDesign,
      cycleSet,
      hidden,
      toggleSetVisible,
      defaultSetId,
      makeDefaultSet,
    ],
  )

  return <ShowcaseContext.Provider value={value}>{children}</ShowcaseContext.Provider>
}

export function useShowcase() {
  const ctx = useContext(ShowcaseContext)
  if (!ctx) throw new Error('useShowcase must be used within ShowcaseProvider')
  return ctx
}
