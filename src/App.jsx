import React, { useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import Sidebar from "./components/Sidebar";
import TopBar from "./components/TopBar";
import DashCards from "./components/DashCards";
import Sort from "./assets/Sort.svg";
import Download from "./assets/download.svg";
import Table from "./components/Table";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="grid grid-cols-8">
      <div className="max-md:col-span-1 col-span-0">
        <Sidebar />
      </div>
      <ScrollArea className="max-md:col-span-8 col-span-7 h-screen">
        <div className="bg-zinc-100 ">
          <TopBar />
          <div className="bg-zinc-100 py-[40px]">
            <div className="flex justify-between font-inter items-center mx-[40px]">
              <p className="font-md">Overview</p>
              <div
                className="px-4 py-2 border-[1px] rounded-md flex items-center bg-white cursor-pointer"
                onClick={() => console.log("This month")}
              >
                <p className="mr-1">This Month</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  class="size-3"
                >
                  <path d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
              </div>
            </div>
          </div>
          <DashCards />
          <p className="font-md text-[20px] mx-[20px] mt-[20px] mb-[20px] bg-zinc-100">
            Transactions | This month
          </p>
          <div className="flex mx-[20px] font-inter">
            <button className="px-4 py-2 rounded-full mr-[20px] bg-zinc-300 text-zinc-500">
              Payouts (22)
            </button>
            <button className="bg-sky-600 rounded-full text-white px-4 py-2">
              Refunds (22)
            </button>
          </div>
          <div className="rounded-lg m-[20px] p-[10px] bg-white">
            <div className="flex justify-between items-center">
              <form className="max-w-lg">
                <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
                  Search
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg
                      className="w-4 h-4 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 20"
                    >
                      <path
                        stroke="currentColor"
                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                      />
                    </svg>
                  </div>
                  <input
                    type="search"
                    id="default-search"
                    className="block font-inter  w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 "
                    placeholder="Search Mockups, Logos..."
                    required
                  />
                </div>
              </form>

              <div className="font-inter flex">
                <button className="text-[16px] text-gray-500 flex border-[2px] px-[20px] py-[10px] rounded-md">
                  Sort <img src={Sort} alt="" className="mx-[4px]" />
                </button>
                <button className="ml-[10px] text-[16px] text-gray-500 flex border-[2px] px-[10px] py-[10px] rounded-md">
                  <img src={Download} alt="" />
                </button>
              </div>
            </div>
            <Table />
          </div>
        </div>
      </ScrollArea>
    </div>
  );
}

export default App;
