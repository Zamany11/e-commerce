"use client"
import { useEffect, useState } from "react";
import AdvertCard from "./AdvertCard";
import FlashSaleCard from "./ui/FlashSaleCard";

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
  const products = [
    {
      title: "iPhone 15 Pro Max",
      price: 660579,
      oldPrice: 850000,
      discount: 22,
      imageUrl: "/images/IMG_9665-removebg-preview.png"
    },
    {
      title: "Samsung Galaxy S24 Ultra",
      price: 550000,
      oldPrice: 700000,
      discount: 21,
      imageUrl: "/images/IMG_9666-removebg-preview.png"
    },
    {
      title: "Google Pixel 8 Pro",
      price: 480000,
      oldPrice: 600000,
      discount: 20,
      imageUrl: "/images/IMG_9666-removebg-preview.png"
    },
    {
      title: "Xiaomi 14 Pro",
      price: 420000,
      oldPrice: 520000,
      discount: 19,
      imageUrl: "/images/IMG_9667-removebg-preview.png"
    },
    {
      title: "Xiaomi 14 Pro",
      price: 420000,
      oldPrice: 520000,
      discount: 19,
      imageUrl: "/images/IMG_9667-removebg-preview.png"
    },
    {
      title: "Xiaomi 14 Pro",
      price: 420000,
      oldPrice: 520000,
      discount: 19,
      imageUrl: "/images/IMG_9667-removebg-preview.png"
    },
    {
      title: "Xiaomi 14 Pro",
      price: 420000,
      oldPrice: 520000,
      discount: 19,
      imageUrl: "/images/IMG_9667-removebg-preview.png"
    },
    {
      title: "Xiaomi 14 Pro",
      price: 420000,
      oldPrice: 520000,
      discount: 19,
      imageUrl: "/images/IMG_9667-removebg-preview.png"
    }
  ];

  return (
    <div className="space-y-8">
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
    </div>
  );
};

export default FeaturedProductList;
