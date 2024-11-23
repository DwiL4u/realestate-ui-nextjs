import React from "react";
import { FaSearch } from "react-icons/fa";
import { HiAdjustmentsHorizontal } from "react-icons/hi2";

const SearchBox = () => {
  return (
    <div className="w-full md:w-[80%] mx-auto bg-white h-auto sm:h-[2.5rem]flex px-4 sm:px-8 flex-col justify-center rounded-lg py-4 sm:py-2">
      <div className="flex items-center justify-between h-full">
        <input
          type="text"
          placeholder="Enter an address, city or Zip..."
          className="outline-none h-[2.5rem]  md:h-[3rem] sm:flex-[0.8] sm:h-full w-full  rounded-lg block bg-gray-100 px-4 placeholder:text-sm"
        />
        <div className="flex items-center flex-[0.2] ml-4 space-x-4">
          <div className="lg:flex hidden items-center cursor-pointer space-x-2">
            <HiAdjustmentsHorizontal className="text-gray-400 w-6 h-6" />
            <p className="text-gray-400 text-sm">Advanced</p>
          </div>
          <div className="w-7 h-7 bg-rose-600 flex items-center hover:bg-rose-500 transition-all duration-150 cursor-pointer justify-center text-white rounded-full">
            <FaSearch className="w-3 h-3" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBox;
