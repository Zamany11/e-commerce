// components/HeroSection.tsx
"use client";
import Slider from "react-slick";
import { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
    arrows: false,
    beforeChange: (current: number, next: number) => setCurrentSlide(next),
  };

  const slides = [
    {
      image: "/images/IMG_9668.jpeg",
      title: "iPhone 15 Pro Max",
      price: "₦1,970,999",
      oldPrice: "₦2,300,000",
    },
    {
      image: "/images/IMG_9669.jpeg", 
      title: "Samsung Galaxy S24 Ultra",
      price: "₦950,000",
      oldPrice: "₦1,100,000",
    },
    {
        image: "/images/IMG_9666.jpeg", 
        title: "Samsung Galaxy S24 Ultra",
        price: "₦950,000",
        oldPrice: "₦1,100,000",
      },
      {
        image: "/images/IMG_9667.jpeg", 
        title: "Samsung Galaxy S24 Ultra",
        price: "₦950,000",
        oldPrice: "₦1,100,000",
      }
  ];

  return (
    <section className="bg-gray-900 relative overflow-hidden">
      {/* Auto-sliding Carousel */}
      <Slider {...settings} className="relative">
        {slides.map((slide, index) => (
          <div key={index} className="relative h-[20rem]">
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              className="object-cover opacity-90"
              priority

            />
            
            {/* Animated Text Content */}
            <div className="absolute inset-0 bg-black/40 flex items-center">
              <div className="container mx-auto px-4">
                <div className={`max-w-2xl space-y-6 transition-all duration-1000 ${
                  currentSlide === index ? 
                    "opacity-100 translate-y-0" : 
                    "opacity-0 translate-y-10"
                }`}>
                  <h1 className="text-5xl font-bold text-white animate__animated animate__fadeInUp">
                    {slide.title}
                  </h1>
                  <div className="flex gap-4 items-center animate__animated animate__fadeInUp animate__delay-1s">
                    <span className="text-3xl font-bold text-green-400">
                      {slide.price}
                    </span>
                    <span className="text-xl line-through text-gray-300">
                      {slide.oldPrice}
                    </span>
                  </div>
                  <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg animate__animated animate__fadeInUp animate__delay-2s">
                    Shop Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>

      {/* Category Menu - Add this section back if needed */}
      {/* <div className="absolute bottom-0 w-full bg-black/80 backdrop-blur-sm">
        ...
      </div> */}
    </section>
  );
};

export default HeroSection;
