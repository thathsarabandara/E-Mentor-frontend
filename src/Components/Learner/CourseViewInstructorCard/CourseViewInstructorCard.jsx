import React from 'react'
import instrucor from '../../../assets/images/instructor/instructor1.png'
import { FaStar } from 'react-icons/fa'
import { PiStudent } from 'react-icons/pi'
import { GoVideo } from 'react-icons/go'

function CourseViewInstructorCard() {
  return (
    <div className='flex justify-center items-start font-inter border px-6 py-5 w-12/12'>
        <div className='w-72 rounded-full overflow-hidden mr-6'>
            <img className='transfrom transition duration-300 easy-in-out hover:scale-110' src={instrucor} alt='instructor-image' />
        </div>
        <div className='flex flex-col justify-center items-start'>
            <div className='flex flex-col'>
                <p className='font-bold'>
                    Nima Tahami
                </p>
                <p className='text-sm text-gray-500'>
                    Entrepreneur & Designer • Founder of ShiftRide
                </p>
            </div>
            <div className='flex justify-center items-start mt-3'>
                <div className='flex justify-center items-center space-x-2 text-sm mr-8'>
                    <FaStar className='text-orange-500'/>
                    <p className='font-bold'>
                        4.6
                    </p>
                    <p className='text-gray-700'>
                        Students
                    </p>
                </div>
                <div className='flex justify-center items-center space-x-2 text-sm mr-8'>
                    <PiStudent className='text-blue-500'/>
                    <p className='font-bold'>
                        5,342
                    </p>
                    <p className='text-gray-700'>
                        Course rating
                    </p>
                </div>
                <div className='flex justify-center items-center space-x-2 text-sm'>
                    <GoVideo className='text-orange-500'/>
                    <p className='font-bold'>
                        01
                    </p>
                    <p className='text-gray-700'>
                        Courses
                    </p>
                </div>
            </div>
            <div className='w-full mt-5'>
                <p className='text-sm text-gray-500'>
                    One day Vako had enough with the 9-to-5 grind, 
                    or more like 9-to-9 in his case, and quit his job, or
                     more like got himself fired from his own startup. He decided to work on 
                     his dream: be his own boss, travel the world, only do the work he enjoyed...
                </p>
            </div>
        </div>
    </div>
  )
}

export default CourseViewInstructorCard