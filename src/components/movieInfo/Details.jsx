import React from "react";

// redux
import { useSelector } from "react-redux";
import Genre from "./Genre";

const Details = () => {
  // redux to fetch whole movie info
  const contentData = useSelector((state) => state.content.value);
  return (
    <>
      <div className=" w-4/5 px-10 py-1">
        <div className="w-full px-5 py-3">
          {/* Summary */}
          <div className="">
            <h3 className="text-3xl font-mono border-b-2">Summary</h3>
            <p className="my-2">{contentData["short"]["description"]}</p>
          </div>
          {/* Genre bullet points */}
          <Genre />
        </div>
        {/* Cast and crew */}
        <div className="w-full px-5 py-3">
          <div className="border-t-2 py-2 px-1">
            <span className="font-mono text-xl font-bold">Directors : </span>
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
    </>
  );
};

export default Details;
