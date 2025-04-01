"use client";
import "./glitch.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);
export default function Home() {
  const titleRefrence = useRef<HTMLHeadingElement>(null);
  const bodyRefrence = useRef<HTMLHeadingElement>(null);
  useGSAP(() => {
    const tl = gsap.timeline();
    tl.fromTo(bodyRefrence.current,{
      opacity:0,
    }, {
      duration: 1,
      opacity:1,
      scrollTrigger: {
        start:"50% top",
        scrub: true,
        pin:true,
        trigger: titleRefrence.current,
      },
    });
  });
  const glitchyTextTitle = {
    textShadow: "0.15em 0.15em 2px rgba(255,255,255,0.3), -0.15em -0.15em 2px rgba(0,0,255,0.3) ",
  };

  return (
    <>
      <div className="snap-y snap-mandatory overflow-y-scroll h-[300vh]">
        <div className="snap-start h-[100vh] bg-red-100">
          <h1
            ref={titleRefrence}
            className="glitch pt-40 z-50 p-4 font-mono text-5xl text-cyan-400"
            
          >
            Welcome To my 3d portfolio
          </h1>
          <h2
            className="snap-start text-xl bg-red-50"
            style={glitchyTextTitle} 
            ref={bodyRefrence}>
            This is
          </h2>
        </div>
      </div>
    </>
  );
}
