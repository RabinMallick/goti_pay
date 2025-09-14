'use client'

import React, { useEffect, useState } from 'react'
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
  const meshRef = React.useRef<THREE.Mesh>(null!)
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
  const [geoData, setGeoData] = useState<any[]>([])

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/datasets/geo-countries/master/data/countries.geojson')
      .then((res) => res.json())
      .then((data) => setGeoData(data.features))
  }, [])

  const renderPolygon = (polygon: number[][], featureIndex: number, polyIndex: number, color: string, isBangladesh: boolean) => {
    const points = polygon.map((c) => latLongToVector3(c[1], c[0], radius))

    const geometry = new THREE.BufferGeometry().setFromPoints(points)

    return (
      <React.Fragment key={`feature-${featureIndex}-poly-${polyIndex}`}>
        {/* Border Line */}
        <line key={`line-${featureIndex}-${polyIndex}`}>
          <primitive object={geometry} attach="geometry" />
          <lineBasicMaterial color={color} linewidth={1} />
        </line>

        {/* Filled Mesh for Bangladesh */}
        {isBangladesh && (
          <mesh key={`fill-${featureIndex}-${polyIndex}`}>
            <primitive
              object={
                new THREE.ExtrudeGeometry(
                  new THREE.Shape(points.map((v) => new THREE.Vector2(v.x, v.z))),
                  { depth: 0.01, bevelEnabled: false }
                )
              }
              attach="geometry"
            />
            <meshBasicMaterial color={color} transparent opacity={0.5} />
          </mesh>
        )}
      </React.Fragment>
    )
  }

  return (
    <group>
      {geoData.map((feature, featureIndex) => {
        const coords = feature.geometry.coordinates
        const isBangladesh = feature.properties.name === 'Bangladesh'
        const color = isBangladesh ? 'red' : 'white'

        if (feature.geometry.type === 'Polygon') {
          return coords.map((polygon: number[][], polyIndex: number) =>
            renderPolygon(polygon, featureIndex, polyIndex, color, isBangladesh)
          )
        }

        if (feature.geometry.type === 'MultiPolygon') {
          return coords.map((multi: number[][][], polyIndex: number) =>
            multi.map((polygon: number[][], subIndex: number) =>
              renderPolygon(polygon, featureIndex, polyIndex * 100 + subIndex, color, isBangladesh)
            )
          )
        }

        return null
      })}
    </group>
  )
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
