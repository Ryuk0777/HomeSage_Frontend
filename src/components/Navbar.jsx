import React from 'react'
import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/all';
import PropTypes from 'prop-types';

gsap.registerPlugin(ScrollToPlugin);

const Navbar = ({homeRef, tech_usedRef}) => {

    const handleScrollTo = (page) => {
        gsap.to(window, { duration: 1.5, scrollTo: page, ease: 'power4.out' });
    };

  return (
    <div className='h-20 w-full fixed top-0 left-0 z-20 flex justify-center items-center pt-10 lg:justify-between lg:items-center lg:px-6 lg:pt-10 bg-red-40 font-karantina'>
        <h1 className="text-[min(15vw,72px)] font-bold">HomeSage</h1>
        <div className='lg:flex lg:gap-x-24 lg:text-4xl hidden lg:items-start'>
            <div className="relative group">
                <button 
                    className="relative cursor-none"
                    onClick={() => handleScrollTo(homeRef.current)}>
                    Home
                <span className="absolute left-0 bottom-0 w-full h-[2px] bg-black scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
                </button>
            </div>
            <div className="relative group">
                <button 
                    className="relative cursor-none"
                    onClick={() => handleScrollTo(tech_usedRef.current)}>
                    Tech Used
                <span className="absolute left-0 bottom-0 w-full h-[2px] bg-black scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
                </button>
            </div>
            <div className="relative group">
                <button 
                    className="relative cursor-none"
                    onClick={() => handleScrollTo('home')}>
                    About Me
                <span className="absolute left-0 bottom-0 w-full h-[2px] bg-black scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
                </button>
            </div>
        </div>
    </div>
    
  )
}

Navbar.propTypes = {
  ref: PropTypes.ref,
  homeRef: PropTypes.ref, 
  tech_usedRef: PropTypes.ref,
}

export default Navbar