import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import HomePage from "@/components/HomePage";
import LogoMarquee from "@/components/LogoMarquee";
import Nav2 from "@/components/Nav-2";

export default function Home() {
  return (
    <div className="bg-slate-100">  
      <Nav2 />
      <HeroSection />
      <HomePage />
      <div className="mt-8">
        <LogoMarquee /> 
      </div>
      <Footer />
    </div>
  );
}
