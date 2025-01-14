import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, Float, useGLTF } from "@react-three/drei";
import { Suspense } from "react";

const ModelViewer = ({ modelPath }: { modelPath: string }) => {
  const { scene } = useGLTF(modelPath);
  return <primitive object={scene} scale={0.5} position={[0, -1, 0]} />;
};

const Scene3D = () => {
  return (
    <div className="h-[600px] w-full">
      <Canvas camera={{ position: [100, 50, 10], fov: 85 }}>
        <Suspense fallback={null}>
          <Float speed={1} rotationIntensity={0.2} floatIntensity={0.2}>
            <ModelViewer modelPath="/models/saraswati.glb" />
          </Float>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 10]} intensity={1} castShadow />
          <spotLight position={[-10, 10, 10]} angle={0.3} intensity={0.8} />
          <Environment preset="sunset" />
          <OrbitControls
            enableZoom={true}
          
            minPolarAngle={Math.PI / 3}
            maxPolarAngle={Math.PI / 2}
          />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Scene3D;
