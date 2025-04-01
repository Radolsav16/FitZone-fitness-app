import React from "react";
import { DateConverter } from "../../../utils/DateConverter";

export const Reviews = ({review}) => {
  return (
    <div  className="border-b pb-6 mb-6 flex flex-col md:flex-row">
          <div className="md:w-1/4 text-left md:pr-6 mb-4 md:mb-0">
            <div className="font-semibold text-lg">{review.author.name}</div>
            <div className="text-gray-500 text-sm">{DateConverter(review.createdAt)}</div>
          </div>
          <div className="md:w-3/4">
            <div className="flex items-center mb-2">
              {Array(review.rating)
                .fill()
                .map((_, i) => (
                  <span key={i} className="text-yellow-500 text-xl">★</span>
                ))}
              <span className="ml-2 font-semibold">{review.rating}</span>
            </div>
            <div className="font-bold mb-2">{review.title}</div>
            <p className="text-gray-700 whitespace-pre-line">{review.review}</p>
          </div>
        </div>

  );
};