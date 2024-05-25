import React from "react";

const CastBox = (props) => {
  let name = props.name;
  let img = props.img;
  let character = props.character;
  return (
    <div className="h-32 w-3/12 p-4 flex box-border min-w-60 rounded-lg bg-white items-center gap-3">
      <div className="h-24 w-24 rounded-full bg-white">
        <img className="h-full w-full rounded-full object-cover object-top shadow-md shadow-black" src={img} alt="poster" />
      </div>
      <div className="font-mono font-bold text-sm">
        <p className="text-xl">{name}</p>
        <p>{character}</p>
      </div>
    </div>
  );
};

export default CastBox;
