// hooks/use-cart.ts
import { create } from 'zustand'
import { Product } from '@prisma/client'

type CartItem = {
  product: Product
  quantity: number
}

type CartStore = {
  items: CartItem[]
  isSyncing: boolean;
  syncCart: () => Promise<void>;
  addItem: (product: Product, quantity: number) => void
  removeItem: (productId: string) => void
  updateQuantity: (productId: string, quantity: number) => void
}

export const useCart = create<CartStore>((set) => ({
    items: [],
    addItem: (product, quantity) => set((state) => {
      const existing = state.items.find(item => item.product.id === product.id);
      return {
        items: existing 
          ? state.items.map(item => 
              item.product.id === product.id 
                ? { ...item, quantity: item.quantity + quantity }
                : item
            )
          : [...state.items, { product, quantity }]
      };
    }),
    removeItem: (productId: string) => set((state) => ({
      items: state.items.filter(item => item.product.id !== productId)
    })),
    updateQuantity: (productId: string, newQuantity: number) => set((state) => ({
      items: state.items.map(item => 
        item.product.id === productId 
          ? { ...item, quantity: Math.max(1, newQuantity) } 
          : item
      )
    })),
    isSyncing: false,
  
  syncCart: async () => {
    try {
      set({ isSyncing: true });
      const response = await fetch('/api/cart');
      const serverCart = await response.json();
      set({ items: serverCart.items });
    } finally {
      set({ isSyncing: false });
    }
  }
  }));
  