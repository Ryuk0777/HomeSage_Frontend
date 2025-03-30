import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import { navigatToPage } from "../redux/predicitonPage/predictionPageSlice";
import { toggleSidebarState } from '../redux/sidebar/siderbarSlice';

const CountryTab = ({src, title}) => {

    const dispatch = useDispatch();

  return (
    <>
      <button onClick={()=> {dispatch(navigatToPage(title)); dispatch(toggleSidebarState())}} className='w-full h-[12vh] bg-slate-200 border border-white flex items-center gap-x-10 px-2 hover:bg-slate-300'>
        <img src={src} alt="" className='w-15 h-15 rounded-full' />
        <h1 className='text-[min(8vw,40px)]' >{title}</h1>
      </button>
    </>
  )
}

export default CountryTab
