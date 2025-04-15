import React, {useRef, useEffect} from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { useDispatch, useSelector } from 'react-redux'
import { setResultMsg, setResultStatus, setShowResult, setShowLoader, setData } from '../redux/result/resultSlice';
import axios from 'axios'

const MalaysiaPredictionPage = () => {

  const dispatch = useDispatch();
  const inputData = useSelector(state => state.result.data);

  
  const property_Types = ["Condominium", "Apartment", "Flat", "Serviced Residence",
    "Bungalow", "Semi-detached House", "Terrace House",
    "Cluster House", "Townhouse", "Residential Land", "Bungalow Land"];
    
    const pageRef = useRef()
    
    const roomsRef = useRef();
    const bathroomsRef = useRef();
    const carParkingRef = useRef();
    const sizeInSqftRef = useRef();
    const pricePerSqftRef = useRef();
    const propertyTypeRef = useRef();
    const furnishingRef = useRef();

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
      rooms: parseFloat(roomsRef.current.value),
      bathrooms: parseFloat(bathroomsRef.current.value),
      car_Parks: parseFloat(carParkingRef.current.value),
      size_in_sq_ft: parseFloat(sizeInSqftRef.current.value),
      property_type: propertyTypeRef.current.value,
      furnishing: furnishingRef.current.value,
      price_per_sqft: parseFloat(pricePerSqftRef.current.value),
    }

    dispatch(setData(data));

    try{
      const response = await axios.post("https://homesage-api.onrender.com/malaysia/predict",data);
      dispatch(setResultStatus(true));
      dispatch(setResultMsg(`RM ${response.data.price.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`));
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

  return (
    <div ref={pageRef} className='w-full h-full overflow-y-scroll'>
       <div className='w-full h-full lg:grid lg:grid-cols-3 lg:grid-rows-4 p-5'>

        <div className='w-full p-5'>
          <label htmlFor="Rooms" className="block mb-2 text-sm font-medium text-gray-900 text-[min(5vw,20px)]">Rooms</label>
          <input ref={roomsRef} defaultValue={inputData.rooms} type="number" id="Rooms" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Rooms" required />        
        </div>
        <div className='w-full p-5'>
          <label htmlFor="Bathrooms" className="block mb-2 text-sm font-medium text-gray-900 text-[min(5vw,20px)]">Bathrooms</label>
          <input ref={bathroomsRef} defaultValue={inputData.bathrooms} type="number"  id="Bathrooms" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Bathrooms" required />        
        </div>
        <div className='w-full p-5'>
          <label htmlFor="Parking" className="block mb-2 text-sm font-medium text-gray-900 text-[min(5vw,20px)]">Car Parking</label>
          <input ref={carParkingRef} defaultValue={inputData.car_Parks} type="number" id="Parking" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Car Parking" required />        
        </div>
        <div className='w-full p-5'>
          <label htmlFor="Size" className="block mb-2 text-sm font-medium text-gray-900 text-[min(5vw,20px)]">Size in sq.ft</label>
          <input ref={sizeInSqftRef} defaultValue={inputData.size_in_sq_ft} type="number" id="Size" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Size in sq.ft" required />        
        </div>
        <div className='w-full p-5'>
          <label htmlFor="PriceSize" className="block mb-2 text-sm font-medium text-gray-900 text-[min(5vw,20px)]">Price per sq.ft</label>
          <input ref={pricePerSqftRef} defaultValue={inputData.price_per_sqft} type="number" id="PriceSize" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Price per sq.ft" required />        
        </div>

        <div className='w-full p-5'>
        <label htmlFor="Property" className="block mb-2 font-medium text-gray-900 text-[min(5vw,20px)]">Property Type</label>
        <select ref={propertyTypeRef} id="Property" defaultValue={inputData.property_type} className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 text-[min(5vw,20px)]">
          <option value={"null"} >Choose Owner Type</option>
          {property_Types.map((type, index) => (
                        <option key={index} value={type}>{type}</option>
                    ))}
        </select>
        </div> 
        <div className='w-full p-5'>
        <label htmlFor="Furnishing" className="block mb-2 font-medium text-gray-900 text-[min(5vw,20px)]">Furnishing</label>
        <select ref={furnishingRef} id="Furnishing" defaultValue={inputData.furnishing} className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 text-[min(5vw,20px)]">
          <option value={"null"} >Choose the Furnishing</option>
          <option value="Fully Furnished">Fully Furnished</option>
          <option value="Partly Furnished">Partly Furnished</option>
          <option value="Unfurnished">Unfurnished</option>

        </select>
        </div> 

        <div className='w-full h-auto flex justify-center items-center col-span-3'>
        <button onClick={handleSubmitForm} className='w-60 h-13 bg-emerald-300 rounded-xl text-[min(10vw,35px)] hover:bg-emerald-400'>Predict</button>
        </div>
               
       </div>
    </div>
  )
}

export default MalaysiaPredictionPage

