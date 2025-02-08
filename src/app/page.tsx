import CategoryBar from "@/components/CategoryBar";
import FeaturedProductList from "@/components/FeaturedProductList";
import HeroSection from "@/components/HeroSection";
import LogoMarquee from "@/components/LogoMarquee";
import Nav2 from "@/components/Nav-2";
import NewsLetter from "@/components/NewsLetter";

export default function Home() {
  return (
    <div className="bg-slate-100">  
      <Nav2 />
      <HeroSection />
      <CategoryBar />
      <FeaturedProductList />
      <div className="mt-8">
        <LogoMarquee /> 
      </div>
      <NewsLetter />
    </div>
  );
}
