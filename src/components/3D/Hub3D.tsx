import { useRef, useEffect } from 'react'
import { useFrame } from '@react-three/fiber'
import { Mesh } from 'three'
import { Text } from '@react-three/drei'

const Hub3D = () => {
  const globeRef = useRef<Mesh>(null)
  const ringsRef = useRef<Mesh[]>([])

  useFrame(() => {
    if (globeRef.current) {
      globeRef.current.rotation.y += 0.0005
    }
    ringsRef.current.forEach((ring, i) => {
      if (ring) {
        ring.rotation.z += 0.0002 * (i % 2 === 0 ? 1 : -1)
      }
    })
  })

  return (
    <group position={[0, 0, 0]}>
      {/* Central Globe */}
      <mesh ref={globeRef} castShadow receiveShadow>
        <sphereGeometry args={[4, 64, 64]} />
        <meshStandardMaterial
          color="#E8DFC5"
          roughness={0.4}
          metalness={0.2}
        />
      </mesh>

      {/* Vintage Map Lines on Globe */}
      <mesh position={[0, 0, 4.01]}>
        <torusGeometry args={[4, 0.05, 8, 32]} />
        <meshStandardMaterial color="#1C1C1C" emissive="#D97B2F" emissiveIntensity={0.3} />
      </mesh>

      {/* Manuscript Rings */}
      {[6, 8, 10, 12].map((radius, i) => (
        <mesh
          key={i}
          ref={(el) => {
            if (el) ringsRef.current[i] = el
          }}
          position={[0, 0, 0]}
        >
          <torusGeometry args={[radius, 0.08, 16, 32]} />
          <meshStandardMaterial
            color={[
              '#A93226',
              '#D97B2F',
              '#2F6F7F',
              '#3B4D6B',
            ][i]}
            emissive={[
              '#A93226',
              '#D97B2F',
              '#2F6F7F',
              '#3B4D6B',
            ][i]}
            emissiveIntensity={0.2}
            roughness={0.6}
          />
        </mesh>
      ))}

      {/* Decorative Points on Rings */}
      {[6, 8, 10, 12].map((radius, ringIdx) =>
        [...Array(8)].map((_, i) => {
          const angle = (i / 8) * Math.PI * 2
          const x = Math.cos(angle) * radius
          const y = Math.sin(angle) * radius
          return (
            <mesh key={`${ringIdx}-${i}`} position={[x, 0, y]}>
              <sphereGeometry args={[0.2, 16, 16]} />
              <meshStandardMaterial
                color="#C5A059"
                emissive="#C5A059"
                emissiveIntensity={0.8}
              />
            </mesh>
          )
        })
      )}

      {/* Center Hub Label */}
      <Text
        position={[0, -6, 0]}
        fontSize={1}
        color="#1C1C1C"
        anchorX="center"
        anchorY="middle"
      >
        HISTORICAL HUB
      </Text>
    </group>
  )
}

export default Hub3D
