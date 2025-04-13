import React from 'react'
import PredicitonPageLoader from '../components/PredicitonPageLoader'
import PredictionPageNavbar from '../components/PredictionPageNavbar'
import SideBar from '../components/SideBar'
import Cursor from '../components/Cursor'
import IndiaPredicitonPage from '../components/IndiaPredicitonPage'
import AmericaPredicitionPage from '../components/AmericaPredictionPage'
import MalaysiaPredicitionPage from '../components/MalaysiaPredictionPage'
import { useSelector } from 'react-redux'
import Result from '../components/Result'
import Loader from '../components/Loader'



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
  }
}


const PredicitonPageFinal = () =>{

  const showLoader = useSelector(state => state.result.showLoader);
  const showResult = useSelector(state => state.result.showResult);

  if(!showResult && showLoader){
    return <Loader/>
  }
  else if(showResult){
    return <Result />
  } 
  else if (!showResult && !showLoader){
    return <PredicitonPage />
  }
}


const Prediciton = () => {


  
  return (
    <>
    <SideBar />
    <div className='w-screen h-screen  font-karantina'>
      <PredictionPageNavbar />
      <PredicitonPageLoader />
      <div className='w-full h-[85vh] flex bg-slate-200'>
        <PredicitonPageFinal />
      </div>

    </div>
    </>
  )
}

export default Prediciton