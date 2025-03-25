import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ExploreTag = ({ reasonsRef }) => {
  const exploreTagRef = useRef();

  // Initialize GSAP animation once reasonsRef is ready
  useEffect(() => {
    if (!reasonsRef.current || !exploreTagRef.current) {
      return;
    }


    const t1 = gsap.timeline({
      scrollTrigger: {
        trigger: reasonsRef.current,
        start: "top bottom",
        end: "top 50%",
        scrub: 3,
        markers: false, // Should now appear
        toggleActions: "play none none reverse",
      },
    });

    t1.to(exploreTagRef.current.querySelector("h1"), { x: -100, duration: 1, ease: "power2.inOut" })
    .to(exploreTagRef.current.querySelector("span"), { height: "0%", duration: 1, ease: "power2.inOut" });

    return () => t1.kill(); // Cleanup GSAP animation on unmount
  }, [reasonsRef]); // Runs only when reasonsRef is assigned

  return (
    <div ref={exploreTagRef} className="w-30 h-16 fixed bottom-3 left-0 flex items-center justify-between z-10 px-3 lg:w-34">
      <span className="w-[2px] h-[95%] bg-white"></span>
      <div className="overflow-hidden w-auto h-auto">
        <h1 className="text-white font-karantina text-xl lg:text-2xl">
          Scroll to explore
        </h1>
      </div>
    </div>
  );
};

ExploreTag.propTypes = {
  reasonsRef: PropTypes.shape({
    current: PropTypes.instanceOf(Element),
  }).isRequired,
};

export default ExploreTag;
