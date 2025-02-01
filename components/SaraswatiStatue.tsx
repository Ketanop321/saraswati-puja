"use client"
import React, { useEffect, Suspense, useState } from "react"
import { Canvas, useThree } from "@react-three/fiber"
import { OrbitControls, Environment, useGLTF, Preload } from "@react-three/drei"
import * as THREE from "three"
import { Html } from "@react-three/drei"

// Performance-optimized model loader
const ModelViewer = ({ modelPath }: { modelPath: string }) => {
  const [isLoaded, setIsLoaded] = useState(false)
  const { scene, nodes } = useGLTF(modelPath, true, (loader) => {
    // Disable Draco compression if not using compressed models
    loader.setDRACOLoader(null)
  })
  const { camera, gl } = useThree()

  useEffect(() => {
    // Optimize rendering
    gl.setPixelRatio(Math.min(window.devicePixelRatio, 2))

    if (!scene) return

    // Compute bounding box for smart scaling
    const boundingBox = new THREE.Box3().setFromObject(scene)
    const modelCenter = boundingBox.getCenter(new THREE.Vector3())
    const modelSize = boundingBox.getSize(new THREE.Vector3())
    const maxDimension = Math.max(modelSize.x, modelSize.y, modelSize.z)
    const desiredScale = 5.0 / maxDimension

    // Optimize scene transformation
    if (!scene.userData.initialized) {
      scene.scale.setScalar(desiredScale)
      scene.position.set(
        -modelCenter.x * desiredScale, 
        -modelCenter.y * desiredScale, 
        -modelCenter.z * desiredScale
      )

      // Smart camera positioning
      const cameraDistance = maxDimension * 1.2
      camera.position.set(modelCenter.x, modelCenter.y, cameraDistance)
      camera.lookAt(0, 0, 0)
      camera.updateProjectionMatrix()

      scene.userData.initialized = true
    }

    // Memory optimization
    scene.traverse((child) => {
      if (child.isMesh) {
        child.frustumCulled = true
        // Optional: Dispose of unused resources
        // child.material.dispose()
        // child.geometry.dispose()
      }
    })

    setIsLoaded(true)
  }, [scene, camera, gl])

  return isLoaded ? <primitive object={scene} /> : null
}

// Loader Component
const LoadingOverlay = () => (
  <Html center>
  <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
    <div className="animate-pulse text-white">Loading 3D Model...</div>
  </div>
  </Html>
)

const Scene3D = () => {
  return (
    <Canvas
      camera={{
        fov: 45,
        near: 0.1,
        far: 1000,
        position: [0, 0, 5],
      }}
      // Performance optimizations
      frameloop="demand"
      dpr={[1, 2]}
      gl={{ 
        antialias: false,
        powerPreference: "high-performance"
      }}
    >
      <Suspense fallback={<LoadingOverlay />}>
        <ModelViewer modelPath="/models/saraswati.glb" />
        
        {/* Optimized Lighting */}
        <ambientLight intensity={0.5} />
        <directionalLight 
          position={[5, 5, 5]} 
          intensity={0.8} 
          castShadow={false} 
        />
        
        <Environment preset="sunset" />
        
        <OrbitControls
          enableZoom={true}
          enablePan={true}
          enableRotate={true}
          minDistance={1}
          maxDistance={10}
          target={[0, 0, 0]}
          minPolarAngle={0}
          maxPolarAngle={Math.PI}
        />
        
        <Preload all />
      </Suspense>
    </Canvas>
  )
}

export default function SaraswatiStatue() {
  return (
    <section className="py-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="w-full h-[800px]">
          <Scene3D />
        </div>
        {/* Optional: Performance-friendly background decoration */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-float opacity-50"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            >
              🌸
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}