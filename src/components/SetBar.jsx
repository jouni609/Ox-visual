import { useShowcase } from '../showcase/ShowcaseContext.jsx'
import './setbar.css'

export default function SetBar({ onOpen }) {
  const { activeSet, visibleSets, cycleSet } = useShowcase()
  const canCycle = visibleSets.length > 1

  return (
    <div className="setbar">
      <button
        type="button"
        className="setbar-nav"
        onClick={() => cycleSet(-1)}
        aria-label="Previous set"
        disabled={!canCycle}
      >
        ‹
      </button>
      <button type="button" className="setbar-main" onClick={onOpen} aria-haspopup="dialog">
        <span className="setbar-kicker">SET</span>
        <span className="setbar-name">{activeSet.name}</span>
        <span className="setbar-credit">{activeSet.credit}</span>
      </button>
      <button
        type="button"
        className="setbar-nav"
        onClick={() => cycleSet(1)}
        aria-label="Next set"
        disabled={!canCycle}
      >
        ›
      </button>
    </div>
  )
}
