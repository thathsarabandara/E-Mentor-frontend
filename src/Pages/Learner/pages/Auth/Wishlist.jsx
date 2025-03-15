import React from 'react'
import image1 from '../../../../assets/images/best_selling_courses/course1.png';
import image2 from '../../../../assets/images/best_selling_courses/course2.png';
import image3 from '../../../../assets/images/best_selling_courses/course3.png';
import WishlistItem from '../../../../Components/Learner/WishListItem/WishlistItem'

function Wishlist() {
  const wishlistItem = [
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
          <p className='font-inter font-bold text-xl'>
            WishList
          </p>
        </div>
        <div className='flex justify-center items-center'>
          <a className='font-inter text-xs text-gray-600 hover:text-black mx-2' href='/learner/dashboard' >
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

      <div className='flex flex-col justify-center items-center'>
        <div className='flex flex-col justify-center items-start w-11/12 font-inter py-12'>
          <p className='text-2xl mb-5'>Wishlist (3)</p>
          <div className='flex flex-col xl:flex-row justify-center items-center xl:items-start w-full'>
            <div className='flex flex-col justify-center items-start w-full xl:w-8/12 xl:mr-16 mb-16'>
              <div className='flex justify-between w-full text-gray-500 text-sm border-t-2 border-b-2 py-2 px-4'>
                <p className='w-1/3 text-left'>Course</p>
                <p className='w-1/3 text-center'>Prices</p>
                <p className='w-1/3 text-right'>Action</p>
              </div>
                {wishlistItem.map((item) => (
                    <WishlistItem key={item.id} item={item} />
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Wishlist