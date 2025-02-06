import React from "react";
import { FlipWords } from "../components/ui/flip-words";

export function FlipWordsComponent() {
  const words = ["Enjoy best deals on good smartphones", "Shop at sweet and affordable rates", "Engage with a trusted brand", "Enjoy Discounts up to 30% on sales", "Secure payment, fast processing", "Seamless delivery at your doorstep"];

  return (
    <div className="w-full bg-yellow-500">
      <div className="container mx-auto">
        <div className="flex items-center justify-center py-1 text-xl md:text-2xl">
             
          <FlipWords 
            words={words} 
            duration={3000}
            className="px-2 text-center hyphens-auto"
          />
        </div>
      </div>
    </div>
  );
}
