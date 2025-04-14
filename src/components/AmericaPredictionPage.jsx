import React, {useRef, useEffect} from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { useDispatch, useSelector } from 'react-redux'
import { setResultMsg, setResultStatus, setShowResult, setShowLoader, setData } from '../redux/result/resultSlice';
import axios from 'axios'

const AmericaPredictionPage = () => {

  const pageRef = useRef();

  const zipCodeRef = useRef();
  const bedroomsRef = useRef();
  const bathroomsRef = useRef();
  const livingSpaceRef = useRef();
  const zipCodePopulationRef = useRef();
  const zipCodeDensityRef = useRef();
  const medianHouseholdIncomeRef = useRef();

  const dispatch = useDispatch();
  const inputData = useSelector(state => state.result.data);

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
      Zip_Code: parseFloat(zipCodeRef.current.value),
      Beds: parseFloat(bedroomsRef.current.value),
      Baths: parseFloat(bathroomsRef.current.value),
      Living_Space: parseFloat(livingSpaceRef.current.value),
      Zip_Code_Population: parseFloat(zipCodePopulationRef.current.value),
      Zip_Code_Density: parseFloat(zipCodeDensityRef.current.value),
      Median_Household_Income: parseFloat(medianHouseholdIncomeRef.current.value),
    }

    dispatch(setData(data));

    try{
      const response = await axios.post("https://homesage-api.onrender.com/america/predict",data);
      dispatch(setResultStatus(true));
      dispatch(setResultMsg(`$ ${response.data.price.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`));
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
    <div ref={pageRef} className='w-full h-full  overflow-y-scroll z-0'>
       <div className='w-full h-full lg:grid lg:grid-cols-3 lg:grid-rows-4 p-5'>

        <div className='w-full p-5'>
          <label htmlFor="ZipCode" className="block mb-2 text-sm font-medium text-gray-900 text-[min(5vw,20px)]">Zip Code</label>
          <input ref={zipCodeRef} defaultValue={inputData.Zip_Code} type="number" id="ZipCode" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Zip Code" required />        
        </div>
        <div className='w-full p-5'>
          <label htmlFor="Bedrooms" className="block mb-2 text-sm font-medium text-gray-900 text-[min(5vw,20px)]">Bedrooms</label>
          <input ref={bedroomsRef} defaultValue={inputData.Beds} type="number" id="Bedrooms" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Bedrooms" required />        
        </div>
        <div className='w-full p-5'>
          <label htmlFor="Bathrooms" className="block mb-2 text-sm font-medium text-gray-900 text-[min(5vw,20px)]">Bathrooms</label>
          <input ref={bathroomsRef} defaultValue={inputData.Baths} type="number" id="Bathrooms" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Bathrooms" required />        
        </div>
        <div className='w-full p-5'>
          <label htmlFor="LivingSpace" className="block mb-2 text-sm font-medium text-gray-900 text-[min(5vw,20px)]">Living Space</label>
          <input ref={livingSpaceRef} defaultValue={inputData.Living_Space} type="number" id="LivingSpace" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Living Space" required />        
        </div>
        <div className='w-full p-5'>
          <label htmlFor="ZipCodePopulation" className="block mb-2 text-sm font-medium text-gray-900 text-[min(5vw,20px)]">Zip Code Population</label>
          <input ref={zipCodePopulationRef} defaultValue={inputData.Zip_Code_Population} type="number" id="ZipCodePopulation" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Zip Code Population" required />        
        </div>
        <div className='w-full p-5'>
          <label htmlFor="ZipCodeDensity" className="block mb-2 text-sm font-medium text-gray-900 text-[min(5vw,20px)]">Zip Code Density</label>
          <input ref={zipCodeDensityRef} defaultValue={inputData.Zip_Code_Density} type="number" id="ZipCodeDensity" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Zip Code Density" required />        
        </div>
        <div className='w-full p-5'>
          <label htmlFor="MedianHouseholdIncome" className="block mb-2 text-sm font-medium text-gray-900 text-[min(5vw,20px)]">Median Household Income</label>
          <input ref={medianHouseholdIncomeRef} defaultValue={inputData.Median_Household_Income} type="number" id="MedianHouseholdIncome" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Median Household Income" required />        
        </div>

        <div className='w-full h-auto flex justify-center items-center col-span-3'>
        <button onClick={handleSubmitForm} className='w-60 h-13 bg-emerald-300 rounded-xl text-[min(10vw,35px)] hover:bg-emerald-400'>Predict</button>
        </div>
              
        </div>
    </div>
  )
}

export default AmericaPredictionPage