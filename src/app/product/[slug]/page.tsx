"use client";
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Product } from '../../../types/product'; // Define your product type

export default function ProductPage({ params }: { params: { slug: string } }) {
  const [product, setProduct] = useState<Product | null>(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`/api/products/${params.slug}`);
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };

    fetchProduct();
  }, [params.slug]);

  if (!product) return <div>Loading...</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Image Gallery */}
        <div className="space-y-4">
          <div className="aspect-square relative bg-gray-100 rounded-lg">
            <Image
              src={product.images[selectedImage]}
              alt={product.title}
              fill
              className="object-contain p-4"
            />
          </div>
          <div className="flex gap-2 overflow-x-auto">
            {product.images.map((img, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`min-w-[100px] aspect-square relative rounded-lg border-2 ${
                  selectedImage === index ? 'border-orange-500' : 'border-gray-200'
                }`}
                aria-label={`Select image ${index + 1}`}
              >
                <Image
                  src={img}
                  alt={product.title}
                  fill
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Product Details */}
        <div className="space-y-6">
          <h1 className="text-3xl font-bold">{product.title}</h1>
          
          <div className="flex items-center gap-4">
            <span className="text-2xl text-red-600 font-bold">
              ₦{product.price.toLocaleString()}
            </span>
            {product.oldPrice && (
              <span className="text-gray-500 line-through">
                ₦{product.oldPrice.toLocaleString()}
              </span>
            )}
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="px-3 py-1 border rounded-lg"
              >
                -
              </button>
              <span className="text-xl">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="px-3 py-1 border rounded-lg"
              >
                +
              </button>
            </div>

            <button className="w-full bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 transition-colors">
              Add to Cart
            </button>
          </div>

          <div className="prose max-w-none">
            <h2 className="text-xl font-semibold">Description</h2>
            <p>{product.description}</p>

            <h2 className="text-xl font-semibold mt-6">Specifications</h2>
            <ul className="list-disc pl-5">
              {product.specs.map((spec, index) => (
                <li key={index}>{spec}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
