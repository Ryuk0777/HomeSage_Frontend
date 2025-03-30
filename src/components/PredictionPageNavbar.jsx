import React, { useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { toggleSidebarState } from '../redux/sidebar/siderbarSlice'

const PredictionPageNavbar = () => {

    const titleRef = useRef();

    const dispatch = useDispatch();

      const activePage = useSelector((state) => state.predictionPage.value);
      const activePageSrc = useSelector((state) => state.predictionPage.src);

    useEffect(()=>{

        const randomChar = "⏚⊑⏃⋏⊇⎍⌰⊬⍜⌇⏁⋔-.";

        const h1Tag = titleRef.current;

        const originalText =  h1Tag.dataset.text;


        h1Tag.addEventListener("mouseover", ()=>{
            let iteration = 0;

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
            }, 50)
        })



    },[]);


  return (
        <>
        <div className='w-full h-[13vh] lg:h-[15vh] bg-slate-600 flex justify-between items-center sticky top-0 left-0 px-5'>
            <button onClick={()=> dispatch(toggleSidebarState())}><img src="/images/Buttons/menu.png" alt="menu" className='w-[min(10vw,40px)] h-[min(10vw,40px)]'/></button>
            <h1 ref={titleRef} className='text-[min(15vw,80px)] font-bold text-white' data-text="HomeSage">HomeSage</h1>
            <img src={activePageSrc[activePage]} alt="country" className='w-[min(10vw,60px)] h-[min(10vw,40px)]' />
        </div>
        </>
  )
}

export default PredictionPageNavbar
