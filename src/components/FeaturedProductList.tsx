"use client"
import { useEffect, useState } from "react";
import AdvertCard from "./AdvertCard";
import FlashSaleCard from "./ui/FlashSaleCard";
import LogoMarquee from "./LogoMarquee";
import { products } from "./products";

const FeaturedProductList = () => {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  const endTime = new Date();
  endTime.setHours(endTime.getHours() + 7);
  endTime.setMinutes(endTime.getMinutes() + 19);
  endTime.setSeconds(endTime.getSeconds() + 25);

  // Your products array remains the same

  if (!mounted) {
    return null;
  }

  // Array of products
  

  return (
    <div className="space-y-8 pb-8">
      <FlashSaleCard
        endTime={endTime}
        products={products.slice(0, 4)}
        title="Top Deals"
      />
      <div className="my-8">
       <AdvertCard /> 
      </div>
      

      <FlashSaleCard
        endTime={endTime}
        products={products.slice(4)}
        title="Flash Sales"
      />

      <div className="my-8">
        <LogoMarquee /> 
      </div>

      <FlashSaleCard
        endTime={endTime}
        products={products.slice(4, 8)}
        title="For you"
      />
    </div>
  );
};

export default FeaturedProductList;
