'use client' // Convert to client component
import { useState } from 'react'
import { useCart } from '@/hooks/use-cart' // Create custom hook
import { Product } from '@prisma/client'

export function AddToCart({ product }: { product: Product }) {
  const [quantity, setQuantity] = useState(1)
  const { addItem } = useCart() // From your cart store

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

      <button 
        onClick={() => addItem(product, quantity)}
        className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded transition-colors"
      >
        Add to Cart ({quantity})
      </button>
    </div>
  )
}
