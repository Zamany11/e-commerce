import Image from "next/image";
import prisma from '@/lib/db'
import AddToCart from "@/components/AddToCart";


export default async function ProductPage({
  params
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params; // Await the Promise
  
  const product = await prisma.product.findUnique({
    where: { slug }
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

  const relatedProducts = await prisma.product.findMany({
    where: {
      title: {
        startsWith: `${product.title.split(' ')[0]}`,
      },
    },
  })

  return (
    <div className="container mx-auto p-4 text-black">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/2">
        
          <div className="relative w-full aspect-square overflow-hidden">
          <div className="absolute top-2 left-2 bg-orange-100 text-orange-500 px-2 py-1 rounded-md">
              -{product.discount}%
            </div>
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
          <hr className="mb-4 text-gray-700"/>
          
          <div>
            <span className="font-bold text-2xl py-4 text-gray-600">Key Features</span>
            <p className="my-4">{product.specs}</p>
          </div>
          <div>
            <span className="font-bold text-2xl py-4 text-gray-600">Product Description</span>
            <p className="mb-6">{product.description}</p>
          </div>
          <div className="mb-4 flex flex-col md:flex-row">
            <span className="text-5xl text-red-600 font-bold">
              ₦{product.price.toLocaleString()}
            </span>
            {product.oldPrice && (
              <span className="text-gray-500 line-through md:ml-4">
                ₦{product.oldPrice.toLocaleString()}
              </span>
            )}
            
          </div>
          <AddToCart product={product} />
          
        </div>
      </div>
      <div>
        <h2 className="text-2xl font-bold mt-8">Related Products</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
          {relatedProducts.slice(0, 4).map(relatedProduct => (
            <div key={relatedProduct.id} className="bg-white p-4 rounded shadow">
              <div className="relative w-full aspect-square overflow-hidden">
                <Image
                  src={relatedProduct.images[0]}
                  alt={relatedProduct.title}
                  width={500}
                  height={500}
                  className="w-full h-full object-contain transition-transform duration-300 hover:scale-105"
                  priority
                />
              </div>
              <h3 className="text-sm md:text-lg font-semibold mt-4">{relatedProduct.title}</h3>
              <div className="flex justify-between md:flex-row flex-col mt-2">
                <span className="text-red-600 font-bold">
                  ₦{relatedProduct.price.toLocaleString()}
                </span>
                {relatedProduct.oldPrice && (
                  <span className="text-gray-500 line-through text-sm hidden md:block">
                    ₦{relatedProduct.oldPrice.toLocaleString()}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  const products = await prisma.product.findMany({
    select: { slug: true },
    take: 50 // Limit concurrent connections
  })
  return products.map(p => ({
    slug: p.slug // Match expected Promise structure
  }));
}