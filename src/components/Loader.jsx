import React from "react";


const Loader = () => {
  return (
    // fakes a loading animation when API is fetching data
    <div className="absolute w-full min-h-screen h-full bg-gray-900/[.8] z-10 flex justify-center ">
      <div className="w-40 h-40  border-8 border-t-blue-600 rounded-full relative top-1/3 animate-spin-slow"></div>
    </div>
  );
};

export default Loader;
