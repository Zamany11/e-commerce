import CategoryBar from "@/components/CategoryBar";
import { FlipWordsComponent } from "@/components/FlipWords";
import HeroSection from "@/components/HeroSection";

export default function Home() {
  return (
    <div>
      <FlipWordsComponent />
      <CategoryBar />
      <HeroSection />
    </div>
  );
}
