"use client"
import { useEffect, useState, createContext } from 'react'; 

type CartItem = {
  productId: string;
  quantity: number;
};

type CartContextType = {
  items: CartItem[];
  addItem: (productId: string) => void;
  removeItem: (productId: string) => void;
};

export const CartContext = createContext<CartContextType>({
  items: [],
  addItem: () => {},
  removeItem: () => {},
});

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>(() => {
    // Load from localStorage on initial mount
    if (typeof window === 'undefined') return [];
    const saved = localStorage.getItem('cart');
    return saved ? JSON.parse(saved) : [];
  });

  // Save to localStorage on every cart change
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(items));
  }, [items]);

  // Sync across browser tabs
  useEffect(() => {
    const handler = (e: StorageEvent) => {
      if (e.key === 'cart') {
        setItems(e.newValue ? JSON.parse(e.newValue) : []);
      }
    };
    window.addEventListener('storage', handler);
    return () => window.removeEventListener('storage', handler);
  }, []);

  const addItem = (productId: string) => {
    setItems(prev => {
      const existing = prev.find(item => item.productId === productId);
      return existing 
        ? prev.map(item => 
            item.productId === productId 
              ? {...item, quantity: item.quantity + 1} 
              : item
          )
        : [...prev, { productId, quantity: 1 }];
    });
  };

  const removeItem = (productId: string) => {
    setItems(prev => prev.filter(item => item.productId !== productId));
  };

  return (
    <CartContext.Provider value={{ items, addItem, removeItem }}>
      {children}
    </CartContext.Provider>
  );
}
