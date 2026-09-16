import { Canvas } from '@react-three/fiber'
import { useEffect, useState } from 'react'
import { useStore } from './store/store'
import Canvas3D from './components/Canvas3D'
import HUD from './components/HUD'
import InfoPanel from './components/InfoPanel'
import SearchOverlay from './components/SearchOverlay'
import TimelineOverlay from './components/TimelineOverlay'
import TourOverlay from './components/TourOverlay'
import SettingsPanel from './components/SettingsPanel'

function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768)
  const { reducedMotion } = useStore()

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    if (reducedMotion) {
      document.documentElement.setAttribute('data-reduced-motion', 'true')
    } else {
      document.documentElement.removeAttribute('data-reduced-motion')
    }
  }, [reducedMotion])

  return (
    <div className="w-screen h-screen overflow-hidden bg-cream relative">
      <Canvas3D />
      <HUD />
      <InfoPanel />
      <SearchOverlay />
      <TimelineOverlay />
      <TourOverlay />
      <SettingsPanel />
    </div>
  )
}

export default App
