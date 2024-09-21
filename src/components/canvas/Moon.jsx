// MoonCanvas.js
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

const Moon = () => {
  const { scene } = useGLTF('/path/to/moon.obj');
  return <primitive object={scene} scale={0.5} />;
};

const MoonCanvas = () => {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <Moon />
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
};

export default MoonCanvas;
