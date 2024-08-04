import React from "react";
import { BsQuestionCircle } from "react-icons/bs";
import { FaCaretDown } from "react-icons/fa";
import message from "../assets/message.svg";

const TopBar = () => {
  return (
    <div className="flex justify-between font-inter text-[15px] px-10 py-4 bg-white">
      <div className="flex items-center">
        <p>Payments</p>
        <BsQuestionCircle className="ml-[10px] text-gray-600" />
        <p className="text-gray-600 text-[12px] ml-[10px]">How it works</p>
      </div>

      <form className="w-[400px]">
        <label
          for="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-5 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            className="block w-full p-4 ps-10 text-sm text-gray border rounded-lg bg-gray-50 border-gray-400 dark:placeholder-gray-400 "
            placeholder="Search features, tutorials, etc."
            required
          />
        </div>
      </form>

      <div className="flex">
        <div className="rounded-full h-[40px] w-[40px] bg-gray-200 flex justify-center items-center">
          <img src={message} className=" text-gray-600" />
        </div>
        <div className="rounded-full h-[40px] w-[40px] bg-gray-200 flex justify-center items-center mx-3">
          <FaCaretDown className="h-[30px] text-gray-600" />
        </div>
      </div>
    </div>
  );
};

export default TopBar;
