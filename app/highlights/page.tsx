import { AiOutlinePlayCircle } from "react-icons/ai";
import React from "react";
import { AppleCardsCarouselDemo } from "../components/AppleCardsCarousel";

export default function HighlightsPage() {
  return (
    <div className="min-h-screen min-w-screen bg-[#1d1d1f] text-white font-inter pb-8 overflow-hidden px-4">
      <div className=" max-w-7xl mx-auto">
        <div className="lg:flex lg:justify-between justify-start pt-48">
          <h2 className="lg:text-5xl text-2xl font-semibold">
            Get the highlights.
          </h2>
          <div className="flex gap-x-2 lg:justify-center items-center hover:cursor-pointer ">
            <p className="text-blue-500 text-sm lg:text-lg">Watch the film</p>
            <AiOutlinePlayCircle className="text-blue-500 text-xl" />
          </div>
        </div>
        <AppleCardsCarouselDemo />
      </div>
    </div>
  );
}
