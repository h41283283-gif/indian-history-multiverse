import { useState } from 'react'
import { useStore } from '../store/store'

const HUD = () => {
  const { breadcrumbs, goBack, toggleSearch, toggleTimeline, toggleTour, toggleSettings, selectedNode } = useStore()
  const [showMenu, setShowMenu] = useState(false)

  return (
    <div className="fixed inset-0 pointer-events-none">
      {/* Top-Left Logo */}
      <div className="absolute top-6 left-6 pointer-events-auto">
        <h1 className="text-2xl font-bold font-display text-ink leading-tight">
          INDIAN HISTORY
          <br />
          MULTIVERSE
        </h1>
        <p className="text-sm mt-2 text-deep-red font-light italic max-w-xs">
          Every era, civilization, and idea mapped as a living cosmos.
        </p>
      </div>

      {/* Top-Right Controls */}
      <div className="absolute top-6 right-6 flex gap-4 pointer-events-auto">
        <button
          onClick={toggleSearch}
          className="px-4 py-2 bg-cream border-2 border-ink text-ink hover:bg-parchment transition"
          title="Search"
        >
          🔍 SEARCH
        </button>
        <button
          onClick={toggleTour}
          className="px-4 py-2 bg-cream border-2 border-ink text-ink hover:bg-parchment transition"
          title="Tour"
        >
          🧭 TOUR
        </button>
        <button
          onClick={toggleTimeline}
          className="px-4 py-2 bg-cream border-2 border-ink text-ink hover:bg-parchment transition"
          title="Timeline"
        >
          📜 TIMELINE
        </button>
        <button
          onClick={toggleSettings}
          className="px-4 py-2 bg-cream border-2 border-ink text-ink hover:bg-parchment transition"
          title="Settings"
        >
          ⚙️ SETTINGS
        </button>
      </div>

      {/* Breadcrumbs */}
      <div className="absolute bottom-6 left-6 pointer-events-auto">
        <div className="flex gap-2 text-sm text-ink font-mono">
          {breadcrumbs.map((crumb, i) => (
            <div key={i}>
              <button
                onClick={goBack}
                className="hover:text-ochre transition"
              >
                {crumb.toUpperCase()}
              </button>
              {i < breadcrumbs.length - 1 && <span className="mx-2">→</span>}
            </div>
          ))}
        </div>
      </div>

      {/* Selected Node Info Panel */}
      {selectedNode && (
        <div className="absolute bottom-6 right-6 max-w-sm bg-parchment border-4 border-ink p-4 pointer-events-auto">
          <h3 className="text-lg font-bold font-display text-deep-red mb-2">
            {selectedNode.name}
          </h3>
          {selectedNode.period && (
            <p className="text-xs text-ochre mb-2 font-mono">{selectedNode.period}</p>
          )}
          <p className="text-sm text-ink leading-tight">{selectedNode.description}</p>
          {selectedNode.keyPoints && selectedNode.keyPoints.length > 0 && (
            <div className="mt-3 text-xs text-ink">
              <strong>Key Points:</strong>
              <ul className="list-disc list-inside mt-1">
                {selectedNode.keyPoints.slice(0, 3).map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default HUD
