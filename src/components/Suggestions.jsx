import React from "react";
import { LuExternalLink } from "react-icons/lu";

// redux 
import { useDispatch } from 'react-redux';
import { setContent } from "../features/content/contentData";
import { setLoader } from "../features/loader/loaderData";

const Suggestions = (props) => {
  const reference = props.reference;

  const dispatch = useDispatch()

  const fetchData = async (id) => {
    dispatch(setLoader(true))
    let req = await fetch(`https://search.imdbot.workers.dev/?tt=${id}`);
    let data = await req.json();
    dispatch(setLoader(false))
    dispatch(setContent(data))
  };

  const handleClick = (id)=>{
    console.log(id)
    fetchData(id)
    props.setInputValue('');
    props.setSuggestions([])
  }

  return (
    <>
      <div className="w-full shadow-md shadow-white bg-white absolute top-14">
        <hr />
        {reference.map((element) => {
          return (
              <div key={element["#IMDB_ID"]} onClick={()=>{handleClick(element["#IMDB_ID"])}} className="w-full flex justify-around items-center border-b-2 cursor-pointer">
                <div className="w-3/4 h-32 flex py-2 gap-2 items-center overflow-hidden">
                <img src={element["#IMG_POSTER"]} alt="poster" className="h-full w-20 object-contain"/>
                <div className="flex flex-col justify-center">
                <p className="font-bold">{element["#TITLE"]}</p>
                <p className="text-sm">{element["#YEAR"]}</p>
                <p className="text-sm">{element["#ACTORS"]}</p>
                </div>
                </div>
                <LuExternalLink className="text-2xl text-gray-500" />
              </div>
          );
        })}
      </div>
    </>
  );
};

export default Suggestions;
