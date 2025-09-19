import React from 'react';
import { FaStar } from "react-icons/fa";


const StarRating = ({ rating , size='16px' }) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    stars.push(
      <span
        key={i}
        className={`text-[${size}]   ${i <= rating ? 'text-yellow-400 ' : 'text-gray-400'}`}
      >
        <FaStar />
      </span>
    );
  }
  return <div className='flex gap-1'>{stars}</div>;
};

export default StarRating;