import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Group } from "three";

gsap.registerPlugin(ScrollTrigger);

export const MainScene = () => {
  const can1Ref = useRef<Group>(null);
  const initialPosition: [number, number, number] = [0, 0, 0];

  useGSAP(() => {
    if (!can1Ref.current) return; // Ensure the ref exists

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "body",
        start: "10 10",
        end: "bottom bottom",
        scrub: true,
        markers: true,
      },
    });

    tl.to(can1Ref.current.position, {
      x: 1, // Avoid large values as Three.js units are small
      y: 1,
      z:3,
      duration:3
    }).to(can1Ref.current.position,{
        z:0,
    }
    )
  });

  return (
      <group position={initialPosition} ref={can1Ref}>
        <mesh>
          <sphereGeometry args={[1, 32, 32]} />
          <meshPhysicalMaterial transmission={1}  ior={1.5} thickness={1} roughness={0.1} color={"black"}/>
        </mesh>
      </group>
  );
};
