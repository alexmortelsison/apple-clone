"use client";
import Image from "next/image";
import React, { useState } from "react";

export default function HeroPage() {
  const [isVideoFinished, setIsVideoFinished] = useState(false);

  const handleVideoEnd = () => {
    setIsVideoFinished(true);
  };
  return (
    <div className="min-h-screen w-screen overflow-hidden bg-black relative inset-0 -z-50 font-inter">
      {!isVideoFinished && (
        <div className="min-h-screen w-fit hidden md:inline-block">
          <video
            src={"/appleintro.mp4"}
            autoPlay
            muted
            playsInline
            className="object-cover "
            onEnded={handleVideoEnd}
          />
        </div>
      )}

      {isVideoFinished && (
        <div className="flex justify-center w-screen min-h-screen">
          <Image
            src={"/hero.jpg"}
            alt="hero"
            width={2000}
            height={2000}
            className="lg:object-cover lg:px-64 pt-32 object-fill w-fit md:w-full lg:h-[920px] "
          />
          <div className="absolute text-white bottom-16 flex flex-col font-semibold items-center">
            <button className="bottom-24 bg-blue-700 px-2 py-2 rounded-full font-semibold w-[60px]">
              Buy
            </button>
            <p className="pt-4">From $1099 or $45.79/mo. for 24 mo.*</p>
          </div>
        </div>
      )}
    </div>
  );
}
