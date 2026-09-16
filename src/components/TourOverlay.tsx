import { useState } from 'react'
import { useStore } from '../store/store'

const TourOverlay = () => {
  const { showTour, toggleTour } = useStore()
  const [tourIndex, setTourIndex] = useState(0)

  const tourStops = [
    {
      title: 'Welcome to Indian History Multiverse',
      description: 'Explore 5000+ years of history through an interactive 3D cosmic visualization.',
    },
    {
      title: 'Indus Valley Civilization',
      description: 'One of the world\'s first planned urban civilizations (2600-1900 BCE)',
    },
    {
      title: 'Mauryan Empire',
      description: 'First large-scale empire unifying the subcontinent under Ashoka (322-185 BCE)',
    },
    {
      title: 'Gupta Period',
      description: 'Golden Age of science, mathematics, and culture (320-550 CE)',
    },
    {
      title: 'Mughal Era',
      description: 'Vast Islamic empire with architectural wonders like the Taj Mahal (1526-1857)',
    },
    {
      title: 'Independence Movement',
      description: 'Non-violent struggle led by Gandhi resulting in independence (1857-1947)',
    },
  ]

  const stop = tourStops[tourIndex]

  const handleNext = () => {
    if (tourIndex < tourStops.length - 1) {
      setTourIndex(tourIndex + 1)
    }
  }

  const handlePrev = () => {
    if (tourIndex > 0) {
      setTourIndex(tourIndex - 1)
    }
  }

  if (!showTour) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center pointer-events-auto">
      <div className="bg-parchment border-4 border-deep-red p-8 max-w-2xl shadow-2xl">
        <h2 className="text-3xl font-bold font-display text-deep-red mb-4">
          {stop.title}
        </h2>
        <p className="text-lg text-ink mb-8 leading-relaxed">{stop.description}</p>

        <div className="flex justify-between items-center">
          <button
            onClick={handlePrev}
            disabled={tourIndex === 0}
            className="px-6 py-2 bg-ochre text-cream font-bold disabled:opacity-50 hover:bg-deep-red transition"
          >
            ��� PREVIOUS
          </button>

          <span className="text-sm font-mono text-ink">
            {tourIndex + 1} / {tourStops.length}
          </span>

          <button
            onClick={handleNext}
            disabled={tourIndex === tourStops.length - 1}
            className="px-6 py-2 bg-ochre text-cream font-bold disabled:opacity-50 hover:bg-deep-red transition"
          >
            NEXT →
          </button>
        </div>

        <button
          onClick={toggleTour}
          className="absolute top-4 right-4 text-2xl text-deep-red hover:text-ink"
        >
          ✕
        </button>
      </div>
    </div>
  )
}

export default TourOverlay
