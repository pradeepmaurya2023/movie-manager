import React from "react";
import { MdOutlineBookmarkAdd } from "react-icons/md";

// redux
import { useSelector } from "react-redux";

const Poster = () => {
  // redux to fetch whole movie info
  const contentData = useSelector((state) => state.content.value);

  return (
    <>
      {/* poster div */}
      <div className="w-1/5 relative">
        <div className="absolute">
          <MdOutlineBookmarkAdd className="text-5xl hover:bg-gray-800/[.7] cursor-pointer" />
        </div>
        <img
          className="w-full"
          src={contentData["short"]["image"]}
          alt="Poster"
        />
      </div>
    </>
  );
};

export default Poster;
