import React, { useState } from 'react'
import { Menu, X } from "lucide-react";
import image from '../../../assets/images/logo.png'

function NavBar() {
  const [isAuth, setAuth] = useState(false);
  const [isNoti, setNoti] = useState(true);
  const [isProfile, setProfile] = useState('');
  const [isOpen, setOpen] = useState(true);
  const [cartAmount, setCartAmount] = useState('2');
  return (
    <>
      <div className='flex-col drop-shadow-md'>
        <div className='flex justify-between px-4 py-4 bg-gray-800'>
          <div className='flex justify-center items-center'>
            <button className='md:hidden' onClick={() =>setOpen(!setOpen)}>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            <ul className={`md:flex md:space-x-6 space-y-4 md:space-y-0 absolute md:static top-16 left-0 w-full bg-gray-900 md:bg-transparent transition-all duration-300 ${isOpen ? "block" : "hidden"}`}>
              <li>
                <a href="#" className="text-gray-400 hover:text-orange-400">Home</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-orange-400">Courses</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-orange-400">About</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-orange-400">Contact</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-orange-400">Become an Instructor</a>
              </li>
            </ul>
          </div>
          <div className='flex'>
            <select className='bg-transparent text-gray-400 cursor-pointer focus:outline-none focus:ring-0'>
              <option className='bg-gray-800'>USD</option>
              <option className='bg-gray-800'>RS.</option>
              <option className='bg-gray-800'>Euro</option>
            </select>
            <select className='bg-transparent text-gray-400 cursor-pointer focus:outline-none focus:ring-0'>
              <option className='bg-gray-800'>English</option>
              <option className='bg-gray-800'>Sinhala</option>
              <option className='bg-gray-800'>Tamil</option>
            </select>
          </div>
        </div>
        <div className='flex justify-between items-center'>
          <div className='flex justify-start items-center'>
            <div className='flex justify-center items-center'>
              <a href=''>
                <img className='w-14 h-14 object-cover m-1 mx-4' src={image} alt='logo' />
              </a>
              <a href=''>
                <h2 className='text-orange-500 text-bold font-bold text-xl'>E-Mentor</h2>
              </a>
            </div>
            <select className='hidden bg-transparent border-2 w-44 h-10 mx-4 font-mono focus:outline-none focus:ring-0'>
                <option className=''>Browse</option>
                <option className=''>Technology</option>
                <option className=''>Business</option>
                <option className=''>Finance</option>
                <option className=''>Marketing</option>
                <option className=''>Design</option>
            </select>
            <div className="hidden md:flex justify-center items-center mx-8">
              <img
                width="40"
                height="40"
                src="https://img.icons8.com/fluency-systems-regular/48/search--v1.png"
                alt="search--v1"
              />
              <input
                className="h-8 w-64 focus:ring-2 focus:ring-transparent focus:outline-none"
                type="text"
                placeholder="   Search Courses Here"
              />
            </div>
          </div>
          <div className='flex justify-start items-center drop-shadow-xl'>
            <div className='flex justify-center items-center'>
              <a href='' className='relative' >
                <img className='mx-1' width="24" height="24" src="https://img.icons8.com/ios/50/appointment-reminders--v1.png" alt="appointment-reminders--v1"/>
                {isNoti && (
                  <div className='absolute top-0 right-2 bg-orange-500 w-1.5 h-1.5 rounded-full'></div>
                ) }
              </a>
              <a href='' >
                <img className='mx-1' width="24" height="24" src="https://img.icons8.com/ios/50/like--v1.png" alt="whishlist--v1"/> 
              </a>
              <a href='' className='relative'>
                <img className='mx-1' width="24" height="24" src="https://img.icons8.com/ios/50/shopping-cart--v1.png" alt="shoping-cart--v1"/>
                <div className="absolute top-0 right-1 bg-orange-500 w-3.5 h-3.5 rounded-full flex items-center justify-center text-white text-xs">
                  {cartAmount}
                </div>
              </a>
            </div>
            {isAuth?(
              <div className='m-2' >
                {isProfile?(
                  <img src={isProfile} alt='user profile'/>
                ):(
                  <img className='mx-3' width="30" height="30" src='https://img.icons8.com/ios-filled/50/user-male-circle.png' alt='empty_profile'/>
                )}
              </div>
            ):(
              <div className='flex justify-center items-center mx-3'>
                <a href='/register'>
                  <button className='w-34 h-10 bg-yellow-500 bg-opacity-20 text-yellow-600 text-sm px-5 m-1 text-center'> Create Account </button>
                </a>
                <a href='/login'>
                  <button  className='w-34 h-10 bg-orange-500 text-white text-sm px-5 m-1 text-center'> Log in </button>
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default NavBar