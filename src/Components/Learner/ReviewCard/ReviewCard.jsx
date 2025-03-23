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
    <div className='flex flex-col lg:flex-row justify-center items-center lg:space-x-6 w-full'>
      {/* Rating Display */}
      <div className='flex flex-col justify-center items-center border py-5 px-8 lg:px-10 mr-0 lg:mr-6 w-full max-w-xs lg:max-w-md'>
        <p className='text-4xl sm:text-5xl mb-4'>{rating}</p>
        <div className='flex justify-center items-center space-x-2 text-orange-500 mb-2'>
          {[...Array(totalStars)].map((_, index) => (
            <FaStar key={index} className={index < Math.round(rating) ? 'text-orange-500' : 'text-orange-300'} />
          ))}
        </div>
        <p className='text-sm'>Course Rating</p>
      </div>

      {/* Review Breakdown */}
      <div className='flex flex-col justify-center items-start w-full'>
        {starRatings.map((star) => (
          <ReviewCardRow key={star} rating={star} totalStars={totalStars} percentage={percentages[star]} />
        ))}
      </div>
    </div>
  );
}

export default ReviewCard;
