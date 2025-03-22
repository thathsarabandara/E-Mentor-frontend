import React, { useState } from 'react'
import { BsFiletypePdf } from 'react-icons/bs';
import { CiClock2 } from 'react-icons/ci';
import { FaRegFolderOpen } from 'react-icons/fa';
import { PiVideo } from 'react-icons/pi';
import { RiArrowDropDownLine, RiArrowDropUpLine, RiVideoFill } from 'react-icons/ri';

function CourseSubSectionDropdown() {
    const [isOpen, setOpen] = useState(false);
    const [isVideo, setVideo] = useState(true);

  return (
    <div className='flex flex-col justify-center items-center'>
        <button
         className='flex justify-between items-center border px-8 py-4'
         onClick={()=>setOpen(!isOpen)}
        >
            <div className='flex justify-between items-center mr-96  text-orange-500'>
                {isOpen? (
                    <RiArrowDropUpLine className='mr-3 text-xl' />
                ):(
                    <RiArrowDropDownLine className='mr-3 text-xl' />
                )}
                Getting Started
            </div>
            <div className='flex justify-center items-center'>
                <div className='flex justify-center items-center text-sm mr-3'>
                    <FaRegFolderOpen className='text-orange-500' />
                    <p className='ml-2 text-gray-600'>
                        6 Contents
                    </p>
                </div>
                <div className='flex justify-center items-center text-sm mr-3'>
                    <PiVideo className='text-purple-500' />
                    <p className='ml-2 text-gray-600'>
                        4 lectures
                    </p>
                </div>
                <div className='flex justify-center items-center text-sm mr-3'>
                    <CiClock2 className='text-orange-500' />
                    <p className='ml-2 text-gray-600'>
                        1h 37m
                    </p>
                </div>
            </div>
        </button>
        {isOpen && (
            <div className='flex flex-col justify-center items-start w-10/12 border'>
                <div className='flex justify-start items-center py-3 px-10'>
                    {isVideo? (
                        <RiVideoFill className='mr-3' />
                    ):(
                        <BsFiletypePdf className='mr-3' />
                    )}
                    <p className='text-sm text-gray-700'>
                        What’s is Webflow?
                    </p>
                </div>
                <div className='flex justify-start items-center py-2 px-10'>
                    {isVideo? (
                        <RiVideoFill className='mr-3' />
                    ):(
                        <BsFiletypePdf className='mr-3' />
                    )}
                    <p className='text-sm text-gray-700'>
                        Sign up in Webflow
                    </p>
                </div>
            </div>
        )}
    </div>
  )
}

export default CourseSubSectionDropdown