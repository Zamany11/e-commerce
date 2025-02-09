import Image from 'next/image';

interface ProductCard {
    title: string;
    price: number;
    oldPrice: number;
    discount: number;
    imageUrl: string;
    category: string;
  }

  interface ProductCardProps {
    productcards: ProductCard[];
    title?: string;
  }

  

  const ProductCard = ({productcards, title}: ProductCardProps) => {
    return (
        <section className='bg-slate-100'>
        <div className="flex flex-col md:container md:mx-auto">
          {/* Flash Sale Header */}
          <div className="bg-orange-500  text-white p-3 flex justify-between items-center">
            <div className="flex items-center gap-2">   
              <span className="font-bold">{title}</span>
            </div>              
          </div>
    
          {/* Product Cards Container */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
            {productcards.map((product, index) => (
              
                <div className="bg-white rounded-lg shadow-md p-3 md:p-4 relative">
                  {/* Discount Badge */}
                  <div className="absolute top-2 left-2 bg-orange-100 text-orange-500 px-2 py-1 rounded-md">
                    -{product.discount}%
                  </div>
      
                    {/* Product Image */}
                                <div className="aspect-square overflow-hidden mb-4">
                                  <Image 
                                    src={product.imageUrl} 
                                    alt={product.title} 
                                    className="w-full h-full object-contain hover:scale-105 transition-transform duration-300"
                                    width={200}
                                    height={200}
                                  />
                                </div>
                      {/* Product Info */}
                      <div className="space-y-2">
                        <h3 className="text-sm md:text-lg text-black font-bold line-clamp-2">{product.title}</h3>
                        <div className="flex flex-col">
                          <span className="text-red-600 font-bold">₦{product.price.toLocaleString()}</span>
                          <span className="text-gray-400 line-through text-sm">₦{product.oldPrice.toLocaleString()}</span>
                        </div>
                      </div>
                    </div>
              
            ))}
          </div>
        </div>
        </section>
      );
  }

  export default ProductCard;