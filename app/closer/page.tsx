import { AiOutlinePlusCircle } from "react-icons/ai";
import Image from "next/image";
import React from "react";

export default function CloserPage() {
  return (
    <div className="px-44 pt-48 bg-black min-h-screen w-full relative">
      <h1 className="lg:text-5xl text-2xl font-semibold text-white pl-16">
        Take a closer look.
      </h1>
      <div className="py-16 relative w-full mx-auto">
        <Image
          src={"/1111.jpg"}
          alt="1111"
          width={2000}
          height={2000}
          className="object-cover rounded-2xl -z-50 w-screen h-screen"
        />
        <div className="absolute left-24 top-64 z-10 space-y-4 font-semibold">
          <div className="flex items-center text-white bg-[#1d1d1f] px-6 py-4 rounded-full gap-x-2 text-lg">
            <AiOutlinePlusCircle />
            <p>Colors</p>
          </div>
          <div className="flex items-center text-white bg-[#1d1d1f] px-6 py-4 rounded-full gap-x-2 text-lg">
            <AiOutlinePlusCircle />
            <p>Aluminum unibody</p>
          </div>
          <div className="flex items-center text-white bg-[#1d1d1f] px-6 py-4 rounded-full gap-x-2 text-lg">
            <AiOutlinePlusCircle />
            <p>Vapor chamber</p>
          </div>
          <div className="flex items-center text-white bg-[#1d1d1f] px-6 py-4 rounded-full gap-x-2 text-lg">
            <AiOutlinePlusCircle />
            <p>Ceramic Shield</p>
          </div>
          <div className="flex items-center text-white bg-[#1d1d1f] px-6 py-4 rounded-full gap-x-2 text-lg">
            <AiOutlinePlusCircle />
            <p>Immersive pro display</p>
          </div>
          <div className="flex items-center text-white bg-[#1d1d1f] px-6 py-4 rounded-full gap-x-2 text-lg">
            <AiOutlinePlusCircle />
            <p>Camera Control</p>
          </div>
          <div className="flex items-center text-white bg-[#1d1d1f] px-6 py-4 rounded-full gap-x-2 text-lg">
            <AiOutlinePlusCircle />
            <p>Action button</p>
          </div>
        </div>
      </div>
    </div>
  );
}
