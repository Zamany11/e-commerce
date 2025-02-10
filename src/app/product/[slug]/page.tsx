import Image from "next/image";
import { AllProducts } from "@/components/AllProducts";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ProductPage({ params }: PageProps) {
  // Resolve the params promise first
  const { slug } = await params;
  
  // Now use the resolved slug
  const product = AllProducts.find((p) => p.slug === slug);

  if (!product) {
    return (
      <div className="container mx-auto p-4">
        <p className="text-center text-xl">Product not found!</p>
      </div>
    );
  }
  
  return (
    <div className="container mx-auto p-4 text-black">
      {/* Responsive layout: column on small screens, row on medium and above */}
      <div className="flex flex-col md:flex-row gap-8">
        {/* Product Image */}
        <div className="md:w-1/2">
          <div className="relative w-full aspect-square overflow-hidden">
            <Image
              src={product.imageUrl}
              alt={product.title}
              width={500}
              height={500}
              className="w-full h-full object-contain transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>

        {/* Product Details */}
        <div className="md:w-1/2">
          <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
          <div className="mb-4">
            <span className="text-2xl text-red-600 font-bold">
              ₦{product.price.toLocaleString()}
            </span>
            <span className="text-gray-500 line-through ml-4">
              ₦{product.oldPrice.toLocaleString()}
            </span>
            <span className="text-green-600 ml-4 font-semibold">
              -{product.discount}%
            </span>
          </div>
          {/* A sample product description; you can expand this section */}
          <p className="mb-6">
            This is a detailed description of the product. It includes features,
            specifications, warranty details, and other relevant information to help
            customers make an informed decision.
          </p>
          {/* Call-to-Action Button */}
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded transition-colors">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

/*
 * To enable static generation of all dynamic routes, export generateStaticParams.
 * This function will generate a list of params objects for each product.
 */
export async function generateStaticParams(): Promise<{ slug: string }[]> {
  return AllProducts.map((product) => ({
    slug: product.slug,
  }));
}
