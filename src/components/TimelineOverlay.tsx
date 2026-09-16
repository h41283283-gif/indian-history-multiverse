import { useStore } from '../store/store'

const TimelineOverlay = () => {
  const { showTimeline, toggleTimeline } = useStore()

  const timelinePoints = [
    { label: '3000 BCE', era: 'Early Settlements' },
    { label: '2600 BCE', era: 'Indus Valley' },
    { label: '1500 BCE', era: 'Vedic Period' },
    { label: '600 BCE', era: 'Mahajanapadas' },
    { label: '320 BCE', era: 'Mauryan Empire' },
    { label: '320 CE', era: 'Gupta Period' },
    { label: '1200 CE', era: 'Delhi Sultanate' },
    { label: '1526 CE', era: 'Mughal Era' },
    { label: '1757 CE', era: 'Colonial India' },
    { label: '1857 CE', era: '1857 Rebellion' },
    { label: '1947 CE', era: 'Independence' },
    { label: 'TODAY', era: 'Modern India' },
  ]

  if (!showTimeline) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-parchment border-t-4 border-deep-red pointer-events-auto shadow-2xl">
      <div className="p-4">
        <div className="flex justify-between items-center gap-2 overflow-x-auto pb-4">
          {timelinePoints.map((point, i) => (
            <div key={i} className="flex flex-col items-center gap-2 min-w-max">
              <div className="w-2 h-8 bg-deep-red"></div>
              <p className="text-xs font-bold text-ink text-center">{point.label}</p>
              <p className="text-xs text-ochre text-center max-w-xs">{point.era}</p>
            </div>
          ))}
        </div>
      </div>
      <button
        onClick={toggleTimeline}
        className="absolute top-2 right-4 text-2xl text-deep-red hover:text-ink"
      >
        ✕
      </button>
    </div>
  )
}

export default TimelineOverlay
