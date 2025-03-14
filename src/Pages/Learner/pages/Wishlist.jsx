import React from 'react'

function Wishlist() {
  return (
    <>
    <div className='flex flex-col justify-center items-center bg-gray-200 py-3'>
        <div className='py-4'>
          <p className='font-inter font-bold text-xl'>
            WishList
          </p>
        </div>
        <div className='flex justify-center items-center'>
          <a className='font-inter text-xs text-gray-600 hover:text-black mx-2' href='/' >
            Home
          </a>
          <p className='font-inter font-bold mx-2'>
            /
          </p>
          <a className='font-inter text-xs text-gray-600 hover:text-black mx-2' href='/about'>
            Wishlist
          </a>
        </div>
      </div>
    </>
  )
}

export default Wishlist