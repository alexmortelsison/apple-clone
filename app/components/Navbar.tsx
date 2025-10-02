import { AiFillApple } from "react-icons/ai";
import React from "react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

export default function Navbar() {
  return (
    <div className="bg-transparent absolute pt-4 text-white justify-center min-w-screen mx-auto font-inter">
      <div className="flex space-x-12 w-full text-[12px] text-gray-400 items-center justify-center px-96">
        <HoverCard>
          <HoverCardTrigger className="hover:cursor-pointer text-xl text-white">
            <AiFillApple />
          </HoverCardTrigger>
        </HoverCard>
        <HoverCard>
          <HoverCardTrigger className="hover:cursor-pointer">
            Store
          </HoverCardTrigger>
          <HoverCardContent className="h-[300px] w-screen bg-[#1d1d1f]"></HoverCardContent>
        </HoverCard>
        <HoverCard>
          <HoverCardTrigger className="hover:cursor-pointer">
            Mac
          </HoverCardTrigger>
          <HoverCardContent className="h-[300px] w-screen bg-[#1d1d1f]"></HoverCardContent>
        </HoverCard>
        <HoverCard>
          <HoverCardTrigger className="hover:cursor-pointer">
            iPad
          </HoverCardTrigger>
          <HoverCardContent className="h-[300px] w-screen bg-[#1d1d1f]"></HoverCardContent>
        </HoverCard>
        <HoverCard>
          <HoverCardTrigger className="hover:cursor-pointer">
            iPhone
          </HoverCardTrigger>
          <HoverCardContent className="h-[300px] w-screen bg-[#1d1d1f]"></HoverCardContent>
        </HoverCard>
        <HoverCard>
          <HoverCardTrigger className="hover:cursor-pointer">
            Watch
          </HoverCardTrigger>
          <HoverCardContent className="h-[300px] w-screen bg-[#1d1d1f]"></HoverCardContent>
        </HoverCard>
        <HoverCard>
          <HoverCardTrigger className="hover:cursor-pointer">
            Airpods
          </HoverCardTrigger>
          <HoverCardContent className="h-[300px] w-screen bg-[#1d1d1f]"></HoverCardContent>
        </HoverCard>
        <HoverCard>
          <HoverCardTrigger className="hover:cursor-pointer">
            Support
          </HoverCardTrigger>
          <HoverCardContent className="h-[300px] w-screen bg-[#1d1d1f]"></HoverCardContent>
        </HoverCard>
      </div>
      <div className="bg-[#1d1d1f] w-full flex justify-center items-center h-[50px] mt-4">
        <p className="text-sm text-gray-300">
          Get up to $200–$700 in credit toward iPhone 17 Pro when you trade in
          iPhone 13 or higher.1
        </p>
      </div>
    </div>
  );
}
