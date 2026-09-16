import { useEffect, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Mesh } from 'three'
import { Text } from '@react-three/drei'
import { useStore } from '../../store/store'

const EraRegions = () => {
  const { nodes } = useStore()
  const meshRefs = useRef<Map<string, Mesh>>(new Map())

  const eraNodes = Array.from(nodes.values()).filter((n) => n.type === 'era')

  useFrame(() => {
    eraNodes.forEach((node) => {
      const mesh = meshRefs.current.get(node.id)
      if (mesh) {
        mesh.rotation.z += 0.0001
        mesh.position.y += Math.sin(Date.now() * 0.0005 + node.id.length) * 0.0001
      }
    })
  })

  return (
    <group>
      {eraNodes.map((era) => {
        const pos = era.position || [0, 0, 0]
        return (
          <group key={era.id} position={[pos[0], pos[1], pos[2]]}>
            {/* Era Region Box */}
            <mesh
              ref={(el) => {
                if (el) meshRefs.current.set(era.id, el)
              }}
              castShadow
              receiveShadow
              onClick={() => console.log('Clicked:', era.id)}
            >
              <boxGeometry args={[3, 3, 2]} />
              <meshStandardMaterial
                color={era.color || '#F4EBD9'}
                roughness={0.7}
                metalness={0.1}
              />
            </mesh>

            {/* Era Label */}
            <Text
              position={[0, 0, 1.1]}
              fontSize={0.6}
              color="#1C1C1C"
              anchorX="center"
              anchorY="middle"
            >
              {era.name.substring(0, 15)}
            </Text>

            {/* Period Label */}
            <Text
              position={[0, -0.8, 1.1]}
              fontSize={0.3}
              color="#1C1C1C"
              anchorX="center"
              anchorY="middle"
            >
              {era.period}
            </Text>
          </group>
        )
      })}
    </group>
  )
}

export default EraRegions
