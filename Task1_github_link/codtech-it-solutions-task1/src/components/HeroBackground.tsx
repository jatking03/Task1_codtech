
import { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

// Generate random particles for our star field
function generateRandomPoints(count: number): Float32Array {
  const points = new Float32Array(count * 3);
  for (let i = 0; i < count * 3; i += 3) {
    points[i] = (Math.random() - 0.5) * 15;     // x
    points[i + 1] = (Math.random() - 0.5) * 15; // y
    points[i + 2] = (Math.random() - 0.5) * 15; // z
  }
  return points;
}

interface StarFieldProps {
  count?: number;
}

function StarField({ count = 3000 }: StarFieldProps) {
  const ref = useRef<THREE.Points>(null);
  const points = generateRandomPoints(count);

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.1) * 0.2;
    ref.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.2) * 0.2;
  });

  return (
    <Points ref={ref} positions={points} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#64FFDA"
        size={0.03}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
}

const HeroBackground = () => {
  return (
    <div className="absolute inset-0 z-0 opacity-50">
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
        <StarField />
      </Canvas>
    </div>
  );
};

export default HeroBackground;
