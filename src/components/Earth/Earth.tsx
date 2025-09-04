'use client'

import React, { useRef, useEffect, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Stars } from '@react-three/drei'
import * as THREE from 'three'

// Convert lat/lon → 3D vector
const latLongToVector3 = (lat: number, lon: number, radius: number) => {
  const phi = (90 - lat) * (Math.PI / 180)
  const theta = (lon + 180) * (Math.PI / 180)

  return new THREE.Vector3(
    -radius * Math.sin(phi) * Math.cos(theta),
    radius * Math.cos(phi),
    radius * Math.sin(phi) * Math.sin(theta)
  )
}

// Country Borders Component
const CountryBorders: React.FC<{ radius: number; color?: string }> = ({
  radius,
  color = 'white',
}) => {
  const [borders, setBorders] = useState<React.ReactNode[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    fetch(
      'https://raw.githubusercontent.com/datasets/geo-countries/master/data/countries.geojson'
    )
      .then((res) => res.json())
      .then((geojson) => {
        const elements: React.ReactNode[] = []

        geojson.features.forEach((feature: any, i: number) => {
          const coords = feature.geometry.coordinates

          if (feature.geometry.type === 'Polygon') {
            coords.forEach((polygon: any) => {
              const points: THREE.Vector3[] = polygon.map((c: number[]) =>
                latLongToVector3(c[1], c[0], radius)
              )
              const geometry = new THREE.BufferGeometry().setFromPoints(points)
              elements.push(
                <line key={i + '-poly'}>
                  <primitive object={geometry} attach="geometry" />
                  <lineBasicMaterial color={color} linewidth={1} />
                </line>
              )
            })
          }

          if (feature.geometry.type === 'MultiPolygon') {
            coords.forEach((multi: any) => {
              multi.forEach((polygon: any) => {
                const points: THREE.Vector3[] = polygon.map((c: number[]) =>
                  latLongToVector3(c[1], c[0], radius)
                )
                const geometry = new THREE.BufferGeometry().setFromPoints(points)
                elements.push(
                  <line key={i + '-multipoly'}>
                    <primitive object={geometry} attach="geometry" />
                    <lineBasicMaterial color={color} linewidth={1} />
                  </line>
                )
              })
            })
          }
        })

        setBorders(elements)
      })
      .finally(() => setLoading(false))
  }, [radius, color])

  if (loading) {
    return (
      <mesh>
        <sphereGeometry args={[2.05, 32, 32]} />
        <meshBasicMaterial
          wireframe
          color="yellow"
          opacity={0.5}
          transparent
        />
      </mesh>
    )
  }

  return <group>{borders}</group>
}

// Earth Mesh Component
const EarthMesh: React.FC = () => {
  const meshRef = useRef<THREE.Mesh>(null!)

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.0015
    }
  })

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[2, 64, 64]} />
      <meshPhongMaterial color="#1E90FF" specular="#333" shininess={10} />
    </mesh>
  )
}

// Main Earth Scene
const Earth: React.FC = () => {
  return (
    <Canvas
      style={{ height: '500px', width: '100%' }}
      camera={{ position: [0, 0, 6], fov: 45 }}
    >
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 5, 5]} intensity={1.2} />
      <Stars radius={100} depth={50} count={5000} factor={4} fade />

      <EarthMesh />
      <CountryBorders radius={2.01} color="white" />

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.8}
      />
    </Canvas>
  )
}

export default Earth
