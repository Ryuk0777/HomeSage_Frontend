import React, {useRef, useEffect, useState} from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import axios from 'axios'
import { data } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setResultMsg, setResultStatus, setShowResult, setShowLoader, setData } from '../redux/result/resultSlice';

const IndiaPredicitonPage = () => {

  const dispatch = useDispatch();
  const inputData = useSelector(state => state.result.data);


  const bhkRef = useRef();
  const sizeRef = useRef();
  const priceSizeRef = useRef();
  const furnishedRef = useRef();
  const stateRef = useRef();
  const cityRef = useRef();
  const floorNoRef = useRef();
  const totalFloorsRef = useRef();
  const ageofPropertyRef = useRef();
  const publicTransportAccessibilityRef = useRef();
  const nearbySchoolsRef = useRef();
  const nearbyHospitalsRef = useRef();
  const parkingSpaceRef = useRef();
  const propertyTypeRef = useRef();
  const availabilityStatusRef = useRef();
  const securityRef = useRef();
  const ownerTypeRef = useRef();

  const clubhouseRef = useRef();
  const gardenRef = useRef();
  const gymRef = useRef();
  const playgroundRef = useRef();
  const poolRef = useRef();



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

  const [clubhouseState, setClubhouseState] = useState(true);
  const [gardenState, setGardenState] = useState(false);
  const [gymState, setGymState] = useState(false);
  const [playgroundState, setPlaygroundState] = useState(false);
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

  const handleSubmitForm = async () => {

    dispatch(setShowLoader(true));

    const data = {
      BHK: parseFloat(bhkRef.current.value),
      Size_in_SqFt: parseFloat(sizeRef.current.value),
      Price_per_SqFt: parseFloat(priceSizeRef.current.value),
      Furnished_Status: furnishedRef.current.value,
      Floor_No: parseFloat(floorNoRef.current.value),
      Total_Floors: parseFloat(totalFloorsRef.current.value),
      Age_of_Property: parseFloat(ageofPropertyRef.current.value),
      Nearby_Schools: parseFloat(nearbySchoolsRef.current.value),
      Nearby_Hospitals: parseFloat(nearbyHospitalsRef.current.value),
      Public_Transport_Accessibility: publicTransportAccessibilityRef.current.value,
      Parking_Space: parkingSpaceRef.current.value,
      Security: securityRef.current.value,
      Availability_Status: availabilityStatusRef.current.value,
      state: stateRef.current.value,
      city: cityRef.current.value,
      property_Type: propertyTypeRef.current.value,
      owner_Type: ownerTypeRef.current.value,
      Amenities: getAmenities(),
    }

    dispatch(setData(data));

    try{
      const response = await axios.post("https://homesage-api.onrender.com/india/predict",data);
      dispatch(setResultStatus(true));
      dispatch(setResultMsg(`₹ ${response.data.price.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`));
      dispatch(setShowResult(true));
    } catch (error) {
      dispatch(setResultStatus(false));
      if(error.response.status == 422){
        dispatch(setResultMsg(`${error.response.data.detail[0].ctx}  ${error.response.data.detail[0].input}`));
        dispatch(setShowResult(true));
      } else if(error.response.status == 400){
        dispatch(setResultMsg(error.response.data.detail["Invalid Request"]));
        dispatch(setShowResult(true));
      }
      else{
        dispatch(setResultMsg("Something Went Wrong"));
        dispatch(setShowResult(true));
      }
    }
  }

  // useEffect(()=>{
  //   inputData.Amenities.forEach((items)=>{
  //     if(items === "Clubhouse"){

  //   }
  //   if(items === "Garden"){
  //       result.push("Garden");
  //   }
  //   if(items === "Gym"){
  //       result.push("Gym");
  //   }
  //   if(items === "Playground"){
  //       result.push("Playground");
  //   }
  //   if(items === "Pool"){
  //       result.push("Pool");
  //   }
  //   })
  // },[])

  return ( 
    <div ref={pageRef} className='w-full h-full bg-emreald-200 overflow-y-scroll'>
      <div className='w-full h-full lg:grid lg:grid-cols-5 lg:grid-rows-5 p-5'>
      <div className='w-full p-5'>
        <label htmlFor="BHK" className="block mb-2 text-sm font-medium text-gray-900 text-[min(5vw,20px)]">BHK</label>
        <input ref={bhkRef} defaultValue={inputData.BHK ?? " "} type="number" id="BHK" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="BHK" />        
      </div>
      <div className='w-full p-5'>
        <label htmlFor="Size" className="block mb-2 text-sm font-medium text-gray-900 text-[min(5vw,20px)]">Size in Sq.ft</label>
        <input ref={sizeRef} defaultValue={inputData.Size_in_SqFt} type="number" id="Size" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Size in Sq.ft" />        
      </div>
      <div className='w-full p-5'>
        <label htmlFor="PricePerSize" className="block mb-2 text-sm font-medium text-gray-900 text-[min(5vw,20px)]">Price per SqFt</label>
        <input ref={priceSizeRef}  defaultValue={inputData.Price_per_SqFt} type="number" id="PricePerSize" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Price per SqFt" />        
      </div>

      <div className='w-full p-5'>
        <label htmlFor="Furnished Status" className="block mb-2 font-medium text-gray-900 text-[min(5vw,20px)]">Furnished Status</label>
        <select ref={furnishedRef}  id="Furnished Status" defaultValue={inputData.Furnished_Status} className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 text-[min(5vw,20px)]">
          <option value={"null"} >Choose a Status</option>
          <option value="Unfurnished">Unfurnished</option>
          <option value="Semi-furnished">Semi furnished</option>
          <option value="Furnished">Furnished</option>
        </select>
      </div>  

      <div className='w-full p-5'>
        <label htmlFor="state" className="block mb-2 font-medium text-gray-900 text-[min(5vw,20px)]">State</label>
        <select ref={stateRef} defaultValue={inputData.state}  id="state" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 text-[min(5vw,20px)]">
        <option value={"null"} >Choose a state</option>
        {state.map(state => <option key={state} value={state}>{state}</option>)}
        </select>
      </div>  

      <div className='w-full p-5'>
        <label htmlFor="floor_No" className="block mb-2 text-sm font-medium text-gray-900 text-[min(5vw,20px)]">Floor No</label>
        <input ref={floorNoRef} defaultValue={inputData.Floor_No} type="number" id="floor_No" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Floor No" />        
      </div>
      <div className='w-full p-5'>
        <label htmlFor="total_Floors" className="block mb-2 text-sm font-medium text-gray-900 text-[min(5vw,20px)]">Total Floors</label>
        <input ref={totalFloorsRef} defaultValue={inputData.Total_Floors} type="number" id="total_Floors" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Total Floors" />        
      </div>
      <div className='w-full p-5'>
        <label htmlFor="age_of_Property" className="block mb-2 text-sm font-medium text-gray-900 text-[min(5vw,20px)]">Age of Property</label>
        <input ref={ageofPropertyRef}  defaultValue={inputData.Age_of_Property} type="number" id="age_of_Property" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Age of Property" />        
      </div>

      <div className='w-full p-5'>
        <label htmlFor="availability_Status" className="block mb-2 font-medium text-gray-900 text-[min(5vw,20px)]">Availability Status</label>
        <select ref={availabilityStatusRef} id="availability_Status" defaultValue={inputData.Availability_Status} className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 text-[min(5vw,20px)]">
          <option value={"null"} >Choose the Availability</option>
          <option value="Under-Construction">"Under Construction"</option>
          <option value="Ready-to-Move">Ready to Move</option>
          <option value="High">High</option>
        </select>
      </div>  

      <div className='w-full p-5'>
        <label htmlFor="city" className="block mb-2 font-medium text-gray-900 text-[min(5vw,20px)]">City</label>
        <select ref={cityRef} defaultValue={inputData.city} id="city" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 text-[min(5vw,20px)]">
        <option value={"null"} >Choose a city</option>
        {city.map(city => <option key={city} value={city}>{city}</option>)}
        </select>
      </div>  

      <div className='w-full p-5'>
        <label htmlFor="nearby_Schools" className="block mb-2 text-sm font-medium text-gray-900 text-[min(5vw,20px)]">Nearby Schools</label>
        <input ref={nearbySchoolsRef} defaultValue={inputData.Nearby_Schools} type="number" id="nearby_Schools" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Nearby Schools" />        
      </div>
      <div className='w-full p-5'>
        <label htmlFor="nearby_Hospitals" className="block mb-2 text-sm font-medium text-gray-900 text-[min(5vw,20px)]">Nearby Hospitals</label>
        <input ref={nearbyHospitalsRef} defaultValue={inputData.Nearby_Hospitals} type="number" id="nearby_Hospitals" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Nearby Hospitals" />        
      </div>

      <div className='w-full p-5'>
        <label htmlFor="parking_Space" className="block mb-2 font-medium text-gray-900 text-[min(5vw,20px)]">Parking Space</label>
        <select ref={parkingSpaceRef} id="parking_Space" defaultValue={inputData.Parking_Space} className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 text-[min(5vw,20px)]">
          <option value={"null"} >Choose</option>
          <option value="No">No</option> 
          <option value="Yes">Yes</option>
        </select>
      </div>  
      <div className='w-full p-5'>
        <label htmlFor="property_Type" className="block mb-2 font-medium text-gray-900 text-[min(5vw,20px)]">Property Type</label>
        <select ref={propertyTypeRef} id="property_Type" defaultValue={inputData.property_Type} className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 text-[min(5vw,20px)]">
          <option value={"null"} >Choose a Property Type</option>
          <option value="Apartment">Apartment</option>
          <option value="Independent-House">Independent House</option>
          <option value="Villa">Villa</option>
        </select>
      </div>  
      <div className='w-full p-5'>
        <label htmlFor="public_Transport_Accessibility" className="block mb-2 font-medium text-gray-900 text-[min(5vw,20px)]">Public Transport Accessibility</label>
        <select ref={publicTransportAccessibilityRef} id="public_Transport_Accessibility" defaultValue={inputData.Public_Transport_Accessibility} className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 text-[min(5vw,20px)]">
          <option value="null">Select Option</option>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
      </div>  
      <div className='w-full p-5'>
        <label htmlFor="security" className="block mb-2 font-medium text-gray-900 text-[min(5vw,20px)]">Security</label>
        <select ref={securityRef} id="security" defaultValue={inputData.Security} className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 text-[min(5vw,20px)]">
          <option value={"null"} >Choose</option>
          <option value="No">No</option>
          <option value="Yes">Yes</option>
        </select>
      </div>  
      <div className='w-full p-5'>
        <label htmlFor="owner_Type" className="block mb-2 font-medium text-gray-900 text-[min(5vw,20px)]">Owner Type</label>
        <select ref={ownerTypeRef} id="owner_Type" defaultValue={inputData.owner_Type} className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 text-[min(5vw,20px)]">
          <option value={"null"} >Choose Owner Type</option>
          <option value="Builder">Builder</option>
          <option value="Owner">Owner</option>
          <option value="Broker">Broker</option>
        </select>
      </div> 

      <div className="w-full flex items-end mb-4">
        <div  className='w-full h-10 flex justify-center items-center'>
          <h1 htmlFor="default-checkbox" id='amenities' className="ms-2 text-[min(5vw,35px)] font-medium text-gray-900">Amenities</h1>
        </div>
        <div className='w-full h-10 flex justify-center items-center'>
          <input onChange={handleCheckboxChange} defaultChecked={clubhouseState} htmlFor="clubhouse" id="Clubhouse" type="checkbox" className=" w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 "/>
          <h1 htmlFor="default-checkbox" id='clubhouse' className="ms-2 text-[min(5vw,20px)] font-medium text-gray-900">Clubhouse</h1>
        </div>
      </div>
      <div className="w-full flex items-end mb-4">
        <div className='w-full h-10 flex justify-center items-center'>
          <input onChange={handleCheckboxChange} defaultChecked={gardenState} htmlFor="garden" id="Garden" type="checkbox" value="" className=" w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 "/>
          <h1 htmlFor="default-checkbox" id='garden' className="ms-2 text-[min(5vw,20px)] font-medium text-gray-900">Garden</h1>
        </div>
        <div className='w-full h-10 flex justify-center items-center'>
          <input onChange={handleCheckboxChange} defaultChecked={gymState} htmlFor="gym" id="Gym" type="checkbox" value="" className=" w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 "/>
          <h1 htmlFor="default-checkbox" id='gym' className="ms-2 text-[min(5vw,20px)] font-medium text-gray-900">Gym</h1>
        </div>
      </div>
      <div className="w-full flex items-end mb-4">
        <div className='w-full h-10 flex justify-center items-center'>
          <input onChange={handleCheckboxChange} defaultChecked={playgroundState} htmlFor="playground" id="Playground" type="checkbox" value="" className=" w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 "/>
          <h1 htmlFor="default-checkbox" id='playground' className="ms-2 text-[min(5vw,20px)] font-medium text-gray-900">Playground</h1>
        </div>
        <div className='w-full h-10 flex justify-center items-center'>
          <input onChange={handleCheckboxChange} defaultChecked={poolState} htmlFor="pool" id="Pool" type="checkbox" value="" className=" w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 "/>
          <h1 htmlFor="default-checkbox" id='pool' className="ms-2 text-[min(5vw,20px)] font-medium text-gray-900">Pool</h1>
        </div>
      </div>

      <div className='w-full h-auto flex justify-center items-center col-span-5'>
        <button onClick={handleSubmitForm} className='w-60 h-13 bg-emerald-300 rounded-xl text-[min(10vw,35px)] hover:bg-emerald-400'>Predict</button>
      </div>
      
      </div>


    </div>
  )
}

export default IndiaPredicitonPage
