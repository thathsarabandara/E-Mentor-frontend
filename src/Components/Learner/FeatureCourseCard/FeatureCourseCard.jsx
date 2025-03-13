import React from 'react'
import { CiStar } from 'react-icons/ci'
import { MdOutlineSignalCellularAlt } from 'react-icons/md'
import { PiStudent } from 'react-icons/pi'
import { FiClock } from 'react-icons/fi';

function FeatureCourseCard({ course }) {
    return (
      <a href={`${course.courseLink}`} className=''>
        <div className='flex justify-center items-center transform transition duration-300 ease-in-out hover:scale-105'>
          <div className='hidden md:block w-64 h-48 overflow-hidden object-cover'>
            <img src={course.image} alt='course' className='w-64 h-48 object-cover transform transition duration-300 ease-in-out hover:scale-110' />
          </div>
          <div className='flex flex-col justify-between items-start h-48 w-80 md:w-96 p-3 bg-white border-2 border-gray-300 hover:bg-orange-50'>
            <div className='flex flex-col justify-between items-start'>
              <div className='flex justify-between items-center mb-4'>
                <div className={`flex border-2 w-32 md:w-36 h-7 overflow-hidden mr-16 bg-${course.color}-200 justify-center items-center`} >
                    <p className={`py-1 px-2 text-xs font-bold text-${course.color}-700 font-inter`}>{course.category}</p>
                </div>
                <div className='flex justify-center items-center md:ml-9'>
                  <p className='font-inter text-sm mx-2 text-black'>${course.price.toFixed(2)}</p>
                  <p className='font-inter text-xs text-gray-500 line-through'>${course.oldPrice.toFixed(2)}</p>
                </div>
              </div>
              <p className='text-black font-inter mx-2 text-sm w-80 h-5 overflow-hidden'>{course.title}</p>
              <div className='flex justify-center items-center my-3 pt-3'>
                <div className='flex justify-center items-center'>
                    <a href={`${course.instructorLink}`} className=' flex justify-center items-center hover:text-orange-600'>
                        <img src={course.instructor} alt='instructor' className='w-8 rounded-xl mx-1' />
                        <div className='h-7 w-32 md:w-44 overflow-hidden flex justify-start items-center ml-2'>
                            <p className='text-sm text-gray-400 hover:text-black'>{course.instructorName}</p>
                        </div>
                    </a>
                </div>
                <div className='flex justify-center items-center md:ml-12'>
                  <CiStar className='text-orange-800 mx-1' />
                  <p className='text-sm mx-1 font-bold text-inter'>{course.rating}</p>
                  <p className='text-sm mx-1 text-inter'>({Math.floor(Math.random() * 500000)})</p>
                </div>
              </div>
            </div>
            <div className='flex justify-center items-center md:mr-4 pt-3 border-t-2'>
              <div className='flex justify-center items-center'>
                <PiStudent className='text-blue-800' />
                <p className='text-sm text-bold mx-1 font-bold text-gray-500'>{course.students}</p>
                <p className='text-sm mx-1 text-inter text-gray-500'>students</p>
              </div>
              <div className='flex justify-center items-center mx-0.5 md:mx-5'>
                <MdOutlineSignalCellularAlt className='text-red-800' />
                <p className='flex justify-center items-center text-xs mx-0.5 md:mx-1 text-inter'>{course.level}</p>
              </div>
              <div className='flex justify-center items-center'>
                <FiClock className='text-green-700' />
                <p className='text-sm text-inter md:mx-1'>{course.duration}</p>
              </div>
            </div>
          </div>
        </div>
      </a>
    );
  }

export default FeatureCourseCard