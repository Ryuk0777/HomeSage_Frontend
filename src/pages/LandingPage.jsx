import React, { Suspense, lazy, useEffect, useRef } from 'react'
import PropTypes, { element } from 'prop-types';
import Model from '../components/Model';
import Navbar from '../components/Navbar';
import Landing1 from '../components/Landing1';
import ExploreTag from '../components/ExploreTag';
import gsap from 'gsap';
import Cursor from '../components/Cursor';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from 'lenis'
import Reasons from '../components/Reasons';

gsap.registerPlugin(ScrollTrigger);

const LandingPage = props => {

    const mainRef = useRef()

    const homeRef = useRef();
    const tech_usedRef = useRef();
    const aboutRef = useRef();

    const reasonsRef = useRef();
    const div2Ref = useRef();

    let holdTimeout = useRef(null);

    const handleOpacityChange = (opacity) => {
      gsap.to(mainRef.current, {
        opacity: opacity,
        duration: 0.3,
        ease: 'power2.out',
      });
    };
  
    useEffect(()=>{
    const lenis = new Lenis({
      duration: 2,
      smooth: true,
    });

    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
    lenis.raf(time * 1000); 
    });

    gsap.ticker.lagSmoothing(0);

    })

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
  
      document.addEventListener('mousedown', handleMouseDown);
      document.addEventListener('mouseup', handleMouseUp);
  
      return () => {
        document.removeEventListener('mousedown', handleMouseDown);
        document.removeEventListener('mouseup', handleMouseUp);
      };
    }, []);



  return (
    <>
    <Cursor />
    <ExploreTag reasonsRef={reasonsRef} />
    <Model className="h-full w-full fixed top-0 left-0 z-0"/>
     <div className="font-karantina cursor-none">
      <Navbar homeRef={homeRef}/>
      <div ref={mainRef} className='h-auto w-full'>
        <Landing1 reasonsRef={reasonsRef}/>
      
        <div className='h-[500vh] w-full absolute top-0 left-0'>
            <div className='h-screen'></div>
            <Reasons ref={reasonsRef}/>
            <div ref={div2Ref} className='h-screen bg-emerald-300'></div>
            {/* <div className='h-screen bg-cyan-300'></div> */}
            {/* <div className='h-screen bg-slate-300'></div> */}
        </div>
      </div>
    </div>
    </>
  )
}

LandingPage.propTypes = {}

export default LandingPage