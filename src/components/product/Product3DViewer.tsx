"use client";

import { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera, Environment, useGLTF } from "@react-three/drei";
import { RotateCcw, Maximize2, Minimize2 } from "lucide-react";

function Model() {
  // Try to load a model if available, otherwise show a placeholder
  try {
    const { scene } = useGLTF("/models/garment.glb");
    return <primitive object={scene} scale={1.5} />;
  } catch {
    return (
      <mesh>
        <boxGeometry args={[1, 1.5, 0.1]} />
        <meshStandardMaterial color="#E5E5E5" />
      </mesh>
    );
  }
}

export function Product3DViewer() {
  const [autoRotate, setAutoRotate] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const resetCamera = () => {
    // Camera reset handled by OrbitControls
  };

  const setView = (position: [number, number, number]) => {
    // View presets would require camera ref
  };

  return (
    <div className={`relative bg-[#F4F4F2] ${isFullscreen ? "fixed inset-0 z-50" : "aspect-square"}`}>
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 3]} />
        <Suspense fallback={null}>
          <Model />
          <Environment preset="studio" />
        </Suspense>
        <OrbitControls
          enableZoom={true}
          enablePan={false}
          autoRotate={autoRotate}
          autoRotateSpeed={2}
        />
      </Canvas>
      <div className="absolute top-4 right-4 flex flex-col gap-2">
        <button
          onClick={() => setAutoRotate(!autoRotate)}
          className="p-2 bg-white/90 hover:bg-white border border-[#E5E5E5]"
          title="Toggle auto-rotate"
        >
          <RotateCcw className="w-4 h-4" />
        </button>
        <button
          onClick={() => setIsFullscreen(!isFullscreen)}
          className="p-2 bg-white/90 hover:bg-white border border-[#E5E5E5]"
          title="Toggle fullscreen"
        >
          {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
        </button>
      </div>
      <div className="absolute bottom-4 left-4 right-4 text-center">
        <p className="text-xs text-[#666666] bg-white/90 inline-block px-3 py-1">
          Rotate with mouse/touch • Scroll to zoom
        </p>
      </div>
    </div>
  );
}
