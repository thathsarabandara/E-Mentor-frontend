import React from 'react';
import { FaArrowRightLong } from 'react-icons/fa6';
import CartItem from '../../../Components/Learner/CartItem/CartItem';
import image1 from '../../../assets/images/best_selling_courses/course1.png';
import image2 from '../../../assets/images/best_selling_courses/course2.png';
import image3 from '../../../assets/images/best_selling_courses/course3.png';

function Cart() {
    const cartItems = [
    {
        id: 1,
        image: image1,
        rate: 4.7,
        reviews: '451,444',
        name: 'The Python Mega Course: Build 10 Real World Applications',
        instructor: 'Leslie Alexander',
        price: '$37.99',
    },
    {
        id: 2,
        image: image2,
        rate: 4.5,
        reviews: '320,123',
        name: 'React - The Complete Guide (incl Hooks, React Router, Redux)',
        instructor: 'Maximilian Schwarzmüller',
        price: '$24.99',
    },
    {
        id: 3,
        image: image3,
        rate: 4.8,
        reviews: '500,876',
        name: 'JavaScript: Understanding the Weird Parts',
        instructor: 'Anthony Alicea',
        price: '$19.99',
    }
    ];

  return (
    <>
      <div className='flex flex-col justify-center items-center bg-gray-200 py-3'>
        <div className='py-4'>
          <p className='font-inter font-bold text-xl'>Shopping Cart</p>
        </div>
        <div className='flex justify-center items-center'>
          <a className='font-inter text-xs text-gray-600 hover:text-black mx-2' href='/'>Home</a>
          <p className='font-inter font-bold mx-2'>/</p>
          <a className='font-inter text-xs text-gray-600 hover:text-black mx-2' href='/cart'>Shopping Cart</a>
        </div>
      </div>

      <div className='flex flex-col justify-center items-center'>
        <div className='flex flex-col justify-center items-start w-10/12 font-inter py-12'>
          <p className='text-2xl mb-5'>Shopping Cart (3)</p>
          <div className='flex flex-col xl:flex-row justify-center items-center xl:items-start w-full'>
            <div className='flex flex-col justify-center items-start w-full xl:w-8/12 xl:mr-16 mb-16'>
              <div className='flex justify-between w-full text-gray-500 text-sm border-t-2 border-b-2 py-2 px-4'>
                <p className='w-1/3 text-left'>Course</p>
                <p className='w-1/3 text-center'>Prices</p>
                <p className='w-1/3 text-right'>Action</p>
              </div>
                {cartItems.map((item) => (
                    <CartItem key={item.id} item={item} />
                ))}
            </div>

            <div className='flex flex-col justify-center items-center w-full xl:w-4/12'>
              <div className='flex justify-between items-center text-sm w-10/12 mb-5'>
                <p className='text-gray-700'>Subtotal</p>
                <p className='font-bold'>$61.97 USD</p>
              </div>
              <div className='flex justify-between items-center text-sm w-10/12 mb-5'>
                <p className='text-gray-700'>Coupon Discount</p>
                <p className='font-bold'>8%</p>
              </div>
              <div className='flex justify-between items-center text-sm w-10/12 mb-5'>
                <p className='text-gray-700'>Tax</p>
                <p className='font-bold'>$17.99 USD</p>
              </div>
              <hr className='w-10/12' />
              <div className='flex justify-between items-center w-10/12 mb-5 mt-5'>
                <p className='text-gray-700 text-lg'>Total:</p>
                <p className='font-bold text-2xl'>$75.00 USD</p>
              </div>
              <a href='' className='flex justify-center items-center text-sm text-white bg-orange-500 py-2 px-5 font-bold hover:bg-white hover:text-orange-500 hover:border-2 border-orange-500 mb-5'>
                Proceed to checkout
                <FaArrowRightLong className='ml-5' />
              </a>
              <hr className='w-10/12' />
              <div className='flex flex-col justify-center items-start w-10/12 mt-5'>
                <p className='text-sm font-bold'>Apply coupon code</p>
                <div className='flex flex-col sm:flex-row justify-center items-center mt-5 w-full'>
                  <input 
                    type='text'
                    placeholder='Coupon Code'
                    className='border-2 h-10 w-full sm:w-44 mb-2 sm:mb-0 sm:mr-4 px-2'
                  />
                  <button 
                    type='submit'
                    className='bg-black text-white font-bold py-2 px-4 hover:bg-white hover:text-black hover:border-2'
                  >
                    Apply
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;