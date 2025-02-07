import CategoryBar from "@/components/CategoryBar";
import FeaturedProductList from "@/components/FeaturedProductList";
import HeroSection from "@/components/HeroSection";
import NewsLetter from "@/components/NewsLetter";

export default function Home() {
  return (
    <div className="bg-slate-100">  
      <CategoryBar />
      <HeroSection />
      <FeaturedProductList />
      <NewsLetter />
    </div>
  );
}
