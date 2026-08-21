import './dock.css'

export default function ThemeDock({ themes, active, onChange }) {
  const current = themes.find((t) => t.id === active)

  return (
    <aside className="dock" aria-label="Design theme switcher">
      <div className="dock-info" aria-live="polite">
        <span className="dock-kicker">DESIGN</span>
        <span className="dock-name">
          {current.num} · {current.name}
        </span>
        <span className="dock-tag">{current.tag}</span>
      </div>
      <span className="dock-divider" aria-hidden="true" />
      <div className="dock-chips" role="tablist" aria-label="Themes">
        {themes.map((t, i) => (
          <button
            key={t.id}
            type="button"
            role="tab"
            aria-selected={t.id === active}
            data-label={`${i + 1} · ${t.name}`}
            className={`dock-chip${t.id === active ? ' is-active' : ''}`}
            style={{ '--chip': t.chip }}
            onClick={() => onChange(t.id)}
          >
            <span className="dock-chip-fill" />
          </button>
        ))}
      </div>
      <span className="dock-hint">keys 1–5</span>
    </aside>
  )
}
