'use client'
import { useCartStore } from '@/stores/cart-store'
import Link from 'next/link'

export default function Cart() {
  const { items, total, removeFromCart } = useCartStore()
  const cartItemCount = items.reduce((sum, item) => (sum + (item.quantity || 0)), 0)
  
  return (
    <div className='text-black p-6 container min-h-screen mx-auto'>
      <div className='font-bold text-3xl py-6 text-center'>
        Your Cart
      </div>
      
      {items.length === 0 ? (
        <div className='py-8'>
          <div className='bg bg-orange-400 mb-6'>
            <p className='text-center text-7xl p-10'>Your cart is empty!</p>
          </div>
            
          <div className='flex flex-col justify-center items-center'>
            <Link href="/" className='text-center bg-gray-600 py-4 px-10 text-xl rounded-md text-orange-500 hover:text-orange-600 transition-colors'>
            Shop Now
          </Link>
          </div>
          
        </div>
      ): (
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
        {/* Left Column - Cart Items */}
        <div className='lg:col-span-2 space-y-6'>
          {items.map((item) => (
            <div 
              key={item.id}
              className='grid grid-cols-5 items-center gap-4 border-b pb-4'
            >
              <img 
                src={item.images[0]} 
                alt={item.title} 
                className='w-20 h-20 object-cover rounded'
              />
              
              <div className='col-span-2'>
                <h3 className='font-medium'>{item.title}</h3>
                <p className='text-gray-600'>${item.price}</p>
              </div>
              
              <div className='text-center'>
                <span className='font-medium'>Qty:</span> {item.quantity}
              </div>
              
              <div className='text-right'>
                <p className='font-medium'>
                  ${(item.price * (item.quantity || 0)).toFixed(2)}
                </p>
              </div>
              
              <button 
                onClick={() => removeFromCart(item.id)}
                className='text-red-600 hover:text-red-800 transition-colors text-left'
              >
                Remove
              </button>
            </div>
          ))}
        </div>

        {/* Right Column - Cart Summary */}
        <div className='lg:col-span-1 bg-gray-50 p-6 rounded-lg h-fit sticky top-6'>
          <h2 className='text-2xl font-bold mb-6'>Order Summary</h2>
          
          <div className='space-y-4'>
            <div className='flex justify-between'>
              <span>Subtotal ({cartItemCount})</span>
              <span className='font-medium'>${total.toFixed(2)}</span>
            </div>
            
            <div className='flex justify-between'>
              <span>Shipping</span>
              <span className='font-medium'>$0.00</span>
            </div>
            
            <div className='flex justify-between'>
              <span>Taxes</span>
              <span className='font-medium'>$0.00</span>
            </div>
            
            <hr className='my-4' />
            
            <div className='flex justify-between text-xl font-bold'>
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>

          <button
            className='w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg mt-6 transition-colors'
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
      )}
    </div>
  )
}
