import { searchProducts } from "@/app/actions/search";
import ProductCard from "@/components/ProductCards";

// Define the correct page component type with proper types
type Props = {
  params: Record<string, never>; // Use Record<string, never> instead of {}
  searchParams: Record<string, string | string[] | undefined>;
};

export default async function SearchResults({ searchParams }: Props) {
  const queryParam = searchParams.query;
  const query = typeof queryParam === 'string' ? queryParam : 
                Array.isArray(queryParam) ? queryParam[0] : "";
  
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
    oldPrice: product.oldPrice || product.price,
    discount: product.discount || 0,
    imageUrl: product.images[0] || "/placeholder.jpg",
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