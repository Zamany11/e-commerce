"use client";
import { TypewriterEffect } from "../components/ui/typewritter-effect";
import { FlipWordsComponent } from "./FlipWords";

export function TypewriterText() {
  const words = [
    {
      text: "Enjoy",
    },
    {
      text: "best",
    },
    {
      text: "deals",
    },
    {
      text: "on",
    },
    {
      text: "Smartphones.",
      className: "text-white",
    },
    {
      text: "Get",
    },
    {
      text: "in",
    },
    {
      text: "touch",
    },
    {
      text: "with",
    },
    {
      text: "your",
    },
    {
      text: "favourite",
    },
    {
      text: "Accessories.",
      className: "text-white",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center h-[ 10rem] ">
    
      <TypewriterEffect words={words} />
      <FlipWordsComponent />
      
    </div>
  );
}
