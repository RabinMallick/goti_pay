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

// Earth Mesh
const EarthMesh: React.FC = () => {
  const meshRef = useRef<THREE.Mesh>(null!)
  useFrame(() => {
    if (meshRef.current) meshRef.current.rotation.y += 0.0015
  })
  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[2, 64, 64]} />
      <meshPhongMaterial color="#1E90FF" specular="#333" shininess={10} />
    </mesh>
  )
}

// Country Borders + Fill for Bangladesh
const CountryBorders: React.FC<{ radius: number }> = ({ radius }) => {
  const [borders, setBorders] = useState<React.ReactNode[]>([])
  useEffect(() => {
    fetch('https://raw.githubusercontent.com/datasets/geo-countries/master/data/countries.geojson')
      .then((res) => res.json())
      .then((geojson) => {
        const elements: React.ReactNode[] = []

        geojson.features.forEach((feature: any, i: number) => {
          const coords = feature.geometry.coordinates
          const isBangladesh = feature.properties.ADMIN === 'Bangladesh'
console.log('coords', coords)
          const color = isBangladesh ? 'red' : 'white'

          const drawPolygon = (polygon: any) => {
            const points: THREE.Vector3[] = polygon.map((c: number[]) =>
              latLongToVector3(c[1], c[0], radius)
            )
            // Draw border
            const geometry = new THREE.BufferGeometry().setFromPoints(points)
            elements.push(
              <line key={i + '-line'}>
                <primitive object={geometry} attach="geometry" />
                <lineBasicMaterial color={color} linewidth={1} />
              </line>
            )
            // Draw filled mesh if Bangladesh
            if (isBangladesh) {
              const shape = new THREE.Shape(points.map((v) => new THREE.Vector2(v.x, v.z)))
              const geom = new THREE.ExtrudeGeometry(shape, { depth: 0.01, bevelEnabled: false })
              elements.push(
                <mesh key={i + '-fill'}>
                  <primitive object={geom} attach="geometry" />
                  <meshBasicMaterial color={color} transparent opacity={0.5} />
                </mesh>
              )
            }
          }

          if (feature.geometry.type === 'Polygon') {
            coords.forEach(drawPolygon)
          }

          if (feature.geometry.type === 'MultiPolygon') {
            coords.forEach((multi: any) => multi.forEach(drawPolygon))
          }
        })
        setBorders(elements)
      })
  }, [radius])

  return <group>{borders}</group>
}

// Main Earth Component
const Earth: React.FC = () => {
  return (
    <div className="w-full h-[50vh]">
      <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 5, 5]} intensity={1.2} />
        <Stars radius={100} depth={50} count={5000} factor={4} fade />
        <EarthMesh />
        <CountryBorders radius={2.01} />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.8} />
      </Canvas>
    </div>
  )
}

export default Earth
