import Image from "next/image";
import React from "react";
import { FaQuoteRight } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";

type Review = {
  id: number;
  name: string;
  profession: string;
  userImage: string;
  review: string;
};
type ReviewCardProps = {
  review: Review;
};

const ReviewCard = ({ review }: ReviewCardProps) => {
  return (
    <div className="bg-white rounded-lg m-3 p-6 relative">
      <FaQuoteRight className="absolute text-rose-600 w-8 h-8 top-4 right-4 opacity-20" />
      <div className="mt-6 flex items-center">
        <FaStar className="w-4 h-4 text-yellow-500" />
        <FaStar className="w-4 h-4 text-yellow-500" />
        <FaStar className="w-4 h-4 text-yellow-500" />
        <FaStar className="w-4 h-4 text-yellow-500" />
        <FaStar className="w-4 h-4 text-yellow-500" />
      </div>
      <p className="mt-6 text-base text-gray-600 font-medium">
        {review.review}
      </p>
      <div className="w-full h-[1.2px] bg-gray-600 mt-6 mb-6 opacity-10"></div>
      <div className="flex space-x-4 items-center">
        <Image
          src={review.userImage}
          alt={review.name}
          width={50}
          height={50}
          className="rounded-full"
        />
        <div>
          <h1 className="font-bold text-gray-800">{review.name}</h1>
          <p className="text-sm text-gray-500">{review.profession}</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
