import React, {useRef, useEffect, useState} from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

const IndiaPredicitonPage = () => {

  const state = ["Tamil Nadu", "Maharashtra", "Punjab", "Rajasthan", "West Bengal", 
    "Chhattisgarh", "Delhi", "Jharkhand", "Telangana", "Karnataka", 
    "Uttar Pradesh", "Assam", "Uttarakhand", "Bihar", "Gujarat", "Haryana", 
    "Andhra Pradesh", "Madhya Pradesh", "Kerala", "Odisha"]


const city = ["Chennai", "Coimbatore", "Pune", "Nagpur", "Mumbai", "Ludhiana",
    "Amritsar", "Jodhpur", "Jaipur", "Durgapur", "Kolkata", "Bilaspur",
    "Raipur", "New Delhi", "Dwarka", "Ranchi", "Jamshedpur", "Warangal", 
    "Hyderabad", "Bangalore", "Mysore", "Mangalore", "Lucknow", "Noida",
    "Silchar", "Guwahati", "Dehradun", "Haridwar", "Gaya", "Patna", "Ahmedabad",
    "Surat", "Faridabad", "Gurgaon", "Visakhapatnam", "Vijayawada", "Bhopal", 
    "Indore", "Trivandrum", "Kochi", "Cuttack", "Bhubaneswar"]

  const pageRef = useRef();

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const [clubhouseState, setClubhouseState] = useState(false);
  const [gardenState, setGardenState] = useState(false);
  const [gymState, setGymState] = useState(false);
  const [playgroundState, setPlaygroundState] = useState(true);
  const [poolState, setPoolState] = useState(false);


  const  handleCheckboxChange = (e) =>{

      if(e.target.id === "Clubhouse"){
          setClubhouseState(!clubhouseState);
      }
      else if(e.target.id === "Garden"){
          setGardenState(!gardenState);
      }
      else if(e.target.id === "Gym"){
          setGymState(!gymState);
      }
      else if(e.target.id === "Playground"){
          setPlaygroundState(!playgroundState);
      }
      else if(e.target.id === "Pool"){
          setPoolState(!poolState);
      }

  }


const getAmenities = () => {
  let result = []
  if(clubhouseState === true){
      result.push("Clubhouse");
  }
  if(gardenState === true){
      result.push("Garden");
  }
  if(gymState === true){
      result.push("Gym");
  }
  if(playgroundState === true){
      result.push("Playground");
  }
  if(poolState === true){
      result.push("Pool");
  }

  return result;
}

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
    <div ref={pageRef} className='w-full h-full bg-slate-200 overflow-y-scroll'>
      <div className='w-full h-full lg:grid lg:grid-cols-5 lg:grid-rows-5 p-5'>
      <div className='w-full p-5'>
        <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 text-[min(5vw,20px)]">BHK</label>
        <input type="number" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="BHK" required />        
      </div>
      <div className='w-full p-5'>
        <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 text-[min(5vw,20px)]">Size in Sq.ft</label>
        <input type="number" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Size in Sq.ft" required />        
      </div>
      <div className='w-full p-5'>
        <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 text-[min(5vw,20px)]">Price per SqFt</label>
        <input type="number" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Price per SqFt" required />        
      </div>

      <div className='w-full p-5'>
        <label for="countries" class="block mb-2 font-medium text-gray-900 text-[min(5vw,20px)]">Furnished Status</label>
        <select id="countries" defaultValue={null} class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 text-[min(5vw,20px)]">
          <option value={null} >Choose a Status</option>
          <option value="Unfurnished">Unfurnished</option>
          <option value="Semi-furnished">Semi furnished</option>
          <option value="Furnished">Furnished</option>
        </select>
      </div>  

      <div className='w-full p-5'>
        <label for="countries" class="block mb-2 font-medium text-gray-900 text-[min(5vw,20px)]">State</label>
        <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 text-[min(5vw,20px)]">
        <option value={null} >Choose a state</option>
        {state.map(state => <option key={state} value={state}>{state}</option>)}
        </select>
      </div>  

      <div className='w-full p-5'>
        <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 text-[min(5vw,20px)]">Floor No</label>
        <input type="number" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Floor No" required />        
      </div>
      <div className='w-full p-5'>
        <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 text-[min(5vw,20px)]">Total Floors</label>
        <input type="number" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Total Floors" required />        
      </div>
      <div className='w-full p-5'>
        <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 text-[min(5vw,20px)]">Age of Property</label>
        <input type="number" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Age of Property" required />        
      </div>

      <div className='w-full p-5'>
        <label for="countries" class="block mb-2 font-medium text-gray-900 text-[min(5vw,20px)]">Furnished Status</label>
        <select id="countries" defaultValue={null} class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 text-[min(5vw,20px)]">
          <option value={null} >Choose the Accessibility</option>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
      </div>  

      <div className='w-full p-5'>
        <label for="countries" class="block mb-2 font-medium text-gray-900 text-[min(5vw,20px)]">State</label>
        <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 text-[min(5vw,20px)]">
        <option value={null} >Choose a city</option>
        {city.map(city => <option key={city} value={city}>{city}</option>)}
        </select>
      </div>  

      <div className='w-full p-5'>
        <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 text-[min(5vw,20px)]">Nearby Schools</label>
        <input type="number" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Nearby Schools" required />        
      </div>
      <div className='w-full p-5'>
        <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 text-[min(5vw,20px)]">Nearby Hospitals</label>
        <input type="number" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Nearby Hospitals" required />        
      </div>

      <div className='w-full p-5'>
        <label for="countries" class="block mb-2 font-medium text-gray-900 text-[min(5vw,20px)]">Parking Space</label>
        <select id="countries" defaultValue={null} class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 text-[min(5vw,20px)]">
          <option value={null} >Choose</option>
          <option value="No">No</option> 
          <option value="Yes">Yes</option>
        </select>
      </div>  
      <div className='w-full p-5'>
        <label for="countries" class="block mb-2 font-medium text-gray-900 text-[min(5vw,20px)]">Property Type</label>
        <select id="countries" defaultValue={null} class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 text-[min(5vw,20px)]">
          <option value={null} >Choose a Property Type</option>
          <option value="Apartment">Apartment</option>
          <option value="Independent-House">Independent House</option>
          <option value="Villa">Villa</option>
        </select>
      </div>  
      <div className='w-full p-5'>
        <label for="countries" class="block mb-2 font-medium text-gray-900 text-[min(5vw,20px)]">Availability Status</label>
        <select id="countries" defaultValue={null} class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 text-[min(5vw,20px)]">
          <option value={null} >Choose the Status</option>
          <option value="Under-Construction">Under Construction</option>
          <option value="Ready-to-Move">Ready to Move</option>
        </select>
      </div>  
      <div className='w-full p-5'>
        <label for="countries" class="block mb-2 font-medium text-gray-900 text-[min(5vw,20px)]">Security</label>
        <select id="countries" defaultValue={null} class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 text-[min(5vw,20px)]">
          <option value={null} >Choose</option>
          <option value="No">No</option>
          <option value="Yes">Yes</option>
        </select>
      </div>  
      <div className='w-full p-5'>
        <label for="countries" class="block mb-2 font-medium text-gray-900 text-[min(5vw,20px)]">Owner Type</label>
        <select id="countries" defaultValue={null} class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 text-[min(5vw,20px)]">
          <option value={null} >Choose Owner Type</option>
          <option value="Builder">Builder</option>
          <option value="Owner">Owner</option>
          <option value="Broker">Broker</option>
        </select>
      </div> 

      <div class="w-full flex items-end mb-4">
        <div className='w-full h-10 flex justify-center items-center'>
          <label for="default-checkbox" class="ms-2 text-[min(5vw,35px)] font-medium text-gray-900">Amenities</label>
        </div>
        <div className='w-full h-10 flex justify-center items-center'>
          <input id="default-checkbox" type="checkbox" value="" class=" w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 "/>
          <label for="default-checkbox" class="ms-2 text-[min(5vw,20px)] font-medium text-gray-900">Clubhouse</label>
        </div>
      </div>
      <div class="w-full flex items-end mb-4">
        <div className='w-full h-10 flex justify-center items-center'>
          <input id="default-checkbox" type="checkbox" value="" class=" w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 "/>
          <label for="default-checkbox" class="ms-2 text-[min(5vw,20px)] font-medium text-gray-900">Garden</label>
        </div>
        <div className='w-full h-10 flex justify-center items-center'>
          <input id="default-checkbox" type="checkbox" value="" class=" w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 "/>
          <label for="default-checkbox" class="ms-2 text-[min(5vw,20px)] font-medium text-gray-900">Gym</label>
        </div>
      </div>
      <div class="w-full flex items-end mb-4">
        <div className='w-full h-10 flex justify-center items-center'>
          <input id="default-checkbox" type="checkbox" value="" class=" w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 "/>
          <label for="default-checkbox" class="ms-2 text-[min(5vw,20px)] font-medium text-gray-900">Playground</label>
        </div>
        <div className='w-full h-10 flex justify-center items-center'>
          <input id="default-checkbox" type="checkbox" value="" class=" w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 "/>
          <label for="default-checkbox" class="ms-2 text-[min(5vw,20px)] font-medium text-gray-900">Pool</label>
        </div>
      </div>

      <div className='w-full h-auto flex justify-center items-center col-span-5'>
        <button className='w-60 h-13 bg-emerald-300 rounded-xl text-[min(10vw,35px)] hover:bg-emerald-400'>Predict</button>
      </div>
      
      </div>


    </div>
  )
}

export default IndiaPredicitonPage







{/* <div className='w-full'>
<label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 text-[min(5vw,20px)]">Price per SqFt</label>
<input type="number" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Price per SqFt" required />        
</div> */}

{/* <div className='w-full'>
<label for="countries" class="block mb-2 text-sm font-medium text-gray-900">Select an option</label>
<select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
  <option selected>Choose a country</option>
  <option value="US">United States</option>
  <option value="CA">Canada</option>
  <option value="FR">France</option>
  <option value="DE">Germany</option>
</select>
</div>   */}