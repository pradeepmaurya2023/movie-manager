import React from "react";
// redux
import { useSelector } from "react-redux";

const MovieTitle = () => {
  // redux to fetch whole movie info
  const contentData = useSelector((state) => state.content.value);

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
    <>
      <div className="flex flex-col font-bold">
        <p className=" text-6xl">{contentData["short"]["name"]}</p>
        <div className="flex gap-3 ">
          <p>{contentData["top"]["releaseYear"]["year"]}</p>
          {contentData["top"]["runtime"] != null && (
            <p>{secondsToHour(contentData["top"]["runtime"]["seconds"])}</p>
          )}
        </div>
      </div>
    </>
  );
};

export default MovieTitle;
