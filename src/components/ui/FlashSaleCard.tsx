"use client";

import Image from 'next/image';
import { useState, useEffect } from 'react';

interface Product {
  title: string;
  price: number;
  oldPrice: number;
  discount: number;
  imageUrl: string;
}

interface FlashSaleCardProps {
  products: Product[];
  endTime: Date;
}

const FlashSaleCard = ({ products, endTime }: FlashSaleCardProps) => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const difference = endTime.getTime() - now.getTime();

      if (difference > 0) {
        const hours = Math.floor(difference / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ hours, minutes, seconds });
      } else {
        clearInterval(timer);
        setTimeLeft({ hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [endTime]);

  return (
    <section className='bg-slate-100'>
    <div className="flex flex-col md:container md:mx-auto">
      {/* Flash Sale Header */}
      <div className="bg-red-600  text-white p-3 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          <span className="font-bold">Flash Sale</span>
        </div>
        <div className="flex items-center gap-2">
          <span>Time Left:</span>
          <span className="font-mono">
            {String(timeLeft.hours).padStart(2, '0')}h : 
            {String(timeLeft.minutes).padStart(2, '0')}m : 
            {String(timeLeft.seconds).padStart(2, '0')}s
          </span>
        </div>
      </div>

      {/* Product Cards Container */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {products.map((product, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-3 md:p-4 relative">
            {/* Discount Badge */}
            <div className="absolute top-2 left-2 bg-orange-100 text-orange-500 px-2 py-1 rounded-md">
              -{product.discount}%
            </div>

            {/* Product Image */}
            <div className="aspect-square overflow-hidden mb-4">
              <Image 
                src={product.imageUrl} 
                alt={product.title} 
                className="w-full h-full object-contain hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Product Info */}
            <div className="space-y-2">
              <h3 className="text-sm md:text-lg text-black font-bold line-clamp-2">{product.title}</h3>
              <div className="flex flex-col">
                <span className="text-red-600 font-bold">₦{product.price.toLocaleString()}</span>
                <span className="text-gray-400 line-through text-sm">₦{product.oldPrice.toLocaleString()}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </section>
  );
};

export default FlashSaleCard;
