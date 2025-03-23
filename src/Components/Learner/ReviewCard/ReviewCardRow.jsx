import React from 'react';
import { FaStar } from 'react-icons/fa';

function ReviewCardRow({ rating = 5, totalStars = 5, percentage = 80 }) {
  return (
    <div className='flex justify-center items-center space-x-2 py-1'>
      <div className='flex justify-center items-center space-x-1 text-orange-500'>
        {[...Array(totalStars)].map((_, index) => (
          <FaStar key={index} className={index < rating ? 'text-orange-500' : 'text-orange-300'} />
        ))}
      </div>
      <div className='flex justify-center items-center space-x-2 text-sm text-gray-700'>
        <p>{rating}</p>
        <p>Star Rating</p>
      </div>
      <div className='relative h-2 w-96 bg-gray-300 rounded-full overflow-hidden'>
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
