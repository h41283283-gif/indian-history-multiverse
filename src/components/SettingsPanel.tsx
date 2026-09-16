import { useStore } from '../store/store'

const SettingsPanel = () => {
  const { showSettings, toggleSettings, quality, setQuality, reducedMotion, toggleReducedMotion } = useStore()

  if (!showSettings) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center pointer-events-auto">
      <div className="bg-parchment border-4 border-deep-red p-8 max-w-md shadow-2xl">
        <h2 className="text-2xl font-bold font-display text-deep-red mb-6">SETTINGS</h2>

        <div className="space-y-6">
          {/* Quality Settings */}
          <div>
            <label className="block text-sm font-bold text-ink mb-3">GRAPHICS QUALITY</label>
            <div className="space-y-2">
              {['low', 'medium', 'high'].map((q) => (
                <button
                  key={q}
                  onClick={() => setQuality(q as any)}
                  className={`w-full py-2 px-4 text-center font-bold transition ${
                    quality === q
                      ? 'bg-deep-red text-cream border-2 border-deep-red'
                      : 'bg-cream border-2 border-ink text-ink hover:bg-ochre'
                  }`}
                >
                  {q.toUpperCase()}
                </button>
              ))}
            </div>
          </div>

          {/* Reduced Motion */}
          <div>
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={reducedMotion}
                onChange={toggleReducedMotion}
                className="w-5 h-5"
              />
              <span className="font-bold text-ink">Reduce Motion</span>
            </label>
            <p className="text-xs text-ochre mt-2">Minimizes animations for accessibility</p>
          </div>

          {/* Info */}
          <div className="border-t-2 border-ochre pt-4">
            <p className="text-xs text-ink">
              <strong>Indian History Multiverse</strong>
              <br />
              Retro Edition v1.0
              <br />
              Every era, civilization, and idea mapped as a living cosmos.
            </p>
          </div>
        </div>

        <button
          onClick={toggleSettings}
          className="absolute top-4 right-4 text-2xl text-deep-red hover:text-ink"
        >
          ✕
        </button>
      </div>
    </div>
  )
}

export default SettingsPanel
