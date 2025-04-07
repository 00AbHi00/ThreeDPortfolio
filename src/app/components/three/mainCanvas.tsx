"use client";
import * as THREE from "three"; // Import Three.js

import { Canvas } from "@react-three/fiber";
import { Clouds, Environment, OrbitControls } from "@react-three/drei";
import { MainScene } from "./mainScene";
import { usePathname } from "next/navigation";
import { Cloud } from "@react-three/drei";
// import { AmbientLight, Light } from "three";

export function MainCanvas() {
  const pathName = usePathname();
  const id = pathName.split("/").filter((e)=>e!='');
  console.log(id)
  if (id.length < 1) {
    return (
      <div className="w-screen h-screen fixed top-0 left-0">
        <Canvas shadows dpr={[1, 2]} camera={{ fov: 55, position: [0, 0, 5] }}>
          <Environment preset="city" />

          <MainScene />
          {/* <OrbitControls /> */}
          {/* <ambientLight>
        
        </ambientLight> */}
          {/* <Clouds material={THREE.MeshBasicMaterial}>
          <Cloud segments={3} bounds={[10, 2, 2]} volume={10} color="red" />
          <Cloud seed={1} scale={2} volume={5} color="hotpink" fade={100} />
        </Clouds> */}
        </Canvas>
      </div>
    );
  }
}
