import React, { useState } from 'react'
import { Menu, X } from "lucide-react";
import image from '../../../assets/images/logo.png'
import emptyProfile from '../../../assets/images/navbar/emptyProfile.png'
import notification from '../../../assets/images/navbar/notification.png'
import search from '../../../assets/images/navbar/search.png'
import shoppingCart from '../../../assets/images/navbar/shoppingCart.png'
import wishlist from '../../../assets/images/navbar/wishlist.png'
import { IoNotificationsOutline, IoSearchOutline } from 'react-icons/io5';
import { FaRegHeart } from 'react-icons/fa';
import { HiOutlineShoppingCart } from 'react-icons/hi';

function NavBar() {
  const [isAuth, setAuth] = useState(false);
  const [isNoti, setNoti] = useState(true);
  const [isProfile, setProfile] = useState('');
  const [isOpen, setOpen] = useState(false);
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
                <a href="/" className="text-gray-400 hover:text-orange-400 font-inter hover:border-t-2 border-orange-500 py-4 active:border-t-2">Home</a>
              </li>
              <li>
                <a href="/courses" className="text-gray-400 hover:text-orange-400 font-inter hover:border-t-2 border-orange-500 py-4 active:border-t-2">Courses</a>
              </li>
              <li>
                <a href="/about" className="text-gray-400 hover:text-orange-400 font-inter hover:border-t-2 border-orange-500 py-4 active:border-t-2">About</a>
              </li>
              <li>
                <a href="/contact" className="text-gray-400 hover:text-orange-400 font-inter hover:border-t-2 border-orange-500 py-4 active:border-t-2">Contact</a>
              </li>
              <li>
                <a href="/career" className="text-gray-400 hover:text-orange-400 font-inter hover:border-t-2 border-orange-500 py-4 active:border-t-2">Career</a>
              </li>
              <li>
                <a href="/beaninstructor" className="text-gray-400 hover:text-orange-400 font-inter hover:border-t-2 border-orange-500 py-4 active:border-t-2">Become an Instructor</a>
              </li>
            </ul>
          </div>
          <div className='flex'>
            <select className='bg-transparent text-gray-400 cursor-pointer focus:outline-none focus:ring-0'>
              <option className='bg-gray-800 font-inter'>USD</option>
              <option className='bg-gray-800 font-inter'>RS.</option>
              <option className='bg-gray-800 font-inter'>Euro</option>
            </select>
            <select className='bg-transparent text-gray-400 cursor-pointer focus:outline-none focus:ring-0'>
              <option className='bg-gray-800 font-inter'>English</option>
              <option className='bg-gray-800 font-inter'>Sinhala</option>
              <option className='bg-gray-800 font-inter'>Tamil</option>
            </select>
          </div>
        </div>
        <div className='flex justify-between items-center'>
          <div className='flex justify-start items-center'>
            <div className='flex justify-center items-center'>
              <a href=''>
                <img className='w-12 h-12 object-cover md:m-1 md:mx-4 md:w-14 md:h-14' src={image} alt='logo' />
              </a>
              <a href=''>
                <h2 className='text-orange-500 text-bold font-bold text-md md:text-xl'>E-Mentor</h2>
              </a>
            </div>
            <select className='hidden xl:block bg-transparent border-2 w-44 h-10 mx-4 font-inter focus:outline-none focus:ring-0'>
                <option className=''>Browse</option>
                <option className=''>Technology</option>
                <option className=''>Business</option>
                <option className=''>Finance</option>
                <option className=''>Marketing</option>
                <option className=''>Design</option>
            </select>
            <div className="hidden xl:flex justify-center items-center mx-8">
              <IoSearchOutline className='text-xl mr-2'/>
              <input
                className="h-8 w-64 focus:ring-2 focus:ring-transparent focus:outline-none font-inter"
                type="text"
                placeholder="   Search Courses Here"
              />
            </div>
          </div>
          <div className='flex justify-start items-center drop-shadow-xl'>
            <div className='flex justify-center items-center'>
              <a href='/notification' className='relative mr-1' >
                <IoNotificationsOutline className='text-xl' />
                {isNoti && (
                  <div className='absolute top-0 right-1 md:right-1 bg-orange-500 w-1.5 h-1.5 rounded-full'></div>
                ) }
              </a>
              <a href='/wishlist'className='mr-1' >
                <FaRegHeart className='text-xl' />
              </a>
              <a href='/cart' className='relative'>
                <HiOutlineShoppingCart className='text-xl' />
                <div className="absolute top-0 right-0 md:right-0 bg-orange-500 w-2 h-2 md:w-3.5 md:h-3.5 rounded-full flex items-center justify-center md:text-white text-transparent md:text-xs font-inter">
                  {cartAmount}
                </div>
              </a>
            </div>
            {isAuth?(
              <div className='m-2' >
                {isProfile?(
                  <img src={isProfile} alt='user profile'/>
                ):(
                  <img className='md:mx-3' width="30" height="30" src='https://img.icons8.com/ios-filled/50/user-male-circle.png' alt='empty_profile'/>
                )}
              </div>
            ):(
              <div className='flex justify-center items-center mx-3'>
                <a href='/register'>
                  <button className='w-20 h-8 md:w-36 md:h-10 bg-yellow-500 bg-opacity-20 text-yellow-600 px-2 md:px-5 m-1 text-center text-xs md:text-sm font-inter'> Create Account </button>
                </a>
                <a href='/login'>
                  <button  className='w-15 h-8 md:w-28 md:h-10 bg-orange-500 text-white px-2  md:px-5 md:m-1 text-center text-xs md:text-sm font-inter'> Log in </button>
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