import React from "react";
import { FlipWords } from "../components/ui/flip-words";

export function FlipWordsComponent() {
  const words = ["Enjoy best deals on smartphones", "Shop at sweet and affordable rates", "Engage with a reliable and trusted brand", "Enjoy Discounts up to 30% on sales", "Secure payment methods and fast processing", "Seamless delivery at your doorstep"];

  return (
    <div className="w-full bg-yellow-500">
      <div className="container mx-auto">
        <div className="text-4xl font-normal text-neutral-600 dark:text-neutral-400 flex items-center justify-center py-2">
          <FlipWords words={words} />
        </div>
      </div>
    </div>
  );
}
