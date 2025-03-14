import React from 'react';
import student from '../../../../assets/images/student/profile.jpeg';
import { FaArrowRight } from 'react-icons/fa';
import { SlUserFollow } from 'react-icons/sl';

function Navbar() {
  return (
    <>
      <div className='flex flex-col justify-center items-center my-8'>
        <div className='relative w-full h-64 bg-orange-100'>
          <div className='absolute bottom-0 inset-x-0 mx-auto max-w-5xl bg-white flex flex-col md:flex-row justify-between items-center py-3 pt-5 px-6 md:px-8 rounded-t-lg'>
            <div className='flex items-center space-x-4'>
              <div className='w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden'>
                <img className='transform transition duration-300 ease-in-out hover:scale-110' src={student} alt='Profile' />
              </div>
              <div className='flex flex-col justify-center'>
                <p className='text-sm md:text-lg font-bold'>Kevin Gilbert</p>
                <p className='text-xs md:text-sm text-gray-600'>Web Designer & Best-Selling Instructor</p>
              </div>
            </div>
            <a href='/' className='flex justify-center items-center bg-orange-100 py-3 px-4 rounded-md text-orange-500 text-sm mt-3 md:mt-0'>
              <SlUserFollow />
            </a>
          </div>
        </div>
        <div className='relative bg-white w-full h-auto overflow-x-auto shadow-sm'>
          <div className='whitespace-nowrap scrollbar-hide'>
            <ul className='flex justify-start md:justify-center space-x-6 px-6 md:px-10 py-3 text-sm md:text-base'>
              {[
                { name: 'Dashboard', path: '/' },
                { name: 'Courses', path: '/courses' },
                { name: 'Teachers', path: '/about' },
                { name: 'Wishlist', path: '/contact' },
                { name: 'Purchase History', path: '/career' },
                { name: 'Settings', path: '/beaninstructor' },
              ].map((item, index) => (
                <li key={index} className='px-2 md:px-4'>
                  <a href={item.path} className='hover:text-orange-400 font-inter hover:border-b-2 border-orange-500 py-2 md:py-4'>
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
