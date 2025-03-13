import React from 'react'

function LocationCard({location}) {
  return (
    <>
        <div className='relative w-72 h-96 rounded-xl overflow-hidden shadow-lg transform transition duration-300 easy-in-out hover:scale-110'>
            <div 
                className='absolute inset-0 bg-cover bg-center'
                style={{backgroundImage: `url(${location.branchImage})`}}
            ></div>
            <div className='absolute inset-0 bg-black bg-opacity-50'></div>
            <div className='absolute inset-0 flex flex-col justify-center items-center text-white px-4 text-center mt-56'>
                <p className='font-inter text-xs'>
                    {location.type}
                </p>
                <p className='font-inter font-bold text-lg'>
                    {location.city}
                </p>
                <p className='font-inter text-xs w-36'>
                    {location.address}
                </p>
            </div>
        </div>
    </>
  )
}

export default LocationCard