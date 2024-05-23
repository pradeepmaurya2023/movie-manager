import React from "react";
import { FaStar } from "react-icons/fa6";

const Content = () => {
  // function to convert seconds to Hour and mins
  function secondsToHour(seconds) {
    if (seconds < 0) {
      return "Null";
    }

    // Calculate hours and remaining seconds
    const hours = Math.floor(seconds / 3600);
    const remainingSeconds = seconds % 3600;

    // Calculate minutes
    const minutes = Math.floor(remainingSeconds / 60);

    // Return the formatted string
    return `${hours}h ${minutes}m`;
  }

  return (
    <div
      style={{
        backgroundImage: `url("https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_.jpg")`,
      }}
      className="bg-center bg-no-repeat bg-cover"
    >
      <div className="text-white w-full bg-gray-950/[.8] p-20">
        {/* Header part of div containing title and rating */}
        <div className="flex justify-between font-mono">
          <div className="flex flex-col font-bold">
            <p className=" text-6xl">Avengers: Endgame</p>
            <div className="flex gap-3 ">
              <p>2019</p>
              <p>-</p>
              <p>3h 1m</p>
            </div>
          </div>
          {/* Rating part */}
          <div className="flex flex-col p-3">
            <p className="text-2xl">IMDb Rating</p>
            <div className="flex gap-2 items-center">
              <FaStar className="text-yellow-400 text-2xl" />
              <p className="text-2xl">8.4/10</p>
            </div>
          </div>
        </div>
        {/* Main conatainer having poster and info */}
        <div className="flex justify-between">
          {/* poster div */}
          <div className="w-1/5">
            <img
              className="w-full"
              src="https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_.jpg"
              alt="Poster"
            />
          </div>
          {/* info div */}
          <div className=" w-4/5 px-10 py-1">
            <div className="w-full px-5 py-3">
              {/* Summary */}
              <div className="">
                <h3 className="text-3xl font-mono border-b-2">Summary</h3>
                <p className="my-2">
                  After the devastating events of Avengers: Infinity War (2018),
                  the universe is in ruins. With the help of remaining allies,
                  the Avengers assemble once more in order to reverse Thanos'
                  actions and restore balance to the universe.
                </p>
              </div>
              {/* Genre bullet points */}
              <div className="flex gap-3 my-5">
                <a
                  href="#"
                  className="border rounded-full font-mono px-3 py-1 text-sm hover:bg-gray-400/[.1]"
                >
                  Action
                </a>
                <a
                  href="#"
                  className="border rounded-full font-mono px-3 py-1 text-sm hover:bg-gray-400/[.1]"
                >
                  Adventure
                </a>
                <a
                  href="#"
                  className="border rounded-full font-mono px-3 py-1 text-sm hover:bg-gray-400/[.1]"
                >
                  Action
                </a>
              </div>
            </div>
            {/* Cast and crew */}
            <div className="w-full px-5 py-3">
              <div className="border-t-2 py-2 px-1">
                <span className="font-mono text-xl font-bold">
                  Directors :{" "}
                </span>
                <span>Directors,</span>
              </div>
              <div className="border-t-2 py-2 px-1">
                <span className="font-mono text-xl font-bold">Stars : </span>
                <span>Stars,</span>
              </div>
              <div className="border-t-2 py-2 px-1">
                <span className="font-mono text-xl font-bold">Writers : </span>
                <span>Stars,</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
