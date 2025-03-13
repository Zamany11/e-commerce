

import { searchProducts } from "@/app/actions/search";
import ProductCard from "@/components/ProductCards";

export default async function SearchResults({
  searchParams,
}: {
  searchParams: { query: string };
}) {
  const query = searchParams.query;
  
  if (!query) {
    return (
      <div className="container mx-auto p-4">
        <h2 className="text-3xl font-bold mb-4">Search Results</h2>
        <p>Please enter a search term to find products.</p>
      </div>
    );
  }
  
  const products = await searchProducts(query);
  
  // Transform products to match the expected ProductCard interface
  const formattedProducts = products.map(product => ({
    title: product.title,
    price: product.price,
    oldPrice: product.oldPrice || product.price, // Fallback if oldPrice is null
    discount: product.discount || 0, // Fallback if discount is null
    imageUrl: product.images[0] || "/placeholder.jpg", // Use first image or placeholder
    category: product.category,
    slug: product.slug
  }));

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl text-center text-gray-700 font-bold mb-4">
        Search Results for &quot;{query}&quot;
      </h2>
      
      {products.length === 0 ? (
        <p className="text-center text-gray-700 text-md">Sorry, No products found matching &quot;{query}&quot;</p>
      ) : (
        <div>
          <ProductCard 
            productcards={formattedProducts} 
            title={query}
          />
        </div>
      )}
    </div>
  );
}