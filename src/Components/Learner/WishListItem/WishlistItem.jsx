import React from 'react'
import { FaStar } from 'react-icons/fa6'
import { IoIosCloseCircleOutline } from 'react-icons/io'

function WishlistItem({item}) {
  return (
    <>
    <div className='flex flex-col justify-center items-center border-2 font-inter w-full'>
        <div className='flex flex-col sm:flex-row justify-center items-center py-3 px-5 w-full'>
          <button className='self-start sm:self-center'>
            <IoIosCloseCircleOutline className='mr-2 text-lg' />
          </button>
          <div className='mr-4 flex-shrink-0'>
            <img className='w-36 h-24 xl:w-44 xl:h-32 object-cover' src={item.image} alt='course_img' />
          </div>
          <div className='flex flex-col sm:flex-row justify-between items-center w-full'>
            <div className='flex flex-col justify-start items-start sm:mr-6 lg:mr-10 xl:mr-6 2xl:mr-10 w-full sm:w-auto'>
              <div className='flex justify-start items-center mb-4 xl:mb-6'>
                <FaStar className='text-orange-500 mr-2' />
                <p className='text-sm'>{item.rate}</p>
                <p className='text-sm text-gray-500'>({item.reviews} Reviews)</p>
              </div>
              <div className='flex justify-start items-center mb-2 xl:mb-6 w-full sm:w-56 2xl:w-80 h-auto sm:h-6'>
                <p className='font-bold text-sm 2xl:text-lg text-center sm:text-left'>
                  {item.name}
                </p>
              </div>
              <div className='flex justify-start items-center mt-2 text-xs xl:text-sm'>
                <p className='text-gray-500 mr-3'>Course by:</p>
                <p>{item.instructor}</p>
              </div>
            </div>
            <div className='text-orange-500 text-sm sm:text-base lg:mr-10 xl:mr-8 2xl:mr-10'>
              <p>{item.price}</p>
            </div>
            <div className='text-xs xl:text-sm'>
              <a href='' className='text-orange-500 hover:text-black'>Move to Cart</a>
            </div>
          </div>
        </div>
    </div>
    </>
  )
}

export default WishlistItem