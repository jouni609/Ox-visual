import { motion } from 'framer-motion'
import { useShowcase } from '../showcase/ShowcaseContext.jsx'
import './setmodal.css'

export default function SetModal({ onClose }) {
  const { sets, setId, setSet, hidden, toggleSetVisible, defaultSetId, makeDefaultSet } = useShowcase()

  return (
    <motion.div
      className="sm-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      onClick={onClose}
    >
      <motion.div
        className="sm-panel"
        role="dialog"
        aria-modal="true"
        aria-label="Design sets"
        initial={{ opacity: 0, y: 24, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 16, scale: 0.98 }}
        transition={{ type: 'spring', stiffness: 320, damping: 28 }}
        onClick={(e) => e.stopPropagation()}
      >
        <header className="sm-head">
          <div>
            <h2>Design sets</h2>
            <p>
              {sets.length - hidden.length} of {sets.length} sets visible
            </p>
          </div>
          <button type="button" className="sm-close" onClick={onClose} aria-label="Close" autoFocus>
            ✕
          </button>
        </header>

        <div className="sm-grid">
          {sets.map((set) => {
            const isActive = set.id === setId
            const isHidden = hidden.includes(set.id)
            const isDefault = set.id === defaultSetId
            return (
              <article
                key={set.id}
                className={`sm-card${isActive ? ' is-active' : ''}${isHidden ? ' is-hidden' : ''}`}
                style={{ '--accent': set.accent }}
              >
                <div className="sm-card-top">
                  <h3>{set.name}</h3>
                  {isActive ? <span className="sm-badge">VIEWING</span> : null}
                </div>
                <p className="sm-tagline">{set.tagline}</p>
                <div className="sm-chips" aria-hidden="true">
                  {set.designs.map((d) => (
                    <span key={d.id} title={d.name} style={{ background: d.chip }} />
                  ))}
                </div>
                <p className="sm-credit">{set.credit}</p>
                <div className="sm-actions">
                  {!isActive ? (
                    <button type="button" onClick={() => setSet(set.id)} disabled={isHidden}>
                      View
                    </button>
                  ) : null}
                  <button
                    type="button"
                    onClick={() => toggleSetVisible(set.id)}
                    disabled={!isHidden && (isActive || sets.length - hidden.length <= 1)}
                    title={
                      isHidden
                        ? 'Show this set'
                        : isActive
                          ? "Can't hide the set you're viewing"
                          : sets.length - hidden.length <= 1
                            ? 'Keep at least one set visible'
                            : 'Hide this set'
                    }
                  >
                    {isHidden ? 'Show' : 'Hide'}
                  </button>
                  <button
                    type="button"
                    className={`sm-default${isDefault ? ' on' : ''}`}
                    onClick={() => makeDefaultSet(set.id)}
                    disabled={isDefault || isHidden}
                    title={
                      isDefault
                        ? 'This set loads at startup'
                        : isHidden
                          ? 'Show this set to make it the startup set'
                          : 'Load this set at startup'
                    }
                  >
                    {isDefault ? 'Start set ✓' : 'Start here'}
                  </button>
                </div>
              </article>
            )
          })}
        </div>

        <footer className="sm-foot">
          <span>Saved locally in this browser.</span>
          <span>Keys: 1–5 designs · [ ] switch sets · Esc close</span>
        </footer>
      </motion.div>
    </motion.div>
  )
}
