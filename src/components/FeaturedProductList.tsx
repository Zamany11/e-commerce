"use client";
import AdvertCard from "./AdvertCard";
import FlashSaleCard from "./ui/FlashSaleCard";
import ProductCard from "./ProductCards";
import { LimitedOfferProducts } from "./LimitedOfferProducts";
import { topdeals } from "./TopDealsProducts";
import { ForYou } from "./ForYouProducts";
import { AllProducts } from "./AllProducts";

interface FeaturedProductListProps {
  selectedCategory: string;
}

const FeaturedProductList = ({ selectedCategory }: FeaturedProductListProps) => {
  const renderContent = () => {
    switch (selectedCategory) {
      case "Featured":
        return (
          <>
            <FlashSaleCard 
            endTime={new Date()} 
            products={LimitedOfferProducts} 
            title="Limited Offers" />

            <AdvertCard />

            <ProductCard productcards={topdeals} title="Top Deals" />

            <ProductCard productcards={ForYou} title="For You" />
          </>
        );
      case "Accessories":
        return <ProductCard productcards={AllProducts.filter(p => p.category === "Accessories")} />;
      case "Iphones":
        return <ProductCard productcards={AllProducts.filter(p => p.category === "Iphones")}  />;
      case "Samsung":
        return <ProductCard productcards={AllProducts.filter(p => p.category === "Samsung")} />;
        case "Itel":
          return <ProductCard productcards={AllProducts.filter(p => p.category === "Itel")} />;
          case "Redmi":
        return <ProductCard productcards={AllProducts.filter(p => p.category === "Redmi")}  />;
        case "Techno":
        return <ProductCard productcards={AllProducts.filter(p => p.category === "Techno")} />;
        case "Infinix":
        return <ProductCard productcards={AllProducts.filter(p => p.category === "Infinix")}  />;
      default:
        return null;
    }
  };

  return <div className="space-y-8 pb-8">{renderContent()}</div>;
};

export default FeaturedProductList;
