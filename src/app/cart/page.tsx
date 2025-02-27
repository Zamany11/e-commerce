'use client'
import { useCartStore } from '@/stores/cart-store'
import { IconTrash } from '@tabler/icons-react'
import Link from 'next/link'
import {useState, useEffect} from 'react'
import Image from 'next/image'

export default function Cart() {
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([])
  const { items, total, removeFromCart, updateQuantity } = useCartStore()
  const cartItemCount = items.reduce((sum, item) => (sum + (item.quantity || 0)), 0)

  const handleQuantityChange = (itemId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(itemId)
    } else {
        updateQuantity(itemId, quantity)
    }
  }

  useEffect(() => {
    const fetchRelated = async () => {
      if (items.length > 0) {
        const res = await fetch('/api/related-products', {
          method: 'POST',
          body: JSON.stringify({ cartItems: items })
        })
        const data = await res.json()
        setRelatedProducts(data)
      }
    }
    
    fetchRelated()
  }, [items])
  
  return (
    <div className='text-black p-4 md:p-6 container min-h-screen mx-auto'>
      <div className='font-bold text-2xl md:text-3xl py-4 md:py-6 text-center'>
        Your Cart
      </div>
      
      {items.length === 0 ? (
        <div className='py-6 md:py-8'>
          <div className='bg-orange-400 mb-4 md:mb-6'>
            <p className='text-center text-4xl md:text-7xl p-6 md:p-10'>
              Your cart is empty!
            </p>
          </div>
            
          <div className='flex flex-col justify-center items-center'>
            <Link href="/" className='text-center bg-gray-600 py-3 px-8 md:py-4 md:px-10 text-lg md:text-xl rounded-md text-orange-500 hover:text-orange-600 transition-colors'>
              Shop Now
            </Link>
          </div>
        </div>
      ) : (
      <div className='flex flex-col lg:grid lg:grid-cols-3 gap-6 md:gap-8'>
        {/* Left Column - Cart Items */}
        <div className='lg:col-span-2 space-y-4 md:space-y-6 py-5 bg-gray-50 rounded-md px-3'>
          {items.map((item) => (
            <div 
              key={item.id}
              className='flex flex-wrap items-start gap-4 border-b pb-4 md:grid md:grid-cols-4 md:items-center'
            >
              
              <img 
                src={item.images[0]} 
                alt={item.title} 
                className='w-16 h-16 md:w-20 md:h-20 object-cover rounded flex-shrink-0'
              />
              
              
              <div className='flex-1 min-w-[50%] md:col-span-2'>
                <h3 className='font-bold text-base md:text-lg'>{item.title}</h3>
                <p className='text-gray-600 text-sm md:text-base'>${item.price}</p>
              </div>
              
              <div className="flex items-center gap-2">
  <button
    onClick={() => handleQuantityChange(item.id, (item.quantity || 0) - 1)}
    className="w-8 h-8 flex items-center justify-center border rounded bg-orange-500 hover:bg-orange-600 transition-colors"
    disabled={item.quantity === 1}
  >
    -
  </button>
  
  <input
    title='Quantity'
    type="number"
    min="1"
    value={item.quantity}
    onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
    className="w-12 text-center border rounded py-1 px-2"
  />
  
  <button
    onClick={() => handleQuantityChange(item.id, (item.quantity || 0) + 1)}
    className="w-8 h-8 flex items-center justify-center border rounded bg-orange-500 hover:bg-orange-600 transition-colors"
  >
    +
  </button>
</div>

              
              
              <button 
                onClick={() => removeFromCart(item.id)}
                className='text-orange-600 hover:text-orange-800 ml-auto md:ml-0 transition-colors text-right flex items-center gap-x-1.5'
              >
               <IconTrash /> 
               Remove
              </button>
            </div>
          ))}
        </div>

        {/* Right Column - Cart Summary */}
        <div className='lg:col-span-1 bg-gray-50 p-4 md:p-6 rounded-lg h-fit lg:sticky lg:top-6'>
          <h2 className='text-xl md:text-2xl font-bold mb-4 md:mb-6'>Order Summary</h2>
          
          <div className='space-y-3 md:space-y-4'>
            <div className='flex justify-between text-sm md:text-base'>
              <span>Subtotal ({cartItemCount})</span>
              <span className='font-medium'>${total.toFixed(2)}</span>
            </div>
            
            <div className='flex justify-between text-sm md:text-base'>
              <span>Shipping</span>
              <span className='font-medium'>$0.00</span>
            </div>
            
            <div className='flex justify-between text-sm md:text-base'>
              <span>Taxes</span>
              <span className='font-medium'>$0.00</span>
            </div>
            
            <hr className='my-3 md:my-4' />
            
            <div className='flex justify-between text-lg md:text-xl font-bold'>
              <span>Total</span>
              <span>${total.toLocaleString()}</span>
            </div>
          </div>

          <button
            className='w-full bg-orange-500 hover:bg-orange-600 text-white py-2 md:py-3 text-sm md:text-base rounded-lg mt-4 md:mt-6 transition-colors'
          >
            Proceed to Checkout
          </button>
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
      )}
    </div>
  )
}
