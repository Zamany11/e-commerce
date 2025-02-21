// app/cart/page.tsx
'use client';
import { useEffect } from 'react';
import { useCart } from '@/hooks/use-cart';
import { CartItem } from '@/components/CartItem';

const CartPage = () => {
  const { items, syncCart, isSyncing } = useCart();

  // Sync cart on mount and periodically
  useEffect(() => {
    syncCart();
    const interval = setInterval(syncCart, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section>
      <div className='container mx-auto p-4'>
        <h1 className='text-5xl text-center py-6'>Your Cart</h1>
        
        {isSyncing && <div className="text-center p-2">Updating cart...</div>}
        
        <div className="grid gap-4">
          {items.map(item => (
            <CartItem 
              key={item.product.id}
              item={item}
              onUpdate={syncCart}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
