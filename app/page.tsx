import React from "react";
import HeroPage from "./components/HeroPage";
import HighlightsPage from "./highlights/page";
import ComparePage from "./compare/page";
import CloserPage from "./closer/page";
import CameraPage from "./camera/page";

export default function HomePage() {
  return (
    <div className="">
      <HeroPage />
      <HighlightsPage />
      <ComparePage />
      <CloserPage />
      <CameraPage />
    </div>
  );
}
