import React, { Suspense, lazy, useEffect, useRef } from "react";
import PropTypes, { element } from "prop-types";
import Model from "../components/Model";
import Navbar from "../components/Navbar";
import Landing1 from "../components/Landing1";
import ExploreTag from "../components/ExploreTag";
import gsap from "gsap";
import Cursor from "../components/Cursor";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import Reasons from "../components/Reasons";
import TechUsed from "../components/TechUsed";
import Footer from "../components/Footer";
import Message from "../components/Message";

gsap.registerPlugin(ScrollTrigger);

const LandingPage = (props) => {
  const mainRef = useRef();

  const cursorRef = useRef(null);

  const homeRef = useRef();
  const tech_usedRef = useRef();

  const aboutRef1 = useRef();
  const aboutRef2 = useRef();

  const reasonsRef = useRef();

  let holdTimeout = useRef(null);

  const handleOpacityChange = (opacity) => {
    gsap.to(mainRef.current, {
      opacity: opacity,
      duration: 0.3,
      ease: "power2.out"
    });
  };

  useEffect(() => {
    const lenis = new Lenis({
      duration: 2,
      smooth: true
    });

    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);
  });

  useEffect(() => {
    const handleMouseDown = (event) => {
      if (mainRef.current && mainRef.current.contains(event.target)) {
        holdTimeout.current = setTimeout(() => {
          handleOpacityChange(0);
        }, 300);
      }
    };

    const handleMouseUp = () => {
      clearTimeout(holdTimeout.current);
      handleOpacityChange(1);
    };

    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseup", handleMouseUp);

    return () => {
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  return (
    <>
      <Cursor cursorRef={cursorRef} />
      <ExploreTag reasonsRef={reasonsRef} />
      <Model className="h-full w-full fixed top-0 left-0 z-0" />
      <div className="font-karantina cursor-none">
        <Navbar
          homeRef={homeRef}
          tech_usedRef={tech_usedRef}
          cursorRef={cursorRef}
          aboutRef={aboutRef2}
        />
        <div ref={mainRef} className="h-auto w-full">
          <Landing1 reasonsRef={reasonsRef} cursorRef={cursorRef} />
          <Message />
          <div className="h-auto w-full absolute top-0 left-0 z-10">
            <div ref={homeRef} className="h-screen"></div>
            <Reasons ref={reasonsRef} />
            <TechUsed ref={tech_usedRef} />
            <Footer
              cursorRef={cursorRef}
              aboutRef={aboutRef1}
              profilePic={
                "https://cdn.prod.website-files.com/62bdc93e9cccfb43e155104c/66a6a65cb35fb503df1d8a31_Ryuk%20pfp%20400x400%20(13).png"
              }
              name={"Farhan Shaikh"}
              profileName={"Ryuk_777"}
              info={
                "I'm an engineering student pursuing a B.Tech in CSE - Data Science. I have a passion for Data Science and Full Stack Web Development. I love exploring new technologies, building innovative projects, and solving real-world problems through code."
              }
              socialLinks={{
                discord: "https://discordapp.com/users/ryuk0138",
                github: "https://github.com/Ryuk0777",
                linkedIn:
                  "https://www.linkedin.com/in/farhan-shaikh-7a6907250/",
                reddit: "https://www.reddit.com/user/OfficeParking8993/",
                twitter: "https://x.com/farhan232004"
              }}
              animationStart={"top 73%"}
            />
            <div className="bg-white h-[1px]"></div>
            <Footer
              cursorRef={cursorRef}
              aboutRef={aboutRef2}
              profilePic={
                "https://avatars.githubusercontent.com/u/137673662?v=4"
              }
              name={"Vinayak Vathare"}
              profileName={"VathareVinayak"}
              info={
                "​As a Data Scientist and Machine Learning enthusiast, I specialize in converting raw data into actionable insights using advanced analytics and deep learning techniques. My expertise includes data visualization, database management, and backend development integrating deep learning models. Actively participating in hackathons and industry projects, I collaborate with professionals to drive innovation and deliver impactful data-driven solutions"
              }
              socialLinks={{
                // discord: "",
                github: "https://github.com/VathareVinayak",
                linkedIn:
                  "https://www.linkedin.com/in/vinayak-vathare-4bb135279/",
                // twitter: ""
              }}
              animationStart={"top 73%"}
            />
          </div>
        </div>
      </div>
    </>
  );
};

LandingPage.propTypes = {};

export default LandingPage;
