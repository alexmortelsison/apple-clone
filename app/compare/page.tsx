"use client";
import { AiFillPlusCircle } from "react-icons/ai";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";

export default function ComparePage() {
  const titleRef = useRef(null);
  const pRef = useRef(null);
  const designRef = useRef(null);
  useEffect(() => {
    gsap.to(designRef.current, {
      opacity: 1,
      delay: 0.6,
      y: 20,
      duration: 1.2,
      ease: "power2.inOut",
    });
    gsap.to(titleRef.current, {
      opacity: 1,
      delay: 0.8,
      y: 20,
      duration: 1.2,
      ease: "power2.inOut",
    });
    gsap.to(pRef.current, {
      opacity: 1,
      delay: 1.2,
      y: 20,
      duration: 1.2,
      ease: "power2.inOut",
    });
  });
  return (
    <div className="min-h-screen w-full bg-black font-inter text-white pb-12">
      <div className="flex flex-col justify-center items-center pt-36">
        <p
          className="text-2xl text-[#ff7917] font-semibold opacity-0 translate-y-20"
          ref={designRef}
        >
          Design
        </p>
        <h1
          className="text-7xl font-semibold text-center pt-2 tracking-tight opacity-0 translate-y-20"
          ref={titleRef}
        >
          Unibody enclosure.
          <br /> Makes a strong case for itself.
        </h1>
        <p
          className="text-center w-[950px] text-xl pt-8 text-gray-400 opacity-0 translate-y-20"
          ref={pRef}
        >
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
