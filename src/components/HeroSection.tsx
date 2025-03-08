"use client";
import Slider from "react-slick";
import { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import LogoMarquee from "./LogoMarquee";

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
      image: "/images/IMG_9665-removebg-preview.png",
      title: "Save More on Latest Apple iPhones",
      description: "Enjoy Up To 20% OFF",
    },
    {
      image: "/images/IMG_9666-removebg-preview.png",
      title: "Save More on Latest Samsung Phones",
      description: "Enjoy Up To 30% OFF",
    },
    {
      image: "/images/IMG_9667-removebg-preview.png",
      title: "Transform Nature With Redmi Phones",
      description: "Enjoy Up To 25% OFF",
    },
    // ... other slides
  ];

  const rightCards = [
    {
      icon: "/images/truck-icon.jpeg",
      title: "Fast Delivery",
      description: "Conveniently Pay on Delivery"
    },
    {
      icon: "/images/customer-care.jpeg",
      title: "24/7 Help Center",
      description: "Dedicated online and offline support"
    },
    {
      icon: "/images/tick-image.webp",
      title: "Shop With Confidence",
      description: "Tested, trusted and reliable"
    },
    {
      icon: "/images/secure-image.jpeg",
      title: "Safe Payment",
      description: "100% secure payment"
    }
  ];
  return (
    <section className="bg-slate-200 md:px-8 py-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
          {/* Left side - Slider (8 columns) */}
          <div className="lg:col-span-8 bg-white rounded-lg">
            <Slider {...settings}>
              {slides.map((slide, index) => (
                <div key={index} className="relative h-[300px] md:h-[400px]">
                  <div className="grid grid-cols-2 h-full">
                    <div className="flex items-center p-8">
                      <div className={`space-y-6 transition-all duration-1000 ${
                        currentSlide === index ? 
                          "opacity-100 translate-y-0" : 
                          "opacity-0 translate-y-10"
                      }`}>
                        <h1 className="text-xl md:text-3xl font-bold text-gray-900">
                          <div>{slide.title}</div>
                          <div className="text-sm md:text-lg text-red-400">{slide.description}</div>
                        </h1>
                        <button className="bg-orange-500 hover:bg-orange-600 font-bold text-white px-10 py-1 rounded-lg">
                          Shop
                        </button>
                      </div>
                    </div>
                    <div className="relative">
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
              ))}
            </Slider>
          </div>

          {/* Right side - Cards (4 columns) */}
<div className="lg:col-span-4">
  <div className="flex lg:grid lg:grid-cols-2 overflow-x-auto lg:overflow-hidden gap-4 pb-4 [&::-webkit-scrollbar]:hidden">
    {rightCards.map((card, index) => (
      <div 
        key={index} 
        className="bg-white rounded-lg p-4 flex flex-col flex-shrink-0 w-[60vw] lg:w-auto"
      >
        <div className="h-[70px] md:h-[100px] relative mb-2">
          <Image
            src={card.icon}
            alt={card.title}
            fill
            className="object-contain p-4"
          />
        </div>
        <div className="text-center">
          <h3 className="font-semibold text-gray-800 text-sm mb-1">
            {card.title}
          </h3>
          <p className="text-orange-500 text-xs">
            {card.description}
          </p>
        </div>
      </div>
    ))}
  </div>
</div>
</div>
<div className="mt-2 md:mt-8">
<LogoMarquee />
</div>
</div>


      <style jsx global>{`
        .slick-dots {
          bottom: 20px;
        }
        .slick-dots li button:before {
          color: black;
        }
      `}</style>
    </section>
  );
};
export default HeroSection;
