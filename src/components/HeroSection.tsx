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
    speed: 3000,
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
      subtitle: "AMAZING DEALS FOR EVERYONE",
      title: "Save More on Latest Infinix Phones",
      description: "Enjoy Up To 20% OFF",
    },
    {
      image: "/images/IMG_9669.jpeg",
      subtitle: "AMAZING DEALS FOR EVERYONE",
      title: "Save More on Latest Infinix Phones",
      description: "Enjoy Up To 20% OFF",
    },
    {
      image: "/images/IMG_9667.jpeg",
      subtitle: "AMAZING DEALS FOR EVERYONE",
      title: "Save More on Latest Infinix Phones",
      description: "Enjoy Up To 20% OFF",
    },
    // ... other slides
  ];

  return (
    <section className="bg-gray-900 relative overflow-hidden">
      <Slider {...settings} className="relative">
        {slides.map((slide, index) => (
          <div key={index} className="relative h-[32rem]">
            <div className="container mx-auto px-4 h-full">
              <div className="grid grid-cols-1 md:grid-cols-2 h-full">
                {/* Left side - Text Content */}
                <div className="flex items-center">
                  <div className={`space-y-6 transition-all duration-1000 ${
                    currentSlide === index ? 
                      "opacity-100 translate-y-0" : 
                      "opacity-0 translate-y-10"
                  }`}>
                    <span className="text-cyan-400 text-lg font-medium">
                      {slide.subtitle}
                    </span>
                    <h1 className="text-4xl md:text-5xl font-bold text-white space-y-2">
                      <div>{slide.title}</div>
                      <div className="text-3xl md:text-4xl">{slide.description}</div>
                    </h1>
                    <div className="pt-4">
                      <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg text-lg font-medium">
                        Start Buying
                      </button>
                    </div>
                  </div>
                </div>

                {/* Right side - Image */}
                <div className="relative h-full hidden md:block">
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>

      {/* Slider dots customization */}
      <style jsx global>{`
        .slick-dots {
          bottom: 20px;
        }
        .slick-dots li button:before {
          color: white;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
