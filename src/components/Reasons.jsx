import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Reasons = ({ ref }) => {
  const titleRef = useRef();
  const reasonsRef = useRef();

  let mm = gsap.matchMedia();

  useGSAP(() => {

    mm.add({
      isMobile: "(max-width: 1024px)",
      isDesktop: "(min-width: 1025px)",
    },
    (context)=>{
      let { isDesktop, isMobile} = context.conditions;

      if(isMobile){

        const t1 = gsap.timeline({
          scrollTrigger: {
            trigger: ref.current,
            start: "top 20%",
            end: "top top",
            markers: false,
            toggleActions: "play none reset none"
          }
        });


        t1.from(titleRef.current.children, {
          duration: 0.8,
          opacity: 0,
          y: 100,
          ease: "power2.out",
          stagger: 0.2
        });
    
        t1.from(reasonsRef.current.children, {
          duration: 0.8,
          opacity: 0,
          y: 50,
          ease: "power2.out",
          stagger: 0.3
        });
      }



      if(isDesktop){

        const t1 = gsap.timeline({
          scrollTrigger: {
            trigger: ref.current,
            start: "top top",
            end: "top top",
            markers: false,
            toggleActions: "play none reset none"
          }
        });


        t1.from(titleRef.current.children, {
          duration: 1,
          opacity: 0,
          y: 100,
          ease: "power2.out",
          stagger: 0.2
        });
    
        t1.from(reasonsRef.current.children, {
          duration: 0.8,
          opacity: 0,
          y: 50,
          ease: "power2.out",
          stagger: 0.3
        });
      }
    }
  );
  }, []);

  return (
    <div
      ref={ref}
      className="h-[90vh] w-screen lg:h-[120vh] relative flex flex-col justify-center items-center bg-red-20 gap-x-25 px-5 gap-y-5"
    >
      <div ref={titleRef} className="w-auto h-auto flex gap-x-5">
        <h1 className="text-[min(10vw,90px)] font-bold text-black font-stroke-white-sm">
          Why To Choose
        </h1>
        <h1 className="text-[min(10vw,90px)] font-bold text-white font-stroke-black-sm">
          HomeSage ?
        </h1>
      </div>

      <div
        ref={reasonsRef}
        className="w-auto h-auto text-center flex flex-col gap-y-1"
      >
        <h1 className="text-[min(8vw,60px)] font-bold text-white font-stroke-black-sm">
          Accurate and Reliable Predictions
        </h1>
        <h1 className="text-[min(8vw,60px)] font-bold text-black font-stroke-white-sm">
          No Hidden Fees
        </h1>
        <h1 className="text-[min(8vw,60px)] font-bold text-white font-stroke-black-sm">
          Comprehensive Data Analysis
        </h1>
        <h1 className="text-[min(8vw,60px)] font-bold text-black font-stroke-white-sm">
          Trustworthy and Transparent
        </h1>
      </div>
    </div>
  );
};

export default Reasons;
