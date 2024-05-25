import React, { useState } from "react";
import Suggestions from "./Suggestions";
import { MdOutlineSearch } from "react-icons/md";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const Search = () => {
  // store input value state ❗❗❗❗❗
  const [inputValue, setInputValue] = useState("");

  // faking a loading animation whenever any data is fetching ❗❗❗❗❗
  const [load, setload] = useState(false);

  // stores 5 suggestions for user ❗❗❗❗❗
  const [suggestions, setSuggestions] = useState([]);

  // fetching data using API by passing name ❗❗❗❗❗
  const fetchData = async (name) => {
    // This will change state of loader animation in input box
    setload(true);
    let req = await fetch(`https://search.imdbot.workers.dev/?q=${name}`);
    let data = await req.json();
    let suggested = Array.from(data.description);
    suggested = suggested.slice(0, 5);
    setSuggestions([...suggested]);
    setload(false);
  };

  // handling input element values and fetching data if there are more than 3 letters in input box ❗❗❗❗❗
  const handleChange = (e) => {
    let searchData = e.target.value;
    setInputValue(searchData);
    if (searchData.length > 3) {
      fetchData(searchData);
    } else {
      setSuggestions([]);
    }
  };

  return (
    <>
      <div className="w-full h-40 text-xl py-20 font-cursive relative flex flex-col items-center">
        {/* faking a loading animation whenever any data is fetching ❗❗❗❗❗ */}
        <div className="w-full flex justify-center">
          <div className="w-1/3 flex flex-col bg-white  rounded-l-md rounded-br-md relative">
            <div className="flex">
              <input
                type="text"
                value={inputValue}
                onChange={handleChange}
                className="h-14 w-11/12 px-4 outline-none rounded-l-md"
                placeholder="Search Movies..."
              />
              <div className="bg-white flex items-center px-2">
                {load && <AiOutlineLoading3Quarters className="text-xl font-bold animate-spin" />}
              </div>
            </div>

            {/* if suggestions state has some value than this code will work and add component ❗❗❗❗❗*/}
            {suggestions.length > 0 && (
              <Suggestions
                setInputValue={setInputValue}
                reference={suggestions}
                setSuggestions={setSuggestions}
              />
            )}
          </div>
          {/* <div className="bg-white flex items-center px-2">
          <AiOutlineLoading3Quarters />
          </div> */}
          <button className="h-14 bg-yellow-400 px-7 rounded-r-md cursor-pointer" disabled>
            <MdOutlineSearch className=" text-4xl " />
          </button>
        </div>
      </div>
    </>
  );
};

export default Search;
