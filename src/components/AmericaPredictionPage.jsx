import React, {useRef, useEffect} from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
const AmericaPredictionPage = () => {

  const pageRef = useRef()

  useGSAP(()=>{
    gsap.from(pageRef.current, {
      opacity: 0,
      duration: 1,
      ease: 'power2.out',
      delay: 0.2,
      stagger: 0.2,
    })
  })

  return (
    <div ref={pageRef} className='w-full h-full  overflow-y-scroll'>
       <div className='w-full h-full lg:grid lg:grid-cols-3 lg:grid-rows-4 p-5'>

        <div className='w-full p-5'>
          <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 text-[min(5vw,20px)]">Zip Code</label>
          <input type="number" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Zip Code" required />        
        </div>
        <div className='w-full p-5'>
          <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 text-[min(5vw,20px)]">Bedrooms</label>
          <input type="number" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Bedrooms" required />        
        </div>
        <div className='w-full p-5'>
          <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 text-[min(5vw,20px)]">Bathrooms</label>
          <input type="number" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Bathrooms" required />        
        </div>
        <div className='w-full p-5'>
          <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 text-[min(5vw,20px)]">Living Space</label>
          <input type="number" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Living Space" required />        
        </div>
        <div className='w-full p-5'>
          <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 text-[min(5vw,20px)]">Zip Code Population</label>
          <input type="number" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Zip Code Population" required />        
        </div>
        <div className='w-full p-5'>
          <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 text-[min(5vw,20px)]">Zip Code Density</label>
          <input type="number" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Zip Code Density" required />        
        </div>
        <div className='w-full p-5'>
          <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 text-[min(5vw,20px)]">Median Household Income</label>
          <input type="number" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Median Household Income" required />        
        </div>

        <div className='w-full h-auto flex justify-center items-center col-span-3'>
        <button className='w-60 h-13 bg-emerald-300 rounded-xl text-[min(10vw,35px)] hover:bg-emerald-400'>Predict</button>
        </div>
              
        </div>
    </div>
  )
}

export default AmericaPredictionPage