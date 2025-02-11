import Image from "next/image";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


interface PageProps {
  params: {
    slug: string;
  };
}

export default async function ProductPage({ params }: PageProps) {
  const product = await prisma.product.findUnique({
    where: {
      slug: params.slug
    },
  });

  if (!product) {
    return (
      <div className="container mx-auto p-4">
        <p className="text-center text-xl">Product not found!</p>
      </div>
    );
  }

  if (!product.images?.length) {
    return (
      <div className="container mx-auto p-4">
        <p className="text-center text-xl">No images available</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4 text-black">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/2">
          <div className="relative w-full aspect-square overflow-hidden">
            <Image
              src={product.images[0]}
              alt={product.title}
              width={500}
              height={500}
              className="w-full h-full object-contain transition-transform duration-300 hover:scale-105"
              priority
            />
          </div>
        </div>

        <div className="md:w-1/2">
          <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
          <div className="mb-4">
            <span className="text-2xl text-red-600 font-bold">
              ₦{product.price.toLocaleString()}
            </span>
            {product.oldPrice && (
              <span className="text-gray-500 line-through ml-4">
                ₦{product.oldPrice.toLocaleString()}
              </span>
            )}
            {product.discount && (
              <span className="text-green-600 ml-4 font-semibold">
                -{product.discount}%
              </span>
            )}
          </div>
          <p className="mb-6">{product.description}</p>
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded transition-colors">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

// Add explicit return type for generateStaticParams
export async function generateStaticParams(): Promise<Array<{ slug: string }>> {
  const products = await prisma.product.findMany({
    select: {
      slug: true
    }
  });

  return products.map(product => ({ slug: product.slug }));
}
