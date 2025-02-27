'use client'
import { useEffect, useState } from 'react'
import { useCartStore } from '@/stores/cart-store' 
import { Product } from '@/types/product'
import { useRouter } from 'next/navigation'
import toast  from 'react-hot-toast';

export default function AddToCart({ product }: { product: Product }) {
  const router = useRouter()
  const [localQuantity, setLocalQuantity] = useState(1)
  const { items, addToCart, updateQuantity } = useCartStore()

  const existingItem = items.find((item) => item.id === product.id)

  useEffect(() => {
    if(existingItem && typeof existingItem.quantity === 'number') {
      setLocalQuantity(existingItem.quantity)
    }
  }, [existingItem])

  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity < 1) return
    
    if (existingItem) {
      // Update cart store directly if item exists
      updateQuantity(product.id, newQuantity)
    } else {
      // Update local state if not in cart yet
      setLocalQuantity(newQuantity)
    }
  }


  const handleAddtoCart = ()  => { 
    if(!existingItem) {
      addToCart(product, localQuantity)
      toast.success('Product added successfully!', {
        duration: 3000,
      });
    } else {
      toast.success('Cart updated successfully!', {
        duration: 3000,
      });
    }; 
    
    router.push('/cart')
  }

  return (
    <div className="flex flex-col gap-4">
      {existingItem && 
      <div className="flex items-center gap-4">
      <button
    onClick={() => handleQuantityChange((existingItem?.quantity || localQuantity) - 1)}
    className="w-8 h-8 flex items-center justify-center border rounded "
    disabled={(existingItem?.quantity || localQuantity) === 1}
  >
    -
  </button>
        
        <label htmlFor="quantity" className="sr-only">Quantity</label>
        <input
          id="quantity"
          type="number"
          min="1"
          value={(existingItem?.quantity || localQuantity)}
          onChange={(e) => handleQuantityChange(Number(e.target.value))}
          className="w-20 text-center border rounded"
          placeholder="Quantity"
        />
        
        <button
          onClick={() => handleQuantityChange((existingItem?.quantity || localQuantity) + 1)}
          className="px-3 py-1 border rounded"
        >
          +
        </button>
      </div>
}

     
        <button 
          onClick={handleAddtoCart}
          className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded transition-colors"
        >
          {existingItem ? 'Update Cart' : 'Add to Cart'} ({(existingItem?.quantity || localQuantity)})
        </button>
    </div>      
  )
}

