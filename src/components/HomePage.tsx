"use client";
import { useState } from "react";
import CategoryBar from "./CategoryBar";
import FeaturedProductList from "./FeaturedProductList";

export default function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState("Featured");

  return (
    <>
      <CategoryBar onCategoryChange={(category: string) => setSelectedCategory(category)} />
      <FeaturedProductList selectedCategory={selectedCategory} />
    </>
  );
}
