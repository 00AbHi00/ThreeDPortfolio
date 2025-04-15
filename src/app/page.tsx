"use client";
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
    tl.fromTo(
      bodyRefrence.current,
      {
        opacity: 0.3,
        scale: 1,
        width:"100%",
        textAlign:"center",
      },
      {
        duration: 3,
        stagger: 0.1,
        opacity: 1,
        width:"90%",
        scrollTrigger: {
          start: "5% top",
          scrub: true,
          trigger: titleRefrence.current,
        },
      }
    ).to(titleRefrence.current, {
      scale: 0.8,
      scrollTrigger: {
        start: "10% top",
        scrub: true,
        trigger: titleRefrence.current,
      },
    });
  });
  const glitchyTextTitle = {
    textShadow:
      "0.15em 0.15em 2px rgba(255,255,255,0.3), -0.15em -0.15em 2px rgba(0,0,255,0.3) ",
  };

  return (
    <>
      <div className="h-[300vh]">
        <div className=" h-[100vh] flex flex-col">
          <h1
            ref={titleRefrence}
            className=" pt-40 p-4 font-mono text-5xl text-cyan-400"
          >
            Welcome To my 3d portfolio
          </h1>
          <h2 className="text-xl  " style={glitchyTextTitle} ref={bodyRefrence}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
            autem, architecto sapiente dolore dolor maxime maiores dolorum? Est
            nobis maiores officiis quis! Ut et, saepe officiis deserunt quia
            iure dolore? Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Atque autem, architecto sapiente dolore dolor maxime maiores
            dolorum? Est nobis maiores officiis quis! Ut et, saepe officiis
            deserunt quia iure dolore? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Atque autem, architecto sapiente dolore dolor
            maxime maiores dolorum? Est nobis maiores officiis quis! Ut et,
            saepe officiis deserunt quia iure dolore? Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Atque autem, architecto sapiente
            dolore dolor maxime maiores dolorum? Est nobis maiores officiis
            quis! Ut et, saepe officiis deserunt quia iure dolore? Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Atque autem, architecto
            sapiente dolore dolor maxime maiores dolorum? Est nobis maiores
            officiis quis! Ut et, saepe officiis deserunt quia iure dolore?
          </h2>
        </div>
        <div id="main-content" className="pt-[100px] -mt-[100px]">
          <h1>This is main content</h1>
        </div>
      </div>
    </>
  );
}
