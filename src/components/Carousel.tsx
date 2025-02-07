"use client";
import { Carousel } from "@/components/ui/carousel";

export function CarouselFunction() {
  const slideData = [
    {
      title: "Mystic Mountains",
      button: "Explore Component",
    },
    {
      title: "Urban Dreams",
      button: "Explore Component",
    },
    {
      title: "Neon Nights",
      button: "Explore Component",
    },
    {
      title: "Desert Whispers",
      button: "Explore Component",
    },
  ];

  return (
    <section className="bg-slate-100 py-4"> {/* Reduced vertical padding */}
      <div className="container mx-auto px-0 md:px-4"> {/* Removed grid, added horizontal padding */}
        <div className="bg-white rounded-md overflow-hidden"> {/* Contained white background */}
          <div className="relative w-full h-[400px] md:h-[500px]"> {/* Reduced height */}
            <Carousel slides={slideData} />
          </div>
        </div>
      </div>
    </section>
  );
}
