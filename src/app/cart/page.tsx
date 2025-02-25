// components/cart.tsx
'use client'
import { useCartStore } from '@/stores/cart-store'

export default function  Cart () {
  const { items, total, removeFromCart } = useCartStore()
  
  return (
    <div>
      {items.map((item, index) => (
        <div key={item?.id || `fallback-${index}`}>
        {item?.title} - {item?.quantity || 0}
        <button onClick={() => item?.id && removeFromCart(item.id)}>
          Remove
        </button>
        </div>
      ))}
      <p>Total: ${total}</p>
    </div>
  )
}
