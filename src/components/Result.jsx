import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setShowResult, setShowLoader} from '../redux/result/resultSlice';


const Result = () => {

    const dispatch = useDispatch();
    const resultStatus = useSelector(state => state.result.resultStatus);
    const resultMsg = useSelector(state => state.result.resultMsg);


    if(resultStatus){
        return(
            <div className='h-full w-full bg-green-200 text-[min(15vw,100px)] font-bold'>
                <div className='h-[10%] w-full flex justify-end items-center px-2'>
                    <button onClick={()=> {dispatch(setShowResult(false)); dispatch(setShowLoader(false))}} className='hover:opacity-45'><img src="/images/close.png" alt="close" className='w-10 h-10' /></button>
                </div>
                <div className='h-[75%] lg:h-[85%] w-full flex justify-center items-center'>
                    <h1>{resultMsg}</h1>
                </div>
            </div>
        )
    } else if(!resultStatus){        
        return (
          <div className='h-full w-full bg-red-200 text-[min(15vw,100px)] font-bold'>
            <div className='h-[10%] w-full flex justify-end items-center px-2'>
                <button onClick={()=> {dispatch(setShowResult(false)); dispatch(setShowLoader(false))}} className='hover:opacity-45'><img src="/images/close.png" alt="close" className='w-10 h-10' /></button>
            </div>
            <div className='h-[75%] lg:h-[85%] w-full flex flex-col justify-center items-center'>
                <img src="/images/error.png" alt="error" className='w-30 h-30 lg:w-48 lg:h-48'/>
                <h1>{resultMsg}</h1>
            </div>
          </div>
        )
    }

}

export default Result