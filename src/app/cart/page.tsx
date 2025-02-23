"use client"
import { useContext } from 'react';
import { CartContext } from '@/context/CartContext';

export default function CartPage() {
  const { items } = useContext(CartContext);

  return (
    <div>
      <div className='flex items-center justify-center p-6'>
        <h2 className='text-gray-800 text-5xl'>Cart</h2>
      </div>
      
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
