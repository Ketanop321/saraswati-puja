import React from "react";
import { useGLTF } from "@react-three/drei";

const ModelViewer = ({ modelPath }: { modelPath: string }) => {
  const { scene } = useGLTF(modelPath); // Load the model

  return (
    <primitive
      object={scene}
      scale={0.5} // Adjust size to fit your scene
      position={[0, -1, 0]} // Center the model
    />
  );
};

export default ModelViewer;
