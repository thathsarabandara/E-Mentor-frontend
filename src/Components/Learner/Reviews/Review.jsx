import React from 'react'
import coma1 from '../../../assets/images/about/coma1.png'
import coma2 from '../../../assets/images/about/coma2.png'
import { TbTriangleInvertedFilled } from 'react-icons/tb'

function Review({review}) {
  return (
    <>
        <div className='flex flex-col justify-center items-center w-8/12 mx-6 my-20'>
            <div className='bg-gray-100 py-6 px-5'>
                <img className='mb-3' src={coma1} alt='coma1' />
                <p className='font-inter text-center px-4' >
                    {review.review}
                </p>
                <img className='ml-96 mr-3 mt-3' src={coma2} alt='coma2' />
            </div>
            <TbTriangleInvertedFilled className='text-gray-100 text-xl' />
            <div className='flex flex-col justify-center items-center'>
                <p className='font-inter text-lg'>
                    {review.name}
                </p>
                <p className='font-inter text-xs'>
                    {review.position} <a href={review.link} className='font-inter text-purple-700'>{review.company}</a>
                </p>
            </div>
        </div>
    </>
  )
}

export default Review