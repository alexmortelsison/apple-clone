import React from "react";
import HeroPage from "./components/HeroPage";
import HighlightsPage from "./highlights/page";
import ComparePage from "./compare/page";
import CloserPage from "./closer/page";

export default function HomePage() {
  return (
    <div className="">
      <HeroPage />
      <HighlightsPage />
      <ComparePage />
      <CloserPage />
    </div>
  );
}
