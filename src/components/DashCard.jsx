import React from "react";
import { FaRegQuestionCircle } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa6";

const DashCard = ({
  amount = 2345,
  bottom = false,
  orders = false,
  ordersNumber = 12,
  title,
}) => {
  return (
    <div className="p-[16px]">
      <div
        className={`p-[20px] rounded-t-lg ${
          bottom ? "bg-sky-600 hover:bg-sky-700" : "rounded-lg bg-white"
        } font-inter`}
      >
        <div className="flex items-center mb-[32px]">
          <p className={`text-black ${bottom ? "text-white" : ""} mr-2`}>
            {title}
          </p>
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-6"
            className={`text-black ${bottom ? "text-white" : ""}`}
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"
            />
          </svg> */}
          <FaRegQuestionCircle className={`${bottom ? "text-white" : ""}`} />
        </div>
        <div className="flex justify-between">
          <p className={`text-[32px] font-md ${bottom ? "text-white" : ""}`}>
            ₹ {amount}
          </p>
          {orders && (
            <div className="flex items-center cursor-pointer">
              <p
                className={`cursor-pointer underline ${
                  bottom ? "text-white" : "text-sky-600"
                }`}
              >
                {ordersNumber} orders
              </p>
              {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-5"
              className={`${bottom ? "text-white" : ""}`}
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg> */}
              <FaChevronRight
                className={`${bottom ? "text-white" : "text-sky-600"}`}
              />
            </div>
          )}
        </div>
      </div>
      {bottom && (
        <div className="flex justify-between bg-sky-700 px-[20px] py-[5px] font-inter text-[14px] text-white rounded-b-lg">
          <p>Next payout date:</p>
          <p>Today, 4:00 PM</p>
        </div>
      )}
    </div>
  );
};

export default DashCard;
