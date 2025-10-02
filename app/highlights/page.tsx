import { AiOutlinePlayCircle } from "react-icons/ai";
import React from "react";

export default function HighlightsPage() {
  return (
    <div className="h-screen w-full bg-[#1d1d1f] text-white font-inter">
      <div className=" max-w-7xl mx-auto">
        <div className="flex justify-between pt-44">
          <h2 className="text-5xl font-semibold">Get the highlights.</h2>
          <div className="flex gap-x-1 justify-center items-center hover:cursor-pointer ">
            <p className="text-blue-500 hover:underline">Watch the film</p>
            <AiOutlinePlayCircle className="text-blue-500 text-xl" />
          </div>
        </div>
      </div>
    </div>
  );
}
