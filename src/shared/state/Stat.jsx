import React from 'react';

const Stat = () => {
    return (
        <div className='my-20'>

            <h1 className="xl:text-5xl md:text-4xl text-2xl font-semibold leading-tight text-center text-gray-800 sm:mb-0 mb-12">
            How to sell my bike? List your old bike for free and get best price of your second hand bike.80% of our seller's products have a 90% chance of selling within 1 week
            </h1>
            <div className="md:mt-14 mt-4 relative sm:flex items-center justify-center">
                <img src="https://i.ibb.co/KjrPCyW/map.png" alt="" className="w-full xl:h-full h-96 object-cover object-fill sm:block hidden" />
                <img src="https://i.ibb.co/SXKj9Mf/map-bg.png" alt="" className="sm:hidden -mt-10 block w-full h-96 object-cover object-fill absolute z-0" />


                <div className="shadow-lg xl:p-6 p-4 sm:w-auto w-full bg-white sm:absolute relative z-20  mt-4 left-0 xl:ml-56 sm:ml-12 xl:-mt-40 sm:-mt-12">
                    <p className="text-3xl font-semibold text-gray-800">20K+</p>
                    <p className="text-base leading-4 xl:mt-4 mt-2 text-gray-600">Recently Property Listed</p>
                </div>
                <div className="shadow-lg xl:p-6 p-4  sm:w-auto w-full bg-white sm:absolute relative z-20  mt-4 xl:mt-80 sm:mt-56 xl:-ml-0 sm:-ml-12">
                    <p className="text-3xl font-semibold text-gray-800">8K+</p>
                    <p className="text-base leading-4 xl:mt-4 mt-2 text-gray-600">Active Listening</p>
                </div>
                <div className="shadow-lg xl:p-6 p-4 sm:w-auto w-full bg-white sm:absolute relative z-20 md:mt-0 sm:-mt-5 mt-4 right-0 xl:mr-56 sm:mr-24">
                    <p className="text-3xl font-semibold text-gray-800">15K+</p>
                    <p className="text-base leading-4 xl:mt-4 mt-2 text-gray-600">Recently Sold Lands</p>
                </div>

            </div>
        </div>
    );
};

export default Stat;