import { useStore } from '../store/store'

const InfoPanel = () => {
  const { showInfo, selectedNode, toggleInfo } = useStore()

  if (!showInfo || !selectedNode) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 pointer-events-auto">
      <div className="absolute right-0 top-0 w-96 h-screen bg-parchment border-l-4 border-deep-red overflow-y-auto shadow-2xl">
        <button
          onClick={toggleInfo}
          className="absolute top-4 right-4 text-2xl text-deep-red hover:text-ink"
        >
          ✕
        </button>

        <div className="p-8">
          <h2 className="text-3xl font-bold font-display text-deep-red mb-2">
            {selectedNode.name}
          </h2>

          {selectedNode.period && (
            <p className="text-sm text-ochre font-mono mb-4">{selectedNode.period}</p>
          )}

          <div className="border-t-2 border-ochre pt-4 mb-4">
            <p className="text-sm leading-relaxed text-ink">{selectedNode.description}</p>
          </div>

          {selectedNode.keyPoints && selectedNode.keyPoints.length > 0 && (
            <div className="mb-6">
              <h3 className="text-lg font-bold text-deep-red mb-3">KEY POINTS</h3>
              <ul className="space-y-2">
                {selectedNode.keyPoints.map((point, i) => (
                  <li key={i} className="text-sm text-ink flex gap-2">
                    <span className="text-ochre">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {selectedNode.sources && selectedNode.sources.length > 0 && (
            <div className="mb-6">
              <h3 className="text-lg font-bold text-deep-red mb-3">SOURCES</h3>
              <ul className="space-y-1">
                {selectedNode.sources.map((source, i) => (
                  <li key={i} className="text-xs text-ink font-mono">
                    • {source}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {selectedNode.related && selectedNode.related.length > 0 && (
            <div>
              <h3 className="text-lg font-bold text-deep-red mb-3">RELATED</h3>
              <div className="flex flex-wrap gap-2">
                {selectedNode.related.map((rel) => (
                  <span
                    key={rel}
                    className="px-3 py-1 bg-ochre text-cream text-xs font-bold cursor-pointer hover:bg-deep-red transition"
                  >
                    {rel.replace(/-/g, ' ').toUpperCase()}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default InfoPanel
