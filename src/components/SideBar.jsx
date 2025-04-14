import React, { useRefm, useEffect, useRef } from "react";
import CountryTab from "./CountryTab";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useSelector, useDispatch } from "react-redux";

const SideBar = () => {
  const sidebarRef = useRef();

  const sidebarState = useSelector((state) => state.sidebar.value);

  useGSAP(() => {

    if (sidebarState) {
      gsap.to(sidebarRef.current, {
          xPercent: 0,
          duration: 0.5,
          ease: "power2.out",
          stagger: {
          amount: 0.2
          }
      });
      } else if (!sidebarState) {
      gsap.to(sidebarRef.current, {
          xPercent: -100,
          duration: 0.5,
          ease: "power2.out",
          stagger: {
          amount: 0.2
          }
      });
      }

  }, [sidebarState]);

  return (
    <>
      <div ref={sidebarRef} className="bg-white h-[85vh] w-[60vw] lg:w-[18vw] fixed left-0 top-[13vh] lg:top-[15vh] font-karantina px-0.5 z-10">
        <CountryTab title="India" src="https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/383px-Flag_of_India.svg.png"/>
        <CountryTab title="Malaysia" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Flag_of_Malaysia.svg/383px-Flag_of_Malaysia.svg.png"/>
        <CountryTab title="America" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Flag_of_the_United_States_%28Pantone%29.svg/383px-Flag_of_the_United_States_%28Pantone%29.svg.png"/>
      </div>
    </>
  );
};

export default SideBar;
