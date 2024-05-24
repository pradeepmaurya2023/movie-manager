import React from "react";
import Poster from "./Poster";
import Details from "./Details";

const MovieDetails = () => {
  return (
    <>
      {/* Main conatainer having poster and info */}
      <div className="flex justify-between">
        {/* poster div */}
        <Poster />
        {/* info div */}
        <Details />
      </div>
    </>
  );
};

export default MovieDetails;
