## Saraswati Puja Website

A beautiful and interactive website for Saraswati Puja celebrations, featuring 3D elements, animations, and cultural content.

### 🚀 Features

- Interactive 3D Saraswati statue using Three.js
- Smooth image slider with GSAP animations
- Responsive design with Tailwind CSS
- Cultural information and event details
- Image gallery with hover effects

### 🛠️ Technologies Used

- React
- TypeScript
- Three.js / React Three Fiber
- GSAP
- Tailwind CSS
- Lucide React Icons

### 📦 Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

### 🎨 Adding New 3D Elements

To add new 3D elements to the scene:

1. Create a new component in `src/components/`:
   ```tsx
   import { useRef } from 'react';
   import { useFrame } from '@react-three/fiber';
   import * as THREE from 'three';

   function NewElement() {
     const meshRef = useRef<THREE.Mesh>(null);

     useFrame((state, delta) => {
       if (meshRef.current) {
         meshRef.current.rotation.y += delta;
       }
     });

     return (
       <mesh ref={meshRef}>
         <boxGeometry args={[1, 1, 1]} />
         <meshStandardMaterial color="#FFD700" />
       </mesh>
     );
   }
   ```

2. Add the element to the Scene3D component:
   ```tsx
   import { NewElement } from './NewElement';

   export function Scene3D() {
     return (
       <Canvas>
         <Suspense fallback={null}>
           <NewElement />
           <ambientLight intensity={0.5} />
           <OrbitControls />
         </Suspense>
       </Canvas>
     );
   }
   ```

### 🎯 Common Geometries

Three.js provides several basic geometries you can use:

```tsx
// Box
<boxGeometry args={[width, height, depth]} />

// Sphere
<sphereGeometry args={[radius, widthSegments, heightSegments]} />

// Cylinder
<cylinderGeometry args={[radiusTop, radiusBottom, height, radialSegments]} />

// Cone
<coneGeometry args={[radius, height, radialSegments]} />

// Torus
<torusGeometry args={[radius, tube, radialSegments, tubularSegments]} />
```

### 🎨 Materials

Common materials you can use:

```tsx
// Basic
<meshBasicMaterial color="#ffffff" />

// Standard (with lighting)
<meshStandardMaterial 
  color="#ffffff"
  metalness={0.5}
  roughness={0.5}
/>

// Physical (more realistic)
<meshPhysicalMaterial
  color="#ffffff"
  metalness={0.5}
  roughness={0.5}
  clearcoat={1}
  clearcoatRoughness={0.1}
/>
```

### 🌟 Lighting

Add different types of lights:

```tsx
// Ambient light (general illumination)
<ambientLight intensity={0.5} />

// Directional light (sun-like)
<directionalLight position={[5, 5, 5]} intensity={1} />

// Point light (light bulb)
<pointLight position={[2, 2, 2]} intensity={1} />

// Spot light (focused beam)
<spotLight
  position={[5, 5, 5]}
  angle={0.15}
  penumbra={1}
  intensity={1}
/>
```

### 📱 Responsive Design

The website is fully responsive and adapts to different screen sizes. Use Tailwind CSS classes for responsive design:

```tsx
<div className="w-full md:w-1/2 lg:w-1/3">
  {/* Content */}
</div>
```

### 🎭 Animations

Use GSAP for smooth animations:

```tsx
import { gsap } from 'gsap';

useEffect(() => {
  gsap.to(elementRef.current, {
    duration: 1,
    y: 50,
    opacity: 1,
    ease: "power2.out"
  });
}, []);
```

### 📝 License

MIT License