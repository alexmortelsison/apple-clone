import React from "react";
import HeroPage from "./components/HeroPage";
import HighlightsPage from "./highlights/page";

export default function HomePage() {
  return (
    <div className="">
      <HeroPage />
      <HighlightsPage />
    </div>
  );
}
