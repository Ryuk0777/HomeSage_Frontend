import React from 'react';

const Loader = () => {
  return (
    <div className="h-full w-full bg-slate-200 flex justify-center items-center">
      <div className="flex space-x-4">
        <div className="w-4 h-4 bg-black rounded-full animate-bounce [animation-delay:0s]"></div>
        <div className="w-4 h-4 bg-black rounded-full animate-bounce [animation-delay:0.2s]"></div>
        <div className="w-4 h-4 bg-black rounded-full animate-bounce [animation-delay:0.4s]"></div>
      </div>
    </div>
  );
};

export default Loader;
