import React from "react";
import MovieTitle from "./MovieTitle";
import Rating from "./Rating";

const Header = () => {
  return (
    <>
      {/* Header part of div containing title and rating */}
      <div className="flex justify-between font-mono">
        {/* title */}
        <MovieTitle />
        {/* Rating part */}
        <Rating />
      </div>
    </>
  );
};

export default Header;
