import { AiFillPlusCircle } from "react-icons/ai";
import Image from "next/image";
import React from "react";

export default function ComparePage() {
  return (
    <div className="min-h-screen w-full bg-black font-inter text-white pb-12">
      <div className="flex flex-col justify-center items-center pt-36">
        <p className="text-2xl text-[#ff7917] font-semibold">Design</p>
        <h1 className="text-7xl font-semibold text-center pt-2 tracking-tight">
          Unibody enclosure.
          <br /> Makes a strong case for itself.
        </h1>
        <p className="text-center w-[950px] text-xl pt-6 text-gray-400">
          Introducing iPhone 17 Pro and iPhone 17 Pro Max, designed from the
          inside out to be the most powerful iPhone models ever made. At the
          core of the new design is a heat-forged aluminum unibody enclosure
          that maximizes performance, battery capacity, and durability.
        </p>
        <div>
          <Image
            src={"/iphone.jpg"}
            alt="iphone"
            width={1000}
            height={1000}
            className="object-cover pt-4"
          />
        </div>
        <div className="flex bg-[#1d1d1f] items-center gap-x-4 px-8 py-4 rounded-full font-semibold">
          <button>Compare iPhone design</button>
          <div className="text-2xl text-blue-500">
            <AiFillPlusCircle />
          </div>
        </div>
      </div>
    </div>
  );
}
