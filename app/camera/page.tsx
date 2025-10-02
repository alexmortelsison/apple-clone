"use client";
import gsap from "gsap";
import Image from "next/image";
import React, { useEffect, useRef } from "react";

export default function CameraPage() {
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
    <div className="h-[150vh] w-full bg-black font-inter text-white pb-12">
      <div className="flex flex-col justify-center items-center pt-36">
        <p
          className="text-2xl text-[#ff7917] font-semibold opacity-0 translate-y-20"
          ref={designRef}
        >
          Cameras
        </p>
        <h1
          className="text-7xl font-semibold text-center pt-2 tracking-tight opacity-0 translate-y-20"
          ref={titleRef}
        >
          A big zoom forward.
        </h1>
        <div>
          <div className="flex absolute left-0 pt-62 space-x-24">
            <Image
              src={"/side.jpg"}
              alt="iphone"
              width={1100}
              height={600}
              className="object-cover pt-4 w-[1100px] h-auto"
            />
            <div className="flex flex-col pt-48 text-2xl text-gray-400 tracking-tight">
              <p>Up to</p>
              <p className="text-6xl text-[#ff7917] font-semibold">8x</p>
              <p>optical-quality zoom</p>
              <div className="flex flex-col pt-24 text-2xl text-gray-400">
                <p>All</p>
                <p className="text-6xl text-[#ff7917] font-semibold">48MP</p>
                <p>rear cameras</p>
              </div>
            </div>
          </div>
          <p
            className="text-center w-[950px] text-xl pt-4 text-gray-400 opacity-0 translate-y-20"
            ref={pRef}
          >
            Across the iPhone 17 Pro camera system, you&apos;ll find innovation
            that goes to great lengths. The telephoto features the next
            generation of our tetraprism design and a 56 percent larger sensor.
            With an equivalent 200 mm focal length, the 8x optical-quality zoom
            makes this the longest iPhone Telephoto ever — offering 16x total
            optical zoom range. So you can explore an even wider range of
            creative choices and add a longer reach to your compositions.
          </p>
        </div>
        {/* <div className="flex bg-[#1d1d1f] items-center gap-x-4 px-8 py-4 rounded-full font-semibold absolute">
          <button>Compare iPhone design</button>
          <div className="text-2xl text-blue-500">
            <AiFillPlusCircle />
          </div>
        </div> */}
      </div>
    </div>
  );
}
