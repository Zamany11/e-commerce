import React from "react";
import { FlipWords } from "../components/ui/flip-words";

export function FlipWordsComponent() {
  const words = ["Cheap", "Affordable", "Reliable", "Authentic"];

  return (
    <div className="">
      <div className="text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
        Very
        <FlipWords words={words} />
      </div>
    </div>
  );
}
