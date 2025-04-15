import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'

const Cursor = ({cursorRef}) => {


    const handleMousemove = (e)=>{
        e.preventDefault();
        gsap.to(cursorRef.current, {
            x: e.clientX - 10,
            y: e.clientY - 10,
            duration: 0.5,
            ease: "power2.Out",
        })
    }


    const handleMousedown = (e)=>{
        e.preventDefault();
        gsap.to(cursorRef.current, {
            scale: 0.8,
            duration: 0.5,
            ease: "power2.Out",
        })
    }


    const handleMouseup = (e)=>{
        e.preventDefault();
        gsap.to(cursorRef.current, {
            scale: 1,
            duration: 0.5,
            ease: "power2.Out",
        })
    }

    useEffect(()=>{

        if(!cursorRef) return;

        document.addEventListener("mousemove", handleMousemove);

        document.addEventListener("mousedown", handleMousedown);

        document.addEventListener("mouseup", handleMouseup);

        return () => {
            document.removeEventListener("mousemove", handleMousemove)
            document.removeEventListener("mousedown", handleMousedown)
            document.removeEventListener("mouseup", handleMouseup)
        }

    }, [cursorRef])

  return (
    <div ref={cursorRef} className='lg:border-2 lg:w-6 lg:h-6 lg:bg-black lg:z-50 lg:fixed lg:rounded-full lg:pointer-events-none'>
      
    </div>
  )
}

export default Cursor
