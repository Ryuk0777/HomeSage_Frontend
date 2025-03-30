import React, {useRef, useEffect} from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

const MalaysiaPredictionPage = () => {

  const property_Types = ["Condominium", "Apartment", "Flat", "Serviced Residence",
    "Bungalow", "Semi-detached House", "Terrace House",
    "Cluster House", "Townhouse", "Residential Land", "Bungalow Land"];

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
    <div ref={pageRef} className='w-full h-full overflow-y-scroll'>
       <div className='w-full h-full lg:grid lg:grid-cols-3 lg:grid-rows-4 p-5'>

        <div className='w-full p-5'>
          <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 text-[min(5vw,20px)]">Rooms</label>
          <input type="number" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Rooms" required />        
        </div>
        <div className='w-full p-5'>
          <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 text-[min(5vw,20px)]">Bathrooms</label>
          <input type="number" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Bathrooms" required />        
        </div>
        <div className='w-full p-5'>
          <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 text-[min(5vw,20px)]">Car Parking</label>
          <input type="number" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Car Parking" required />        
        </div>
        <div className='w-full p-5'>
          <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 text-[min(5vw,20px)]">Size in sq.ft</label>
          <input type="number" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Size in sq.ft" required />        
        </div>
        <div className='w-full p-5'>
          <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 text-[min(5vw,20px)]">Price per sq.ft</label>
          <input type="number" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Price per sq.ft" required />        
        </div>

        <div className='w-full p-5'>
        <label for="countries" class="block mb-2 font-medium text-gray-900 text-[min(5vw,20px)]">Property Type</label>
        <select id="countries" defaultValue={null} class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 text-[min(5vw,20px)]">
          <option value={null} >Choose Owner Type</option>
          {property_Types.map((type, index) => (
                        <option key={index} value={type}>{type}</option>
                    ))}
        </select>
        </div> 
        <div className='w-full p-5'>
        <label for="countries" class="block mb-2 font-medium text-gray-900 text-[min(5vw,20px)]">Furnishing</label>
        <select id="countries" defaultValue={null} class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 text-[min(5vw,20px)]">
          <option value={null} >Choose the Furnishing</option>
          <option value="Fully Furnished">Fully Furnished</option>
          <option value="Partly Furnished">Partly Furnished</option>
          <option value="Unfurnished+">Unfurnished</option>

        </select>
        </div> 

        <div className='w-full h-auto flex justify-center items-center col-span-3'>
        <button className='w-60 h-13 bg-emerald-300 rounded-xl text-[min(10vw,35px)] hover:bg-emerald-400'>Predict</button>
        </div>
               
       </div>
    </div>
  )
}

export default MalaysiaPredictionPage