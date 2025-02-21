// components/CartItem.tsx
'use client';
import { useState } from 'react';
import { useCart } from '@/hooks/use-cart';

interface CartItemProps {
  item: {
    product: {
      id: string;
      title: string;
      price: number;
      images: string[];
    };
    quantity: number;
  };
  onUpdate: () => void;
}

export function CartItem({ item, onUpdate }: CartItemProps) {
  const [loading, setLoading] = useState(false);
  const { updateQuantity, removeItem } = useCart();

  const handleUpdate = async (newQuantity: number) => {
    setLoading(true);
    await updateQuantity(item.product.id, newQuantity);
    await fetch('/api/cart/update', {
      method: 'POST',
      body: JSON.stringify({
        productId: item.product.id,
        quantity: newQuantity
      })
    });
    setLoading(false);
    onUpdate();
  };

  return (
    <div className="flex items-center justify-between p-4 border rounded-lg">
      <div className="flex items-center gap-4">
        <img 
          src={item.product.images[0]} 
          alt={item.product.title}
          className="w-20 h-20 object-contain"
        />
        <div>
          <h3 className="font-semibold">{item.product.title}</h3>
          <p>₦{item.product.price.toLocaleString()}</p>
        </div>
      </div>
      
      <div className="flex items-center gap-2">
        <button 
          onClick={() => handleUpdate(item.quantity - 1)}
          disabled={loading}
        >
          -
        </button>
        <input
          type="number"
          value={item.quantity}
          onChange={(e) => handleUpdate(Number(e.target.value))}
          className="w-12 text-center"
          title="Quantity"
          placeholder="Quantity"
        />
        <button 
          onClick={() => handleUpdate(item.quantity + 1)}
          disabled={loading}
        >
          +
        </button>
      </div>
      
      <button 
        onClick={() => {
          removeItem(item.product.id);
          handleUpdate(0);
        }}
        className="text-red-500"
      >
        Remove
      </button>
    </div>
  );
}
