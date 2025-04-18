import React, { useEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import TextPlugin from "gsap/TextPlugin";

gsap.registerPlugin(TextPlugin);

const PredicitonPageLoader = () => {

  const loaderRef = useRef(null);


  useGSAP(() => {
    if (!loaderRef) return;

    const scrambleAnimation = () =>{

        const randomChar = "⏚⊑⏃⋏⊇⎍⌰⊬⍜⌇⏁⋔-.";

        const h1Tag = loaderRef.current.querySelector("h1");

        const originalText =  h1Tag.dataset.text;
    
        let iteration = 0;

        setTimeout(()=>{
            let interval = setInterval(()=>{
                h1Tag.textContent = originalText.split("").map(
                    (char, index)=>{
                        if(index < iteration) return char;
        
                        return randomChar.charAt(Math.floor(Math.random()*randomChar.length));
                    }
                )
                .join("");
        
                if(iteration >= originalText.length){
                    clearInterval(interval);
                }
            
                iteration += 1/3;
            }, 70)
        }, 700);
    }

    const t1 = gsap.timeline();

    t1.call(scrambleAnimation)
        .to(loaderRef.current, {
            duration: 1,
            height: 0,
            ease: "power2.out",
            delay: 3,
            zIndex: 0,
            onStart: scrambleAnimation
            })
          // .to(loaderRef.current,{
          //   duration: 1,
          //   className: "hidden",
          //   ease: "power2.out",
          // })


    }, [loaderRef.current]);

  return (
    <div
      ref={loaderRef}
      className="w-screen h-screen fixed top-0 left-0 bg-slate-300 flex justify-center items-center font-karantina z-10 overflow-hidden"
    >
      <h1 className="text-[min(20vw,200px)] font-bold text-white" data-text="HomeSage"></h1>
    </div>
  );
};

export default PredicitonPageLoader;
