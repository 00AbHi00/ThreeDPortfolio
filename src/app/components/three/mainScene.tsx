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
      },
    });

    tl.to(can1Ref.current.position, {
      x: 0, // Avoid large values as Three.js units are small
      y: 1,
      z:-20,
      duration:10
    }).to(can1Ref.current.position,{
        x:0,
        y:1,
        z:20
    }
    )
  });

  return (
      <group position={initialPosition} ref={can1Ref}>
        <mesh>
          <sphereGeometry  args={[1, 32, 32]} />
          <meshPhysicalMaterial thickness={1} roughness={0.3} color={"black"}/>
        </mesh>
        </group>
  );
};
