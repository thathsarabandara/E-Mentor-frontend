import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'
import { IoLocationSharp } from 'react-icons/io5'
import { LuClipboardList } from 'react-icons/lu'
import { MdOutlineWorkOutline } from 'react-icons/md'

function JobCard({job}) {
  return (
    <>
        <div className='flex flex-col justify-center items-center bg-white hover:drop-shadow-lg'>
            <div className='flex flex-col justify-center items-start py-4 px-6 font-inter'>
                <div className='flex flex-col justify-center items-start border-b-2 py-3 pb-7'>
                    <p className='text-lg font-bold'>
                        {job.name}
                    </p>
                    <div className='flex justify-center items-center text-sm pt-2'>
                        <div className='flex justify-center items-center mr-4'>
                            <IoLocationSharp className='text-lg text-blue-700' />
                            <p className='text-gray-600 mx-1'>
                                {job.location}
                            </p>
                        </div>
                        <div className='flex justify-center items-center mr-4'>
                            <MdOutlineWorkOutline className='text-lg text-green-700' />
                            <p className='text-gray-600 mx-1'>
                                {job.type}
                            </p>
                        </div>
                        <div className='flex justify-center items-center mr-4'>
                            <LuClipboardList className='text-lg text-orange-700' />
                            <p className='text-gray-600 mx-1'>
                                {job.noofvacancy}
                            </p>
                        </div>
                    </div>
                </div>
                <div className='flex justify-between items-center text-sm py-3 pt-5'>
                    <div className='flex justify-center items-center'>
                        <p className='text-red-700 mr-1'>
                            Deadline:
                        </p>
                        <p className='text-gray-600'>
                            {job.deadline}
                        </p>
                    </div>
                    <div className='bg-orange-100 p-3 text-orange-700 ml-32 hover:border-2 border-orange-600 hover:bg-white'>
                        <FaArrowRightLong />
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default JobCard