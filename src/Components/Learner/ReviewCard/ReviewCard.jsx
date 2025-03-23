import React from 'react';
import { FaStar } from 'react-icons/fa';
import ReviewCardRow from './ReviewCardRow';

function ReviewCard({ rating = 4.8, totalStars = 5, starData = {} }) {
  const starRatings = [5, 4, 3, 2, 1];
  const percentages = starRatings.reduce((acc, star) => {
    acc[star] = starData[star] || 0;
    return acc;
  }, {});

  return (
    <div className='flex justify-center items-center'>
      <div className='flex flex-col justify-center items-center border py-5 px-8 mr-6'>
        <p className='text-5xl mb-5'>{rating}</p>
        <div className='flex justify-center items-center space-x-2 text-orange-500 mb-2'>
          {[...Array(totalStars)].map((_, index) => (
            <FaStar key={index} className={index < Math.round(rating) ? 'text-orange-500' : 'text-orange-300'} />
          ))}
        </div>
        <p className='text-sm'>Course Rating</p>
      </div>
      <div className='flex flex-col justify-center items-start'>
        {starRatings.map((star) => (
          <ReviewCardRow key={star} rating={star} totalStars={totalStars} percentage={percentages[star]} />
        ))}
      </div>
    </div>
  );
}

export default ReviewCard;
