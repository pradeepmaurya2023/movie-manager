import React, { useEffect, useState } from "react";
import Suggestions from "./Suggestions";

const Search = () => {
  // store input value state ❗❗❗❗❗
  const [inputValue, setInputValue] = useState("");

  // handles loading animation when data is fetching ❗❗❗❗❗
  const [load, setLoad] = useState(false);

  // stores 5 suggestions for user ❗❗❗❗❗
  const [suggestions, setSuggestions] = useState([])


  // fetching data using API by passing name ❗❗❗❗❗
  const fetchData = async (name) => {
    setLoad(true)
    let req = await fetch(`https://search.imdbot.workers.dev/?q=${name}`);
    let data = await req.json();
    // console.log(data.description);
    let suggested = Array.from(data.description);
    suggested = suggested.slice(0,5);
    // console.log(suggested)
    setSuggestions([...suggested])
    console.log(suggestions)
    setLoad(false)
  };

  // handling input element values and fetching data if there are more than 3 letters in input box ❗❗❗❗❗
  const handleChange = (e) => {
    let searchData = e.target.value;
    setInputValue(searchData);
    if (searchData.length > 3) {
      // console.log(searchData);
      fetchData(searchData);
    }else{
      setSuggestions([])
    }
  };

  return (
    <>
      <div className="w-full h-40 text-xl py-20 font-cursive relative flex flex-col items-center">

        {/* faking a loading animation whenever any data is fetching ❗❗❗❗❗ */} 
        {load && <p className="text-white text-center">Loading...</p>}
        <div className="w-full flex justify-center">
          <div className="w-1/3 flex flex-col bg-white  rounded-l-md rounded-br-md relative">
            <input
              type="text"
              value={inputValue}
              onChange={handleChange}
              className="h-14 w-full px-4 outline-none rounded-l-md"
              placeholder="Search Movies..."
            />

            {/* if suggestions state has some value than this code will work and add component ❗❗❗❗❗*/}  
            {suggestions.length>0 && <Suggestions reference={suggestions}setLoad={setLoad} />}
            
          </div>
          <button
            // onClick={handleSubmit}
            className="h-14 bg-yellow-400 px-7 rounded-r-md font-bold text-2xl"
          >
            Search
          </button>
        </div>
      </div>
    </>
  );
};

export default Search;
