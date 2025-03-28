import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const BackendTechStack = () => {

  const backendLogoRef1 = useRef();
  const backendLogoRef2 = useRef();
  const animationRef = useRef(); // Stores requestAnimationFrame ID

  const titleRef = useRef();

  let xPercent = 0;
  let direction = 1;
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

    let speed = 3;
    let movement = speed * deltaTime;

    if (xPercent > 0) {
      xPercent = -100;
    }
    gsap.set(backendLogoRef1.current, { xPercent: xPercent });
    gsap.set(backendLogoRef2.current, { xPercent: xPercent });

    xPercent += movement * direction;
    animationRef.current = requestAnimationFrame(desktopAnimation);
  };

  const mobileAnimation = (currentTime) => {
    if (!lastTime) lastTime = currentTime;
    let deltaTime = (currentTime - lastTime) / 1000;
    lastTime = currentTime;

    let speed = 4;
    let movement = speed * deltaTime;

    if (xPercent > 0) {
      xPercent = -100;
    }
    gsap.set(backendLogoRef1.current, { xPercent: xPercent });
    gsap.set(backendLogoRef2.current, { xPercent: xPercent });

    xPercent += movement * direction;
    animationRef.current = requestAnimationFrame(mobileAnimation);
  };

    

  return (
    <>
      <div className="h-auto flex justify-center overflow-y-hidden">
        <h1 ref={titleRef} className="text-[min(10vw,70px)] text- font-bold">
          Backend
        </h1>
      </div>
      <div className="h-30 w-[300vw] lg:w-[200vw] flex">
        <div
          ref={backendLogoRef1}
          className="h-full w-[150vw] lg:w-[100vw] flex items-center justify-between lg:px-20 px-5"
        >
          <img src="/images/python.png" alt="python" className="w-15 h-15 lg:w-20 lg:h-20" />
          <img src="/images/sklearn.png" alt="sklearn" className="w-40 h-22 lg:w-48 lg:h-30" />
          <img src="/images/fastapi.png" alt="fastapi" className="w-28 h-10 lg:w-48 lg:h-12" />
          <img src="/images/pandas.png" alt="pandas" className="w-16 h-12 lg:w-20 lg:h-18" />
          <img src="/images/numpy.png" alt="numpy" className="w-15 h-15 lg:w-18 lg:h-18" />
        </div>
        <div
          ref={backendLogoRef2}
          className="h-full w-[150vw] lg:w-[100vw] flex items-center justify-between lg:px-20 px-5"
        >
          <img src="/images/python.png" alt="python" className="w-15 h-15 lg:w-20 lg:h-20" />
          <img src="/images/sklearn.png" alt="sklearn" className="w-40 h-22 lg:w-48 lg:h-30" />
          <img src="/images/fastapi.png" alt="fastapi" className="w-28 h-10 lg:w-48 lg:h-12" />
          <img src="/images/pandas.png" alt="pandas" className="w-16 h-12 lg:w-20 lg:h-18" />
          <img src="/images/numpy.png" alt="numpy" className="w-15 h-15 lg:w-18 lg:h-18" />
        </div>
      </div>
    </>
  );
};

export default BackendTechStack;
