import { useEffect, useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import { PerspectiveCamera, OrbitControls } from '@react-three/drei'
import Hub3D from './3D/Hub3D'
import EraRegions from './3D/EraRegions'
import { useStore } from '../store/store'
import { eraNodes } from '../data/eras'
import { indusValleyData } from '../data/indus'
import { mauryanData } from '../data/maurya'
import { guptaData } from '../data/gupta'
import { mughalData } from '../data/mughal'
import { independenceData } from '../data/independence'

const Canvas3D = () => {
  const { setNodes } = useStore()
  const cameraRef = useRef(null)

  useEffect(() => {
    // Combine all data
    const allNodes = [
      ...eraNodes,
      ...indusValleyData,
      ...mauryanData,
      ...guptaData,
      ...mughalData,
      ...independenceData,
    ]
    setNodes(allNodes)
  }, [setNodes])

  return (
    <Canvas
      camera={{
        position: [0, 15, 20],
        fov: 75,
      }}
      style={{ width: '100%', height: '100%' }}
    >
      <PerspectiveCamera ref={cameraRef} makeDefault />
      <color attach="background" args={['#F4EBD9']} />
      
      {/* Lighting */}
      <ambientLight intensity={0.6} />
      <directionalLight position={[10, 15, 10]} intensity={1.2} castShadow />
      <pointLight position={[0, 20, 0]} intensity={0.8} />

      {/* 3D Scene */}
      <Hub3D />
      <EraRegions />

      {/* Controls */}
      <OrbitControls
        autoRotate
        autoRotateSpeed={0.3}
        minDistance={15}
        maxDistance={100}
        enablePan={true}
        enableZoom={true}
      />
    </Canvas>
  )
}

export default Canvas3D
