import React, { useState, useEffect } from "react";
import { MdOutlineArrowForwardIos } from "react-icons/md";

// redux
import { useSelector } from "react-redux";
import CastBox from "./CastBox";

const Cast = () => {
  // redux to fetch whole movie info
  const contentData = useSelector((state) => state.content.value);

  const [actors, setActors] = useState([]);

  useEffect(() => {
    // fetching whole cast info
    const castInfo = Array.from(contentData["main"]["cast"]["edges"]);

    // an empty array to store all cast name and image
    const cast = [];

    // iterating whole castInfo to fetch only name and img
    castInfo.forEach((element) => {
      let url = element["node"]["name"]["primaryImage"];
      cast.push({
        name: `${element["node"]["name"]["nameText"]["text"]}`,
        img:
          url != null
            ? element["node"]["name"]["primaryImage"]["url"]
            : "No data",
        character : `${element["node"]["characters"][0]["name"]}`,
      });
    });

    // Setting the actors state with the cast array
    console.log(cast)
    setActors(cast);
  }, [contentData]); // Run this effect whenever contentData changes

  return (
    <>
      <div className="p-28 bg-gray-900/[.6] w-full">
        <div className="title flex items-center gap-3 text-white font-bold text-4xl border-l-4 border-yellow-400 px-4">
          <h3 className="">Top Cast</h3>
          <MdOutlineArrowForwardIos />
        </div>
        {/* Displaying Cast Boxes */}
        <div className="flex w-full my-10 gap-5 flex-wrap">
          {actors.map((actor, index) => (
            <CastBox key={index} name={actor.name} img={actor.img} character={actor.character}/>
          ))}
        </div>
      </div>
    </>
  );
};

export default Cast;
