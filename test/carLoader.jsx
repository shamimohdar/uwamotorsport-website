import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Mesh } from "three"; // Import Mesh from three.js
import GltfModel from "./gltf";

const CircularPlatform = ({ radius = 20 }) => {
  return (
    <mesh position={[0, -1, 0]} rotation={[0, 0, 0]}>
      <cylinderGeometry args={[radius, radius, 1, 32]} />
      <meshStandardMaterial color="gray" />
    </mesh>
  );
};

const ModelViewer = ({ modelPath, scale = 40, position = [0, 0, 0] }) => {
  return (
    <Canvas>
      <ambientLight intensity={1} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />
      <Suspense fallback={null}>
        <GltfModel modelPath={modelPath} scale={scale} position={position} />
        <CircularPlatform />
        <OrbitControls />
      </Suspense>
    </Canvas>
  );
};

export default ModelViewer;
