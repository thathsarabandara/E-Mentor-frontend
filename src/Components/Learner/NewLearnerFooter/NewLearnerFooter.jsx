import React from 'react'

function NewLearnerFooter() {
  return (
    <>
        <div className='flex flex-col lg:flex-row justify-center items-center bg-gray-800 py-16 border-b-2'>
            <div className='flex flex-col justify-center items-center md:items-start'>
                <div className='flex flex-col justify-center items-center md:w-7/12'>
                    <p className='text-white font-inter text-xl md:text-2xl ml-6 md:ml-0' >
                    Start learning with 67.1k students around the world.
                    </p>
                </div>
                <div className='flex justify-center items-center py-4'>
                    <a href='/' className='text-white text-sm px-6 py-2 bg-orange-600 mr-4 transform tarnsition duration easy-in-out hover:scale-110'>
                        Join the Family
                    </a>
                    <a href='/' className='text-white text-sm px-6 py-2 bg-gray-600 transform tarnsition duration easy-in-out hover:scale-110'>
                        Browse all courses
                    </a>
                </div>
            </div>
            <div className='flex flex-col md:flex-row justify-center items-start md:items-center mt-7'>
                <div className='flex flex-col justify-center items-start mx-8 mb-5'>
                    <p className='text-white text-3xl font-inter'>6.3k</p>
                    <p className='text-gray-400 text-sm font-inter'>Online courses</p>
                </div>
                <div className='flex flex-col justify-center items-start mx-8 mb-5'>
                    <p className='text-white text-3xl font-inter'>26k</p>
                    <p className='text-gray-400 text-sm font-inter'>Certified Instructor</p>
                </div>
                <div className='flex flex-col justify-center items-start mx-8 mb-5'>
                    <p className='text-white text-3xl font-inter'>99.9%</p>
                    <p className='text-gray-400 text-sm font-inter'>Sucess Rate</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default NewLearnerFooter