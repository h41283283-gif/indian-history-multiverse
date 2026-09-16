import { useState } from 'react'
import { useStore } from '../store/store'

const SearchOverlay = () => {
  const { showSearch, toggleSearch, nodes, setSelectedNode } = useStore()
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<any[]>([])

  const handleSearch = (value: string) => {
    setQuery(value)
    if (value.length > 0) {
      const filtered = Array.from(nodes.values())
        .filter((node) =>
          node.name.toLowerCase().includes(value.toLowerCase()) ||
          node.description.toLowerCase().includes(value.toLowerCase())
        )
        .slice(0, 10)
      setResults(filtered)
    } else {
      setResults([])
    }
  }

  if (!showSearch) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-start justify-center pt-20 pointer-events-auto">
      <div className="w-full max-w-2xl bg-parchment border-4 border-deep-red shadow-2xl">
        <div className="p-4 border-b-2 border-ochre">
          <input
            autoFocus
            type="text"
            placeholder="Search history..."
            value={query}
            onChange={(e) => handleSearch(e.target.value)}
            className="w-full bg-cream border-2 border-ink px-3 py-2 text-ink font-mono"
          />
          <button
            onClick={toggleSearch}
            className="absolute top-4 right-4 text-2xl text-deep-red hover:text-ink"
          >
            ✕
          </button>
        </div>

        <div className="max-h-96 overflow-y-auto">
          {results.length > 0 ? (
            results.map((node) => (
              <div
                key={node.id}
                onClick={() => {
                  setSelectedNode(node)
                  toggleSearch()
                }}
                className="p-4 border-b border-ochre hover:bg-cream cursor-pointer transition"
              >
                <h3 className="font-bold text-deep-red">{node.name}</h3>
                <p className="text-xs text-ochre">{node.period}</p>
                <p className="text-sm text-ink mt-1 line-clamp-2">{node.description}</p>
              </div>
            ))
          ) : query.length > 0 ? (
            <div className="p-4 text-center text-ink">No results found</div>
          ) : (
            <div className="p-4 text-center text-ink text-sm">Start typing to search...</div>
          )}
        </div>
      </div>
    </div>
  )
}

export default SearchOverlay
