import CategoryBar from "@/components/CategoryBar";
import FeaturedProductList from "@/components/FeaturedProductList";
import HeroSection from "@/components/HeroSection";

export default function Home() {
  return (
    <div>  
      <CategoryBar />
      <HeroSection />
      <FeaturedProductList />
    </div>
  );
}
