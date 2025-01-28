import React, { useEffect } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls, Environment, useGLTF } from "@react-three/drei";
import { Suspense } from "react";
import * as THREE from 'three';

const ModelViewer = ({ modelPath }: { modelPath: string }) => {
  const { scene } = useGLTF(modelPath); // Load the GLTF model from the provided path
  const { camera } = useThree(); // Access the current camera and scene properties

  useEffect(() => {
    if (!scene) return;

    // Create a bounding box to measure the model's size and center
    const boundingBox = new THREE.Box3().setFromObject(scene);

    // Get the model's center point
    const modelCenter = boundingBox.getCenter(new THREE.Vector3());

    // Get the model's size in the x, y, and z dimensions
    const modelSize = boundingBox.getSize(new THREE.Vector3());

    // Find the largest dimension of the model to determine scaling
    const maxDimension = Math.max(modelSize.x, modelSize.y, modelSize.z);

    // Calculate the desired scale to fit the model within the viewport
    const desiredScale = 7.0 / maxDimension;

    if (scene.userData.initialized !== true) {
      // Scale the model uniformly based on the desired scale
      scene.scale.setScalar(desiredScale);

      // Position the model at the origin by offsetting it from its center
      scene.position.set(
        -modelCenter.x * desiredScale, // Center X
        -modelCenter.y * desiredScale, // Center Y
        -modelCenter.z * desiredScale  // Center Z
      );

      // Adjust the camera to face the front of the model dynamically
      // Move the camera along the Z-axis (front-facing direction)
      const cameraDistance = maxDimension * 1.2; // Adjust distance based on model size
      camera.position.set(modelCenter.x, modelCenter.y, cameraDistance); // Set the camera to be in front of the model
      camera.lookAt(0, 0, 0); // Ensure the camera looks at the center of the model
      camera.updateProjectionMatrix();

      // Mark the scene as initialized to prevent redundant updates
      scene.userData.initialized = true;

      console.log('Model dimensions:', {
        width: modelSize.x,
        height: modelSize.y,
        depth: modelSize.z,
        appliedScale: desiredScale
      });
    }
  }, [scene, camera]); // Re-run effect if scene or camera changes

  return <primitive object={scene} />; // Render the model
};

const Scene3D = () => {
  return (
    <div className="w-full h-[800px]"> {/* Full width container with a fixed height */}
      <Canvas
        camera={{
          fov: 45, // Adjust field of view for natural perspective
          near: 0.1, // The closest distance the camera can see
          far: 1000, // The farthest distance the camera can see
          position: [0, 0, 5] // Default initial position
        }}
        dpr={[1, 2]} // Set device pixel ratio for better rendering on high-res screens
      >
        <Suspense fallback={null}> {/* Show fallback content while the model loads */}
          {/* Render the 3D model */}
          <ModelViewer modelPath="/models/saraswati.glb" />

          {/* Ambient light for general illumination */}
          <ambientLight intensity={0.8} />

          {/* Directional lights */}
          <directionalLight position={[5, 5, 5]} intensity={1} castShadow />
          <directionalLight position={[-5, 5, -5]} intensity={0.5} />
          <directionalLight position={[0, 5, -5]} intensity={0.3} />

          {/* Environment lighting */}
          <Environment preset="sunset" />

          {/* Orbit controls for interactive viewing */}
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
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Scene3D;
