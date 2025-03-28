import React, { useRef, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Landing1 = ({ reasonsRef }) => {
  const titleRef = useRef();
  const subTitleRef = useRef();
  const buttonRef = useRef();

  let mm = gsap.matchMedia();

  useEffect(() => {
    if (!reasonsRef.current || !subTitleRef.current || !buttonRef.current) return;
  
    let t1 = gsap.timeline({
      scrollTrigger: {
        trigger: reasonsRef.current,
        start: "top bottom",
        end: "top top",
        markers: false,
        scrub: 3,
      },
    });

    let t2 = gsap.timeline({
      scrollTrigger: {
        trigger: reasonsRef.current,
        start: "top bottom",
        end: "top 30%",
        markers: false,
        scrub: true,
      },
    });
  
    mm.add(
      {
        isMobile: "(max-width: 1024px)",
        isDesktop: "(min-width: 1025px)",
      },
      (context) => {
        let { isDesktop, isMobile} = context.conditions;
  
  
        if (isDesktop) {
          t1.to([subTitleRef.current, buttonRef.current], {
            opacity: 0,
            ease: "power2.out",
          })
            .to(titleRef.current, {
              y: ()=> (window.outerHeight*0.05),
              scale: 1.2,
              ease: "power2.out",
            })
            .to(titleRef.current, {
              ease: "power2.out",
              y: -(window.outerHeight*0.1),
              opacity:0,
            })
        }


      if(isMobile){
        t2.to([subTitleRef.current, buttonRef.current], {
            opacity: 0,
            ease: "power2.out",
          })
            .to(titleRef.current, {
              y: ()=> (window.innerHeight*0.05),
              scale: 1.2,
              ease: "power2.out",
            })
            .to(titleRef.current, {
              ease: "power2.out",
              y: -(window.innerHeight*0.1),
              delay:1,
              opacity:0,
            })
      }
      }
    );
    

    const handleResize = () => {
      ScrollTrigger.refresh();
    };


    window.addEventListener('resize', handleResize);

    return () => {
      mm.revert(); 
      window.removeEventListener('resize', handleResize);
    };
  }, [reasonsRef, titleRef, subTitleRef, buttonRef]);
  
  

  return (
    <div className="h-screen w-full text-center fixed top-0 left-0 z-10 flex flex-col justify-center items-center lg:justify-end">
      <div className="lg:w-full lg:flex lg:justify-start hidden lg:px-10">
      </div>
      <div className="w-full flex flex-col items-center space-y-0 gap-y-5 lg:gap-y-7">
        <h1
          ref={titleRef}
          className="text-[min(18vw,130px)] text-white font-bold m-0 leading-none"
        >
          <span className="inline-block">HomeSage</span>
        </h1>
        <p
          ref={subTitleRef}
          className="text-[min(7vw,45px)] font-bold leading-none m-0 font-stroke-white-sm"
        >
          <span className="inline-block">
            Navigate the housing market effortlessly with HomeSage, delivering
            precise predictions to guide your property investments.
          </span>
        </p>
      </div>
      <div className="lg:w-full lg:h-[35%] lg:pt-20 pt-10 flex justify-center">
        <div ref={buttonRef} className="w-auto h-10">
          <Link
            to="/Prediction"
            className="bg-white rounded-xl text-2xl  py-2.5 px-14 lg:px-20 lg:py-2.5 mt-7 cursor-none"
          >
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
};

Landing1.propTypes = {
  ref: PropTypes.ref
};

export default Landing1;
