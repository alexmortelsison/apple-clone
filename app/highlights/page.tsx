"use client";
import { AiOutlinePlayCircle } from "react-icons/ai";
import React, { useEffect, useRef } from "react";
import { AppleCardsCarouselDemo } from "../components/AppleCardsCarousel";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
export default function HighlightsPage() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  useEffect(() => {
    let animation: gsap.core.Tween;
    if (titleRef.current) {
      animation = gsap.to(titleRef.current, {
        opacity: 1,
        delay: 0.8,
        y: 0,
        duration: 1,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });
    }

    return () => {
      animation?.scrollTrigger?.kill();
    };
  }, []);
  return (
    <div className="min-h-screen min-w-screen bg-[#1d1d1f] text-white font-inter pb-8 overflow-hidden px-4">
      <div className=" max-w-7xl mx-auto">
        <div className="lg:flex lg:justify-between justify-start pt-48">
          <h2
            className="lg:text-5xl text-2xl font-semibold translate-y-20 opacity-0"
            ref={titleRef}
          >
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
