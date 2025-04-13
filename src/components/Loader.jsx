import React from 'react'

const Loader = () => {
  return (
    <div className={`h-full w-full bg-slate-200 flex justify-center items-center`}>
         <div className="w-16 h-16 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin"></div>
    </div>
  )
}

export default Loader