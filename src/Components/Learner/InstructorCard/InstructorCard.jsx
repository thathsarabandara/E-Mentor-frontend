import React from 'react'
import { FiStar } from 'react-icons/fi'
import { PiStudent } from 'react-icons/pi'

function InstructorCard({instructor}) {
    return (
        <div>
          <a href={instructor.link} className=''>
            <div className='flex flex-col justify-start items-center hover:drop-shadow-lg'>
              <div className='w-64 h-64 overflow-hidden'>
                <img className='transform transition duration-300 ease-in-out hover:scale-110' src={instructor.image} alt={instructor.name} />
              </div>
              <div className='flex flex-col justify-between items-center w-64 h-28 border-2'>
                <div className='flex flex-col justify-start items-center'>
                  <p className='text-lg font-inter'>{instructor.name}</p>
                  <p className='text-sm text-gray-500'>{instructor.role}</p>
                </div>
                <div className='flex justify-between items-center border-t-2 w-64 py-2'>
                  <div className='flex justify-start items-center px-4'>
                    <FiStar className='text-orange-500' />
                    <p className='mx-2 font-inter text-sm'>{instructor.rating}</p>
                  </div>
                  <div className='flex justify-start items-center'>
                    <PiStudent className='text-blue-500 mx-1'/>
                    <p className='text-sm font-inter text-gray-600 mx-1'>{instructor.students}</p>
                    <p className='text-sm font-inter text-gray-500 mr-2'>students</p>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>
    );
}

export default InstructorCard