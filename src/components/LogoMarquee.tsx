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
    <section className="container mx-auto rounded-md">
      <div className="logo-marquee-container md:rounded-sm">
      <Marquee speed={50} gradient={false} pauseOnHover={true}>
        {logos.map((logo, index) => (
          <div key={index} className="mx-6 md:mx-12 logo-item">
            <Image src={logo.src} alt={logo.alt} width={60} height={60} />
          </div>
        ))}
      </Marquee>
    </div>
    </section>
    
  );
};

export default LogoMarquee;
