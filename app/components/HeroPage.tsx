"use client";
import Image from "next/image";
import React, { useState } from "react";

export default function HeroPage() {
  const [isVideoFinished, setIsVideoFinished] = useState(false);

  const handleVideoEnd = () => {
    setIsVideoFinished(true);
  };
  return (
    <div className="h-screen w-screen overflow-hidden bg-black relative inset-0 -z-50 font-inter">
      {!isVideoFinished && (
        <div className="h-screen w-fit">
          <video
            src={"/appleintro.mp4"}
            autoPlay
            muted
            playsInline
            className="object-cover"
            onEnded={handleVideoEnd}
          />
        </div>
      )}

      {isVideoFinished && (
        <Image
          src={"/hero.jpg"}
          alt="hero"
          width={2000}
          height={2000}
          className="object-contain px-64 pt-32"
        />
      )}
    </div>
  );
}
