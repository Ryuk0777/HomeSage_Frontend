import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const Message = () => {

  const msg1Ref = useRef();
  const msg2Ref = useRef();

  let xPercent = 0;
  let direction = -1;
  let lastTime = 0;

  useEffect(() => {
    requestAnimationFrame(animation);
  }, []);

  const animation = (currentTime) => {
    if (!lastTime) lastTime = currentTime;
    let deltaTime = (currentTime - lastTime) / 1000;
    lastTime = currentTime;

    let speed = 10;
    let movement = speed * deltaTime;

    if (xPercent <= -100) {
      xPercent = 0;
    }
    gsap.set(msg1Ref.current, { xPercent: xPercent });
    gsap.set(msg2Ref.current, { xPercent: xPercent });

    xPercent += movement * direction;
    requestAnimationFrame(animation);
  };

  return (
    <div className="h-[5vh] w-[27vw] fixed bottom-[0.4vw] right-[1vw] hidden lg:flex lg:items-center overflow-x-hidden">
      
      <div ref={msg1Ref} className="h-full w-full flex-shrink-0 flex justify-center items-center gap-x-6.5">
        <h1 className="text-[min(10vw,25px)] font-bold">Click and Hold To rotate</h1>
        <h1 className="text-[min(10vw,25px)] font-bold font-stroke-black-md text-transparent">Click and Hold To rotate</h1>
      </div>
      
      <div ref={msg2Ref} className="h-full w-full flex-shrink-0 flex justify-center items-center gap-x-6.5">
        <h1 className="text-[min(10vw,25px)] font-bold">Click and Hold To rotate</h1>
        <h1 className="text-[min(10vw,25px)] font-bold font-stroke-black-md text-transparent">Click and Hold To rotate</h1>
      </div>
    </div>
  );
};

export default Message;
