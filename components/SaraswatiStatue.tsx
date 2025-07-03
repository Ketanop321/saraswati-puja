"use client"
import React, { useEffect, Suspense, useState, useMemo } from "react"
import { Canvas, useThree } from "@react-three/fiber"
import { OrbitControls, Environment, useGLTF, Preload } from "@react-three/drei"
import * as THREE from "three"
import { Html } from "@react-three/drei"

// Pre-load the model path with a relative path that works in both dev and production
const MODEL_PATH = "./models/saraswati.glb"
useGLTF.preload(MODEL_PATH)

// Performance-optimized model loader
const ModelViewer = ({ modelPath }: { modelPath: string }) => {
  const [isLoaded, setIsLoaded] = useState(false)
  const { scene } = useGLTF(modelPath)
  const { camera, gl } = useThree()

  // Memoize scene initialization
  const initializedScene = useMemo(() => {
    if (!scene) return null

    // Create a clone to avoid modifying the cached scene
    const clonedScene = scene.clone()
    
    // Compute bounding box for smart scaling
    const boundingBox = new THREE.Box3().setFromObject(clonedScene)
    const modelCenter = boundingBox.getCenter(new THREE.Vector3())
    const modelSize = boundingBox.getSize(new THREE.Vector3())
    const maxDimension = Math.max(modelSize.x, modelSize.y, modelSize.z)
    const desiredScale = 5.0 / maxDimension

    // Apply optimizations
    clonedScene.scale.setScalar(desiredScale)
    clonedScene.position.set(
      -modelCenter.x * desiredScale,
      -modelCenter.y * desiredScale,
      -modelCenter.z * desiredScale
    )

    // Optimize meshes
    clonedScene.traverse((child) => {
      if (child.isMesh) {
        child.frustumCulled = true
        child.matrixAutoUpdate = false
        child.updateMatrix()
      }
    })

    return clonedScene
  }, [scene])

  useEffect(() => {
    // Optimize renderer
    gl.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    gl.setClearColor(0xffffff, 0) // Set transparent background
    
    if (initializedScene) {
      const boundingBox = new THREE.Box3().setFromObject(initializedScene)
      const modelSize = boundingBox.getSize(new THREE.Vector3())
      const cameraDistance = modelSize.length() * 1.2
      camera.position.set(0, 0, cameraDistance)
      camera.lookAt(0, 0, 0)
      camera.updateProjectionMatrix()
      
      setIsLoaded(true)
    }
  }, [initializedScene, camera, gl])

  return isLoaded && initializedScene ? <primitive object={initializedScene} /> : null
}

// Optimized loader component
const LoadingOverlay = React.memo(() => (
  <Html center>
    <div className="flex items-center justify-center">
      <div className="animate-pulse text-yellow-800">Loading 3D Model...</div>
    </div>
  </Html>
))

const Scene3D = React.memo(() => {
  return (
    <Canvas
      camera={{
        fov: 45,
        near: 0.1,
        far: 1000,
        position: [0, 0, 5],
      }}
      frameloop="demand"
      dpr={[1, 2]}
      gl={{
        antialias: true,
        alpha: true,
        preserveDrawingBuffer: true,
        powerPreference: "high-performance",
      }}
      style={{
        background: 'transparent'
      }}
    >
      <Suspense fallback={<LoadingOverlay />}>
        <ModelViewer modelPath={MODEL_PATH} />
        
        <ambientLight intensity={0.5} />
        <directionalLight
          position={[5, 5, 5]}
          intensity={0.8}
          castShadow
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
          enableDamping={true}
          dampingFactor={0.05}
        />
        
        <Preload all />
      </Suspense>
    </Canvas>
  )
})

Scene3D.displayName = 'Scene3D'

export default function SaraswatiStatue() {
  return (
    <section className="py-12 relative overflow-hidden bg-gradient-to-b from-yellow-100 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="w-full h-[800px]">
          <Scene3D />
        </div>
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {useMemo(() => 
            [...Array(40)].map((_, i) => (
              <div
                key={i}
                className="absolute animate-float opacity-50"
                style={{
                  left: `${Math.random() * 120}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 10}s`,
                }}
              >
                🌸   
              </div>
            ))
          , [])}
        </div>
      </div>
    </section>
  )
}