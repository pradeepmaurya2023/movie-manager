import React from "react";
import { FaStar } from "react-icons/fa6";
// redux
import { useSelector } from "react-redux";

const Rating = () => {
  // redux to fetch whole movie info
  const contentData = useSelector((state) => state.content.value);
  return (
    <>
      {/* Rating part */}
      <div className="flex flex-col p-3">
        <p className="text-2xl">IMDb Rating</p>
        <div className="flex gap-2 items-center">
          <FaStar className="text-yellow-400 text-2xl" />
          <p className="text-2xl">
            {contentData["short"]["aggregateRating"]["ratingValue"]}/10
          </p>
        </div>
      </div>
    </>
  );
};

export default Rating;
