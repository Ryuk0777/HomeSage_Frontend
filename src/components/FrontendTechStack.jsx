import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useSelector } from "react-redux";

const FrontendTechStack = () => {


  const frontendLogoRef1 = useRef();
  const frontendLogoRef2 = useRef();
  const animationRef = useRef(); // Stores requestAnimationFrame ID

  const titleRef = useRef();

  let xPercent = 0;
  let direction = -1;
  let lastTime = 0;

  let mm = gsap.matchMedia();

  useEffect(() => {
      mm.add(
        {
          isMobile: "(max-width: 1024px)",
          isDesktop: "(min-width: 1025px)",
        },
        (context) => {
          let { isDesktop, isMobile } = context.conditions;
  
          if (isDesktop) {
            cancelAnimationFrame(animationRef.current); // Cancel any existing animation
            animationRef.current = requestAnimationFrame(desktopAnimation);
          } else if (isMobile) {
            cancelAnimationFrame(animationRef.current);
            animationRef.current = requestAnimationFrame(mobileAnimation);
          }
        }
      );
  
      return () => {
        cancelAnimationFrame(animationRef.current); // Cleanup on unmount
      };
  }, []);

  const desktopAnimation = (currentTime) => {
    if (!lastTime) lastTime = currentTime;
    let deltaTime = (currentTime - lastTime) / 1000;
    lastTime = currentTime;

    let speed = 2;
    let movement = speed * deltaTime;

    if (xPercent <= -100) {
      xPercent = 0;
    }
    gsap.set(frontendLogoRef1.current, { xPercent: xPercent });
    gsap.set(frontendLogoRef2.current, { xPercent: xPercent });

    xPercent += movement * direction;
    animationRef.current = requestAnimationFrame(desktopAnimation);
  };

  const mobileAnimation = (currentTime) => {
    if (!lastTime) lastTime = currentTime;
    let deltaTime = (currentTime - lastTime) / 1000;
    lastTime = currentTime;

    let speed = 5;
    let movement = speed * deltaTime;

    if (xPercent <= -100) {
      xPercent = 0;
    }
    gsap.set(frontendLogoRef1.current, { xPercent: xPercent });
    gsap.set(frontendLogoRef2.current, { xPercent: xPercent });

    xPercent += movement * direction;
    animationRef.current = requestAnimationFrame(mobileAnimation);
  };


  return (
    <>
      <div className="h-auto flex justify-center overflow-y-hidden">
        <h1 ref={titleRef} className="text-[min(10vw,70px)] text-white font-bold">
          Frontend
        </h1>
      </div>
      <div className="h-30 w-[200vw] flex">
        <div
          ref={frontendLogoRef1}
          className="h-full w-[100vw] flex items-center justify-between lg:px-28"
        >
          <img src="/images/react.png" alt="react" className="w-16 h-16 lg:w-22 lg:h-20" />
          <img src="/images/redux.png" alt="redux" className="w-14 h-12 lg:w-18 lg:h-16" />
          <img src="/images/gsap.png" alt="gsap" className="w-15 h-15 lg:w-19 lg:h-19" />
          <img src="/images/tailwind css.png" alt="tailwind css" className="w-18 h-10 lg:w-22 lg:h-12" />
          <img src="/images/threejs.png" alt="thtreejs" className="w-15 h-15 lg:w-19 lg:h-19" />
        </div>
        <div
          ref={frontendLogoRef2}
          className="h-full w-[100vw] flex items-center justify-between lg:px-28"
        >
          <img src="/images/react.png" alt="react" className="w-16 h-16 lg:w-22 lg:h-20" />
          <img src="/images/redux.png" alt="redux" className="w-14 h-12 lg:w-18 lg:h-16" />
          <img src="/images/gsap.png" alt="gsap" className="w-15 h-15 lg:w-19 lg:h-19" />
          <img src="/images/tailwind css.png" alt="tailwind css" className="w-18 h-10 lg:w-22 lg:h-12" />
          <img src="/images/threejs.png" alt="thtreejs" className="w-15 h-15 lg:w-19 lg:h-19" />
        </div>
      </div>
    </>
  );
};

export default FrontendTechStack;
