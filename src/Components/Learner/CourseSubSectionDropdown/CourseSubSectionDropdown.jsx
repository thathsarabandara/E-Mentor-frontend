import React, { useState } from 'react';
import { BsFiletypePdf } from 'react-icons/bs';
import { CiClock2 } from 'react-icons/ci';
import { FaRegFolderOpen } from 'react-icons/fa';
import { PiVideo } from 'react-icons/pi';
import { RiArrowDropDownLine, RiArrowDropUpLine, RiVideoFill } from 'react-icons/ri';

function CourseSubSectionDropdown() {
    const [isOpen, setOpen] = useState(false);
    const [isVideo, setVideo] = useState(true);

    return (
        <div className='flex flex-col justify-center items-center w-full'>
            <button
                className='flex justify-between items-center border px-6 py-4 w-full max-w-2xl sm:px-8'
                onClick={() => setOpen(!isOpen)}
            >
                <div className='flex items-center text-orange-500'>
                    {isOpen ? (
                        <RiArrowDropUpLine className='mr-3 text-xl' />
                    ) : (
                        <RiArrowDropDownLine className='mr-3 text-xl' />
                    )}
                    Getting Started
                </div>
                <div className='flex items-center space-x-3 text-sm text-gray-600 hidden sm:flex'>
                    <div className='flex items-center'>
                        <FaRegFolderOpen className='text-orange-500' />
                        <p className='ml-2'>6 Contents</p>
                    </div>
                    <div className='flex items-center'>
                        <PiVideo className='text-purple-500' />
                        <p className='ml-2'>4 lectures</p>
                    </div>
                    <div className='flex items-center'>
                        <CiClock2 className='text-orange-500' />
                        <p className='ml-2'>1h 37m</p>
                    </div>
                </div>
            </button>

            {isOpen && (
                <div className='flex flex-col justify-center items-start w-full max-w-2xl border sm:px-6'>
                    {["What’s Webflow?", "Sign up in Webflow"].map((title, index) => (
                        <div key={index} className='flex justify-start items-center py-3 px-8 sm:px-10 w-full'>
                            {isVideo ? (
                                <RiVideoFill className='mr-3' />
                            ) : (
                                <BsFiletypePdf className='mr-3' />
                            )}
                            <p className='text-sm text-gray-700'>{title}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default CourseSubSectionDropdown;
