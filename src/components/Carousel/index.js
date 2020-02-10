import React from 'react';

function Carousel() {
  return (
    <>
      <div className="m-5 mx-auto p-16 bg-gray-200">
        <div
          className="relative rounded-lg block md:flex items-center bg-gray-100 shadow-xl"
          style={{minHeight: '19rem'}}
        >
          <div
            className="relative w-full md:w-2/5 h-full overflow-hidden rounded-t-lg md:rounded-t-none md:rounded-l-lg"
            style={{minHeight: '19rem'}}
          >
            <div className="absolute inset-0 w-full h-full flex items-center justify-center fill-current text-white"></div>
          </div>
          <div className="absolute inset-0 w-full h-full bg-indigo-900 opacity-75"></div>
            <button className="absolute top-0 mt-32 left-0 bg-white rounded-full shadow-md h-12 w-12 text-2xl text-indigo-600 hover:text-indigo-400 focus:text-indigo-400 -ml-6 focus:outline-none focus:shadow-outline"></button>
            <button className="absolute top-0 mt-32 right-0 bg-white rounded-full shadow-md h-12 w-12 text-2xl text-indigo-600 hover:text-indigo-400 focus:text-indigo-400 -mr-6 focus:outline-none focus:shadow-outline"></button>
        </div>
      </div>
    </>
  );
}

export default Carousel;
