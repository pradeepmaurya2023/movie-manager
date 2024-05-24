import React from "react";

// redux
import { useSelector } from "react-redux";

const Genre = () => {
  // redux to fetch whole movie info
  const contentData = useSelector((state) => state.content.value);
  return (
    <>
      {/* Genre bullet points */}
      <div className="flex gap-3 my-5">
        {contentData["short"]["genre"].map((element) => {
          return (
            <a
              key={element}
              href="#"
              className="border rounded-full font-mono px-3 py-1 text-sm hover:bg-gray-400/[.1]"
            >
              {element}
            </a>
          );
        })}
      </div>
    </>
  );
};

export default Genre;
