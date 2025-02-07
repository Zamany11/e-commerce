import React from "react";
import Marquee from "react-fast-marquee";
import Image from "next/image";
import "./ui/LogoMarquee.css"; // Custom CSS for styling

const logos = [
  { src: "/images/Infinix-Logo.webp", alt: "Logo 1" },
  { src: "/images/iphone-logo.png", alt: "Logo 2" },
  { src: "/images/samsung-logo.png", alt: "Logo 3" },
  { src: "/images/itel-logo.jpeg", alt: "Logo 4" },
  { src: "/images/redmi-logo.png", alt: "Logo 5" },
  { src: "/images/techno-logo.png", alt: "Logo 6" },
];

const LogoMarquee = () => {
  return (
    <section className="pb-5 md:px-8 md:rounded-md">
      <div className="logo-marquee-container md:rounded-sm">
      <h2 className="title py-2 mb-4 font-bold text-orange-100">Trusted By Our Top Brands</h2>
      <Marquee speed={50} gradient={false} pauseOnHover={true}>
        {logos.map((logo, index) => (
          <div key={index} className="logo-item">
            <Image src={logo.src} alt={logo.alt} width={100} height={100} />
          </div>
        ))}
      </Marquee>
    </div>
    </section>
    
  );
};

export default LogoMarquee;
