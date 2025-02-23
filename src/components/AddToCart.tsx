'use client' // Convert to client component
import { useState } from 'react'
import Link from 'next/link'
import { CartContext } from '@/context/CartContext';
import { useContext } from 'react';

export default function AddToCart({ productId }: { productId: string }) {
  const { addItem } = useContext(CartContext);
  const [quantity, setQuantity] = useState(1)
  

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-4">
        <button 
          onClick={() => setQuantity(Math.max(1, quantity - 1))}
          className="px-3 py-1 border rounded"
        >
          -
        </button>
        
        <label htmlFor="quantity" className="sr-only">Quantity</label>
        <input
          id="quantity"
          type="number"
          min="1"
          value={quantity}
          onChange={(e) => setQuantity(Math.max(1, Number(e.target.value)))}
          className="w-20 text-center border rounded"
          placeholder="Quantity"
        />
        
        <button
          onClick={() => setQuantity(quantity + 1)}
          className="px-3 py-1 border rounded"
        >
          +
        </button>
      </div>

<Link href="/cart">
      <button 
        onClick={() => addItem(productId)}
        className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded transition-colors"
      >
        Add to Cart ({quantity})
      </button>
</Link>
    </div>      
  )
}

