import React, { useState } from 'react'
import student from '../../../../assets/images/student/profile.jpeg'
import { FaArrowRight } from 'react-icons/fa'

function Navbar() {
    const [isOpen, setOpen] = useState();
    
  return (
    <>
      <div className='flex flex-col justify-center items-center my-8'>
        <div className='relative w-full h-64 bg-orange-100'>
            <div className='absolute bottom-0 inset-x-72 w-/12 bg-white flex justify-start items-center py-3 pt-5 px-8 rounded-t-lg'>
                <div className='w-24 h-24 rounded-full overflow-hidden'>
                    <img className='transform transition duration-300 easy-in-out hover:scale-125' src={student} alt='' />
                </div>
                <div className='flex flex-col justify-center items-start ml-12 font-inter mr-36'>
                    <p className='text-xl font-bold'>
                        Kevin Gilbert
                    </p>
                    <p className='text-sm text-gray-600'>
                        Web Designer & Best-Selling Instructor
                    </p>
                </div>
                <a href='/' className='ml-96 flex justify-center items-center bg-orange-100 py-4 px-5 font-inter text-orange-500 text-sm'>
                    Become Instructor
                    <FaArrowRight  className='ml-3'/>
                </a>
            </div>
        </div>
        <div className='relative bg-white w-full h-8'>
            <ul className='absolute top-0 inset-x-72 w-/12 bg-white flex justify-between items-center px-10 py-3 text-sm'>
                <li>
                    <a href="/" className="hover:text-orange-400 font-inter hover:border-b-2 border-orange-500 py-4 active:border-t-2">Dashboard</a>
                </li>
                <li>
                    <a href="/courses" className="hover:text-orange-400 font-inter hover:border-b-2 border-orange-500 py-4 active:border-t-2">Courses</a>
                </li>
                <li>
                    <a href="/about" className="hover:text-orange-400 font-inter hover:border-b-2 border-orange-500 py-4 active:border-t-2">Teachers</a>
                </li>
                <li>
                    <a href="/contact" className="hover:text-orange-400 font-inter hover:border-b-2 border-orange-500 py-4 active:border-t-2">Wishlist</a>
                </li>
                <li>
                    <a href="/career" className="hover:text-orange-400 font-inter hover:border-b-2 border-orange-500 py-4 active:border-t-2">Purchase History</a>
                </li>
                <li>
                    <a href="/beaninstructor" className="hover:text-orange-400 font-inter hover:border-b-2 border-orange-500 py-4 active:border-t-2">Settings</a>
                </li>
            </ul>
        </div>
      </div>
    </>
  )
}

export default Navbar