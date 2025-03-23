import React from 'react';
import { FaStar } from 'react-icons/fa';

function ReviewCardRow({ rating = 5, totalStars = 5, percentage = 80 }) {
  return (
    <div className='flex flex-col sm:flex-row justify-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-4 py-2'>
      <div className='flex justify-center items-center space-x-1 text-orange-500'>
        {[...Array(totalStars)].map((_, index) => (
          <FaStar key={index} className={index < rating ? 'text-orange-500' : 'text-orange-300'} />
        ))}
      </div>

      <div className='flex justify-center items-center space-x-2 text-sm text-gray-700'>
        <p>{rating}</p>
        <p>Star Rating</p>
      </div>

      <div className='relative h-2 w-60 sm:w-96 bg-gray-300 rounded-full overflow-hidden'>
        <div
          className='absolute top-0 left-0 h-2 bg-orange-500 rounded-full'
          style={{ width: `${percentage}%` }}
        ></div>
      </div>

      <p className='text-sm text-gray-700'>{percentage}%</p>
    </div>
  );
}

export default ReviewCardRow;
