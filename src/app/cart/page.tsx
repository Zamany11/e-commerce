"use client"
import { useContext } from 'react';
import { CartContext } from '@/context/CartContext';

export default function CartPage() {
  const { items, removeFromCart, updateQuantity } = useContext(CartContext);
  const total = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  if (items.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px]">
        <h2 className="text-2xl font-semibold mb-4">Your cart is empty</h2>
        <p className="text-gray-600">Add some products to your cart to see them here.</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className='flex items-center justify-center mb-8'>
        <h2 className='text-gray-800 text-4xl font-bold'>Shopping Cart</h2>
      </div>
      
      <ul className="divide-y divide-gray-200">
        {items.map(item => (
          <li key={item.productId} className="py-6 flex items-center">
            <div className="flex-1">
              <h3 className="text-lg font-medium">{item.name}</h3>
              <p className="text-gray-600">${item.price}</p>
            </div>
            <div className="flex items-center gap-4">
              <button 
                onClick={() => updateQuantity(item.productId, item.quantity - 1)}
                className="px-3 py-1 border rounded-md"
              >
                -
              </button>
              <span>{item.quantity}</span>
              <button 
                onClick={() => updateQuantity(item.productId, item.quantity + 1)}
                className="px-3 py-1 border rounded-md"
              >
                +
              </button>
              <button 
                onClick={() => removeFromCart(item.productId)}
                className="ml-4 text-red-600"
              >
                Remove
              </button>
            </div>
          </li>
        ))}
      </ul>

      <div className="mt-8 border-t pt-6">
        <div className="flex justify-between items-center">
          <span className="text-2xl font-semibold">Total:</span>
          <span className="text-2xl">${total.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
}
