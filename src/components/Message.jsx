import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const Message = ({magRef}) => {
  const msg1Ref = useRef();
  const msg2Ref = useRef();

  const xPercentRef = useRef(0);
  const direction = -1;
  const lastTimeRef = useRef(0);
  const animationFrameIdRef = useRef(null);

  useEffect(() => {
    const animation = (currentTime) => {
      if (!lastTimeRef.current) lastTimeRef.current = currentTime;
      let deltaTime = (currentTime - lastTimeRef.current) / 1000;
      lastTimeRef.current = currentTime;

      let speed = 10;
      let movement = speed * deltaTime;

      if (xPercentRef.current <= -100) {
        xPercentRef.current = 0;
      }

      gsap.set(msg1Ref.current, { xPercent: xPercentRef.current });
      gsap.set(msg2Ref.current, { xPercent: xPercentRef.current });

      xPercentRef.current += movement * direction;

      animationFrameIdRef.current = requestAnimationFrame(animation);
    };

    animationFrameIdRef.current = requestAnimationFrame(animation);

    return () => {
      // Cleanup to prevent memory leaks
      if (animationFrameIdRef.current) {
        cancelAnimationFrame(animationFrameIdRef.current);
      }
    };
  }, []);

  return (
    <div ref={magRef} className="h-[5vh] w-[27vw] fixed bottom-[0.4vw] right-[1vw] hidden lg:flex lg:items-center overflow-x-hidden">
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
