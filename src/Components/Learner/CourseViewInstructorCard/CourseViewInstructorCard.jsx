import React from 'react';
import instrucor from '../../../assets/images/instructor/instructor1.png';
import { FaStar } from 'react-icons/fa';
import { PiStudent } from 'react-icons/pi';
import { GoVideo } from 'react-icons/go';

function CourseViewInstructorCard() {
  return (
    <div className='flex flex-col lg:flex-row justify-center items-start font-inter border px-6 py-5 w-full max-w-7xl'>
        <div className='w-32 sm:w-40 md:w-56 lg:w-72 rounded-full overflow-hidden mr-0 lg:mr-6 mb-4 lg:mb-0'>
            <img className='transform transition duration-300 ease-in-out hover:scale-110' src={instrucor} alt='instructor-image' />
        </div>

        <div className='flex flex-col justify-start items-start'>
            <div className='flex flex-col'>
                <p className='font-bold text-lg'>
                    Nima Tahami
                </p>
                <p className='text-sm text-gray-500'>
                    Entrepreneur & Designer • Founder of ShiftRide
                </p>
            </div>

            <div className='flex flex-wrap justify-start items-start mt-3'>
                <div className='flex justify-center items-center space-x-2 text-sm mr-6 mb-2'>
                    <FaStar className='text-orange-500'/>
                    <p className='font-bold'>
                        4.6
                    </p>
                    <p className='text-gray-700'>
                        Rating
                    </p>
                </div>
                <div className='flex justify-center items-center space-x-2 text-sm mr-6 mb-2'>
                    <PiStudent className='text-blue-500'/>
                    <p className='font-bold'>
                        5,342
                    </p>
                    <p className='text-gray-700'>
                        Students
                    </p>
                </div>
                <div className='flex justify-center items-center space-x-2 text-sm mb-2'>
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
                    One day Vako had enough with the 9-to-5 grind, or more like 9-to-9 in his case, and quit his job, or
                    more like got himself fired from his own startup. He decided to work on his dream: be his own boss, 
                    travel the world, only do the work he enjoyed...
                </p>
            </div>
        </div>
    </div>
  );
}

export default CourseViewInstructorCard;
