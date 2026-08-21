import { useShowcase } from '../showcase/ShowcaseContext.jsx'
import './dock.css'

export default function ThemeDock() {
  const { activeSet, designId, setDesign } = useShowcase()
  const current = activeSet.designs.find((d) => d.id === designId) || activeSet.designs[0]

  return (
    <aside className="dock" aria-label="Design switcher">
      <div className="dock-info" aria-live="polite">
        <span className="dock-kicker">DESIGN</span>
        <span className="dock-name">
          {current.num} · {current.name}
        </span>
        <span className="dock-tag">{current.tag}</span>
      </div>
      <span className="dock-divider" aria-hidden="true" />
      <div className="dock-chips" role="tablist" aria-label={`Designs in ${activeSet.name}`}>
        {activeSet.designs.map((d, i) => (
          <button
            key={d.id}
            type="button"
            role="tab"
            aria-selected={d.id === current.id}
            data-label={`${i + 1} · ${d.name}`}
            className={`dock-chip${d.id === current.id ? ' is-active' : ''}`}
            style={{ '--chip': d.chip }}
            onClick={() => setDesign(d.id)}
          >
            <span className="dock-chip-fill" />
          </button>
        ))}
      </div>
      <span className="dock-hint">keys 1–5</span>
    </aside>
  )
}
