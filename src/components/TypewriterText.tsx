"use client";
import { TypewriterEffect } from "../components/ui/typewritter-effect";

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
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center h-[10rem] ">
    
      <TypewriterEffect words={words} />
      
    </div>
  );
}
