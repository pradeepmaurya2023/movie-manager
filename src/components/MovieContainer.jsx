import React from "react";
import Header from "./movieInfo/Header";
import MovieDetails from "./movieInfo/MovieDetails";

// redux
import { useSelector } from "react-redux";

const MovieContainer = () => {
  // redux to fetch whole movie info
  const contentData = useSelector((state) => state.content.value);

  return (
    <div
      style={{
        backgroundImage: `url(${contentData["short"]["image"]})`,
      }}
      className="bg-center bg-no-repeat bg-cover"
    >
      <div className="text-white w-full bg-gray-950/[.8] p-20">
        {/* Header part of div containing title and rating */}
        <Header />
        {/* Main conatainer having poster and info */}
        <MovieDetails />
      </div>
    </div>
  );
};

export default MovieContainer;
