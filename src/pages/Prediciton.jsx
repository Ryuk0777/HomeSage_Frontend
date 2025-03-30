import React from 'react'
import PredicitonPageLoader from '../components/PredicitonPageLoader'
import PredictionPageNavbar from '../components/PredictionPageNavbar'
import SideBar from '../components/SideBar'
import Cursor from '../components/Cursor'
import IndiaPredicitonPage from '../components/IndiaPredicitonPage'
import AmericaPredicitionPage from '../components/AmericaPredictionPage'
import MalaysiaPredicitionPage from '../components/MalaysiaPredictionPage'
import { useSelector } from 'react-redux'



const PredicitonPage = () =>{

  const activePage = useSelector(state => state.predictionPage.value);

  switch (activePage) {
    case 'India':
      return <IndiaPredicitonPage/>

    case 'Malaysia':
      return <MalaysiaPredicitionPage /> 

    case 'America':
      return <AmericaPredicitionPage />

    default:
      break;
      // return <AmericaPredicitionPage /> 
  }
}


const Prediciton = () => {
  
  return (
    <>
    <SideBar />
    <div className='w-screen h-screen font-karantina'>
      <PredictionPageNavbar />
      <PredicitonPageLoader />
      <div className='w-full h-[85vh] flex bg-slate-200'>
        <PredicitonPage />
      </div>

    </div>
    </>
  )
}

export default Prediciton