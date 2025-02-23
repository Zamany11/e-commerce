"use client"
import { useContext } from 'react';
import { CartContext } from '@/lib/cart';

export default function CartPage() {
  const { items } = useContext(CartContext);

  return (
    <div>
      <h2>Cart Items ({items.length})</h2>
      <ul>
        {items.map(item => (
          <li key={item.productId}>
            Product {item.productId} - Qty: {item.quantity}
          </li>
        ))}
      </ul>
    </div>
  );
}
