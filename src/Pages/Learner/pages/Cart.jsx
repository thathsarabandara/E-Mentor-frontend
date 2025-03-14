import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'
import CartItem from '../../../Components/Learner/CartItem/CartItem'

function Cart() {
  return (
    <>
    <div className='flex flex-col justify-center items-center bg-gray-200 py-3'>
        <div className='py-4'>
          <p className='font-inter font-bold text-xl'>
            Shopping Cart
          </p>
        </div>
        <div className='flex justify-center items-center'>
          <a className='font-inter text-xs text-gray-600 hover:text-black mx-2' href='/' >
            Home
          </a>
          <p className='font-inter font-bold mx-2'>
            /
          </p>
          <a className='font-inter text-xs text-gray-600 hover:text-black mx-2' href='/cart'>
            Shopping Cart
          </a>
        </div>
      </div>

      <div className='flex flex-col justify-center items-center'>
        <div className='flex flex-col justify-center items-start w-10/12 font-inter py-12'>
            <p className='text-2xl mb-5'>
                Shopping Cart (3)
            </p>
            <div className='flex flex-col xl:flex-row justify-center items-center xl:items-start'>
                <div className='flex flex-col justify-center items-start lg:w-8/12 lg:mr-4 xl:mr-16 2xl:mr-36 mb-16'>
                    <div className='flex justify-start items-center text-gray-500 text-sm border-t-2 border-b-2 py-2 '>
                        <p className='mr-24 sm:mr-44 md:mr-56 lg:mr-72 xl:mr-80 2xl:mr-96'>
                            Course
                        </p>
                        <p className='ml-6 mr-12 sm:ml-16 sm:mr-28 md:ml-24 md:mr-24 lg:ml-12 lg:mr-36 xl:ml-28 2xl:ml-36 xl:mr-26 2xl:mr-56'>
                            Prices
                        </p>
                        <p className='mr-4 sm:mr-12 md:mr-24 lg:mr-24 xl:mr-36 2xl:mr-44'>
                            Action
                        </p>
                    </div>
                    <CartItem />
                </div>
                <div className='flex flex-col justify-center items-center lg:w-4/12'>
                    <div className='flex justify-between items-center text-sm w-10/12 mb-5'>
                        <p className='text-gray-700'>
                            Subtotal
                        </p>
                        <p className='font-bold'>
                            $61.97 USD
                        </p>
                    </div>
                    <div className='flex justify-between items-center text-sm w-10/12 mb-5'>
                        <p className='text-gray-700'>
                            Coupon Discount
                        </p>
                        <p className='font-bold'>
                            8%
                        </p>
                    </div>
                    <div className='flex justify-between items-center text-sm w-10/12 mb-5'>
                        <p className='text-gray-700'>
                            Taxs
                        </p>
                        <p className='font-bold'>
                            $17.99 USD
                        </p>
                    </div>
                    <hr className='w-10/12 h-2'/>
                    <div className='flex justify-between items-center w-10/12 mb-5 mt-5'>
                        <p className='text-gray-700 text-lg'>
                            Total:
                        </p>
                        <p className='font-bold text-2xl'>
                            $75.00 USD
                        </p>
                    </div>
                    <a href='' className='flex justify-center items-center text-sm text-white bg-orange-500 py-2 px-5 font-bold hover:bg-white hover:text-orange-500 hover:border-2 border-orange-500 mb-5'>
                        Proceed to checkout
                        <FaArrowRightLong className='ml-5'/>
                    </a>
                    <hr className='w-10/12 h-2' />
                    <div className='flex flex-col justify-center items-start'>
                        <p className='text-sm font-bold'>Apply coupon code</p>
                        <div className='flex justify-center items-center mt-5'>
                            <input 
                                type='text'
                                placeholder='Coupon Code'
                                className='border-2 h-10 w-44 mr-8'
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
  )
}

export default Cart