// components/SaraswatiModel.tsx
import React from 'react';
import { useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';

// Saraswati 3D Model
function SaraswatiModel() {
  return (
    <group position={[0, -1, 0]}>
      {/* Base Lotus */}
      <mesh position={[0, -0.2, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[2, 0.4, 16, 32]} />
        <meshStandardMaterial color="#FFB6C1" metalness={0.3} roughness={0.7} />
      </mesh>

      {/* Body */}
      <mesh position={[0, 1.5, 0]}>
        <cylinderGeometry args={[0.7, 1, 3, 32]} />
        <meshStandardMaterial color="#FFD700" metalness={0.5} roughness={0.3} />
      </mesh>

      {/* Head */}
      <mesh position={[0, 3.2, 0]}>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial color="#FFF5E1" metalness={0.3} roughness={0.7} />
      </mesh>

      {/* Crown */}
      <mesh position={[0, 3.8, 0]}>
        <coneGeometry args={[0.4, 0.8, 32]} />
        <meshStandardMaterial color="#FFD700" metalness={0.8} roughness={0.2} />
      </mesh>

      {/* Arms (Left) */}
      <group position={[-1, 2, 0]} rotation={[0, 0, Math.PI / 4]}>
        <mesh>
          <cylinderGeometry args={[0.15, 0.15, 1.5, 16]} />
          <meshStandardMaterial color="#FFF5E1" metalness={0.3} roughness={0.7} />
        </mesh>
      </group>

      {/* Arms (Right) */}
      <group position={[1, 2, 0]} rotation={[0, 0, -Math.PI / 4]}>
        <mesh>
          <cylinderGeometry args={[0.15, 0.15, 1.5, 16]} />
          <meshStandardMaterial color="#FFF5E1" metalness={0.3} roughness={0.7} />
        </mesh>
      </group>

      {/* Veena */}
      <group position={[-1.5, 1.5, 0]} rotation={[0, 0, Math.PI / 6]}>
        <mesh>
          <boxGeometry args={[0.3, 2, 0.3]} />
          <meshStandardMaterial color="#8B4513" metalness={0.3} roughness={0.8} />
        </mesh>
        <mesh position={[0, -1, 0]}>
          <sphereGeometry args={[0.4, 32, 32]} />
          <meshStandardMaterial color="#8B4513" metalness={0.3} roughness={0.8} />
        </mesh>
      </group>

      {/* Swan */}
      <group position={[1.5, 0, 1]}>
        {/* Body */}
        <mesh>
          <sphereGeometry args={[0.4, 32, 32]} />
          <meshStandardMaterial color="white" metalness={0.3} roughness={0.7} />
        </mesh>
        {/* Neck */}
        <mesh position={[0, 0.4, 0.2]} rotation={[Math.PI / 4, 0, 0]}>
          <cylinderGeometry args={[0.1, 0.1, 0.8, 16]} />
          <meshStandardMaterial color="white" metalness={0.3} roughness={0.7} />
        </mesh>
        {/* Head */}
        <mesh position={[0, 0.7, 0.5]}>
          <sphereGeometry args={[0.15, 32, 32]} />
          <meshStandardMaterial color="white" metalness={0.3} roughness={0.7} />
        </mesh>
      </group>
    </group>
  );
}

export default SaraswatiModel;
