// components/cart.tsx
'use client'
import { useCart } from '@/stores/cart-store'

export const Cart = () => {
  const { items, total, addItem, removeItem } = useCart()
  
  return (
    <div>
      {items.map(item => (
        <div key={item.id}>
          {item.name} - {item.quantity}
          <button onClick={() => removeItem(item.id)}>Remove</button>
        </div>
      ))}
      <p>Total: ${total}</p>
    </div>
  )
}
